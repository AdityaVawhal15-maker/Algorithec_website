"use client";

import { FadeIn } from "@/components/ui/Motion";
import { FlounaLogo } from "@/components/FlounaLogo";
import {
  Building2,
  ShieldCheck,
  Lock,
  Brain,
  Globe,
  Cpu,
  MapPin,
} from "lucide-react";

/* ─── Built with Trust Panel ─── */
const trustPillars = [
  {
    icon: Building2,
    label: "Government Recognition",
    description:
      "Recognized startup enterprise under Startup India initiative.",
  },
  {
    icon: ShieldCheck,
    label: "Enterprise Ready",
    description: "Enterprise-grade infrastructure built for scale and reliability.",
  },
  {
    icon: Lock,
    label: "Privacy First",
    description: "Privacy-by-design architecture. No data selling. Ever.",
  },
  {
    icon: Brain,
    label: "AI Built Responsibly",
    description: "Responsible AI principles with bias monitoring and human oversight.",
  },
];

/* ─── Enterprise Trust Cards ─── */
const trustCards = [
  {
    icon: Building2,
    title: "Government Recognition",
    items: ["Recognized Startup Enterprise", "Official Regulatory Alignment"],
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Security",
    items: [
      "Privacy-first platform",
      "Secure authentication",
      "Enterprise-grade engineering",
      "Responsible AI principles",
    ],
  },
  {
    icon: Cpu,
    title: "AI Innovation",
    items: [
      "AI Decision Intelligence",
      "Multi-domain AI platform",
      "Intelligent orchestration",
      "Built for future expansion",
    ],
  },
  {
    icon: MapPin,
    title: "Made in India",
    items: [
      "Designed in India",
      "Built in Bengaluru",
      "Built for worldwide scale",
    ],
  },
];

/* ─── Recognition Timeline ─── */
const timelineNodes = [
  { label: "Company Incorporated", active: true },
  { label: "Government Recognition", active: true },
  { label: "Flouna AI Launch", active: true, isFlouna: true },
  { label: "Global Expansion", active: false },
];

/* ─── Main Export ─── */
export function TrustSection() {
  return (
    <div aria-label="Trust and recognition">
      {/* ─── Part 1: Built with Trust ─── */}
      <section
        aria-labelledby="trust-headline"
        className="section-y section-padding bg-white border-t border-border-light"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center mb-20 md:mb-24">
              <p className="label-caps mb-5">Trust & Responsibility</p>
              <h2
                id="trust-headline"
                className="heading-editorial text-3xl md:text-4xl lg:text-5xl text-black text-balance"
              >
                Built with Trust.
                <br />
                Designed for Scale.
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {trustPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={pillar.label} delay={i * 0.08}>
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-black/[0.05] flex items-center justify-center flex-shrink-0">
                      <Icon
                        className="w-5 h-5 text-black/60"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black mb-1.5">
                        {pillar.label}
                      </p>
                      <p className="text-sm text-graphite leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Part 2: Enterprise Trust Grid ─── */}
      <section
        aria-labelledby="enterprise-headline"
        className="section-y section-padding bg-gray-50"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
              <p className="label-caps mb-5">Why Enterprises Trust ALGORITHEC</p>
              <h2
                id="enterprise-headline"
                className="heading-editorial text-3xl md:text-4xl text-black text-balance"
              >
                Built on the foundations enterprises require.
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {trustCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <FadeIn key={card.title} delay={i * 0.08}>
                  <div className="card-interactive h-full p-8 md:p-10 rounded-2xl bg-white border border-black/[0.04] hover:border-black/[0.08]">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-black/[0.06] flex items-center justify-center mb-6">
                      <Icon
                        className="w-5 h-5 text-black/50"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-base font-semibold text-black mb-4">
                      {card.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {card.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm text-graphite"
                        >
                          <span
                            className="w-1 h-1 rounded-full bg-black/20 flex-shrink-0"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Part 3: Company Identity Panel ─── */}
      <section
        aria-label="Company identity"
        className="section-y section-padding bg-white border-t border-border-light"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="label-caps mb-8">The Company</p>
              <div className="space-y-5">
                <div>
                  <h2 className="heading-editorial text-2xl md:text-3xl lg:text-4xl text-black">
                    ALGORITHEC PRIVATE LIMITED
                  </h2>
                  <p className="mt-2 text-sm text-graphite font-medium tracking-wide">
                    Artificial Intelligence Company
                  </p>
                </div>
                <div className="w-12 h-px bg-black/10" aria-hidden="true" />
                <div className="space-y-2">
                  <p className="text-sm text-graphite flex items-center gap-1.5">
                    Creator of <FlounaLogo size="xs" text="Flouna AI" />
                  </p>
                  <p className="text-sm text-graphite">Founded in India</p>
                  <p className="text-sm text-graphite">Built in Bengaluru</p>
                </div>
                <p className="text-base md:text-lg text-black font-medium leading-relaxed max-w-xl">
                  Building the AI Decision Engine for the world.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Part 4: Recognition Timeline ─── */}
      <section
        aria-label="Company recognition timeline"
        className="section-y section-padding bg-gray-50 border-t border-border-light"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="label-caps mb-12 text-center">Our Journey</p>
            {/* Desktop timeline */}
            <div className="hidden md:block relative">
              <div
                className="absolute top-[3px] left-0 right-0 h-px bg-black/[0.08]"
                aria-hidden="true"
              />
              <div className="grid grid-cols-4 gap-4">
                {timelineNodes.map((node) => (
                  <div
                    key={node.label}
                    className="flex flex-col items-center text-center pt-0"
                  >
                    <div
                      className={`timeline-node mb-5 ${node.active ? "active" : "bg-black/20"}`}
                      aria-hidden="true"
                    />
                    {node.isFlouna ? (
                      <div className="text-xs font-medium text-black">
                        <FlounaLogo size="xs" text="Flouna AI" /> Launch
                      </div>
                    ) : (
                      <p
                        className={`text-xs leading-snug ${
                          node.active ? "text-black font-medium" : "text-graphite/50"
                        }`}
                      >
                        {node.label}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Mobile timeline */}
            <div className="md:hidden relative pl-5">
              <div
                className="absolute left-[3px] top-0 bottom-0 w-px bg-black/[0.08]"
                aria-hidden="true"
              />
              <div className="space-y-7">
                {timelineNodes.map((node) => (
                  <div key={node.label} className="flex items-start gap-4">
                    <div
                      className={`timeline-node mt-0.5 flex-shrink-0 ${node.active ? "active" : "bg-black/20"}`}
                      aria-hidden="true"
                    />
                    {node.isFlouna ? (
                      <div className="text-sm font-medium text-black">
                        <FlounaLogo size="xs" text="Flouna AI" /> Launch
                      </div>
                    ) : (
                      <p
                        className={`text-sm leading-snug ${
                          node.active ? "text-black font-medium" : "text-graphite/50"
                        }`}
                      >
                        {node.label}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Part 5: Product Relationship Panel ─── */}
      <section
        aria-label="Product relationship"
        className="py-12 section-padding bg-white border-t border-b border-border-light"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex items-center gap-2">
                <Globe
                  className="w-4 h-4 text-graphite/50"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <FlounaLogo size="sm" text="Flouna AI" className="font-semibold text-black" />
              </div>
              <span
                className="hidden sm:block w-px h-4 bg-black/10"
                aria-hidden="true"
              />
              <span className="text-sm text-graphite">
                A product by{" "}
                <span className="font-medium text-black">
                  ALGORITHEC PRIVATE LIMITED
                </span>
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
