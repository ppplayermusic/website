'use client'

import { motion } from 'framer-motion'
import { FAQItem } from '@/components/ui/FAQItem'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQSection() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Common{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Everything you need to know about PPPlayer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          {FAQ_ITEMS.map((faq) => (
            <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
