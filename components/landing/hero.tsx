import Link from 'next/link';
import { featureData, siteConfig } from '@/data/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pt-20">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <div className="chip mx-auto mb-6 border-violet-400/20 bg-violet-500/10 text-violet-100">
            Built for high-growth SaaS teams
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            {siteConfig.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            {siteConfig.subheadline}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400"
            >
              {siteConfig.ctaPrimary}
            </Link>
            <Link
              href="#product"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/10"
            >
              {siteConfig.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/50 backdrop-blur-sm sm:p-6">
          <div className="rounded-2xl border border-white/10 bg-slate-950 p-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Revenue overview</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Q3 performance</h2>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">
                +24.8% MoM
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                <div className="mb-4 flex items-center justify-between text-sm text-slate-300">
                  <span>Pipeline value</span>
                  <span>$1.84M</span>
                </div>
                <div className="flex h-48 items-end gap-3">
                  {[48, 62, 58, 82, 90, 76, 98].map((height, index) => (
                    <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-violet-500 to-indigo-400" style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-xs text-slate-400">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>

              <div className="space-y-4">
                {featureData.slice(0, 3).map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                    <div className="mb-2 text-xs uppercase tracking-[0.18em] text-violet-300">{item.tag}</div>
                    <div className="text-lg font-semibold text-white">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
