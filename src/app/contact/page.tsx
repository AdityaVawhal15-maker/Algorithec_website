"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero, ContentSection } from "@/components/PageLayout";
import { FadeIn } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";
import { Check, Mail, MessageSquare, Newspaper } from "lucide-react";
import { FlounaLogo } from "@/components/FlounaLogo";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "", type: "general" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        label="Contact"
        title="Get in touch."
        description={
          <>
            Whether you&apos;re interested in <FlounaLogo size="sm" text="Flouna AI" />, partnerships, press inquiries, or careers — we&apos;d love to hear from you.
          </>
        }
      />

      <ContentSection background="gray">
        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <div className="space-y-8">
              <ContactCard
                id="support"
                icon={MessageSquare}
                title="Support"
                description={
                  <>
                    Need help with <FlounaLogo size="xs" text="Flouna AI" />? Our support team is here for you.
                  </>
                }
                email="info@algorithec.com"
              />
              <ContactCard
                id="press"
                icon={Newspaper}
                title="Press"
                description="Media inquiries and press kit requests."
                email="info@algorithec.com"
              />
              <ContactCard
                icon={Mail}
                title="General"
                description="Partnerships, business inquiries, and everything else."
                email="info@algorithec.com"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="p-8 bg-[#F5F0E8] rounded-2xl border border-black/[0.04]">
                <h2 className="text-lg font-medium text-black mb-6">Send a message</h2>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-graphite mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-black/[0.06] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-graphite mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-black/[0.06] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm text-graphite mb-1.5">
                      Inquiry Type
                    </label>
                    <select
                      id="type"
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-black/[0.06] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Support</option>
                      <option value="press">Press</option>
                      <option value="careers">Careers</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-graphite mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-black/[0.06] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent resize-none"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <p className="mt-4 text-xs text-red-500">{errorMessage}</p>
                )}

                <Button type="submit" disabled={isSubmitting} variant="primary" size="md" className="w-full mt-6">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            ) : (
              <motion.div
                className="p-8 bg-[#F5F0E8] rounded-2xl border border-black/[0.04] flex flex-col items-center justify-center text-center min-h-[400px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-emerald" />
                </div>
                <p className="text-lg font-medium text-black">Message sent.</p>
                <p className="mt-2 text-sm text-graphite">We&apos;ll get back to you within 48 hours.</p>
              </motion.div>
            )}
          </FadeIn>
        </div>
      </ContentSection>
    </>
  );
}

function ContactCard({
  id,
  icon: Icon,
  title,
  description,
  email,
}: {
  id?: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: React.ReactNode;
  email: string;
}) {
  return (
    <div id={id} className="flex gap-4">
      <div className="w-10 h-10 rounded-xl bg-blue/5 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-blue" />
      </div>
      <div>
        <h3 className="text-base font-medium text-black">{title}</h3>
        <p className="mt-1 text-sm text-graphite">{description}</p>
        <a
          href={`mailto:${email}`}
          className="mt-2 inline-block text-sm text-blue hover:underline"
        >
          {email}
        </a>
      </div>
    </div>
  );
}
