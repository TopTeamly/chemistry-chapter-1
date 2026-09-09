import { Sparkles } from 'lucide-react'

export default function KeyPointCard({ title, body }) {
  return (
    <div className="relative bg-gradient-to-l from-royal-500 to-royal-600 text-white rounded-2xl p-5 shadow-soft overflow-hidden animate-fadeIn">
      <div className="flex items-start gap-3">
        <span className="shrink-0 bg-white/15 rounded-full p-2 mt-0.5">
          <Sparkles size={18} />
        </span>
        <div>
          {title && <h3 className="font-bold mb-1">{title}</h3>}
          <p className="text-[15px] leading-8 text-white/95">{body}</p>
        </div>
      </div>
    </div>
  )
}
