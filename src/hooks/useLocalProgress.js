import { useEffect, useState, useCallback } from 'react'
import {
  getCompletedLessons,
  isLessonCompleted,
  toggleLessonCompleted,
  getBookmarks,
  isBookmarked,
  toggleBookmark,
  STORAGE_EVENT,
} from '../utils/storage.js'

// خطاف يربط مكونات React بحالة LocalStorage ويحدّثها تلقائيًا عند التغيير
export function useCompletedLessons() {
  const [completed, setCompleted] = useState(getCompletedLessons())

  useEffect(() => {
    const update = () => setCompleted(getCompletedLessons())
    window.addEventListener(STORAGE_EVENT, update)
    window.addEventListener('storage', update)
    return () => {
      window.removeEventListener(STORAGE_EVENT, update)
      window.removeEventListener('storage', update)
    }
  }, [])

  const toggle = useCallback((lessonId) => setCompleted(toggleLessonCompleted(lessonId)), [])

  return { completed, isCompleted: isLessonCompleted, toggle }
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(getBookmarks())

  useEffect(() => {
    const update = () => setBookmarks(getBookmarks())
    window.addEventListener(STORAGE_EVENT, update)
    window.addEventListener('storage', update)
    return () => {
      window.removeEventListener(STORAGE_EVENT, update)
      window.removeEventListener('storage', update)
    }
  }, [])

  const toggle = useCallback((item) => setBookmarks(toggleBookmark(item)), [])

  return { bookmarks, isBookmarked, toggle }
}
