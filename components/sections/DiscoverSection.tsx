'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SpotlightText } from '@/components/ui/SpotlightText'

export default function DiscoverSection() {
  return (
    <section id="discover" className="py-32 md:py-48 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Asymmetric editorial composition */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 md:col-start-1"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9] cursor-default">
              <SpotlightText>Find<br />something<br />worth playing.</SpotlightText>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 w-full aspect-[4/5] bg-slate-50 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl shadow-black/5 border border-black/5 flex items-center justify-center relative -translate-y-8 md:translate-y-16"
          >
            {/* Placeholder for asymmetric editorial screenshot */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-3">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span className="text-sm uppercase tracking-widest font-medium text-slate-500">Discover UI Screenshot</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
