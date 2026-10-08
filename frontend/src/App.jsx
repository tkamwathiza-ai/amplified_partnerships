import {
  Link,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import { useEffect, useRef, useState } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import TrackRecord from './pages/TrackRecord';
import Services from './pages/Services';
import Sectors from './pages/Sectors';
import Contact from './pages/Contact';

import Footer from './pages/Footer';

import herologo from './assets/Amplify logo.png';
import './App.css';


/* =========================================================
   SCROLL TO TOP
   ========================================================= */

function ScrollToTop() {

  const {
    pathname,
    hash
  } = useLocation();


  useEffect(() => {

    /*
     * If there is a hash, the individual page
     * is responsible for scrolling to that section.
     */

    if (hash) {
      return;
    }


    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

  }, [pathname, hash]);


  return null;
}

/* =========================================================
   SHOW NAVBAR ON SCROLL UP
   ========================================================= */

function useNavbarVisibility() {

  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {

    const THRESHOLD = 8;      // ignore tiny scroll movements
    const TOP_OFFSET = 80;    // always show navbar near the top

    const update = () => {

      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (currentY < TOP_OFFSET) {
        setVisible(true);
      } else if (Math.abs(diff) > THRESHOLD) {
        setVisible(diff < 0);   // scrolling up = show, down = hide
      }

      if (Math.abs(diff) > THRESHOLD || currentY < TOP_OFFSET) {
        lastScrollY.current = currentY;
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(update);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  return visible;
}

/* =========================================================
   APP
   ========================================================= */

function App() {

  const navVisible = useNavbarVisibility();

  return (
    <div>
      <ScrollToTop />

     <nav
  className={`navbar ${navVisible ? 'navbar--visible' : 'navbar--hidden'}`}
  
>


        {/* =================================================
            BRANDING
            ================================================= */}

        <div className="nav-branding">

          <div className="nav-logo">

            <Link
              to="/"
              className="nav-item"
            >

              <img
                src={herologo}
                alt="Amplify Partnerships logo"
              />

            </Link>

          </div>


          <p className="nav-paragraph">
            AMPLIFY PARTNERSHIPS
          </p>

        </div>


        {/* =================================================
            NAVIGATION LINKS
            ================================================= */}

        <div className="nav-links">


          {/* =================================================
              WHO WE ARE
              ================================================= */}

          <div className="nav-dropdown">

            <button
              className="nav-button sectors-button"
            >

              Who we are

              <span className="dropdown-arrow">
                ▾
              </span>

            </button>


            <div className="dropdown-menu">

              <Link
                to="/about"
                className="dropdown-item"
              >
                About us
              </Link>


              <Link
                to="/track-record"
                className="dropdown-item"
              >
                Track record
              </Link>

            </div>

          </div>


          {/* =================================================
              SERVICES
              ================================================= */}

          <div className="nav-dropdown">

            <button
              className="nav-button sectors-button"
            >

              Services

              <span className="dropdown-arrow">
                ▾
              </span>

            </button>


            <div className="dropdown-menu">

              <Link
                to="/services"
                className="dropdown-item"
              >
                All Services
              </Link>


              <Link
                to="/services#research-data"
                className="dropdown-item"
              >
                Research &amp; Data
              </Link>


              <Link
                to="/services#meal"
                className="dropdown-item"
              >
                Monitoring, Evaluation &amp; Learning
              </Link>


              <Link
                to="/services#strategy"
                className="dropdown-item"
              >
                Strategy &amp; Institutional Strengthening
              </Link>


              <Link
                to="/services#digital-systems"
                className="dropdown-item"
              >
                Digital Systems &amp; Advisory
              </Link>


              <Link
                to="/services#technical-methods"
                className="dropdown-item"
              >
                Technical Methods &amp; Tools
              </Link>

            </div>

          </div>


          {/* =================================================
              SECTORS
              ================================================= */}

          <div className="nav-dropdown">

            <button
              className="nav-button sectors-button"
            >

              Sectors

              <span className="dropdown-arrow">
                ▾
              </span>

            </button>


            <div className="dropdown-menu">


              <Link
                to="/sectors"
                className="dropdown-item"
              >
                All Sectors
              </Link>


              <Link
                to="/sectors#government"
                className="dropdown-item"
              >
                Government &amp; Public Sector
              </Link>


              <Link
                to="/sectors#civil-society"
                className="dropdown-item"
              >
                Civil Society, NGOs &amp; INGOs
              </Link>


              <Link
                to="/sectors#agriculture"
                className="dropdown-item"
              >
                Agriculture &amp; Rural Livelihoods
              </Link>


              <Link
                to="/sectors#financial-inclusion"
                className="dropdown-item"
              >
                Financial Inclusion &amp; Cooperatives
              </Link>


              <Link
                to="/sectors#health"
                className="dropdown-item"
              >
                Health, SRHR &amp; Public Health
              </Link>


              <Link
                to="/sectors#wash"
                className="dropdown-item"
              >
                WASH &amp; Climate Resilience
              </Link>


              <Link
                to="/sectors#gender"
                className="dropdown-item"
              >
                Gender, Inclusion &amp; Child Protection
              </Link>


              <Link
                to="/sectors#education"
                className="dropdown-item"
              >
                Education &amp; Vocational Training
              </Link>


              <Link
                to="/sectors#faith-based"
                className="dropdown-item"
              >
                Faith-Based &amp; Community-Led Structures
              </Link>


              <Link
                to="/sectors#humanitarian"
                className="dropdown-item"
              >
                Humanitarian &amp; Early Warning
              </Link>

            </div>

          </div>


          {/* =================================================
              WORK WITH US
              ================================================= */}

          <Link
  to="/contact"
  className="nav-button"
>
  Work with us
</Link>

        </div>

      </nav>


      {/* =====================================================
          PAGE CONTENT
          ===================================================== */}

      <main
        style={{
          minHeight: '75vh'
        }}
      >

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />


          <Route
            path="/about"
            element={<About />}
          />


          <Route
            path="/track-record"
            element={<TrackRecord />}
          />


          <Route
            path="/services"
            element={<Services />}
          />


          <Route
            path="/sectors"
            element={<Sectors />}
          />


          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </main>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <Footer />

    </div>
  );
}


export default App;