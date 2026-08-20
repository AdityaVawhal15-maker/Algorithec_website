import { PageStructuredData } from "@/components/PageStructuredData";
import type { Metadata } from "next";
import { PageHero, ContentSection } from "@/components/PageLayout";
import { FadeIn } from "@/components/ui/Motion";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Research",
  description:
    "AI research, algorithmic architecture, and benchmarks from ALGORITHEC.",
  alternates: {
    canonical: "https://algorithec.com/research",
  },
};

const publications = [
  {
    title: "Multi-Objective Optimization for Real-Time Decision Systems",
    category: "Decision Science",
    date: "Coming 2026",
    abstract:
      "A framework for balancing competing objectives in sub-second recommendation generation across heterogeneous platforms.",
  },
  {
    title: "Cross-Domain Intent Understanding with Unified Language Models",
    category: "Natural Language Processing",
    date: "Coming 2026",
    abstract:
      "Transfer learning approaches for parsing user intent across food, transportation, and commerce domains.",
  },
  {
    title: "Explainable AI for Consumer Decision Support",
    category: "Explainable AI",
    date: "Coming 2026",
    abstract:
      "Generating human-readable reasoning chains that build trust in AI-driven recommendations.",
  },
  {
    title: "ALGORITHEC Decision Engine: Architecture & Benchmarks",
    category: "Systems",
    date: "Coming 2026",
    abstract:
      "Technical overview of our decision pipeline, data layer, and performance benchmarks against baseline approaches.",
  },
];

const blogPosts = [
  {
    title: "Why We Built an AI Decision Engine",
    excerpt: "The story behind ALGORITHEC and our vision for intelligent decision-making.",
    date: "Coming Soon",
  },
  {
    title: "From 847 Options to One Decision",
    excerpt: "How our optimization algorithms reduce cognitive load while improving outcomes.",
    date: "Coming Soon",
  },
  {
    title: "Building Trust in AI Recommendations",
    excerpt: "Our approach to explainable AI and transparent decision reasoning.",
    date: "Coming Soon",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageStructuredData
              title="Research — ALGORITHEC"
              description="AI research, algorithmic architecture, and benchmarks from ALGORITHEC."
              url="https://algorithec.com/research"
              pageType="WebPage"
              breadcrumbs={[
                { name: "Home", url: "https://algorithec.com/" },
                { name: "Research", url: "https://algorithec.com/research" },
              ]}
            />
      <PageHero
        label="Research"
        title="Advancing the science of intelligent decisions."
        description="Engineering blogs, AI research, architecture deep-dives, and benchmarks from the ALGORITHEC research team."
      />

      <ContentSection>
        <FadeIn>
          <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-12">
            Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub) => (
              <article
                key={pub.title}
                className="p-8 rounded-2xl border border-black/[0.04] hover:border-black/[0.08] transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-blue uppercase tracking-wider">
                      {pub.category}
                    </span>
                    <h3 className="mt-2 text-lg font-medium text-black group-hover:text-blue transition-colors">
                      {pub.title}
                    </h3>
                    <p className="mt-3 text-sm text-graphite leading-relaxed max-w-2xl">
                      {pub.abstract}
                    </p>
                    <p className="mt-3 text-xs text-graphite/60">{pub.date}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-graphite flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </ContentSection>

      <ContentSection background="gray">
        <FadeIn>
          <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-12">
            Engineering Blog
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="p-6 bg-white rounded-2xl border border-black/[0.04]"
              >
                <p className="text-xs text-graphite">{post.date}</p>
                <h3 className="mt-3 text-base font-medium text-black">{post.title}</h3>
                <p className="mt-2 text-sm text-graphite leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </FadeIn>
      </ContentSection>
    </>
  );
}
