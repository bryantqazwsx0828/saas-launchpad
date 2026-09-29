import Link from 'next/link';

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-lg font-bold shadow-glow">
            N
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">Northstar</span>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:text-white sm:inline-flex">
            Sign in
          </button>
          <button className="rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400">
            Book demo
          </button>
        </div>
      </div>
    </header>
  );
}
