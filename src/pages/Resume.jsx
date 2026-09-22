import { Link } from "react-router-dom";
import {
  profile,
  highlights,
  experience,
  education,
  certifications,
  resumeSkills,
  resumeProjectIds,
} from "../data/resume";
import { projects } from "../data/projects";

const resumeProjects = resumeProjectIds
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean);

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-bar">
        <div>
          <p className="section-label">RÉSUMÉ</p>
          <h1 className="resume-bar-title">Austin Burris</h1>
        </div>
        <div className="resume-bar-actions">
          <button type="button" className="btn-primary" onClick={() => window.print()}>
            Download PDF →
          </button>
          <a href="/#contact" className="btn-outline">Contact Me</a>
        </div>
      </div>

      <p className="resume-print-note">
        “Download PDF” opens your browser’s print dialog — choose{" "}
        <strong>Save as PDF</strong>. The page is styled for print, so what you
        get is always the current version.
      </p>

      <article className="resume-sheet">
        <header className="resume-head">
          <h2 className="resume-name">{profile.name}</h2>
          <p className="resume-title">{profile.title}</p>
          <p className="resume-contact">
            {profile.location}
            <span className="resume-dot">·</span>
            {profile.phone}
            <span className="resume-dot">·</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p className="resume-contact">
            <a href={profile.site} target="_blank" rel="noreferrer">{profile.siteLabel}</a>
            <span className="resume-dot">·</span>
            <a href={profile.github} target="_blank" rel="noreferrer">{profile.githubLabel}</a>
            <span className="resume-dot">·</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedinLabel}</a>
          </p>
        </header>

        <section className="resume-section">
          <h3 className="resume-h">Summary</h3>
          <p className="resume-summary">{profile.summary}</p>
        </section>

        <section className="resume-section resume-section--stats">
          {highlights.map((h) => (
            <div key={h.label} className="resume-stat">
              <span className="resume-stat-num">{h.stat}</span>
              <span className="resume-stat-label">{h.label}</span>
              <span className="resume-stat-detail">{h.detail}</span>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h3 className="resume-h">Technical Skills</h3>
          <dl className="resume-skills">
            {resumeSkills.map(({ category, list }) => (
              <div key={category} className="resume-skill-row">
                <dt>{category}</dt>
                <dd>{list}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="resume-section">
          <h3 className="resume-h">Experience</h3>
          {experience.map((job) => (
            <div key={job.company} className="resume-job">
              <div className="resume-job-head">
                <div>
                  <p className="resume-job-role">{job.role}</p>
                  <p className="resume-job-company">{job.company}</p>
                </div>
                <div className="resume-job-meta">
                  <span>{job.period}</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <ul className="resume-bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h3 className="resume-h">Selected Projects</h3>
          {resumeProjects.map((p) => (
            <div key={p.id} className="resume-project">
              <p className="resume-project-head">
                <Link to={`/work/${p.id}`} className="resume-project-name">{p.title}</Link>
                <span className="resume-project-tagline"> — {p.tagline}</span>
              </p>
              <p className="resume-project-desc">{p.problem}</p>
              <p className="resume-project-tech">{p.tech.join(" · ")}</p>
            </div>
          ))}
          <p className="resume-more">
            <Link to="/work" className="link-green">See all {projects.length} projects with full case studies →</Link>
          </p>
        </section>

        <section className="resume-section resume-section--split">
          <div>
            <h3 className="resume-h">Education</h3>
            {education.map((e) => (
              <div key={e.degree} className="resume-edu">
                <p className="resume-edu-school">{e.school}</p>
                <p className="resume-edu-degree">{e.degree} · {e.year}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="resume-h">Certifications</h3>
            {certifications.map((c) => (
              <div key={c.name} className="resume-edu">
                <p className="resume-edu-school">
                  {c.name}
                  {c.status === "in-progress" && (
                    <span className="cert-badge">In Progress</span>
                  )}
                </p>
                <p className="resume-edu-degree">
                  {c.issuer}
                  {c.year ? ` · ${c.year}` : ""}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
