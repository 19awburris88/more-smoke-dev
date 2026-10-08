import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { featuredProjects, projects } from "../data/projects";
import { highlights, pursuing } from "../data/resume";
import heroImg from "../assets/hero.png";

const FAQS = [
  {
    q: "How much does a project cost?",
    a: "Websites and redesigns start at $3,500. Portal and workflow applications start at $9,000. App rescues begin with a $250 assessment, credited toward the repair, and the repair is quoted once I know what I'm looking at. Every project gets a fixed quote against a written scope before work starts — no hourly billing, no surprise invoices.",
  },
  {
    q: "What does the $250 assessment get me?",
    a: "A focused review of your codebase and setup, written findings, and a prioritized fix list — yours to keep and take anywhere, even if you never hire me. If the honest answer is \"don't fix this, rebuild it\" or \"you don't need me,\" that's what you'll get. If you do move forward, the $250 comes off the repair. It's priced to be an easy yes, so it's a bounded review rather than open-ended consulting.",
  },
  {
    q: "How long does a project take?",
    a: "A website or redesign is typically 3–5 weeks. A portal or workflow application runs 8–12 weeks to a first release. Rescues depend entirely on what the assessment finds. I give you a realistic date upfront and tell you early if it moves.",
  },
  {
    q: "Do I own the code when we're done?",
    a: "Yes — 100%. The code, the domain, and the hosting accounts are yours, set up in your name from day one. No lock-in and no licensing fees. Production hosting, external API usage, and any third-party licenses are billed to your accounts at cost and approved before I turn them on.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes — $1,000/month for up to six combined service hours covering monitoring, small changes, and maintenance, with business-hours response. Most clients add it at launch. It's a written agreement with stated terms, not unlimited development and not 24/7 coverage.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A decision maker who can approve a scope and a budget, a clear sense of what the software has to accomplish, any branding assets you have, and content if it's a marketing site. I'll guide you through whatever is missing.",
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

const PROCESS = [
  {
    step: "01",
    name: "Discovery",
    body:
      "We start with your goals, your users, and your constraints — not a feature list. I ask what the software has to accomplish and what happens today without it. Inherited or half-finished code starts with a paid technical review, because quoting what I haven't read helps neither of us.",
  },
  {
    step: "02",
    name: "Product Planning",
    body:
      "I turn that conversation into scoped requirements, a build order, and a fixed quote with milestone billing. You see what's in, what's out, and what's deliberately deferred before any code is written.",
  },
  {
    step: "03",
    name: "UX Design",
    body:
      "Structure before styling: the screens, the flows, and the decisions a user has to make. I design the path through the product, then make it look like your brand.",
  },
  {
    step: "04",
    name: "Development",
    body:
      "Full-stack build — interface, API, database, authentication, and integrations. You get working software to click through as it goes, not a reveal at the end.",
  },
  {
    step: "05",
    name: "Launch",
    body:
      "Deployment, domain, and hosting set up in your name from day one. I hand over the accounts, the repository, and documentation so nothing is locked to me.",
  },
  {
    step: "06",
    name: "Support",
    body:
      "Updates, fixes, and new features after launch on a retainer that fits the project — or a clean handoff to your own team. Your call, either way.",
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
            I'm Austin Burris — a full stack engineer with an MBA and a
            founder's track record. More Smoke Dev is where I build production
            web applications for clients and ship my own products. I'm currently
            open to full-time roles and to new client work.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Start a Project →</a>
            <Link to="/work" className="btn-outline">View My Work</Link>
          </div>
          <p className="hero-tertiary">
            Hiring instead? <Link to="/resume">See my résumé →</Link>
          </p>
          <ul className="hero-proof">
            <li><strong>{projects.length}</strong> projects shipped</li>
            <li><strong>1M+</strong> users reached</li>
            <li><strong>10+</strong> years operating</li>
          </ul>
        </div>

        <div className="hero-center">
          <img src={heroImg} alt="More Smoke Dev" className="hero-img" />
        </div>
      </section>


      {/* SERVICES */}
      <section className="section section--light" id="services">
        <div className="section-header">
          <p className="section-label">WHAT I BUILD</p>
          <div className="section-header-row">
            <div>
              <h2>Three Ways to Work Together</h2>
              <p className="section-desc">
                Bounded offers with a defined scope, a fixed quote, and a launch
                date — for small businesses, nonprofits, membership
                organizations, and growing teams.
              </p>
            </div>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🖥️</div>
            <h3>Website or Redesign</h3>
            <p className="service-price">from <strong>$3,500</strong></p>
            <p>
              A bounded business site that earns its keep — for small
              businesses, nonprofits, and personal brands.
            </p>
            <ul className="service-list">
              <li>Agreed page count and responsive layouts</li>
              <li>Content migration from your current site</li>
              <li>Contact forms and analytics setup</li>
              <li>Launch and handoff in your own accounts</li>
            </ul>
            <a href="#contact" className="link-green">Start a project →</a>
          </div>

          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>App Rescue &amp; Integration</h3>
            <p className="service-price">assessment <strong>$250</strong> · credited to the repair</p>
            <p>
              Half-finished, inherited, or unreliable? I review it, tell you
              honestly what it needs, then quote the repair.
            </p>
            <ul className="service-list">
              <li>A focused review of your codebase and setup</li>
              <li>Written findings and a prioritized fix list you keep</li>
              <li>A fixed quote for the repair, or an honest "don't"</li>
              <li>Larger rebuilds scoped and quoted separately</li>
            </ul>
            <a href="#contact" className="link-green">Book an assessment →</a>
          </div>

          <div className="service-card service-card--highlight">
            <div className="service-icon">⚙️</div>
            <h3>Portal or Workflow App</h3>
            <p className="service-price">from <strong>$9,000</strong></p>
            <p>
              A focused first release for membership organizations and growing
              teams — built to replace the spreadsheet everyone is tired of.
            </p>
            <ul className="service-list">
              <li>Member access, intake flows, and dashboards</li>
              <li>Internal workflows and admin tooling</li>
              <li>Authentication and data access defined up front</li>
              <li>Acceptance criteria agreed before quoting</li>
            </ul>
            <a href="#contact" className="link-green">Scope a build →</a>
          </div>
        </div>

        <div className="support-band">
          <div className="support-band-main">
            <p className="support-band-label">AFTER LAUNCH</p>
            <h3>Ongoing Support — $1,000/month</h3>
            <p>
              Up to six combined service hours a month for monitoring, small
              changes, and maintenance. Business-hours response and a named
              point of contact. Not unlimited development and not 24/7 coverage
              — the terms are written down before you sign.
            </p>
          </div>
          <a href="#contact" className="btn-primary support-band-cta">Add Support →</a>
        </div>

        <p className="services-footnote">
          Starting prices, not quotes. Every project is scoped and fixed-quoted
          before work begins. Production hosting, external API usage, and
          third-party licenses are set up in your accounts and billed at cost,
          approved in advance.
        </p>
      </section>

      {/* ABOUT AUSTIN */}
      <section className="section section--alt">
        <div className="about-home-grid">
          <div className="about-home-text">
            <p className="intro-label">HEY, I'M</p>
            <h2 className="about-home-name">Austin Burris</h2>
            <p className="about-home-role">Full Stack Engineer · Dallas, TX · Open to Remote</p>
            <p className="about-home-bio">
              I'm a full-stack developer and entrepreneur. I build digital
              experiences with real intent — and I've lived the founder journey
              firsthand as the owner of More Smoke, a premium cigar lifestyle
              brand I built from scratch. That experience gives me a perspective
              most developers don't have: I know what it costs to build something
              real, and I bring that same standard to every project I take on.
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

      {/* HOW I WORK */}
      <section className="section section--light" id="process">
        <div className="section-header">
          <p className="section-label">HOW I WORK</p>
          <div className="section-header-row">
            <div>
              <h2>From Idea to Supported</h2>
              <p className="section-desc">
                I lead every project through the same six stages — so you
                always know where we are, what's next, and what it costs.
              </p>
            </div>
            <a href="#contact" className="btn-outline">Start at Step One →</a>
          </div>
        </div>

        <ol className="process-grid">
          {PROCESS.map(({ step, name, body }) => (
            <li className="process-card" key={step}>
              <span className="process-step">{step}</span>
              <h3>{name}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
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

      {/* OPEN TO WORK */}
      <section className="section section--alt hiring-band" id="hiring">
        <div className="hiring-grid">
          <div className="hiring-intro">
            <p className="section-label">
              <span className="hiring-dot" aria-hidden="true" />
              OPEN TO OPPORTUNITIES
            </p>
            <h2>Hiring? Start Here.</h2>
            <p className="section-desc">
              {projects.length} shipped projects, an MBA, and ten years of
              operating experience behind the code. I write the software and I
              understand the business it has to serve — requirements,
              stakeholders, roadmap, and revenue.
            </p>
            <div className="hiring-roles">
              {pursuing.map((role) => (
                <span key={role} className="role-tag">{role}</span>
              ))}
            </div>
            <div className="hiring-actions">
              <Link to="/resume" className="btn-primary">View Résumé →</Link>
              <Link to="/skills" className="btn-outline">Technical Skills</Link>
            </div>
          </div>

          <div className="hiring-stats">
            {highlights.map((h) => (
              <div key={h.label} className="hiring-stat">
                <span className="hiring-stat-num">{h.stat}</span>
                <span className="hiring-stat-label">{h.label}</span>
                <span className="hiring-stat-detail">{h.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MORE SMOKE BRAND */}
      <section className="section section--light">
        <div className="brand-home-grid">
          <div className="brand-home-text">
            <p className="section-label">THE BRAND</p>
            <h2 className="brand-home-headline">More Smoke</h2>
            <p className="brand-home-tagline">A premium cigar lifestyle brand built on culture, community, and craft.</p>
            <p className="brand-home-bio">
              Before More Smoke Dev, there was More Smoke — the premium cigar
              lifestyle brand I founded and scaled in Dallas. I built it from
              scratch: the product line, the retail partnerships, the events,
              and the identity. The same drive and entrepreneurial mindset
              behind that brand is what powers this dev shop. Same name. Same
              standard. Different industry.
            </p>
            <div className="brand-stats">
              <div className="brand-stat">
                <span className="brand-stat-num">13+</span>
                <span className="brand-stat-label">Products & SKUs</span>
              </div>
              <div className="brand-stat">
                <span className="brand-stat-num">15+</span>
                <span className="brand-stat-label">Retail Partners</span>
              </div>
              <div className="brand-stat">
                <span className="brand-stat-num">6+</span>
                <span className="brand-stat-label">Brand Events</span>
              </div>
            </div>
            <a
              href="https://moresmoke.co"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              style={{ marginTop: "32px", display: "inline-block" }}
            >
              Visit moresmoke.co →
            </a>
          </div>
          <div className="brand-home-card">
            <p className="brand-quote">"The name means something. It's not a gimmick — it's the standard I hold myself to in everything I build."</p>
            <p className="brand-card-attr">— Austin Burris, Founder</p>
          </div>
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
          <p className="section-label">LET'S TALK</p>
          <div className="section-header-row">
            <div>
              <h2>Hire Me or Work With Me</h2>
              <p className="section-desc">
                Clients: book a call and we'll scope the work, talk budget
                against the starting prices above, and agree a date. Recruiters
                and hiring managers: same two options — I reply within 24
                hours either way.
              </p>
            </div>
          </div>
        </div>

        <div className="contact-home-grid">
          <div className="contact-home-col">
            <h3 className="contact-home-subhead">Book a 30-min call</h3>
            <p className="contact-home-meta">
              An intro conversation, a role walkthrough, or a project scoping
              session — whichever you need. No commitment.
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
                  <option value="">What's this about?</option>
                  <option value="Full-Time Role">Full-Time Role</option>
                  <option value="Contract / Contract-to-Hire">Contract / Contract-to-Hire</option>
                  <option value="New Web App">New Web App</option>
                  <option value="Website / Landing Page">Website / Landing Page</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">
                  Budget Range <span className="form-optional">(project work only)</span>
                </label>
                <select id="budget" name="budget_range">
                  <option value="">Not applicable — I'm hiring</option>
                  <option value="Support retainer ($1K/mo)">Support retainer ($1K/mo)</option>
                  <option value="Assessment first ($250)">Assessment first ($250)</option>
                  <option value="$3.5K – $7.5K">$3.5K – $7.5K</option>
                  <option value="$7.5K – $15K">$7.5K – $15K</option>
                  <option value="$15K+">$15K+</option>
                  <option value="Not sure yet">Not sure yet</option>
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
