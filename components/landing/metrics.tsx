import { metricsData } from '@/data/site';

export function Metrics() {
  return (
    <section className="py-24">
      <div className="container-shell">
        <div className="rounded-[32px] border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-slate-900 to-slate-950 p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-4">
            {metricsData.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-center">
                <div className="text-3xl font-bold tracking-tight text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
