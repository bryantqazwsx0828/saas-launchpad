import { processSteps } from '@/data/site';

export function Workflow() {
  return (
    <section id="process" className="py-24">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="chip mx-auto border-violet-400/20 bg-violet-500/10 text-violet-100">Process</div>
          <h2 className="section-title mt-6">A collaborative workflow built for speed.</h2>
          <p className="section-copy mx-auto">
            Each project follows a clear system from positioning through polished launch so you always know what’s happening next.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.id} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 text-lg font-bold text-white">
                {step.id}
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-slate-300">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
