"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SplineRobot = dynamic(() => import("./SplineRobot"), {
  ssr: false,
  loading: () => null,
});

/**
 * Mounts the locally vendored Spline agent browser-side only, and only when
 * the device can actually render it. This keeps the heavy runtime out of the
 * server bundle and gives reduced-motion visitors a clean static layout.
 */
export default function RobotStage({ className = "" }: { className?: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let webgl = false;
    try {
      const canvas = document.createElement("canvas");
      webgl = !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    } catch {
      webgl = false;
    }

    // The robot is decorative (the stage is aria-hidden), so it is never worth
    // ~1.9MB on a metered or genuinely slow connection. navigator.connection is
    // Chromium-only; elsewhere this reads undefined and the scene loads as
    // before.
    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const expensive =
      conn?.saveData === true ||
      conn?.effectiveType === "slow-2g" ||
      conn?.effectiveType === "2g";

    setEnabled(webgl && !reduced && !expensive);
  }, []);

  return (
    <div className={className} data-robot-stage="" aria-hidden="true">
      {enabled ? <SplineRobot /> : null}
    </div>
  );
}
