import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getLessonById } from '../data/chemistry/chapter-1/lessons/index.js'
import { getQuizForLesson } from '../data/chemistry/chapter-1/quizzes/quiz.js'
import LessonHeader from '../components/LessonHeader.jsx'
import Section from '../components/Section.jsx'
import QuizBlock from '../components/QuizBlock.jsx'
import StudyCompleteButton from '../components/StudyCompleteButton.jsx'
import LessonNavigation from '../components/LessonNavigation.jsx'

export default function Lesson() {
  const { lessonId } = useParams()
  const lesson = getLessonById(lessonId)
  const quiz = getQuizForLesson(lessonId)

  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.replace('#', ''))
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150)
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [lessonId])

  if (!lesson) return <Navigate to="/map" replace />

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      <LessonHeader number={lesson.number} title={lesson.title} intro={lesson.intro} />

      <div className="space-y-6">
        {lesson.sections.map((section) => (
          <Section key={section.id} section={section} lessonId={lesson.id} lessonTitle={lesson.title} />
        ))}
      </div>

      {quiz.length > 0 && <QuizBlock questions={quiz} />}

      <StudyCompleteButton lessonId={lesson.id} />

      <LessonNavigation currentLessonId={lesson.id} />
    </div>
  )
}
