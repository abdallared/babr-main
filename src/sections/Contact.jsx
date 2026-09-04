import { useState } from 'react'
import { motion } from 'motion/react'
import { MessageCircle, Phone, Globe, Check } from 'lucide-react'
import { Facebook } from '../components/BrandIcons'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { MagneticButton } from '../components/Interactive'
import { BabbrMark } from '../components/BabbrMark'
import { CONTACT } from '../lib/brand'

const INTERESTS = [
  'هوية بصرية', 'سوشيال ميديا', 'موشن وفيديو', 'طباعة وإنتاج',
  'لوحات خارجية', 'موقع أو متجر', 'حملة إعلانية', 'شي ثاني',
]

const BUDGETS = ['أقل من 2,000 د.ل', '2,000 — 5,000', '5,000 — 15,000', 'أكثر من 15,000', 'مش محدد بعد']

export function Contact() {
  const [form, setForm] = useState({ name: '', brand: '', phone: '', budget: '', note: '' })
  const [picked, setPicked] = useState([])
  const [sent, setSent] = useState(false)

  function toggle(tag) {
    setPicked((p) => (p.includes(tag) ? p.filter((t) => t !== tag) : [...p, tag]))
  }

  /**
   * No backend here by design: the brief is assembled into a pre-filled WhatsApp
   * message, which is how most clients in Libya actually want to reach a studio.
   * Swap in a real endpoint later if you want submissions stored.
   */
  function submit(e) {
    e.preventDefault()
    const lines = [
      'سلام عليكم بابر 👋',
      '',
      `الاسم: ${form.name || '—'}`,
      `المشروع / العلامة: ${form.brand || '—'}`,
      `رقم للتواصل: ${form.phone || '—'}`,
      `المطلوب: ${picked.length ? picked.join('، ') : '—'}`,
      `الميزانية: ${form.budget || '—'}`,
      '',
      `تفاصيل: ${form.note || '—'}`,
    ]
    window.open(`${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
    setSent(true)
  }

  const field =
    'w-full border border-ink-line bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-white/25 outline-none transition-colors duration-300 focus:border-babbr focus:bg-white/[0.05]'

  return (
    <section id="contact" className="relative overflow-hidden border-t border-ink-line py-24 sm:py-32">
      {/* Ambient brand light */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(252,59,0,0.13),transparent_65%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ── Left: pitch + channels ── */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="تواصل معنا"
              title="عندك مشروع؟ خلّينا نسمعه."
              lead="ابعتلنا تفاصيل مشروعك ونرجّعلك بعرض سعر وجدول زمني. أو كلّمنا على واتساب مباشرة إذا تحب أسرع."
            />

            <Reveal delay={0.12}>
              <div className="mt-9 flex flex-col gap-3">
                {[
                  { icon: MessageCircle, label: 'واتساب', value: CONTACT.phone, href: CONTACT.whatsapp, primary: true },
                  { icon: Phone, label: 'اتصال', value: CONTACT.phone, href: CONTACT.phoneHref },
                  { icon: Facebook, label: 'فيسبوك', value: 'BABBR Creatives', href: CONTACT.facebook },
                  { icon: Globe, label: 'الموقع', value: CONTACT.site, href: CONTACT.siteHref },
                ].map((c) => {
                  const Icon = c.icon
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer noopener"
                      className={`clip-shear group flex items-center gap-4 border p-4 transition-all duration-400 ${
                        c.primary
                          ? 'border-babbr/40 bg-babbr/10 hover:bg-babbr/20'
                          : 'border-ink-line bg-ink-soft hover:border-white/25'
                      }`}
                    >
                      <span
                        className={`grid size-11 shrink-0 place-items-center border ${
                          c.primary ? 'border-babbr/40 text-babbr' : 'border-ink-line text-white/50'
                        }`}
                      >
                        <Icon className="size-[18px]" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] text-white/40">{c.label}</p>
                        <p dir="ltr" className="truncate text-end text-sm font-semibold text-white/90">
                          {c.value}
                        </p>
                      </div>
                      <BabbrMark className="h-3 w-auto shrink-0 opacity-0 transition-all duration-400 group-hover:-translate-x-1 group-hover:opacity-60" color="#FC3B00" />
                    </a>
                  )
                })}
              </div>
            </Reveal>
          </div>

          {/* ── Right: brief form ── */}
          <Reveal delay={0.1} from="left" className="lg:col-span-7">
            <form
              onSubmit={submit}
              className="clip-shear-lg border border-ink-line bg-ink-soft p-7 sm:p-9"
            >
              <div className="mb-7 flex items-center gap-3 border-b border-ink-line pb-6">
                <BabbrMark className="h-6 w-auto" color="#FC3B00" />
                <div>
                  <h3 className="text-base font-bold">بريف سريع</h3>
                  <p className="text-xs text-white/40">دقيقة واحدة، وتوصلنا كل التفاصيل</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-2 block text-xs text-white/50">الاسم *</label>
                  <input
                    id="c-name" required className={field} placeholder="اسمك الكامل"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="c-brand" className="mb-2 block text-xs text-white/50">اسم المشروع</label>
                  <input
                    id="c-brand" className={field} placeholder="اسم علامتك أو شركتك"
                    value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="c-phone" className="mb-2 block text-xs text-white/50">رقم الهاتف *</label>
                  <input
                    id="c-phone" required type="tel" dir="ltr" className={field} placeholder="09X XXX XXXX"
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="c-budget" className="mb-2 block text-xs text-white/50">الميزانية التقديرية</label>
                  <select
                    id="c-budget" className={`${field} appearance-none`}
                    value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  >
                    <option value="" className="bg-ink">اختر…</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b} className="bg-ink">{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-xs text-white/50">شنو المطلوب؟ (تقدر تختار أكثر من واحد)</p>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((t) => {
                    const on = picked.includes(t)
                    return (
                      <button
                        key={t} type="button" onClick={() => toggle(t)} aria-pressed={on}
                        className={`clip-shear flex items-center gap-1.5 border px-3.5 py-2 text-[13px] transition-all duration-300 ${
                          on
                            ? 'border-babbr bg-babbr text-white'
                            : 'border-ink-line bg-white/[0.03] text-white/55 hover:border-white/25 hover:text-white/85'
                        }`}
                      >
                        {on && <Check className="size-3.5" />}
                        {t}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="c-note" className="mb-2 block text-xs text-white/50">تفاصيل إضافية</label>
                <textarea
                  id="c-note" rows={4} className={`${field} resize-none`}
                  placeholder="حكيلنا عن مشروعك، جمهورك، وشنو تحب توصله…"
                  value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })}
                />
              </div>

              <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row">
                <MagneticButton
                  type="submit" strength={8}
                  className="clip-shear group relative w-full overflow-hidden bg-babbr px-7 py-4 text-base font-semibold text-white sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2.5">
                    <MessageCircle className="size-4" />
                    ابعت البريف على واتساب
                  </span>
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                </MagneticButton>

                {sent ? (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-sm text-teal"
                  >
                    <Check className="size-4" />
                    فتحنالك واتساب — ابعت الرسالة وبس.
                  </motion.p>
                ) : (
                  <p className="text-xs leading-relaxed text-white/35">
                    راح يفتح واتساب برسالة جاهزة فيها كل اللي كتبته.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
