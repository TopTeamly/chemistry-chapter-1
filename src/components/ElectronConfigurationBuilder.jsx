import { useState } from 'react'
import { RotateCcw } from 'lucide-react'

const ORBITALS = [
  { key: '1s', boxes: 1 },
  { key: '2s', boxes: 1 },
  { key: '2p', boxes: 3 },
  { key: '3s', boxes: 1 },
  { key: '3p', boxes: 3 },
]

function emptyState() {
  return ORBITALS.reduce((acc, o) => {
    acc[o.key] = Array(o.boxes).fill(0)
    return acc
  }, {})
}

const SUPERSCRIPTS = { 0: '', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶' }

// تمرين تفاعلي بسيط: اضغط على المربعات لترتيب الإلكترونات (بدون Backend)
export default function ElectronConfigurationBuilder() {
  const [state, setState] = useState(emptyState())

  function clickBox(orbitalKey, boxIndex) {
    setState((prev) => {
      const boxes = [...prev[orbitalKey]]
      boxes[boxIndex] = (boxes[boxIndex] + 1) % 3
      return { ...prev, [orbitalKey]: boxes }
    })
  }

  function reset() {
    setState(emptyState())
  }

  const notation = ORBITALS.map((o) => {
    const total = state[o.key].reduce((a, b) => a + b, 0)
    if (total === 0) return null
    return `${o.key}${SUPERSCRIPTS[total] || `^${total}`}`
  })
    .filter(Boolean)
    .join(' ')

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-navy-900">جرّب بنفسك</h3>
        <button
          onClick={reset}
          className="flex items-center gap-1 text-xs text-navy-700/60 hover:text-royal-600"
        >
          <RotateCcw size={13} /> إعادة تعيين
        </button>
      </div>

      <div className="space-y-4">
        {ORBITALS.map((o) => (
          <div key={o.key} className="flex items-center gap-3">
            <span dir="ltr" className="w-10 font-bold text-navy-800 text-sm shrink-0">{o.key}</span>
            <div className="flex gap-1.5 flex-wrap">
              {state[o.key].map((e, i) => (
                <button
                  key={i}
                  onClick={() => clickBox(o.key, i)}
                  className="w-11 h-11 border-2 border-navy-700 rounded-lg flex items-center justify-center bg-sky-100/40 text-royal-600 font-bold text-base active:scale-95 transition-transform"
                >
                  {e === 1 && '↑'}
                  {e === 2 && '↑↓'}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 bg-navy-900 text-white rounded-xl p-4 text-center">
        <p className="text-xs text-sky-200 mb-1">التوزيع الإلكتروني الناتج</p>
        <p dir="ltr" className="font-bold text-lg min-h-[1.75rem]">{notation || '—'}</p>
      </div>
    </div>
  )
}
