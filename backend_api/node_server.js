// Express API that reuses the project's SQLite database (db.sqlite3)
// Location: backend_api/node_server.js

const path = require('path');
const crypto = require('crypto');
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

// Optional: loads backend_api/.env if the "dotenv" package is installed
try {
  require('dotenv').config();
} catch (_) {
  /* dotenv not installed - environment variables must be set another way */
}


/* =========================================================
   CONFIG
   ========================================================= */

const DB_PATH = process.env.DB_PATH || path.resolve(__dirname, '..', 'db.sqlite3');
const PORT = process.env.PORT || 8001;

// 0.0.0.0 lets other devices on your network (e.g. your phone) reach the API.
// Set HOST=127.0.0.1 to limit it to this machine only.
const HOST = process.env.HOST || '0.0.0.0';

// Restrict which websites may call the API in production, e.g.
// CORS_ORIGINS=https://www.yourdomain.com,https://yourdomain.com
const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',').map((o) => o.trim())
  : null;

// Admin area. If ADMIN_USERNAME or ADMIN_PASSWORD is not set, the admin
// endpoints stay disabled.
const ADMIN_USERNAME = (process.env.ADMIN_USERNAME || '').trim();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';
const ADMIN_ENABLED = Boolean(ADMIN_USERNAME && ADMIN_PASSWORD);

// Used to sign admin session tokens. Set a long random value in production so
// sessions survive restarts. If unset, a new one is generated on each start.
const SESSION_SECRET =
  process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex');

const SESSION_HOURS = 8;

const app = express();
app.set('trust proxy', 1);
app.use(cors(allowedOrigins ? { origin: allowedOrigins } : undefined));
app.use(express.json({ limit: '100kb' }));


/* =========================================================
   DATABASE
   ========================================================= */

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Failed to open SQLite DB at', DB_PATH, err.message);
    process.exit(1);
  }
  console.log('Connected to SQLite DB at', DB_PATH);
});

// Small promise wrappers so route handlers can use async/await
const dbAll = (sql, params = []) =>
  new Promise((resolve, reject) =>
    db.all(sql, params, (err, rows) => (err ? reject(err) : resolve(rows)))
  );

const dbGet = (sql, params = []) =>
  new Promise((resolve, reject) =>
    db.get(sql, params, (err, row) => (err ? reject(err) : resolve(row)))
  );

const dbRun = (sql, params = []) =>
  new Promise((resolve, reject) =>
    db.run(sql, params, function (err) {
      if (err) return reject(err);
      resolve({ lastID: this.lastID, changes: this.changes });
    })
  );

async function initDatabase() {
  // These only create the tables if they do not already exist, so existing
  // Django data is untouched and the API keeps working once Django is removed.
  await dbRun(`CREATE TABLE IF NOT EXISTS company_profile_service (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(200) NOT NULL,
    icon_name VARCHAR(100) NOT NULL DEFAULT '',
    description TEXT NOT NULL DEFAULT '',
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`);

  await dbRun(`CREATE TABLE IF NOT EXISTS company_profile_contactmessage (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(200) NOT NULL,
    organization VARCHAR(200) NOT NULL DEFAULT '',
    email VARCHAR(254) NOT NULL,
    phone VARCHAR(50) NOT NULL DEFAULT '',
    service VARCHAR(200) NOT NULL DEFAULT '',
    project_title VARCHAR(200) NOT NULL DEFAULT '',
    message TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`);

  // Add an "is_read" column for the admin inbox if it is not there yet.
  // Existing enquiries start as unread.
  const columns = await dbAll(`PRAGMA table_info(company_profile_contactmessage)`);
  if (!columns.some((c) => c.name === 'is_read')) {
    await dbRun(
      `ALTER TABLE company_profile_contactmessage
       ADD COLUMN is_read INTEGER NOT NULL DEFAULT 0`
    );
    console.log('Added is_read column to company_profile_contactmessage');
  }
}


/* =========================================================
   HELPERS
   ========================================================= */

const clean = (value) => (typeof value === 'string' ? value.trim() : '');

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = {
  name: 200,
  organization: 200,
  email: 254,
  phone: 50,
  service: 200,
  project_title: 200,
  message: 5000
};


/* =========================================================
   ADMIN AUTHENTICATION
   ========================================================= */

const sign = (payload) =>
  crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url');

function createToken() {
  const payload = Buffer.from(
    JSON.stringify({ exp: Date.now() + SESSION_HOURS * 60 * 60 * 1000 })
  ).toString('base64url');

  return `${payload}.${sign(payload)}`;
}

function verifyToken(token) {
  if (typeof token !== 'string') return false;

  const [payload, signature] = token.split('.');
  if (!payload || !signature) return false;

  const expected = Buffer.from(sign(payload));
  const received = Buffer.from(signature);

  if (
    expected.length !== received.length ||
    !crypto.timingSafeEqual(expected, received)
  ) {
    return false;
  }

  try {
    const { exp } = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return typeof exp === 'number' && exp > Date.now();
  } catch (_) {
    return false;
  }
}

// Compare credentials without leaking length or timing information.
// Both values are always checked, so a wrong username takes as long as a
// wrong password.
const digest = (value) =>
  crypto.createHash('sha256').update(String(value)).digest();

function credentialsMatch(username, password) {
  const userOk = crypto.timingSafeEqual(digest(username), digest(ADMIN_USERNAME));
  const passOk = crypto.timingSafeEqual(digest(password), digest(ADMIN_PASSWORD));
  return userOk && passOk;
}

function requireAdmin(req, res, next) {
  if (!ADMIN_ENABLED) {
    return res
      .status(503)
      .json({ error: 'Admin access is not configured on the server.' });
  }

  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';

  if (!verifyToken(token)) {
    return res.status(401).json({ error: 'Not authorised.' });
  }

  next();
}

// Simple in-memory limit on failed logins: 5 per 15 minutes per IP
const failedLogins = new Map();
const LOGIN_WINDOW_MS = 15 * 60 * 1000;
const LOGIN_MAX_FAILURES = 5;

function loginBlocked(ip) {
  const entry = failedLogins.get(ip);
  if (!entry) return false;
  if (entry.resetAt < Date.now()) {
    failedLogins.delete(ip);
    return false;
  }
  return entry.count >= LOGIN_MAX_FAILURES;
}

function recordFailedLogin(ip) {
  const entry = failedLogins.get(ip);
  if (!entry || entry.resetAt < Date.now()) {
    failedLogins.set(ip, { count: 1, resetAt: Date.now() + LOGIN_WINDOW_MS });
  } else {
    entry.count += 1;
  }
}


/* =========================================================
   PUBLIC ROUTES
   ========================================================= */

// GET /api/services/ -> return services table rows
app.get('/api/services/', async (req, res) => {
  try {
    const rows = await dbAll(
      `SELECT id, title, icon_name, description, display_order, created_at
       FROM company_profile_service
       ORDER BY display_order ASC, created_at DESC`
    );
    return res.json(rows);
  } catch (err) {
    console.error('DB error fetching services:', err);
    return res.status(500).json({ error: 'Database error' });
  }
});


// POST /api/contact/ -> validate and insert into contact table
app.post('/api/contact/', async (req, res) => {
  const body = req.body || {};

  const data = {
    name: clean(body.name),
    organization: clean(body.organization),
    email: clean(body.email),
    phone: clean(body.phone),
    service: clean(body.service),
    project_title: clean(body.project_title),
    message: clean(body.message)
  };

  if (!data.name || !data.email || !data.message) {
    return res
      .status(400)
      .json({ error: 'Name, email and message are required.' });
  }

  if (!EMAIL_PATTERN.test(data.email)) {
    return res
      .status(400)
      .json({ error: 'Please enter a valid email address.' });
  }

  for (const [field, max] of Object.entries(LIMITS)) {
    if (data[field].length > max) {
      return res
        .status(400)
        .json({ error: `${field} is too long (maximum ${max} characters).` });
    }
  }

  try {
    const result = await dbRun(
      `INSERT INTO company_profile_contactmessage
       (name, organization, email, phone, service, project_title, message, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))`,
      [
        data.name,
        data.organization,
        data.email,
        data.phone,
        data.service,
        data.project_title,
        data.message
      ]
    );

    return res
      .status(201)
      .json({ message: 'Form submitted successfully!', id: result.lastID });
  } catch (err) {
    console.error('DB error inserting contact message:', err);
    return res.status(500).json({ error: 'Database error' });
  }
});


// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));


/* =========================================================
   ADMIN ROUTES
   ========================================================= */

// POST /api/admin/login -> returns a session token
app.post('/api/admin/login', (req, res) => {
  if (!ADMIN_ENABLED) {
    return res
      .status(503)
      .json({ error: 'Admin access is not configured on the server.' });
  }

  if (loginBlocked(req.ip)) {
    return res
      .status(429)
      .json({ error: 'Too many failed attempts. Please try again in 15 minutes.' });
  }

  const username =
    typeof req.body?.username === 'string' ? req.body.username.trim() : '';
  const password =
    typeof req.body?.password === 'string' ? req.body.password : '';

  if (!credentialsMatch(username, password)) {
    recordFailedLogin(req.ip);
    return res.status(401).json({ error: 'Incorrect username or password.' });
  }

  failedLogins.delete(req.ip);
  return res.json({ token: createToken(), expiresInHours: SESSION_HOURS });
});


// GET /api/admin/messages?page=1&limit=15&search=&unread=0
app.get('/api/admin/messages', requireAdmin, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 15));
    const search = clean(req.query.search);
    const unreadOnly = req.query.unread === '1';

    const where = [];
    const params = [];

    if (search) {
      const term = `%${search}%`;
      where.push(
        `(name LIKE ? OR organization LIKE ? OR email LIKE ?
          OR service LIKE ? OR project_title LIKE ? OR message LIKE ?)`
      );
      params.push(term, term, term, term, term, term);
    }

    if (unreadOnly) {
      where.push('is_read = 0');
    }

    const whereSql = where.length ? `WHERE ${where.join(' AND ')}` : '';

    const { total } = await dbGet(
      `SELECT COUNT(*) AS total FROM company_profile_contactmessage ${whereSql}`,
      params
    );

    const { unread } = await dbGet(
      `SELECT COUNT(*) AS unread FROM company_profile_contactmessage WHERE is_read = 0`
    );

    const messages = await dbAll(
      `SELECT id, name, organization, email, phone, service,
              project_title, message, created_at, is_read
       FROM company_profile_contactmessage
       ${whereSql}
       ORDER BY id DESC
       LIMIT ? OFFSET ?`,
      [...params, limit, (page - 1) * limit]
    );

    return res.json({ messages, total, unread, page, limit });
  } catch (err) {
    console.error('DB error listing messages:', err);
    return res.status(500).json({ error: 'Database error' });
  }
});


// GET /api/admin/messages/export -> CSV download of every enquiry
app.get('/api/admin/messages/export', requireAdmin, async (req, res) => {
  try {
    const rows = await dbAll(
      `SELECT id, created_at, name, organization, email, phone,
              service, project_title, message, is_read
       FROM company_profile_contactmessage
       ORDER BY id DESC`
    );

    // Wrap in quotes, double any quotes, and neutralise spreadsheet formulas
    const cell = (value) => {
      let text = value === null || value === undefined ? '' : String(value);
      if (/^[=+\-@\t\r]/.test(text)) text = `'${text}`;
      return `"${text.replace(/"/g, '""')}"`;
    };

    const header = [
      'ID', 'Received (UTC)', 'Name', 'Organisation', 'Email', 'Phone',
      'Service', 'Project title', 'Message', 'Read'
    ];

    const lines = [header.map(cell).join(',')];

    for (const r of rows) {
      lines.push(
        [
          r.id, r.created_at, r.name, r.organization, r.email, r.phone,
          r.service, r.project_title, r.message, r.is_read ? 'Yes' : 'No'
        ]
          .map(cell)
          .join(',')
      );
    }

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="enquiries.csv"'
    );

    // BOM so Excel reads the file as UTF-8
    return res.send('\uFEFF' + lines.join('\r\n'));
  } catch (err) {
    console.error('DB error exporting messages:', err);
    return res.status(500).json({ error: 'Database error' });
  }
});


// PATCH /api/admin/messages/:id  { is_read: true | false }
app.patch('/api/admin/messages/:id', requireAdmin, async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isInteger(id) || typeof req.body?.is_read !== 'boolean') {
    return res.status(400).json({ error: 'Invalid request.' });
  }

  try {
    const result = await dbRun(
      `UPDATE company_profile_contactmessage SET is_read = ? WHERE id = ?`,
      [req.body.is_read ? 1 : 0, id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Enquiry not found.' });
    }

    return res.json({ id, is_read: req.body.is_read });
  } catch (err) {
    console.error('DB error updating message:', err);
    return res.status(500).json({ error: 'Database error' });
  }
});


// DELETE /api/admin/messages/:id
app.delete('/api/admin/messages/:id', requireAdmin, async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: 'Invalid request.' });
  }

  try {
    const result = await dbRun(
      `DELETE FROM company_profile_contactmessage WHERE id = ?`,
      [id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Enquiry not found.' });
    }

    return res.json({ id, deleted: true });
  } catch (err) {
    console.error('DB error deleting message:', err);
    return res.status(500).json({ error: 'Database error' });
  }
});


/* =========================================================
   ERROR HANDLING
   ========================================================= */

app.use((err, req, res, next) => {
  if (err && err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON in request body.' });
  }
  console.error('Unexpected error:', err);
  return res.status(500).json({ error: 'Server error' });
});


/* =========================================================
   START
   ========================================================= */

let server;

initDatabase()
  .then(() => {
    server = app.listen(PORT, HOST, () => {
      console.log(
        `Node API server listening on http://localhost:${PORT} (bound to ${HOST})`
      );

      if (!ADMIN_ENABLED) {
        console.warn(
          'ADMIN_USERNAME and/or ADMIN_PASSWORD is not set - the admin area is disabled.'
        );
      }

      if (!process.env.SESSION_SECRET) {
        console.warn(
          'SESSION_SECRET is not set - admin sessions will end whenever the server restarts.'
        );
      }
    });
  })
  .catch((err) => {
    console.error('Failed to initialise the database:', err);
    process.exit(1);
  });

// Close the database cleanly on Ctrl+C
process.on('SIGINT', () => {
  console.log('\nShutting down...');
  const finish = () => db.close(() => process.exit(0));
  if (server) {
    server.close(finish);
  } else {
    finish();
  }
});