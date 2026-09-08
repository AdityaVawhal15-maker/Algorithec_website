"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, SectionHeader } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "lucide-react";
import { FlounaLogo } from "@/components/FlounaLogo";

export function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to join waitlist.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="early-access" className="section-y section-padding bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-3xl bg-gray-50 border border-black/[0.04] p-10 md:p-16 lg:p-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/[0.03] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-2xl mx-auto text-center">
            <FadeIn className="max-w-3xl mx-auto text-center">
              <p className="label-caps mb-4">Early Access</p>
              <h2 className="heading-editorial text-3xl md:text-4xl lg:text-5xl font-medium text-black text-balance">
                Be among the first to decide smarter.
              </h2>
              <p className="mt-5 text-lg md:text-xl text-graphite leading-relaxed text-balance">
                Join the waitlist for <FlounaLogo size="sm" text="Flouna AI" className="font-semibold text-black" />. Early access members get priority onboarding, direct product feedback channels, and exclusive launch benefits.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  {/* Honeypot — hidden from real users, traps bots */}
                  <input
                    type="text"
                    name="honeypot"
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ display: "none" }}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={isSubmitting}
                    className="flex-1 px-5 py-3.5 bg-white border border-black/10 rounded-full text-sm text-black placeholder:text-graphite/50 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-shadow"
                    aria-label="Email address"
                  />
                  <Button
                    variant="primary"
                    size="md"
                    className="sm:px-8"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Joining…" : "Join Waitlist"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>
                </form>
              ) : (
                <motion.div
                  className="mt-10 flex flex-col items-center gap-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald" />
                  </div>
                  <p className="text-sm font-medium text-black">You&apos;re on the list.</p>
                  <p className="text-sm text-graphite">We&apos;ll be in touch soon.</p>
                </motion.div>
              )}

              {errorMessage && !submitted && (
                <p className="mt-3 text-sm text-red-600" role="alert">
                  {errorMessage}
                </p>
              )}

              <p className="mt-6 text-xs text-graphite/60">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
