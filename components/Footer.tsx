import Image from 'next/image'
import Link from 'next/link'
import { Download } from 'lucide-react'
import { DOWNLOAD_LINKS, SITE_TAGLINE } from '@/lib/constants'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Download', href: '/download' },
]

const downloadLinks = [
  { label: 'iOS', href: DOWNLOAD_LINKS.ios },
  { label: 'Android', href: DOWNLOAD_LINKS.android },
  { label: 'Windows', href: DOWNLOAD_LINKS.windows },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-[#08080c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image
                src="/logo.png"
                alt="PPPlayer Logo"
                width={32}
                height={32}
                className="rounded-xl shadow-lg shadow-red-700/30"
              />
              <span className="text-white font-black text-xl tracking-tight">
                PP<span className="gradient-text">Player</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">{SITE_TAGLINE}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Download</h4>
            <ul className="space-y-3">
              {downloadLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <Download size={12} className="text-slate-600" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} PPPlayer. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Free music app for iOS, Android & Windows
          </p>
        </div>
      </div>
    </footer>
  )
}
