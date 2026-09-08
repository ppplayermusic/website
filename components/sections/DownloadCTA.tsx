'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { DOWNLOAD_LINKS } from '@/lib/constants'

export default function DownloadCTA() {
  return (
    <section id="download" className="py-32 md:py-48 bg-white text-black overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-16">
            Just play.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={DOWNLOAD_LINKS.ios} size="lg" className="rounded-full px-8 bg-black text-white hover:bg-slate-800 border-none font-semibold">
              Get for iOS
            </Button>
            <Button href={DOWNLOAD_LINKS.android} size="lg" variant="glass" className="rounded-full px-8 border-black/10 text-black hover:bg-black/5 font-semibold">
              Get for Android
            </Button>
            <Button href={DOWNLOAD_LINKS.windows} size="lg" variant="glass" className="rounded-full px-8 border-black/10 text-black hover:bg-black/5 font-semibold">
              Get for Windows
            </Button>
          </div>
        </motion.div>

        {/* Subtle Logo representation at the end */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-32 md:mt-48 flex justify-center opacity-10 pointer-events-none"
        >
          <img src="/logo.png" alt="PPPlayer Logo Mark" className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] filter grayscale" />
        </motion.div>

      </div>
    </section>
  )
}
