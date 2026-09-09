import { Link } from 'react-router-dom'
import chapter from '../data/chemistry/chapter-1/chapter.js'
import LessonCard from './LessonCard.jsx'
import { useCompletedLessons } from '../hooks/useLocalProgress.js'

export default function ChapterMap() {
  const { completed } = useCompletedLessons()
  const total = chapter.lessons.length
  const done = completed.length

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-navy-900">تقدمك في {chapter.title}</h2>
          <span className="text-sm font-semibold text-royal-600">{done} / {total} دروس تمت دراستها</span>
        </div>
        <div className="h-2.5 rounded-full bg-sky-100 overflow-hidden">
          <div
            className="h-full bg-royal-500 rounded-full transition-all duration-500"
            style={{ width: `${(done / total) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {chapter.lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>

      <div className="text-center pt-2">
        <Link to="/concept-map" className="text-sm text-royal-600 font-medium hover:underline">
          استكشف خريطة مفاهيم الباب ←
        </Link>
      </div>
    </div>
  )
}
