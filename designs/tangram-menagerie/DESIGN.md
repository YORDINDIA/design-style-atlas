---
slug: tangram-menagerie
name: "Tangram Menagerie"
description: "A bright, paper-coloured tangram table: title letter-by-letter in chunky geometric strokes; seven flat-coloured wooden pieces become a zoo."
category: Playful
tags: ["tangram", "menagerie", "paper", "zoo", "drag", "puzzle", "wood"]
related: ["kawaii-pop", "playful-brutalism", "scrapbook"]
preview:
  bg: "#F7F3E8"
  surface: "#FFFFFF"
  ink: "#2E282A"
  muted: "#696969"
  accent: "#E4572E"
  accent2: "#17BEBB"
  display: "Futura, Century Gothic, Trebuchet MS, Avenir Next, Bradley Hand"
  body: "Bradley Hand, Georgia, serif"
---

# tangram-menagerie — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, WindSurf) as the visual direction for a website. Follow every section. When in doubt, choose the more playful, paper-sharp interpretation.

## 1. Overall aesthetic

A bright, paper-coloured tangram table in the manner of a mid-century picture book. The title is drawn letter by letter in chunky geometric strokes so that every counter and arch can hold a small coloured triangle. Seven flat-coloured wooden pieces begin as the classic square, burst apart into a loose scatter, and a pale dotted silhouette draws itself onto the work mat. The viewer drags, turns and flips the pieces until the shape is covered; the seams then glow, the silhouette fades, and the finished figure wakes up while still visibly made of its seven pieces: a swan glides over ripples, a cat blinks and swishes its tail, a rabbit hops, a fish wags through bubbles, a dancer sways, a boat rocks on waves, a house puffs smoke, a bird flaps. A lettered caption reports the time, and a vermilion stamp is pressed into a row of eight.

## 2. Typography

- **Display:** Futura, Century Gothic, Trebuchet MS, Avenir Next, Bradley Hand.
- **Body:** Bradley Hand, Georgia, serif.
- **Scale:** hero 24px caps, H2 18px, H3 14px, body 12px, meta 11px.
- **Weights:** display 500–600; body 400–500; caps caps.
- **Rules:** 3px dotted grid, flush-left captions, vermilion rules.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F7F3E8` | Cream paper |
| Surface | `#FFFFFF | White mat, triangle fills |
| Ink | "#2E282A | Ink, outlines |
| Muted | "#5A5257 | Faint grid lines, shadows |
| Accent | "#E4572E | Vermilion: swan, stamp |
| Accent2 | "#17BEBB | Teal: fish, boat |
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/tangram-menagerie/DESIGN.md`.*


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
