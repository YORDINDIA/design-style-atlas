---
slug: ariadne-thread
name: "Ariadne's Thread"
description: "Walk the labyrinth; hold to keep walking; swipe or tap the corridor ahead; thread out with a counter, water-clock, and labyrinth map."
category: Playful
tags: ["mythology", "labyrinth", "maze", "minotaur", "playful", "interactive"]
related: ["playful-brutalism", "surrealism", "3d-web-design"]
preview:
  bg: "#EFE8D8"
  surface: "#FFFFFF"
  ink: "#3E3528"
  muted: "#626262"
  accent: "#B85D2C"
  accent2: "#5D5D53"
  display: "Playfair Display, Georgia, serif"
  body: "Cormorant Garamond, Georgia, serif"
---

# ariadne-thread — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more mythic interpretation.

## 1. Overall aesthetic

A mythic interactive salad. The page is the decorated surface of an Attic black-figure drinking cup: terracotta ground with clay grain, wheel marks, hairline cracks, chipped rim, black glaze bands carrying the title in spaced, slightly uneven cream capitals, a Greek-key meander above and below, a running-wave band, and two palmettes flanking a round tondo. Inside the tondo is a freshly generated ring labyrinth. A small black silhouette of Theseus steps in at the gate, paying out an oxide-red thread that lies along the corridor floors with a little slack. Reaching him wakes him; the meanders begin to scroll, and the way out is the thread itself — rewound step by step while the Minotaur pathfinds behind, stopping to sniff at junctions. Escape sends the whole thread springing back along the remembered route, pulling taut, lifting off the pot, and winding into a ball on the cream roundel beside the title while the vessel makes one slow turn, and a cream slip panel delivers the inscription.

## 2. Typography

- **Display:** Playfair Display, Georgia, serif.
- **Body:** Cormorant Garamond, Georgia, serif.
- **Scale:** hero 20px Playfair, H2 16px, H3 13px, body 12px, meta 11px.
- **Weights:** display 400–700; body 400.
- **Rules:** flush-left cup framing, mason return lines.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#EFE8D8` | Cream ground |
| Surface | `#FFFFFF` | Wife of white: cream |
| Ink | `#3E3528` | Dark text |
| Muted | `#8A7A6B` | Kind, smritten |
| Accent | `#B85D2C` | Red thread |
| Accent 2 | `#5D5D53` | Dark text, thread end |

## 4. Spacing

8px base; cup margins 8px; ball diameter 20px; sheet 8px.

## 5. Layout / Grid

Top: cup and title; centre: labyrinth; bottom: thread ball and inscription.

## 6. Borders

1px solid #8A7A6B22 glance; glaze bands 1px solid #3E352844.

## 7. Shadows

0 2px 6px rgba(62,53,40,0.10) on cup; 0 4px 10px #B85D2C22 on ball.

## 8. Radius

8px cup corners; 4px ball corners.

## 9. Buttons

None — all is play.

## 10. Cards

None.

## 11. Navigation

None.

## 12. Imagery

Terracotta pot, black glaze, red thread, cream roundel.

## 13. Icons

Minotaur head,VI

## 14. Textures

Clay grain 3%, glaze sheen.

## 15. Motion

Meander scroll 400ms ease; labyrinth step 300ms bounce; thread draw 700ms ease-in; ball rise 600ms ease-out.

## 16. Interactions

- Drag Theseus: drag to follow the thread; swipe or tap the corridor ahead.
- Drag thread (relic): rewind the thread while Minotaur pathfinds.
- Press thread: pull taut; press again to unwind.
- Click labyrinth cell: pathfind.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): labyrinth full-width, card 9. Tablet (768–1099px): 2 columns. Desktop (1100px+): full width. Never hide touch controls.

## 18. Accessibility

Every interactive element is 45px+ tall with 44px tap targets, clearly labelled. The red thread carries strong contrast against cream; text checks 4.5:1 against Background and Surface. Motion: prefers-reduced-motion turns it static.

## 19. What to avoid

Silence, confusion, long text, so what if?

## 20. Quick-start snippet

```css
:root {
  --bg: #EFE8D8;
  --surface: #FFFFFF;
  --ink: "#3E3528";
  --muted: "#8A7A6B";
  --accent: "#B85D2C";
  --accent2: "#5D5D53";
  --font-display: "Playfair Display, Georgia, serif";
  --font-body: "Cormorant Garamond, Georgia, serif";
}
```
