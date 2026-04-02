'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Star, Check, Radio, ShieldOff, Gift } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { DOWNLOAD_LINKS } from '@/lib/constants'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-700/18 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-red-500/12 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-rose-700/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left: text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-red-300 border border-red-500/30 bg-red-500/10">
                <Star size={12} fill="currentColor" />
                Free Music App — No Account Required
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
            >
              Free Music.{' '}
              <span className="gradient-text">No Account.</span>
              <br />
              Just Play.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={item}
              className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-lg"
            >
              PPPlayer is a free music app for iPhone, Android, and Windows. Discover artists, explore genres, and start listening — no signup required.
            </motion.p>

            {/* Trust chips */}
            <motion.div variants={item} className="flex flex-wrap gap-2">
              {([
                { label: '100% Free', icon: <Check size={13} strokeWidth={2.5} /> },
                { label: 'No Account Required', icon: <Check size={13} strokeWidth={2.5} /> },
                { label: 'iOS · Android · Windows', icon: <Check size={13} strokeWidth={2.5} /> },
              ] as { label: string; icon: React.ReactNode }[]).map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm text-slate-300 border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <span className="text-red-400">{chip.icon}</span>
                  {chip.label}
                </span>
              ))}
            </motion.div>

            {/* Download buttons */}
            <motion.div variants={item} className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
              <Button href={DOWNLOAD_LINKS.ios} size="lg">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for iOS
              </Button>
              <Button href={DOWNLOAD_LINKS.android} size="lg" variant="glass">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.523 15.34l1.05-1.816a.306.306 0 0 0-.114-.424.314.314 0 0 0-.427.113l-1.063 1.84A6.7 6.7 0 0 0 14 14.285a6.7 6.7 0 0 0-2.97.768l-1.062-1.84a.314.314 0 0 0-.427-.112.306.306 0 0 0-.114.423l1.05 1.816A6.135 6.135 0 0 0 7.5 20h9a6.135 6.135 0 0 0-2.977-4.66zM10.5 18a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM6.804 7.418 5.755 5.6a.306.306 0 0 1 .114-.423.314.314 0 0 1 .427.113l1.063 1.837A9.02 9.02 0 0 1 14 5.887a9.02 9.02 0 0 1 6.641 3.24l1.063-1.837a.314.314 0 0 1 .427-.113c.152.087.203.275.114.423l-1.049 1.818C22.686 10.696 24 13.19 24 16H0C0 13.19 1.314 10.696 3.196 9.418zM14 7.387a7.2 7.2 0 0 0-7.017 5.613h14.034A7.2 7.2 0 0 0 14 7.387z"/>
                </svg>
                Download for Android
              </Button>
              <Button href={DOWNLOAD_LINKS.windows} size="lg" variant="glass">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                </svg>
                Download for Windows
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="relative flex justify-center md:justify-end"
          >
            {/* Glow behind phone */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-purple-600/20 rounded-full blur-[80px]" />
            </div>

            {/* Phone frame */}
            <div className="relative w-64 sm:w-72">
              <div className="relative rounded-[3rem] bg-gradient-to-br from-[#1c1c2e] to-[#0f0f1a] border-4 border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden aspect-[9/19]">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-10" />

                {/* App UI mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1a] via-[#111130] to-[#0a0a18] p-5 pt-10 flex flex-col gap-3">
                  {/* Status-like row */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[8px] text-white font-semibold">PPPlayer</span>
                    <div className="w-10 h-1 bg-purple-400/50 rounded-full" />
                  </div>

                  {/* Now playing card */}
                  <div className="rounded-2xl bg-gradient-to-br from-purple-900/60 to-pink-900/40 p-3 border border-white/8">
                    <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 mb-2 flex items-center justify-center shadow-lg">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-white/80 rounded-full w-3/4" />
                      <div className="h-1.5 bg-white/30 rounded-full w-1/2" />
                    </div>
                    <div className="mt-2 h-1 bg-white/10 rounded-full">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-2/5" />
                    </div>
                  </div>

                  {/* Artist rows */}
                  {[0.8, 0.6, 0.7].map((opacity, i) => (
                    <div key={i} className="flex items-center gap-2 py-1">
                      <div
                        className="w-7 h-7 rounded-lg flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, hsl(${260 + i * 40}, 60%, 50%), hsl(${300 + i * 30}, 60%, 45%))`,
                          opacity,
                        }}
                      />
                      <div className="flex-1 space-y-1">
                        <div className="h-1.5 bg-white/40 rounded-full" style={{ width: `${50 + i * 15}%` }} />
                        <div className="h-1 bg-white/15 rounded-full w-1/3" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-1/4 px-3 py-1.5 rounded-xl glass border border-white/10 text-xs font-semibold text-red-300 shadow-xl flex items-center gap-1.5"
              >
                <Gift size={12} strokeWidth={2} />
                Free
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-8 top-1/3 px-3 py-1.5 rounded-xl glass border border-white/10 text-xs font-semibold text-red-300 shadow-xl flex items-center gap-1.5"
              >
                <Radio size={12} strokeWidth={2} />
                Artist Radio
              </motion.div>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -left-6 bottom-1/4 px-3 py-1.5 rounded-xl glass border border-white/10 text-xs font-semibold text-red-300 shadow-xl flex items-center gap-1.5"
              >
                <ShieldOff size={12} strokeWidth={2} />
                No Login
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
