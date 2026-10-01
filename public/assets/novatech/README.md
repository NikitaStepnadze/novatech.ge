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
               `portal.webm` (why-us section) comes from the ProRes 4444
               `media-source/portal.mov`: centre-cropped to 1080x1080 (the
               ring spans x≈422–1482), scaled to 900px, VP9 with alpha
               (yuva420p, CRF 42). Safari drops VP9 alpha, so WebKit gets the
               transparent `portal-poster.webp` still instead. A Safari HEVC
               alpha version needs an x265 build with alpha support (or
               macOS `avconvert`); the winget ffmpeg build lacks it.
               `expertise-portal.webm` (behind the "21+" counter) comes from
               `media-source/blue-portal.mov` the same way (crop 1080x1080 at
               x=420, 640px, CRF 32), plus: frames 0–4 dropped (the portal
               opens from a dot), the last second crossfaded into frames 5–29
               so the 8.8s loop has no seam, and the alpha multiplied by a
               radial fade (r 220→320px) so the smoke never shows the crop's
               square edge. `pricing-portal.webm` (behind the pricing cards)
               comes from `media-source/electric-portal.mov` (crop 1080x1080
               at x=420, kept at full 1080px, CRF 38 — the thin filaments
               smear visibly at 720px or above CRF ~40, and the clip spans up
               to 1100px on desktop). The source already loops seamlessly;
               the outer 42px of the square get a radial alpha
               fade because the page slowly rotates the clip. All three clips
               play through `Hooks/AlphaVideo`.
- `logos/`   – Partner/tool logos from `media-source/tools_logos`, trimmed and
               composited onto a flat white rounded card (320x160) so every
               mark stays legible on both the light and dark theme's partner
               cards, then exported as WebP.

Regenerating these needs `sharp`, `ffmpeg` and `playwright`; none are project
dependencies, the outputs are committed instead.
