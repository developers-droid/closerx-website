import SiteNav from "@/components/sections/SiteNav";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Approach from "@/components/sections/Approach";
import Marquee from "@/components/sections/Marquee";
import Benefits from "@/components/sections/Benefits";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="relative overflow-hidden">
        <Hero />
        <Services />
        <Approach />
        <Marquee />
        <Benefits />
        <Stats />
        <Features />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
