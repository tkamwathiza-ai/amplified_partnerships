import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import {
  Search,
  LogOut,
  Download,
  Trash2,
  Mail,
  MailOpen,
  X,
  RefreshCw,
  Lock
} from 'lucide-react';
import '../Admin.css';

/* Same API address logic as the Contact page */
const API_BASE =
  import.meta.env.VITE_API_URL ||
  `${window.location.protocol}//${window.location.hostname}:8001`;

const TOKEN_KEY = 'amp_admin_token';
const PAGE_SIZE = 15;


/* Database times are stored in UTC; show them in the viewer's local time */
function formatDate(value) {
  if (!value) return '';
  const date = new Date(String(value).replace(' ', 'T') + 'Z');
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}


function Admin() {

  const [token, setToken] = useState(() => {
    try {
      return sessionStorage.getItem(TOKEN_KEY) || '';
    } catch (_) {
      return '';
    }
  });

  /* Login */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  /* Inbox */
  const [messages, setMessages] = useState([]);
  const [total, setTotal] = useState(0);
  const [unread, setUnread] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /* Selected enquiry (detail panel) */
  const [selected, setSelected] = useState(null);

  const authHeaders = { Authorization: `Bearer ${token}` };
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));


  /* Keep this page out of search engines */

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);


  /* Session helpers */

  const logout = useCallback((notice = '') => {
    try {
      sessionStorage.removeItem(TOKEN_KEY);
    } catch (_) {
      /* ignore */
    }
    setToken('');
    setMessages([]);
    setSelected(null);
    setUsername('');
    setPassword('');
    setLoginError(notice);
  }, []);


  const handleError = useCallback(
    (err) => {
      if (err.response && err.response.status === 401) {
        logout('Your session has expired. Please sign in again.');
        return;
      }

      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Could not reach the server. Please try again.');
      }
    },
    [logout]
  );


  /* Login */

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError('');

    try {
      const { data } = await axios.post(
        `${API_BASE}/api/admin/login`,
        { username, password },
        { timeout: 15000 }
      );

      try {
        sessionStorage.setItem(TOKEN_KEY, data.token);
      } catch (_) {
        /* ignore */
      }

      setToken(data.token);
      setUsername('');
      setPassword('');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setLoginError(err.response.data.error);
      } else {
        setLoginError('Could not reach the server. Please try again.');
      }
    } finally {
      setLoggingIn(false);
    }
  };


  /* Debounce the search box */

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
      setPage(1);
    }, 350);

    return () => clearTimeout(timer);
  }, [search]);


  /* Load enquiries */

  const load = useCallback(async () => {
    if (!token) return;

    setLoading(true);
    setError('');

    try {
      const { data } = await axios.get(`${API_BASE}/api/admin/messages`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          page,
          limit: PAGE_SIZE,
          search: debouncedSearch,
          unread: unreadOnly ? 1 : 0
        },
        timeout: 15000
      });

      setMessages(data.messages);
      setTotal(data.total);
      setUnread(data.unread);
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  }, [token, page, debouncedSearch, unreadOnly, handleError]);


  useEffect(() => {
    load();
  }, [load]);


  /* Actions */

  const setReadState = async (message, isRead) => {
    try {
      await axios.patch(
        `${API_BASE}/api/admin/messages/${message.id}`,
        { is_read: isRead },
        { headers: authHeaders, timeout: 15000 }
      );

      setMessages((current) =>
        current.map((m) =>
          m.id === message.id ? { ...m, is_read: isRead ? 1 : 0 } : m
        )
      );

      setSelected((current) =>
        current && current.id === message.id
          ? { ...current, is_read: isRead ? 1 : 0 }
          : current
      );

      setUnread((count) => Math.max(0, count + (isRead ? -1 : 1)));
    } catch (err) {
      handleError(err);
    }
  };


  const openMessage = (message) => {
    setSelected(message);

    if (!message.is_read) {
      setReadState(message, true);
    }
  };


  const deleteMessage = async (message) => {
    const confirmed = window.confirm(
      `Delete the enquiry from ${message.name}? This cannot be undone.`
    );

    if (!confirmed) return;

    try {
      await axios.delete(`${API_BASE}/api/admin/messages/${message.id}`, {
        headers: authHeaders,
        timeout: 15000
      });

      setSelected(null);

      // Step back a page if that was the last item on this one
      if (messages.length === 1 && page > 1) {
        setPage(page - 1);
      } else {
        load();
      }
    } catch (err) {
      handleError(err);
    }
  };


  const exportCsv = async () => {
    try {
      const response = await axios.get(
        `${API_BASE}/api/admin/messages/export`,
        {
          headers: authHeaders,
          responseType: 'blob',
          timeout: 30000
        }
      );

      const url = window.URL.createObjectURL(response.data);
      const link = document.createElement('a');
      link.href = url;
      link.download = `enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      handleError(err);
    }
  };


  /* =========================================================
     LOGIN SCREEN
     ========================================================= */

  if (!token) {
    return (
      <div className="admin-login-page">

        <form className="admin-login-card" onSubmit={handleLogin}>

          <div className="admin-login-icon">
            <Lock size={24} />
          </div>

          <h1>Admin sign in</h1>

          <p>
            Enter your admin username and password to view website enquiries.
          </p>

          <label htmlFor="admin-username">
            Username
          </label>

          <input
            id="admin-username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            autoFocus
            required
          />

          <label htmlFor="admin-password">
            Password
          </label>

          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          {loginError && (
            <p className="admin-error" role="alert">
              {loginError}
            </p>
          )}

          <button
            type="submit"
            className="admin-primary-button"
            disabled={loggingIn}
          >
            {loggingIn ? 'Signing in...' : 'Sign in'}
          </button>

        </form>

      </div>
    );
  }


  /* =========================================================
     INBOX
     ========================================================= */

  return (
    <div className="admin-page">

      {/* Header */}

      <div className="admin-header">

        <div>
          <p className="admin-eyebrow">ADMIN</p>
          <h1>Website enquiries</h1>
          <p className="admin-subtitle">
            {total} {total === 1 ? 'enquiry' : 'enquiries'}
            {unread > 0 && ` · ${unread} unread`}
          </p>
        </div>

        <div className="admin-header-actions">

          <button
            type="button"
            className="admin-button"
            onClick={load}
            disabled={loading}
          >
            <RefreshCw size={16} />
            Refresh
          </button>

          <button
            type="button"
            className="admin-button"
            onClick={exportCsv}
          >
            <Download size={16} />
            Export CSV
          </button>

          <button
            type="button"
            className="admin-button"
            onClick={() => logout()}
          >
            <LogOut size={16} />
            Sign out
          </button>

        </div>

      </div>


      {/* Toolbar */}

      <div className="admin-toolbar">

        <div className="admin-search">
          <Search size={18} />

          <input
            type="search"
            placeholder="Search name, organisation, email, service or message"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <label className="admin-filter">
          <input
            type="checkbox"
            checked={unreadOnly}
            onChange={(e) => {
              setUnreadOnly(e.target.checked);
              setPage(1);
            }}
          />
          Unread only
        </label>

      </div>


      {error && (
        <p className="admin-error" role="alert">
          {error}
        </p>
      )}


      {/* List */}

      <div className="admin-table-wrapper">

        <table className="admin-table">

          <thead>
            <tr>
              <th aria-label="Status" />
              <th>Received</th>
              <th>Name</th>
              <th className="admin-hide-mobile">Organisation</th>
              <th className="admin-hide-mobile">Service</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>

            {messages.length === 0 && !loading && (
              <tr>
                <td colSpan="6" className="admin-empty">
                  {debouncedSearch || unreadOnly
                    ? 'No enquiries match your search.'
                    : 'No enquiries yet.'}
                </td>
              </tr>
            )}

            {messages.map((m) => (
              <tr
                key={m.id}
                className={m.is_read ? '' : 'admin-row-unread'}
                onClick={() => openMessage(m)}
              >
                <td className="admin-status">
                  {m.is_read ? (
                    <MailOpen size={16} aria-label="Read" />
                  ) : (
                    <Mail size={16} aria-label="Unread" />
                  )}
                </td>

                <td className="admin-nowrap">{formatDate(m.created_at)}</td>
                <td>{m.name}</td>
                <td className="admin-hide-mobile">{m.organization}</td>
                <td className="admin-hide-mobile">{m.service}</td>
                <td>{m.email}</td>
              </tr>
            ))}

          </tbody>

        </table>

        {loading && (
          <p className="admin-loading">Loading...</p>
        )}

      </div>


      {/* Pagination */}

      <div className="admin-pagination">

        <button
          type="button"
          className="admin-button"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page <= 1}
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          type="button"
          className="admin-button"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page >= totalPages}
        >
          Next
        </button>

      </div>


      {/* Detail panel */}

      {selected && (
        <div
          className="admin-overlay"
          onClick={() => setSelected(null)}
        >

          <div
            className="admin-detail"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="admin-detail-header">

              <div>
                <h2>{selected.name}</h2>
                <p>{formatDate(selected.created_at)}</p>
              </div>

              <button
                type="button"
                className="admin-icon-button"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>

            </div>

            <dl className="admin-detail-grid">

              <div>
                <dt>Organisation</dt>
                <dd>{selected.organization || '—'}</dd>
              </div>

              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${selected.email}`}>
                    {selected.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt>Phone</dt>
                <dd>
                  {selected.phone ? (
                    <a href={`tel:${selected.phone}`}>{selected.phone}</a>
                  ) : (
                    '—'
                  )}
                </dd>
              </div>

              <div>
                <dt>Service required</dt>
                <dd>{selected.service || '—'}</dd>
              </div>

              <div className="admin-detail-wide">
                <dt>Project / assignment title</dt>
                <dd>{selected.project_title || '—'}</dd>
              </div>

            </dl>

            <div className="admin-detail-message">
              <h3>Message</h3>
              <p>{selected.message}</p>
            </div>

            <div className="admin-detail-actions">

              <a
                className="admin-primary-button"
                href={`mailto:${selected.email}?subject=${encodeURIComponent(
                  'Re: your enquiry to Amplify Partnerships'
                )}`}
              >
                <Mail size={16} />
                Reply by email
              </a>

              <button
                type="button"
                className="admin-button"
                onClick={() => setReadState(selected, !selected.is_read)}
              >
                {selected.is_read ? 'Mark as unread' : 'Mark as read'}
              </button>

              <button
                type="button"
                className="admin-button admin-danger"
                onClick={() => deleteMessage(selected)}
              >
                <Trash2 size={16} />
                Delete
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Admin;