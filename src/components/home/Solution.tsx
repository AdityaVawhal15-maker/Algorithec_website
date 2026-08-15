"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn, SectionHeader } from "@/components/ui/Motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Solution() {
  return (
    <section className="section-y section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 line-grid opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px]">
        <SectionHeader
          label="Our Solution"
          title="The Intelligence Layer above every digital decision."
          description="ALGORITHEC eliminates the entire decision-making process. Our AI understands user intent and recommends the ONE best decision  not more options. Better decisions."
          align="center"
          className="mx-auto"
        />

        <FadeIn delay={0.2}>
          <div className="mt-20 md:mt-28 flex flex-col items-center">
            <ComparisonDiagram />
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Sparkles,
                title: "Intent Understanding",
                text: "Natural language input parsed into structured decision parameters.",
              },
              {
                icon: ArrowRight,
                title: "One Recommendation",
                text: "A single, optimal choice with transparent reasoning  not endless scrolling.",
              },
              {
                icon: Sparkles,
                title: "Continuous Learning",
                text: "Every decision improves the engine. Preferences, context, and outcomes refine future recommendations.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-blue/5 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-blue" />
                </div>
                <h3 className="mt-4 text-sm font-medium text-black">{item.title}</h3>
                <p className="mt-2 text-sm text-graphite leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ComparisonDiagram() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-3xl">
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center">
        {/* Before */}
        <div className="p-6 md:p-8 rounded-2xl bg-gray-50 border border-black/[0.04]">
          <p className="label-caps mb-4">Before</p>
          <div className="space-y-2">
            {[92, 78, 85, 70, 88, 65, 95, 72].map((width, i) => (
              <motion.div
                key={i}
                className="h-2 rounded-full bg-black/[0.06]"
                style={{ width: `${width}%` }}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              />
            ))}
          </div>
          <p className="mt-4 text-xs text-graphite">847 options to compare</p>
        </div>

        {/* Arrow */}
        <motion.div
          className="hidden md:flex w-12 h-12 rounded-full bg-blue items-center justify-center"
          animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </motion.div>

        {/* After */}
        <div className="p-6 md:p-8 rounded-2xl bg-black text-white">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50 mb-4">
            After
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
            <div>
              <p className="text-sm font-medium">One best decision</p>
              <p className="text-xs text-white/60 mt-0.5">With clear reasoning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
