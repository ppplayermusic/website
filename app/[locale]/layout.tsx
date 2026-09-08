import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../globals.css'
import CookieBanner from '@/components/CookieBanner'

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
  other: {
    'google-adsense-account': 'ca-pub-3432071939645868',
  },
}

import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <head />
      <body className={inter.className}>
        <Script id="google-analytics-consent">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied'
            });
          `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BFDXCJBB35" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BFDXCJBB35');
          `}
        </Script>
        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
