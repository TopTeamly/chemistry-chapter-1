import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import SearchBox from './SearchBox.jsx'
import chapter from '../data/chemistry/chapter-1/chapter.js'

const navLinks = [
  { to: '/', label: 'الرئيسية' },
  { to: '/map', label: 'خريطة الباب' },
  { to: '/concept-map', label: 'خريطة المفاهيم' },
  { to: '/review', label: 'خلاصة الباب' },
  { to: '/bookmarks', label: 'مراجعاتي' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-30 bg-navy-900/95 backdrop-blur text-white shadow-soft">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-3">
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setMenuOpen(false)}>
           <img
  src={`${import.meta.env.BASE_URL}assets/logo/atlas-logo.png`}
  alt="شعار أطلس"
  className="h-10 w-10 object-contain rounded-md bg-white/95 p-0.5"
/>
            <span className="flex flex-col leading-tight">
              <span className="font-bold text-base">أطلس</span>
              <span className="text-[11px] text-sky-200">{chapter.subject} · {chapter.title}</span>
            </span>
          </Link>

          <div className="hidden md:block flex-1 max-w-xs">
            <SearchBox />
          </div>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-full transition-colors ${
                  location.pathname === link.to ? 'bg-royal-500 text-white' : 'text-sky-100 hover:bg-navy-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-navy-800"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="فتح القائمة"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-navy-800 bg-navy-900 animate-slideUp">
          <div className="px-4 py-3">
            <SearchBox />
          </div>
          <nav className="flex flex-col px-4 pb-4 gap-1 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-3 rounded-xl transition-colors ${
                  location.pathname === link.to ? 'bg-royal-500 text-white' : 'text-sky-100 hover:bg-navy-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
