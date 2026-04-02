'use client'

import { motion, type Variants } from 'framer-motion'
import { Compass, GitBranch, Radio, ListMusic, LayoutGrid, Music2 } from 'lucide-react'
import { FEATURES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Compass,
  GitBranch,
  Radio,
  ListMusic,
  LayoutGrid,
  Music2,
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function FeaturesGrid() {
  return (
    <section className="py-24 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Built for{' '}
            <span className="gradient-text">music lovers</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            PPPlayer packs deep music features into a clean, fast experience. Everything you need, nothing you don&apos;t.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {FEATURES.map((feature, idx) => {
            const Icon = iconMap[feature.icon]
            const gradients = [
              'from-purple-500 to-pink-500',
              'from-pink-500 to-rose-500',
              'from-blue-500 to-purple-500',
              'from-violet-500 to-purple-600',
              'from-emerald-500 to-teal-500',
              'from-orange-500 to-pink-500',
            ]
            return (
              <motion.div
                key={feature.id}
                variants={item}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group glass rounded-2xl p-6 border border-white/8 hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradients[idx]} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg font-semibold">
            All of this —{' '}
            <span className="gradient-text">completely free. No account required.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
