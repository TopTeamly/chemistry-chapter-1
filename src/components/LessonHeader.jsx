export default function LessonHeader({ number, title, intro }) {
  return (
    <div className="bg-gradient-to-l from-navy-900 to-royal-600 text-white rounded-2xl2 p-6 sm:p-8 shadow-soft">
      <span className="inline-block text-xs font-medium bg-white/15 rounded-full px-3 py-1 mb-3">
        الدرس {number}
      </span>
      <h1 className="text-2xl sm:text-3xl font-bold leading-snug">{title}</h1>
      {intro && <p className="mt-3 text-sky-100/90 leading-8 max-w-2xl">{intro}</p>}
    </div>
  )
}
