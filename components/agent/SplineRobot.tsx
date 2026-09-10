"use client";

import { useEffect, useRef, useState } from "react";
import type { Application } from "@splinetool/runtime";

// Keep the published scene same-origin so browser privacy tools, corporate
// proxies, and transient Spline CDN failures cannot prevent the hero loading.
export const SPLINE_SCENE = "/spline/scene.splinecode";

/**
 * Spline's npm runtime ships `new URL(...)` references to Draco/WASM files it
 * does not actually include, which hard-fails a Turbopack build. We instead
 * serve the self-contained standalone build from `public/spline/` and pull it
 * in at runtime, so the bundler never has to resolve any of it.
 *
 * The specifier is held in a variable (not a literal) so it stays opaque to
 * static analysis. Refresh the vendored copy with:
 *   cp node_modules/@splinetool/runtime/build/runtime.standalone.webgl.js \
 *      public/spline/runtime.js
 */
const RUNTIME_URL = "/spline/runtime.js";

type SplineRuntime = {
  Application: new (canvas: HTMLCanvasElement) => Application;
};

export default function SplineRobot({
  onReady,
}: {
  onReady?: (app: Application) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<Application | null>(null);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let app: Application | null = null;
    let cancelled = false;

    (async () => {
      try {
        const mod: SplineRuntime = await import(
          /* webpackIgnore: true */
          /* turbopackIgnore: true */
          RUNTIME_URL
        );
        if (cancelled || !canvasRef.current) return;

        app = new mod.Application(canvasRef.current);
        await app.load(SPLINE_SCENE);
        if (cancelled) {
          app.dispose();
          return;
        }

        appRef.current = app;
        setLoaded(true);
        onReadyRef.current?.(app);
      } catch (err) {
        // A dead CDN or a blocked WebGL context should never break the hero.
        console.error("Spline scene failed to load:", err);
      }
    })();

    return () => {
      cancelled = true;
      appRef.current = null;
      app?.dispose();
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* holds the space steady while the scene streams in */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="h-14 w-14 rounded-full border-2 border-ink/20 border-t-ink/70 animate-spin" />
      </div>

      <canvas
        ref={canvasRef}
        className={`h-full w-full transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
