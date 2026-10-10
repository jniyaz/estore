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
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    href: "/collections/summer",
  },
  {
    id: "evening-wear",
    name: "Evening Wear",
    description: "Sophisticated elegance",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    href: "/collections/evening",
  },
  {
    id: "casual-essentials",
    name: "Casual Essentials",
    description: "Everyday luxury",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    href: "/collections/casual",
  },
];

export const NEW_ARRIVALS: Product[] = [
  {
    id: "silk-blouse",
    name: "Silk Blouse",
    price: 240,
    image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=400&q=80",
    collection: "summer-collection",
  },
  {
    id: "linen-trousers",
    name: "Linen Trousers",
    price: 320,
    image: "https://images.unsplash.com/photo-1562777353-c70e9c12a430?w=400&q=80",
    collection: "casual-essentials",
  },
  {
    id: "evening-gown",
    name: "Evening Gown",
    price: 650,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    collection: "evening-wear",
  },
  {
    id: "tailored-jacket",
    name: "Tailored Jacket",
    price: 480,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&q=80",
    collection: "casual-essentials",
  },
  {
    id: "white-dress",
    name: "White Dress",
    price: 380,
    image: "https://images.unsplash.com/photo-1595927238886-08f0665a6ce1?w=400&q=80",
    collection: "summer-collection",
  },
  {
    id: "wool-coat",
    name: "Wool Coat",
    price: 520,
    image: "https://images.unsplash.com/photo-1548585706-46cdedcee03e?w=400&q=80",
    collection: "evening-wear",
  },
];

export const HERO_IMAGE = "https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=1600&q=80";
