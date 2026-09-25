---
slug: quilted-patchwork
name: "Quilted Patchwork"
description: "Pieced fabric blocks join into a rhythmic sewn composition."
category: Handmade & Texture
tags: [quilt, textile, patchwork]
related: [felt-applique, embroidered-illustration, mosaic]
preview:
  bg: "#F6F0E7"
  surface: "#FFFDF8"
  ink: "#332C2B"
  muted: "#6C635F"
  accent: "#A65B4D"
  accent2: "#456E7C"
  display: "Libre Baskerville, Georgia, serif"
  body: "Inter, Arial, sans-serif"
---

# Quilted Patchwork — DESIGN.md

Use this file as the visual direction for a website. The artwork must be original.

## 1. Overall aesthetic

Pieced fabric blocks join into a rhythmic sewn composition. Show seams, repeated block geometry, and one visible quilting line system.

- **Material rule:** Fabric weave and slight padded loft within each stitched panel.
- **Composition rule:** Use a modular 3×3 patch grid with a narrow copy strip below.
- **Mark rule:** Triangles and squares must meet seam to seam; stitches follow panels.

## 2. Typography

- **Display:** Libre Baskerville, Georgia, serif. Use 48–64px at desktop and 34–42px at 360px.
- **Body:** Inter, Arial, sans-serif, 16px/1.55 for reading and 13px/1.4 for labels.
- **Hierarchy:** 28–36px section heads, 18–22px card heads, 12px tracked specimen labels. Keep body type outside dense illustration zones.

## 3. Colors

| Token | Value | Use |
|---|---|---|
| Background | `#F6F0E7` | Page and material ground |
| Surface | `#FFFDF8` | Reading panels |
| Ink | `#332C2B` | Text and strongest contour |
| Muted | `#6C635F` | Secondary text |
| Accent | `#A65B4D` | Main material color and action |
| Accent 2 | `#456E7C` | Contrast detail |

Use Ink or Muted for text on both Background and Surface. Select a readable black or white label on filled actions.

## 4. Spacing

Use an 8px base. Set page gutters to 20px at 360px and 40px at desktop. Keep 32–48px between the artwork and reading copy; use 16–24px inside cards.

## 5. Layout / Grid

Use a modular 3×3 patch grid with a narrow copy strip below. Cap the content width at 1120px. Let the art occupy about 55% of the hero at desktop and stack it above text on mobile.

## 6. Borders

Use 1px solid var(--ink) at 24% opacity for UI panels. Triangles and squares must meet seam to seam; stitches follow panels. Keep decorative outlines inside the artwork rather than around every component.

## 7. Shadows

Use 0 2px 10px rgba(24,24,24,.10) on raised material only. Any apparent material depth must agree with the actual construction: fabric weave and slight padded loft within each stitched panel.

## 8. Radius

Use 12px on cards; 4px on material shapes; 999px only on small action pills. Avoid radius changes between related components.

## 9. Buttons

Use a square patch button with a visible seam perimeter.

Use a 44px-high primary button in Accent with a readable label and a 2px Ink focus outline offset by 2px. Use a text-only secondary action. Pressed state: translateY(1px), 120ms ease-out.

## 10. Cards

Assemble each card from two or four aligned fabric blocks; the seams must meet.

Set cards on Surface with 20–24px padding. The card heading must name the content; art may overlap only the decorative edge. Apply the border and shadow from §§6–7.

## 11. Navigation

Use one repeated quilt-block strip as the active section marker.

Use a compact brand, 2–4 clear links, and one primary action. Keep the navigation on a plain Surface strip so decorative artwork never obscures labels.

## 12. Imagery

Create original artwork from this process: Show seams, repeated block geometry, and one visible quilting line system. Fabric weave and slight padded loft within each stitched panel. Do not copy an existing museum object or artist's composition.

## 13. Icons

Use one small icon family. Match icon strokes and corners to the style's marks. Triangles and squares must meet seam to seam; stitches follow panels. Give icon-only controls text labels for assistive technology.

## 14. Textures / Patterns

Fabric weave and slight padded loft within each stitched panel. At normal viewing size, texture must support the image without reducing legibility. Keep texture opacity under 8% behind body text.

## 15. Motion

Use 220ms ease-out for a 2px control lift; never animate the material texture itself. Disable nonessential transitions under `prefers-reduced-motion`. Do not simulate drawing or printing with flashing effects.

## 16. Interactions

Show hover and pressed states on controls. Keep interactive targets separate from the decorative specimen. Use a visible 2px Ink focus outline with 2px offset. Form errors need text as well as color.

## 17. Responsive behavior

At 360–767px, stack art over copy with 20px gutters and 44px tap targets. At 768–1099px, use a 2-column layout only when each column keeps 280px of readable width. At 1100px+, use the full composition. Never crop the signature material rule out of the mobile preview.

## 18. Accessibility

Ink and Muted reach at least 4.5:1, verified against both Background and Surface. Keep body copy on a plain ground, provide alt text only for informative art, use semantic headings, and preserve keyboard focus. Reduce motion to static final states. Adjacent touch targets need 8px separation.

## 19. What to avoid

- Random collage patches with no seam logic.
- Material effects behind small body text
- Decorative marks that imply an action where none exists
- Any artwork copied from the research example

## 20. Quick-start snippet

```css
:root {
  --bg: #F6F0E7;
  --surface: #FFFDF8;
  --ink: #332C2B;
  --muted: #6C635F;
  --accent: #A65B4D;
  --accent-2: #456E7C;
  --font-display: Libre Baskerville, Georgia, serif;
  --font-body: Inter, Arial, sans-serif;
}
.ds-card { background: var(--surface); color: var(--ink); padding: 24px; border-radius: 12px; }
.ds-button { min-height: 44px; background: var(--accent); color: #FFFFFF; padding: 0 20px; }
```

**Research reference:** [The Met: A Quilt and Its Pieces](https://www.metmuseum.org/met-publications/a-quilt-and-its-pieces-the-metropolitan-museum-journal-v-1920-1984ndash1985). Use it to understand the process; make original art.
