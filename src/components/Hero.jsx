function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">

        <p className="small-title">
          WELCOME TO AZURE HAVEN
        </p>

        <h1>
          Escape to<br />
          Paradise
        </h1>

        <p className="hero-description">
          A peaceful retreat surrounded by nature,
          comfort and unforgettable experiences.
        </p>

        <button
  className="explore-button"
  onClick={() => {
    document.getElementById('rooms')?.scrollIntoView({
      behavior: 'smooth'
    })
  }}
>
  Explore Rooms
</button>

      </div>
    </section>
  )
}

export default Hero