import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Database } from 'lucide-react';

function Home() {
  return (
    <div className="page-container">
      {/* Hero Header Section */}
      <div style={{ padding: '4rem 0', maxWidth: '800px' }}>
        <h1 className="section-title" style={{ fontSize: '3.5rem', lineHeight: '1.1' }}>
          Amplify Impact. <br />
          <span style={{ color: '#64748b' }}>Optimize Institutional Performance.</span>
        </h1>
        <p style={{ color: '#475569', fontSize: '1.2rem', lineHeight: '1.6', margin: '1.5rem 0 2.5rem' }}>
          Providing strategic advisory, development policy alignment, and robust monitoring frameworks across sub-Saharan Africa. Based in Lilongwe, built for structural scale.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/services" className="btn-primary">
            Explore Advisory Practices <ArrowRight size={18} />
          </Link>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid #cbd5e1', borderRadius: '6px', color: '#0f172a', textDecoration: 'none', fontWeight: '600', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            Request Diagnostics
          </Link>
        </div>
      </div>

      {/* Corporate Anchors section */}
      <div style={{ marginTop: '4rem', paddingTop: '4rem', borderTop: '1px solid #e2e8f0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
        <div>
          <Globe style={{ color: '#0f172a', marginBottom: '0.75rem' }} size={24} />
          <h4 style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>Regional Context</h4>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Grounded in local insights to meet global compliance criteria.</p>
        </div>
        <div>
          <Database style={{ color: '#0f172a', marginBottom: '0.75rem' }} size={24} />
          <h4 style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>Rigorous MEAL</h4>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Precision analytics and metrics replacing generalized assessments.</p>
        </div>
        <div>
          <Shield style={{ color: '#0f172a', marginBottom: '0.75rem' }} size={24} />
          <h4 style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>Institutional Integrity</h4>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Building transparent, accountable structures for long-term support.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;