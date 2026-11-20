---
slug: museum-of-obsolete-sounds
name: "The Museum of Obsolete Sounds — Gallery 2"
description: "A white-cube gallery where nine dead instruments run again by touch: a round blue button, an oscilloscope, and a small spectrogram that show the sound actually being made."
category: Historical
tags: ["museum", "obsolete", "sounds", "audio", "gallery", "dead-tech", "plinths"]
related: ["heritage-classic", "analog-hifi", "terminal"]
preview:
  bg: "#FAFAF8"
  surface: "#FFFFFF"
  ink: "#111111"
  muted: "#6d6d6d"
  accent: "#0047FF"
  accent2: "#8C8C8C"
  display: "Helvetica, Arial, Menlo, Courier New"
  body: "Menlo, Consolas, Courier New, monospace"
---

# museum-of-obsolete-sounds — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, WindSurf) as the visual direction for a website. Follow every section. When in doubt, choose the more display-editing interpretation.

## 1. Overall aesthetic

A white-cube gallery rendered as a long page: an entrance wall with the museum's name in enormous tight black grotesque under a single blue waveform that dies away into a flat line, then nine exhibit rows, each with a huge outlined catalogue number, a single-weight line drawing standing on a plinth, and a wall label written in a dry curatorial voice. The front face of every plinth is an instrument panel: a round blue button, an oscilloscope and a small spectrogram that show the sound actually being made at that moment. Nothing is recorded; a rotary dial, a modem handshake, a typewriter, a television, a camera, a floppy drive, a cassette, a slide projector and the time pips are all built from oscillators, filtered noise and envelopes, and each drawing performs one exact mechanical movement in step with its sound. The modem is the centrepiece: its plinth panel widens across the whole row and a large spectrogram writes itself out while brackets caption the conversation between the two machines. A mechanical tally counts what has been heard, and the exit wall keeps its last label in storage until all nine have played.

## 2. Typography

- **Display:** Helvetica, Arial, Menlo, Courier New.
- **Body:** Menlo, Consolas, Courier New, monospace.
- **Scale:** hero 36px grotesque caps, H2 24px, H3 14px, body 12px, meta 11px.
- **Weights:** display 800; body 500; mono 500.
- **Rules:** flush-left on the exhibit rail, 1px solid #8C8C8C rules.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FAFAF8` | Cream paper, plinth |
| Surface | `#FFFFFF | Drawing paper, plinth |
| Ink | "#111111 | Dark ink, labels |
| Muted | "#5A5A5A | Label, plinths |
| Accent | "#0047FF | Blue button, labels |
| Accent 2 | "#8C8C8C | Outline, notes |
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/museum-of-obsolete-sounds/DESIGN.md`.*


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
