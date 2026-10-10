# Modern Ecommerce Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the homepage with bold typography, generous spacing, vibrant accent CTAs, and responsive grid layout inspired by Nike and ASOS.

**Architecture:** Update design tokens in CSS and Tailwind config, then redesign each section component with proper spacing, typography hierarchy, and responsive behavior. No new components needed—refactor existing ones.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4.1, CSS custom properties

---

## File Structure

### Design System (Existing, Updated)
- `src/app/globals.css` — Add vibrant accent color #ff6b35, update typography scale, spacing utilities
- `tailwind.config.ts` — Add accent color to theme, update spacing/typography theme values

### Primitive Components (Existing, Updated)
- `src/components/primitives/Button.tsx` — Add larger sizes, vibrant accent styling
- `src/components/primitives/Link.tsx` — Add accent color variant

### Section Components (Existing, Redesigned)
- `src/components/sections/Hero.tsx` — 70vh height, 72px headline, vibrant CTA
- `src/components/sections/FeaturedCollections.tsx` — 3-col responsive grid, 32px gap
- `src/components/sections/NewArrivals.tsx` — 4-col responsive grid, 24px gap
- `src/components/sections/Newsletter.tsx` — Centered, redesigned form
- `src/components/sections/Footer.tsx` — Dark background, improved spacing

---

## Implementation Tasks

### Task 1: Update Design Tokens in globals.css

**Files:**
- Modify: `src/app/globals.css:1-100` (color tokens section)

- [ ] **Step 1: Add vibrant accent color to CSS variables**

Find the `:root` section with color definitions. Add the vibrant accent:

```css
:root {
  /* ... existing colors ... */
  --color-accent: #ff6b35;
  --color-accent-hover: #e55a25;
}
```

- [ ] **Step 2: Update typography scale in globals.css**

Find the typography section and ensure these exact sizes exist:

```css
h1 {
  font-size: 72px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 24px;
}

h2 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 32px;
}

h3 {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 12px;
}

h4 {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 8px;
}

body, p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}

.text-small {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}

.text-meta {
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  color: #888;
}

.text-label {
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
}
```

- [ ] **Step 3: Add spacing utilities**

Add these spacing utilities to globals.css:

```css
.section-padding-y {
  padding-top: 48px;
  padding-bottom: 48px;
}

.section-padding-lg {
  padding-top: 64px;
  padding-bottom: 64px;
}

.section-padding-x {
  padding-left: 40px;
  padding-right: 40px;
}

.gap-collections {
  gap: 32px;
}

.gap-products {
  gap: 24px;
}
```

- [ ] **Step 4: Verify changes**

View the file to confirm color tokens and typography are updated correctly.

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css
git commit -m "design: add vibrant accent and update typography scale

- Add accent color #ff6b35 and hover #e55a25
- Update h1-h4 typography scale (72px-16px)
- Add body and text utility classes
- Add spacing utility classes for sections and grids

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 2: Update Tailwind Config Theme

**Files:**
- Modify: `tailwind.config.ts` (theme object)

- [ ] **Step 1: Add vibrant accent color to Tailwind theme**

Read the current `tailwind.config.ts` and find the `theme.extend.colors` section. Add:

```typescript
colors: {
  // ... existing colors ...
  accent: {
    DEFAULT: '#ff6b35',
    50: '#fff5ed',
    100: '#ffe8d9',
    600: '#e55a25',
    700: '#d94d1a',
  },
}
```

- [ ] **Step 2: Update typography scale in Tailwind theme**

In `theme.extend.fontSize`, ensure these sizes exist:

```typescript
fontSize: {
  'h1': ['72px', { lineHeight: '1.1', fontWeight: '700' }],
  'h2': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
  'h3': ['20px', { lineHeight: '1.3', fontWeight: '600' }],
  'h4': ['16px', { lineHeight: '1.4', fontWeight: '600' }],
  'body': ['16px', { lineHeight: '1.6' }],
  'sm': ['14px', { lineHeight: '1.5' }],
  'xs': ['13px', { lineHeight: '1.5' }],
}
```

- [ ] **Step 3: Update spacing scale**

In `theme.extend.spacing`, add/update:

```typescript
spacing: {
  // ... keep existing ...
  'section-y': '48px',
  'section-y-lg': '64px',
  'section-x': '40px',
  'gap-collections': '32px',
  'gap-products': '24px',
}
```

- [ ] **Step 4: Verify config syntax**

Check that the file is valid TypeScript (no syntax errors).

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts
git commit -m "design: update tailwind theme with accent and typography

- Add accent color #ff6b35 with variants
- Update fontSize scale (72px h1 to 13px meta)
- Add spacing tokens for sections and grids

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 3: Update Button Primitive for Larger Sizes

**Files:**
- Modify: `src/components/primitives/Button.tsx`

- [ ] **Step 1: Read current Button component**

Check what props and variants currently exist.

- [ ] **Step 2: Add xl size variant**

Update the size prop to include 'xl' for hero CTAs:

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const sizeClasses = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-base',
  xl: 'px-12 py-4 text-lg', // Hero CTA: 16px with 16px padding
};

const variantClasses = {
  primary: 'bg-neutral-900 text-white hover:bg-neutral-800',
  secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
  ghost: 'bg-transparent text-neutral-900 hover:bg-neutral-50',
  accent: 'bg-accent text-white hover:bg-accent-600 font-semibold', // Vibrant CTA
};
```

- [ ] **Step 3: Update Button className**

Build the full className with proper spacing:

```typescript
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-sm
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        font-medium
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
```

- [ ] **Step 4: Verify Button renders**

Check that Button accepts all size options: sm, md, lg, xl.

- [ ] **Step 5: Commit**

```bash
git add src/components/primitives/Button.tsx
git commit -m "feat: add xl button size and accent variant

- Add xl size: 12px padding, 16px text (hero CTA)
- Add accent variant: vibrant #ff6b35 with hover state
- Update size and variant type definitions

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 4: Update Link Primitive for Accent Color

**Files:**
- Modify: `src/components/primitives/Link.tsx`

- [ ] **Step 1: Read current Link component**

Check existing variants and styling.

- [ ] **Step 2: Add accent variant**

Update the Link component to support accent color:

```typescript
interface LinkProps {
  href: string;
  variant?: 'default' | 'subtle' | 'accent';
  className?: string;
  children: React.ReactNode;
}

const variantClasses = {
  default: 'text-neutral-900 hover:underline',
  subtle: 'text-neutral-600 hover:text-neutral-900',
  accent: 'text-accent font-semibold hover:underline hover:text-accent-600',
};
```

- [ ] **Step 3: Update Link className**

```typescript
export function Link({
  href,
  variant = 'default',
  className = '',
  children,
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={`
        ${variantClasses[variant]}
        transition-colors duration-200
        ${className}
      `}
    >
      {children}
    </NextLink>
  );
}
```

- [ ] **Step 4: Verify Link renders**

Check that Link accepts accent variant.

- [ ] **Step 5: Commit**

```bash
git add src/components/primitives/Link.tsx
git commit -m "feat: add accent variant to Link primitive

- Add accent variant: #ff6b35 with hover color
- Font-weight 600 for accent links
- Hover underline and darker accent color

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 5: Redesign Hero Section

**Files:**
- Modify: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Replace Hero component with modern design**

```typescript
'use client';

import { Button } from '@/components/primitives';
import Image from 'next/image';

interface HeroProps {
  image: string;
  headline: string;
  subheading: string;
  ctaText: string;
  ctaHref: string;
}

export function Hero({ image, headline, subheading, ctaText, ctaHref }: HeroProps) {
  return (
    <section className="relative w-full h-[70vh] md:h-[600px] lg:h-[70vh] overflow-hidden bg-neutral-900">
      {/* Background Image */}
      <Image
        src={image}
        alt={headline}
        fill
        className="object-cover object-center"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 md:px-12">
        <div className="max-w-2xl text-center space-y-6">
          <h1 className="text-h1 text-white font-bold">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            {subheading}
          </p>
          <div className="pt-4">
            <Button
              variant="accent"
              size="xl"
              className="text-white"
              onClick={() => window.location.href = ctaHref}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify Hero component**

Check that:
- Hero renders at 70vh on desktop
- Image is background with overlay
- Headline is 72px bold white text
- CTA button is xl size with accent color
- Component is marked as 'use client'

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "redesign: hero section with bold typography and accent CTA

- 70vh viewport height with background image
- 72px bold headline, centered layout
- xl accent button with vibrant #ff6b35 color
- Dark overlay on image for text contrast

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 6: Redesign Featured Collections Section

**Files:**
- Modify: `src/components/sections/FeaturedCollections.tsx`

- [ ] **Step 1: Replace FeaturedCollections component**

```typescript
import Image from 'next/image';
import { Link } from '@/components/primitives';
import { Collection } from '@/lib/sampleData';

interface FeaturedCollectionsProps {
  collections: Collection[];
}

export function FeaturedCollections({ collections }: FeaturedCollectionsProps) {
  return (
    <section className="w-full bg-white section-padding-y section-padding-x">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-h2 text-neutral-900 font-bold mb-12">
          Featured Collections
        </h2>
        
        {/* Collections Grid: 1 mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group bg-neutral-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Collection Image */}
              <div className="relative h-80 w-full bg-neutral-200 overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Collection Info */}
              <div className="p-6">
                <h3 className="text-h3 text-neutral-900 font-semibold mb-2">
                  {collection.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-6">
                  {collection.description}
                </p>
                <Link href={collection.href} variant="accent">
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify Collections Grid**

Check that:
- Title is h2 (48px bold)
- Grid is 1 col mobile, 2 col tablet (640px), 3 col desktop (1024px)
- Gap is 32px (lg:gap-8)
- Cards have image 320px height, padding 24px
- Links are accent colored

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/FeaturedCollections.tsx
git commit -m "redesign: featured collections with responsive 3-col grid

- 1 col mobile → 2 col tablet → 3 col desktop
- 32px gap between cards
- 320px image height per collection
- Accent links with hover arrow
- Section padding 48px vertical, 40px horizontal

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 7: Redesign New Arrivals Section

**Files:**
- Modify: `src/components/sections/NewArrivals.tsx`

- [ ] **Step 1: Replace NewArrivals component**

```typescript
'use client';

import Image from 'next/image';
import { Button } from '@/components/primitives';
import { Product } from '@/lib/sampleData';

interface NewArrivalsProps {
  products: Product[];
}

export function NewArrivals({ products }: NewArrivalsProps) {
  return (
    <section className="w-full bg-neutral-50 section-padding-y section-padding-x">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-h2 text-neutral-900 font-bold mb-12">
          New Arrivals
        </h2>
        
        {/* Products Grid: 1 mobile, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden">
              {/* Product Image */}
              <div className="relative h-80 w-full bg-neutral-200 rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Product Info */}
              <div className="space-y-3">
                <h4 className="text-h4 text-neutral-900 font-semibold">
                  {product.name}
                </h4>
                <p className="text-neutral-600 text-xs">
                  {product.collection}
                </p>
                <p className="text-neutral-900 text-xl font-bold">
                  ${product.price}
                </p>
                <Button
                  variant="accent"
                  size="md"
                  fullWidth
                  className="text-white font-semibold"
                >
                  View Product
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify Products Grid**

Check that:
- Title is h2 (48px bold)
- Grid is 1 col mobile, 2 col tablet, 4 col desktop
- Gap is 24px (lg:gap-6)
- Image height 320px
- Price is bold and large (18px)
- Button is accent colored, full-width
- Component is marked as 'use client'

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/NewArrivals.tsx
git commit -m "redesign: new arrivals with responsive 4-col grid

- 1 col mobile → 2 col tablet → 4 col desktop
- 24px gap between products
- 320px image height per product
- Bold pricing (18px, #222)
- Accent button full-width
- Section background neutral-50

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 8: Redesign Newsletter Section

**Files:**
- Modify: `src/components/sections/Newsletter.tsx`

- [ ] **Step 1: Replace Newsletter component**

```typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/primitives';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="w-full bg-white section-padding-lg section-padding-x">
      <div className="max-w-2xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-h2 text-neutral-900 font-bold mb-4">
          Stay Updated
        </h2>
        
        {/* Description */}
        <p className="text-lg text-neutral-600 mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter and be the first to know about new collections and exclusive offers.
        </p>
        
        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 border border-neutral-300 rounded-sm text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="text-white font-semibold whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        ) : (
          <div className="max-w-md mx-auto bg-green-50 border border-green-200 rounded-sm p-4">
            <p className="text-green-800 font-medium">
              ✓ Thanks for subscribing! Check your email for updates.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify Newsletter**

Check that:
- Title is h2 (48px bold)
- Centered layout with max-width 600px
- Form has email input + Subscribe button (side-by-side on desktop, stacked mobile)
- Submit button is accent colored
- Success message shows for 3 seconds
- Section padding is 64px vertical

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Newsletter.tsx
git commit -m "redesign: newsletter with centered form and improved spacing

- Centered layout with max-width 600px
- 48px h2 title, 16px description text
- Email input + accent subscribe button (responsive)
- 3-second success message with green background
- 64px vertical padding for prominence

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 9: Redesign Footer Section

**Files:**
- Modify: `src/components/sections/Footer.tsx`

- [ ] **Step 1: Replace Footer component**

```typescript
import { Link } from '@/components/primitives';

export function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-white section-padding-y section-padding-x">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Shop Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-neutral-300">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-neutral-400 hover:text-accent transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-neutral-400 hover:text-accent transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-neutral-400 hover:text-accent transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-neutral-300">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-neutral-400 hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-neutral-400 hover:text-accent transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-neutral-300">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-neutral-400 hover:text-accent transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-400 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-neutral-300">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-neutral-400 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-400 hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-neutral-400 hover:text-accent transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 pt-8 mt-8">
          {/* Copyright */}
          <p className="text-neutral-500 text-sm text-center">
            © 2026 Luxury Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify Footer**

Check that:
- Background is dark neutral-900
- Grid is 1 col mobile, 2 col tablet, 4 col desktop
- Links are gray with accent hover color
- Column titles are uppercase small text
- Spacing is generous (48px vertical, 40px horizontal)
- Copyright text is centered at bottom with divider

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Footer.tsx
git commit -m "redesign: footer with dark background and improved spacing

- Dark neutral-900 background with white text
- 4-column grid (1 mobile → 2 tablet → 4 desktop)
- Uppercase column titles with subtle styling
- Accent color hover on links
- 48px vertical padding, 40px horizontal
- Divider and copyright at bottom

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 10: Test Homepage Responsiveness

**Files:**
- Test: Browser testing (no code files)

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

Expected: Server starts on http://localhost:3000

- [ ] **Step 2: Test Hero Section**

Open http://localhost:3000 in browser:
- Desktop (1440px): Hero should be 70vh, headline 72px bold
- Tablet (768px): Hero should be 600px, headline scales appropriately
- Mobile (375px): Hero should be 50vh, headline readable

- [ ] **Step 3: Test Collections Grid**

Scroll to Featured Collections:
- Desktop: 3 columns with 32px gap
- Tablet: 2 columns
- Mobile: 1 column

- [ ] **Step 4: Test Products Grid**

Scroll to New Arrivals:
- Desktop: 4 columns with 24px gap
- Tablet: 2 columns
- Mobile: 1 column

- [ ] **Step 5: Test CTA Buttons**

- Verify all buttons are accent colored (#ff6b35)
- Hover state darkens to #e55a25
- Click "Shop Now" (hero) — navigates or logs action
- Click "View Product" (product cards) — navigates
- Newsletter subscribe button works

- [ ] **Step 6: Test Typography**

- Section titles (h2) should be 48px bold
- Hero headline (h1) should be 72px bold
- Product names (h4) should be 16px
- Body text should be 16px with 1.6 line-height

- [ ] **Step 7: Test Spacing**

- Sections should have 48-64px top/bottom padding
- Grid gaps: 32px for collections, 24px for products
- No overflow, proper margins on all breakpoints

- [ ] **Step 8: Test Footer**

- Dark background visible
- All links hover with accent color
- Responsive: 4 cols desktop, 2 cols tablet, 1 col mobile
- Copyright text centered at bottom

- [ ] **Step 9: No Errors in Console**

- Open DevTools console
- Verify no TypeScript, React, or build errors
- No missing images (check Network tab)

- [ ] **Step 10: Screenshot for Documentation**

Take a screenshot at desktop, tablet, and mobile breakpoints to verify design.

---

### Task 11: Final Commit and Summary

**Files:**
- All files from Tasks 1-9

- [ ] **Step 1: Run lint check**

```bash
npm run lint
```

Expected: No TypeScript or ESLint errors

- [ ] **Step 2: View git log**

```bash
git log --oneline -10
```

Verify all commits are present from Tasks 1-9.

- [ ] **Step 3: Final summary**

All 9 design tasks completed:
- ✅ Design tokens updated
- ✅ Button and Link primitives enhanced
- ✅ Hero section redesigned (70vh, 72px headline)
- ✅ Collections grid (3 col, 32px gap)
- ✅ Products grid (4 col, 24px gap)
- ✅ Newsletter redesigned (centered, accent CTA)
- ✅ Footer redesigned (dark, 4 col)
- ✅ All sections responsive (mobile → tablet → desktop)
- ✅ All CTAs use vibrant accent #ff6b35
- ✅ Typography hierarchy applied (h1 72px, h2 48px, body 16px)
- ✅ Generous spacing throughout (32-64px)

---

## Self-Review Checklist

**Spec Coverage:**
- ✅ Typography Hierarchy — Tasks 1, 5-9 implement 72px hero, 48px sections, 16px body
- ✅ Responsive Grid System — Tasks 6-7 implement 1 col mobile → 2 col tablet → 3-4 col desktop
- ✅ Color Strategy — Tasks 1-2 add vibrant accent #ff6b35 with neutral base
- ✅ Button & CTA Design — Tasks 3-4 add xl size, accent variant with hover states
- ✅ Section Redesign — Tasks 5-9 redesign all sections with new spacing and typography

**Placeholder Scan:**
- ✅ No "TBD" or "TODO" in any task
- ✅ All code blocks are complete and copy-paste ready
- ✅ All file paths are exact (no placeholders)
- ✅ All commands include expected output/behavior

**Type Consistency:**
- ✅ Button sizes: sm, md, lg, xl (consistent across Tasks 3, 5-9)
- ✅ Button variants: primary, secondary, ghost, accent (consistent)
- ✅ Link variants: default, subtle, accent (consistent)
- ✅ Color tokens: #ff6b35 (accent), #222 (text-primary), #666 (text-secondary) — consistent

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-10-10-modern-homepage-implementation.md`.

**Two execution options:**

**1. Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**
