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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    github: "",
    live: "",
    featured: false,
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
];

export const featuredProjects = projects.filter((p) => p.featured);
