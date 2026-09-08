'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Monitor, Smartphone, Apple, Laptop } from 'lucide-react'
import { DOWNLOAD_LINKS } from '@/lib/constants'
import { NotAvailableModal } from '@/components/ui/NotAvailableModal'

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
      icon: <Laptop className="w-8 h-8 mb-4 text-slate-300" />,
      name: t('macos.name'),
      label: t('macos.label'),
      description: t('macos.desc'),
      badge: t('macos.badge'),
      href: DOWNLOAD_LINKS.macos,
      color: 'border-slate-500/30 hover:border-slate-400/50',
      isAvailable: true,
    },
    {
      id: 'windows',
      icon: <Monitor className="w-8 h-8 mb-4 text-cyan-400" />,
      name: t('windows.name'),
      label: t('windows.label'),
      description: t('windows.desc'),
      badge: t('windows.badge'),
      href: DOWNLOAD_LINKS.windows,
      color: 'border-cyan-500/20 hover:border-cyan-400/40',
      isAvailable: false,
    },
    {
      id: 'ios',
      icon: <Apple className="w-8 h-8 mb-4 text-slate-100" />,
      name: t('ios.name'),
      label: t('ios.label'),
      description: t('ios.desc'),
      badge: t('ios.badge'),
      href: DOWNLOAD_LINKS.ios,
      color: 'border-slate-200/20 hover:border-slate-100/40',
      isAvailable: false,
    },
    {
      id: 'android',
      icon: <Smartphone className="w-8 h-8 mb-4 text-green-400" />,
      name: t('android.name'),
      label: t('android.label'),
      description: t('android.desc'),
      badge: t('android.badge'),
      href: DOWNLOAD_LINKS.android,
      color: 'border-green-500/20 hover:border-green-400/40',
      isAvailable: false,
    },
  ];

  return (
    <>
      <section className="py-12 bg-[var(--color-bg-base)] text-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, i) => (
              <motion.a
                key={platform.id}
                href={platform.isAvailable ? platform.href : '#'}
                onClick={platform.isAvailable ? undefined : handleNotAvailable}
                download={platform.isAvailable ? true : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col items-center text-center p-8 rounded-3xl border bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 group ${platform.color}`}
              >
                {platform.icon}
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {platform.label}
                </span>
                <h3 className="text-2xl font-semibold mb-3">{platform.name}</h3>
                <p className="text-sm text-slate-500 mb-6 flex-grow">
                  {platform.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-slate-300 group-hover:bg-white/20 transition-colors">
                    {platform.badge}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <NotAvailableModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
