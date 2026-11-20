---
slug: ulam-spiral
name: "Ulam Prime Spiral"
description: "Where the primes fall — a 4,000-scale square spiral instrument (Ulam, square spiral, square spiral, square spiral... with overlays, four arrangements, and tapable hexagon tiles."
category: Data
tags: ["primes", "math", "spiral", "instrument", "geometry", "education"]
related: ["blueprint", "dataviz-terminal", "generative-algorithmic"]
preview:
  bg: "#FAFAF7"
  surface: "#FFFFFF"
  ink: "#111111"
  muted: "#6d6d6d"
  accent: "#FF3B00"
  accent2: "#D8D8D2"
  display: "Helvetica Neue, Arial, sans-serif"
  body: "Menlo, Courier New, monospace"
---

# ulam-spiral — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more mathematical, finding-the-hidden-lines interpretation.

## 1. Overall aesthetic

A white sheet set like a Swiss mathematics poster. An enormous lowercase grotesk headline runs up the left edge: "where the primes fall. ulam." A hairline-framed square field of 4,000 cells fills most of the viewport; it opens by drawing all of them as a single black line, then reel them into a solid black square spiral while a red sieve sweeps inward, leaving the primes scattered along unmistakable diagonals. Four arrangements: Rows in pairs (wide pair then narrow row) opens by drawing 2×N wide, then 1×N — consecutive rows of decreasing width alternating; Rows in groups of 3 opens by drawing 3N wide — three-cell rows with staggered centers (giving an interlocking hexagon feel) staggered; Straight lines opens by drawing N cells per row horizontally; Square spiral opens by drawing the classic spiral counterclockwise around the centre. The prime-pinned cells are gold with a tiny downward marker. Along the left is a narrow monospace rail of rules, sliders, and tabular figures — a note on what each arrangement makes visible. Hovering any pin lights the diagonal, curve, column, or arm it belongs to in red, and clicking the pin reads back the arithmetic ("row r, col c"). Zooming in far enough turns the dots into numbered hexagon tiles, each readable.

## 2. Typography

- **Display:** Helvetica Neue, Arial, sans-serif (headline, rail labels).
- **Body:** Menlo, Courier New, monospace (sliders, notes, readouts).
- **Scale:** hero 12–16px caps, H2 14px, rail 10px, pin readout 13px, body 10–11px mono.
- **Weights:** display 400–500; body 500 mono.
- **Rules:** flush-left rail, hairline rules between cells of the sieve.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FAFAF7` | Page ground |
| Surface | `#FFFFFF` | Instrument field |
| Ink | `#111111` | Numbers, pins, diagonal lines |
| Muted | `#8A8A84` | Rail rules, dot outlines |
| Accent | `#FF3B00` | Prime pins, highlighted diagonals, readout glow |
| Accent 2 | `#D8D8D2` | Faint cell grid, spiral shadow |

## 4. Spacing

8px base; cells 4px; rail 240px; note line 24px.

## 5. Layout / Grid

Left: rail (rules, sliders, figures); right: instrument field; below: note line.

## 6. Borders

Hairline 1px #8A8A8422 between instrument cells, between rail items.

## 7. Shadows

0 2px 6px rgba(17,17,17,0.10) on pins, 0 0 8px #FF3B0022 on highlighted diagonal.

## 8. Radius

4px cells; 2px pins.

## 9. Buttons

Small pill sliders (30px, 8px) with white dot, focus visible; "New sheet" button 40px amber outline.

## 10. Cards

Pins: 8px yellow circle outline with a 6px red dot center; hexagon tiles: 8px dark rounded tiles with a small gold dot.

## 11. Navigation

Left rail: sliders with live value, "N = 40,000" readout, notes under each of the four arrangements.

## 12. Imagery

Procedural spiral drawing on white sheet.

## 13. Icons

Arrow swipes, hexagon for zoom, plus icon.

## 14. Textures

Faint cell grid lines, micro-paper on rail.

## 15. Motion

Wipe-up sheet reveal, frame clip-in, block opacity, tooltip crosshair, gap-bar growth on hover, pin glow.

## 16. Interactions

- Drag the spiral rows on the sheet: choose the arrangement.
- Drag the cell size slider and watch the spiral rebuild at widths 8, 16, 30, and 210.
- Hover a prime pin: highlights the diagonal, curve, column, or arm it belongs to.
- Click the pin: prints its arithmetic ("row r, col c").
- Pinch-zoom on the sheet: switches to numbered hexagon tiles at zoom ≥ 30 cells.
- Double-tap on the field: recenter.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): rail moves to top, field full-width, note below. Tablet (768–1099px): 2-column rail + field. Desktop (1100px+): full grid; rail wider. Never hide the "New sheet" or the diagonal-highlight on hover; always visible.

## 18. Accessibility

On both Background and Surface the on-page text clears 4.5:1 (ink on white is verified); the gold prime pins and red diagonal highlights carry visible contrast and distinct-color cues (gold pins with a red dot, red diagonals with a gold border); sliders announce their values with visible labels and support keyboard. Focus: visible ring on all sliders, "New sheet", and pins. Motion: prefers-reduced-motion hides the wipe reveal and uses static frames.

## 19. What to avoid

Busy gridlines, fake colors, number-less primes, more than six arrangements, tiny unreadable pins.

## 20. Quick-start snippet

```css
:root {
  --bg: #FAFAF7;
  --surface: #FFFFFF;
  --ink: #111111;
  --muted: #8A8A84;
  --accent: #FF3B00;
  --accent2: #D8D8D2;
  --font-display: Helvetica Neue, Arial, sans-serif;
  --font-body: Menlo, Courier New, monospace;
}
```
