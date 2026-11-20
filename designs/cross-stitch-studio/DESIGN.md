---
slug: cross-stitch-studio
name: "Cross-Stitch Studio"
description: "A sunlit sewing table: beech hoop, brass screw, cream aida cloth; the viewer stitches a sampler that grows stitch by stitch; buy bobbin cards, spread patterns, warg"
category: Playful
tags: ["cross-stitch", "stitching", "hoop", "bobbin", "floss", "sampler", "museum"]
related: ["kawaii-pop", "scrapbook", "hand-drawn"]
preview:
  bg: "#E7DCCB"
  surface: "#FFFFFF"
  ink: "#2E2A26"
  muted: "#5a5a5a"
  accent: "#E4572E"
  accent2: "#17BEBB"
  display: "Gill Sans, Optima, Hoefler Text, sans-serif"
  body: "Candara, Hoefler Text, sans-serif"
---

# cross-stitch-studio — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, WindSurf) as the visual direction for a website. Follow every section. When in doubt, choose the softer, sunnier interpretation.

## 1. Overall aesthetic

A sunlit sewing table seen from above: a beech embroidery hoop with a brass screw holds a square of cream aida cloth, and on it a small sampler stitches itself in over the first three seconds while a steel needle darts from stitch to stitch. Everything the viewer places is rendered as real thread: two crossed strands of twisted floss with sheen, shadow and hand-made irregularity, pulled from hole to hole with a little tightening bounce. To the left sit a stitched fabric title label, a wooden sewing-box tray of tools, ten bobbin cards of floss and a library of stamped motifs with a "stitch these words" field; to the right a paper pattern card keeps the project name, floss usage in metres, finished size and time. The hoop can be turned over in 3D to reveal the honest, messy back of the work, computed from the true sewing order, or swapped for a printable symbol chart with a key.

## 2. Typography

- **Display:** Gill Sans, Optima, Hoefler Text, sans-serif.
- **Body:** Candara, Hoefler Text, sans-serif.
- **Scale:** hero 22px, H2 16px, H3 13px, body 12px, meta 11px.
- **Weights:** display 500–600; body 400; italic notes 500.
- **Rules:** flush-left captions, 1px hairline thread on cards, small caps labels.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#E7DCCB` | Cream table |
| Surface | `#FFFFFF` | Cloth, needles |
| Ink | `#2E2A26` | Ink, thread |
| Muted | `#5F7F86` | Brass, tools, floss |
| Accent | `#E4572E` | Vermilion, X mark |
| Accent 2 | `#17BEBB | Teal, thread ends |
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/cross-stitch-studio/DESIGN.md`.*


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
