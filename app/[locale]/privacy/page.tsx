
import {Link} from '@/i18n/routing'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata'});
  return {
    title: t('privacyTitle'),
    description: t('privacyDesc'),
    openGraph: {
      title: t('privacyTitle'),
      description: t('privacyDesc')
    },
    twitter: {
      title: t('privacyTitle'),
      description: t('privacyDesc')
    },
    alternates: {
      canonical: locale === 'en' ? '/privacy' : `/${locale}/privacy`,
      languages: {
        'en': '/privacy',
        'pt-BR': '/pt-BR/privacy',
        'es': '/es/privacy',
        'ru': '/ru/privacy',
        'tr': '/tr/privacy',
        'fr': '/fr/privacy',
        'de': '/de/privacy',
        'hi': '/hi/privacy',
        'it': '/it/privacy',
        'ja': '/ja/privacy',
        'ko': '/ko/privacy'
      }
    }
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'privacy'
  });
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
          <h1 className="text-4xl font-black tracking-tight mb-2">{t("title")}</h1>
          <p className="text-slate-500 text-sm mb-10">{t("lastUpdated")}</p>

          <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-white text-xl font-bold mb-3">{t("sections.s1.title")}</h2>
              <p>
                {t("sections.s1.p")}
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">{t("sections.s2.title")}</h2>
              <p>
                {t("sections.s2.p")}
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">{t("sections.s3.title")}</h2>
              <p>{t("sections.s3.p1")}</p>
              <ul className="list-disc list-inside space-y-2 text-slate-400 mt-2">
                <li>{t("sections.s3.li1")}</li>
                <li>{t("sections.s3.li2")}</li>
                <li>{t("sections.s3.li3")}</li>
              </ul>
              <p className="mt-3">{t("sections.s3.p2")}</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">{t("sections.s4.title")}</h2>
              <p>{t("sections.s4.p")}</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">{t("sections.s5.title")}</h2>
              <p>{t("sections.s5.p")}</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">{t("sections.s6.title")}</h2>
              <p>{t("sections.s6.p")}</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">{t("sections.s7.title")}</h2>
              <p>{t("sections.s7.p")}</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">{t("sections.s8.title")}</h2>
              <p>{t("sections.s8.p")}</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">{t("sections.s9.title")}</h2>
              <p>
                Questions about this policy? Contact us at{' '}
                <a href="mailto:contact@ppplayer.com" className="text-red-400 hover:text-red-300">
                  contact@ppplayer.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/8">
            <Link href="/" className="text-red-400 hover:text-red-300 text-sm font-medium">
              {t("back")}
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
