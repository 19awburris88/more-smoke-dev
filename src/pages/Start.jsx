import { useCallback, useRef, useState } from "react";

/**
 * Project intake, posted to Demo Drop.
 *
 * Their contract, read off the hosted intake form at mydemodrop.com/intake:
 *
 *   1. Mint a `draft` id client-side and keep it for the whole session.
 *   2. As each photo is picked, shrink it and POST the raw blob to
 *      /api/intake/upload?draft&group&name&key with the image mime as the
 *      content-type. 201 means stored.
 *   3. POST the answers as JSON to /api/intake carrying the same `draft`, so
 *      the lead and its already-uploaded photos are tied together. 201 again.
 *
 * Answer keys have to match their schema exactly or the field is dropped on
 * their side, so the form inputs are named for their keys rather than ours.
 *
 * Netlify Forms stays wired up as a fallback only: if Demo Drop errors or the
 * network fails, the same submission is posted to Netlify so the lead is
 * captured somewhere rather than lost after the client spent three minutes on
 * it. That path needs the form to stay in the prerendered HTML, which is how
 * Netlify registers it at deploy time.
 */

const DEMODROP = {
  base: "https://mydemodrop.com",
  /**
   * Public partner key, not a secret: Demo Drop puts this same value in the
   * query string of the hosted intake link handed to clients, so it identifies
   * the agency rather than authenticating anyone. It ships in the bundle.
   */
  agencyKey: "abc4611ac456d83ef58ad47a0964fb4a",
  source: "moresmoke.dev",
};

const NETLIFY_FORM = "project-intake";

/** Their schema. Order matters only for readability; the keys must match. */
const ANSWER_KEYS = [
  "contact_name",
  "contact_email",
  "contact_phone",
  "social",
  "business_name",
  "embed_links",
  "description",
  "main_offer",
  "brand_colors",
  "cta_text",
];

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

/** `group` is what Demo Drop files the upload under; it is not our choice. */
const PHOTO_FIELDS = [
  { key: "photos_headshots", group: "headshots", label: "Headshots", help: "A clear photo of you, and your team if it applies." },
  { key: "photos_lifestyle", group: "lifestyle", label: "Lifestyle / behind the scenes", help: "You working, events, your space." },
  { key: "photos_portfolio", group: "portfolio", label: "Portfolio / your work", help: "Results, products, projects, before and afters." },
  { key: "photos_logo", group: "logo", label: "Logo", help: "A PNG or JPG of your logo if you have one." },
];

/** Demo Drop's own options. Sending anything else would not match their build. */
const CTA_CHOICES = [
  "Book a Call",
  "Let's Talk",
  "Work With Me",
  "Start Here",
  "Get Started",
  "Apply Now",
];

function makeDraftId() {
  const a = new Uint8Array(12);
  crypto.getRandomValues(a);
  return "d" + Array.from(a, (b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Mirrors Demo Drop's own client-side resize: anything under 1.5MB or animated
 * goes up untouched, everything else is capped at 2400px on its long edge.
 * Phone photos are routinely 8MB+ and their endpoint is not built for that.
 */
function shrink(file) {
  return new Promise((resolve) => {
    if (file.type === "image/gif" || file.size < 1_500_000) {
      resolve(file);
      return;
    }
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const max = 2400;
      const k = Math.min(1, max / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * k);
      canvas.height = Math.round(img.height * k);
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      const type = file.type === "image/png" ? "image/png" : "image/jpeg";
      canvas.toBlob((blob) => resolve(blob || file), type, 0.88);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(file);
    };
    img.src = url;
  });
}

export default function Start() {
  const [status, setStatus] = useState("idle");
  const [problem, setProblem] = useState("");
  const [copyState, setCopyState] = useState("idle");
  const [photos, setPhotos] = useState({});
  const [uploading, setUploading] = useState(0);
  const promptRef = useRef(null);
  const draftRef = useRef("");

  // crypto is not available while the page is prerendered, so the id is minted
  // on first use — which can only happen after a real interaction.
  const draftId = useCallback(() => {
    if (!draftRef.current) draftRef.current = makeDraftId();
    return draftRef.current;
  }, []);

  async function copyPrompt() {
    const flash = (s) => {
      setCopyState(s);
      setTimeout(() => setCopyState("idle"), 2400);
    };
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

  function setRow(key, index, patch) {
    setPhotos((p) => {
      const rows = [...(p[key] || [])];
      rows[index] = { ...rows[index], ...patch };
      return { ...p, [key]: rows };
    });
  }

  async function handlePhotos(e, field) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setPhotos((p) => ({
      ...p,
      [field.key]: files.map((f) => ({ name: f.name, state: "uploading" })),
    }));
    setUploading((n) => n + files.length);

    await Promise.all(
      files.map(async (file, i) => {
        try {
          const blob = await shrink(file);
          const q = new URLSearchParams({
            draft: draftId(),
            group: field.group,
            name: file.name,
            key: DEMODROP.agencyKey,
          });
          const res = await fetch(`${DEMODROP.base}/api/intake/upload?${q}`, {
            method: "POST",
            headers: { "content-type": blob.type || file.type || "image/jpeg" },
            body: blob,
          });
          if (res.status === 201) {
            setRow(field.key, i, { state: "done" });
          } else {
            const d = await res.json().catch(() => ({}));
            setRow(field.key, i, { state: "failed", note: d.error || `Error ${res.status}` });
          }
        } catch {
          setRow(field.key, i, { state: "failed", note: "Upload failed" });
        } finally {
          setUploading((n) => n - 1);
        }
      })
    );
  }

  /** Last resort so a completed form is never simply lost. */
  async function captureFallback(form, reason) {
    try {
      const fd = new FormData(form);
      fd.set("form-name", NETLIFY_FORM);
      fd.set("fallback_reason", reason);
      const res = await fetch(form.getAttribute("action"), { method: "POST", body: fd });
      if (res.ok) {
        setStatus("success-fallback");
        return;
      }
    } catch {
      /* nothing left to try */
    }
    setProblem(reason);
    setStatus("error");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    if (uploading > 0) {
      setProblem("Your photos are still uploading. Give it a few seconds.");
      setStatus("waiting");
      return;
    }

    const fd = new FormData(form);
    const answers = {};
    for (const key of ANSWER_KEYS) {
      answers[key] = String(fd.get(key) ?? "").trim();
    }

    // Demo Drop has no field for this, and it is too useful to drop.
    const links = String(fd.get("photo_links") ?? "").trim();
    if (links) answers.description += `\n\nPhoto links: ${links}`;

    setStatus("sending");
    setProblem("");

    const body = {
      answers,
      website: String(fd.get("website") ?? ""), // their honeypot
      source: DEMODROP.source,
      draft: draftId(),
      agency_key: DEMODROP.agencyKey,
    };

    try {
      const res = await fetch(`${DEMODROP.base}/api/intake`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 201) {
        setStatus("success");
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
      }
      const d = await res.json().catch(() => ({}));
      await captureFallback(form, d.error || `Demo Drop returned ${res.status}`);
    } catch (err) {
      await captureFallback(form, `Network problem: ${err.message}`);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  if (status === "success" || status === "success-fallback") {
    return (
      <section className="section section--light intake-done">
        <p className="section-label">SUBMITTED</p>
        <h1>That's everything we need.</h1>
        <p className="page-desc">
          {status === "success"
            ? "We'll start building and text you the moment your preview is live. If anything is unclear we'll call before we guess."
            : "We have your details, but the handoff to our build system did not go through. We'll confirm by email within one business day before anything starts."}
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
          name={NETLIFY_FORM}
          action="/start/"
          method="POST"
          encType="multipart/form-data"
          data-netlify="true"
          netlify-honeypot="website"
          onSubmit={handleSubmit}
          className="intake-form"
        >
          {/* Only read on the fallback path, but Netlify needs them registered. */}
          <input type="hidden" name="form-name" value={NETLIFY_FORM} />
          <input type="hidden" name="fallback_reason" defaultValue="" />
          <p className="intake-honeypot">
            <label>
              Leave this empty
              <input name="website" tabIndex={-1} autoComplete="off" />
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
                <label htmlFor="contact_name">Full name <i>*</i></label>
                <input id="contact_name" name="contact_name" type="text" placeholder="Jane Doe" autoComplete="name" required />
              </div>
              <div className="intake-field">
                <label htmlFor="contact_email">Email <i>*</i></label>
                <input id="contact_email" name="contact_email" type="email" placeholder="jane@domain.com" autoComplete="email" required />
              </div>
            </div>

            <div className="intake-row">
              <div className="intake-field">
                <label htmlFor="contact_phone">Best phone <i>*</i></label>
                <input id="contact_phone" name="contact_phone" type="tel" placeholder="(555) 555-5555" autoComplete="tel" required />
                <small>So we can text you when your preview is live.</small>
              </div>
              <div className="intake-field">
                <label htmlFor="social">Instagram / main social <em>optional</em></label>
                <input id="social" name="social" type="text" placeholder="@yourhandle" />
              </div>
            </div>

            <div className="intake-field">
              <label htmlFor="business_name">Business name <i>*</i></label>
              <input id="business_name" name="business_name" type="text" placeholder="Your brand, LLC, or personal name" required />
            </div>

            <div className="intake-field">
              <label htmlFor="embed_links">Music / video / embed links <em>optional</em></label>
              <textarea id="embed_links" name="embed_links" rows={3} placeholder="https://open.spotify.com/artist/..." />
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
                    ? "Copied ✓"
                    : copyState === "manual"
                      ? "Selected — press ⌘C"
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
              <label htmlFor="description">Paste the AI's response here <i>*</i></label>
              <textarea id="description" name="description" rows={8} placeholder="Paste the full response here" required />
            </div>

            <div className="intake-field">
              <label htmlFor="main_offer">Your main offer <i>*</i></label>
              <textarea id="main_offer" name="main_offer" rows={4} placeholder="The one thing you most want to sell, and what it costs." required />
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

            {PHOTO_FIELDS.map((field) => (
              <div className="intake-field" key={field.key}>
                <label htmlFor={field.key}>{field.label} <em>optional</em></label>
                <label className="intake-drop" htmlFor={field.key}>
                  <span className="intake-drop-btn">+ Add photos</span>
                  <span className="intake-drop-count">
                    {photos[field.key]?.length
                      ? `${photos[field.key].length} selected`
                      : "No files yet"}
                  </span>
                </label>
                <input
                  id={field.key}
                  name={field.key}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif,image/*"
                  multiple
                  onChange={(e) => handlePhotos(e, field)}
                  className="intake-file"
                />
                {photos[field.key]?.length > 0 && (
                  <ul className="intake-filelist">
                    {photos[field.key].map((row, i) => (
                      <li key={`${row.name}-${i}`} className="intake-filerow">
                        <span className="intake-filename">{row.name}</span>
                        <span className={`intake-filestat is-${row.state}`}>
                          {row.state === "uploading" && "Uploading..."}
                          {row.state === "done" && "Added"}
                          {row.state === "failed" && (row.note || "Failed")}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                <small>{field.help}</small>
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
                <label htmlFor="brand_colors">Brand colours <em>optional</em></label>
                <input id="brand_colors" name="brand_colors" type="text" placeholder="#000, #42d36b, or pick for me" />
              </div>
              <div className="intake-field">
                <label htmlFor="cta_text">Main CTA button <em>optional</em></label>
                <select id="cta_text" name="cta_text" defaultValue="">
                  <option value="">Select...</option>
                  {CTA_CHOICES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {(status === "error" || status === "waiting") && (
            <p className={`intake-status ${status === "waiting" ? "form-notice" : "form-error"}`}>
              {status === "waiting"
                ? problem
                : (
                  <>
                    That didn't go through — {problem}. Email{" "}
                    <a href="mailto:austin@moresmoke.dev">austin@moresmoke.dev</a>{" "}
                    and we'll pick it up from there.
                  </>
                )}
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
