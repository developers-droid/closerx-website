/**
 * Edge-to-edge scrolling word band. The track holds two identical halves and
 * translates by -50%, so the loop is seamless at any viewport width.
 */
export default function Marquee({
  words = ["AI Agency", "AI Agency", "AI Agency", "AI Agency"],
  speed = "normal",
}: {
  words?: string[];
  speed?: "normal" | "slow";
}) {
  const half = (
    <div className="flex shrink-0 items-center">
      {words.map((word, i) => (
        <span
          key={i}
          className={`whitespace-nowrap px-6 font-display text-[clamp(3rem,11vw,10rem)] font-medium uppercase leading-none tracking-[-0.03em] ${
            i % 2 === 0 ? "text-ink" : "text-outline"
          }`}
        >
          {word}
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-hidden="true"
      className="relative flex w-full overflow-hidden py-10 sm:py-16"
    >
      <div
        className={`flex w-max ${
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        }`}
      >
        {half}
        {half}
      </div>
    </section>
  );
}
