---
slug: murmuration-at-dusk
name: "Murmuration at Dusk"
description: "A wide marsh sky at dusk with a starling murmuration: a peregrine moves the flock, click to stoop and start the dive."
category: Organic & Calm
tags: ["birds", "flock", "dusk", "sky", "nature", "motion"]
related: ["organic-biophilic", "bioluminescence", "aurora-glow"]
preview:
  bg: "#2A2438"
  surface: "#4A4460"
  ink: "#F6C9A8"
  muted: "#fdfdfd"
  accent: "#E58F7B"
  accent2: "#F6E7D3"
  display: "Georgia, serif"
  body: "Georgia, serif"
---

# murmuration-at-dusk — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the dreamier, more golden dusk interpretation.

## 1. Overall aesthetic

A wide marsh sky at the last minutes of light: plum-ink overhead sinking through mauve and coral to a pale apricot horizon, a low sun with its broken reflection in a thin strip of water, poplars and pylons tiny on the far bank, and a black reed bed swaying along the bottom edge. Into the empty sky a long ribbon of starlings streams in from the right and gathers into a single breathing shape made of thousands of tiny flapping chevrons — lighter where the birds are far and darker where the flock folds over itself. A peregrine moves with the pointer: the flock parts around it, wraps behind it, and closes again, its trail leaving a faint smoky streak. Click the peregrine to stoop: it dives and tears a hole straight through the birds, which scatter into smoke and reform. When the pointer leaves, the peregrine hunts by itself and the light slowly fails as the whole flock drains through a narrow neck into the reeds and the evening repeats. The only words are a tiny italic title, a live count of starlings, a dismissible hint that appears once, and two quiet controls (call them down, send them up).

## 2. Typography

- **Display/Body:** Georgia, serif.
- **Scale:** title 28px italic, body 14px, controls 12px, label 11px.
- **Weights:** title 400 italic; body 400.
- **Rules:** flush-left title, single line; nocaps.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#2A2438` | Plush sky |
| Surface | `#4A4460` | Starlight gathers |
| Ink | `#F6C9A8` | Title, bird silhouettes |
| Muted | `#A08E96` | Light fails, poplars |
| Accent | `#E58F7B` | corpses? no — Seek light: the peregrine, smoke trails |
| Accent 2 | `#F6E7D3` | Apricot horizon glow |

## 4. Spacing

8px base; title to sky margin 24px; reed bed bottom; controls 16px apart.

## 5. Layout / Grid

Sky column: marsh water strip, reed bed, horizon line; starling flock as scattered chevrons; peregrine as a small shape with trail.

## 6. Borders

None — all shapes are fills with soft drop shadows.

## 7. Shadows

Depth: 0 12px 30px rgba(42,36,56,0.30) on the peregrine, 0 6px 20px on smoke trails.

## 8. Radius

Feathered edges on the peregrine (soft blur 2px); reeds 2px; starlings sharp chevrons.

## 9. Buttons

"Stoop" button: 26px amber pill with arrow icon, hover lifts.
"Send them up": 26px pill, hollow.

## 10. Cards

None — it is pure sky.

## 11. Navigation

None.

## 12. Imagery

Sky washes, poplars, pylons, reed bed as strokes; flock as tiny shapes.

## 13. Icons

Hawk silhouette, swallow.

## 14. Textures

Water ripple lines, low horizon fade-out.

## 15. Motion

Flock breathing: chevrons pulse gently; smoke fades; sunset colors drift.

## 16. Interactions

- Move the pointer: the peregrine follows; the flock parts/wraps around it.
- Click: stoop dive (short sweep, birds scatter, smoke trails), then the peregrine flies off.
- Left alone: the peregrine hunts solo; light fails; flock drains.
- "Call them down"/"Send them up" buttons.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): flock smaller, stoop tap still works. Tablet (768–1099px): unchanged. Desktop (1100px+): unchanged. Never hide the controls behind hover; always visible.

## 18. Accessibility

Sky and reed strokes use high-contrast av #F6C9A8 vs #2A2438, verified 4.5:1 on both Background and Surface; the gold peregrine carries a black-labeled pill. Focus: visible ring on buttons. Motion: prefers-reduced-motion keeps the sky static; flock snaps instead of breathes.

## 19. What to avoid

Busy noise, artificial colors, motion without meaning, text clutter, more than one bird species.

## 20. Quick-start snippet

```css
:root {
  --bg: #2A2438;
  --surface: #4A4460;
  --ink: #F6C9A8;
  --muted: #A08E96;
  --accent: #E58F7B;
  --accent2: #F6E7D3;
  --font-display: Georgia, serif;
  --font-body: Georgia, serif;
}
```
