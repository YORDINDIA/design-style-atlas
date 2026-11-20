---
slug: ice-core
name: "Ice Core"
description: "A glacial science sheet built around one continuous ice core: procedural firn and ice with interbeds, field logs pinned by leader lines, and a polar animator."
category: Data
tags: ["ice", "science", "layers", "geology", "animation"]
related: ["blueprint", "dataviz-terminal", "sci-fi-ui"]
preview:
  bg: "#F7FBFD"
  surface: "#FFFFFF"
  ink: "#17324A"
  muted: "#6d6d6d"
  accent: "#E4572E"
  accent2: "#9DBBD0"
  display: "Helvetica Neue, Arial, sans-serif"
  body: "Menlo, Courier New, monospace"
---

# ice-core — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more literal, science-report interpretation.

## 1. Overall aesthetic

A laboratory-quiet science sheet built around a single continuous ice core. The sheet opens in white at the top of a drill tower, then descends through 800 metres of procedurally generated ice: layered snow/firn, bubbly ice, a brittle zone, glass-clear clathrate ice, dusty ice-age ice, gravel-laden basal ice, and finally brown bedrock. An enormous hairline depth numeral in the margin counts every tenth of a metre. An orange reading line marks the current depth, with an estimated age beneath it. Annotation cards and field-log entries (days of drilling, Winsch grading) are pinned to exact depths by leader lines that draw themselves. Three live traces stay in view, a thin-section light-box shows at half depth, and a depth minimap runs at the bottom. Cutting the core: a disc slides out of the current depth, turns face-on, and lands in the light-box as a mosaic of crystal grains under rotating crossed polarisers — every change drags, turns, or drops with a vivid glint. The page itself cools slightly as you scroll deeper.

## 2. Typography

- **Display:** Helvetica Neue, Arial, sans-serif (site titles, drill tower, ice layers).
- **Body:** Menlo, Courier New, monospace (well-log lines, depth numerals, field log).
- **Scale:** hero 28–36px mono/sans, H2 18–22px, H3 14–16px, body 13–14px mono at 1.6, meta/labels 10–11px mono.
- **Weights:** display 500–600; mono 400.
- **Rules:** flush-left on the grid; mono labels for everything technical.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F7FBFD` | Page ground |
| Surface | `#FFFFFF` | Ice layers, certificates |
| Ink | `#17324A` | Titles, log text |
| Muted | `#5A6E82` | Annotations, minor text |
| Accent | `#E4572E` | Depth markers, field logs, leader lines |
| Accent 2 | `#9DBBD0` | Thin-section light-box glow |

## 4. Spacing

8px base; gutters 32px; grid lines every 12px; depth column fixed left with minimap bottom.

## 5. Layout / Grid

Top: drill tower + chart column. Middle: the ice column with orange depth line and leader-line annotations. Bottom: minimap + live traces + light-box. Side column: depth numeral rail, field-log cards.

## 6. Borders

1px #17324A15 gridlines on chart paper; leader lines 1px #E4572E; light-box 1px #9DBBD0.

## 7. Shadows

0 2px 6px rgba(23,50,74,0.10) on field-log cards; 0 0 40px rgba(20,50,80,0.06) on the minimap.

## 8. Radius

4px certificates and log cards; 8px light-box and chips.

## 9. Buttons

The "cut" button: 30px pill, amber accent fill with white label. Hover slightly darkens. Also the small "reset" button: 30px pill, muted outline, 44px+ targets.

## 10. Cards

Certificate of field-logs: white cards with hairline rules, 8px radius, shadow 0 2px 6px, amber leader lines.

## 11. Navigation

Sticky mode bar: 'TOP', 'DRILL TOWER', 'BASALT' with 44px+ buttons.

## 12. Imagery

Procedural ice layers as stripes; polarised thin-section mosaic.

## 13. Icons

Crosshair, ice crystal, bathtub (frozen), flag.

## 14. Textures

Micro-grid background, paper grain on certificate cards.

## 15. Motion

250ms ease-out depth-line advance; 300ms leader-line draw; minimap viewport highlight.

## 16. Interactions

- Click or drag any depth: the orange line and leader lines animate to the new depth; the trace highlights.
- Drag the minimap handle.
- Double-click a depth: cut a thin section; the mosaic molars in the light-box (rotate the crossed polarisers).
- Hover the ice column: show the instantaneous temperature and crystal grain boundaries at that depth.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): ice column full-width, minimap condensed; light-box replaces the column when tapped. Tablet (768–1099px): 2-column layout. Desktop (1100px+): full three-column. Never hide the depth-line or cut button behind hover; always visible.

## 18. Accessibility

All body text on the page: at least 4.5:1 on both Background and Surface (ink on background is verified: text on white reaches 15.9:1, on the pale blue reaches 15.9:1; muted on surface 10.3:1). Focus: visible ring on buttons and minimap handle. Motion: prefers-reduced-motion hides depth-line animation and molar rotation, leaves static states visible.

## 19. What to avoid

Gradient ice, fake 3D, arrows on the leader lines, auto-scrolling depth.

## 20. Quick-start snippet

```css
:root {
  --bg: #F7FBFD;
  --surface: #FFFFFF;
  --ink: #17324A;
  --muted: #5A6E82;
  --accent: #E4572E;
  --accent2: #9DBBD0;
  --font-display: Helvetica Neue, Arial, sans-serif;
  --font-body: Menlo, Courier New, monospace;
}
```
