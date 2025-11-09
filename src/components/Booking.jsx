import { useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Booking() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', preferred_date: '', notes: '', product_interest: '' })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${API}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, preferred_date: new Date(form.preferred_date).toISOString() })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Error')
      setResult(data)
    } catch (err) {
      setResult({ error: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="book" className="bg-[#050f2b] text-white">
      <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12">
        <div>
          <motion.h3 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-4xl font-semibold">Book a Private Appointment</motion.h3>
          <p className="text-white/70 mt-4">Meet a Verone specialist for a tailored presentation. You will receive a confirmation code and a downloadable receipt.</p>
          <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-4">
            <input required value={form.full_name} onChange={e=>setForm({...form, full_name:e.target.value})} placeholder="Full name" className="bg-white/10 rounded-xl px-4 py-3 outline-none focus:bg-white/15" />
            <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="bg-white/10 rounded-xl px-4 py-3 outline-none focus:bg-white/15" />
            <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="Phone" className="bg-white/10 rounded-xl px-4 py-3 outline-none focus:bg-white/15" />
            <input required type="datetime-local" value={form.preferred_date} onChange={e=>setForm({...form, preferred_date:e.target.value})} className="bg-white/10 rounded-xl px-4 py-3 outline-none focus:bg-white/15" />
            <input value={form.product_interest} onChange={e=>setForm({...form, product_interest:e.target.value})} placeholder="Product interest" className="bg-white/10 rounded-xl px-4 py-3 outline-none focus:bg-white/15" />
            <textarea value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} placeholder="Notes" className="bg-white/10 rounded-xl px-4 py-3 h-28 outline-none focus:bg-white/15" />
            <button disabled={loading} className="mt-2 bg-white text-[#050f2b] rounded-full px-6 py-3 disabled:opacity-70">{loading? 'Booking…' : 'Book Appointment'}</button>
          </form>
        </div>
        <div className="lg:pl-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 h-full">
            {!result && <p className="text-white/70">Your appointment details will appear here.</p>}
            {result && !result.error && (
              <div>
                <div className="text-xl">Your code</div>
                <div className="text-4xl font-semibold tracking-widest mt-1">{result.code}</div>
                <a className="inline-block mt-6 px-5 py-3 rounded-full bg-white text-[#050f2b]" href={`${API}/api/appointments/${result.code}/receipt`} target="_blank" rel="noreferrer">Download Receipt (PDF)</a>
              </div>
            )}
            {result && result.error && <div className="text-red-300">{result.error}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}
