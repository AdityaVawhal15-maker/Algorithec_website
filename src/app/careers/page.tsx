import type { Metadata } from "next";
import { PageHero, ContentSection } from "@/components/PageLayout";
import { FadeIn } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Heart, Globe, Zap, Coffee, BookOpen } from "lucide-react";
import { FlounaLogo } from "@/components/FlounaLogo";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join ALGORITHEC and help engineer intelligent AI decision infrastructure.",
  alternates: {
    canonical: "https://algorithec.com/careers",
  },
};

const benefits = [
  { icon: Globe, title: "Remote-First", description: "Work from anywhere. We believe great talent is everywhere." },
  { icon: Zap, title: "Impact at Scale", description: "Your work affects billions of future decisions." },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health coverage and wellness programs." },
  { icon: Coffee, title: "Flexible Hours", description: "We optimize for output, not hours at a desk." },
  { icon: BookOpen, title: "Learning Budget", description: "Annual budget for courses, conferences, and books." },
];

const openRoles = [
  {
    title: "ML Intern — Decision Engine",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Research Scientist — NLP & Intent Understanding",
    team: "Research",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer — Flouna AI",
    team: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Backend Intern — Data Platform",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "DevOps Intern — Infrastructure",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title="Help us build the future of decisions."
        description="Join a team of researchers, engineers, and designers building the intelligence layer above every digital decision."
      />

      <ContentSection background="gray">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-graphite leading-relaxed">
              We&apos;re not building another app. We&apos;re building the
              infrastructure that makes every digital decision intelligent.
              If that excites you, we want to hear from you.
            </p>
          </div>
        </FadeIn>
      </ContentSection>

      <ContentSection>
        <FadeIn>
          <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-12">
            Benefits & Culture
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl border border-black/[0.04]"
              >
                <benefit.icon className="w-5 h-5 text-blue" />
                <h3 className="mt-4 text-base font-medium text-black">{benefit.title}</h3>
                <p className="mt-2 text-sm text-graphite leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </ContentSection>

      <ContentSection background="gray">
        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black">
              Open Roles
            </h2>
            <p className="text-sm text-graphite hidden md:block">
              {openRoles.length} positions
            </p>
          </div>
          <div className="space-y-3">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-white rounded-2xl border border-black/[0.04] hover:border-black/[0.08] transition-colors group"
              >
                <div>
                  <h3 className="text-base font-medium text-black group-hover:text-blue transition-colors">
                    {role.title.includes("Flouna AI") ? (
                      <>
                        Product Designer — <FlounaLogo size="xs" text="Flouna AI" />
                      </>
                    ) : (
                      role.title
                    )}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="text-xs text-graphite">{role.team}</span>
                    <span className="text-xs text-graphite">·</span>
                    <span className="text-xs text-graphite">{role.location}</span>
                    <span className="text-xs text-graphite">·</span>
                    <span className="text-xs text-graphite">{role.type}</span>
                  </div>
                </div>
                <Button href="/contact" variant="secondary" size="sm">
                  Apply
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            ))}
          </div>
        </FadeIn>
      </ContentSection>
    </>
  );
}
