'use client'

import React, { useState } from 'react'
import {useTranslations} from 'next-intl'
import { motion } from 'framer-motion'
import { SpotlightButton } from '@/components/ui/SpotlightButton'
import { SpotlightText } from '@/components/ui/SpotlightText'
import { SpotlightLogo } from '@/components/ui/SpotlightLogo'
import { DOWNLOAD_LINKS } from '@/lib/constants'
import { NotAvailableModal } from '@/components/ui/NotAvailableModal'

export default function DownloadCTA() {
  const t = useTranslations('downloadCTA');
  const [showModal, setShowModal] = useState(false);

  const handleNotAvailable = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <section id="download" className="relative py-32 md:py-48 bg-[var(--color-bg-base)] text-white overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-red-600/5 rounded-[100%] blur-[120px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-16 cursor-default">
              <SpotlightText className="text-white">{t("title")}</SpotlightText>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <SpotlightButton href="#" variant="dark" onClick={handleNotAvailable}>
                {t("getIos")}
              </SpotlightButton>
              <SpotlightButton href="#" variant="dark" onClick={handleNotAvailable}>
                {t("getAndroid")}
              </SpotlightButton>
              <SpotlightButton href={DOWNLOAD_LINKS.macos} variant="light" download>
                {t("getMac")}
              </SpotlightButton>
              <SpotlightButton href="#" variant="dark" onClick={handleNotAvailable}>
                {t("getWindows")}
              </SpotlightButton>
            </div>
          </motion.div>

          {/* Subtle Logo representation at the end */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            whileInView={{ opacity: 0.15, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mt-24 md:mt-32 pointer-events-none flex justify-center"
          >
            <SpotlightLogo 
              src="/logo.png" 
              alt="PPPlayer Logo Mark" 
              className="w-48 h-48 md:w-64 md:h-64 pointer-events-auto"
              imageClassName="rounded-[3rem] filter grayscale mix-blend-screen"
            />
          </motion.div>

        </div>
      </section>

      <NotAvailableModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
