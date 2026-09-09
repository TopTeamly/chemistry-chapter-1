// أدوات التخزين المحلي (LocalStorage) - بدون Backend
// تُستخدم لحفظ حالة "تمت الدراسة" وحالة "المحفوظات" فقط في متصفح الطالب

const KEYS = {
  completed: 'atlas_chem_ch1_completed_lessons',
  bookmarks: 'atlas_chem_ch1_bookmarks',
}

function safeGet(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* تجاهل بصمت إذا كان التخزين غير متاح */
  }
}

// ---------- تمت الدراسة ----------
export function getCompletedLessons() {
  return safeGet(KEYS.completed, [])
}

export function isLessonCompleted(lessonId) {
  return getCompletedLessons().includes(lessonId)
}

export function toggleLessonCompleted(lessonId) {
  const current = getCompletedLessons()
  const next = current.includes(lessonId)
    ? current.filter((id) => id !== lessonId)
    : [...current, lessonId]
  safeSet(KEYS.completed, next)
  emitStorageChange()
  return next
}

// ---------- المحفوظات (حفظ للمراجعة) ----------
// كل عنصر محفوظ: { id, lessonId, lessonTitle, title, snippet }
export function getBookmarks() {
  return safeGet(KEYS.bookmarks, [])
}

export function isBookmarked(id) {
  return getBookmarks().some((b) => b.id === id)
}

export function toggleBookmark(item) {
  const current = getBookmarks()
  const exists = current.some((b) => b.id === item.id)
  const next = exists ? current.filter((b) => b.id !== item.id) : [...current, item]
  safeSet(KEYS.bookmarks, next)
  emitStorageChange()
  return next
}

// إشعار لتحديث المكونات المشتركة عند تغيّر التخزين في نفس التبويب
export const STORAGE_EVENT = 'atlas-storage-change'

export function emitStorageChange() {
  window.dispatchEvent(new Event(STORAGE_EVENT))
}
