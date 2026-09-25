---
slug: linocut-print
name: "Linocut Print"
description: "Carved relief marks produce bold black-and-color impressions."
category: Editorial & Print
tags: [relief, print, carving]
related: [risograph, etching, ukiyo-e-woodblock]
preview:
  bg: "#F3EDE2"
  surface: "#FFF9EF"
  ink: "#292722"
  muted: "#655F58"
  accent: "#B64C39"
  accent2: "#667D55"
  display: "Oswald, Impact, sans-serif"
  body: "Inter, Arial, sans-serif"
---

# Linocut Print — DESIGN.md

Use this file as the visual direction for a website. The artwork must be original.

## 1. Overall aesthetic

Carved relief marks produce bold black-and-color impressions. Cut light from a solid ink block; retain deliberate gouge marks.

- **Material rule:** Uneven ink coverage on absorbent paper, with no soft airbrush.
- **Composition rule:** Lead with one high-contrast print block and small edition metadata.
- **Mark rule:** Broad gouged negative-space channels and rough ink edges.

## 2. Typography

- **Display:** Oswald, Impact, sans-serif. Use 48–64px at desktop and 34–42px at 360px.
- **Body:** Inter, Arial, sans-serif, 16px/1.55 for reading and 13px/1.4 for labels.
- **Hierarchy:** 28–36px section heads, 18–22px card heads, 12px tracked specimen labels. Keep body type outside dense illustration zones.

## 3. Colors

| Token | Value | Use |
|---|---|---|
| Background | `#F3EDE2` | Page and material ground |
| Surface | `#FFF9EF` | Reading panels |
| Ink | `#292722` | Text and strongest contour |
| Muted | `#655F58` | Secondary text |
| Accent | `#B64C39` | Main material color and action |
| Accent 2 | `#667D55` | Contrast detail |

Use Ink or Muted for text on both Background and Surface. Select a readable black or white label on filled actions.

## 4. Spacing

Use an 8px base. Set page gutters to 20px at 360px and 40px at desktop. Keep 32–48px between the artwork and reading copy; use 16–24px inside cards.

## 5. Layout / Grid

Lead with one high-contrast print block and small edition metadata. Cap the content width at 1120px. Let the art occupy about 55% of the hero at desktop and stack it above text on mobile.

## 6. Borders

Use 1px solid var(--ink) at 24% opacity for UI panels. Broad gouged negative-space channels and rough ink edges. Keep decorative outlines inside the artwork rather than around every component.

## 7. Shadows

Use 0 2px 10px rgba(24,24,24,.10) on raised material only. Any apparent material depth must agree with the actual construction: uneven ink coverage on absorbent paper, with no soft airbrush.

## 8. Radius

Use 6px on cards; 4px on buttons; no arbitrary large pills. Avoid radius changes between related components.

## 9. Buttons

Use a dense ink block with one rough gouged corner; keep the label bold.

Use a 44px-high primary button in Accent with a readable label and a 2px Ink focus outline offset by 2px. Use a text-only secondary action. Pressed state: translateY(1px), 120ms ease-out.

## 10. Cards

Use a thick ink frame and carved negative-space illustration above copy.

Set cards on Surface with 20–24px padding. The card heading must name the content; art may overlap only the decorative edge. Apply the border and shadow from §§6–7.

## 11. Navigation

Separate links with broad printed rules; omit polished hairlines.

Use a compact brand, 2–4 clear links, and one primary action. Keep the navigation on a plain Surface strip so decorative artwork never obscures labels.

## 12. Imagery

Create original artwork from this process: Cut light from a solid ink block; retain deliberate gouge marks. Uneven ink coverage on absorbent paper, with no soft airbrush. Do not copy an existing museum object or artist's composition.

## 13. Icons

Use one small icon family. Match icon strokes and corners to the style's marks. Broad gouged negative-space channels and rough ink edges. Give icon-only controls text labels for assistive technology.

## 14. Textures / Patterns

Uneven ink coverage on absorbent paper, with no soft airbrush. At normal viewing size, texture must support the image without reducing legibility. Keep texture opacity under 8% behind body text.

## 15. Motion

Use 220ms ease-out for a 2px control lift; never animate the material texture itself. Disable nonessential transitions under `prefers-reduced-motion`. Do not simulate drawing or printing with flashing effects.

## 16. Interactions

Show hover and pressed states on controls. Keep interactive targets separate from the decorative specimen. Use a visible 2px Ink focus outline with 2px offset. Form errors need text as well as color.

## 17. Responsive behavior

At 360–767px, stack art over copy with 20px gutters and 44px tap targets. At 768–1099px, use a 2-column layout only when each column keeps 280px of readable width. At 1100px+, use the full composition. Never crop the signature material rule out of the mobile preview.

## 18. Accessibility

Ink and Muted reach at least 4.5:1, verified against both Background and Surface. Keep body copy on a plain ground, provide alt text only for informative art, use semantic headings, and preserve keyboard focus. Reduce motion to static final states. Adjacent touch targets need 8px separation.

## 19. What to avoid

- Photographic gradients or thin etched crosshatching.
- Material effects behind small body text
- Decorative marks that imply an action where none exists
- Any artwork copied from the research example

## 20. Quick-start snippet

```css
:root {
  --bg: #F3EDE2;
  --surface: #FFF9EF;
  --ink: #292722;
  --muted: #655F58;
  --accent: #B64C39;
  --accent-2: #667D55;
  --font-display: Oswald, Impact, sans-serif;
  --font-body: Inter, Arial, sans-serif;
}
.ds-card { background: var(--surface); color: var(--ink); padding: 24px; border-radius: 6px; }
.ds-button { min-height: 44px; background: var(--accent); color: #FFFFFF; padding: 0 20px; }
```

**Research reference:** [Linocut Print material or technique](https://www.metmuseum.org/art/collection/search/832699). Use it to understand the process; make original art.
