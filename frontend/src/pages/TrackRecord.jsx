import React from 'react';
import '../TrackRecord.css';

function TrackRecord() {
  const evaluations = [
    {
      period: 'Oct 2019 – Dec 2024',
      client:
        'MUSCCO — MEAL system and member data architecture across a multi-donor portfolio (Development Fund of Norway TRANSFORM; We Effect / Sida CIVSAM; Canadian Development Fund)'
    },
    {
      period: 'May – Jul 2024',
      client:
        'CREMPA — M&E framework, Theory of Change and capacity-building tools designed for independent client use'
    },
    {
      period: 'Jan 2020 – Dec 2024',
      client:
        'FINCOOP SACCO — M&E framework for financial inclusion and renewable energy programming'
    },
    {
      period: 'Nov 2024 – Apr 2025',
      client:
        'mothers2mothers — Sondra Smalley Project midline evaluation'
    },
    {
      period: '2025',
      client:
        'MUSCCO (We Effect / Sida) — end-of-project evaluation against OECD-DAC criteria'
    },
    {
      period: 'Nov 2023 – Feb 2024',
      client:
        'John Snow, Inc. / Bantwana Initiative — HIV and SRHR Integration for AGYW endline evaluation'
    }
  ];

  const research = [
    {
      period: 'Jul 2026 – Sep 2028',
      client:
        'Jhpiego — implementation research study on pre-eclampsia and maternal anaemia prevention'
    },
    {
      period: '2026',
      client:
        'Save the Children International — climate-informed EWARS scoping study and research, six southern districts'
    },
    {
      period: 'Mar – Apr 2026',
      client:
        'Norwegian Church Aid / DanChurchAid — SRHR policy review across EAM, CCAP Livingstonia and CCAP Blantyre Synods'
    },
    {
      period: 'Jul – Aug 2025',
      client:
        'NASFAM — mixed-methods research study on microfinance readiness, three districts'
    },
    {
      period: 'Apr – May 2021',
      client:
        'Msilikali SACCO — Member Satisfaction Survey'
    },
    {
      period: 'Apr – May 2018',
      client:
        'Habitat for Humanity Malawi — USAID-funded WASH baseline study, 15 schools, Chikwawa'
    },
    {
      period: 'Mar – Apr 2018',
      client:
        'Help a Child Malawi — market and business opportunity survey for youth and women'
    },
    {
      period: 'Jan – Jun 2015',
      client:
        'National Statistical Office — MDHS and Malaria Indicator Survey field data quality assurance'
    }
  ];

  const strategy = [
    {
      period: '2026',
      client:
        'Centre for Environmental Policy and Advocacy — Strategic Plan 2026–2030'
    },
    {
      period: 'May – Sep 2026',
      client:
        'Ministry of Health, Presidential Health Unit — Devolution Plan development'
    },
    {
      period: '2025',
      client:
        'A-Capital Finance — Strategic Plan and standard operating procedures'
    },
    {
      period: '2022',
      client:
        'Floresta — strategic plan and institutional SOP development'
    }
  ];

  const renderTable = (assignments) => (
    <div className="track-record-table-wrapper">
      <table className="track-record-table">
        <thead>
          <tr>
            <th>Period</th>
            <th>Client & Programme</th>
          </tr>
        </thead>

        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index}>
              <td className="track-period">
                {assignment.period}
              </td>

              <td className="track-client">
                {assignment.client}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="track-record">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="track-record-hero">
        <div className="track-record-hero-content">

          <p className="track-record-eyebrow">
            OUR EXPERIENCE
          </p>

          <h1>
            Track Record
          </h1>

          <p className="track-record-hero-text">
            A record of assignments delivered across evaluation,
            research, evidence generation, strategy and institutional
            strengthening.
          </p>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="track-record-introduction">

        <div className="track-record-section-heading">
          

          <div>
            <p className="section-label">
              SELECTED ASSIGNMENTS
            </p>

            <h2>
              Experience that can be verified.
            </h2>
          </div>
        </div>

        <p>
          A verifiable record of completed and ongoing assignments
          delivered by Amplify Partnerships and, before the firm’s
          formal 2023 registration, by the same team under its
          current Managing Director.
        </p>

        <p>
          The assignments below demonstrate experience across
          evaluation, research, evidence generation, strategy,
          policy and institutional strengthening.
        </p>

        <p>
          Further references are available on request.
        </p>

      </section>


      {/* =====================================================
          EVALUATIONS
      ===================================================== */}

      <section
        className="track-record-section"
        id="evaluations"
      >

        <div className="track-record-section-heading">
          

          <div>
            <p className="section-label">
              EVALUATION
            </p>

            <h2>
              Evaluations
            </h2>
          </div>
        </div>

        {renderTable(evaluations)}

      </section>


      {/* =====================================================
          RESEARCH
      ===================================================== */}

      <section
        className="track-record-section track-record-section-light"
        id="research"
      >

        <div className="track-record-section-heading">
          

          <div>
            <p className="section-label">
              RESEARCH & EVIDENCE
            </p>

            <h2>
              Research Studies, Evidence Generation &amp;
              Implementation Research
            </h2>
          </div>
        </div>

        {renderTable(research)}

      </section>


      {/* =====================================================
          STRATEGY
      ===================================================== */}

      <section
        className="track-record-section"
        id="strategy"
      >

        <div className="track-record-section-heading">
          <span>04</span>

          <div>
            <p className="section-label">
              INSTITUTIONAL STRENGTHENING
            </p>

            <h2>
              Strategy, Policy &amp; Institutional Strengthening
            </h2>
          </div>
        </div>

        {renderTable(strategy)}

      </section>


      {/* =====================================================
          REFERENCES
      ===================================================== */}

      <section className="track-record-references">

        <div>
          <p className="section-label">
            REFERENCES
          </p>

          <h2>
            Need further evidence of our experience?
          </h2>

          <p>
            Further references and assignment documentation are
            available on request.
          </p>
        </div>

      </section>

    </div>
  );
}

export default TrackRecord;
