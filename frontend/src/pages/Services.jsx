import React from 'react';

function Services() {
  return (
    <div
      style={{
        padding: '4rem 2rem',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.7',
      }}
    >
      {/* Page Header */}
      <div style={{ marginBottom: '3rem' }}>
        <h2
          style={{
            fontSize: '2.2rem',
            color: '#0f172a',
            marginBottom: '0.5rem',
          }}
        >
          Services We Offer
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#475569' }}>
          Our work is organised around six core consulting practices, combining
          deep sector experience with flexible capabilities that respond to
          client needs across different contexts.
        </p>
      </div>

      {/* Service 1 */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ color: '#1e40af', marginBottom: '0.7rem' }}>
          1. Health & Social Development Policy
        </h3>

        <p>
          Development, review, and strengthening of health policies and
          strategies, youth and adolescent health strategies, and institutional
          health policies for organisations, government bodies, and civil
          society networks. Our work includes evidence synthesis, stakeholder
          validation, gender-transformative analysis, and monitoring and
          evaluation framework design.
        </p>
      </div>

      {/* Service 2 */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ color: '#1e40af', marginBottom: '0.7rem' }}>
          2. Monitoring, Evaluation, Accountability & Learning (MEAL)
        </h3>

        <p>
          Design and implementation of baseline, midline, and endline studies;
          Knowledge, Attitudes and Practices (KAP) research; programme
          evaluations against OECD-DAC criteria; Theory of Change development;
          and indicator frameworks. We combine quantitative survey design with
          qualitative methods including key informant interviews, focus group
          discussions, and community mapping.
        </p>
      </div>

      {/* Service 3 */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ color: '#1e40af', marginBottom: '0.7rem' }}>
          3. Government & Institutional Advisory
        </h3>

        <p>
          Delivery of commissioned consultancies for government ministries and
          departments, including sector devolution planning, digital and mobile
          platform strategy, and national quality management system reviews. We
          combine technical expertise with an understanding of public-sector
          processes and stakeholder engagement.
        </p>
      </div>

      {/* Service 4 */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ color: '#1e40af', marginBottom: '0.7rem' }}>
          4. Advocacy & Strategic Communication
        </h3>

        <p>
          Development of evidence-based advocacy and influencing strategies
          for civil society coalitions and rights-based programmes. This
          includes political economy and stakeholder power analysis, budget
          advocacy planning, and capacity-building for effective advocacy
          delivery.
        </p>
      </div>

      {/* Service 5 */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ color: '#1e40af', marginBottom: '0.7rem' }}>
          5. Research, Data & Evidence Generation
        </h3>

        <p>
          End-to-end research services, from study design and tool development
          through field data collection, data management and quality assurance,
          to analysis and report writing. We help organisations generate
          credible evidence to guide decisions and meet donor reporting
          requirements.
        </p>
      </div>

      {/* Service 6 */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ color: '#1e40af', marginBottom: '0.7rem' }}>
          6. Institutional Strengthening & Strategic Planning
        </h3>

        <p>
          Support for organisations seeking to strengthen their internal
          systems, strategic plans, governance and safeguarding policies,
          proposal and business development capacity, and team structures. Our
          approach helps organisations build solid institutional foundations
          for sustainable growth.
        </p>
      </div>
    </div>
  );
}

export default Services;