export default function Market() {
  const opportunities = [
    { label: 'AI to global economy by 2030', value: '$15.7T', desc: 'Global AI Economy', detail: 'AI is restructuring content production, marketing distribution, and consumer transactions.' },
    { label: 'Creator economy by 2027', value: '$480B', desc: 'Creator Economy Expansion', detail: 'AI video producers will expand from a small number of professional teams to a broader creator community.' },
    { label: 'AI Video market 2024 → 2030', value: '$3.86B → $42.29B', desc: 'AI Video Industry Growth', detail: 'The cost structure of video content production and consumption is being fundamentally transformed.' },
    { label: 'YouTube Shorts daily views', value: '200B+', desc: 'Video Consumption Verified', detail: 'Short videos have become the mainstream content consumption format, with huge market potential for AI-generated videos.' },
  ];

  return (
    <section id="market" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>01</span>
            <span>/</span>
            <span>Market Opportunity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            万亿美元生态位真空：机会不在单一模型，而在统一入口
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">The white space sits at the ecosystem layer</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            AI 能力成熟、视频消费爆发、创作者供给增长、品牌预算迁移——四股力量同时出现，但中间平台仍然缺位。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {opportunities.map((opp, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 overflow-hidden group hover:border-blue-400/30 hover:from-white/12 transition-all"
            >
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all" />
              <div className="relative z-10">
                <div className="text-xs text-slate-400 mb-2">{opp.label}</div>
                <div className="text-3xl sm:text-4xl font-black text-white mb-2">{opp.value}</div>
                <div className="text-sm font-bold text-slate-200 mb-3">{opp.desc}</div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{opp.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
