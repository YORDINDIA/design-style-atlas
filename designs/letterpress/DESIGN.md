---
slug: letterpress
name: "Letterpress"
description: "Type and simple ornaments print with pressure and imperfect ink."
category: Editorial & Print
tags: [type, print, impression]
related: [newspaper, linocut-print, risograph]
preview:
  bg: "#F5EFE4"
  surface: "#FFFDF6"
  ink: "#2F2A27"
  muted: "#69615C"
  accent: "#A4543F"
  accent2: "#536D6B"
  display: "Bodoni Moda, Georgia, serif"
  body: "Inter, Arial, sans-serif"
---

# Letterpress — DESIGN.md

Use this file as the visual direction for a website. The artwork must be original.

## 1. Overall aesthetic

Type and simple ornaments print with pressure and imperfect ink. Let large type blocks, rule lines, and impression dents define hierarchy.

- **Material rule:** Subtle ink spread and deboss depth in thick cotton paper.
- **Composition rule:** Use a typographic poster stack with a marginal edition number.
- **Mark rule:** Small misregistration and pressure edges on large letterforms.

## 2. Typography

- **Display:** Bodoni Moda, Georgia, serif. Use 48–64px at desktop and 34–42px at 360px.
- **Body:** Inter, Arial, sans-serif, 16px/1.55 for reading and 13px/1.4 for labels.
- **Hierarchy:** 28–36px section heads, 18–22px card heads, 12px tracked specimen labels. Keep body type outside dense illustration zones.

## 3. Colors

| Token | Value | Use |
|---|---|---|
| Background | `#F5EFE4` | Page and material ground |
| Surface | `#FFFDF6` | Reading panels |
| Ink | `#2F2A27` | Text and strongest contour |
| Muted | `#69615C` | Secondary text |
| Accent | `#A4543F` | Main material color and action |
| Accent 2 | `#536D6B` | Contrast detail |

Use Ink or Muted for text on both Background and Surface. Select a readable black or white label on filled actions.

## 4. Spacing

Use an 8px base. Set page gutters to 20px at 360px and 40px at desktop. Keep 32–48px between the artwork and reading copy; use 16–24px inside cards.

## 5. Layout / Grid

Use a typographic poster stack with a marginal edition number. Cap the content width at 1120px. Let the art occupy about 55% of the hero at desktop and stack it above text on mobile.

## 6. Borders

Use 1px solid var(--ink) at 24% opacity for UI panels. Small misregistration and pressure edges on large letterforms. Keep decorative outlines inside the artwork rather than around every component.

## 7. Shadows

Use none; use tonal separation and negative space. Any apparent material depth must agree with the actual construction: subtle ink spread and deboss depth in thick cotton paper.

## 8. Radius

Use 6px on cards; 4px on buttons; no arbitrary large pills. Avoid radius changes between related components.

## 9. Buttons

Use a broad typographic action with a 1px offset ink impression.

Use a 44px-high primary button in Accent with a readable label and a 2px Ink focus outline offset by 2px. Use a text-only secondary action. Pressed state: translateY(1px), 120ms ease-out.

## 10. Cards

Treat cards as small print sheets with a rule, edition number, and debossed heading.

Set cards on Surface with 20–24px padding. The card heading must name the content; art may overlap only the decorative edge. Apply the border and shadow from §§6–7.

## 11. Navigation

Use upper-case type and one heavy rule; keep icon chrome out.

Use a compact brand, 2–4 clear links, and one primary action. Keep the navigation on a plain Surface strip so decorative artwork never obscures labels.

## 12. Imagery

Create original artwork from this process: Let large type blocks, rule lines, and impression dents define hierarchy. Subtle ink spread and deboss depth in thick cotton paper. Do not copy an existing museum object or artist's composition.

## 13. Icons

Use one small icon family. Match icon strokes and corners to the style's marks. Small misregistration and pressure edges on large letterforms. Give icon-only controls text labels for assistive technology.

## 14. Textures / Patterns

Subtle ink spread and deboss depth in thick cotton paper. At normal viewing size, texture must support the image without reducing legibility. Keep texture opacity under 8% behind body text.

## 15. Motion

Use 220ms ease-out for a 2px control lift; never animate the material texture itself. Disable nonessential transitions under `prefers-reduced-motion`. Do not simulate drawing or printing with flashing effects.

## 16. Interactions

Show hover and pressed states on controls. Keep interactive targets separate from the decorative specimen. Use a visible 2px Ink focus outline with 2px offset. Form errors need text as well as color.

## 17. Responsive behavior

At 360–767px, stack art over copy with 20px gutters and 44px tap targets. At 768–1099px, use a 2-column layout only when each column keeps 280px of readable width. At 1100px+, use the full composition. Never crop the signature material rule out of the mobile preview.

## 18. Accessibility

Ink and Muted reach at least 4.5:1, verified against both Background and Surface. Keep body copy on a plain ground, provide alt text only for informative art, use semantic headings, and preserve keyboard focus. Reduce motion to static final states. Adjacent touch targets need 8px separation.

## 19. What to avoid

- Modern glass cards or loose sketch lettering.
- Material effects behind small body text
- Decorative marks that imply an action where none exists
- Any artwork copied from the research example

## 20. Quick-start snippet

```css
:root {
  --bg: #F5EFE4;
  --surface: #FFFDF6;
  --ink: #2F2A27;
  --muted: #69615C;
  --accent: #A4543F;
  --accent-2: #536D6B;
  --font-display: Bodoni Moda, Georgia, serif;
  --font-body: Inter, Arial, sans-serif;
}
.ds-card { background: var(--surface); color: var(--ink); padding: 24px; border-radius: 6px; }
.ds-button { min-height: 44px; background: var(--accent); color: #FFFFFF; padding: 0 20px; }
```

**Research reference:** [Letterpress material or technique](https://guides.loc.gov/russell-maret/glossary). Use it to understand the process; make original art.
