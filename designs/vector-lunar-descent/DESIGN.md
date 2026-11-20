---
slug: vector-lunar-descent
name: "Descent — A Vector Lander"
description: "A lunar landing game on a cathode-ray vector display: arrow keys rotate, W/Space thrust, P pauses, R restarts; land on the marked pad."
category: Space & Flight
tags: [lunar, descent, vector, game, space, crt]
related: [cyberpunk, terminal, sci-fi-ui, game-boy-dmg]
preview:
  bg: "#020403"
  surface: "#070C0A"
  ink: "#B8FFD9"
  muted: "#9A9994"
  accent: "#5CFFB0"
  accent2: "#16271F"
  display: "Gill Sans, Century Gothic, sans-serif"
  body: "Futura, Century Gothic, sans-serif"
---

# vector-lunar-descent — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, WindSurf) as the visual direction for a website. Follow every section. When in doubt, choose the more heroic, vintage-compute interpretation.

## 1. Overall aesthetic

A cathode-ray tube sits in a dark cabinet above an engraved model plate. Everything on its face is light: mint-white beam cores wrapped in green bloom, vertices that burn a little brighter where the beam pauses, and a phosphor that takes a moment to forget what it was shown. The attract screen traces the word DESCENT one stroke at a time while a cratered wireframe moon turns behind it and an autopilot quietly demonstrates a landing below. Starting a mission hands over a small legged module drifting above jagged regolith; the camera eases in to two and a half times scale as the surface approaches, the engine plume fans out and flickers, dust streaks away along the ground in short glowing lines, and the whole tube brightens with the burn. A clean touchdown earns a dry remark from mission control and a harder site; anything else scatters the lander into its component segments, which tumble, bounce and fade while the phosphor remembers their arcs.

## 2. Typography

- **Display:** Gill Sans, Century Gothic, sans-serif.
- **Body:** Futura, Century Gothic, sans-serif.
- **Scale:** hero 28px caps caps, H2 18px, H3 14px, body 12px, meta 11px.
- **Weights:** display 400–600; body 400; caps caps.
- **Rules:** flush-left titles, ASCII borders on controls.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#020403` | Cabinet, floor |
| Surface | `#070C0A | Tube, glass |
| Ink | "#B8FFD9 | Mint-white beam, text |
| Muted | "#9A9994 | Telemetry, floor glow |
| Accent | "#5CFFB0 | Green bloom, legs |
| Accent 2 | "#16271F | Brass bezel, plinth |
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/vector-lunar-descent/DESIGN.md`.*


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
:root { --bg: "#F5EEE4"; --surface: "#FFFFFF"; --ink: "#1E1A17"; --muted: "#7A6B57"; --accent: "#B8925A"; --accent2: "#5B0F1B"; --font-display: "Didot, Baskerville, serif"; --font-body: "Baskerville, serif"; }
```
