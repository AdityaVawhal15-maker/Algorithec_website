import type { Metadata } from "next";
import { PageHero, ContentSection } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "ALGORITHEC Accessibility Statement — our commitment to digital accessibility for all users.",
  alternates: {
    canonical: "https://algorithec.com/accessibility",
  },
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Accessibility"
        description="Last Updated: May 28, 2026 · Effective Date: June 1, 2026"
      />
      <ContentSection>
        <div className="max-w-3xl space-y-12 text-graphite leading-relaxed">

          {/* 1. Commitment */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">1. Our Commitment to Accessibility</h2>
            <p className="mb-4">
              Algorithec is committed to making our Platform accessible to people with disabilities. We strive
              to meet WCAG 2.1 Level AA accessibility standards and continuously improve accessibility for all
              users.
            </p>
          </section>

          <hr className="border-border-light" />

          {/* 2. WCAG Compliance */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">2. WCAG 2.1 Compliance</h2>

            <p className="mb-6">We strive to comply with the four principles of the Web Content Accessibility Guidelines (WCAG 2.1 Level AA):</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">Perceivable</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Images have alt text</li>
                  <li>Audio has captions; videos have transcripts</li>
                  <li>Color is not the only indicator of meaning</li>
                  <li>High contrast text</li>
                  <li>Resizable text — content readable when zoomed</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Operable</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Keyboard navigation available throughout</li>
                  <li>No keyboard traps</li>
                  <li>Skip navigation links provided</li>
                  <li>Focus visible at all times</li>
                  <li>No seizure-inducing content</li>
                  <li>Touch targets a minimum of 48×48px</li>
                  <li>Sufficient spacing between buttons</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Understandable</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Clear language used throughout</li>
                  <li>Consistent navigation and predictable behavior</li>
                  <li>Error messages are clear and actionable</li>
                  <li>Help text and labels provided</li>
                  <li>Content organized logically with instructions provided</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Robust</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Valid HTML code and proper semantic markup</li>
                  <li>ARIA labels used where needed</li>
                  <li>Works with assistive technology</li>
                  <li>Cross-browser compatible</li>
                  <li>Mobile accessible and screen reader compatible</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 3. Mobile App */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">3. Mobile App Accessibility</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">iOS (VoiceOver Compatible)</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>VoiceOver fully supported with proper element labeling</li>
                  <li>Large text sizes supported</li>
                  <li>High contrast mode available</li>
                  <li>Regularly tested with Accessibility Inspector and VoiceOver</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Android (TalkBack Compatible)</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>TalkBack fully supported with content descriptions provided</li>
                  <li>Proper heading structure</li>
                  <li>Touch targets appropriately sized</li>
                  <li>Regularly tested with TalkBack</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">General</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>No seizure-inducing animations</li>
                  <li>Motion control alternatives provided</li>
                  <li>Font scaling supported</li>
                  <li>Color contrast meets WCAG AA+</li>
                  <li>Voice control support</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 4. Accessibility Features */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">4. Accessibility Features</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">Text &amp; Display Options</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Adjustable text size (up to 200%)</li>
                  <li>High contrast mode and dark mode option</li>
                  <li>Serif/sans-serif font choice</li>
                  <li>Letter/line spacing adjustment</li>
                  <li>Reading guides (ruler, underline)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Audio &amp; Visual</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Captions for all videos; transcripts available</li>
                  <li>Descriptions of images</li>
                  <li>Sign language interpreter (on request)</li>
                  <li>Audio descriptions for key content</li>
                  <li>No auto-playing audio or video</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Navigation</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Keyboard-only navigation possible</li>
                  <li>Skip to main content link</li>
                  <li>Logical tab order, breadcrumb navigation</li>
                  <li>Clear headings and search function available</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Forms</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Clear labels for all inputs</li>
                  <li>Specific error messages with correction suggestions</li>
                  <li>Required fields marked; adequate spacing</li>
                  <li>Keyboard accessible with help text provided</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 5. Accessibility Statement */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">5. Accessibility Statement</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-base font-medium text-black mb-2">What We&apos;ve Done</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Extensive accessibility testing</li>
                  <li>WCAG 2.1 Level AA compliance target</li>
                  <li>Third-party accessibility audit</li>
                  <li>Continuous improvement and regular user feedback</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-medium text-black mb-2">Known Issues</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Some third-party widgets may not be fully accessible</li>
                  <li>Partner platform accessibility varies</li>
                  <li>Older browsers may have limited support</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-medium text-black mb-2">Planned Improvements</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Voice input (coming soon)</li>
                  <li>Enhanced screen reader support</li>
                  <li>More audio descriptions</li>
                  <li>Improved mobile accessibility</li>
                  <li>Accessibility AI features (planned)</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 6. Support */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">6. Accessibility Support</h2>

            <div className="space-y-4">
              <div>
                <p className="font-medium text-black mb-2">Contact Us</p>
                <p className="mb-1">Email: <a href="mailto:info@algorithec.com" className="text-blue hover:underline">info@algorithec.com</a></p>
                <p className="mb-1">Phone: +91 7396144250 (relay service option available)</p>
                <p>In-app chat available. Response within 24 hours.</p>
              </div>

              <div>
                <p className="font-medium text-black mb-2">Accessibility Services Available</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Alternative formats (document conversion, PDF → text, etc.)</li>
                  <li>Large print versions</li>
                  <li>Braille documents (on request)</li>
                  <li>Screen reader optimization</li>
                  <li>Keyboard-only alternative workflows</li>
                  <li>Extended support time</li>
                  <li>Non-visual AI decision flow and alternative decision formats</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 7. Feedback */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">7. Feedback on Accessibility</h2>

            <p className="mb-4">To report an accessibility issue, email <a href="mailto:info@algorithec.com" className="text-blue hover:underline">info@algorithec.com</a> including your device and browser, a description of the issue, steps to reproduce it, and any suggested alternatives.</p>

            <p className="mb-2 font-medium text-black">Resolution timeline:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Acknowledge within 24 hours</li>
              <li>Investigate within 5 business days</li>
              <li>Provide solution or workaround within 15 days</li>
              <li>Implement fix in next update</li>
              <li>Notify you of resolution</li>
            </ul>
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
