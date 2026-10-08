Node backend (minimal)

This is a minimal Express server intended to replace the Django API endpoints while reusing the existing SQLite database (db.sqlite3) in the project root.

Files:
- node_server.js: Express server providing GET /api/services/ and POST /api/contact/
- package.json: npm manifest for the Node server

To run:
1. cd backend_api
2. npm install
3. npm run dev (or npm start)

By default the server listens on port 8001. The React frontend was updated to post contact forms to http://127.0.0.1:8001/api/contact/.

Caution:
- This server directly reads/writes the existing db.sqlite3 file. Stop Django before using this server to avoid race conditions.
- Confirm the table names company_profile_service and company_profile_contactmessage exist in db.sqlite3 before using in production.
