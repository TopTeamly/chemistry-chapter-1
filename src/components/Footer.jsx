import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-sky-100/80 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src="/assets/logo/atlas-logo.png"
            alt="شعار أطلس"
            className="h-8 w-8 object-contain rounded bg-white/90 p-0.5"
          />
          <span className="text-sm">منصة أطلس © {new Date().getFullYear()}</span>
        </div>
        <nav className="flex items-center gap-4 text-xs">
          <Link to="/" className="hover:text-white transition-colors">الرئيسية</Link>
          <Link to="/map" className="hover:text-white transition-colors">خريطة الباب</Link>
          <Link to="/review" className="hover:text-white transition-colors">خلاصة الباب</Link>
        </nav>
      </div>
    </footer>
  )
}
