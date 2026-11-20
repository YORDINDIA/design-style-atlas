---
slug: rose-window
name: "Rose Window"
description: "A hushed stone nave seen from the floor: ashlar blocks, pointed arches, carved tracery, and a procedural Gothic rose window with visible lead lines."
category: Heritage Luxury
tags: ["gothic", "rose-window", "tracery", "holloway-and-vollmer"]
related: ["gothic-victorian", "art-deco", "heritage-classic"]
preview:
  bg: "#08070A"
  surface: "#24222A"
  ink: "#E0A100"
  muted: "#fdfdfd"
  accent: "#E9E2CF"
  accent2: "#E8B3A4"
  display: "Georgia, Times New Roman, serif"
  body: "Gill Sans Light, system-ui"
---

# rose-window — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more sacral-hollow interpretation.

## 1. Overall aesthetic

A hushed stone nave seen from the floor: ashlar walls, a pointed arch with carved stances, two dark columns, and high in the wall a rose window of Order XII, Opus 0231: an exterior trefoil in the stone frame, with nested lancets, foils, and roundels. The several hundred pieces of the Rose are generated afresh by gothic rules of symmetry, nested rings, lancets, foils, and roundels — every piece flares as it is set, drawn in lead from the centre outward, then glazed ring by ring. The sun moves with the viewer; a hotspot of brilliance travels across the glass, each piece of glass blooms over its lead, and the window glows red-orange against the dark stone. On the flagstones below, the light glints as dust motes; clicking the carved inscription under the Rose draws the commission order and opus number. The page is dim, reverent, and procedural — every glow, leaf, and countermand is recomputed as you scroll.

## 2. Typography

- **Display:** Georgia, Times New Roman, serif.
- **Body:** Gill Sans Light, system-ui.
- **Scale:** hero 32px caps, H2 22px, H3 16px, body 13–14px, meta 11px.
- **Weights:** display 700; body 500–700.
- **Rules:** centered title, ink rules.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#08070A` | Stone nave, floor |
| Surface | `#24222A` | Lead bars, arch |
| Ink | `#E0A100` | Stone, gold leaf, inscription |
| Muted | `#3A3842` | Carved stances, dust |
| Accent | `#E9E2CF` | Sun, glass, dust motes |
| Accent 2 | `#E8B3A4` | Ruby glass bloom |

## 4. Spacing

8px base; stone blocks 16px gap; window centered.

## 5. Layout / Grid

Stone nave top; arch wall with Rose centered; inscription; floor dust.

## 6. Borders

1px solid #E0A10066 stone joinery; 0px on arch.

## 7. Shadows

0 0 32px #E8B3A466 glass bloom; 0 8px 16px rgba(8,7,10,0.5) on window.

## 8. Radius

0px nave; 8px window frame; 2px amber dust.

## 9. Buttons

"New window" button: 40px pill, ink fill, white text, 16px margin.

## 10. Cards

Commission panel: ink frame, gold text, 12px radius, 0px shadow.

## 11. Navigation

None — the page is pure composition.

## 12. Imagery

Procedural Rose, stone tracery, flagstone dust.

## 13. Icons

Star, plus, angle.

## 14. Textures

Stone grain 4%, lead halftone, glass frost 1%.

## 15. Motion

Sun glows when hovered; dust motes drift 4s loop; inscription draws on click, 300ms.

## 16. Interactions

- Mousemove: sun glows, glass pieces bloom.
- Hover the Rose: dust motes rise.
- Click the inscription: draws the order, opus number.
- Click the new-window button.

## 17. Responsive behavior

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces.

All interactive elements: 44px minimum tap targets, 44px+ on touch surfaces. Mobile (360–767px): Stone nave full-width, window centered. Tablet (768–1099px): unchanged. Desktop (1100px+): unchanged. Never hide the new-window button; always visible.

## 18. Accessibility

On stone and gold the ink hits 4.5:1 on Background and Surface; dust motes and glass bloom carry red (as dark orange) that clears 4.5:1 against stone. Focus: visible ring on the button and hover. Motion: prefers-reduced-motion hides dust loops.

## 19. What to avoid

Harsh white, fake gold, symmetry that looks built rather than drawn, outside light, fake dust.

## 20. Quick-start snippet

```css
:root {
  --bg: #08070A;
  --surface: #24222A;
  --ink: #E0A100;
  --muted: #3A3842;
  --accent: #E9E2CF;
  --accent2: #E8B3A4;
  --font-display: Georgia, Times New Roman, serif;
  --font-body: Gill Sans Light, system-ui;
}
```
