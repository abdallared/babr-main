/**
 * lucide-react v1 dropped third-party brand glyphs, so the two social marks we
 * actually need live here. Both are drawn on a 24x24 grid to sit flush next to
 * lucide icons at the same `size-*`.
 */

export function Facebook({ className, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden {...rest}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  )
}

export function WhatsApp({ className, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden {...rest}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.24-3.44-.72-2.91-1.15-4.74-4.16-4.88-4.35-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07 1-2.36.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.48.24.58.81 1.97.88 2.11.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.14-.3.3-.13.59.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.12.63-.07.17-.19.73-.85.93-1.14.19-.29.39-.24.65-.15.27.1 1.68.79 1.97.94.29.14.48.22.55.34.07.13.07.75-.17 1.43Z" />
    </svg>
  )
}
