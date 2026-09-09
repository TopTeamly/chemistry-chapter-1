import { Link } from 'react-router-dom'
import { CheckCircle2, Circle, ChevronLeft } from 'lucide-react'
import { useCompletedLessons } from '../hooks/useLocalProgress.js'

export default function LessonCard({ lesson }) {
  const { isCompleted } = useCompletedLessons()
  const done = isCompleted(lesson.id)

  return (
    <Link
      to={`/lesson/${lesson.id}`}
      className="group flex items-center gap-4 bg-white rounded-2xl border border-sky-100 shadow-card p-4 hover:border-royal-400 hover:-translate-y-0.5 transition-all"
    >
      <span
        className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg ${
          done ? 'bg-green-100 text-green-700' : 'bg-sky-100 text-royal-600'
        }`}
      >
        {lesson.number}
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-navy-900 text-sm sm:text-base truncate">{lesson.title}</p>
        <p className="text-xs text-navy-700/60 mt-0.5 flex items-center gap-1">
          {done ? (
            <>
              <CheckCircle2 size={13} className="text-green-600" /> تمت الدراسة
            </>
          ) : (
            <>
              <Circle size={13} /> لم تُدرس بعد
            </>
          )}
        </p>
      </div>
      <ChevronLeft size={18} className="text-navy-700/40 group-hover:text-royal-500 transition-colors shrink-0" />
    </Link>
  )
}
