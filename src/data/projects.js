import imgFitTogether from "../assets/preview-fittogether.png";
import imgCRHS from "../assets/preview-crhs07.png";
import imgClub520 from "../assets/preview-club520.png";
import imgFamilyTree from "../assets/preview-familytree.png";

export const projects = [
  {
    id: "barrel-exchange",
    title: "Barrel Exchange",
    type: "Full Stack",
    tagline: "Bourbon Marketplace Platform",
    description:
      "A full-stack marketplace enabling users to buy, sell, and manage bourbon collections, combining e-commerce functionality with social marketplace features. Built with authentication, Stripe payments, admin tools, and optimized product discovery.",
    problem:
      "Bourbon collectors had no dedicated platform to trade rare bottles with verified listings, secure payments, and seller storefronts in one place.",
    tech: ["React", "Express", "PostgreSQL", "Prisma", "Material UI", "Stripe", "JWT Auth", "Vite"],
    features: [
      "User authentication & profile management",
      "Marketplace listings with search & filtering",
      "Seller storefronts and product management",
      "Stripe payment integration",
      "Admin dashboard for platform management",
      "REST APIs with optimized product discovery workflows",
    ],
    github: "",
    live: "",
    featured: false,
  },
  {
    id: "biteright",
    title: "BiteRight",
    type: "Full Stack",
    tagline: "Restaurant & Food Discovery Platform",
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
    github: "",
    live: "",
    featured: false,
  },
  {
    id: "biblefit",
    title: "BibleFit",
    type: "Frontend",
    tagline: "Personalized Bible Study Platform",
    description:
      "A mobile-first Bible study platform delivering personalized study plans through a dynamic onboarding quiz. Integrates external scripture APIs to create a customized and scalable content experience focused on engagement and retention.",
    problem:
      "New and seasoned believers alike struggle to find Bible studies matched to their current season, struggles, and spiritual goals.",
    tech: ["React", "Vite", "API Integration"],
    features: [
      "Dynamic onboarding quiz based on user preferences and experience level",
      "Personalized study plan recommendations",
      "External scripture API integration",
      "Progress tracking and user profiles",
      "Engagement-focused features to improve daily retention",
    ],
    github: "",
    live: "",
    featured: false,
  },
  {
    id: "cigar-match",
    title: "Cigar Match",
    type: "Full Stack",
    tagline: "Cigar Recommendation & Community Platform",
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
    github: "",
    live: "",
    featured: false,
  },
  {
    id: "fittogether",
    title: "FitTogether",
    type: "Full Stack",
    tagline: "Couples Fitness & Wellness Platform",
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
    featured: true,
  },
  {
    id: "more-smoke",
    title: "More Smoke",
    type: "Frontend",
    tagline: "Luxury Lifestyle Brand Platform",
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
    github: "",
    live: "",
    featured: false,
  },
  {
    id: "jay-orner-billiard",
    title: "Jay Orner & Son Billiard Co",
    type: "Frontend",
    tagline: "Small Business Website",
    description:
      "Designed and developed a responsive business website to establish a professional digital presence, generate inbound inquiries, and centralize service offerings for a local billiard company.",
    problem:
      "The client lacked a digital presence to capture leads and communicate their services to customers searching online.",
    tech: ["React", "Responsive Design"],
    features: [
      "Responsive design optimized for conversion",
      "Centralized service offerings and contact pathways",
      "Brand positioning and credibility-focused UI",
      "Lead generation and inbound inquiry funnels",
    ],
    github: "",
    live: "",
    featured: false,
  },
  {
    id: "jordan-coleman-campaign",
    title: "Jordan Coleman Campaign",
    type: "Frontend",
    tagline: "Political Campaign Website",
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
    github: "https://github.com/19awburris88/jordan-coleman-campaign",
    live: "https://jordan-coleman-campaign.netlify.app",
    featured: false,
  },
  {
    id: "chicken-beer-festival",
    title: "Chicken & Beer Festival",
    type: "Frontend",
    tagline: "6th Annual Indy Event Website",
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
    live: "https://chickenbeen.netlify.app",
    featured: false,
  },
  {
    id: "the-money-mill",
    title: "The Money Mill",
    type: "Frontend",
    tagline: "Financial Education Platform",
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
    github: "",
    live: "",
    featured: false,
  },
  {
    id: "last-call-landing",
    title: "The Last Call",
    type: "Frontend",
    tagline: "Cigar Pre-Launch Landing Page",
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
    live: "https://last-call-landing.vercel.app",
    featured: false,
  },
  {
    id: "crhs07",
    title: "CRHS Class of '07",
    type: "Full Stack",
    tagline: "20-Year Class Reunion Platform",
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
    description:
      "Website and donation platform for Benignity, Inc., a 501(c)(3) providing free vacation lodging for patients with life-limiting illness and their unpaid caregivers. Includes donation flows, event ticketing, and impact-driven storytelling.",
    problem:
      "The nonprofit needed a credible, conversion-focused digital presence that could collect donations, sell event tickets, and communicate their mission to new supporters.",
    tech: ["React", "Vite", "React Router", "Eventbrite", "CSS"],
    features: [
      "Donation page with preset amounts and monthly giving toggle",
      "Impact tiers with dynamic donor messaging",
      "Eventbrite embedded checkout for gala ticketing",
      "Frosted-glass sticky nav with animated mobile menu",
      "Multi-page routing across home, donation, and events",
    ],
    github: "https://github.com/19awburris88/benignity",
    live: "https://benignity.org",
    featured: false,
  },
  {
    id: "club520",
    title: "Club 520 Podcast",
    type: "Frontend",
    tagline: "NBA Podcast Brand Website",
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
    github: "https://github.com/19awburris88/pressed-aged-lounge",
    live: "",
    featured: false,
  },
  {
    id: "virtualcarenow",
    title: "Virtual Care Now",
    type: "Frontend",
    tagline: "Telehealth Practice Website",
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
    github: "https://github.com/19awburris88/virtualcarenow",
    live: "",
    featured: false,
  },
  {
    id: "df-profile",
    title: "Daniel Farr",
    type: "Frontend",
    tagline: "Executive Personal Brand Website",
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
    github: "https://github.com/19awburris88/df-profile",
    live: "",
    featured: false,
  },
  {
    id: "wheresmikeg",
    title: "Where's Mike G",
    type: "Frontend",
    tagline: "Personal Brand Website",
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
    github: "https://github.com/19awburris88/wheresmikeg",
    live: "",
    featured: false,
  },
  {
    id: "smoke-cask-barrel",
    title: "Smoke, Cask & Barrel",
    type: "Frontend",
    tagline: "Cigar & Spirits Lifestyle Brand",
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
    github: "https://github.com/19awburris88/smoke-cask-barrel",
    live: "",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
