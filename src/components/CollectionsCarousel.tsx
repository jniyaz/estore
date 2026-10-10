'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Link } from '@/components/primitives';
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
