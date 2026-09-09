import {Link} from '@/i18n/routing'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import {setRequestLocale} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  return {
    title: "Changelog | PPPlayer",
    description: "What's new in PPPlayer. A better listening experience.",
    openGraph: {
      title: "Changelog | PPPlayer",
      description: "What's new in PPPlayer. A better listening experience."
    },
    twitter: {
      title: "Changelog | PPPlayer",
      description: "What's new in PPPlayer. A better listening experience."
    },
    alternates: {
      canonical: locale === 'en' ? '/changelog' : `/${locale}/changelog`,
      languages: {
        'en': '/changelog',
        'pt-BR': '/pt-BR/changelog',
        'es': '/es/changelog',
        'ru': '/ru/changelog',
        'tr': '/tr/changelog',
        'fr': '/fr/changelog',
        'de': '/de/changelog'
      }
    }
  };
}

export default async function ChangelogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
          <div className="mb-20">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Changelog</h1>
            <p className="text-slate-400 text-lg">What&apos;s new in PPPlayer.</p>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-24">
            
            {/* Version 1.0.1 */}
            <div className="relative pl-8 md:pl-16">
              <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">v1.0.1</h2>
                <span className="text-slate-500 font-medium">September 9, 2026</span>
              </div>
              
              <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-2xl">
                A better listening experience.
              </p>

              <div className="space-y-10">
                <div>
                  <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">New</h3>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <span className="text-red-400 mt-0.5">✦</span>
                      <div>
                        <strong className="block text-white mb-1">Autoplay</strong>
                        <span className="text-slate-400 text-sm leading-relaxed block max-w-lg">Music keeps going with recommendations based on what you&apos;re listening to.</span>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-red-400 mt-0.5">✦</span>
                      <div>
                        <strong className="block text-white mb-1">Discover</strong>
                        <span className="text-slate-400 text-sm leading-relaxed block max-w-lg">Find music based on your listening history, favorite artists and playlists.</span>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-red-400 mt-0.5">✦</span>
                      <div>
                        <strong className="block text-white mb-1">Interactive Seekbar Tooltips</strong>
                        <span className="text-slate-400 text-sm leading-relaxed block max-w-lg">Added dynamic tooltips that perfectly follow your mouse cursor when hovering the player progress bar.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Improved</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4 items-center">
                      <span className="text-blue-400 text-sm">✦</span>
                      <span className="text-slate-300 text-sm font-medium">Faster startup</span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="text-blue-400 text-sm">✦</span>
                      <span className="text-slate-300 text-sm font-medium">Better playback recovery</span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="text-blue-400 text-sm">✦</span>
                      <span className="text-slate-300 text-sm font-medium">Improved macOS media controls</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Fixed</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4 items-center">
                      <span className="text-emerald-400 text-sm">✦</span>
                      <span className="text-slate-300 text-sm font-medium">Duplicate macOS media controls</span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="text-emerald-400 text-sm">✦</span>
                      <span className="text-slate-300 text-sm font-medium">Station active-track highlighting</span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="text-emerald-400 text-sm">✦</span>
                      <span className="text-slate-300 text-sm font-medium">Playback pausing/stopping unexpectedly when dragging the seekbar</span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="text-emerald-400 text-sm">✦</span>
                      <span className="text-slate-300 text-sm font-medium">Bottom player bar rendering fully transparent and unreadable on macOS when playing music</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Version 1.0.0 */}
            <div className="relative pl-8 md:pl-16">
              <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white/20" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-6">
                <h2 className="text-2xl font-bold text-white tracking-tight opacity-70">v1.0.0</h2>
                <span className="text-slate-500 font-medium">September 2026</span>
              </div>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-2xl">
                The first release of PPPlayer.
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-4 items-center">
                  <span className="text-white/40 text-sm">✦</span>
                  <span className="text-slate-400 text-sm font-medium">Spotify-powered music metadata</span>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="text-white/40 text-sm">✦</span>
                  <span className="text-slate-400 text-sm font-medium">YouTube-powered audio playback</span>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="text-white/40 text-sm">✦</span>
                  <span className="text-slate-400 text-sm font-medium">Playlists, favorites and listening history</span>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="text-white/40 text-sm">✦</span>
                  <span className="text-slate-400 text-sm font-medium">macOS, Windows and Linux support</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-24 pt-8 border-t border-white/10">
            <Link href="/" className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">
              ← Back to PPPlayer
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
