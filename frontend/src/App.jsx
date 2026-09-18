import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact'; // 1. Import the new Contact file
import Footer from './pages/Footer';
import herologo from './pages/Amplify logo.png';
function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <img
           src={herologo}
           alt="herologo"
           /><br></br>
        </div>
        
        <div className="nav-paragraph">
          "INSIGHT-LED CONSULTING FOR RESILIENT INSTITUTIONS AND COMPANIES"
        </div><br></br>
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
      <Footer />
      
    </div>
  );
}

export default App;