export default function Hero() {
  return (
    <section id="hero" className="relative py-20 lg:py-0 lg:min-h-[calc(100vh-72px)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-7 lg:gap-8 items-stretch">
          {/* Left */}
          <div className="flex flex-col justify-center gap-6 lg:gap-7">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
                <span>🎬</span>
                <span>AI Video Ecosystem Platform</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight text-white mb-4">
                AIyavaa：<br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">成为 AI 视频时代的统一入口</span>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-3">The Unified Entry Point for AI Video</div>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mt-6">
                不是再做一个 AI 视频工具，而是把 <strong>用户消费、创作者生产、品牌交易</strong> 与 <strong>模型能力、版权规则、平台治理</strong> 组织成一个可持续增长的生态系统。
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#market"
                className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-blue-400/30 text-white hover:from-blue-500/40 hover:to-cyan-500/40 hover:border-blue-400/50 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
              >
                Explore the opportunity
              </a>
              <a
                href="#funding"
                className="px-6 py-3 rounded-xl font-bold text-sm border border-white/12 text-slate-300 hover:text-white hover:bg-white/5 transition-all hover:-translate-y-0.5"
              >
                See the funding plan
              </a>
            </div>

            {/* Investment Thesis Card */}
            <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 lg:p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-3">Core Investment Thesis</div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-3">
                AI 视频的上半场比拼"能不能生成"，下半场比拼"谁能组织生态"。
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                随着模型能力商品化、创作链路变长、品牌需求走向规模化，真正的长期价值将属于掌握供给、交易、规则与数据飞轮的平台。
              </p>
            </div>
          </div>

          {/* Right - Market Signals */}
          <div className="grid grid-rows-2 gap-6 lg:gap-5 lg:self-center">
            {/* Market Signals Card */}
            <div className="relative bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 lg:p-7 overflow-hidden">
              <div className="absolute w-56 h-56 bg-blue-500/20 rounded-full blur-3xl -right-20 -top-20" />
              <div className="relative z-10">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-3">Market Signals</div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-4">
                  四个信号同时成立，平台窗口正在打开
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'AI to global economy by 2030', value: '$15.7T', desc: '智能经济总盘子' },
                    { label: 'Creator economy by 2027', value: '$480B', desc: '创作者经济持续扩张' },
                    { label: 'AI Video market 2024 → 2030', value: '$3.86B → $42.29B', desc: 'AI 视频产业进入增长通道' },
                    { label: 'YouTube Shorts daily views', value: '200B+', desc: '视频消费需求已被验证' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/8 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
                      <div className="text-lg sm:text-xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-400">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Platform Overview Card */}
            <div className="relative bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 lg:p-7">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-3">AIyavaa in one view</div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-4">
                统一连接模型、创作者、品牌与用户
              </h3>
              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  { label: '用户消费中心', sub: 'Discover / Interact / Pay' },
                  { label: 'AIyavaa', sub: 'Platform + Rule Engine', highlight: true },
                  { label: '品牌交易中心', sub: 'Request / Buy / Rebuy' },
                  { label: '模型能力中台', sub: 'Route / Orchestrate' },
                  { label: '管理大脑中台', sub: 'Match / Govern / Optimize' },
                  { label: '创作者生产中心', sub: 'Create / Publish / Monetize' },
                ].map((node, i) => (
                  <div
                    key={i}
                    className={`py-3 px-2 rounded-lg text-center text-xs sm:text-sm font-bold ${
                      node.highlight
                        ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-400/50'
                        : 'bg-white/6 border border-white/9'
                    }`}
                  >
                    <div className="text-white">{node.label}</div>
                    <div className="text-xs text-slate-400 mt-1">{node.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
