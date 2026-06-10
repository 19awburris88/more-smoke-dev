import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const res = await fetch("https://formsubmit.co/ajax/19awburris88@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <p className="section-label">GET IN TOUCH</p>
        <h1>Let's Build Something Great</h1>
        <p className="page-desc">
          Available for freelance development, consulting, startup projects,
          and full-time opportunities.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-item">
            <strong>Email</strong>
            <a href="mailto:19awburris88@gmail.com">19awburris88@gmail.com</a>
          </div>
          <div className="contact-item">
            <strong>LinkedIn</strong>
            <a href="https://www.linkedin.com/in/austin-burris-33995048/" target="_blank" rel="noreferrer">
              linkedin.com/in/austin-burris-33995048
            </a>
          </div>
          <div className="contact-item">
            <strong>GitHub</strong>
            <a href="https://github.com/19awburris88" target="_blank" rel="noreferrer">
              github.com/19awburris88
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} placeholder="Tell me about your project..." required />
          </div>
          {status === "success" && (
            <p className="form-success">Message sent! I'll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="form-error">Something went wrong. Try emailing me directly.</p>
          )}
          <button type="submit" className="btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>
    </div>
  );
}
