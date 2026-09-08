const fs = require('fs');
const path = require('path');

function replaceInComponent(filename, replacements, namespace) {
  const filepath = path.join(__dirname, 'components', filename);
  let content = fs.readFileSync(filepath, 'utf8');

  // Add import and hook
  if (!content.includes("import {useTranslations}")) {
    content = content.replace("import React from 'react'", "import React from 'react'\nimport {useTranslations} from 'next-intl'");
    content = content.replace("import { useState", "import {useTranslations}\nimport { useState");
    // Some don't have React import, like Footer
    if (!content.includes("useTranslations") && content.includes("import Link")) {
      content = content.replace("import Link", "import Link\nimport {useTranslations} from 'next-intl'");
    }
  }

  // Add the hook inside the component
  const functionRegex = /export default function ([A-Za-z0-9_]+)\([^)]*\)\s*{/;
  const match = content.match(functionRegex);
  if (match && !content.includes(`const t = useTranslations('${namespace}')`)) {
    content = content.replace(functionRegex, `$&\n  const t = useTranslations('${namespace}');`);
  }

  for (const [search, replace] of replacements) {
    content = content.replace(search, replace);
  }

  fs.writeFileSync(filepath, content);
}

// HeroSection
replaceInComponent('sections/HeroSection.tsx', [
  ['<SpotlightText className="text-white">Music.</SpotlightText>', '<SpotlightText className="text-white">{t("title1")}</SpotlightText>'],
  ['<SpotlightText>Without the friction.</SpotlightText>', '<SpotlightText>{t("title2")}</SpotlightText>'],
  ['No account. No subscription. Just play.', '{t("desc")}'],
  ['Get for iOS', '{t("getIos")}'],
  ['Get for Android', '{t("getAndroid")}'],
  ['Get for Mac', '{t("getMac")}'],
  ['Get for Windows', '{t("getWindows")}']
], 'hero');

// DiscoverSection
replaceInComponent('sections/DiscoverSection.tsx', [
  ['<SpotlightText>Find<br />something<br />worth playing.</SpotlightText>', '<SpotlightText dangerouslySetInnerHTML={{ __html: t("title") }} />']
], 'discover');

// ArtistRadioSection
replaceInComponent('sections/ArtistRadioSection.tsx', [
  ['<SpotlightText>Endless listening.</SpotlightText>', '<SpotlightText>{t("title")}</SpotlightText>']
], 'artistRadio');

// GoDeeperSection
replaceInComponent('sections/GoDeeperSection.tsx', [
  ['FOLLOW', '{t("bgText")}'],
  ['<SpotlightText>Follow the music.</SpotlightText>', '<SpotlightText>{t("title")}</SpotlightText>']
], 'goDeeper');

// PressPlaySection
replaceInComponent('sections/PressPlaySection.tsx', [
  ['<SpotlightText>Then, just listen.</SpotlightText>', '<SpotlightText>{t("title")}</SpotlightText>']
], 'pressPlay');

// FeatureGallerySection
replaceInComponent('sections/FeatureGallerySection.tsx', [
  ['<SpotlightText>Everything you need.</SpotlightText>', '<SpotlightText>{t("title")}</SpotlightText>'],
  ['A beautiful, native experience built for performance.', '{t("subtitle")}'],
  ['Find exactly what you want.', '{t("searchTitle")}'],
  ['Search globally across tracks, artists, and albums instantly.', '{t("searchDesc")}'],
  ['Perfectly queued.', '{t("queueTitle")}'],
  ['Manage what plays next with a beautiful, reorderable queue.', '{t("queueDesc")}'],
  ['Your music, your rules.', '{t("favTitle")}'],
  ['Build your personal library with a single click. Always there.', '{t("favDesc")}'],
  ['Native by design.', '{t("contextTitle")}'],
  ['Right-click anywhere. Beautiful, context-aware native menus.', '{t("contextDesc")}']
], 'featureGallery');

// NoAccountSection
replaceInComponent('sections/NoAccountSection.tsx', [
  ['<SpotlightText>No account.</SpotlightText>', '<SpotlightText>{t("title")}</SpotlightText>'],
  ['<SpotlightText>Music shouldn&apos;t require permission.</SpotlightText>', '<SpotlightText>{t("subtitle")}</SpotlightText>']
], 'noAccount');

// PlatformsSection
replaceInComponent('sections/PlatformsSection.tsx', [
  ['<SpotlightText>Your music. Your devices.</SpotlightText>', '<SpotlightText>{t("title")}</SpotlightText>'],
  ['Beautifully native on Windows, Android, and iOS.', '{t("subtitle")}']
], 'platforms');

// DownloadCTA
replaceInComponent('sections/DownloadCTA.tsx', [
  ['<SpotlightText>Just play.</SpotlightText>', '<SpotlightText>{t("title")}</SpotlightText>'],
  ['Get for iOS', '{t("getIos")}'],
  ['Get for Android', '{t("getAndroid")}'],
  ['Get for Mac', '{t("getMac")}'],
  ['Get for Windows', '{t("getWindows")}']
], 'downloadCTA');

// FAQSection
replaceInComponent('sections/FAQSection.tsx', [
  ['FAQ', '{t("badge")}'],
  ['Common{\' \'}\n              <span className="gradient-text">questions</span>', '<span dangerouslySetInnerHTML={{ __html: t("title") }} />'],
  ['Everything you need to know about PPPlayer.', '{t("subtitle")}']
], 'faq');

// Navbar
replaceInComponent('Navbar.tsx', [
  ['{link.label}', '{t(link.label.toLowerCase())}'],
  ['Download Free', '{t("download")}'],
  ['Download', '{t("download")}'],
  ['import {useTranslations}', 'import {useTranslations} from \'next-intl\';\nimport {Link} from \'@/i18n/routing\';'],
  ['import Link from \'next/link\'', '// Import handled'] // Remove standard Link to use the i18n Link
], 'nav');

// Footer
replaceInComponent('Footer.tsx', [
  ['Music, without the friction. Free for iOS, Android, and Windows.', '{t("desc")}'],
  ['Product', '{t("product")}'],
  ['Features', '{t("features")}'],
  ['>Download<', '>{t("download")}<'], // Distinguish from component
  ['Platforms', '{t("platforms")}'],
  ['>iOS<', '>{t("ios")}<'],
  ['>Android<', '>{t("android")}<'],
  ['>Windows<', '>{t("windows")}<'],
  ['>Social<', '>{t("social")}<'],
  ['>Instagram<', '>{t("instagram")}<'],
  ['>LinkedIn<', '>{t("linkedin")}<'],
  ['>Facebook<', '>{t("facebook")}<'],
  ['>GitHub<', '>{t("github")}<'],
  ['Legal', '{t("legal")}'],
  ['>Privacy<', '>{t("privacy")}<'],
  ['>Terms<', '>{t("terms")}<'],
  ['© {new Date().getFullYear()} PPPlayer. All rights reserved.', '{t("copyright", { year: new Date().getFullYear() })}'],
  ['import Link from \'next/link\'', 'import {Link} from \'@/i18n/routing\'']
], 'footer');

// CookieBanner
replaceInComponent('CookieBanner.tsx', [
  ['We value your privacy', '{t("title")}'],
  ['We use cookies to analyze site traffic and enhance your experience. By clicking &quot;Accept&quot;, you consent to our use of cookies.', '{t("desc")}'],
  ['Decline All', '{t("decline")}'],
  ['Accept All', '{t("accept")}']
], 'cookie');

console.log('Components updated!');
