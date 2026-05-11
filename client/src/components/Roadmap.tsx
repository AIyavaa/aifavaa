import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  zh: {
    badge: '07 / 发展路径',
    title: '发展路径',
    subtitle: 'Growth Trajectory',
    desc: '运营与资本双轨并行，每个阶段形成正向飞轮，驱动下一阶段加速。',
    phases: [
      { label: '未来 0–6 个月', sub: '产品验证期' },
      { label: '未来 6–12 个月', sub: '生态扩张期' },
      { label: '未来 12–24 个月', sub: '平台护城河期' },
      { label: '未来 2–3 年', sub: 'IPO 冲刺期' },
    ],
    rows: [
      {
        track: '运营路径',
        icon: '🚀',
        color: 'cyan',
        cells: [
          { highlights: ['10,000+ 创作者', '品牌签约 1,000+', '视频内容 100,000+'], note: '核心产品验证，建立创作者基础池' },
          { highlights: ['1,000 万创作者', '品牌签约 10 万+', '视频内容 10 亿+', '1 亿用户 · 100 亿流量'], note: '生态飞轮启动，品牌规模化入驻' },
          { highlights: ['1 亿创作者', '品牌签约 100 万+', '视频内容 100 亿+', '10 亿用户 · 100 亿流量'], note: '平台护城河成型，数据飞轮加速' },
          { highlights: ['头部 AI 原生视频平台', '互动剧 · IP 剧', '行业标准制定者'], note: '生态成熟，向 IPO 冲刺' },
        ],
      },
      {
        track: '资本路径',
        icon: '💰',
        color: 'purple',
        cells: [
          { highlights: ['A+ 轮筹备'], note: '完成产品验证，准备融资材料' },
          { highlights: ['A+ 轮完成'], note: '数据支撑估值，完成 A+ 轮融资' },
          { highlights: ['B 轮 · C 轮'], note: '规模化扩张，引入战略投资者' },
          { highlights: ['IPO'], note: '全球资本市场上市' },
        ],
      },
    ],
  },
  en: {
    badge: '07 / Growth Roadmap',
    title: 'Growth Trajectory',
    subtitle: 'Operational & Capital Dual Track',
    desc: 'Operational and capital tracks run in parallel, with each phase forming a positive flywheel that accelerates the next.',
    phases: [
      { label: 'Next 0–6 Months', sub: 'Product Validation' },
      { label: 'Next 6–12 Months', sub: 'Ecosystem Expansion' },
      { label: 'Next 12–24 Months', sub: 'Platform Moat' },
      { label: 'Next 2–3 Years', sub: 'IPO Sprint' },
    ],
    rows: [
      {
        track: 'Operational Track',
        icon: '🚀',
        color: 'cyan',
        cells: [
          { highlights: ['10,000+ Creators', '1,000+ Brand Contracts', '100,000+ Videos'], note: 'Core product validation, building creator base' },
          { highlights: ['10M Creators', '100K+ Brand Contracts', '1B+ Videos', '100M Users · 10B Traffic'], note: 'Ecosystem flywheel launched, brands scaling in' },
          { highlights: ['100M Creators', '1M+ Brand Contracts', '10B+ Videos', '1B Users · 10B Traffic'], note: 'Platform moat formed, data flywheel accelerating' },
          { highlights: ['Top AI-Native Video Platform', 'Interactive Drama · IP Series', 'Industry Standard Setter'], note: 'Mature ecosystem, sprinting toward IPO' },
        ],
      },
      {
        track: 'Capital Track',
        icon: '💰',
        color: 'purple',
        cells: [
          { highlights: ['Series A+ Preparation'], note: 'Complete product validation, prepare fundraising materials' },
          { highlights: ['Series A+ Closed'], note: 'Data-backed valuation, Series A+ completed' },
          { highlights: ['Series B · Series C'], note: 'Scale expansion, bring in strategic investors' },
          { highlights: ['IPO'], note: 'Global capital market listing' },
        ],
      },
    ],
  },
};

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-400/30', text: 'text-cyan-300', badge: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/30' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-400/30', text: 'text-purple-300', badge: 'bg-purple-500/20 text-purple-200 border-purple-400/30' },
};

export default function Roadmap() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <section id="roadmap" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>{T.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            {T.title}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">{T.subtitle}</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">{T.desc}</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/3">
                <th className="text-left py-4 px-5 font-bold text-slate-400 text-xs uppercase tracking-wider w-36">
                  {language === 'zh' ? '路径' : 'Track'}
                </th>
                {T.phases.map((phase, i) => (
                  <th key={i} className="text-center py-4 px-4 font-bold text-white text-sm">
                    <div>{phase.label}</div>
                    <div className="text-xs text-slate-400 font-normal mt-0.5">{phase.sub}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {T.rows.map((row, ri) => {
                const c = colorMap[row.color] || colorMap.cyan;
                return (
                  <tr key={ri} className="border-b border-white/5">
                    <td className={`py-5 px-5 font-bold text-sm ${c.text}`}>
                      <div className="flex items-center gap-2">
                        <span>{row.icon}</span>
                        <span>{row.track}</span>
                      </div>
                    </td>
                    {row.cells.map((cell, ci) => (
                      <td key={ci} className={`py-5 px-4 align-top ${ri === 0 ? c.bg : ''}`}>
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {cell.highlights.map((h, hi) => (
                            <span key={hi} className={`inline-flex text-xs font-bold px-2.5 py-1 rounded-full border ${c.badge}`}>{h}</span>
                          ))}
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">{cell.note}</p>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {T.phases.map((phase, pi) => (
            <div key={pi} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="px-5 py-3 bg-white/5 border-b border-white/10">
                <div className="font-bold text-white text-sm">{phase.label}</div>
                <div className="text-xs text-slate-400">{phase.sub}</div>
              </div>
              <div className="p-5 space-y-4">
                {T.rows.map((row, ri) => {
                  const c = colorMap[row.color] || colorMap.cyan;
                  return (
                    <div key={ri}>
                      <div className={`flex items-center gap-2 font-bold text-sm mb-2 ${c.text}`}>
                        <span>{row.icon}</span>
                        <span>{row.track}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-1.5">
                        {row.cells[pi].highlights.map((h, hi) => (
                          <span key={hi} className={`text-xs font-bold px-2.5 py-1 rounded-full border ${c.badge}`}>{h}</span>
                        ))}
                      </div>
                      <p className="text-xs text-slate-500">{row.cells[pi].note}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
