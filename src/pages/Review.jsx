import { Link } from 'react-router-dom'
import { BookOpenCheck, ExternalLink } from 'lucide-react'
import { review } from '../data/chemistry/chapter-1/review.js'
import chapter from '../data/chemistry/chapter-1/chapter.js'

export default function Review() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="flex items-center gap-2 text-2xl font-bold text-navy-900 mb-1">
        <BookOpenCheck size={24} className="text-royal-600" /> خلاصة الباب
      </h1>
      <p className="text-sm text-navy-700/60 mb-8">أهم أفكار {chapter.title}: {chapter.subtitle}</p>

      <div className="grid sm:grid-cols-2 gap-3">
        {review.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl border border-sky-100 shadow-card p-4">
            <p className="font-bold text-royal-600 text-sm mb-1">{item.term}</p>
            <p className="text-sm text-navy-800 leading-6">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-navy-900 text-white rounded-2xl p-6 text-center space-y-3">
        <p className="font-semibold">اختبر نفسك</p>
        <p className="text-sm text-sky-100/80">الاختبار الكامل متاح عبر Telegram</p>
        <a
          href={chapter.telegramTestLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-royal-500 hover:bg-royal-600 transition-colors px-5 py-2.5 rounded-full text-sm font-semibold"
        >
          <ExternalLink size={16} /> فتح الاختبار على Telegram
        </a>
      </div>

      <div className="text-center mt-6">
        <Link to="/complete" className="text-sm text-royal-600 font-medium hover:underline">
          الانتقال إلى صفحة إنهاء الباب ←
        </Link>
      </div>
    </div>
  )
}
