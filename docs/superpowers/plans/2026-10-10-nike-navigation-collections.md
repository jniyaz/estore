# Nike-Style Navigation & Collections Carousel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Add sticky Nike-style header navigation and horizontal scrollable collections carousel to the homepage.

**Architecture:** 
- Header: Sticky component with responsive desktop/mobile layouts, dropdown menus on desktop, hamburger drawer on mobile
- Collections Carousel: Client-side scrollable carousel with arrow controls, scroll-snap behavior, auto-play optional
- Layout integration: Header wraps entire app, carousel replaces current collections grid

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4.1, Client components for interactivity

---

## File Structure

### New Components
- `src/components/Header.tsx` — Sticky navigation with dropdown menus and mobile drawer
- `src/components/CollectionsCarousel.tsx` — Horizontal scrollable carousel with arrow controls
- `src/components/MobileMenu.tsx` — Mobile drawer menu (hamburger triggered)

### Modified Components
- `src/app/layout.tsx` — Add Header wrapper
- `src/components/sections/FeaturedCollections.tsx` — Replace with carousel

### Sample Data
- `src/lib/sampleData.ts` — Already has FEATURED_COLLECTIONS, no changes needed

---

## Implementation Tasks

### Task 1: Create Sticky Header Component

**Files:**
- Create: `src/components/Header.tsx`

- [ ] **Step 1: Create Header component structure**

```typescript
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/primitives';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      {/* Desktop Header */}
      <div className="hidden md:flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          Luxury Store
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-8">
          <Link href="/shop" className="text-neutral-900 hover:text-accent transition-colors font-medium">
            Shop
          </Link>
          <Link href="/collections" className="text-neutral-900 hover:text-accent transition-colors font-medium">
            Collections
          </Link>
          <Link href="/new" className="text-neutral-900 hover:text-accent transition-colors font-medium">
            New Arrivals
          </Link>
          <Link href="/sale" className="text-neutral-900 hover:text-accent transition-colors font-medium">
            Sale
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="md">
            Account
          </Button>
          <Button variant="accent" size="md">
            Sign In
          </Button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex h-16 items-center justify-between px-4">
        {/* Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col gap-1 p-2"
        >
          <div className="w-6 h-0.5 bg-neutral-900"></div>
          <div className="w-6 h-0.5 bg-neutral-900"></div>
          <div className="w-6 h-0.5 bg-neutral-900"></div>
        </button>

        {/* Logo */}
        <Link href="/" className="font-bold text-lg">
          Luxury Store
        </Link>

        {/* Placeholder for right icons */}
        <div className="w-8"></div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
}
```

- [ ] **Step 2: Verify Header component**

Check that:
- Component is marked as 'use client'
- Desktop header: hidden on mobile (hidden md:flex)
- Mobile header: flex on mobile (md:hidden flex)
- Hamburger button opens/closes mobile menu
- Navigation links use Next.js Link component
- Buttons use Button primitive
- Sticky positioning will be added in layout

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "feat: add sticky nike-style header navigation

- Fixed sticky positioning at top (z-50)
- Desktop: logo + nav links + account/signin buttons
- Mobile: hamburger menu with drawer
- Navigation links: Shop, Collections, New Arrivals, Sale
- Hover effects with accent color

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 2: Create Mobile Menu Drawer

**Files:**
- Create: `src/components/MobileMenu.tsx`

- [ ] **Step 1: Create MobileMenu component**

```typescript
'use client';

import Link from 'next/link';
import { Button } from '@/components/primitives';

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-40 md:hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute left-0 top-16 bottom-0 w-64 bg-white flex flex-col">
        <nav className="flex flex-col p-6 gap-6 flex-1">
          <Link
            href="/shop"
            className="text-lg font-medium text-neutral-900 hover:text-accent transition-colors"
            onClick={onClose}
          >
            Shop
          </Link>
          <Link
            href="/collections"
            className="text-lg font-medium text-neutral-900 hover:text-accent transition-colors"
            onClick={onClose}
          >
            Collections
          </Link>
          <Link
            href="/new"
            className="text-lg font-medium text-neutral-900 hover:text-accent transition-colors"
            onClick={onClose}
          >
            New Arrivals
          </Link>
          <Link
            href="/sale"
            className="text-lg font-medium text-neutral-900 hover:text-accent transition-colors"
            onClick={onClose}
          >
            Sale
          </Link>
        </nav>

        {/* Bottom Buttons */}
        <div className="p-6 border-t border-neutral-200 flex flex-col gap-3">
          <Button variant="ghost" size="md" fullWidth>
            Account
          </Button>
          <Button variant="accent" size="md" fullWidth>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify MobileMenu component**

Check that:
- Component accepts onClose callback
- Overlay (backdrop) closes menu on click
- Drawer slides from left, 264px wide (w-64)
- Menu items positioned at top with gap-6
- Buttons positioned at bottom
- All links call onClose when clicked
- No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/MobileMenu.tsx
git commit -m "feat: add mobile menu drawer

- Hamburger-triggered drawer from left side
- Full navigation links (Shop, Collections, New Arrivals, Sale)
- Account and Sign In buttons at bottom
- Overlay backdrop closes menu on click
- Smooth transitions on mobile

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 3: Create Collections Carousel Component

**Files:**
- Create: `src/components/CollectionsCarousel.tsx`

- [ ] **Step 1: Create carousel component with scroll handling**

```typescript
'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Button, Link } from '@/components/primitives';
import { Collection } from '@/lib/sampleData';

interface CollectionsCarouselProps {
  collections: Collection[];
}

export default function CollectionsCarousel({
  collections,
}: CollectionsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 400;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    setTimeout(checkScroll, 300);
  };

  return (
    <section className="w-full bg-white py-12">
      {/* Section Title */}
      <div className="px-6 md:px-12 mb-8">
        <h2 className="text-h2 text-neutral-900 font-bold">
          Featured Collections
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 px-6 md:px-12 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center group"
            >
              {/* Collection Card */}
              <div className="relative h-96 rounded-lg overflow-hidden">
                {/* Background Image */}
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Content - Overlaid on Image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="text-h2 text-white font-bold mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-lg text-white mb-6">
                    {collection.description}
                  </p>
                  <Link
                    href={collection.href}
                    className="bg-accent text-white px-8 py-3 font-semibold hover:bg-accent-600 transition-colors rounded-sm inline-block"
                  >
                    Explore Collection
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <svg
            className="w-6 h-6 text-neutral-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <svg
            className="w-6 h-6 text-neutral-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify Carousel component**

Check that:
- Component is marked as 'use client'
- Scroll container uses scroll-snap utilities
- Left/right arrow buttons control scroll (smooth behavior)
- Arrow buttons disable when at edges
- Collection cards are full-width on mobile, 1/2 on tablet, 1/3 on desktop
- Image overlays with text and link
- Image scales on hover
- No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/CollectionsCarousel.tsx
git commit -m "feat: add horizontal collections carousel

- Nike-style horizontal scrollable carousel
- Left/right arrow buttons for navigation
- Smooth scroll-snap behavior
- Responsive: full/1-2/1-3 widths by breakpoint
- Image overlay with collection info and CTA
- Hover zoom effect on images
- Auto-disable arrows at scroll edges

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 4: Update Root Layout to Include Header

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Read current layout.tsx**

Check the existing structure and metadata.

- [ ] **Step 2: Add Header import and wrap children**

```typescript
import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ecommerce Store',
  description: 'Next.js ecommerce application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Sticky Header */}
        <Header />

        {/* Main Content - offset by header height */}
        <div className="pt-16 md:pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Verify layout changes**

Check that:
- Header component is imported from @/components/Header
- Header renders at top
- Children wrapped with pt-16 (padding-top to offset sticky header)
- Mobile and desktop padding consistent (64px header = 16 units Tailwind)
- No TypeScript errors

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: add header to root layout

- Import Header component
- Wrap children with pt-16 offset for sticky header
- Header visible on all pages
- Responsive padding for mobile/desktop

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 5: Replace Collections Grid with Carousel

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Read current page.tsx**

Check imports and current FeaturedCollections usage.

- [ ] **Step 2: Replace with CollectionsCarousel**

```typescript
import {
  Hero,
  CollectionsCarousel,
  NewArrivals,
  Newsletter,
  Footer,
} from '@/components/sections';
import { HERO_IMAGE, FEATURED_COLLECTIONS, NEW_ARRIVALS } from '@/lib/sampleData';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        image={HERO_IMAGE}
        headline="Luxury Redefined"
        subheading="Experience premium quality and timeless elegance"
        ctaText="Shop Now"
        ctaHref="/shop"
      />

      {/* Collections Carousel */}
      <CollectionsCarousel collections={FEATURED_COLLECTIONS} />

      {/* New Arrivals */}
      <NewArrivals products={NEW_ARRIVALS} />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </main>
  );
}
```

- [ ] **Step 3: Verify page structure**

Check that:
- CollectionsCarousel replaces FeaturedCollections
- Component import exists (barrel export from sections)
- Props passed correctly (collections array)
- All other sections intact
- No TypeScript errors

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: replace collections grid with carousel

- Use CollectionsCarousel component
- Horizontal scrollable instead of 3-col grid
- Maintains featured collections data
- Nike-style navigation-ready homepage

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 6: Update Barrel Export for Sections

**Files:**
- Modify: `src/components/sections/index.ts`

- [ ] **Step 1: Read current index.ts**

Check existing exports.

- [ ] **Step 2: Add CollectionsCarousel export**

```typescript
export { Hero } from './Hero';
export { CollectionsCarousel } from '../CollectionsCarousel';
export { NewArrivals } from './NewArrivals';
export { Newsletter } from './Newsletter';
export { Footer } from './Footer';
```

- [ ] **Step 3: Verify export**

Check that CollectionsCarousel can be imported from @/components/sections

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/index.ts
git commit -m "refactor: export CollectionsCarousel from sections barrel

- Add CollectionsCarousel to sections exports
- Maintains consistent import path
- Simplifies page imports

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

### Task 7: Test Navigation and Carousel

**Files:**
- Test: Browser testing (no code files)

- [ ] **Step 1: Restart dev server**

```bash
pkill -f "npm run dev"
sleep 2
npm run dev
```

Expected: Server starts at http://localhost:3000

- [ ] **Step 2: Test Desktop Header**

Open http://localhost:3000 at 1440px width:
- Sticky header visible at top
- Logo "Luxury Store" visible on left
- Navigation links visible: Shop, Collections, New Arrivals, Sale
- Account and Sign In buttons on right
- Hover over links: should turn orange (accent color)
- Scroll down: header should stay sticky at top

- [ ] **Step 3: Test Mobile Header**

Resize to 375px width:
- Hamburger menu (three lines) visible on left
- Logo "Luxury Store" centered
- Click hamburger: drawer slides in from left
- Drawer shows all navigation links
- Drawer shows Account and Sign In buttons at bottom
- Click overlay: drawer closes
- Click a link: drawer closes, navigates to link

- [ ] **Step 4: Test Collections Carousel**

Scroll to collections section:
- Desktop (1440px): Show 3 collection cards side-by-side
- Each card: background image with overlay, collection name, description, "Explore Collection" link
- Left/right arrows visible
- Click right arrow: carousel scrolls right smoothly
- Click left arrow: carousel scrolls left smoothly
- Arrows disable at scroll edges

- [ ] **Step 5: Test Carousel Responsiveness**

At 768px width:
- Show 2 collection cards per view
- Carousel still scrolls smoothly

At 375px width:
- Show 1 collection card full-width
- Carousel scrolls vertically (single card per view)

- [ ] **Step 6: Test Image Hover**

Hover over collection cards:
- Image should scale 105% smoothly
- Overlay should darken slightly
- Text and link should be visible

- [ ] **Step 7: Check Console**

DevTools console:
- No errors or warnings
- No missing component errors
- All images load (Network tab shows 200 status)

---

### Task 8: Final Verification and Summary

**Files:**
- All modified files from Tasks 1-6

- [ ] **Step 1: Run lint**

```bash
npm run lint
```

Expected: No errors (only pre-existing auth.ts errors)

- [ ] **Step 2: View git log**

```bash
git log --oneline -10
```

Verify all 7 commits present:
- test: navigation and carousel verification
- refactor: export CollectionsCarousel
- feat: replace collections grid with carousel
- feat: add header to root layout
- feat: add horizontal collections carousel
- feat: add mobile menu drawer
- feat: add sticky nike-style header

- [ ] **Step 3: Test build**

```bash
npm run build
```

Expected: Build succeeds with no errors

- [ ] **Step 4: Final summary**

All tasks completed:
- ✅ Sticky Nike-style header with desktop nav and mobile drawer
- ✅ Navigation links: Shop, Collections, New Arrivals, Sale, Account/Sign In
- ✅ Collections carousel: horizontal scroll with arrow controls
- ✅ Responsive: 1→2→3 collection cards per view
- ✅ Smooth scroll-snap behavior with auto-disabling arrows
- ✅ Image overlays with collection names and CTAs
- ✅ Header integrated in root layout
- ✅ All styling matches modern ecommerce standards

---

## Self-Review Checklist

**Completeness:**
- ✅ Header component with desktop/mobile layouts
- ✅ Mobile menu drawer with backdrop
- ✅ Collections carousel with scroll controls
- ✅ Layout integration
- ✅ Barrel export update
- ✅ Responsive testing at 3 breakpoints
- ✅ Build verification

**Code Quality:**
- ✅ All components use 'use client' where needed
- ✅ TypeScript types defined
- ✅ Tailwind utilities used (no custom CSS)
- ✅ Primitive components reused (Button, Link)
- ✅ Responsive utilities applied
- ✅ Smooth transitions and interactions

**Spec Alignment:**
- ✅ Nike-style sticky header (fixed top, z-50)
- ✅ Desktop navigation with hover effects
- ✅ Mobile hamburger menu with drawer
- ✅ Horizontal carousel (not grid)
- ✅ Arrow scroll controls
- ✅ Responsive grid (1→2→3 cards)
- ✅ Image overlays with CTAs

---

## Execution

Plan complete and ready for subagent-driven implementation. Two options:

**1. Subagent-Driven (recommended)** — Fresh subagent per task, fast iteration, automatic reviews

**2. Inline Execution** — All tasks in this session

Which approach?
