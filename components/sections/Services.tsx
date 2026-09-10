import Reveal from "../ui/Reveal";

type Card = {
  title: string;
  body: string;
  tall?: boolean;
};

const leftCards: Card[] = [
  {
    title: "AI Calling",
    body: "The #1 SaaS product of 2024 that every agency is looking for.",
  },
  {
    title: "Plug-and-play templates and community support",
    body: "Maximize your client bookings with an AI-powered, ultra-realistic voice calling service working 24/7 to keep their calendars fully booked.",
    tall: true,
  },
];

const rightCards: Card[] = [
  {
    title: "Appointment Booking",
    body: "Our AI-powered calling books appointments directly into Google and CRM calendars 24/7, keeping your client schedule full and your business growing.",
  },
  {
    title: "Whitelabel and Launch",
    body: "Launch your own AI calling agency in 8 minutes. Get your first client using our plug-and-play templates in the next 24 hours.",
  },
];

function ServiceCard({ card, delay = 0 }: { card: Card; delay?: number }) {
  return (
    <Reveal
      delay={delay}
      className={`group relative overflow-hidden rounded-[28px] bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:bg-card-soft sm:p-10 ${
        card.tall ? "lg:min-h-[340px]" : ""
      }`}
    >
      {/* sheen that sweeps across on hover */}
      <span className="pointer-events-none absolute -inset-x-10 -top-24 h-40 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:top-full group-hover:opacity-100" />
      <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] font-medium uppercase leading-tight tracking-tight text-ink">
        {card.title}
      </h3>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink/75 sm:text-base">
        {card.body}
      </p>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 sm:py-32 lg:py-40">
      <div className="mx-auto grid w-full max-w-[1560px] gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12">
        <Reveal className="font-display text-[clamp(3rem,11vw,10rem)] font-medium uppercase leading-[0.85] tracking-[-0.04em] text-ink lg:hidden">
          Services
        </Reveal>

        <div className="flex flex-col gap-6 lg:gap-8">
          {leftCards.map((card, i) => (
            <ServiceCard key={card.title} card={card} delay={i * 0.08} />
          ))}
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
          <Reveal className="hidden font-display text-[clamp(3rem,11vw,10rem)] font-medium uppercase leading-[0.85] tracking-[-0.04em] text-ink lg:block">
            Services
          </Reveal>
          {rightCards.map((card, i) => (
            <ServiceCard key={card.title} card={card} delay={0.08 + i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
