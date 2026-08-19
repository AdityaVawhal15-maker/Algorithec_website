import type { Metadata } from "next";
import { PageHero, ContentSection } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "ALGORITHEC Refund & Cancellation Policy — how refunds and cancellations are handled.",
};

export default function RefundPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Refund &amp; Cancellation Policy"
        description="Last Updated: May 28, 2026 · Effective Date: June 1, 2026"
      />
      <ContentSection>
        <div className="max-w-3xl space-y-12 text-graphite leading-relaxed">

          {/* 1. Our Role */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">1. Our Role in Refunds</h2>
            <p className="mb-4">
              Algorithec acts as your agent in transactions. ONDC sellers and partner platforms fulfill the
              actual transactions and their refund policies govern all refunds. Algorithec facilitates
              communication and escalation but does not arbitrate disputes between you and sellers.
              Algorithec is not liable for seller actions or policies.
            </p>
          </section>

          <hr className="border-border-light" />

          {/* 2. Cancellations */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">2. Cancellations</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">Before Payment</h3>
                <p>You can cancel at any time before payment — simply close or go back before clicking &quot;Confirm.&quot; No charges are incurred. No cancellation fee. Instant, no approval needed.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Immediate Cancellation (Within 5 Minutes of Payment)</h3>
                <p className="mb-2">Click &quot;Cancel Order&quot; in the app. Refund is initiated immediately — full refund, no deductions. Seller is notified. Usually processed same day. No questions asked.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Cancellation After 5 Minutes</h3>
                <p className="mb-2">Depends on the seller and category. May be allowed if not yet processed. May incur a cancellation fee per the seller&apos;s policy. Contact the seller via ONDC for approval. Algorithec facilitates only.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Cancellation After Processing</h3>
                <p>If the order has been shipped or the service is underway, the seller&apos;s return and refund policy applies. Contact the seller directly. Algorithec can provide contact information and facilitate communication.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 3. Refund Timeline */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">3. Refund Processing Timeline</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">Refund Approval</h3>
                <p>Seller approves within 24–72 hours, depending on their policy. May require return verification or inspection. Check with the seller for status.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Refund to Payment Method (once approved)</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Card refunds: 3–5 business days</li>
                  <li>Bank transfers: 5–7 business days</li>
                  <li>UPI: 1–2 business days</li>
                  <li>Timeline depends on your bank, not Algorithec</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Total Timeline</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Best case: Same day (immediate cancellation)</li>
                  <li>Typical: 5–10 business days</li>
                  <li>Worst case: 15–20 business days</li>
                  <li>May vary by payment method</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 4. Non-Refundable */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">4. Non-Refundable Situations</h2>

            <p className="mb-4">The following are generally non-refundable:</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-base font-medium text-black mb-2">Services Delivered &amp; Used</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Food orders consumed</li>
                  <li>Rides or travel completed</li>
                  <li>Hotel stays completed</li>
                  <li>Services fully rendered</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-medium text-black mb-2">Digital Products</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>E-books accessed</li>
                  <li>Software licenses activated</li>
                  <li>Digital subscriptions used</li>
                  <li>Digital downloads used</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-medium text-black mb-2">Custom / Personalized Items</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Personalized products, custom orders, made-to-order items, altered/modified items</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-medium text-black mb-2">Time-Limited Offers</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Expired promotional discounts</li>
                  <li>Flash sale items (once used)</li>
                  <li>Clearance items (unless defective)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-medium text-black mb-2">Seller&apos;s Policy</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Against seller&apos;s terms, final sale items, as-is items, or used/damaged items (your fault)</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="font-medium text-black mb-2">Exceptions (refunds typically apply):</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Defective or damaged goods</li>
                <li>Item not as described</li>
                <li>Major difference from picture</li>
                <li>Item not received (with proof)</li>
                <li>Wrong item sent</li>
              </ul>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 5. Defective/Damaged Goods */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">5. Defective or Damaged Goods</h2>

            <p className="mb-4">If an item received is damaged, defective, not as described, missing parts, or the wrong item:</p>

            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <span className="font-medium text-black">Document the issue</span> — take photos/video of the packaging and damage/defect.
              </li>
              <li>
                <span className="font-medium text-black">Contact the seller via ONDC</span> — provide photos and describe the issue clearly. Request a replacement or refund.
              </li>
              <li>
                <span className="font-medium text-black">Seller may</span> offer a replacement, a refund, require return first, or deny. If denied, contact Algorithec support.
              </li>
              <li>
                <span className="font-medium text-black">Escalate to Algorithec</span> — email <a href="mailto:info@algorithec.com" className="text-blue hover:underline">info@algorithec.com</a>. We will facilitate further escalation. If the seller still denies, a consumer complaint is available.
              </li>
              <li>
                <span className="font-medium text-black">Return process</span> — the seller will arrange pickup or return shipping. Items must be in returnable condition. Refund is processed after verification. Keep proof of return.
              </li>
            </ol>

            <p className="mt-4">Algorithec&apos;s role is to facilitate communication, escalate if needed, provide seller contact information, and monitor for abuse. We have limited ability to compel a refund from the seller.</p>
          </section>

          <hr className="border-border-light" />

          {/* 6. Partial Refunds */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">6. Partial Refunds</h2>
            <p className="mb-4">You may receive a partial refund for items that are damaged (seller&apos;s estimate), defective, missing items, or returned in used condition. Sellers may apply restocking fees or return shipping costs. The seller assesses condition and deductions, you receive a breakdown, and you can dispute the calculation.</p>
          </section>

          <hr className="border-border-light" />

          {/* 7. Refund Disputes */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">7. Refund Disputes</h2>

            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <span className="font-medium text-black">Contact seller first</span> — provide details and photos, request reconsideration, allow 5–7 days for response.
              </li>
              <li>
                <span className="font-medium text-black">Escalate to ONDC</span> — file a dispute on the ONDC platform with evidence. ONDC investigates and decides.
              </li>
              <li>
                <span className="font-medium text-black">Algorithec Support</span> — we can facilitate and provide evidence; we do not arbitrate. ONDC&apos;s decision is final.
              </li>
              <li>
                <span className="font-medium text-black">Consumer Complaint</span> — file with the District Consumer Commission under the Consumer Protection Act, 2019 (for disputes under ₹1 Cr).
              </li>
            </ol>
          </section>

          <hr className="border-border-light" />

          {/* 8. Special Circumstances */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">8. Special Circumstances</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-base font-medium text-black mb-2">Gift Cards &amp; Vouchers</h3>
                <p>Non-refundable unless purchased directly from Algorithec. Check the issuer&apos;s policy. Usually cannot be exchanged for cash. May expire per issuer&apos;s terms.</p>
              </div>

              <div>
                <h3 className="text-base font-medium text-black mb-2">Subscription Services</h3>
                <p>May be refundable within a free trial period; otherwise non-refundable. Cancel anytime to avoid the next charge. Pro-rated refunds may apply for monthly subscriptions. Read subscription terms carefully.</p>
              </div>

              <div>
                <h3 className="text-base font-medium text-black mb-2">Installment Payments</h3>
                <p>Cancellation may refund all installments if allowed. Contact the seller immediately if canceling. Approval determines whether remaining installments are waived.</p>
              </div>

              <div>
                <h3 className="text-base font-medium text-black mb-2">Bundle Deals</h3>
                <p>Usually all-or-nothing. The entire bundle must be returned for a full refund (if allowed). Partial returns from bundles may be non-refundable.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 9. Algorithec Store Credit */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">9. Algorithec Store Credits</h2>
            <p className="mb-4">Instead of a cash refund, you may request Algorithec store credits. Credits are processed faster (1–2 days), can be used for future purchases, and have no expiration unless noted. Credits cannot be withdrawn as cash.</p>
          </section>

          <hr className="border-border-light" />

          {/* 10. Contact */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">10. Contact for Refund Assistance</h2>
            <p className="mb-2">Email: <a href="mailto:info@algorithec.com" className="text-blue hover:underline">info@algorithec.com</a></p>
            <p className="mb-2">Phone: +91 7396144250</p>
            <p className="mb-2">In-App Chat: Available 24/7</p>
            <p className="mb-4">Hours for phone/email: Monday–Friday, 10 AM – 6 PM IST</p>
            <p>For formal grievances: <a href="mailto:info@algorithec.com" className="text-blue hover:underline">info@algorithec.com</a> — investigation within 30 days, response within 45 days.</p>
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
