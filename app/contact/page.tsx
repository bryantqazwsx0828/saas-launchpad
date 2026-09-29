import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <section className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8">
            <div className="chip border-violet-400/20 bg-violet-500/10 text-violet-100">Contact</div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white">Let’s build something your users can understand quickly.</h1>
            <p className="mt-5 text-slate-300">
              If you're a startup founder, product team, or SaaS operator looking for a sharper website and stronger conversion flow, I’d love to hear about it.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950 p-4">
                <div className="text-sm uppercase tracking-[0.18em] text-violet-200">Email</div>
                <div className="mt-2 text-slate-300">hello@bryantstudio.dev</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950 p-4">
                <div className="text-sm uppercase tracking-[0.18em] text-violet-200">Location</div>
                <div className="mt-2 text-slate-300">Remote · Available worldwide</div>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-200">First name</label>
                  <input id="firstName" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400" placeholder="Jordan" />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-200">Last name</label>
                  <input id="lastName" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400" placeholder="Lee" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">Work email</label>
                <input id="email" type="email" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400" placeholder="jordan@company.com" />
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-200">Company</label>
                <input id="company" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400" placeholder="Startup name" />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">Project details</label>
                <textarea id="message" rows={6} className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400" placeholder="Tell me about your product, audience, and goals." />
              </div>

              <button type="submit" className="w-full rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
                Send inquiry
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
