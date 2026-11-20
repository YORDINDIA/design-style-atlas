---
slug: kelp-forest-collatz
name: "The Kelp Forest of 3n + 1"
description: "A sunlit aquarium tank where the Collatz conjecture is a living kelp forest: the reverse tree of every path from 1 to 9,000 grows through water currents, fish and bubbles."
category: Data
tags: ["collatz", "kelp", "collatz-tree", "math", "biology", "aquarium", "3n+1"]
related: ["generative-algorithmic", "bioluminescence", "solarpunk"]
preview:
  bg: "#041122"
  surface: "#0B1C3A"
  ink: "#E8F0FF"
  muted: "#fdfdfd"
  accent: "#00E5A0"
  accent2: "#F2A65A"
  display: "Space Grotesk, Inter, sans-serif"
  body: "Inter, sans-serif"
---

# kelp-forest-collatz — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, WindSurf) as the visual direction for a website. Follow every section. When in doubt, choose the deeper scientific interpretation.

## 1. Overall aesthetic

A bright, sunlit aquarium tank where the Collatz conjecture is a living kelp forest. The reverse tree of every path from 1 to 9,000 grows out of a sea-urchin "1" on a sandy floor: thick deep-teal trunks through 2, 4, 8 and 16, thinning and paling into thousands of sea-green hairline fronds that lean and curl because even steps bend one way and odd steps the other. The whole forest sways in a slow travelling swell while garibaldi-orange and teal fish weave through it, bubbles rise and marine snow drifts. The page is set like a museum panel: a bold serif title and three plain sentences in the upper left with the rule drawn as a two-branch sprig, a cream instrument plate with a number field, famous starters and two brass dive-gauge dials, a specimen card with the hailstone plot, and a strip of statistics printed on the sand ending in "counter-examples found: 0". The signature moment is following a number home: one orange thread lighting the whole way down through the forest to 1.

## 2. Typography

- **Display:** Space Grotesk, Inter, sans-serif.
- **Body:** Inter, sans-serif.
- **Scale:** hero 22px caps, H2 18px, H3 14px, body 12px, meta 11px.
- **Weights:** display 600; body 400.
- **Rules:** hairline dividers, 1px, 0px on sand.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#041122` | Deep sea |
| Surface | `#0B1C3A` | Sand, kelp trunks |
| Ink | `#E8F0FF` | Light text |
| Muted | `#D5DDE5` | Sand, labels |
| Accent | `#00E5A0 | Kelp, paths, fish |
| Accent 2 | "#F2A65A | Sunlight through kelp, starbursts |
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/kelp-forest-collatz/DESIGN.md`.*


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
