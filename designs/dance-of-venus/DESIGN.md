---
slug: dance-of-venus
name: "Dance of Venus"
description: "Join Earth and Venus with a line over 8 years; watch the five-petal rose traced. Knob controls pace from decades to the sky's leisure."
category: Data
tags: ["astronomy", "geometry", "math", "instrument", "orbit", "music"]
related: ["blueprint", "sci-fi-ui", "cyberpunk"]
preview:
  bg: "#F7FBFD"
  surface: "#FFFFFF"
  ink: "#1F2937"
  muted: "#6d6d6d"
  accent: "#FF3B00"
  accent2: "#D8D8D2"
  display: "Helvetica Neue, Arial, sans-serif"
  body: "Menlo, Courier New, monospace"
---

# dance-of-venus — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more systematic, diagram-first interpretation.

## 1. Overall aesthetic

A long-exposure astronomical atlas sheet. Two circles in a field of space: Earth (gold ring, radius 1) and Venus (red ring, radius 0.715). Every 4 days a hair-fine line is ruled between them and left behind. Within 3 seconds the first petal appears: Venus dips behind Earth at perihelion, the petal opens, and over eight simulated years the curve resolves into a five-petalled rose with tight, pointed petals that spiral out from the focus and petal tips circle the line of hagiography? — write: petal tips circle the underlying circle. The knob controls the pace — draw a timeline: from decades to sky-leasure — and the rose shows its evolving shape in a preview pane at the right, with the quotient ratio 13/8 displayed live at the top of the sheet with a one-line explanation: 'Venus and Earth circle 8 times in 8Venus-years; their period ratio is 13:8 (Venus twice, Earth once, near-alignment every 8.01 years).' Around the knob, the other five pairs give the same treatment (Mercury and Earth, Venus and Mars, Earth and Mars, Jupiter and Earth and 'the five-petaled conference of lengths'). Elements table at the bottom: period ratio, alignment year, note of progress of Earth relative to Venus' perihelion. Bottom: a legal element table. Playable at 8/5 speed, and static mode at 1/3.

## 2. Typography

- **Display:** Helvetica Neue, Arial, sans-serif.
- **Body:** Menlo, Courier New, monospace.
- **Scale:** title 16px caps, H2 14px, H3 12px, body 12–13px, metadata 11px.
- **Weights:** display 600–800; body 400–500; labels 500–600.
- **Rules:** flush-left captions, dot leaders between entries and text.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F7FBFD` | Laid-out paper |
| Surface | `#FFFFFF` | Math field, rose preview |
| Ink | `#1F2937` | Titles, notes |
| Muted | "#5B6B7D",
| Accent | "#FF3B00",
| Accent2 | "#D8D8D2",
| Display: "Helvetica Neue, Arial, sans-serif",
| Body: "Menlo, Courier New, monospace",
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/dance-of-venus/DESIGN.md`.*


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
