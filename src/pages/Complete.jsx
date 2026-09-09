import { Link } from 'react-router-dom'
import { PartyPopper, Brain, ExternalLink, CheckCircle2 } from 'lucide-react'
import chapter from '../data/chemistry/chapter-1/chapter.js'
import { useCompletedLessons } from '../hooks/useLocalProgress.js'

export default function Complete() {
  const { completed } = useCompletedLessons()
  const total = chapter.lessons.length

  return (
    <div className="max-w-2xl mx-auto px-4 py-14 text-center">
      <img
  src={`${import.meta.env.BASE_URL}assets/logo/atlas-logo.png`}
  alt="شعار أطلس"
  className="h-16 w-16 object-contain mx-auto mb-6 rounded-2xl bg-white p-1.5 shadow-card"
/>
      <PartyPopper size={36} className="text-royal-500 mx-auto mb-4" />
      <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
        أحسنت، أكملت {chapter.title} 🎉
      </h1>
      <p className="text-navy-700/70 mb-10">{chapter.subtitle}</p>

      <div className="grid gap-4 text-right">
        <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-navy-900 font-semibold">
            <CheckCircle2 size={18} className="text-green-600" />
            تمت دراسة الدروس
          </div>
          <span className="text-sm font-bold text-royal-600">{completed.length} / {total}</span>
        </div>

        <Link
          to="/review"
          className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 flex items-center gap-2 font-semibold text-navy-900 hover:border-royal-400 transition-colors"
        >
          <Brain size={18} className="text-royal-600" />
          راجع فهمك
        </Link>

        <a
          href={chapter.telegramTestLink}
          target="_blank"
          rel="noreferrer"
          className="bg-navy-900 text-white rounded-2xl p-5 flex items-center gap-2 font-semibold hover:bg-navy-800 transition-colors"
        >
          <ExternalLink size={18} />
          اختبر نفسك عبر Telegram
        </a>
      </div>
    </div>
  )
}
