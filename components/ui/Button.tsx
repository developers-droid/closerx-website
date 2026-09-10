import Link from "next/link";
import type { ReactNode } from "react";
import { isExternal } from "@/lib/links";

export function ArrowOutward({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
  href: string;
  children: ReactNode;
  variant?: "light" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  className?: string;
};

// Sizes are responsive so callers never need to add a competing display or
// padding utility: the base class list already sets `inline-flex`, and a second
// unprefixed utility for the same property would win purely on source order.
const sizes = {
  sm: "px-5 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-[13px]",
  md: "px-5 py-2.5 text-[13px] sm:px-8 sm:py-4 sm:text-sm",
  lg: "px-7 py-4 text-sm sm:px-9 sm:py-5 sm:text-base lg:text-lg",
};

const variants = {
  light:
    "bg-ink text-brand-950 hover:bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.55)]",
  outline:
    "border border-ink/35 text-ink hover:border-ink hover:bg-ink/10 backdrop-blur-sm",
  accent: "bg-accent text-brand-950 hover:brightness-110",
};

export default function Button({
  href,
  children,
  variant = "light",
  size = "md",
  withArrow = false,
  className = "",
}: Props) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${sizes[size]} ${variants[variant]} ${className}`;

  const label = (
    <>
      {children}
      {withArrow && (
        <ArrowOutward className="h-[1.1em] w-[1.1em] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  // next/link is for in-app routes; anything leaving the site is a plain
  // anchor so there is no router interception and no wasted prefetch.
  if (isExternal(href)) {
    return (
      <a href={href} className={classes}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
