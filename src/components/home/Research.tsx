"use client";

import { FadeIn, SectionHeader } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Award } from "lucide-react";

const researchAreas = [
  {
    title: "Multi-Objective Decision Optimization",
    description: "Novel algorithms for balancing competing factors in real time recommendation systems.",
    tag: "Decision Science",
  },
  {
    title: "Cross-Platform Intent Understanding",
    description: "Unified natural language processing across heterogeneous service domains.",
    tag: "NLP",
  },
  {
    title: "Explainable Recommendation Systems",
    description: "Generating human readable reasoning chains for AI-driven decisions.",
    tag: "XAI",
  },
];

export function Research() {
  return (
    <section className="section-y section-padding bg-gray-50">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-24">
          <SectionHeader
            label="Research"
            title="Advancing the science of decisions."
            description="Our research team publishes findings on decision optimization, intent understanding, and explainable AI."
          />
          <FadeIn delay={0.2}>
            <Button href="/research" variant="secondary" size="md">
              View Research
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {researchAreas.map((area, i) => (
            <FadeIn key={area.title} delay={i * 0.1}>
              <article className="h-full p-8 bg-[#F5F0E8] rounded-2xl border border-black/[0.04] hover:border-black/[0.08] transition-colors group">
                <span className="text-xs font-medium text-blue uppercase tracking-wider">
                  {area.tag}
                </span>
                <h3 className="mt-4 heading-editorial text-lg font-medium text-black group-hover:text-blue transition-colors">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm text-graphite leading-relaxed">
                  {area.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GovernmentRecognition() {
  return (
    <section className="section-y section-padding bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-3xl bg-black text-white p-10 md:p-16 lg:p-20">
          <div className="absolute inset-0 dot-grid opacity-10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue/10 rounded-full blur-[100px]" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-5 h-5 text-blue" />
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                  Government Recognition
                </p>
              </div>
              <h2 className="heading-editorial text-3xl md:text-4xl font-medium text-balance">
                Recognized for innovation in AI decision systems.
              </h2>
              <p className="mt-5 text-white/60 leading-relaxed max-w-lg">
                ALGORITHEC is committed to building AI that serves the public good.
                Our work in intelligent decision-making has been acknowledged by
                government innovation programs and regulatory bodies.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "AI Innovation", value: "Recognized" },
                  { label: "Data Privacy", value: "Compliant" },
                  { label: "Research Grants", value: "Awarded" },
                  { label: "Public Impact", value: "Verified" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08]"
                  >
                    <p className="text-xs text-white/40 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
