"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SplineRobot = dynamic(() => import("./SplineRobot"), {
  ssr: false,
  loading: () => null,
});

/**
 * Mounts the Spline agent browser-side only, and only when the device can
 * actually render it. The scene streams from Spline's CDN, so it is kept out
 * of the server bundle entirely.
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
    setEnabled(webgl && !reduced);
  }, []);

  return (
    <div className={className} data-robot-stage="" aria-hidden="true">
      {enabled ? <SplineRobot /> : null}
    </div>
  );
}
