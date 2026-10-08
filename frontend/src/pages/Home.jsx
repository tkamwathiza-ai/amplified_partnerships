import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Eye,
  Microscope,
  ShieldCheck,
  MapPin,
  Handshake,
  BadgeCheck,
  Search,
  Compass,
  Rocket,
  RefreshCw
} from 'lucide-react';


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

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="hero-section">

        <div className="hero-slider">
          <div className="hero-slide-track">

            {/* FIRST SEQUENCE */}
            {focalImages.map((imgSrc, index) => (
              <img
                key={`first-${index}`}
                src={imgSrc}
                alt={`hero-slide-${index}`}
                className="hero-slide-img"
              />
            ))}

            {/* SECOND SEQUENCE */}
            {focalImages.map((imgSrc, index) => (
              <img
                key={`second-${index}`}
                src={imgSrc}
                alt={`hero-slide-${index + 4}`}
                className="hero-slide-img"
              />
            ))}

          </div>
        </div>

        <div className="hero-content-card">

          <h1 className="section-title hero-title">
            Amplify Impact.
          </h1>

          <p className="hero-description">
            Providing strategic advisory, development policy alignment,
            and robust monitoring frameworks across sub-Saharan Africa.

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


      {/* =====================================================
          MISSION & VISION
      ===================================================== */}

      <section className="mission-vision-section">

        <div className="section-intro">
          <span className="section-eyebrow">WHO WE ARE</span>

          <h2>
            Evidence. Systems. <br />
            <span>Measurable Impact.</span>
          </h2>

          <p>
            We strengthen the institutions, policies, systems and evidence
            base that communities depend on — helping organisations move
            from analysis and intention to action and measurable results.
          </p>
        </div>


        <div className="mission-vision-grid">

          {/* MISSION */}
          <article className="mission-card">

            <div className="card-number">
              <Target size={28} strokeWidth={1.75} aria-hidden="true" />
            </div>

            <h3>MISSION</h3>

            <p>
              To strengthen the institutions, policies, strategies, systems
              and evidence base that communities depend on, by delivering
              rigorous, context-grounded consulting — anchored in digital
              systems design, evaluation and organisational learning,
              research and evidence generation, monitoring and evaluation,
              policy analysis and gender-transformative analysis — that turns
              analysis into action and intention into measurable impact.
            </p>

          </article>


          {/* VISION */}
          <article className="vision-card">

            <div className="card-number">
              <Eye size={28} strokeWidth={1.75} aria-hidden="true" />
            </div>

            <h3>VISION</h3>

            <p>
              A Malawi, and a wider region, where public institutions,
              civil society, financial institutions and development partners
              are equipped with the evidence, learning, systems and platforms
              they need to deliver lasting, accountable and gender-equitable
              results for the people they serve.
            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="values-section">

        <div className="values-header">

          <div>
            <span className="section-eyebrow">OUR VALUES</span>

            <h2>
              How we work <br />
              <span>matters.</span>
            </h2>
          </div>

          <p>
            Our values are not simply statements. They shape how we design,
            advise, evaluate and work alongside the organisations we serve.
          </p>

        </div>


        <div className="values-grid">

          <article className="value-card">
            <span>
              <Microscope size={26} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3>Rigour</h3>
            <p>
              We ground every design decision in evidence rather than
              assumption — from documented requirements and field observation
              through to load testing, security testing and user acceptance
              against a written script.
            </p>
          </article>


          <article className="value-card">
            <span>
              <ShieldCheck size={26} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3>Integrity</h3>
            <p>
              We give clients the honest picture, including uncomfortable
              findings, technical debt and the limitations of our own work,
              rather than the picture they hoped to hear. We name what a
              system will not do as clearly as what it will.
            </p>
          </article>


          <article className="value-card">
            <span>
              <MapPin size={26} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3>Contextual Fit</h3>
            <p>
              We design for the realities of the institutions and communities
              we serve — their culture, constraints, capacity, geography and
              connectivity — rather than importing generic templates or
              architectures that assume infrastructure that is not there.
            </p>
          </article>


          <article className="value-card">
            <span>
              <Handshake size={26} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3>Partnership</h3>
            <p>
              We work alongside client teams, building their capacity and
              ownership, rather than delivering platforms that create
              dependency. Client technical counterparts sit inside our
              delivery process, not outside it.
            </p>
          </article>


          <article className="value-card">
            <span>
              <BadgeCheck size={26} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3>Accountability</h3>
            <p>
              We meet deadlines, stay within budget, and stand behind the
              quality of what we deliver. Every deliverable carries a named
              senior signatory.
            </p>
          </article>

        </div>

      </section>


      {/* =====================================================
          SYSTEMS ENGAGEMENT
      ===================================================== */}

      <section className="systems-section">

        <div className="systems-content">

          <span className="section-eyebrow">
            WHAT IT MEANS ON A SYSTEMS ENGAGEMENT
          </span>

          <h2>
            From evidence to <br />
            <span>working systems.</span>
          </h2>

          <p>
            Our approach connects research, evidence, organisational learning,
            evaluation and digital systems design. Every engagement is
            grounded in the context in which a system must actually operate.
          </p>

          <Link to="/about" className="systems-link">
            Learn more about our approach
            <ArrowRight size={18} />
          </Link>

        </div>


        <div className="systems-points">

          <div className="system-point">
            <span>
              <Search size={24} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <strong>Evidence</strong>
            <p>
              Understand the problem before designing the solution.
            </p>
          </div>

          <div className="system-point">
            <span>
              <Compass size={24} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <strong>Design</strong>
            <p>
              Translate evidence into practical strategies and systems.
            </p>
          </div>

          <div className="system-point">
            <span>
              <Rocket size={24} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <strong>Delivery</strong>
            <p>
              Build solutions that work within real institutional contexts.
            </p>
          </div>

          <div className="system-point">
            <span>
              <RefreshCw size={24} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <strong>Learning</strong>
            <p>
              Evaluate, adapt and strengthen systems over time.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="homepage-cta">

        <span className="section-eyebrow">
          READY TO AMPLIFY IMPACT?
        </span>

        <h2>
          Let's turn evidence <br />
          into <span>action.</span>
        </h2>

        <p>
          Whether you are defining a strategy, evaluating a programme,
          designing a digital system or strengthening institutional
          performance, we can help.
        </p>

        <Link to="/contact" className="homepage-cta-button">
          Start a conversation
          <ArrowRight size={18} />
        </Link>

      </section>

    </div>
  );
}

export default Home;
