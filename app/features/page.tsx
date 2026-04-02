import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FeaturesGrid from '@/components/sections/FeaturesGrid'
import DownloadCTA from '@/components/sections/DownloadCTA'

export const metadata: Metadata = {
  title: 'Features',
  description:
    "Explore PPPlayer's features: artist discovery, related artists, artist radio, genre exploration, and beautiful playback. All free, no account needed.",
}

const detailedFeatures = [
  {
    title: 'Artist Discovery',
    desc: 'Find artists you\'ve never heard of. Browse rich profiles with bios, stats, and full discographies. PPPlayer makes it easy to go from one name to an entire world of new music.',
    color: 'from-purple-600 to-pink-500',
    tag: 'Explore',
  },
  {
    title: 'Related Artists',
    desc: 'Tap into artist connections. When you love an artist, PPPlayer shows you who else you\'ll likely love. Follow the thread as far as you want.',
    color: 'from-pink-600 to-rose-500',
    tag: 'Discover',
  },
  {
    title: 'Artist Radio',
    desc: 'Start infinite radio from any artist. Sit back, relax, and let PPPlayer curate a seamless stream of music built around your starting point.',
    color: 'from-blue-600 to-violet-500',
    tag: 'Listen',
  },
  {
    title: 'Artist Playlists',
    desc: 'Browse curated playlists built around your favorite artists — featuring their songs, collaborations, and thematic collections.',
    color: 'from-violet-600 to-purple-500',
    tag: 'Playlists',
  },
  {
    title: 'Genre Exploration',
    desc: 'Browse music by genre. From ambient to hip-hop to jazz — navigate the full musical landscape and surface what\'s trending in any category.',
    color: 'from-emerald-600 to-teal-500',
    tag: 'Browse',
  },
  {
    title: 'Beautiful Player',
    desc: 'A full-screen immersive player with high-quality artwork, track details, and smooth controls. Music should feel as good as it sounds.',
    color: 'from-orange-500 to-pink-500',
    tag: 'Play',
  },
]

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/8 rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4">
            <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">Features</p>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">
              Everything you need.{' '}
              <span className="gradient-text">Nothing you don&apos;t.</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              PPPlayer packs deep music features into a clean, fast, free app. No account required.
            </p>
          </div>
        </section>

        {/* Detailed feature cards */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {detailedFeatures.map((f) => (
                <div
                  key={f.title}
                  className="group glass rounded-2xl p-7 border border-white/8 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-10 h-1.5 rounded-full bg-gradient-to-r ${f.color}`} />
                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-widest">{f.tag}</span>
                  </div>
                  <h2 className="text-white font-bold text-lg mb-3">{f.title}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reinforce */}
        <FeaturesGrid />

        {/* CTA */}
        <DownloadCTA />
      </main>
      <Footer />
    </>
  )
}
