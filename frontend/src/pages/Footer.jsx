import React from 'react';

function Footer() {
  return (
    <div style={{  display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem',backgroundColor: '#0f172a', color: '#94a3b8', padding: '2.5rem 1rem', textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p>Email: <a href="mailto:bkzikomakuka@gmail.com" style={{ fontFamily:'sans-serif',color: '#ffffff', textDecoration: 'none' }}>
          bkzikomakuka@gmail.com
        </a>
        </p>
        <p>Phone: <a href="tel:+265997500320" style={{ fontFamily:'sans-serif',color: '#ffffff', textDecoration: 'none' }}>
          +265 997 500 320
        </a>
        </p>
      </div>
      <div>
          © {new Date().getFullYear()} Amplify Partnerships.
      </div>
      <div>
      </div>
    </div>
  );
}

export default Footer;