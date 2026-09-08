
'use client'
import Image from 'next/image';


import React from 'react'
import { motion } from 'framer-motion'

export default function PressPlaySection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-base)] text-white overflow-hidden">
      <div className="flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24 px-4"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Then, just listen.
          </h2>
        </motion.div>

        {/* Cinematic edge-to-edge Player UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1920px] mx-auto aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] bg-black overflow-hidden shadow-2xl border-y border-white/5 flex items-center justify-center relative"
        >
          <Image
            src="/images/screenshot-player.png"
            alt="PPPlayer Full Player"
            fill
            className="object-cover object-center"
          />
        </motion.div>
        
      </div>
    </section>
  )
}
