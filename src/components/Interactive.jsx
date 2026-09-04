import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useInView, animate } from 'motion/react'
import { cn } from '../lib/utils'

/* ─────────────────────────  Magnetic button  ───────────────────────── */

/**
 * Button that leans toward the cursor. `strength` is the maximum pull in px;
 * the spring makes the return feel weighted rather than snapping back.
 */
export function MagneticButton({
  children,
  className,
  as = 'button',
  strength = 14,
  ...rest
}) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 })
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 })
  const Tag = motion[as] ?? motion.button

  function onMove(e) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    x.set(((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * strength)
    y.set(((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * strength)
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ x, y }}
      whileTap={{ scale: 0.96 }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* ─────────────────────────  Spotlight card  ───────────────────────── */

/** Card with a cursor-tracking radial highlight and a lit border. */
export function SpotlightCard({ children, className, glow = 'rgba(252,59,0,0.16)' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: -400, y: -400 })
  const [lit, setLit] = useState(false)

  function onMove(e) {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setLit(true)}
      onMouseLeave={() => setLit(false)}
      className={cn(
        'group relative overflow-hidden border border-ink-line bg-ink-soft',
        'transition-colors duration-500 hover:border-babbr/45',
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-400"
        style={{
          opacity: lit ? 1 : 0,
          background: `radial-gradient(360px circle at ${pos.x}px ${pos.y}px, ${glow}, transparent 65%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}

/* ─────────────────────────  Tilt card  ───────────────────────── */

/** 3D tilt on hover. Disabled on touch, where there is no hover to speak of. */
export function TiltCard({ children, className, max = 9 }) {
  const ref = useRef(null)
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })

  function onMove(e) {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    ry.set(((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * max)
    rx.set(((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * -max)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { rx.set(0); ry.set(0) }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={cn('[transform-style:preserve-3d]', className)}
    >
      {children}
    </motion.div>
  )
}

/* ─────────────────────────  Count-up  ───────────────────────── */

/** Counts from 0 to `to` when scrolled into view. Runs once. */
export function Counter({ to, suffix = '', prefix = '', duration = 1.9, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    })
    return () => controls.stop()
  }, [inView, to, duration])

  const decimals = String(to).includes('.') ? 1 : 0

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  )
}

/* ─────────────────────────  Cursor glow  ───────────────────────── */

/** A soft brand-coloured light that follows the pointer. Pointer devices only. */
export function CursorGlow() {
  const x = useSpring(useMotionValue(-500), { stiffness: 120, damping: 22, mass: 0.6 })
  const y = useSpring(useMotionValue(-500), { stiffness: 120, damping: 22, mass: 0.6 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setEnabled(true)
    const onMove = (e) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[60] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-45 mix-blend-screen"
      style={{
        x, y,
        background: 'radial-gradient(circle, rgba(252,59,0,0.20), rgba(252,59,0,0.05) 42%, transparent 70%)',
      }}
    />
  )
}

/* ─────────────────────────  Scroll progress  ───────────────────────── */

export function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-transparent" aria-hidden>
      <div
        className="h-full bg-gradient-to-r from-babbr via-babbr-glow to-lime transition-[width] duration-75 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
