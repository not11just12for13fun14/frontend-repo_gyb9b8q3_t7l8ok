import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/watches', label: 'Watches' },
    { to: '/leather', label: 'Leather' },
    { to: '/couture', label: 'Couture' },
    { to: '/about', label: 'About' },
  ]
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl mt-4 px-4">
        <div className="backdrop-blur-xl bg-white/10 border border-white/15 rounded-full">
          <div className="flex items-center justify-between px-6 py-3 text-white">
            <Link to="/" className="tracking-[0.3em] font-semibold">VERONE</Link>
            <div className="flex items-center gap-6">
              {nav.map(n => (
                <NavLink key={n.to} to={n.to} className={({isActive}) => `text-sm ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`}>{n.label}</NavLink>
              ))}
              <a href="#book" className="bg-white text-[#050f2b] px-4 py-2 rounded-full text-sm">Book</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
