import Link from 'next/link';

const offices = [
  { city: 'New York', address: '350 Madison Ave, 10th Floor, New York, NY' },
  { city: 'Austin', address: '301 Congress Ave, Austin, TX' },
  { city: 'Remote', address: 'International support available worldwide' },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <section className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8">
            <div className="chip border-violet-400/20 bg-violet-500/10 text-violet-100">Contact</div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white">Let’s design your next growth engine.</h1>
            <p className="mt-5 text-slate-300">
              Whether you're building a new SaaS product or refining your GTM motion, we can help you create a sharper strategy and a more powerful digital presence.
            </p>

            <div className="mt-8 space-y-4">
              {offices.map((office) => (
                <div key={office.city} className="rounded-2xl border border-white/10 bg-slate-950 p-4">
                  <div className="text-sm uppercase tracking-[0.18em] text-violet-200">{office.city}</div>
                  <div className="mt-2 text-slate-300">{office.address}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-200">First name</label>
                  <input id="firstName" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-violet-400" placeholder="Jordan" />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-200">Last name</label>
                  <input id="lastName" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-violet-400" placeholder="Lee" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">Work email</label>
                <input id="email" type="email" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-violet-400" placeholder="jordan@company.com" />
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-200">Company</label>
                <input id="company" className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-violet-400" placeholder="Northstar Labs" />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">How can we help?</label>
                <textarea id="message" rows={6} className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-violet-400" placeholder="Tell us about your product, company stage, and goals." />
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
