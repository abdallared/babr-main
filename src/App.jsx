import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { CursorGlow, ScrollProgress } from './components/Interactive'
import { Footer } from './sections/Footer'
import { useTheme } from './lib/useTheme'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))

export default function App() {
  const { theme, toggle, isDark } = useTheme()

  return (
    <div className="grain relative">
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
