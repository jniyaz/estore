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
