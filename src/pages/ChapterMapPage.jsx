import ChapterMap from '../components/ChapterMap.jsx'
import chapter from '../data/chemistry/chapter-1/chapter.js'

export default function ChapterMapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-navy-900 mb-1">خريطة {chapter.title}</h1>
      <p className="text-sm text-navy-700/60 mb-6">{chapter.subtitle}</p>
      <ChapterMap />
    </div>
  )
}
