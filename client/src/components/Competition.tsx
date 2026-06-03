import { useLanguage } from '@/contexts/LanguageContext';
import BrandName from '@/components/BrandName';

const content = {
  zh: {
    badge: '04 / 竞争分析',
    title: 'AIyavaa 的独有优势：AI + Wealth + RWA',
    subtitle: 'Not a model. Not a design tool. Not a labor marketplace.',
    desc: 'OpenAI 卖模型，Canva 卖设计，Fiverr 卖劳动力。AIyavaa 卖的是：创造和交易以及管理财富的机会——这是一条从未有人走通的完整闭环。',
    tableHeader: '能力维度',
    categories: [
      'AI内容创作能力',
      '数字资产确权',
      'AI资产交易市场',
      '财富管理与增值',
      'RWA真实资产代币化',
      '另类资产管理',
      '合伙人生态体系',
      '完整生态闭环',
    ],
    diff: {
      title: 'AIyavaa 独有定位：AI + Wealth + RWA 完整资产闭环',
      items: [
        { title: '✓ 不是模型提供商', desc: 'OpenAI 和 Anthropic 卖模型能力。AIyavaa 是调用所有模型的操作系统——模型是原材料，AIyavaa 是工厂。' },
        { title: '✓ 不是设计工具', desc: 'Canva 卖设计模板。AIyavaa 让任何人通过一句话创作任何数字内容，并将创作物确权为可交易资产。' },
        { title: '✓ 不是劳动力市场', desc: 'Fiverr 卖人工服务。AIyavaa 用 AI 替代劳动力，同时建立创作者与品牌之间的智能撮合与分润机制。' },
        { title: '✓ 是 AI 时代的资产操作系统', desc: 'AI发现资产 → AI生成资产 → AI分析资产 → AI确权资产 → AI发行资产 → AI交易资产 → AI管理资产。这是一条完整闭环。' },
      ],
    },
    assetLoop: {
      title: 'AI资产完整闭环：七步不可复制',
      steps: [
        { icon: '🔍', label: 'AI发现资产', desc: '识别可资产化的创作物' },
        { icon: '🎨', label: 'AI生成资产', desc: '一句话驱动全链路创作' },
        { icon: '📊', label: 'AI分析资产', desc: '智能估值与市场定价' },
        { icon: '🔐', label: 'AI确权资产', desc: '链上唯一所有权登记' },
        { icon: '🚀', label: 'AI发行资产', desc: '标准化资产发行上市' },
        { icon: '🌐', label: 'AI交易资产', desc: '全球市场撮合交易' },
        { icon: '💰', label: 'AI管理资产', desc: '智能财富增值管理' },
      ],
      note: '以后资产不仅是传统理解的资产——个人的视频、音乐、想法、实物、虚拟产品全部可以确权、定价、交易。',
    },
  },
  en: {
    badge: '04 / Competition Analysis',
    title: "AIyavaa's Unique Advantage: AI + Wealth + RWA",
    subtitle: 'Not a model. Not a design tool. Not a labor marketplace.',
    desc: 'OpenAI sells models. Canva sells design. Fiverr sells labor. AIyavaa sells: the opportunity to create, trade, and manage wealth — a complete loop that no one has ever built.',
    tableHeader: 'Capability Dimension',
    categories: [
      'AI Content Creation',
      'Digital Asset Ownership',
      'AI Asset Trading Market',
      'Wealth Management & Appreciation',
      'RWA Real Asset Tokenization',
      'Alternative Asset Management',
      'Partner Ecosystem',
      'Complete Ecosystem Loop',
    ],
    diff: {
      title: "AIyavaa's Unique Position: AI + Wealth + RWA Complete Asset Loop",
      items: [
        { title: '✓ Not a model provider', desc: 'OpenAI and Anthropic sell model capabilities. AIyavaa is the OS that calls all models — models are raw materials, AIyavaa is the factory.' },
        { title: '✓ Not a design tool', desc: 'Canva sells design templates. AIyavaa lets anyone create any digital content with one sentence and registers creations as tradeable assets.' },
        { title: '✓ Not a labor marketplace', desc: 'Fiverr sells human services. AIyavaa replaces labor with AI while building intelligent matching and profit-sharing between creators and brands.' },
        { title: '✓ The AI-era asset operating system', desc: 'AI Discover → AI Generate → AI Analyze → AI Register → AI Issue → AI Trade → AI Manage. This is a complete, irreplicable loop.' },
      ],
    },
    assetLoop: {
      title: 'AI Asset Complete Loop: Seven Irreplicable Steps',
      steps: [
        { icon: '🔍', label: 'AI Discover', desc: 'Identify assetizable creations' },
        { icon: '🎨', label: 'AI Generate', desc: 'One sentence drives full-chain creation' },
        { icon: '📊', label: 'AI Analyze', desc: 'Intelligent valuation and market pricing' },
        { icon: '🔐', label: 'AI Register', desc: 'On-chain unique ownership registration' },
        { icon: '🚀', label: 'AI Issue', desc: 'Standardized asset issuance and listing' },
        { icon: '🌐', label: 'AI Trade', desc: 'Global market matching and trading' },
        { icon: '💰', label: 'AI Manage', desc: 'Intelligent wealth appreciation management' },
      ],
      note: 'Assets are no longer just traditional assets — personal videos, music, ideas, physical goods, and virtual products can all be owned, priced, and traded.',
    },
  },
};

// score: 0=none, 1=weak, 2=medium, 3=strong
const competitors = [
  { name: 'AIyavaa', create: 3, ownership: 3, trading: 3, wealth: 3, rwa: 3, alternative: 3, partner: 3, loop: 3, highlight: true },
  { name: 'OpenAI', create: 3, ownership: 0, trading: 0, wealth: 0, rwa: 0, alternative: 0, partner: 0, loop: 0 },
  { name: 'Canva', create: 2, ownership: 0, trading: 1, wealth: 0, rwa: 0, alternative: 0, partner: 0, loop: 0 },
  { name: 'Fiverr', create: 0, ownership: 0, trading: 2, wealth: 0, rwa: 0, alternative: 0, partner: 1, loop: 0 },
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

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-8">
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
                const fields = ['create', 'ownership', 'trading', 'wealth', 'rwa', 'alternative', 'partner', 'loop'] as const;
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

        {/* Diff Cards */}
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-2xl p-5 sm:p-8 mb-8">
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

        {/* AI Asset Loop */}
        <div className="bg-gradient-to-br from-white/6 to-white/3 border border-white/12 rounded-2xl p-6 sm:p-8">
          <h4 className="font-black text-white text-center mb-6">{T.assetLoop.title}</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-5">
            {T.assetLoop.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl mb-1">{step.icon}</div>
                <div className="text-xs font-bold text-white mb-0.5">{step.label}</div>
                <div className="text-[10px] text-slate-400 leading-snug">{step.desc}</div>
                {i < T.assetLoop.steps.length - 1 && (
                  <div className="hidden lg:flex justify-center mt-2">
                    <svg className="w-3 h-3 text-slate-600 rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 text-center max-w-2xl mx-auto italic">{T.assetLoop.note}</p>
        </div>
      </div>
    </section>
  );
}
