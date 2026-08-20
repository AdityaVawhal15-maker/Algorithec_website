import { PageStructuredData } from "@/components/PageStructuredData";
import type { Metadata } from "next";
import { PageHero, ContentSection } from "@/components/PageLayout";
import { FadeIn } from "@/components/ui/Motion";
import { FlounaLogo } from "@/components/FlounaLogo";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, insights, and technological updates from the ALGORITHEC team.",
  alternates: {
    canonical: "https://algorithec.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageStructuredData
              title="Blog — ALGORITHEC"
              description="News, insights, and technological updates from the ALGORITHEC team."
              url="https://algorithec.com/blog"
              pageType="WebPage"
              breadcrumbs={[
                { name: "Home", url: "https://algorithec.com/" },
                { name: "Blog", url: "https://algorithec.com/blog" },
              ]}
            />
      <PageHero
        label="Blog"
        title="Insights from the team building the future of decisions."
        description="Product updates, engineering deep-dives, research findings, and company news."
      />

      <ContentSection>
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0}>
            <article className="group h-full p-8 rounded-2xl border border-black/[0.04] hover:border-black/[0.08] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-blue uppercase tracking-wider">
                  Product
                </span>
                <span className="text-xs text-graphite">Coming Soon</span>
              </div>
              <h2 className="heading-editorial text-xl font-medium text-black group-hover:text-blue transition-colors">
                Introducing <FlounaLogo size="sm" text="Flouna AI" />: The World&apos;s First AI Decision Engine
              </h2>
              <p className="mt-3 text-sm text-graphite leading-relaxed">
                Today we&apos;re unveiling <FlounaLogo size="xs" text="Flouna AI" /> — a fundamentally new approach to digital decision-making that recommends the one best choice instead of overwhelming you with options.
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={0.1}>
            <article className="group h-full p-8 rounded-2xl border border-black/[0.04] hover:border-black/[0.08] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-blue uppercase tracking-wider">
                  Insights
                </span>
                <span className="text-xs text-graphite">Coming Soon</span>
              </div>
              <h2 className="heading-editorial text-xl font-medium text-black group-hover:text-blue transition-colors">
                The Decision Paralysis Problem
              </h2>
              <p className="mt-3 text-sm text-graphite leading-relaxed">
                Why the app economy created more choice but worse outcomes, and what we&apos;re doing about it.
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={0.2}>
            <article className="group h-full p-8 rounded-2xl border border-black/[0.04] hover:border-black/[0.08] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-blue uppercase tracking-wider">
                  Engineering
                </span>
                <span className="text-xs text-graphite">Coming Soon</span>
              </div>
              <h2 className="heading-editorial text-xl font-medium text-black group-hover:text-blue transition-colors">
                Building the Intelligence Layer
              </h2>
              <p className="mt-3 text-sm text-graphite leading-relaxed">
                Our architectural vision for a universal decision engine that scales across every domain.
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={0.3}>
            <article className="group h-full p-8 rounded-2xl border border-black/[0.04] hover:border-black/[0.08] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-blue uppercase tracking-wider">
                  Policy
                </span>
                <span className="text-xs text-graphite">Coming Soon</span>
              </div>
              <h2 className="heading-editorial text-xl font-medium text-black group-hover:text-blue transition-colors">
                ALGORITHEC&apos;s Approach to Responsible AI
              </h2>
              <p className="mt-3 text-sm text-graphite leading-relaxed">
                Transparency, privacy, and accountability in every recommendation we make.
              </p>
            </article>
          </FadeIn>
        </div>
      </ContentSection>
    </>
  );
}
