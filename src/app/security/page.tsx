import type { Metadata } from "next";
import { PageHero, ContentSection } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Security",
  description: "ALGORITHEC Security Policy — how we protect your data and what to do in the event of a security incident.",
};

export default function SecurityPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Security"
        description="Last Updated: May 28, 2026 · Effective Date: June 1, 2026"
      />
      <ContentSection>
        <div className="max-w-3xl space-y-12 text-graphite leading-relaxed">

          {/* 1. Commitment */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">1. Our Security Commitment</h2>
            <p className="mb-4">
              Algorithec is committed to protecting your data and information from unauthorized access,
              disclosure, alteration, and destruction. We implement industry-standard security measures and
              continuously improve our security posture.
            </p>
            <p className="mb-3 font-medium text-black">Our principles:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Protecting user data as our highest priority</li>
              <li>Regular security audits and testing</li>
              <li>Employee training on security</li>
              <li>Transparency about breaches</li>
              <li>Compliance with security standards</li>
              <li>Continuous improvement mindset</li>
            </ul>
          </section>

          <hr className="border-border-light" />

          {/* 2. Data Encryption */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">2. Data Encryption</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">In Transit (Data Moving)</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>All connections use HTTPS with TLS 1.2 or higher</li>
                  <li>256-bit encryption minimum</li>
                  <li>Secure certificate from a trusted provider</li>
                  <li>Automatic HTTPS redirect</li>
                  <li>No unencrypted data transmission</li>
                  <li>All APIs use HTTPS only — no HTTP endpoints available</li>
                  <li>Certificate pinning on mobile apps</li>
                  <li>Token-based authentication and rate limiting</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">At Rest (Data Stored)</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>AES-256 encryption for all data at rest</li>
                  <li>Encryption keys stored in a secure key vault; separate key per database</li>
                  <li>Regular key rotation (annually)</li>
                  <li>No plaintext passwords stored</li>
                  <li>Encrypted file systems, backups, and archives</li>
                  <li>Payment information, government IDs, phone numbers, and addresses encrypted separately</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 3. Access Controls */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">3. Access Controls</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">Authentication</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Email and strong password required; passwords hashed with bcrypt or scrypt with salt</li>
                  <li>Minimum 8 characters; mixed case and numbers recommended</li>
                  <li>No password reuse; password change every 90 days recommended</li>
                  <li>Multi-Factor Authentication (MFA): TOTP, SMS/Email OTP — optional for users, enabled by default for admin</li>
                  <li>Session tokens are secure and random; session timeout after 30 minutes of inactivity</li>
                  <li>Sessions invalidated on password change</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Authorization</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Role-based access control: Admin, Support, Data Analyst, Finance, Engineer — no cross-role access</li>
                  <li>Principle of least privilege — employees have minimum necessary access tied to job function</li>
                  <li>Regular access reviews; immediate revocation upon termination</li>
                  <li>Limited access to personal data; anonymized data used for analytics</li>
                  <li>No production data in development environments</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 4. Employee & Vendor Security */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">4. Employee &amp; Vendor Security</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium text-black">Background checks:</span> Criminal background, employment history verification, reference checks, education verification, and credit check for financial roles.</li>
              <li><span className="font-medium text-black">Confidentiality agreements:</span> All employees sign NDAs covering company and user data. Violations result in termination and potential legal action. The non-disclosure clause survives employment.</li>
              <li><span className="font-medium text-black">Security training:</span> Security training for all employees, annual refresher training, phishing awareness, data handling procedures, incident response training, and password security training.</li>
              <li><span className="font-medium text-black">Vendor management:</span> Security questionnaire required; SOC 2 or ISO 27001 certification required; penetration testing performed; regular security audits; contractual security requirements; immediate suspension for breaches.</li>
            </ul>
          </section>

          <hr className="border-border-light" />

          {/* 5. Infrastructure Security */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">5. Infrastructure Security</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">Network Security</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Firewalls (hardware and software), intrusion detection and prevention systems</li>
                  <li>DDoS protection, WAF (Web Application Firewall)</li>
                  <li>VPN for remote access, network segmentation, isolated test environments</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Server &amp; Cloud Security</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Regular OS patching; security updates applied immediately</li>
                  <li>Minimal services running; hardened configurations; regular vulnerability scanning</li>
                  <li>AWS/Google Cloud used with security best practices, security groups, API authentication, encryption, monitoring, and DDoS protection</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Database Security</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Encrypted connections only; authentication required</li>
                  <li>SQL injection prevention, data validation</li>
                  <li>Principle of least privilege; no production access from development</li>
                  <li>Backup encryption and disaster recovery plan</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 6. Application Security */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">6. Application Security</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-base font-medium text-black mb-2">Development Practices</h3>
                <p>Secure coding training; mandatory code reviews with peer review before deployment; no hardcoded secrets; dependency scanning; SAST and DAST (Static and Dynamic Application Security Testing).</p>
              </div>

              <div>
                <h3 className="text-base font-medium text-black mb-2">Vulnerability Management</h3>
                <p>Regular penetration testing (quarterly), bug bounty program, responsible disclosure process, vulnerability tracking system, and public disclosure after fix.</p>
              </div>

              <div>
                <h3 className="text-base font-medium text-black mb-2">API Security</h3>
                <p>Authentication required on all endpoints; rate limiting; input validation; SQL injection, XSS, and CSRF protection; secure headers; API versioning.</p>
              </div>

              <div>
                <h3 className="text-base font-medium text-black mb-2">Mobile App Security</h3>
                <p>App signing with certificate; secure storage of tokens; certificate pinning; obfuscation of sensitive code; permission minimization; no unintended data leaks; regular app updates.</p>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 7. Monitoring & Logging */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">7. Monitoring &amp; Logging</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium text-black">Security logging:</span> All access, changes, and failures logged. Logs retained a minimum of 90 days, encrypted and archived. Centralized log management with tamper detection.</li>
              <li><span className="font-medium text-black">Real-time monitoring:</span> 24/7 security monitoring with automated alert systems, anomaly detection, suspicious activity flags, and an incident response team on alert.</li>
              <li><span className="font-medium text-black">Audit trails:</span> User login/logout, data access, data modification, deletion events, and admin actions are all logged. Trails cannot be altered.</li>
            </ul>
          </section>

          <hr className="border-border-light" />

          {/* 8. Incident Response */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">8. Incident Response</h2>

            <p className="mb-4">Security incidents include unauthorized access, data breaches, system compromise, malware infections, DDoS or ransomware attacks, and any suspicious activity.</p>

            <p className="mb-3 font-medium text-black">Our response plan:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium text-black">First hour:</span> Isolate affected systems, stop ongoing attacks, preserve evidence, assess severity, activate incident team, begin containment.</li>
              <li><span className="font-medium text-black">First 24 hours:</span> Complete investigation, determine scope, identify affected users, assess data exposure, begin remediation, prepare notifications.</li>
              <li><span className="font-medium text-black">1–7 days:</span> Complete remediation, fix vulnerabilities, restore systems, verify security, send notifications, document lessons learned.</li>
              <li><span className="font-medium text-black">1–4 weeks:</span> Complete root cause analysis, implement preventive measures, update security policies, conduct training, report to authorities if required.</li>
            </ul>
          </section>

          <hr className="border-border-light" />

          {/* 9. Data Breach Notification */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">9. Data Breach Notification</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">Notification Timeline</h3>
                <p>We notify affected individuals within <span className="font-medium text-black">72 hours maximum</span> of discovery. Earlier notification (within 24 hours) is made when practical. We notify regulators as required by applicable law (DPDP Act for Indian citizens; GDPR supervisory authority for EU residents).</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Notification Method</h3>
                <p className="mb-2">In order of preference: email notification, SMS notification, phone call, in-app notification, mail (if other methods unavailable), or public notice (for mass breach affecting 1,000+ individuals).</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Notification Content</h3>
                <p>Notifications will include: what happened, when it occurred, what data was affected, who was affected, steps to protect yourself, our contact information, remediation steps we are taking, and how to file a complaint.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Your Rights After a Breach</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Know what data was breached and when</li>
                  <li>Guidance on how to protect yourself</li>
                  <li>Free credit monitoring (24–36 months, if applicable)</li>
                  <li>ID theft protection services</li>
                  <li>Fraud alerts with credit bureaus</li>
                  <li>Phone support for questions</li>
                  <li>Right to request data deletion</li>
                  <li>Right to file regulatory complaints and pursue legal remedies</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 10. Security Standards */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">10. Security Standards &amp; Assessments</h2>
            <p className="mb-3 font-medium text-black">We aim to comply with:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>ISO 27001 (or equivalent)</li>
              <li>SOC 2 Type II</li>
              <li>OWASP Top 10</li>
              <li>PCI DSS (for payment data)</li>
              <li>NIST Cybersecurity Framework</li>
              <li>Indian Standards (IS 15408)</li>
            </ul>
            <p className="mb-3 font-medium text-black">Regular assessments include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Annual security audit and annual compliance audit</li>
              <li>Quarterly penetration tests</li>
              <li>Third-party security review</li>
              <li>Bug bounty findings and vendor assessments</li>
            </ul>
          </section>

          <hr className="border-border-light" />

          {/* 11. Your Responsibilities */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">11. Your Security Responsibilities</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-base font-medium text-black mb-2">You should:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use strong, unique passwords and enable multi-factor authentication</li>
                  <li>Keep device software updated</li>
                  <li>Use secure WiFi (avoid public networks for sensitive transactions)</li>
                  <li>Log out when done; monitor your account for unusual activity</li>
                  <li>Report suspicious activity immediately</li>
                  <li>Keep your email and contact information secure and up to date</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-medium text-black mb-2">You must not:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Share your password or login credentials</li>
                  <li>Give credentials to support — we will never ask for your password</li>
                  <li>Click suspicious links or download from untrusted sources</li>
                  <li>Disable security features or ignore security warnings</li>
                  <li>Store passwords insecurely</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-border-light" />

          {/* 12. Contact */}
          <section>
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">12. Contact for Security Concerns</h2>

            <div className="space-y-3">
              <div>
                <p className="font-medium text-black mb-1">Security Incidents</p>
                <p>Email: <a href="mailto:security@algorithec.ai" className="text-blue hover:underline">security@algorithec.ai</a></p>
                <p>Phone: +91 7396144250</p>
                <p>Available 24/7</p>
              </div>

              <div>
                <p className="font-medium text-black mb-1">Data Protection</p>
                <p>Email: <a href="mailto:privacy@algorithec.ai" className="text-blue hover:underline">privacy@algorithec.ai</a></p>
                <p>Hours: Monday–Friday, 10 AM – 6 PM IST</p>
              </div>

              <div className="mt-2">
                <address className="not-italic">
                  ALGORITHEC PRIVATE LIMITED<br />
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
