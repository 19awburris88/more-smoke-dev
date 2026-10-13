/**
 * Build-time static rendering.
 *
 * The site is a client-rendered SPA, so without this every URL serves an empty
 * <div id="root"> with one shared <title>. Search crawlers can index that, but
 * social and link-preview crawlers (LinkedIn, Slack, iMessage, Facebook) do not
 * run JavaScript at all — so every shared link looked identical.
 *
 * This renders each route to real HTML with its own metadata, writes it to
 * dist/<route>/index.html, and emits sitemap.xml and robots.txt from the same
 * route list so they can never drift apart.
 *
 * Run via `npm run build` (vite build && vite-node scripts/prerender.jsx).
 */
import { renderToString } from "react-dom/server";
import fs from "node:fs";
import path from "node:path";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import Navbar from "../src/components/Navbar.jsx";
import Footer from "../src/components/Footer.jsx";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/About.jsx";
import Work from "../src/pages/Work.jsx";
import CaseStudy from "../src/pages/CaseStudy.jsx";
import Skills from "../src/pages/Skills.jsx";
import Resume from "../src/pages/Resume.jsx";
import { allRoutes, seoFor, jsonLdFor, canonicalUrl, SITE } from "../src/data/seo.js";
import { FAQS } from "../src/data/faqs.js";

const DIST = path.resolve("dist");
const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<CaseStudy />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

/**
 * vite-node resolves asset imports to their source path (/src/assets/x.png),
 * which does not exist in the build output. Map those onto the hashed
 * filenames Vite emitted so the prerendered HTML points at real files.
 */
const manifestPath = path.join(DIST, ".vite", "manifest.json");
const assetMap = new Map();
if (fs.existsSync(manifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  for (const [key, entry] of Object.entries(manifest)) {
    if (entry.file) assetMap.set(`/${key}`, `/${entry.file}`);
  }
}

function rewriteAssetPaths(html) {
  let out = html.replace(/\/src\/assets\/[A-Za-z0-9._-]+/g, (match) => {
    const hashed = assetMap.get(match);
    if (hashed) return hashed;
    unresolved.add(match);
    return match;
  });
  return out;
}
const unresolved = new Set();

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function buildHead(seo, jsonLd) {
  return `    <title>${esc(seo.title)}</title>
    <meta name="description" content="${esc(seo.description)}" />
    <link rel="canonical" href="${esc(seo.canonical)}" />

    <!-- Open Graph -->
    <meta property="og:type" content="${esc(seo.ogType)}" />
    <meta property="og:site_name" content="${esc(SITE.name)}" />
    <meta property="og:url" content="${esc(seo.canonical)}" />
    <meta property="og:title" content="${esc(seo.title)}" />
    <meta property="og:description" content="${esc(seo.description)}" />
    <meta property="og:image" content="${esc(seo.image)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(seo.title)}" />
    <meta name="twitter:description" content="${esc(seo.description)}" />
    <meta name="twitter:image" content="${esc(seo.image)}" />

    <script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`;
}

/** Strip the metadata vite emitted into the template; each page supplies its own. */
function stripStaticMeta(html) {
  return html
    .replace(/\s*<title>[\s\S]*?<\/title>/g, "")
    .replace(/\s*<meta\s+name="description"[\s\S]*?\/>/g, "")
    .replace(/\s*<meta\s+property="og:[\s\S]*?\/>/g, "")
    .replace(/\s*<meta\s+name="twitter:[\s\S]*?\/>/g, "")
    .replace(/\s*<!--\s*Open Graph\s*-->/g, "")
    .replace(/\s*<!--\s*Twitter Card\s*-->/g, "");
}

const routes = allRoutes();
let written = 0;

for (const route of routes) {
  const seo = seoFor(route.path);
  const jsonLd = jsonLdFor(route.path, { faqs: FAQS });

  const body = renderToString(
    <MemoryRouter initialEntries={[route.path]}>
      <App />
    </MemoryRouter>
  );

  const html = rewriteAssetPaths(
    stripStaticMeta(template)
      .replace("</head>", `${buildHead(seo, jsonLd)}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  );

  const outDir =
    route.path === "/" ? DIST : path.join(DIST, route.path.replace(/^\//, ""));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  written++;
}

/* ─── 404.html ────────────────────────────────────────────────────── */
/* Netlify serves this for any unmatched path. It is intentionally static:
   booting the SPA here would match no route and render an empty page. */
const cssHref = (template.match(/href="(\/assets\/[^"]+\.css)"/) || [])[1] || "";
fs.writeFileSync(
  path.join(DIST, "404.html"),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, follow" />
    <title>Page not found | ${SITE.name}</title>
    <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
    ${cssHref ? `<link rel="stylesheet" href="${cssHref}" />` : ""}
  </head>
  <body>
    <main class="page-container" style="text-align:center;padding-top:96px">
      <p class="section-label">404</p>
      <h1 style="font-size:3rem;margin-bottom:16px">Page not found</h1>
      <p class="page-desc" style="margin:0 auto 32px">
        That page does not exist. It may have moved, or the link may be out of date.
      </p>
      <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
        <a href="/" class="btn-primary">Go to the homepage</a>
        <a href="/work/" class="btn-outline">See the work</a>
      </div>
    </main>
  </body>
</html>
`
);

/* ─── sitemap.xml ─────────────────────────────────────────────────── */
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${canonicalUrl(r.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(DIST, "sitemap.xml"), sitemap);

/* ─── robots.txt ──────────────────────────────────────────────────── */
fs.writeFileSync(
  path.join(DIST, "robots.txt"),
  `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`
);

if (unresolved.size) {
  console.error(`\nERROR: ${unresolved.size} asset path(s) had no manifest entry and would 404:`);
  for (const u of unresolved) console.error(`  ${u}`);
  process.exit(1);
}

console.log(`prerendered ${written} routes + sitemap.xml + robots.txt (${assetMap.size} assets mapped)`);
