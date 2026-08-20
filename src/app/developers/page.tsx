import { PageStructuredData } from "@/components/PageStructuredData";
import type { Metadata } from "next";
import { PageHero, ContentSection } from "@/components/PageLayout";
import { FadeIn } from "@/components/ui/Motion";
import { Code, Book, Puzzle, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "API documentation, SDKs, and integration guides for the ALGORITHEC Decision Engine platform.",
  alternates: {
    canonical: "https://algorithec.com/developers",
  },
};

const comingSoon = [
  {
    icon: Code,
    title: "REST API",
    description: "Programmatic access to the Decision Engine for custom integrations.",
  },
  {
    icon: Puzzle,
    title: "SDKs",
    description: "Native libraries for JavaScript, Python, and mobile platforms.",
  },
  {
    icon: Book,
    title: "Integration Guides",
    description: "Step-by-step documentation for connecting your platform.",
  },
  {
    icon: Terminal,
    title: "CLI Tools",
    description: "Command-line utilities for testing and debugging decision flows.",
  },
];

export default function DevelopersPage() {
  return (
    <>
      <PageStructuredData
              title="Developers — ALGORITHEC"
              description="API documentation, SDKs, and integration guides for the ALGORITHEC Decision Engine platform."
              url="https://algorithec.com/developers"
              pageType="WebPage"
              breadcrumbs={[
                { name: "Home", url: "https://algorithec.com/" },
                { name: "Developers", url: "https://algorithec.com/developers" },
              ]}
            />
      <PageHero
        label="Developers"
        title="Build on the Decision Engine."
        description="Integrate ALGORITHEC's AI Decision Engine into your platform. API documentation, SDKs, and architecture guides coming soon."
      />

      <ContentSection background="gray">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue/5 text-blue text-sm font-medium rounded-full mb-6">
              Coming Soon
            </div>
            <p className="text-graphite leading-relaxed">
              We&apos;re building developer tools to make the Decision Engine
              accessible to every platform. Join our developer waitlist to get
              early access to APIs and SDKs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {comingSoon.map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white rounded-2xl border border-black/[0.04]"
              >
                <item.icon className="w-5 h-5 text-blue" />
                <h3 className="mt-4 text-base font-medium text-black">{item.title}</h3>
                <p className="mt-2 text-sm text-graphite leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="rounded-2xl bg-black p-6 md:p-8 font-mono text-sm overflow-x-auto">
              <p className="text-white/40">{"// Example API call (coming soon)"}</p>
              <p className="text-blue mt-2">
                POST <span className="text-white/80">/v1/decide</span>
              </p>
              <pre className="mt-4 text-white/60 text-xs leading-relaxed">
{`{
  "intent": "I want pizza under ₹300",
  "location": { "lat": 28.6139, "lng": 77.2090 },
  "domain": "food",
  "preferences": { "dietary": [], "priority": "value" }
}`}
              </pre>
              <pre className="mt-4 text-emerald/80 text-xs leading-relaxed">
{`{
  "decision": {
    "name": "Domino's Margherita",
    "price": 249,
    "eta_minutes": 22,
    "reasoning": "Best value within budget..."
  }
}`}
              </pre>
            </div>
          </div>
        </FadeIn>
      </ContentSection>
    </>
  );
}
