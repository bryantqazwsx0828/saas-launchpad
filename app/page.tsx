import { Header } from '@/components/layout/header';
import { Hero } from '@/components/landing/hero';
import { LogoCloud } from '@/components/landing/logo-cloud';
import { Features } from '@/components/landing/features';
import { Workflow } from '@/components/landing/workflow';
import { Metrics } from '@/components/landing/metrics';
import { Testimonials } from '@/components/landing/testimonials';
import { Pricing } from '@/components/landing/pricing';
import { Faq } from '@/components/landing/faq';
import { CTA } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <LogoCloud />
        <Features />
        <Workflow />
        <Metrics />
        <Testimonials />
        <Pricing />
        <Faq />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
