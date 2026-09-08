import Link from 'next/link'
import { SpotlightLogo } from '@/components/ui/SpotlightLogo'
import { DOWNLOAD_LINKS } from '@/lib/constants'


export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[var(--color-bg-base)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <SpotlightLogo
                src="/logo.png"
                alt="PPPlayer Logo"
                width={32}
                height={32}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
              <span className="text-white font-medium text-lg tracking-tight">
                PPPlayer
              </span>
            </Link>
            <p className="text-slate-500 text-sm max-w-xs">
              Music, without the friction. Free for iOS, Android, and Windows.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12 md:gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-white text-xs font-semibold uppercase tracking-widest mb-1">Product</span>
              <Link href="#features" className="text-slate-400 hover:text-white text-sm transition-colors">Features</Link>
              <Link href="#download" className="text-slate-400 hover:text-white text-sm transition-colors">Download</Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <span className="text-white text-xs font-semibold uppercase tracking-widest mb-1">Platforms</span>
              <a href={DOWNLOAD_LINKS.ios} className="text-slate-400 hover:text-white text-sm transition-colors">iOS</a>
              <a href={DOWNLOAD_LINKS.android} className="text-slate-400 hover:text-white text-sm transition-colors">Android</a>
              <a href={DOWNLOAD_LINKS.windows} className="text-slate-400 hover:text-white text-sm transition-colors">Windows</a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-white text-xs font-semibold uppercase tracking-widest mb-1">Social</span>
              <a href="https://www.instagram.com/ppplayermusic/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/company/ppplayer/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors">LinkedIn</a>
              <a href="https://www.facebook.com/ppplayermusic" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors">Facebook</a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-white text-xs font-semibold uppercase tracking-widest mb-1">Legal</span>
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy</Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">Terms</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} PPPlayer. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/ppplayermusic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PPPlayer on Instagram"
              className="text-slate-500 hover:text-white transition-colors"
            >
              {/* Instagram */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/ppplayer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PPPlayer on LinkedIn"
              className="text-slate-500 hover:text-white transition-colors"
            >
              {/* LinkedIn */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/ppplayermusic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PPPlayer on Facebook"
              className="text-slate-500 hover:text-white transition-colors"
            >
              {/* Facebook */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
