import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Tag, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { BLOG_POSTS, BLOG_CATEGORIES } from '../lib/blogData'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filtered = activeCategory
    ? BLOG_POSTS.filter((p) => p.category === activeCategory)
    : BLOG_POSTS

  return (
    <main className="pt-[72px]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-ink-line bg-ink-soft">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-babbr"
            >
              <ArrowLeft className="size-4" />
              الرئيسية
            </Link>
          </Reveal>

          <SectionHeading
            eyebrow="المدونة"
            title="أفكار ومعرفة من فريق ببر"
            lead="مقالات عن التسويق، التصميم، الطباعة، والإعلان — من خبرتنا في السوق الليبي."
          />
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Category filters */}
          <Reveal>
            <div className="mb-12 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`clip-shear px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === null
                    ? 'bg-babbr text-white'
                    : 'border border-ink-line text-foreground-muted hover:border-babbr/50 hover:text-babbr'
                }`}
              >
                الكل
              </button>
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`clip-shear px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-babbr text-white'
                      : 'border border-ink-line text-foreground-muted hover:border-babbr/50 hover:text-babbr'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Posts grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <Reveal key={post.id} delay={(i % 3) * 0.08}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-ink-line bg-surface transition-all duration-500 hover:border-babbr/40"
                >
                  {/* Accent header */}
                  <div
                    className="relative flex h-40 items-end p-5 sm:h-48"
                    style={{ background: post.accentBg }}
                  >
                    <span
                      className="font-display text-3xl font-black tracking-tight opacity-20 sm:text-4xl"
                      style={{ color: post.accentFg }}
                    >
                      {String(post.id).padStart(2, '0')}
                    </span>
                    <ArrowUpRight
                      className="absolute top-4 size-5 opacity-0 transition-all duration-300 group-hover:opacity-80"
                      style={{ color: post.accentFg, insetInlineEnd: '1rem' }}
                    />
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-center gap-3 text-xs text-foreground-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        {new Date(post.date).toLocaleDateString('ar-LY', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag className="size-3" />
                        {post.category}
                      </span>
                    </div>

                    <h3 className="mb-2 text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-babbr">
                      {post.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-foreground-muted">
                      {post.excerpt}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-babbr">
                      اقرأ المقال
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <Reveal>
              <div className="py-20 text-center">
                <p className="text-lg text-foreground-muted">ما في مقالات في هذا التصنيف حالياً.</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </main>
  )
}
