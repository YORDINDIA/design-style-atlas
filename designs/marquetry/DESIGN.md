---
slug: marquetry
name: "Marquetry"
description: "Fitted wood veneers create a precise picture from grain and tone."
category: Handmade & Texture
tags: [wood, veneer, inlay]
related: [mosaic, art-deco, heritage-classic]
preview:
  bg: "#EEE7DA"
  surface: "#FBF8F0"
  ink: "#302B26"
  muted: "#685F57"
  accent: "#986643"
  accent2: "#60715A"
  display: "Cormorant Garamond, Georgia, serif"
  body: "Inter, Arial, sans-serif"
---

# Marquetry — DESIGN.md

Use this file as the visual direction for a website. The artwork must be original.

## 1. Overall aesthetic

Fitted wood veneers create a precise picture from grain and tone. Use adjacent veneer pieces with no grout; rotate grain to model the form.

- **Material rule:** Subtle wood grain runs in different directions across fitted pieces.
- **Composition rule:** Frame a geometric inlay panel with restrained object-label typography.
- **Mark rule:** Use exact chamfered seams and alternating light/dark veneer strips.

## 2. Typography

- **Display:** Cormorant Garamond, Georgia, serif. Use 48–64px at desktop and 34–42px at 360px.
- **Body:** Inter, Arial, sans-serif, 16px/1.55 for reading and 13px/1.4 for labels.
- **Hierarchy:** 28–36px section heads, 18–22px card heads, 12px tracked specimen labels. Keep body type outside dense illustration zones.

## 3. Colors

| Token | Value | Use |
|---|---|---|
| Background | `#EEE7DA` | Page and material ground |
| Surface | `#FBF8F0` | Reading panels |
| Ink | `#302B26` | Text and strongest contour |
| Muted | `#685F57` | Secondary text |
| Accent | `#986643` | Main material color and action |
| Accent 2 | `#60715A` | Contrast detail |

Use Ink or Muted for text on both Background and Surface. Select a readable black or white label on filled actions.

## 4. Spacing

Use an 8px base. Set page gutters to 20px at 360px and 40px at desktop. Keep 32–48px between the artwork and reading copy; use 16–24px inside cards.

## 5. Layout / Grid

Frame a geometric inlay panel with restrained object-label typography. Cap the content width at 1120px. Let the art occupy about 55% of the hero at desktop and stack it above text on mobile.

## 6. Borders

Use 1px solid var(--muted) at 28% opacity for UI panels. Use exact chamfered seams and alternating light/dark veneer strips. Keep decorative outlines inside the artwork rather than around every component.

## 7. Shadows

Use 0 2px 10px rgba(24,24,24,.10) on raised material only. Any apparent material depth must agree with the actual construction: subtle wood grain runs in different directions across fitted pieces.

## 8. Radius

Use 2px on cards and buttons; keep illustration geometry crisp. Avoid radius changes between related components.

## 9. Buttons

Use a crisp rectangular veneer tab with two wood tones and no grout.

Use a 44px-high primary button in Accent with a readable label and a 2px Ink focus outline offset by 2px. Use a text-only secondary action. Pressed state: translateY(1px), 120ms ease-out.

## 10. Cards

Make a fitted geometric inlay border with grain direction changing per piece.

Set cards on Surface with 20–24px padding. The card heading must name the content; art may overlap only the decorative edge. Apply the border and shadow from §§6–7.

## 11. Navigation

Use a single wood-grain strip under the active link.

Use a compact brand, 2–4 clear links, and one primary action. Keep the navigation on a plain Surface strip so decorative artwork never obscures labels.

## 12. Imagery

Create original artwork from this process: Use adjacent veneer pieces with no grout; rotate grain to model the form. Subtle wood grain runs in different directions across fitted pieces. Do not copy an existing museum object or artist's composition.

## 13. Icons

Use one small icon family. Match icon strokes and corners to the style's marks. Use exact chamfered seams and alternating light/dark veneer strips. Give icon-only controls text labels for assistive technology.

## 14. Textures / Patterns

Subtle wood grain runs in different directions across fitted pieces. At normal viewing size, texture must support the image without reducing legibility. Keep texture opacity under 8% behind body text.

## 15. Motion

Use 220ms ease-out for a 2px control lift; never animate the material texture itself. Disable nonessential transitions under `prefers-reduced-motion`. Do not simulate drawing or printing with flashing effects.

## 16. Interactions

Show hover and pressed states on controls. Keep interactive targets separate from the decorative specimen. Use a visible 2px Ink focus outline with 2px offset. Form errors need text as well as color.

## 17. Responsive behavior

At 360–767px, stack art over copy with 20px gutters and 44px tap targets. At 768–1099px, use a 2-column layout only when each column keeps 280px of readable width. At 1100px+, use the full composition. Never crop the signature material rule out of the mobile preview.

## 18. Accessibility

Ink and Muted reach at least 4.5:1, verified against both Background and Surface. Keep body copy on a plain ground, provide alt text only for informative art, use semantic headings, and preserve keyboard focus. Reduce motion to static final states. Adjacent touch targets need 8px separation.

## 19. What to avoid

- Mosaic grout, stitched fabric, or heavy bevels.
- Material effects behind small body text
- Decorative marks that imply an action where none exists
- Any artwork copied from the research example

## 20. Quick-start snippet

```css
:root {
  --bg: #EEE7DA;
  --surface: #FBF8F0;
  --ink: #302B26;
  --muted: #685F57;
  --accent: #986643;
  --accent-2: #60715A;
  --font-display: Cormorant Garamond, Georgia, serif;
  --font-body: Inter, Arial, sans-serif;
}
.ds-card { background: var(--surface); color: var(--ink); padding: 24px; border-radius: 2px; }
.ds-button { min-height: 44px; background: var(--accent); color: #FFFFFF; padding: 0 20px; }
```

**Research reference:** [Marquetry material or technique](https://www.metmuseum.org/art/collection/search/206490). Use it to understand the process; make original art.
