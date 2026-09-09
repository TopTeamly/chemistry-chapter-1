import { Star } from 'lucide-react'
import { useBookmarks } from '../hooks/useLocalProgress.js'

// زر ☆ حفظ / ★ محفوظ بجانب المفاهيم المهمة
export default function BookmarkButton({ id, lessonId, lessonTitle, title, snippet }) {
  const { isBookmarked, toggle } = useBookmarks()
  const saved = isBookmarked(id)

  return (
    <button
      onClick={() =>
        toggle({ id, lessonId, lessonTitle, title, snippet: snippet || '' })
      }
      aria-pressed={saved}
      className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors ${
        saved
          ? 'bg-royal-500 border-royal-500 text-white'
          : 'bg-white/70 border-sky-200 text-navy-800 hover:border-royal-500'
      }`}
    >
      <Star size={14} className={saved ? 'fill-white' : ''} />
      {saved ? 'محفوظ' : 'حفظ'}
    </button>
  )
}
