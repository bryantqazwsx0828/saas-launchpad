import Link from 'next/link';
import { caseStudies } from '@/data/site';

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="chip mx-auto border-violet-400/20 bg-violet-500/10 text-violet-100">Case studies</div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">Selected work for SaaS founders and product teams.</h1>
          <p className="mt-5 text-lg text-slate-300">
            Every project is designed to make a product easier to understand, easier to trust, and easier to buy.
          </p>
        </div>

        <section className="mt-16 space-y-8">
          {caseStudies.map((project) => (
            <article key={project.name} className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="rounded-3xl border border-white/10 bg-slate-950 p-6">
                  <div className="text-xs uppercase tracking-[0.22em] text-violet-200">{project.category}</div>
                  <h2 className="mt-4 text-3xl font-bold text-white">{project.name}</h2>
                  <div className="mt-6 rounded-2xl bg-violet-500/10 p-4 text-violet-100">{project.result}</div>
                </div>

                <div>
                  <p className="text-slate-300">{project.summary}</p>
                  <div className="mt-6 flex gap-4">
                    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">Messaging</div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">UX</div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">Frontend</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-20 flex justify-center">
          <Link href="/contact" className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-400">
            Discuss a project
          </Link>
        </div>
      </div>
    </main>
  );
}
