import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { START_NOW_URL } from "@/lib/links";

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1560px] px-5 text-center sm:px-8 lg:px-12">
        <Reveal className="font-display text-[clamp(3rem,14vw,13rem)] font-light uppercase leading-[0.82] tracking-[-0.045em] text-ink">
          Start at
        </Reveal>

        <Reveal
          delay={0.08}
          className="-mt-[0.04em] font-display text-[clamp(4.5rem,18vw,17rem)] font-light leading-[0.82] tracking-[-0.05em] text-outline-thin"
        >
          $29
        </Reveal>

        <Reveal delay={0.16} className="mt-10 sm:mt-14">
          <Button href={START_NOW_URL} size="lg" withArrow>
            Start Now
          </Button>
        </Reveal>

        <Reveal
          delay={0.24}
          className="mx-auto mt-8 max-w-md text-sm text-ink/70"
        >
          Risk-free 30-day trial. If you do not land a paying client, you get
          every penny back.
        </Reveal>
      </div>
    </section>
  );
}
