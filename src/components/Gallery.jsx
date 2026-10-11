function Gallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80',
      title: 'Luxury Retreat',
      category: 'THE RESORT'
    },
    {
      src: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=80',
      title: 'Private Pool',
      category: 'RELAXATION'
    },
    {
      src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
      title: 'Wellness & Spa',
      category: 'WELLNESS'
    },
    {
      src: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80',
      title: 'Fine Dining',
      category: 'CULINARY'
    },
    {
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      title: 'Elegant Interiors',
      category: 'YOUR STAY'
    },
    {
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      title: 'Into Nature',
      category: 'EXPERIENCES'
    }
  ]

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-heading">
        <p className="section-label">A GLIMPSE OF AZURE HAVEN</p>

        <h2>Moments Worth Remembering</h2>

        <p>
          Discover the spaces, experiences and little details
          that make every stay special.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((image) => (
          <div className="gallery-item" key={image.title}>
            <img
              src={image.src}
              alt={image.title}
            />

            <div className="gallery-overlay">
              <div>
                <span>{image.category}</span>
                <h3>{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery