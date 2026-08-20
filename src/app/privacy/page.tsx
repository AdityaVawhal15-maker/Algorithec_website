import type { Metadata } from "next";
import { PageHero, ContentSection } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "ALGORITHEC Privacy Policy — how we collect, process, and protect your personal data.",
  alternates: {
    canonical: "https://algorithec.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description="Last Updated: May 28, 2026 · Effective Date: June 1, 2026"
      />
      <ContentSection>
        <div className="max-w-3xl space-y-12 text-graphite leading-relaxed">

          {/* 1. Introduction */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Algorithec (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;). Algorithec Private Limited
              (&quot;Algorithec&quot;) is committed to protecting your privacy and ensuring you have a positive experience
              on our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you use our website, mobile application, and related services (collectively,
              the &quot;Platform&quot;).
            </p>
            <p className="mb-4">
              Algorithec is an AI-driven Decision Engine that helps users instantly choose and complete the
              best possible option for shopping, food, rides, travel, and hospitality without switching between
              multiple applications.
            </p>
            <p className="font-medium text-black">
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices,
              please do not use our Platform.
            </p>
          </section>

          <hr className="border-border-light" />

          {/* 2. Information We Collect */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">2. Information We Collect</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">2.1 Information You Provide Directly</h3>

                <p className="mb-3 font-medium text-black">Account Registration Information:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Full name, email address, phone number</li>
                  <li>Password (encrypted)</li>
                  <li>Date of birth, profile picture (optional), gender (optional)</li>
                  <li>Preferred language</li>
                </ul>

                <p className="mb-3 font-medium text-black">Payment Information:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Bank account details (for refunds/returns)</li>
                  <li>Credit/debit card information (processed securely through third-party payment gateways)</li>
                  <li>UPI ID (if applicable), billing address, transaction history</li>
                </ul>

                <p className="mb-3 font-medium text-black">Location Information:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Current location (when you use location-based services)</li>
                  <li>Saved addresses (home, work, favorites)</li>
                  <li>Search history based on location</li>
                  <li>Delivery/pickup preferences</li>
                </ul>

                <p className="mb-3 font-medium text-black">Commerce &amp; Service Information:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Shopping preferences and history</li>
                  <li>Food delivery preferences and orders</li>
                  <li>Ride/transportation preferences</li>
                  <li>Travel bookings and preferences</li>
                  <li>Hotel/hospitality reservations</li>
                  <li>Wishlist and saved items, reviews, ratings, and feedback</li>
                </ul>

                <p className="mb-3 font-medium text-black">Communication Information:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Messages and support tickets</li>
                  <li>Feedback and surveys, customer service interactions</li>
                  <li>Push notification and email communication preferences</li>
                </ul>

                <p className="mb-3 font-medium text-black">KYC &amp; Verification:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Government-issued ID documents (Aadhar, PAN, Passport, etc.)</li>
                  <li>Address proof documents</li>
                  <li>Bank account verification details</li>
                  <li>Photo for identity verification (optional but may be required)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">2.2 Information Collected Automatically</h3>
                <p className="mb-3">We automatically collect certain information when you use the Platform, including:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li><span className="font-medium text-black">Device Information:</span> Device type, operating system and version, device identifiers (IMEI, Android ID, IDFA), mobile network information</li>
                  <li><span className="font-medium text-black">Usage Information:</span> Pages/screens visited, features used, search queries, time spent, clicks and interactions, error logs and crash reports</li>
                  <li><span className="font-medium text-black">Location Data:</span> GPS coordinates (when location services enabled), IP address and geolocation, approximate location based on network data</li>
                  <li><span className="font-medium text-black">Cookies and Tracking:</span> Session cookies, persistent cookies, analytics cookies, advertising cookies, pixels and tags, local storage data</li>
                  <li><span className="font-medium text-black">AI/ML Training Data (Anonymized):</span> Decision patterns, search behavior, preference signals, time patterns, category preferences, budget ranges, quality signals</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">2.3 Information from Third Parties</h3>
                <p className="mb-3">We receive information from commerce partners (ONDC sellers, e-commerce platforms, food delivery platforms, ride-hailing services, travel and hotel booking platforms), payment gateways, analytics and technical service providers, and social media platforms if you choose to connect them. This includes transaction details, delivery/fulfillment tracking, reviews, ratings, and refund information.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">3. How We Use Your Information</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">3.1 Core Platform Functions</h3>
                <p className="mb-2">To provide the service — processing requests, generating AI-powered recommendations, completing transactions, auto-applying discounts, tracking orders and deliveries, processing refunds, and resolving support issues.</p>
                <p>For our AI/Decision Engine — training machine learning models, understanding user intent through NLP, evaluating options across platforms, predicting user preferences, and optimizing decision accuracy.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">3.2 Communication</h3>
                <p className="mb-2">We use your information for transactional communications (order confirmations, delivery updates, payment receipts, security alerts, policy updates) and marketing communications (promotional offers, new feature announcements, newsletters, and re-engagement campaigns).</p>
                <p className="font-medium text-black">You can opt-out of non-essential marketing communications at any time.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">3.3 Analytics &amp; Improvement</h3>
                <p>We analyze user behavior patterns, identify popular categories, improve recommendation accuracy, optimize user experience, test new features, identify and fix bugs, and generate business analytics (usage statistics, conversion metrics, revenue analysis, user segmentation).</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">3.4 Safety &amp; Security</h3>
                <p>We use your information to detect and prevent fraud, verify user identity, monitor suspicious activities, enforce security policies, investigate security incidents, comply with legal obligations, respond to legal requests, and meet tax and regulatory requirements.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">3.5 Personalization</h3>
                <p>We customize recommendations, remember preferences, personalize interface, suggest relevant features, and optimize content presentation to improve your experience.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 4. How We Share Your Information */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">4. How We Share Your Information</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">4.1 Service Partners</h3>
                <p className="mb-2">We share necessary information (your name and contact details, delivery address, order details, payment status) with ONDC sellers to complete orders, payment gateway providers to process payments, delivery partners to track shipments, and logistics partners for delivery.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">4.2 Affiliate &amp; Referral Partners</h3>
                <p className="mb-2">When you use referral links, affiliate networks receive transaction data, partner platforms receive your referral information, and commission tracking occurs. You can opt-out by choosing not to use referral links or requesting non-affiliate transactions.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">4.3 Analytics &amp; Service Providers</h3>
                <p>We share aggregated, anonymized usage data with analytics providers (Google Analytics, Mixpanel, Amplitude) and share technical information with cloud hosting providers, error tracking services, communication service providers, and payment processors.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">4.4 Legal &amp; Regulatory</h3>
                <p>We share information with law enforcement or regulatory bodies only as required to comply with legal requests, court orders, government agency requests, or regulatory investigations. We share only minimal information necessary with judicial orders or legal process.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">4.5 Business Transfers</h3>
                <p>In case of merger or acquisition, a buyer may acquire user information, subject to this Privacy Policy or an updated policy. You will be notified of any such changes and may have the right to opt-out in some circumstances.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 5. Data Protection & Security */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">5. Data Protection &amp; Security</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">5.1 Security Measures</h3>
                <p className="mb-2 font-medium text-black">Technical Security:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>SSL/TLS encryption for data in transit</li>
                  <li>AES-256 encryption for data at rest</li>
                  <li>Secure authentication (multi-factor authentication available)</li>
                  <li>Regular security audits, penetration testing, and vulnerability scanning</li>
                  <li>Intrusion detection systems</li>
                </ul>
                <p className="mb-2 font-medium text-black">Access Controls:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Role-based access control and principle of least privilege</li>
                  <li>Access logging and monitoring</li>
                  <li>Employee background checks and confidentiality agreements</li>
                </ul>
                <p className="mb-2 font-medium text-black">Data Management:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Secure data storage, backup and recovery systems</li>
                  <li>Data retention policies and secure deletion procedures</li>
                  <li>Regular security training and incident response plan</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">5.2 Data Retention</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium text-black">User Account Data:</span> Retained for duration of account; 12 months after account deletion (for legal/tax purposes); deleted upon request where legally permitted.</li>
                  <li><span className="font-medium text-black">Transaction Data:</span> Retained for 7 years (tax and regulatory compliance); earlier deletion upon request where permitted.</li>
                  <li><span className="font-medium text-black">Analytics &amp; Logs:</span> Retained for 12–24 months; older data automatically deleted.</li>
                  <li><span className="font-medium text-black">AI/ML Training Data:</span> Anonymized and aggregated, no personal identifiers; can be removed upon request.</li>
                  <li><span className="font-medium text-black">Marketing Data:</span> Retained until opted out; 3 months grace period after opt-out; deleted upon request.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">5.3 International Data Transfers</h3>
                <p>User data is primarily stored in India. Backups may be stored in multiple regions in compliance with India data protection laws and applicable international data transfer agreements. You may request the location of your data or opt-out of international transfers where possible.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 6. Your Privacy Rights & Choices */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">6. Your Privacy Rights &amp; Choices</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">6.1 Access &amp; Portability</h3>
                <p className="mb-2">You have the right to access a copy of your personal data (within 30 days of request, free of charge once per year) and the right to data portability — receiving your data in a structured, portable format to transfer to another service.</p>
                <p>To request: Email <a href="mailto:info@algorithec.com" className="text-blue hover:underline">info@algorithec.com</a>, use the in-app request form, or submit a support ticket with your identification details.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">6.2 Correction &amp; Deletion</h3>
                <p className="mb-2">You may update inaccurate or incomplete information via account settings or by emailing <a href="mailto:info@algorithec.com" className="text-blue hover:underline">info@algorithec.com</a>.</p>
                <p className="mb-2">You have the right to request permanent deletion of your data (&quot;Right to be Forgotten&quot;), subject to exceptions for legal/regulatory requirements (e.g., transaction data retained 7 years for tax compliance) and fraud prevention. Processing takes 30–45 days. Note: Account deletion is irreversible and cannot be recovered.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">6.3 Opt-Out Options</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium text-black">Marketing Communications:</span> Unsubscribe from emails, disable push notifications, or SMS opt-out via Settings → Notifications.</li>
                  <li><span className="font-medium text-black">Cookies &amp; Tracking:</span> Disable cookies in browser settings; Do Not Track (DNT) signals honored. May affect functionality.</li>
                  <li><span className="font-medium text-black">Analytics:</span> Opt-out of Google Analytics or disable event tracking via Settings → Privacy.</li>
                  <li><span className="font-medium text-black">Location Services:</span> Disable GPS in device settings. May reduce service quality.</li>
                  <li><span className="font-medium text-black">Third-Party Sharing:</span> Opt-out of referral partnerships by emailing <a href="mailto:info@algorithec.com" className="text-blue hover:underline">info@algorithec.com</a>.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">6.4 AI/ML Model Training</h3>
                <p>You may request to exclude your data from ML model training by emailing <a href="mailto:info@algorithec.com" className="text-blue hover:underline">info@algorithec.com</a>. Takes effect within 30 days. May affect recommendation quality.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 7. Cookies & Tracking */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">7. Cookies &amp; Tracking Technologies</h2>
            <p className="mb-4">For full details, see our <a href="/cookies" className="text-blue hover:underline">Cookie Policy</a>. In summary:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><span className="font-medium text-black">Essential Cookies:</span> Required for session management, authentication, and security. Cannot be disabled.</li>
              <li><span className="font-medium text-black">Analytics Cookies:</span> Track user behavior and measure feature usage. Can be disabled.</li>
              <li><span className="font-medium text-black">Advertising Cookies:</span> Personalized recommendations and behavioral targeting. Can be disabled.</li>
              <li><span className="font-medium text-black">Web Beacons &amp; Pixels:</span> Track email opens, campaign effectiveness, and conversion tracking.</li>
            </ul>
            <p>We display a cookie consent banner on first visit and provide granular controls in settings. Annual consent renewal is requested.</p>
          </section>

          <hr className="border-border-light" />

          {/* 8. Children's Privacy */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">8. Children&apos;s Privacy</h2>
            <p className="mb-4">You must be 18 years or older (or legal age of majority in your jurisdiction) to use the Platform. We do not knowingly collect data from minors. If you believe a minor has registered, parents/guardians may contact <a href="mailto:info@algorithec.com" className="text-blue hover:underline">info@algorithec.com</a> with proof of custody to request account and data deletion.</p>
          </section>

          <hr className="border-border-light" />

          {/* 9. Third-Party Links */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">9. Third-Party Links &amp; Services</h2>
            <p className="mb-4">Our Platform links to partner platforms, ONDC sellers, and other third-party services. Their own privacy policies apply to your interactions with them — we are not responsible for their practices. If you connect social accounts (Facebook, Google, Apple, etc.), only information you authorize will be accessed.</p>
          </section>

          <hr className="border-border-light" />

          {/* 10. India Data Protection Compliance */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">10. India Data Protection Compliance</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.1 Applicable Indian Laws</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="font-medium text-black">Digital Personal Data Protection Act (DPDP), 2023:</span> We are a Data Fiduciary; partners are Data Processors. We are compliant with this Act.</li>
                  <li><span className="font-medium text-black">IT Act, 2000:</span> Compliant with reasonable security measures and incident reporting requirements.</li>
                  <li><span className="font-medium text-black">Right to Privacy:</span> We comply with India&apos;s constitutional privacy framework.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.2 Your Rights Under Indian Law (DPDP)</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Right to know personal data collected about you</li>
                  <li>Right to correct/update inaccurate data</li>
                  <li>Right to erasure (exceptions apply)</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent</li>
                  <li>Right to grievance redressal</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.3 Grievance Redressal</h3>
                <p>Email: <a href="mailto:info@algorithec.com" className="text-blue hover:underline">info@algorithec.com</a> with subject &quot;Data Protection Grievance.&quot; We acknowledge within 30 days and resolve within 45 days at no charge. If not satisfied, you may contact the Data Protection Authority (when established) or pursue legal remedies.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 11. GDPR */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">11. GDPR Compliance (If Applicable)</h2>
            <p className="mb-4">If you are an EU/EEA resident, GDPR rights apply: right to access, rectification, erasure, restriction of processing, data portability, objection, rights related to automated decisions, and the right to lodge a complaint with a supervisory authority. We process data based on your consent, contract performance, legal obligations, legitimate interests, protection of vital interests, or public tasks.</p>
          </section>

          <hr className="border-border-light" />

          {/* 12. Security Incident Notification */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">12. Security Incident Notification</h2>
            <p className="mb-4">If a data breach affects your information, we will investigate immediately, notify you within 72 hours with details of what data was affected, what steps we are taking, and how to protect yourself. We will notify authorities if required and provide identity protection information.</p>
            <p>You can help by using strong passwords, enabling 2FA, keeping your device updated, not sharing credentials, and reporting suspicious activity promptly.</p>
          </section>

          <hr className="border-border-light" />

          {/* 13. Changes to Privacy Policy */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">13. Changes to This Privacy Policy</h2>
            <p className="mb-4">We notify users of material changes via email, in-app notification, or website banner. Major changes will be announced with 30 days&apos; notice. Continued use of the Platform constitutes acceptance of the updated policy. Previous versions are maintained for reference and available upon request.</p>
          </section>

          <hr className="border-border-light" />

          {/* 14. Contact Information */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">14. Contact Information</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">Privacy Questions</h3>
                <p className="mb-1"><span className="font-medium text-black">Privacy Compliance Team</span></p>
                <p className="mb-1">Email: <a href="mailto:info@algorithec.com" className="text-blue hover:underline">info@algorithec.com</a></p>
                <p className="mb-1">Phone: +91 7396144250</p>
                <p>Website: algorithec.com</p>
                <p className="mt-3 text-sm">Response time: Within 24 business hours for queries · 30 days for access requests · 45 days for deletion requests · 30 days for correction requests</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Mailing Address</h3>
                <address className="not-italic">
                  ALGORITHEC PRIVATE LIMITED<br />
                  Unit 101, Oxford Towers, 139/88,<br />
                  Hal Old Airport RD, H.A.L II Stage,<br />
                  Bangalore North, Bangalore – 560008,<br />
                  Karnataka, India
                </address>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Grievance Redressal Officer</h3>
                <p className="mb-1">Email: <a href="mailto:info@algorithec.com" className="text-blue hover:underline">info@algorithec.com</a></p>
                <p className="mb-1">Phone: +91 7396144250</p>
                <p>Hours: Monday–Friday, 10 AM – 6 PM IST</p>
                <p className="mt-3 text-sm">Process: Submit complaint with details → acknowledge within 24 hours → investigate within 30 days → respond with resolution → escalate if not satisfied.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 15. Disclaimer & Governing Law */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">15. Disclaimer, Governing Law &amp; Dispute Resolution</h2>
            <p className="mb-4">Algorithec is not liable for unauthorized third-party access despite reasonable security measures, your failure to protect your password, browser cookies or malware, internet/network issues, or service interruptions outside our control. You are responsible for keeping your credentials confidential and reporting suspicious activity.</p>
            <p className="mb-4">This Privacy Policy is governed by the laws of India. Disputes are resolved through negotiation, mediation (if agreed), arbitration under the Indian Arbitration Act, or courts of Bangalore if litigation becomes necessary.</p>
            <p className="text-sm text-graphite/70">If any provision is found invalid, remaining provisions stay in effect. This Privacy Policy, combined with our Terms of Service, constitutes the entire agreement regarding privacy and data handling.</p>
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
