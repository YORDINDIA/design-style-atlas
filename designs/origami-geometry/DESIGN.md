---
slug: origami-geometry
name: "Origami Geometry"
description: "Folded polygonal forms that show crease logic and planar light."
category: Handmade & Texture
tags: [paper, fold, geometry]
related: [kirigami-pop-up, papercut, low-poly-facets]
preview:
  bg: "#F3F0EA"
  surface: "#FFFFFF"
  ink: "#242D35"
  muted: "#626970"
  accent: "#C76B51"
  accent2: "#466C8A"
  display: "DM Sans, Arial, sans-serif"
  body: "Inter, Arial, sans-serif"
---

# Origami Geometry — DESIGN.md

Use this file as the visual direction for a website. The artwork must be original.

## 1. Overall aesthetic

Folded polygonal forms that show crease logic and planar light. One continuous sheet becomes angular facets; no cut edge is needed to explain the form.

- **Material rule:** Matte paper planes; distinguish light-facing and shadow-facing facets.
- **Composition rule:** Place one large folded form beside a sparse vertical text column.
- **Mark rule:** Crease diagonals meet at plausible fold vertices.

## 2. Typography

- **Display:** DM Sans, Arial, sans-serif. Use 48–64px at desktop and 34–42px at 360px.
- **Body:** Inter, Arial, sans-serif, 16px/1.55 for reading and 13px/1.4 for labels.
- **Hierarchy:** 28–36px section heads, 18–22px card heads, 12px tracked specimen labels. Keep body type outside dense illustration zones.

## 3. Colors

| Token | Value | Use |
|---|---|---|
| Background | `#F3F0EA` | Page and material ground |
| Surface | `#FFFFFF` | Reading panels |
| Ink | `#242D35` | Text and strongest contour |
| Muted | `#626970` | Secondary text |
| Accent | `#C76B51` | Main material color and action |
| Accent 2 | `#466C8A` | Contrast detail |

Use Ink or Muted for text on both Background and Surface. Select a readable black or white label on filled actions.

## 4. Spacing

Use an 8px base. Set page gutters to 20px at 360px and 40px at desktop. Keep 32–48px between the artwork and reading copy; use 16–24px inside cards.

## 5. Layout / Grid

Place one large folded form beside a sparse vertical text column. Cap the content width at 1120px. Let the art occupy about 55% of the hero at desktop and stack it above text on mobile.

## 6. Borders

Use 1px solid var(--muted) at 28% opacity for UI panels. Crease diagonals meet at plausible fold vertices. Keep decorative outlines inside the artwork rather than around every component.

## 7. Shadows

Use 0 2px 10px rgba(24,24,24,.10) on raised material only. Any apparent material depth must agree with the actual construction: matte paper planes; distinguish light-facing and shadow-facing facets.

## 8. Radius

Use 2px on cards and buttons; keep illustration geometry crisp. Avoid radius changes between related components.

## 9. Buttons

Clip one 12px corner on primary actions; show a single diagonal crease on press.

Use a 44px-high primary button in Accent with a readable label and a 2px Ink focus outline offset by 2px. Use a text-only secondary action. Pressed state: translateY(1px), 120ms ease-out.

## 10. Cards

Use a flat rectangular card with a folded triangular corner, never an arbitrary 3D cube.

Set cards on Surface with 20–24px padding. The card heading must name the content; art may overlap only the decorative edge. Apply the border and shadow from §§6–7.

## 11. Navigation

Align links to a strict baseline; one diagonal crease may mark the active section.

Use a compact brand, 2–4 clear links, and one primary action. Keep the navigation on a plain Surface strip so decorative artwork never obscures labels.

## 12. Imagery

Create original artwork from this process: One continuous sheet becomes angular facets; no cut edge is needed to explain the form. Matte paper planes; distinguish light-facing and shadow-facing facets. Do not copy an existing museum object or artist's composition.

## 13. Icons

Use one small icon family. Match icon strokes and corners to the style's marks. Crease diagonals meet at plausible fold vertices. Give icon-only controls text labels for assistive technology.

## 14. Textures / Patterns

Matte paper planes; distinguish light-facing and shadow-facing facets. At normal viewing size, texture must support the image without reducing legibility. Keep texture opacity under 8% behind body text.

## 15. Motion

Use 220ms ease-out for a 2px control lift; never animate the material texture itself. Disable nonessential transitions under `prefers-reduced-motion`. Do not simulate drawing or printing with flashing effects.

## 16. Interactions

Show hover and pressed states on controls. Keep interactive targets separate from the decorative specimen. Use a visible 2px Ink focus outline with 2px offset. Form errors need text as well as color.

## 17. Responsive behavior

At 360–767px, stack art over copy with 20px gutters and 44px tap targets. At 768–1099px, use a 2-column layout only when each column keeps 280px of readable width. At 1100px+, use the full composition. Never crop the signature material rule out of the mobile preview.

## 18. Accessibility

Ink and Muted reach at least 4.5:1, verified against both Background and Surface. Keep body copy on a plain ground, provide alt text only for informative art, use semantic headings, and preserve keyboard focus. Reduce motion to static final states. Adjacent touch targets need 8px separation.

## 19. What to avoid

- Random polygons that cannot be folded from one sheet.
- Material effects behind small body text
- Decorative marks that imply an action where none exists
- Any artwork copied from the research example

## 20. Quick-start snippet

```css
:root {
  --bg: #F3F0EA;
  --surface: #FFFFFF;
  --ink: #242D35;
  --muted: #626970;
  --accent: #C76B51;
  --accent-2: #466C8A;
  --font-display: DM Sans, Arial, sans-serif;
  --font-body: Inter, Arial, sans-serif;
}
.ds-card { background: var(--surface); color: var(--ink); padding: 24px; border-radius: 2px; }
.ds-button { min-height: 44px; background: var(--accent); color: #000000; padding: 0 20px; }
```

**Research reference:** [Origami Geometry material or technique](https://www.metmuseum.org/art/collection/search/78428). Use it to understand the process; make original art.
