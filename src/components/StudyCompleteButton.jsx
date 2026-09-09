import { CheckCircle2, Circle } from 'lucide-react'
import { useCompletedLessons } from '../hooks/useLocalProgress.js'

// زر "✓ تمت الدراسة" في نهاية كل درس
export default function StudyCompleteButton({ lessonId }) {
  const { isCompleted, toggle } = useCompletedLessons()
  const done = isCompleted(lessonId)

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-6 text-center animate-fadeIn">
      <p className="text-navy-800 font-medium mb-4">هل أتممت دراسة هذا الدرس؟</p>
      <button
        onClick={() => toggle(lessonId)}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
          done
            ? 'bg-green-600 text-white shadow-soft'
            : 'bg-royal-500 text-white hover:bg-royal-600 shadow-soft'
        }`}
      >
        {done ? <CheckCircle2 size={20} /> : <Circle size={20} />}
        {done ? 'تمت الدراسة' : '✓ تمت الدراسة'}
      </button>
    </div>
  )
}
