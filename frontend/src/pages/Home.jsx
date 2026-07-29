import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Database } from 'lucide-react';

function Home() {
  return (
    <div className="page-container">
      {/* Hero Header Section */}
      <div style={{ padding: '4rem 0', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', minHeight: '500px', display: 'flex', alignItems: 'center' }}>
          <img
            src="/src/assets/webphoto.jpg"
            alt="Hero"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'relative', zIndex: 1, padding: '3rem', maxWidth: '600px', background: 'rgba(255,255,255,0.72)', /*backdropFilter: 'blur(px)',*/ margin: '2rem', borderRadius: '20px' }}>
            <h1 className="section-title" style={{ fontSize: '3.5rem', lineHeight: '1.05', margin: 0 }}>
              Amplify Impact. <br />
              <span style={{ color: '#3f72ba', fontSize: '2.5rem' }}>Optimize Institutional Performance.</span>
            </h1>
            <p style={{ color: '#475569', fontSize: '1.2rem', lineHeight: '1.6', margin: '1.5rem 0 2.5rem' }}>
              Providing strategic advisory, development policy alignment, and robust monitoring frameworks across sub-Saharan Africa. Based in Lilongwe, built for structural scale.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/services" className="btn-primary" style={{ marginTop: '1.3rem' }}>
                Explore Advisory Practices{' '}
                <span style={{ display: 'inline-block', marginTop: '2px' }}>
                  <ArrowRight size={18} style={{ transform: 'translateY(5px)', color: 'darkblue' }} />
                </span>
              </Link>
              <span style={{ marginTop: '0.8rem', backgroundColor: '#3b6da0',  borderRadius: '6px', padding: '0.75rem 1.5rem', cursor: 'pointer' }}>
                <Link to="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '600' }}>
                  Request Diagnostics
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Anchors section */}
      <div style={{ marginTop: '4rem', /*backgroundColor:'#7faddb', */paddingTop: '4rem', borderTop: '1px solid #e2e8f0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
        <div style={{ textAlign: 'center' }}>
          <Globe style={{ color: '#0f172a', marginBottom: '0.75rem' }} size={24} />
          <h4 style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>Regional Context</h4>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Grounded in local insights to meet global compliance criteria.</p>
        </div>
         <div style={{ textAlign: 'center' }}>
          <Database style={{ color: '#0f172a', marginBottom: '0.75rem' }} size={24} />
          <h4 style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>Rigorous MEAL</h4>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Precision analytics and metrics replacing generalized assessments.</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Shield style={{ color: '#0f172a', marginBottom: '0.75rem' }} size={24} />
          <h4 style={{ fontWeight: '600', color: '#111214', marginBottom: '0.5rem' }}>Institutional Integrity</h4>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Building transparent, accountable structures for long-term support.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;