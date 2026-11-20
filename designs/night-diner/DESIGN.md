---
slug: night-diner
name: "The Comet Diner"
description: "A tiny diorama of the Route 9 night diner: OPEN 24 HRS, coffee, pie, advice free; the raydiner's bill stays buzzed since Truman and the M still needs three tries."
category: Playful
tags: ["diner", "retro", "animatronics", "arcade", "3d", "cookie"]
related: ["playful-brutalism", "3d-web-design", "cyberpunk"]
preview:
  bg: "#161210"
  surface: "#1E1A16"
  ink: "#FFE9C7"
  muted: "#fdfdfd"
  accent: "#E05030"
  accent2: "#F5D9B3"
  display: "Helvetica Neue, Arial, sans-serif"
  body: "Helvetica Neue, Arial, sans-serif"
---

# night-diner — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, WindSurf) as the visual direction for a website. Follow every section. When in doubt, choose the noir, neon-window interpretation.

## 1. Overall aesthetic

A tiny diorama of a roadside railcar diner at three in the morning, drawn entirely with HTML boxes and CSS 3D transforms and floating on a disc of asphalt that fades into the dark. Nothing is lit when the page opens except the windows and one streetlamp; then the billboard strikes, tube by tube, the M failing twice, and pink and cyan light spills over the roof, the lot and the puddles, which reflect the words themselves upside down. Inside, a cook flips, a waitress walks the counter and stops to pour, one customer stirs and another turns a page. Around it: a parked sedan, an idling pickup, a phone box, moths at the lamp, a freight train on the horizon and, now and then, a car going somewhere else. A paperback-noir title and three lines of prose frame it, with a small bakelite panel of switches and jukebox keys.

## 2. Typography

- **Display:** Helvetica Neue, Arial, sans-serif.
- **Body:** Helvetica Neue, Arial, sans-serif.
- **Scale:** hero 16px caps, H2 13px, body 11px, meta 10px.
- **Weights:** display 500–700; body 400.
- **Rules:** 3D UI on Hot Keys; shadow glow on low.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#161210` | Asphalt, darkness |
| Surface | `#1E1A16` | Chrome, blacktop |
| Ink | `#FFE9C7` | Billboard, warmer, ceiling |
| Muted | `#7A6B5E` | Subtle glass, shadows, shade |
| Accent | `#E05030` | Pink sign, light spills |
| Accent 2 | `#F5D9B3` | Neon, reflection on puddle |

## 4. Spacing

8px base;525px sign margins; scene stack on top of asphalt; phone box 47px, puddle 60px.

## 5. Layout / Grid

Top: billboard, phone box, sign letters; centre: diner; bottom: traffic, moths.

## 6. Borders

1px solid #FFE9C722 stop light outline on windows, 0px on polygons.

## 7. Shadows

0 8px 16px rgba(255,233,199,0.14) on diner, 0 4px 10px #E0503022 on puddle, 0 6px 12px rgba(22,18,16,0.12) on sign.

## 8. Radius

8px diorama surfaces, 0px polygons, 2px buttons.

## 9. Buttons

"Open the diner" button: 40px pill, accent2 fill, white text, hover deepens, 44px+ targets. Also: none.

## 10. Cards

None.

## 11. Navigation

None.

## 12. Imagery

Billboard, diner, sign, phone box, puddle, moths, asphalt.

## 13. Icons

Moon, phone, moon-crescent, light rays.

## 14. Textures

Burnished metal sheen, matte glass, film grain, light on puddle (reflection), stippled glass.

## 15. Motion

Billboard: slide-in 800ms ease; sign "M" lights up after 2.5s; cooks flip, waitress turns page; sign flicker 1s ease.

## 16. Interactions

- Hover panel: opens the diner's roof (3D animation 1s).
- Click sign: cycles light on and off (pink and cyan).
- Hover sign: flickers neon, debug labels.
- Hover diner: warmth light around it.
- Scroll slowly: experience the "count".

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): sign shrinks 20%, puddle 50%, car smaller, viewport scrolls, switches stack vertical. Tablet (768–1099px): sign 40%, puddle 60%, diner 80%. Desktop (1100px+): full sign 80%, puddle 90%, viewer scrolls naturally. Never hide the dinero or the sign; always visible.

## 18. Accessibility

Every interactive element is 46px+ high, with 42px tap targets and visible focus. Brand colors carry strong contrast (pink/neon vs dark asphalt), ink on black reaches 10.8:1, muted reaches 3.6:1. Motion: prefers-reduced-motion snaps billboard in instantly, keeps static scene.

## 19. What to avoid

Fake window glow, more people, extra colours, busy animation, dark shadows, hacks.

## 20. Quick-start snippet

```css
:root {
  --bg: #161210;
  --surface: #1E1A16;
  --ink: "#FFE9C7";
  --muted: "#7A6B5E";
  --accent: "#E05030";
  --accent2: "#F5D9B3";
  --font-display: "Helvetica Neue, Arial, sans-serif";
  --font-body: "Helvetica Neue, Arial, sans-serif";
}
```
