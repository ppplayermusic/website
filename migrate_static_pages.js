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

replaceInFile('app/[locale]/download/page.tsx', [
  ['import Navbar from \'@/components/Navbar\'', 'import {getTranslations} from \'next-intl/server\';\nimport Navbar from \'@/components/Navbar\''],
  ['export default async function DownloadPage({ params }: { params: { locale: string } }) {\n  const { locale } = await params;\n  setRequestLocale(locale);', 'export default async function DownloadPage({ params }: { params: { locale: string } }) {\n  const { locale } = await params;\n  setRequestLocale(locale);\n  const t = await getTranslations({\n    locale,\n    namespace: \'downloadPage\'\n  });'],
  ['100% Free · No Account Required', '{t("badge")}'],
  ['Download <span className="gradient-text">PPPlayer Free</span>', '<span dangerouslySetInnerHTML={{ __html: t("title") }} />'],
  ['Pick your platform. Start listening in minutes.', '{t("subtitle")}'],
  ['No account required. No email. No signup. Just music.', '{t("desc")}'],
  ['Windows system requirements:', '{t("windowsReqLabel")}'],
  ['Windows 10 or later (64-bit). ~50 MB download. No Microsoft Store required.', '{t("windowsReqDesc")}']
]);

// Privacy page
replaceInFile('app/[locale]/privacy/page.tsx', [
  ['import Navbar from \'@/components/Navbar\'', 'import {getTranslations} from \'next-intl/server\';\nimport Navbar from \'@/components/Navbar\''],
  ['export default async function PrivacyPage({ params }: { params: { locale: string } }) {\n  const { locale } = await params;\n  setRequestLocale(locale);', 'export default async function PrivacyPage({ params }: { params: { locale: string } }) {\n  const { locale } = await params;\n  setRequestLocale(locale);\n  const t = await getTranslations({\n    locale,\n    namespace: \'privacy\'\n  });'],
  ['<h1 className="text-4xl font-black tracking-tight mb-2">Privacy Policy</h1>', '<h1 className="text-4xl font-black tracking-tight mb-2">{t("title")}</h1>'],
  ['<p className="text-slate-500 text-sm mb-10">Last updated: April 2025</p>', '<p className="text-slate-500 text-sm mb-10">{t("lastUpdated")}</p>'],
  ['<h2 className="text-white text-xl font-bold mb-3">1. Overview</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s1.title")}</h2>'],
  ['PPPlayer (&quot;we&quot;, &quot;our&quot;, &quot;the app&quot;) is committed to protecting your privacy. This policy explains what data we collect, why, and how it is used when you use PPPlayer on iOS, Android, or Windows.', '{t("sections.s1.p")}'],
  ['<h2 className="text-white text-xl font-bold mb-3">2. No Account Required</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s2.title")}</h2>'],
  ['PPPlayer does not require you to create an account. We do not collect your name, email address, or any personally identifiable information to use the app.', '{t("sections.s2.p")}'],
  ['<h2 className="text-white text-xl font-bold mb-3">3. Data We Collect</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s3.title")}</h2>'],
  ['<p>We may collect the following anonymous, non-identifiable data:</p>', '<p>{t("sections.s3.p1")}</p>'],
  ['<li>Crash reports and error logs (to improve app stability)</li>', '<li>{t("sections.s3.li1")}</li>'],
  ['<li>Anonymous usage analytics (feature usage, session duration)</li>', '<li>{t("sections.s3.li2")}</li>'],
  ['<li>Device type and operating system version</li>', '<li>{t("sections.s3.li3")}</li>'],
  ['<p className="mt-3">We do not collect: names, emails, payment info, or precise location data.</p>', '<p className="mt-3">{t("sections.s3.p2")}</p>'],
  ['<h2 className="text-white text-xl font-bold mb-3">4. Third-Party Services</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s4.title")}</h2>'],
  ['PPPlayer may use third-party services for music metadata and analytics. These services have their own privacy policies. We encourage you to review them.', '{t("sections.s4.p")}'],
  ['<h2 className="text-white text-xl font-bold mb-3">5. Data Retention</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s5.title")}</h2>'],
  ['Anonymous analytics data is retained for a maximum of 12 months. Crash logs are deleted after 90 days.', '{t("sections.s5.p")}'],
  ['<h2 className="text-white text-xl font-bold mb-3">6. Your Rights</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s6.title")}</h2>'],
  ['Since we do not collect personal data, there is no personal information to access, export, or delete. If you have questions, contact us at the address below.', '{t("sections.s6.p")}'],
  ['<h2 className="text-white text-xl font-bold mb-3">7. Children</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s7.title")}</h2>'],
  ['PPPlayer is not directed at children under 13. We do not knowingly collect data from children.', '{t("sections.s7.p")}'],
  ['<h2 className="text-white text-xl font-bold mb-3">8. Changes</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s8.title")}</h2>'],
  ['We may update this policy from time to time. We will note the date of the last update at the top of this page.', '{t("sections.s8.p")}'],
  ['<h2 className="text-white text-xl font-bold mb-3">9. Contact</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s9.title")}</h2>'],
  ['Questions about this policy? Contact us at{\' \}', '{t("sections.s9.p")}'],
  ['← Back to PPPlayer', '{t("back")}']
]);

// Terms page
replaceInFile('app/[locale]/terms/page.tsx', [
  ['import Navbar from \'@/components/Navbar\'', 'import {getTranslations} from \'next-intl/server\';\nimport Navbar from \'@/components/Navbar\''],
  ['export default async function TermsPage({ params }: { params: { locale: string } }) {\n  const { locale } = await params;\n  setRequestLocale(locale);', 'export default async function TermsPage({ params }: { params: { locale: string } }) {\n  const { locale } = await params;\n  setRequestLocale(locale);\n  const t = await getTranslations({\n    locale,\n    namespace: \'terms\'\n  });'],
  ['<h1 className="text-4xl font-black tracking-tight mb-2">Terms of Service</h1>', '<h1 className="text-4xl font-black tracking-tight mb-2">{t("title")}</h1>'],
  ['<p className="text-slate-500 text-sm mb-10">Last updated: April 2025</p>', '<p className="text-slate-500 text-sm mb-10">{t("lastUpdated")}</p>'],
  ['<h2 className="text-white text-xl font-bold mb-3">1. Acceptance of Terms</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s1.title")}</h2>'],
  ['By downloading or using PPPlayer, you agree to these Terms of Service. If you do not agree, please do not use the app.', '{t("sections.s1.p")}'],
  ['<h2 className="text-white text-xl font-bold mb-3">2. Use of the App</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s2.title")}</h2>'],
  ['<p>PPPlayer is provided free of charge for personal, non-commercial use. You agree not to:</p>', '<p>{t("sections.s2.p")}</p>'],
  ['<li>Reverse engineer, decompile, or modify the app</li>', '<li>{t("sections.s2.li1")}</li>'],
  ['<li>Use the app to distribute malware or harmful content</li>', '<li>{t("sections.s2.li2")}</li>'],
  ['<li>Violate any applicable laws or regulations while using the app</li>', '<li>{t("sections.s2.li3")}</li>'],
  ['<h2 className="text-white text-xl font-bold mb-3">3. No Account Required</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s3.title")}</h2>'],
  ['PPPlayer does not require account creation. You can use all features immediately after download.', '{t("sections.s3.p")}'],
  ['<h2 className="text-white text-xl font-bold mb-3">4. Intellectual Property</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s4.title")}</h2>'],
  ['PPPlayer and its content, features, and functionality are owned by PPPlayer and protected by applicable intellectual property laws. Music content displayed within the app is sourced from third-party providers and subject to their respective rights and licenses.', '{t("sections.s4.p")}'],
  ['<h2 className="text-white text-xl font-bold mb-3">5. Disclaimer of Warranties</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s5.title")}</h2>'],
  ['PPPlayer is provided &quot;as is&quot; without warranty of any kind, express or implied. We do not guarantee uninterrupted service or that the app will be error-free.', '{t("sections.s5.p")}'],
  ['<h2 className="text-white text-xl font-bold mb-3">6. Limitation of Liability</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s6.title")}</h2>'],
  ['To the maximum extent permitted by law, PPPlayer shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use or inability to use the app.', '{t("sections.s6.p")}'],
  ['<h2 className="text-white text-xl font-bold mb-3">7. Changes to Terms</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s7.title")}</h2>'],
  ['We reserve the right to update these terms at any time. Continued use of the app after changes constitutes acceptance of the new terms.', '{t("sections.s7.p")}'],
  ['<h2 className="text-white text-xl font-bold mb-3">8. Contact</h2>', '<h2 className="text-white text-xl font-bold mb-3">{t("sections.s8.title")}</h2>'],
  ['Questions about these terms? Reach us at{\' \}', '{t("sections.s8.p")}'],
  ['← Back to PPPlayer', '{t("back")}']
]);

console.log('Static pages updated!');
