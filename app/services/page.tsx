import Link from 'next/link';

const services = [
  'Brand positioning',
  'Landing page design',
  'Frontend development',
  'Conversion optimization',
  'Design systems',
  'Launch support',
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="chip mx-auto border-violet-400/20 bg-violet-500/10 text-violet-100">Services</div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">Web design and frontend builds for SaaS teams.</h1>
            <p className="mt-5 text-lg text-slate-300">
              I help founders and product teams turn product complexity into simple, premium, conversion-ready experiences.
            </p>
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-4 h-10 w-10 rounded-2xl bg-violet-500/15" />
              <h2 className="text-xl font-semibold text-white">{service}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Clear positioning, premium design, and production-ready execution that helps your product show up with confidence.
              </p>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-[32px] border border-white/10 bg-slate-900/80 p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">What you get</p>
              <h2 className="mt-4 text-3xl font-bold text-white">A hands-on partner from strategy to launch.</h2>
            </div>
            <div className="space-y-4">
              {[
                'Positioning and messaging refinement',
                'High-converting homepage structure and UX flow',
                'Responsive UI built in production-ready code',
                'Clear iteration based on founder and user feedback',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950 p-4 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-20 flex justify-center">
          <Link href="/contact" className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-400">
            Start your project
          </Link>
        </div>
      </div>
    </main>
  );
}
