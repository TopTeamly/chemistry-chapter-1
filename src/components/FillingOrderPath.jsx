import { useState } from 'react'
import { ArrowDown } from 'lucide-react'

// مسار بصري متحرك لترتيب ملء الأفلاك: 1s → 2s → 2p → ...
export default function FillingOrderPath({ title, note, order = [] }) {
  const [active, setActive] = useState(null)

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-1">{title}</h3>}
      {note && <p className="text-xs text-navy-700/60 mb-4">{note}</p>}
      <div className="flex flex-col items-center gap-1">
        {order.map((level, i) => (
          <div key={level} className="flex flex-col items-center">
            <button
              onClick={() => setActive(i)}
              dir="ltr"
              className={`min-w-[4.5rem] px-4 py-2 rounded-xl font-bold text-sm transition-all border-2 ${
                active === i
                  ? 'bg-royal-500 text-white border-royal-500 scale-105'
                  : 'bg-sky-100/50 text-navy-900 border-sky-200 hover:border-royal-400'
              }`}
            >
              {level}
            </button>
            {i < order.length - 1 && <ArrowDown size={16} className="text-sky-300 my-1" />}
          </div>
        ))}
      </div>
      {active !== null && (
        <p className="text-center text-xs text-navy-700/70 mt-4">
          الترتيب رقم <span className="font-bold text-royal-600">{active + 1}</span> من أصل {order.length} — المستوى الفرعي{' '}
          <span dir="ltr" className="font-bold">{order[active]}</span>
        </p>
      )}
    </div>
  )
}
