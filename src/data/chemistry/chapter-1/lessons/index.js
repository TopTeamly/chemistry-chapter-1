// فهرس الدروس - يجمع كل ملفات الدروس في مصفوفة واحدة مرتبة
import lesson01 from './lesson-01.js'
import lesson02 from './lesson-02.js'
import lesson03 from './lesson-03.js'
import lesson04 from './lesson-04.js'
import lesson05 from './lesson-05.js'
import lesson06 from './lesson-06.js'
import lesson07 from './lesson-07.js'
import lesson08 from './lesson-08.js'
import lesson09 from './lesson-09.js'
import lesson10 from './lesson-10.js'

export const lessons = [
  lesson01, lesson02, lesson03, lesson04, lesson05,
  lesson06, lesson07, lesson08, lesson09, lesson10,
]

export function getLessonById(id) {
  return lessons.find((l) => l.id === id)
}

export default lessons
