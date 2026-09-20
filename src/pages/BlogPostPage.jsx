import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Tag, MessageCircle } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { BabbrMark } from '../components/BabbrMark'
import { BLOG_POSTS } from '../lib/blogData'
import { CONTACT } from '../lib/brand'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) {
    return (
      <main className="pt-[72px]">
        <div className="mx-auto max-w-3xl px-5 py-32 text-center sm:px-8">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-8 text-foreground-muted">المقال غير موجود.</p>
          <Link
            to="/blog"
            className="clip-shear inline-flex items-center gap-2 bg-babbr px-5 py-2.5 text-sm font-semibold text-white"
          >
            <ArrowLeft className="size-4" />
            رجوع للمدونة
          </Link>
        </div>
      </main>
    )
  }

  // Related posts — same category, different post
  const related = BLOG_POSTS.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 2)

  // Simple markdown-ish parser for headings, bold, lists
  function renderBody(text) {
    const lines = text.split('\n')
    const elements = []
    let listItems = []

    function flushList() {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="mb-4 list-inside list-disc space-y-1.5 text-foreground-muted">
            {listItems.map((li, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: li.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>') }} />
            ))}
          </ul>
        )
        listItems = []
      }
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      if (!line) {
        flushList()
        continue
      }

      if (line.startsWith('### ')) {
        flushList()
        elements.push(
          <h4 key={i} className="mb-2 mt-6 text-lg font-bold tracking-tight">
            {line.slice(4)}
          </h4>
        )
      } else if (line.startsWith('## ')) {
        flushList()
        elements.push(
          <h3 key={i} className="mb-3 mt-8 text-xl font-bold tracking-tight">
            {line.slice(3)}
          </h3>
        )
      } else if (line.startsWith('- ') || line.match(/^\d+\.\s/)) {
        const content = line.replace(/^-\s|^\d+\.\s/, '')
        listItems.push(content)
      } else {
        flushList()
        elements.push(
          <p
            key={i}
            className="mb-4 leading-relaxed text-foreground-muted"
            dangerouslySetInnerHTML={{
              __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>'),
            }}
          />
        )
      }
    }
    flushList()
    return elements
  }

  return (
    <main className="pt-[72px]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-ink-line" style={{ background: post.accentBg }}>
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <Link
              to="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm transition-colors hover:opacity-80"
              style={{ color: post.accentFg }}
            >
              <ArrowLeft className="size-4" />
              رجوع للمدونة
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mb-4 flex flex-wrap items-center gap-4 text-xs" style={{ color: post.accentFg, opacity: 0.7 }}>
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
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="text-3xl font-bold leading-snug tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: post.accentFg }}
            >
              {post.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <article className="prose-babbr text-base leading-relaxed">
              {renderBody(post.body)}
            </article>
          </Reveal>

          {/* Author bar */}
          <Reveal delay={0.1}>
            <div className="mt-12 flex items-center gap-4 border-t border-ink-line pt-8">
              <BabbrMark className="h-8 w-auto" color="#FC3B00" />
              <div>
                <p className="text-sm font-bold">فريق ببر</p>
                <p className="text-xs text-foreground-muted">Babbr Creatives™</p>
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.15}>
            <div className="mt-10 clip-shear border border-ink-line bg-surface p-6 text-center sm:p-8">
              <p className="mb-3 text-lg font-bold">تحتاج مساعدة في التسويق؟</p>
              <p className="mb-5 text-sm text-foreground-muted">
                فريق ببر جاهز يساعدك — تواصل معنا اليوم.
              </p>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="clip-shear inline-flex items-center gap-2 bg-babbr px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-babbr-dark"
              >
                <MessageCircle className="size-4" />
                تواصل عبر واتساب
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Related ── */}
      {related.length > 0 && (
        <section className="border-t border-ink-line py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h3 className="mb-8 font-mono text-[10px] tracking-[0.24em] text-babbr uppercase">
              مقالات ذات صلة
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/blog/${r.slug}`}
                  className="group clip-shear flex flex-col border border-ink-line bg-surface p-5 transition-all duration-400 hover:border-babbr/40"
                >
                  <h4 className="mb-2 text-base font-bold tracking-tight transition-colors group-hover:text-babbr">
                    {r.title}
                  </h4>
                  <p className="flex-1 text-xs leading-relaxed text-foreground-muted">{r.excerpt}</p>
                  <span className="mt-3 text-xs font-semibold text-babbr">اقرأ المقال ←</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
