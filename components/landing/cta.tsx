import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-24">
      <div className="container-shell">
        <div className="rounded-[32px] border border-violet-400/20 bg-gradient-to-r from-violet-500/15 via-slate-900 to-slate-950 p-8 text-center sm:p-12">
          <div className="mx-auto max-w-3xl">
            <div className="chip mx-auto border-violet-400/20 bg-violet-500/10 text-violet-100">Ready to move faster?</div>
            <h2 className="section-title mt-6">Build a more aligned growth engine.</h2>
            <p className="section-copy mx-auto text-slate-300">
              Launch with the clarity modern SaaS teams need to prioritize the right work and accelerate revenue.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#pricing"
                className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400"
              >
                Book a demo
              </Link>
              <Link
                href="#"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/10"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
