---
slug: calligrams
name: "Five Calligrams"
description: "Five ink poems where the script writes what it says; arrow keys turn the pages, press title to read plainly."
category: Historical
tags: ["calligraphy", "poetry", "ink", "scroll", "hands", "poem", "letter"]
related: ["hand-drawn", "zine-punk", "raw-html"]
preview:
  bg: "#FBFAF5"
  surface: "#FFFFFF"
  ink: "#14213D"
  muted: "#6d6d6d"
  accent: "#C1121F"
  accent2: "#5F7F86"
  display: "Baskerville, Trebuchet MS, serif"
  body: "Baskerville, Georgia, serif"
---

# calligrams — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, WindSurf) as the visual direction for a website. Follow every section. When in doubt, choose the more graceful, scrolling interpretation.

## 1. Overall aesthetic

A fine-press book of five pages on warm paper, in blue-black ink with one red mark per page. The cover sets "Five" in italic over an enormous "Calligrams." and types its subtitle onto a pale wave. Each page then performs its poem: Rain falls in slanted columns of words that splash letter by letter at the ground and part around one red, dry "umbrella"; River carries a long sentence down a meander, letters springing at the source, swelling where two small tributary sentences run into it; Heron stands as a bird made of type and, when ready, lunges its neck of words at the water as "not yet" becomes "now"; Stair lets the reader's scroll bounce a red full stop down seventeen word-steps to the floor; Breath opens and closes a ring of words at four seconds in and six out. Any poem can be un-shaped into plain stanzas and shaped again, so the reader can watch form become, and stop being, meaning.

## 2. Typography

- **Display:** Baskerville, Trebuchet MS, serif.
- **Body:** Baskerville, Georgia, serif.
- **Scale:** hero 22px caps, H2 16px, H3 14px, body 12px, meta 11px.
- **Weights:** display 400–700; body 400; italic 500.
- **Rules:** flush-left, slow reading, hairline rules, small caps.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FBFAF5` | Warm paper |
| Surface | `#FFFFFF | Page padding, ink |
| Ink | "#14213D | Blue-black ink |
| Muted | "#C9D1DB | Light panel, script |
| Accent | "#C1121F | Red mark, "umbrella", full stops |
| Accent 2 | "#5F7F86 | Navy, links |
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/calligrams/DESIGN.md`.*


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
