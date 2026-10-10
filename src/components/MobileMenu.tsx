'use client';

import Link from 'next/link';
import { Button } from '@/components/primitives';

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-40 md:hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute left-0 top-16 bottom-0 w-64 bg-white flex flex-col">
        <nav className="flex flex-col p-6 gap-6 flex-1">
          <Link
            href="/shop"
            className="text-lg font-medium text-neutral-900 hover:text-accent transition-colors"
            onClick={onClose}
          >
            Shop
          </Link>
          <Link
            href="/collections"
            className="text-lg font-medium text-neutral-900 hover:text-accent transition-colors"
            onClick={onClose}
          >
            Collections
          </Link>
          <Link
            href="/new"
            className="text-lg font-medium text-neutral-900 hover:text-accent transition-colors"
            onClick={onClose}
          >
            New Arrivals
          </Link>
          <Link
            href="/sale"
            className="text-lg font-medium text-neutral-900 hover:text-accent transition-colors"
            onClick={onClose}
          >
            Sale
          </Link>
        </nav>

        {/* Bottom Buttons */}
        <div className="p-6 border-t border-neutral-200 flex flex-col gap-3">
          <Button variant="ghost" size="md" fullWidth>
            Account
          </Button>
          <Button variant="accent" size="md" fullWidth>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
