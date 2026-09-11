import type { Metadata } from "next";
import AboutExperience from "@/components/landing/AboutExperience";

export const metadata: Metadata = {
  title: "About | CloserX.AI",
  description:
    "Meet CloserX.ai, the white-label conversational AI platform built to help agencies launch, scale and own their voice AI offering.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutExperience />;
}
