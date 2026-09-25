---
slug: mosaic
name: "Mosaic"
description: "Small irregular tesserae form images through color and grout."
category: Handmade & Texture
tags: [tile, tesserae, grout]
related: [marquetry, stained-glass, quilted-patchwork]
preview:
  bg: "#F3EEE3"
  surface: "#FFFCF5"
  ink: "#302D29"
  muted: "#6A645E"
  accent: "#B26443"
  accent2: "#4E6F77"
  display: "Marcellus, Georgia, serif"
  body: "Inter, Arial, sans-serif"
---

# Mosaic — DESIGN.md

Use this file as the visual direction for a website. The artwork must be original.

## 1. Overall aesthetic

Small irregular tesserae form images through color and grout. Read from afar as one image; up close reveal individual uneven tiles.

- **Material rule:** Matte tile faces, dark grout channels, chipped-edge variation.
- **Composition rule:** Use one circular medallion plus a narrow repeating border.
- **Mark rule:** Tile shapes follow contour flow; keep 2–3px grout gaps.

## 2. Typography

- **Display:** Marcellus, Georgia, serif. Use 48–64px at desktop and 34–42px at 360px.
- **Body:** Inter, Arial, sans-serif, 16px/1.55 for reading and 13px/1.4 for labels.
- **Hierarchy:** 28–36px section heads, 18–22px card heads, 12px tracked specimen labels. Keep body type outside dense illustration zones.

## 3. Colors

| Token | Value | Use |
|---|---|---|
| Background | `#F3EEE3` | Page and material ground |
| Surface | `#FFFCF5` | Reading panels |
| Ink | `#302D29` | Text and strongest contour |
| Muted | `#6A645E` | Secondary text |
| Accent | `#B26443` | Main material color and action |
| Accent 2 | `#4E6F77` | Contrast detail |

Use Ink or Muted for text on both Background and Surface. Select a readable black or white label on filled actions.

## 4. Spacing

Use an 8px base. Set page gutters to 20px at 360px and 40px at desktop. Keep 32–48px between the artwork and reading copy; use 16–24px inside cards.

## 5. Layout / Grid

Use one circular medallion plus a narrow repeating border. Cap the content width at 1120px. Let the art occupy about 55% of the hero at desktop and stack it above text on mobile.

## 6. Borders

Use 1px solid var(--muted) at 28% opacity for UI panels. Tile shapes follow contour flow; keep 2–3px grout gaps. Keep decorative outlines inside the artwork rather than around every component.

## 7. Shadows

Use 0 2px 10px rgba(24,24,24,.10) on raised material only. Any apparent material depth must agree with the actual construction: matte tile faces, dark grout channels, chipped-edge variation.

## 8. Radius

Use 2px on cards and buttons; keep illustration geometry crisp. Avoid radius changes between related components.

## 9. Buttons

Use a solid action tile with a 3px grout-colored gap around it.

Use a 44px-high primary button in Accent with a readable label and a 2px Ink focus outline offset by 2px. Use a text-only secondary action. Pressed state: translateY(1px), 120ms ease-out.

## 10. Cards

Frame content in uneven tesserae while keeping the text panel unpatterned.

Set cards on Surface with 20–24px padding. The card heading must name the content; art may overlap only the decorative edge. Apply the border and shadow from §§6–7.

## 11. Navigation

Use a short tile run to show the current section.

Use a compact brand, 2–4 clear links, and one primary action. Keep the navigation on a plain Surface strip so decorative artwork never obscures labels.

## 12. Imagery

Create original artwork from this process: Read from afar as one image; up close reveal individual uneven tiles. Matte tile faces, dark grout channels, chipped-edge variation. Do not copy an existing museum object or artist's composition.

## 13. Icons

Use one small icon family. Match icon strokes and corners to the style's marks. Tile shapes follow contour flow; keep 2–3px grout gaps. Give icon-only controls text labels for assistive technology.

## 14. Textures / Patterns

Matte tile faces, dark grout channels, chipped-edge variation. At normal viewing size, texture must support the image without reducing legibility. Keep texture opacity under 8% behind body text.

## 15. Motion

Use 220ms ease-out for a 2px control lift; never animate the material texture itself. Disable nonessential transitions under `prefers-reduced-motion`. Do not simulate drawing or printing with flashing effects.

## 16. Interactions

Show hover and pressed states on controls. Keep interactive targets separate from the decorative specimen. Use a visible 2px Ink focus outline with 2px offset. Form errors need text as well as color.

## 17. Responsive behavior

At 360–767px, stack art over copy with 20px gutters and 44px tap targets. At 768–1099px, use a 2-column layout only when each column keeps 280px of readable width. At 1100px+, use the full composition. Never crop the signature material rule out of the mobile preview.

## 18. Accessibility

Ink and Muted reach at least 4.5:1, verified against both Background and Surface. Keep body copy on a plain ground, provide alt text only for informative art, use semantic headings, and preserve keyboard focus. Reduce motion to static final states. Adjacent touch targets need 8px separation.

## 19. What to avoid

- Perfect pixel grids or paper collage gaps.
- Material effects behind small body text
- Decorative marks that imply an action where none exists
- Any artwork copied from the research example

## 20. Quick-start snippet

```css
:root {
  --bg: #F3EEE3;
  --surface: #FFFCF5;
  --ink: #302D29;
  --muted: #6A645E;
  --accent: #B26443;
  --accent-2: #4E6F77;
  --font-display: Marcellus, Georgia, serif;
  --font-body: Inter, Arial, sans-serif;
}
.ds-card { background: var(--surface); color: var(--ink); padding: 24px; border-radius: 2px; }
.ds-button { min-height: 44px; background: var(--accent); color: #000000; padding: 0 20px; }
```

**Research reference:** [Mosaic material or technique](https://www.metmuseum.org/art/collection/search/254535). Use it to understand the process; make original art.
