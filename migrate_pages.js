const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
  const fullPath = path.join(__dirname, filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  for (const [search, replace] of replacements) {
    content = content.replace(search, replace);
  }
  fs.writeFileSync(fullPath, content);
}

// 1. app/[locale]/page.tsx
replaceInFile('app/[locale]/page.tsx', [
  ['export default function HomePage() {', 'import {setRequestLocale} from \'next-intl/server\';\nimport {getTranslations} from \'next-intl/server\';\n\nexport async function generateMetadata({params}: {params: {locale: string}}) {\n  const {locale} = await params;\n  const t = await getTranslations({locale, namespace: \'metadata\'});\n  return {\n    title: t(\'homeTitle\'),\n    description: t(\'homeDesc\')\n  };\n}\n\nexport default async function HomePage({ params }: { params: { locale: string } }) {\n  const { locale } = await params;\n  setRequestLocale(locale);']
]);

// 2. app/[locale]/download/page.tsx
replaceInFile('app/[locale]/download/page.tsx', [
  ['export const metadata: Metadata = {\n  title: \'Download PPPlayer Free\',\n  description:\n    \'Download PPPlayer for iOS, Android, or Windows. Free music app: no account required. Start listening in minutes.\',\n}', 'import {getTranslations} from \'next-intl/server\';\nimport {setRequestLocale} from \'next-intl/server\';\n\nexport async function generateMetadata({params}: {params: {locale: string}}) {\n  const {locale} = await params;\n  const t = await getTranslations({locale, namespace: \'metadata\'});\n  return {\n    title: t(\'downloadTitle\'),\n    description: t(\'downloadDesc\')\n  };\n}'],
  ['export default function DownloadPage() {', 'export default async function DownloadPage({ params }: { params: { locale: string } }) {\n  const { locale } = await params;\n  setRequestLocale(locale);'],
  ['100% Free · No Account Required', '100% Free · No Account Required'], // Will replace later if needed
]);

// 3. app/[locale]/privacy/page.tsx
replaceInFile('app/[locale]/privacy/page.tsx', [
  ['export const metadata: Metadata = {\n  title: \'Privacy Policy\',\n  description: \'Privacy Policy for PPPlayer: free music app for iOS, Android, and Windows.\',\n}', 'import {getTranslations} from \'next-intl/server\';\nimport {setRequestLocale} from \'next-intl/server\';\n\nexport async function generateMetadata({params}: {params: {locale: string}}) {\n  const {locale} = await params;\n  const t = await getTranslations({locale, namespace: \'metadata\'});\n  return {\n    title: t(\'privacyTitle\'),\n    description: t(\'privacyDesc\')\n  };\n}'],
  ['export default function PrivacyPage() {', 'export default async function PrivacyPage({ params }: { params: { locale: string } }) {\n  const { locale } = await params;\n  setRequestLocale(locale);']
]);

// 4. app/[locale]/terms/page.tsx
replaceInFile('app/[locale]/terms/page.tsx', [
  ['export const metadata: Metadata = {\n  title: \'Terms of Service\',\n  description: \'Terms of Service for PPPlayer: free music app for iOS, Android, and Windows.\',\n}', 'import {getTranslations} from \'next-intl/server\';\nimport {setRequestLocale} from \'next-intl/server\';\n\nexport async function generateMetadata({params}: {params: {locale: string}}) {\n  const {locale} = await params;\n  const t = await getTranslations({locale, namespace: \'metadata\'});\n  return {\n    title: t(\'termsTitle\'),\n    description: t(\'termsDesc\')\n  };\n}'],
  ['export default function TermsPage() {', 'export default async function TermsPage({ params }: { params: { locale: string } }) {\n  const { locale } = await params;\n  setRequestLocale(locale);']
]);

console.log('Pages updated!');
