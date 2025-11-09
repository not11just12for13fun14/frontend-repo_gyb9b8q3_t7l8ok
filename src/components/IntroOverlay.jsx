import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function IntroOverlay({ onFinish }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false)
      if (onFinish) onFinish()
    }, 3200)
    return () => clearTimeout(t)
  }, [onFinish])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-50 bg-[#050f2b] text-white flex items-center justify-center"
        >
          <div className="relative w-full max-w-3xl h-72 flex items-center justify-center select-none">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [0.6, 1.05, 1], opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="absolute inset-0 blur-3xl bg-gradient-to-r from-white/10 via-white/30 to-white/10 rounded-full pointer-events-none"
            />
            <motion.h1
              initial={{ letterSpacing: 24, opacity: 0 }}
              animate={{ letterSpacing: 4, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
              className="text-6xl tracking-widest"
            >
              VERONE
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '60%' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-8 h-[2px] bg-white/60"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute bottom-12 text-white/70"
            >
              Maison de Haute Précision
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
