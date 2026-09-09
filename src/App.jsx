import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ChapterMapPage from './pages/ChapterMapPage.jsx'
import ConceptMapPage from './pages/ConceptMapPage.jsx'
import Lesson from './pages/Lesson.jsx'
import Review from './pages/Review.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import Complete from './pages/Complete.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<ChapterMapPage />} />
          <Route path="/concept-map" element={<ConceptMapPage />} />
          <Route path="/lesson/:lessonId" element={<Lesson />} />
          <Route path="/review" element={<Review />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
