"use client";

import { FadeIn, SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const problems = [
  {
    stat: "12+",
    label: "Apps per decision",
    description: "Average number of applications users switch between to make a single choice.",
  },
  {
    stat: "847",
    label: "Options to compare",
    description: "Prices, ratings, reviews, offers, ETAs  overwhelming cognitive load.",
  },
  {
    stat: "23 min",
    label: "Wasted daily",
    description: "Time spent comparing instead of deciding, across food, rides, and shopping.",
  },
];

const failurePoints = [
  {
    title: "Too many choices",
    description:
      "Every app shows hundreds of options. More listings don't mean better decisions  they mean more confusion.",
  },
  {
    title: "Fragmented data",
    description:
      "Prices on one app. Reviews on another. ETAs somewhere else. No single source of truth.",
  },
  {
    title: "No intelligence",
    description:
      "Current platforms optimize for engagement, not outcomes. They want you scrolling, not deciding.",
  },
  {
    title: "Context ignored",
    description:
      "Weather, traffic, budget, preferences, history  none of it factors into what you see.",
  },
];

export function Problem() {
  return (
    <>
      <section id="problem" className="section-y section-padding bg-white">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeader
            label="The Problem"
            title="Every day, millions of people waste time deciding."
            description="Food. Rides. Shopping. Travel. Hotels. Healthcare. Finance. Users compare prices, ratings, reviews, offers, ETAs, quality, distance, and availability  and still don't know which option is actually the best."
          />

          <StaggerContainer className="mt-16 md:mt-24 grid md:grid-cols-3 gap-8 md:gap-12">
            {problems.map((item) => (
              <StaggerItem key={item.label}>
                <div className="group">
                  <p className="heading-display text-5xl md:text-6xl font-medium text-black group-hover:text-blue transition-colors duration-500">
                    {item.stat}
                  </p>
                  <p className="mt-3 text-sm font-medium text-black">{item.label}</p>
                  <p className="mt-2 text-sm text-graphite leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-y section-padding bg-gray-50">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeader
            label="Why Current Apps Fail"
            title="More options. Worse decisions."
            description="The app economy promised convenience. Instead, it created decision paralysis."
          />

          <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-6 md:gap-8">
            {failurePoints.map((point, i) => (
              <FadeIn key={point.title} delay={i * 0.1}>
                <div className="h-full p-8 md:p-10 bg-[#F5F0E8] rounded-2xl border border-black/[0.04] hover:border-black/[0.08] transition-colors duration-500">
                  <span className="text-xs font-medium text-blue uppercase tracking-[0.15em]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 heading-editorial text-xl md:text-2xl font-medium text-black">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-graphite leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
