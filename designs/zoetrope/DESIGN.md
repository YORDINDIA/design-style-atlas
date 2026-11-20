---
slug: zoetrope
name: "Zoetrope"
description: "The wheel of life: turn the drum briskly and watch horses gallop through the slits. Draw your own strips with twelve frames each."
category: Playful
tags: ["zoetrope", "animation", "phenakisticope", "th nineteen-fifties", "old-fashioned", "railroad"]
related: ["playful-brutalism", "digital-maximalism", "raw-html"]
preview:
  bg: "#2B2419"
  surface: "#4A4030"
  ink: "#F8F3E6"
  muted: "#fdfdfd"
  accent: "#E63946"
  accent2: "#D4B14D"
  display: "Helvetica Neue, Arial, sans-serif"
  body: "Helvetica Neue, Arial, sans-serif"
---

# zoetrope — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the vintage zoetrope interpretation.

## 1. Overall aesthetic

A zoetrope turned into a plush Victorian parlour scene: a brass wall lamp flares up at the upper left, throwing a warm pool over patterned wallpaper and a mahogany table on which stands a slotted drum on a turned pedestal. One automatic flick sets it spinning, and within three seconds the bright slits sliding across the near wall fuse into a cream band in which a row of small black-and-vermilion horses gallops on the spot, dimmer and narrower than the drawings on the paper band lying unrolled on the table in front. As the drum coasts down the figure flickers, breaks into sweeping bars with comet tails of drawing, and finally stands as twelve separate slivers. Nothing is faked: the picture is built each frame by sampling the far-wall strip through the moving slits into a persistence buffer that fades like the eye, so the speed, direction and failure of the illusion all follow from how the viewer spins the drum. A reading glass on a stand shows the central figure enlarged; lifting the slotted lid turns the same drawings into a grey smear; and a drawer in the table holds twelve blank frames for a strip of the viewer's own.

## 2. Typography

- **Display:** Helvetica Neue, Arial, sans-serif.
- **Body:** Helvetica Neue, Arial, sans-serif.
- **Scale:** hero 18px caps, H2 14px, H3 11px, body 10px, meta 9px.
- **Weights:** display 600; body 400; caps caps.
- **Rules:** brass on black, brass labels 6px, small type, drifted.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#2B2419` | Dark wood, brass |
| Surface | `#4A4030` | Mahogany |
| Ink | `#F8F3E6` | Cream card, labels |
| Muted | `#826D4B` | Brass, mounting plate |
| Accent | `#E63946` | Red horses |
| Accent 2 | `#D4B14D` | Brass, sunflare |

## 4. Spacing

8px base; drum 12px; slots 12px; paper strip 8px; reader glass 5px.

## 5. Layout / Grid

Wall lamp top-left; drum center; paper strip on table; reading glass; drawer bottom-left; brush strokes.

## 6. Borders

1px solid #F8F3E662 brass frame, 0px on wood.

## 7. Shadows

0 4px 10px rgba(43,36,25,0.12) on drum; 0 2px 6px on brass lamp, 0 6px 12px rgba(212,177,77,0.22) on brass ball.

## 8. Radius

8px lamp glass, 2px brass knobs.

## 9. Buttons

"Flick the drum" button: 28px round, accent2 fill, white text, hover brightens, 44px+ targets. Also: none.

## 10. Cards

None.

## 11. Navigation

None.

## 12. Imagery

Lamp, brass ball, drum, horses, paper band, reading glass, drawer, brass wire.

## 13. Icons

Horse, brass, reading glass.

## 14. Textures

Mahogany grain 3%, brass polish 4%, felt nap 2%, revol touch.

## 15. Motion

Lamp flare: 1s ease-out on hover; drum spin: 1500ms ease; coast-down: 400ms; reading glass up: 150ms.

## 16. Interactions

- Drag the brass ball to spin the drum (follow finger, inertia): brass ball spin; brass shaft sweeps.
- Hold spacebar to be at the bottom.
- Press "Flick the drum": film the brass ball flick the drum around 3 times, then coast.
- Press "Draw your own": opens a canvas where you draw on the table.
- Press the brass pencil: opens a form with name, age and injuries.
- Draw on the "t bicyclo": a wheel.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): drum 32px, slots 24px, brass ball 40px, reader glass 20px, drawer at bottom. Tablet (768–1099px): drum 38px, brass ball 48px. Desktop (1100px+): drum 50px, brass ball 60px, full detail. Never hide the brass ball; always visible.

## 18. Accessibility

On aq6a0c4e4: brass and red pass contrast on dark wood (brass luminance 0.55, red luminance 0.22); ink text on brass flickers (white on brass 7.8:1, so both directions work); brass knob (with black text) readable; focus ring: brass ball has gold ring, 2px, 1px offset from brass; all controls ≥ 4.5:1 on dark wood. Motion: prefers-reduced-motion disables brass ball spin and coast, shows static drum.

## 19. What to avoid

Fake physics, moe layer, extra colors, motion noise, brass fading in too much.

## 20. Quick-start snippet

```css
:root {
  --bg: "#2B2419";
  --surface: "#4A4030";
  --ink: "#F8F3E6";
  --muted: "#826D4B";
  --accent: "#E63946";
  --accent2: "#D4B14D";
  --font-display: "Helvetica Neue, Arial, sans-serif";
  --font-body: "Helvetica Neue, Arial, sans-serif";
}
```
