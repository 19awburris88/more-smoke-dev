import { useRef, useState } from "react";

/**
 * Project intake, posted to Netlify Forms.
 *
 * Netlify discovers forms by parsing the HTML it is handed at deploy time, so
 * this only works because the form is prerendered into dist/start/index.html.
 * If the prerenderer ever stops covering this route, submissions stop being
 * captured — silently. The hidden form-name input is what ties a browser POST
 * back to the form Netlify registered.
 *
 * File fields mean the body has to be multipart, so the fetch below passes the
 * FormData straight through and never sets Content-Type: the browser has to
 * generate the multipart boundary itself.
 */

const FORM_NAME = "project-intake";

const PROMPT = `You are helping me brief a web studio that is about to build my website. Answer each question below in 2-3 sentences, in my voice. Be specific and honest - vague answers produce a vague website.

1. What is my business name and what do I actually do?
2. What city and neighborhood do I serve?
3. Who is my ideal customer, and what are they worried about before they buy?
4. What are my main services or products? List them, with prices if I have them.
5. What makes me different from my competitors? Be concrete, not flattering.
6. How long have I been doing this? Any credentials, awards, or notable clients?
7. What is the one thing I want a visitor to do on my site? (book a call, get a quote, call me, visit the shop, buy something)
8. Describe the look I want in three words. (professional, warm, bold, luxury, fun, minimal...)
9. Paste links to my current site, Instagram, and Google Business listing.
10. What do I NOT want on my site?

Answer every question. The more specific the answers, the better the site will be.`;

const FLOW = [
  { n: "01", label: "Submit your info" },
  { n: "02", label: "We build your site" },
  { n: "03", label: "You preview it live" },
  { n: "04", label: "Approve and go live" },
];

const HOW_TO = [
  { n: 1, title: "Copy this prompt", body: "Tap Copy Prompt to grab the whole thing." },
  { n: 2, title: "Take it to Claude or ChatGPT", body: "Paste the prompt and let your AI answer for you." },
  { n: 3, title: "Paste the response below", body: "Drop the full response into the box below." },
];

const PHOTO_FIELDS = [
  { name: "headshots", label: "Headshots", help: "A clear photo of you, and your team if it applies." },
  { name: "lifestyle", label: "Lifestyle / behind the scenes", help: "You working, events, your space." },
  { name: "portfolio", label: "Portfolio / your work", help: "Results, products, projects, before and afters." },
  { name: "logo", label: "Logo", help: "A PNG or JPG of your logo if you have one." },
];

const CTA_CHOICES = [
  "Book a call",
  "Get a quote",
  "Call now",
  "Visit the shop",
  "Buy now",
  "Join the mailing list",
  "Not sure — pick for me",
];

export default function Start() {
  const [status, setStatus] = useState("idle");
  const [copyState, setCopyState] = useState("idle"); // idle | copied | manual
  const [counts, setCounts] = useState({});
  const promptRef = useRef(null);

  async function copyPrompt() {
    const flash = (s) => {
      setCopyState(s);
      setTimeout(() => setCopyState("idle"), 2400);
    };

    // The async clipboard API needs a secure context and permission, so it is
    // the preferred path but not a reliable one. Each fallback below still
    // reports what happened — a button that silently does nothing reads as
    // broken, and this one gates the whole form.
    try {
      await navigator.clipboard.writeText(PROMPT);
      flash("copied");
      return;
    } catch {
      /* fall through */
    }

    const el = promptRef.current;
    if (!el) return;
    el.focus();
    el.select();
    try {
      if (document.execCommand("copy")) {
        flash("copied");
        return;
      }
    } catch {
      /* older browsers throw rather than returning false */
    }
    flash("manual");
  }

  function countFiles(e) {
    const { name, files } = e.target;
    setCounts((c) => ({ ...c, [name]: files.length }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(form.getAttribute("action"), {
        method: "POST",
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setCounts({});
        window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="section section--light intake-done">
        <p className="section-label">SUBMITTED</p>
        <h1>That's everything we need.</h1>
        <p className="page-desc">
          We'll start building and text you the moment your preview is live.
          If anything is unclear we'll call before we guess.
        </p>
        <div className="page-header-actions">
          <a href="/work/" className="btn-primary">See the work while you wait →</a>
          <a href="mailto:austin@moresmoke.dev" className="btn-outline">Email us something else</a>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section section--light intake-top">
        <p className="section-label">START A PROJECT</p>
        <h1 className="intake-headline">
          LET'S BUILD <span>YOUR SITE.</span>
        </h1>
        <p className="page-desc">
          Takes about 3 minutes. Tell us about your business and we will take it
          from here.
        </p>

        <ol className="intake-flow">
          {FLOW.map(({ n, label }) => (
            <li key={n}>
              <span className="intake-flow-num">{n}</span>
              <span className="intake-flow-label">{label}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--light intake-body">
        <form
          name={FORM_NAME}
          action="/start/"
          method="POST"
          encType="multipart/form-data"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="intake-form"
        >
          {/* Netlify matches the POST to the registered form by this value. */}
          <input type="hidden" name="form-name" value={FORM_NAME} />
          <p className="intake-honeypot">
            <label>
              Leave this empty
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          {/* ── 1 ───────────────────────────────────────────────── */}
          <section className="intake-card">
            <div className="intake-card-head">
              <h2 className="intake-card-title">ABOUT YOU</h2>
              <span className="intake-card-step">STEP 1 OF 4</span>
            </div>

            <div className="intake-row">
              <div className="intake-field">
                <label htmlFor="name">Full name <i>*</i></label>
                <input id="name" name="name" type="text" placeholder="Jane Doe" required />
              </div>
              <div className="intake-field">
                <label htmlFor="email">Email <i>*</i></label>
                <input id="email" name="email" type="email" placeholder="jane@domain.com" required />
              </div>
            </div>

            <div className="intake-row">
              <div className="intake-field">
                <label htmlFor="phone">Best phone <i>*</i></label>
                <input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" required />
                <small>So we can text you when your preview is live.</small>
              </div>
              <div className="intake-field">
                <label htmlFor="social">Instagram / main social <em>optional</em></label>
                <input id="social" name="social" type="text" placeholder="@yourhandle" />
              </div>
            </div>

            <div className="intake-field">
              <label htmlFor="business">Business name <i>*</i></label>
              <input id="business" name="business" type="text" placeholder="Your brand, LLC, or personal name" required />
            </div>

            <div className="intake-field">
              <label htmlFor="embeds">Music / video / embed links <em>optional</em></label>
              <textarea id="embeds" name="embeds" rows={3} placeholder="https://open.spotify.com/artist/..." />
            </div>
          </section>

          {/* ── 2 ───────────────────────────────────────────────── */}
          <section className="intake-card">
            <div className="intake-card-head">
              <h2 className="intake-card-title">TELL US ABOUT YOUR BUSINESS</h2>
              <span className="intake-card-step">STEP 2 OF 4</span>
            </div>

            <p className="intake-lede">
              Copy the prompt below, take it to Claude or ChatGPT, let your AI
              fill it out for you, then paste the response back here.
            </p>

            <ol className="intake-howto">
              {HOW_TO.map(({ n, title, body }) => (
                <li key={n}>
                  <span className="intake-howto-num">{n}</span>
                  <div>
                    <strong>{title}</strong>
                    <span>{body}</span>
                  </div>
                </li>
              ))}
            </ol>

            <div className="intake-prompt">
              <div className="intake-prompt-head">
                <span className="intake-prompt-label">THE PROMPT</span>
                <button type="button" className="btn-primary intake-copy" onClick={copyPrompt}>
                  {copyState === "copied"
                    ? "Copied \u2713"
                    : copyState === "manual"
                      ? "Selected \u2014 press \u2318C"
                      : "Copy prompt"}
                </button>
              </div>
              <textarea
                ref={promptRef}
                className="intake-prompt-text"
                readOnly
                rows={9}
                value={PROMPT}
                aria-label="Prompt to copy"
              />
            </div>

            <div className="intake-field">
              <label htmlFor="ai">Paste the AI's response here <i>*</i></label>
              <textarea id="ai" name="ai_response" rows={8} placeholder="Paste the full response here" required />
            </div>

            <div className="intake-field">
              <label htmlFor="offer">Your main offer <i>*</i></label>
              <textarea id="offer" name="main_offer" rows={4} placeholder="The one thing you most want to sell, and what it costs." required />
            </div>
          </section>

          {/* ── 3 ───────────────────────────────────────────────── */}
          <section className="intake-card">
            <div className="intake-card-head">
              <h2 className="intake-card-title">YOUR PHOTOS</h2>
              <span className="intake-card-step">STEP 3 OF 4</span>
            </div>

            <p className="intake-lede">
              Optional, but it makes the site look like you. Upload the best
              ones. Phone photos are fine.
            </p>

            {PHOTO_FIELDS.map(({ name, label, help }) => (
              <div className="intake-field" key={name}>
                <label htmlFor={name}>{label} <em>optional</em></label>
                <label className="intake-drop" htmlFor={name}>
                  <span className="intake-drop-btn">+ Add photos</span>
                  <span className="intake-drop-count">
                    {counts[name] ? `${counts[name]} selected` : "No files yet"}
                  </span>
                </label>
                <input
                  id={name}
                  name={name}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={countFiles}
                  className="intake-file"
                />
                <small>{help}</small>
              </div>
            ))}

            <div className="intake-field">
              <label htmlFor="photo_links">Somewhere else? Paste a link <em>optional</em></label>
              <input id="photo_links" name="photo_links" type="text" placeholder="Google Drive, Dropbox, or your Instagram" />
              <small>Easier than uploading if you have a lot of them.</small>
            </div>
          </section>

          {/* ── 4 ───────────────────────────────────────────────── */}
          <section className="intake-card">
            <div className="intake-card-head">
              <h2 className="intake-card-title">DESIGN</h2>
              <span className="intake-card-step">STEP 4 OF 4</span>
            </div>

            <div className="intake-row">
              <div className="intake-field">
                <label htmlFor="colors">Brand colours <em>optional</em></label>
                <input id="colors" name="brand_colors" type="text" placeholder="#000, #42d36b, or pick for me" />
              </div>
              <div className="intake-field">
                <label htmlFor="cta">Main CTA button <em>optional</em></label>
                <select id="cta" name="main_cta" defaultValue="">
                  <option value="">Select...</option>
                  {CTA_CHOICES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {status === "error" && (
            <p className="form-error intake-status">
              That didn't go through. Email{" "}
              <a href="mailto:austin@moresmoke.dev">austin@moresmoke.dev</a> and
              we'll pick it up from there.
            </p>
          )}

          <button type="submit" className="btn-primary intake-submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Build my site →"}
          </button>

          <p className="intake-footnote">
            We'll never share any of this. Hosting and the domain go in your
            name, not ours.
          </p>
        </form>
      </section>
    </>
  );
}
