import React, { useEffect } from 'react';
import {
  Search,
  ClipboardCheck,
  Building2,
  MonitorSmartphone,
  Sprout,
  HeartPulse,
  Users,
  Droplets,
  GraduationCap,
  Database,
  BarChart3,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

import { Link, useLocation } from 'react-router-dom';

import '../Services.css';

function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location]);

  const consultingPractices = [
    {
      id: 'research-data',
      icon: Search,
      title: 'Research, Data & Evidence Generation',
      description:
        'End-to-end research services covering study design, tool development, field data collection, data management, quality assurance, analysis and reporting.',
      details: [
        'Quantitative and qualitative study design',
        'Questionnaire and data-collection tool development',
        'Primary and secondary data collection',
        'Computer-assisted personal interviewing at scale',
        'Data management, cleaning and quality assurance',
        'Quantitative and qualitative analysis',
        'Technical reporting and evidence products'
      ]
    },
    {
      id: 'meal',
      icon: ClipboardCheck,
      title: 'Monitoring, Evaluation, Accountability & Learning',
      description:
        'We design practical MEAL systems that help organisations measure results, understand performance and turn evidence into organisational learning.',
      details: [
        'Baseline, midline and endline studies',
        'Programme and project evaluations',
        'OECD-DAC aligned evaluation frameworks',
        'Theory of Change and results frameworks',
        'Indicator frameworks and measurement systems',
        'Performance Indicator Reference Sheets',
        'Indicator Tracking Tables and learning reviews'
      ]
    },
    {
      id: 'strategy',
      icon: Building2,
      title: 'Strategy, Institutional Strengthening & Policy Analysis',
      description:
        'We help organisations strengthen strategy, institutional performance and decision-making through structured analysis and practical recommendations.',
      details: [
        'Strategic planning',
        'Institutional capacity assessments',
        'Management and governance reviews',
        'Standard Operating Procedures',
        'Evidence-based advocacy strategies',
        'Political economy and stakeholder power analysis',
        'Policy briefs and decision-oriented evidence products'
      ]
    },
    {
      id: 'digital-systems',
      icon: MonitorSmartphone,
      title: 'Digital Systems, Platforms & Institutional Digital Advisory',
      description:
        'We translate organisational needs and evidence requirements into practical digital systems, platforms and information architectures.',
      details: [
        'Needs assessment and requirements definition',
        'System architecture and data modelling',
        'UX/UI design',
        'Web and mobile application development',
        'System integration and data migration',
        'Testing, security and deployment',
        'Documentation, training and post-deployment support',
        'Source-code, schema and documentation handover'
      ]
    },
    {
      id: 'agriculture',
      icon: Sprout,
      title: 'Agriculture, Value Chains & Rural Livelihoods',
      description:
        'Research, assessment and programme-support services for agriculture, livelihoods and rural economic development.'
    },
    {
      id: 'health',
      icon: HeartPulse,
      title: 'Health, Nutrition & Public Health',
      description:
        'Evidence generation, assessment, monitoring and digital systems support across health, nutrition and public health programmes.'
    },
    {
      id: 'inclusion',
      icon: Users,
      title: 'Gender, Disability & Social Inclusion',
      description:
        'Inclusive research, assessment and programme design that considers gender, disability and the needs of marginalised populations.'
    },
    {
      id: 'community',
      icon: Users,
      title: 'Community Development & Child Wellbeing',
      description:
        'Research, monitoring and programme-support services for community development, child wellbeing and protection programming.'
    },
    {
      id: 'wash-climate',
      icon: Droplets,
      title: 'WASH, Water Resources & Climate-Resilient Programme Design',
      description:
        'Evidence, assessment and programme-design support for WASH, water resources and climate resilience.'
    },
    {
      id: 'training',
      icon: GraduationCap,
      title: 'Training & Capacity Building',
      description:
        'Practical training and knowledge-transfer programmes designed to leave clients with the skills and systems needed to sustain their work.'
    }
  ];

  const technicalMethods = [
    {
      domain: 'Data Sources',
      methods:
        'Primary household surveys, community dialogues, key informant interviews, focus group discussions and secondary administrative data audits.'
    },
    {
      domain: 'Indicator Development',
      methods:
        'SMART indicators linked to logframes, Theories of Change and Sustainable Development Goals.'
    },
    {
      domain: 'Data Quality',
      methods:
        'Automated data-quality checks, range and consistency validation scripts, error flagging and cross-tabulation pipelines.'
    },
    {
      domain: 'CAPI',
      methods:
        'Solstice, KoboToolbox, ODK, CommCare, CSPro, REDCap and Survey Solutions, including skip logic, validation, GPS, timestamps, daily synchronisation and same-day error return.'
    },
    {
      domain: 'Measurement & Scales',
      methods:
        'Psychometric scales, poverty lookup tools, Food Consumption Score, Household Dietary Diversity Score and WASH/health indexes.'
    },
    {
      domain: 'Analysis & Visualisation',
      methods:
        'SPSS, STATA, Excel, NVivo, Python, R, Power BI and Tableau.'
    },
    {
      domain: 'Indicator Systems',
      methods:
        'Performance Indicator Reference Sheets, Indicator Tracking Tables and indicator crosswalks distinguishing comparable, modified and new indicators.'
    },
    {
      domain: 'Ethics & Safeguarding',
      methods:
        'Research protocols, informed consent, child safeguarding, vulnerable-population considerations and disability inclusion.'
    },
    {
      domain: 'Data Governance',
      methods:
        'Separation of identifiers, encrypted and password-protected devices, restricted access, structured archive handover and retention/destruction procedures.'
    },
    {
      domain: 'Languages',
      methods:
        'English, Chichewa and Tumbuka.'
    }
  ];

  return (
    <div className="services">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-content">
          <p className="services-eyebrow">
            WHAT WE DO
          </p>

          <h1>
            Services We Offer
          </h1>

          <p className="services-hero-text">
            Our work brings together research, evaluation, institutional
            strengthening, data and digital systems to help organisations
            generate evidence, improve performance and build solutions that
            last.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="services-introduction">
        <div className="services-section-heading">
          
          <h2>Our Consulting Practices</h2>
        </div>

        <p>
          Our work is organised around consulting practices that span the
          evidence-to-implementation cycle. We lead with the areas most
          directly relevant to research, evaluation, data and digital systems,
          while bringing additional sector and institutional expertise where
          the assignment requires it.
        </p>
      </section>

      {/* CORE SERVICES */}
      <section className="practice-section">
        <div className="practice-grid">

          {consultingPractices.slice(0, 4).map((practice) => {
            const Icon = practice.icon;

            return (
              <article
                className="practice-card practice-card-primary"
                id={practice.id}
                key={practice.id}
              >
                <div className="practice-icon">
                  <Icon size={30} strokeWidth={1.7} />
                </div>

                <p className="practice-number">
                  PRACTICE
                </p>

                <h3>{practice.title}</h3>

                <p className="practice-description">
                  {practice.description}
                </p>

                <ul>
                  {practice.details.map((detail, index) => (
                    <li key={index}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}

        </div>
      </section>

      {/* FURTHER PRACTICES */}
      <section className="further-practices">

        <div className="services-section-heading">
          
          <div>
            <p className="section-label">ADDITIONAL PRACTICES</p>
            <h2>Further Practice Areas</h2>
          </div>
        </div>

        <div className="further-practice-grid">

          {consultingPractices.slice(4).map((practice) => {
            const Icon = practice.icon;

            return (
              <article
                className="further-practice-card"
                id={practice.id}
                key={practice.id}
              >
                <div className="further-practice-icon">
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                <h3>{practice.title}</h3>

                <p>{practice.description}</p>
              </article>
            );
          })}

        </div>
      </section>

      {/* TECHNICAL METHODS */}
      <section
        className="technical-methods"
        id="technical-methods"
      >
        <div className="services-section-heading">
          
          <div>
            <p className="section-label">DELIVERY CAPABILITY</p>
            <h2>Technical Methods, Tools & Standards</h2>
          </div>
        </div>

        <p className="section-introduction">
          Our delivery approach is supported by established methods, tools
          and standards across research, measurement, data management,
          analysis and digital systems.
        </p>

        <div className="technical-table-wrapper">
          <table className="technical-table">
            <thead>
              <tr>
                <th>Domain</th>
                <th>Methods & Tools</th>
              </tr>
            </thead>

            <tbody>
              {technicalMethods.map((item, index) => (
                <tr key={index}>
                  <td>{item.domain}</td>
                  <td>{item.methods}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CURRENT ENGAGEMENT */}
      <section
        className="current-engagement"
        id="current-engagement"
      >
        <div className="engagement-content">

          <p className="section-label">
            CURRENT EVALUATION, ASSESSMENT & SURVEY ENGAGEMENTS
          </p>

          <h2>
            From evidence to a working platform.
          </h2>

          <p>
            We are presently developing, for the Ministry of Health
            Presidential Health Unit, a national adolescent and youth sexual
            and reproductive health mobile application together with its
            underlying management information system — an engagement that
            began with a national needs assessment and now covers requirements
            definition, data architecture, application build and deployment.
          </p>

          <p>
            It is a live demonstration of the full arc this firm delivers:
            from the evidence that establishes what a system must do, through
            to the working platform itself.
          </p>

        </div>
      </section>

      {/* MEASUREMENT + SYSTEMS */}
      <section
        className="measurement-systems"
        id="measurement-systems"
      >
        <div className="measurement-icon">
          <Database size={34} strokeWidth={1.6} />
        </div>

        <div>
          <p className="section-label">
            WHERE MEASUREMENT AND SYSTEMS MEET
          </p>

          <h2>
            We operationalise indicators, not simply report against them.
          </h2>

          <p>
            Our MEAL practice is distinguished by how we operationalise
            indicators rather than simply report against them. For each
            outcome indicator, we produce a Performance Indicator Reference
            Sheet specifying the indicator statement, definitions, unit of
            measure, numerator, denominator and formula, disaggregation, data
            source, collection frequency, baseline value and known
            limitations, alongside an Indicator Tracking Table that functions
            as the programme&apos;s measurement ledger.
          </p>

          <p>
            When we then build the system that carries those indicators, the
            definitions are already settled — which is why our evaluation
            work produces insights that clients can defend rather than numbers
            they have to explain.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div>
          <p className="section-label">
            WORK WITH US
          </p>

          <h2>
            Have a research, evaluation, data or systems challenge?
          </h2>

          <p>
            Tell us what you are trying to achieve. We can help scope the
            evidence, systems and capabilities required to move it forward.
          </p>
        </div>

        <Link to="/contact" className="services-cta-button">
          Start a conversation
          <ArrowRight size={18} />
        </Link>
      </section>

    </div>
  );
}

export default Services;