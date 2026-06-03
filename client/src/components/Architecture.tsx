import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  zh: {
    badge: '03 / 系统架构',
    title: '四位一体架构：全球首个 AI 万能操作系统',
    subtitle: 'Create · Own · Trade · Earn — Complete AI Ecosystem',
    desc: 'AIFavaa 不是单一工具，而是覆盖 AI 创作、数字资产确权、全球市场交易与智能财富管理的完整操作系统。四层架构形成不可复制的生态闭环。',
    layers: [
      {
        num: '01',
        icon: '🎨',
        tag: 'Create',
        title: 'AI Universal OS',
        subtitle: '智能意图解构引擎',
        desc: '基于四层意图解构机制（IDE），将任意创作需求分解为最优执行路径，自动调度全球最佳模型、工具与数据资源。',
        features: ['智能意图解构引擎（IDE）', '四层结构机制（解析→路由→生成→输出）', '跨模态协同：音视频同步生成', '全球模型路由与调度'],
        color: 'from-cyan-500/15 to-cyan-600/5',
        border: 'border-cyan-400/30',
        accent: 'text-cyan-300',
        numColor: 'text-cyan-400',
      },
      {
        num: '02',
        icon: '🔐',
        tag: 'Own',
        title: 'AI Asset Chain',
        subtitle: 'AI资产确权与交易网络',
        desc: '定义全球AI资产确权标准，中立、不站边，类似食品行业的欧盟认证体系。为各AI领域建立统一的确权标准，保障创作者权益。',
        features: ['中立确权标准定义（类欧盟认证）', '各AI领域确权标准体系', '智能合约自动上链确权', '多方收益分配机制'],
        color: 'from-blue-500/15 to-blue-600/5',
        border: 'border-blue-400/30',
        accent: 'text-blue-300',
        numColor: 'text-blue-400',
      },
      {
        num: '03',
        icon: '🌐',
        tag: 'Trade',
        title: 'AI Marketplace',
        subtitle: '全球AI资产交易市场',
        desc: '作为平台层，连接AI资产的供给方与需求方。AI Agent、Prompt、Workflow、数字人、数据资产、内容资产均可在此交易。',
        features: ['AI资产全品类交易市场', '标准化定价与市场发现机制', '合伙人调动资源→创作者竞价抢单', '三方分润：平台+创作者+合伙人'],
        color: 'from-violet-500/15 to-violet-600/5',
        border: 'border-violet-400/30',
        accent: 'text-violet-300',
        numColor: 'text-violet-400',
      },
      {
        num: '04',
        icon: '💰',
        tag: 'Earn',
        title: 'AIFavaa Wealth OS',
        subtitle: '全球AI财富管理操作系统',
        desc: '为高净值客户提供AI驱动的全资产管理平台，覆盖传统资产、AI资产、RWA真实世界资产与另类资产的统一管理与增值。',
        features: ['AI资产全景视图与智能分析', 'RWA真实世界资产代币化', '另类资产中心（私募/IP/数字媒体）', 'AI客户经理效率10x提升'],
        color: 'from-emerald-500/15 to-emerald-600/5',
        border: 'border-emerald-400/30',
        accent: 'text-emerald-300',
        numColor: 'text-emerald-400',
      },
    ],
    loop: {
      title: 'AIFavaa 完整 AI 生态闭环',
      steps: ['创造 Create', '确权 Own', '交易 Trade', '财富管理 Wealth Manage', '收益 Earn'],
      desc: '五步完整闭环，形成不可复制的网络效应。每一步都在 AIFavaa 平台内完成，数据、资产、收益全程可追溯。',
    },
  },
  en: {
    badge: '03 / System Architecture',
    title: 'Four-in-One Architecture: The World\'s First AI Universal OS',
    subtitle: 'Create · Own · Trade · Earn — Complete AI Ecosystem',
    desc: 'AIFavaa is not a single tool — it is a complete operating system covering AI creation, digital asset ownership, global marketplace trading, and intelligent wealth management. The four-layer architecture forms an irreplicable ecosystem loop.',
    layers: [
      {
        num: '01',
        icon: '🎨',
        tag: 'Create',
        title: 'AI Universal OS',
        subtitle: 'Intelligent Intent Decomposition Engine',
        desc: 'Based on the four-layer Intent Decomposition Engine (IDE), it breaks down any creative need into the optimal execution path, automatically scheduling the best global models, tools, and data resources.',
        features: ['Intelligent Intent Decomposition Engine (IDE)', 'Four-layer mechanism (Parse → Route → Generate → Output)', 'Cross-modal collaboration: synchronized audio-video generation', 'Global model routing and orchestration'],
        color: 'from-cyan-500/15 to-cyan-600/5',
        border: 'border-cyan-400/30',
        accent: 'text-cyan-300',
        numColor: 'text-cyan-400',
      },
      {
        num: '02',
        icon: '🔐',
        tag: 'Own',
        title: 'AI Asset Chain',
        subtitle: 'AI Asset Ownership & Trading Network',
        desc: 'Defines global AI asset ownership standards — neutral, non-partisan, similar to the EU certification system in the food industry. Establishes unified ownership standards for all AI domains to protect creator rights.',
        features: ['Neutral ownership standard definition (EU-certification equivalent)', 'Domain-specific AI asset certification systems', 'Smart contract auto on-chain registration', 'Multi-party revenue distribution mechanism'],
        color: 'from-blue-500/15 to-blue-600/5',
        border: 'border-blue-400/30',
        accent: 'text-blue-300',
        numColor: 'text-blue-400',
      },
      {
        num: '03',
        icon: '🌐',
        tag: 'Trade',
        title: 'AI Marketplace',
        subtitle: 'Global AI Asset Trading Market',
        desc: 'Acting as the platform layer, connecting AI asset suppliers and buyers. AI Agents, Prompts, Workflows, Digital Humans, Data Assets, and Content Assets can all be traded here.',
        features: ['Full-category AI asset trading market', 'Standardized pricing and market discovery mechanism', 'Partners mobilize resources → Creators bid for orders', 'Three-party profit sharing: Platform + Creator + Partner'],
        color: 'from-violet-500/15 to-violet-600/5',
        border: 'border-violet-400/30',
        accent: 'text-violet-300',
        numColor: 'text-violet-400',
      },
      {
        num: '04',
        icon: '💰',
        tag: 'Earn',
        title: 'AIFavaa Wealth OS',
        subtitle: 'Global AI Wealth Management OS',
        desc: 'Provides HNW clients with an AI-driven total asset management platform, covering unified management and appreciation of traditional assets, AI assets, RWA real-world assets, and alternative assets.',
        features: ['AI asset panoramic view and intelligent analysis', 'RWA real-world asset tokenization', 'Alternative Asset Hub (PE / IP / Digital Media)', 'AI relationship manager efficiency 10x improvement'],
        color: 'from-emerald-500/15 to-emerald-600/5',
        border: 'border-emerald-400/30',
        accent: 'text-emerald-300',
        numColor: 'text-emerald-400',
      },
    ],
    loop: {
      title: 'AIFavaa Complete AI Ecosystem Loop',
      steps: ['Create', 'Own', 'Trade', 'Wealth Manage', 'Earn'],
      desc: 'A complete five-step loop forming irreplicable network effects. Every step is completed within the AIFavaa platform — data, assets, and earnings are fully traceable throughout.',
    },
  },
};

export default function Architecture() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <section id="architecture" className="relative py-20 lg:py-28">
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

        {/* Four Layer Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-10">
          {T.layers.map((layer, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${layer.color} border ${layer.border} backdrop-blur-xl rounded-2xl p-5 sm:p-6 group hover:scale-[1.02] transition-all`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-2xl font-black ${layer.numColor} opacity-40`}>{layer.num}</span>
                <span className="text-lg">{layer.icon}</span>
                <span className={`text-[10px] font-black uppercase tracking-widest ${layer.accent}`}>{layer.tag}</span>
              </div>
              <div className="font-black text-white text-base mb-0.5">{layer.title}</div>
              <div className={`text-xs font-bold mb-3 ${layer.accent}`}>{layer.subtitle}</div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">{layer.desc}</p>
              <ul className="space-y-1.5">
                {layer.features.map((f, j) => (
                  <li key={j} className="flex gap-2 text-xs text-slate-300">
                    <span className={`font-bold flex-shrink-0 ${layer.accent}`}>→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ecosystem Loop */}
        <div className="bg-gradient-to-br from-white/6 to-white/3 border border-white/12 rounded-2xl p-6 sm:p-8">
          <h4 className="font-black text-white text-center mb-6">{T.loop.title}</h4>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5">
            {T.loop.steps.map((step, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3">
                <div className={`px-3 sm:px-4 py-2 rounded-xl border font-bold text-sm text-center ${
                  i === 0 ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300' :
                  i === 1 ? 'bg-blue-500/20 border-blue-400/40 text-blue-300' :
                  i === 2 ? 'bg-violet-500/20 border-violet-400/40 text-violet-300' :
                  i === 3 ? 'bg-amber-500/20 border-amber-400/40 text-amber-300' :
                  'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
                }`}>
                  {step}
                </div>
                {i < T.loop.steps.length - 1 && (
                  <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-400 text-center max-w-2xl mx-auto">{T.loop.desc}</p>
        </div>
      </div>
    </section>
  );
}
