---
slug: jelly-alphabet
name: "Jelly Alphabet"
description: "Typed letters drop onto a plate of plasticine and jiggle like gelatine — wobble physics, squish and bloop sounds, alphabet play for kids."
category: Playful
tags: ["jelly", "alphabet", "kids", "physics", "playful"]
related: ["kawaii-pop", "playful-brutalism", "claymorphism"]
preview:
  bg: "#FFF5FA"
  surface: "#FFFFFF"
  ink: "#5C2D52"
  muted: "#6c6c6c"
  accent: "#FF6FB5"
  accent2: "#7ED6FF"
  display: "Baloo 2, Quicksand, Bradley Hand"
  body: "Quicksand, Bradley Hand"
---

# jelly-alphabet — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the softer, more squishy interpretation.

## 1. Overall aesthetic

A hot-pink field with an oversized halftone and a glossy plate. Typing a letter drops it onto the plate like a plasticine cube: it squashes to two-thirds height, bulges, bounces, and keeps quivering. Every glyph is a hand-drawn chunky outline turned into a soft body, so everything the viewer types, drags, pokes, or flings behaves like gelatine — highlights stretch as the shape deforms, bubbles ride inside, coloured light pools on the plate. The page is a toy with no chrome: a tiny label, four flavour swatches, three grape buttons, a candy-wrapper input, and a row of wrapped sweets that drop sample words.

## 2. Typography

- **Display:** Baloo 2, Quicksand, Bradley Hand.
- **Body:** Quicksand, Bradley Hand.
- **Scale:** hero 36px Baloo (letters squashed 2/3), H2 22px, body 14px.
- **Weights:** display 800–900; body 500–700.
- **Rules:** letters centered on the plate.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFF5FA` | Plate ground |
| Surface | `#FFFFFF` | Halftone, gloss |
| Ink | `#5C2D52` | Labels, letters |
| Muted | `#8B4F7E` | Swatches, numbers |
| Accent | `#FF6FB5` | Jelly bodies, grape pack |
| Accent 2 | `#7ED6FF` | Light on bodies, Archimedes |

## 4. Spacing

8px base; plate 32px margin; buttons 12px apart.

## 5. Layout / Grid

Top: halftone, title, label; centre: plate with Jelly; bottom: flavour swatches, buttons.

## 6. Borders

1px solid #FF6FB51a plate edge.

## 7. Shadows

0 6px 16px rgba(255,111,181,0.28) on Jelly.

## 8. Radius

20px plates; 26px Jelly bodies.

## 9. Buttons

Grape buttons: 28px round, accent fill, white text, hover darkens; sound toggle 32px round. 44px+ targets.

## 10. Cards

None.

## 11. Navigation

None.

## 12. Imagery

Halftone pattern, glyph outlines, grape buttons, plasticine swirls, sine waves.

## 13. Icons

Houses, so whimsical.

## 14. Textures

Halftone 6%, plasticine dots, amperfoure swirl.

## 15. Motion

Squash 40%, rebound 50%, jiggle 50%, flutter 20%; draft 150ms; high up contrast.

## 16. Interactions

- Type letters: drop, jiggle, bounce; drag letter to move, fling to fling; hold to squish.
- Click grape buttons: play a note, switch flavour (muted pastel noise).
- Sound toggle.
- Click plate: dig for hidden letters.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): plate full-width, letters 14px. Tablet (768–1099px): unchanged. Desktop (1100px+): unchanged. Never hide grape buttons; always visible.

## 18. Accessibility

Jelly bodies on white carry strong contrast (purple on white, 9:1); letters are dark plum on the pink plate. Focus: visible ring on all interactive elements. Motion: prefers-reduced-motion sets jelly to static squash.

## 19. What to avoid

Scrolling chaos, adult content, sharp bubbles, shadows without softness, silence, ads, busy.

## 20. Quick-start snippet

```css
:root {
  --bg: #FFF5FA;
  --surface: #FFFFFF;
  --ink: #5C2D52;
  --muted: #8B4F7E;
  --accent: #FF6FB5;
  --accent2: "#7ED6FF"
  --font-display: "Baloo 2, Quicksand, Bradley Hand";
  --font-body: "Quicksand, Bradley Hand";
}
```
