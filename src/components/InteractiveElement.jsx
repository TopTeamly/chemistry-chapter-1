import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// عنصر قابل للنقر يعرض تفاصيله عند التوسيع - يُستخدم داخل الجداول والشبكات التفاعلية
export default function InteractiveElement({ symbol, name, meta = [], accent = '#2354D6', size = 'md' }) {
  const [open, setOpen] = useState(false)
  const dims = size === 'lg' ? 'w-20 h-20 text-2xl' : 'w-16 h-16 text-xl'

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{ borderColor: accent, color: open ? '#fff' : accent, background: open ? accent : '#fff' }}
        className={`${dims} rounded-2xl border-2 flex flex-col items-center justify-center font-bold shadow-card transition-all duration-200 active:scale-95 hover:-translate-y-0.5`}
      >
        <span>{symbol}</span>
      </button>
      <span className="text-[11px] text-navy-800/70 mt-1 text-center max-w-[5rem] truncate">{name}</span>
      {open && meta.length > 0 && (
        <div className="mt-2 bg-white border border-sky-100 shadow-soft rounded-xl p-3 w-40 text-xs space-y-1.5 animate-popIn z-10">
          {meta.map((m, i) => (
            <div key={i} className="flex justify-between gap-2">
              <span className="text-navy-700/60">{m.label}</span>
              <span className="font-semibold text-navy-900" dir="ltr">{m.value}</span>
            </div>
          ))}
          <button
            onClick={() => setOpen(false)}
            className="w-full flex items-center justify-center gap-1 text-navy-700/50 pt-1 text-[10px]"
          >
            <ChevronDown size={12} /> إغلاق
          </button>
        </div>
      )}
    </div>
  )
}
