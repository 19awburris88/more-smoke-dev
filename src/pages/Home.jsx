import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../data/projects";
import heroImg from "../assets/hero.png";

const FAQS = [
  {
    q: "How much does a project cost?",
    a: "Most sites and landing pages run $500–$3,000. Full-stack web apps start at $3,000 and scale with complexity. I'll give you a flat quote after our first conversation — no hourly billing surprises.",
  },
  {
    q: "How long does a project take?",
    a: "A landing page or brand site is typically 1–2 weeks. A full-stack app takes 3–6 weeks depending on scope. I give you a realistic timeline upfront, not a stretch goal.",
  },
  {
    q: "Do I own the code when we're done?",
    a: "Yes — 100%. The code, the domain, the hosting. Everything is yours at completion. No lock-in, no licensing fees.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A clear idea of what you're building, any branding assets (logos, colors, fonts), and content if it's a marketing site. I'll handle the rest and guide you through anything that's missing.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes. I offer retainer arrangements for updates, bug fixes, and feature additions after launch. We can work out what makes sense for your project.",
  },
];

// Replace with real client quotes before publishing
const TESTIMONIALS = [
  {
    quote:
      "Austin built exactly what I needed — a site that communicates who I am and opens doors. The level of detail and care he brought was beyond what I expected.",
    name: "Daniel Farr",
    role: "Builder · Strategist · Atlanta",
  },
  {
    quote:
      "My practice's website went from idea to live in under two weeks. Austin understood exactly what a healthcare site needs to build patient trust.",
    name: "Dr. Jeni Grundy",
    role: "Founder, Virtual Care Now",
  },
  {
    quote:
      "Austin captured my brand better than I could have described it. The animations, the vibe, the details — everything was on point.",
    name: "Mike Gillis",
    role: "Digital Creator · Indianapolis",
  },
];

function CalendlyEmbed() {
  useEffect(() => {
    if (document.querySelector('script[src*="assets.calendly.com"]')) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/19awburris88/30min?hide_gdpr_banner=1&background_color=111111&text_color=ffffff&primary_color=42d36b"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formStatus, setFormStatus] = useState("idle");

  function toggleFaq(i) {
    setOpenFaq((prev) => (prev === i ? null : i));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("sending");
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const res = await fetch("https://formsubmit.co/ajax/19awburris88@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormStatus("success");
        e.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="hero hero--two-col">
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
            <a href="#contact" className="btn-outline">Work With Me</a>
          </div>
        </div>

        <div className="hero-center">
          <img src={heroImg} alt="More Smoke Dev" className="hero-img" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--light">
        <div className="section-header">
          <p className="section-label">WHAT I BUILD</p>
          <div className="section-header-row">
            <div>
              <h2>Find Your Fit</h2>
              <p className="section-desc">
                Whether you need a brand presence, a web app, or a full-stack
                platform — I've built it.
              </p>
            </div>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🏢</div>
            <h3>Businesses & Brands</h3>
            <p>
              Landing pages, event sites, and brand experiences that look the
              part and convert.
            </p>
            <ul className="service-list">
              <li>Brand & marketing websites</li>
              <li>Event & campaign pages</li>
              <li>Lead generation funnels</li>
              <li>Nonprofit & donation platforms</li>
            </ul>
            <a href="#contact" className="link-green">Start a project →</a>
          </div>

          <div className="service-card">
            <div className="service-icon">🎙️</div>
            <h3>Founders & Creators</h3>
            <p>
              Personal brands, podcasts, and platforms that establish authority
              and grow with you.
            </p>
            <ul className="service-list">
              <li>Personal brand websites</li>
              <li>Podcast & media platforms</li>
              <li>Portfolio & profile sites</li>
              <li>Content & community hubs</li>
            </ul>
            <a href="#contact" className="link-green">Start a project →</a>
          </div>

          <div className="service-card service-card--highlight">
            <div className="service-icon">⚙️</div>
            <h3>Full-Stack Builds</h3>
            <p>
              Complex apps with real backends, databases, and custom logic —
              built to scale.
            </p>
            <ul className="service-list">
              <li>React + Node.js web apps</li>
              <li>Python / FastAPI backends</li>
              <li>PostgreSQL & Supabase</li>
              <li>Auth, admin panels & APIs</li>
            </ul>
            <a href="#contact" className="link-green">Start a project →</a>
          </div>
        </div>
      </section>

      {/* ABOUT AUSTIN */}
      <section className="section section--alt">
        <div className="about-home-grid">
          <div className="about-home-text">
            <p className="intro-label">HEY, I'M</p>
            <h2 className="about-home-name">Austin Burris</h2>
            <p className="about-home-role">Full Stack Developer · Indianapolis, IN</p>
            <p className="about-home-bio">
              I'm a developer who loves turning ideas into impactful digital
              experiences. I focus on clean design, performance, and building
              things that deliver real value — for businesses, founders, and
              communities that deserve great software.
            </p>
            <Link to="/about" className="btn-outline">More About Me →</Link>
          </div>
          <div className="about-home-traits">
            <div className="trait-card">
              <span className="trait-icon">🧩</span>
              <strong>Problem Solver</strong>
              <p>I enjoy tackling complex challenges and finding elegant solutions.</p>
            </div>
            <div className="trait-card">
              <span className="trait-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#42d36b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </span>
              <strong>Detail Oriented</strong>
              <p>Clean code, thoughtful UI, and attention to the little things.</p>
            </div>
            <div className="trait-card">
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
                {project.image
                  ? <img src={project.image} alt={project.title} className="project-preview-img" />
                  : <span className="project-placeholder">{project.title[0]}</span>
                }
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

      {/* TESTIMONIALS */}
      <section className="section section--grey">
        <div className="section-header">
          <p className="section-label">CLIENT LOVE</p>
          <div className="section-header-row">
            <div>
              <h2>What They're Saying</h2>
              <p className="section-desc">
                Real feedback from people I've built for.
              </p>
            </div>
          </div>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map(({ quote, name, role }) => (
            <div className="testimonial-card" key={name}>
              <p className="testimonial-quote">"{quote}"</p>
              <div className="testimonial-author">
                <strong>{name}</strong>
                <span>{role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--light section--centered">
        <div className="section-header">
          <p className="section-label">FAQ</p>
          <div className="section-header-row">
            <div>
              <h2>Common Questions</h2>
              <p className="section-desc">
                Everything you're probably wondering before you reach out.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className={`faq-item${openFaq === i ? " faq-item--open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(i)}
                aria-expanded={openFaq === i}
              >
                <span>{item.q}</span>
                <svg
                  className="faq-chevron"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openFaq === i && (
                <p className="faq-answer">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT + CALENDLY */}
      <section className="section section--alt" id="contact">
        <div className="section-header">
          <p className="section-label">LET'S WORK TOGETHER</p>
          <div className="section-header-row">
            <div>
              <h2>Work With Me</h2>
              <p className="section-desc">
                Book a quick call or send a message. Either way, I'll get back
                to you fast.
              </p>
            </div>
          </div>
        </div>

        <div className="contact-home-grid">
          <div className="contact-home-col">
            <h3 className="contact-home-subhead">Book a 30-min call</h3>
            <p className="contact-home-meta">
              Let's talk through your project, timeline, and budget. No
              commitment — just a conversation.
            </p>
            <CalendlyEmbed />
          </div>

          <div className="contact-home-col">
            <h3 className="contact-home-subhead">Send a message</h3>
            <p className="contact-home-meta">
              Prefer to write it out? Fill this out and I'll reply within 24
              hours.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="project-type">Project Type</label>
                <select id="project-type" name="project_type" required>
                  <option value="">Select a project type...</option>
                  <option value="New Web App">New Web App</option>
                  <option value="Website / Landing Page">Website / Landing Page</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Full-Time Opportunity">Full-Time Opportunity</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <select id="budget" name="budget_range" required>
                  <option value="">Select a budget range...</option>
                  <option value="Under $1K">Under $1K</option>
                  <option value="$1K – $5K">$1K – $5K</option>
                  <option value="$5K – $10K">$5K – $10K</option>
                  <option value="$10K+">$10K+</option>
                  <option value="Let's Talk">Let's Talk</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." required />
              </div>
              {formStatus === "success" && (
                <p className="form-success">Message sent! I'll be in touch soon.</p>
              )}
              {formStatus === "error" && (
                <p className="form-error">Something went wrong. Try emailing me directly.</p>
              )}
              <button type="submit" className="btn-primary" disabled={formStatus === "sending"}>
                {formStatus === "sending" ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
