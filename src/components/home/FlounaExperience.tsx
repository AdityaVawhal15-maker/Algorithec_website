"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn, SectionHeader } from "@/components/ui/Motion";
import { Utensils, Car, MessageSquare } from "lucide-react";

const examples = [
  {
    query: "I want pizza under ₹300.",
    domain: "Food",
    icon: Utensils,
  },
  {
    query: "Book the fastest ride.",
    domain: "Rides",
    icon: Car,
  },
  {
    query: "Find the healthiest meal nearby.",
    domain: "Food",
    icon: Utensils,
  },
];

const domains = [
  {
    id: "food",
    title: "Food",
    description:
      "Describe what you're craving. Flouna analyzes restaurants, delivery times, prices, ratings, and offers across every platform  then recommends the single best meal.",
    example: "Margherita from Domino's  ₹249, 22 min, best value in your area.",
    icon: Utensils,
    color: "bg-orange-50 text-orange-600",
    status: "Available",
  },
  {
    id: "rides",
    title: "Rides",
    description:
      "Tell Flouna where you need to go. It compares real time ETAs, surge pricing, driver ratings, and traffic conditions across ride platforms.",
    example: "Uber Go  4 min away, ₹142, highest rated driver nearby.",
    icon: Car,
    color: "bg-blue/5 text-blue",
    status: "Available",
  },
];

export function FlounaExperience() {
  return (
    <section id="flouna" className="section-y section-padding bg-gray-50">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          label="Flouna AI"
          title="The world's first AI Decision Engine."
          description="Users simply describe what they need in natural language. Flouna understands intent, retrieves real time data, and presents one intelligent recommendation."
        />

        {/* Example queries */}
        <FadeIn delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-3">
            {examples.map((ex) => (
              <div
                key={ex.query}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-full border border-black/[0.06] text-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-graphite" />
                <span className="text-graphite">&ldquo;{ex.query}&rdquo;</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Domain cards */}
        <div className="mt-20 grid lg:grid-cols-2 gap-8">
          {domains.map((domain, i) => (
            <FadeIn key={domain.id} delay={i * 0.15}>
              <DomainCard domain={domain} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function DomainCard({
  domain,
}: {
  domain: (typeof domains)[0];
}) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = domain.icon;

  return (
    <div className="group relative h-full bg-white rounded-3xl border border-black/[0.04] overflow-hidden hover:border-black/[0.08] transition-all duration-500">
      <div className="p-8 md:p-10">
        <div className="flex items-start justify-between">
          <div className={`w-12 h-12 rounded-2xl ${domain.color} flex items-center justify-center`}>
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium uppercase tracking-wider text-emerald bg-emerald/10 px-3 py-1 rounded-full">
            {domain.status}
          </span>
        </div>

        <h3 className="mt-6 heading-editorial text-2xl md:text-3xl font-medium text-black">
          {domain.title}
        </h3>
        <p className="mt-3 text-graphite leading-relaxed">{domain.description}</p>

        <motion.div
          className="mt-8 p-4 rounded-2xl bg-gray-50 border border-black/[0.04]"
          whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <p className="text-[10px] uppercase tracking-[0.15em] text-blue font-medium mb-2">
            Example Decision
          </p>
          <p className="text-sm text-black font-medium">{domain.example}</p>
        </motion.div>
      </div>

      <div className="h-1 bg-gradient-to-r from-blue/0 via-blue/40 to-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
