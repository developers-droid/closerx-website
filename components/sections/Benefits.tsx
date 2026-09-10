import Reveal from "../ui/Reveal";

function IconWhitelabel() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <circle cx="12" cy="11" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5 25c0-3.9 3.1-7 7-7s7 3.1 7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M21 8.5a4 4 0 0 1 0 7M24 19c2.9.9 5 3.6 5 6.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPlugPlay() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <path
        d="M16 4 28 11v10L16 28 4 21V11L16 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 11l12 7 12-7M16 18v10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSell() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <rect
        x="5"
        y="5"
        width="22"
        height="22"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 11v10M19 14v7M22.5 11v10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconScale() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M16 5a11 11 0 0 1 0 22V5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cards = [
  {
    icon: <IconWhitelabel />,
    tint: "bg-[#f7dcd8]",
    title: "Whitelabel",
    body: "Brand the entire platform as your own. Create an army of AI callers that work 24/7, 365 days a year.",
  },
  {
    icon: <IconPlugPlay />,
    tint: "bg-[#d7f0dd]",
    title: "Plug & Play",
    body: "Access to CloserX.ai Skool Community, Plug & Play Funnel Templates + Proven & Tested Ads.",
  },
  {
    icon: <IconSell />,
    tint: "bg-[#d6e6f8]",
    title: "Sell",
    body: "Launch your AI agency and sell it for as much margin as you want both on credits and subscriptions.",
  },
  {
    icon: <IconScale />,
    tint: "bg-[#faeccb]",
    title: "Scale to $30k/mo",
    body: "Our agency partners report an average of an extra $10-15K MRR within their first 2 months of selling AI calling.",
  },
];

export default function Benefits() {
  return (
    <section id="offer" className="relative py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-4xl text-center font-display text-[clamp(2.25rem,4.5vw,4rem)] font-semibold capitalize leading-[1.02] tracking-tight text-ink">
          10x The Number Of Clients
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[1500px] gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4 xl:gap-10">
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 0.08}
              className="group relative flex flex-col rounded-[26px] border border-ink/80 p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] sm:p-9 lg:min-h-[442px] lg:p-11"
            >
              <span
                className={`mb-4 ml-4 flex h-16 w-16 items-center justify-center rounded-full text-brand-950 transition-transform duration-500 group-hover:scale-110 ${card.tint}`}
              >
                <span className="-translate-x-5 scale-150">{card.icon}</span>
              </span>
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink lg:text-[1.65rem]">
                {card.title}
              </h3>
              <p className="mt-5 text-base leading-8 tracking-[0.025em] text-ink/90 lg:text-lg lg:leading-9">
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
