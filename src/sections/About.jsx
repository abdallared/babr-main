import { Zap, ShieldCheck, Clock, MapPin, Repeat, Users } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { SpotlightCard } from '../components/Interactive'
import { BabbrMark } from '../components/BabbrMark'

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

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-ink-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ── Manifesto ── */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="من نحن"
              title="ببر — ريادة الدعاية والإعلان"
              lead="انطلقت شركة ببر في 5 مايو 2022 كشركة ليبية متخصصة في تقديم الخدمات التسويقية، الطباعة، الدعاية والإعلان، التصوير الثابت والمتحرك، وتطوير المواقع والمنظومات."
            />

            <Reveal delay={0.15}>
              <div className="clip-shear-lg relative mt-9 overflow-hidden border border-ink-line bg-ink-soft p-8">
                <BabbrMark
                  className="absolute -bottom-8 h-40 w-auto opacity-[0.05]"
                  color="#FC3B00"
                  style={{ insetInlineEnd: '-2rem' }}
                />
                
                {/* ── Triad: Vision, Mission, Objective ── */}
                <div className="relative space-y-4">
                  <div className="border-r-2 border-babbr pr-4">
                    <p className="font-display text-xs font-bold text-babbr tracking-wider uppercase mb-1">الرؤية</p>
                    <p className="text-sm leading-relaxed text-white/80">
                      نسعى نحو سوق تنافسية بأرقى وأجود الخدمات وبطريقة تواكب التطور التجاري والصناعي والخدمي.
                    </p>
                  </div>

                  <div className="border-r-2 border-white/20 pr-4">
                    <p className="font-display text-xs font-bold text-white/60 tracking-wider uppercase mb-1">الرسالة</p>
                    <p className="text-sm leading-relaxed text-white/70">
                      دعم العميل وتقديمه في أفضل صورة أمام جمهوره لبناء ثقة مستدامة.
                    </p>
                  </div>

                  <div className="border-r-2 border-white/20 pr-4">
                    <p className="font-display text-xs font-bold text-white/60 tracking-wider uppercase mb-1">الهدف</p>
                    <p className="text-sm leading-relaxed text-white/70">
                      طرح خدماتنا المتكاملة في الأسواق الليبية بمعايير احترافية تعزز ريادة علامات عملائنا.
                    </p>
                  </div>
                </div>

                <div className="relative mt-7 flex items-center justify-between border-t border-ink-line pt-6">
                  <div className="flex items-center gap-3">
                    <BabbrMark className="h-6 w-auto" color="#FC3B00" />
                    <div>
                      <p dir="ltr" className="font-display text-sm font-bold">Babbr Marketing & Advertising</p>
                      <p dir="ltr" className="font-display text-[10px] tracking-[0.2em] text-white/40 uppercase">
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

          {/* ── Reasons ── */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {REASONS.map((r, i) => {
                const Icon = r.icon
                return (
                  <Reveal key={r.title} delay={(i % 2) * 0.08 + Math.floor(i / 2) * 0.05}>
                    <SpotlightCard className="clip-shear h-full">
                      <div className="p-6">
                        <span className="mb-4 grid size-10 place-items-center border border-ink-line bg-white/[0.04] text-babbr transition-colors duration-500 group-hover:border-babbr/40">
                          <Icon className="size-[18px]" />
                        </span>
                        <h3 className="mb-2 text-base font-bold leading-snug tracking-tight">
                          {r.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/45">{r.body}</p>
                      </div>
                    </SpotlightCard>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
