
'use client'
import Image from 'next/image';


import React from 'react'
import { motion } from 'framer-motion'
import { SpotlightText } from '@/components/ui/SpotlightText'
import { MacOSWindowFrame } from '@/components/ui/MacOSWindowFrame'

export default function PlatformsSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-base)] text-white overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 cursor-default">
            <SpotlightText>Your music. Your devices.</SpotlightText>
          </h2>
          <p className="text-slate-400 text-lg">
            Beautifully native on Windows, Android, and iOS.
          </p>
        </motion.div>

        {/* Device Composition */}
        <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] flex items-center justify-center">
          
          {/* Desktop Behind */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 w-[80%] md:w-[70%] flex items-center justify-center -translate-y-8"
          >
            <MacOSWindowFrame title="PPPlayer" className="w-full">
              <Image
                src="/images/screenshot-home.png"
                alt="PPPlayer Desktop"
                width={1920}
                height={1080}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </MacOSWindowFrame>
          </motion.div>

          {/* Android Left */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[5%] md:left-[15%] bottom-0 w-[30%] md:w-[22%] aspect-[9/19] bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)] z-10 flex items-center justify-center"
          >
            <Image
              src="/images/screenshot-mobile.png"
              alt="PPPlayer Android"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          {/* iOS Right */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-[5%] md:right-[15%] bottom-0 w-[30%] md:w-[22%] aspect-[9/19] bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)] z-10 flex items-center justify-center translate-y-8"
          >
            <Image
              src="/images/screenshot-mobile.png"
              alt="PPPlayer iOS"
              fill
              className="object-cover object-top"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
