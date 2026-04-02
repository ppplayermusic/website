import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PlatformsSection from '@/components/sections/PlatformsSection'
import DownloadCTA from '@/components/sections/DownloadCTA'
import FAQSection from '@/components/sections/FAQSection'

export const metadata: Metadata = {
  title: 'Download PPPlayer Free',
  description:
    'Download PPPlayer for iOS, Android, or Windows. Free music app — no account required. Start listening in minutes.',
}

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 text-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-red-700/10 rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-green-300 border border-green-500/30 bg-green-500/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              100% Free · No Account Required
            </span>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">
              Download{' '}
              <span className="gradient-text">PPPlayer Free</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed mb-4">
              Pick your platform. Start listening in minutes.
            </p>
            <p className="text-slate-500 text-base">
              No account required. No email. No signup. Just music.
            </p>
          </div>
        </section>

        {/* Platform cards */}
        <PlatformsSection />

        {/* System requirements note */}
        <section className="py-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="glass rounded-2xl p-5 border border-white/8 text-sm text-slate-500 flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
              <div>
                <span className="text-white font-semibold">Windows system requirements:</span>{' '}
                Windows 10 or later (64-bit). ~50 MB download. No Microsoft Store required.
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
