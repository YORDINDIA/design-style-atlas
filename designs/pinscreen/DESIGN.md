---
slug: pinscreen
name: "Pinscreen"
description: "Impression panel P-86: 10,000 steel hexagonal pin-heads against a black lacquered background; press from behind to imprint a hand; drag to draw with subsiding trails."
category: Playful
tags: ["impression", "panel", "steel", "lacquer", "silhouette", "artifact", "plate"]
related: ["acid-graphics", "digital-maximalism", "terminal"]
preview:
  bg: "#16181C"
  surface: "#0C0C0C"
  ink: "#E8E8E8"
  muted: "#fdfdfd"
  accent: "#E84924"
  accent2: "#2B2B2B"
  display: "Space Grotesk, Inter, sans-serif"
  body: "Space Grotesk, Inter, sans-serif"
---

# pinscreen — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the metallic silhouette interpretation.

## 1. Overall aesthetic

A glossy rounded frame slung between two chrome posts, holding roughly 10,000 hexagonal steel pin-heads (about 5,000 on a phone). On arrival a hand presses in from behind and withdraws; its impression slowly melts back into the lattice. The pointer itself becomes a hand pushing through the field; dragging leaves a subsiding trail. A tray of machined black keys presses in a hand, a mask-like face, a sphere, a travelling ripple, a typed word, and the current time. Flip the frame upside down and the whole field cascades out and back in as a glittering wave. The one bit of colour anywhere is a thin red line on the brushed-steel logo plate, which states the true pin count.

## 2. Typography

- **Display:** Space Grotesk, Inter, sans-serif.
- **Body:** Space Grotesk, Inter, sans-serif.
- **Scale:** hero 20px caps caps, H2 16px, body 14px, meta 11px.
- **Weights:** 600; body 500.
- **Rules:** left-aligned labels.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#16181C` | Lacquered back |
| Surface | `#0C0C0C` | Base plate |
| Ink | `#E8E8E8` | Pins, frame, logo plate |
| Muted | `#9A9A9A` | Minor bits, filter labels |
| Accent | `#E84924` | Red line, material label |
| Accent 2 | `#2B2B2B` | Tray, frame metal |

## 4. Spacing

8px base; pins 1px apart; frame margin 16px; tray 24px; labels 4px.

## 5. Layout / Grid

Top: panel, latch bar, red logo plate; middle: pins; bottom: tray; right: status bar.

## 6. Borders

1px solid #16181C44 frame edge, 0px pins.

## 7. Shadows

0 2px 6px #16181C22 on tray; 0 4px 8px #2B2B2B22 on frame.

## 8. Radius

8px frame; 2px tray.

## 9. Buttons

Hand: 26px round, accent fill, white text, radius 14px, hover enlarges. Tray: 34px round, accent fill, white text, hover darkens, 44px+ targets.

## 10. Cards

None.

## 11. Navigation

None.

## 12. Imagery

Pins, tray, latch, frame, red line, hand.

## 13. Icons

Hand silhouette, face, sphere, ripple, time.

## 14. Textures

Polished steel 4%, chromed edges.

## 15. Motion

Impression melting: 300ms; rail home: 200ms; ripple: 1s ease; plop: 200ms bounce.

## 16. Interactions

- Press hand from behind: impression, then melt back.
- Drag finger: trace, subsiding trail.
- Place traced letters: multi-stroke group; M improves with shape.
- F key: flip panel, cascades out and back.
- Flip hand: image of digits reversed.
- Drag hand: close hand effect.
- Slide the lens: states UI state.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): panel top-aligned, pins 50%, tray bottom. Tablet (768–1099px): panel, pins 64%, tray. Desktop (1100px+): full panel, pins 87%, tray, back. Never hide F or the tray; always visible.

## 18. Accessibility

Pins, frame, and logo plate are checked at 4.5:1 against the lacquered back and tray; red line on logo plate carries strong contrast against the backplate. Focus: visible ring on hand, tray, F. Motion: prefers-reduced-motion snaps melt and flip to static frames.

## 19. What to avoid

Glossy favours, fake chrome, plastic, too many colours, too smooth, animation everywhere.

## 20. Quick-start snippet

```css
:root {
  --bg: "#16181C";
  --surface: "#0C0C0C";
  --ink: "#E8E8E8";
  --muted: "#9A9A9A";
  --accent: "#E84924";
  --accent2: "#2B2B2B";
  --font-display: "Space Grotesk, Inter, sans-serif";
  --font-body: "Space Grotesk, Inter, sans-serif";
}
```
