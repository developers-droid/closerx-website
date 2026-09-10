"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FAQ, type FaqItem } from "@/lib/faq";
import { EASE_OUT } from "../ui/easing";
import Reveal from "../ui/Reveal";

/** Turns bare emails and URLs in the answer copy into real links. */
function linkify(text: string) {
  const pattern = /(https?:\/\/[^\s,)]+|[\w.+-]+@[\w-]+\.[\w.]+)/g;
  return text.split(pattern).map((chunk, i) => {
    if (i % 2 === 0) return chunk;
    const isEmail = chunk.includes("@") && !chunk.startsWith("http");
    const href = isEmail ? `mailto:${chunk}` : chunk;
    return (
      <a
        key={i}
        href={href}
        {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        className="underline decoration-ink/40 underline-offset-4 transition-colors hover:decoration-ink"
      >
        {chunk.replace(/^https?:\/\//, "")}
      </a>
    );
  });
}

function Row({
  item,
  index,
  open,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div className="border-b border-ink/15">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-ink"
        >
          <span className="flex gap-4">
            <span
              aria-hidden="true"
              className="mt-[0.15em] w-7 shrink-0 font-display text-xs font-semibold tabular-nums text-ink/45 sm:w-9 sm:text-sm"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-base font-semibold leading-snug text-ink sm:text-lg lg:text-xl">
              {item.q}
            </span>
          </span>

          {/* plus turning into a minus */}
          <span className="relative mt-1 h-5 w-5 shrink-0" aria-hidden="true">
            <span className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 rounded bg-ink" />
            <span
              className={`absolute left-1/2 top-0 h-5 w-[2px] -translate-x-1/2 rounded bg-ink transition-transform duration-300 ${
                open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pb-7 pl-11 pr-10 sm:pl-13">
              {item.a.map((para, i) => (
                <p
                  key={i}
                  className="max-w-3xl text-sm leading-relaxed text-ink/75 sm:text-[15px]"
                >
                  {linkify(para)}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <Reveal className="font-display text-[clamp(2.75rem,10vw,9rem)] font-light leading-[0.9] tracking-[-0.04em] text-ink">
          FAQ
        </Reveal>

        <div className="mt-12 border-t border-ink/15 sm:mt-16">
          {FAQ.map((item, i) => (
            <Row
              key={item.q}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
