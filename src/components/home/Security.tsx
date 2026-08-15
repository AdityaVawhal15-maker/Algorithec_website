"use client";

import { FadeIn, SectionHeader } from "@/components/ui/Motion";
import { Lock, Eye, Server, FileCheck, UserCheck, ShieldCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All user data and decision queries encrypted in transit and at rest using AES-256.",
  },
  {
    icon: Eye,
    title: "Privacy by Design",
    description: "Personal preferences learned locally. No selling of user data. Ever.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Enterprise-grade cloud infrastructure with SOC 2 compliance roadmap.",
  },
  {
    icon: FileCheck,
    title: "Auditable Decisions",
    description: "Every recommendation includes a transparent reasoning chain you can inspect.",
  },
  {
    icon: UserCheck,
    title: "User Control",
    description: "Full data export, deletion, and preference management at any time.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI",
    description: "Bias detection, fairness monitoring, and human oversight on critical decisions.",
  },
];

export function Security() {
  return (
    <section id="security" className="section-y section-padding bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <SectionHeader
            label="Security & Privacy"
            title="Trust is not optional. It's foundational."
            description="Building the intelligence layer for billions of decisions requires uncompromising security, privacy, and transparency."
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {securityFeatures.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-gray-50 border border-black/[0.04]">
                  <feature.icon className="w-5 h-5 text-blue" />
                  <h3 className="mt-4 text-sm font-medium text-black">{feature.title}</h3>
                  <p className="mt-2 text-xs text-graphite leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
