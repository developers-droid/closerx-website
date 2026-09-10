import Reveal from "../ui/Reveal";

const steps = [
  {
    letter: "A",
    title: "Whitelabel",
    body: "In a sea of similar pitches, be the agency with a twist. Offer prospects something they have not seen or heard — an AI sales experience so real they will have to pinch themselves.",
    position: "lg:left-[17%] lg:top-0",
    oval: "lg:-rotate-[22deg]",
  },
  {
    letter: "B",
    title: "Sell",
    body: "Sell it like a cup of coffee on Monday morning. Offer what others cannot — the difference that gets the deal signed.",
    position: "lg:left-[47%] lg:top-24",
    oval: "lg:-rotate-[14deg]",
  },
  {
    letter: "C",
    title: "Profit",
    body: "No staff to manage, no complex infrastructure to maintain. Just pure, scalable profit potential while your operational costs stay grounded.",
    position: "lg:left-[82%] lg:top-0",
    oval: "lg:-rotate-[20deg]",
  },
];

export default function Approach() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <Reveal className="font-display text-[clamp(2.75rem,10vw,9.5rem)] font-medium uppercase leading-[0.88] tracking-[-0.04em] text-ink">
          Our Approach
        </Reveal>

        <div className="relative mt-14 lg:mt-24 lg:h-[760px]">
          <div className="grid gap-14 lg:block">
            {steps.map((step, i) => (
              <div
                key={step.letter}
                className={`relative lg:absolute lg:w-[min(34vw,650px)] lg:-translate-x-1/2 ${step.position}`}
              >
                <Reveal
                  delay={i * 0.1}
                  className="group relative flex flex-col items-center lg:pt-40"
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute left-1/2 top-6 hidden h-[420px] w-full -translate-x-1/2 rounded-[50%] bg-brand-950/30 ring-1 ring-inset ring-white/15 lg:block ${step.oval}`}
                  />

                  <div className="relative flex flex-col items-center text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ink/25 bg-brand-950 font-display text-[2rem] font-semibold text-ink shadow-[0_8px_24px_rgba(18,13,45,0.24)] group-hover:animate-[badge-shake_420ms_ease-in-out]">
                      {step.letter}
                    </span>
                    <h3 className="mt-6 font-display text-[clamp(2.25rem,4vw,4rem)] font-bold uppercase leading-none tracking-tight text-ink">
                      {step.title}
                    </h3>

                    {/* connector dot + rule down to the copy */}
                    <span className="mt-5 flex flex-col items-center">
                      <span className="h-2 w-2 rounded-full bg-ink/70" />
                      <span className="h-16 w-px bg-ink/35 lg:h-32" />
                    </span>
                  </div>

                  <p className="relative mt-3 w-full max-w-md text-center text-sm leading-relaxed text-ink/80 sm:text-base lg:self-start lg:text-left lg:text-lg">
                    {step.body}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
