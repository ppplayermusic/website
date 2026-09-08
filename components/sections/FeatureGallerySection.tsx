'use client'
import Image from 'next/image';
import React from 'react'
import {useTranslations} from 'next-intl'
import { motion } from 'framer-motion'
import { SpotlightText } from '@/components/ui/SpotlightText'
import { MacOSWindowFrame } from '@/components/ui/MacOSWindowFrame'

export default function FeatureGallerySection() {
  const t = useTranslations('featureGallery');
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-base)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight cursor-default">
            <SpotlightText>{t("title")}</SpotlightText>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <MacOSWindowFrame title="Search">
              <Image src="/images/screenshot-search-albums.png" alt="Search" width={1024} height={576} className="w-full h-auto" />
            </MacOSWindowFrame>
            <h3 className="text-3xl font-bold mt-8 tracking-tight">{t("searchTitle")}</h3>
            <p className="mt-3 text-lg text-slate-400">{t("searchDesc")}</p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <MacOSWindowFrame title="Queue">
              <Image src="/images/screenshot-queue.png" alt="Queue" width={1024} height={576} className="w-full h-auto" />
            </MacOSWindowFrame>
            <h3 className="text-3xl font-bold mt-8 tracking-tight">{t("queueTitle")}</h3>
            <p className="mt-3 text-lg text-slate-400">{t("queueDesc")}</p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <MacOSWindowFrame title="Favorites">
              <Image src="/images/screenshot-favorites.png" alt="Favorites" width={1024} height={576} className="w-full h-auto" />
            </MacOSWindowFrame>
            <h3 className="text-3xl font-bold mt-8 tracking-tight">{t("favTitle")}</h3>
            <p className="mt-3 text-lg text-slate-400">{t("favDesc")}</p>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <MacOSWindowFrame title="Native Context">
              <Image src="/images/screenshot-context-menu.png" alt="Context Menu" width={1024} height={576} className="w-full h-auto" />
            </MacOSWindowFrame>
            <h3 className="text-3xl font-bold mt-8 tracking-tight">{t("contextTitle")}</h3>
            <p className="mt-3 text-lg text-slate-400">{t("contextDesc")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
