import { PROJECT_LINKS } from '@/lib/constants'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQSection from '@/components/sections/FAQSection'
import { SpotlightText } from '@/components/ui/SpotlightText'

import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata'});
  return {
    title: t('supportTitle'),
    description: t('supportDesc'),
    openGraph: {
      title: t('supportTitle'),
      description: t('supportDesc')
    },
    twitter: {
      title: t('supportTitle'),
      description: t('supportDesc')
    },
    alternates: {
      canonical: locale === 'en' ? '/support' : `/${locale}/support`,
      languages: {
        'en': '/support',
        'pt-BR': '/pt-BR/support',
        'es': '/es/support',
        'ru': '/ru/support',
        'tr': '/tr/support',
        'fr': '/fr/support',
        'de': '/de/support',
        'hi': '/hi/support',
        'it': '/it/support',
        'ja': '/ja/support',
        'ko': '/ko/support'
      }
    }
  };
}

export default async function SupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'support'
  });
  
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12">
        <section className="text-center px-4 sm:px-6">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">{t("title")}</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            <SpotlightText>
              {t("subtitle")}
            </SpotlightText>
          </h1>
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[var(--color-bg-base)]/50 border border-white/10 rounded-2xl p-8 backdrop-blur-md text-left flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-4">{t("contactTitle")}</h2>
            <p className="text-slate-400 text-lg mb-8 text-center max-w-md">
              {t("contactDesc")}
            </p>
            <a 
              href="mailto:contact@ppplayer.com"
              className="mt-auto inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-white rounded-full hover:bg-slate-200 transition-colors"
            >
              contact@ppplayer.com
            </a>
          </div>
          <div className="bg-[var(--color-bg-base)]/50 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-4">{t('githubTitle')}</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md">{t('githubDesc')}</p>
            <a href={PROJECT_LINKS.organization} className="mt-auto inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-white rounded-full hover:bg-slate-200 transition-colors">{t('githubBtn')}</a>
          </div>
          </div>
        </section>

        <div className="mt-8">
          <FAQSection />
        </div>
      </main>
      <Footer />
    </>
  )
}
