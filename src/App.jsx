import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Booking from './components/Booking'
import Footer from './components/Footer'
import IntroOverlay from './components/IntroOverlay'

export default function App(){
  const [introDone, setIntroDone] = useState(false)
  return (
    <div className="bg-[#050f2b] min-h-screen">
      <AnimatePresence>{!introDone && <IntroOverlay onFinish={()=>setIntroDone(true)} />}</AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}
