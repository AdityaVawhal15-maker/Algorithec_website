"use client";

import { FadeIn, SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { domains } from "@/lib/utils";
import { Brain, Database, Layers, Shield, Zap, Globe } from "lucide-react";

const stack = [
  {
    icon: Brain,
    title: "Intent Parser",
    description: "Natural language understanding with domain specific entity extraction and constraint parsing.",
  },
  {
    icon: Database,
    title: "Real-Time Data Layer",
    description: "Unified API aggregating live data from food delivery, ride hailing, and commerce platforms.",
  },
  {
    icon: Layers,
    title: "Decision Engine",
    description: "Multi-objective optimization weighing price, quality, speed, and personal preferences.",
  },
  {
    icon: Zap,
    title: "Inference Pipeline",
    description: "Sub-second recommendation generation with explainable AI reasoning chains.",
  },
  {
    icon: Shield,
    title: "Trust Layer",
    description: "End-to-end encryption, privacy-preserving learning, and auditable decision logs.",
  },
  {
    icon: Globe,
    title: "Domain Adapter",
    description: "Pluggable architecture every new vertical connects to the same decision core.",
  },
];

export function Technology() {
  return (
    <section id="technology" className="section-y section-padding bg-gray-50">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          label="Technology"
          title="Built for decisions at planetary scale."
          description="A modular AI architecture designed to plug into any decision domain from food to finance."
        />

        <StaggerContainer className="mt-16 md:mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stack.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full p-8 bg-[#F5F0E8] rounded-2xl border border-black/[0.04] hover:border-blue/20 hover:shadow-lg hover:shadow-blue/[0.04] transition-all duration-500 group">
                <div className="w-11 h-11 rounded-xl bg-blue/5 flex items-center justify-center group-hover:bg-blue/10 transition-colors">
                  <item.icon className="w-5 h-5 text-blue" />
                </div>
                <h3 className="mt-5 text-base font-medium text-black">{item.title}</h3>
                <p className="mt-2 text-sm text-graphite leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Domain expansion */}
        <FadeIn delay={0.3}>
          <div className="mt-24 md:mt-32">
            <p className="label-caps text-center mb-8">Domain Expansion</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-xs text-graphite uppercase tracking-wider mb-3">Launch</p>
                <div className="flex gap-3">
                  {domains.launch.map((d) => (
                    <span
                      key={d}
                      className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-black/10" />
              <div className="text-center max-w-lg">
                <p className="text-xs text-graphite uppercase tracking-wider mb-3">Future</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {domains.future.map((d) => (
                    <span
                      key={d}
                      className="px-3 py-1.5 bg-white text-graphite text-xs rounded-full border border-black/[0.06]"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
