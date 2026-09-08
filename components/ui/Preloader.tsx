'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SpotlightLogo } from './SpotlightLogo'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // If the document is already fully loaded (e.g., during client-side navigation or fast loads)
    // we still want to show it briefly for the premium effect, but we can shorten the delay.
    const isAlreadyLoaded = document.readyState === 'complete'
    
    const finishLoading = () => {
      // Add a small artificial delay so it feels deliberate and premium,
      // and doesn't just flash on the screen.
      setTimeout(() => setIsLoading(false), isAlreadyLoaded ? 400 : 800)
    }

    if (isAlreadyLoaded) {
      finishLoading()
    } else {
      window.addEventListener('load', finishLoading)
      return () => window.removeEventListener('load', finishLoading)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[#020202] flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <SpotlightLogo
              src="/logo.png"
              alt="PPPlayer"
              width={80}
              height={80}
              className="rounded-2xl"
              imageClassName="rounded-2xl shadow-2xl"
            />
            {/* Subtle pulse loading indicator */}
            <motion.div 
              className="w-32 h-1 bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-red-600"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
