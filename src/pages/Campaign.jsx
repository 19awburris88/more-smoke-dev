import { useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import { CAMPAIGN, daysLeftStore, examples, phaseStore } from "../data/campaign";

/**
 * /300 — the one-page website campaign.
 *
 * Phase is resolved after mount rather than during render. The page is
 * prerendered at deploy time, so a build-time date would be baked into the
 * HTML and could tell a January visitor the offer opens in November. Anything
 * that depends on today's date therefore renders nothing until the client
 * knows, which also means the page can never advertise a closed offer.
 */

const STEPS = [
  { n: "01", t: "Tell us about it", b: "Three minutes on the form. Your business, your offer, your photos." },
  { n: "02", t: "We build it", b: "A real one-page site, designed around what you sent us." },
  { n: "03", t: "You preview it live", b: "A link you can open on your phone and share before you decide." },
  { n: "04", t: "Approve and go live", b: "Pointed at your domain, in accounts that belong to you." },
];

const FOR_WHO = [
  { t: "Small businesses", b: "Trades, salons, studios, clinics — anyone whose customers look them up before they call." },
  { t: "Creators and artists", b: "One place that holds your links, your work and a way to book you." },
  { t: "New ventures", b: "Something credible on day one, before you know what the full site needs to be." },
  { t: "Nonprofits", b: "A page that explains the mission and takes a donation without a platform fee on top." },
];

export default function Campaign() {
  const phase = useSyncExternalStore(
    phaseStore.subscribe, phaseStore.getSnapshot, phaseStore.getServerSnapshot);
  const remaining = useSyncExternalStore(
    daysLeftStore.subscribe, daysLeftStore.getSnapshot, daysLeftStore.getServerSnapshot);

  const closed = phase === "closed";

  return (
    <>
      {/* ── OFFER ─────────────────────────────────────────── */}
      <section className="section section--light promo-top">
        <p className="section-label">LIMITED RUN</p>
        <h1 className="promo-headline">
          <span className="promo-price">${CAMPAIGN.price}</span>
          <span className="promo-headline-main">ONE-PAGE WEBSITES</span>
        </h1>
        <p className="promo-sub">A professional home for your business.</p>

        <div className="promo-window">
          <span className="promo-dates">
            {CAMPAIGN.startLabel} &ndash; {CAMPAIGN.endLabel}
          </span>
          {phase === "open" && remaining > 0 && (
            <span className="promo-chip">
              {remaining} {remaining === 1 ? "day" : "days"} left
            </span>
          )}
          {phase === "upcoming" && (
            <span className="promo-chip">Opens {CAMPAIGN.startLabel}</span>
          )}
          {closed && <span className="promo-chip promo-chip--off">Closed</span>}
        </div>

        <p className="promo-dedication">{CAMPAIGN.dedication}</p>

        <div className="promo-actions">
          {closed ? (
            <>
              <Link to="/start/" className="btn-primary">Start a project →</Link>
              <a href="/#services" className="btn-outline">See current pricing</a>
            </>
          ) : (
            <>
              <Link to="/start/" className="btn-primary">Start my site →</Link>
              <a
                href={`mailto:austin@moresmoke.dev?subject=${CAMPAIGN.keyword}`}
                className="btn-outline"
              >
                Or email &lsquo;{CAMPAIGN.keyword}&rsquo;
              </a>
            </>
          )}
        </div>

        {closed && (
          <p className="promo-closed-note">
            This run has finished. Websites start at $1,000 and app rescues
            begin with a $250 assessment — the current pricing is on the
            homepage.
          </p>
        )}
      </section>

      {/* ── WHAT YOU GET ──────────────────────────────────── */}
      <section className="section">
        <div className="section-header">
          <p className="section-label">WHAT ${CAMPAIGN.price} BUYS</p>
          <h2>One page, done properly.</h2>
          <p className="section-desc">
            Not a template with your logo dropped in. A page built around your
            business, your words and your photos — and yours to keep.
          </p>
        </div>

        <div className="promo-cols">
          <div className="promo-col">
            <h3>Included</h3>
            <ul className="promo-list promo-list--in">
              {CAMPAIGN.included.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
          <div className="promo-col">
            <h3>Not included</h3>
            <ul className="promo-list promo-list--out">
              {CAMPAIGN.excluded.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        </div>

        <p className="promo-footnote">
          Need more than one page, a store, or bookings? That is the standard
          build, from $1,000. We will tell you which one you actually need
          before you pay for either.
        </p>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section className="section section--light">
        <div className="section-header">
          <p className="section-label">HOW IT WORKS</p>
          <h2>You see it before you approve it.</h2>
        </div>
        <ol className="promo-steps">
          {STEPS.map(({ n, t, b }) => (
            <li key={n}>
              <span className="promo-step-num">{n}</span>
              <h3>{t}</h3>
              <p>{b}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── EXAMPLES ──────────────────────────────────────── */}
      {examples.length > 0 && (
        <section className="section">
          <div className="section-header">
            <p className="section-label">DEMO SITES</p>
            <h2>What ${CAMPAIGN.price} looks like.</h2>
            <p className="section-desc">
              Sample sites we built to show what yours could look like. The
              salon, barbershop, lash studio and creator are fictional. Open
              any of them on your phone — that is where most of your customers
              will see yours.
            </p>
          </div>
          <div className="example-grid">
            {examples.map((ex) => (
              <article className="example-card" key={ex.id}>
                <div className="example-shot">
                  {ex.image
                    ? <img src={ex.image} alt={`${ex.name} demo site`} loading="lazy" />
                    : <span className="project-placeholder">{ex.name[0]}</span>}
                </div>
                <div className="example-body">
                  <div className="example-top">
                    <h3>{ex.name}</h3>
                    {ex.category && <span className="badge">{ex.category}</span>}
                  </div>
                  {ex.blurb && <p>{ex.blurb}</p>}
                  {ex.url && (
                    <a href={ex.url} target="_blank" rel="noreferrer" className="link-green">
                      Open the site →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ── WHO IT IS FOR ─────────────────────────────────── */}
      <section className="section section--alt">
        <div className="section-header">
          <p className="section-label">WHO IT IS FOR</p>
          <h2>If people look you up, you need one.</h2>
        </div>
        <div className="promo-who">
          {FOR_WHO.map(({ t, b }) => (
            <div className="promo-who-card" key={t}>
              <strong>{t}</strong>
              <p>{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSE ─────────────────────────────────────────── */}
      {!closed && (
        <section className="statement-band">
          <div className="statement-grid">
            <h2 className="statement-headline">
              ${CAMPAIGN.price}, and you own it.
            </h2>
            <div className="statement-body">
              <p>
                The domain and the hosting go in your name, not ours. No
                monthly licence, no platform you are stuck on, no fee to leave.
              </p>
              <p>
                The run ends {CAMPAIGN.endLabel} and the price goes back to
                $1,000.
              </p>
              <Link to="/start/" className="statement-link">Start my site</Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
