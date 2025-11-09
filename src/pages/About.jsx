import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="bg-[#050f2b] min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-6 pt-28 pb-20">
        <h1 className="text-5xl font-semibold">About Verone</h1>
        <p className="text-white/70 mt-4 max-w-2xl">Founded on the Riviera, Verone blends high horology, marquinerie and couture into a singular maison. Every creation is produced in limited numbers and presented privately by appointment.</p>
      </div>
      <Footer />
    </div>
  )
}
