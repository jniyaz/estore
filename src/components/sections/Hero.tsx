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
