const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance — Business & Technology Solutions",
    period: "Apr 2025 – Present",
    location: "Remote (Dallas, TX)",
    bullets: [
      "Partner with founders, small businesses, and personal ventures to design and build technology-driven solutions that improve user experience, drive engagement, and support business growth",
      "Build frontend interfaces, backend APIs, authentication systems, and payment integrations using React, Express, PostgreSQL, and Prisma",
      "Translate real-world problems into scalable digital products focused on usability and retention",
    ],
  },
  {
    role: "Founder & Operator",
    company: "More Smoke (formerly Cultured King Cigars)",
    period: "2023 – Present",
    location: "Dallas, TX",
    bullets: [
      "Built and scaled a premium cigar lifestyle brand, expanding into 15+ retail/lounge partnerships across the market",
      "Launched 13+ cigar products/SKUs, aligning product design, branding, and storytelling to drive repeat purchases and brand loyalty",
      "Developed and executed a go-to-market strategy introducing a revenue-sharing retail model that reduced upfront cost barriers for partners",
      "Led 6+ brand activations and events, driving event-based sales and new customer acquisition",
      "Managed end-to-end operations: supply chain, vendor relationships, inventory, and digital presence",
    ],
  },
  {
    role: "Co-Founder, CFO & CTO",
    company: "EatHere",
    period: "2015 – 2023",
    location: "Indianapolis, IN",
    bullets: [
      "Co-founded and scaled a subscription-based digital media platform to 1M+ monthly users across 27 markets nationwide",
      "Drove 357% year-over-year growth and generated over $150K in recurring revenue",
      "Directed product strategy, platform development, and technology roadmap as CFO & CTO simultaneously",
      "Built strategic partnerships with major brands including McDonald's, Indy Chamber, and Visit Indy",
      "Organized large-scale activations (3,000+ attendees), integrating digital product engagement with real-world experiences",
    ],
  },
];

const education = [
  {
    school: "Fullstack Academy – University of Texas at Dallas",
    degree: "Certificate, Software Engineering (Full-Stack & AI Focus)",
    year: "2025",
  },
  {
    school: "Anderson University",
    degree: "MBA, Marketing",
    year: "2013",
  },
  {
    school: "Rutgers University",
    degree: "Mini MBA, Digital Marketing",
    year: "2012",
  },
  {
    school: "Anderson University",
    degree: "B.A., Entrepreneurship",
    year: "2011",
  },
];

const certifications = [
  { name: "Certified ScrumMaster (CSM)", status: "earned", year: "2026" },
  { name: "Claude Certified Architect – Anthropic", status: "in-progress" },
  { name: "Relationship Management & Business Development – Coursera", status: "in-progress" },
  { name: "Google IT Support Professional – Coursera", status: "in-progress" },
];

const pursuing = [
  "Business Analysis",
  "Product Management & Development",
  "Software Engineering",
  "Business Development",
  "Technology Consulting",
  "Customer Success & Solutions Engineering",
];

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
                    <span>{c.name}</span>
                    {c.status === "in-progress" && (
                      <span className="cert-badge">In Progress</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="credential-card">
              <h3>TECHNICAL SKILLS</h3>
              <div className="skills-inline">
                <p className="skills-cat">Frontend</p>
                <p className="skills-list">React, Vite, JavaScript, Material UI, Responsive Design</p>
                <p className="skills-cat">Backend</p>
                <p className="skills-list">Node.js, Express, REST APIs, JWT Auth, API Integrations</p>
                <p className="skills-cat">Databases</p>
                <p className="skills-list">PostgreSQL, Prisma, Data Modeling</p>
                <p className="skills-cat">Tools</p>
                <p className="skills-list">Git, GitHub, Stripe, Postman, VS Code</p>
                <p className="skills-cat">Business</p>
                <p className="skills-list">Agile/Scrum, Product Development, UI/UX, Stakeholder Management</p>
              </div>
            </div>

            <a href="/#contact" className="btn-primary" style={{ display: "flex", justifyContent: "center", marginTop: "8px" }}>
              Work With Me →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
