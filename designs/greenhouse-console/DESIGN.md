---
slug: greenhouse-console
name: "ARES-HORT Console — Greenhouse B"
description: "A mars greenhouse console: 80-column, 18-row character grid with zones, beams, glass effects, a power toggle, and a live scan monitor with thermal grain."
category: Futurist
tags: ["mars", "greenhouse", "console", "sci-fi", "monitor", "agriculture"]
related: ["solarpunk", "sci-fi-ui", "carbon-enterprise"]
preview:
  bg: "#0A0600"
  surface: "#151000"
  ink: "#FFB000"
  muted: "#fdfdfd"
  accent: "#FF6A00"
  accent2: "#E5B062"
  display: "Menlo, Consolas, Courier New"
  body: "Menlo, Consolas, Courier New"
---

# greenhouse-console — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the warmer, more desert-console interpretation.

## 1. Overall aesthetic

A mars greenhouse console. An amber tube warms from a bright line into a full raster that counts its memory: rows 0-17, then draws its own banner (ARES-HORT) and builds a greenhouse dashboard frame by frame. On the glass: bars, sparklines, a plumbing diagram with arrows creeping through the pipes, a solar array that slowly fills, and six planter beds whose potatoes, wheat, lettuce, soy, radishes and sunflower sprout, sway when dry, and ripen while you watch. The station runs itself with a dry sense of humor until a dust storm rolls in, the screen dims, an orange alarm flashes, and the machine starts switching off lamps — Gerald, the first. The log alternates terse system lines with Dr. Imani Okoro-Lindqvist's notes; the wall beside the terminal holds 412 tally marks.

## 2. Typography

- **Display:** Menlo, Consolas, Courier New.
- **Body:** Menlo, Consolas, Courier New.
- **Scale:** hero 16px mono caps, H2 13px, body 11–12px, readouts 12px.
- **Weights:** mono 400–500; amber 500.
- **Rules:** on the grid, all-caps with letterspacing 0.06em.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0A0600` | Outside |
| Surface | `#151000` | Tube glass |
| Ink | `#FFB000` | Harness, text, bars |
| Muted | `#5A3A00` | Passive lines, shadows |
| Accent | `#FF6A00` | Bars, system error |
| Accent 2 | `#E5B062` | Highlight glow, solar panel |

## 4. Spacing

8px base; tube interior 80x18; margins on all sides.

## 5. Layout / Grid

Top: memory count and banner; bottom: glass dashboard; right: warm panel with bed status, power toggle, live scan.

## 6. Borders

1px solid #5A3A0022 tube edge, 1px solid #FF6A0044 glass edge; 6px tube corners.

## 7. Shadows

0 0 12px #FF6A0033 amber glow; 0 4px 12px rgba(255,106,0,0.12) on tiles.

## 8. Radius

6px corners; 0px tube interior.

## 9. Buttons

"Power off" button: 40px pill, accent2 fill with white text; hover glows. 44px+ targets.

## 10. Cards

Tiles: 16px padding, 4px corners, 1px #FF6A0022 inset border, amber glow on active.

## 11. Navigation

Top: memory count, ARES-HORT banner, power toggle; right: live scan with "Bed 1"–"Bed 6", power state, scan status.

## 12. Imagery

No imagery.

## 13. Icons

Amber circle, power symbol, bar, drop.

## 14. Textures

None — warm monospace everywhere.

## 15. Motion

Tube warms: glow pulse 0.8s ease-in-out; memory counter: 0→100 steps over 1s ease-out; harvest pulse on ready.

## 16. Interactions

- Click "Power off": amber ripples, console powers down, text fades.
- Hover planter tiles: bed status reads aloud.
- Click bars: brings up the chart summary card.
- Click the dust storm button: screen dims, orange alarm flashes, lamps switch off; a third click restores.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): single column, bars wrap. Tablet (768–1099px): 2-column. Desktop (1100px+): full grid; bed status rail on the right. Never hide the power toggle; always visible.

## 18. Accessibility

Amber bars and text on dark tube are checked for 4.5:1 on both Background and Surface; warm panel text hits 4.5:1; power toggle is 48px tall with a visible focus ring. Motion: prefers-reduced-motion sets the console to static.

## 19. What to avoid

Realism, extra decorations, busy layouts, aliasing, more than 9 beds, more than 2 alarm types.

## 20. Quick-start snippet

```css
:root {
  --bg: #0A0600;
  --surface: #151000;
  --ink: #FFB000;
  --muted: "#5A3A00"
  --accent: #FF6A00;
  --accent2: #E5B062;
  --font-display: "Menlo, Consolas, Courier New";
  --font-body: "Menlo, Consolas, Courier New";
}
```
