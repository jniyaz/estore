import { Link } from '@/components/primitives';

export function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-white section-padding-y section-padding-x">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Shop Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-neutral-300">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-neutral-400 hover:text-accent transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-neutral-400 hover:text-accent transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-neutral-400 hover:text-accent transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-neutral-300">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-neutral-400 hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-neutral-400 hover:text-accent transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-neutral-300">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-neutral-400 hover:text-accent transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-400 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-neutral-300">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-neutral-400 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-400 hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-neutral-400 hover:text-accent transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 pt-8 mt-8">
          {/* Copyright */}
          <p className="text-neutral-500 text-sm text-center">
            © 2026 Luxury Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
