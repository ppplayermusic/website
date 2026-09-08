
'use client'
import Image from 'next/image';


import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { DOWNLOAD_LINKS } from '@/lib/constants'
import { SpotlightText } from '@/components/ui/SpotlightText'
import { SpotlightButton } from '@/components/ui/SpotlightButton'

export default function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 leading-[0.9] cursor-default">
            <SpotlightText className="text-white">Music.</SpotlightText><br />
            <span className="text-slate-400">
              <SpotlightText>Without the friction.</SpotlightText>
            </span>
          </h1>
          <p className="text-slate-300 text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto">
            No account. No subscription. Just play.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SpotlightButton href={DOWNLOAD_LINKS.ios} variant="light">
              Get for iOS
            </SpotlightButton>
            <SpotlightButton href={DOWNLOAD_LINKS.android} variant="dark">
              Get for Android
            </SpotlightButton>
            <SpotlightButton href={DOWNLOAD_LINKS.windows} variant="dark">
              Get for Windows
            </SpotlightButton>
          </div>
        </motion.div>
      </div>

      {/* Enormous desktop interface, partially extending beyond the viewport */}
      <div className="w-full flex justify-center" style={{ perspective: '2000px' }}>
        <motion.div
          initial={{ opacity: 0, y: 150, rotateX: 15, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "top center" }}
          className="w-[120%] md:w-[110%] max-w-[1600px] mt-16 md:mt-24 aspect-[16/10] md:aspect-[16/9] bg-black rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden shadow-2xl border-t border-x border-white/10 flex items-center justify-center relative translate-y-12 md:translate-y-24"
        >
          <Image
            src="/images/screenshot-home.png"
            alt="PPPlayer Desktop Home"
            fill
            className="object-cover object-top"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
