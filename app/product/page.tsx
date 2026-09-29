import Link from 'next/link';
import { Floor, Sparkles, Workflow, ShieldCheck, TrendingUp } from 'lucide-react';

const productFeatures = [
  {
    icon: Workflow,
    title: 'Revenue Workflow Automation',
    description:
      'Automate lead routing, approvals, follow-ups, and customer journeys without requiring custom engineering work.',
  },
  {
    icon: TrendingUp,
    title: 'AI Forecasting',
    description:
      'Combine sales, product, and customer data to see where pipeline health is rising or falling before it changes your forecast.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Governance',
    description:
      'Keep your GTM motion secure with role-based access, compliance workflows, and end-to-end audit visibility.',
  },
  {
    icon: Sparkles,
    title: 'Team Alignment',
    description:
      'Create shared views across marketing, sales, and success so everyone operates from the same accurate source of truth.',
  },
];

const solutionBlocks = [
  {
    label: 'For SaaS founders',
    title: 'Launch smarter from day one',
    text: 'Validate GTM motions quickly, tighten weekly execution, and avoid wasted effort across disconnected tools.',
  },
  {
    label: 'For revenue teams',
    title: 'Align pipeline and outcomes',
    text: 'Track opportunities, handoff quality, and account health across the full buyer journey with no spreadsheet dependency.',
  },
  {
    label: 'For operations',
    title: 'Scale without chaos',
    text: 'Replace process bottlenecks with consistent workflows and measurable execution dashboards your leadership can trust.',
  },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="chip mx-auto border-violet-400/20 bg-violet-500/10 text-violet-100">Platform</div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">Built for modern B2B SaaS execution.</h1>
            <p className="mt-5 text-lg text-slate-300">
              A modular operating system for companies that want to scale pipeline, reduce friction, and make smarter decisions with live operational data.
            </p>
          </div>
        </div>

        <section className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productFeatures.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </div>
          ))}
        </section>

        <section className="mt-20">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Solutions</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">One platform for every GTM motion.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {solutionBlocks.map((block) => (
              <div key={block.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <div className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-violet-200">{block.label}</div>
                <h3 className="text-2xl font-semibold text-white">{block.title}</h3>
                <p className="mt-4 text-slate-300">{block.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[32px] border border-white/10 bg-slate-900/80 p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="chip border-violet-400/20 bg-violet-500/10 text-violet-100">Why teams choose us</div>
              <h3 className="mt-6 text-3xl font-bold text-white">More visibility. Less operational drag.</h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { value: '2.4x', label: 'Faster campaign launches' },
                { value: '93%', label: 'Board reporting accuracy' },
                { value: '16 hrs', label: 'Saved weekly per team' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950 p-5 text-center">
                  <div className="text-3xl font-bold text-white">{item.value}</div>
                  <div className="mt-2 text-sm text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-20 flex justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            Book a strategy call
          </Link>
        </div>
      </div>
    </main>
  );
}
