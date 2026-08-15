import type { Metadata } from "next";
import { PageHero, ContentSection } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ALGORITHEC Terms of Service — the legal agreement between you and Algorithec Private Limited.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Service"
        description="Last Updated: May 28, 2026 · Effective Date: June 1, 2026"
      />
      <ContentSection>
        <div className="max-w-3xl space-y-12 text-graphite leading-relaxed">

          {/* 1. Acceptance */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">1. Acceptance of Terms</h2>
            <p className="mb-4">
              Welcome to Algorithec (&quot;Platform,&quot; &quot;Service,&quot; &quot;Website,&quot; &quot;App&quot;). These Terms of Service
              (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;You&quot;) and Algorithec Private
              Limited (&quot;Company,&quot; &quot;We,&quot; &quot;Us,&quot; &quot;Our&quot;).
            </p>
            <p className="mb-4 font-medium text-black">By accessing, browsing, or using Algorithec, you:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Accept these Terms in their entirety</li>
              <li>Agree to be bound by these Terms</li>
              <li>Agree to comply with all applicable laws</li>
              <li>Certify you have legal capacity to enter agreements</li>
            </ul>
            <p className="font-medium text-black">If you do not accept these Terms, do not use the Platform.</p>
          </section>

          <hr className="border-border-light" />

          {/* 2. Description of Service */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">2. Description of Service</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">2.1 What Algorithec Does</h3>
                <p className="mb-3">Algorithec is an AI-driven Decision Engine that:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="font-medium text-black">Understands your intent</span> — You tell us what you want (e.g., &quot;order biryani under ₹200 near me&quot;)</li>
                  <li><span className="font-medium text-black">Evaluates all options</span> — AI searches across ONDC and partner platforms for best options</li>
                  <li><span className="font-medium text-black">Makes the decision</span> — Ranks by price, reliability, delivery time, and satisfaction signals</li>
                  <li><span className="font-medium text-black">Applies all discounts</span> — Auto-applies bank offers, coupons, and cashback</li>
                  <li><span className="font-medium text-black">Executes the transaction</span> — Completes purchase on your behalf</li>
                  <li><span className="font-medium text-black">Tracks delivery</span> — Monitors status and notifications throughout fulfillment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">2.2 Supported Categories</h3>
                <p className="mb-2">Currently available across:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="font-medium text-black">Shopping</span> — Amazon, Flipkart, Myntra, ONDC</li>
                  <li><span className="font-medium text-black">Food Delivery</span> — Swiggy, Zomato, AIPP, ONDC</li>
                  <li><span className="font-medium text-black">Rides</span> — Uber, Ola, Rapido</li>
                  <li><span className="font-medium text-black">Travel</span> — MakeMyTrip, Goibibo, RedBus, ONDC</li>
                  <li><span className="font-medium text-black">Hospitality</span> — OYO, Airbnb, Booking.com, ONDC</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">2.3 Service Availability</h3>
                <p className="mb-2">Currently available in Bangalore (expanding to other cities). The Platform is available 24/7 subject to downtime for maintenance. Partner platform hours may vary. You will be notified of service interruptions.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 3. Eligibility */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">3. Eligibility &amp; Account Registration</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">3.1 Eligibility Requirements</h3>
                <p className="mb-2">You must be 18+ years old (or legal age of majority in your jurisdiction), have legal capacity to enter binding agreements, be currently based in India, not be prohibited from using the Platform, and accept all Terms and conditions.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">3.2 Account Registration</h3>
                <p className="mb-2">To register, provide your full name, valid email address, valid phone number, a secure password (at least 8 characters, mixed case and numbers recommended), date of birth to verify age, and accept these Terms and our Privacy Policy.</p>
                <p>You must provide accurate, current information; maintain password confidentiality; notify us of unauthorized access; and accept responsibility for all activity on your account.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">3.3 Account Suspension/Termination</h3>
                <p className="mb-2">We may suspend or terminate your account for violation of these Terms, providing false information, fraudulent activity, misuse of the Platform, harming other users, suspicious activity, or non-use for 12+ months.</p>
                <p>You have the right to know the reason for suspension, to appeal within 30 days, to request account data deletion, and to a refund of unused credits (if applicable).</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 4. User Responsibilities */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">4. User Responsibilities &amp; Prohibited Conduct</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">4.1 Your Responsibilities</h3>
                <p className="mb-2">You agree to use the Platform only for personal, non-commercial purposes; comply with all applicable laws and regulations; not interfere with Platform operations; maintain confidentiality of credentials; report suspicious activity; verify AI recommendations before accepting; and use accurate information for KYC.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">4.2 Prohibited Conduct</h3>
                <p className="mb-3">You must not engage in any of the following:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium text-black">Illegal Activities:</span> Use the Platform for illegal purposes, engage in fraud or deception, money laundering, or tax evasion.</li>
                  <li><span className="font-medium text-black">Abuse &amp; Harassment:</span> Harass, threaten, or abuse other users; discriminate; defame or slander; or engage in cyberbullying.</li>
                  <li><span className="font-medium text-black">Platform Manipulation:</span> Disrupt or damage the Platform; reverse engineer or hack; use bots or scripts (except via API); perform DoS/DDoS attacks; bypass security features; manipulate AI decision-making; create fake reviews or ratings.</li>
                  <li><span className="font-medium text-black">Unauthorized Activities:</span> Create multiple accounts to game systems; resell Algorithec service; impersonate Algorithec staff; access others&apos; accounts; scrape data without permission; phishing or social engineering.</li>
                  <li><span className="font-medium text-black">Intellectual Property Violations:</span> Infringe copyrights or trademarks; use protected content without permission; plagiarize; distribute pirated content; violate patent rights.</li>
                  <li><span className="font-medium text-black">Spam &amp; Commercial Use:</span> Send spam or unsolicited messages; use for commercial purposes without permission; network marketing or MLM activities; bulk purchasing for resale.</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 5. Transactions & Payments */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">5. Transactions &amp; Payments</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">5.1 How Transactions Work</h3>
                <p className="mb-2">You provide a natural language request → AI analyzes your intent → Algorithec evaluates options across platforms → best option selected → you confirm and authorize → payment processed → order placed with ONDC/partner → you receive confirmation and tracking. You authorize AI decision-making, payment of the decided amount, collection of transaction data, and automatic completion of the transaction.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">5.2 Payment Methods</h3>
                <p className="mb-2">Accepted: Credit/debit cards (VISA, Mastercard, RuPay), net banking, UPI (Google Pay, PhonePe, PayTM, etc.), digital wallets, bank transfers, and ONDC native payment methods. All payments use SSL encryption and are PCI DSS compliant. Failed payments are retried automatically (max 3 attempts).</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">5.3 Pricing &amp; Fees</h3>
                <p className="mb-2">Algorithec is free to use for finding, recommending, and comparing options. You pay for actual products/services ordered, delivery/service charges set by ONDC/partners, applicable taxes, and any partner cancellation fees.</p>
                <p>Algorithec may earn transaction margins from ONDC (3–6%) and affiliate/referral commissions from partners (1–4%). These are included in final prices. We are transparent about our revenue model.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">5.4 Refunds &amp; Cancellations</h3>
                <p className="mb-2">Refund policies of the actual seller apply. Algorithec acts as agent for you and is not responsible for seller policies. Cancellations follow partner platform rules. Refunds are processed by ONDC/partners within 3–5 business days.</p>
                <p className="mb-2">To request a refund: contact the seller/ONDC first; if not resolved, contact us at <a href="mailto:support@algorithec.ai" className="text-blue hover:underline">support@algorithec.ai</a> with your order ID and reason. We will escalate and typically resolve within 7–10 business days.</p>
                <p className="mb-2 font-medium text-black">Non-refundable situations include:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Services delivered and used (food consumed, ride completed, hotel stay completed)</li>
                  <li>Digital products accessed (e-books, software licenses, digital downloads)</li>
                  <li>Custom/personalized items</li>
                  <li>Time-limited offers used</li>
                  <li>Items against the seller&apos;s policy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">5.5 Price Accuracy</h3>
                <p>Partner prices change in real-time. Prices may vary between browsing and purchase. Algorithec is not responsible for partner price changes. If there is a significant difference (&gt;5%), you have the right to cancel and will be notified before the final purchase.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">6. Intellectual Property Rights</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">6.1 Algorithec&apos;s Intellectual Property</h3>
                <p className="mb-2">Algorithec owns the Platform design, source code and algorithms, content, database, business processes, AI/ML models, trademarks (&quot;Algorithec,&quot; logo, branding), patents on decision engine technology, and trade secrets. You receive a limited, non-exclusive, non-transferable license to use the Platform for personal use only. You may not modify, reproduce, or distribute any part of the Platform.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">6.2 Your Content</h3>
                <p className="mb-2">By submitting reviews, ratings, feedback, photos, or other user-generated content, you grant Algorithec a worldwide, royalty-free, perpetual license to use, reproduce, adapt, publicly display, market, and sublicense that content. You represent that you own the content and it does not infringe others&apos; rights or constitute defamatory or unlawful material.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">6.3 Third-Party Content</h3>
                <p>ONDC seller product information, partner platform content, and third-party logos are used for informational purposes only, licensed from third parties, and subject to third-party terms. We are not responsible for third-party content.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 7. Warranties & Disclaimers */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">7. Warranties &amp; Disclaimers</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">7.1 Platform &quot;AS IS&quot;</h3>
                <p>Algorithec is provided &quot;AS IS&quot; without warranties or conditions, without guarantee of accuracy, uninterrupted service, or error-free operation. We do not warrant availability 24/7, the accuracy of AI recommendations, the quality of ONDC/partner services, or fitness for any particular purpose.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">7.2 AI Disclaimer</h3>
                <p className="mb-2">AI decisions are not guaranteed. AI rankings are based on available data; prices and availability change constantly; the AI may miss better options; real-time data is not always available. You must verify AI recommendations before accepting, check prices and availability after selection, and take final responsibility for decisions.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">7.3 No Endorsement</h3>
                <p>Algorithec does not endorse ONDC sellers, partner platforms, products, or service providers. You assume risk for quality of purchased items, reliability of service providers, delivery timeliness, seller disputes, and product defects.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">7.4 Third-Party Services</h3>
                <p>ONDC partners and other third parties are independent. Their terms and conditions govern transactions. Algorithec acts as agent only and has no authority to bind them.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 8. Limitation of Liability */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">8. Limitation of Liability</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">8.1 Liability Cap</h3>
                <p>Algorithec&apos;s total liability for all claims shall not exceed the greater of ₹1,000 (₹One Thousand) or the amount you paid us in the past 12 months. This applies to all claims combined (negligence, breach, tort, etc.).</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">8.2 Excluded Damages</h3>
                <p className="mb-2">We are not liable for lost profits or business, lost data, lost revenue or savings, lost goodwill, consequential, indirect, incidental, special, or punitive damages, damages for interruption of service, or damages from AI errors — even if we were aware of the possibility.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">8.3 Carve-Outs</h3>
                <p>We remain liable for death or personal injury from our negligence, fraud or willful misconduct, violations required by mandatory law, consumer protection violations, and violations of fundamental rights.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 9. Indemnification */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">9. Indemnification</h2>
            <p className="mb-4">You agree to indemnify and hold harmless Algorithec from claims arising from your use of the Platform, your violation of these Terms or applicable laws, your infringement of IP rights, your harm to third parties, claims related to your content, disputes with other users, and disputes with ONDC/partners. This includes legal fees, settlement amounts, damages awarded, and investigation and administrative costs. You agree to defend us against third-party claims at your expense with counsel of our choice.</p>
          </section>

          <hr className="border-border-light" />

          {/* 10. Termination */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">10. Termination &amp; Suspension</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.1 Our Right to Terminate</h3>
                <p>We may terminate or suspend your account immediately, with or without cause, for abuse, violation of Terms, illegal activity, security concerns, fraud, or technical reasons. Effects include immediate access loss, no future transactions, data retention per Privacy Policy, and potential legal action.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.2 Your Right to Terminate</h3>
                <p>You may terminate your account anytime via Settings → Account → Delete Account, or by emailing <a href="mailto:support@algorithec.ai" className="text-blue hover:underline">support@algorithec.ai</a>. Termination is effective immediately. Your account cannot be recovered after deletion. Data is retained per our Privacy Policy.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 11. Dispute Resolution */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">11. Dispute Resolution</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">11.1 Informal Resolution</h3>
                <p className="mb-2">First step: Contact <a href="mailto:support@algorithec.ai" className="text-blue hover:underline">support@algorithec.ai</a> with a detailed description of the dispute, including order IDs, dates, amounts, and your proposed resolution. We will respond within 10 business days and attempt good faith negotiation.</p>
                <p>If not resolved, escalate to <a href="mailto:grievance@algorithec.ai" className="text-blue hover:underline">grievance@algorithec.ai</a>. A grievance officer will be assigned for a 30-day investigation with a written response within 45 days.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">11.2 Mediation</h3>
                <p>If still unresolved, optional mediation may be attempted. A neutral third party, agreed to by both parties, will mediate. The process is confidential and costs are split equally. The outcome is not binding unless agreed.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">11.3 Arbitration</h3>
                <p>Binding arbitration under the Indian Arbitration &amp; Conciliation Act, 1996. Single arbitrator; seat of arbitration: Bangalore, Karnataka; language: English; ICC Arbitration Rules (modified for India). Award expected within 6 months. Confidential proceedings. Limited appeal rights.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">11.4 Litigation</h3>
                <p>If arbitration is not chosen, exclusive jurisdiction resides with the courts of Bangalore, Karnataka under the laws of India.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">11.5 Class Actions Waiver</h3>
                <p>You agree not to bring class action suits, pursue claims on a collective basis, or combine claims with other users. Each claim must be individual. Exceptions apply for regulatory authority claims and claims within Indian consumer law.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 12. Governing Law */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">12. Governing Law &amp; Jurisdiction</h2>
            <p className="mb-4">These Terms are governed by the laws of India without regard to conflicts of law. Exclusive jurisdiction resides with the district courts of Bangalore, Karnataka, or arbitration in Bangalore. You agree to comply with all applicable Indian laws, central and state laws, local ordinances, regulatory requirements, and judicial orders.</p>
          </section>

          <hr className="border-border-light" />

          {/* 13. Regulatory Compliance */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">13. Regulatory &amp; Statutory Information</h2>
            <p className="mb-3">We comply with:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Indian Companies Act, 1956</li>
              <li>Information Technology Act, 2000</li>
              <li>Consumer Protection Act, 2019</li>
              <li>Digital Personal Data Protection Act, 2023</li>
              <li>Telecom Commercial Communications Regulation</li>
              <li>RBI Guidelines on Digital Payment Systems</li>
              <li>ONDC Regulations and Guidelines</li>
              <li>Applicable Tax Laws (GST, Income Tax, etc.)</li>
            </ul>
            <p>Consumer Protection Act rights apply and are not limited by these Terms. You may access consumer redressal through District Consumer Commissions without mandatory arbitration.</p>
          </section>

          <hr className="border-border-light" />

          {/* 14. Miscellaneous */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">14. Miscellaneous</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium text-black">Entire Agreement:</span> These Terms, combined with our Privacy Policy, constitute the entire agreement. Oral modifications are not valid.</li>
              <li><span className="font-medium text-black">Severability:</span> If any provision is found invalid, remaining provisions remain in effect.</li>
              <li><span className="font-medium text-black">Waiver:</span> Non-enforcement of any right does not constitute a waiver of that right.</li>
              <li><span className="font-medium text-black">Assignment:</span> We may assign these Terms to a successor company with notice. You may not assign your account or rights without our written consent.</li>
              <li><span className="font-medium text-black">Survival:</span> Intellectual property rights, indemnification, limitation of liability, dispute resolution, confidentiality, payment obligations, and legal compliance obligations survive termination.</li>
              <li><span className="font-medium text-black">Changes to Terms:</span> We may modify these Terms at any time. Major changes will be notified 30 days in advance. Continued use after 30 days constitutes acceptance.</li>
            </ul>
          </section>

          <hr className="border-border-light" />

          {/* 15. Contact */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">15. Contact Information</h2>

            <div className="space-y-4">
              <div>
                <p className="font-medium text-black mb-1">Customer Support</p>
                <p>Email: <a href="mailto:support@algorithec.ai" className="text-blue hover:underline">support@algorithec.ai</a></p>
                <p>Phone: +91 7396144250</p>
                <p>Chat: In-app support</p>
                <p>Hours: Monday–Friday, 10 AM – 6 PM IST</p>
              </div>

              <div>
                <p className="font-medium text-black mb-1">Grievance Officer</p>
                <p>Email: <a href="mailto:grievance@algorithec.ai" className="text-blue hover:underline">grievance@algorithec.ai</a></p>
                <p>Phone: +91 7396144250</p>
              </div>

              <div>
                <p className="font-medium text-black mb-1">Legal Notices</p>
                <p>Email: <a href="mailto:legal@algorithec.ai" className="text-blue hover:underline">legal@algorithec.ai</a></p>
                <address className="not-italic mt-2">
                  ALGORITHEC PRIVATE LIMITED — Legal Department<br />
                  Unit 101, Oxford Towers, 139/88,<br />
                  Hal Old Airport RD, H.A.L II Stage,<br />
                  Bangalore North, Bangalore – 560008,<br />
                  Karnataka, India
                </address>
              </div>
            </div>
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
