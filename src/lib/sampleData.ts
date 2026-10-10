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
