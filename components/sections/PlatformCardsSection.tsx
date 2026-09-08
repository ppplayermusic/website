'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Monitor, Smartphone, Apple, Laptop } from 'lucide-react'
import { DOWNLOAD_LINKS } from '@/lib/constants'
import { NotAvailableModal } from '@/components/ui/NotAvailableModal'
import { SpotlightCard } from '@/components/ui/SpotlightCard'

export default function PlatformCardsSection() {
  const t = useTranslations('platformCards');
  const [showModal, setShowModal] = useState(false);

  const handleNotAvailable = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const platforms = [
    {
      id: 'macos',
      icon: <Apple className="w-10 h-10 text-white" strokeWidth={1.5} />,
      name: t('macos.name'),
      label: t('macos.label'),
      description: t('macos.desc'),
      badge: t('macos.badge'),
      href: DOWNLOAD_LINKS.macos,
      color: 'rgba(255, 255, 255, 0.1)',
      gradient: 'from-white/10 to-transparent',
      isAvailable: true,
    },
    {
      id: 'windows',
      icon: <Monitor className="w-10 h-10 text-white" strokeWidth={1.5} />,
      name: t('windows.name'),
      label: t('windows.label'),
      description: t('windows.desc'),
      badge: t('windows.badge'),
      href: DOWNLOAD_LINKS.windows,
      color: 'rgba(6, 182, 212, 0.1)',
      gradient: 'from-cyan-500/10 to-transparent',
      isAvailable: false,
    },
    {
      id: 'ios',
      icon: <Smartphone className="w-10 h-10 text-white" strokeWidth={1.5} />,
      name: t('ios.name'),
      label: t('ios.label'),
      description: t('ios.desc'),
      badge: t('ios.badge'),
      href: DOWNLOAD_LINKS.ios,
      color: 'rgba(255, 255, 255, 0.05)',
      gradient: 'from-slate-500/10 to-transparent',
      isAvailable: false,
    },
    {
      id: 'android',
      icon: <Smartphone className="w-10 h-10 text-white" strokeWidth={1.5} />,
      name: t('android.name'),
      label: t('android.label'),
      description: t('android.desc'),
      badge: t('android.badge'),
      href: DOWNLOAD_LINKS.android,
      color: 'rgba(34, 197, 94, 0.1)',
      gradient: 'from-green-500/10 to-transparent',
      isAvailable: false,
    },
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-[var(--color-bg-base)] text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, i) => (
              <motion.a
                key={platform.id}
                href={platform.isAvailable ? platform.href : '#'}
                onClick={platform.isAvailable ? undefined : handleNotAvailable}
                download={platform.isAvailable ? true : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group outline-none"
              >
                <SpotlightCard 
                  spotlightColor={platform.color}
                  className={`h-full flex flex-col p-8 transition-transform duration-500 ease-out group-hover:scale-[1.02] ${platform.isAvailable ? '' : 'opacity-70 group-hover:opacity-100'}`}
                >
                  {/* Subtle top gradient */}
                  <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${platform.gradient} opacity-50 pointer-events-none`} />
                  
                  <div className="relative z-10 mb-6">
                    <div className="p-3 bg-white/5 rounded-2xl w-fit border border-white/10 backdrop-blur-md shadow-2xl">
                      {platform.icon}
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold tracking-tight text-white">{platform.name}</h3>
                      {!platform.isAvailable && (
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white/60">
                          Soon
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-medium tracking-wide text-white/50 block mb-4">
                      {platform.label}
                    </span>
                    <p className="text-base text-white/70 leading-relaxed font-light">
                      {platform.description}
                    </p>
                  </div>
                  
                  <div className="relative z-10 mt-8">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                      {platform.badge}
                      <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </SpotlightCard>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <NotAvailableModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
