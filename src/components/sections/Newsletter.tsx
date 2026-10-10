// src/components/sections/Newsletter.tsx

"use client";

import { useState } from "react";
import { Container, Button } from "@/components/primitives";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-secondary text-lg mb-8">
            Subscribe to our newsletter for new collections and exclusive offers
          </p>

          {submitted ? (
            <div className="bg-accent-50 border border-accent-200 rounded-md p-4 text-center">
              <p className="text-accent-900 font-medium">
                ✓ Thank you for subscribing!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 border border-surface-border rounded-md focus:outline-none focus:border-accent-600"
              />
              <Button variant="accent" type="submit">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
