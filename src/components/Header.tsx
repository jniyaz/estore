'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/primitives';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      {/* Desktop Header */}
      <div className="hidden md:flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          Luxury Store
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-8">
          <Link href="/shop" className="text-neutral-900 hover:text-accent transition-colors font-medium">
            Shop
          </Link>
          <Link href="/collections" className="text-neutral-900 hover:text-accent transition-colors font-medium">
            Collections
          </Link>
          <Link href="/new" className="text-neutral-900 hover:text-accent transition-colors font-medium">
            New Arrivals
          </Link>
          <Link href="/sale" className="text-neutral-900 hover:text-accent transition-colors font-medium">
            Sale
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="md">
            Account
          </Button>
          <Button variant="accent" size="md">
            Sign In
          </Button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex h-16 items-center justify-between px-4">
        {/* Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col gap-1 p-2"
        >
          <div className="w-6 h-0.5 bg-neutral-900"></div>
          <div className="w-6 h-0.5 bg-neutral-900"></div>
          <div className="w-6 h-0.5 bg-neutral-900"></div>
        </button>

        {/* Logo */}
        <Link href="/" className="font-bold text-lg">
          Luxury Store
        </Link>

        {/* Placeholder for right icons */}
        <div className="w-8"></div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
}
