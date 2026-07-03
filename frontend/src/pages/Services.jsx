import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Crucial: Import the icons object so we can look up names like 'activity' dynamically
import * as Icons from 'lucide-react';

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the data from your Django API as soon as the page loads
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/services/');
        setServices(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching services layout:", err);
        setError("Could not load consulting practices. Please verify your backend server is running.");
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <div className="page-container">Loading corporate framework...</div>;
  if (error) return <div className="page-container" style={{ color: '#dc2626' }}>{error}</div>;

  return (
    <div className="page-container">
      <h1 className="section-title">Our Services</h1>
      <p style={{ color: '#475569', marginBottom: '3rem', maxWidth: '700px', fontSize: '1.1rem', lineHeight: '1.6' }}>
        Amplify Partnerships provides high-impact advisory, institutional diagnostics, and robust technical support tailored across sub-Saharan development frameworks.
      </p>

      {/* 1. Using our optimized clean CSS grid container class */}
      <div className="services-grid">
        {services.map((service) => {
          // Dynamically map the string from the DB (like 'activity') to a real component
          const IconComponent = Icons[service.icon_name] || Icons.Briefcase;

          return (
            /* 2. Swapping raw inline styles out for our high-impact hover class */
            <div key={service.id} className="service-card">
              <div style={{ color: '#0f172a', marginBottom: '1.25rem' }}>
                <IconComponent size={32} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '600', color: '#0f172a', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                {service.title}
              </h3>
              <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '0.98rem' }}>
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;