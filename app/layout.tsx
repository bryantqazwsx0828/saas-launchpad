import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Northstar | B2B Growth Platform',
  description: 'Modular SaaS landing page template for modern startups and portfolio use.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
