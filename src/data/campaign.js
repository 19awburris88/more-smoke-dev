import imgCrownedByNia from "../assets/preview-crowned-by-nia.jpg";
import imgZeroGuard from "../assets/preview-zero-guard.jpg";
import imgSlowBlink from "../assets/preview-slow-blink.jpg";
import imgJordanEllis from "../assets/preview-jordan-ellis.jpg";
import imgHarvestGate from "../assets/preview-harvest-gate.jpg";
import imgGoldenHour from "../assets/preview-golden-hour.jpg";
import imgWhitmores from "../assets/preview-whitmores.jpg";
import imgAfterHours from "../assets/preview-after-hours-indy.jpg";
import imgRaices from "../assets/preview-raices-counseling.jpg";
import imgLegacyLedger from "../assets/preview-legacy-ledger.jpg";
import imgHeartOfAHustler from "../assets/preview-heart-of-a-hustler.jpg";
import imgFoilhouse from "../assets/preview-foilhouse.jpg";

/**
 * The $300 one-page website campaign.
 *
 * Everything that expires lives here so there is one place to change when the
 * window moves, and one place to look when something on the site still claims
 * the offer is running after it is not.
 */

export const CAMPAIGN = {
  price: 300,
  path: "/300/",
  keyword: "WEBSITE",
  /** Calendar dates, inclusive of both ends, read in the visitor's local time. */
  start: "2026-11-09",
  end: "2027-01-28",
  startLabel: "November 9, 2026",
  endLabel: "January 28, 2027",
  dedication: "In honor of my dad's support. Ending on his birthday.",
  included: [
    "One page, up to five sections",
    "Three rounds of revisions",
    "Mobile and desktop layouts",
    "Contact form wired to your inbox",
    "Launched in accounts you own",
  ],
  excluded: [
    "Content — you supply the words and photos",
    "Domain and hosting, billed to you at cost",
    "Logo design, copywriting and photography",
    "Online store, bookings or custom integrations",
  ],
};

/** Local calendar date, not UTC: the deadline is a date in Dallas, not an instant. */
function localISO(d) {
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** "upcoming" | "open" | "closed" */
export function campaignPhase(now = new Date()) {
  const today = localISO(now);
  if (today < CAMPAIGN.start) return "upcoming";
  if (today > CAMPAIGN.end) return "closed";
  return "open";
}

/** Whole days remaining, inclusive of today. 0 once the window has passed. */
export function daysLeft(now = new Date()) {
  const end = new Date(`${CAMPAIGN.end}T23:59:59`);
  return Math.max(0, Math.ceil((end - now) / 86_400_000));
}

/**
 * Example builds shown on the campaign page.
 *
 * Shape:
 *   {
 *     id:       "greenline-landscaping",
 *     name:     "Greenline Landscaping",
 *     category: "Trades",            // groups the grid
 *     blurb:    "One sentence on who it is for and what it does.",
 *     url:      "https://...",        // live demo, omit if not public
 *     image:    importedScreenshot,   // 1280x800, imported at the top of this file
 *   }
 *
 * The section hides itself while this is empty, so the page ships without it
 * rather than showing an empty shelf.
 *
 * The section copy names the examples that are not fictional (Heart of A
 * Hustler and The Money Mill). Keep that line accurate when this list changes.
 */
export const examples = [
  {
    id: "crowned-by-nia",
    name: "Crowned by Nia",
    category: "Hair Stylist",
    blurb: "A natural hair studio page for protective styles, locs and silk presses, with an appointment request form.",
    url: "https://crownedbynia.netlify.app",
    image: imgCrownedByNia,
  },
  {
    id: "zero-guard",
    name: "Zero Guard",
    category: "Barber",
    blurb: "A barbershop page with a clear price board for fades, line-ups and beard work.",
    url: "https://zeroguard.netlify.app",
    image: imgZeroGuard,
  },
  {
    id: "slow-blink",
    name: "Slow Blink",
    category: "Lash Artist",
    blurb: "A lash studio page with a tappable menu of classic, hybrid and volume sets.",
    url: "https://blinkslow.netlify.app",
    image: imgSlowBlink,
  },
  {
    id: "jordan-ellis",
    name: "Jordan Ellis",
    category: "Content Creator",
    blurb: "A fragrance creator's reviews, media kit and partnership inquiry on one page.",
    url: "https://jordanfragrance.netlify.app",
    image: imgJordanEllis,
  },
  {
    id: "harvest-gate",
    name: "Harvest Gate",
    category: "Church",
    blurb: "A community church page with service times, sermons, prayer requests and ways to connect.",
    url: "https://harvestgatechurch.netlify.app",
    image: imgHarvestGate,
  },
  {
    id: "golden-hour",
    name: "Golden Hour by Marcus",
    category: "Photographer",
    blurb: "A portrait studio page with a portfolio, session packages and an inquiry form.",
    url: "https://goldenhourmarcus.netlify.app",
    image: imgGoldenHour,
  },
  {
    id: "after-hours-indy",
    name: "After Hours Indy",
    category: "Event Promoter",
    blurb: "A nightlife brand's upcoming nights, recaps, partnerships and a guest list request form.",
    url: "https://afterhoursindy.netlify.app",
    image: imgAfterHours,
  },
  {
    id: "whitmores-bakehouse",
    name: "Whitmore's Bakehouse",
    category: "Bakery",
    blurb: "A family bakery built out as a full site with menu and catering pages. The $300 version is one page of it.",
    url: "https://whitsmores.netlify.app",
    image: imgWhitmores,
  },
  {
    id: "raices-counseling",
    name: "Raíces Counseling",
    category: "Therapist",
    blurb: "A bilingual therapy practice page with sessions, an FAQ and a consultation request form.",
    url: "https://carmencounseling.netlify.app",
    image: imgRaices,
  },
  {
    id: "legacy-ledger",
    name: "Legacy Ledger",
    category: "Tax Preparer",
    blurb: "A tax practice page with services, pricing, an FAQ and a consult booking form.",
    url: "https://legacyledgertax.netlify.app",
    image: imgLegacyLedger,
  },
  {
    id: "heart-of-a-hustler",
    name: "Heart of A Hustler",
    category: "Clothing Brand",
    blurb: "A streetwear brand built out as a full site with a shop. The $300 version is one page of it.",
    url: "https://heart-of-a-hustler.ddsites.co",
    image: imgHeartOfAHustler,
  },
  {
    // Live site still shows The Money Mill, a real shop. Rename, reshoot and
    // drop it from the intro's exception line once the fictional version is up.
    id: "foilhouse",
    name: "The Money Mill",
    category: "Trading Cards",
    blurb: "A trading card shop built out as a full store with a cart. The $300 version is one page, without the store.",
    url: "https://foilhouse.netlify.app",
    image: imgFoilhouse,
  },
];

/* ─── Reading the date safely in a prerendered page ──────────────────
 *
 * The phase depends on today, but the HTML is generated at deploy time, so a
 * value computed during render would be frozen into the build and could tell
 * a January visitor the offer opens in November.
 *
 * useSyncExternalStore is the API for exactly this: it returns the server
 * snapshot while rendering and hydrating, then the client snapshot. No
 * hydration mismatch, and no setState-in-an-effect.
 *
 * Both snapshots return primitives, so repeated calls compare equal and React
 * does not loop. Nothing changes mid-session, so subscribe is a no-op.
 */

/** Stable identity — a new closure each render would resubscribe forever. */
const subscribeNever = () => () => {};

export const phaseStore = {
  subscribe: subscribeNever,
  getSnapshot: () => campaignPhase(),
  /** Unknown at build time: the UI renders nothing date-dependent until mount. */
  getServerSnapshot: () => null,
};

export const daysLeftStore = {
  subscribe: subscribeNever,
  getSnapshot: () => daysLeft(),
  getServerSnapshot: () => 0,
};
