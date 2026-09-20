import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowUpLeft, ShieldCheck, Star } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { TiltCard } from '../components/Interactive'
import { BabbrMark } from '../components/BabbrMark'
import { Marquee } from '../components/Marquee'
import { CONTACT } from '../lib/brand'

// ── Client Logos (28 Enterprise Clients) ──
import eetilafLogo from '../assets/clients/eetilaf.png'
import hassanAllamLogo from '../assets/clients/hassan-allam.png'
import orascomLogo from '../assets/clients/orascom.png'
import rowadLogo from '../assets/clients/rowad.png'
import elsewedyLogo from '../assets/clients/elsewedy.png'
import twosiLogo from '../assets/clients/twosi.png'
import dhlLogo from '../assets/clients/dhl.png'
import gizLogo from '../assets/clients/giz.png'
import libyaSecurityLogo from '../assets/clients/libya-security.png'
import almotawassetLogo from '../assets/clients/almotawasset.png'
import alateedLogo from '../assets/clients/alateed.png'
import alkhalejLogo from '../assets/clients/alkhalej.png'
import oilCoLogo from '../assets/clients/oil-co.png'
import sehaLogo from '../assets/clients/seha.png'
import toyotaLogo from '../assets/clients/toyota.png'

import blabanLogo from '../assets/clients/blaban.png'
import espressolabLogo from '../assets/clients/espressolab.png'
import enzaHomeLogo from '../assets/clients/enza-home.png'
import almangoshLogo from '../assets/clients/almangosh.png'
import jadedalumaLogo from '../assets/clients/jadedaluma.png'
import hyundaiLogo from '../assets/clients/hyundai.png'
import heroGymLogo from '../assets/clients/hero-gym.png'
import tmdLogo from '../assets/clients/tmd.png'
import batterseaLogo from '../assets/clients/battersea.png'
import tamkeenLogo from '../assets/clients/tamkeen.png'
import alsalwiLogo from '../assets/clients/alsalwi.png'
import riyadaLogo from '../assets/clients/riyada.png'
import altataworLogo from '../assets/clients/altatawor.png'
import brLogo from '../assets/clients/br.png'

const CLIENTS_ROW_1 = [
  { name: 'ائتلاف الشركات المصرية', en: 'EETILAF Consortium', logo: eetilafLogo },
  { name: 'حسن علام القابضة', en: 'Hassan Allam Holding', logo: hassanAllamLogo },
  { name: 'أوراسكوم للإنشاءات', en: 'Orascom Construction', logo: orascomLogo },
  { name: 'رواد الهندسة الحديثة', en: 'Rowad Modern Engineering', logo: rowadLogo },
  { name: 'السويدي إليكتريك', en: 'Elsewedy Electric', logo: elsewedyLogo },
  { name: 'شركة 2i للحلول', en: '2i Solutions', logo: twosiLogo },
  { name: 'DHL العالمية', en: 'DHL International', logo: dhlLogo },
  { name: 'الوكالة الألمانية (GIZ)', en: 'GIZ German Cooperation', logo: gizLogo },
  { name: 'المؤتمر الوطني لأمن وتنمية المعلومات', en: 'Libya Security Conference', logo: libyaSecurityLogo },
  { name: 'مصرف المتوسط', en: 'The Middle East Bank', logo: almotawassetLogo },
  { name: 'شركة أبوظبي العتيد الدولية', en: 'Al Ateed International', logo: alateedLogo },
  { name: 'شركة الخليج للصرافة', en: 'Alkhalej Exchange', logo: alkhalejLogo },
  { name: 'الشركة الوطنية للنفط', en: 'National Oil Company', logo: oilCoLogo },
  { name: 'أبوظبي للخدمات الصحية', en: 'Abu Dhabi Health Services', logo: sehaLogo },
  { name: 'تويوتا', en: 'TOYOTA', logo: toyotaLogo },
]

const CLIENTS_ROW_2 = [
  { name: 'بـ لبن', en: 'B.Laban', logo: blabanLogo },
  { name: 'إكسبريسو لاب', en: 'Espressolab', logo: espressolabLogo },
  { name: 'إنزا هوم', en: 'Enza Home', logo: enzaHomeLogo },
  { name: 'شركة المانقوش للسيارات', en: 'Almangosh Motors', logo: almangoshLogo },
  { name: 'جديد الأمة', en: 'JadedAluma', logo: jadedalumaLogo },
  { name: 'هيونداي للشاحنات والحافلات', en: 'HYUNDAI Truck & Bus', logo: hyundaiLogo },
  { name: 'هيرو جيم', en: 'Hero Gym', logo: heroGymLogo },
  { name: 'The Meat Dealer (TMD)', en: 'TMD Foods', logo: tmdLogo },
  { name: 'باترسي للخدمات العقارية', en: 'Battersea Real Estate', logo: batterseaLogo },
  { name: 'أكاديمية تمكين الدولية (T.I.A)', en: 'Tamkeen International Academy', logo: tamkeenLogo },
  { name: 'حلويات السلوي', en: 'Al Salwi Sweets', logo: alsalwiLogo },
  { name: 'مركز الريادة والابتكار', en: 'Riyada Innovation Center', logo: riyadaLogo },
  { name: 'شركة التطور لصناعة الهناجر', en: 'Al Tatawor Structures', logo: altataworLogo },
  { name: 'مجموعة BR الدولية', en: 'BR Group', logo: brLogo },
]

const WORK = [
  { title: 'تحالفات وشركات المقاولات', cat: 'أجنحة معارض + مطبوعات + لافتات كبرى', year: '2024-2025', bg: '#FC3B00', fg: '#FFFFFF', span: 'lg:col-span-7' },
  { title: 'شركات الطاقة والإنشاءات', cat: 'هويات + تغطيات سينمائية + بيلبورد', year: '2024-2025', bg: '#27187E', fg: '#E9FF70', span: 'lg:col-span-5' },
  { title: 'سلاسل الكافيهات والأغذية', cat: 'حملات إعلانية + سوشيال + موشن', year: '2024', bg: '#2EC4B6', fg: '#FFCAD4', span: 'lg:col-span-5' },
  { title: 'المنظمات والمؤتمرات السيادية', cat: 'تنظيم فعاليات + استوديوهات + تشريفات', year: '2024', bg: '#FFCAD4', fg: '#758BFD', span: 'lg:col-span-7' },
  { title: 'وكالات الشحن والسيارات', cat: 'لوحات طرقية + واجهات كلادينج + ميرش', year: '2023-2024', bg: '#E9FF70', fg: '#7CB518', span: 'lg:col-span-6' },
  { title: 'شركات النقل والصناعات الثقيلة', cat: 'ريبراندنج + حملات ميديا باينج', year: '2023', bg: '#0A0A0A', fg: '#CEBB9F', span: 'lg:col-span-6' },
]

function WorkTile({ w, i }) {
  return (
    <Reveal delay={(i % 2) * 0.1} className={w.span}>
      <TiltCard max={5} className="h-full">
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer noopener"
          className="group clip-shear-lg relative block h-full overflow-hidden border border-ink-line"
        >
          {/* Colourway panel */}
          <div
            className="relative grid aspect-16/11 place-items-center overflow-hidden"
            style={{ background: w.bg }}
          >
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
              <p className="mt-1 truncate text-sm text-foreground-muted">{w.cat}</p>
            </div>
            <span className="grid size-10 shrink-0 place-items-center border border-ink-line text-foreground/30 transition-all duration-500 group-hover:border-babbr group-hover:bg-babbr group-hover:text-white">
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
          ENTERPRISE CLIENTS
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="عملاؤنا وسابقة الأعمال"
            title="ثقة كبرى الشركات والجهات الرسمية"
            lead="نفخر بخدمة أكثر من +100 عميل وشراكة ناجحة، شملت كبرى شركات المقاولات والطاقة والمنظمات الدولية وسلاسل العلامات التجارية الرائدة."
          />
          <div className="shrink-0 flex items-center gap-2 border border-babbr/30 bg-babbr/10 px-4 py-2 text-babbr text-xs font-mono">
            <ShieldCheck className="size-4" />
            <span>+100 عميل موثوق</span>
          </div>
        </div>

        {/* ── Enterprise Clients Marquee Tracks ── */}
        <div className="mb-16 space-y-4 overflow-hidden border-y border-ink-line bg-ink/40 py-6">
          <Marquee speed={48} repeat={2}>
            {CLIENTS_ROW_1.map((c, i) => (
              <div
                key={i}
                title={`${c.name} (${c.en})`}
                className="group clip-shear mx-2 flex h-20 w-44 sm:h-22 sm:w-52 shrink-0 items-center justify-center border border-white/20 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-babbr hover:shadow-[0_10px_25px_rgba(252,59,0,0.25)]"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-12 sm:max-h-14 w-auto max-w-[86%] object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>

          <Marquee speed={44} reverse repeat={2}>
            {CLIENTS_ROW_2.map((c, i) => (
              <div
                key={i}
                title={`${c.name} (${c.en})`}
                className="group clip-shear mx-2 flex h-20 w-44 sm:h-22 sm:w-52 shrink-0 items-center justify-center border border-white/20 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-babbr hover:shadow-[0_10px_25px_rgba(252,59,0,0.25)]"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-12 sm:max-h-14 w-auto max-w-[86%] object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* ── Selected Project Sectors ── */}
        <div className="mb-8">
          <p className="font-mono text-xs text-foreground-muted tracking-wider uppercase mb-6">
            قطاعات المشاريع المنفذة
          </p>
          <div className="grid gap-4 lg:grid-cols-12">
            {WORK.map((w, i) => (
              <WorkTile key={w.title} w={w} i={i} />
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="mt-12 flex justify-center">
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noreferrer noopener"
            className="clip-shear group inline-flex items-center gap-3 border border-ink-line bg-ink-soft px-7 py-4 text-sm font-semibold transition-colors duration-400 hover:border-babbr/50 hover:bg-ink"
          >
            تابع أحدث أعمالنا وتغطياتنا الميدانية على فيسبوك
            <BabbrMark className="h-3.5 w-auto transition-transform duration-500 group-hover:-translate-x-1.5" color="#FC3B00" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

