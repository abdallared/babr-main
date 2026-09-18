import { Handshake } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import sarayaLogo from '../assets/partners/saraya.png'
import medadLogo from '../assets/partners/medad.png'
import safaLogo from '../assets/partners/safa.png'
import trodatLogo from '../assets/partners/trodat.png'
import everestLogo from '../assets/partners/everest.png'
import raedLogo from '../assets/partners/raed.png'

const PARTNERS = [
  {
    name: 'شركة السرايا',
    logo: sarayaLogo,
    accent: '#FC3B00',
  },
  {
    name: 'مطبعة المِداد',
    logo: medadLogo,
    accent: '#2EC4B6',
  },
  {
    name: 'شركة الصفاء',
    logo: safaLogo,
    accent: '#E9FF70',
  },
  {
    name: 'Trodat Trotec Group',
    logo: trodatLogo,
    accent: '#FC3B00',
  },
  {
    name: 'إفرست للطباعة والتغليف',
    logo: everestLogo,
    accent: '#758BFD',
  },
  {
    name: 'مجموعة الرائد',
    logo: raedLogo,
    accent: '#CEBB9F',
  },
]

export function Partners() {
  return (
    <section id="partners" className="relative border-t border-ink-line py-20 bg-ink-soft/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="شركاء النجاح"
            title="شراكات متينة تصنع الفارق"
            lead="نتعاون مع رواد الطباعة والتجهيزات والتغليف محلياً ودولياً لنضمن لعملائنا أعلى مستويات الدقة والالتزام."
          />
          <div className="shrink-0 flex items-center gap-2 border border-ink-line bg-ink px-4 py-2 text-white/50 text-xs font-mono">
            <Handshake className="size-4 text-babbr" />
            <span>شركاء استراتيجيون معتمدون</span>
          </div>
        </div>

        {/* ── Partner Logos Grid (Enlarged & Prominent) ── */}
        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06} className="h-full">
              <div
                className="clip-shear group relative flex h-44 sm:h-48 lg:h-52 w-full items-center justify-center border border-white/20 bg-white p-5 shadow-md transition-all duration-400 hover:-translate-y-1.5 hover:border-babbr hover:shadow-[0_12px_32px_rgba(252,59,0,0.22)]"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-28 sm:max-h-32 w-auto max-w-[88%] object-contain transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
