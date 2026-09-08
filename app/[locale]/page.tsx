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

import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata'});
  return {
    title: t('homeTitle'),
    description: t('homeDesc')
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
        <DownloadCTA />
      </main>
      <Footer />
    </>
  )
}
