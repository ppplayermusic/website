import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for PPPlayer — free music app for iOS, Android, and Windows.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
          <h1 className="text-4xl font-black tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: April 2025</p>

          <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-white text-xl font-bold mb-3">1. Overview</h2>
              <p>
                PPPlayer (&quot;we&quot;, &quot;our&quot;, &quot;the app&quot;) is committed to protecting your privacy. This policy explains what data we collect, why, and how it is used when you use PPPlayer on iOS, Android, or Windows.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">2. No Account Required</h2>
              <p>
                PPPlayer does not require you to create an account. We do not collect your name, email address, or any personally identifiable information to use the app.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">3. Data We Collect</h2>
              <p>We may collect the following anonymous, non-identifiable data:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-400 mt-2">
                <li>Crash reports and error logs (to improve app stability)</li>
                <li>Anonymous usage analytics (feature usage, session duration)</li>
                <li>Device type and operating system version</li>
              </ul>
              <p className="mt-3">We do not collect: names, emails, payment info, or precise location data.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">4. Third-Party Services</h2>
              <p>PPPlayer may use third-party services for music metadata and analytics. These services have their own privacy policies. We encourage you to review them.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">5. Data Retention</h2>
              <p>Anonymous analytics data is retained for a maximum of 12 months. Crash logs are deleted after 90 days.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">6. Your Rights</h2>
              <p>Since we do not collect personal data, there is no personal information to access, export, or delete. If you have questions, contact us at the address below.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">7. Children</h2>
              <p>PPPlayer is not directed at children under 13. We do not knowingly collect data from children.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">8. Changes</h2>
              <p>We may update this policy from time to time. We will note the date of the last update at the top of this page.</p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">9. Contact</h2>
              <p>
                Questions about this policy? Contact us at{' '}
                <a href="mailto:contact@ppplayer.com" className="text-red-400 hover:text-red-300">
                  contact@ppplayer.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/8">
            <Link href="/" className="text-red-400 hover:text-red-300 text-sm font-medium">
              ← Back to PPPlayer
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
