const skillGroups = [
  {
    category: "Front End",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Vite", "Tailwind CSS", "Material UI", "TanStack Query", "Zustand", "React Hook Form", "Zod", "Framer Motion", "Recharts", "Responsive & Mobile-First Design", "Accessibility (prefers-reduced-motion)"],
  },
  {
    category: "Back End",
    skills: ["Node.js", "Express", "Python", "FastAPI", "REST API Design", "JWT Auth & Token Rotation", "Role-Based Access Control", "Webhooks", "Rate Limiting", "Helmet / CORS", "Third-Party API Integration"],
  },
  {
    category: "Databases & Data",
    skills: ["PostgreSQL", "Prisma ORM", "Supabase", "Neon", "SQLite", "Schema Design & Migrations", "Row-Level Security", "Multi-Tenant Data Isolation", "Query Optimization", "Data Visualization", "Business Intelligence", "Financial Analysis"],
  },
  {
    category: "AI & Emerging Tech",
    skills: ["Claude API", "Anthropic SDK", "AI Feature Design", "Prompt Engineering", "LLM-Assisted Workflows", "Recommendation Logic", "Claude Code"],
  },
  {
    category: "Payments & Commerce",
    skills: ["Stripe Checkout", "Stripe Customer Portal", "Subscription & Billing Webhooks", "Square", "POS Systems", "E-Commerce", "Marketplace Architecture"],
  },
  {
    category: "Platform & Infrastructure",
    skills: ["AWS S3 (Presigned URLs)", "Clerk", "Progressive Web Apps", "Service Workers & Offline Caching", "npm Workspaces / Monorepos", "Netlify", "Vercel", "Render", "GitHub Pages", "CI-Ready Builds"],
  },
  {
    category: "Engineering Practice",
    skills: ["Git & GitHub", "Code Review", "Technical Documentation", "ESLint / Oxlint", "Postman", "Debugging & Profiling", "SEO & Structured Data", "VS Code"],
  },
  {
    category: "Business & Product",
    skills: ["Agile", "Scrum (CSM)", "Product Ownership (CSPO)", "Backlog & Roadmap Management", "Requirements Gathering", "Business Analysis", "Go-to-Market Strategy", "Revenue Strategy", "Stakeholder Management", "Client Onboarding", "Solutions Engineering", "UI/UX Optimization"],
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
            Full-stack engineer with an MBA and a founder's track record. Everything
            below is something I have shipped with — not something I have read about.
            The projects on this site are where each of these earned its place.
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
