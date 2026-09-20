import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { BabbrMark } from '../components/BabbrMark'
import { Reveal } from '../components/Reveal'

/**
 * Compact "من نحن" CTA on the homepage — links to the full /about page.
 */
export function AboutCta() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-ink-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="clip-shear-lg relative mx-auto max-w-4xl overflow-hidden border border-ink-line bg-ink-soft p-10 text-center sm:p-14">
            <BabbrMark
              className="absolute -bottom-10 h-52 w-auto opacity-[0.04]"
              color="#FC3B00"
              style={{ insetInlineEnd: '-3rem' }}
            />

            <div className="relative">
              <span className="mb-5 inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.28em] text-babbr uppercase">
                <span className="h-px w-8 bg-babbr" />
                من نحن
              </span>

              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                ببر — ريادة الدعاية والإعلان
              </h2>

              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">
                شركة ليبية متخصصة في التسويق، الطباعة، الدعاية والإعلان، والحلول الرقمية — تأسست في مايو 2022 برؤية
                واضحة: نجعل الخيال على أرض الواقع.
              </p>

              <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
                <div className="flex items-center gap-5 text-sm text-foreground-muted">
                  <div className="border-r-2 border-babbr pr-4">
                    <p className="font-display text-xs font-bold text-babbr tracking-wider uppercase">الرؤية</p>
                    <p className="mt-1 text-xs leading-relaxed">سوق تنافسية بأرقى الخدمات</p>
                  </div>
                  <div className="border-r-2 border-foreground/20 pr-4">
                    <p className="font-display text-xs font-bold text-foreground/60 tracking-wider uppercase">الرسالة</p>
                    <p className="mt-1 text-xs leading-relaxed">دعم العميل وبناء ثقة مستدامة</p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="clip-shear mt-10 inline-flex items-center gap-2.5 bg-babbr px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-babbr-dark"
              >
                تعرّف علينا أكثر
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
