import {useTranslations} from 'next-intl'
import { PROJECT_LINKS } from '@/lib/constants'

export default function OpenSourceSection() {
  const t = useTranslations('openSource');

  return (
    <section id="open-source" className="scroll-mt-24 border-y border-white/5 py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">{t('badge')}</p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">{t('title')}</h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-8">{t('desc')}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={PROJECT_LINKS.source} className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-slate-200 transition-colors">{t('source')}</a>
          <a href={PROJECT_LINKS.contribute} className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors">{t('contribute')}</a>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-400">
          <a href={PROJECT_LINKS.issues} className="underline underline-offset-4 hover:text-white">{t('issues')}</a>
          <a href={PROJECT_LINKS.license} className="underline underline-offset-4 hover:text-white">{t('license')}</a>
        </div>
      </div>
    </section>
  )
}
