import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

const FAQS = [
  {
    q: 'قداش تاخذ الهوية البصرية الكاملة؟',
    a: 'عادةً من أسبوعين إلى أربعة أسابيع، حسب حجم الهوية وعدد المواد المطلوبة. نعطيك جدول زمني مكتوب قبل ما نبدأ، ونحدّثك في كل مرحلة.',
  },
  {
    q: 'نقدر ناخذ خدمة واحدة بس؟',
    a: 'أكيد. تقدر تاخذ التصميم لحده، أو الطباعة لحدها، أو إدارة السوشيال لحدها. بس لما ناخذوا المشروع كامل تطلع النتيجة أكثر تناسقاً وأرخص في المجموع.',
  },
  {
    q: 'شنو اللي نستلمه في نهاية المشروع؟',
    a: 'تستلم الملفات المفتوحة (AI/PSD)، وملفات جاهزة للطباعة والويب، ودليل هوية يشرح الاستخدام الصحيح للشعار والألوان والخطوط. الحقوق كلها تنتقل لك.',
  },
  {
    q: 'تشتغلوا مع مشاريع صغيرة أو بدايات؟',
    a: 'نعم، وهذا جزء كبير من شغلنا. عندنا باكجات مناسبة للمشاريع الجديدة تبدأ بالأساسيات وتتوسّع معاك لما تكبر.',
  },
  {
    q: 'الطباعة والتركيب داخل الأسعار؟',
    a: 'تتحسب على حسب الكمية والمقاسات والمادة. نعطيك عرض سعر تفصيلي منفصل للتصميم وللإنتاج باش تكون الصورة واضحة عندك.',
  },
  {
    q: 'كيف نبدأ معاكم؟',
    a: 'ابعتلنا على واتساب أو املأ النموذج تحت. نرتّبوا مكالمة قصيرة نفهم فيها مشروعك، وبعدها نبعتلك عرض سعر وجدول زمني.',
  },
]

function Item({ f, open, onToggle }) {
  return (
    <div className="border-b border-ink-line">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-5 py-6 text-start"
      >
        <span
          className={`text-base font-semibold tracking-tight transition-colors duration-300 sm:text-lg ${
            open ? 'text-babbr' : 'text-white/85 group-hover:text-white'
          }`}
        >
          {f.q}
        </span>
        {/* The box stays square; only the glyph inside rotates into a cross. */}
        <span
          className={`grid size-9 shrink-0 place-items-center border transition-colors duration-300 ${
            open ? 'border-babbr text-babbr' : 'border-ink-line text-white/40'
          }`}
        >
          <motion.span
            animate={{ rotate: open ? 135 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid place-items-center"
          >
            <Plus className="size-4" />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 text-pretty text-sm leading-relaxed text-white/50 sm:text-[15px]">
              {f.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="relative border-t border-ink-line py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="أسئلة متكررة"
          title="أسئلة يسألوها كل العملاء"
          align="center"
          className="mb-14"
        />

        <Reveal>
          <div className="border-t border-ink-line">
            {FAQS.map((f, i) => (
              <Item
                key={f.q}
                f={f}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
