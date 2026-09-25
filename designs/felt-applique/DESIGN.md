---
slug: felt-applique
name: "Felt Appliqué"
description: "Cut felt shapes sit on a soft ground with visible stitched attachment."
category: Handmade & Texture
tags: [felt, applique, textile]
related: [embroidered-illustration, quilted-patchwork, plasticine-clay]
preview:
  bg: "#F5F0E7"
  surface: "#FFFCF6"
  ink: "#332E2B"
  muted: "#6F655E"
  accent: "#B5654A"
  accent2: "#547B68"
  display: "Nunito, Arial, sans-serif"
  body: "Inter, Arial, sans-serif"
---

# Felt Appliqué — DESIGN.md

Use this file as the visual direction for a website. The artwork must be original.

## 1. Overall aesthetic

Cut felt shapes sit on a soft ground with visible stitched attachment. Layer simple silhouettes; fuzzy edges and small stitches reveal the material.

- **Material rule:** Short felt fiber nap, broad matte color, and soft edge occlusion.
- **Composition rule:** Arrange three appliqué patches as a playful vertical badge stack.
- **Mark rule:** Use scalloped cut shapes plus intermittent thread dashes.

## 2. Typography

- **Display:** Nunito, Arial, sans-serif. Use 48–64px at desktop and 34–42px at 360px.
- **Body:** Inter, Arial, sans-serif, 16px/1.55 for reading and 13px/1.4 for labels.
- **Hierarchy:** 28–36px section heads, 18–22px card heads, 12px tracked specimen labels. Keep body type outside dense illustration zones.

## 3. Colors

| Token | Value | Use |
|---|---|---|
| Background | `#F5F0E7` | Page and material ground |
| Surface | `#FFFCF6` | Reading panels |
| Ink | `#332E2B` | Text and strongest contour |
| Muted | `#6F655E` | Secondary text |
| Accent | `#B5654A` | Main material color and action |
| Accent 2 | `#547B68` | Contrast detail |

Use Ink or Muted for text on both Background and Surface. Select a readable black or white label on filled actions.

## 4. Spacing

Use an 8px base. Set page gutters to 20px at 360px and 40px at desktop. Keep 32–48px between the artwork and reading copy; use 16–24px inside cards.

## 5. Layout / Grid

Arrange three appliqué patches as a playful vertical badge stack. Cap the content width at 1120px. Let the art occupy about 55% of the hero at desktop and stack it above text on mobile.

## 6. Borders

Use 1px solid var(--ink) at 24% opacity for UI panels. Use scalloped cut shapes plus intermittent thread dashes. Keep decorative outlines inside the artwork rather than around every component.

## 7. Shadows

Use 0 2px 10px rgba(24,24,24,.10) on raised material only. Any apparent material depth must agree with the actual construction: short felt fiber nap, broad matte color, and soft edge occlusion.

## 8. Radius

Use 12px on cards; 4px on material shapes; 999px only on small action pills. Avoid radius changes between related components.

## 9. Buttons

Use a soft cut-felt silhouette with sparse stitch dashes; avoid plastic bevels.

Use a 44px-high primary button in Accent with a readable label and a 2px Ink focus outline offset by 2px. Use a text-only secondary action. Pressed state: translateY(1px), 120ms ease-out.

## 10. Cards

Layer a small stitched patch over a larger felt ground with soft edge shadow.

Set cards on Surface with 20–24px padding. The card heading must name the content; art may overlap only the decorative edge. Apply the border and shadow from §§6–7.

## 11. Navigation

Place the active link in a small sewn label tab.

Use a compact brand, 2–4 clear links, and one primary action. Keep the navigation on a plain Surface strip so decorative artwork never obscures labels.

## 12. Imagery

Create original artwork from this process: Layer simple silhouettes; fuzzy edges and small stitches reveal the material. Short felt fiber nap, broad matte color, and soft edge occlusion. Do not copy an existing museum object or artist's composition.

## 13. Icons

Use one small icon family. Match icon strokes and corners to the style's marks. Use scalloped cut shapes plus intermittent thread dashes. Give icon-only controls text labels for assistive technology.

## 14. Textures / Patterns

Short felt fiber nap, broad matte color, and soft edge occlusion. At normal viewing size, texture must support the image without reducing legibility. Keep texture opacity under 8% behind body text.

## 15. Motion

Use 220ms ease-out for a 2px control lift; never animate the material texture itself. Disable nonessential transitions under `prefers-reduced-motion`. Do not simulate drawing or printing with flashing effects.

## 16. Interactions

Show hover and pressed states on controls. Keep interactive targets separate from the decorative specimen. Use a visible 2px Ink focus outline with 2px offset. Form errors need text as well as color.

## 17. Responsive behavior

At 360–767px, stack art over copy with 20px gutters and 44px tap targets. At 768–1099px, use a 2-column layout only when each column keeps 280px of readable width. At 1100px+, use the full composition. Never crop the signature material rule out of the mobile preview.

## 18. Accessibility

Ink and Muted reach at least 4.5:1, verified against both Background and Surface. Keep body copy on a plain ground, provide alt text only for informative art, use semantic headings, and preserve keyboard focus. Reduce motion to static final states. Adjacent touch targets need 8px separation.

## 19. What to avoid

- Glossy 3D clay or sharp paper edges.
- Material effects behind small body text
- Decorative marks that imply an action where none exists
- Any artwork copied from the research example

## 20. Quick-start snippet

```css
:root {
  --bg: #F5F0E7;
  --surface: #FFFCF6;
  --ink: #332E2B;
  --muted: #6F655E;
  --accent: #B5654A;
  --accent-2: #547B68;
  --font-display: Nunito, Arial, sans-serif;
  --font-body: Inter, Arial, sans-serif;
}
.ds-card { background: var(--surface); color: var(--ink); padding: 24px; border-radius: 12px; }
.ds-button { min-height: 44px; background: var(--accent); color: #000000; padding: 0 20px; }
```

**Research reference:** [Felt Appliqué material or technique](https://www.vam.ac.uk/blog/quilts-hidden-histories-untold-stories/quilts-exhibition-2010). Use it to understand the process; make original art.
