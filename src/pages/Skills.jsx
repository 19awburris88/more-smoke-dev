const skillGroups = [
  {
    category: "Front End",
    skills: ["React 19", "TypeScript", "JavaScript", "Next.js (App Router)", "Vite", "HTML", "CSS", "Tailwind CSS", "Material UI", "Radix UI", "Framer Motion", "TanStack Query", "Zustand", "React Hook Form", "Zod", "Recharts", "Responsive & Mobile-First Design", "Foldable & Safe-Area Layouts", "Accessibility (prefers-reduced-motion)"],
  },
  {
    category: "Back End",
    skills: ["Node.js", "Express 5", "Python", "FastAPI", "Next.js Server Actions", "REST API Design", "JWT Auth & Token Rotation", "Refresh-Token Rotation", "Role-Based Access Control", "Passwordless / Magic-Code Auth", "Webhook Verification", "Scheduled Workers", "Rate Limiting", "Helmet / CORS", "Third-Party API Integration"],
  },
  {
    category: "Databases & Data",
    skills: ["PostgreSQL", "Prisma ORM", "Supabase", "Neon", "SQLite", "Schema Design & Migrations", "Row-Level Security", "Multi-Tenant Data Isolation", "Idempotent Seeding", "Soft Deletes & Deactivation", "Query Optimization", "Data Modeling", "Data Visualization"],
  },
  {
    category: "Recommendation & Matching",
    skills: ["Deterministic Scoring Engines", "Explainable Recommendations", "Preference & Taste Modeling", "Profile-Based Match Scoring", "Weighted Ranking", "Cold-Start Handling", "Graph Traversal (BFS)"],
  },
  {
    category: "AI & Emerging Tech",
    skills: ["Claude API", "Anthropic SDK", "AI Feature Design", "Prompt Engineering", "LLM-Assisted Workflows", "Claude Code", "AI Evaluation & Review"],
  },
  {
    category: "Payments & Commerce",
    skills: ["Stripe Checkout", "Stripe Customer Portal", "Subscription & Billing Webhooks", "Square", "POS Systems", "E-Commerce", "Marketplace Architecture"],
  },
  {
    category: "Mobile & Offline",
    skills: ["Progressive Web Apps", "Service Workers", "Offline-First Architecture", "Installable App Shells", "Web Share API", "Push Notifications", "QR Scanning (jsQR)", "In-Browser .ics Generation", "localStorage Schema Versioning", "Touch & Gesture Interaction"],
  },
  {
    category: "Platform & Infrastructure",
    skills: ["AWS S3 (Presigned URLs)", "Clerk", "Supabase Auth", "npm Workspaces / Monorepos", "Netlify", "Vercel", "Render", "Railway", "GitHub Pages", "Static Prerendering", "Build Pipelines"],
  },
  {
    category: "Engineering Practice",
    skills: ["Git & GitHub", "Code Review", "Vitest", "Technical Documentation", "ESLint / Oxlint", "Postman", "Debugging & Profiling", "Performance & Asset Optimization", "SEO & Structured Data", "Core Web Vitals", "VS Code"],
  },
  {
    category: "Business & Product",
    skills: ["Agile", "Scrum (CSM)", "Product Ownership (CSPO)", "Backlog & Roadmap Management", "Requirements Gathering", "Scoping & Estimation", "Business Analysis", "Go-to-Market Strategy", "Revenue Strategy", "Stakeholder Management", "Client Onboarding", "Solutions Engineering", "UI/UX Optimization"],
  },
];


export default function Skills() {
  return (
    <>
      <section className="section section--light">
        <div className="page-header" style={{ marginBottom: 0 }}>
          <p className="section-label">TECH STACK</p>
          <h1>The Stack</h1>
          <p className="page-desc">
            Everything below is something we have shipped with — not something
            we have read about. The case studies on this site are where each of
            these earned its place.
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
