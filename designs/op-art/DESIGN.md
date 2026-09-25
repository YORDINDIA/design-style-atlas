---
slug: op-art
name: "Op Art"
description: "Repeated geometry creates controlled optical tension without animation."
category: Experimental
tags: [optical, geometry, contrast]
related: [bauhaus, de-stijl, generative-algorithmic]
preview:
  bg: "#F6F3EB"
  surface: "#FFFFFF"
  ink: "#202329"
  muted: "#62666B"
  accent: "#AD433B"
  accent2: "#426B75"
  display: "Helvetica Neue, Arial, sans-serif"
  body: "Inter, Arial, sans-serif"
---

# Op Art — DESIGN.md

Use this file as the visual direction for a website. The artwork must be original.

## 1. Overall aesthetic

Repeated geometry creates controlled optical tension without animation. Use mathematically paced stripes or rings as one bounded focal field.

- **Material rule:** Crisp vector edges; no grain or blur in the optical region.
- **Composition rule:** One large optical panel plus a steady plain-text information rail.
- **Mark rule:** Alternate high-contrast bands with changing spacing.

## 2. Typography

- **Display:** Helvetica Neue, Arial, sans-serif. Use 48–64px at desktop and 34–42px at 360px.
- **Body:** Inter, Arial, sans-serif, 16px/1.55 for reading and 13px/1.4 for labels.
- **Hierarchy:** 28–36px section heads, 18–22px card heads, 12px tracked specimen labels. Keep body type outside dense illustration zones.

## 3. Colors

| Token | Value | Use |
|---|---|---|
| Background | `#F6F3EB` | Page and material ground |
| Surface | `#FFFFFF` | Reading panels |
| Ink | `#202329` | Text and strongest contour |
| Muted | `#62666B` | Secondary text |
| Accent | `#AD433B` | Main material color and action |
| Accent 2 | `#426B75` | Contrast detail |

Use Ink or Muted for text on both Background and Surface. Select a readable black or white label on filled actions.

## 4. Spacing

Use an 8px base. Set page gutters to 20px at 360px and 40px at desktop. Keep 32–48px between the artwork and reading copy; use 16–24px inside cards.

## 5. Layout / Grid

One large optical panel plus a steady plain-text information rail. Cap the content width at 1120px. Let the art occupy about 55% of the hero at desktop and stack it above text on mobile.

## 6. Borders

Use 1px solid var(--muted) at 28% opacity for UI panels. Alternate high-contrast bands with changing spacing. Keep decorative outlines inside the artwork rather than around every component.

## 7. Shadows

Use none; use tonal separation and negative space. Any apparent material depth must agree with the actual construction: crisp vector edges; no grain or blur in the optical region.

## 8. Radius

Use 2px on cards and buttons; keep illustration geometry crisp. Avoid radius changes between related components.

## 9. Buttons

Use a plain solid action outside the optical field.

Use a 44px-high primary button in Accent with a readable label and a 2px Ink focus outline offset by 2px. Use a text-only secondary action. Pressed state: translateY(1px), 120ms ease-out.

## 10. Cards

Confine the stripe/ring pattern to one bordered image panel, never a reading panel.

Set cards on Surface with 20–24px padding. The card heading must name the content; art may overlap only the decorative edge. Apply the border and shadow from §§6–7.

## 11. Navigation

Use static geometric markers; no flicker or pattern behind links.

Use a compact brand, 2–4 clear links, and one primary action. Keep the navigation on a plain Surface strip so decorative artwork never obscures labels.

## 12. Imagery

Create original artwork from this process: Use mathematically paced stripes or rings as one bounded focal field. Crisp vector edges; no grain or blur in the optical region. Do not copy an existing museum object or artist's composition.

## 13. Icons

Use one small icon family. Match icon strokes and corners to the style's marks. Alternate high-contrast bands with changing spacing. Give icon-only controls text labels for assistive technology.

## 14. Textures / Patterns

Crisp vector edges; no grain or blur in the optical region. At normal viewing size, texture must support the image without reducing legibility. Keep texture opacity under 8% behind body text.

## 15. Motion

Use 180ms ease-out on controls; illustration stays still. Disable nonessential transitions under `prefers-reduced-motion`. Do not simulate drawing or printing with flashing effects.

## 16. Interactions

Show hover and pressed states on controls. Keep interactive targets separate from the decorative specimen. Use a visible 2px Ink focus outline with 2px offset. Form errors need text as well as color.

## 17. Responsive behavior

At 360–767px, stack art over copy with 20px gutters and 44px tap targets. At 768–1099px, use a 2-column layout only when each column keeps 280px of readable width. At 1100px+, use the full composition. Never crop the signature material rule out of the mobile preview.

## 18. Accessibility

Ink and Muted reach at least 4.5:1, verified against both Background and Surface. Keep body copy on a plain ground, provide alt text only for informative art, use semantic headings, and preserve keyboard focus. Reduce motion to static final states. Adjacent touch targets need 8px separation.

## 19. What to avoid

- Moving flicker, moiré behind body text, or dense full-page patterns.
- Material effects behind small body text
- Decorative marks that imply an action where none exists
- Any artwork copied from the research example

## 20. Quick-start snippet

```css
:root {
  --bg: #F6F3EB;
  --surface: #FFFFFF;
  --ink: #202329;
  --muted: #62666B;
  --accent: #AD433B;
  --accent-2: #426B75;
  --font-display: Helvetica Neue, Arial, sans-serif;
  --font-body: Inter, Arial, sans-serif;
}
.ds-card { background: var(--surface); color: var(--ink); padding: 24px; border-radius: 2px; }
.ds-button { min-height: 44px; background: var(--accent); color: #FFFFFF; padding: 0 20px; }
```

**Research reference:** [Op Art material or technique](https://www.moma.org/collection/terms/op-art). Use it to understand the process; make original art.
