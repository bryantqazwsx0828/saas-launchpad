import Link from 'next/link';
import { pricingPlans } from '@/data/site';

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="chip mx-auto border-violet-400/20 bg-violet-500/10 text-violet-100">Pricing</div>
          <h2 className="section-title mt-6">Simple pricing for operating at scale.</h2>
          <p className="section-copy mx-auto">
            Start lean, move quickly, and upgrade when your pipeline and team complexity grow.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-6 ${
                plan.popular
                  ? 'border-violet-400/60 bg-violet-500/10 shadow-glow'
                  : 'border-white/10 bg-slate-900/80'
              }`}
            >
              {plan.popular && (
                <div className="mb-4 inline-flex rounded-full bg-violet-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Most popular
                </div>
              )}
              <div className="text-xl font-semibold text-white">{plan.name}</div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="pb-1 text-slate-300">/month</span>}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{plan.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-xs text-emerald-300">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`mt-8 inline-flex w-full justify-center rounded-full px-4 py-3 text-sm font-semibold transition ${
                  plan.popular
                    ? 'bg-violet-500 text-white hover:bg-violet-400'
                    : 'border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10'
                }`}
              >
                {plan.price === 'Custom' ? 'Talk to sales' : 'Get started'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
