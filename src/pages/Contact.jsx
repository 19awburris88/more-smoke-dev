export default function Contact() {
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

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={6} placeholder="Tell me about your project..." />
          </div>
          <button type="submit" className="btn-primary">Send Message →</button>
        </form>
      </div>
    </div>
  );
}
