import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        /*
         * The Spline runtime and scene are ~1.9MB and never change without a
         * redeploy, yet Next serves everything in public/ as `max-age=0`, so
         * every visit pays a revalidation round trip before the hero can start
         * drawing. Both URLs carry a version marker (SPLINE_SCENE's `?v=`, and
         * the runtime path itself), so they are safe to treat as immutable —
         * bump the marker when the vendored files are refreshed.
         */
        source: "/spline/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
