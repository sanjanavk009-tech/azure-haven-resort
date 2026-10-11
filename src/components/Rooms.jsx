const rooms = [
  {
    name: 'Deluxe Garden Room',
    price: '₹8,000',
    description: 'A comfortable room with a beautiful garden view.',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Private Pool Villa',
    price: '₹12,000',
    description: 'Relax in your own private villa with a pool.',
    image:
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Luxury Family Suite',
    price: '₹15,000',
    description: 'A spacious suite designed for a comfortable family stay.',
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
  },
]

function Rooms() {
  return (
    <section id="rooms" className="rooms-section">

      <div className="rooms-heading">
        <p className="section-label">STAY WITH US</p>

        <h2>
          Rooms & Suites
        </h2>

        <p>
          Choose a comfortable space for your perfect getaway.
        </p>
      </div>

      <div className="rooms-container">

        {rooms.map((room) => (
          <div className="room-card" key={room.name}>

            <img
              src={room.image}
              alt={room.name}
              className="room-image"
            />

            <div className="room-content">

              <h3>{room.name}</h3>

              <p className="room-description">
                {room.description}
              </p>

              <div className="room-bottom">

                <p className="room-price">
                  {room.price}
                  <span> / night</span>
                </p>

                <button className="room-button">
                  View Room
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Rooms