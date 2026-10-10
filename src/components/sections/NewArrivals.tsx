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
