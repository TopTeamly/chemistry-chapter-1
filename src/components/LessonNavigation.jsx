import { Link } from 'react-router-dom'
import { ChevronRight, ChevronLeft, LayoutGrid } from 'lucide-react'
import lessons from '../data/chemistry/chapter-1/lessons/index.js'

export default function LessonNavigation({ currentLessonId }) {
  const idx = lessons.findIndex((l) => l.id === currentLessonId)
  const prev = idx > 0 ? lessons[idx - 1] : null
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : null

  return (
    <div className="flex items-center justify-between gap-2 bg-white rounded-2xl border border-sky-100 shadow-card p-3 sm:p-4">
      {prev ? (
        <Link
          to={`/lesson/${prev.id}`}
          className="flex items-center gap-1.5 text-sm text-navy-800 hover:text-royal-600 px-2 py-2 rounded-xl transition-colors min-w-0"
        >
          <ChevronRight size={18} className="shrink-0" />
          <span className="truncate hidden sm:inline">السابق</span>
        </Link>
      ) : <span />}

      <Link
        to="/map"
        className="flex items-center gap-1.5 text-sm font-medium bg-navy-900 text-white px-4 py-2 rounded-full hover:bg-navy-800 transition-colors shrink-0"
      >
        <LayoutGrid size={16} />
        خريطة الباب
      </Link>

      {next ? (
        <Link
          to={`/lesson/${next.id}`}
          className="flex items-center gap-1.5 text-sm text-navy-800 hover:text-royal-600 px-2 py-2 rounded-xl transition-colors min-w-0"
        >
          <span className="truncate hidden sm:inline">التالي</span>
          <ChevronLeft size={18} className="shrink-0" />
        </Link>
      ) : (
        <Link
          to="/complete"
          className="flex items-center gap-1.5 text-sm text-royal-600 font-medium px-2 py-2 rounded-xl transition-colors"
        >
          <span className="hidden sm:inline">إنهاء الباب</span>
          <ChevronLeft size={18} className="shrink-0" />
        </Link>
      )}
    </div>
  )
}
