# Design System Quick Reference

**For detailed info, see [DESIGN_TOKENS.md](src/styles/DESIGN_TOKENS.md) and [DESIGN_SYSTEM_IMPLEMENTATION.md](DESIGN_SYSTEM_IMPLEMENTATION.md)**

## Components Quick Import

```tsx
import {
  Button,      // Button with variants: primary, secondary, ghost, accent
  Container,   // Layout container (full or content width)
  Link,        // Next.js link with default or subtle variant
  Grid,        // Responsive grid system
  Card,        // Card container with options
  Divider,     // Horizontal or vertical separator
} from "@/components/primitives";
```

## Color Tokens Quick Reference

```css
/* Neutral grayscale (primary text & backgrounds) */
var(--color-neutral-50)   /* Lightest background */
var(--color-neutral-900)  /* Primary text */
var(--color-neutral-950)  /* Darkest text/CTAs */

/* Accent palette (premium interactions) */
var(--color-accent-600)   /* Primary accent (CTAs) */
var(--color-accent-500)   /* Light accent highlights */

/* Semantic colors */
var(--color-success)      /* Green */
var(--color-error)        /* Red */
var(--color-warning)      /* Amber */

/* Text colors */
var(--color-text-primary)     /* Main text */
var(--color-text-secondary)   /* Supporting text */
var(--color-text-tertiary)    /* Disabled/hints */
```

## Typography Classes

```tsx
<h1>Main Heading (4xl, bold)</h1>
<h2>Section Title (3xl)</h2>
<h3>Subsection (2xl)</h3>
<p>Body text (base)</p>
<p className="text-sm">Small text</p>
<small>Extra small supporting text</small>

/* Custom text sizes */
<p className="text-lg font-bold">Large bold</p>
<p className="text-secondary">Secondary color</p>
<p className="text-tertiary">Tertiary color</p>
```

## Spacing Classes

```tsx
/* Use Tailwind spacing utilities (8px base) */
<div className="p-4">      {/* 1rem padding */}
<div className="mb-6">     {/* 1.5rem margin-bottom */}
<div className="gap-4">    {/* 1rem gap in flex/grid */}

/* Responsive spacing */
<section className="py-16 md:py-24 lg:py-32">
  {/* py-16 on mobile, py-24 tablet, py-32 desktop */}
</section>
```

## Button Examples

```tsx
/* Primary button - use for main CTAs */
<Button variant="primary" size="lg">
  Shop Now
</Button>

/* Secondary button - alternative actions */
<Button variant="secondary">
  Learn More
</Button>

/* Ghost button - subtle actions */
<Button variant="ghost">
  Skip
</Button>

/* Accent button - premium/featured actions */
<Button variant="accent" fullWidth>
  Add to Cart
</Button>

/* Button states */
<Button disabled>Disabled</Button>
<Button type="submit">Submit Form</Button>
<Button onClick={() => alert("Clicked!")}>Click Me</Button>
```

## Container Examples

```tsx
/* Full width container (max 1280px) */
<Container>
  <h1>Welcome</h1>
</Container>

/* Content container (max 1024px, narrower) */
<Container variant="content">
  <article>Article content</article>
</Container>

/* Custom styling */
<Container className="bg-neutral-50">
  Styled container
</Container>
```

## Grid Examples

```tsx
/* 4-column grid, auto-responsive */
<Grid cols={4}>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
  <Card>Item 4</Card>
</Grid>
{/* Desktop: 4 cols | Tablet: 2 cols | Mobile: 1 col */}

/* 3-column grid with spacious gap */
<Grid cols={3} gap="spacious">
  <Card>Large</Card>
  <Card>Gap</Card>
  <Card>Between</Card>
</Grid>

/* 12-column grid for fine control */
<Grid cols={12}>
  <div className="col-span-6">Half width</div>
  <div className="col-span-6">Half width</div>
</Grid>
```

## Card Examples

```tsx
/* Basic card */
<Card>
  <h3>Title</h3>
  <p>Content</p>
</Card>

/* Clickable card */
<Card clickable onClick={() => navigate("/product")}>
  <img src="..." alt="Product" />
  <h3>Product</h3>
</Card>

/* Elevated card (shadow) */
<Card elevated>
  <h3>Featured</h3>
  <p>With shadow</p>
</Card>

/* Card without border */
<Card bordered={false}>
  <h3>Clean</h3>
</Card>
```

## Divider Examples

```tsx
/* Horizontal divider */
<Divider />

/* Subtle divider (lighter) */
<Divider variant="subtle" />

/* Vertical divider */
<div className="flex gap-4">
  <div>Left</div>
  <Divider orientation="vertical" />
  <div>Right</div>
</div>
```

## Link Examples

```tsx
/* Default link (gold accent color) */
<Link href="/products">
  Shop Products
</Link>

/* Subtle link (inherits color, underline on hover) */
<Link href="/about" variant="subtle">
  About Us
</Link>

/* Custom styling */
<Link href="/contact" className="text-lg font-semibold">
  Contact
</Link>
```

## Common Patterns

### Product Grid Section
```tsx
<section className="py-20">
  <Container>
    <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
    <Grid cols={4}>
      {products.map(product => (
        <Card key={product.id} clickable>
          <img src={product.image} alt={product.name} />
          <h3 className="mt-4 font-semibold">{product.name}</h3>
          <p className="text-secondary mt-2">${product.price}</p>
          <Button variant="accent" fullWidth className="mt-4">
            Shop
          </Button>
        </Card>
      ))}
    </Grid>
  </Container>
</section>
```

### Hero Section
```tsx
<section className="bg-neutral-50 py-32">
  <Container>
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Amazing Products
      </h1>
      <p className="text-lg text-secondary mb-8">
        Discover our premium collection
      </p>
      <div className="flex gap-4 justify-center">
        <Button variant="primary" size="lg">Shop Now</Button>
        <Button variant="secondary" size="lg">Learn More</Button>
      </div>
    </div>
  </Container>
</section>
```

### Navigation Bar
```tsx
<header className="border-b border-surface-border">
  <Container>
    <nav className="flex items-center justify-between py-4">
      <Link href="/" className="text-xl font-bold">
        Logo
      </Link>
      <div className="flex gap-8">
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <Button variant="primary" size="sm">Account</Button>
    </nav>
  </Container>
</header>
<Divider />
```

### Empty State
```tsx
<div className="text-center py-16">
  <h3 className="text-2xl font-semibold mb-4">No Results Found</h3>
  <p className="text-secondary mb-8">
    Try adjusting your filters or search terms
  </p>
  <Button variant="secondary" onClick={resetFilters}>
    Reset Filters
  </Button>
</div>
```

## Responsive Modifiers (Tailwind)

```tsx
/* Breakpoint-specific styling */
<div className="
  p-3 md:p-4 lg:p-6        /* Responsive padding */
  text-base md:text-lg      /* Responsive text size */
  mb-4 md:mb-8              /* Responsive margin */
">
  Content
</div>

/* Hide/show at breakpoints */
<div className="hidden md:block">  {/* Hide on mobile, show on tablet+ */}
  Desktop only content
</div>

<div className="block md:hidden">  {/* Show on mobile, hide on tablet+ */}
  Mobile only content
</div>
```

## CSS Variables Reference

```css
/* Use directly in CSS */
.custom-element {
  background-color: rgb(var(--color-neutral-50));
  padding: var(--spacing-4);
  border-radius: var(--radius-base);
  transition: var(--transition-base);
  border-color: rgb(var(--color-surface-border));
}
```

## Dark Mode

All components automatically support dark mode via `@media (prefers-color-scheme: dark)`. No component changes needed—purely CSS-based color switching.

## Accessibility

- All buttons support `:disabled` state
- All interactive elements have `:focus-visible` outlines
- Links have proper `:visited` state
- Dividers have `role="separator"`
- `sr-only` class hides content from screen readers but keeps it accessible

## Performance Tips

1. Use primitives for consistency (less CSS bloat)
2. Leverage CSS custom properties (calculated once)
3. Grid auto-responds (no media queries needed)
4. Tailwind purges unused styles
5. All transitions use GPU-accelerated `cubic-bezier` easing

## File Locations

- **Styles**: `src/app/globals.css` - All design system CSS
- **Components**: `src/components/primitives/` - React components
- **Reference**: `src/styles/DESIGN_TOKENS.md` - Detailed tokens
- **Guide**: `DESIGN_SYSTEM_IMPLEMENTATION.md` - Full implementation guide

---

**Questions?** See [DESIGN_TOKENS.md](src/styles/DESIGN_TOKENS.md) for comprehensive documentation.
