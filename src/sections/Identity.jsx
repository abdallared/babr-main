import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { BabbrMark } from '../components/BabbrMark'
import { COLORWAYS } from '../lib/brand'

/**
 * The identity system, shown rather than described: one mark, twelve official
 * colourways. Auto-cycles on a timer until the visitor picks one, at which
 * point it hands over control and stops.
 */
export function Identity() {
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!auto) return
    const id = setInterval(() => setActive((i) => (i + 1) % COLORWAYS.length), 2600)
    return () => clearInterval(id)
  }, [auto])

  const cw = COLORWAYS[active]

  function pick(i) {
    setActive(i)
    setAuto(false)
  }

  return (
    <section id="identity" className="relative overflow-hidden border-t border-ink-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="نظام الهوية"
          title="علامة واحدة. اثني عشر وجهاً."
          lead="هوية بابر مبنية على شعار واحد قوي يتلوّن حسب المناسبة والمنصة — نفس الشخصية، طاقة مختلفة كل مرة. هذي نفس الطريقة اللي نبني بها هويات عملائنا."
          align="center"
          className="mb-16"
        />

        <div className="grid items-start gap-4 lg:grid-cols-12">
          {/* ── Big preview ── */}
          <Reveal className="lg:col-span-7">
            <div
              className="clip-shear-lg relative grid aspect-4/3 place-items-center overflow-hidden transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:aspect-16/11"
              style={{ background: cw.bg }}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={cw.id}
                  initial={{ opacity: 0, scale: 0.82, rotate: -14, filter: 'blur(14px)' }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.14, rotate: 10, filter: 'blur(14px)' }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="w-[42%]"
                >
                  <BabbrMark className="w-full" color={cw.fg} />
                </motion.div>
              </AnimatePresence>

              {/* Corner metadata, in the current colourway's foreground */}
              <div
                className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 font-mono text-[10px] tracking-[0.16em] uppercase sm:p-7"
                style={{ color: cw.fg }}
              >
                <span dir="ltr" className="opacity-80">Babbr Creatives™</span>
                {/* dir=ltr on the row too, so background reads before foreground */}
                <span dir="ltr" className="flex items-center gap-3 opacity-80">
                  <span>{cw.bg}</span>
                  <span className="opacity-40">/</span>
                  <span>{cw.fg}</span>
                </span>
              </div>

              <div
                dir="ltr"
                className="absolute top-5 font-display text-[11px] font-semibold tracking-[0.24em] uppercase opacity-80 sm:top-7"
                style={{ color: cw.fg, insetInlineStart: '1.75rem' }}
              >
                {String(active + 1).padStart(2, '0')} — {cw.name}
              </div>
            </div>
          </Reveal>

          {/* ── Swatch grid ── */}
          <Reveal delay={0.12} from="left" className="lg:col-span-5">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-4 gap-2.5 sm:grid-cols-6 lg:grid-cols-4">
                {COLORWAYS.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => pick(i)}
                    aria-label={`عرض التنويعة ${c.nameAr}`}
                    aria-pressed={i === active}
                    className="group relative aspect-square overflow-hidden transition-all duration-400"
                    style={{
                      background: c.bg,
                      outline: i === active ? '2px solid #FC3B00' : '1px solid #232323',
                      outlineOffset: i === active ? '3px' : '0px',
                    }}
                  >
                    <BabbrMark
                      className="absolute left-1/2 top-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-115"
                      color={c.fg}
                    />
                  </button>
                ))}
              </div>

              <div className="clip-shear border border-ink-line bg-ink-soft p-6">
                <p dir="ltr" className="mb-1.5 text-start font-mono text-[10px] tracking-[0.22em] text-white/35 uppercase">
                  Colourway {String(active + 1).padStart(2, '0')} / 12
                </p>
                <h3 className="mb-2 text-2xl font-bold tracking-tight">
                  {cw.nameAr}
                  <span className="font-display ms-2.5 text-base font-medium text-white/35">
                    {cw.name}
                  </span>
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {auto
                    ? 'التنويعات تتبدّل تلقائياً — اضغط أي مربع تحت باش توقف وتتحكم بنفسك.'
                    : 'اختر أي تنويعة من الشبكة باش تشوف الشعار فيها.'}
                </p>

                <div className="mt-5 flex gap-2">
                  {[cw.bg, cw.fg].map((hex, k) => (
                    <div key={k} className="flex flex-1 items-center gap-2.5 border border-ink-line p-2.5">
                      <span
                        className="size-7 shrink-0 border border-white/10"
                        style={{ background: hex }}
                      />
                      <span dir="ltr" className="font-mono text-[11px] text-white/55">
                        {hex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
