
'use client'
import Image from 'next/image';


import React from 'react'
import { motion } from 'framer-motion'
import { SpotlightText } from '@/components/ui/SpotlightText'

export default function GoDeeperSection() {
  return (
    <section className="py-24 md:py-32 bg-[#fcfcfc] text-black border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Oversized typography behind the UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none"
        >
          <h2 className="text-[12rem] md:text-[20rem] font-black tracking-tighter whitespace-nowrap">
            FOLLOW
          </h2>
        </motion.div>

        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight cursor-default">
              <SpotlightText>Follow the music.</SpotlightText>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full max-w-5xl aspect-[16/11] bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative"
          >
            <Image
              src="/images/screenshot-artist.png"
              alt="PPPlayer Artist Page"
              fill
              className="object-cover object-top"
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
