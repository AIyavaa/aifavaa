import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { brandText } from '@/lib/brandText';

const content = {
  zh: {
    badge: '07 / 我们是谁',
    title: '六大核心业务模块',
    subtitle: 'AI Universal OS — 一句话，驱动一切数字生产力',
    desc: 'AIFavaa 不是单一工具，而是一个完整的 AI 操作系统生态——从创作到确权，从交易到财富管理，六大模块形成不可分割的闭环。',
    modules: [
      {
        id: 'creation',
        num: '8.1',
        icon: '🎨',
        label: 'AI Creation Hub',
        title: 'AI 创作中心',
        tagline: '一句话生成任何内容',
        desc: '图片、海报、PPT、漫画、动画、小说、短视频、广告片、电商素材、财经分析、教育内容、音乐、设计——输入一句话，AI 即刻生成。如果时间不够或软件不熟悉，还可以发布需求，请真人代劳。',
        features: ['图片 / 海报 / PPT', '动画 / 短视频 / 广告片', '小说 / 音乐 / 教育内容', '电商素材 / 财经分析', '真人代劳发布需求'],
        benchmark: '对标：Canva · Gamma · Midjourney',
        color: 'from-violet-500/20 to-violet-600/5',
        border: 'border-violet-400/30',
        accent: 'text-violet-300',
        dot: 'bg-violet-400',
      },
      {
        id: 'appfactory',
        num: '8.2',
        icon: '⚙️',
        label: 'AI App Factory',
        title: 'AI 应用工厂',
        tagline: '输入想法，直接生成完整应用',
        desc: '用户输入：我要一个外卖平台——直接生成：前端界面、后台管理、数据库、小程序、APP。无需编程经验，AI 完成全栈开发。',
        features: ['前端 + 后台 + 数据库', '小程序 + APP 一键生成', '无需编程经验', '支持各类商业场景', '可直接上线运营'],
        benchmark: '对标：Lovable · Bolt · Replit',
        color: 'from-blue-500/20 to-blue-600/5',
        border: 'border-blue-400/30',
        accent: 'text-blue-300',
        dot: 'bg-blue-400',
      },
      {
        id: 'bizbuilder',
        num: '8.3',
        icon: '💼',
        label: 'AI Business Builder',
        title: 'AI 商业生成器',
        tagline: '输入方向，自动生成完整商业方案',
        desc: '输入：我要做矿业基金——自动生成：商业模式设计、股权架构、BP（商业计划书）、财务模型、投资人 PPT。AI 成为每个创业者的战略顾问。',
        features: ['商业模式设计', '股权架构方案', 'BP 商业计划书', '财务模型预测', '投资人 PPT 生成'],
        benchmark: '适用：创业者 · 投资人 · 企业家',
        color: 'from-cyan-500/20 to-cyan-600/5',
        border: 'border-cyan-400/30',
        accent: 'text-cyan-300',
        dot: 'bg-cyan-400',
      },
      {
        id: 'assetregistry',
        num: '8.4',
        icon: '🔐',
        label: 'AI Asset Registry & Deal Marketplace',
        title: 'AI 资产确权中心 & 全球项目交易市场',
        tagline: 'AI 生成即确权，确权即资产',
        desc: '用户在 AIFavaa 或任何软件平台上使用 AI 生成图片、视频、音乐、APP、游戏、小说，选择 AIFavaa 确权功能，系统自动判定并生成：时间戳、区块链登记、作者认证、收益追踪。AIFavaa 不仅帮助用户创造 AI 资产，还帮助完成确权、估值、交易、融资和收益分配，形成完整的 AI 资产金融生态。',
        features: ['时间戳 + 区块链登记', '作者认证 + 收益追踪', '跨平台确权（任何 AI 工具）', '资产估值 + 交易撮合', '融资 + 收益分配'],
        benchmark: '定位：全球 AI 资产确权与交易基础设施',
        color: 'from-emerald-500/20 to-emerald-600/5',
        border: 'border-emerald-400/30',
        accent: 'text-emerald-300',
        dot: 'bg-emerald-400',
      },
      {
        id: 'agentmarket',
        num: '8.5',
        icon: '🤖',
        label: 'AI Agent Marketplace',
        title: 'AIFavaa 智能体市场',
        tagline: '类似苹果 App Store，每个商人都有 AI 员工',
        desc: '未来：每个商人都可以在 AIFavaa 拥有独立的 AI 员工。财务 AI、法律 AI、HR AI、营销 AI、股票 AI、教育培训 AI、顾问 AI——按需订阅，即插即用。',
        features: ['财务 AI / 法律 AI', 'HR AI / 营销 AI', '股票 AI / 教育培训 AI', '顾问 AI / 客服 AI', '按需订阅，即插即用'],
        benchmark: '类比：苹果 App Store（AI 员工版）',
        color: 'from-amber-500/20 to-amber-600/5',
        border: 'border-amber-400/30',
        accent: 'text-amber-300',
        dot: 'bg-amber-400',
      },
      {
        id: 'wealthos',
        num: '8.6',
        icon: '💰',
        label: 'AIFavaa Wealth Copilot',
        title: 'AI 财富管理副驾驶',
        tagline: '全球首个 AI 财富管理操作系统',
        desc: '打造 AI 时代的财富管理基础设施平台。AIFavaa Wealth OS 解决方案——AI Wealth Brain 财富大脑——为高净值客户、家族办公室和金融机构提供全资产 AI 管理、另类资产中心、RWA 代币化和智能增值服务。',
        features: ['AI Wealth Brain 财富大脑', '全资产统一管理视图', '另类资产中心（PE/IP/数字媒体）', 'RWA 真实世界资产代币化', '智能增值 + 收益分配'],
        benchmark: '定位：AI 时代的财富管理基础设施',
        color: 'from-rose-500/20 to-rose-600/5',
        border: 'border-rose-400/30',
        accent: 'text-rose-300',
        dot: 'bg-rose-400',
      },
    ],
    closingTitle: 'Create → Own → Trade → Wealth Manage → Earn',
    closingDesc: 'AIFavaa 最终形成完整的 AI 生态闭环：创造 → 确权 → 交易 → 财富管理 → 收益',
  },
  en: {
    badge: '07 / Who We Are',
    title: 'Six Core Business Modules',
    subtitle: 'AI Universal OS — One sentence drives all digital productivity',
    desc: 'AIFavaa is not a single tool, but a complete AI operating system ecosystem — from creation to ownership, from trading to wealth management, six modules form an inseparable closed loop.',
    modules: [
      {
        id: 'creation',
        num: '8.1',
        icon: '🎨',
        label: 'AI Creation Hub',
        title: 'AI Creation Hub',
        tagline: 'Generate any content with one sentence',
        desc: 'Images, posters, PPT, comics, animation, novels, short videos, ad films, e-commerce materials, financial analysis, education content, music, design — type one sentence, AI generates instantly. If time is short or tools are unfamiliar, post a request and let real humans handle it.',
        features: ['Images / Posters / PPT', 'Animation / Short Videos / Ad Films', 'Novels / Music / Education Content', 'E-commerce Materials / Financial Analysis', 'Human-assisted request posting'],
        benchmark: 'Benchmarks: Canva · Gamma · Midjourney',
        color: 'from-violet-500/20 to-violet-600/5',
        border: 'border-violet-400/30',
        accent: 'text-violet-300',
        dot: 'bg-violet-400',
      },
      {
        id: 'appfactory',
        num: '8.2',
        icon: '⚙️',
        label: 'AI App Factory',
        title: 'AI App Factory',
        tagline: 'Input an idea, get a complete application',
        desc: 'User inputs: I want a food delivery platform — directly generates: frontend interface, backend management, database, mini-program, APP. No programming experience needed, AI completes full-stack development.',
        features: ['Frontend + Backend + Database', 'Mini-program + APP one-click generation', 'No programming experience required', 'Supports all business scenarios', 'Ready to launch immediately'],
        benchmark: 'Benchmarks: Lovable · Bolt · Replit',
        color: 'from-blue-500/20 to-blue-600/5',
        border: 'border-blue-400/30',
        accent: 'text-blue-300',
        dot: 'bg-blue-400',
      },
      {
        id: 'bizbuilder',
        num: '8.3',
        icon: '💼',
        label: 'AI Business Builder',
        title: 'AI Business Builder',
        tagline: 'Input a direction, get a complete business plan',
        desc: 'Input: I want to create a mining fund — automatically generates: business model design, equity structure, BP (business plan), financial model, investor PPT. AI becomes every entrepreneur\'s strategic advisor.',
        features: ['Business Model Design', 'Equity Structure Plan', 'BP Business Plan', 'Financial Model Projection', 'Investor PPT Generation'],
        benchmark: 'For: Entrepreneurs · Investors · Business Owners',
        color: 'from-cyan-500/20 to-cyan-600/5',
        border: 'border-cyan-400/30',
        accent: 'text-cyan-300',
        dot: 'bg-cyan-400',
      },
      {
        id: 'assetregistry',
        num: '8.4',
        icon: '🔐',
        label: 'AI Asset Registry & Deal Marketplace',
        title: 'AI Asset Registry & Global Deal Marketplace',
        tagline: 'AI-generated = Owned. Owned = Asset.',
        desc: 'When users generate images, videos, music, apps, games, or novels using AI on AIFavaa or any platform, selecting AIFavaa\'s ownership function automatically creates: timestamp, blockchain registration, author certification, revenue tracking. AIFavaa not only helps users create AI assets, but also completes ownership, valuation, trading, financing, and revenue distribution — forming a complete AI asset financial ecosystem.',
        features: ['Timestamp + Blockchain Registration', 'Author Certification + Revenue Tracking', 'Cross-platform ownership (any AI tool)', 'Asset Valuation + Trade Matching', 'Financing + Revenue Distribution'],
        benchmark: 'Position: Global AI Asset Ownership & Trading Infrastructure',
        color: 'from-emerald-500/20 to-emerald-600/5',
        border: 'border-emerald-400/30',
        accent: 'text-emerald-300',
        dot: 'bg-emerald-400',
      },
      {
        id: 'agentmarket',
        num: '8.5',
        icon: '🤖',
        label: 'AI Agent Marketplace',
        title: 'AIFavaa Agent Marketplace',
        tagline: 'Like Apple App Store — every business owner has AI employees',
        desc: 'In the future: every business owner can have dedicated AI employees on AIFavaa. Finance AI, Legal AI, HR AI, Marketing AI, Stock AI, Education & Training AI, Advisor AI — subscribe on demand, plug and play.',
        features: ['Finance AI / Legal AI', 'HR AI / Marketing AI', 'Stock AI / Education & Training AI', 'Advisor AI / Customer Service AI', 'Subscribe on demand, plug and play'],
        benchmark: 'Analogy: Apple App Store (AI Employee Edition)',
        color: 'from-amber-500/20 to-amber-600/5',
        border: 'border-amber-400/30',
        accent: 'text-amber-300',
        dot: 'bg-amber-400',
      },
      {
        id: 'wealthos',
        num: '8.6',
        icon: '💰',
        label: 'AIFavaa Wealth Copilot',
        title: 'AI Wealth Copilot',
        tagline: "World's First AI Wealth Management Operating System",
        desc: 'Building the wealth management infrastructure platform for the AI era. AIFavaa Wealth OS solution — AI Wealth Brain — provides HNW clients, family offices, and financial institutions with total asset AI management, alternative asset hub, RWA tokenization, and intelligent appreciation services.',
        features: ['AI Wealth Brain', 'Total Asset Unified Management View', 'Alternative Asset Hub (PE/IP/Digital Media)', 'RWA Real-World Asset Tokenization', 'Intelligent Appreciation + Revenue Distribution'],
        benchmark: 'Position: Wealth Management Infrastructure for the AI Era',
        color: 'from-rose-500/20 to-rose-600/5',
        border: 'border-rose-400/30',
        accent: 'text-rose-300',
        dot: 'bg-rose-400',
      },
    ],
    closingTitle: 'Create → Own → Trade → Wealth Manage → Earn',
    closingDesc: 'AIFavaa forms a complete AI ecosystem loop: Create → Own → Trade → Wealth Manage → Earn',
  },
};

export default function PlatformModules() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;
  const [activeModule, setActiveModule] = useState(T.modules[0].id);
  const active = T.modules.find((m) => m.id === activeModule) || T.modules[0];

  return (
    <section id="platform-modules" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>{T.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            {T.title}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">{T.subtitle}</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">{brandText(T.desc)}</p>
        </div>

        {/* Module selector tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {T.modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveModule(mod.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeModule === mod.id
                  ? `bg-white/12 text-white ${mod.border}`
                  : 'text-slate-400 border-white/8 hover:text-white hover:bg-white/8'
              }`}
            >
              <span>{mod.icon}</span>
              <span className="hidden sm:inline">{mod.num}</span>
              <span>{mod.label}</span>
            </button>
          ))}
        </div>

        {/* Active module detail */}
        <div className={`bg-gradient-to-br ${active.color} border ${active.border} rounded-2xl p-6 sm:p-8 lg:p-10 mb-8`}>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{active.icon}</span>
                <div>
                  <div className={`text-xs font-bold uppercase tracking-wider ${active.accent} mb-0.5`}>{active.num} · {active.label}</div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">{active.title}</h3>
                </div>
              </div>
              <p className={`text-sm font-bold mb-4 ${active.accent}`}>{active.tagline}</p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">{active.desc}</p>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold ${active.border} ${active.accent} bg-white/5`}>
                {active.benchmark}
              </div>
            </div>

            {/* Right: features */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">核心功能 / Key Features</div>
              <div className="space-y-3">
                {active.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-xl px-4 py-3">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${active.dot}`} />
                    <span className="text-sm text-white font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Module overview grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {T.modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveModule(mod.id)}
              className={`bg-gradient-to-br ${mod.color} border ${mod.border} rounded-xl p-3 text-left transition-all hover:scale-105 ${
                activeModule === mod.id ? 'ring-1 ring-white/20' : ''
              }`}
            >
              <div className="text-xl mb-2">{mod.icon}</div>
              <div className={`text-[10px] font-bold uppercase ${mod.accent} mb-1`}>{mod.num}</div>
              <div className="text-xs font-black text-white leading-tight">{mod.label}</div>
            </button>
          ))}
        </div>

        {/* Closing loop */}
        <div className="bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-emerald-500/10 border border-white/12 rounded-2xl p-6 sm:p-8 text-center">
          <div className="text-lg sm:text-xl font-black text-white mb-2">{T.closingTitle}</div>
          <p className="text-sm text-slate-400">{brandText(T.closingDesc)}</p>
        </div>
      </div>
    </section>
  );
}
