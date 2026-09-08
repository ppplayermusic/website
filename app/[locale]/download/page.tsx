
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PlatformsSection from '@/components/sections/PlatformsSection'
import PlatformCardsSection from '@/components/sections/PlatformCardsSection'
import DownloadCTA from '@/components/sections/DownloadCTA'
import FAQSection from '@/components/sections/FAQSection'
import { SpotlightText } from '@/components/ui/SpotlightText'

import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata'});
  return {
    title: t('downloadTitle'),
    description: t('downloadDesc')
  };
}

export default async function DownloadPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'downloadPage'
  });
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative pt-32 pb-16 text-center overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 pointer-events-none flex items-start justify-center">
            <div className="absolute top-[-10%] w-[800px] h-[500px] bg-red-600/10 rounded-[100%] blur-[120px] mix-blend-screen" />
            <div className="absolute top-[20%] w-[600px] h-[400px] bg-blue-600/10 rounded-[100%] blur-[120px] mix-blend-screen opacity-50" />
          </div>
          
          <div className="relative max-w-4xl mx-auto px-4 z-10">
            <div className="flex justify-center mb-8">
              <a href="#download" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-white border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl hover:bg-white/10 transition-colors group">
                <span className="opacity-90">{t("badge")}</span>
                <span className="text-white/40 group-hover:text-white transition-colors group-hover:translate-x-0.5 duration-300">→</span>
              </a>
            </div>
            
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.95] cursor-default">
              {t.rich("title", {
                gradient: (chunks) => <SpotlightText className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">{chunks}</SpotlightText>
              })}
            </h1>
            
            <p className="text-white/60 text-xl md:text-2xl font-medium tracking-tight mb-4 max-w-2xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
            
            <p className="text-white/40 text-sm md:text-base max-w-xl mx-auto">
              {t("desc")}
            </p>
          </div>
        </section>

        {/* Platform cards */}
        <PlatformCardsSection />

        {/* Visual composition */}
        <PlatformsSection />

        {/* System requirements note */}
        <section className="py-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="glass rounded-2xl p-5 border border-white/8 text-sm text-slate-500 flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
              <div>
                <span className="text-white font-semibold">{t("windowsReqLabel")}</span>{' '}
                {t("windowsReqDesc")}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <DownloadCTA />

        {/* FAQ */}
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
