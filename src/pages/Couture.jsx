import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Couture(){
  return (
    <div className="bg-[#050f2b] min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-6 pt-28 pb-20">
        <h1 className="text-5xl font-semibold">Couture</h1>
        <p className="text-white/70 mt-4 max-w-2xl">Atelier tailoring with architectural lines and whisper-light textiles. By appointment with our maison.</p>
      </div>
      <Footer />
    </div>
  )
}
