---
slug: iron-filings
name: "Iron Filings"
description: "A classroom demonstration of magnetic field lines: two red-and-blue bar magnets glide into place over a tray of 14,000 loose iron filings, which comb into textbook patterns."
category: Data
tags: ["physics", "magnetism", "classroom", "demo", "science", "interactive"]
related: ["blueprint", "generative-algorithmic", "sci-fi-ui"]
preview:
  bg: "#ECEBE6"
  surface: "#F8F7F3"
  ink: "#1A1A1A"
  muted: "#636363"
  accent: "#D62828"
  accent2: "#1D4E89"
  display: "American Typewriter, monospace"
  body: "Bradley Hand, monospace"
---

# iron-filings — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the physical classroom interpretation.

## 1. Overall aesthetic

A warm white classroom tray with 14,000 loose black iron filings, fanned in depth layers across it. Two red-and-blue bar magnets glide in from the left and right edges on first load, and the random dust visibly combs itself into the textbook textbook pattern of north-south lines, pulling a dense bridge of filings across the gap between the north poles. From there it is a toy: drag a magnet by its handle and watch the alignment wave chase it, see tufts of filings cling to the poles, and get dragged along with swept trails. Flicks of the handle (tap twice, or double-tap) tidy the lines without disturbing the result. Bring like poles together to find the pencil-circled null point. Drop a horseshoe or disc magnet, a compass, or a fresh shake of filings from the apparatus tray. The page has only a taped typewritten label and a pencilled note.

## 2. Typography

- **Display:** American Typewriter, monospace.
- **Body:** Bradley Hand, monospace.
- **Scale:** hero 20–26px, H2 16–20px, body 13px, meta 11–12px.
- **Weights:** display 600; body 400; hand-written feel.
- **Rules:** label left-aligned, magnet handles 16px thick, tray's shadow 0 8px 16px.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#ECEBE6` | Warm classroom tray |
| Surface | `#F8F7F3` | Sticky note, light stripes |
| Ink | `#1A1A1A` | Labels, filaments |
| Muted | `#6B6760` | Hint line, handles |
| Accent | `#D62828` | Red-pole magnets, red poles, arrow |
| Accent 2 | `#1D4E89` | Blue-pole magnets, compass needle, field arrows |

## 4. Spacing

8px base; tray inset margins; filings at cell size 3px; labels 12px from tray edge.

## 5. Layout / Grid

Full tray; four layers of filings; two magnets on the handle area; note card at bottom-left.

## 6. Borders

1px solid #6B676022 tray edge; magnet 1px outline with shadow.

## 7. Shadows

0 8px 16px rgba(26,26,26,0.12) under each magnet; 0 4px 10px on note card; 0 2px 6px on compass.

## 8. Radius

6px tray and card; 8px magnet corners.

## 9. Buttons

None — interactions are direct drag/tap. Tap the filings to start (whole tray starts with magnets at the edge).

## 10. Cards

Note card: tape-cut, italic Bradley Hand text, white fill, 24px radius.

## 11. Navigation

None.

## 12. Imagery

None.

## 13. Icons

Compass, magnet barhandle, taped label icon.

## 14. Textures

Paper on tray, filings density gradient 0.1%, watercolor paper under note.

## 15. Motion

Magnet glide-in 500ms ease; filings snap-settle 300ms; alignment wave chase 400ms; highlight glow pulses.

## 16. Interactions

- Drag a magnet: filings re-arrange, bridge pulls toward it; alignment wave chases.
- Like poles together: null point marks with a small red circle.
- Tap filings to start the flow; double-tap (or tap handle twice) to tidy; flip magnet; drop a new magnet type; shake the filings.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): tray full-width, filings more sparse. Tablet (768–1099px): unchanged. Desktop (1100px+): unchanged. Never hide the tap-to-start control; always visible.

## 18. Accessibility

Classroom tray contrast: the filings, handles, and labels are checked at 4.5:1 on the paper tray surface, and the magnets carry strong colored contrast so users can see them regardless of color. Focus: visible ring on all interactive elements. Motion: prefers-reduced-motion hides the glide and sets filing motion to instant.

## 19. What to avoid

Over-scaled filings, black filings on black tray, confusing magnet colors, more than three magnets, fake sound.

## 20. Quick-start snippet

```css
:root {
  --bg: #ECEBE6;
  --surface: #F8F7F3;
  --ink: #1A1A1A;
  --muted: #6B6760;
  --accent: #D62828;
  --accent2: #1D4E89;
  --font-display: American Typewriter, monospace;
  --font-body: Bradley Hand, monospace;
}
```
