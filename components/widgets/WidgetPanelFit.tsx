"use client";

import { useEffect } from "react";

/**
 * Panel sizing correction for the Snowie widget, injected into its shadow root.
 *
 * Below 640px the vendor bundle hard-codes `.widget-container` to
 * `width: 90vw !important; height: 85vh !important`. Stacked above its 64px
 * launcher (12px gap, 24px offset) that needs 85vh + 100px — taller than the
 * viewport — so the panel runs off the top and covers the page.
 *
 * The class is doubled purely for specificity: the vendor's rules are
 * `!important` too and React re-renders them, so we cannot rely on winning on
 * source order alone.
 */
const PANEL_FIX_CSS = `
.widget-container.widget-container {
  display: flex !important;
  flex-direction: column !important;
  max-width: calc(100vw - 24px) !important;
  max-height: calc(100vh - 104px) !important;
  max-height: calc(100dvh - 104px) !important;
}

/* The panel is overflow:hidden and its body carries h-full, so the body sits a
   header's height too tall and the message input is what gets clipped. As a
   flex child it takes the space actually left over, and scrolls if the content
   still does not fit. */
.widget-container.widget-container > div:last-child {
  height: auto !important;
  min-height: 0 !important;
  flex: 1 1 auto !important;
  overflow-y: auto !important;
  overscroll-behavior: contain !important;
}

@media (max-width: 640px) {
  .widget-container.widget-container {
    width: min(88vw, 370px) !important;
    height: min(72vh, 520px) !important;
    height: min(72dvh, 520px) !important;
  }

  /* Win back the height the shorter panel costs. The avatar is the biggest
     block and, being a flex child with the default shrink, a shorter panel
     squashes the circle into an oval instead of scrolling — so pin its size.
     Variants differ: some mark it .mic-button, the lite theme leaves it as a
     plain w-40 button, so match the Tailwind class as a word. */
  .widget-container .mic-button,
  .widget-container button[class~="w-40"] {
    flex: 0 0 auto !important;
    width: 104px !important;
    height: 104px !important;
  }
  .widget-container .mic-button {
    margin-bottom: 12px !important;
  }

  /* The scroll area's own padding is worth 48px of the height we just freed. */
  .widget-container [class~="p-6"][class~="overflow-y-auto"] {
    padding: 16px !important;
  }

  .widget-container .transcript-box {
    height: 96px !important;
  }
}
`;

const STYLE_ID = "cx-widget-panel-fix";

/**
 * The custom element upgrades only once the vendor bundle loads, and its
 * `connectedCallback` builds the shadow root a tick after that, so we poll
 * rather than look once. The style goes on the shadow root itself instead of
 * the div React renders into, which keeps it clear of re-renders; re-checking
 * on a timer also restores it if the element is ever torn down and rebuilt.
 */
export default function WidgetPanelFit() {
  useEffect(() => {
    const inject = () => {
      const root = document.querySelector("react-widget-uv")?.shadowRoot;
      if (!root || root.getElementById(STYLE_ID)) return;
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = PANEL_FIX_CSS;
      root.appendChild(style);
    };

    inject();
    const timer = window.setInterval(inject, 400);
    const stop = window.setTimeout(
      () => window.clearInterval(timer),
      30_000,
    );

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(stop);
    };
  }, []);

  return null;
}
