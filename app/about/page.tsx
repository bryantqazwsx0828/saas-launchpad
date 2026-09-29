import Link from 'next/link';
import { ArrowRight, CheckCircle2, BriefcaseBusiness, ChartColumnBig, LockKeyhole } from 'lucide-react';

const valueStats = [
  { value: '4.8x', label: 'Faster growth cycles' },
  { value: '31%', label: 'Pipeline lift in 90 days' },
  { value: '99.9%', label: 'System uptime' },
];

const benefits = [
  'Unified dashboards for every team',
  'Live revenue forecasting with zero spreadsheet dependency',
  'A shared operating model for GTM execution',
  'Built for lean teams and scaling startups',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="chip border-violet-400/20 bg-violet-500/10 text-violet-100">About Northstar</div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">We help SaaS teams turn complexity into clarity.</h1>
              <p className="mt-5 text-lg text-slate-300">
                Northstar was built to give leadership and revenue teams a cleaner operating rhythm. We focus on execution, visibility, and measurable outcomes instead of tool sprawl and disconnected reporting.
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="/contact" className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-400">
                  Talk to us
                </Link>
                <Link href="/product" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10">
                  Explore platform
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-950 p-6">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {valueStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-3">
          {[
            { icon: ChartColumnBig, title: 'Built for measurable growth', text: 'Every process is connected to a business outcome—not just a workflow event.' },
            { icon: BriefcaseBusiness, title: 'Made for operators', text: 'We simplify the day-to-day planning and reporting burden for scaling SaaS teams.' },
            { icon: LockKeyhole, title: 'Trust by default', text: 'Security, access controls, and governance are built into the foundation of the platform.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-slate-300">{text}</p>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-[32px] border border-white/10 bg-slate-900/80 p-8 sm:p-10">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">What matters</p>
            <h2 className="mt-4 text-3xl font-bold text-white">The operating model behind sustainable SaaS growth.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-slate-900 to-slate-950 p-6">
              <div className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-violet-200">Mission</div>
              <p className="text-lg leading-8 text-slate-200">
                To make it easier for growing companies to operate with visibility, speed, and confidence—without building a brittle stack of disconnected systems.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
