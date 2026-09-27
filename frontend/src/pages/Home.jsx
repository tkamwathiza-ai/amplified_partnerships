import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Database } from 'lucide-react';
import heroImage from "../assets/Meeting Office.jpg"; 
import heroImg from "../assets/Office Whiteboard.jpg";
import iconImage from "../assets/training-program.png";
import iconimg from "../assets/loyal-customer.png";
import hroImage from "../assets/Office PC Black and W.jpg";
import hroimg from "../assets/loyalty.png";
import servicesImg from "../assets/Office Partnerships.jpg";

function Home() {
  return (
    <div className="page-container" style={{ maxWidth: '1900px', margin: '0 auto' }}>
      
      {/* Hero Header Section */}
      <section className="background-img" style={{  maxWidth: '1900px', margin: '0 auto' }}>
         <div style={{ position: 'relative', zIndex: 1, padding: '3rem', maxWidth: '600px', background: 'rgba(255,255,255,0.72)', /*backdropFilter: 'blur(px)',*/ margin: '2rem', borderRadius: '20px' }}>
            <h1 className="section-title" style={{ color: '#14161b', fontSize: '3.5rem', lineHeight: '0.9', margin: 0 }}>
              Amplify Impact. <br />
              {/*<span style={{ color: '#14161b', fontSize: '2rem', display: 'inline-block', marginTop: '1rem',lineHeight: '2rem'}}>Optimize Institutional Performance.</span>*/}
             
            </h1>
             

            <p style={{ color: '#475569', fontSize: '1.2rem', lineHeight: '1.4', margin: '1.5rem 0 2.5rem' }}>
              Providing strategic advisory, development policy alignment, and robust monitoring frameworks across sub-Saharan Africa. Based in Lilongwe, built for structural scale.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/services" className="btn-primary" style={{ marginTop: '1.3rem' }}>
                Explore Advisory Practices{' '}
                <span style={{ display: 'inline-block', marginTop: '2px' }}>
                  <ArrowRight size={18} style={{ transform: 'translateY(5px)', color: 'darkblue' }} />
                </span>
              </Link>

              <span style={{ marginTop: '0.8rem', backgroundColor: '#1f4dd9',  borderRadius: '6px', padding: '0.75rem 1.5rem', cursor: 'pointer' }}>
                <Link to="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '600' }}>
                  Request Diagnostics
                </Link>
              </span>
            </div>
          </div>

      </section>
         
      {/* Achievements and Credits Section */}
     <section className="overlay-hero">

      {/*Left Side*/}
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
          <p>To create a platform where everyone is equipped with the evidence, strategy, and systems they need.</p><br></br>
        </div>


       {/*Right Side*/}
        <div className="hero-right">
         < div className="image-container">
            
         <div className="overlay-content"></div>

          <img
            src={iconImage}
            alt="iconImg"
            className="small-icon"
          />
         </div>

         <h2>CREDITS</h2>
         <p>We managed to deliver work for, or in partnership with the government, international development partners,
          faith-based networks, and civil society organisations.
         </p>
         
        </div>
     </section>

     {/*Mission Section*/}
     <div className="bottom-hero">
         <div className="img-container">
            <img
            src={hroImage}
            alt="main"
            className="main-image"
            />
         </div>
         <div className="overlay-content"></div>
         
         <img
         src={hroimg}
         alt="sub"
         className="sub-image"
         />
        
         <h3>THE MISSION</h3>
         <p>To strengthen the institutions, policies, and evidence 
          base that communities depend on by delivering rigorous, 
          context-grounded consulting that turns 
          nalysis into action and intention 
          into measurable impact</p>
        </div>

      {/*Services Section*/}
        <div className="services-hero">
          <img
          src={servicesImg}
          alt="services"
          />
          <div className="overlay-content"></div>
          
          <h5>☏</h5>
          <h4>OUR SERVICES</h4>

          <Link to="/services">
            <p>Explore Amplify services   ➜</p>
          </Link>

          <h6>☑</h6>
          <p2>Our work is organised around<br></br>
            six core cosulting practices.<br></br>
            The first three reflect where we have the<br></br> 
            most consistent track record.
          </p2>
        </div>
  
      {/* Corporate Anchors section */}
      <div style={{ marginTop: '4rem', /*backgroundColor:'#7faddb', */paddingTop: '4rem', borderTop: '1px solid #e2e8f0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
        <div style={{ textAlign: 'center' }}>
          <Globe style={{ color: '#0f172a', marginBottom: '0.75rem' }} size={24} />
          <h4 style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>Regional Context</h4>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Grounded in local insights to meet global compliance criteria.</p>
        </div>

         <div style={{ textAlign: 'center' }}>
          <Database style={{ color: '#c0cce9', marginBottom: '0.75rem' }} size={24} />
          <h4 style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>Rigorous MEAL</h4>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Precision analytics and metrics replacing generalized assessments.</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Shield style={{ color: '#0f172a', marginBottom: '0.75rem' }} size={24} />
          <h4 style={{ fontWeight: '600', color: '#111214', marginBottom: '0.5rem' }}>Institutional Integrity</h4>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Building transparent, accountable structures for long-term support.</p>
        </div>

      </div>
    </div>
  );
}
export default Home;