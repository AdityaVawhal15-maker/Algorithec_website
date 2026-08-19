import type { Metadata } from "next";
import { PageHero } from "@/components/PageLayout";
import { Technology } from "@/components/home/Technology";

export const metadata: Metadata = {
  title: "Technology | The AI Decision Engine Stack",
  description:
    "Explore ALGORITHEC's modular AI architecture: Intent Parser, Decision Engine, Real-Time Data Layer, Inference Pipeline, Trust Layer, and Domain Adapter — built for decisions at planetary scale.",
  alternates: {
    canonical: "https://algorithec.com/technology",
  },
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        label="Technology"
        title="Built for decisions at planetary scale."
        description="A modular AI architecture designed to plug into any decision domain — from food to finance."
      />
      <Technology />
    </>
  );
}
