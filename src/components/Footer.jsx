function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Azure Haven</h2>

          <p>
            A peaceful luxury retreat designed for
            unforgettable stays and meaningful escapes.
          </p>
        </div>

        <div className="footer-links">
          <h4>EXPLORE</h4>

          <a href="#about">About</a>
          <a href="#rooms">Rooms</a>
          <a href="#amenities">Amenities</a>
          <a href="#gallery">Gallery</a>
        </div>

        <div className="footer-links">
          <h4>STAY WITH US</h4>

          <a href="#booking">Book Your Stay</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>CONTACT</h4>

          <p>+91 98765 43210</p>
          <p>stay@azurehavenresort.com</p>
          <p>Karnataka, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Azure Haven Resort. All rights reserved.</p>

        <p>Designed & developed with care.</p>
      </div>
    </footer>
  )
}

export default Footer