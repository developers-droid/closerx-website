"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { AFFILIATE_URL, OFFER_URL, START_NOW_URL } from "@/lib/links";
import RobotStage from "@/components/agent/RobotStage";
import ContactForm from "@/components/forms/ContactForm";
import SocialLinks from "@/components/ui/SocialLinks";

const services = [
  { no: "01", title: "AI calling", copy: "Ultra-realistic voice agents that qualify, follow up and hold natural conversations around the clock.", meta: "INBOUND / OUTBOUND" },
  { no: "02", title: "Appointment booking", copy: "Every qualified conversation moves directly into your client's Google or CRM calendar.", meta: "LIVE CALENDAR SYNC" },
  { no: "03", title: "White-label launch", copy: "Your logo, your domain, your pricing. Launch a complete AI calling agency in minutes.", meta: "BUILT FOR AGENCIES" },
];

const features = [
  ["Unlimited voice agents", "Build and control every client agent from one command centre."],
  ["Unlimited white-label accounts", "Give every client a platform that looks and feels entirely yours."],
  ["Instant training", "Turn recordings or a script into a production-ready agent in seconds."],
  ["Recording + transcription", "Search, review and improve every customer conversation."],
  ["Noise reduction", "Clear, natural calls even when the real world gets loud."],
  ["Automated booking", "Fill calendars without a human touching the scheduling workflow."],
];

const testimonials = [
  { quote: "CloserX gave us a product prospects had not seen before. We stopped competing on retainers and started closing on outcomes.", name: "Dominick", role: "Agency owner" },
  { quote: "It booked 47 qualified real-estate viewings in its first week—more than our team used to do in a month.", name: "Nick Brown", role: "Marketing consultant" },
  { quote: "We plugged it in, put our brand on it and sold it the same week. The calls sound genuinely human.", name: "Isaac Anthony", role: "SMMA founder" },
];

function Arrow({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true"><path d="M4 16 16 4M7 4h9v9" stroke="currentColor" strokeWidth="1.5" /></svg>;
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`cx-eyebrow ${dark ? "cx-eyebrow-dark" : ""}`}><span>●</span>{children}</p>;
}

export function Navigation({ page = "home" }: { page?: "home" | "about" | "legal" }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", close); };
  }, [open]);
  const links = page === "about"
    ? [["Story", "#story"], ["Principles", "#principles"], ["Proof", "#proof"], ["Contact", "#contact"]]
    : page === "legal"
    ? [["Home", "/"], ["Services", "/#services"], ["Pricing", "/#pricing"], ["About", "/about"], ["Contact", "/#contact"]]
    : [["Services", "#services"], ["Process", "#process"], ["Results", "#results"], ["Pricing", "#pricing"], ["About", "/about"]];
  const homeHref = page === "home" ? "#top" : "/";
  return (
    <>
      <header className="cx-nav">
        <a href={homeHref} className="cx-wordmark" aria-label="CloserX.ai home"><Image src="/logo.png" alt="CloserX.ai" width={1002} height={325} priority /></a>
        <nav className="cx-nav-links" aria-label="Main navigation">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}<button type="button" onClick={() => setOpen(true)} aria-label="Open menu" className="cx-grid-button"><i /><i /><i /><i /></button></nav>
        <a className="cx-nav-login" href={OFFER_URL}>View offer</a><a className="cx-nav-cta" href={START_NOW_URL}>Start now <Arrow /></a>
        <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" className="cx-mobile-menu">Menu</button>
      </header>
      <AnimatePresence>{open && <motion.div className="cx-menu" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}>
        <div className="cx-menu-top"><span className="cx-wordmark"><Image src="/logo.png" alt="CloserX.ai" width={1002} height={325} /></span><button type="button" onClick={() => setOpen(false)}>Close ×</button></div>
        <div className="cx-menu-body"><p>Navigate / 2026</p>{links.map(([label, href], index) => <a key={label} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<Arrow /></a>)}</div>
        <div className="cx-menu-foot"><span>AI agents for ambitious agencies.</span><SocialLinks /><a href={START_NOW_URL}>Launch yours ↗</a></div>
      </motion.div>}</AnimatePresence>
    </>
  );
}

function Hero() {
  return <section id="top" className="cx-hero"><Navigation /><div className="cx-hero-grid" aria-hidden="true" /><RobotStage className="cx-hero-model" />
    <motion.div className="cx-hero-title" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}><p className="cx-kicker">White-label conversational AI</p><h1>The voice layer<br />for <em>agencies.</em></h1></motion.div>
    <motion.div className="cx-hero-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.8 }}><p>Launch human-sounding AI agents that call, qualify and book—under your own brand.</p><a href={START_NOW_URL}>Start your agency <Arrow /></a></motion.div>
    <div className="cx-hero-meta"><span>SCROLL TO EXPLORE</span><span>LATENCY 320MS</span><span>STATUS ● LIVE</span></div>
  </section>;
}

function Intro() {
  return <section className="cx-intro"><div className="cx-chapter"><span>Chapter № 01</span><span>Introducing CloserX</span><span>AI / VOICE / GROWTH</span></div>
    <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.9 }}>Meet the caller<br />that never <i>clocks out.</i></motion.h2>
    <div className="cx-intro-bottom"><p className="cx-index">01 — 03</p><p>CloserX turns a script into a tireless sales operation. Every interaction feels personal; every outcome is measurable.</p><a href="#services">Explore the system <Arrow /></a></div>
  </section>;
}

function Services() {
  return <section id="services" className="cx-services"><div className="cx-services-intro"><Eyebrow>ONE PLATFORM / THREE ENGINES</Eyebrow><h2>From first hello<br />to a <i>booked call.</i></h2></div>
    <div className="cx-service-list">{services.map(service => <motion.article key={service.no} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="cx-service-row"><span>{service.no}</span><h3>{service.title}</h3><p>{service.copy}</p><small>{service.meta}</small><i><Arrow /></i></motion.article>)}</div>
  </section>;
}

function CallInterface() {
  const transcript = [["AI", "Hi Sarah, is now still a good time?"], ["LEAD", "Sure—I have a minute."], ["AI", "Perfect. I can help you book the strategy call."]];
  return <section className="cx-product"><div className="cx-product-copy"><Eyebrow dark>THE PRODUCT / LIVE</Eyebrow><h2>A conversation<br />you can <i>see.</i></h2><p>Train, deploy and improve every voice agent from one clear operating system.</p></div>
    <div className="cx-console"><div className="cx-console-top"><span>LIVE CALL / SARAH M.</span><span className="cx-live">● CONNECTED</span><span>04:18</span></div><div className="cx-console-body"><div className="cx-console-side"><p>AGENT</p><strong>Closer 01</strong><p>CAMPAIGN</p><strong>Reactivation</strong><p>OBJECTIVE</p><strong>Book meeting</strong></div><div className="cx-transcript">{transcript.map(([who, line], index) => <div key={line}><span>{who}</span><p>{line}</p><small>00:0{index * 4 + 2}</small></div>)}<div className="cx-listening"><span>AI IS LISTENING</span><div>{[1,2,3,4,5,6,7,8,9,10,11,12].map(i => <i key={i} />)}</div></div></div></div><div className="cx-console-foot"><span>Sentiment: POSITIVE</span><span>Intent: HIGH</span><span>Action: BOOKING</span></div></div>
  </section>;
}

function Process() {
  const steps = [["01", "White-label", "Make the platform unmistakably yours—logo, domain, colours and offer."], ["02", "Sell", "Use proven templates to put a differentiated AI service in front of prospects."], ["03", "Profit", "Grow recurring revenue without adding callers, managers or infrastructure."]];
  return <section id="process" className="cx-process"><div className="cx-chapter"><span>Chapter № 02</span><span>The operating model</span><span>BUILD / SELL / SCALE</span></div><div className="cx-process-grid"><div className="cx-process-heading"><Eyebrow dark>YOUR PATH TO MARKET</Eyebrow><h2>Three moves.<br />One new <i>agency.</i></h2><p>No engineering team. No complex infrastructure. Just a clear path from blank canvas to recurring revenue.</p></div><div className="cx-steps">{steps.map(([no, title, copy]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p><div className="cx-step-orbit"><i /><i /></div></article>)}</div></div></section>;
}

function Results() {
  const [active, setActive] = useState(0);
  const benchmarks = [{ label: "CloserX / snapshot", value: 94, time: "3.8s" }, { label: "CloserX / standard", value: 78, time: "8.2s" }, { label: "Traditional SDR", value: 31, time: "48h" }];
  return <section id="results" className="cx-results"><div className="cx-results-head"><Eyebrow>PRODUCTION SPEED</Eyebrow><h2>Momentum without<br />the <i>headcount.</i></h2></div><div className="cx-benchmark"><div className="cx-benchmark-tabs">{["Response", "Capacity", "Outcome"].map((label, index) => <button className={active === index ? "active" : ""} onClick={() => setActive(index)} key={label}>{label}</button>)}</div><div className="cx-bars">{benchmarks.map((item, index) => <div key={item.label}><span>{item.label}</span><div><motion.i initial={{ width: 0 }} whileInView={{ width: `${Math.max(18, item.value - active * index * 8)}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.12 }} /></div><strong>{active === 0 ? item.time : active === 1 ? `${Math.max(12, item.value - active * 8)}%` : index === 0 ? "24/7" : index === 1 ? "Always on" : "Limited"}</strong></div>)}</div><div className="cx-benchmark-note"><span>01</span><p>Engage new leads while intent is still high. CloserX reacts in seconds, handles sudden campaign spikes and never asks you to reserve capacity.</p></div></div><div className="cx-stats"><div><strong>150+</strong><span>ACTIVE CLIENTS</span></div><div><strong>1K+</strong><span>AGENTS CREATED</span></div><div><strong>15K+</strong><span>APPOINTMENTS BOOKED</span></div></div></section>;
}

function Features() {
  return <section className="cx-features"><div className="cx-chapter"><span>Chapter № 03</span><span>Inside the platform</span><span>CONTROL / CLARITY</span></div><div className="cx-features-title"><h2>Everything your<br />agency needs.</h2><p>Powerful beneath the surface.<br />Simple where it matters.</p></div><div className="cx-feature-list">{features.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><Arrow /></article>)}</div></section>;
}

function Testimonials() {
  const [active, setActive] = useState(0);
  return <section className="cx-testimonials"><div className="cx-testimonial-top"><Eyebrow dark>FIELD NOTES / CLIENTS</Eyebrow><span>{String(active + 1).padStart(2, "0")} / 03</span></div><AnimatePresence mode="wait"><motion.figure key={active} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -25 }} transition={{ duration: 0.45 }}><blockquote>“{testimonials[active].quote}”</blockquote><figcaption><strong>{testimonials[active].name}</strong><span>{testimonials[active].role}</span></figcaption></motion.figure></AnimatePresence><div className="cx-testimonial-nav"><button onClick={() => setActive((active + testimonials.length - 1) % testimonials.length)} aria-label="Previous testimonial">←</button><button onClick={() => setActive((active + 1) % testimonials.length)} aria-label="Next testimonial">→</button></div></section>;
}

function Pricing() {
  return <section id="pricing" className="cx-pricing"><div className="cx-pricing-copy"><Eyebrow>START SMALL / SCALE FAST</Eyebrow><h2>Your next revenue<br />stream starts at</h2></div><div className="cx-price"><span>$</span><strong>29</strong><em>/ month</em></div><div className="cx-pricing-action"><p>Risk-free for 30 days. If you do not land a paying client, you get every penny back.</p><a href={START_NOW_URL}>Start now <Arrow /></a></div></section>;
}

function Contact() {
  return <section id="contact" className="cx-contact"><div className="cx-contact-heading"><div className="cx-chapter"><span>Final chapter</span><span>Build what’s next</span><span>LET’S TALK</span></div><h2>Put your name<br />on the <i>future.</i></h2><p>Tell us where your agency is going. We’ll show you the fastest path there.</p><div className="cx-social-block"><p>Follow CloserX</p><SocialLinks /></div></div><div className="cx-form-wrap"><ContactForm /></div></section>;
}

export function Footer({ homeHref = "#top" }: { homeHref?: string }) {
  return <footer className="cx-footer"><div className="cx-footer-top"><a href={homeHref} className="cx-wordmark" aria-label="CloserX.ai home"><Image src="/logo.png" alt="CloserX.ai" width={1002} height={325} /></a><p>AI voice infrastructure<br />for modern agencies.</p><a href="#top">Back to top ↑</a></div><p className="cx-footer-display">CLOSER<span>X</span></p><div className="cx-footer-mid"><SocialLinks tone="dark" /><a className="cx-footer-affiliate" href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer">Become an affiliate <Arrow /></a></div><div className="cx-footer-bottom"><span>© {new Date().getFullYear()} CLOSERX.AI</span><span>BUILT TO BE HEARD</span><a href="/terms">TERMS &amp; CONDITIONS</a><a href="/privacy">PRIVACY POLICY</a><a href="mailto:support@closerx.ai">SUPPORT@CLOSERX.AI</a></div></footer>;
}

export default function CloserExperience() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return <div className="cx-site"><motion.div className="cx-progress" style={{ scaleX }} /><main><Hero /><Intro /><Services /><CallInterface /><Process /><Results /><Features /><Testimonials /><Pricing /><Contact /></main><Footer /></div>;
}
