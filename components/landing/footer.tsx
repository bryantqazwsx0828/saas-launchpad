export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-lg font-bold text-white">
            N
          </div>
          <div>
            <div className="text-lg font-semibold text-white">Northstar</div>
            <div className="text-sm text-slate-400">Built for modern SaaS teams</div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-400">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
      </div>
    </footer>
  );
}
