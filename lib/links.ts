/**
 * Outbound destinations. Kept in one place so a campaign URL change is a
 * one-line edit rather than a hunt through every CTA.
 */

/** Tracked destination used by every CTA that sends visitors to the offer. */
const TRACKED_OFFER_URL =
  "https://offer.closerx.ai/home-clone?utm_source=mainwebsite&utm_medium=redirect&utm_campaign=lead_capture";

/** Where every "Start Now" CTA and the hero arrow send the visitor. */
export const START_NOW_URL = TRACKED_OFFER_URL;

/**
 * The nav "Offer" link uses the same campaign attribution as every other CTA.
 */
export const OFFER_URL = TRACKED_OFFER_URL;

/**
 * Affiliate sign-up. The referral code lives in the path segment, so the link
 * carries its attribution without any query string.
 */
export const AFFILIATE_URL =
  "https://affiliate.closerx.ai/signup983603-5001-8557";

/** True for anything that leaves the app (absolute URL, mailto:, tel:). */
export function isExternal(href: string) {
  return /^(https?:)?\/\//.test(href) || /^(mailto|tel):/.test(href);
}

/**
 * Social handles, with the glyph inline so a single icon set covers every
 * placement. Paths are 24x24 and drawn with fill-rule="evenodd" so nested
 * subpaths (the YouTube play arrow, the Instagram lens) punch through as
 * holes regardless of their winding direction.
 */
export const SOCIAL_LINKS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CloserXAI",
    path: "M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.1 5 12 5 12 5s-6.1 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.9 19 12 19 12 19s6.1 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/closerx.ai/",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z",
  },
  {
    label: "X",
    href: "https://x.com/closerxai",
    path: "M17.5 4h2.9l-6.3 7.2L21.6 20h-5.6l-4.4-5.6L6.5 20H3.6l6.7-7.7L3 4h5.7l4 5.2L17.5 4Zm-1 14.2h1.6L8.6 5.7H6.9l9.6 12.5Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/CloserXAI",
    path: "M13.5 22v-8.5h2.9l.44-3.4H13.5V7.93c0-.98.27-1.65 1.68-1.65H17V3.24c-.31-.04-1.4-.14-2.67-.14-2.65 0-4.47 1.62-4.47 4.59v2.41H7v3.4h2.86V22h3.64Z",
  },
] as const;
