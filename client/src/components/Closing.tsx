export default function Closing() {
  return (
    <section id="closing" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
              <span>11</span>
              <span>/</span>
              <span>Investment Thesis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Why Now? Why AIyavaa?
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                <strong>Market Timing:</strong> AI models are mature, video consumption is exploding, creator supply is growing, and brand budgets are migrating—all four forces are converging.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                <strong>Team:</strong> Founders with cross-border startup experience, content production expertise, high-growth platform operations, and AI strategy vision.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                <strong>Capital Efficiency:</strong> $6M seed round to build core infrastructure, validate business model, and reach 100K+ DAU within 18 months.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                <strong>Market Size:</strong> AI video market growing from $3.86B to $42.29B (2024-2030). Platform layer is the last trillion-dollar opportunity.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-8">
              <h3 className="text-2xl font-black text-white mb-6">Investment Returns</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/30 border border-blue-400/50 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black">18M</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase">Series A Target</div>
                    <div className="text-xl font-black text-white">$20M+ at 3-5x valuation</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/30 border border-cyan-400/50 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black">24M</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase">Series B Target</div>
                    <div className="text-xl font-black text-white">$100M+ at 10x+ valuation</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/30 border border-purple-400/50 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black">36M</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase">Exit Target</div>
                    <div className="text-xl font-black text-white">$1B+ market cap (IPO/M&A)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-400/30 backdrop-blur-xl rounded-2xl p-8">
              <h3 className="text-xl font-black text-white mb-4">Key Metrics (18 Months)</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-slate-300">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>DAU: 100K+</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Creators: 10K+</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Brand Customers: 100+</span>
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Monthly Revenue: $500K+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
