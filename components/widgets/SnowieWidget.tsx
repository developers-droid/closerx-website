import Script from "next/script";
import WidgetPanelFit from "./WidgetPanelFit";

const WIDGET_ORIGIN = "https://sidewidget.vercel.app";

const AGENT_ID = "361fccb3-f829-4372-abd7-bc9626e8b3a3";
const SCHEMA = "6af30ad4-a50c-4acc-8996-d5f562b6987f";

/**
 * Snowie voice agent widget.
 *
 * Load order matters: the bundle is built for Node and touches `process.env`
 * at module scope, which does not exist in a browser. The shim therefore runs
 * `beforeInteractive` (injected into the initial HTML, executed in placement
 * order) while the bundle itself loads `afterInteractive`, so the shim is
 * always in place first without the ~React-sized bundle blocking hydration.
 *
 * DO NOT add the vendor's `<link rel="stylesheet" .../>` snippet here. The
 * bundle already injects react-widget-uv.css *inside its own shadow root*,
 * where it is encapsulated. Adding the link as well loads a second, global
 * copy — and that file is a full Tailwind build: Preflight resets plus generic
 * utilities (.hidden, .flex, .absolute, .w-full, .container). Landing after
 * our stylesheet, its `.hidden{display:none}` beats our `.lg:flex`, which
 * collapses the desktop nav to a hamburger and flattens every heading.
 */
export default function SnowieWidget() {
  return (
    <>
      <Script id="snowie-process-shim" strategy="beforeInteractive">
        {`window.process=window.process||{};window.process.env=window.process.env||{};`}
      </Script>

      <Script
        src={`${WIDGET_ORIGIN}/react-widget-uv.iife.js`}
        strategy="afterInteractive"
      />

      <WidgetPanelFit />

      <react-widget-uv agent_id={AGENT_ID} schema={SCHEMA} type="thunderemotionlite" />
    </>
  );
}
