'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'

interface NotAvailableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotAvailableModal({ isOpen, onClose }: NotAvailableModalProps) {
  const t = useTranslations('downloadCTA');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
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
              onClick={onClose}
              className="w-full bg-white text-black font-semibold rounded-full py-3 hover:bg-slate-200 transition-colors"
            >
              {t("okayBtn")}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
