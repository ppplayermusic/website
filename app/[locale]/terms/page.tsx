import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata'});
  return {
    title: t('termsTitle'),
    description: t('termsDesc')
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'terms'
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
              <p>{t("sections.s2.p")}</p>
              <ul className="list-disc list-inside space-y-2 text-slate-400 mt-2">
                <li>{t("sections.s2.li1")}</li>
                <li>{t("sections.s2.li2")}</li>
                <li>{t("sections.s2.li3")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">{t("sections.s3.title")}</h2>
              <p>{t("sections.s3.p")}</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">{t("sections.s4.title")}</h2>
              <p>
                {t("sections.s4.p")}
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">{t("sections.s5.title")}</h2>
              <p>
                {t("sections.s5.p")}
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">{t("sections.s6.title")}</h2>
              <p>
                {t("sections.s6.p")}
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">{t("sections.s7.title")}</h2>
              <p>
                {t("sections.s7.p")}
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">{t("sections.s8.title")}</h2>
              <p>
                Questions about these terms? Reach us at{' '}
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
