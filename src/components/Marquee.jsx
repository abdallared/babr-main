import { cn } from '../lib/utils'

/**
 * Seamless continuous marquee (infinite loop / circle).
 * Enforces dir="ltr" on the scrolling track so translateX(-50%) correctly
 * loops without gaps in RTL pages, while maintaining dir="rtl" on items.
 * Renders multiple repetitions per half so the track always exceeds viewport width.
 */
export function Marquee({
  children,
  speed = 32,
  reverse = false,
  className,
  itemClassName,
  fade = true,
  repeat = 2,
}) {
  const items = Array.isArray(children) ? children : [children]

  const renderGroup = (ariaHidden = false) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {Array.from({ length: repeat }).map((_, r) => (
        <div key={r} className="flex shrink-0 items-center" dir="rtl">
          {items.map((item, i) => (
            <div key={i} className={cn('shrink-0', itemClassName)}>
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  )

  return (
    <div
      dir="ltr"
      className={cn('group relative flex overflow-hidden', fade && 'mask-fade-x', className)}
    >
      <div
        className="flex w-max animate-[marquee_var(--dur)_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ '--dur': `${speed}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {renderGroup(false)}
        {renderGroup(true)}
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  )
}

