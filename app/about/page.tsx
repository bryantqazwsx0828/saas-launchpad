import Link from 'next/link';
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Compass, Gauge, Layers3 } from 'lucide-react';

const valueStats = [
  { value: '3-6', label: 'week average delivery' },
  { value: '41%', label: 'average conversion lift' },
  { value: '100%', label: 'custom founder-led process' },
];

const strengths = [
  {
    icon: Compass,
    title: 'Positioning-first thinking',
    text: 'I start by clarifying what makes your product worth paying for and how to say it clearly.',
  },
  {
    icon: Layers3,
    title: 'UI systems that scale',
    text: 'I create structured, reusable interfaces that are strong enough for product growth and clean enough to trust.',
  },
  {
    icon: Gauge,
    title: 'Conversion-focused design',
    text: 'Every page is designed to help the right visitors understand the value and take action with confidence.',
  },
];

const notes = [
  'Focused on startup and SaaS product storytelling',
  'Design + frontend build in one streamlined workflow',
  'Built to support founder credibility, traction, and conversion',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="chip border-violet-400/20 bg-violet-500/10 text-violet-100">About Bryant</div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                I help SaaS founders look sharper, sell clearer, and launch faster.
              </h1>
              <p className="mt-5 text-lg text-slate-300">
                I’m a designer and frontend developer focused on SaaS positioning, conversion-centered web design, and premium product experiences that feel credible from the first scroll.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-400">
                  Book a discovery call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/case-study" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10">
                  View work
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
          {strengths.map(({ icon: Icon, title, text }) => (
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Why work with me</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Focused, strategic, and built for product teams.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              {notes.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950 p-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-emerald-400" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-slate-900 to-slate-950 p-6">
              <div className="mb-4 flex items-center gap-3 text-violet-200">
                <BriefcaseBusiness className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-[0.2em]">Approach</span>
              </div>
              <p className="text-lg leading-8 text-slate-200">
                I blend product strategy, UX clarity, and high-quality frontend execution so your website doesn’t just look good — it helps the business move forward.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
