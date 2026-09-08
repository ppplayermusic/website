'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SpotlightText } from '@/components/ui/SpotlightText'

export default function NoAccountSection() {
  return (
    <section className="py-32 md:py-48 bg-[var(--color-bg-base)] text-white text-center flex flex-col items-center justify-center min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-8 cursor-default"
        >
          <SpotlightText>No account.</SpotlightText>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-slate-400 text-3xl md:text-5xl font-medium tracking-tight cursor-default"
        >
          <SpotlightText>Music shouldn&apos;t require permission.</SpotlightText>
        </motion.p>

      </div>
    </section>
  )
}
