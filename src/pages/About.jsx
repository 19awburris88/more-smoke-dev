import { Link } from "react-router-dom";
import { experience, education, certifications, pursuing } from "../data/resume";

export default function About() {
  return (
    <>
      <section className="section section--light">
        <div className="page-header" style={{ marginBottom: 0 }}>
          <p className="section-label">ABOUT ME</p>
          <h1>More Than Just Code</h1>
          <p className="page-desc">
            A builder at the intersection of business strategy, entrepreneurship,
            and technology — with a track record that goes well beyond the IDE.
          </p>
          <div className="page-header-actions">
            <Link to="/resume" className="btn-primary">View Full Résumé →</Link>
            <a href="/#contact" className="btn-outline">Get in Touch</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="about-grid">
          <div className="about-main">
            <div className="about-card">
              <p>
                I'm a son, friend, follower of Christ, and entrepreneur who
                believes success is measured not only by what we build, but by
                how we serve others along the way. Originally from Indianapolis
                and now based in Dallas, Texas, I strive to live a life rooted in
                faith, meaningful relationships, continuous growth, and purposeful
                work.
              </p>
              <p>
                Professionally, I bring a unique blend of business leadership,
                entrepreneurship, and technology. With a Business degree, MBA,
                Executive MBA in Digital Marketing, and software engineering
                training from Fullstack Academy, I've spent my career solving
                problems, building businesses, and creating experiences that
                connect people.
              </p>
              <p>
                What makes me different is my ability to bridge the gap between
                business and technology. I understand both the technical side of
                building products and the business side of growing them — whether
                that's gathering requirements, managing stakeholders, developing
                software, launching products, or creating go-to-market strategies.
                I thrive where business objectives and technology intersect.
              </p>
              <p>
                When I'm not coding or building businesses, you'll find me
                studying Scripture, spending time with family and friends,
                exploring great restaurants, enjoying a premium cigar, cheering on
                my favorite sports teams, or investing in personal growth and
                fitness.
              </p>
            </div>

            <div className="about-section-label">OPEN TO OPPORTUNITIES IN</div>
            <div className="roles-grid">
              {pursuing.map((role) => (
                <div key={role} className="role-tag">{role}</div>
              ))}
            </div>

            <div className="about-section-label" style={{ marginTop: "48px" }}>EXPERIENCE</div>
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
                        {c.year ? ` \u00b7 ${c.year}` : ""}
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
              <h3>TECHNICAL SKILLS</h3>
              <div className="skills-inline">
                <p className="skills-cat">Frontend</p>
                <p className="skills-list">React, TypeScript, JavaScript, Vite, Tailwind CSS, Material UI, TanStack Query, Zustand, Framer Motion</p>
                <p className="skills-cat">Backend</p>
                <p className="skills-list">Node.js, Express, Python, FastAPI, REST APIs, JWT Auth &amp; Token Rotation, Webhooks</p>
                <p className="skills-cat">Data</p>
                <p className="skills-list">PostgreSQL, Prisma, Supabase, SQLite, Data Modeling, Row-Level Security, Multi-Tenant Architecture</p>
                <p className="skills-cat">AI &amp; Platform</p>
                <p className="skills-list">Claude API, AI Feature Design, Stripe, AWS S3, Clerk, PWAs &amp; Service Workers</p>
                <p className="skills-cat">Tools &amp; Delivery</p>
                <p className="skills-list">Git, GitHub, Postman, Netlify, Vercel, Render, Agile/Scrum, Stakeholder Management</p>
              </div>
            </div>

            <Link to="/resume" className="btn-primary" style={{ display: "flex", justifyContent: "center", marginTop: "8px" }}>
              View Full Résumé →
            </Link>
            <a href="/#contact" className="btn-outline" style={{ display: "flex", justifyContent: "center" }}>
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
