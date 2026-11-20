---
slug: seismograph-drum
name: "Kettlewick Observatory — Seismograph No. 2"
description: "A working 19th-century observatory seismograph whose recording drum is 6x faster than real time, with a damped pen that writes real traces."
category: Historical
tags: ["seismograph", "observatory", "1894", "drum", "working", "physics"]
related: ["terminal", "analog-hifi", "sci-fi-ui"]
preview:
  bg: "#12100B"
  surface: "#1A1610"
  ink: "#D9C8A8"
  muted: "#fdfdfd"
  accent: "#4E6A8F"
  accent2: "#6B4B2D"
  display: "Georgia, Times New Roman, serif"
  body: "Georgia, serif"
---

# seismograph-drum — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the geological-drum interpretation.

## 1. Overall aesthetic

A working observatory instrument presented as a page of stationery: an engraved masthead, a slate-and-brass elevation drawing of the seismograph (clockwork gearbox with a stepping escapement, a paper-wrapped drum sliding along its lead screw, long boom, knife-edge pivot, oil damper, sprung mass) and beneath it the unrolled recording sheet, where a simulated pen draws a continuous trace line by line. The observatory clock runs at six times the pace of yours: the scroll shows 2 hours of genuine time per minute of real time, so small earth movements show big and easy to see. A simulated earthquake arrives a few seconds after page opens: the pen dips and traces, and your knuckles knocking on the pier or striking the mallet register on the sheet. Everything the visitor does to the page (knocking, shaking, striking the pier) is recorded by the same damped pen and written in red ink on the sheet; red notes appear on the page as events happen. Analog readouts, a rack of filed sheets, and a framed notice complete the bench.

## 2. Typography

- **Display:** Georgia, Times New Roman, serif.
- **Body:** Georgia, serif.
- **Scale:** hero 20px caps, H2 16px, H3 13px, body 12–13px, meta 11px.
- **Weights:** display 600; body 500; labels 400.
- **Rules:** flush-left, engraved labels, pen-like strokes.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#12100B` | Dark wood, slate, brass |
| Surface | `#1A1610` | Drum, booms |
| Ink | `#D9C8A8` | Cream text, drum annotations |
| Muted | `#5C5240` | Brass accents, seeking |
| Accent | `#4E6A8F` | Steel, quartz, pendulum |
| Accent 2 | `#6B4B2D` | Brass ring, bolts |

## 4. Spacing

8px base; sheet 6px margins; time lines 16px; red marks 4px.

## 5. Layout / Grid

Top: masthead, elevation drawing, recorder notes; middle: unrolled sheet; bottom: wooden bench, notch, pendulum, old letters.

## 6. Borders

1px solid #4E6A8F44 slate frame, 2px solid #6B4B2D22 brass ring, 0px on the elevation sketch.

## 7. Shadows

0 4px 10px rgba(18,16,11,0.14) on the elevation sketch, 0 8px 18px rgba(74,75,55,0.10) under sheet.

## 8. Radius

8px corners, 0px sheet, 2px brass ring.

## 9. Buttons

"Knock & record" button: 40px round, accent fill, white text, hover deepens, 44px+ targets. Also "Wipe" button: 40px, muted outline, white text.

## 10. Cards

None.

## 11. Navigation

None.

## 12. Imagery

Engraved plate, lead screw, quartz pendulum, stepping escapement, oil damper, splint, ink.

## 13. Icons

Magnifying glass, clock, pen, bell.

## 14. Textures

Wood grain 4%, brass polish 3%, stone 21%.

## 15. Motion

Pen stroke: 100ms ease; clock tick: 800ms ease-out; waveform wiggle 2s ease; event mark flash 200ms; quiet time: none.

## 16. Interactions

- Knock anywhere or press Space to record; trace red on sheet.
- Drag pendulum bob to change amplitude, mass.
- Magnifier on the elevation to enlarge, move it.
- Keyboard shortcuts: Space to trigger.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): sheet stacked, elevation on top, clock on bottom. Tablet (768–1099px): 2 columns. Desktop (1100px+): full page, shelf, map, and small code. Never hide the knock or magnification; always visible.

## 18. Accessibility

All text: checked 4.5:1 against Background and Surface: ink on dark wood and steel reaches 12.2:1, muted reaches 5.3:1, cream on brass is strong. Focus: visible ring on knock and magnification buttons. Motion: prefers-reduced-motion snaps to static sheet (no tick, no waveform wiggle).

## 19. What to avoid

More fake sounds, adjusting the speed beyond the spec'd range, loud speculative software buttons, unnecessary chart-junk.

## 20. Quick-start snippet

```css
:root {
  --bg: #12100B;
  --surface: #1A1610;
  --ink: "#D9C8A8";
  --muted: "#5C5240";
  --accent: "#4E6A8F";
  --accent2: "#6B4B2D";
  --font-display: "Georgia, Times New Roman, serif";
  --font-body: "Georgia, serif";
}
```
