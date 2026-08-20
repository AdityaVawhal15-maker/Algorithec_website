import { PageStructuredData } from "@/components/PageStructuredData";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageLayout";
import { Technology } from "@/components/home/Technology";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore ALGORITHEC modular AI architecture: Intent Parser, Decision Engine, Real-Time Data Layer, and Inference Pipeline.",
  alternates: {
    canonical: "https://algorithec.com/technology",
  },
};

export default function TechnologyPage() {
  return (
    <>
      <PageStructuredData
              title="Technology — ALGORITHEC"
              description="Explore ALGORITHEC modular AI architecture: Intent Parser, Decision Engine, Real-Time Data Layer, and Inference Pipeline."
              url="https://algorithec.com/technology"
              pageType="WebPage"
              breadcrumbs={[
                { name: "Home", url: "https://algorithec.com/" },
                { name: "Technology", url: "https://algorithec.com/technology" },
              ]}
            />
      <PageHero
        label="Technology"
        title="Built for decisions at planetary scale."
        description="A modular AI architecture designed to plug into any decision domain — from food to finance."
      />
      <Technology />
    </>
  );
}
