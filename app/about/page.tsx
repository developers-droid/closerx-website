import type { Metadata } from "next";
import SiteNav from "@/components/sections/SiteNav";
import AboutHero from "@/components/sections/AboutHero";
import Stats from "@/components/sections/Stats";
import Faq from "@/components/sections/Faq";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About | CloserX.AI",
  description:
    "Get to know CloserX.ai — the whitelabel AI calling platform for agencies — plus answers to the questions we get asked most.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="relative overflow-hidden">
        <AboutHero />
        <Stats />
        <Faq />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
