import { Link } from "react-router-dom";
import { featuredProjects } from "../data/projects";
import heroImg from "../assets/hero.png";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-headline">
            MORE SMOKE.<br />
            <span>BETTER SOLUTIONS.</span>
          </h1>
          <p className="hero-sub">
            More Smoke Dev is my development company and creative outlet. I
            build modern, scalable web applications and solve real problems
            with clean code and intent.
          </p>
          <div className="hero-buttons">
            <Link to="/work" className="btn-primary">View My Work →</Link>
            <Link to="/about" className="btn-outline">About Austin</Link>
          </div>
        </div>

        <div className="hero-center">
          <img src={heroImg} alt="More Smoke Dev" className="hero-img" />
        </div>

        <div className="hero-right">
          <p className="intro-label">HEY, I'M</p>
          <h2 className="hero-name">Austin Burris</h2>
          <p className="hero-title">Full Stack Developer</p>
          <p className="hero-bio">
            I'm a developer who loves turning ideas into impactful digital
            experiences. I focus on clean design, performance, and building
            things that deliver real value.
          </p>
          <div className="hero-traits">
            <div className="trait">
              <span className="trait-icon">🧩</span>
              <strong>Problem Solver</strong>
              <p>I enjoy tackling complex challenges and finding elegant solutions.</p>
            </div>
            <div className="trait">
              <span className="trait-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#42d36b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </span>
              <strong>Detail Oriented</strong>
              <p>Clean code, thoughtful UI, and attention to the little things.</p>
            </div>
            <div className="trait">
              <span className="trait-icon">🚀</span>
              <strong>Always Learning</strong>
              <p>I stay curious and constantly expand my skills and knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="section" id="work">
        <div className="section-header">
          <p className="section-label">FEATURED WORK</p>
          <div className="section-header-row">
            <div>
              <h2>Things I've Built</h2>
              <p className="section-desc">
                A selection of projects I'm proud of. Each one represents a
                challenge, a solution, and growth.
              </p>
            </div>
            <Link to="/work" className="btn-outline">View All Projects →</Link>
          </div>
        </div>

        <div className="projects-grid projects-grid--4">
          {featuredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <span className="project-placeholder">{project.title[0]}</span>
              </div>
              <div className="project-card-body">
                <div className="project-card-top">
                  <h3>{project.title}</h3>
                  <span className="badge">{project.type}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-card-footer">
                  <Link to={`/work/${project.id}`} className="link-green">
                    View Project →
                  </Link>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="nav-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
