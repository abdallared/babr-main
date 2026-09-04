import { motion } from 'motion/react'
import { MARK_PATH, MARK_VIEWBOX } from '../lib/brand'
import { cn } from '../lib/utils'

/** The BABBR bolt, as a plain filled mark. */
export function BabbrMark({ className, color = 'currentColor', ...rest }) {
  return (
    <svg viewBox={MARK_VIEWBOX} className={cn('block', className)} aria-hidden {...rest}>
      <path d={MARK_PATH} fill={color} />
    </svg>
  )
}

/**
 * The mark that draws itself: the outline strokes on, then the fill floods in.
 * `delay` staggers it against whatever else is entering at the same time.
 */
export function BabbrMarkDraw({ className, color = '#FC3B00', delay = 0 }) {
  return (
    <svg viewBox={MARK_VIEWBOX} className={cn('block', className)} aria-hidden>
      <motion.path
        d={MARK_PATH}
        fill="none"
        stroke={color}
        strokeWidth={8}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
        transition={{
          pathLength: { duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 2.4, delay, times: [0, 0.1, 0.75, 1] },
        }}
      />
      <motion.path
        d={MARK_PATH}
        fill={color}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ transformOrigin: 'center' }}
        transition={{ duration: 0.9, delay: delay + 1.15, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  )
}
