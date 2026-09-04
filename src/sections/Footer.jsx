import { MessageCircle, Phone, ArrowUp } from 'lucide-react'
import { Facebook } from '../components/BrandIcons'
import { BabbrMark } from '../components/BabbrMark'
import { Marquee } from '../components/Marquee'
import { CONTACT } from '../lib/brand'

const COLS = [
  {
    title: 'خدماتنا',
    links: [
      { label: 'الهوية البصرية', href: '#services' },
      { label: 'موشن وفيديو', href: '#services' },
      { label: 'سوشيال ميديا', href: '#services' },
      { label: 'طباعة وإنتاج', href: '#services' },
      { label: 'لوحات خارجية', href: '#services' },
    ],
  },
  {
    title: 'الشركة',
    links: [
      { label: 'من نحن', href: '#about' },
      { label: 'أعمالنا', href: '#work' },
      { label: 'نظام الهوية', href: '#identity' },
      { label: 'كيف نعمل', href: '#process' },
      { label: 'تواصل معنا', href: '#contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-line bg-ink-soft">
      {/* Oversized wordmark band */}
      <div className="border-b border-ink-line py-10">
        <Marquee speed={44} itemClassName="px-10">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-6xl font-black tracking-tighter text-white/[0.06] sm:text-8xl">
                BABBR
              </span>
              <BabbrMark className="h-9 w-auto opacity-[0.12] sm:h-12" color="#FC3B00" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand block */}
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="mb-5 flex items-center gap-3.5">
              <BabbrMark className="h-9 w-auto" color="#FC3B00" />
              <div>
                <p dir="ltr" className="font-display text-xl font-bold tracking-tight">
                  Babbr
                  <span className="ms-1.5 align-super font-mono text-[8px] text-white/40">™</span>
                </p>
                <p className="font-display text-[9px] font-medium tracking-[0.34em] text-white/40 uppercase">
                  Creatives
                </p>
              </div>
            </div>

            <p className="mb-7 max-w-sm text-sm leading-relaxed text-white/45">
              وكالة دعاية وإعلان ليبية. نبني هويات، نصنع محتوى، وننفّذ على الأرض —
              من الفكرة لآخر ملصق.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: MessageCircle, href: CONTACT.whatsapp, label: 'واتساب' },
                { icon: Facebook, href: CONTACT.facebook, label: 'فيسبوك' },
                { icon: Phone, href: CONTACT.phoneHref, label: 'اتصال' },
              ].map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer noopener"
                    className="grid size-11 place-items-center border border-ink-line text-white/50 transition-all duration-400 hover:border-babbr hover:bg-babbr hover:text-white"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link columns */}
          {COLS.map((c) => (
            <nav key={c.title} className="lg:col-span-2">
              <h3 className="mb-5 font-mono text-[10px] tracking-[0.24em] text-babbr uppercase">
                {c.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/45 transition-colors duration-300 hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact block */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="mb-5 font-mono text-[10px] tracking-[0.24em] text-babbr uppercase">
              تواصل
            </h3>
            <div className="flex flex-col gap-3.5 text-sm">
              <a
                href={CONTACT.phoneHref}
                dir="ltr"
                className="block text-end font-semibold text-white/85 transition-colors hover:text-babbr"
              >
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.siteHref}
                dir="ltr"
                className="block text-end text-white/45 transition-colors hover:text-white"
              >
                {CONTACT.site}
              </a>
              <p className="text-white/45">{CONTACT.city}</p>
            </div>

            <a
              href="#top"
              className="clip-shear mt-7 inline-flex items-center gap-2.5 border border-ink-line px-4 py-2.5 text-xs text-white/55 transition-colors duration-400 hover:border-babbr/50 hover:text-white"
            >
              <ArrowUp className="size-3.5" />
              رجوع للأعلى
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-line pt-7 sm:flex-row">
          <p className="text-xs text-white/30">
            <span dir="ltr">© {new Date().getFullYear()} Babbr Creatives™</span> — كل الحقوق محفوظة.
          </p>
          <p className="font-display text-[10px] tracking-[0.24em] text-white/25 uppercase">
            Future of Advertising
          </p>
        </div>
      </div>
    </footer>
  )
}
