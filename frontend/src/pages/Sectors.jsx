import React, { useEffect } from 'react';

import {
  Landmark,
  HeartPulse,
  Sprout,
  WalletCards,
  Droplets,
  Users,
  GraduationCap,
  Church,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

import { Link, useLocation } from 'react-router-dom';

import '../Sectors.css';


function Sectors() {

  const location = useLocation();


  /* =========================================================
     SECTOR DATA
     ========================================================= */

  const sectors = [
    {
      id: 'government',
      icon: Landmark,
      title: 'Government & Public Sector',
      description:
        'Research, evaluation, institutional strengthening, data systems and digital advisory services supporting public-sector programmes, planning and decision-making.'
    },

    {
      id: 'civil-society',
      icon: Users,
      title: 'Civil Society, NGOs & INGOs',
      description:
        'Evidence generation, MEAL, organisational strengthening and digital systems support for organisations delivering development and humanitarian programmes.'
    },

    {
      id: 'agriculture',
      icon: Sprout,
      title: 'Agriculture, Food Systems & Rural Livelihoods',
      description:
        'Research and programme-support services across agriculture, rural livelihoods, food systems, value chains and economic empowerment.'
    },

    {
      id: 'financial-inclusion',
      icon: WalletCards,
      title: 'Financial Inclusion, Cooperatives & Producer Organisations',
      description:
        'Data, research, assessment and institutional-support services for financial inclusion, cooperatives and producer-based organisations.'
    },

    {
      id: 'health',
      icon: HeartPulse,
      title: 'Health, SRHR, Nutrition & Public Health',
      description:
        'Research, assessment, MEAL and digital systems support across health, adolescent and youth SRHR, nutrition and public health programming.'
    },

    {
      id: 'wash',
      icon: Droplets,
      title: 'WASH, Water Resources & Climate-Resilient Livelihoods',
      description:
        'Evidence, assessment and programme-design support for water, sanitation, hygiene, water resources and climate resilience.'
    },

    {
      id: 'gender',
      icon: Users,
      title: 'Gender, Social Inclusion & Child Protection',
      description:
        'Inclusive research, safeguarding-sensitive systems and programme-support services addressing gender, disability, social inclusion and child protection.'
    },

    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education & Technical / Vocational Training',
      description:
        'Research, assessment, institutional strengthening and capacity-building services supporting education and technical and vocational training systems.'
    },

    {
      id: 'faith-based',
      icon: Church,
      title: 'Faith-Based & Community-Led Structures',
      description:
        'Evidence and organisational-support services for faith-based organisations, community structures and locally led development initiatives.'
    },

    {
      id: 'humanitarian',
      icon: ShieldAlert,
      title: 'Humanitarian Preparedness, Disaster Response & Early Warning',
      description:
        'Data, assessment, monitoring and information-system support for preparedness, response, resilience and early-warning programmes.'
    }
  ];


  /* =========================================================
     HANDLE HASH LINKS
     ========================================================= */

  useEffect(() => {

    if (location.hash) {

      const id = location.hash.substring(1);

      /*
       * Small delay allows React to finish rendering
       * the sector cards before attempting to scroll.
       */

      setTimeout(() => {

        const element = document.getElementById(id);

        if (element) {

          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

        }

      }, 100);

    } else {

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });

    }

  }, [location]);


  return (
    <div className="sectors">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="sectors-hero">

        <div className="sectors-hero-content">

          <p className="sectors-eyebrow">
            WHERE WE WORK
          </p>

          <h1>
            Sectors We Serve
          </h1>

          <p>
            Our multidisciplinary capabilities are applied across sectors
            where evidence, institutional performance, data and digital
            systems are critical to achieving better outcomes.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
          ===================================================== */}

      <section className="sectors-introduction">

        <div className="sectors-heading">

          

          <div>

            <p className="section-label">
              SECTOR EXPERIENCE
            </p>

            <h2>
              Applied across Malawi&apos;s development landscape.
            </h2>

          </div>

        </div>


        <p className="sectors-intro-text">
          We work across public, development, humanitarian and community-led
          programmes. Our approach is to combine sector understanding with
          rigorous research, evaluation, data management and digital
          capabilities rather than treating these disciplines as separate
          functions.
        </p>

      </section>


      {/* =====================================================
          SECTORS GRID
          ===================================================== */}

      <section className="sector-list">

        <div className="sector-grid">

          {sectors.map((sector, index) => {

            const Icon = sector.icon;

            return (

              <article
                className="sector-card"
                id={sector.id}
                key={sector.title}
              >

                <div className="sector-card-top">

                  

                  <div className="sector-icon">

                    <Icon
                      size={27}
                      strokeWidth={1.7}
                    />

                  </div>

                </div>


                <h3>
                  {sector.title}
                </h3>


                <p>
                  {sector.description}
                </p>

              </article>

            );

          })}

        </div>

      </section>


      {/* =====================================================
          CROSS-SECTOR CAPABILITY
          ===================================================== */}

      <section className="cross-sector">

        <div className="cross-sector-inner">

          <p className="section-label">
            HOW WE ENGAGE
          </p>

          <h2>
            Sector knowledge is strengthened by technical depth.
          </h2>

          <p>
            Our sector experience is supported by capabilities in research,
            monitoring and evaluation, data architecture, analytics, digital
            systems, institutional strengthening and capacity transfer. This
            allows us to design assignments around the actual problem rather
            than forcing every engagement into a predefined technical
            solution.
          </p>


          <Link
            to="/services"
            className="sectors-services-link"
          >
            Explore our services

            <ArrowRight size={18} />

          </Link>

        </div>

      </section>


      {/* =====================================================
          RESOURCING
          ===================================================== */}

      <section className="resourcing">

        <div className="resourcing-content">

          <p className="section-label">
            EXPERTISE &amp; RESOURCING
          </p>

          <h2>
            The right expertise for the assignment.
          </h2>

          <p>
            Where an engagement requires specialist expertise beyond our core
            team, we resource it through strategic partnerships or named
            specialist associations. We scope these arrangements transparently
            so that clients understand the expertise being brought into the
            assignment and how it contributes to delivery.
          </p>

        </div>

      </section>

    </div>
  );
}


export default Sectors;