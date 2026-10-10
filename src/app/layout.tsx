import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ecommerce Store',
  description: 'Next.js ecommerce application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Sticky Header */}
        <Header />

        {/* Main Content - offset by header height */}
        <div className="pt-16 md:pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
