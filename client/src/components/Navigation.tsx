export default function Navigation() {
  const navLinks = [
    { href: '#market', label: 'Market' },
    { href: '#pain', label: 'Pain Map' },
    { href: '#architecture', label: 'Architecture' },
    { href: '#competition', label: 'Competition' },
    { href: '#business', label: 'Business' },
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#funding', label: 'Funding' },
    { href: '#team', label: 'Team' },
    { href: '#premium', label: 'Premium Products' },
    { href: '#closing', label: 'Closing' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-slate-950/68 border-b border-white/8">
      <div className="max-w-7xl mx-auto px-6 py-0">
        <div className="flex justify-between items-center gap-6 min-h-[72px]">
          {/* Brand */}
          <a href="#hero" className="flex items-center gap-3 font-black tracking-wide">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/30 relative overflow-hidden">
              <div className="absolute inset-0.5 rounded-lg border border-white/35" />
            </div>
            <div>
              <div className="text-sm font-black">AIyavaa</div>
              <div className="text-xs font-semibold text-slate-400 tracking-widest uppercase">Interactive Investor Story</div>
            </div>
          </a>

          {/* Nav Links */}
          <div className="hidden lg:flex gap-2 flex-wrap justify-end">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-full text-xs font-semibold text-slate-400 hover:text-slate-100 transition-all hover:border-white/12 hover:bg-white/5 border border-transparent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
