export default function Footer(){
  return (
    <footer className="bg-[#050f2b] text-white/70">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="tracking-[0.3em] text-white">VERONE</div>
        <div className="text-sm">© {new Date().getFullYear()} Verone. All rights reserved.</div>
        <div className="flex gap-4 text-sm">
          <a href="#collections" className="hover:text-white">Collections</a>
          <a href="#book" className="hover:text-white">Appointments</a>
          <a href="/about" className="hover:text-white">About</a>
        </div>
      </div>
    </footer>
  )
}
