import imgFitTogether from "../assets/preview-fittogether.png";
import imgCRHS from "../assets/preview-crhs07.png";
import imgClub520 from "../assets/preview-club520.png";
import imgFamilyTree from "../assets/preview-familytree.png";
import imgBiteRight from "../assets/preview-biteright.png";
import imgCigarMatch from "../assets/preview-cigar-match.png";
import imgMoreSmoke from "../assets/preview-moresmoke.png";
import imgMoneyMill from "../assets/preview-the-money-mill.png";
import imgPressedAged from "../assets/preview-pressed-aged-lounge.png";
import imgVirtualCare from "../assets/preview-virtualcarenow.png";
import imgDFProfile from "../assets/preview-df-profile.png";
import imgWheresmikeg from "../assets/preview-wheresmikeg.png";
import imgSmokeCask from "../assets/preview-smoke-cask-barrel.png";
import imgJordanColeman from "../assets/preview-jordan-coleman-campaign.png";
import imgChickenBeer from "../assets/preview-chicken-beer-festival.png";
import imgLastCall from "../assets/preview-last-call-landing.png";
import imgBenignity from "../assets/preview-benignity.png";
import imgEmerging100 from "../assets/preview-emerging100.png";
import imgOpenCourt from "../assets/preview-open-court.png";
import imgHireLocal from "../assets/preview-hirelocal.png";
import imgLavishRetreats from "../assets/preview-lavish-retreats.jpg";

export const projects = [
  {
    id: "more-smoke-os",
    title: "More Smoke OS",
    type: "Full Stack",
    tagline: "Multi-Tenant AI Business Operating System",
    role:
      "Sole engineer and product owner — architecture, multi-tenant data model, API, UI, billing, and AI features.",
    description:
      "A white-label CRM and business operations platform built as a TypeScript monorepo. Every client organization gets a fully isolated tenant — contacts, pipeline, tasks, calendar, files, billing, and a Claude-powered assistant — administered from a single agency-level portal.",
    problem:
      "Small businesses were paying for four disconnected tools and still running the important work out of a spreadsheet. More Smoke OS consolidates CRM, scheduling, files, and billing into one tenant-isolated system, with a seven-role permission model so an agency can operate every client account without clients ever seeing each other's data.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Claude API", "Stripe", "AWS S3"],
    features: [
      "Multi-tenant data isolation with a 7-role permission model, from READ_ONLY up to SUPER_ADMIN",
      "JWT auth with 15-minute access tokens, 7-day refresh tokens, rotation, and a silent-refresh Axios interceptor",
      "Claude-powered assistant: contact summarizer, lead scorer, and note drafter",
      "Stripe Checkout and Customer Portal with webhook-driven plan upgrades across 3 tiers",
      "S3 file manager using presigned upload and download URLs",
      "7-stage pipeline Kanban, calendar with month/week/agenda views, and a KPI dashboard",
      "TanStack Query caching, Zod-validated forms, and a persisted Zustand auth store",
      "npm-workspaces monorepo; Helmet, CORS, and rate limiting on every route",
    ],
    image: null,
    github: "https://github.com/19awburris88/moresmokeos",
    live: "",
    featured: true,
  },
  {
    id: "emerging100",
    title: "Emerging 100 ATL",
    type: "Frontend",
    tagline: "Internal Committee Playbook Platform",
    role:
      "Lead developer, working directly with the executive board — platform architecture, passwordless auth, the attendance system, and admin tooling.",
    description:
      "The official internal playbook for Emerging 100 Atlanta \u2014 the young professionals auxiliary of the 100 Black Men of Atlanta, Inc. Consolidates every committee's goals, responsibilities, and operating documents into one searchable hub for the 2025\u20132027 term.",
    problem:
      "Committee knowledge lived in scattered documents and left with each outgoing chair. The playbook makes operating procedure a single source of truth and turns leadership transition into a guided handoff instead of a rediscovery.",
    outcome:
      "Launched to 160 members for the 2025–2027 term. Leadership now updates committee content, documents, and the roster themselves, without developer involvement.",
    tech: ["React", "Vite", "React Router"],
    features: [
      "15 committee pages with goals, RACI charts, timelines, and checklists",
      "23 standalone HTML playbooks served alongside the app",
      "Resources hub: event checklists, 141 transition questions, and a new chair guide",
      "Live committee search and sticky in-page tab navigation with active section tracking",
      "Program calendar generated at build time from committee data",
      "Open Graph and Twitter Card metadata for shared links",
    ],
    image: imgEmerging100,
    github: "https://github.com/19awburris88/emerging100-",
    live: "",
    featured: true,
  },
  {
    id: "open-court",
    title: "The Open Court",
    type: "Full Stack",
    tagline: "Basketball Runs & Wellness Registration Platform",
    role:
      "Sole developer and product partner — discovery with the founder, registration system, admin dashboard, and insights screen; scoped and reconciled the client's formal requirements document.",
    description:
      "Marketing site and registration system for The Open Court \u2014 men's basketball runs and wellness pathways in Dallas. Public event pages drive sign-ups, while an authenticated admin dashboard gives the organizer roster visibility and registration insights.",
    problem:
      "Sign-ups, waivers, and emergency contacts were being collected ad hoc with no reliable roster. The platform captures registrations in one place and enforces access to that personal data at the database layer rather than in the frontend.",
    outcome:
      "Seven pages, the registration system, admin dashboard, and insights screen delivered. Image payload cut from 4.1MB to roughly 520KB and the app shell to under 100KB compressed; the app installs to the home screen and every page works offline.",
    tech: ["React", "Vite", "Supabase", "CSS Modules"],
    features: [
      "Event listings, detail pages, and post-run recaps",
      "Registration flow with waiver signature and emergency contact capture",
      "Admin dashboard gated by Supabase Auth plus an explicit admin allowlist",
      "Row-level security so the public anon key cannot read registrant data",
      "Registration insights and charts for the organizer",
      "Light/dark theme toggle and a published privacy policy",
    ],
    image: imgOpenCourt,
    github: "",
    live: "",
    featured: true,
  },
  {
    id: "hirelocal",
    title: "HireLocal",
    type: "Frontend",
    tagline: "Local Jobs, People & Career Events",
    role:
      "Designer and frontend developer — match-scoring logic, onboarding flow, and the full interface.",
    description:
      "A Dallas\u2013Fort Worth job platform built around proximity rather than volume. HireLocal surfaces the roles, professionals, and career events within a few miles of the user and scores each one against their profile to show what is actually worth their time.",
    problem:
      "National job boards bury local opportunities under thousands of irrelevant listings. HireLocal narrows the field to one metro and uses profile-based match scoring so a smaller result set carries more signal.",
    tech: ["React", "Vite", "React Router"],
    features: [
      "Profile-based match scoring with a visual match ring on every card",
      "Guided onboarding that builds the profile driving recommendations",
      "Browse jobs, companies, professionals, and career events with full detail pages",
      "Personalized \u201cFor You\u201d feed and saved-items list",
      "Client-side persistence so a session survives a refresh",
      "Mobile-first responsive design",
    ],
    image: imgHireLocal,
    github: "",
    live: "",
    featured: false,
  },
  {
    id: "love-ledger",
    title: "Love Ledger",
    type: "Full Stack",
    tagline: "Personal Relationship CRM",
    role:
      "Sole engineer and product owner — schema, API, authentication, and UI.",
    description:
      "A CRM for the people who matter most rather than for a sales pipeline. Love Ledger tracks important dates, stores memories, manages gift ideas through a Kanban board, and surfaces nudges when someone has gone too long without hearing from you.",
    problem:
      "Staying intentional with people is a memory problem, not a caring problem. The app turns relationship upkeep into tracked state — dates, last contact, gift gaps — and pushes the reminder before the occasion passes rather than after.",
    tech: ["React", "Express", "Prisma", "PostgreSQL", "Clerk", "Material UI"],
    features: [
      "Thoughtfulness Engine: dashboard nudges for upcoming occasions, gift gaps, and lapsed contact",
      "Relationship profiles with love language, sizes, favorites, and notes",
      "Memory vault with full-text search, year grouping, and tag editing",
      "Gift tracker as a Kanban board: Idea → Saved → Purchased → Wrapped → Given",
      "Clerk-authenticated REST API with per-user data scoping",
      "Split deploy — Netlify frontend, Render API, Neon serverless Postgres",
    ],
    image: null,
    github: "https://github.com/19awburris88/becoming",
    live: "",
    featured: true,
  },
  {
    id: "lavish-retreats",
    title: "Lavish Retreats DR",
    type: "Frontend",
    tagline: "Luxury Villa Booking & Marketing Site",
    role:
      "Designer and developer, working with the villa owners — bilingual content system, booking integration, and SEO build-out.",
    description:
      "Marketing and booking site for two luxury villas in the gated Sosúa Ocean Village community in Puerto Plata, Dominican Republic. Built to carry an international audience from first look to a completed Lodgify booking without friction.",
    problem:
      "The owners were losing international guests between discovery and checkout. The site meets guests in their own language and currency, answers the availability question before the handoff, and passes the selected dates and currency straight through to the Lodgify booking flow.",
    tech: ["React", "Vite", "React Router", "JSON-LD", "Netlify"],
    features: [
      "Full English/Spanish translation of every string",
      "Multi-currency selector (USD, EUR, CAD, GBP, DOP) passed through to Lodgify",
      "Per-villa availability calendar with a sticky check-in / check-out / guests booking bar",
      "SEO build-out: JSON-LD LodgingBusiness structured data, per-route titles, sitemap, robots",
      "Photo galleries with lightbox and an interactive community map",
      "Hand-written CSS with no UI framework, and full prefers-reduced-motion support",
    ],
    image: imgLavishRetreats,
    github: "https://github.com/19awburris88/lavish-retreats",
    live: "",
    featured: false,
  },
  {
    id: "trips-pwa",
    title: "Trips",
    type: "Frontend",
    tagline: "Offline-First Installable Itinerary PWA",
    role:
      "Sole engineer — offline architecture, in-browser calendar generation, and share-merge logic.",
    description:
      "An installable travel itinerary app with no build step and no dependencies — one HTML file, a service worker, and a manifest. Every trip lives as a data object; the app renders the day-by-day view, generates calendar files in the browser, and merges checklists shared between two phones.",
    problem:
      "Travel is exactly when connectivity fails. The service worker precaches the page, icons, and self-hosted fonts on install, so a single load on wifi is enough — and the app makes zero third-party requests after that.",
    outcome:
      "Live on GitHub Pages, installed and in use on the phones it was built for.",
    tech: ["JavaScript", "Service Workers", "PWA", "Web Share API", "GitHub Pages"],
    features: [
      "Offline-first service worker precaching the app shell, icons, and 5 self-hosted woff2 subsets",
      "In-browser .ics generation with real VTIMEZONE blocks, so multi-timezone flights stay correct",
      "Stable calendar event IDs so re-importing updates events instead of duplicating them",
      "Checklist sharing over the Web Share API, with newest-wins per-field merge on the receiving phone",
      "Hash routing that opens straight to a trip that is in progress today",
      "Zero dependencies and zero build step — push to main, Pages redeploys",
    ],
    image: null,
    github: "https://github.com/19awburris88/itinerary",
    live: "https://19awburris88.github.io/itinerary/",
    featured: false,
  },
  {
    id: "biteright",
    title: "BiteRight",
    type: "Full Stack",
    tagline: "Restaurant & Food Discovery Platform",
    role:
      "Full-stack developer — recommendation and filtering logic, backend APIs, and the swipe interface.",
    description:
      "A swipe-based discovery app that helps users quickly decide where to eat, reducing decision fatigue through real-time recommendations. Designed a Tinder-style interface with filtering logic to enhance user engagement and session time.",
    problem:
      "Deciding where to eat causes daily decision fatigue. BiteRight gamifies the process with a swipe interface that learns your preferences.",
    tech: ["React", "Express", "PostgreSQL", "Material UI"],
    features: [
      "Tinder-style swipe interface for dish & restaurant discovery",
      "Filtering logic for real-time personalized recommendations",
      "Scalable backend APIs and structured data models",
      "Match history and user preference tracking",
      "Mobile-first responsive design",
    ],
    image: imgBiteRight,
    github: "",
    live: "",
    featured: false,
  },
  {
    id: "cigar-match",
    title: "Cigar Match",
    type: "Full Stack",
    tagline: "Cigar Recommendation & Community Platform",
    role:
      "Founder and lead developer — product definition, recommendation logic, and UI.",
    description:
      "A recommendation engine helping users discover cigars based on preferences, past behavior, and flavor profiles — similar to a swipe-based matching experience. Addresses the industry gap where customers lack consistent in-store guidance.",
    problem:
      "Inconsistent in-store expertise leaves cigar customers without guidance. Cigar Match improves purchase confidence and retail sell-through through personalized recommendations.",
    tech: ["React", "Node.js", "PostgreSQL", "Recommendation Logic"],
    features: [
      "Preference quiz and flavor profile onboarding",
      "Swipe-based cigar discovery interface",
      "Personalized pairing recommendations",
      "Lounge discovery and check-ins",
      "Planned: retailer inventory integration",
    ],
    image: imgCigarMatch,
    github: "",
    live: "",
    featured: false,
  },
  {
    id: "fittogether",
    title: "FitTogether",
    type: "Full Stack",
    tagline: "Couples Fitness & Wellness Platform",
    role:
      "Full-stack developer — frontend architecture, habit tracking, and shared goal logic.",
    description:
      "A wellness and accountability platform combining habit tracking, gamification, and shared goal-setting for couples. Designed to increase user accountability and retention through partner interaction and AI-driven recommendations.",
    problem:
      "Fitness apps focus on individuals. FitTogether makes wellness a shared experience, increasing consistency through partner accountability.",
    tech: ["React", "Express", "PostgreSQL", "Material UI"],
    features: [
      "Shared goal-setting and habit tracking",
      "Partner interaction and accountability features",
      "Gamification to improve engagement and retention",
      "AI-driven recommendations for fitness and wellness goals",
      "Scalable frontend architecture",
    ],
    image: imgFitTogether,
    github: "",
    live: "",
    featured: false,
  },
  {
    id: "more-smoke",
    title: "More Smoke",
    type: "Frontend",
    tagline: "Luxury Lifestyle Brand Platform",
    role:
      "Founder, designer, and developer.",
    description:
      "The digital home for Austin's premium cigar brand. Focused on brand storytelling, product showcases, event promotion, and mobile-optimized experiences that match the premium feel of the product.",
    problem:
      "The brand needed a digital presence that communicated its culture, craftsmanship, and story to a lifestyle-focused audience.",
    tech: ["React", "Vite", "Netlify"],
    features: [
      "Product showcases and brand storytelling",
      "Event promotion and content",
      "Customer acquisition funnels",
      "Mobile-optimized responsive design",
    ],
    image: imgMoreSmoke,
    github: "",
    live: "",
    featured: false,
  },
  {
    id: "jordan-coleman-campaign",
    title: "Jordan Coleman Campaign",
    type: "Frontend",
    tagline: "Political Campaign Website",
    role:
      "Designer and developer, working directly with the candidate on messaging and build.",
    description:
      "A professional political campaign website for a local candidate featuring responsive design, donation integration, and community engagement tools to mobilize support.",
    problem:
      "The candidate needed a mission-driven digital presence that communicated platform messaging and mobilized community support.",
    tech: ["React", "Responsive Design"],
    features: [
      "Responsive design for all devices",
      "Candidate story and platform messaging",
      "Donation integration",
      "Community engagement and call-to-action sections",
    ],
    image: imgJordanColeman,
    github: "https://github.com/19awburris88/jordan-coleman-campaign",
    live: "https://jordan-coleman-campaign.netlify.app",
    featured: false,
  },
  {
    id: "chicken-beer-festival",
    title: "Chicken & Beer Festival",
    type: "Frontend",
    tagline: "6th Annual Indy Event Website",
    role:
      "Designer and developer, working with the festival organizers — site build and ticketing integration.",
    description:
      "Official website for the 6th Annual Chicken & Beer Festival in Indianapolis — a summer celebration of bold flavor, cold drinks, local restaurants, live music, games, and community energy at University Park.",
    problem:
      "The festival needed a professional digital presence to drive ticket sales, communicate event details, and build community excitement ahead of the August 2026 event.",
    tech: ["React", "Vite", "Material UI"],
    features: [
      "Event details: date, location, hours, and ticketing",
      "Eventbrite ticket integration",
      "Festival experience highlights (food, drink, music, games)",
      "Social media integration (Instagram, TikTok, Facebook)",
      "Mobile-first responsive design",
      "Deployed on Netlify",
    ],
    github: "https://github.com/19awburris88/chicken-beer-festival-indy",
    image: imgChickenBeer,
    live: "https://chickenbeen.netlify.app",
    featured: false,
  },
  {
    id: "the-money-mill",
    title: "The Money Mill",
    type: "Frontend",
    tagline: "Financial Education Platform",
    role:
      "Designer and developer — site build and lead-generation funnels.",
    description:
      "A business website focused on financial literacy, education, and entrepreneurship — built to establish authority, generate leads, and funnel visitors into educational resources.",
    problem:
      "The client needed a professional site that established authority in financial education and converted visitors into leads.",
    tech: ["React", "Vite", "Netlify"],
    features: [
      "Lead generation and contact funnels",
      "Service pages and educational resources",
      "Clean UI focused on credibility and conversion",
    ],
    image: imgMoneyMill,
    github: "",
    live: "",
    featured: false,
  },
  {
    id: "last-call-landing",
    title: "The Last Call",
    type: "Frontend",
    tagline: "Cigar Pre-Launch Landing Page",
    role:
      "Designer and developer — countdown, lead capture, and launch page for my own brand.",
    description:
      "A luxury pre-launch experience for the fifth cigar in the More Smoke portfolio. Built around anticipation — a live countdown to the September 2026 drop, blend reveal, and email capture connected to Google Sheets.",
    problem:
      "The brand needed to generate buzz and collect leads before the product hit shelves, without a full e-commerce build.",
    tech: ["React", "Vite", "Material UI", "Vercel", "Google Forms"],
    features: [
      "Live countdown timer to launch date",
      "Email signup integrated with Google Forms / Sheets",
      "Blend details and tasting profile reveal",
      "Luxury dark aesthetic with responsive layout",
    ],
    github: "https://github.com/19awburris88/last-call-landing",
    image: imgLastCall,
    live: "https://last-call-landing.vercel.app",
    featured: false,
  },
  {
    id: "crhs07",
    title: "CRHS Class of '07",
    type: "Full Stack",
    tagline: "20-Year Class Reunion Platform",
    role:
      "Sole developer and organizer-side product owner — Supabase backend, classmate directory, voting, and registration.",
    description:
      "A full-featured reunion website for Cardinal Ritter High School's Class of 2007, built to reconnect 200+ alumni ahead of their July 2027 weekend in Indianapolis. Combines Supabase, Framer Motion, and interactive mapping into a rich community experience.",
    problem:
      "A class reunion needed more than a Facebook event — it needed a real digital home for classmate directories, memories, voting, registration, and event coordination.",
    tech: ["React", "Vite", "Framer Motion", "Supabase", "React Router", "react-simple-maps", "Netlify"],
    features: [
      "Live countdown timer to reunion weekend",
      "Searchable classmate directory with social links",
      "Draggable before/after 'Then & Now' photo slider",
      "Interactive US map showing where classmates live",
      "Senior superlatives nomination and voting system",
      "In Memoriam tribute page",
      "Full registration and RSVP form",
      "Floating Spotify player with 2007 playlist",
    ],
    image: imgCRHS,
    github: "https://github.com/19awburris88/crhs07",
    live: "",
    featured: true,
  },
  {
    id: "familytree",
    title: "Family Tree",
    type: "Full Stack",
    tagline: "Interactive Family Archive Platform",
    role:
      "Sole engineer — Python graph engine, FastAPI backend, and React frontend.",
    description:
      "A modern digital archive for the Burris family designed to feel like a social platform, not a genealogy database. Features a Python/FastAPI backend with a graph-based relationship engine, social memory feed, and visual family tree.",
    problem:
      "Traditional genealogy tools are cold and clinical. This platform makes family history feel alive — searchable, visual, and shareable across generations.",
    tech: ["React", "Vite", "Python", "FastAPI", "SQLite", "React Router", "Lucide React"],
    features: [
      "Member profiles with relationship finder",
      "Social-style memory feed with likes and categories",
      "Visual family tree grouped by generation",
      "Python BFS graph engine for computing exact relationships",
      "Photo gallery with lightbox and filters",
      "Family document vault (recipes, legal docs, etc.)",
      "Chronological family timeline by decade",
    ],
    image: imgFamilyTree,
    github: "https://github.com/19awburris88/familytree",
    live: "",
    featured: true,
  },
  {
    id: "benignity",
    title: "Benignity",
    type: "Full Stack",
    tagline: "Nonprofit Vacation Lodging Platform",
    role:
      "Designer and developer, working with the nonprofit's board — donation flows, event ticketing, and site build.",
    description:
      "Website and donation platform for Benignity, Inc., a 501(c)(3) providing free vacation lodging for patients with life-limiting illness and their unpaid caregivers. Includes donation flows, event ticketing, and impact-driven storytelling.",
    problem:
      "The nonprofit needed a credible, conversion-focused digital presence that could collect donations, sell event tickets, and communicate their mission to new supporters.",
    outcome:
      "Live at benignity.org, taking donations and gala ticket sales.",
    tech: ["React", "Vite", "React Router", "Eventbrite", "CSS"],
    features: [
      "Donation page with preset amounts and monthly giving toggle",
      "Impact tiers with dynamic donor messaging",
      "Eventbrite embedded checkout for gala ticketing",
      "Frosted-glass sticky nav with animated mobile menu",
      "Multi-page routing across home, donation, and events",
    ],
    github: "https://github.com/19awburris88/benignity",
    image: imgBenignity,
    live: "https://benignity.org",
    featured: true,
  },
  {
    id: "club520",
    title: "Club 520 Podcast",
    type: "Frontend",
    tagline: "NBA Podcast Brand Website",
    role:
      "Designer and developer — RSS episode pipeline, player integrations, and the full interface.",
    description:
      "Official website for the Club 520 Podcast hosted by former NBA All-Star Jeff Teague, DJ Wells, and B Hen. Built for culture — live episode feeds, a sticky Spotify player, YouTube lightbox, sponsor grid, and a custom basketball cursor.",
    problem:
      "The show needed a digital home that matched its NBA-level energy, surfaced episodes easily, and gave sponsors and guests proper visibility.",
    tech: ["React", "Vite", "YouTube RSS", "CSS", "Google Fonts"],
    features: [
      "YouTube RSS video feed with in-page lightbox player",
      "Sticky Spotify podcast player",
      "Notable guests grid and sponsor showcase",
      "Custom basketball cursor with trailing glow",
      "Parallax hero and scroll progress bar",
      "Continuous marquee ticker and merch section",
    ],
    image: imgClub520,
    github: "https://github.com/19awburris88/club520",
    live: "",
    featured: true,
  },
  {
    id: "pressed-aged-lounge",
    title: "Pressed & Aged",
    type: "Frontend",
    tagline: "Luxury Cigar & Vinyl Lounge",
    role:
      "Designer and developer — brand site, membership tiers, and reservation flow.",
    description:
      "Website for a luxury cigar and vinyl lounge in Nashville, TN. Communicates the full Pressed & Aged experience — curated humidor, vinyl programming, membership tiers, and signature recurring events — through a rich, scroll-driven design.",
    problem:
      "A premium lifestyle lounge needed a website as refined as the space itself, with clear pathways to membership and reservations.",
    tech: ["React", "Vite", "FormSubmit", "CSS"],
    features: [
      "Three membership tiers (The Listener, The Collector, The Patron)",
      "Curated humidor and cigar offerings showcase",
      "Signature events: Vinyl & Vices, Smoke & Sinatra, Bourbon & B-Sides",
      "Animated vinyl marquee ticker",
      "Reservation request form via FormSubmit",
      "Scroll-driven reveal animations",
    ],
    image: imgPressedAged,
    github: "https://github.com/19awburris88/pressed-aged-lounge",
    live: "",
    featured: false,
  },
  {
    id: "virtualcarenow",
    title: "Virtual Care Now",
    type: "Frontend",
    tagline: "Telehealth Practice Website",
    role:
      "Designer and developer, working directly with the practice's founding physician — site build and conversion structure.",
    description:
      "Marketing website for Virtual Care Now, a virtual urgent care practice led by Dr. Jeni Grundy. Designed to convert first-time visitors into patients through clear service communication, trust-building content, and a frictionless contact experience.",
    problem:
      "A new telehealth practice needed a professional web presence that built patient trust, communicated availability, and drove appointment requests.",
    tech: ["React", "Vite", "CSS"],
    features: [
      "Services grid with conditions treated",
      "Provider bio and credibility section",
      "Benefits comparison and how-it-works walkthrough",
      "Insurance and payment information",
      "Patient testimonials and FAQ",
      "Responsive contact form",
    ],
    image: imgVirtualCare,
    github: "https://github.com/19awburris88/virtualcarenow",
    live: "",
    featured: false,
  },
  {
    id: "df-profile",
    title: "Daniel Farr",
    type: "Frontend",
    tagline: "Executive Personal Brand Website",
    role:
      "Designer and developer, working directly with the client — positioning, content structure, and build.",
    description:
      "Premium personal brand website for Daniel Farr — Builder, Strategist, Servant Leader — serving as his digital headquarters for leadership positioning, community impact, and speaking opportunities in Atlanta and beyond.",
    problem:
      "An executive leader needed a high-credibility digital presence that communicated his story, highlighted community recognition, and generated speaking and partnership inquiries.",
    tech: ["React", "Vite", "CSS", "Behold.so"],
    features: [
      "Full-viewport hero with executive bio",
      "Leadership pillars and Emerging 100 of Atlanta highlights",
      "Speaking topics with inquiry CTA",
      "Instagram feed embed via Behold.so",
      "Career and leadership timeline",
      "Scroll-reveal animations with custom hook",
    ],
    image: imgDFProfile,
    github: "https://github.com/19awburris88/df-profile",
    live: "",
    featured: false,
  },
  {
    id: "wheresmikeg",
    title: "Where's Mike G",
    type: "Frontend",
    tagline: "Personal Brand Website",
    role:
      "Designer and developer — brand site, motion design, and build.",
    description:
      "Personal brand website for Mike Gillis, Indianapolis-based digital marketer, food and lifestyle content creator, and event host with 10+ years in the industry. Showcases collaborations, events, wine partnerships, and brand services.",
    problem:
      "A multi-hyphenate creator needed a single digital destination that surfaced all his work, partnerships, and services in one polished experience.",
    tech: ["React", "Vite", "CSS", "Google Fonts"],
    features: [
      "Custom animated loader and scroll progress bar",
      "Drag-to-scroll moments photo strip",
      "Animated stats counter and marquee ticker",
      "Floating CTA button and custom cursor with lag effect",
      "Smooth scroll-reveal animations",
      "Film grain texture overlay for premium aesthetic",
    ],
    image: imgWheresmikeg,
    github: "https://github.com/19awburris88/wheresmikeg",
    live: "",
    featured: false,
  },
  {
    id: "smoke-cask-barrel",
    title: "Smoke, Cask & Barrel",
    type: "Frontend",
    tagline: "Cigar & Spirits Lifestyle Brand",
    role:
      "Founder, designer, and developer.",
    description:
      "A brand website at the intersection of premium cigars and craft spirits — designed to capture the culture, community, and experience of pairing two of life's great pleasures.",
    problem:
      "The brand needed a digital home that communicated its identity and lifestyle positioning to an audience of enthusiasts.",
    tech: ["React", "Vite"],
    features: [
      "Brand storytelling and lifestyle content",
      "Product and pairing showcases",
      "Mobile-optimized responsive design",
    ],
    image: imgSmokeCask,
    github: "https://github.com/19awburris88/smoke-cask-barrel",
    live: "",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
