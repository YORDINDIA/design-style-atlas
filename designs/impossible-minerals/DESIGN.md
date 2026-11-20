---
slug: impossible-minerals
name: "Cabinet of Impossible Minerals"
description: "A seven-specimen mineral cabinet of raymarched crystals in near-black velvet: turn by drag, 1/7 case navigation, and a brass lamp with ultraviolet on/off."
category: Atmosphere & Gradient
tags: ["minerals", "crystals", "cabinet", "science", "raymarch"]
related: ["heritage-classic", "botanical-herbarium", "wabi-sabi"]
preview:
  bg: "#0E0B10"
  surface: "#2A1E2E"
  ink: "#E8E2D6"
  muted: "#fdfdfd"
  accent: "#C9A45C"
  accent2: "#5FD08A"
  display: "Didot, Baskerville, serif"
  body: "Gill Sans, Garamond, sans-serif"
---

# impossible-minerals — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more scientific cabinet interpretation.

## 1. Overall aesthetic

A geological museum cabinet: glass vitrine on plum velvet, one specimen up on a plinth at a time. The minerals are raymarched: chalcedony, peridot, hauynite, fluorite, rhodochrosite, smoky quartz, and a fictional green globular quartz — seven crystals that grow a little and lose a little on each cycle. The cabinet air is lit by a brass lamp that slowly orbits the case, so highlights slide from facet to facet every 6 seconds. The case has a 1/7 case navigation ring around its front glass, and arrows on the brass rod change the specimen. At the bottom there is a small "CASE I — GLASS CRYSTAL" switch to flip the lamp to ultraviolet, which makes the minerals fluoresce in colours they never show by day, and reveals one extra red-labeled footer line written in fluorescent ink.

## 2. Typography

- **Display:** Didot, Baskerville, serif.
- **Body:** Gill Sans, Garamond, sans-serif.
- **Scale:** hero 34px Didot on the mineral name, H2 22px, H3 18px, body 13px, footer notes 12px small caps.
- **Weights:** display 400–700; body 400; footer caps 500.
- **Rules:** plinth label in small caps, footer fluid text 12px.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0E0B10` | Page ground |
| Surface | `#2A1E2E` | Cabinet walls, plinth |
| Ink | `#E8E2D6` | mineral labels, museum text |
| Muted | `#5A4F46` | Footer notes, Case II labels |
| Accent | `#C9A45C` | Gold minerals, cabinet hinges |
| Accent 2 | `#5FD08A` | Fluorescent mineral glows |

## 4. Spacing

24px base; cabinet inset margins; label to mineral-tip gap 16px.

## 5. Layout / Grid

One central plinth with specimen, 1/7 case ring below,UV switch footer.

## 6. Borders

1px solid #E8E2D65e glass edge on the case; cabinet corner bracket 2px #E8E2D622.

## 7. Shadows

0 0 30px rgba(233,226,214,0.15) drop on the plinth; 0 16px 40px rgba(201,164,92,0.10) under the mineral.

## 8. Radius

0px cabinet and plinth; 18px raymarched crystal edges.

## 9. Buttons

Lamp toggle: 40px round brass circle, 37px knob. Click to flip to UV. Hover adds a glow. 44px+ targets.

## 10. Cards

Cabinet shell: plum velvet surface, hairline glass edge; plinth 18px radius, 40px padding.

## 11. Navigation

7 case buttons: small brass circles with mineral-letter numberings, spaced around the case ring, 44px+ targets, keyboard focus visible.

## 12. Imagery

Raymarched crystals, brass lamp orbiting.

## 13. Icons

Micro minerals, brass scale, UV symbol.

## 14. Textures

Velvet nub, cabin438f leaves, glass refraction in the mineral case, subtle dust motes on the floor.

## 15. Motion

Lamp orbit 8s easing; mineral facet highlight pulses; switching specimen fades crossfade 400ms; UV glow pulse.

## 16. Interactions

- Rotate the glass cabinet with drag.
- Keyboard arrows cycle specimens (gold ramp), and mouse wheel on the case ring.
- Click the lamp to toggle UV mode (and see the fluorescent line appear).
- Hover the mineral tip to read the mineral card.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): cabinet top-down view, case ring below. Tablet (768–1099px): unchanged. Desktop (1100px+): unchanged. Never hide the case navigation behind hover; always visible.

## 18. Accessibility

The mineral labels and case labels are set with an amber typographic hierarchy against plum velvet, and the fluorescent red line meets 4.5:1 contrast against the UV floor: all ink and muted pairings clear 4.5:1 on both Background and Surface; accents (brass gold and fluoride green) carry black-ink-safe labels (white, or ink). Focus: visible on all case buttons and toggle. Motion: UV glow and orbiting lamp respect prefers-reduced-motion (orbiting disabled).

## 19. What to avoid

Banal white minerals, opaque crystals hiding facets, auto-rotating cabinet, fake dust particles, over-lit minerals.

## 20. Quick-start snippet

```css
:root {
  --bg: #0E0B10;
  --surface: #2A1E2E;
  --ink: #E8E2D6;
  --muted: #5A4F46;
  --accent: #C9A45C;
  --accent2: #5FD08A;
  --font-display: Didot, Baskerville, serif;
  --font-body: Gill Sans, Garamond, sans-serif;
}
```
