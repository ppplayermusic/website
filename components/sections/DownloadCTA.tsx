'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { DOWNLOAD_LINKS } from '@/lib/constants'

const buttons = [
  {
    label: 'Download for iOS',
    href: DOWNLOAD_LINKS.ios,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    variant: 'gradient' as const,
  },
  {
    label: 'Download for Android',
    href: DOWNLOAD_LINKS.android,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.523 15.34l1.05-1.816a.306.306 0 0 0-.114-.424.314.314 0 0 0-.427.113l-1.063 1.84A6.7 6.7 0 0 0 14 14.285a6.7 6.7 0 0 0-2.97.768l-1.062-1.84a.314.314 0 0 0-.427-.112.306.306 0 0 0-.114.423l1.05 1.816A6.135 6.135 0 0 0 7.5 20h9a6.135 6.135 0 0 0-2.977-4.66zM10.5 18a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8.804 7.418 7.755 5.6a.306.306 0 0 1 .114-.423.314.314 0 0 1 .427.113l1.063 1.837A9.02 9.02 0 0 1 14 5.887a9.02 9.02 0 0 1 6.641 3.24l1.063-1.837a.314.314 0 0 1 .427-.113c.152.087.203.275.114.423l-1.049 1.818C22.686 10.696 24 13.19 24 16H0C0 13.19 1.314 10.696 3.196 9.418zM14 7.387a7.2 7.2 0 0 0-7.017 5.613h14.034A7.2 7.2 0 0 0 14 7.387z" />
      </svg>
    ),
    variant: 'glass' as const,
  },
  {
    label: 'Download for Windows',
    href: DOWNLOAD_LINKS.windows,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    ),
    variant: 'glass' as const,
  },
]

export default function DownloadCTA() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden text-center"
        >
          {/* BG */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/80 via-[#0a0505] to-slate-950/60" />
          <div className="absolute inset-0 border border-white/8 rounded-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-b from-red-600/15 to-transparent pointer-events-none" />

          <div className="relative z-10 py-16 px-6 sm:px-14">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-green-300 border border-green-500/30 bg-green-500/10 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Free · No Account Required
            </motion.div>

            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-4">
              Get PPPlayer{' '}
              <span className="gradient-text">Free</span>
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl max-w-xl mx-auto mb-10">
              Download now for iOS, Android, or Windows. Free forever. No account required.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {buttons.map((btn) => (
                <Button key={btn.label} href={btn.href} variant={btn.variant} size="lg">
                  {btn.icon}
                  {btn.label}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
