import { experience, education, certifications, pursuing } from "../data/resume";

export default function About() {
  return (
    <>
      <section className="section section--light">
        <div className="page-header" style={{ marginBottom: 0 }}>
          <p className="section-label">ABOUT</p>
          <h1>A Software Studio in Dallas</h1>
          <p className="page-desc">
            More Smoke Dev builds websites, membership portals, and internal
            tools for small businesses, nonprofits, and growing teams — and
            takes on contract engineering for agencies and product teams that
            need another pair of hands.
          </p>
          <div className="page-header-actions">
            <a href="/#contact" className="btn-primary">Start a Conversation →</a>
            <a href="/#services" className="btn-outline">What We Build</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="about-grid">
          <div className="about-main">
            <div className="about-card">
              <p>
                We are deliberately small, and that is the point. The person
                who scopes your project is the person who writes the code, so
                nothing is lost between the first call and the build, and there
                is no account manager relaying messages in either direction.
              </p>
              <p>
                Every engagement is bounded. You get a written scope, a fixed
                quote with milestone billing, and a launch date agreed before
                any code is written — not an hourly meter. We tell you what a
                feature will cost before it is built and what we think should
                be deferred out of a first release. Inherited or half-finished
                code starts with a paid technical review rather than a guess,
                because quoting what we have not read helps neither of us.
              </p>
              <p>
                We work where business objectives and technology meet. The
                studio was built by an operator, so requirements get gathered
                from the people who will actually use the software, and
                trade-offs get explained in terms of revenue and deadlines
                rather than architecture diagrams.
              </p>
              <p>
                Everything we hand over is yours. The code, the domain, and the
                hosting accounts are set up in your name from day one, with no
                lock-in and no licensing fees, and the documentation is written
                so your own team can maintain what we built.
              </p>
            </div>

            <div className="about-section-label">FOUNDER</div>
            <div className="about-card">
              <p>
                More Smoke Dev was founded by <strong>Austin Burris</strong>, a
                full stack engineer with a Business degree, an MBA, an Executive
                MBA in Digital Marketing, and software engineering training from
                Fullstack Academy at UT Dallas. Before writing software for
                clients, he spent eight years co-founding EatHere, a
                subscription media platform he scaled past a million monthly
                users across 27 markets while serving as both CFO and CTO. He
                still runs More Smoke, the premium cigar brand this studio takes
                its name from.
              </p>
              <p>
                Austin is a son, friend, and follower of Christ, originally from
                Indianapolis and now based in Dallas, who believes success is
                measured not only by what gets built but by how people are
                served along the way. Outside the work you will find him
                studying Scripture, with family and friends, chasing a good
                restaurant, enjoying a premium cigar, or cheering on his teams.
              </p>
            </div>

            <div className="about-section-label">HOW WE ENGAGE</div>
            <div className="roles-grid">
              {pursuing.map((role) => (
                <div key={role} className="role-tag">{role}</div>
              ))}
            </div>

            <div className="about-section-label" style={{ marginTop: "48px" }}>TRACK RECORD</div>
            <div className="timeline">
              {experience.map((job) => (
                <div key={job.company} className="timeline-item">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{job.role}</h3>
                      <p className="timeline-company">{job.company}</p>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-period">{job.period}</span>
                      <span className="timeline-location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="timeline-bullets">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="credentials-col">
            <div className="credential-card">
              <h3>EDUCATION</h3>
              <div className="edu-list">
                {education.map((e) => (
                  <div key={e.degree} className="edu-item">
                    <p className="edu-school">{e.school}</p>
                    <p className="edu-degree">{e.degree}</p>
                    <span className="edu-year">{e.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="credential-card">
              <h3>CERTIFICATIONS</h3>
              <ul>
                {certifications.map((c) => (
                  <li key={c.name} className="cert-item">
                    <span className="cert-text">
                      {c.name}
                      <span className="cert-issuer">
                        {c.issuer}
                        {c.year ? ` · ${c.year}` : ""}
                      </span>
                    </span>
                    {c.status === "in-progress" ? (
                      <span className="cert-badge">In Progress</span>
                    ) : (
                      <span className="cert-badge cert-badge--earned">Earned</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="credential-card">
              <h3>CAPABILITIES</h3>
              <div className="skills-inline">
                <p className="skills-cat">Frontend</p>
                <p className="skills-list">React, TypeScript, JavaScript, Next.js, Vite, Tailwind CSS, Material UI, TanStack Query, Zustand, Framer Motion</p>
                <p className="skills-cat">Backend</p>
                <p className="skills-list">Node.js, Express, Python, FastAPI, REST APIs, JWT Auth &amp; Token Rotation, Webhooks</p>
                <p className="skills-cat">Data</p>
                <p className="skills-list">PostgreSQL, Prisma, Supabase, SQLite, Data Modeling, Row-Level Security, Multi-Tenant Architecture</p>
                <p className="skills-cat">AI &amp; Platform</p>
                <p className="skills-list">Claude API, AI Feature Design, Stripe, AWS S3, Clerk, PWAs &amp; Service Workers</p>
                <p className="skills-cat">Delivery</p>
                <p className="skills-list">Git, GitHub, Postman, Netlify, Vercel, Render, Agile/Scrum, Stakeholder Management</p>
              </div>
            </div>

            <a href="/#contact" className="btn-primary" style={{ display: "flex", justifyContent: "center", marginTop: "8px" }}>
              Start a Conversation →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
