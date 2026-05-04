export default function Architecture() {
  const layers = [
    { title: '用户消费中心', desc: '发现、互动、支付、社区' },
    { title: '创作者生产中心', desc: '创作、发布、变现、资产沉淀' },
    { title: '品牌交易中心', desc: '需求发布、采购、交付、复购' },
    { title: '模型能力中台', desc: '路由、编排、质量控制、成本优化' },
    { title: '管理大脑中台', desc: '匹配、治理、激励、数据分析' },
    { title: '版权规则引擎', desc: '版权登记、交易结算、纠纷处理' },
  ];

  return (
    <section id="architecture" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>03</span>
            <span>/</span>
            <span>Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            六层架构：从工具到平台的升级
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">From tools to ecosystem platform</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            AIyavaa 不是简单的 AI 视频生成工具，而是一个完整的生态平台，通过六层架构实现用户、创作者、品牌与模型的有机连接。
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-10 items-start">
          {/* Left - Visual */}
          <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
            <div className="relative z-10 space-y-3">
              {layers.map((layer, i) => (
                <div
                  key={i}
                  className="bg-white/6 border border-white/10 rounded-lg p-4 hover:bg-white/8 hover:border-blue-400/30 transition-all"
                >
                  <div className="font-bold text-white text-sm">{layer.title}</div>
                  <div className="text-xs text-slate-400 mt-1">{layer.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Details */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 group hover:border-blue-400/30 hover:from-white/12 transition-all">
              <h4 className="font-black text-white mb-2">核心特性</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>多角色协作：用户、创作者、品牌、模型方在同一平台</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>完整的交易闭环：从需求到交付到复购</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>智能匹配与优化：AI 驱动的资源分配</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 group hover:border-blue-400/30 hover:from-white/12 transition-all">
              <h4 className="font-black text-white mb-2">竞争优势</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-cyan-400 font-bold">→</span>
                  <span>掌握供给端：创作者网络与内容库</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400 font-bold">→</span>
                  <span>掌握需求端：品牌客户与交易数据</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400 font-bold">→</span>
                  <span>掌握规则：版权、质量、激励机制</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
