"use client";

import { useEffect, useRef, useState } from "react";
import type { Application } from "@splinetool/runtime";

// Keep the published scene same-origin so browser privacy tools, corporate
// proxies, and transient Spline CDN failures cannot prevent the hero loading.
// The `v` marker exists so /spline/* can be served immutable (see
// next.config.ts). Bump it whenever the scene is re-exported, or returning
// visitors will keep the cached copy for a year.
export const SPLINE_SCENE = "/spline/scene.splinecode?v=1";

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

/** Past this, treat the scene as never arriving and give the space back. */
const LOAD_TIMEOUT_MS = 20_000;

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

  const [status, setStatus] = useState<"loading" | "ready" | "failed">(
    "loading",
  );

  useEffect(() => {
    let app: Application | null = null;
    let cancelled = false;

    const canvas = canvasRef.current;

    const fail = (reason: string, err?: unknown) => {
      if (cancelled) return;
      console.error(`Spline scene unavailable (${reason})`, err ?? "");
      setStatus("failed");
      appRef.current = null;
      app?.dispose();
      app = null;
    };

    /*
     * The scene's own background is white, so a canvas that is mounted but not
     * genuinely rendering paints a white slab over the dark hero. Losing the GL
     * context does exactly that — the shader fails to validate, the context
     * goes away, and the last frame is the empty white ground — and it happens
     * after load() has already resolved, so nothing else catches it.
     */
    const onContextLost = (event: Event) => {
      event.preventDefault();
      fail("webgl context lost");
    };
    canvas?.addEventListener("webglcontextlost", onContextLost);

    // A scene that is merely slow is indistinguishable from one that will never
    // arrive, and an empty hero beats a permanent placeholder.
    const timeout = window.setTimeout(
      () => fail("timed out"),
      LOAD_TIMEOUT_MS,
    );

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

        window.clearTimeout(timeout);
        appRef.current = app;
        setStatus("ready");
        onReadyRef.current?.(app);
      } catch (err) {
        window.clearTimeout(timeout);
        fail("load failed", err);
      }
    })();

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      canvas?.removeEventListener("webglcontextlost", onContextLost);
      appRef.current = null;
      app?.dispose();
    };
  }, []);

  const ready = status === "ready";

  return (
    <div className="relative h-full w-full">
      {/*
        `visibility` rather than opacity alone: an opacity-0 canvas is still
        composited, so any white frame it paints can flash through mid-load.
        The hero keeps its own glow behind this, which is what shows when the
        robot never arrives — a deliberate-looking empty space instead of a
        spinner that never stops.
      */}
      <canvas
        ref={canvasRef}
        className={`h-full w-full transition-opacity duration-1000 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        style={{
          visibility: ready ? "visible" : "hidden",
          display: status === "failed" ? "none" : undefined,
        }}
      />
    </div>
  );
}
