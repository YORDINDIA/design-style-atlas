---
slug: moon-tonight
name: "The Moon Tonight"
description: "A mean-month lunar instrument: drag the days or play a month or skip to one day or six hours, flip N/SH, and read the height of the Sun above the lit ground."
category: Data
tags: ["moon", "lunar", "instrument", "astronomy", "phase", "light"]
related: ["blueprint", "sci-fi-ui", "terminal"]
preview:
  bg: "#0B1D32"
  surface: "#121F36"
  ink: "#F2F5FF"
  muted: "#fdfdfd"
  accent: "#FFD17A"
  accent2: "#7CB9E8"
  display: "Playfair Display, Georgia, serif"
  body: "Inter, sans-serif"
---

# moon-tonight — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more starlit, moon-focused interpretation.

## 1. Overall aesthetic

A quiet, scientific instrument: one cratered moon hanging in a sparse field of fixed stars on night black, shown at the phase it has at this very minute. Beneath it the phase name is set in very large, light serif type, followed by one italic line of copy written for that phase and a single ruled row of tabular data (illumination, age, date and time). A small column lists the next four principal phases, with the coming full moon in harvest gold; along the bottom edge a tape of day-by-day moon glyphs slides under a fixed index, today ringed in gold. Dragging the tape sweeps the terminator across real relief: crater rims catch the light, floors fill with shadow, the old moon in earthshine appears around new, and every readout ticks along. The page opens in darkness, the lit limb arrives as a hairline, the light sweeps to the true phase and the title letters settle into place.

## 2. Typography

- **Display:** Playfair Display, Georgia, serif.
- **Body:** Inter, sans-serif.
- **Scale:** phase name 40px, H2 22px, H3 13px, body 12px, meta 10px.
- **Weights:** display 400–500; body 400; phase name 200.
- **Rules:** flush-left moon panel, ruled rows, gold accents.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0B1D32` | Night sky |
| Surface | `#121F36` | Moonlight, phase circle |
| Ink | `#F2F5FF` | Moon, text, tape labels |
| Muted | `#506980` | Stars, plate marks |
| Accent | `#FFD17A` | Harvest gold phase, index ring |
| Accent 2 | `#7CB9E8` | Soft blue, tape |

## 4. Spacing

8px base; moon 60px; tape 8px; readouts 8px.

## 5. Layout / Grid

Moon centered; phase name above it; copy below; readouts below; phases right; tape at bottom.

## 6. Borders

0px space, 1px solid #F2F5FF44 moon ring.

## 7. Shadows

0 8px 24px #FFD17A22 phase glow.

## 8. Radius

50% moon; 8px frames.

## 9. Buttons

"Play a month" button: 40px, gold fill, black text. "One day": 40px pill, blue, 3% padding. "Six hours": 40px pill, muted outline. 44px+ targets.

## 10. Cards

None.

## 11. Navigation

Day tape: drags along the bottom, sweeps to show different days.

## 12. Imagery

Cratered moon, stars, tape, index ring, phase name.

## 13. Icons

Moon glyphs, phases circle, arrow, plus.

## 14. Textures

Star speckle, moon glow.

## 15. Motion

Shadow sweep: 1s ease-out, then hold; tick: 0.2s ease-out; tape slide: 400ms ease.

## 16. Interactions

- Drag the tape: sweeps the terminator; each day ringed in gold.
- Drag moon around: the phases circle sweeps along.
- Click "Play a month": the moon phase cycles (2 months).
- Click "One day": jumps back.
- Click "Six hours": advances half a day.
- Click lit ground: shows the Sun's height above it.
- Press phase name: starts the shadow sweep.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): tape full-width, buttons 48px, moon 80px, phases column. Tablet (768–1099px): moon 84px, phases sidebar. Desktop (1100px+): moon 96px, phases sidebar wider. Never hide "Play a month"; always visible.

## 18. Accessibility

On dark blue, moon white at 12.8:1, gold glow carries light and strong contrast, muted gray on dark blue is 5.6:1, harness buttons are 48px. Focus: visible ring on all interactive elements. Motion: prefers-reduced-motion snaps the shadow sweep to the static phase (no animation).

## 19. What to avoid

Flat moon, noise, too much color, fake stars, changing phases while hovering.

## 20. Quick-start snippet

```css
:root {
  --bg: "#0B1D32";
  --surface: "#121F36";
  --ink: "#F2F5FF";
  --muted: "#506980";
  --accent: "#FFD17A";
  --accent2: "#7CB9E8";
  --font-display: "Playfair Display, Georgia, serif";
  --font-body: "Inter, sans-serif";
}
```
