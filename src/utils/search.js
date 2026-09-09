import lessons from '../data/chemistry/chapter-1/lessons/index.js'
import { review } from '../data/chemistry/chapter-1/review.js'

// يبني فهرس بحث بسيط من عناوين الدروس والأقسام والمصطلحات (بدون Backend)
function buildIndex() {
  const index = []

  lessons.forEach((lesson) => {
    index.push({
      type: 'lesson',
      lessonId: lesson.id,
      sectionId: null,
      title: `الدرس ${lesson.number}: ${lesson.title}`,
      text: lesson.intro || '',
    })

    ;(lesson.sections || []).forEach((section) => {
      const title = section.title || section.trigger || ''
      if (!title) return
      index.push({
        type: 'section',
        lessonId: lesson.id,
        sectionId: section.id,
        title,
        text: Array.isArray(section.body) ? section.body.join(' ') : section.body || '',
        lessonTitle: lesson.title,
      })
    })
  })

  review.forEach((item) => {
    index.push({
      type: 'concept',
      lessonId: null,
      sectionId: null,
      title: item.term,
      text: item.desc,
    })
  })

  return index
}

let cachedIndex = null

export function searchContent(query) {
  if (!query || !query.trim()) return []
  if (!cachedIndex) cachedIndex = buildIndex()
  const q = query.trim().toLowerCase()
  return cachedIndex
    .filter((item) => item.title.toLowerCase().includes(q) || (item.text || '').toLowerCase().includes(q))
    .slice(0, 20)
}
