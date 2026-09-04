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
              title="بابر — مستقبل الدعاية"
              lead="بدينا بفكرة بسيطة: الدعاية في ليبيا تستحق مستوى أعلى. علامة تجارية قوية ما هي زخرفة — هي أداة تبيع، وتبني ثقة، وتخلّي الناس تتذكرك."
            />

            <Reveal delay={0.15}>
              <div className="clip-shear-lg relative mt-9 overflow-hidden border border-ink-line bg-ink-soft p-8">
                <BabbrMark
                  className="absolute -bottom-8 h-40 w-auto opacity-[0.05]"
                  color="#FC3B00"
                  style={{ insetInlineEnd: '-2rem' }}
                />
                <p className="relative text-pretty text-lg leading-relaxed text-white/70">
                  إحنا فريق مصمّمين وصنّاع محتوى ومنفّذين، نشتغل مع أصحاب المشاريع
                  الصغيرة والشركات على حد سواء.
                  <span className="text-white"> هدفنا نخلّي علامتك تبان أقوى من حجمها.</span>
                </p>
                <div className="relative mt-7 flex items-center gap-3 border-t border-ink-line pt-6">
                  <BabbrMark className="h-6 w-auto" color="#FC3B00" />
                  <div>
                    <p dir="ltr" className="font-display text-sm font-bold">Babbr Creatives™</p>
                    <p dir="ltr" className="font-display text-[10px] tracking-[0.2em] text-white/40 uppercase">
                      Tripoli · Libya
                    </p>
                  </div>
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
