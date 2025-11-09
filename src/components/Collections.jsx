import { motion } from 'framer-motion'

const items = [
  { title: 'Watches', desc: 'Chronometers in midnight steel and sapphire.', img: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Leather', desc: 'Bags, purses and wallets in French calfskin.', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Couture', desc: 'Tailored silhouettes in rare textiles.', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop' },
]

export default function Collections() {
  return (
    <section id="collections" className="relative bg-[#050f2b] text-white">
      <div className="container mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold"
        >
          Collections
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <img src={it.img} alt={it.title} className="h-72 w-full object-cover opacity-70 group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050f2b] via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-xl font-semibold">{it.title}</div>
                <div className="text-white/70 text-sm mt-1">{it.desc}</div>
                <a href={`/${it.title.toLowerCase()}`} className="inline-block mt-4 px-4 py-2 rounded-full bg-white text-[#050f2b]">Explore</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
