'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import {useTranslations} from 'next-intl'
import { motion } from 'framer-motion'
import { DOWNLOAD_LINKS } from '@/lib/constants'
import { SpotlightText } from '@/components/ui/SpotlightText'
import { SpotlightButton } from '@/components/ui/SpotlightButton'
import { MacOSWindowFrame } from '@/components/ui/MacOSWindowFrame'
import { NotAvailableModal } from '@/components/ui/NotAvailableModal'

export default function HeroSection() {
  const t = useTranslations('hero');
  const [showModal, setShowModal] = useState(false);

  const handleNotAvailable = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-16 overflow-hidden flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full text-center z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 leading-[0.9] cursor-default">
              <SpotlightText className="text-white">{t("title1")}</SpotlightText><br />
              <span className="text-slate-400">
                <SpotlightText>{t("title2")}</SpotlightText>
              </span>
            </h1>
            <p className="text-slate-300 text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto">
              {t("desc")}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <SpotlightButton href="#" variant="light" onClick={handleNotAvailable}>
                {t("getIos")}
              </SpotlightButton>
              <SpotlightButton href="#" variant="dark" onClick={handleNotAvailable}>
                {t("getAndroid")}
              </SpotlightButton>
              <SpotlightButton href={DOWNLOAD_LINKS.macos} variant="dark" download>
                {t("getMac")}
              </SpotlightButton>
              <SpotlightButton href="#" variant="dark" onClick={handleNotAvailable}>
                {t("getWindows")}
              </SpotlightButton>
            </div>
          </motion.div>
        </div>

        {/* Enormous desktop interface, partially extending beyond the viewport */}
        <div className="w-full flex justify-center px-4 md:px-0" style={{ perspective: '2000px' }}>
          <motion.div
            initial={{ opacity: 0, y: 150, rotateX: 15, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top center" }}
            className="w-full max-w-5xl mt-16 md:mt-24 translate-y-12 md:translate-y-24"
          >
            <MacOSWindowFrame title="PPPlayer">
              <Image
                src="/images/screenshot-home.png"
                alt="PPPlayer App Interface"
                width={1920}
                height={1080}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </MacOSWindowFrame>
          </motion.div>
        </div>
      </section>

      <NotAvailableModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
