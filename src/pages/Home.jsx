import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { featuredProjects, projects } from "../data/projects";
import { highlights, pursuing } from "../data/resume";
import { FAQS } from "../data/faqs";
import heroImg from "../assets/hero.webp";



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

const SPARK = [
  {
    letter: "S",
    name: "Scope",
    body:
      "Your goals, your users, your constraints \u2014 not a feature list. We ask what the software has to accomplish and what happens today without it. Inherited or half-finished code starts with a paid technical review.",
  },
  {
    letter: "P",
    name: "Plan",
    body:
      "Scoped requirements, a build order, and a fixed quote with milestone billing. You see what's in, what's out, and what's deliberately deferred before any code is written.",
  },
  {
    letter: "A",
    name: "Assemble",
    body:
      "Structure before styling, then the full-stack build \u2014 interface, API, database, authentication, and integrations. You get working software to click through as it goes, not a reveal at the end.",
  },
  {
    letter: "R",
    name: "Release",
    body:
      "Deployment, domain, and hosting set up in your name from day one. We hand over the accounts, the repository, and documentation so nothing is locked to us.",
  },
  {
    letter: "K",
    name: "Keep",
    body:
      "Updates, fixes, and new features after launch on a plan that fits the project \u2014 or a clean handoff to your own team. Your call, either way.",
  },
];

/** Work we take on but do not price on the card wall \u2014 these are quoted per build. */
const CAPABILITIES = [
  {
    name: "Membership Portals",
    body: "Member directories, access tiers, intake flows, and the dashboard an organiser actually runs the group from.",
  },
  {
    name: "Internal Tools & Workflows",
    body: "The thing that replaces the spreadsheet everyone is tired of \u2014 admin tooling, approvals, and reporting shaped around how your team already works.",
  },
  {
    name: "Registration & Booking",
    body: "Event pages, sign-ups, waivers, and payment, with the roster and the reporting waiting on the other side of it.",
  },
  {
    name: "Integrations",
    body: "Stripe billing, Supabase and Clerk auth, AWS S3, the Claude API, and the webhooks that keep two systems honest with each other.",
  },
  {
    name: "Contract Engineering",
    body: "Overflow delivery for agencies and product teams \u2014 a bounded build, a rescue, or an extra pair of hands on a date you have already committed to.",
  },
  {
    name: "Technical Consulting",
    body: "A second opinion before you commit: stack choices, build versus buy, or a read on a quote somebody else gave you.",
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
      const res = await fetch("https://formsubmit.co/ajax/austin@moresmoke.dev", {
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
            More Smoke Dev is a software studio in Dallas. We build websites,
            membership portals, and internal tools for small businesses,
            nonprofits, and growing teams across Dallas–Fort Worth and
            remotely — on a written scope, a fixed quote, and an agreed launch
            date. Project and contract work both welcome.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Start a Project →</a>
            <Link to="/work/" className="btn-outline">View Our Work</Link>
          </div>
          <ul className="hero-proof">
            <li><strong>{projects.length}</strong> projects shipped</li>
            <li><strong>1M+</strong> users reached</li>
            <li><strong>10+</strong> years operating</li>
          </ul>
        </div>

        <div className="hero-center">
          <img
            src={heroImg}
            alt="Dashboard, mobile app and workflow interfaces built by More Smoke Dev"
            className="hero-img"
            width="900"
            height="900"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </section>


      {/* SERVICES */}
      <section className="section section--light" id="services">
        <div className="section-header">
          <p className="section-label">WHAT WE BUILD</p>
          <div className="section-header-row">
            <div>
              <h2>Two Ways to Work Together</h2>
              <p className="section-desc">
                Bounded offers with a defined scope, a fixed quote, and a launch
                date — for small businesses, nonprofits, membership
                organizations, and growing teams across Dallas–Fort Worth and
                remotely.
              </p>
            </div>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <h3>Website or Redesign</h3>
            <p className="service-price">from <strong>$1,000</strong></p>
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

          <div className="service-card service-card--highlight">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14.7 6.3a4 4 0 0 1-5 5L4 17v3h3l5.7-5.7a4 4 0 0 0 5-5l-2.5 2.5-2.1-.6-.6-2.1z" />
              </svg>
            </div>
            <h3>App Rescue &amp; Integration</h3>
            <p className="service-price">assessment <strong>$250</strong> · repairs from <strong>$1,000</strong></p>
            <p>
              Half-finished, inherited, or unreliable? We review it, tell you
              straight what it needs, then quote the repair.
            </p>
            <ul className="service-list">
              <li>A focused review of your codebase and setup</li>
              <li>Written findings and a prioritized fix list you keep</li>
              <li>A fixed quote for the repair, with the $250 taken off it</li>
              <li>Larger rebuilds scoped and quoted separately</li>
            </ul>
            <a href="#contact" className="link-green">Book an assessment →</a>
          </div>

        </div>

        <div className="support-band">
          <div className="support-band-main">
            <p className="support-band-label">AFTER LAUNCH</p>
            <h3>Ongoing Support — from $100/month</h3>
            <p>
              Monitoring, backups, security and dependency updates, and small
              content changes, with business-hours response and a named point
              of contact. Plans scale up with the hours you need. Not unlimited
              development and not 24/7 coverage — the terms are written down
              before you sign.
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

        <div className="capabilities">
          <div className="capabilities-head">
            <h3>Beyond the two offers</h3>
            <p>
              Bigger builds are scoped and quoted individually rather than
              sold off a price list. These are the shapes they usually take.
            </p>
          </div>

          <ol className="capability-list">
            {CAPABILITIES.map(({ name, body }, i) => (
              <li className="capability-row" key={name}>
                <span className="capability-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="capability-name">{name}</h4>
                <p className="capability-body">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* STATEMENT BAND */}
      <section className="statement-band">
        <div className="statement-grid">
          <h2 className="statement-headline">
            You have had the vague quote before.
            <br />
            This one is a number.
          </h2>
          <div className="statement-body">
            <p>
              A written scope, a fixed price against it, and a date. You know
              what is in, what is out, and what it costs before anyone writes a
              line of code.
            </p>
            <p>
              If what you already have is half-finished, we read it first.
              Quoting code we have not opened helps neither of us.
            </p>
            <a href="#contact" className="statement-link">Put a number on it</a>
          </div>
        </div>
      </section>

      {/* WHO YOU WORK WITH */}
      <section className="section section--alt">
        <div className="about-home-grid">
          <div className="about-home-text">
            <p className="intro-label">WHO YOU WORK WITH</p>
            <h2 className="about-home-name">Austin Burris</h2>
            <p className="about-home-role">Founder &amp; Principal Engineer · Dallas, TX</p>
            <p className="about-home-bio">
              More Smoke Dev is deliberately small, and that is the point: the
              person who scopes your project is the person who writes the code.
              Austin founded the studio after a decade of operating his own
              companies — scaling a subscription platform past a million
              monthly users, then building More Smoke, the cigar brand this
              studio takes its name from. That history is why we talk about
              revenue and deadlines as readily as we talk about schemas.
            </p>
            <Link to="/about/" className="btn-outline">More About the Studio →</Link>
          </div>
          <div className="about-home-traits">
            <div className="trait-card">
              <span className="trait-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#42d36b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              </span>
              <strong>Fixed scope, fixed quote</strong>
              <p>A written scope and a quote you can plan against — agreed before any code is written.</p>
            </div>
            <div className="trait-card">
              <span className="trait-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#42d36b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </span>
              <strong>You own everything</strong>
              <p>Code, domain, and hosting in your accounts from day one. No lock-in, no licensing fees.</p>
            </div>
            <div className="trait-card">
              <span className="trait-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#42d36b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </span>
              <strong>One point of contact</strong>
              <p>No account manager relaying messages. You talk to the engineer doing the work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section section--light" id="process">
        <div className="section-header">
          <p className="section-label">HOW WE WORK</p>
          <div className="section-header-row">
            <div>
              <h2>The S.P.A.R.K. Method.</h2>
              <p className="section-desc">
                A clear path from the first conversation to software you own.
                Five stages, so you always know where we are, what's next, and
                what it costs.
              </p>
            </div>
            <a href="#contact" className="btn-outline">Start at Scope →</a>
          </div>
        </div>

        <ol className="spark-grid">
          {SPARK.map(({ letter, name, body }) => (
            <li className="spark-card" key={letter}>
              <span className="spark-letter" aria-hidden="true">{letter}</span>
              <h3>{name}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FEATURED WORK */}
      <section className="section" id="work">
        <div className="section-header">
          <p className="section-label">SELECTED WORK</p>
          <div className="section-header-row">
            <div>
              <h2>Selected Work</h2>
              <p className="section-desc">
                {featuredProjects.length} of the {projects.length} applications we
                have shipped.
                Each case study opens with the problem it was built to solve.
              </p>
            </div>
            <Link to="/work/" className="btn-outline">All Case Studies →</Link>
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
                  <Link to={`/work/${project.id}/`} className="link-green">
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
              AVAILABLE FOR CONTRACT
            </p>
            <h2>Need an extra engineer?</h2>
            <p className="section-desc">
              {projects.length} shipped projects and ten years of operating
              experience behind the code. More Smoke Dev takes contract and
              contract-to-hire engagements — overflow delivery for agencies, a
              rescue on something half-finished, or a bounded build your team
              does not have the hours for.
            </p>
            <div className="hiring-roles">
              {pursuing.map((role) => (
                <span key={role} className="role-tag">{role}</span>
              ))}
            </div>
            <div className="hiring-actions">
              <a href="#contact" className="btn-primary">Check Availability →</a>
              <Link to="/skills/" className="btn-outline">Our Stack</Link>
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
              lifestyle brand our founder built and scaled in Dallas from
              scratch: the product line, the retail partnerships, the events,
              and the identity. The same standard behind that brand is what
              runs this studio. Same name. Same bar. Different industry.
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
          <p className="section-label">CLIENTS</p>
          <div className="section-header-row">
            <div>
              <h2>What They're Saying</h2>
              <p className="section-desc">
                Feedback from the people we have built for.
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
      <section className="section section--light" id="faq">
        <div className="faq-layout">
          <aside className="faq-aside">
            <p className="section-label">A FEW THINGS TO KNOW</p>
            <h2>Common questions.</h2>
            <p className="section-desc">
              What most people want to know before they reach out. Want to
              talk through your own project instead?
            </p>
            <a href="#contact" className="statement-link faq-aside-link">
              Ask us directly
            </a>
          </aside>

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
                    className="faq-sign"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <line x1="2" y1="9" x2="16" y2="9" />
                    <line className="faq-sign-v" x1="9" y1="2" x2="9" y2="16" />
                  </svg>
                </button>
                {openFaq === i && (
                  <p className="faq-answer">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT + CALENDLY */}
      <section className="section section--alt" id="contact">
        <div className="section-header">
          <p className="section-label">LET'S TALK</p>
          <div className="section-header-row">
            <div>
              <h2>Start a Conversation</h2>
              <p className="section-desc">
                Book a call and we'll scope the work, talk budget against the
                starting prices above, and agree a date. Contract and agency
                overflow enquiries welcome — we reply within one business day
                either way.
              </p>
            </div>
          </div>
        </div>

        <div className="contact-home-grid">
          <div className="contact-home-col">
            <h3 className="contact-home-subhead">Book a 30-min call</h3>
            <p className="contact-home-meta">
              An intro conversation, a technical walkthrough, or a project
              scoping session — whichever you need. No commitment.
            </p>
            <CalendlyEmbed />
          </div>

          <div className="contact-home-col">
            <h3 className="contact-home-subhead">Send a message</h3>
            <p className="contact-home-meta">
              Prefer to write it out? Fill this out and we'll reply within one
              business day.
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
                  <option value="">Not sure / contract rate</option>
                  <option value="Support plan ($100+/mo)">Support plan ($100+/mo)</option>
                  <option value="Assessment first ($250)">Assessment first ($250)</option>
                  <option value="$1K – $2.5K">$1K – $2.5K</option>
                  <option value="$2.5K – $5K">$2.5K – $5K</option>
                  <option value="$5K – $10K">$5K – $10K</option>
                  <option value="$10K+">$10K+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell us about your project..." required />
              </div>
              {formStatus === "success" && (
                <p className="form-success">Message sent — we'll be in touch shortly.</p>
              )}
              {formStatus === "error" && (
                <p className="form-error">Something went wrong. Try emailing us directly.</p>
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
