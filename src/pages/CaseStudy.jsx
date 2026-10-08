import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function CaseStudy() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="page-container" style={{ textAlign: "center", paddingTop: "100px" }}>
        <h2>Project not found.</h2>
        <Link to="/work" className="btn-primary" style={{ display: "inline-block", marginTop: "24px" }}>
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Link to="/work" className="back-link">← Back to All Projects</Link>

      <div className="case-hero">
        <div className="case-image">
          {project.image
            ? <img src={project.image} alt={`${project.title} preview`} />
            : <span className="project-placeholder large">{project.title[0]}</span>
          }
        </div>
        <div className="case-intro">
          <span className="badge">{project.type}</span>
          <h1>{project.title}</h1>
          <p className="case-tagline">{project.tagline}</p>
          {project.role && (
            <p className="case-role">
              <span className="case-role-label">My role</span>
              {project.role}
            </p>
          )}
          <div className="case-actions">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
                Live Demo →
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
                GitHub Repo
              </a>
            )}
            {!project.live && !project.github && (
              <p className="case-private">
                Private build — code and deployment are the client's.{" "}
                <a href="/#contact" className="link-green">Ask me for a walkthrough →</a>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="case-body">
        <div className="case-section">
          <h2>The Problem</h2>
          <p>{project.problem}</p>
        </div>

        <div className="case-section">
          <h2>The Solution</h2>
          <p>{project.description}</p>
        </div>

        {project.outcome && (
          <div className="case-section case-section--outcome">
            <h2>The Outcome</h2>
            <p>{project.outcome}</p>
          </div>
        )}

        <div className="case-section">
          <h2>Features</h2>
          <ul className="feature-list">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="case-section">
          <h2>Tech Stack</h2>
          <div className="project-tech">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
