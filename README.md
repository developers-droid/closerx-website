# CloserX.ai — Next.js landing page

A Next.js rebuild of the CloserX.ai landing page, with an interactive 3D AI agent
in the hero whose head tracks the visitor's cursor.

## Stack

| Concern   | Choice                                              |
| --------- | --------------------------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack), React 19        |
| Styling   | Tailwind CSS v4 (theme tokens in `app/globals.css`) |
| Animation | `motion` (Framer Motion v13)                        |
| 3D        | Spline (`@splinetool/runtime`)                      |
| Type safe | TypeScript, strict                                  |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## The 3D agent

The hero robot is a Spline scene:

```
https://prod.spline.design/fP0LH65i8bXQDQjZ/scene.splinecode
```

Cursor tracking is built into the scene itself — the head, torso and arms react
to the pointer with no tracking code on our side. The scene needs real pointer
events, so the stage is **not** `pointer-events-none`; the nav, hero arrow and
Luna widget all sit at a higher z-index and still take their own clicks.

Two files in `components/agent/`:

- **`SplineRobot.tsx`** — creates the canvas, boots the Spline `Application`,
  loads the scene, and fades it in behind a spinner. Failures are caught and
  logged, so a blocked WebGL context or an unreachable CDN never breaks the hero.
- **`RobotStage.tsx`** — mounts the scene browser-side only, and skips it when
  the device has no WebGL or the visitor has `prefers-reduced-motion: reduce`.

### Why the runtime is vendored into `public/`

`@splinetool/runtime` ships `new URL(...)` references to Draco decoder files it
does not actually include, which hard-fails a Turbopack build. Rather than fight
the bundler, the **self-contained** standalone build is served as a static asset
from `public/spline/` and imported at runtime, so the bundler never resolves any
of it. That also keeps ~2MB of 3D runtime out of the app bundle — it only
downloads when the hero mounts.

`@splinetool/runtime` stays in `package.json` for its TypeScript types (imported
as `import type`, so it is erased at compile time) and as the source for the
vendored copy. After upgrading it, re-sync:

```bash
npm run sync:spline
```

> Next.js caches the `public/` manifest at boot — restart the server after
> adding files there, or they will 404.

### Swapping in a different scene

Publish from Spline, copy the `.splinecode` URL, and change `SPLINE_SCENE` at the
top of `components/agent/SplineRobot.tsx`. Nothing else needs to move.

## Layout notes

- The hero robot **overlays** the headline on `lg` and up, matching the live
  site. On smaller screens it flows below the headline so the type stays
  readable — at 390px wide the robot otherwise covered the headline entirely.
- **Hero framing is set by the stage box, not by the camera.** The scene ignores
  `Application.setZoom()`, so how large the agent reads is purely a function of
  the stage height. `lg:h-[98vh] lg:-translate-y-[53%]` was solved to match the
  live hero: crown just under the nav (~14% down the viewport) with the legs
  cropped off the bottom. Change those two values together — raising the height
  enlarges the agent *and* pushes the crown down.
- `Button` sizes are **responsive within each size token**. The base class list
  already sets `inline-flex`, so a caller adding `hidden` (or any second
  unprefixed utility for the same property) loses on stylesheet source order
  rather than winning. Adjust the size tokens instead of overriding per call.
- Section order: hero → services → approach → marquee → benefits → stats →
  features → testimonials → pricing → footer, assembled in `app/page.tsx`.
- Brand colours, fonts and the marquee/float keyframes are defined as Tailwind
  v4 theme tokens in `app/globals.css` — change them there, not in components.
