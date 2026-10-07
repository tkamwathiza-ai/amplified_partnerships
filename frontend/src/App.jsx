import { Link, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

import Footer from './pages/Footer';
import herologo from './assets/Amplify logo.png';

function App() {
  return (
    <div>
      
      <nav className="navbar">
        <div className="nav-branding">
        <div className="nav-logo">
          <Link to="/" className="nav-item">
          <img
           src={herologo}
           alt="herologo"
           />
           </Link>
           <br></br>
          
          
        </div>
        <p className="nav-paragraph">Amplify Partnerships</p>
        </div>
        <div className="nav-links">
          
          <button className="nav-button"><Link to="/about" className="nav-item">Who we are</Link></button>
          <button className="nav-button"><Link to="/services" className="nav-item">Sectors</Link></button>
          <button className="nav-button"><Link to="/contact" className="nav-item">Work with us</Link></button>
        </div>
      </nav>

      {/*Horizontal grey line seperating the navigation bar and the hero page*/}
     {/*  <hr style={{ border: 'none', height: '0.2px', backgroundColor: '#1a1717', width: '100%' }}/>  */} 

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