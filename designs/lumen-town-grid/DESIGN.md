---
slug: lumen-town-grid
name: "Lumen — Municipal Power Board"
description: "A model-railway power board: isometric pastel town of 30+ buildings on a steel-blue plinth, with wind ridge, battery barn, and a wired network to the mainland."
category: Data
tags: ["lumen", "power", "town", "model", "isometric", "grid", "city"]
related: ["terminal", "carbon-enterprise", "dataviz-terminal"]
preview:
  bg: "#F2F2F0"
  surface: "#FFFFFF"
  ink: "#1C1A18"
  muted: "#686868"
  accent: "#0078D4"
  accent2: "#E3B23C"
  display: "IBM Plex Sans, Inter, sans-serif"
  body: "Inter, sans-serif"
---

# lumen-town-grid — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, WindSurf) as the visual direction for a website. Follow every section. When in doubt, choose the sharper-utility interpretation.

## 1. Overall aesthetic

A municipal power dashboard built as a model-railway board: an isometric pastel town of some thirty buildings on a steel-blue plinth, with a wind ridge, a sun field, a weir, a battery barn and a pylon line to the mainland, all wired to a tiny substation. One simulation of a 24-hour day drives both the model and the instruments around it. The board opens empty, buildings spring up district by district, wires string themselves between poles, and yellow dashes begin to run along them at a speed and density that match the kilowatts on each line. As dusk falls the board tints from cream through pink to a dim lavender, windows light house by house, the Bijou's marquee comes on, the wind drops, and the viewer watches the battery barn's flow turn round and the interconnector start importing. Around the model sit a day dial, frequency gauge, segmented battery, a 24-hour stacked supply chart with the demand line, today's mix ring, a carbon-free streak, the mainland account in pounds and a dryly written event log, all in the same flat navy-outlined style.

## 2. Typography

- **Display:** IBM Plex Sans, Inter, sans-serif.
- **Body:** Inter, sans-serif.
- **Scale:** hero 20px, H2 16px, H3 13px, body 12px, meta 11px.
- **Weights:** display 500–600; body 400; caps caps.
- **Rules:** flush-left captions, ruled labels, amber accent2.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F2F2F0` | Cream ground |
| Surface | `#FFFFFF` | Model pieces, panels |
| Ink | `#1C1A18` | Dark text |
| Muted | `#5E5E5A` | Faint labels, lines |
| Accent | `#0078D4` | Blue, wind, links |
| Accent 2 | `#E3B23C` | Gold, sun, dashes |

## 4. Spacing

8px base; grid 6px; town buildings 14px apart; event log 8px rows.

## 5. Layout / Grid

Top: model railway board (town + plinth + wires + pylon line); right: instruments and logs.

## 6. Borders

1px solid #1C1A1815 panel borders, 0px on buildings.

## 7. Shadows

0 2px 4px rgba(28,26,24,0.12) on tall buildings, 0 6px 14px rgba(227,178,60,0.18) on gold dashes.

## 8. Radius

2px pieces; 8px instrument cards.

## 9. Buttons

None — interactions are drag and buttons on the model. "Island/interconnect" toggle button: 40px, muted outline, white text, 44px+ targets.

## 10. Cards

Event log: white cards, hairline border, 8px radius, shadow 0 2px 4px.

## 11. Navigation

Day dial: a 24-hour ring with drag, arrow keys, and labels; Frequency gauge on right.

## 12. Imagery

Buildings, wind turbine, sun, weir, battery barn, substation, wires, dashes.

## 13. Icons

Voltage, clock, plug, wiring, plug.

## 14. Textures

Cartoon paper grain 3%, graphite on model; shadow casts on plinth.

## 15. Motion

Buildings spring up 250ms ease; wires string themselves 600ms; dashes run at 15-25 px/s; dusk tint 2s ease; dawn tint back 2s.

## 16. Interactions

- Drag the sun on the Day dial: moves the board's time.
- Drag the substation dials to spin.
- Toggle the district feeder isolation.
- Hover buildings to read name and load.
- Click Mainland: it opens up, sells, imports.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): model stacks top, dials 32px, instruments below, labels smaller. Tablet (768–1099px): model 90%, dials 40px. Desktop (1100px+): full town, wide instruments. Never hide the dial or the isolation toggle; always visible.

## 18. Accessibility

Dark navy text on cream: 12:1 on both Background and Surface. Gold dashes carry strong contrast against the plinth. All panels and buttons ≥ 4.5:1. Focus: visible ring on dial and toggle. Motion: prefers-reduced-motion disables building springs and dashes (shows static final state).

## 19. What to avoid

Saturated backgrounds, fake wires without animation, extra legends, inappropriate color choices, more than 5 event types.

## 20. Quick-start snippet

```css
:root {
  --bg: #F2F2F0;
  --surface: "#FFFFFF";
  --ink: "#1C1A18";
  --muted: "#5E5E5A";
  --accent: "#0078D4";
  --accent2: "#E3B23C";
  --font-display: "IBM Plex Sans, Inter, sans-serif";
  --font-body: "Inter, sans-serif";
}
```
