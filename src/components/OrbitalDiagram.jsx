import { useState } from 'react'
import { RotateCcw } from 'lucide-react'

function OrbitalBox({ electrons }) {
  // electrons: 0, 1 (↑), or 2 (↑↓)
  return (
    <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-navy-700 rounded-lg flex items-center justify-center gap-0.5 bg-sky-100/40 text-royal-600 text-xl font-bold">
      {electrons >= 1 && <span>↑</span>}
      {electrons >= 2 && <span>↓</span>}
    </div>
  )
}

// مبدأ باولي: فلك واحد، اضغط لإضافة إلكترونات (بحد أقصى 2 بدوران متعاكس)
function PauliDemo() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col items-center gap-4">
      <OrbitalBox electrons={count} />
      <button
        onClick={() => setCount((c) => (c + 1) % 3)}
        className="flex items-center gap-1.5 text-sm bg-royal-500 text-white px-4 py-2 rounded-full hover:bg-royal-600 transition-colors"
      >
        <RotateCcw size={14} />
        {count === 0 ? 'أضف إلكترونًا' : count === 1 ? 'أضف إلكترونًا آخر' : 'إعادة تعيين'}
      </button>
      <p className="text-xs text-navy-700/70 text-center max-w-xs leading-6">
        {count < 2
          ? 'لاحظ اتجاه السهم الأول ↑ عند إضافة الإلكترون الأول.'
          : 'عند وجود إلكترونين في الفلك نفسه، يكون لهما دوران مغزلي متعاكس ↑↓.'}
      </p>
    </div>
  )
}

// قاعدة هوند: ثلاثة أفلاك p تُملأ فرادى أولًا قبل الازدواج
function HundDemo() {
  const steps = [
    [0, 0, 0],
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 1],
    [2, 1, 1],
    [2, 2, 1],
    [2, 2, 2],
  ]
  const [step, setStep] = useState(0)
  const boxes = steps[step]

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {boxes.map((e, i) => (
          <OrbitalBox key={i} electrons={e} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="text-sm px-3 py-2 rounded-full border border-sky-200 disabled:opacity-30 hover:border-royal-500 transition-colors"
        >
          السابق
        </button>
        <button
          disabled={step === steps.length - 1}
          onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
          className="text-sm px-4 py-2 rounded-full bg-royal-500 text-white disabled:opacity-30 hover:bg-royal-600 transition-colors"
        >
          الإلكترون التالي
        </button>
      </div>
      <p className="text-xs text-navy-700/70 text-center max-w-xs leading-6">
        {step < 3
          ? 'تُشغل الأفلاك المتساوية في الطاقة فرادى أولًا بسبب التنافر بين الإلكترونات.'
          : 'بعد أن يشغل كل فلك إلكترونًا واحدًا، تبدأ الإلكترونات بالازدواج ↑↓.'}
      </p>
    </div>
  )
}

export default function OrbitalDiagram({ title, mode = 'pauli' }) {
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 animate-fadeIn">
      {title && <h3 className="font-bold text-navy-900 mb-4 text-center">{title}</h3>}
      {mode === 'hund' ? <HundDemo /> : <PauliDemo />}
    </div>
  )
}
