'use client'

import { motion, type Variants } from 'framer-motion'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PLATFORMS } from '@/lib/constants'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const PlatformIcons: Record<string, React.ReactNode> = {
  ios: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  android: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M17.523 15.34l1.05-1.816a.306.306 0 0 0-.114-.424.314.314 0 0 0-.427.113l-1.063 1.84A6.7 6.7 0 0 0 14 14.285a6.7 6.7 0 0 0-2.97.768l-1.062-1.84a.314.314 0 0 0-.427-.112.306.306 0 0 0-.114.423l1.05 1.816A6.135 6.135 0 0 0 7.5 20h9a6.135 6.135 0 0 0-2.977-4.66zM10.5 18a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM6.804 7.418 5.755 5.6a.306.306 0 0 1 .114-.423.314.314 0 0 1 .427.113l1.063 1.837A9.02 9.02 0 0 1 14 5.887a9.02 9.02 0 0 1 6.641 3.24l1.063-1.837a.314.314 0 0 1 .427-.113c.152.087.203.275.114.423l-1.049 1.818C22.686 10.696 24 13.19 24 16H0C0 13.19 1.314 10.696 3.196 9.418zM14 7.387a7.2 7.2 0 0 0-7.017 5.613h14.034A7.2 7.2 0 0 0 14 7.387z" />
    </svg>
  ),
  windows: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
    </svg>
  ),
}

export default function PlatformsSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">Available Now</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Your platform.{' '}
            <span className="gradient-text">Your choice.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            PPPlayer runs on the devices you already own. Pick your platform and start listening for free.
          </p>
        </motion.div>

        {/* Platform cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {PLATFORMS.map((platform) => (
            <motion.div
              key={platform.id}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 280, damping: 18 }}
              className="group gradient-border rounded-3xl p-7 flex flex-col gap-5 cursor-pointer hover:shadow-[0_20px_60px_rgba(239,68,68,0.15)] transition-shadow duration-300"
            >
              {/* Icon + badge */}
              <div className="flex items-start justify-between">
                <div className={`text-transparent bg-gradient-to-br ${platform.color} [&_svg]:fill-current`}>
                  {PlatformIcons[platform.id]}
                </div>
                <span className="text-xs font-semibold text-slate-500 border border-white/10 rounded-full px-3 py-1">
                  {platform.badge}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-1">{platform.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{platform.description}</p>
              </div>

              {/* Download button */}
              <Button href={platform.href} variant="gradient" size="md" className="w-full">
                <Download size={16} />
                Download for {platform.name}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
