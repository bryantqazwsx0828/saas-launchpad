import Link from 'next/link';
import { Check, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'A clean foundation for early-stage B2B teams validating their GTM engine.',
    features: ['Unlimited projects', 'Core dashboards', 'Team collaboration', 'Email support'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$99',
    description: 'For scaling teams that need stronger visibility across lifecycle revenue motions.',
    features: ['Everything in Starter', 'AI forecasting', 'Workflow automation', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Advanced controls for global operations, compliance, and executive reporting.',
    features: ['SSO + audit logs', 'Custom integrations', 'Dedicated onboarding', 'Executive dashboards'],
    highlight: false,
  },
];

const comparison = [
  { icon: BarChart3, title: 'Real-time reporting', text: 'See revenue performance as it changes, not after the fact.' },
  { icon: Zap, title: 'Faster execution', text: 'Turn ideas into actions with shared playbooks and automation.' },
  { icon: ShieldCheck, title: 'Secure by design', text: 'Governance controls built into every workflow and role.' },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="chip mx-auto border-violet-400/20 bg-violet-500/10 text-violet-100">Pricing</div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">Simple plans built for serious growth.</h1>
          <p className="mt-5 text-lg text-slate-300">
            Choose a plan that matches your current motion and scale when your process becomes more complex.
          </p>
        </div>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[28px] border p-6 ${
                plan.highlight ? 'border-violet-400/60 bg-violet-500/10 shadow-glow' : 'border-white/10 bg-slate-900/80'
              }`}
            >
              {plan.highlight && (
                <div className="mb-4 inline-flex rounded-full bg-violet-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Most popular
                </div>
              )}
              <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="pb-1 text-slate-300">/ month</span>}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{plan.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 inline-flex w-full justify-center rounded-full px-4 py-3 text-sm font-semibold ${
                  plan.highlight ? 'bg-violet-500 text-white hover:bg-violet-400' : 'border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10'
                }`}
              >
                {plan.price === 'Custom' ? 'Talk to sales' : 'Get started'}
              </Link>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-[32px] border border-white/10 bg-slate-900/80 p-8 sm:p-10">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Value</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Why teams choose a more disciplined operating model.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {comparison.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-slate-950 p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
