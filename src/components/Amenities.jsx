function Amenities() {
  const amenities = [
    {
      icon: '✦',
      title: 'Infinity Pool',
      description: 'Relax by the water with peaceful views and a refreshing atmosphere.'
    },
    {
      icon: '◈',
      title: 'Fine Dining',
      description: 'Enjoy carefully crafted dishes prepared with fresh local ingredients.'
    },
    {
      icon: '♨',
      title: 'Wellness & Spa',
      description: 'Slow down and recharge with relaxing spa and wellness experiences.'
    },
    {
      icon: '⌁',
      title: 'Nature Experiences',
      description: 'Discover beautiful surroundings, scenic walks and peaceful moments.'
    },
    {
      icon: '☼',
      title: 'Private Experiences',
      description: 'Create memorable moments with personalized resort experiences.'
    },
    {
      icon: '◇',
      title: '24/7 Guest Service',
      description: 'Our team is available throughout your stay whenever you need us.'
    }
  ]

  return (
    <section className="amenities-section" id="amenities">
      <div className="amenities-heading">
        <p className="section-label">THE AZURE EXPERIENCE</p>

        <h2>Everything You Need<br />to Unwind</h2>

        <p>
          Thoughtfully designed spaces and experiences to make
          your stay comfortable, relaxing and unforgettable.
        </p>
      </div>

      <div className="amenities-grid">
        {amenities.map((amenity) => (
          <div className="amenity-card" key={amenity.title}>
            <div className="amenity-icon">
              {amenity.icon}
            </div>

            <h3>{amenity.title}</h3>

            <p>{amenity.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Amenities