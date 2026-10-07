import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import iconImage from "../assets/training-program.png";
import iconimg from "../assets/loyal-customer.png";
import hroimg from "../assets/loyalty.png";
import happy_children from "../assets/happy_children.jpg";

import sliderImage2 from "../assets/slider_2.jpg";
import sliderImage3 from "../assets/slider_3.jpg";
import sliderImage4 from "../assets/slider_4.jpg";

const focalImages = [
  happy_children,
  sliderImage2,
  sliderImage3,
  sliderImage4
];

function Home() {


  return (
    <div className="page-container">
      
      {/* Hero Header Section with Horizontal Slide Track */}
      <section className="hero-section">
         <div className="hero-slider">
  {focalImages.map((imgSrc, index) => (
    <img
      key={index}
      src={imgSrc}
      alt={`hero-slide-${index}`}
      className="hero-slide-img"
   />
      ))}
        </div>

        {/* Content Box Layered Above the Slider */}
        <div className="hero-content-card">
          <h1 className="section-title hero-title">
            Amplify Impact. <br />
          </h1>

          <p className="hero-description">
            Providing strategic advisory, development policy alignment, and robust monitoring frameworks across sub-Saharan Africa. Based in Lilongwe, built for structural scale.
          </p>

          <div className="hero-cta-group">
            

            <span className="hero-btn-secondary">
              <Link to="/contact" className="hero-secondary-link">
                Request Diagnostics
              </Link>
            </span>
          </div>
        </div>
      </section>
        
      {/* Achievements and Credits Section */}
      <section className="overlay-hero">
        <div className="hero-left">
          <div className="photo-container">
            <div className="overlay-content"></div>
            <img 
              src={iconimg}
              alt="iconimg"
              className="small-icon"
            />  
          </div>

          <h2>OUR VISION</h2>
          <p>To create a platform where everyone is equipped with the evidence, strategy, and systems they need.</p>
        </div>

        <div className="hero-right">
          <div className="image-container">
            <div className="overlay-content"></div>
            <img
              src={iconImage}
              alt="iconImg"
              className="small-icon"
            />
          </div>

          <h2>CREDITS</h2>
          <p>We managed to deliver work for, or in partnership with the government, international development partners, faith-based networks, and civil society organisations.</p>
        </div>

        <div className="bottom-left-hero">
          <div className="overlay-content"></div>
          <img
            src={hroimg}
            alt="sub"
            className="sub-image"
          />
        
          <h3>OUR MISSION</h3>
          <p>
            To strengthen the institutions, policies, and evidence base that communities depend on by delivering rigorous, context-grounded consulting that turns analysis into action and intention into measurable impact.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Home;