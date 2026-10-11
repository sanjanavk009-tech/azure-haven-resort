import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Rooms from './components/Rooms'
import Booking from './components/Booking'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Booking />
      <Amenities />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App