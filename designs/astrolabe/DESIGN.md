---
slug: astrolabe
name: "The Astrolabe"
description: "A planispheric astrolabe that stands in a museum: drag the rete, drag the rule, four plates, and star pointers that arc across the sky."
category: Historical
tags: ["astrolabe", "astronomy", "instrument", "18th century", "museum", "planisphere"]
related: ["blueprint", "terminal", "cyberpunk"]
preview:
  bg: "#E8E0D2"
  surface: "#FFFFFF"
  ink: "#2E261C"
  muted: "#5c5c5c"
  accent: "#B8925A"
  accent2: "#4A3A28"
  display: "Playfair Display, Georgia, serif"
  body: "EB Garamond, Georgia, serif"
---

# astrolabe — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more museum-amber interpretation.

## 1. Overall aesthetic

A museum exhibit: the brass astrolabe rests on a lamplit parchment table beside a cinnabar exhibit number and the invitation "Please touch." The instrument is lowered onto the table, its shackle swings, and the rete makes one slow turn before stopping at the present hour with the rule laid through the Sun's bead. Every circle on it is real stereographic geometry for the chosen latitude (plates: 30° Cairo, 40° Toledo, 52° Oxford). A label-card panel reads the instrument back in plain language as the visitor turns it: the Sun's place in the zodiac, its height, the hour under the rule, the degree rising and the degree culminating. Three numbered tasks teach sunrise, day length and culmination step by step, ticking themselves off as the visitor succeeds. On request the whole instrument separates into a calm axonometric stack of pin, horse, rule, rete, plate and mater, each named and explained, and then settles back together.

## 2. Typography

- **Display:** Playfair Display, Georgia, serif.
- **Body:** EB Garamond, Georgia, serif.
- **Scale:** hero 24px caps, H2 18px, H3 13px, body 12px, meta 11px.
- **Weights:** display 400–600; body 400.
- **Rules:** flush-left captions, hairline rules.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#E8E0D2` | Cream parchment, gold |
| Surface | `#FFFFFF` | Brass plates, ivory dials |
| Ink | `#2E261C` | Dark ink, limiting lines |
| Muted | `#6B5D50` | Brass, star, dark accents |
| Accent | `#B8925A` | Brass, rule, plumb lines |
| Accent 2 | "#4A3A28",
| Display: "Playfair Display, Georgia, serif",
| Body: "EB Garamond, Georgia, serif",
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/astrolabe/DESIGN.md`.*


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
