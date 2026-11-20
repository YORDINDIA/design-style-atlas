---
slug: pendulum-wave
name: "Pendulum Wave"
description: "Fifteen brass-bob pendulums of increasing length; release and watch them fall out of phase, tangling, then settle back into one line after one minute."
category: Historical
tags: ["physics", "mechanical", "clockwork", "wave", "brass", "instrument"]
related: ["analog-hifi", "terminal", "blueprint"]
preview:
  bg: "#F2ECDF"
  surface: "#FFFFFF"
  ink: "#3A352B"
  muted: "#646464"
  accent: "#C49A6C"
  accent2: "#5D5D57"
  display: "Georgia, Times New Roman, serif"
  body: "Georgia, serif"
---

# pendulum-wave — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the mechanical-museum interpretation.

## 1. Overall aesthetic

A museum-cabinet instrument on sunlit plaster: a dark walnut frame with a row of fifteen brass bobs on fine strings, lengths cut so that each makes one more swing per minute than its neighbour. A hinged release bar holds them to one side; click "release" and the row leaves in unison, then slides into a travelling wave, tangles, sorts itself into four, three, and two interleaved groups, and after exactly one minute sweeps back into one line. From the top you see the same row as one undulating line with a fading wake; at the side, a bezelled brass sixty-second dial names the pattern of the moment and states the arithmetic behind it (one more swing per minute). The dial states which pattern is showing: All synchronous, Two groups, Three groups, Four groups, Out of phase, Settling. Along the bottom, a brass rule lets the viewer scrub to any instant; the display reads the computed angle of every bob. Everything is computed from the closed-form angle — no drift, the minute repeats forever.

## 2. Typography

- **Display:** Georgia, Times New Roman, serif.
- **Body:** Georgia, serif.
- **Scale:** hero 16px caps caps, H2 20px, H3 14px, body 13px, dial readouts 11px.
- **Weights:** display 600–700; body 500–600; dial 500.
- **Rules:** flush-left on the dial; engraved captions.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F2ECDF` | Cream plaster, walnut frame |
| Surface | `#FFFFFF` | Brass trim, rule |
| Ink | `#3A352B` | Walnut, time text, states |
| Muted | `#7A7255` | Brass feet, dials |
| Accent | `#C49A6C` | Brass bobs, highlight glow |
| Accent 2 | `#5D5D57` | Brass rule, dark detail |

## 4. Spacing

8px base; states 36px apart; dial row 8px; bobs 16px spacing.

## 5. Layout / Grid

Top: time scrubber; middle: pendulums (from top, bezelled dial); bottom: side view line and state readout; right: status text.

## 6. Borders

1px solid #3A352B66 wood trim; dial 1px solid #C49A6C44.

## 7. Shadows

0 8px 18px rgba(58,53,43,0.12) on bobs, 0 4px 8px on walnut; dial 0 2px 8px #C49A6C22.

## 8. Radius

8px dials; 2px bobs.

## 9. Buttons

"Release" button: 40px pill, accent2 fill, white text, 44px+ targets. "Set dial to zero": reset button, 30px pill, ink outline, white text.

## 10. Cards

Each bob: 28px circle card, accent fill, white text (its number); rising on hover.

## 11. Navigation

Side view: scrub bar with play, stop, speed (rate ×½ ×1 ×2 ×4), pattern readout at the right.

## 12. Imagery

Walnut frame, brass bobs, brass dial, overhead view line, cream wall.

## 13. Icons

Play, stop, speed, time.

## 14. Textures

Walnut grain 3%, brass polish 4%, tick marks.

## 15. Motion

Bob swing: ease-in-out 1.2s; release: smooth 300ms,Tangles: 1s, settle: 1s, back to one line: 1s.

## 16. Interactions

- Press "Release": the wave plays forward; press "Pause": freeze at the pattern.
- Drag the time scrubber: jump to any instant; read the angle of every bob.
- Hover a bob: it enlarges slightly with a glow.
- Drag the rate dial: ×½ ×1 ×2 ×4.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): time scrubber full-width, pendulums stacked in 2 columns, rate dial row. Tablet (768–1099px): pendulums in 3 columns. Desktop (1100px+): full layout. Never hide the release or the rate dial; always visible.

## 18. Accessibility

State labels and bobs are checked for 4.5:1 on Background and Surface; brass and walnut hit 4.5:1. Focus: visible ring on buttons and scrubber. Motion: prefers-reduced-motion hides the physics (shows static state).

## 19. What to avoid

Fake physics, excessive motion, shaky text, more than 15 bobs, dark shadows.

## 20. Quick-start snippet

```css
:root {
  --bg: "#F2ECDF", surface: "#FFFFFF",
  --ink: "#3A352B", muted: "#7A7255",
  --accent: "#C49A6C", accent2: "#5D5D57",
  --font-display: "Georgia, Times New Roman, serif"
  --font-body: "Georgia, serif"
}
```
