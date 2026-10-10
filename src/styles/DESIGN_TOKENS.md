# Design Tokens Reference

This document defines all design tokens used throughout the ecommerce application. Built on CSS custom properties for flexibility and consistency.

## Color Tokens

### Neutral Palette
Luxury grayscale for primary text, backgrounds, and surfaces.

```
--color-neutral-50:   rgb(248 248 248)   /* Lightest */
--color-neutral-100:  rgb(244 244 245)
--color-neutral-200:  rgb(228 228 231)
--color-neutral-300:  rgb(212 212 216)
--color-neutral-400:  rgb(161 161 170)
--color-neutral-500:  rgb(113 113 122)
--color-neutral-600:  rgb(82 82 91)
--color-neutral-700:  rgb(63 63 70)
--color-neutral-800:  rgb(39 39 42)
--color-neutral-900:  rgb(24 24 27)
--color-neutral-950:  rgb(9 9 11)      /* Darkest */
```

### Accent Palette
Refined gold/bronze for premium interactions and highlights.

```
--color-accent-50:    rgb(254 250 242)
--color-accent-100:   rgb(252 244 227)
--color-accent-200:   rgb(247 231 197)
--color-accent-300:   rgb(239 213 154)
--color-accent-400:   rgb(230 182 92)
--color-accent-500:   rgb(217 152 52)   /* Primary accent */
--color-accent-600:   rgb(180 113 31)   /* Used for CTAs */
--color-accent-700:   rgb(146 89 22)
--color-accent-900:   rgb(78 47 12)
```

### Surface Colors
Container and card backgrounds.

```
--color-surface-bg:       rgb(255 255 255)   /* Main background */
--color-surface-elevated: rgb(248 248 248)   /* Cards, elevated surfaces */
--color-surface-border:   rgb(228 228 231)   /* Subtle borders */
```

### Semantic Colors
Status and feedback colors.

```
--color-success: rgb(34 197 94)     /* Green */
--color-error:   rgb(239 68 68)     /* Red */
--color-warning: rgb(245 158 11)    /* Amber */
```

### Text Colors
For consistent text hierarchy.

```
--color-text-primary:   rgb(9 9 11)       /* Main text */
--color-text-secondary: rgb(113 113 122)  /* Supporting text */
--color-text-tertiary:  rgb(161 161 170)  /* Disabled, hints */
--color-text-inverse:   rgb(255 255 255)  /* On dark backgrounds */
```

## Typography

### Font Scale
Built on a refined hierarchy for luxury presentation.

```
XS:   0.75rem  (12px)  →  line-height: 1rem
SM:   0.875rem (14px)  →  line-height: 1.25rem
Base: 1rem     (16px)  →  line-height: 1.5rem
LG:   1.125rem (18px)  →  line-height: 1.75rem
XL:   1.25rem  (20px)  →  line-height: 1.75rem
2XL:  1.5rem   (24px)  →  line-height: 2rem
3XL:  1.875rem (30px)  →  line-height: 2.25rem
4XL:  2.25rem  (36px)  →  line-height: 2.5rem
```

### Letter Spacing
Refined spacing for premium typography.

```
--letter-spacing-tight:  -0.02em   /* Headings */
--letter-spacing-normal:  0em      /* Body text */
--letter-spacing-wide:    0.05em   /* Labels, CTAs */
```

## Spacing Scale (8px Base)

All spacing values are multiples of 8px for consistency.

```
0.5:  0.25rem (2px)
1:    0.5rem  (4px)
1.5:  0.75rem (6px)
2:    1rem    (8px)    /* Base unit */
3:    1.5rem  (12px)
4:    2rem    (16px)
5:    2.5rem  (20px)
6:    3rem    (24px)
8:    4rem    (32px)
10:   5rem    (40px)
12:   6rem    (48px)
16:   8rem    (64px)
20:   10rem   (80px)
24:   12rem   (96px)
```

## Border Radius

```
--radius-sm:   0.25rem (2px)    /* Subtle, inputs */
--radius-base: 0.5rem  (4px)    /* Buttons, cards */
--radius-md:   0.75rem (6px)    /* Larger elements */
--radius-lg:   1rem    (8px)    /* Full sections */
--radius-full: 9999px           /* Pills, avatars */
```

## Transitions

Smooth, refined motion for interactions.

```
--transition-fast:  150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base:  200ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow:  300ms cubic-bezier(0.4, 0, 0.2, 1)
```

The easing function `cubic-bezier(0.4, 0, 0.2, 1)` provides smooth acceleration/deceleration.

## Containers

```
--container-max-width:     1280px   /* Full page width */
--container-content-width: 1024px   /* Narrower content area */
```

### Responsive Padding
Containers adjust padding at breakpoints:

```
Desktop:  px-4  (1rem)
Tablet:   px-4  (1rem)
Mobile:   px-3  (0.75rem)
```

## Component Classes

### Buttons
```
.btn              /* Base button styles */
.btn-primary      /* Dark background, white text */
.btn-secondary    /* Light background, dark text */
.btn-ghost        /* Transparent, border only */
.btn-accent       /* Gold/bronze background */
.btn-sm           /* Small padding */
.btn-lg           /* Large padding */
.btn-full         /* 100% width */
```

### Links
```
a                 /* Default gold accent color */
.link-subtle      /* Inherits text color, underline on hover */
```

### Layout
```
.container        /* Full width with max-width, responsive padding */
.container-content /* Narrower content container */
.grid             /* CSS Grid with responsive columns */
.grid-cols-{1,2,3,4,12} /* Column counts */
```

### Text Utilities
```
.text-primary     /* Primary text color */
.text-secondary   /* Secondary/supporting text */
.text-tertiary    /* Disabled/hint text */
.text-center      /* Center alignment */
```

### Borders & Dividers
```
.border-subtle    /* Subtle borders */
.border-base      /* Standard borders */
.divider          /* Horizontal divider line */
```

## Dark Mode Support

All colors automatically switch in dark mode via `@media (prefers-color-scheme: dark)`. The design maintains contrast and luxury feel in both modes.

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Color values inverted/adjusted */
  }
}
```

## Usage Examples

### Primary Button
```tsx
<Button variant="primary" size="lg">
  Shop Now
</Button>
```

### Typography Hierarchy
```tsx
<h1>Main Heading (4xl)</h1>
<h2>Section Title (3xl)</h2>
<h3>Subsection (2xl)</h3>
<p>Body text (base)</p>
<small>Supporting text (sm)</small>
```

### Responsive Grid
```tsx
<Grid cols={4}>  {/* 4 columns on desktop */}
  <Card>Product 1</Card>
  <Card>Product 2</Card>
  <Card>Product 3</Card>
  <Card>Product 4</Card>
</Grid>
{/* Automatically 2 columns on tablet, 1 on mobile */}
```

### Spacing for Premium Layouts
```tsx
<section className="py-20 md:py-32">
  {/* 5rem padding on desktop, 8rem on large screens */}
</section>
```

## Design Principles

1. **Luxury Minimalism**: Generous whitespace, clean typography
2. **High Contrast**: Bold hierarchy between elements
3. **Refined Borders**: Subtle, not heavy
4. **Premium Motion**: Smooth transitions and easing
5. **Responsive by Default**: Breakpoints at 640px (mobile), 768px (tablet), 1024px (desktop)
6. **Accessibility**: Focus states, color contrast, semantic HTML

## Responsive Breakpoints

```
Mobile:  < 640px
Tablet:  640px - 768px
Desktop: 768px - 1024px
Large:   > 1024px
```

Components automatically adapt at these breakpoints using Tailwind's responsive modifiers.
