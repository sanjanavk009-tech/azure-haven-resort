import { useState } from 'react'

function Booking() {

  const [booking, setBooking] = useState({
    checkIn: '',
    checkOut: '',
    guests: '',
    room: 'Deluxe Garden Room'
  })

  const [message, setMessage] = useState('')
  const [available, setAvailable] = useState(false)
  const [showBookingForm, setShowBookingForm] = useState(false)

  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: ''
  })

  // Handle availability form changes
  function handleChange(event) {

    const { name, value } = event.target

    setBooking({
      ...booking,
      [name]: value
    })

  }

  // Handle customer details changes
  function handleCustomerChange(event) {

    const { name, value } = event.target

    setCustomer({
      ...customer,
      [name]: value
    })

  }

  // Check room availability
  async function handleBooking(event) {

    event.preventDefault()

    setMessage('Checking availability...')
    setAvailable(false)
    setShowBookingForm(false)

    try {

      const response = await fetch(
        'http://localhost:5000/api/bookings/check',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            checkIn: booking.checkIn,
            checkOut: booking.checkOut,
            guests: Number(booking.guests),
            room: booking.room
          })
        }
      )

      const data = await response.json()

      console.log('Availability response:', data)

      setMessage(data.message)

      if (data.available) {
        setAvailable(true)
      }

    } catch (error) {

      console.error('Availability error:', error)

      setMessage(
        'Unable to check availability. Please try again.'
      )

    }

  }

  // Confirm and save booking
  async function handleConfirmBooking() {

    setMessage('Saving your booking...')

    try {

      const response = await fetch(
        'http://localhost:5000/api/bookings',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            checkIn: booking.checkIn,
            checkOut: booking.checkOut,
            guests: Number(booking.guests),
            room: booking.room,
            name: customer.name,
            email: customer.email,
            phone: customer.phone
          })
        }
      )

      const data = await response.json()

      console.log('Booking response:', data)

      if (data.success) {

        setMessage('Booking confirmed successfully!')

        setShowBookingForm(false)
        setAvailable(false)

        setCustomer({
          name: '',
          email: '',
          phone: ''
        })

      } else {

        setMessage(
          data.message || 'Unable to confirm booking.'
        )

      }

    } catch (error) {

      console.error('Booking error:', error)

      setMessage(
        'Unable to confirm booking. Please try again.'
      )

    }

  }

  return (

    <section id="booking" className="booking-section">

      {/* Heading */}

      <div className="booking-heading">

        <p className="section-label">
          PLAN YOUR STAY
        </p>

        <h2>
          Book Your Stay
        </h2>

        <p>
          Choose your dates and room to begin your getaway.
        </p>

      </div>


      {/* Availability Form */}

      <form
        className="booking-form"
        onSubmit={handleBooking}
      >

        {/* Check-in */}

        <div className="booking-field">

          <label>
            Check-in
          </label>

          <input
            type="date"
            name="checkIn"
            value={booking.checkIn}
            onChange={handleChange}
            required
          />

        </div>


        {/* Check-out */}

        <div className="booking-field">

          <label>
            Check-out
          </label>

          <input
            type="date"
            name="checkOut"
            value={booking.checkOut}
            onChange={handleChange}
            required
          />

        </div>


        {/* Guests */}

        <div className="booking-field">

          <label>
            Guests
          </label>

          <input
            type="number"
            name="guests"
            min="1"
            placeholder="Number of guests"
            value={booking.guests}
            onChange={handleChange}
            required
          />

        </div>


        {/* Room */}

        <div className="booking-field">

          <label>
            Room
          </label>

          <select
            name="room"
            value={booking.room}
            onChange={handleChange}
          >

            <option>
              Deluxe Garden Room
            </option>

            <option>
              Private Pool Villa
            </option>

            <option>
              Luxury Family Suite
            </option>

          </select>

        </div>


        {/* Check Availability Button */}

        <button type="submit">
          Check Availability
        </button>

      </form>


      {/* Availability / Booking Message */}

      {message && (

        <p className="booking-message">
          {message}
        </p>

      )}


      {/* Book This Room Button */}

      {available && !showBookingForm && (

        <button
          type="button"
          className="book-room-button"
          onClick={() => setShowBookingForm(true)}
        >
          Book This Room
        </button>

      )}


      {/* Customer Booking Form */}

      {showBookingForm && (

        <div className="customer-booking-form">

          <h3>
            Complete Your Booking
          </h3>


          {/* Name */}

          <div className="booking-field">

            <label>
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={customer.name}
              onChange={handleCustomerChange}
              required
            />

          </div>


          {/* Email */}

          <div className="booking-field">

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={customer.email}
              onChange={handleCustomerChange}
              required
            />

          </div>


          {/* Phone */}

          <div className="booking-field">

            <label>
              Phone
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={customer.phone}
              onChange={handleCustomerChange}
              required
            />

          </div>


          {/* Confirm Booking */}

          <button
            type="button"
            onClick={handleConfirmBooking}
          >
            Confirm Booking
          </button>

        </div>

      )}

    </section>

  )

}

export default Booking