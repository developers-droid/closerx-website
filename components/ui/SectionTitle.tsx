import Reveal from "./Reveal";

/** The oversized, thin display headings used between sections. */
export default function SectionTitle({
  children,
  align = "left",
  className = "",
}: {
  children: React.ReactNode;
  align?: "left" | "right" | "center";
  className?: string;
}) {
  const alignment =
    align === "right"
      ? "text-right"
      : align === "center"
        ? "text-center"
        : "text-left";

  return (
    <Reveal
      className={`font-display text-[clamp(2.75rem,9vw,8.5rem)] font-light leading-[0.92] tracking-[-0.03em] text-ink ${alignment} ${className}`}
    >
      {children}
    </Reveal>
  );
}
