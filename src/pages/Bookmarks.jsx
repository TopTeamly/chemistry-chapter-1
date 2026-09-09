import { Link } from 'react-router-dom'
import { Star, ArrowLeft } from 'lucide-react'
import { useBookmarks } from '../hooks/useLocalProgress.js'

export default function Bookmarks() {
  const { bookmarks, toggle } = useBookmarks()

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="flex items-center gap-2 text-2xl font-bold text-navy-900 mb-1">
        <Star size={22} className="text-royal-600" /> مراجعاتي
      </h1>
      <p className="text-sm text-navy-700/60 mb-8">كل المفاهيم التي حفظتها للمراجعة السريعة.</p>

      {bookmarks.length === 0 ? (
        <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-8 text-center">
          <p className="text-navy-700/60 text-sm">لم تحفظ أي مفاهيم بعد.</p>
          <Link to="/map" className="inline-block mt-3 text-royal-600 text-sm font-medium hover:underline">
            تصفّح الدروس
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {bookmarks.map((b) => (
            <div key={b.id} className="bg-white rounded-2xl border border-sky-100 shadow-card p-4 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs text-navy-700/50 mb-0.5">{b.lessonTitle}</p>
                <p className="font-semibold text-navy-900 text-sm">{b.title}</p>
                {b.snippet && <p className="text-xs text-navy-700/60 mt-1 line-clamp-2">{b.snippet}</p>}
              </div>
              <div className="flex flex-col items-center gap-2 shrink-0">
                <Link
                  to={`/lesson/${b.lessonId}#${b.id}`}
                  className="text-royal-600 hover:text-royal-700"
                  aria-label="الانتقال إلى الدرس"
                >
                  <ArrowLeft size={18} />
                </Link>
                <button
                  onClick={() => toggle(b)}
                  aria-label="إزالة من المحفوظات"
                  className="text-navy-700/40 hover:text-red-500"
                >
                  <Star size={16} className="fill-current" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
