// src/components/sections/NewArrivals.tsx

"use client";

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
