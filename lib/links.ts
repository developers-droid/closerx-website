/**
 * Outbound destinations. Kept in one place so a campaign URL change is a
 * one-line edit rather than a hunt through every CTA.
 */

/** Where every "Start Now" CTA and the hero arrow send the visitor. */
export const START_NOW_URL = "https://offer.closerx.ai/home-clone";

/**
 * The nav "Offer" link. Same landing page as the CTAs, but UTM-tagged so the
 * nav click is attributable separately in analytics.
 */
export const OFFER_URL =
  "https://offer.closerx.ai/home-clone?utm_source=mainwebsite&utm_medium=redirect&utm_campaign=lead_capture";

/** True for anything that leaves the app (absolute URL, mailto:, tel:). */
export function isExternal(href: string) {
  return /^(https?:)?\/\//.test(href) || /^(mailto|tel):/.test(href);
}
