import { siteConfig } from '@/data/site';

export function LogoCloud() {
  return (
    <section className="py-10">
      <div className="container-shell">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Trusted by modern revenue teams
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 text-center sm:grid-cols-3 lg:grid-cols-6">
          {siteConfig.trust.map((brand) => (
            <div
              key={brand}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-lg font-semibold text-slate-200"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
