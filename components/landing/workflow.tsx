import { workflowSteps } from '@/data/site';

export function Workflow() {
  return (
    <section id="solutions" className="py-24">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="chip mx-auto border-violet-400/20 bg-violet-500/10 text-violet-100">How it works</div>
          <h2 className="section-title mt-6">Turn operations into momentum.</h2>
          <p className="section-copy mx-auto">
            Purpose-built for SaaS leaders who want faster execution without breaking the team’s current systems.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <div key={step.id} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 text-lg font-bold text-white">
                {step.id}
              </div>
              <div className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">Step {index + 1}</div>
              <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-slate-300">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
