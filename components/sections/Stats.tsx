"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const stats = [
  { value: 150, suffix: "+", label: "Active Clients" },
  { value: 1000, suffix: "+", label: "AI Agents Created" },
  { value: 15000, suffix: "+", label: "Appointments Booked" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // ease-out-expo so the number settles rather than stopping dead
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <div className="grid divide-y divide-ink/15 border-y border-ink/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-10 text-center sm:py-14">
              <p className="font-display text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-none tracking-tight text-ink">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-ink/65">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
