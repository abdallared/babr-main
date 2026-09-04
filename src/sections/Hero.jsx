import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowDown, Sparkles, MessageCircle } from 'lucide-react'
import { BabbrMarkDraw, BabbrMark } from '../components/BabbrMark'
import { MagneticButton } from '../components/Interactive'
import { Marquee } from '../components/Marquee'
import { CONTACT, COLORWAYS } from '../lib/brand'

const TICKER = [
  'الفكرة والهوية',
  'الطباعة الورقية',
  'إدارة منصات التواصل الاجتماعي',
  'الصناعات الدعائية',
  'إدارة المواقع الإلكترونية',
  'التصوير والإنتاج',
  'تنظيم الإيفنت',
  'استشارات إبداعية',
]

const BLOBS = [
  { c: '#27187E', x: '8%', y: '18%', s: 460, d: 0 },
  { c: '#2EC4B6', x: '86%', y: '26%', s: 380, d: 3 },
  { c: '#FC3B00', x: '72%', y: '76%', s: 520, d: 6 },
  { c: '#758BFD', x: '18%', y: '80%', s: 340, d: 9 },
]

// Split by WORD, never by letter: Arabic is cursive, and splitting a word into
// per-character spans breaks the glyph joining ("نصنع" renders as isolated forms).
const HEADLINE = 'نجعل الخيال'.split(' ')

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Foreground drifts down slower than the page; the ghost wordmark drifts up.
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '32%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const ghostY = useTransform(scrollYProgress, [0, 1], ['0%', '-22%'])

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden">
      {/* ── Background layers ── */}
      <div className="absolute inset-0" aria-hidden>
        {/* Warm core light */}
        <div className="absolute left-1/2 top-[38%] h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(252,59,0,0.22),transparent_62%)]" />

        {/* Drifting brand-colourway blobs */}
        {BLOBS.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen"
            style={{
              left: b.x,
              top: b.y,
              width: b.s,
              height: b.s,
              translate: '-50% -50%',
              background: `radial-gradient(circle, ${b.c}38, transparent 68%)`,
              filter: 'blur(60px)',
            }}
            animate={{ x: [0, 34, -22, 0], y: [0, -28, 20, 0], scale: [1, 1.12, 0.95, 1] }}
            transition={{ duration: 22, delay: b.d, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Technical grid, faded to an ellipse */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '76px 76px',
            maskImage: 'radial-gradient(ellipse 85% 65% at 50% 42%, #000, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 42%, #000, transparent)',
          }}
        />

        {/* Giant ghost wordmark */}
        <motion.div style={{ y: ghostY }} className="absolute inset-x-0 bottom-[4%] flex justify-center">
          <span className="text-stroke font-display select-none text-[24vw] font-black leading-none tracking-[-0.05em] opacity-40">
            BABBR
          </span>
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* ── Foreground ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-5 pb-32 pt-28 text-center sm:px-8"
      >
        <motion.a
          href={CONTACT.facebook}
          target="_blank"
          rel="noreferrer noopener"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="clip-shear group mb-10 inline-flex items-center gap-2.5 border border-ink-line bg-white/[0.035] px-4 py-2 backdrop-blur-sm transition-colors hover:border-babbr/50"
        >
          <Sparkles className="size-3.5 shrink-0 text-babbr" />
          <span className="font-display text-[10.5px] font-medium tracking-[0.2em] text-white/70 uppercase">
            Future of Advertising
          </span>
          <span className="h-3.5 w-px bg-ink-line" />
          <span className="text-[11px] text-white/45 transition-colors group-hover:text-white/75">
            ٣.٧ ألف متابع
          </span>
        </motion.a>

        <BabbrMarkDraw className="mb-9 h-24 w-auto sm:h-32 lg:h-36" delay={0.35} />

        <h1 className="text-balance font-bold leading-[1.15] tracking-tight">
          <span className="block text-[13vw] sm:text-6xl lg:text-[5.2rem]">
            {HEADLINE.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: 34, opacity: 0, filter: 'blur(12px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.95, delay: 0.85 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
                {i < HEADLINE.length - 1 ? ' ' : ''}
              </motion.span>
            ))}
          </span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 sm:mt-6 block text-[13vw] text-babbr sm:text-6xl lg:text-[5.2rem]"
          >
            على أرض الواقع<span className="text-white">.</span>
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.6 }}
          className="mt-8 max-w-2xl space-y-3.5 text-pretty text-base leading-relaxed text-white/65 sm:text-lg"
        >
          <p>
            شركة إبداعية ليبية متكاملة، نحول الأفكار من الخيال إلى الواقع في مختلف مجالات الدعاية والإبداع.
          </p>
          <p>
            من الفكرة والهوية، إلى المحتوى والإنتاج والتنفيذ، نقدم حلولًا إبداعية متكاملة تُصنع بجودة وتُنفذ باحتراف.
          </p>
          <p className="font-semibold text-white/90">
            من الخيال إلى الواقع<span className="text-babbr">.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.78 }}
          className="mt-11 flex w-full flex-col items-center gap-3.5 sm:w-auto sm:flex-row"
        >
          <MagneticButton
            as="a"
            href="#contact"
            className="clip-shear group relative w-full overflow-hidden bg-babbr px-8 py-4 text-base font-semibold text-white sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2.5">
              خلّينا نبدأ
              <BabbrMark className="h-3.5 w-auto transition-transform duration-500 group-hover:-translate-x-1" />
            </span>
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
          </MagneticButton>

          <MagneticButton
            as="a"
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className="clip-shear flex w-full items-center justify-center gap-2 border border-ink-line bg-white/[0.03] px-8 py-4 text-base font-semibold text-white/85 backdrop-blur-sm transition-colors duration-300 hover:border-white/35 hover:bg-white/[0.07] sm:w-auto"
          >
            <MessageCircle className="size-4" />
            واتساب مباشر
          </MagneticButton>
        </motion.div>

        {/* Colourway pulse — a nod to the identity system */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-14 flex items-center gap-1.5"
        >
          {COLORWAYS.slice(0, 8).map((c, i) => (
            <motion.span
              key={c.id}
              className="size-2.5 rounded-full"
              style={{ background: c.bg === '#0A0A0A' ? c.fg : c.bg }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 2.4, delay: i * 0.18, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* ── Bottom ticker ── */}
      <div className="absolute inset-x-0 bottom-0 z-20 border-y border-ink-line bg-ink/70 backdrop-blur-md">
        <Marquee speed={48} itemClassName="px-7 py-3.5" repeat={2}>
          {TICKER.map((t) => (
            <span key={t} className="flex items-center gap-7 text-sm whitespace-nowrap text-white/45">
              {t}
              <BabbrMark className="h-2.5 w-auto opacity-60" color="#FC3B00" />
            </span>
          ))}
        </Marquee>
      </div>

      <motion.a
        href="#services"
        aria-label="انزل للأسفل"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3 }}
        className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 lg:block"
      >
        <motion.span
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
          className="grid size-11 place-items-center rounded-full border border-ink-line bg-ink/60 text-white/45 backdrop-blur-sm"
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
