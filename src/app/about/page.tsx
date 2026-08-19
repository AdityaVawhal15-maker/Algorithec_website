import type { Metadata } from "next";
import { PageHero, ContentSection, ContentBlock } from "@/components/PageLayout";
import { FadeIn } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "About ALGORITHEC | Building the Future of Intelligent Decisions",
  description:
    "Learn about ALGORITHEC's vision, mission, leadership, and values. We are building the Intelligence Layer above every digital decision.",
  alternates: {
    canonical: "https://algorithec.com/about",
  },
};

const values = [
  {
    title: "Intelligence First",
    description: "Every product decision starts with: does this make decisions better?",
  },
  {
    title: "Radical Simplicity",
    description: "Complexity is our job, not the user's. One answer beats a thousand options.",
  },
  {
    title: "Trust by Default",
    description: "Transparent reasoning, privacy by design, and accountable AI.",
  },
  {
    title: "Human-Centered",
    description: "Technology should serve people, not capture their attention.",
  },
  {
    title: "Global Scale",
    description: "Built for billions of decisions across every culture and context.",
  },
  {
    title: "Scientific Rigor",
    description: "Research driven development with measurable outcomes.",
  },
];

const leadership = [
  {
    name: "Leadership Team",
    role: "Founding Team",
    bio: "A team of AI researchers, engineers, and product builders united by the belief that decision-making should be intelligent, not overwhelming.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Building the intelligence layer for every decision."
        description="ALGORITHEC is an Artificial Intelligence company building the infrastructure that makes digital decisions intelligent."
      />

      <ContentSection>
        <ContentBlock title="Vision">
          <p className="text-graphite leading-relaxed text-lg">
            To become the intelligence layer above every digital decision  making
            life simpler for billions of people by eliminating decision paralysis
            and delivering the one best choice, every time.
          </p>
        </ContentBlock>
      </ContentSection>

      <ContentSection background="gray">
        <ContentBlock title="Mission">
          <p className="text-graphite leading-relaxed text-lg">
            We build AI that understands human intent and recommends optimal
            decisions across every domain of daily life. Not more options. Better
            decisions.
          </p>
        </ContentBlock>
      </ContentSection>

      <ContentSection>
        <ContentBlock title="Our Story">
          <div className="space-y-4 text-graphite leading-relaxed">
            <p>
              Every day, millions of people waste time switching between multiple
              applications just to make one decision. Food. Rides. Shopping.
              Travel. Hotels. Healthcare. Finance.
            </p>
            <p>
              ALGORITHEC was founded on a simple observation: the app economy
              created infinite choice but zero intelligence. Users compare prices,
              ratings, reviews, offers, ETAs, quality, distance, and availability
               and still don&apos;t know which option is actually the best.
            </p>
            <p>
              We set out to build something fundamentally different. Not another
              marketplace. Not another delivery app. The Intelligence Layer above
              every digital decision.
            </p>
          </div>
        </ContentBlock>
      </ContentSection>

      <ContentSection background="gray">
        <FadeIn>
          <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-12">
            Leadership
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="p-8 bg-white rounded-2xl border border-black/[0.04]"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-5">
                  <span className="text-2xl font-light text-blue">A</span>
                </div>
                <h3 className="text-lg font-medium text-black">{person.name}</h3>
                <p className="text-sm text-blue mt-1">{person.role}</p>
                <p className="mt-3 text-sm text-graphite leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </ContentSection>

      <ContentSection>
        <FadeIn>
          <h2 className="heading-editorial text-2xl md:text-3xl font-medium text-black mb-12">
            Company Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl border border-black/[0.04] hover:border-black/[0.08] transition-colors"
              >
                <h3 className="text-base font-medium text-black">{value.title}</h3>
                <p className="mt-2 text-sm text-graphite leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </ContentSection>

      <ContentSection background="gray">
        <ContentBlock title="Government Recognition">
          <p className="text-graphite leading-relaxed">
            ALGORITHEC&apos;s work in AI decision systems has been recognized by
            government innovation programs. We are committed to building AI that
            serves the public good, with transparent operations and responsible
            development practices.
          </p>
        </ContentBlock>
      </ContentSection>
    </>
  );
}
