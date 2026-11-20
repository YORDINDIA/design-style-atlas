---
slug: kestrel-framework
name: "Kestrel Bicycle Frames"
description: "Cyanotype drawings of lugged steel bikes and forks from a measure sheet; scale rules rewrite real frame geometry in place."
category: Historical
tags: ["bike", "frame", "cyanotype", "drawing", "geometry", "sheet"]
related: ["blueprint", "hand-drawn", "terminal"]
preview:
  bg: "#F2F6FA"
  surface: "#FFFFFF"
  ink: "#0E2F66"
  muted: "#6a6a6a"
  accent: "#1B4F9C"
  accent2: "#FFD23F"
  display: "Arial Narrow, DejaVu Sans Mono, Georgia, Times New Roman"
  body: "DIN Alternate, Roboto Mono"
---

# kestrel-framework — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cyanotype-blue drawing interpretation.

## 1. Overall aesthetic

Cyanotype blue-prints of lugged steel touring frames from a one-woman frame shop: frame, fork, wheels, and a dotted rider sketched in an inhabited sheet (head-tube, seat-tube, chainstays, stays) with her neat hand-lettering across the top, plus a mount-pinched dimension schedule and a pencilled margin note. A pencil sketch on a steel table shows the same setting as two hatched lengths added along a logarithmic line; a laptop and circular rule sketches show geometry. Enter heights, inseams, reaches and uses in the form; every change rewrites the frame in place: tube lengths slide, the rider leans further forward, wheels grow shorter for short legs, and every change is logged as a lettered revision. A price table and a waiting-list line sit at the bottom of the sheet; a yellow RECEIVED stamp is slammed onto the title block when you press "Reply".

## 2. Typography

- **Display:** Arial Narrow, DejaVu Sans Mono, Georgia, Times New Roman.
- **Body:** DIN Alternate, Roboto Mono.
- **Scale:** hero 16px mono caps, H2 14px, body 12px mono, labels 10px.
- **Weights:** display 400; body 400; labels 500.
- **Rules:** letters in arch-shaped caps, margins with ink rules, dimension arrows 10px tall.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F2F6FA` | Cyanotype sheet |
| Surface | `#FFFFFF` | Saturated ink lines |
| Ink | `#0E2F66` | Cyanotype ink, handwriting |
| Muted | `#8A6B2E` | Pencil, dimension text, notes |
| Accent | `#1B4F9C` | Star-cutta? no — Cyanotype blue, mount pins |
| Accent 2 | `#FFD23F` | Geometry highlight, "Reply" stamp |

## 4. Spacing

8px base; sheet margins 20px; dimensions 12px apart.

## 5. Layout / Grid

Left: form (height, inseam, reach, use, hand); right: sheet with frame; bottom: pencil sketch + price table.

## 6. Borders

1px solid #8A6B2E22 sheet edges, dimensions 1px solid #8A6B2E33, form rules 0px.

## 7. Shadows

0 2px 6px rgba(14,47,102,0.10) on frame, 0 4px 8px rgba(255,210,63,0.18) on the geometry lines.

## 8. Radius

4px rule ends, 0px sheet corners (true print sharpness).

## 9. Buttons

"Reply" button: 40px pill, accent2 fill with white text, stamped with the "Reply" mint seal; "Print" button: 30px pill, accent fill, white text. 44px+ targets.

## 10. Cards

Frame card: ink lines on white, 10px radius, 0px shadow, cyanotype bleed at the edges.

## 11. Navigation

Form row of four fields: rider height, inseam, reach, use — sliders and inputs, keyboard focus visible.

## 12. Imagery

Frame, fork, wheels, router, rider all drawn in cyanotype blue; pencil sketch of geometry; dimension text inline.

## 13. Icons

Placed with arrows, squared caps, star-cut bits for pins.

## 14. Textures

Sandpaper at 8% behind sheet; blueprint grid 1px.

## 15. Motion

Enter animation: letters pop in 400ms ease-out; rules move 100ms; geometry slides 100ms; stamp slam 150ms.

## 16. Interactions

- Enter rider height, inseam, reach, use in the form: the frame rewrites in place as you type (geometry animated with ease-out).
- Wheel sizes switch (650B, 26, 29) as you adjust.
- "Print" prints the frame and pencil sketch.
- "Reply" slides the workers in the lock, transition 100ms ease-out; the geometry and geometry lines glow accent2; the dose.
- Drag the plugs.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): form stacked, sheet one page. Tablet (768–1099px): form + sheet side by side. Desktop (1100px+): full form width, sheet wider, print panel below. Never hide "Reply"; always visible.

## 18. Accessibility

Every interactive element is 48px tall, 16px apart, with visible focus. The buttons' cyanotype and accent fill are checked for contrast against the cream and light cyanotype; ink and muted hit 4.5:1 on both Background and Surface. Motion: prefers-reduced-motion removes form pop-in (static).

## 19. What to avoid

Flat fills without cyanotype bleed, extra shadows, extra colors, arrowheads on non-parallel lines, bigger than 40px input fields, sliders without focus-visible.

## 20. Quick-start snippet

```css
:root {
  --bg: #F2F6FA;
  --surface: #FFFFFF;
  --ink: #0E2F66;
  --muted: #8A6B2E;
  --accent: #1B4F9C;
  --accent2: #FFD23F;
  --font-display: Arial Narrow, DejaVu Sans Mono, Georgia, Times New Roman;
  --font-body: DIN Alternate, Roboto Mono;
}
```
