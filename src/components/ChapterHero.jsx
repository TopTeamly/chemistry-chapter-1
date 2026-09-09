import { Link } from 'react-router-dom'
import { BookOpen, Map } from 'lucide-react'
import chapter from '../data/chemistry/chapter-1/chapter.js'
import { useCompletedLessons } from '../hooks/useLocalProgress.js'

export default function ChapterHero() {
  const { completed } = useCompletedLessons()
  const total = chapter.lessons.length
  const done = completed.length

  return (
    <section className="relative overflow-hidden bg-gradient-to-l from-navy-950 via-navy-900 to-royal-600 text-white">
      <div className="max-w-5xl mx-auto px-4 py-14 sm:py-20 text-center relative z-10">
       <img
  src={`${import.meta.env.BASE_URL}assets/logo/atlas-logo.png`}
  alt="شعار أطلس"
  className="h-10 w-10 object-contain rounded-md bg-white/95 p-0.5"
/>
        <span className="inline-block text-xs sm:text-sm font-medium bg-white/15 rounded-full px-4 py-1.5 mb-4">
          {chapter.subject} · {chapter.grade}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          {chapter.title}: {chapter.subtitle}
        </h1>
        <p className="mt-4 text-sky-100/90 leading-8 max-w-xl mx-auto text-sm sm:text-base">
          {chapter.intro}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to={`/lesson/${chapter.lessons[0].id}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-navy-900 font-semibold px-6 py-3 rounded-full hover:bg-sky-100 transition-colors"
          >
            <BookOpen size={18} /> ابدأ الدراسة
          </Link>
          <Link
            to="/map"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 border border-white/30 font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <Map size={18} /> خريطة الباب
          </Link>
        </div>

        <div className="mt-8 max-w-sm mx-auto">
          <div className="flex justify-between text-xs text-sky-100/80 mb-1.5">
            <span>تقدمك في الباب</span>
            <span>{done} / {total} دروس</span>
          </div>
          <div className="h-2.5 rounded-full bg-white/15 overflow-hidden">
            <div
              className="h-full bg-sky-300 rounded-full transition-all duration-500"
              style={{ width: `${(done / total) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
