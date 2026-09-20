import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Nav } from './components/Nav'
import { CursorGlow, ScrollProgress } from './components/Interactive'
import { Footer } from './sections/Footer'
import { useTheme } from './lib/useTheme'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function App() {
  const { theme, toggle, isDark } = useTheme()

  return (
    <div className="grain relative">
      <ScrollToTop />
      <ScrollProgress />
      <CursorGlow isDark={isDark} />
      <Nav theme={theme} onToggleTheme={toggle} />

      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <span className="text-babbr font-mono text-sm animate-pulse">BABBR...</span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  )
}
