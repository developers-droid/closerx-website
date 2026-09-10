import Script from "next/script";

const WIDGET_ORIGIN = "https://widgetcloserxstaticwebsite.vercel.app";

const AGENT_ID = "1d892f78-5ff9-4fc7-a8bf-5ba16af344ad";
const SCHEMA = "c923987c-cd5f-4297-8dd7-791aad4f7511";

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

      <react-widget-uv agent_id={AGENT_ID} schema={SCHEMA} type="autostart" />
    </>
  );
}
