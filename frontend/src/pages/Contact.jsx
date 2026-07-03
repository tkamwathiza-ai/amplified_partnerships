import axios from 'axios';
import React, { useState } from 'react';

function Contact() {
  // 1. Create digital sticky notes (state) for the form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // 2. A function that runs every time a user types a letter
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Submit button clicked! Form data ready to send:", formData); // ADD THIS LINE
    setFormData({
      ...formData,       // Keep the old values intact
      [name]: value      // Update only the field that changed
    });
  };

  // 3. A function that runs when the form is submitted
const handleSubmit = async (e) => {
  e.preventDefault(); // Stop the browser from reloading the page

  try {
    // Send the data packet across the local network to Django's endpoint
    const response = await axios.post('http://127.0.0.1:8000/api/contact/', formData);

    if (response.status === 201) {
      console.log("Success! Backend responded with:", response.data);
      setSubmitted(true); // Flips the screen to show the success card
    }
  } catch (error) {
    console.error("Network communication error:", error.response ? error.response.data : error.message);
    alert("Something went wrong. Please check your connection to the server.");
  }
};

  return (
    <div className="page-container" style={{ maxWidth: '600px' }}>
      <h1 className="section-title">Contact Us</h1>
      <p style={{ color: '#475569', marginBottom: '2rem' }}>
        Have an upcoming project or evaluation? Reach out to our team in Lilongwe.
      </p>

      {submitted ? (
        // Show a success message if the form was submitted successfully
        <div style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '1.5rem', borderRadius: '8px', fontWeight: '500' }}>
          Thank you! Your message has been received. Our advisory team will contact you shortly.
        </div>
      ) : (
        // Otherwise, show the active contact form
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#0f172a' }}>Full Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#0f172a' }}>Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#0f172a' }}>How can we help your institution?</label>
            <textarea 
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem', resize: 'vertical' }}
            ></textarea>
          </div>

          <button 
            type="submit" 
            style={{ backgroundColor: '#0f172a', color: 'white', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', transition: 'background-color 0.2s' }}
          >
            Send Message
          </button>

        </form>
      )}
    </div>
  );
}

export default Contact;