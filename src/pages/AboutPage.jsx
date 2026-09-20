import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Zap, ShieldCheck, Clock, MapPin, Repeat, Users, ArrowLeft, MessageCircle } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { SpotlightCard, Counter } from '../components/Interactive'
import { BabbrMark } from '../components/BabbrMark'
import { CONTACT } from '../lib/brand'

const REASONS = [
  {
    icon: Zap,
    title: 'سرعة بلا تنازل عن الجودة',
    body: 'فريق داخلي كامل يعني ما نستنّاوش حد. البريف يتحرّك من أول يوم.',
  },
  {
    icon: Repeat,
    title: 'من الفكرة للتنفيذ',
    body: 'نصمّم ونطبع وننصّب. ما تحتاجش تدور على مطبعة أو ورشة بروحك.',
  },
  {
    icon: MapPin,
    title: 'نعرف السوق الليبي',
    body: 'نفهم الجمهور المحلي، اللهجة، والمناسبات — والمحتوى اللي فعلاً يوصل.',
  },
  {
    icon: ShieldCheck,
    title: 'ملفات وحقوق كاملة',
    body: 'تستلم الملفات المفتوحة ودليل الهوية. شغلك ملكك بالكامل.',
  },
  {
    icon: Clock,
    title: 'مواعيد محترمة',
    body: 'جدول زمني مكتوب من البداية، وتحديث دوري على وين واصلين.',
  },
  {
    icon: Users,
    title: 'شخص واحد مسؤول',
    body: 'مدير حساب واحد يتابع مشروعك — بلا ما تعيد كلامك عشر مرات.',
  },
]

const MILESTONES = [
  { year: '2022', text: 'تأسيس الشركة في طرابلس' },
  { year: '2023', text: 'توسّع الخدمات لتشمل الطباعة الدولية والمعارض' },
  { year: '2024', text: 'خدمة أكثر من 100 عميل من كبرى الشركات والجهات' },
  { year: '2025', text: 'إطلاق خدمات البرمجة والمنظومات الإدارية' },
]

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-[72px]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-ink-line bg-ink-soft dark:bg-ink-soft">
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

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="من نحن"
                title="ببر — ريادة الدعاية والإعلان"
                lead="انطلقت شركة ببر في 5 مايو 2022 كشركة ليبية متخصصة في تقديم الخدمات التسويقية، الطباعة، الدعاية والإعلان، التصوير الثابت والمتحرك، وتطوير المواقع والمنظومات."
              />
            </div>

            <Reveal delay={0.15}>
              <div className="clip-shear-lg relative overflow-hidden border border-ink-line bg-surface p-8">
                <BabbrMark
                  className="absolute -bottom-8 h-40 w-auto opacity-[0.05]"
                  color="#FC3B00"
                  style={{ insetInlineEnd: '-2rem' }}
                />

                <div className="relative space-y-4">
                  <div className="border-r-2 border-babbr pr-4">
                    <p className="font-display text-xs font-bold text-babbr tracking-wider uppercase mb-1">الرؤية</p>
                    <p className="text-sm leading-relaxed text-foreground-muted">
                      نسعى نحو سوق تنافسية بأرقى وأجود الخدمات وبطريقة تواكب التطور التجاري والصناعي والخدمي.
                    </p>
                  </div>

                  <div className="border-r-2 border-foreground/20 pr-4">
                    <p className="font-display text-xs font-bold text-foreground/60 tracking-wider uppercase mb-1">الرسالة</p>
                    <p className="text-sm leading-relaxed text-foreground-muted">
                      دعم العميل وتقديمه في أفضل صورة أمام جمهوره لبناء ثقة مستدامة.
                    </p>
                  </div>

                  <div className="border-r-2 border-foreground/20 pr-4">
                    <p className="font-display text-xs font-bold text-foreground/60 tracking-wider uppercase mb-1">الهدف</p>
                    <p className="text-sm leading-relaxed text-foreground-muted">
                      طرح خدماتنا المتكاملة في الأسواق الليبية بمعايير احترافية تعزز ريادة علامات عملائنا.
                    </p>
                  </div>
                </div>

                <div className="relative mt-7 flex items-center justify-between border-t border-ink-line pt-6">
                  <div className="flex items-center gap-3">
                    <BabbrMark className="h-6 w-auto" color="#FC3B00" />
                    <div>
                      <p dir="ltr" className="font-display text-sm font-bold">Babbr Marketing & Advertising</p>
                      <p dir="ltr" className="font-display text-[10px] tracking-[0.2em] text-foreground-muted uppercase">
                        Est. May 2022 · Tripoli, Libya
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-babbr bg-babbr/10 border border-babbr/30 px-2.5 py-1">
                    منذ 2022
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="border-b border-ink-line py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="المسيرة"
            title="محطات من مسيرتنا"
            lead="من التأسيس حتى اليوم — رحلة مستمرة من النمو والإنجاز."
            align="center"
            className="mb-16"
          />

          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div
              className="absolute top-0 h-full w-px bg-ink-line"
              style={{ insetInlineStart: '1.25rem' }}
              aria-hidden
            />

            <div className="flex flex-col gap-8">
              {MILESTONES.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.1}>
                  <div className="relative flex gap-6" style={{ paddingInlineStart: '3.5rem' }}>
                    <span
                      className="absolute top-1 grid size-10 place-items-center rounded-full border border-babbr/40 bg-surface font-mono text-xs font-bold text-babbr"
                      style={{ insetInlineStart: '0' }}
                    >
                      {m.year.slice(-2)}
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold text-babbr mb-1">{m.year}</p>
                      <p className="text-sm text-foreground-muted">{m.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reasons ── */}
      <section className="border-b border-ink-line py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="ليش ببر"
            title="ست أسباب تخلّيك تختارنا"
            lead="ما نقولش إحنا الأفضل — نخلّي شغلنا وطريقة تعاملنا يتكلموا."
            align="center"
            className="mb-16"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r, i) => {
              const Icon = r.icon
              return (
                <Reveal key={r.title} delay={(i % 3) * 0.08 + Math.floor(i / 3) * 0.05}>
                  <SpotlightCard className="clip-shear h-full">
                    <div className="p-6">
                      <span className="mb-4 grid size-10 place-items-center border border-ink-line bg-foreground/[0.04] text-babbr transition-colors duration-500 group-hover:border-babbr/40">
                        <Icon className="size-[18px]" />
                      </span>
                      <h3 className="mb-2 text-base font-bold leading-snug tracking-tight">
                        {r.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground-muted">{r.body}</p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-b border-ink-line bg-ink-soft py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-px overflow-hidden border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              { to: 100, suffix: '+', label: 'عميل تم خدمتهم' },
              { to: 3.7, suffix: ' ألف', label: 'متابع على فيسبوك' },
              { to: 5.5, suffix: ' ألف', label: 'مشاهدة لأقوى ريل' },
              { to: 2022, suffix: '', label: 'سنة التأسيس' },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.09}>
                <div className="bg-surface p-8">
                  <div className="font-display mb-2 flex items-baseline gap-1.5 text-4xl font-black tracking-tight">
                    <Counter to={s.to} />
                    <span className="text-xl text-babbr">{s.suffix.trim()}</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground/85">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <BabbrMark className="mx-auto mb-6 h-12 w-auto" color="#FC3B00" />
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              جاهز تبدأ مشروعك معنا؟
            </h2>
            <p className="mb-8 text-foreground-muted">
              تواصل معنا اليوم ونبدأ نحوّل أفكارك لواقع.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="clip-shear inline-flex items-center gap-2.5 bg-babbr px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-babbr-dark"
              >
                <MessageCircle className="size-4" />
                تواصل عبر واتساب
              </a>
              <Link
                to="/#contact"
                className="clip-shear inline-flex items-center gap-2 border border-ink-line px-6 py-3 text-sm font-semibold text-foreground/80 transition-colors hover:border-babbr/50 hover:text-babbr"
              >
                نموذج التواصل
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
