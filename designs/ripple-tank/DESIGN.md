---
slug: ripple-tank
name: "Ripple Tank"
description: "A clinical physics lab manual page built around a living ripple tank: drag apparatus into the tank, run 7 textbook experiments, probe the surface with strobe and ruler."
category: Data
tags: ["physics", "lab", "ripple", "interference", "teaching", "interactive"]
related: ["sci-fi-ui", "blueprint", "terminal"]
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F2"
  ink: "#1A1A1A"
  muted: "#6a6a6a"
  accent: "#2B5A8F"
  accent2: "#D62828"
  display: "Helvetica Neue, Arial, sans-serif"
  body: "Helvetica Neue, Arial, sans-serif"
---

# ripple-tank — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the clinical, lab-manual interpretation.

## 1. Overall aesthetic

A clinical lab-manual page built around a living ripple tank. A framed tray of pale aqua water sits on a white bench with corner screws, legs and an apparatus shelf beneath it; numbered experiment tabs run across the top like headings in a practical handbook, and a side column carries the experiment note, one live formula, the frequency control and the probe plot. The page opens on the double slit: a plane wave marches from a red bar, strikes a lab-blue wall, and two fans of wavelets cross into alternating beams of glittering crests and calm nodal lanes, while red hand-drawn arrows name the central maximum and a nodal line, and the plot beside the tank grows a row of fringes under thin red prediction ticks. Everything in the tank can be dragged, rotated, resized or thrown out, so each textbook diagram can be bent into another one. The page is a simulation, not a movie — it recomputes waves in real time as you drag the apparatus in and out, so the experiment you set up is the one you see.

## 2. Typography

- **Display:** Helvetica Neue, Arial, sans-serif.
- **Body:** Helvetica Neue, Arial, sans-serif.
- **Scale:** hero 20px caps, H2 16px, H3 13px, body 12–13px, meta 11px.
- **Weights:** display 500–700; body 400–500; labels 600.
- **Rules:** flush-left, table rules 1px, caption 11px.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Bench, apparatus shelf |
| Surface | `#F5F5F2` | Tank glass, water |
| Ink | `#1A1A1A` | Dark text, bars |
| Muted | `#6B6B6B | Apparatus shelf, labels, ... |
| Accent | "#2B5A8F | Red bars, direction arrows |
| Accent 2 | "#D62828 | Red marks, nodal lanes |
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/ripple-tank/DESIGN.md`.*


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
