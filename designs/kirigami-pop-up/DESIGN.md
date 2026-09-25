---
slug: kirigami-pop-up
name: "Kirigami Pop-Up"
description: "Cut-and-fold paper structures rise from a flat base."
category: Handmade & Texture
tags: [paper, cut, fold]
related: [origami-geometry, paper-cut-diorama, papercut]
preview:
  bg: "#F7F1E8"
  surface: "#FFFDF9"
  ink: "#2D2B31"
  muted: "#6D6670"
  accent: "#B45F76"
  accent2: "#547F83"
  display: "Space Grotesk, Arial, sans-serif"
  body: "Inter, Arial, sans-serif"
---

# Kirigami Pop-Up — DESIGN.md

Use this file as the visual direction for a website. The artwork must be original.

## 1. Overall aesthetic

Cut-and-fold paper structures rise from a flat base. Show the cut seam, fold hinge, and raised plane in one clear pop-up mechanism.

- **Material rule:** Paper grain on the base and hard fold creases on raised tabs.
- **Composition rule:** Use a central opened-card stage; place controls outside the fold zone.
- **Mark rule:** Draw slit lines and valley/mountain folds with distinct weights.

## 2. Typography

- **Display:** Space Grotesk, Arial, sans-serif. Use 48–64px at desktop and 34–42px at 360px.
- **Body:** Inter, Arial, sans-serif, 16px/1.55 for reading and 13px/1.4 for labels.
- **Hierarchy:** 28–36px section heads, 18–22px card heads, 12px tracked specimen labels. Keep body type outside dense illustration zones.

## 3. Colors

| Token | Value | Use |
|---|---|---|
| Background | `#F7F1E8` | Page and material ground |
| Surface | `#FFFDF9` | Reading panels |
| Ink | `#2D2B31` | Text and strongest contour |
| Muted | `#6D6670` | Secondary text |
| Accent | `#B45F76` | Main material color and action |
| Accent 2 | `#547F83` | Contrast detail |

Use Ink or Muted for text on both Background and Surface. Select a readable black or white label on filled actions.

## 4. Spacing

Use an 8px base. Set page gutters to 20px at 360px and 40px at desktop. Keep 32–48px between the artwork and reading copy; use 16–24px inside cards.

## 5. Layout / Grid

Use a central opened-card stage; place controls outside the fold zone. Cap the content width at 1120px. Let the art occupy about 55% of the hero at desktop and stack it above text on mobile.

## 6. Borders

Use 1px solid var(--ink) at 24% opacity for UI panels. Draw slit lines and valley/mountain folds with distinct weights. Keep decorative outlines inside the artwork rather than around every component.

## 7. Shadows

Use 0 2px 10px rgba(24,24,24,.10) on raised material only. Any apparent material depth must agree with the actual construction: paper grain on the base and hard fold creases on raised tabs.

## 8. Radius

Use 12px on cards; 4px on material shapes; 999px only on small action pills. Avoid radius changes between related components.

## 9. Buttons

Give the action a narrow slit-like top rule and a hinged accent flap.

Use a 44px-high primary button in Accent with a readable label and a 2px Ink focus outline offset by 2px. Use a text-only secondary action. Pressed state: translateY(1px), 120ms ease-out.

## 10. Cards

Keep the base sheet visible behind any raised panel; hinge the raised panel along one edge.

Set cards on Surface with 20–24px padding. The card heading must name the content; art may overlap only the decorative edge. Apply the border and shadow from §§6–7.

## 11. Navigation

Use small cut notches as separators, not floating decorative tabs.

Use a compact brand, 2–4 clear links, and one primary action. Keep the navigation on a plain Surface strip so decorative artwork never obscures labels.

## 12. Imagery

Create original artwork from this process: Show the cut seam, fold hinge, and raised plane in one clear pop-up mechanism. Paper grain on the base and hard fold creases on raised tabs. Do not copy an existing museum object or artist's composition.

## 13. Icons

Use one small icon family. Match icon strokes and corners to the style's marks. Draw slit lines and valley/mountain folds with distinct weights. Give icon-only controls text labels for assistive technology.

## 14. Textures / Patterns

Paper grain on the base and hard fold creases on raised tabs. At normal viewing size, texture must support the image without reducing legibility. Keep texture opacity under 8% behind body text.

## 15. Motion

Use 220ms ease-out for a 2px control lift; never animate the material texture itself. Disable nonessential transitions under `prefers-reduced-motion`. Do not simulate drawing or printing with flashing effects.

## 16. Interactions

Show hover and pressed states on controls. Keep interactive targets separate from the decorative specimen. Use a visible 2px Ink focus outline with 2px offset. Form errors need text as well as color.

## 17. Responsive behavior

At 360–767px, stack art over copy with 20px gutters and 44px tap targets. At 768–1099px, use a 2-column layout only when each column keeps 280px of readable width. At 1100px+, use the full composition. Never crop the signature material rule out of the mobile preview.

## 18. Accessibility

Ink and Muted reach at least 4.5:1, verified against both Background and Surface. Keep body copy on a plain ground, provide alt text only for informative art, use semantic headings, and preserve keyboard focus. Reduce motion to static final states. Adjacent touch targets need 8px separation.

## 19. What to avoid

- Floating 3D pieces with no attached paper base.
- Material effects behind small body text
- Decorative marks that imply an action where none exists
- Any artwork copied from the research example

## 20. Quick-start snippet

```css
:root {
  --bg: #F7F1E8;
  --surface: #FFFDF9;
  --ink: #2D2B31;
  --muted: #6D6670;
  --accent: #B45F76;
  --accent-2: #547F83;
  --font-display: Space Grotesk, Arial, sans-serif;
  --font-body: Inter, Arial, sans-serif;
}
.ds-card { background: var(--surface); color: var(--ink); padding: 24px; border-radius: 12px; }
.ds-button { min-height: 44px; background: var(--accent); color: #000000; padding: 0 20px; }
```

**Research reference:** [Kirigami Pop-Up material or technique](https://www.cooperhewitt.org/2018/04/20/kirigami-intricacies-more-than-folding-paper/). Use it to understand the process; make original art.
