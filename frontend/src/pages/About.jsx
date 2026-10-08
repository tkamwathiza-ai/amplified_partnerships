import React from 'react';
import {
  UserCheck,
  FileText,
  Layers,
  GraduationCap,
  Languages,
  Scale
} from 'lucide-react';
import '../About.css';

function About() {
  return (
    <div className="about">

      {/* =========================
          WHO WE ARE
      ========================= */}

      <section className="about-section">

        <h2 className="about-title">
          Who We Are
        </h2>

        <h3 className="about-subtitle">
          Practical Consulting. Evidence. Real-World Impact.
        </h3>

        <p>
          Amplify Partnerships is a Malawi-based consulting firm that helps
          governments, development partners, humanitarian agencies, faith-based
          organisations, civil society and financial institutions design,
          deliver and evaluate work that holds up under real-world conditions.
          We are based in Lilongwe and work across all three regions of Malawi
          and, increasingly, across the wider Southern African region — in
          ministry boardrooms and district offices, in cooperatives, schools,
          health facilities and rural communities where programmes are actually
          implemented.
        </p>

        <p>
          We were built around a simple conviction: good consulting is not
          about producing polished documents, but about producing decisions,
          systems and evidence that organisations can actually act on. Nowhere
          is that distinction sharper than in evaluation and assessment work,
          where data should shape programming and investment decisions rather
          than merely justify them after the fact.
        </p>

        <p>
          Our answer to this is systems-insight-led consulting and real-time
          learning from data. We start from observed local realities: what a
          field officer will do on a Monday afternoon in a remote area with
          zero mobile network coverage, and what a data manager needs to see
          before they will trust the data enough to act on it. This operational
          discipline anchors our entire approach to evaluation, assessment and
          survey work.
        </p>

        <p>
          The firm is led by a small, senior core team supplemented by named
          associates drawn in according to the technical demands of each
          engagement. Our Managing Director personally leads and signs off
          every assignment the firm issues.
        </p>

      </section>


      {/* =========================
          OUR HISTORY & BACKGROUND
      ========================= */}

      <section className="about-section history-section">

        <h2 className="about-title">
          Our History & Background
        </h2>

        <p>
          Amplify Partnerships traces its roots to 2017, when our founding
          team began working directly within Malawi’s development sector, long
          before the firm existed as a formal entity. Earlier still, in 2015,
          our Managing Director worked as a statistician on field data quality
          assurance for the Malawi Demographic and Health Survey and the Malaria
          Indicator Survey across four districts.
        </p>

        <p>
          That early work spanned baseline studies, midline and endline
          evaluations, and monitoring and evaluation systems strengthening
          across health, agriculture, and broader development programming,
          building a foundation of practical, field-tested experience rather
          than theoretical consulting credentials.
        </p>

        <p>
          By the time Amplify Partnerships was formally registered in 2023, we
          were not starting a consultancy from scratch; we were giving a name
          and a structure to work we had already been doing successfully for
          half a decade.
        </p>

        <p>
          The trajectory since has run from single-organisation policy and
          evaluation assignments, to multi-year monitoring and evaluation
          systems, on to national-level government consultancies commissioned
          directly by the Ministry of Health, and most recently into
          implementation research and the design and build of digital
          platforms for national institutions.
        </p>

        <p>
          Running through all of it is the same underlying capability:
          understanding what an organisation actually needs to know, and
          building the systems and evidence that let it know it.
        </p>

      </section>


      {/* =========================
          OUR TEAM
      ========================= */}

      <section className="about-section team-section">

        <h2 className="about-title">
          Our Team
        </h2>

        <h3 className="about-subtitle">
          Lean by design. Senior by default.
        </h3>

        <p>
          Rather than a large fixed payroll, we deliberately keep our core
          team lean and senior. The practical consequence for clients is this:
          the people who design the system are the people who build it, test
          it and hand it over. Work is not handed off to junior staff once
          the contract is signed.
        </p>

        <p>
          The firm is led by its Managing Director, an evaluation methodologist
          and data systems specialist holding an MBA, a first degree in
          mathematics and statistics, and postgraduate study in data science,
          with over a decade of experience designing and delivering measurement
          systems, evaluations and digital platforms for government, INGO and
          financial sector clients. He personally leads and signs off every
          assignment the firm issues.
        </p>

        <div className="team-table-wrapper">

          <table className="team-table">

            <thead>
              <tr>
                <th>Discipline</th>
                <th>Seniority & Capability</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>
                  MEAL Frameworks & Survey Design
                </td>

                <td>
                  Master&apos;s-qualified MEAL specialist with over ten years
                  of continuous MEAL practice for government and
                  development-sector clients in Malawi; energy and water
                  sector platforms, and social welfare case management
                  systems; Certified Monitoring and Evaluation.
                </td>
              </tr>

              <tr>
                <td>
                  Data, Analytics & Reporting
                </td>

                <td>
                  Master&apos;s-qualified economist, statistician and research
                  data specialist with a multilateral development bank
                  background in portfolio monitoring and dashboard reporting,
                  and extensive experience designing survey instruments,
                  training field teams on electronic data collection
                  platforms, and leading data validation and cleaning to donor
                  standards.
                </td>
              </tr>

              <tr>
                <td>
                  Research & Qualitative Methods
                </td>

                <td>
                  Masters-qualified agricultural, poverty, livelihoods,
                  public health and community empowerment implementation
                  specialists who have led multi-district research and
                  evaluation studies across Malawi for major international
                  donors, with prior district-level operational management
                  experience in community programming.
                </td>
              </tr>

              <tr>
                <td>
                  Associate Network
                </td>

                <td>
                  Practising clinicians and public health specialists,
                  environmental governance experts, gender and social
                  inclusion (GEDSI) leads, XLSForm designers, CAPI experts,
                  data quality assurance engineers, and data scientists —
                  named in proposals when required rather than promised
                  generically.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      {/* =========================
          HOW WE STAFF ENGAGEMENTS
      ========================= */}

      <section className="about-section staffing-section">

        <h2 className="about-title">
          How We Staff Engagements
        </h2>

        <p className="section-intro">
          Our staffing model is designed around direct accountability,
          transparent resourcing and consistent quality regardless of the
          scale of an assignment.
        </p>

        <div className="principles-grid">

          <div className="principle-card">
            <span>
              <UserCheck size={26} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3>Senior Accountability</h3>
            <p>
              Every engagement is led by a senior team member with direct,
              named accountability for quality and delivery, and every
              deliverable is signed off by that person.
            </p>
          </div>

          <div className="principle-card">
            <span>
              <FileText size={26} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3>Named Personnel</h3>
            <p>
              Named curricula vitae for all key personnel are supplied with
              every proposal. We commit only to people we know are available
              for the actual contract dates.
            </p>
          </div>

          <div className="principle-card">
            <span>
              <Layers size={26} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3>Scalable Delivery</h3>
            <p>
              Field and delivery capacity is scaled to match the size of the
              assignment, with consistent quality-assurance protocols applied
              regardless of team size.
            </p>
          </div>

          <div className="principle-card">
            <span>
              <GraduationCap size={26} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3>Specialist Expertise</h3>
            <p>
              Specialist expertise is drawn from our associate network as the
              engagement requires, named in the proposal rather than promised
              generically.
            </p>
          </div>

          <div className="principle-card">
            <span>
              <Languages size={26} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3>Multilingual Delivery</h3>
            <p>
              Multilingual delivery in English, Chichewa and Tumbuka ensures
              stakeholder engagement does not bottleneck on external
              translators. Portuguese and other regional languages are
              resourced through named associates.
            </p>
          </div>

          <div className="principle-card">
            <span>
              <Scale size={26} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3>Conflict Transparency</h3>
            <p>
              Where a team member has prior institutional history with a client
              or partner organisation, we disclose it openly in the proposal
              and manage any conflict-of-interest concern through independent
              validation and client-side sign-off.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          QUALITY ASSURANCE
      ========================= */}

      <section className="about-section quality-section">

        <h2 className="about-title">
          Quality Assurance, Security & Data Governance
        </h2>

        <p className="section-intro">
          The credibility of a system rests on how it was built. The standing
          arrangements below apply to every assignment, unless a client
          protocol imposes something stricter — in which case the stricter
          standard applies.
        </p>


        {/* QUALITY ASSURANCE */}

        <div className="quality-block">

          <h3>
            Quality Assurance
          </h3>

          <ul>
            <li>
              A definition of done that requires code review by a second
              developer, automated test coverage, accessibility checking, and
              demonstration before any feature is counted as complete.
            </li>

            <li>
              Continuous integration: every commit triggers an automated
              build, test run, and dependency vulnerability scan, and a
              failing build blocks the merge.
            </li>

            <li>
              Field usability testing with real users on the device classes
              actually in use, with findings treated as defects rather than
              suggestions.
            </li>

            <li>
              A documented source trail for every reported figure or finding,
              and a triangulation requirement on research deliverables:
              every key finding must appear in at least two independent
              sources.
            </li>

            <li>
              Independent internal validation by a team member other than the
              person who produced the work, and named senior sign-off on every
              deliverable before it reaches the client.
            </li>
          </ul>

        </div>


        {/* SECURITY */}

        <div className="quality-block">

          <h3>
            Security & Privacy
          </h3>

          <ul>
            <li>
              Encryption in transit and at rest; multi-factor authentication
              on all privileged roles; role-based access control scoped to the
              minimum a user needs.
            </li>

            <li>
              Personal identifiers separated from analytical data, with access
              restricted to the core team and no individual identifiable in
              any output unless they have consented.
            </li>

            <li>
              Independent security review and penetration testing before
              go-live on systems holding personal data, with findings
              remediated and a written security report issued to the client.
            </li>

            <li>
              Immutable audit trails on personal data records, queryable by
              the client.
            </li>
          </ul>

        </div>


        {/* ETHICS */}

        <div className="quality-block">

          <h3>
            Ethics & Safeguarding
          </h3>

          <ul>
            <li>
              Voluntary participation preceded by informed consent, recorded
              in the participant&apos;s own language and revocable.
            </li>

            <li>
              A safeguarding code of conduct signed by, and trained on by,
              every team member before deployment, with zero tolerance for
              sexual exploitation, abuse and harassment.
            </li>

            <li>
              Written parental or guardian consent for any engagement with
              children, with age-appropriate methods and pre-identified
              referral pathways.
            </li>

            <li>
              Submission to the National Health Sciences Research Committee
              where the assignment requires it.
            </li>
          </ul>

        </div>


        {/* OWNERSHIP */}

        <div className="quality-block">

          <h3>
            Ownership, Handover & Transparency
          </h3>

          <ul>
            <li>
              All data, source code, schemas, tools and deliverables are
              treated as the property of the client, and a structured
              electronic archive and repository are handed over at close of
              assignment.
            </li>

            <li>
              Open-source stacks with no proprietary licence fees and no
              vendor lock-in; technical documentation written for a successor
              maintainer.
            </li>

            <li>
              No client data retained after handover beyond any period
              specified in writing by the client, after which working copies
              are securely destroyed.
            </li>

            <li>
              We name the limitations of every system and study we deliver,
              together with the specific measures that contain them. We regard
              this as a matter of integrity rather than a caveat to be
              minimised.
            </li>
          </ul>

        </div>

      </section>


      {/* =========================
          GOVERNANCE & SAFEGUARDING
      ========================= */}

      <section className="about-section governance-section">

        <h2 className="about-title">
          Governance and Safeguarding Standing
        </h2>

        <p>
          Our Managing Director serves as Board Member and Chairperson of the
          Human Resources and Organisational Development Committee at SOS
          Children’s Villages Malawi, a child-focused international NGO. The
          role carries governance oversight on human resource policy,
          organisational development, staff wellbeing and safeguarding. It
          means our engagement leads bring the perspective of someone who has
          sat on the governance side of an international NGO, not only
          consulted for one — which matters when a system holds identifiable
          personal data on vulnerable people.
        </p>

      </section>

    </div>
  );
}

export default About;
