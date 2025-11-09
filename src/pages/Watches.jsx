import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Watches(){
  return (
    <div className="bg-[#050f2b] min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-6 pt-28 pb-20">
        <h1 className="text-5xl font-semibold">Watches</h1>
        <p className="text-white/70 mt-4 max-w-2xl">Precision watchmaking with sapphire, titanium and midnight steel. Appointments only.</p>
      </div>
      <Footer />
    </div>
  )
}
