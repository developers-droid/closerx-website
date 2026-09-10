import type { DetailedHTMLProps, HTMLAttributes } from "react";

/**
 * The Snowie voice widget is a custom element defined by an external bundle,
 * so JSX has no idea it exists. React 19 keeps the JSX namespace inside the
 * `react` module, so the augmentation goes there rather than on `global`.
 */
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "react-widget-uv": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        agent_id?: string;
        schema?: string;
        type?: string;
      };
    }
  }
}
