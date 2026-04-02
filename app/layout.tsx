import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'PPPlayer: Free Music App for iOS, Android & Windows | No Account Required',
    template: '%s | PPPlayer',
  },
  description:
    'PPPlayer is a free music app for iPhone, Android, and Windows. Discover artists, explore genres, and start listening instantly: no account, no signup, no cost.',
  keywords: [
    'free music app',
    'music app no account',
    'music app for iPhone',
    'music app for Android',
    'music player Windows',
    'artist discovery app',
    'free music player',
    'ppplayer',
  ],
  metadataBase: new URL('https://ppplayer.com'),
  openGraph: {
    type: 'website',
    url: 'https://ppplayer.com',
    siteName: 'PPPlayer',
    title: 'PPPlayer: Free Music App for iPhone, Android, and Windows',
    description: 'Download PPPlayer for free. No account, no signup, no cost. Stream music on your iPhone, Android, and Windows devices.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PPPlayer: Free Music App',
    description: 'No account. No signup. Just download and listen.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
