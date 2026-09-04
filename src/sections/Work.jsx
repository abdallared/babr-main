import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowUpLeft } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { TiltCard } from '../components/Interactive'
import { BabbrMark } from '../components/BabbrMark'
import { CONTACT } from '../lib/brand'

/**
 * PLACEHOLDER CASE STUDIES.
 *
 * These tiles are rendered from the brand colourways rather than photography so
 * the section looks finished before real work is loaded in. To use real work,
 * drop images into /public/work and give each entry an `image` path — the tile
 * renders the image instead of the generated colourway panel.
 */
const WORK = [
  { title: 'مطعم و كافي', cat: 'هوية بصرية + مطبوعات', year: '2025', bg: '#FC3B00', fg: '#FFFFFF', span: 'lg:col-span-7' },
  { title: 'شركة مقاولات', cat: 'هوية + لوحات خارجية', year: '2025', bg: '#27187E', fg: '#E9FF70', span: 'lg:col-span-5' },
  { title: 'متجر إلكتروني', cat: 'موقع + حملة إعلانية', year: '2024', bg: '#2EC4B6', fg: '#FFCAD4', span: 'lg:col-span-5' },
  { title: 'عيادة أسنان', cat: 'سوشيال ميديا + موشن', year: '2024', bg: '#FFCAD4', fg: '#758BFD', span: 'lg:col-span-7' },
  { title: 'ماركة ملابس', cat: 'هوية + تغليف + ميرش', year: '2024', bg: '#E9FF70', fg: '#7CB518', span: 'lg:col-span-6' },
  { title: 'شركة توصيل', cat: 'ريبراندنج شامل', year: '2023', bg: '#0A0A0A', fg: '#CEBB9F', span: 'lg:col-span-6' },
]

function WorkTile({ w, i }) {
  return (
    <Reveal delay={(i % 2) * 0.1} className={w.span}>
      <TiltCard max={5} className="h-full">
        <a
          href={CONTACT.facebook}
          target="_blank"
          rel="noreferrer noopener"
          className="group clip-shear-lg relative block h-full overflow-hidden border border-ink-line"
        >
          {/* Colourway panel */}
          <div
            className="relative grid aspect-16/11 place-items-center overflow-hidden"
            style={{ background: w.bg }}
          >
            {w.image ? (
              <img
                src={w.image}
                alt={w.title}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <>
                <BabbrMark
                  className="w-[26%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-115 group-hover:rotate-[-6deg]"
                  color={w.fg}
                />
                {/* Repeating brand pattern, revealed on hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, ${w.fg}55 2px, transparent 0)`,
                    backgroundSize: '26px 26px',
                  }}
                />
              </>
            )}

            <span
              className="absolute top-5 font-mono text-[10px] tracking-[0.2em] opacity-70"
              style={{ color: w.fg, insetInlineStart: '1.25rem' }}
            >
              {w.year}
            </span>
          </div>

          {/* Caption */}
          <div className="flex items-center justify-between gap-4 bg-ink-soft p-6 transition-colors duration-500 group-hover:bg-ink">
            <div className="min-w-0">
              <h3 className="truncate text-lg font-bold tracking-tight">{w.title}</h3>
              <p className="mt-1 truncate text-sm text-white/45">{w.cat}</p>
            </div>
            <span className="grid size-10 shrink-0 place-items-center border border-ink-line text-white/30 transition-all duration-500 group-hover:border-babbr group-hover:bg-babbr group-hover:text-white">
              <ArrowUpLeft className="size-4" />
            </span>
          </div>
        </a>
      </TiltCard>
    </Reveal>
  )
}

export function Work() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bandX = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section id="work" ref={ref} className="relative overflow-hidden border-t border-ink-line py-24 sm:py-32">
      {/* Parallax ghost band */}
      <motion.div
        style={{ x: bandX }}
        className="pointer-events-none absolute inset-x-0 top-12 flex justify-center"
        aria-hidden
      >
        <span className="text-stroke-brand font-display select-none text-[17vw] font-black leading-none tracking-tighter opacity-[0.14]">
          SELECTED WORK
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="أعمالنا"
          title="شغل يتكلّم عن روحه"
          lead="مختارات من مشاريع نفّذناها لعلامات ليبية — من الهوية الكاملة إلى الحملة اللي تشتغل على الأرض."
          className="mb-14"
        />

        <div className="grid gap-4 lg:grid-cols-12">
          {WORK.map((w, i) => (
            <WorkTile key={w.title} w={w} i={i} />
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 flex justify-center">
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noreferrer noopener"
            className="clip-shear group inline-flex items-center gap-3 border border-ink-line bg-ink-soft px-7 py-4 text-sm font-semibold transition-colors duration-400 hover:border-babbr/50 hover:bg-ink"
          >
            شوف باقي الأعمال على فيسبوك
            <BabbrMark className="h-3.5 w-auto transition-transform duration-500 group-hover:-translate-x-1.5" color="#FC3B00" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
