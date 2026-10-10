# Modern Ecommerce Homepage Redesign

**Date:** 2026-10-10  
**Scope:** Redesign existing homepage sections with modern ecommerce principles inspired by Nike and ASOS  
**Approach:** Full redesign of existing structure (Hero, Collections, Products, Newsletter, Footer) with preserved component hierarchy

## Design Principles Selected

Based on exploration, the implementation focuses on:
- **Typography Hierarchy** — Generous headings (48-72px), clear body (14-16px), lots of whitespace
- **Responsive Grid System** — 1 col (mobile) → 2 col (tablet) → 3-4 col (desktop)
- **Color Strategy** — Neutral base (white/grays) + vibrant accent for CTAs
- **Button & CTA Design** — Large, bold buttons (48-56px hero CTA, 40px product CTAs) with high contrast

## Section-by-Section Design Spec

### Hero Section
- **Height:** 70vh on desktop (fills viewport), 60vh on tablet, 50vh on mobile
- **Headline:** 72px font-weight 700, line-height 1.1, centered
- **Subheading:** 18px, color #666, max-width 500px, centered, 16px margin-top
- **CTA Button:** 16px font-weight 600, padding 16px 48px, background #ff6b35 (vibrant accent), white text, border-radius 4px, hover darker
- **Layout:** Image as background or foreground with text overlay, flexbox centered
- **Spacing:** 48px margin-bottom to next section

### Featured Collections Section
- **Title:** 48px font-weight 700, margin-bottom 32px
- **Grid:** 3 columns on desktop, 2 on tablet, 1 on mobile
- **Gap:** 32px between cards
- **Card Height:** Image 300px, padding 20px, border-radius 8px
- **Card Title:** 20px font-weight 600, margin 12px 0
- **Card Description:** 14px color #666, margin-bottom 16px
- **Card Link:** 14px color #ff6b35, font-weight 600, "Explore →" arrow
- **Container Padding:** 40px horizontal, 48px vertical
- **Bottom Margin:** 64px to next section

### New Arrivals Section
- **Title:** 48px font-weight 700, margin-bottom 32px
- **Grid:** 4 columns on desktop, 2 on tablet, 1 on mobile
- **Gap:** 24px between cards
- **Product Card:**
  - Image: 320px height, #f0f0f0 background, 8px border-radius, margin-bottom 16px
  - Name: 16px font-weight 600, margin 12px 0
  - Collection: 13px color #888, margin-bottom 8px
  - Price: 18px font-weight 700 color #222, margin-bottom 16px
  - Button: Full width, 12px padding vertical, 14px font-weight 600, #ff6b35 background, white text
- **Container Padding:** 40px horizontal, 48px vertical
- **Bottom Margin:** 64px to next section

### Newsletter Section
- **Background:** White or subtle #f5f5f5
- **Layout:** Centered, max-width 600px
- **Title:** 48px font-weight 700, margin-bottom 16px
- **Description:** 16px color #666, margin-bottom 32px
- **Form:** Email input 16px, 12px padding vertical, Subscribe button 16px font-weight 600, #ff6b35 background
- **Container Padding:** 64px vertical, 40px horizontal
- **Bottom Margin:** 48px to footer

### Footer Section
- **Background:** #1a1a1a (dark neutral)
- **Text Color:** White
- **Padding:** 48px horizontal, 64px vertical
- **Columns:** 4 columns on desktop, 2 on tablet, 1 on mobile
- **Links:** 14px, hover #ff6b35 (accent color)
- **Copyright:** 12px, margin-top 32px, border-top 1px #333

## Color Tokens (CSS Variables)

```css
--color-white: #ffffff
--color-neutral-50: #f9f9f9
--color-neutral-100: #f5f5f5
--color-neutral-200: #e8e8e8
--color-neutral-300: #d3d3d3
--color-neutral-900: #1a1a1a
--color-text-primary: #222222
--color-text-secondary: #666666
--color-text-tertiary: #888888
--color-accent: #ff6b35
--color-accent-hover: #e55a25
--color-border: #f0f0f0
```

## Typography Rules

| Use | Font-size | Font-weight | Line-height |
|-----|-----------|-------------|-------------|
| Hero Headline (h1) | 72px | 700 | 1.1 |
| Section Title (h2) | 48px | 700 | 1.2 |
| Card Title (h3) | 20px | 600 | 1.3 |
| Product Name (h4) | 16px | 600 | 1.4 |
| Body Large | 18px | 400 | 1.6 |
| Body Regular | 16px | 400 | 1.6 |
| Body Small | 14px | 400 | 1.5 |
| Meta / Tertiary | 13px | 400 | 1.5 |
| Label / Caption | 12px | 600 | 1.4 |

## Spacing Rules

| Element | Padding/Margin |
|---------|-----------------|
| Page Sections (P/M vertical) | 48-64px |
| Section Containers (P horizontal) | 40px |
| Grid Gaps (Collections) | 32px |
| Grid Gaps (Products) | 24px |
| Card Internal Padding | 16-20px |
| Heading Bottom Margin | 16-32px |
| Button Internal Padding (hero) | 16px vertical, 48px horizontal |
| Button Internal Padding (product) | 12px vertical, full-width |

## Button Styling

### Primary Button (Hero, Collections)
- Background: `#ff6b35` (vibrant accent)
- Text: White, 16px, font-weight 600
- Padding: 16px 48px
- Border-radius: 4px
- Hover: #e55a25 (darker accent)
- Transition: 0.2s ease

### Secondary Button (Product "View Product")
- Background: `#ff6b35` (vibrant accent)
- Text: White, 14px, font-weight 600
- Padding: 12px (full-width)
- Border-radius: 4px
- Hover: #e55a25
- Transition: 0.2s ease

### Link (Collection "Explore")
- Color: `#ff6b35` (vibrant accent)
- Text-decoration: None
- Font-weight: 600
- Font-size: 14px
- Hover: underline, darker accent

## Responsive Breakpoints

| Breakpoint | Collections Cols | Products Cols | Newsletter Width |
|------------|-----------------|---------------|------------------|
| Mobile (< 640px) | 1 | 1 | 100% (40px padding) |
| Tablet (640-1024px) | 2 | 2 | 100% (40px padding) |
| Desktop (> 1024px) | 3 | 4 | 600px max-width |

## Files to Modify

1. **`src/app/globals.css`** — Update color tokens, typography scale, spacing utilities, button variants
2. **`tailwind.config.ts`** — Update theme colors (add vibrant accent #ff6b35), typography scale, spacing scale
3. **`src/components/sections/Hero.tsx`** — Redesign layout: 72px headline, new spacing, vibrant CTA
4. **`src/components/sections/FeaturedCollections.tsx`** — 3-col grid, 32px gap, redesigned cards
5. **`src/components/sections/NewArrivals.tsx`** — 4-col responsive grid, 24px gap, bold pricing
6. **`src/components/sections/Newsletter.tsx`** — Centered layout, redesigned form
7. **`src/components/sections/Footer.tsx`** — Dark background, improved spacing and link styling
8. **`src/components/primitives/Button.tsx`** — Add larger sizes, vibrant accent styling
9. **`src/components/primitives/Link.tsx`** — Add accent color variant

## Implementation Order

1. Update design tokens in globals.css and tailwind.config.ts
2. Update Button and Link primitives
3. Redesign Hero section
4. Redesign FeaturedCollections section
5. Redesign NewArrivals section
6. Redesign Newsletter section
7. Redesign Footer section
8. Test responsive behavior on all breakpoints

## Success Criteria

- ✅ Hero section fills 70vh with bold 72px headline
- ✅ All CTAs use vibrant #ff6b35 accent color
- ✅ Typography hierarchy clearly differentiates section levels
- ✅ Grid responsiveness works: 1 col mobile → 2 col tablet → 3-4 col desktop
- ✅ Spacing is generous (32-48px gaps, 48-64px section margins)
- ✅ All buttons and links have hover states
- ✅ Homepage loads and renders correctly at localhost:3000
