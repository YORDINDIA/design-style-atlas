---
slug: gelastia-belmonte
name: "Gelastia Belmonte"
description: "A waffle cone stands in a mint holder; a striped spoon swings overhead. Each tap drops a soft scoop that squashes, ripples, sticks, and the whole tower leans, sways and overcorrects."
category: Playful
tags: ["ice-cream", "gelato", "squish", "scoops", "game", "confectionery", "mohave"]
related: ["kawaii-pop", "playful-brutalism", "papercut"]
preview:
  bg: "#F5F0E4"
  surface: "#FFFFFF"
  ink: "#5C2D52"
  muted: "#676767"
  accent: "#FF6FB5"
  accent2: "#FFD700"
  display: "Baloo 2, Candara, sans-serif"
  body: "Quicksand, Bradley Hand"
---

# gelastia-belmonte — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the squeezy, softened-pastel interpretation.

## 1. Overall aesthetic

A sunny counter of the invented Gelateria Belmonte. A waffle cone stands in a mint holder on a marble counter beneath a blue-and-cream striped awning whose valance is lettered "Torre di Gelato"; between two pastel seaside houses lies a sliver of sea with a sailboat, a promenade railing and a gull. A striped spoon-swing arm swings overhead; each tap drops a soft scoop that squashes, ripples, sticks, and the whole tower leans, sways and overcorrects, every scoop jiggling a beat behind the one below. Dawdling and the sun melts the lower scoops into drips that run down the cone and pool on the marble. As the tower climbs, the camera leaves the awning behind and rises past washing lines, rooftop cats and aerials, a bell tower whose clock shows the viewer's own time, gulls, a kite, a hot-air balloon, thin clouds, a banner plane, a crescent moon, stars and a small satellite. Three dropped scoops end the round with a slow, messy cascade onto the counter and a paper receipt listing every flavour in order, with a total and a dry verdict from Signora Belmonte.

## 2. Typography

- **Display:** Baloo 2, Candara, sans-serif.
- **Body:** Quicksand, Bradley Hand.
- **Scale:** hero 28px Baloo, H2 16px, body 12px Bradley Hand, meta 11px.
- **Weights:** display 800; body 600.
- **Rules:** Center-aligned headlines, flush-left counters, credit line at bottom.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F5F0E4` | Marble counter |
| Surface | `#FFFFFF` | Waffle cone |
| Ink | `#5C2D52` | Plum ink, labels |
| Muted | `#A0789C` | Faint signal, boat hull |
| Accent | `#FF6FB5` | Scoops, balloon, full scoop, candles |
| Accent 2 | `#FFD700` | Gold stars, screws, cheese |

## 4. Spacing

8px base; scoop 4px; scoops 32px; awning 24px; box 62px.

## 5. Layout / Grid

Top: awning, scoop tower; right: counters, receipt, statistics; centre: bell tower, stars.

## 6. Borders

1px solid #FF6FB51a scoop edge, 0px on marble.

## 7. Shadows

0 4px 10px rgba(255,111,181,0.22) on tower; 0 6px 14px rgba(255,215,0,0.18) on star.

## 8. Radius

18px scoop bodies; 8px scoop ends; 2px marble.

## 9. Buttons

No buttons — everything is the game: drop scoop, drop special scoop, drop double scoop, drop triple scoop; keyboard shortcuts; hover hints. 44px+ targets.

## 10. Cards

None.

## 11. Navigation

None.

## 12. Imagery

Waffle cone, mint holder, sailing boats, gull, scrambled kites, banner plane, papaya sheets, bell tower, stars.

## 13. Icons

Stars, Award, Construction, Helicopter.

## 14. Textures

Plasticine swirl, speckle dots, dice, paper napkins.

## 15. Motion

Scoops: squash 100ms ease-in-out, rebound 150ms; tower tilt 300ms; drips 2s; stars flicker 2s; wind 16s.

## 16. Interactions

- Tap to drop scoop: squash, lean, rebound, jiggle; scoop grows slightly.
- Hover scoop: slow swamp wobble, pops labels.
- Hover tower: camera rises.
- Tap on pausa (spacebar or clicking the floor): freeze the moment; the waiter carries the scoop over.
- Pull at the scoop: the cone tips; press again to drop it again.
- Press outside the counter: drops a normal scoop.
- Press Enter/Space: drop special scoop.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): scoop tower 1 row, scoops drop on tap, counters below; Desktop (1100px+): tower at top, stats and receipt on the right, camera lifts slightly. Never hide drop scoop or Hold hint; always visible.

## 18. Accessibility

Every interactive element is 48px tall, 44px+ tap target, clearly labelled. Plum ink on marble reaches 8.5:1 contrast on both Background and Surface, scoop purple reaches 7:1 vs marble, gold stars read 5:1 vs marble. Focus: visible ring on all interactive elements, bump to higher contrast colors. Motion: prefers-reduced-motion snaps turns; plays the squash animation statically.

## 19. What to avoid

Extra colours, sloppy tower, sticky, bitter, slow drips, more than 3 scoops, bug squish, flashing, ads, speed, sound, accidental interactions.

## 20. Quick-start snippet

```css
:root {
  --bg: "#F5F0E4";
  --surface: "#FFFFFF";
  --ink: "#5C2D52";
  --muted: "#A0789C";
  --accent: "#FF6FB5";
  --accent2: "#FFD700";
  --font-display: "Baloo 2, Candara, sans-serif";
  --font-body: "Quicksand, Bradley Hand";
}
```
