---
slug: computed-shells
name: "A Cabinet of Computed Shells"
description: "A sunlit natural-history gallery: porcelain-white shells grow out of the apex of a brass and linen drum in eight brass-labelled drawers; the growth equation is visible."
category: Data
tags: ["shells", "cabinet", "natural-history", "geometry", "museum", "touch"]
related: ["heritage-classic", "botanical-herbarium", "wabi-sabi"]
preview:
  bg: "#F5F2E8"
  surface: "#FFFFFF"
  ink: "#1F3024"
  muted: "#686868"
  accent: "#A0522D"
  accent2: "#556B2F"
  display: "Cormorant Garamond, Playfair Display, serif"
  body: "Eczar, Garamond, Georgia, serif"
---

# computed-shells — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more botanical, more drawn interpretation.

## 1. Overall aesthetic

A sunlit natural-history gallery wall in shell-pink plaster. A large porcelain-white shell grows out of its own apex, whorl after whorl, with flame stripes, live in the cabinet; pulling a drawer makes that shell become another, or a cone-shaped turret, or a bed of small tent shells, or a fan of fantail shells; the label re-sets itself letter by letter, slider handles slide to their new places, and a crosshair travels across the map of all possible shells below. The unpopulated case has eight brass-labelled drawers, a paper museum label, and a brass-and-ivory instrument with five sliders and two rows of small specimen trays. The growth equation and Raup's 'only part of the space the equation allows' are explained on the label. Sawing the nautilus open reveals a spiral of pearly chambers.

## 2. Typography

- **Display:** Cormorant Garamond, Playfair Display, serif.
- **Body:** Eczar, Garamond, Georgia, serif.
- **Scale:** hero 22px, H2 16px, H3 13px, body 12px, sliders 10px.
- **Weights:** display 400–600; body 400.
- **Rules:** flush-left captions on History, small-caps legends.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F5F2E8` | Plaster |
| Surface | `#FFFFFF` | Cabinets |
| Ink | `#1F3024` | Dark text |
| Muted | `#5C6B5C` | Brass handles, labels |
| Accent | `#A0522D` | Brass, shell strips |
| Accent 2 | `#556B2F` | Spire, tenants, shell stripes |

## 4. Spacing

8px base; cabinet interior 16px; drawer depth 12px.

## 5. Layout / Grid

Left: main shell; right: map of shells; centre: sliders; bottom: inertia.

## 6. Borders

1px solid #5C6B5C22 case edge, brass hinge 1px solid #A0522D33.

## 7. Shadows

0 4px 12px rgba(31,48,36,0.10) on shell; 0 8px 18px rgba(160,82,45,0.10) on case.

## 8. Radius

8px shells, 2px cabinons.

## 9. Buttons

None — the cabinet is navigated by drawer.

## 10. Cards

Brass instrument: 1px hairline, 2px radius, shadow 0 4px 12px rgba(31,48,36,0.10), accent edge.

## 11. Navigation

Eight brass drawers: 28px pill-shaped, dark brass, gold serif labels, drag handle on right edge.

## 12. Imagery

Four-or-so drawn shells.

## 13. Icons

Brass, switch.

## 14. Textures

Paper card on shells, brass polish 4%, investments.

## 15. Motion

Shell grows: 0.8s ease-in-out, shadows settle 200ms.

## 16. Interactions

- Open each drawer: drawer slides open 60px; the top shell morphs to the shell of that drawer.
- Drag drawer: the shell morphs; sliders re-position; crosshair travels.
- Adjust the five sliders W, D, T, S: the shell moves to the next position in the wire.
- Tap a specimen: opens the dialog.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): cabinet stacked, drawer depth 14px, shells 50% smaller. Tablet (768–1099px): 2-column. Desktop (1100px+): full row, instrument at right. Never hide the brass drawers; always visible.

## 18. Accessibility

Every drawer button and shell label is 3:1 or better on both Background and Surface. Drawer labels are 44px+; focus ring is visible. Sliders are keyboard-operable. Motion: prefers-reduced-motion snaps the morphs, no slide animation.

## 19. What to avoid

Boring palettes, plastic, fake brass, volume, danger.

## 20. Quick-start snippet

```css
:root {
  --bg: #F5F2E8;
  --surface: #FFFFFF;
  --ink: "#1F3024";
  --muted: "#5C6B5C";
  --accent: "#A0522D";
  --accent2: "#556B2F";
  --font-display: "Cormorant Garamond, Playfair Display, serif";
  --font-body: "Eczar, Garamond, Georgia, serif";
}
```
