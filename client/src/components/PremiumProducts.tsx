import { useLanguage } from '@/contexts/LanguageContext';
import { brandText } from '@/lib/brandText';

const content = {
  zh: {
    badge: '09 / 我们是谁',
    title: '我们是谁',
    subtitle: 'What we build and who we are',
    desc: '我们是平台——AI 时代每一个人的创作伙伴与价值网络。AIyavaa 围绕创作者、品牌、用户三大核心角色，构建四大核心能力。',
    products: [
      {
        icon: '🎬',
        title: 'AI 视频生成工作室',
        desc: '为创作者提供专业级的 AI 视频生成、编辑与发布工具',
        features: [
          '多模型支持：Runway、Pika、Sora 等 100+ 模型',
          '一键生成：文本到视频、图片到视频、视频增强',
          '智能编辑：自动字幕、配音、特效、转场',
          '版权管理：自动登记、交易、分成结算',
        ],
      },
      {
        icon: '🤝',
        title: 'AI 品牌营销 × 创作者经纪',
        desc: '连接品牌与创作者，实现内容生产、商业变现与生态增长的一体化平台',
        features: [
          '品牌侧：一键发布需求，AI 智能匹配创作者，3-5 天快速交付',
          '创作者侧：流量分发、商业对接、版权交易、收入管理',
          '质量保障：AI 审核 + 人工验收，ROI 数据追踪',
          '生态激励：创作者奖励、品牌返利、平台补贴',
        ],
      },
      {
        icon: '🏪',
        title: 'AI 内容交易市场',
        desc: '连接创作者与品牌，实现内容与创意服务的标准化交易',
        features: [
          '内容库：可复用的视频、角色、风格包、音乐库',
          '快速采购：标准化定价、一键下单、即时交付',
          '版权保护：智能追踪、侵权预警、纠纷处理',
          '生态激励：创作者奖励、品牌返利、平台补贴',
        ],
      },
      {
        icon: '🌟',
        title: 'AI 时代合伙人',
        desc: '每一个人都是 AGI 时代的共创者与共享者——钞能力、创意、分享、品牌、故事，都是你的入场券',
        features: [
          '钞能力合伙人：出资即享平台系列故事创作权益',
          '创作合伙人：上传 10,000 条内容，解锁顶级权益',
          '分享合伙人：上传 5 条内容，开启变现之旅',
          '全球百大荣誉合伙人：行业标准制定者，类奥斯卡颁奖体系',
        ],
      },
    ],
  },
  en: {
    badge: '09 / Who We Are',
    title: 'Who We Are',
    subtitle: 'What we build and who we are',
    desc: 'We are the platform — the creative partner and value network for everyone in the AI era. AIyavaa builds four core capabilities around creators, brands, and users.',
    products: [
      {
        icon: '🎬',
        title: 'AI Video Generation Studio',
        desc: 'Professional-grade AI video generation, editing and publishing tools for creators',
        features: [
          'Multi-model support: Runway, Pika, Sora and 100+ models',
          'One-click generation: text-to-video, image-to-video, video enhancement',
          'Smart editing: auto subtitles, dubbing, effects, transitions',
          'Copyright management: auto registration, transactions, revenue sharing',
        ],
      },
      {
        icon: '🤝',
        title: 'AI Brand Marketing × Creator Agency',
        desc: 'Connecting brands and creators — an integrated platform for content production, monetization, and ecosystem growth',
        features: [
          'Brand side: one-click brief, AI-matched creators, 3-5 day delivery',
          'Creator side: traffic distribution, brand deals, copyright trading, income management',
          'Quality assurance: AI review + manual acceptance, ROI data tracking',
          'Ecosystem incentives: creator rewards, brand rebates, platform subsidies',
        ],
      },
      {
        icon: '🏪',
        title: 'AI Content Marketplace',
        desc: 'Connecting creators and brands for standardized transactions of content and creative services',
        features: [
          'Content library: reusable videos, characters, style packs, music library',
          'Fast procurement: standardized pricing, one-click orders, instant delivery',
          'Copyright protection: smart tracking, infringement alerts, dispute resolution',
          'Ecosystem incentives: creator rewards, brand rebates, platform subsidies',
        ],
      },
      {
        icon: '🌟',
        title: 'AI Era Partner',
        desc: 'Everyone is a co-creator and co-beneficiary in the AGI era — capital, creativity, sharing, brand, story — all are your entry tickets',
        features: [
          'Capital Partners: invest and earn platform story creation rights',
          'Creation Partners: upload 10,000 pieces, unlock top-tier privileges',
          'Sharing Partners: upload 5 pieces, start your monetization journey',
          'Global Top 100 Honorary Partners: industry standard setters, Oscar-like awards system',
        ],
      },
    ],
  },
};

export default function PremiumProducts() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <section id="premium" className="relative py-20 lg:py-28">
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

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {T.products.map((product, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 lg:p-8 hover:border-blue-400/30 hover:from-white/12 transition-all"
            >
              <div className="text-3xl mb-3">{product.icon}</div>
              <h3 className="text-xl font-black text-white mb-2">{product.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{brandText(product.desc)}</p>
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
