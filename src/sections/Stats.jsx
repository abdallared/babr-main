import { Counter } from '../components/Interactive'
import { Reveal } from '../components/Reveal'
import { Marquee } from '../components/Marquee'
import { BabbrMark } from '../components/BabbrMark'

/**
 * NOTE FOR BABBR: the two social figures below are the real numbers pulled from
 * the Facebook page (3.7K followers, top reel at 5.5K views). The project and
 * client counts are placeholders — swap them for your actual totals.
 */
const STATS = [
  { to: 100, suffix: '+', label: 'عميل تم خدمتهم', note: 'كبرى الشركات والجهات الرسمية', real: true },
  { to: 3.7, suffix: ' ألف', label: 'متابع على فيسبوك', note: 'مجتمع متفاعل ومتنامي', real: true },
  { to: 5.5, suffix: ' ألف', label: 'مشاهدة لأقوى ريل', note: 'محتوى إعلاني يصل ويؤثر', real: true },
  { to: 2022, suffix: '', label: 'سنة التأسيس والانطلاق', note: 'مسيرة متواصلة من التميز', real: true },
]

const WORDS = ['نفكّر', 'نصمّم', 'نحرّك', 'نطبع', 'ننفّذ', 'نكبّر']

export function Stats() {
  return (
    <section className="relative border-t border-ink-line bg-ink-soft">
      {/* Kinetic word band */}
      <div className="border-b border-ink-line py-6">
        <Marquee speed={36} reverse itemClassName="px-8" repeat={4}>
          {WORDS.map((w) => (
            <span key={w} className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-4xl font-black tracking-tight text-foreground/[0.08] sm:text-6xl">
                {w}
              </span>
              <BabbrMark className="h-5 w-auto opacity-[0.14] sm:h-7" color="#FC3B00" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-px overflow-hidden border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.09}>
              <div className="group relative h-full bg-ink p-8 transition-colors duration-500 hover:bg-ink-soft">
                <span
                  dir="ltr"
                  className={`absolute top-6 font-mono text-[9px] tracking-[0.2em] uppercase ${
                    s.real ? 'text-babbr/70' : 'text-foreground/20'
                  }`}
                  style={{ insetInlineEnd: '1.5rem' }}
                >
                  {s.real ? 'live' : 'est.'}
                </span>

                <div className="font-display mb-3 flex items-baseline gap-1.5 text-5xl font-black tracking-tight lg:text-[3.5rem]">
                  <Counter to={s.to} className="text-foreground" />
                  <span className="text-2xl text-babbr lg:text-3xl">{s.suffix.trim()}</span>
                </div>

                <p className="mb-1 text-[15px] font-semibold text-foreground/85">{s.label}</p>
                <p className="text-xs text-foreground-muted">{s.note}</p>

                <span className="absolute bottom-0 inset-x-0 h-px origin-right scale-x-0 bg-babbr transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
