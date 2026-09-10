import Link from "next/link";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

const columns = [
  {
    heading: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/#services" },
      { label: "Become An Affiliate", href: "#contact" },
    ],
  },
  {
    heading: "Pages",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund Policy", href: "/refund" },
    ],
  },
];

const socials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CloserXAI",
    path: "M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.1 5 12 5 12 5s-6.1 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.9 19 12 19 12 19s6.1 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/closerx.ai/",
    path: "M12 8.6A3.4 3.4 0 1 0 12 15.4 3.4 3.4 0 0 0 12 8.6Zm0-3.6c2.3 0 2.6 0 3.5.05 1 .04 1.5.2 1.9.35.5.18.8.4 1.2.8.4.4.62.7.8 1.2.15.4.31.9.35 1.9.05.9.05 1.2.05 3.5s0 2.6-.05 3.5c-.04 1-.2 1.5-.35 1.9a3.2 3.2 0 0 1-.8 1.2c-.4.4-.7.62-1.2.8-.4.15-.9.31-1.9.35-.9.05-1.2.05-3.5.05s-2.6 0-3.5-.05c-1-.04-1.5-.2-1.9-.35a3.2 3.2 0 0 1-1.2-.8 3.2 3.2 0 0 1-.8-1.2c-.15-.4-.31-.9-.35-1.9C5.05 14.6 5 14.3 5 12s0-2.6.05-3.5c.04-1 .2-1.5.35-1.9.18-.5.4-.8.8-1.2.4-.4.7-.62 1.2-.8.4-.15.9-.31 1.9-.35C10.2 5 10.5 5 12 5Zm5.8 1.9a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1Z",
  },
  {
    label: "X",
    href: "https://x.com",
    path: "M17.5 4h2.9l-6.3 7.2L21.6 20h-5.6l-4.4-5.6L6.5 20H3.6l6.7-7.7L3 4h5.7l4 5.2L17.5 4Zm-1 14.2h1.6L8.6 5.7H6.9l9.6 12.5Z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M14 8.5h2.2V5.6c-.4-.05-1.4-.15-2.6-.15-2.6 0-4.3 1.6-4.3 4.5V12H6.7v3.3h2.6V23h3.2v-7.7h2.6l.4-3.3h-3V10c0-1 .3-1.5 1.5-1.5Z",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/15 pb-10 pt-16 sm:pt-20">
      <div className="mx-auto w-full max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size="footer" />
            <ul className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-brand-950 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                      <path d={s.path} fill="currentColor" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pt-1">
            <Button href="mailto:hello@closerx.ai" size="md" className="normal-case tracking-normal">
              Contact Us
            </Button>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-ink">
                {col.heading}
              </h4>
              <ul className="mt-6 space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink/75 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink/15 pt-8 sm:flex-row">
          <p className="text-xs text-ink/60">
            © {new Date().getFullYear()} CloserX.ai. All rights reserved.
          </p>
          <p className="text-xs text-ink/60">
            Whitelabel AI caller for agencies.
          </p>
        </div>
      </div>
    </footer>
  );
}
