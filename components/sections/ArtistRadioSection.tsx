
'use client'
import Image from 'next/image';


import React from 'react'
import { motion } from 'framer-motion'

export default function ArtistRadioSection() {
  return (
    <section className="py-32 md:py-48 bg-[#fcfcfc] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              Endless listening.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl aspect-[3/4] md:aspect-square bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative"
          >
            <Image
              src="/images/screenshot-radio.png"
              alt="PPPlayer Artist Radio"
              fill
              className="object-cover object-center"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
