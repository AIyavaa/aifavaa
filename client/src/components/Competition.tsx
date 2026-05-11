import { useLanguage } from '@/contexts/LanguageContext';
import BrandName from '@/components/BrandName';

const content = {
  zh: {
    badge: '04 / 竞争分析',
    title: '竞争格局：没有人在做平台',
    subtitle: 'The white space is in platform integration',
    desc: 'YouTube 擅长内容分发，Runway/Pika 擅长生成能力，TikTok Shop 擅长交易闭环，但没有人同时掌控生成、分发、创作者、品牌与交易的完整生态。',
    tableHeader: '能力维度',
    categories: ['生成能力', '内容分发', '创作者留存', '用户互动与共创', '品牌需求满足', '交易闭环', '版权与规则保护', '平台生态整合'],
    diff: {
      title: 'AIyavaa 的差异化定位',
      items: [
        { title: '✓ 不是生成工具', desc: 'Runway 和 Pika 已经做得很好。我们专注于"生成后"的全链条：分发、交易、变现、生态。' },
        { title: '✓ 不是内容平台', desc: 'YouTube 和 TikTok 已经垄断了消费端。我们专注于"创作者 → 品牌"的 B2B 交易链路。' },
        { title: '✓ 不是电商平台', desc: 'TikTok Shop 做的是商品交易。我们做的是内容与创意服务的交易。' },
        { title: '✓ 是生态连接器', desc: '我们是模型、创作者、品牌、用户之间的"中间件"，通过规则、激励与数据飞轮实现生态增长。' },
      ],
    },
  },
  en: {
    badge: '04 / Competition Analysis',
    title: 'Competitive Landscape: No One Is Building a Platform',
    subtitle: 'The white space is in platform integration',
    desc: 'YouTube excels at content distribution, Runway/Pika at generation capability, TikTok Shop at transaction closure — but no one simultaneously controls generation, distribution, creators, brands, and transactions in a unified ecosystem.',
    tableHeader: 'Capability Dimension',
    categories: ['Generation Capability', 'Content Distribution', 'Creator Retention', 'User Interaction & Co-creation', 'Brand Demand Fulfillment', 'Transaction Closure', 'Copyright & Rule Protection', 'Platform Ecosystem Integration'],
    diff: {
      title: "AIyavaa's Differentiated Positioning",
      items: [
        { title: '✓ Not a generation tool', desc: 'Runway and Pika already do this well. We focus on the full chain after generation: distribution, transactions, monetization, and ecosystem.' },
        { title: '✓ Not a content platform', desc: 'YouTube and TikTok already dominate the consumption side. We focus on the B2B transaction chain from creators to brands.' },
        { title: '✓ Not an e-commerce platform', desc: 'TikTok Shop handles product transactions. We handle transactions for content and creative services.' },
        { title: '✓ An ecosystem connector', desc: 'We are the "middleware" between models, creators, brands and users — achieving ecosystem growth through rules, incentives and data flywheels.' },
      ],
    },
  },
};

// score: 0=none, 1=weak, 2=medium, 3=strong
// fields: strength(生成), distribution(分发), creator(创作者留存), interaction(用户互动), brand(品牌), transaction(交易闭环), copyright(版权), ecosystem(生态整合)
const competitors = [
  { name: 'AIyavaa', strength: 3, distribution: 3, creator: 3, brand: 3, interaction: 3, transaction: 3, copyright: 3, ecosystem: 3, highlight: true },
  { name: 'YouTube', strength: 1, distribution: 3, creator: 3, brand: 2, interaction: 2, transaction: 1, copyright: 2, ecosystem: 2 },
  { name: 'Runway / Pika', strength: 3, distribution: 1, creator: 1, brand: 1, interaction: 1, transaction: 1, copyright: 1, ecosystem: 1 },
  { name: 'TikTok Shop', strength: 1, distribution: 3, creator: 2, brand: 3, interaction: 2, transaction: 3, copyright: 1, ecosystem: 2 },
];

const renderScore = (score: number, highlight?: boolean) => (
  <div className="flex gap-1 justify-center">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className={`w-2.5 h-2.5 rounded-full transition-all ${
          i <= score
            ? highlight
              ? 'bg-cyan-400 shadow-sm shadow-cyan-400/50'
              : 'bg-blue-400'
            : 'bg-white/15'
        }`}
      />
    ))}
  </div>
);

export default function Competition() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <section id="competition" className="relative py-20 lg:py-28">
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

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/3">
                <th className="text-left py-3 px-4 font-bold text-slate-400 text-xs uppercase tracking-wider">{T.tableHeader}</th>
                {competitors.map((comp) => (
                  <th
                    key={comp.name}
                    className={`text-center py-3 px-4 font-bold text-sm ${'highlight' in comp && comp.highlight ? 'text-cyan-300' : 'text-white'}`}
                  >
                    {'highlight' in comp && comp.highlight ? (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                        <BrandName />
                      </span>
                    ) : comp.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {T.categories.map((cat, i) => {
                const fields = ['strength', 'distribution', 'creator', 'interaction', 'brand', 'transaction', 'copyright', 'ecosystem'] as const;
                return (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-all">
                    <td className="py-3 px-4 font-semibold text-slate-300 text-sm">{cat}</td>
                    {competitors.map((comp) => (
                      <td
                        key={comp.name}
                        className={`text-center py-3 px-4 ${'highlight' in comp && comp.highlight ? 'bg-cyan-500/5' : ''}`}
                      >
                        {renderScore(comp[fields[i]], 'highlight' in comp && comp.highlight)}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-2xl p-5 sm:p-8">
          <h4 className="font-black text-white mb-4">{T.diff.title}</h4>
          <div className="grid md:grid-cols-2 gap-5">
            {T.diff.items.map((item, i) => (
              <div key={i}>
                <h5 className="font-bold text-cyan-300 mb-2">{item.title}</h5>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
