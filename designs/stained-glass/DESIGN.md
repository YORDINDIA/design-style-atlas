---
slug: stained-glass
name: "Stained Glass"
description: "Colored translucent panes glow inside heavy lead cames."
category: Handmade & Texture
tags: [glass, lead, light]
related: [mosaic, art-nouveau, marquetry]
preview:
  bg: "#202B34"
  surface: "#34414A"
  ink: "#FFF6DE"
  muted: "#D5D9D1"
  accent: "#DDA463"
  accent2: "#5D95A1"
  display: "Cinzel, Georgia, serif"
  body: "Inter, Arial, sans-serif"
---

# Stained Glass — DESIGN.md

Use this file as the visual direction for a website. The artwork must be original.

## 1. Overall aesthetic

Colored translucent panes glow inside heavy lead cames. Every color plane is bounded by a continuous dark lead network.

- **Material rule:** Subtle pane translucency and uneven glass ripples.
- **Composition rule:** Use a tall arched window as the dominant visual with copy to one side.
- **Mark rule:** Lead seams 4–6px; geometric or botanical pieces that fit exactly.

## 2. Typography

- **Display:** Cinzel, Georgia, serif. Use 48–64px at desktop and 34–42px at 360px.
- **Body:** Inter, Arial, sans-serif, 16px/1.55 for reading and 13px/1.4 for labels.
- **Hierarchy:** 28–36px section heads, 18–22px card heads, 12px tracked specimen labels. Keep body type outside dense illustration zones.

## 3. Colors

| Token | Value | Use |
|---|---|---|
| Background | `#202B34` | Page and material ground |
| Surface | `#34414A` | Reading panels |
| Ink | `#FFF6DE` | Text and strongest contour |
| Muted | `#D5D9D1` | Secondary text |
| Accent | `#DDA463` | Main material color and action |
| Accent 2 | `#5D95A1` | Contrast detail |

Use Ink or Muted for text on both Background and Surface. Select a readable black or white label on filled actions.

## 4. Spacing

Use an 8px base. Set page gutters to 20px at 360px and 40px at desktop. Keep 32–48px between the artwork and reading copy; use 16–24px inside cards.

## 5. Layout / Grid

Use a tall arched window as the dominant visual with copy to one side. Cap the content width at 1120px. Let the art occupy about 55% of the hero at desktop and stack it above text on mobile.

## 6. Borders

Use 1px solid var(--muted) at 28% opacity for UI panels. Lead seams 4–6px; geometric or botanical pieces that fit exactly. Keep decorative outlines inside the artwork rather than around every component.

## 7. Shadows

Use 0 2px 10px rgba(24,24,24,.10) on raised material only. Any apparent material depth must agree with the actual construction: subtle pane translucency and uneven glass ripples.

## 8. Radius

Use 2px on cards and buttons; keep illustration geometry crisp. Avoid radius changes between related components.

## 9. Buttons

Set the action inside one lead-bounded pane; label in high-contrast Ink.

Use a 44px-high primary button in Accent with a readable label and a 2px Ink focus outline offset by 2px. Use a text-only secondary action. Pressed state: translateY(1px), 120ms ease-out.

## 10. Cards

Use arched pane shapes bounded by a continuous 4–6px lead network.

Set cards on Surface with 20–24px padding. The card heading must name the content; art may overlap only the decorative edge. Apply the border and shadow from §§6–7.

## 11. Navigation

Use a plain dark header so colored panes do not interrupt link text.

Use a compact brand, 2–4 clear links, and one primary action. Keep the navigation on a plain Surface strip so decorative artwork never obscures labels.

## 12. Imagery

Create original artwork from this process: Every color plane is bounded by a continuous dark lead network. Subtle pane translucency and uneven glass ripples. Do not copy an existing museum object or artist's composition.

## 13. Icons

Use one small icon family. Match icon strokes and corners to the style's marks. Lead seams 4–6px; geometric or botanical pieces that fit exactly. Give icon-only controls text labels for assistive technology.

## 14. Textures / Patterns

Subtle pane translucency and uneven glass ripples. At normal viewing size, texture must support the image without reducing legibility. Keep texture opacity under 8% behind body text.

## 15. Motion

Use 220ms ease-out for a 2px control lift; never animate the material texture itself. Disable nonessential transitions under `prefers-reduced-motion`. Do not simulate drawing or printing with flashing effects.

## 16. Interactions

Show hover and pressed states on controls. Keep interactive targets separate from the decorative specimen. Use a visible 2px Ink focus outline with 2px offset. Form errors need text as well as color.

## 17. Responsive behavior

At 360–767px, stack art over copy with 20px gutters and 44px tap targets. At 768–1099px, use a 2-column layout only when each column keeps 280px of readable width. At 1100px+, use the full composition. Never crop the signature material rule out of the mobile preview.

## 18. Accessibility

Ink and Muted reach at least 4.5:1, verified against both Background and Surface. Keep body copy on a plain ground, provide alt text only for informative art, use semantic headings, and preserve keyboard focus. Reduce motion to static final states. Adjacent touch targets need 8px separation.

## 19. What to avoid

- Free-floating color shards with no lead structure.
- Material effects behind small body text
- Decorative marks that imply an action where none exists
- Any artwork copied from the research example

## 20. Quick-start snippet

```css
:root {
  --bg: #202B34;
  --surface: #34414A;
  --ink: #FFF6DE;
  --muted: #D5D9D1;
  --accent: #DDA463;
  --accent-2: #5D95A1;
  --font-display: Cinzel, Georgia, serif;
  --font-body: Inter, Arial, sans-serif;
}
.ds-card { background: var(--surface); color: var(--ink); padding: 24px; border-radius: 2px; }
.ds-button { min-height: 44px; background: var(--accent); color: #000000; padding: 0 20px; }
```

**Research reference:** [Stained Glass material or technique](https://www.vam.ac.uk/articles/stained-glass-an-introduction). Use it to understand the process; make original art.
