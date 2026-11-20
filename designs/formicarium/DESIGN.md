---
slug: formicarium
name: "Formicarium — Notes on a Colony"
description: "A field notebook turned live ant farm: you tap to add sugar, draw graphite walls, rub out roads, drop water, and watch green home-scent roads grow and thicken."
category: Organic & Calm
tags: ["ant", "formicarium", "colony", "green", "field-notes", "laboratory", "touch"]
related: ["organic-biophilic", "botanical-herbarium", "heritage-classic"]
preview:
  bg: "#F4F1E9"
  surface: "#FBF7ED"
  ink: "#2F2A22"
  muted: "#676767"
  accent: "#2F6E5B"
  accent2: "#D8C06F"
  display: "Cormorant Garamond, Georgia, serif"
  body: "Cormorant Garamond, Georgia, serif"
---

# formicarium — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, WindSurf) as the visual direction for a website. Follow every section. When in doubt, choose the geological-field-note interpretation.

## 1. Overall aesthetic

A field notebook lies on a dark wooden desk. The left page is written up in a sepia italic hand: a title, two dated entries, a labelled pencil sketch of a worker ant from above, a three-step diagram of the two-scent rule, a live tally and an "Observations" log. The right page is the arena: a pasted typewritten specimen label, a pressed lime leaf, a coffee ring, a ribbon in the gutter and a green pencil lying across the corner. Up to 1,500 ants pour from a drawn nest hole in a fan, find the waiting sugar within seconds, and stain the paper with green home-scent and rust food-scent that thickens into roads. The viewer adds sugar, draws graphite walls, rubs out roads, drops water and inspects individuals under a 4x loupe, while red-pencil notes with arrows write themselves beside notable events and are entered in the log with timestamps. Double-tap an ant and you get its details: status, weight, direction, path, and the time of day it was observed. Triple-tap highlights a connection: two ants that pass sugar share a segment of path. Press a marked zone: it blinks, and you see the other ants coming through it.

## 2. Typography

- **Display:** Cormorant Garamond, Georgia, serif.
- **Body:** Cormorant Garamond, Georgia, serif.
- **Scale:** hero 18px, H2 15px, H3 12px, body 11px, meta 10px.
- **Weights:** display 400–500; body 400; labels 500.
- **Rules:** left-aligned captions, hairline rules, 1px, flush-left, 1px solid #2F2A2208, 1px solid #2F2A22, 1px solid #2F2A22, 1px solid #2F2A22, 1px solid #2F2A22, 1px solid #2F2A2208, 1px solid #2F2A22.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F4F1E9` | Cream/linen paper |
| Surface | `#FBF7ED` | Ant bodies, dots, grain |
| Ink | `#2F2A22` | Ink, text, road lines |
| Muted | `#6A6A5F | Light gray: graphite, soil, notes |
| Accent | "#2F6E5B | Green: home-scent roads |
| Accent2 | "#D8C06F | Warm gold: food trails |
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/formicarium/DESIGN.md`.*


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
