import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import DiscoverSection from '@/components/sections/DiscoverSection'
import GoDeeperSection from '@/components/sections/GoDeeperSection'
import PressPlaySection from '@/components/sections/PressPlaySection'
import ArtistRadioSection from '@/components/sections/ArtistRadioSection'
import NoAccountSection from '@/components/sections/NoAccountSection'
import PlatformsSection from '@/components/sections/PlatformsSection'
import FeatureGallerySection from '@/components/sections/FeatureGallerySection'
import DownloadCTA from '@/components/sections/DownloadCTA'
import OpenSourceSection from '@/components/sections/OpenSourceSection'

import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata'});
  return {
    title: t('homeTitle'),
    description: t('homeDesc'),
    openGraph: {
      title: t('homeTitle'),
      description: t('homeDesc'),
    },
    twitter: {
      title: t('homeTitle'),
      description: t('homeDesc'),
    },
    alternates: {
      canonical: locale === 'en' ? '/' : `/${locale}`,
      languages: {
        'en': '/',
        'pt-BR': '/pt-BR',
        'es': '/es',
        'ru': '/ru',
        'tr': '/tr',
        'fr': '/fr',
        'de': '/de',
        'hi': '/hi',
        'it': '/it',
        'ja': '/ja',
        'ko': '/ko'
      }
    }
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Navbar />
      <main className="bg-[var(--color-bg-base)]">
        <HeroSection />
        <DiscoverSection />
        <GoDeeperSection />
        <PressPlaySection />
        <ArtistRadioSection />
        <FeatureGallerySection />
        <NoAccountSection />
        <PlatformsSection />
        <OpenSourceSection />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  )
}
