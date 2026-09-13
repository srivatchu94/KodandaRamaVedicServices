import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Specialty from './components/Specialty'
import Contact from './components/Contact'
import Support from './components/Support'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import Watermark from './components/icons/Watermark'

function App() {
  const [booking, setBooking] = useState({ open: false, purpose: '' })

  const openBooking = (purpose = '') => setBooking({ open: true, purpose })
  const closeBooking = () => setBooking((prev) => ({ ...prev, open: false }))

  return (
    <>
      <Watermark />
      <Header onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <Services onBook={openBooking} />
        <Specialty />
        <Contact onBook={openBooking} />
        <Support onBook={openBooking} />
      </main>
      <Footer />
      {booking.open && <BookingModal presetPurpose={booking.purpose} onClose={closeBooking} />}
    </>
  )
}

export default App
