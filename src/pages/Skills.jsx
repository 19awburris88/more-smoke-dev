const skillGroups = [
  {
    category: "Front End",
    skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Vite", "Material UI", "Tailwind CSS", "Framer Motion", "Responsive Design", "Mobile-First Design"],
  },
  {
    category: "Back End",
    skills: ["Node.js", "Express", "Python", "FastAPI", "REST APIs", "JWT Authentication", "API Integration", "API Design"],
  },
  {
    category: "Databases & Data",
    skills: ["PostgreSQL", "Supabase", "SQLite", "Prisma ORM", "Data Modeling", "Query Optimization", "Business Intelligence", "Financial Analysis", "Data Visualization"],
  },
  {
    category: "Payments & Commerce",
    skills: ["Stripe", "Square", "POS Systems", "E-Commerce", "Subscription Models", "Marketplace Architecture"],
  },
  {
    category: "AI & Emerging Tech",
    skills: ["Claude API", "Anthropic SDK", "AI Integration", "Prompt Engineering", "Recommendation Logic", "AI-Driven Features"],
  },
  {
    category: "Deployment & Tools",
    skills: ["Netlify", "Vercel", "Render", "GitHub", "Git", "Postman", "VS Code", "FormSubmit"],
  },
  {
    category: "Business & Strategy",
    skills: ["Product Development", "Business Development", "Agile", "Scrum", "Go-to-Market Strategy", "Revenue Strategy", "Stakeholder Management", "Technical Documentation", "UI/UX Optimization", "Client Onboarding", "Solutions Engineering"],
  },
];

export default function Skills() {
  return (
    <>
      <section className="section section--light">
        <div className="page-header" style={{ marginBottom: 0 }}>
          <p className="section-label">TECH STACK</p>
          <h1>Tools I Use</h1>
          <p className="page-desc">
            Full-stack developer with a business background. I combine technical
            depth with product thinking, entrepreneurship, and AI integration to
            build things that actually work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="skills-groups">
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className="skill-group">
              <h3>{category}</h3>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <div key={skill} className="skill-card">{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
