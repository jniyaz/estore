'use client';

import { useState } from 'react';
import { Button } from '@/components/primitives';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="w-full bg-white section-padding-lg section-padding-x">
      <div className="max-w-2xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-h2 text-neutral-900 font-bold mb-4">
          Stay Updated
        </h2>

        {/* Description */}
        <p className="text-lg text-neutral-600 mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter and be the first to know about new collections and exclusive offers.
        </p>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 border border-neutral-300 rounded-sm text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="text-white font-semibold whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        ) : (
          <div className="max-w-md mx-auto bg-green-50 border border-green-200 rounded-sm p-4">
            <p className="text-green-800 font-medium">
              ✓ Thanks for subscribing! Check your email for updates.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
