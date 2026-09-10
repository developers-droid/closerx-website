"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_OUT } from "../ui/easing";

const testimonials = [
  {
    quote:
      "CloserX completely transformed our agency. We went from struggling to differentiate ourselves to landing $20k/month clients with ease.",
    name: "Dominick",
    role: "Agency Owner",
  },
  {
    quote:
      "It booked 47 qualified real estate viewings in its first week — more than our entire team used to do in a month. Our conversion rates have never been higher.",
    name: "Nick Brown",
    role: "Marketing Consultant",
  },
  {
    quote:
      "We plugged it in, rebranded it, and sold it the same week. Setup took minutes and the calls sound genuinely human.",
    name: "Isaac Anthony",
    role: "SMMA Agency Owner",
  },
];

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Testimonials() {
  const [[index, direction], setState] = useState<[number, number]>([0, 1]);

  const paginate = useCallback((step: number) => {
    setState(([i]) => [
      (i + step + testimonials.length) % testimonials.length,
      step,
    ]);
  }, []);

  useEffect(() => {
    const id = setInterval(() => paginate(1), 7000);
    return () => clearInterval(id);
  }, [paginate]);

  const active = testimonials[index];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[32px] bg-card px-6 py-16 sm:px-14 sm:py-20 lg:py-24">
          {/* oversized open-quote mark */}
          <svg
            viewBox="0 0 120 80"
            aria-hidden="true"
            className="mx-auto h-16 w-24 text-ink/70 sm:h-20 sm:w-32"
          >
            <path
              d="M8 78V38C8 18 20 6 42 2v14C30 19 24 26 24 36h18v42H8Zm70 0V38C78 18 90 6 112 2v14c-12 3-18 10-18 20h18v42H78Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>

          <div className="relative mt-10 min-h-[190px] sm:min-h-[170px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -48 }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
                className="mx-auto max-w-4xl text-center"
              >
                <blockquote className="text-balance text-lg font-semibold leading-relaxed text-ink sm:text-xl lg:text-2xl">
                  {active.quote}
                </blockquote>
                <figcaption className="mt-10">
                  <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-ink">
                    {active.name}
                  </span>
                  <span className="mt-2 block text-sm uppercase tracking-[0.28em] text-brand-300">
                    {active.role}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/40 text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-brand-950"
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/40 text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-brand-950"
            >
              <Chevron dir="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
