import { SOCIAL_LINKS } from "@/lib/links";

/**
 * `tone` names the surface the row sits on, not the icon colour: "light" for
 * the paper/coral sections, "dark" for the near-black footer.
 */
export default function SocialLinks({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <ul
      className={`cx-socials${tone === "dark" ? " cx-socials-dark" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {SOCIAL_LINKS.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={social.path} fill="currentColor" fillRule="evenodd" />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
