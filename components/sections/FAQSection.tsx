'use client'
import {useTranslations} from 'next-intl'

import { motion } from 'framer-motion'
import { FAQItem } from '@/components/ui/FAQItem'
import { SpotlightText } from '@/components/ui/SpotlightText'

export default function FAQSection() {
  const t = useTranslations('faq');
  const items = t.raw('items') as { q: string; a: string }[];
  
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 cursor-default">
            <SpotlightText>
              {t.rich("title", { gradient: (chunks) => <span className="gradient-text">{chunks}</span> })}
            </SpotlightText>
          </h2>
          <p className="text-slate-400 text-lg">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          {items.map((faq) => (
            <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

