import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact'; // 1. Import the new Contact file

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">AMPLIFY PARTNERSHIPS</div>
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About Us</Link>
          <Link to="/services" className="nav-item">Services</Link>
          <Link to="/contact" className="nav-item">Contact</Link> {/* 2. Add Nav Link */}
        </div>
      </nav>

      <main style={{ minHeight: '75vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> {/* 3. Register Route */}
        </Routes>
      </main>

      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', textAlign: 'center', padding: '2.5rem', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Amplify Partnerships. Area 3, Plot 3/350, Lilongwe, Malawi.
      </footer>
    </div>
  );
}

export default App;