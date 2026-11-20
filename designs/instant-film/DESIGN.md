---
slug: instant-film
name: "Instant Film"
description: "A sunlit blush tabletop with a toy-like instant camera called the dawdle; each tap fires a white flash, the camera kicks, and a square print develops in 12 seconds."
category: Playful
tags: ["instant", "film", "camera", "print", "development", "animation", "toy"]
related: ["playful-brutalism", "scrapbook", "kawaii-pop"]
preview:
  bg: "#F7D6D0"
  surface: "#FDF6EC"
  ink: "#2D2A32"
  muted: "#5a5a5a"
  accent: "#F4A259"
  accent2: "#F9E2A6"
  display: "Arial Rounded MT Bold, Bradley Hand, system-ui"
  body: "Quicksand, Bradley Hand"
---

# instant-film — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, WindSurf) as the visual direction for a website. Follow every section. When in doubt, choose the softer, creamier interpretation.

## 1. Overall aesthetic

A sunlit blush tabletop with a cream toy-like instant camera called the dawdle, its teal neck strap looped off to the side, a small box of film, and eight dashed outlines waiting for pictures. Pressing the red shutter fires a white flash, the iris blinks, the camera kicks, and a square print is pushed out of the slot in motor steps, drops free and glides to its numbered place at a slight tilt. There it stays milky grey-green and then, over twelve seconds, shadows surface first, warm tones follow, and finally a handwritten caption appears on the border. Each of the eight frames is a tiny flat illustration in a faded-film palette: a striped parasol, a cat's back at a window, a boiled egg with steaming coffee, a caravan under pines, a bicycle, a lighthouse with a breathing beam, a cake with flickering candles, two feet at the end of a towel. The counter runs from 8 to 0, the shutter goes grey under an "empty" tag, and a sticker on the film box loads a fresh pack. There is not a line of script on the page.

## 2. Typography

- **Display:** Arial Rounded MT Bold, Bradley Hand, system-ui.
- **Body:** Quicksand, Bradley Hand.
- **Scale:** hero 20px caps caps, H2 16px, body 12–13px, meta 11px.
- **Weights:** display 600; body 500.
- **Rules:** 3D letterpress on the photos, no fonts on the film print.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F7D6D0 | Blush tabletop, wall |
| Surface | "#FDF6EC | Cream, photos, print |
| Ink | "#2D2A32 | Ink, numbers |
| Muted | "#2F6F6F | Teal, shadows |
| Accent | "#F4A259 | Wax, film edges |
| Accent2 | "#F9E2A6 | Print border |
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/instant-film/DESIGN.md`.*


## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

## 4. Spacing

8px base; generous vertical rhythm between elements.

## 5. Layout / Grid

Centered column; hero bar, main content area below.

## 6. Borders

1px solid hairline rules; no shadows.

## 7. Shadows

None — flat surfaces only.

## 8. Radius

8px cards, 12px edition cards; 3px buttons.

## 9. Buttons

Pill buttons: 40px height, rounded, visible focus ring.

## 10. Cards

Edge cards: ivory frame with hairline border; title + description + 44px+ targets.

## 11. Navigation

Top bar with the wordmark and subtle links.

## 12. Imagery

None — the objects are drawn in the page itself.

## 13. Icons

16px line icons (seal, candle, envelope, words).

## 14. Textures

None.

## 15. Motion

Fades 150ms; springy hover states.

## 16. Interactions

Hover to reveal, tap to select, drag to tilt or reveal.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile stacks content; tablets get 2-column.

## 18. Accessibility

High contrast between ink and background (4.5:1+), visible focus rings, prefers-reduced-motion disables animations.

## 19. What to avoid

Fake brass, clashing colors, too many pivots.

## 20. Quick-start

```css
:root { --bg: "#E6E0D2"; --surface: "#FFFFFF"; --ink: "#3E3528"; --muted: "#5D5240"; --accent: "#8B2B20"; --accent2: "#0B4D6B"; --font-display: "Archivo Black, Arial Black, sans-serif"; --font-body: "Helvetica Neue, Arial, sans-serif"; }
```
