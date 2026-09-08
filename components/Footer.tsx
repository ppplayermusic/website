import Image from 'next/image'
import Link from 'next/link'
import { StripeHoverLogo } from '@/components/ui/StripeHoverLogo'
import { DOWNLOAD_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[var(--color-bg-base)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <StripeHoverLogo
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
        </div>
      </div>
    </footer>
  )
}

