import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-lg font-bold text-white">
            B
          </div>
          <div>
            <div className="text-lg font-semibold text-white">Bryant Studio</div>
            <div className="text-sm text-slate-400">SaaS designer & frontend developer</div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-400">
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/case-study" className="hover:text-white">Case Study</Link>
          <Link href="/process" className="hover:text-white">Process</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
