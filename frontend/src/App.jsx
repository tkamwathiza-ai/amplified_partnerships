import {
  Link,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import TrackRecord from './pages/TrackRecord';
import Services from './pages/Services';
import Sectors from './pages/Sectors';
import Contact from './pages/Contact';

import Footer from './pages/Footer';

import herologo from './assets/Amplify logo.png';


/* =========================================================
   NAVIGATION DATA
   ========================================================= */

const navGroups = [
  {
    label: 'Who we are',
    links: [
      { to: '/about', text: 'About us' },
      { to: '/track-record', text: 'Track record' }
    ]
  },
  {
    label: 'Services',
    links: [
      { to: '/services', text: 'All Services' },
      { to: '/services#research-data', text: 'Research & Data' },
      { to: '/services#meal', text: 'Monitoring, Evaluation & Learning' },
      { to: '/services#strategy', text: 'Strategy & Institutional Strengthening' },
      { to: '/services#digital-systems', text: 'Digital Systems & Advisory' },
      { to: '/services#technical-methods', text: 'Technical Methods & Tools' }
    ]
  },
  {
    label: 'Sectors',
    links: [
      { to: '/sectors', text: 'All Sectors' },
      { to: '/sectors#government', text: 'Government & Public Sector' },
      { to: '/sectors#civil-society', text: 'Civil Society, NGOs & INGOs' },
      { to: '/sectors#agriculture', text: 'Agriculture & Rural Livelihoods' },
      { to: '/sectors#financial-inclusion', text: 'Financial Inclusion & Cooperatives' },
      { to: '/sectors#health', text: 'Health, SRHR & Public Health' },
      { to: '/sectors#wash', text: 'WASH & Climate Resilience' },
      { to: '/sectors#gender', text: 'Gender, Inclusion & Child Protection' },
      { to: '/sectors#education', text: 'Education & Vocational Training' },
      { to: '/sectors#faith-based', text: 'Faith-Based & Community-Led Structures' },
      { to: '/sectors#humanitarian', text: 'Humanitarian & Early Warning' }
    ]
  }
];


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
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);


  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };


  /* Close the mobile menu whenever the page or hash changes */

  useEffect(() => {
    closeMenu();
  }, [location.pathname, location.hash]);


  /* Keep the navbar visible while the mobile menu is open */

  const showNavbar = navVisible || menuOpen;


  return (

    <div>

      <ScrollToTop />


      {/* ===================================================
          NAVIGATION
          =================================================== */}

      <nav
        className={`navbar ${showNavbar ? 'navbar--visible' : 'navbar--hidden'}`}
      >

        {/* BRANDING */}

        <div className="nav-branding">

          <div className="nav-logo">

            <Link
              to="/"
              className="nav-item"
              onClick={closeMenu}
            >

              <img
                src={herologo}
                alt="Amplify Partnerships logo"
              />

            </Link>

          </div>

          <p className="nav-paragraph">
            Amplify Partnerships
          </p>

        </div>


        {/* MOBILE MENU TOGGLE */}

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen((open) => !open);
            setOpenDropdown(null);
          }}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>


        {/* NAVIGATION LINKS */}

        <div className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>

          {navGroups.map((group) => (

            <div
              key={group.label}
              className={`nav-dropdown ${
                openDropdown === group.label ? 'nav-dropdown--open' : ''
              }`}
            >

              <button
                type="button"
                className="nav-button sectors-button"
                aria-expanded={openDropdown === group.label}
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === group.label ? null : group.label
                  )
                }
              >

                {group.label}

                <span className="dropdown-arrow">
                  ▾
                </span>

              </button>


              <div className="dropdown-menu">

                {group.links.map((link) => (

                  <Link
                    key={link.to}
                    to={link.to}
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    {link.text}
                  </Link>

                ))}

              </div>

            </div>

          ))}


          {/* WORK WITH US */}

          <Link
            to="/contact"
            className="nav-button"
            onClick={closeMenu}
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

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/track-record" element={<TrackRecord />} />

          <Route path="/services" element={<Services />} />

          <Route path="/sectors" element={<Sectors />} />

          <Route path="/contact" element={<Contact />} />

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
