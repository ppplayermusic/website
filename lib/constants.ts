// Site configuration
export const SITE_URL = 'https://ppplayer.com'
export const SITE_NAME = 'PPPlayer'
export const SITE_TAGLINE = 'Free music. No account. Just play.'

// Download links — update when store listings are live
export const DOWNLOAD_LINKS = {
  ios: 'https://apps.apple.com/app/ppplayer',
  android: 'https://play.google.com/store/apps/details?id=com.ppplayer',
  windows: 'https://ppplayer.com/download/windows',
}

// Platform data
export const PLATFORMS = [
  {
    id: 'ios',
    name: 'iOS',
    label: 'iPhone & iPad',
    description: 'Available on the App Store for iPhone and iPad.',
    badge: 'App Store',
    href: DOWNLOAD_LINKS.ios,
    color: 'from-slate-400 to-slate-200',
  },
  {
    id: 'android',
    name: 'Android',
    label: 'Android',
    description: 'Available on Google Play for Android phones and tablets.',
    badge: 'Google Play',
    href: DOWNLOAD_LINKS.android,
    color: 'from-green-400 to-emerald-300',
  },
  {
    id: 'windows',
    name: 'Windows',
    label: 'Windows 10+',
    description: 'Direct download for Windows 10 and later. No store needed.',
    badge: 'Direct Download',
    href: DOWNLOAD_LINKS.windows,
    color: 'from-blue-400 to-cyan-300',
  },
]

// Feature cards
export const FEATURES = [
  {
    id: 'discovery',
    icon: 'Compass',
    title: 'Artist Discovery',
    description: 'Find new artists you\'ve never heard of. Browse profiles and go deep into full discographies.',
  },
  {
    id: 'related',
    icon: 'GitBranch',
    title: 'Related Artists',
    description: 'Explore artists connected to the ones you already love. Always know who to listen to next.',
  },
  {
    id: 'radio',
    icon: 'Radio',
    title: 'Artist Radio',
    description: 'Start an infinite radio from any artist. Sit back and let PPPlayer take over.',
  },
  {
    id: 'playlists',
    icon: 'ListMusic',
    title: 'Artist Playlists',
    description: 'Browse curated playlists built around your favorite artists. Handpicked, not algorithmic.',
  },
  {
    id: 'genres',
    icon: 'LayoutGrid',
    title: 'Genre Exploration',
    description: 'Browse music by genre and discover what\'s trending globally right now.',
  },
  {
    id: 'player',
    icon: 'Music2',
    title: 'Beautiful Player',
    description: 'A clean, immersive full-screen player with rich artwork, track info, and smooth controls.',
  },
]

// FAQ items
export const FAQ_ITEMS = [
  {
    q: 'Is PPPlayer free?',
    a: 'Yes. PPPlayer is 100% free. No subscriptions, no in-app purchases, no hidden costs — ever.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No. You do not need an email address, account, or login of any kind. Just download, open, and start listening.',
  },
  {
    q: 'Is PPPlayer available for iPhone?',
    a: 'Yes. PPPlayer is available on the App Store for iPhone and iPad.',
  },
  {
    q: 'Is PPPlayer available for Android?',
    a: 'Yes. You can download PPPlayer on Google Play for Android phones and tablets.',
  },
  {
    q: 'Can I use PPPlayer on Windows?',
    a: 'Yes. PPPlayer is available for Windows 10 and later as a direct download — no store required.',
  },
  {
    q: 'What music features does PPPlayer offer?',
    a: 'PPPlayer includes artist discovery, related artists, artist radio, artist playlists, genre exploration, and a beautiful full-screen player — all free, no account required.',
  },
  {
    q: 'How do I download PPPlayer?',
    a: 'Tap the download button for your platform on this page. The download takes less than a minute.',
  },
  {
    q: 'Is there a premium version?',
    a: 'No. PPPlayer is fully free. Everything you see is available at no cost, with no account needed.',
  },
]
