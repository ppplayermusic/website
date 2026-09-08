'use client'

import React, { useState } from 'react'
import {useTranslations} from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { SpotlightButton } from '@/components/ui/SpotlightButton'
import { SpotlightText } from '@/components/ui/SpotlightText'
import { SpotlightLogo } from '@/components/ui/SpotlightLogo'
import { DOWNLOAD_LINKS } from '@/lib/constants'

export default function DownloadCTA() {
  const t = useTranslations('downloadCTA');
  const [showModal, setShowModal] = useState(false);

  const handleNotAvailable = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <section id="download" className="py-32 md:py-48 bg-white text-black overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-16 cursor-default">
              <SpotlightText>{t("title")}</SpotlightText>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <SpotlightButton href="#" variant="dark" onClick={handleNotAvailable}>
                {t("getIos")}
              </SpotlightButton>
              <SpotlightButton href="#" variant="light" onClick={handleNotAvailable}>
                {t("getAndroid")}
              </SpotlightButton>
              <SpotlightButton href={DOWNLOAD_LINKS.macos} variant="light" download>
                {t("getMac")}
              </SpotlightButton>
              <SpotlightButton href="#" variant="light" onClick={handleNotAvailable}>
                {t("getWindows")}
              </SpotlightButton>
            </div>
          </motion.div>

          {/* Subtle Logo representation at the end */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mt-24 md:mt-32 opacity-20 pointer-events-none"
          >
            <SpotlightLogo 
              src="/logo.png" 
              alt="PPPlayer Logo Mark" 
              className="w-48 h-48 md:w-64 md:h-64 pointer-events-auto"
              imageClassName="rounded-[3rem] filter grayscale"
            />
          </motion.div>

        </div>
      </section>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#050505] text-white border border-white/10 shadow-2xl rounded-3xl p-8 max-w-sm w-full relative text-center"
            >
              <div className="w-12 h-12 bg-white/5 text-white/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t("notAvailableTitle")}</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                {t("notAvailable")}
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-white text-black font-semibold rounded-full py-3 hover:bg-slate-200 transition-colors"
              >
                {t("okayBtn")}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
