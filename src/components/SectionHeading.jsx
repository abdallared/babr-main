import { Reveal, RevealWords } from './Reveal'
import { cn } from '../lib/utils'

/** Shared section header: mono eyebrow, kinetic Arabic title, supporting line. */
export function SectionHeading({ eyebrow, title, lead, align = 'start', className }) {
  const centered = align === 'center'
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        centered ? 'items-center text-center' : 'items-start text-start',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.28em] text-babbr uppercase">
            <span className="h-px w-8 bg-babbr" />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <h2
        className={cn(
          'text-balance text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.4rem]',
          centered && 'mx-auto max-w-3xl',
        )}
      >
        <RevealWords text={title} />
      </h2>

      {lead && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              'text-pretty text-base leading-relaxed text-white/55 sm:text-lg',
              centered ? 'mx-auto max-w-2xl' : 'max-w-2xl',
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  )
}
