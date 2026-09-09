import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold text-navy-900 mb-3">404</h1>
      <p className="text-navy-700/60 mb-6">الصفحة التي تبحث عنها غير موجودة.</p>
      <Link to="/" className="inline-block bg-royal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-royal-600 transition-colors">
        العودة إلى الرئيسية
      </Link>
    </div>
  )
}
