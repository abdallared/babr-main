import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Phone } from 'lucide-react'
import { BabbrMark } from './BabbrMark'
import { MagneticButton } from './Interactive'
import { CONTACT } from '../lib/brand'
import { cn } from '../lib/utils'

const LINKS = [
  { href: '#services', label: 'خدماتنا' },
  { href: '#work', label: 'أعمالنا' },
  { href: '#identity', label: 'الهوية' },
  { href: '#process', label: 'كيف نعمل' },
  { href: '#about', label: 'من نحن' },
]

export function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock the page behind the mobile sheet so it doesn't scroll underneath.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          solid
            ? 'border-b border-ink-line bg-ink/80 backdrop-blur-xl'
            : 'border-b border-transparent',
        )}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="group flex items-center gap-3" aria-label="BABBR Creatives">
            <BabbrMark
              className="h-7 w-auto transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110"
              color="#FC3B00"
            />
            <span dir="ltr" className="font-display text-lg font-bold tracking-tight">
              Babbr
              <span className="ms-1.5 align-super font-mono text-[8px] tracking-normal text-white/40">
                ™
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-1 start-0 h-px w-0 bg-babbr transition-all duration-300 hover:w-full" />
                </span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={CONTACT.phoneHref}
              dir="ltr"
              className="hidden items-center gap-2 font-mono text-xs text-white/50 transition-colors hover:text-babbr md:flex"
            >
              <Phone className="size-3.5" />
              {CONTACT.phone}
            </a>

            <MagneticButton
              as="a"
              href="#contact"
              strength={8}
              className="clip-shear hidden bg-babbr px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-ink sm:inline-block"
            >
              ابدأ مشروعك
            </MagneticButton>

            <button
              onClick={() => setOpen(true)}
              aria-label="فتح القائمة"
              className="grid size-10 place-items-center border border-ink-line text-white/80 transition-colors hover:border-babbr hover:text-babbr lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-ink/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-[72px] items-center justify-between px-5">
              <BabbrMark className="h-7 w-auto" color="#FC3B00" />
              <button
                onClick={() => setOpen(false)}
                aria-label="إغلاق القائمة"
                className="grid size-10 place-items-center border border-ink-line text-white/80"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1 px-5 pt-8">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-ink-line py-5 text-3xl font-bold tracking-tight text-white/85"
                >
                  {l.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="clip-shear mt-8 bg-babbr px-6 py-4 text-center text-lg font-semibold"
              >
                ابدأ مشروعك
              </motion.a>

              <a
                href={CONTACT.phoneHref}
                dir="ltr"
                className="mt-4 text-center font-mono text-sm text-white/50"
              >
                {CONTACT.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
