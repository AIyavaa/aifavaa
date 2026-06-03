import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { brandText } from '@/lib/brandText';

const content = {
  zh: {
    badge: '06 / 商业模式',
    title: '多元商业闭环：创造、确权、交易、增值',
    subtitle: 'AI Marketplace · AI Asset Chain · AIyavaa Wealth OS',
    desc: 'AIyavaa 同时具备内容平台、AI资产确权网络、全球交易市场和财富管理操作系统四重属性，收入来源多元，形成不可复制的商业闭环。',
    tabs: [
      {
        id: 'marketplace',
        label: 'AI Marketplace',
        icon: '🌐',
        title: '全球AI资产交易市场：三方分润闭环',
        desc: '合伙人调动资源能力（如商务品牌需求）→ 创作者竞价抢单 → 品牌审核公布 → 三方分润',
        streams: [
          { label: '交易佣金', desc: '每笔AI资产交易按比例抽佣（平台+创作者+合伙人三方分润）' },
          { label: '品牌竞价', desc: '品牌方发布需求，创作者竞价，平台收取撮合服务费' },
          { label: '全网发布', desc: '一平台生成，全网同步发布，形成闭合流量网络' },
          { label: 'IP再变现', desc: '经典内容、品牌效应持续再变现，IP资产长尾收益' },
        ],
        flow: ['合伙人带来商务需求', '创作者竞价抢单', '品牌审核公布', '三方分润结算'],
        color: 'from-violet-500/15 to-violet-600/5',
        border: 'border-violet-400/30',
        accent: 'text-violet-300',
      },
      {
        id: 'assetchain',
        label: 'AI Asset Chain',
        icon: '🔐',
        title: 'AI资产确权网络：标准定义与收益分配',
        desc: '中立、不站边的AI资产确权标准体系，类似食品行业的欧盟认证——定义标准、收取认证费、参与收益分配',
        streams: [
          { label: '确权认证费', desc: '创作者为AI资产申请链上确权，按资产类型收取认证费' },
          { label: '标准授权费', desc: '各AI领域使用AIyavaa确权标准，收取标准授权费' },
          { label: '收益分配抽成', desc: '确权资产每次交易，Asset Chain自动抽取固定比例' },
          { label: 'RWA代币化服务', desc: '真实世界资产上链代币化，收取发行与管理服务费' },
        ],
        flow: ['创作物申请确权', '链上唯一登记', '标准认证发放', '交易自动分润'],
        color: 'from-blue-500/15 to-blue-600/5',
        border: 'border-blue-400/30',
        accent: 'text-blue-300',
      },
      {
        id: 'wealthos',
        label: 'Wealth OS',
        icon: '💰',
        title: 'AIyavaa Wealth OS：全球AI财富管理',
        desc: '为高净值客户提供AI驱动的全资产管理平台，覆盖传统资产、AI资产、RWA与另类资产的统一管理与增值',
        streams: [
          { label: '资产管理费（AUM）', desc: '按管理资产规模收取年费，目标AUM 10亿美元以上' },
          { label: '另类资产中心', desc: '私募股权、IP版权、数字媒体资产、AI Agent资产撮合与管理费' },
          { label: 'AI客户经理订阅', desc: '金融机构订阅AI RM系统，替代传统客户经理效率工具' },
          { label: 'RWA发行收益', desc: '真实世界资产代币化发行，收取发行费与持续管理费' },
        ],
        flow: ['AI分析全资产', 'RWA代币化', '另类资产撮合', '智能增值管理'],
        color: 'from-emerald-500/15 to-emerald-600/5',
        border: 'border-emerald-400/30',
        accent: 'text-emerald-300',
      },
      {
        id: 'partner',
        label: '合伙人体系',
        icon: '🤝',
        title: '全球合伙人生态：L1-10分级裂变',
        desc: '通过合伙人体系将用户转化为生态建设者，形成全球裂变网络——分享合伙人、城市合伙人、国家合伙人、全球链接网络',
        streams: [
          { label: '合伙人入门费', desc: '不同级别合伙人对应不同入门门槛（1万-100万），平台收取入门费' },
          { label: '分润抽成', desc: '合伙人带来的交易与用户，平台按比例分润，形成持续激励' },
          { label: '赛事赞助收入', desc: '全球AI创作大赛品牌赞助、创作者投稿费、标准委员会会费' },
          { label: '生态服务费', desc: '垂直行业合伙人（科技/教育/知识/人脉）提供行业解决方案服务费' },
        ],
        flow: ['合伙人入门', '带来资源与用户', '平台分润激励', '生态裂变扩张'],
        color: 'from-amber-500/15 to-amber-600/5',
        border: 'border-amber-400/30',
        accent: 'text-amber-300',
      },
    ],
    altAssets: {
      title: '另类资产中心：市场几乎空白的万亿赛道',
      desc: '目前几乎没有全球统一的确权、估值、交易和流通平台。以下资产均可在 AIyavaa 确权和交易，打造成可分润、可证券化、可RWA的产品：',
      categories: [
        { label: '私募股权', items: ['未上市公司股份', '私人市场股权（PE）'] },
        { label: '会员网络资产', items: ['企业家会员网络', '医生/律师会员', '家族办公室会员'] },
        { label: '知识产权（IP）', items: ['音乐版权', '动漫/游戏版权', '名人IP', 'AI数字人'] },
        { label: '数字媒体资产', items: ['YouTube频道', 'TikTok账号', '小红书矩阵', '域名资产'] },
        { label: '数据资产', items: ['医疗数据库', '法律数据库', '教育数据库', 'AI Agent资产'] },
        { label: '权益类资产', items: ['体育俱乐部股权', '超级游艇俱乐部', '顶级赛事VIP', '艺术IP'] },
      ],
    },
  },
  en: {
    badge: '06 / Business Model',
    title: 'Multi-Revenue Loop: Create, Own, Trade, Earn',
    subtitle: 'AI Marketplace · AI Asset Chain · AIyavaa Wealth OS',
    desc: 'AIyavaa simultaneously operates as a content platform, AI asset ownership network, global trading market, and wealth management OS — multiple revenue streams forming an irreplicable business loop.',
    tabs: [
      {
        id: 'marketplace',
        label: 'AI Marketplace',
        icon: '🌐',
        title: 'Global AI Asset Marketplace: Three-Party Profit Loop',
        desc: 'Partners mobilize resources (e.g., brand business needs) → Creators bid for orders → Brand reviews and announces → Three-party profit sharing',
        streams: [
          { label: 'Transaction Commission', desc: 'Proportional commission on each AI asset transaction (three-party split: platform + creator + partner)' },
          { label: 'Brand Bidding', desc: 'Brands post requirements, creators bid, platform charges matching service fee' },
          { label: 'Cross-Platform Publishing', desc: 'Generate once, publish everywhere, forming a closed traffic network' },
          { label: 'IP Monetization', desc: 'Classic content and brand effects continuously re-monetized, long-tail IP asset returns' },
        ],
        flow: ['Partner brings business needs', 'Creators bid for orders', 'Brand reviews and announces', 'Three-party settlement'],
        color: 'from-violet-500/15 to-violet-600/5',
        border: 'border-violet-400/30',
        accent: 'text-violet-300',
      },
      {
        id: 'assetchain',
        label: 'AI Asset Chain',
        icon: '🔐',
        title: 'AI Asset Ownership Network: Standard Definition & Revenue Distribution',
        desc: 'A neutral, non-partisan AI asset ownership standard system — similar to EU certification in the food industry: define standards, charge certification fees, participate in revenue distribution',
        streams: [
          { label: 'Ownership Certification Fee', desc: 'Creators apply for on-chain ownership registration for AI assets, charged by asset type' },
          { label: 'Standard Licensing Fee', desc: 'AI domain players using AIyavaa ownership standards pay standard licensing fees' },
          { label: 'Transaction Revenue Share', desc: 'Each trade of a registered asset automatically triggers a fixed percentage to Asset Chain' },
          { label: 'RWA Tokenization Service', desc: 'Real-world asset on-chain tokenization: issuance and management service fees' },
        ],
        flow: ['Creation applies for ownership', 'On-chain unique registration', 'Standard certification issued', 'Automatic profit sharing on trade'],
        color: 'from-blue-500/15 to-blue-600/5',
        border: 'border-blue-400/30',
        accent: 'text-blue-300',
      },
      {
        id: 'wealthos',
        label: 'Wealth OS',
        icon: '💰',
        title: 'AIyavaa Wealth OS: Global AI Wealth Management',
        desc: 'Provides HNW clients with an AI-driven total asset management platform covering unified management and appreciation of traditional, AI, RWA, and alternative assets',
        streams: [
          { label: 'AUM Management Fee', desc: 'Annual fee based on assets under management, targeting AUM of $1B+' },
          { label: 'Alternative Asset Hub', desc: 'PE, IP copyrights, digital media assets, AI Agent assets — matching and management fees' },
          { label: 'AI RM Subscription', desc: 'Financial institutions subscribe to AI RM system, replacing traditional relationship manager efficiency tools' },
          { label: 'RWA Issuance Revenue', desc: 'Real-world asset tokenization issuance fees and ongoing management fees' },
        ],
        flow: ['AI analyzes all assets', 'RWA tokenization', 'Alternative asset matching', 'Intelligent appreciation management'],
        color: 'from-emerald-500/15 to-emerald-600/5',
        border: 'border-emerald-400/30',
        accent: 'text-emerald-300',
      },
      {
        id: 'partner',
        label: 'Partner System',
        icon: '🤝',
        title: 'Global Partner Ecosystem: L1-10 Tiered Viral Growth',
        desc: 'Converting users into ecosystem builders through the partner system, forming a global viral network — sharing, city, country, and global network partners',
        streams: [
          { label: 'Partner Entry Fee', desc: 'Different levels have different entry thresholds ($10K-$1M), platform charges entry fees' },
          { label: 'Profit Sharing', desc: 'Transactions and users brought by partners receive proportional platform sharing, creating ongoing incentives' },
          { label: 'Competition Sponsorship', desc: 'Global AI Creation Competition brand sponsorship, creator submission fees, standards committee membership' },
          { label: 'Ecosystem Service Fee', desc: 'Vertical industry partners (tech/education/knowledge/network) provide industry solution service fees' },
        ],
        flow: ['Partner onboarding', 'Bring resources and users', 'Platform profit sharing', 'Ecosystem viral expansion'],
        color: 'from-amber-500/15 to-amber-600/5',
        border: 'border-amber-400/30',
        accent: 'text-amber-300',
      },
    ],
    altAssets: {
      title: 'Alternative Asset Hub: A Trillion-Dollar Market With Almost No Competition',
      desc: 'There is currently almost no global unified platform for ownership registration, valuation, trading, and circulation. All of the following assets can be registered and traded on AIyavaa, creating profit-sharing, securitizable, RWA-ready products:',
      categories: [
        { label: 'Private Equity', items: ['Unlisted company shares', 'Private market equity (PE)'] },
        { label: 'Membership Network Assets', items: ['Entrepreneur member networks', 'Doctor/Lawyer memberships', 'Family office memberships'] },
        { label: 'Intellectual Property (IP)', items: ['Music copyrights', 'Anime/Game copyrights', 'Celebrity IP', 'AI Digital Humans'] },
        { label: 'Digital Media Assets', items: ['YouTube channels', 'TikTok accounts', 'Xiaohongshu matrices', 'Domain assets'] },
        { label: 'Data Assets', items: ['Medical databases', 'Legal databases', 'Education databases', 'AI Agent assets'] },
        { label: 'Rights Assets', items: ['Sports club equity', 'Super yacht clubs', 'Top event VIP rights', 'Art IP'] },
      ],
    },
  },
};

export default function BusinessModel() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;
  const [activeTab, setActiveTab] = useState(T.tabs[0].id);
  const activeData = T.tabs.find((t) => t.id === activeTab) || T.tabs[0];

  return (
    <section id="business" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

        <div className="flex flex-wrap gap-2 mb-6">
          {T.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-white/15 text-white border border-white/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/8'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className={`bg-gradient-to-br ${activeData.color} border ${activeData.border} rounded-2xl p-5 sm:p-8 mb-8`}>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{activeData.title}</h3>
          <p className={`text-sm font-semibold mb-6 ${activeData.accent}`}>{activeData.desc}</p>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            {activeData.flow.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`px-3 py-1.5 rounded-lg border text-xs font-bold ${activeData.border} ${activeData.accent} bg-white/5`}>
                  {step}
                </div>
                {i < activeData.flow.length - 1 && (
                  <svg className="w-3 h-3 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {activeData.streams.map((stream, i) => (
              <div key={i} className="bg-white/5 border border-white/8 rounded-xl p-4">
                <div className={`text-sm font-black mb-1 ${activeData.accent}`}>{stream.label}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{stream.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/6 to-white/3 border border-white/12 rounded-2xl p-5 sm:p-8">
          <h4 className="font-black text-white mb-2">{T.altAssets.title}</h4>
          <p className="text-sm text-slate-400 mb-5">{T.altAssets.desc}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {T.altAssets.categories.map((cat, i) => (
              <div key={i} className="bg-white/5 border border-white/8 rounded-xl p-3">
                <div className="text-xs font-black text-white mb-2">{cat.label}</div>
                {cat.items.map((item, j) => (
                  <div key={j} className="text-[10px] text-slate-400 leading-relaxed">{item}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
