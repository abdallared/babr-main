import { motion } from 'motion/react'

const OFFSET = {
  up: { y: 34, x: 0 },
  down: { y: -34, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
}

/** Scroll-triggered entrance. Fires once, 20% into the viewport. */
export function Reveal({
  children,
  delay = 0,
  duration = 0.75,
  from = 'up',
  className,
  blur = true,
}) {
  const off = OFFSET[from] ?? OFFSET.up
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...off, filter: blur ? 'blur(8px)' : 'none' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Splits a string into words and cascades them in — used for big headlines.
 *
 * Deliberately no `overflow-hidden` word-mask: Arabic ascenders, descenders and
 * diacritics (ج, ى, ـً, ـُ) sit well outside the line box, so a mask crops them.
 * A short travel plus a blur reads the same and never clips a glyph. Splitting is
 * per word, never per letter, so cursive joining survives.
 */
export function RevealWords({ text, className, wordClassName, delay = 0, stagger = 0.06 }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={`inline-block ${wordClassName ?? ''}`}
          initial={{ y: 26, opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.85,
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </span>
  )
}
