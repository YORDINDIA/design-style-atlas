---
slug: river-at-las-panorama
name: "The Aldwyn, Source to Sea"
description: "A sideways river panorama for grown-ups: a578km journey with 45 stations, a live altitude/flow readout, and a routing ribbon at the bottom."
category: Heritage Luxury
tags: ["river", "panorama", "children", "atlas", "scroll", "navigation", "colour"]
related: ["blueprint", "editorial-magazine", "3d-web-design"]
preview:
  bg: "#F9F5E9"
  surface: "#FFFFFF"
  ink: "#2F2A22"
  muted: "#6a6a6a"
  accent: "#0F6E78"
  accent2: "#8B6F2E"
  display: "Playfair Display, Georgia, serif"
  body: "Georgia, serif"
---

# river-at-las-panorama — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, WindSurf) as the visual direction for a website. Follow every section. When in doubt, choose the more map-lovers interpretation.

## 1. Overall aesthetic

A sideways journey down an invented English river, drawn as one continuous flat-colour panorama in the manner of a children's atlas for grown-ups. The page opens in rain on a moor, with the title lettered large in rough-edged Palatino italic and a paper boat dropping into a spring no wider than a pencil line. Scrolling carries the reader 138 kilometres downstream: over a gritstone fall, under a packhorse bridge, past a turning mill wheel, through buttercup meadows, a terraced brewery town, a working lock, pylons and poplars, mudflats, docks, and finally past a lighthouse into an evening sea. The river is a single unbroken blue path that widens from a thread to the whole lower third of the stage, and the little boat rides it the entire way, behaving differently at every obstacle. Each of the eleven stations carries a white-on-green kilometre sign and a short, dry caption; a slim strip along the bottom shows the whole river in miniature with an altitude profile and a live readout of distance, height and flow.

## 2. Typography

- **Display:** Playfair Display, Georgia, serif.
- **Body:** Georgia, serif.
- **Scale:** hero 32px caps, H2 22px, H3 16px, body 12px, meta 11px.
- **Weights:** display 400–500; body 400; caps caps.
- **Rules:** 1px solid #8B6F2E, flush-left captions, hairline rules.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F9F5E9` | Cream map paper |
| Surface | `#FFFFFF | Symbols, text on water, stars |
| Muted | "#7A7262 | Station numbers, horizon, red heron |
| Accent | "#0F6E78 | River, boat, lane markers |
| Accent 2 | "#8B6F2E | Hills, dunes, locks, lights |
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/river-at-las-panorama/DESIGN.md`.*


## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

## 4. Spacing

8px base; generous vertical rhythm between elements.

## 5. Layout / Grid

Centered column; hero bar, main content area below.

## 6. Borders

1px solid hairline rules; no shadows.

## 7. Shadows

None — flat surfaces only.

## 8. Radius

8px cards, 12px edition cards; 3px buttons.

## 9. Buttons

Pill buttons: 40px height, rounded, visible focus ring.

## 10. Cards

Edge cards: ivory frame with hairline border; title + description + 44px+ targets.

## 11. Navigation

Top bar with the wordmark and subtle links.

## 12. Imagery

None — the objects are drawn in the page itself.

## 13. Icons

16px line icons (seal, candle, envelope, words).

## 14. Textures

None.

## 15. Motion

Fades 150ms; springy hover states.

## 16. Interactions

Hover to reveal, tap to select, drag to tilt or reveal.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile stacks content; tablets get 2-column.

## 18. Accessibility

High contrast between ink and background (4.5:1+), visible focus rings, prefers-reduced-motion disables animations.

## 19. What to avoid

Fake brass, clashing colors, too many pivots.

## 20. Quick-start

```css
:root { --bg: "#E6E0D2"; --surface: "#FFFFFF"; --ink: "#3E3528"; --muted: "#5D5240"; --accent: "#8B2B20"; --accent2: "#0B4D6B"; --font-display: "Archivo Black, Arial Black, sans-serif"; --font-body: "Helvetica Neue, Arial, sans-serif"; }
```
