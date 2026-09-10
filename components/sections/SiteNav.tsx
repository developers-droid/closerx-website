"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { isExternal, OFFER_URL, START_NOW_URL } from "@/lib/links";
import { EASE_OUT } from "../ui/easing";

// Anchors are root-relative so they still resolve from /about; #contact is
// left bare because the footer it points at renders on every page. "Offer"
// leaves the site entirely, so it renders as a plain anchor (see NavLink).
const links = [
  { label: "Offer", href: OFFER_URL },
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "#contact" },
];

/** next/link for in-app routes, a plain anchor for anything that leaves. */
function NavLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (isExternal(href)) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-[3px] z-90 transition-all duration-500 ${
        scrolled
          ? "bg-page/80 py-4 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "bg-transparent py-6 lg:py-7"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[1560px] items-center justify-between gap-3 px-4 min-[430px]:px-5 sm:gap-6 sm:px-8 lg:px-12">
        <Logo />

        {/* Links ride with the CTA on the right, not centred — as on the live nav. */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-6 xl:gap-14">
          <div className="hidden items-center gap-6 min-[900px]:flex xl:gap-11">
            {links.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                className="group relative py-1 text-[15px] font-bold uppercase tracking-[0.08em] text-ink/90 transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100" />
              </NavLink>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <span className="hidden min-[430px]:inline-flex">
              <Button href={START_NOW_URL} size="md">
                Start Now
              </Button>
            </span>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-ink/25 min-[900px]:hidden"
            >
              <span
                className={`h-[2px] w-5 bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 bg-ink transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="max-h-[calc(100svh-5.5rem)] overflow-y-auto border-t border-ink/10 bg-page-deep/95 backdrop-blur-xl min-[900px]:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {links.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-3xl font-light tracking-tight text-ink"
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <li className="pt-4">
                <Button href={START_NOW_URL} size="md" withArrow>
                  Start Now
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
