import { serviceData } from '@/data/site';

export function Features() {
  return (
    <section id="services" className="py-24">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="chip mx-auto border-violet-400/20 bg-violet-500/10 text-violet-100">Services</div>
          <h2 className="section-title mt-6">A sharper website starts with a clearer story.</h2>
          <p className="section-copy mx-auto">
            I help SaaS founders and product teams turn complex features into a compelling experience that converts attention into action.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceData.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-violet-400/40 hover:bg-slate-900">
              <div className="mb-4 inline-flex rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-violet-200">
                {feature.tag}
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
