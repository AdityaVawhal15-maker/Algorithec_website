"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FadeIn, SectionHeader } from "@/components/ui/Motion";
import { pipelineSteps, decisionFactors } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="section-y section-padding bg-white">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          label="How It Works"
          title="From intent to decision in seconds."
          description="An elegant pipeline that transforms natural language into the one best recommendation."
          align="center"
          className="mx-auto"
        />

        <FadeIn delay={0.2}>
          <div className="mt-20 md:mt-28">
            {/* Desktop pipeline */}
            <div className="hidden lg:block">
              <PipelineDesktop
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                reducedMotion={!!shouldReduceMotion}
              />
            </div>

            {/* Mobile pipeline */}
            <div className="lg:hidden">
              <PipelineMobile
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            </div>
          </div>
        </FadeIn>

        {/* Decision factors */}
        <FadeIn delay={0.3}>
          <div className="mt-24 md:mt-32">
            <p className="label-caps text-center mb-8">Factors Analyzed</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto">
              {decisionFactors.map((factor, i) => (
                <motion.span
                  key={factor}
                  className="px-3 py-1.5 text-xs md:text-sm text-graphite bg-gray-50 rounded-full border border-black/[0.04]"
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  {factor}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function PipelineDesktop({
  activeStep,
  setActiveStep,
  reducedMotion,
}: {
  activeStep: number;
  setActiveStep: (i: number) => void;
  reducedMotion: boolean;
}) {
  return (
    <div className="relative">
      {/* Connection line */}
      <div className="absolute top-8 left-0 right-0 h-px bg-black/[0.06]" />
      <motion.div
        className="absolute top-8 left-0 h-px bg-blue origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: `${((activeStep + 1) / pipelineSteps.length) * 100}%` }}
      />

      <div className="grid grid-cols-7 gap-4">
        {pipelineSteps.map((step, i) => (
          <button
            key={step.id}
            type="button"
            className="relative flex flex-col items-center text-center group"
            onClick={() => setActiveStep(i)}
            aria-pressed={activeStep === i}
          >
            <motion.div
              className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                activeStep === i
                  ? "bg-blue text-white shadow-lg shadow-blue/20"
                  : "bg-gray-50 text-graphite group-hover:bg-black/[0.04]"
              }`}
              animate={
                reducedMotion || activeStep !== i
                  ? {}
                  : { scale: [1, 1.05, 1] }
              }
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-medium">{i + 1}</span>
            </motion.div>
            <p
              className={`mt-4 text-xs font-medium leading-tight transition-colors ${
                activeStep === i ? "text-black" : "text-graphite"
              }`}
            >
              {step.label}
            </p>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          className="mt-12 p-8 rounded-2xl bg-gray-50 border border-black/[0.04] text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-lg font-medium text-black">
            {pipelineSteps[activeStep].label}
          </p>
          <p className="mt-2 text-graphite">
            {pipelineSteps[activeStep].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function PipelineMobile({
  activeStep,
  setActiveStep,
}: {
  activeStep: number;
  setActiveStep: (i: number) => void;
}) {
  return (
    <div className="space-y-0">
      {pipelineSteps.map((step, i) => (
        <div key={step.id} className="relative">
          {i < pipelineSteps.length - 1 && (
            <div className="absolute left-6 top-14 bottom-0 w-px bg-black/[0.06]" />
          )}
          <button
            type="button"
            className="w-full flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors text-left"
            onClick={() => setActiveStep(i)}
          >
            <div
              className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                activeStep === i ? "bg-blue text-white" : "bg-gray-50 text-graphite"
              }`}
            >
              <span className="text-sm font-medium">{i + 1}</span>
            </div>
            <div className="flex-1 pt-1">
              <p className="text-sm font-medium text-black">{step.label}</p>
              {activeStep === i && (
                <motion.p
                  className="mt-1 text-sm text-graphite"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                >
                  {step.description}
                </motion.p>
              )}
            </div>
            <ChevronDown
              className={`w-4 h-4 text-graphite transition-transform ${
                activeStep === i ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  );
}
