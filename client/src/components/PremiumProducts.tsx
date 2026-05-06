import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  zh: {
    badge: '08 / 核心产品',
    title: '四大高级产品线',
    subtitle: 'Premium product lines for every stakeholder',
    desc: '围绕创作者、品牌、用户三大核心角色，AIyavaa 推出四大高级产品，覆盖 AI 视频生态的完整价值链。',
    products: [
      {
        title: 'AI 视频生成工作室',
        desc: '为创作者提供专业级的 AI 视频生成、编辑与发布工具',
        features: ['多模型支持：Runway、Pika、自研模型等', '一键生成：文本到视频、图片到视频、视频增强', '智能编辑：自动字幕、配音、特效、转场', '版权管理：自动登记、交易、分成结算'],
      },
      {
        title: 'AI 品牌营销平台',
        desc: '为品牌提供快速、高效、可控的视频内容生产解决方案',
        features: ['需求发布：一键发布营销需求，自动匹配创作者', '质量保障：AI 审核、人工验收、质量评分', '快速交付：平均 3-5 天交付，支持批量定制', '数据追踪：内容效果分析、ROI 评估、复购管理'],
      },
      {
        title: 'AI 创作者经纪人',
        desc: '为创作者提供全生命周期的运营、变现与增长支持',
        features: ['流量分发：优先推荐、社区运营、粉丝增长', '商业对接：品牌合作、广告分成、版权交易', '数据分析：内容表现、粉丝画像、增长建议', '财务管理：收入统计、税务申报、提现管理'],
      },
      {
        title: 'AI 内容交易市场',
        desc: '连接创作者与品牌，实现内容与创意服务的标准化交易',
        features: ['内容库：可复用的视频、角色、风格包、音乐库', '快速采购：标准化定价、一键下单、即时交付', '版权保护：智能追踪、侵权预警、纠纷处理', '生态激励：创作者奖励、品牌返利、平台补贴'],
      },
    ],
  },
  en: {
    badge: '08 / Core Products',
    title: 'Four Premium Product Lines',
    subtitle: 'Premium product lines for every stakeholder',
    desc: 'Centered around three core roles — creators, brands and users — AIyavaa launches four premium products covering the complete value chain of the AI video ecosystem.',
    products: [
      {
        title: 'AI Video Generation Studio',
        desc: 'Professional-grade AI video generation, editing and publishing tools for creators',
        features: ['Multi-model support: Runway, Pika, proprietary models, and more', 'One-click generation: text-to-video, image-to-video, video enhancement', 'Smart editing: auto subtitles, dubbing, effects, transitions', 'Copyright management: auto registration, transactions, revenue sharing'],
      },
      {
        title: 'AI Brand Marketing Platform',
        desc: 'Fast, efficient and controllable video content production solutions for brands',
        features: ['Demand publishing: one-click marketing brief, auto-match creators', 'Quality assurance: AI review, manual acceptance, quality scoring', 'Fast delivery: average 3-5 days, supports bulk customization', 'Data tracking: content performance analysis, ROI evaluation, repurchase management'],
      },
      {
        title: 'AI Creator Agent',
        desc: 'Full lifecycle operations, monetization and growth support for creators',
        features: ['Traffic distribution: priority recommendations, community ops, fan growth', 'Business matching: brand collaborations, ad revenue sharing, copyright transactions', 'Data analytics: content performance, audience profiles, growth suggestions', 'Financial management: income tracking, tax filing, withdrawal management'],
      },
      {
        title: 'AI Content Marketplace',
        desc: 'Connecting creators and brands for standardized transactions of content and creative services',
        features: ['Content library: reusable videos, characters, style packs, music library', 'Fast procurement: standardized pricing, one-click orders, instant delivery', 'Copyright protection: smart tracking, infringement alerts, dispute resolution', 'Ecosystem incentives: creator rewards, brand rebates, platform subsidies'],
      },
    ],
  },
};

export default function PremiumProducts() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <section id="premium" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
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
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {T.products.map((product, i) => (
            <div key={i} className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 lg:p-8 hover:border-blue-400/30 hover:from-white/12 transition-all">
              <h3 className="text-xl font-black text-white mb-2">{product.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{product.desc}</p>
              <ul className="space-y-2">
                {product.features.map((feature, j) => (
                  <li key={j} className="flex gap-2 text-sm text-slate-300">
                    <span className="text-blue-400 font-bold flex-shrink-0">✓</span>
                    <span>{feature}</span>
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
