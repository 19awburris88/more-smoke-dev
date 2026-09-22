import { projects } from "./projects";

export const profile = {
  name: "Austin Burris",
  title: "Full Stack Engineer · Product & Business Strategy",
  location: "Dallas, TX",
  phone: "317-273-9330",
  email: "19awburris88@gmail.com",
  github: "https://github.com/19awburris88",
  githubLabel: "github.com/19awburris88",
  linkedin: "https://www.linkedin.com/in/austin-burris-33995048/",
  linkedinLabel: "linkedin.com/in/austin-burris-33995048",
  site: "https://moresmoke.dev",
  siteLabel: "moresmoke.dev",
  summary:
    "Full stack engineer with an MBA and a decade of operating experience. I build production web applications end to end — React and TypeScript on the front, Node, Express, Prisma and PostgreSQL on the back — including multi-tenant auth, Stripe billing, S3 file handling, and Claude-powered features. Before engineering I co-founded and ran a subscription media platform to 1M+ monthly users across 27 markets, so I read a roadmap and a P&L as fluently as a stack trace.",
};

export const highlights = [
  { stat: `${projects.length}`, label: "Shipped projects", detail: "Client work, platforms, and products currently live or in build" },
  { stat: "1M+", label: "Monthly users reached", detail: "EatHere subscription media platform across 27 markets" },
  { stat: "357%", label: "YoY growth driven", detail: "As Co-Founder, CFO & CTO of EatHere" },
  { stat: "10+", label: "Years operating", detail: "Founder-side product, revenue, and go-to-market ownership" },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "More Smoke Dev",
    period: "Apr 2024 – Present",
    location: "Remote (Dallas, TX)",
    bullets: [
      "Design, build, and ship production web applications end to end for founders, nonprofits, and small businesses — requirements through deployment and post-launch support",
      "Build React and TypeScript frontends against Node/Express APIs with Prisma and PostgreSQL, including JWT authentication with refresh-token rotation, role-based access control, and multi-tenant data isolation",
      "Integrate third-party platforms in production: Stripe Checkout and billing webhooks, AWS S3 presigned uploads, Supabase auth with row-level security, Clerk, and the Anthropic Claude API",
      "Own technical decisions and trade-offs across the stack — schema design, caching strategy, deploy topology — and document them so clients can maintain what I hand over",
      "Translate non-technical stakeholder requirements into scoped, estimated work and deliver against committed timelines",
    ],
  },
  {
    role: "Founder & Operator",
    company: "More Smoke (formerly Cultured King Cigars)",
    period: "2023 – Present",
    location: "Dallas, TX",
    bullets: [
      "Built and scaled a premium cigar lifestyle brand, expanding into 15+ retail and lounge partnerships across the market",
      "Launched 13+ products/SKUs, aligning product design, branding, and storytelling to drive repeat purchases and brand loyalty",
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
      "Directed product strategy, platform development, and technology roadmap as CFO and CTO simultaneously",
      "Built strategic partnerships with major brands including McDonald's, Indy Chamber, and Visit Indy",
      "Organized large-scale activations (3,000+ attendees), integrating digital product engagement with real-world experiences",
    ],
  },
];

export const education = [
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

export const certifications = [
  { name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", status: "earned", year: "2026" },
  { name: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance", status: "earned", year: "2026" },
  { name: "Google IT Support Professional Certificate", issuer: "Google / Coursera", status: "earned", year: "2026" },
  { name: "Claude Certified Architect", issuer: "Anthropic", status: "in-progress" },
  { name: "Relationship Management & Business Development", issuer: "Coursera", status: "in-progress" },
];

export const pursuing = [
  "Software Engineering",
  "Business Analysis",
  "Product Management",
  "Business Development",
  "Technology Consulting",
  "Solutions Engineering",
  "Customer Success",
  "Technical Program Management",
];

export const resumeSkills = [
  {
    category: "Languages & Frontend",
    list: "TypeScript, JavaScript, Python, HTML, CSS, React, Vite, Tailwind CSS, Material UI, TanStack Query, Zustand, Zod",
  },
  {
    category: "Backend & APIs",
    list: "Node.js, Express, FastAPI, REST API design, JWT auth with token rotation, role-based access control, webhooks, rate limiting",
  },
  {
    category: "Data",
    list: "PostgreSQL, Prisma, Supabase, Neon, SQLite, schema design and migrations, row-level security, multi-tenant isolation",
  },
  {
    category: "Platform & AI",
    list: "Anthropic Claude API, Stripe (Checkout, Portal, webhooks), AWS S3 presigned URLs, Clerk, PWAs and service workers, npm workspaces, Netlify, Vercel, Render",
  },
  {
    category: "Practice",
    list: "Agile/Scrum, requirements gathering, technical documentation, code review, Git/GitHub, Postman, SEO and structured data",
  },
];

/** Project ids from ../data/projects.js, in the order a hiring manager should see them. */
export const resumeProjectIds = [
  "more-smoke-os",
  "open-court",
  "crhs07",
  "emerging100",
  "familytree",
  "trips-pwa",
];
