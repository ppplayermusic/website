import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ValueStrip from '@/components/sections/ValueStrip'
import PlatformsSection from '@/components/sections/PlatformsSection'
import FeaturesGrid from '@/components/sections/FeaturesGrid'
import ScreenshotGallery from '@/components/sections/ScreenshotGallery'
import FrictionlessSection from '@/components/sections/FrictionlessSection'
import DownloadCTA from '@/components/sections/DownloadCTA'
import FAQSection from '@/components/sections/FAQSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ValueStrip />
        <PlatformsSection />
        <FeaturesGrid />
        <ScreenshotGallery />
        <FrictionlessSection />
        <DownloadCTA />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
