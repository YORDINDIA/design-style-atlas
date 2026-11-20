---
slug: skerry-weather-station
name: "Holm Skerry Weather Station"
description: "A Victorian-era observation station where every value is a needle, a mercury column, or an ink line: barometer, wind rose, psychrometer, rain gauge, barograph, sunshine recorder."
category: Historical
tags: ["instrument", "barometer", "weather", " Victorian", "analog"]
related: ["analog-hifi", "blueprint", "terminal"]
preview:
  bg: "#EDE4CF"
  surface: "#FFFFFF"
  ink: "#3B2A20"
  muted: "#5f5f5f"
  accent: "#A33B2B"
  accent2: "#6E5620"
  display: "Georgia, Times New Roman, serif"
  body: "Georgia, serif"
---

# skerry-weather-station — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more Victorian-instrument interpretation.

## 1. Overall aesthetic

An observation station where every instrument is a physical device. A great aneroid barometer is ringed by an anemometer and a 32-point wind rose; a psychrometer with wet/dry bulb tubes; a rain gauge with brass funnel; a glazed barograph with ink-moving rollers; a sunshine recorder with a glass sphere; a clockwork tide gauge and visibility dials — all mounted on grained mahogany against a cream ceiling. Instruments never sit in boxes: needles, mercury columns, water levels, and ink lines are the data. A week of invented weather runs on a fast clock; an Atlantic low arrives a few seconds after load: the barometer needle sinks heavily into the red sector, the wind vane twists, anemometer surges, rain streaks streak across the glass, light dims, and the red storm cone climbs the signal mast. Calm and exact — like standing in a quiet room while weather happens outside.

## 2. Typography

- **Display:** Georgia, Times New Roman, serif.
- **Body:** Georgia, serif.
- **Scale:** hero 30–36px, H2 22–26px, H3 16–18px, body 13–14px, meta 11–12px.
- **Weights:** display 400–700; body 400.
- **Rules:** engraved caps on dials, 60px lines on ceiling, solid/dashed? no — engraved.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#EDE4CF` | Cream ceiling, wood |
| Surface | `#FFFFFF` | Brass trim |
| Ink | `#3B2A20` | Dark wood, glass |
| Muted | `#6F8F8C` | Brass, dials |
| Accent | `#A33B2B` | Red barometer sector, tide flag |
| Accent 2 | `#6E5620` | Brass optics, mahogany detail |

## 4. Spacing

8px base; instruments 32px apart; 60px lines.

## 5. Layout / Grid

Row of instruments along the ceiling with mahogany posts; instrument card details at bottom.

## 6. Borders

1px solid #3B2A2022 glass seals; 90px ceiling strip with hairline.

## 7. Shadows

0 8px 18px rgba(59,42,32,0.12) under instruments; drop shadows on engraved cards.

## 8. Radius

8px instrument containers; 0px dials and brass parts.

## 9. Buttons

"Start weather run" button: 40px pill, accent fill, white label. Keyboard shortcut? none. 44px+ targets.

## 10. Cards

Instrument cards: cream surface, 1px hairline, 6px radius, shadow 0 8px 18px, accent stripe left.

## 11. Navigation

None.

## 12. Imagery

None.

## 13. Icons

Mini barometer, wind rose, mercury tube.

## 14. Textures

Mahogany grain 3%, brass polish 6%, tick marks on wall.

## 15. Motion

Sight barometer needle: ease-in-out 1.2s; rain streaks 0.8s; storm cone climb 0.6s; era line drift 1s.

## 16. Interactions

- Drag the time lever: the weather plays forward or back, slowly or rapidly.
- Drag instrument handles: wind vane changes direction.
- Click the red sector: read the current pressure.
- Long-press the barometer: you get the readings.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): instruments stacked; time lever full-width. Tablet (768–1099px): 2-column. Desktop (1100px+): full row, details panel below. Never hide the time lever; always visible.

## 18. Accessibility

Every instrument label and readout: text color checked 4.5:1 on cream and brass. Focus: visible ring on the time lever and buttons. Motion: prefers-reduced-motion sets the weather to static (0s duration, instant era change).

## 19. What to avoid

Pixel-sharp digital meters; fake glass edges; weather vibes on other devices; laggy transitions.

## 20. Quick-start snippet

```css
:root {
  --bg: #EDE4CF;
  --surface: #FFFFFF;
  --ink: #3B2A20;
  --muted: #6F8F8C;
  --accent: #A33B2B;
  --accent2: #6E5620;
  --font-display: Georgia, Times New Roman, serif;
  --font-body: Georgia, serif;
}
```
