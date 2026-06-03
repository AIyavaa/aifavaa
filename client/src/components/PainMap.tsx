import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  zh: {
    badge: '02 / 核心痛点',
    title: '四大核心痛点：缺失的 AI 万能操作系统',
    subtitle: 'The missing AI Universal OS layer',
    desc: '创作者、资产持有者、交易参与者和财富管理者——四类角色都面临同一个问题：没有一个统一的平台连接创造、确权、交易与增值的完整链条。',
    painPoints: [
      {
        icon: '🎨',
        tag: 'Create · 创造',
        title: '创作端：工具碎片化，无法形成资产',
        desc: '创作能力已被 AI 大幅降低门槛，但创作者仍无法将创作物转化为可持有、可交易的数字资产',
        points: [
          '工具碎片化：音乐、视频、图像、文案分散在数十个工具，无法统一调度',
          '创作物无法资产化：生成即消耗，没有确权机制，创意价值无法沉淀',
          '无意图解构能力：现有工具无法理解复杂创作意图，需要大量手动调参',
          '跨模态协作缺失：音视频同步生成、风格统一输出几乎无平台支持',
        ],
        color: 'from-cyan-500/12 to-cyan-600/5',
        border: 'border-cyan-400/25',
        accent: 'text-cyan-300',
        dot: 'bg-cyan-400',
      },
      {
        icon: '🔐',
        tag: 'Own · 确权',
        title: '确权端：AI资产归属模糊，标准缺失',
        desc: 'AI 生成内容的版权归属在全球范围内没有统一标准，创作者权益无法保障',
        points: [
          'AI创作物版权归属不清：谁是作者？平台、用户还是模型提供商？',
          '缺乏中立确权标准：没有类似"欧盟食品认证"的AI资产确权标准体系',
          '链上确权基础设施空白：现有区块链平台不支持AI资产的特殊属性',
          '收益分配无机制：多人协作、模型调用的收益如何分配没有解决方案',
        ],
        color: 'from-blue-500/12 to-blue-600/5',
        border: 'border-blue-400/25',
        accent: 'text-blue-300',
        dot: 'bg-blue-400',
      },
      {
        icon: '🌐',
        tag: 'Trade · 交易',
        title: '交易端：AI资产市场几乎空白',
        desc: 'AI Agent、Prompt、Workflow、数字人、数据资产——全球没有统一的AI资产交易市场',
        points: [
          '没有统一交易平台：AI资产分散在各自社区，无法跨平台流通',
          '定价体系缺失：AI资产如何定价？没有参考标准和市场发现机制',
          '信任机制缺失：买家无法验证AI资产的真实性、质量和版权归属',
          '流动性极差：优质AI资产无法快速变现，创作者无法获得即时回报',
        ],
        color: 'from-violet-500/12 to-violet-600/5',
        border: 'border-violet-400/25',
        accent: 'text-violet-300',
        dot: 'bg-violet-400',
      },
      {
        icon: '💰',
        tag: 'Earn · 增值',
        title: '增值端：另类资产管理几乎空白',
        desc: '高净值客户面临传统财富管理无法覆盖的新型数字资产管理需求',
        points: [
          '客户经理效率极低：一个RM管理50-200位高净值客户，大量时间用于写报告、查资料',
          '资产全景缺失：客户不知道总资产多少、风险多少、现金流多少、未来收益多少',
          '另类资产管理困难：私募股权、IP版权、数字媒体资产、AI Agent资产几乎无平台管理',
          'RWA代币化落地难：真实世界资产上链的合规、估值、流通体系尚未建立',
        ],
        color: 'from-emerald-500/12 to-emerald-600/5',
        border: 'border-emerald-400/25',
        accent: 'text-emerald-300',
        dot: 'bg-emerald-400',
      },
    ],
  },
  en: {
    badge: '02 / Pain Points',
    title: 'Four Core Pain Points: The Missing AI Universal OS',
    subtitle: 'The missing AI Universal OS layer',
    desc: 'Creators, asset holders, traders, and wealth managers — all four roles face the same problem: no unified platform connecting the complete chain of Create, Own, Trade, and Earn.',
    painPoints: [
      {
        icon: '🎨',
        tag: 'Create',
        title: 'Creation: Fragmented Tools, No Asset Formation',
        desc: 'AI has dramatically lowered the barrier to creation, but creators still cannot convert their work into holdable, tradeable digital assets',
        points: [
          'Fragmented tools: Music, video, images, and copy scattered across dozens of tools with no unified orchestration',
          'Creations cannot become assets: Generated and consumed, no ownership mechanism, creative value cannot accumulate',
          'No intent decomposition: Existing tools cannot understand complex creative intent, requiring extensive manual tuning',
          'Cross-modal collaboration missing: Synchronized audio-video generation and unified style output is virtually unsupported',
        ],
        color: 'from-cyan-500/12 to-cyan-600/5',
        border: 'border-cyan-400/25',
        accent: 'text-cyan-300',
        dot: 'bg-cyan-400',
      },
      {
        icon: '🔐',
        tag: 'Own',
        title: 'Ownership: AI Asset Attribution Unclear, Standards Missing',
        desc: 'Copyright attribution for AI-generated content has no unified global standard, leaving creator rights unprotected',
        points: [
          'AI creation copyright unclear: Who is the author? The platform, user, or model provider?',
          'No neutral ownership standard: No AI asset certification system analogous to EU food certification',
          'On-chain ownership infrastructure gap: Existing blockchain platforms do not support the special attributes of AI assets',
          'No revenue distribution mechanism: No solution for how to distribute earnings from multi-party collaboration and model usage',
        ],
        color: 'from-blue-500/12 to-blue-600/5',
        border: 'border-blue-400/25',
        accent: 'text-blue-300',
        dot: 'bg-blue-400',
      },
      {
        icon: '🌐',
        tag: 'Trade',
        title: 'Trading: AI Asset Market Is Virtually Empty',
        desc: 'AI Agents, Prompts, Workflows, Digital Humans, Data Assets — no unified global AI asset trading market exists',
        points: [
          'No unified trading platform: AI assets scattered across individual communities, unable to circulate cross-platform',
          'Pricing system missing: How to price AI assets? No reference standards or market discovery mechanism',
          'Trust mechanism missing: Buyers cannot verify the authenticity, quality, and copyright of AI assets',
          'Extremely poor liquidity: High-quality AI assets cannot be quickly monetized; creators cannot receive immediate returns',
        ],
        color: 'from-violet-500/12 to-violet-600/5',
        border: 'border-violet-400/25',
        accent: 'text-violet-300',
        dot: 'bg-violet-400',
      },
      {
        icon: '💰',
        tag: 'Earn',
        title: 'Wealth: Alternative Asset Management Virtually Empty',
        desc: 'High-net-worth clients face new digital asset management needs that traditional wealth management cannot cover',
        points: [
          'Relationship managers are extremely inefficient: One RM manages 50-200 HNW clients, spending most time writing reports and researching',
          'No asset panorama: Clients do not know their total assets, risk exposure, cash flow, or future returns',
          'Alternative asset management is difficult: Private equity, IP copyrights, digital media assets, AI Agent assets — almost no platform manages these',
          'RWA tokenization is hard to implement: Compliance, valuation, and circulation systems for real-world asset on-chain have not been established',
        ],
        color: 'from-emerald-500/12 to-emerald-600/5',
        border: 'border-emerald-400/25',
        accent: 'text-emerald-300',
        dot: 'bg-emerald-400',
      },
    ],
  },
};

export default function PainMap() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <section id="pain" className="relative py-20 lg:py-28">
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
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-7">
          {T.painPoints.map((pain, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${pain.color} border ${pain.border} backdrop-blur-xl rounded-2xl p-5 sm:p-6 lg:p-8 group hover:scale-[1.01] transition-all`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{pain.icon}</span>
                <span className={`text-[10px] font-black uppercase tracking-widest ${pain.accent}`}>{pain.tag}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white mb-2">{pain.title}</h3>
              <p className="text-sm text-slate-300 mb-4 font-semibold">{pain.desc}</p>
              <ul className="space-y-2.5">
                {pain.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                    <span className={`w-1.5 h-1.5 rounded-full ${pain.dot} flex-shrink-0 mt-1.5`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
