"use client";

import { motion } from "motion/react";
import RobotStage from "../agent/RobotStage";
import { ArrowOutward } from "../ui/Button";
import { EASE_OUT } from "../ui/easing";
import { START_NOW_URL } from "@/lib/links";

const rise = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease: EASE_OUT },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "#483d8b" }}
      />

      {/* soft violet bloom behind the robot */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[110vh] w-[110vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(109,97,184,0.55) 0%, rgba(72,61,139,0) 62%)",
        }}
      />

      {/*
        Thin concentric rings from the reference art direction. These are meant
        to read as a wide *arc* sweeping over the hero, not as a closed circle:
        the box is deliberately far taller than the viewport and anchored near
        the bottom edge, so only the top of each ring is on screen.

        Solved against the reference: outer ring is r=440 of a 1000 viewBox
        (44% of the box), so a 163vh box centred at top 98% puts the apex at
        ~26% down the viewport. Shrinking the box until the circle closes is
        what makes it look wrong.
      */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1000 1000"
        className="pointer-events-none absolute left-1/2 top-[95%] h-[163vh] w-[163vh] -translate-x-1/2 -translate-y-1/2 opacity-[0.22]"
      >
        <circle cx="500" cy="500" r="330" fill="none" stroke="#ddd9f1" strokeWidth="1" />
        <circle cx="500" cy="500" r="440" fill="none" stroke="#ddd9f1" strokeWidth="0.7" />
      </svg>

      {/* soft watermark orb sitting behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[56%] h-[62vh] w-[62vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-2xl"
      />

      {/* Subtle broadcast mark from the reference, behind the robot. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1000 700"
        fill="none"
        className="pointer-events-none absolute -bottom-14 left-1/2 h-[84vh] w-[min(74vw,1000px)] -translate-x-1/2 text-ink opacity-[0.05]"
      >
        <path
          d="M75 680V510C75 245 265 35 500 35S925 245 925 510v170"
          stroke="currentColor"
          strokeWidth="24"
          strokeLinecap="round"
        />
        <path
          d="M230 680V515c0-175 121-310 270-310s270 135 270 310v165"
          stroke="currentColor"
          strokeWidth="34"
          strokeLinecap="round"
        />
        <path
          d="M380 680V515c0-78 54-137 120-137s120 59 120 137v165"
          stroke="currentColor"
          strokeWidth="34"
          strokeLinecap="round"
        />
        <path
          d="M500 490v190"
          stroke="currentColor"
          strokeWidth="30"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto w-full max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <motion.p
          custom={0}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mb-2 pl-[1vw] text-base font-medium text-ink/90 sm:mb-4 sm:text-lg"
        >
          Start Your
        </motion.p>

        <motion.h1
          custom={1}
          variants={rise}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center font-display text-[clamp(3.5rem,17vw,16rem)] font-semibold leading-[0.82] tracking-[-0.045em] text-ink"
        >
          AI Agency
        </motion.h1>

        {/*
          Desktop: the robot overlays the headline, as on the live hero.
          Mobile: it flows underneath so the type stays readable.
          Pointer events stay ON so the Spline scene can track the cursor;
          the nav and the arrow button both sit at a higher z-index, so they
          still take their own clicks.
        */}
        <RobotStage className="relative z-20 mx-auto -mt-2 h-[44vh] w-full lg:absolute lg:inset-x-0 lg:top-1/2 lg:-mt-0 lg:h-[98vh] lg:-translate-y-[53%]" />

        <motion.div
          custom={2}
          variants={rise}
          initial="hidden"
          animate="show"
          className="relative z-30 mt-6 flex items-center justify-end sm:mt-14"
        >
          <a
            href={START_NOW_URL}
            aria-label="Start now"
            className="group relative ml-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-950/80 bg-ink text-brand-950 shadow-[0_5px_0_#211b45,0_12px_24px_rgba(17,12,38,0.28)] transition-transform duration-300 hover:-translate-y-1 sm:h-16 sm:w-16"
          >
            <ArrowOutward className="relative h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-7 sm:w-7" />
          </a>
        </motion.div>
      </div>

      {/* Dark floor and soft contact shadow beneath the robot. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-15 h-20 bg-[linear-gradient(to_bottom,transparent_0%,rgba(8,6,20,0.12)_28%,rgba(8,6,20,0.48)_72%,rgba(8,6,20,0.72)_100%)]"
      />
    </section>
  );
}
