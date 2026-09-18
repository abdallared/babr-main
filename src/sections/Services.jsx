import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Palette, Share2, Film, Printer, Building2,
  Megaphone, MonitorSmartphone, Gift, CalendarDays,
  ArrowUpLeft, X, CheckCircle2, MessageCircle, Globe
} from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { SpotlightCard } from '../components/Interactive'
import { Reveal } from '../components/Reveal'
import { BabbrMark } from '../components/BabbrMark'

const SERVICES = [
  {
    id: 'graphic-design',
    icon: Palette,
    title: 'تصميم الجرافيك والهوية',
    en: 'Graphic Design & Branding',
    body: 'تصميم الشعارات، الهويات البصرية الكاملة، المطبوعات، والتصاميم الإعلانية المبتكرة.',
    details: 'نبتكر هويات بصرية أصيلة تروي قصة علامتك التجارية وتخلق انطباعاً لا يُنسى في ذهن جمهورك. لا نكتفي برسم الشعار، بل نصنع نظاماً بصرياً متكاملاً يشمل دراسة الألوان، الخطوط، وتطبيقات الهوية على مختلف المطبوعات والوسائط الإعلانية.',
    scope: 'تسليم الملفات المصدرية المفتوحة بكامل الحقوق ودليل الهوية',
    features: [
      'تصميم الشعارات ودليل الهوية الكامل (Brand Guidelines)',
      'تصميم كافة المطبوعات التجارية والأوراق الرسمية',
      'تصاميم إعلانية لمنصات التواصل الاجتماعي والمواقع',
      'تصميم البنرات والملصقات وتغليف المنتجات',
      'إعادة بناء وتطوير الهويات القائمة (Rebranding)',
    ],
    tags: ['لوقو', 'دليل هوية', 'ريبراندنج', 'مطبوعات'],
    accent: '#FC3B00',
    featured: true,
  },
  {
    id: 'printed-design',
    icon: Printer,
    title: 'خدمات الطباعة الفاخرة',
    en: 'Printed Design & Production',
    body: 'تنفيذ المطبوعات بأجود الخامات محلياً ودولياً، مع توفير الطباعة من داخل ليبيا، تركيا، مصر، والصين.',
    details: 'نوفر حلول طباعة وإنتاج متقدمة تلبي أعلى المواصفات الدولية. بفضل شبكة شركائنا ومصانعنا، نؤمن خدمات الطباعة الفاخرة بأحدث تقنيات الأوفست والديجيتال والـ UV مع إمكانية التوريد والشحن المباشر من ليبيا، تركيا، مصر، والصين.',
    scope: 'توريد وإنتاج مباشر من: ليبيا · تركيا · مصر · الصين',
    features: [
      'طباعة أوفست وديجيتال وتقنيات UV الفاخرة',
      'طباعة البروشورات والكتالوجات والفولدرات الرسمية',
      'علب التغليف المخصصة، أكياس الهدايا، والكرتون الفاخر',
      'خيارات خامات وأوراق متعددة ومقاومة للماء والتمزق',
      'فحص جودة دقيق قبل الشحن والتسليم المباشر',
    ],
    tags: ['أوفست', 'UV فاخر', 'تغليف', 'توريد دولي'],
    accent: '#2EC4B6',
    featured: true,
  },
  {
    id: 'billboards',
    icon: Building2,
    title: 'اللافتات الطرقية والخارجية',
    en: 'Outdoor & Billboard Design',
    body: 'تصميم وتنفيذ وطباعة وتركيب اللافتات، وحجز أفضل مواقع البيلبورد في طرابلس ومختلف المدن الليبية.',
    details: 'نمنح علامتك حضوراً مهيباً في الشوارع والمحاور الحيوية. نتكفل بكافة مراحل الدعاية الخارجية: بدءاً من حجز المساحات الاستراتيجية الأكثر كثافة في طرابلس ومختلف المدن الليبية، مروراً بالتصميم والطباعة وحتى التركيب والصيانة الدورية.',
    scope: 'تغطية واسعة تشمل حجز المواقع في طرابلس ومدن ليبيا',
    features: [
      'حجز أفضل مواقع البيلبورد في طرابلس وكافة المدن الليبية',
      'طباعة الفليكس والبنر واليونيبول بمقاسات عملاقة',
      'تصنيع الحروف البارزة المضيئة وشاشات LED والنيون',
      'واجهات المحلات والشركات (كلادينج وحروف استيل)',
      'فريق تركيب متخصص وصيانة دورية لضمان الأمان والإنارة',
    ],
    tags: ['بيلبورد', 'حجز مواقع', 'حروف بارزة', 'واجهات'],
    accent: '#FFCAD4',
  },
  {
    id: 'social-media',
    icon: Share2,
    title: 'إدارة صفحات التواصل',
    en: 'Social Media Management',
    body: 'إنشاء وإدارة الحسابات بفريق متخصص: خطط نشر شهرية، كتابة محتوى، تصميم، والرد على الرسائل.',
    details: 'نحوّل منصاتك الرقمية إلى أدوات جذب ومبيعات فعّالة. يتولى فريقنا المتخصص إعداد استراتيجيات النشر، كتابة السيناريوهات والمحتوى التسويقي بلهجة تناسب جمهورك المستهدف، مع تصميم بوستات مبتكرة وإدارة كاملة لخدمة العملاء والردود.',
    scope: 'إدارة شاملة لكافة المنصات: فيسبوك، إنستقرام، تيك توك، ولينكد إن',
    features: [
      'إعداد خطط نشر شهرية متكاملة وجداول زمنية منتظمة',
      'كتابة نصوص إعلانية وكوبي رايتنج احترافي باللهجة المناسبة',
      'تصميمات وبوستات حصرية متناسقة مع الهوية البصرية',
      'خدمة عملاء نشطة والرد التفاعلي على التعليقات والرسائل',
      'تقارير أداء شهرية وتحليلات لزيادة التفاعل والمبيعات',
    ],
    tags: ['خطة محتوى', 'كوبي رايتنج', 'إدارة تفاعل', 'تقارير'],
    accent: '#758BFD',
  },
  {
    id: 'video-photo',
    icon: Film,
    title: 'التصوير والمونتاج الإعلاني',
    en: 'Video Production & Photography',
    body: 'تصوير ثابت ومتحرك، ومونتاج فيديوهات وبروموهات وإعلانات سينمائية تخطف الأنظار.',
    details: 'المحتوى المرئي عالي الجودة هو الأسرع وصولاً لقلب العميل. نوفر أحدث معدات التصوير السينمائي وطواقم محترفة لتصوير المنتجات، المقرات، والمناسبات، مع مونتاج احترافي يشمل تصحيح الألوان، المؤثرات الصوتية، والموشن جرافيك.',
    scope: 'تصوير فوتوغرافي وسينمائي + مونتاج احترافي وموشن جرافيك',
    features: [
      'تصوير منتجات احترافي بجلسات ستوديو وميدانية',
      'تصوير جوي وتغطيات سينمائية للمقرات والمشاريع',
      'مونتاج فيديوهات ريلز وتيك توك سريعة الانتشار',
      'إنتاج بروموهات وإعلانات وثائقية وتجارية',
      'موشن جرافيك وأنيميشن ثنائي وثلاثي الأبعاد (2D/3D)',
    ],
    tags: ['تصوير سينمائي', 'ريلز', 'مونتاج', '3D'],
    accent: '#E9FF70',
    featured: true,
  },
  {
    id: 'events-booths',
    icon: CalendarDays,
    title: 'إدارة الأجنحة وتنظيم المناسبات',
    en: 'Events & Exhibitions Planning',
    body: 'تصميم وتنفيذ أجنحة المعارض (Booths)، توفير طواقم الاستقبال، وتنظيم الفعاليات وزيارات الوفود.',
    details: 'نحوّل مشاركتك في المعارض والمؤتمرات إلى نقطة جذب استثنائية. نتكفل بالتصميم الهندسي للجناح وتنفيذه بأحدث الخامات وأنظمة الإضاءة والشاشات، مع توفير طواقم استقبال وضيافة مدربة، وتنظيم كامل لحفلات الافتتاح والزيارات الرسمية.',
    scope: 'تصميم وتنفيذ الأجنحة وتوفير الطواقم والتنظيم الميداني',
    features: [
      'تصميم وتنفيذ ديكورات أجنحة المعارض (Custom Booths)',
      'توفير وتدريب طواقم الاستقبال والضيافة والتشريفات',
      'تنظيم المؤتمرات وحفلات التدشين والافتتاح الرسمي',
      'تجهيز الشاشات التفاعلية وأنظمة الصوت والإضاءة',
      'تغطية إعلامية وتوثيق مرئي شامل للفعالية',
    ],
    tags: ['أجنحة معارض', 'Booths', 'تنظيم فعاليات', 'استقبال'],
    accent: '#FC3B00',
  },
  {
    id: 'giveaways',
    icon: Gift,
    title: 'الهدايا الترويجية والدعائية',
    en: 'Giveaways & Custom Merch',
    body: 'توفير هدايا دعائية نوعية وتذكارات مخصصة تعكس هوية العميل، كالشواحن المتنقلة والإكسسوارات الفاخرة.',
    details: 'الهدايا الدعائية هي سفير علامتك الدائم في أيدي عملائك وشركائك. نقدم تشكيلات واسعة ومبتكرة بدءاً من شواحن الباور بانك والإلكترونيات الذكية، وحتى الأجندات والملابس الفاخرة والمحفورات الليزرية بعلب أنيقة تحمل شعارك.',
    scope: 'خيارات متعددة بخامات راقية وتغليف مخصص بالهوية',
    features: [
      'شواحن متنقلة (Power Banks) وإلكترونيات ذكية مخصصة',
      'أطقم هدايا VIP فاخرة للمدراء وكبار الشخصيات',
      'أجندات جلدية، دفاتر، وأقلام محفورة بالليزر بدقة',
      'تيشيرتات، قبعات، ويونيفورم موحد بجودة عالية',
      'علب وتغليف مخصص يحمل شعار وألوان هويتك',
    ],
    tags: ['باور بانك', 'VIP Gifts', 'يونيفورم', 'حفر ليزر'],
    accent: '#CEBB9F',
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'خدمات التسويق الشاملة',
    en: 'Comprehensive Marketing',
    body: 'إعداد الخطط التسويقية، دراسة السوق المحلية، تسويق المنتجات، التسويق الشخصي، والتسويق بالعمولة.',
    details: 'نبني استراتيجيات تسويقية مبنية على فهم عميق للسوق الليبي وسلوك المستهلك. نساعدك في دراسة المنافسين، إطلاق المنتجات بنجاح، بناء العلامة الشخصية للمدراء، وإدارة الحملات الإعلانية الممولة لتحقيق أعلى عائد على الاستثمار.',
    scope: 'دراسات سوقية وخطط تنفيذية موجهة للجمهور الليبي',
    features: [
      'دراسة السوق المحلي وتحليل المنافسين وسلوك الشراء',
      'بناء وتطوير الخطط التسويقية السنوية والموسمية',
      'التسويق الشخصي وصناعة الهوية للمؤسسين والمدراء',
      'إدارة الحملات الممولة على (Meta Ads, TikTok, Google)',
      'استراتيجيات التسويق بالعمولة والشراكات الترويجية',
    ],
    tags: ['دراسة سوق', 'Personal Brand', 'حملات ممولة', 'استشارات'],
    accent: '#7CB518',
  },
  {
    id: 'web-apps-systems',
    icon: MonitorSmartphone,
    title: 'المواقع والتطبيقات والمنظومات',
    en: 'Web, Apps & Systems',
    body: 'تصميم وبرمجة المواقع الإلكترونية، المتاجر، تطبيقات الموبايل، والمنظومات الإدارية المخصصة.',
    details: 'نطور حلولاً برمجية متطورة تخدم أعمالك وترتقي بتجربة عملائك. من المواقع التعريفية والمتاجر الإلكترونية السريعة، إلى تطبيقات الموبايل والمنظومات الإدارية وقواعد البيانات المصممة خصيصاً لإدارة عملياتك بكفاءة وأمان.',
    scope: 'حلول برمجية متكاملة تدعم العربية والإنجليزية وأحدث المعايير',
    features: [
      'تصميم وبرمجة مواقع الشركات التعاريفية والمتاجر الإلكترونية',
      'تطوير تطبيقات الموبايل لأنظمة iOS و Android',
      'برمجة المنظومات الإدارية المخصصة وإدارة المخازن ونقاط البيع',
      'لوحات تحكم ذكية وسهلة الاستخدام تدعم اللغتين',
      'استضافة فائقة السرعة، حماية مشددة، ودعم فني مستمر',
    ],
    tags: ['مواقع', 'تطبيقات', 'منظومات إدارية', 'UI/UX'],
    accent: '#2EC4B6',
  },
]

function ServiceCard({ s, i, onSelect }) {
  const Icon = s.icon
  const num = String(i + 1).padStart(2, '0')

  return (
    <Reveal delay={(i % 3) * 0.06} className="h-full">
      <div 
        onClick={() => onSelect(s)} 
        className="h-full cursor-pointer group focus:outline-none"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onSelect(s)
          }
        }}
      >
        <SpotlightCard
          className="clip-shear-lg h-full transition-all duration-300 group-hover:-translate-y-1.5"
          glow={`${s.accent}24`}
        >
          <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
            {/* Top section */}
            <div>
              {/* Header row: Icon & Number on right, Action pill on left */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <span
                    className="grid size-11 shrink-0 place-items-center border transition-all duration-500 group-hover:scale-105"
                    style={{ borderColor: `${s.accent}40`, background: `${s.accent}14`, color: s.accent }}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs font-bold tracking-wider text-white/30">
                    {num}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 border border-ink-line bg-white/[0.02] px-2.5 py-1 text-[11px] font-mono text-white/40 transition-all duration-300 group-hover:border-babbr/40 group-hover:text-babbr group-hover:bg-babbr/10">
                  <span>تفاصيل</span>
                  <ArrowUpLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-[-2px]" />
                </div>
              </div>

              {/* English Category Tag */}
              <p
                className="font-mono text-[10px] font-medium tracking-[0.2em] uppercase mb-1.5"
                style={{ color: `${s.accent}dd` }}
              >
                {s.en}
              </p>

              {/* Title */}
              <h3 className="mb-2.5 text-lg sm:text-xl font-bold leading-snug tracking-tight text-white transition-colors">
                {s.title}
              </h3>

              {/* Description with consistent height */}
              <p className="text-sm leading-relaxed text-white/50 text-pretty min-h-[4rem]">
                {s.body}
              </p>
            </div>

            {/* Bottom section: Tags & bottom line */}
            <div className="mt-5 pt-4 border-t border-white/[0.05]">
              <div className="flex flex-wrap gap-1.5">
                {s.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="border border-ink-line bg-white/[0.02] px-2 py-0.5 text-[10px] text-white/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom accent hover strip */}
            <span 
              className="absolute bottom-0 inset-x-0 h-0.5 origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" 
              style={{ background: s.accent }}
            />
          </div>
        </SpotlightCard>
      </div>
    </Reveal>
  )
}

function ServiceModal({ service, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  if (!service) return null

  const Icon = service.icon
  const whatsappUrl = `https://wa.me/218943192992?text=${encodeURIComponent(
    `السلام عليكم، أود الاستفسار والطلب بخصوص خدمة: ${service.title}`
  )}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-ink-line bg-ink-soft p-6 sm:p-8 shadow-2xl clip-shear-lg"
        style={{
          boxShadow: `0 0 50px -10px ${service.accent}25`,
        }}
      >
        {/* Top glow */}
        <div 
          className="pointer-events-none absolute -top-24 -right-24 size-48 rounded-full blur-3xl opacity-30"
          style={{ background: service.accent }}
        />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-ink-line pb-6">
          <div className="flex items-center gap-4">
            <span
              className="grid size-14 shrink-0 place-items-center border"
              style={{
                borderColor: `${service.accent}50`,
                background: `${service.accent}18`,
                color: service.accent,
              }}
            >
              <Icon className="size-7" />
            </span>
            <div>
              <p
                className="font-display text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: service.accent }}
              >
                {service.en}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1 text-white">
                {service.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="إغلاق"
            className="grid size-10 place-items-center border border-ink-line bg-ink text-white/50 transition-colors hover:border-babbr hover:text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6">
          {/* Detailed explanation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-2">عن الخدمة</h4>
            <p className="text-base leading-relaxed text-white/80">
              {service.details}
            </p>
          </div>

          {/* Scope / Location highlight */}
          {service.scope && (
            <div className="flex items-center gap-3 border border-ink-line bg-white/[0.02] p-4">
              <Globe className="size-5 shrink-0 text-babbr" />
              <div className="text-xs sm:text-sm text-white/75">
                <span className="font-bold text-white ml-1">نطاق الخدمة والتنفيذ:</span>
                {service.scope}
              </div>
            </div>
          )}

          {/* Key Deliverables & Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-babbr mb-3">ما نقدمه في هذه الخدمة:</h4>
            <div className="grid gap-2.5 sm:grid-cols-1">
              {service.features.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 border border-white/[0.04] bg-ink/60 p-3"
                >
                  <CheckCircle2 
                    className="size-4 shrink-0 mt-0.5" 
                    style={{ color: service.accent }} 
                  />
                  <span className="text-sm text-white/80">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {service.tags.map((t) => (
              <span
                key={t}
                className="border border-ink-line bg-white/[0.03] px-3 py-1 text-xs text-white/60"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="border-t border-ink-line pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-babbr hover:bg-babbr/90 text-white font-bold text-sm px-6 py-3.5 transition-colors duration-300"
          >
            <MessageCircle className="size-4" />
            <span>طلب الخدمة عبر واتساب</span>
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto text-sm text-white/50 hover:text-white px-5 py-3 transition-colors text-center"
          >
            إغلاق النافذة
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export function Services() {
  const [activeService, setActiveService] = useState(null)

  return (
    <section id="services" className="relative border-t border-ink-line py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 noise-panel opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 lg:flex-row">
          <SectionHeading
            eyebrow="خدماتنا"
            title="كل ما تحتاجه تحت سقف إبداعي واحد"
            lead="من الفكرة والتصميم إلى الطباعة والتصوير والبرمجة وحجز اللافتات. حلول متكاملة تضمن لك وقت أقل وأعلى جودة ممكنة في السوق الليبي."
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

        {/* Services Grid (Balanced 3x3 uniform columns) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard 
              key={s.id || s.title} 
              s={s} 
              i={i} 
              onSelect={setActiveService}
            />
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <ServiceModal
            service={activeService}
            onClose={() => setActiveService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

