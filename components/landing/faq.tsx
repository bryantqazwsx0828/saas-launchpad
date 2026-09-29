import { faqs } from '@/data/site';

export function Faq() {
  return (
    <section id="resources" className="py-24">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="chip mx-auto border-violet-400/20 bg-violet-500/10 text-violet-100">FAQ</div>
            <h2 className="section-title mt-6">Questions teams ask before they switch.</h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
