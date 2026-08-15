"use client";

import { FadeIn, SectionHeader } from "@/components/ui/Motion";
import { domains } from "@/lib/utils";

const visionPoints = [
  "Every digital decision, optimized.",
  "One engine. Infinite domains.",
  "Intelligence that understands you.",
  "From food to finance  one AI.",
];

export function FutureVision() {
  return (
    <section className="section-y section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 line-grid opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px]">
        <SectionHeader
          label="Future Vision"
          title="One engine. Every decision."
          description="Every new domain plugs into the same AI Decision Engine. Shopping, hotels, travel, healthcare, finance the intelligence layer scales infinitely."
          align="center"
          className="mx-auto"
        />

        <FadeIn delay={0.2}>
          <div className="mt-16 md:mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {visionPoints.map((point, i) => (
              <div
                key={point}
                className="p-6 md:p-8 bg-[#F5F0E8] rounded-2xl border border-black/[0.04] text-center"
              >
                <span className="text-3xl font-light text-blue/30">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-4 text-sm font-medium text-black leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-16 flex flex-wrap justify-center gap-2 md:gap-3">
            {[...domains.launch, ...domains.future].map((d, i) => (
              <span
                key={d}
                className={`px-4 py-2 text-sm rounded-full border ${
                  i < domains.launch.length
                    ? "bg-black text-white border-black"
                    : "bg-white text-graphite border-black/[0.06]"
                }`}
              >
                {d}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
