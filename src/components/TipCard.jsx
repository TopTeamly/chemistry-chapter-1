import { Lightbulb } from 'lucide-react'

export default function TipCard({ title = 'ملاحظة', body }) {
  return (
    <div className="bg-sky-100/70 border border-sky-200 rounded-2xl p-5 animate-fadeIn">
      <div className="flex items-start gap-3">
        <span className="shrink-0 bg-white rounded-full p-2 text-royal-600 mt-0.5">
          <Lightbulb size={18} />
        </span>
        <div>
          <h3 className="font-bold text-navy-900 mb-1">{title}</h3>
          <p className="text-[15px] leading-8 text-navy-800/90">{body}</p>
        </div>
      </div>
    </div>
  )
}
