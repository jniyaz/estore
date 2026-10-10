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
