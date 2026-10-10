# Premium Ecommerce Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a minimal, premium ecommerce homepage with hero, featured collections, new arrivals, newsletter, and footer using the existing design system.

**Architecture:** Static homepage with mock data, responsive sections using Grid/Card primitives, Unsplash images, design system colors/typography. Each section is an independent component.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4.1, existing design system primitives (Container, Grid, Card, Button, Link, Divider)

---

## File Structure

**New Files:**
- `src/lib/sampleData.ts` — Mock collections and products with Unsplash URLs
- `src/components/sections/Hero.tsx` — Hero banner with image, text, CTA
- `src/components/sections/FeaturedCollections.tsx` — Collections grid (3 items)
- `src/components/sections/NewArrivals.tsx` — Product grid (6 items)
- `src/components/sections/Newsletter.tsx` — Email signup form
- `src/components/sections/Footer.tsx` — Footer with links
- `src/components/sections/index.ts` — Barrel export

**Modified Files:**
- `src/app/page.tsx` — Replace design system demo with real homepage

---

## Task 1: Create Sample Data

**Files:**
- Create: `src/lib/sampleData.ts`

- [ ] **Step 1: Create sample data file with collection interfaces**

```typescript
// src/lib/sampleData.ts

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  collection: string;
}

export const FEATURED_COLLECTIONS: Collection[] = [
  {
    id: "summer-collection",
    name: "Summer Collection",
    description: "Warm-weather essentials",
    image: "https://images.unsplash.com/photo-1591047990852-425b4354e7c9?w=800&q=80",
    href: "/collections/summer",
  },
  {
    id: "evening-wear",
    name: "Evening Wear",
    description: "Sophisticated elegance",
    image: "https://images.unsplash.com/photo-1595777707802-522b3d7ab6c1?w=800&q=80",
    href: "/collections/evening",
  },
  {
    id: "casual-essentials",
    name: "Casual Essentials",
    description: "Everyday luxury",
    image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=800&q=80",
    href: "/collections/casual",
  },
];

export const NEW_ARRIVALS: Product[] = [
  {
    id: "silk-blouse",
    name: "Silk Blouse",
    price: 240,
    image: "https://images.unsplash.com/photo-1551862348-ffb3ee38d231?w=400&q=80",
    collection: "summer-collection",
  },
  {
    id: "linen-trousers",
    name: "Linen Trousers",
    price: 320,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80",
    collection: "casual-essentials",
  },
  {
    id: "evening-gown",
    name: "Evening Gown",
    price: 650,
    image: "https://images.unsplash.com/photo-1594788318286-3d835c1cab83?w=400&q=80",
    collection: "evening-wear",
  },
  {
    id: "tailored-jacket",
    name: "Tailored Jacket",
    price: 480,
    image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=400&q=80",
    collection: "casual-essentials",
  },
  {
    id: "white-dress",
    name: "White Dress",
    price: 380,
    image: "https://images.unsplash.com/photo-1585487000714-e14a37b119f0?w=400&q=80",
    collection: "summer-collection",
  },
  {
    id: "wool-coat",
    name: "Wool Coat",
    price: 520,
    image: "https://images.unsplash.com/photo-1539533057440-7814a60d2c45?w=400&q=80",
    collection: "evening-wear",
  },
];

export const HERO_IMAGE = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1600&q=80";
```

- [ ] **Step 2: Verify file is valid TypeScript**

Run: `npx tsc --noEmit`
Expected: No errors (command completes silently)

- [ ] **Step 3: Commit**

```bash
git add src/lib/sampleData.ts
git commit -m "data: add sample collections and products"
```

---

## Task 2: Create Hero Section Component

**Files:**
- Create: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Create Hero component**

```typescript
// src/components/sections/Hero.tsx

import { Container, Button } from "@/components/primitives";

interface HeroProps {
  image: string;
  headline: string;
  subheading: string;
  ctaText: string;
  ctaHref?: string;
}

export function Hero({
  image,
  headline,
  subheading,
  ctaText,
  ctaHref = "/shop",
}: HeroProps) {
  return (
    <div className="relative w-full h-96 md:h-[600px] overflow-hidden">
      {/* Background image */}
      <img
        src={image}
        alt={headline}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Container>
          <div className="text-center text-white max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {headline}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              {subheading}
            </p>
            <Button
              variant="accent"
              size="lg"
              onClick={() => (window.location.href = ctaHref)}
            >
              {ctaText}
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify component renders without errors**

Run: `npm run dev`
Expected: Dev server starts without TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: add Hero section component"
```

---

## Task 3: Create Featured Collections Component

**Files:**
- Create: `src/components/sections/FeaturedCollections.tsx`

- [ ] **Step 1: Create FeaturedCollections component**

```typescript
// src/components/sections/FeaturedCollections.tsx

import { Container, Grid, Card, Link } from "@/components/primitives";
import { Collection } from "@/lib/sampleData";

interface FeaturedCollectionsProps {
  collections: Collection[];
}

export function FeaturedCollections({
  collections,
}: FeaturedCollectionsProps) {
  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Collections
          </h2>
          <p className="text-secondary text-lg">
            Discover our curated selection
          </p>
        </div>

        <Grid cols={3}>
          {collections.map((collection) => (
            <Link key={collection.id} href={collection.href}>
              <Card clickable className="overflow-hidden">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Text overlay */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-secondary text-sm">
                    {collection.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Verify component is syntactically valid**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/FeaturedCollections.tsx
git commit -m "feat: add FeaturedCollections section component"
```

---

## Task 4: Create New Arrivals Component

**Files:**
- Create: `src/components/sections/NewArrivals.tsx`

- [ ] **Step 1: Create NewArrivals component**

```typescript
// src/components/sections/NewArrivals.tsx

import { Container, Grid, Card, Button } from "@/components/primitives";
import { Product } from "@/lib/sampleData";

interface NewArrivalsProps {
  products: Product[];
}

export function NewArrivals({ products }: NewArrivalsProps) {
  return (
    <section className="py-20 md:py-32 bg-neutral-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            New Arrivals
          </h2>
          <p className="text-secondary text-lg">
            Latest additions to our collection
          </p>
        </div>

        <Grid cols={4}>
          {products.map((product) => (
            <Card key={product.id} bordered>
              {/* Product image */}
              <div className="mb-4 h-64 overflow-hidden rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product info */}
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-secondary text-sm mb-4">
                {product.collection}
              </p>
              <p className="text-xl font-bold mb-4">${product.price}</p>

              {/* CTA button */}
              <Button
                variant="accent"
                size="sm"
                fullWidth
                onClick={() => (window.location.href = `/products/${product.id}`)}
              >
                View Product
              </Button>
            </Card>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Verify component is syntactically valid**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/NewArrivals.tsx
git commit -m "feat: add NewArrivals section component"
```

---

## Task 5: Create Newsletter Component

**Files:**
- Create: `src/components/sections/Newsletter.tsx`

- [ ] **Step 1: Create Newsletter component**

```typescript
// src/components/sections/Newsletter.tsx

"use client";

import { useState } from "react";
import { Container, Button } from "@/components/primitives";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-secondary text-lg mb-8">
            Subscribe to our newsletter for new collections and exclusive offers
          </p>

          {submitted ? (
            <div className="bg-accent-50 border border-accent-200 rounded-md p-4 text-center">
              <p className="text-accent-900 font-medium">
                ✓ Thank you for subscribing!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 border border-surface-border rounded-md focus:outline-none focus:border-accent-600"
              />
              <Button variant="accent" type="submit">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Verify component is syntactically valid**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Newsletter.tsx
git commit -m "feat: add Newsletter section component"
```

---

## Task 6: Create Footer Component

**Files:**
- Create: `src/components/sections/Footer.tsx`

- [ ] **Step 1: Create Footer component**

```typescript
// src/components/sections/Footer.tsx

import { Container, Link, Divider } from "@/components/primitives";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        {/* Links section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Shop */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/collections" className="text-gray-400 hover:text-white">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-gray-400 hover:text-white">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/best-sellers" className="text-gray-400 hover:text-white">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-gray-400 hover:text-white">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-400 hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-400 hover:text-white">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <Divider variant="subtle" />
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2026 Luxury Store. All rights reserved.</p>
          <p>Designed with elegance and precision</p>
        </div>
      </Container>
    </footer>
  );
}
```

- [ ] **Step 2: Verify component is syntactically valid**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Footer.tsx
git commit -m "feat: add Footer section component"
```

---

## Task 7: Create Sections Barrel Export

**Files:**
- Create: `src/components/sections/index.ts`

- [ ] **Step 1: Create barrel export file**

```typescript
// src/components/sections/index.ts

export { Hero } from "./Hero";
export { FeaturedCollections } from "./FeaturedCollections";
export { NewArrivals } from "./NewArrivals";
export { Newsletter } from "./Newsletter";
export { Footer } from "./Footer";
```

- [ ] **Step 2: Verify file is valid TypeScript**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/index.ts
git commit -m "refactor: add sections barrel export"
```

---

## Task 8: Update Homepage

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace page.tsx with new homepage**

```typescript
// src/app/page.tsx

import {
  Hero,
  FeaturedCollections,
  NewArrivals,
  Newsletter,
  Footer,
} from "@/components/sections";
import { HERO_IMAGE, FEATURED_COLLECTIONS, NEW_ARRIVALS } from "@/lib/sampleData";

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

      {/* Featured Collections */}
      <FeaturedCollections collections={FEATURED_COLLECTIONS} />

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

- [ ] **Step 2: Verify page renders without errors**

Run: `npm run dev`
Expected: Dev server compiles successfully, no TypeScript errors

- [ ] **Step 3: Visit homepage in browser**

Open: `http://localhost:3000`
Expected: See full homepage with hero, collections, products, newsletter, footer

- [ ] **Step 4: Test responsive behavior**

- Open DevTools (F12)
- Rotate to mobile view (375px width)
- Expected: Single column layout, properly spaced
- Resize to tablet (768px)
- Expected: 2 columns for products
- Resize to desktop (1024px)
- Expected: 4 columns for products

- [ ] **Step 5: Test interactions**

- Click on a collection card
- Expected: Link works (tries to navigate to collection page)
- Click on product button
- Expected: Link works (tries to navigate to product page)
- Enter email in newsletter and click Subscribe
- Expected: Shows success message

- [ ] **Step 6: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: build premium homepage with all sections"
```

---

## Task 9: Verify Complete Homepage

**Files:**
- No changes, verification only

- [ ] **Step 1: Run TypeScript check**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 2: Check for console errors**

Open: `http://localhost:3000`
Open DevTools Console (F12 → Console tab)
Expected: No error messages

- [ ] **Step 3: Test on multiple breakpoints**

**Mobile (375px):**
- [ ] Hero section readable
- [ ] Collections stack vertically
- [ ] Products show 1 per row
- [ ] Newsletter form fits
- [ ] Footer links are readable

**Tablet (768px):**
- [ ] Hero section displays well
- [ ] Collections show 2 per row (wraps to 1 on very small tablet)
- [ ] Products show 2 per row
- [ ] Newsletter form displays properly

**Desktop (1024px+):**
- [ ] Hero section has proper aspect ratio
- [ ] Collections show 3 per row
- [ ] Products show 4 per row
- [ ] All spacing looks generous

- [ ] **Step 4: Verify images load**

- All product images load without broken image icons
- Hero image displays correctly
- Collection images display correctly

- [ ] **Step 5: Test button hover states**

- Primary buttons darken on hover
- Accent buttons change shade on hover
- Links underline on hover

---

## Verification Checklist

- [ ] All components created successfully
- [ ] TypeScript compiles without errors
- [ ] Dev server runs without warnings
- [ ] Homepage displays all sections
- [ ] Responsive layout works on mobile/tablet/desktop
- [ ] Images load from Unsplash
- [ ] Buttons and links are clickable
- [ ] Newsletter form shows success state
- [ ] Design system colors/typography applied consistently
- [ ] No console errors or warnings
- [ ] All commits completed with clear messages
