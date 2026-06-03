import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  zh: {
    badge: '01 / 市场机会',
    title: '四位一体：万亿美元的数字资产新纪元',
    subtitle: 'Create · Own · Trade · Earn — The New Digital Asset Era',
    desc: 'AI 能力成熟、数字资产确权需求爆发、全球交易市场空白、财富管理数字化转型——四股力量同时出现，AIyavaa 是唯一覆盖全链条的平台。',
    opportunities: [
      {
        icon: '🎨',
        tag: 'Create · 创造',
        label: 'AI内容创作市场',
        value: '$1.3T',
        sub: '2030年全球AI内容市场规模',
        detail: 'AI 正在重构内容生产底层逻辑。视频、音乐、图像、应用、商业方案——一句话驱动一切数字生产力。AI视频市场从2024年$3.86B增长至2030年$42.29B，增长近11倍。',
        color: 'from-cyan-500/15 to-cyan-600/5',
        border: 'border-cyan-400/25',
        accent: 'text-cyan-300',
      },
      {
        icon: '🔐',
        tag: 'Own · 确权',
        label: 'AI资产确权市场',
        value: '$800B+',
        sub: '数字版权与IP市场规模',
        detail: '全球数字版权市场规模庞大，但缺乏统一的AI资产确权标准与基础设施。AI创作物的版权归属、链上确权、收益分配——是万亿数字资产的底层基础设施缺口。',
        color: 'from-blue-500/15 to-blue-600/5',
        border: 'border-blue-400/25',
        accent: 'text-blue-300',
      },
      {
        icon: '🌐',
        tag: 'Trade · 交易',
        label: 'AI资产交易市场',
        value: '$480B',
        sub: '2027年创作者经济规模',
        detail: 'AI Agent、Prompt、Workflow、数字人、数据资产、内容资产——全球AI资产交易市场几乎空白。没有统一的交易平台，没有标准的定价体系，没有可信的确权机制。',
        color: 'from-violet-500/15 to-violet-600/5',
        border: 'border-violet-400/25',
        accent: 'text-violet-300',
      },
      {
        icon: '💰',
        tag: 'Earn · 增值',
        label: 'AI财富管理市场',
        value: '$130T',
        sub: '全球财富管理资产规模',
        detail: '传统财富管理面临数字化转型压力。AI资产、RWA真实世界资产代币化、另类资产管理——新一代财富管理操作系统的市场空间巨大，现有玩家几乎无人覆盖。',
        color: 'from-emerald-500/15 to-emerald-600/5',
        border: 'border-emerald-400/25',
        accent: 'text-emerald-300',
      },
    ],
    summary: {
      title: '总结：AIyavaa 覆盖的市场总规模',
      value: '$132T+',
      desc: '从AI内容创作到数字资产确权，从全球交易市场到智能财富管理，AIyavaa 是唯一覆盖 Create → Own → Trade → Earn 完整链条的平台。',
    },
  },
  en: {
    badge: '01 / Market Opportunity',
    title: 'Four-in-One: The Trillion-Dollar Digital Asset New Era',
    subtitle: 'Create · Own · Trade · Earn — The New Digital Asset Era',
    desc: 'AI capability maturity, digital asset ownership demand explosion, global trading market vacuum, and wealth management digital transformation — four forces converging simultaneously. AIyavaa is the only platform covering the full chain.',
    opportunities: [
      {
        icon: '🎨',
        tag: 'Create',
        label: 'AI Content Creation Market',
        value: '$1.3T',
        sub: 'Global AI content market by 2030',
        detail: 'AI is restructuring the underlying logic of content production. Video, music, images, apps, business plans — one sentence drives all digital productivity. AI video market grows from $3.86B (2024) to $42.29B (2030), nearly 11x growth.',
        color: 'from-cyan-500/15 to-cyan-600/5',
        border: 'border-cyan-400/25',
        accent: 'text-cyan-300',
      },
      {
        icon: '🔐',
        tag: 'Own',
        label: 'AI Asset Ownership Market',
        value: '$800B+',
        sub: 'Digital copyright & IP market size',
        detail: 'The global digital copyright market is massive, but lacks unified AI asset ownership standards and infrastructure. Copyright attribution for AI creations, on-chain registration, revenue distribution — the foundational infrastructure gap for trillions in digital assets.',
        color: 'from-blue-500/15 to-blue-600/5',
        border: 'border-blue-400/25',
        accent: 'text-blue-300',
      },
      {
        icon: '🌐',
        tag: 'Trade',
        label: 'AI Asset Trading Market',
        value: '$480B',
        sub: 'Creator economy scale by 2027',
        detail: 'AI Agents, Prompts, Workflows, Digital Humans, Data Assets, Content Assets — the global AI asset trading market is virtually empty. No unified trading platform, no standardized pricing system, no trusted ownership mechanism.',
        color: 'from-violet-500/15 to-violet-600/5',
        border: 'border-violet-400/25',
        accent: 'text-violet-300',
      },
      {
        icon: '💰',
        tag: 'Earn',
        label: 'AI Wealth Management Market',
        value: '$130T',
        sub: 'Global wealth management AUM',
        detail: 'Traditional wealth management faces digital transformation pressure. AI assets, RWA tokenization, alternative asset management — the market for a new-generation wealth management OS is enormous, with virtually no players covering it today.',
        color: 'from-emerald-500/15 to-emerald-600/5',
        border: 'border-emerald-400/25',
        accent: 'text-emerald-300',
      },
    ],
    summary: {
      title: 'Total Addressable Market for AIyavaa',
      value: '$132T+',
      desc: 'From AI content creation to digital asset ownership, from global trading markets to intelligent wealth management, AIyavaa is the only platform covering the complete Create → Own → Trade → Earn chain.',
    },
  },
};

export default function Market() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <section id="market" className="relative py-20 lg:py-28">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-8">
          {T.opportunities.map((opp, i) => (
            <div
              key={i}
              className={`relative bg-gradient-to-br ${opp.color} border ${opp.border} backdrop-blur-xl rounded-2xl p-5 sm:p-6 overflow-hidden group hover:scale-[1.02] transition-all`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{opp.icon}</span>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${opp.accent}`}>{opp.tag}</span>
                </div>
                <div className="text-xs text-slate-400 mb-1">{opp.label}</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1">{opp.value}</div>
                <div className={`text-xs font-bold mb-3 ${opp.accent}`}>{opp.sub}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{opp.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/8 to-violet-500/10 border border-cyan-400/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-shrink-0 text-center sm:text-left">
            <div className="text-4xl sm:text-5xl font-black text-white">{T.summary.value}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-cyan-300 mt-1">{T.summary.title}</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block flex-shrink-0" />
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{T.summary.desc}</p>
        </div>
      </div>
    </section>
  );
}
