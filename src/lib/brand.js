/**
 * BABBR brand constants.
 *
 * The palette and the logo path are both derived from the client's official
 * artwork in this repo (see /public/brand) — the colours were sampled straight
 * out of the PNGs and the path was contour-traced from `mark-white-orange.png`,
 * so it is the real mark rather than an approximation.
 */

// Contour-traced from the official mark. 14 vertices, viewBox 0 0 1000 868.
export const MARK_PATH =
  'M858 0L1000 73L956.5 189.4L415.7 521.8L895.1 353L727.5 799.3L138.2 868.2' +
  'L639.5 569.1L0 785.2L103.7 512.9L754.4 128L175.3 322.2L278.7 49.9L856.8 1.4Z'

export const MARK_VIEWBOX = '0 0 1000 868'

/** The 12 official colourways, taken from the brand's profile-picture set. */
export const COLORWAYS = [
  { id: 'orange-white', bg: '#FC3B00', fg: '#FFFFFF', name: 'Signature',  nameAr: 'الأساسي' },
  { id: 'white-orange', bg: '#FFFFFF', fg: '#FC3B00', name: 'Inverse',    nameAr: 'المعاكس' },
  { id: 'ink-orange',   bg: '#0A0A0A', fg: '#FC3B00', name: 'Midnight',   nameAr: 'الليلي' },
  { id: 'orange-ink',   bg: '#FC3B00', fg: '#0A0A0A', name: 'Hazard',     nameAr: 'التحذيري' },
  { id: 'ink-white',    bg: '#0A0A0A', fg: '#FFFFFF', name: 'Mono',       nameAr: 'الأحادي' },
  { id: 'white-ink',    bg: '#FFFFFF', fg: '#0A0A0A', name: 'Press',      nameAr: 'الطباعي' },
  { id: 'blush-peri',   bg: '#FFCAD4', fg: '#758BFD', name: 'Bubblegum',  nameAr: 'الوردي' },
  { id: 'indigo-lime',  bg: '#27187E', fg: '#E9FF70', name: 'Voltage',    nameAr: 'الكهربي' },
  { id: 'peri-teal',    bg: '#758BFD', fg: '#2EC4B6', name: 'Lagoon',     nameAr: 'البحري' },
  { id: 'teal-blush',   bg: '#2EC4B6', fg: '#FFCAD4', name: 'Reef',       nameAr: 'المرجاني' },
  { id: 'lime-grass',   bg: '#E9FF70', fg: '#7CB518', name: 'Citrus',     nameAr: 'الليموني' },
  { id: 'ink-sand',     bg: '#0A0A0A', fg: '#CEBB9F', name: 'Sherpa',     nameAr: 'الرملي' },
]

export const CONTACT = {
  phone: '+218 91 319 2992',
  phoneHref: 'tel:+218913192992',
  whatsapp: 'https://wa.me/218913192992',
  site: 'babar.ly',
  siteHref: 'https://babar.ly',
  facebook: 'https://www.facebook.com/babbr.ly',
  email: 'hello@babar.ly',
  city: 'ليبيا',
  cityEn: 'Libya',
}
