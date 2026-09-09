import { Link } from 'react-router-dom'

import { Target, LayoutGrid, BookMarked as BookMarkedIcon, Share2 } from 'lucide-react'

import ChapterHero from '../components/ChapterHero.jsx'

import chapter from '../data/chemistry/chapter-1/chapter.js'

export default function Home() {

  return (

    <div>

      <ChapterHero />



      <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">

        <div className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 sm:p-6">

          <h2 className="flex items-center gap-2 font-bold text-navy-900 mb-4">

            <Target size={19} className="text-royal-600" /> أهداف الباب

          </h2>

          <ul className="grid sm:grid-cols-2 gap-2.5 text-sm text-navy-800">

            {chapter.objectives.map((obj, i) => (

              <li key={i} className="flex items-start gap-2 leading-6">

                <span className="w-1.5 h-1.5 rounded-full bg-royal-500 mt-2 shrink-0" />

                {obj}

              </li>

            ))}

          </ul>

        </div>



        <div className="grid sm:grid-cols-3 gap-4">

          <Link

            to="/map"

            className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 flex flex-col items-center text-center gap-2 hover:border-royal-400 hover:-translate-y-0.5 transition-all"

          >

            <LayoutGrid size={24} className="text-royal-600" />

            <p className="font-semibold text-navy-900">خريطة الباب</p>

            <p className="text-xs text-navy-700/60">تصفّح الدروس وتابع تقدمك</p>

          </Link>

          <Link

            to="/review"

            className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 flex flex-col items-center text-center gap-2 hover:border-royal-400 hover:-translate-y-0.5 transition-all"

          >

            <Share2 size={24} className="text-royal-600" />

            <p className="font-semibold text-navy-900">خلاصة الباب</p>

            <p className="text-xs text-navy-700/60">أهم الأفكار في نظرة سريعة</p>

          </Link>

          <Link

            to="/bookmarks"

            className="bg-white rounded-2xl border border-sky-100 shadow-card p-5 flex flex-col items-center text-center gap-2 hover:border-royal-400 hover:-translate-y-0.5 transition-all"

          >

            <BookMarkedIcon size={24} className="text-royal-600" />

            <p className="font-semibold text-navy-900">مراجعاتي</p>

            <p className="text-xs text-navy-700/60">كل ما حفظته للمراجعة</p>

          </Link>

        </div>

      </div>

    </div>

  )

} 

