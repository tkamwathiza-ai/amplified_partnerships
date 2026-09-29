import axios from 'axios';
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: '',
    project_title: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Update form fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting enquiry:', formData);

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/contact/',
        formData
      );

      if (response.status === 201) {
        console.log('Success! Backend responded with:', response.data);
        setSubmitted(true);
      }
    } catch (error) {
      console.error(
        'Network communication error:',
        error.response ? error.response.data : error.message
      );

      alert(
        'Something went wrong. Please check your connection to the server.'
      );
    }
  };

  return (
    <div
      className="page-container"
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '4rem 2rem',
      }}
    >
      {/* Page Introduction */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h1
          className="section-title"
          style={{
            color: '#0f172a',
            marginBottom: '1rem',
          }}
        >
          Contact Our Consulting Team
        </h1>

        <p
          style={{
            color: '#475569',
            fontSize: '1.05rem',
            lineHeight: '1.7',
          }}
        >
          Have a project, research assignment, evaluation, policy need, or
          institutional challenge? Tell us about your requirements and our
          team will get in touch with you.
        </p>
      </div>

      {submitted ? (
        /* Success Message */
        <div
          style={{
            backgroundColor: '#d1fae5',
            color: '#065f46',
            padding: '2rem',
            borderRadius: '10px',
            lineHeight: '1.6',
          }}
        >
          <h2 style={{ marginBottom: '0.5rem' }}>
            Thank you for your enquiry.
          </h2>

          <p>
            Your enquiry has been received. Our consulting team will review
            your requirements and contact you shortly.
          </p>
        </div>
      ) : (
        /* Contact Form */
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {/* Full Name */}
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#0f172a',
              }}
            >
              Full Name *
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                fontSize: '1rem',
              }}
            />
          </div>

          {/* Organisation */}
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#0f172a',
              }}
            >
              Organisation / Institution *
            </label>

            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              placeholder="Enter your organisation or institution"
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                fontSize: '1rem',
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#0f172a',
              }}
            >
              Email Address *
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="name@example.com"
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                fontSize: '1rem',
              }}
            />
          </div>

          {/* Phone */}
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#0f172a',
              }}
            >
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+265 ..."
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                fontSize: '1rem',
              }}
            />
          </div>

          {/* Service */}
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#0f172a',
              }}
            >
              Service Required *
            </label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                fontSize: '1rem',
                backgroundColor: 'white',
              }}
            >
              <option value="">Select a service</option>

              <option value="Health & Social Development Policy">
                Health & Social Development Policy
              </option>

              <option value="Monitoring, Evaluation, Accountability & Learning">
                Monitoring, Evaluation, Accountability & Learning (MEAL)
              </option>

              <option value="Government & Institutional Advisory">
                Government & Institutional Advisory
              </option>

              <option value="Advocacy & Strategic Communication">
                Advocacy & Strategic Communication
              </option>

              <option value="Research, Data & Evidence Generation">
                Research, Data & Evidence Generation
              </option>

              <option value="Institutional Strengthening & Strategic Planning">
                Institutional Strengthening & Strategic Planning
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>

          {/* Project Title */}
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#0f172a',
              }}
            >
              Project / Assignment Title
            </label>

            <input
                type="text"
                name="project_title"
                value={formData.project_title}
                onChange={handleChange}
                placeholder="e.g. Programme Evaluation"
                style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                fontSize: '1rem',
              }}
            />
          </div>

          {/* Message */}
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#0f172a',
              }}
            >
              Tell us about your project or requirements *
            </label>

            <textarea
              name="message"
              rows="7"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Briefly describe your project, requirements, objectives, or the support you are looking for."
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                fontSize: '1rem',
                resize: 'vertical',
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              backgroundColor: '#1f4dd9',
              color: 'white',
              padding: '0.9rem 1.5rem',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Submit Enquiry
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;