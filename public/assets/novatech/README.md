# NOVATECH visual assets

Generated, web-optimised derivatives. Originals live in `media-source/`
(git-ignored, never deployed) so `public/` stays small enough to host.

- `icons/`   – Envato "3D Web Creation & Development" pack, 30 icons, 384px WebP.
               Recoloured to the brand palette: every cool hue maps to
               `--accent-color` #1B44E8 and every warm hue to `--star-color`
               #EFBC2A, keeping the original value channel so the 3D shading
               survives. Illustrated skin tones are left untouched.
- `objects/` – The standalone Envato `.glb` models, rendered once to transparent
               PNG (three.js, headless Chrome) and put through the same recolour.
               Used as flat page furniture — no WebGL at runtime.
- `img/`     – Photography and 3D renders from `content/novatech`, cropped per
               slot. `case-*` and `cta-banner` additionally get a "night shift"
               pass that pushes the white studio backdrop to deep navy so
               overlaid copy stays legible.
- `video/`   – `hero.mp4` (banner background, silent), `color.mp4`
               (showreel section), and `guide-bg.mp4` (guide card background,
               silent, downscaled to 960px/24fps since it just plays behind a
               card) transcoded from the source masters, plus WebP posters.
- `logos/`   – Partner/tool logos from `media-source/tools_logos`, trimmed and
               composited onto a flat white rounded card (320x160) so every
               mark stays legible on both the light and dark theme's partner
               cards, then exported as WebP.

Regenerating these needs `sharp`, `ffmpeg` and `playwright`; none are project
dependencies, the outputs are committed instead.
