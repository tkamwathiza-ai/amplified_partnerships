import axios from 'axios';
import React, { useState } from 'react';
import '../Contact.css';

/*
 * API address.
 * - Set VITE_API_URL in a .env file to override it (for production).
 * - Otherwise it uses the same host the website was opened from, on port 8001.
 *   That means it works on your laptop (localhost) and on your phone
 *   (your computer's network address) without any changes.
 */
const API_BASE =
  import.meta.env.VITE_API_URL ||
  `${window.location.protocol}//${window.location.hostname}:8001`;

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
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

    if (submitting) {
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await axios.post(
        `${API_BASE}/api/contact/`,
        formData,
        { timeout: 15000 }
      );

      if (response.status === 201) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error(
        'Contact form error:',
        error.response ? error.response.data : error.message
      );

      if (error.response && error.response.data && error.response.data.error) {
        // The server replied with a specific problem (e.g. invalid email)
        setErrorMessage(error.response.data.error);
      } else {
        // No reply at all: server off, wrong address, or no connection
        setErrorMessage(
          'We could not reach the server. Please check your connection and try again.'
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page-container">

      {/* Page Introduction */}
      <div className="contact-introduction">
        <h1 className="section-title">
          Contact Our Consulting Team
        </h1>

        <p className="contact-intro-text">
          Have a project, research assignment, evaluation, policy need, or
          institutional challenge? Tell us about your requirements and our
          team will get in touch with you.
        </p>
      </div>

      {submitted ? (

        /* Success Message */
        <div className="success-message">
          <h2>
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
          className="contact-form"
        >

          {/* Full Name */}
          <div className="form-group">
            <label>
              Full Name *
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          {/* Organisation */}
          <div className="form-group">
            <label>
              Organisation / Institution *
            </label>

            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              placeholder="Enter your organisation or institution"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>
              Email Address *
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="name@example.com"
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+265 ..."
            />
          </div>

          {/* Service */}
          <div className="form-group">
            <label>
              Service Required *
            </label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">
                Select a service
              </option>

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
          <div className="form-group">
            <label>
              Project / Assignment Title
            </label>

            <input
              type="text"
              name="project_title"
              value={formData.project_title}
              onChange={handleChange}
              placeholder="e.g. Programme Evaluation"
            />
          </div>

          {/* Message */}
          <div className="form-group">
            <label>
              Tell us about your project or requirements *
            </label>

            <textarea
              name="message"
              rows="7"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Briefly describe your project, requirements, objectives, or the support you are looking for."
            />
          </div>

          {/* Error message */}
          {errorMessage && (
            <p className="form-error" role="alert">
              {errorMessage}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-button"
            disabled={submitting}
          >
            {submitting ? 'Sending...' : 'Submit Enquiry'}
          </button>

        </form>
      )}
    </div>
  );
}

export default Contact;