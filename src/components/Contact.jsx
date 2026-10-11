function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-content">
          <p className="section-label">GET IN TOUCH</p>

          <h2>Make Your Stay<br />Truly Special</h2>

          <p className="contact-description">
            Have a question about your stay, our rooms or
            experiences? We'd love to hear from you.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <div className="contact-icon">⌖</div>
              <div>
                <span>LOCATION</span>
                <p>Azure Haven Resort, Karnataka, India</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✆</div>
              <div>
                <span>PHONE</span>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉</div>
              <div>
                <span>EMAIL</span>
                <p>stay@azurehavenresort.com</p>
              </div>
            </div>

          </div>
        </div>

        <div className="contact-card">
          <p className="contact-card-label">PLAN YOUR ESCAPE</p>

          <h3>We'd Love to<br />Welcome You</h3>

          <p>
            From peaceful mornings to unforgettable evenings,
            let Azure Haven be part of your next getaway.
          </p>

          <a href="#booking" className="contact-button">
            Plan Your Stay
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact