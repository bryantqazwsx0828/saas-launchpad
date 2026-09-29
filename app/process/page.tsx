import Link from 'next/link';
import { processSteps } from '@/data/site';

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="chip mx-auto border-violet-400/20 bg-violet-500/10 text-violet-100">How I work</div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">A simple process that keeps momentum high.</h1>
          <p className="mt-5 text-lg text-slate-300">
            My goal is to keep your project moving quickly without sacrificing strategy, clarity, or design quality.
          </p>
        </div>

        <section className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.id} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 text-lg font-bold text-white">
                {step.id}
              </div>
              <h2 className="text-xl font-semibold text-white">{step.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">{step.text}</p>
            </div>
          ))}
        </section>

        <div className="mt-20 rounded-[32px] border border-white/10 bg-slate-900/80 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">What to expect</p>
              <h2 className="mt-4 text-3xl font-bold text-white">Clear communication. Focused iteration. Fast progress.</h2>
            </div>
            <div className="space-y-4">
              {[
                'Fast alignment on scope and business goal',
                'Practical recommendations based on product and audience',
                'Design + build in the same process for cleaner execution',
                'Clear next steps after launch so the work keeps compounding',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950 p-4 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <Link href="/contact" className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-400">
            Start a project
          </Link>
        </div>
      </div>
    </main>
  );
}
