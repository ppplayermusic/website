'use client'

import { motion, type Variants } from 'framer-motion'
import { Zap, UserX, Download, Monitor } from 'lucide-react'

const values = [
  {
    icon: Zap,
    title: 'Free Forever',
    desc: 'No cost, no subscription, no paywall.',
    color: 'text-yellow-400',
    glow: 'group-hover:shadow-yellow-500/20',
    border: 'group-hover:border-yellow-500/30',
  },
  {
    icon: UserX,
    title: 'No Account',
    desc: 'No email, no signup, no friction.',
    color: 'text-red-500',
    glow: 'group-hover:shadow-red-500/20',
    border: 'group-hover:border-red-500/30',
  },
  {
    icon: Download,
    title: 'Instant Start',
    desc: 'Download, open, and listen immediately.',
    color: 'text-rose-500',
    glow: 'group-hover:shadow-rose-500/20',
    border: 'group-hover:border-rose-500/30',
  },
  {
    icon: Monitor,
    title: 'All Platforms',
    desc: 'iOS, Android, and Windows.',
    color: 'text-red-400',
    glow: 'group-hover:shadow-red-400/20',
    border: 'group-hover:border-red-400/30',
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ValueStrip() {
  return (
    <section className="py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={item}
              className={`group glass rounded-2xl p-4 sm:p-5 border border-white/8 hover:bg-white/[0.06] transition-all duration-300 cursor-default shadow-lg ${v.glow} ${v.border}`}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <v.icon size={22} className={`${v.color} mb-3`} />
              <h3 className="text-white font-bold text-sm sm:text-base mb-1">{v.title}</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-tight">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
