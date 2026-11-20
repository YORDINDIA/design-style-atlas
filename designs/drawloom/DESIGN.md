---
slug: drawloom
name: "The Drawloom — Cloth from a Diagram"
description: "A weaver's draft is a program in three small grids; the Drawloom shows how the pattern grows from threading, treadling and tie-up grids."
category: Historical
tags: ["weaving", "loom", "weave", "draft", "textile", "interactive", "mechanical"]
related: ["hand-drawn", "scrapbook", "blueprint"]
preview:
  display: "Bodoni, Georgia, serif."
  body: "Georgia, serif."
  bg: "#F8F4EA"
  surface: "#FFFFFF"
  ink: "#3B3228"
  muted: "#696969"
  accent: "#2B6E5D? | dark green"
  accent2: "#6A4A28"
---

# drawloom — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, WindSurf) as the visual direction for a website. Follow every section. When in doubt, choose the horizontal-rhythm interpretation.

## 1. Overall aesthetic

A quiet linen-paper workshop page laid out as a classical weaving draft: threading on top, tie-up in the corner, treadling down the right, and a large cloth below that is computed entirely from those three grids. On arrival a wooden shuttle is already flying across an indigo warp, laying linen picks that the reed beats into goose-eye diamonds while the pressed treadle and lifted shafts glow gold in the diagram, making the cause-and-effect of the notation visible. Every thread is rendered as rounded, twisted yarn with highlights, dive-under shadows and looped selvedges, and a brass linen-tester lens enlarges the interlacement and warns in red of floats too long to wear. The left column holds the masthead, loom transport, generators, yarn choices and a plain-language reading of the weave; the right column is a pattern book of eight historical structures, each a tiny computed swatch.

## 2. Typography

- **Display:** Bodoni, Georgia, serif.
- **Body:** Georgia, serif.
- **Scale:** hero 18px caps, H2 15px, H3 12px, body 11px, meta 10px.
- **Weights:** display 600–700; body 400; small-caps captions.
- **Rules:** 1px solid hairline rules, dashed guide lines.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F8F4EA` | Cream paper |
| Surface | `#FFFFFF` | Cloth, yarn |
| Ink | `#3B3228` | Dark text |
| Muted | `#7A7262` | Brass, treadles |
| Accent | "#2B6E5D | Indigo warp, greens, goose-eye |
| Accent2 | "#6A4A28 | Gold treadle, linen tester |
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/drawloom/DESIGN.md`.*


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
