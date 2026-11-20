---
slug: combination-safe
name: "Holloway and Stern No. 4417 — The Combination"
description: "A classic three-wheel combination safe: drag the dial, roll the wheels over it, and crack the gate by feeling the drags — the safe cracks open on the right setting, swings the door open."
category: Historical
tags: ["safe", "combination", "vintage", "mechanism", "browning-safe"]
related: ["heritage-classic", "surrealism", "playful-brutalism"]
preview:
  bg: "#E8E2CC"
  surface: "#FFFFFF"
  ink: "#2E2A22"
  muted: "#5d5d5d"
  accent: "#2F6E5B"
  accent2: "#B88E5C"
  display: "Georgia, serif"
  body: "Helvetica Neue, Arial, sans-serif"
---

# combination-safe — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more heavy-duty safe interpretation.

## 1. Overall aesthetic

A classic three-wheel combination safe — Holloway and Stern, Made in England, patent day 1892. The viewer holds the safe steady, drags the dial round and rolls the wheels over it, and the needle of a small stethoscope-style gauge on the right reads the gate position. Every graduation clicks, but the gate of the wheel being worked sounds lower, softer, and doubled — the safe teaches the way in: feeling for the gate, never reading a display. On the wrong setting, a clunk and a shudder; on the right, the three bolts thud back one by one, the handle spins, and the heavy door swings open in true perspective, showing its thickness and boltwork, onto felt shelves. A notepad sits beside, penciling in each number when the viewer rests on it; letters appear in a typed ledger as the viewer turns each wheel, and a "grade ladder" hangs on the wall — Apprentice through Master — the safe's collector cards.

## 2. Typography

- **Display:** Georgia, serif.
- **Body:** Helvetica Neue, Arial, sans-serif.
- **Scale:** hero 26px, H2 20px, H3 14px, body 12px, meta 11px.
- **Weights:** display 400–600; body 400; meta 500.
- **Rules:**flush-left captions, mason-border conventions.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#E8E2CC` | Hunter green, wood |
| Surface | `#FFFFFF` | Brass dials, spindles |
| Ink | `#2E2A22` | Dark, wood |
| Muted | `#7A7262` | Brass, pencil, felt |
| Accent | `#2F6E5B` | Hunter green dials, bolts |
| Accent 2 | `#B88E5C` | Brass, dial, bollard |

## 4. Spacing

8px base; safe margins 24px; slots 8px; dials 24px.

## 5. Layout / Grid

Safe centered with stethoscope at right; door swing on lower-left; notepad at bottom.

## 6. Borders

1px solid #7A726244 wood frame, 1px solid #2F6E5B33 dial edges, 1px solid #B88E5C22 spindles.

## 7. Shadows

0 8px 20px rgba(46,42,34,0.14) on safe, 0 6px 14px rgba(47,110,91,0.16) on bolts.

## 8. Radius

4px safe corners, 0px dials.

## 9. Buttons

None — the mechanism is the interaction. "Try the combination" button: 40px pill, hunter green fill, white text; keyboard shortcut? none.

## 10. Cards

None.

## 11. Navigation

None.

## 12. Imagery

Old safe, brass dial, felt interior, stethoscope gauge, ledger, notepad, mason shelves.

## 13. Icons

Hand, key, magnifying glass, pencil.

## 14. Textures

Oak grain, brass polish, felt nap.

## 15. Motion

Gradient clicks 300ms ease; bolts thud-back 120ms; door swings 350ms; handle spins 400ms.

## 16. Interactions

- Drag the dial: click the dial and drag around its circumference to advance to numbers.
- Drag the dial each wheel to the number and let go.
- Press the wheel.
- Press to test the gate with the stethoscope.
- Press the Notepad button.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): dials 34px, safe 98%, handle smaller, notch smaller. Tablet (768–1099px): safe 90%, dials 36px. Desktop (1100px+): safe 60%, dials 40px. Never hide the dials or the stethoscope; always visible.

## 18. Accessibility

Every interactive element is 48px with 44px tap targets, clearly labelled. Every text is checked at 4.5:1 on Background and Surface: hunter green and brass hit strong contrast on green wood, dark oak on cream is 10+:1, muted brass on wood hits 5+:1. Focus: visible ring on all buttons. Motion: prefers-reduced-motion hides the spread/handle spin (static).

## 19. What to avoid

Mechanical details that do nothing, too many colors, fake wood, changing the color, too much noise, more than one credential, fake sound.

## 20. Quick-start snippet

```css
:root {
  --bg: #E8E2CC;
  --surface: "#FFFFFF";
  --ink: "#2E2A22";
  --muted: "#7A7262";
  --accent: "#2F6E5B";
  --accent2: "#B88E5C";
  --font-display: "Georgia, serif";
  --font-body: "Helvetica Neue, Arial, sans-serif";
}
```
