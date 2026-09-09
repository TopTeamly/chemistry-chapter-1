import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { searchContent } from '../utils/search.js'

export default function SearchBox({ variant = 'header' }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const results = searchContent(query)
  const navigate = useNavigate()
  const boxRef = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  function goTo(item) {
    setOpen(false)
    setQuery('')
    if (item.lessonId) {
      navigate(`/lesson/${item.lessonId}${item.sectionId ? `#${item.sectionId}` : ''}`)
    }
  }

  return (
    <div ref={boxRef} className={`relative ${variant === 'header' ? 'w-full max-w-xs' : 'w-full'}`}>
      <div className="flex items-center gap-2 bg-white/90 border border-sky-200 rounded-full px-3 py-2 shadow-sm focus-within:border-royal-500 transition-colors">
        <Search size={18} className="text-navy-700 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          placeholder="ابحث عن درس أو مصطلح..."
          className="bg-transparent outline-none text-sm w-full placeholder:text-navy-700/50"
        />
        {query && (
          <button onClick={() => setQuery('')} aria-label="مسح البحث" className="text-navy-700/60 hover:text-navy-900">
            <X size={16} />
          </button>
        )}
      </div>

      {open && query && (
        <div className="absolute z-40 mt-2 w-full bg-white rounded-2xl shadow-soft border border-sky-100 max-h-80 overflow-y-auto animate-slideUp">
          {results.length === 0 ? (
            <p className="p-4 text-sm text-navy-700/60 text-center">لا توجد نتائج مطابقة</p>
          ) : (
            <ul className="divide-y divide-sky-100">
              {results.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => goTo(item)}
                    className="w-full text-right px-4 py-3 hover:bg-sky-100/60 transition-colors"
                  >
                    <p className="text-sm font-medium text-navy-900">{item.title}</p>
                    {item.lessonTitle && (
                      <p className="text-xs text-navy-700/60 mt-0.5">{item.lessonTitle}</p>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
