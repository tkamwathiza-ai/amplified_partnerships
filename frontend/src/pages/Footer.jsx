import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer.css';

function Footer() {
  return (
    <footer className="site-footer">

      {/* =====================================================
          FOOTER CONTENT
          ===================================================== */}

      <div className="footer-content">

        {/* ===================================================
            ABOUT
            =================================================== */}

        <div className="footer-column footer-about">

          <h3>
            Amplify Partnerships
          </h3>

          <p>
            A Malawi-based consulting firm providing research,
            evaluation, institutional strengthening, data and
            digital systems support.
          </p>

        </div>


        {/* ===================================================
            CONTACT
            =================================================== */}

        <div className="footer-column footer-contact">

          <h4>
            Contact
          </h4>

          <div className="footer-contact-item">

            <span>
              Contact Person
            </span>

            <p>
              The Managing Director
            </p>

          </div>


          <div className="footer-contact-item">

            <span>
              Location
            </span>

            <p>
              Area 3, Plot 3/350,<br />
              Lilongwe, Malawi
            </p>

          </div>


          <div className="footer-contact-item">

            <span>
              Postal Address
            </span>

            <p>
              P.O. Box X168,<br />
              Lilongwe, Malawi
            </p>

          </div>


          <div className="footer-contact-item">

            <span>
              Email
            </span>

            <p>
              <a
                href="mailto:bkzikomakuka@gmail.com"
                className="footer-contact-link"
              >
                bkzikomakuka@gmail.com
              </a>
            </p>

          </div>


          <div className="footer-contact-item">

            <span>
              Telephone
            </span>

            <p>

              <a
                href="tel:+265884042225"
                className="footer-contact-link"
              >
                +265 884 042 225
              </a>

              <br />

              <a
                href="tel:+265996505528"
                className="footer-contact-link"
              >
                +265 996 505 528
              </a>

            </p>

          </div>

        </div>


        {/* ===================================================
            NAVIGATION
            =================================================== */}

        <div className="footer-column footer-navigation">

          <h4>
            Explore
          </h4>

          <Link
            to="/about"
            className="footer-link"
          >
            About us
          </Link>


          <Link
            to="/track-record"
            className="footer-link"
          >
            Track record
          </Link>


          <Link
            to="/services"
            className="footer-link"
          >
            Services
          </Link>


          <Link
            to="/sectors"
            className="footer-link"
          >
            Sectors
          </Link>


          <Link
            to="/contact"
            className="footer-link"
          >
            Work with us
          </Link>

        </div>

      </div>


      {/* =====================================================
          FOOTER BOTTOM
          ===================================================== */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Amplify Partnerships.
          All rights reserved.
        </p>

        <p>
          Lilongwe, Malawi
        </p>

      </div>

    </footer>
  );
}

export default Footer;