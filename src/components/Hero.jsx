import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden bg-[#050f2b] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/CbCz47o9wO0-A5ML/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050f2b]/40 via-[#050f2b]/60 to-[#050f2b] pointer-events-none" />
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight"
          >
            Verone
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
            className="mt-4 max-w-xl text-white/80"
          >
            Timepieces, leather goods and couture crafted with obsessive precision.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            className="mt-8 flex gap-4"
          >
            <a href="#collections" className="backdrop-blur-xl bg-white/10 hover:bg-white/20 transition text-white px-6 py-3 rounded-full">View Collections</a>
            <a href="#book" className="bg-white text-[#050f2b] hover:bg-slate-100 transition px-6 py-3 rounded-full">Book Appointment</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
