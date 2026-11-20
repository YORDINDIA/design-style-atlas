---
slug: parish-census
name: "Parish Census No. 1887 — Everyone in Ostrava-under-Hill"
description: "A cream paper census for a fictional village: 300+ invented residents as paper scratches; the headline counts to its new value as dots rain in."
category: Data
tags: ["census", "data", "village", "map", "dots", "algorithms", "fingerprint"]
related: ["dataviz-terminal", "carbon-enterprise", "terminal"]
preview:
  bg: "#F6F0E4"
  surface: "#FFFFFF"
  ink: "#2F2F2F"
  muted: "#676767"
  accent: "#EF767A"
  accent2: "#49BEAA"
  display: "Georgia, Palatino, Gill Sans, Trebuchet MS, Segoe UI"
  body: "Georgia, Arial, sans-serif"
---

# parish-census — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, WindSurf) as the visual direction for a website. Follow every section. When in doubt, choose the administrative-flat interpretation.

## 1. Overall aesthetic

A paper record of a fictional parish of roughly 300 souls living under a hill in a made-up Czech factory town,OSTRAVA-UNDER-HILL — a census drawn as a single sheet of cream paper: on the left, a small masthead and seven questions set as large serif sentences; on the right, one enormous numeral, a phrase that completes it, and three hundred coloured dots that are, each of them, somebody. The dots rain in and settle into a packed cluster of households; ask another question and every family lifts off together, arcs across the page and springs into place as a population pyramid, nineteen clusters of occupation, a hand-ruled map of six streets under a hill, a beeswarm of arrival years, a choir on its risers above a grey audience, or a ring of friendships. The headline counts to its new value, the rules and labels draw themselves in, and a sentence written from the data sits underneath, dry and affectionate. Hovering any dot produces a little card with a name, an age and a one-line life; pinning it lets you follow one person through every statistic they belong to.

## 2. Typography

- **Display:** Georgia, Palatino, Gill Sans, Trebuchet MS, Segoe UI.
- **Body:** Georgia, Arial, sans-serif.
- **Scale:** hero 36px, H2 22px, H3 16px, body 12–13px, meta 11px.
- **Weights:** display 700–800; body 500.
- **Rules:** 1px solid #4F646666 grid lines, 0px rules on dots.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F6F0E4` | Cream paper |
| Surface | `#FFFFFF | Dots |
| Ink | "#2F2F2F | Ink, labels |
| Muted | "#4F6466 | Timeline, grid |
| Accent | "#EF767A | Red dots, red footnote |
| Accent 2 | "#49BEAA | Teal dots, header |
}
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/parish-census/DESIGN.md`.*


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
