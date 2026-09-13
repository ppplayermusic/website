"use client"

import {useTranslations} from 'next-intl'
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie } from "lucide-react"

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    __tcfapi?: (command: string, version: number, callback: (tcData: { gdprApplies?: boolean; [key: string]: unknown }, success: boolean) => void) => void;
    zaraz?: {
      consent?: {
        setAll: (granted: boolean) => void;
      };
    };
  }
}

export default function CookieBanner() {
  const t = useTranslations('cookie');
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Check if consent is already set
    const consent = localStorage.getItem("cookie_consent")
    if (consent) {
      return;
    }

    // Delay slightly to allow Google's CMP (__tcfapi) to initialize if it's loading
    const timer = setTimeout(() => {
      // Check if Google's CMP is active and GDPR applies
      if (typeof window !== 'undefined' && typeof window.__tcfapi === 'function') {
        window.__tcfapi('getTCData', 2, (tcData, success) => {
          if (success && tcData.gdprApplies) {
            // Google CMP handles this user. Do NOT show our banner.
            setShow(false);
          } else {
            // GDPR doesn't apply (e.g., US user), show our banner.
            setShow(true);
          }
        });
      } else {
        // Fallback: no CMP found, show our banner
        setShow(true);
      }
    }, 1500);

    return () => clearTimeout(timer)
  }, [])

  const handleConsent = (granted: boolean) => {
    setShow(false)
    
    // Save to local storage
    localStorage.setItem("cookie_consent", granted ? "granted" : "denied")

    const analyticsProvider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER || 'gtm';

    if (analyticsProvider === 'gtm') {
      // Update gtag consent
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          ad_storage: granted ? "granted" : "denied",
          ad_user_data: granted ? "granted" : "denied",
          ad_personalization: granted ? "granted" : "denied",
          analytics_storage: granted ? "granted" : "denied",
        })
      }
    } else if (analyticsProvider === 'zaraz') {
      // Update Zaraz consent
      if (typeof window !== "undefined" && window.zaraz?.consent) {
        if (granted) {
          window.zaraz.consent.setAll(true);
        } else {
          window.zaraz.consent.setAll(false);
        }
      }
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-safe sm:p-6"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              
              <div className="flex items-start gap-4 md:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Cookie className="h-6 w-6 text-white/70" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-white">{t("title")}</h3>
                  <p className="text-sm text-white/60">
                    {t("desc")}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => handleConsent(false)}
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {t("decline")}
                </button>
                <button
                  onClick={() => handleConsent(true)}
                  className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95"
                >
                  {t("accept")}
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
