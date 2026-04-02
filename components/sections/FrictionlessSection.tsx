'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { DOWNLOAD_LINKS } from '@/lib/constants'

const points = [
  'No email address required',
  'No password to remember',
  'No verification step',
  'No subscription prompt',
  'Just download, open, and listen',
]

export default function FrictionlessSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/60 via-[#0d0a0a] to-slate-950/40" />
          <div className="absolute inset-0 border border-white/8 rounded-3xl" />

          {/* Glow blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600/10 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10 p-10 sm:p-14 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: text */}
              <div>
                <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-4">
                  Zero Friction
                </p>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
                  No signup.
                  <br />
                  No account.
                  <br />
                  <span className="gradient-text">No problem.</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  While other apps trap you behind registration walls, PPPlayer gets out of your way. You shouldn&apos;t need an account to listen to music.
                </p>
              </div>

              {/* Right: check list + CTA */}
              <div className="flex flex-col gap-5">
                <ul className="space-y-3">
                  {points.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 size={18} className="text-red-500 flex-shrink-0" />
                      <span className="text-slate-300 font-medium">{point}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button href={DOWNLOAD_LINKS.ios} size="lg" className="group">
                    Download Free Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
