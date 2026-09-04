import { motion } from 'motion/react'
import {
  Palette, Share2, Film, Printer, Building2,
  Megaphone, MonitorSmartphone, Gift, ArrowUpLeft,
} from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { SpotlightCard } from '../components/Interactive'
import { Reveal } from '../components/Reveal'
import { BabbrMark } from '../components/BabbrMark'

const SERVICES = [
  {
    icon: Palette,
    title: 'الهوية البصرية',
    en: 'Brand Identity',
    body: 'لوقو، نظام ألوان، خطوط، ودليل هوية كامل يخلّي علامتك مترابطة في كل مكان تظهر فيه.',
    tags: ['لوقو', 'دليل هوية', 'ريبراندنج'],
    accent: '#FC3B00',
    featured: true,
  },
  {
    icon: Film,
    title: 'الموشن جرافيك والفيديو',
    en: 'Motion & Video',
    body: 'ريلز، إعلانات، وأنيميشن ثري دي. محتوى معمول للسوشيال من أول ثانية.',
    tags: ['ريلز', '3D', 'مونتاج'],
    accent: '#E9FF70',
    featured: true,
  },
  {
    icon: Share2,
    title: 'إدارة منصات التواصل',
    en: 'Social Media',
    body: 'خطة محتوى شهرية، تصاميم، وإدارة تفاعل الجمهور.',
    tags: ['خطة محتوى', 'كوبي رايتنج'],
    accent: '#758BFD',
  },
  {
    icon: Printer,
    title: 'الطباعة والإنتاج',
    en: 'Print & Production',
    body: 'أوفست، ديجيتال، ويو-في. من الملف للتسليم على الأرض.',
    tags: ['أوفست', 'UV', 'ستيكرز'],
    accent: '#2EC4B6',
  },
  {
    icon: Building2,
    title: 'الدعاية الخارجية',
    en: 'Outdoor & Signage',
    body: 'لوحات طرق، حروف بارزة، نيون، وواجهات محلات.',
    tags: ['بيلبورد', 'حروف بارزة', 'نيون'],
    accent: '#FFCAD4',
  },
  {
    icon: Megaphone,
    title: 'الحملات وميديا باينج',
    en: 'Campaigns',
    body: 'تخطيط حملات ممولة على فيسبوك وإنستقرام وتيك توك، بتقارير واضحة.',
    tags: ['Meta Ads', 'TikTok', 'تقارير'],
    accent: '#FC3B00',
  },
  {
    icon: MonitorSmartphone,
    title: 'مواقع وتطبيقات',
    en: 'Web & Apps',
    body: 'مواقع سريعة، متاجر إلكترونية، وواجهات تشتغل عربي وإنجليزي.',
    tags: ['موقع', 'متجر', 'UI/UX'],
    accent: '#7CB518',
  },
  {
    icon: Gift,
    title: 'الهدايا الدعائية',
    en: 'Merch & Gifts',
    body: 'تيشيرتات، أكواب، أجندات، وتغليف بهوية علامتك.',
    tags: ['مطبوعات', 'تغليف', 'ميرش'],
    accent: '#CEBB9F',
  },
]

function ServiceCard({ s, i }) {
  const Icon = s.icon
  return (
    <Reveal
      delay={(i % 3) * 0.08}
      className={s.featured ? 'md:col-span-3' : 'md:col-span-2'}
    >
      <SpotlightCard
        className="clip-shear-lg h-full"
        glow={`${s.accent}22`}
      >
        <div className="flex h-full flex-col gap-5 p-7 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <span
              className="grid size-12 shrink-0 place-items-center border transition-colors duration-500"
              style={{ borderColor: `${s.accent}40`, background: `${s.accent}14`, color: s.accent }}
            >
              <Icon className="size-5" />
            </span>

            <ArrowUpLeft className="size-5 shrink-0 text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-[-4px] group-hover:text-white/70" />
          </div>

          <div className="flex-1">
            <p
              className="font-display mb-2 text-[10px] font-medium tracking-[0.22em] uppercase"
              style={{ color: `${s.accent}cc` }}
            >
              {s.en}
            </p>
            <h3
              className={`mb-3 font-bold leading-snug tracking-tight ${
                s.featured ? 'text-2xl sm:text-[1.75rem]' : 'text-xl'
              }`}
            >
              {s.title}
            </h3>
            <p className="text-pretty text-sm leading-relaxed text-white/50">{s.body}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {s.tags.map((t) => (
              <span
                key={t}
                className="border border-ink-line bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/45"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  )
}

export function Services() {
  return (
    <section id="services" className="relative border-t border-ink-line py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 noise-panel opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 lg:flex-row">
          <SectionHeading
            eyebrow="خدماتنا"
            title="كل الي تحتاجه تحت سقف إبداعي واحد"
            lead="ماتتشتتش نفسك أكثر، تحت سقفنا الفكرة و الابداع و الطباعة و الادارة و الاستشارة و التنفيذ، هذا يعني وقت اقل و جودة أعلي."
            className="flex-1"
          />

          <Reveal from="left" className="hidden shrink-0 lg:block">
            <motion.div
              animate={{ rotate: [0, 8, -6, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            >
              <BabbrMark className="h-24 w-auto opacity-10" color="#FC3B00" />
            </motion.div>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
