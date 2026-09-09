import { useState } from 'react'
import { CheckCircle2, XCircle, Brain } from 'lucide-react'

function Question({ q, index }) {
  const [selected, setSelected] = useState(null)
  const [correct, setCorrect] = useState(false)

  function choose(i) {
    setSelected(i)
    setCorrect(i === q.answer)
  }

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5">
      <p className="text-sm font-semibold text-navy-900 mb-3">
        <span className="text-royal-600">{index + 1}.</span> {q.question}
      </p>
      <div className="space-y-2">
        {q.options.map((opt, i) => {
          const isSelected = selected === i
          const showCorrect = isSelected && correct
          const showWrong = isSelected && !correct
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              className={`w-full text-right px-4 py-2.5 rounded-xl text-sm border-2 transition-all ${
                showCorrect
                  ? 'bg-green-50 border-green-500 text-green-700'
                  : showWrong
                  ? 'bg-red-50 border-red-400 text-red-600 animate-shake'
                  : 'border-sky-200 text-navy-800 hover:border-royal-400'
              }`}
            >
              {opt}
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <div className="mt-3 animate-popIn">
          {correct ? (
            <p className="flex items-center gap-1.5 text-green-700 text-sm font-medium">
              <CheckCircle2 size={16} /> ✓ أحسنت — الإجابة الصحيحة: {q.options[q.answer]}
            </p>
          ) : (
            <p className="flex items-center gap-1.5 text-red-600 text-sm font-medium">
              <XCircle size={16} /> جرّب مرة أخرى
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default function QuizBlock({ questions = [] }) {
  if (!questions.length) return null
  return (
    <div className="space-y-4">
      <h2 className="flex items-center gap-2 text-lg font-bold text-navy-900">
        <Brain size={20} className="text-royal-600" /> اختبر فهمك
      </h2>
      {questions.map((q, i) => (
        <Question key={q.id} q={q} index={i} />
      ))}
    </div>
  )
}
