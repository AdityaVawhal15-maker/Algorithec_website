"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Motion";
import { Play } from "lucide-react";
import { FlounaLogo } from "@/components/FlounaLogo";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-gray-50" />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative section-padding mx-auto max-w-[1400px] w-full pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Copy */}
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <p className="label-caps mb-6 inline-flex items-center gap-1.5">
                <FlounaLogo size="sm" text="Flouna AI" />
                <span>· The AI Decision Engine</span>
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="heading-display text-[clamp(1.85rem,3.4vw,3.35rem)] font-extrabold leading-[1.18] tracking-tight text-balance">
                <span className="block text-black">
                  Intelligent Decision Engine
                </span>
                <span className="block text-[#7B0C1B] mt-2 md:mt-3">
                  Across Commerce and Services sectors
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="mt-7 text-lg md:text-xl text-graphite leading-relaxed max-w-lg">
                <FlounaLogo size="md" text="Flouna AI" className="font-semibold text-black" /> understands what you need and recommends the best
                decision instantly.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/#early-access" variant="primary" size="lg">
                  <FlounaLogo size="sm" theme="dark" text="Try Flouna AI" />
                </Button>
                <Button href="/#how-it-works" variant="secondary" size="lg">
                  <Play className="w-4 h-4 mr-2 fill-current" />
                  Watch Demo
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.65}>
              <p className="mt-8 text-sm tagline text-graphite/70">
                One Decision. Infinite Possibilities.
              </p>
            </FadeIn>
          </div>

          {/* Product Mockup */}
          <FadeIn delay={0.3} direction="left" className="relative flex justify-center lg:justify-end max-w-full overflow-hidden lg:overflow-visible py-4">
            <ProductMockup reducedMotion={!!shouldReduceMotion} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ProductMockup({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* Phone frame */}
      <motion.div
        className="relative mx-auto w-[280px] sm:w-[320px] md:w-[360px]"
        initial={reducedMotion ? {} : { y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative rounded-[3rem] border border-black/8 bg-white p-3 shadow-2xl shadow-black/[0.08]">
          <div className="rounded-[2.5rem] overflow-hidden bg-gray-50 border border-black/5">
            {/* Status bar */}
            <div className="flex items-center justify-between px-6 py-3 bg-white">
              <span className="text-[10px] font-medium text-black">9:41</span>
              <div className="w-20 h-5 bg-black rounded-full" />
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-black/20" />
                <div className="w-3 h-3 rounded-full bg-black/20" />
              </div>
            </div>

            {/* App content */}
            <div className="px-5 pb-8 pt-2">
              <div className="mb-1">
                <FlounaLogo size="xs" text="Flouna AI" className="text-[10px] uppercase tracking-[0.2em] text-graphite font-semibold" />
              </div>
              <p className="text-sm font-medium text-black mb-6">
                What would you like?
              </p>

              {/* User query bubble */}
              <div className="flex justify-end mb-4">
                <div className="bg-black text-white text-xs px-4 py-2.5 rounded-2xl rounded-br-md max-w-[85%]">
                  I want pizza under ₹300
                </div>
              </div>

              {/* AI response */}
              <motion.div
                className="bg-white border border-black/6 rounded-2xl p-4 shadow-sm"
                initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue" />
                  </div>
                  <span className="text-[10px] font-medium text-blue uppercase tracking-wider">
                    Best Decision
                  </span>
                </div>

                <div className="flex gap-3">
                  <div className="w-14 h-14 rounded-xl bg-orange-100 flex-shrink-0 flex items-center justify-center text-2xl">
                    🍕
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-black truncate">
                      Domino&apos;s Margherita
                    </p>
                    <p className="text-xs text-graphite mt-0.5">
                      ₹249 · 22 min · 4.6★
                    </p>
                    <p className="text-[11px] text-graphite/80 mt-2 leading-relaxed">
                      Best value within budget. Fastest delivery in your area
                      with highest recent ratings.
                    </p>
                  </div>
                </div>

                <motion.button
                  className="w-full mt-4 py-2.5 bg-blue text-white text-xs font-medium rounded-xl"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Order Now
                </motion.button>
              </motion.div>

              {/* Typing indicator */}
              <motion.div
                className="flex gap-1 mt-4 px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-graphite/30"
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating cards */}
        <motion.div
          className="absolute -left-8 md:-left-16 top-1/4 glass-surface rounded-2xl px-4 py-3 shadow-lg hidden sm:block"
          animate={reducedMotion ? {} : { y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-[10px] text-graphite uppercase tracking-wider">Analyzing</p>
          <p className="text-sm font-medium text-black mt-0.5">847 options</p>
        </motion.div>

        <motion.div
          className="absolute -right-6 md:-right-12 bottom-1/3 glass-surface rounded-2xl px-4 py-3 shadow-lg hidden sm:block"
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <p className="text-[10px] text-emerald uppercase tracking-wider">Result</p>
          <p className="text-sm font-medium text-black mt-0.5">1 decision</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
