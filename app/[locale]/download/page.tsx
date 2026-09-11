
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PlatformsSection from '@/components/sections/PlatformsSection'
import PlatformCardsSection from '@/components/sections/PlatformCardsSection'
import DownloadCTA from '@/components/sections/DownloadCTA'
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

            
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.95] cursor-default">
              {t.rich("title", {
                gradient: (chunks) => <SpotlightText className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 pb-[0.2em]">{chunks}</SpotlightText>
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


        {/* Final CTA */}
        <DownloadCTA />
      </main>
      <Footer />
    </>
  )
}
