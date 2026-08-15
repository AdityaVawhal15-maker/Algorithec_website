import type { Metadata } from "next";
import { PageHero, ContentSection } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "ALGORITHEC Cookie Policy — how we use cookies and tracking technologies.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Cookie Policy"
        description="Last Updated: May 28, 2026 · Effective Date: June 1, 2026"
      />
      <ContentSection>
        <div className="max-w-3xl space-y-12 text-graphite leading-relaxed">

          {/* What are cookies */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">1. What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files stored on your device when you visit our website or use our app. They
              contain data about your browsing activity, preferences, and login information.
            </p>
            <p className="mb-3 font-medium text-black">How cookies work:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>You visit Algorithec</li>
              <li>Server sends a cookie to your device</li>
              <li>Device stores the cookie locally</li>
              <li>On your next visit, the device sends the cookie back</li>
              <li>We recognize you and personalize your experience</li>
              <li>Cookie may expire or be deleted</li>
            </ol>
          </section>

          <hr className="border-border-light" />

          {/* Types of cookies */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">2. Types of Cookies We Use</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">A. Essential / Functional Cookies</h3>
                <p className="mb-2"><span className="font-medium text-black">Purpose:</span> Make the Platform work properly — session management, authentication (login/logout), security functions, error messages, and basic preferences.</p>
                <p className="mb-2"><span className="font-medium text-black">Duration:</span> Session (deleted when you close the browser).</p>
                <p className="mb-2"><span className="font-medium text-black">Can be disabled:</span> No — the Platform will not function without these.</p>
                <p className="mb-2 font-medium text-black">Examples:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code className="text-sm bg-gray-50 px-1.5 py-0.5 rounded">session_id</code> — keeps you logged in</li>
                  <li><code className="text-sm bg-gray-50 px-1.5 py-0.5 rounded">csrf_token</code> — protects against attacks</li>
                  <li><code className="text-sm bg-gray-50 px-1.5 py-0.5 rounded">language_preference</code> — remembers your language</li>
                  <li><code className="text-sm bg-gray-50 px-1.5 py-0.5 rounded">theme_preference</code> — remembers light/dark mode</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">B. Analytics Cookies</h3>
                <p className="mb-2"><span className="font-medium text-black">Purpose:</span> Understand how you use the Platform — track pages visited, measure feature usage, analyze user behavior, identify popular features, improve user experience, fix bugs, and optimize performance.</p>
                <p className="mb-2"><span className="font-medium text-black">Duration:</span> 12–24 months.</p>
                <p className="mb-2"><span className="font-medium text-black">Can be disabled:</span> Yes — Settings → Privacy → Analytics.</p>
                <p className="mb-2"><span className="font-medium text-black">Partners:</span> Google Analytics, Mixpanel, Amplitude (anonymized data).</p>
                <p className="mb-2 font-medium text-black">Information collected:</p>
                <ul className="list-disc pl-5 mb-2 space-y-1">
                  <li>Pages/screens visited, time on page, clicks and interactions</li>
                  <li>Device type and OS, browser type</li>
                  <li>Geographic location (approximate), referral source</li>
                </ul>
                <p className="font-medium text-black">NOT collected: personal information, payment details, or identifiable information without consent.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">C. Advertising &amp; Remarketing Cookies</h3>
                <p className="mb-2"><span className="font-medium text-black">Purpose:</span> Show relevant recommendations — personalized recommendations, behavioral targeting, advertising conversion tracking, retargeting ads, and interest-based suggestions. Cross-site tracking only with permission.</p>
                <p className="mb-2"><span className="font-medium text-black">Duration:</span> 3–12 months.</p>
                <p className="mb-2"><span className="font-medium text-black">Can be disabled:</span> Yes — Settings → Privacy → Advertising.</p>
                <p className="mb-2"><span className="font-medium text-black">Partners:</span> Google Ads, Facebook Ads, and other ad networks (subject to their privacy policies).</p>
                <p>Information shared: browsing behavior, product interests, and category preferences. Personal information is not shared.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">D. Social Media Cookies</h3>
                <p className="mb-2"><span className="font-medium text-black">Purpose:</span> Enable social features — Facebook/Instagram login, Google login, social sharing, LinkedIn integration, Twitter integration.</p>
                <p className="mb-2"><span className="font-medium text-black">Duration:</span> Varies (usually session + 30 days).</p>
                <p className="mb-2"><span className="font-medium text-black">Can be disabled:</span> Don&apos;t connect social accounts.</p>
                <p>Information accessed: basic profile info, email address, profile picture.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">E. Performance Cookies</h3>
                <p className="mb-2"><span className="font-medium text-black">Purpose:</span> Improve Platform speed — load time monitoring, error tracking, crash reporting, performance metrics, and latency measurement.</p>
                <p className="mb-2"><span className="font-medium text-black">Duration:</span> 30–90 days.</p>
                <p className="mb-2"><span className="font-medium text-black">Can be disabled:</span> Yes — Settings → Privacy → Performance.</p>
                <p><span className="font-medium text-black">Partners:</span> Sentry (error tracking), Rollbar (crash reporting), New Relic (monitoring).</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* Cookie Management */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">3. Cookie Management</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">In Algorithec</h3>
                <p className="mb-2">Go to Settings → Privacy → Cookie Preferences. Toggle each category on or off. Essential cookies cannot be disabled. Changes apply immediately. Some features may be limited if non-essential cookies are disabled.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">In Your Browser</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium text-black">Chrome / Edge / Firefox:</span> Settings → Privacy → Cookies and Site Data → view, delete, or block cookies.</li>
                  <li><span className="font-medium text-black">Safari:</span> Preferences → Privacy → Cookies and Website Data → Manage Website Data.</li>
                  <li><span className="font-medium text-black">Mobile:</span> Settings → App Permission → disable cookies in in-app browser or clear app cache and data.</li>
                  <li><span className="font-medium text-black">Third-Party Tools:</span> Cookie manager apps, privacy extensions (uBlock Origin, Ghostery), or VPN services.</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* Do Not Track */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">4. Do Not Track (DNT)</h2>
            <p className="mb-4">We honor Do Not Track signals. If DNT is enabled, we do not track analytics, do not show targeted ads, do not use advertising cookies, and keep only essential cookies. Platform functionality is maintained.</p>
            <p className="font-medium text-black mb-2">How to enable DNT:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Chrome: Settings → Privacy → Do Not Track</li>
              <li>Firefox: Preferences → Privacy → Send &quot;Do Not Track&quot;</li>
              <li>Safari: Preferences → Privacy → Ask websites not to track</li>
              <li>Edge: Settings → Privacy → Tracking Prevention</li>
            </ul>
          </section>

          <hr className="border-border-light" />

          {/* Your Rights */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">5. Your Rights &amp; Choices</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Know what cookies we use</li>
              <li>Disable non-essential cookies</li>
              <li>Delete all cookies at any time</li>
              <li>Request a list of cookies used</li>
              <li>Block specific cookies</li>
              <li>Opt-out of tracking</li>
              <li>Use private/incognito mode</li>
            </ul>
            <p className="mb-2 font-medium text-black">Privacy implications of disabling cookies:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Less personalized experience and generic recommendations</li>
              <li>Preferences not remembered — you will need to re-enter information</li>
              <li>Analytics disabled — we cannot improve features as effectively</li>
              <li>Retargeted relevant ads will disappear</li>
            </ul>
          </section>

          <hr className="border-border-light" />

          {/* Third-Party Cookies */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">6. Third-Party Cookies</h2>
            <p className="mb-4">Third parties may place cookies on your device, including advertising networks, analytics providers, social media platforms, payment processors, and affiliate partners. Their privacy policies apply — we do not control these cookies. You may opt out through individual provider opt-outs, the Network Advertising Initiative (NAI), or the Digital Advertising Alliance (DAA).</p>
          </section>

          <hr className="border-border-light" />

          {/* International */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">7. International Use</h2>
            <p>If you are using the Platform from outside India, GDPR cookie rules may apply (if you are in the EU), requiring explicit consent for some cookies. Your choices are respected across borders. The same cookie types apply globally.</p>
          </section>

          <div className="pt-4 text-sm text-graphite/60">
            <p>© 2026 ALGORITHEC PRIVATE LIMITED. All Rights Reserved.</p>
            <p className="mt-1">Last Updated: May 28, 2026 · Next Review: May 28, 2027</p>
          </div>

        </div>
      </ContentSection>
    </>
  );
}
