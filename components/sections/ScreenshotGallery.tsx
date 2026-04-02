'use client'

import { motion } from 'framer-motion'

const screens = [
  {
    label: 'Home',
    gradient: 'from-red-900/80 via-[#0a0608] to-[#0a0608]',
    accent: 'from-red-600 to-rose-500',
    items: 4,
  },
  {
    label: 'Artist',
    gradient: 'from-rose-900/70 via-[#0a0608] to-[#0a0608]',
    accent: 'from-rose-600 to-red-500',
    items: 3,
  },
  {
    label: 'Player',
    gradient: 'from-red-950/70 via-[#0a0608] to-[#0a0608]',
    accent: 'from-red-700 to-orange-600',
    items: 2,
  },
  {
    label: 'Genres',
    gradient: 'from-orange-950/70 via-[#0a0608] to-[#0a0608]',
    accent: 'from-orange-600 to-red-600',
    items: 5,
  },
  {
    label: 'Playlists',
    gradient: 'from-rose-950/60 via-[#0a0608] to-[#0a0608]',
    accent: 'from-rose-500 to-red-400',
    items: 3,
  },
]

function PhoneMockup({
  screen,
  delay,
}: {
  screen: (typeof screens)[0]
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="flex-shrink-0 w-44 sm:w-52"
    >
      <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#1c1c2e] to-[#0f0f1a] border-4 border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden aspect-[9/19]">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-10" />

        {/* Screen content */}
        <div className={`absolute inset-0 bg-gradient-to-b ${screen.gradient} p-4 pt-9 flex flex-col gap-2.5`}>
          {/* Header line */}
          <div className="flex justify-between items-center">
            <div className="h-2 bg-white/50 rounded-full w-16" />
            <div className="w-5 h-5 rounded-full bg-white/10" />
          </div>

          {/* Hero artwork */}
          <div
            className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${screen.accent} flex items-center justify-center shadow-lg`}
          >
            <div className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center">
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5" />
            </div>
          </div>

          {/* List items */}
          {Array.from({ length: screen.items }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-lg flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, hsl(${350 + i * 5}, 85%, 55%), hsl(${10 + i * 10}, 85%, 45%))`,
                  opacity: 0.8 - i * 0.1,
                }}
              />
              <div className="flex-1 space-y-1">
                <div
                  className="h-1.5 bg-white/35 rounded-full"
                  style={{ width: `${65 - i * 8}%` }}
                />
                <div className="h-1 bg-white/15 rounded-full w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-slate-500 text-xs mt-3 font-medium">{screen.label}</p>
    </motion.div>
  )
}

export default function ScreenshotGallery() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">App Preview</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            See it{' '}
            <span className="gradient-text">in action</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A beautiful interface built for discovering and enjoying music. Every screen crafted with care.
          </p>
        </motion.div>

        {/* Scrollable gallery */}
        <div className="flex gap-5 overflow-x-auto pb-6 px-4 -mx-4 scrollbar-thin justify-start md:justify-center">
          {screens.map((screen, i) => (
            <PhoneMockup key={screen.label} screen={screen} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
