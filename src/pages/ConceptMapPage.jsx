import { useState } from 'react'
import { conceptMap } from '../data/chemistry/chapter-1/review.js'

export default function ConceptMapPage() {
  const [active, setActive] = useState(null)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-navy-900 mb-1">خريطة مفاهيم الباب</h1>
      <p className="text-sm text-navy-700/60 mb-8">اضغط على أي فرع لعرض المعلومة.</p>

      <div className="flex flex-col items-center gap-6">
        <div className="bg-gradient-to-l from-navy-900 to-royal-600 text-white font-bold rounded-2xl px-6 py-4 shadow-soft text-center max-w-xs">
          {conceptMap.center}
        </div>

        <div className="w-px h-6 bg-sky-300" />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl">
          {conceptMap.branches.map((b) => (
            <button
              key={b.id}
              onClick={() => setActive(b.id === active ? null : b.id)}
              className={`rounded-2xl border-2 p-4 text-center font-semibold text-sm transition-all ${
                active === b.id
                  ? 'bg-royal-500 border-royal-500 text-white scale-105'
                  : 'bg-white border-sky-200 text-navy-900 hover:border-royal-400'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>

        {active && (
          <div className="bg-white border border-sky-100 shadow-card rounded-2xl p-5 max-w-md text-center animate-popIn">
            <p className="text-navy-800 text-sm leading-7">
              {conceptMap.branches.find((b) => b.id === active)?.detail}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
