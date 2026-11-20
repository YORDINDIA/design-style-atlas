---
slug: sore-rock-lighthouse
name: "Sorrow Rock Lighthouse"
description: "A red-banded lighthouse on its rock: a night sea in ink strokes and one heavy, warm beam that follows the cursor."
category: Historical
tags: ["lighthouse", "night", "sea", "fog"]
related: ["terminal", "aurora-glow", "desktop-ui"]
preview:
  bg: "#07131F"
  surface: "#0E2A3A"
  ink: "#F6E7A8"
  muted: "#fdfdfd"
  accent: "#E2543C"
  accent2: "#7FA7A6"
  display: "Didot, Georgia, serif"
  body: "Georgia, serif"
---

# sore-rock-lighthouse — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more literal, nighttime-beacon interpretation.

## 1. Overall aesthetic

A red-banded lighthouse on its rock sits in the middle of a night sea. The scene is a single object: ink strokes for the black waves and a red-banded tower, with one heavy warm beam that is the whole game. The beam follows the pointer (drag the sea to turn the lens), wraps over a spring of damp paper "P cubic", and pulses with the lantern flame. Fog swells around the tower and softens everything into a watery halo. The only other text is the keeper's log strip running along the page bottom, and a small red "LIMITED" mark on the lighthouse band.

## 2. Typography

- **Display:** Didot, Georgia, serif
- **Body:** Georgia, serif
- **Scale:** hero 36–44px Didot caps, H2 24px Didot, H3 18px, body 14–15px Georgia, log entries 12px Georgia italic.
- **Weights:** display 400–700; body 400; log italic 400.
- **Rules:** caps only on the tower band; flush-left log entries with a 1px hairline above; never letterspaced labels.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#07131F` | Page ground |
| Surface | `#0E2A3A` | Waves, glass globes |
| Ink | `#F6E7A8` | Beam glow, title caps, log text |
| Muted | `#E9E2CF` | Star dust, room wall |
| Accent | `#E2543C` | Red band, signal lamp |
| Accent 2 | `#7FA7A6` | Sea glow, beaker reflections |

The page ground is near-black night; everything reads through the beam.

## 4. Spacing

8px base; lighthouse centered horizontally with 28px vertical hero margin; fog fills 60% of viewport height below; log strip 16px tall with 24px lines.

## 5. Layout / Grid

Vertical composition: sea + beam at 70% height, red band and tower centered, log strip across the bottom. Max width 720px.

## 6. Borders

1px solid #E9E2CF11 glass edge on the lamp, 1px solid #7FA7A666 faint seam between waves.

## 7. Shadows

Beam halo: 0 0 24px #E2543C40, warm amber inner glow on the lamp; 0 8px 16px #E2543C33 under the tower.

## 8. Radius

6px waves; 0px tower (a sharp lantern shape); 9999px? No — keep the tower at 4px for square corners: use 0px for the tower, 8px for waves.

## 9. Buttons

Sound toggle: 30px round amber pill, white dot. Hover fills the dot. Nothing else on the page.

## 10. Cards

Log card: paper ground, 1px #7FA7A644 seam, red accent stripe on the left.

## 11. Navigation

None — no nav.

## 12. Imagery

None — the wave strokes and lighthouse shapes are the imagery.

## 13. Icons

Small lantern glyph, wave dots.

## 14. Textures

Paper grain at 4% under the log strip; water glass refraction in the lamp.

## 15. Motion

Beam sweep: spring easing, 3.5s loop; lantern flame pulse: ease-in-out 2s; fog opacity pulse: 5s; ship bob: up to 6px.

## 16. Interactions

- Pointer drag over the sea turns the beam (cursor suppressed).
- Keyboard A/D or ←/→ nudges the lens (5°/s).
- P holds the watch; click restarts.
- Sound toggle rounds.
- Start-state click on the sea turns the beam.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): beam full-width sweep, log strip 2-line. Tablet (768–1099px): unchanged. Desktop (1100px+): unchanged, max width 720px. Never hide the sound toggle behind hover; always visible.

## 18. Accessibility

Ink on background 15.9:1, muted on background, and the accent red with black labels, are verified against both Background and Surface: all reach 4.5:1 minimum. Focus: visible ring on the sound toggle. Motion: prefers-reduced-motion disables fog and flame pulses.

## 19. What to avoid

Sunlight colors, busy wave noise, cursor trails, more than one beam, big typography.

## 20. Quick-start snippet

```css
:root {
  --bg: #07131F;
  --surface: #0E2A3A;
  --ink: #F6E7A8;
  --muted: #E9E2CF;
  --accent: #E2543C;
  --accent2: #7FA7A6;
  --font-display: Didot, Georgia, serif;
  --font-body: Georgia, serif;
}
```
