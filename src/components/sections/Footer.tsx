// src/components/sections/Footer.tsx

import { Container, Link, Divider } from "@/components/primitives";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        {/* Links section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Shop */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/collections" className="text-gray-400 hover:text-white">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-gray-400 hover:text-white">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/best-sellers" className="text-gray-400 hover:text-white">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-gray-400 hover:text-white">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-400 hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-400 hover:text-white">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <Divider variant="subtle" />
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2026 Luxury Store. All rights reserved.</p>
          <p>Designed with elegance and precision</p>
        </div>
      </Container>
    </footer>
  );
}
