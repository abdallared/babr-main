import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { Search, PenTool, Layers, Rocket } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

const STEPS = [
  {
    n: '01',
    icon: Search,
    title: 'نفهم ونسمع',
    en: 'Discover',
    body: 'جلسة نفهم فيها علامتك، جمهورك، ومنافسينك. ما نبدأوش تصميم قبل نفهم الهدف.',
    out: ['بريف واضح', 'تحليل منافسين', 'تحديد الجمهور'],
  },
  {
    n: '02',
    icon: PenTool,
    title: 'نرسم الاتجاه',
    en: 'Direction',
    body: 'نجيب أكثر من اتجاه بصري ونختار معاك الاتجاه اللي يمثّلك — قبل أي تنفيذ.',
    out: ['موود بورد', 'اتجاهات بصرية', 'نظام ألوان'],
  },
  {
    n: '03',
    icon: Layers,
    title: 'نبني ونصمّم',
    en: 'Build',
    body: 'تنفيذ كامل للهوية والمواد: مطبوعات، سوشيال، موشن، ولوحات — كلها متسقة.',
    out: ['دليل هوية', 'ملفات جاهزة', 'قوالب سوشيال'],
  },
  {
    n: '04',
    icon: Rocket,
    title: 'ننزل للأرض',
    en: 'Launch',
    body: 'طباعة وتركيب وإطلاق الحملة، مع متابعة الأرقام وتعديل المسار.',
    out: ['طباعة وتركيب', 'إطلاق حملة', 'تقارير أداء'],
  },
]

export function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 60%'] })
  // Spring-smoothed so the spine doesn't jitter with scroll deltas.
  const spine = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 })
  const spineScale = useTransform(spine, [0, 1], [0, 1])

  return (
    <section id="process" className="relative border-t border-ink-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="كيف نعمل"
          title="أربع خطوات، بلا لفّ ودوران"
          lead="طريقة شغل واضحة تعرف فيها وين واصل مشروعك في كل مرحلة، وشنو اللي راح تستلمه بالضبط."
          align="center"
          className="mb-20"
        />

        <div ref={ref} className="relative">
          {/* Vertical spine — sits on the right in RTL */}
          <div
            className="absolute top-0 hidden h-full w-px bg-ink-line lg:block"
            style={{ insetInlineStart: 'calc(50% - 0.5px)' }}
            aria-hidden
          >
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-babbr via-babbr-glow to-lime"
              style={{ scaleY: spineScale }}
            />
          </div>

          <div className="flex flex-col gap-5 lg:gap-0">
            {STEPS.map((s, i) => {
              const Icon = s.icon
              const flip = i % 2 === 1
              return (
                <div
                  key={s.n}
                  className="relative grid items-center gap-5 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Card */}
                  <Reveal
                    from={flip ? 'left' : 'right'}
                    className={`lg:py-10 ${flip ? 'lg:col-start-2' : 'lg:col-start-1 lg:text-end'}`}
                  >
                    <div className="clip-shear group border border-ink-line bg-ink-soft p-7 transition-colors duration-500 hover:border-babbr/40 sm:p-8">
                      <div className={`mb-5 flex items-center gap-4 ${flip ? '' : 'lg:flex-row-reverse'}`}>
                        <span className="grid size-12 shrink-0 place-items-center border border-babbr/35 bg-babbr/10 text-babbr">
                          <Icon className="size-5" />
                        </span>
                        <div className={flip ? '' : 'lg:text-end'}>
                          <p className="font-display text-[10px] font-medium tracking-[0.24em] text-babbr uppercase">
                            {s.en}
                          </p>
                          <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{s.title}</h3>
                        </div>
                      </div>

                      <p className="text-pretty text-sm leading-relaxed text-white/50">{s.body}</p>

                      <div className={`mt-5 flex flex-wrap gap-2 ${flip ? '' : 'lg:justify-end'}`}>
                        {s.out.map((o) => (
                          <span
                            key={o}
                            className="border border-ink-line bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/45"
                          >
                            {o}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>

                  {/* Node on the spine */}
                  <div
                    className="absolute top-1/2 z-10 hidden -translate-y-1/2 lg:block"
                    style={{ insetInlineStart: 'calc(50% - 22px)' }}
                    aria-hidden
                  >
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="font-display grid size-11 place-items-center rounded-full border border-babbr/45 bg-ink text-xs font-bold text-babbr"
                    >
                      {s.n}
                    </motion.span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
