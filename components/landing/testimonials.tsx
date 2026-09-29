import { testimonialData } from '@/data/site';

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="chip mx-auto border-violet-400/20 bg-violet-500/10 text-violet-100">Customer stories</div>
          <h2 className="section-title mt-6">Teams move faster when the signal is clear.</h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonialData.map((person) => (
            <div key={person.name} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 font-semibold text-white">
                  {person.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{person.name}</div>
                  <div className="text-sm text-slate-400">{person.title}</div>
                </div>
              </div>
              <p className="text-base leading-7 text-slate-200">“{person.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
