import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { Solution } from "@/components/home/Solution";
import { FlounaExperience } from "@/components/home/FlounaExperience";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Technology } from "@/components/home/Technology";
import { Security } from "@/components/home/Security";
import { Research, GovernmentRecognition } from "@/components/home/Research";
import { FutureVision } from "@/components/home/FutureVision";
import { EarlyAccess } from "@/components/home/EarlyAccess";
import { TrustSection } from "@/components/home/TrustSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <FlounaExperience />
      <HowItWorks />
      <Technology />
      <Security />
      <Research />
      <GovernmentRecognition />
      <FutureVision />
      <EarlyAccess />
      <TrustSection />
    </>
  );
}
