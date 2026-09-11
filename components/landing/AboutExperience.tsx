"use client";

import { motion, useScroll, useSpring } from "motion/react";
import ContactForm from "@/components/forms/ContactForm";
import { Footer, Navigation } from "@/components/landing/CloserExperience";
import { START_NOW_URL } from "@/lib/links";

const principles = [
  { no: "01", title: "Sound human", copy: "Technology should disappear inside the conversation. We obsess over pace, tone and timing so every call feels natural." },
  { no: "02", title: "Build for outcomes", copy: "A convincing voice is only useful when it moves work forward. Every interaction is designed to qualify, book and convert." },
  { no: "03", title: "Keep agencies in control", copy: "Your brand stays in front. Your clients stay yours. The infrastructure scales quietly behind the business you are building." },
];

const proof = [["150+", "Active clients"], ["1,000+", "AI agents created"], ["15K+", "Appointments booked"]];

function Arrow() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 16 16 4M7 4h9v9" stroke="currentColor" strokeWidth="1.5" /></svg>;
}

export default function AboutExperience() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  return (
    <div className="cx-site cx-about-site">
      <motion.div className="cx-progress" style={{ scaleX }} />
      <main>
        <section id="top" className="cx-about-hero">
          <Navigation page="about" />
          <div className="cx-about-grid" aria-hidden="true" />
          <div className="cx-about-orbit" aria-hidden="true"><i /><i /><i /><span>Human / AI</span></div>
          <motion.div className="cx-about-title" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <p>About CloserX / Since 2024</p>
            <h1>Built to make every<br /><em>conversation</em> count.</h1>
          </motion.div>
          <div className="cx-about-hero-foot"><span>WHO WE ARE</span><p>Voice infrastructure for agencies ready to own the next era of customer communication.</p><span>SCROLL / 01</span></div>
        </section>

        <section id="story" className="cx-about-story">
          <div className="cx-chapter"><span>Chapter № 01</span><span>Our reason for being</span><span>THE STORY</span></div>
          <div className="cx-about-story-grid">
            <div className="cx-about-sticky"><p>We believe the best technology does not ask for attention.</p><div className="cx-about-pulse" aria-hidden="true"><i /><span>LISTENING</span></div></div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .9 }}>
              <h2>It simply makes<br />the work feel<br /><i>effortless.</i></h2>
              <p>CloserX was created for agencies that saw the potential of conversational AI, but did not want to spend years building infrastructure. We give them the tools to launch human-sounding voice agents under their own brand—fast.</p>
              <p>From the first hello to the booked appointment, every part of the platform is built around one idea: better conversations create better businesses.</p>
            </motion.div>
          </div>
        </section>

        <section id="principles" className="cx-about-principles">
          <div className="cx-chapter"><span>Chapter № 02</span><span>How we think</span><span>OUR PRINCIPLES</span></div>
          <div className="cx-about-principles-head"><p>Three beliefs.<br />One operating system.</p><h2>Designed for<br /><i>real dialogue.</i></h2></div>
          <div className="cx-about-principle-list">{principles.map((item) => <article key={item.no}><span>{item.no}</span><h3>{item.title}</h3><p>{item.copy}</p><Arrow /></article>)}</div>
        </section>

        <section id="proof" className="cx-about-proof">
          <div className="cx-about-proof-copy"><span>Chapter № 03 / In the field</span><h2>Measured in<br /><i>momentum.</i></h2><p>Real agencies. Real conversations. Real commercial outcomes—already happening at scale.</p></div>
          <div className="cx-about-proof-stats">{proof.map(([value, label], index) => <div key={label}><span>0{index + 1}</span><strong>{value}</strong><p>{label}</p></div>)}</div>
        </section>

        <section className="cx-about-cta"><span>THE NEXT CHAPTER IS YOURS</span><h2>Build something<br />people want to<br /><i>talk to.</i></h2><a href={START_NOW_URL}>Start your agency <Arrow /></a></section>

        <section id="contact" className="cx-contact cx-about-contact">
          <div className="cx-contact-heading"><div className="cx-chapter"><span>Final chapter</span><span>Build what’s next</span><span>LET’S TALK</span></div><h2>Ready when<br /><i>you are.</i></h2><p>Tell us where your agency is going. We’ll show you the fastest path there.</p></div>
          <div className="cx-form-wrap"><ContactForm /></div>
        </section>
      </main>
      <Footer homeHref="/" />
    </div>
  );
}
