import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  zh: {
    badge: '11 / 投资论点',
    title: '为什么是现在？为什么是 AIFavaa？',
    reasons: [
      { label: '市场时机', desc: 'AI 模型成熟、视频消费爆发、创作者供给增长、品牌预算迁移——四股力量同时汇聚。' },
      { label: '团队', desc: '创始人具备跨境创业经验、内容制作专业能力、高速增长平台运营经验与 AI 战略视野。' },
      { label: '资本效率', desc: '$6M 种子轮建设核心基础设施，验证商业模式，18 个月内达成 DAU 10 万+。' },
      { label: '市场规模', desc: 'AI 视频市场从 $3.86B 增长至 $42.29B（2024-2030）。平台层是最后的万亿美元机会。' },
    ],
    returns: {
      title: '投资回报',
      items: [
        { time: '18M', label: 'A 轮目标', value: '$20M+，估值 3-5x' },
        { time: '24M', label: 'B 轮目标', value: '$100M+，估值 10x+' },
        { time: '36M', label: '退出目标', value: '市值 $10 亿+（IPO/并购）' },
      ],
    },
    metrics: {
      title: '关键指标（18 个月）',
      items: ['DAU：10 万+', '创作者：1 万+', '品牌客户：100+', '月收入：$50 万+'],
    },
  },
  en: {
    badge: '11 / Investment Thesis',
    title: 'Why Now? Why AIFavaa?',
    reasons: [
      { label: 'Market Timing', desc: 'AI models are mature, video consumption is exploding, creator supply is growing, and brand budgets are migrating — all four forces are converging.' },
      { label: 'Team', desc: 'Founders with cross-border startup experience, content production expertise, high-growth platform operations, and AI strategy vision.' },
      { label: 'Capital Efficiency', desc: '$6M seed round to build core infrastructure, validate business model, and reach 100K+ DAU within 18 months.' },
      { label: 'Market Size', desc: 'AI video market growing from $3.86B to $42.29B (2024-2030). Platform layer is the last trillion-dollar opportunity.' },
    ],
    returns: {
      title: 'Investment Returns',
      items: [
        { time: '18M', label: 'Series A Target', value: '$20M+ at 3-5x valuation' },
        { time: '24M', label: 'Series B Target', value: '$100M+ at 10x+ valuation' },
        { time: '36M', label: 'Exit Target', value: '$1B+ market cap (IPO/M&A)' },
      ],
    },
    metrics: {
      title: 'Key Metrics (18 Months)',
      items: ['DAU: 100K+', 'Creators: 10K+', 'Brand Customers: 100+', 'Monthly Revenue: $500K+'],
    },
  },
};

export default function Closing() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  const returnColors = [
    { bg: 'bg-blue-500/30', border: 'border-blue-400/50' },
    { bg: 'bg-cyan-500/30', border: 'border-cyan-400/50' },
    { bg: 'bg-purple-500/30', border: 'border-purple-400/50' },
  ];

  return (
    <section id="closing" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
              <span>{T.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              {T.title}
            </h2>
            <div className="space-y-4 mb-8">
              {T.reasons.map((r, i) => (
                <p key={i} className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  <strong>{r.label}{language === 'zh' ? '：' : ': '}</strong>{r.desc}
                </p>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-5 sm:p-8">
              <h3 className="text-2xl font-black text-white mb-6">{T.returns.title}</h3>
              <div className="space-y-4">
                {T.returns.items.map((item, i) => {
                  const c = returnColors[i] || returnColors[0];
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white font-black text-xs">{item.time}</span>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-400 uppercase">{item.label}</div>
                        <div className="text-xl font-black text-white">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-400/30 backdrop-blur-xl rounded-2xl p-5 sm:p-8">
              <h3 className="text-xl font-black text-white mb-4">{T.metrics.title}</h3>
              <ul className="space-y-3">
                {T.metrics.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300">
                    <span className="text-green-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
