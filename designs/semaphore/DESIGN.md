---
slug: semaphore
name: "Semaphore — Say It with Flags"
description: "Type a message and watch the signaller spell it across the water: flags swing across an eight-point clock with realistic mechanical physics."
category: Playful
tags: ["semaphore", "flags", "nautical", "instrument", "interactive", "alphabet"]
related: ["terminal", "sci-fi-ui", "mac-os"]
preview:
  bg: "#E6E2D4"
  surface: "#FFFFFF"
  ink: "#1A1812"
  muted: "#5d5d5d"
  accent: "#D62828"
  accent2: "#FFD700"
  display: "Helvetica Neue, Arial, sans-serif"
  body: "Arial, Helvetica, sans-serif"
---

# semaphore — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, WindSurf) as the visual direction for a website. Follow every section. When in doubt, choose the mechanical-weather interpretation.

## 1. Overall aesthetic

A sunny mid-century instructional poster that is also a working instrument. A flat, geometric sailor stands on a signal deck with a rail, a lifebuoy, a coil of rope, the sea horizon, a steamer and one small cloud, holding two diagonally divided red-and-yellow flags. Type a message onto an invented naval message form (S.1320, with TO / FROM / TIME boxes and ruled typewriter lines), press SEND, and the signaller spells it out in correct flag semaphore: arms snapping the shortest way round an eight-point clock with a slight wind-up and overshoot, flags folding edge-on through the move and cracking open with follow-through, the body leaning and bobbing with each position, rests between words, a quick drop between double letters, and the numerals and letters-follow signs inserted automatically. A strip of tiny static glyphs lights up in red in step with the performance while the current character stands beside the figure in huge stencil type. On load the signaller calls attention with both flags and spells HELLO unasked. A second tab turns the page into a reading trainer with a streak counter and a ship's bell, and a reference chart of thirty positions, grouped by the seven circles of the code, lets the viewer play the signaller like an instrument by hovering, tapping or pressing letter keys. Everything is shown as seen by the observer, and says so.

## 2. Typography

- **Display:** Helvetica Neue, Arial, sans-serif.
- **Body:** Arial, Helvetica, sans-serif.
- **Scale:** hero 24px caps, H2 20px, H3 14px, body 11–12px, meta 10px.
- **Weights:** display 500–700; body 400–600.
- **Rules:** flush-left form fields, ruled typewriter lines, caps.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#E6E2D4` | Cream, sun, sea |
| Surface | `#FFFFFF` |Flags, messages |
| Ink | `#1A1812` | Navy, white text |
| Muted | "#5D5240" | Brass, shadows, sun |
| Accent | "#D62828" | Red flag, sea, danger |
| Accent 2 | "#FFD700" | Yellow flag, sun, streaks |
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/semaphore/DESIGN.md`.*


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
