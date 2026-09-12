'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Smartphone } from 'lucide-react'

export interface DownloadOption {
  id: string;
  name: string;
  badge?: string;
  isAvailable: boolean;
  href: string;
  icon?: React.ReactNode;
  onSelect?: () => void;
}

interface DownloadOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  options: DownloadOption[];
}

export function DownloadOptionsModal({ isOpen, onClose, title, description, options }: DownloadOptionsModalProps) {
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
            className="bg-[#050505] text-white border border-white/10 shadow-2xl rounded-3xl p-8 max-w-sm w-full relative text-left"
          >
            <div className="w-12 h-12 bg-white/5 text-white/50 rounded-full flex items-center justify-center mb-6 border border-white/10">
              <Download className="w-5 h-5" />
            </div>
            
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {options.map((option) => (
                <a
                  key={option.id}
                  href={option.isAvailable ? option.href : '#'}
                  onClick={(e) => {
                    if (!option.isAvailable) {
                      e.preventDefault();
                    }
                    if (option.onSelect) {
                      option.onSelect();
                    }
                  }}
                  className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                    option.isAvailable 
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
                      : 'bg-white/5 border-white/5 opacity-60 cursor-default'
                  }`}
                  download={option.isAvailable ? true : undefined}
                >
                  <div className="flex-shrink-0">
                    {option.icon || <Smartphone className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />}
                  </div>
                  <div className="flex-grow flex flex-col items-start text-left">
                    <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                      {option.name}
                    </span>
                    {!option.isAvailable && option.badge && (
                      <span className="text-[10px] font-medium tracking-wider text-white/50 uppercase mt-0.5">
                        {option.badge}
                      </span>
                    )}
                  </div>
                  {option.isAvailable && (
                    <div className="flex-shrink-0">
                       <svg className="w-5 h-5 text-white/30 group-hover:text-white/70 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                       </svg>
                    </div>
                  )}
                </a>
              ))}
            </div>

            <button
              onClick={onClose}
              className="w-full bg-white text-black font-semibold rounded-full py-3 hover:bg-slate-200 transition-colors"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
