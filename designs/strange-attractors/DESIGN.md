---
slug: strange-attractors
name: "Strange Attractors — Plate I"
description: "A wire-style viridian vitrine holding one attractor at a time, built from up to 480,000 points of gold dust, with live draggable constants."
category: Data
tags: ["attractors", "chaos", "fractal", "math", "interactive", "physical"]
related: ["sci-fi-ui", "3d-web-design", "glitch-art"]
preview:
  bg: "#1F2733"
  surface: "#2A323E"
  ink: "#E6E9EF"
  muted: "#fdfdfd"
  accent: "#00F5D4"
  accent2: "#FFB300"
  display: "Space Grotesk, Inter, sans-serif"
  body: "Inter, sans-serif"
---

# strange-attractors — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the scientific, data-viz interpretation.

## 1. Overall aesthetic

A dark viridian vitrine holds one strange attractor at a time, built from up to 480,000 points of gold dust whose overlapping density, not any drawn line, makes the form: thin outer loops are faint threads, the folded cores glow champagne, and a jade shadow of the same density lies on a graduated floor ring beneath. The page is composed like a museum label on glass: a large Didone name and plate number at top left, the governing equations set in italic serif with live, draggable constants at bottom left, a row of seven miniature specimens at bottom right. The experience is slow and tactile: the specimen turns on its own until taken in hand, a swarm of bright tracers shows which way the flow runs and how quickly neighbours part, and every change of plate or constant makes the whole cloud dissolve and re-settle into its new shape rather than cut.

## 2. Typography

- **Display:** Space Grotesk, Inter, sans-serif.
- **Body:** Inter, sans-serif.
- **Scale:** hero 20px caps, H2 16px, H3 13px, body 12–13px, meta 11px.
- **Weights:** display 600; body 400; equations italic 500.
- **Rules:** flush-left, hairlines, 1px increments.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#1F2733` | Deep space |
| Surface | `#2A323E | Gold dust, floor ring, name |
| Ink | `#E6E9EF` | White text, equations |
| Muted | `#8A93A6` | Minimize text, minor marks |
| Accent | "#00F5D4 | Butterfly tracers, curve clouds |
| Accent 2 | "#FFB300 | Gold on dust, name, minimize |
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/strange-attractors/DESIGN.md`.*


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
