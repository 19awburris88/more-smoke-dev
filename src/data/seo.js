import { projects } from "./projects";

export const SITE = {
  url: "https://moresmoke.dev",
  name: "More Smoke Dev",
  founder: "Austin Burris",
  phone: "+1-317-273-9330",
  email: "19awburris88@gmail.com",
  city: "Dallas",
  region: "TX",
  country: "US",
  image: "https://moresmoke.dev/og-image.png",
  sameAs: [
    "https://github.com/19awburris88",
    "https://www.linkedin.com/in/austin-burris-33995048/",
  ],
};

/** Titles stay under ~60 chars, descriptions under ~155, so neither truncates in results. */
const PAGES = {
  "/": {
    title: "Custom Web Apps & Portals for Dallas Businesses",
    description:
      "More Smoke Dev builds websites, membership portals, and internal tools for small businesses, nonprofits, and growing teams in Dallas–Fort Worth. Fixed quotes.",
  },
  "/work": {
    title: "Case Studies — Web Apps, Portals & Nonprofit Platforms",
    description:
      "24 shipped projects: membership platforms, registration systems, donation sites, and internal tools. The problem, what I built, and what it changed.",
  },
  "/about": {
    title: "About Austin Burris — Full Stack Developer in Dallas",
    description:
      "Full stack developer and MBA who ran a platform to 1M+ monthly users before writing software for clients. How I work, and who I build for.",
  },
  "/skills": {
    title: "Tech Stack — React, TypeScript, Node, PostgreSQL",
    description:
      "The stack behind More Smoke Dev: React and TypeScript, Node and Express, Python and FastAPI, PostgreSQL and Prisma, Stripe, AWS, and the Claude API.",
  },
  "/resume": {
    title: "Austin Burris — Résumé | Full Stack Engineer",
    description:
      "Full stack engineer in Dallas with an MBA and a founder's track record. Experience, selected projects, education, and certifications. Open to full-time roles.",
  },
};

const BRAND_SUFFIX = " | More Smoke Dev";
const TITLE_BUDGET = 60;   // including the brand suffix
const DESC_BUDGET = 155;

/** Trim to a word boundary so nothing ends mid-word. */
function fit(text, max) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const space = cut.lastIndexOf(" ");
  let out = space > max * 0.6 ? cut.slice(0, space) : cut;
  // Drop trailing punctuation, dashes, and dangling joining words
  out = out.replace(/[\s\u2014\u2013,.;:&+/-]+$/, "");
  out = out.replace(/\s+(and|or|the|a|an|with|for|to|of|in|on)$/i, "");
  return out + "\u2026";
}

function caseStudySeo(project) {
  const room = TITLE_BUDGET - BRAND_SUFFIX.length - project.title.length - 3;
  const title =
    room >= 14
      ? `${project.title} \u2014 ${fit(project.tagline, room)}`
      : `${project.title} \u2014 Case Study`;

  const firstProblem = project.problem.split(/(?<=\.)\s/)[0];
  const description = fit(`${project.tagline}. ${firstProblem}`, DESC_BUDGET);

  return { title, description, ogType: "article", image: SITE.image };
}

/** Every URL the site should expose to crawlers, with its metadata. */
export function allRoutes() {
  const routes = Object.entries(PAGES).map(([path, meta]) => ({
    path,
    changefreq: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : path === "/work" ? 0.9 : 0.8,
    ...meta,
  }));

  for (const p of projects) {
    routes.push({
      path: `/work/${p.id}`,
      changefreq: "monthly",
      priority: p.featured ? 0.7 : 0.6,
      ...caseStudySeo(p),
    });
  }
  return routes;
}

export function seoFor(pathname) {
  const clean = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
  const match = allRoutes().find((r) => r.path === clean);
  const base = match || {
    title: "Page Not Found",
    description: PAGES["/"].description,
  };
  return {
    ...base,
    title: fit(base.title, TITLE_BUDGET - BRAND_SUFFIX.length) + BRAND_SUFFIX,
    canonical: `${SITE.url}${clean === "/" ? "/" : clean}`,
    image: base.image || SITE.image,
    ogType: base.ogType || "website",
  };
}

/* ─── Structured data ──────────────────────────────────────────────── */

const organization = {
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  image: SITE.image,
  logo: `${SITE.url}/msd-logo.png`,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$",
  founder: { "@id": `${SITE.url}/#austin` },
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: SITE.country,
  },
  areaServed: [
    { "@type": "City", name: "Dallas" },
    { "@type": "City", name: "Fort Worth" },
    { "@type": "AdministrativeArea", name: "Dallas–Fort Worth Metroplex" },
    { "@type": "Country", name: "United States" },
  ],
  sameAs: SITE.sameAs,
  knowsAbout: [
    "Web application development",
    "Membership portal development",
    "Nonprofit website development",
    "Legacy application rescue",
    "API integration",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website or Redesign",
          description:
            "A bounded business site with responsive layouts, content migration, contact forms, analytics setup, and launch handoff.",
          serviceType: "Web design and development",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: 3500,
          priceCurrency: "USD",
          valueAddedTaxIncluded: false,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "App Rescue & Integration",
          description:
            "A paid technical review of an unfinished or unreliable application, written findings, and a fixed quote for the repair.",
          serviceType: "Application rescue and systems integration",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: 250,
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Portal or Workflow Application",
          description:
            "A focused first release covering member access, intake flows, dashboards, or internal workflows.",
          serviceType: "Custom software development",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: 9000,
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ongoing Support",
          description:
            "Up to six combined service hours a month for monitoring, small changes, and maintenance, with business-hours response.",
          serviceType: "Website maintenance and support",
        },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 1000,
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
    ],
  },
};

const person = {
  "@type": "Person",
  "@id": `${SITE.url}/#austin`,
  name: SITE.founder,
  url: `${SITE.url}/about`,
  jobTitle: "Full Stack Engineer",
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: SITE.country,
  },
  worksFor: { "@id": `${SITE.url}/#organization` },
  sameAs: SITE.sameAs,
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Anderson University" },
    { "@type": "EducationalOrganization", name: "Fullstack Academy" },
    { "@type": "CollegeOrUniversity", name: "Rutgers University" },
  ],
  knowsAbout: [
    "React", "TypeScript", "Node.js", "Express", "PostgreSQL",
    "Prisma", "Python", "FastAPI", "Stripe", "AWS", "Product management",
  ],
};

export function jsonLdFor(pathname, extra = {}) {
  const clean = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
  const graph = [organization, person];

  const website = {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}/#organization` },
  };
  graph.push(website);

  if (clean === "/" && extra.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: extra.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  if (clean.startsWith("/work/")) {
    const p = projects.find((x) => x.id === clean.slice("/work/".length));
    if (p) {
      graph.push({
        "@type": "CreativeWork",
        name: p.title,
        headline: `${p.title} — ${p.tagline}`,
        description: p.description,
        url: `${SITE.url}${clean}`,
        creator: { "@id": `${SITE.url}/#austin` },
        keywords: p.tech.join(", "),
      });
      graph.push({
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Work", item: `${SITE.url}/work` },
          { "@type": "ListItem", position: 3, name: p.title, item: `${SITE.url}${clean}` },
        ],
      });
    }
  }

  if (clean === "/work") {
    graph.push({
      "@type": "CollectionPage",
      name: "Case Studies",
      url: `${SITE.url}/work`,
      hasPart: projects.map((p) => ({
        "@type": "CreativeWork",
        name: p.title,
        url: `${SITE.url}/work/${p.id}`,
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
