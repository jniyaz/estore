// src/components/sections/Hero.tsx

"use client";

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
