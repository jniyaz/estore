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
