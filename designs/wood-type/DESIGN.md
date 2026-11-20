---
slug: wood-type
name: "Wood Type"
description: "Wood type drying line, wet proofs, hands off; faces and bodies from cold-metal typecasting; save, shake, print-again, shop for supply orders."
category: Historical
tags: [wood, type, letterpress, print, typography, history, legacy]
related: [zine-punk, newspaper, raw-html]
preview:
  bg: "#E6E0D2"
  surface: "#FFFFFF"
  ink: "#3E3528"
  muted: "#5c5c5c"
  accent: "#8B2B20"
  accent2: "#0B4D6B"
  display: "Archivo Black, Arial Black, sans-serif"
  body: "Helvetica Neue, Arial, sans-serif"
---

# wood-type — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, WindSurf) as the visual direction for a website. Follow every section. When in doubt, choose the more press-room, letterpress interpretation.

## 1. Overall aesthetic

A wood-type drying line, wet proofs on the line, hands off. The page has zero shadows. A long row of mocked wooden type: flat faces, spreading action, italics, casts from a plant, heavy slabs, halftone bodies, gothics, reverse. Drag sorts onto the drying line and watch them line up straight, no kerning, no letterspacing. Faces: Fat slab R, Gothic R, Tuscan R, Rounded R, Collage R, OldFace R. Bodies: 12-line A, 8-line A, 4-line A. Stock: Poster Red, Press Blue, Chrome Yellow, Job Black. Round down on the ends, add your own face and body, use it as a job number, and save to stock. Hover on any of them, then click. Print again on this sheet makes new artwork with the same faces and bodies. Shake the bed: all sorts fall off and bounce, then return. Shop: a catalogue of new orders and stock; new sheets cost per weight, and everything cheaper before too. Nothing is fake: every glyph is a drawing, every word is real type.

## 2. Typography

- **Display:** Archivo Black, Arial Black, sans-serif.
- **Body:** Helvetica Neue, Arial, sans-serif.
- **Scale:** hero 28px caps, H2 20px, H3 14px, body 12px, meta 11px.
- **Weights:** display 800–900; body 400–500.
- **Rules:** 3px solid rules, 1px solid hairline rules, 0px radius, 90px letterspacing, black text, red text, yellow text, blue text.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#E6E0D2` | Cream paper, line |
| Surface | `#FFFFFF | Type, drying line |
| Ink | "#3E3528 | Ink, wood grain |
| Muted | "#5D5240 | Wood, metal |
| Accent | "#8B2B20 | Poster Red |
| Accent 2 | "#0B4D6B | Press Blue |
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/wood-type/DESIGN.md`.*


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
