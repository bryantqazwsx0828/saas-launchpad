import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bryant Studio | SaaS Designer & Frontend Developer',
  description: 'Personal portfolio and service website for SaaS design, messaging, and conversion-focused web builds.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
