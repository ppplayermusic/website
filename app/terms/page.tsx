import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for PPPlayer — free music app for iOS, Android, and Windows.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
          <h1 className="text-4xl font-black tracking-tight mb-2">Terms of Service</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: April 2025</p>

          <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-white text-xl font-bold mb-3">1. Acceptance of Terms</h2>
              <p>
                By downloading or using PPPlayer, you agree to these Terms of Service. If you do not agree, please do not use the app.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">2. Use of the App</h2>
              <p>PPPlayer is provided free of charge for personal, non-commercial use. You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-400 mt-2">
                <li>Reverse engineer, decompile, or modify the app</li>
                <li>Use the app to distribute malware or harmful content</li>
                <li>Violate any applicable laws or regulations while using the app</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">3. No Account Required</h2>
              <p>PPPlayer does not require account creation. You can use all features immediately after download.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">4. Intellectual Property</h2>
              <p>
                PPPlayer and its content, features, and functionality are owned by PPPlayer and protected by applicable intellectual property laws. Music content displayed within the app is sourced from third-party providers and subject to their respective rights and licenses.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">5. Disclaimer of Warranties</h2>
              <p>
                PPPlayer is provided &quot;as is&quot; without warranty of any kind, express or implied. We do not guarantee uninterrupted service or that the app will be error-free.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, PPPlayer shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use or inability to use the app.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">7. Changes to Terms</h2>
              <p>
                We reserve the right to update these terms at any time. Continued use of the app after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">8. Contact</h2>
              <p>
                Questions about these terms? Reach us at{' '}
                <a href="mailto:contact@ppplayer.com" className="text-purple-400 hover:text-purple-300">
                  contact@ppplayer.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/8">
            <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
              ← Back to PPPlayer
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
