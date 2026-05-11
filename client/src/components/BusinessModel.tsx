import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { brandText } from '@/lib/brandText';

const content = {
  zh: {
    badge: '06 / 商业模式',
    title: '卖给谁、怎么卖、何时盈利：从项目驱动到平台驱动',
    subtitle: 'Multi-revenue engine across four sides',
    desc: 'AIyavaa 同时具备内容平台、创作者经济平台、交易平台和企业服务平台四重属性，收入来源多元，结构升级空间充足。',
    revenueLabel: '收入来源',
    valueLabel: '价值主张',
    tabs: [
      {
        id: 'user',
        label: '用户端',
        title: '向用户销售内容体验、互动体验与身份权益',
        revenue: ['高级订阅会员', '社区衍生收入', '广告分成与高级功能', '虚拟道具与打赏', '剧集付费观看或互动解锁'],
        value: ['从"被动浏览"升级为"发现+参与+共创+消费"', '通过互动剧、角色内容和社区机制提升复购', '情感价值与身份认同，带来更高的付费天花板'],
      },
      {
        id: 'creator',
        label: '创作者端',
        title: '向创作者销售生产力、流量、交易与持续变现',
        revenue: ['高级工具订阅', '推广服务费', '内容版权交易收入分成', '定制订单佣金', 'Token/算力/生成配额分成', 'AI直播数字人与AI代理服务'],
        value: ['"持续生产、持续曝光、持续接单、持续变现"而非"创作作品"', '平台+增值服务模式提升ARPU和长期留存', '创作者资产积累为可交易的作品、角色和风格包'],
      },
      {
        id: 'brand',
        label: '品牌端',
        title: '向品牌销售结果、效率与标准化交付',
        revenue: ['内容定制服务佣金', '企业会员/工具订阅', 'AI品牌/营销视频解决方案', '超级AI代理服务', '运营管理服务'],
        value: ['品牌购买的是生产能力，而非单纯模型——更快、更稳定、更可控', '生成企业年度合同，高复购、高利润', '标准化采购提升订单效率和交付质量'],
      },
      {
        id: 'ecosystem',
        label: '生态合作',
        title: '向合作伙伴销售场景、API调用与平台基础设施',
        revenue: ['内容交易佣金', '模型API服务收入分成', '积分/激励系统平台服务收入', '生态共建、联合活动与API服务'],
        value: ['让模型和工具能力真正进入创作者工作流和品牌采购链路', '持续调用、持续付费、持续留存成为核心增长', '模型进化；平台确保进化成为可持续供给'],
      },
    ],
  },
  en: {
    badge: '06 / Business Model',
    title: 'Who to Sell To, How to Sell, When to Profit: From Project-Driven to Platform-Driven',
    subtitle: 'Multi-revenue engine across four sides',
    desc: 'AIyavaa simultaneously has four attributes: content platform, creator economy platform, transaction platform, and enterprise service platform, with diverse revenue streams and room for structural upgrades.',
    revenueLabel: 'Revenue Streams',
    valueLabel: 'Value Proposition',
    tabs: [
      {
        id: 'user',
        label: 'Users',
        title: 'Selling content experience, interaction experience, and identity benefits to users',
        revenue: ['Premium subscriptions', 'Community-derived revenue', 'Ad sharing & premium features', 'Virtual items & tips', 'Episode pay-per-view or interactive unlocks'],
        value: ['Upgrade from "passive browsing" to "discovery + participation + co-creation + consumption"', 'Increase repeat purchases through interactive dramas, character content, and community mechanisms', 'Emotional value and identity, leading to higher payment ceilings'],
      },
      {
        id: 'creator',
        label: 'Creators',
        title: 'Selling productivity, traffic, transactions, and sustained monetization to creators',
        revenue: ['Premium tool subscriptions', 'Promotion service fees', 'Content copyright trading revenue share', 'Custom order commissions', 'Token/compute/generation quota sharing', 'AI livestream digital humans & AI agent services'],
        value: ['"Continuous production, continuous exposure, continuous orders, continuous monetization" not just "create works"', 'Platform + value-added services model improves ARPU and long-term retention', 'Creator assets accumulate into tradable works, characters, and style packages'],
      },
      {
        id: 'brand',
        label: 'Brands',
        title: 'Selling results, efficiency, and standardized delivery to brands',
        revenue: ['Content customization service commissions', 'Enterprise memberships / tool subscriptions', 'AI brand / marketing video solutions', 'Super AI agent services', 'Operations management services'],
        value: ['Brands buy production capability, not just models—faster, more stable, more controllable', 'Generate enterprise annual contracts with high repeat purchases and high margins', 'Standardized procurement improves order efficiency and delivery quality'],
      },
      {
        id: 'ecosystem',
        label: 'Ecosystem Partners',
        title: 'Selling scenarios, API calls, and platform infrastructure to partners',
        revenue: ['Content transaction commissions', 'Model API service revenue sharing', 'Points/incentive system platform service revenue', 'Ecosystem co-operations, joint activities, and API services'],
        value: ['Make model and tool capabilities truly enter creator workflows and brand procurement chains', 'Continuous calls, continuous payments, continuous retention become core growth', 'Models evolve; the platform ensures evolution becomes sustainable supply'],
      },
    ],
  },
};

export default function BusinessModel() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;
  const [activeTab, setActiveTab] = useState('user');
  const current = T.tabs.find((t) => t.id === activeTab);

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

        {/* Tabs */}
        <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-4 lg:p-6 mb-6 sm:mb-8">
          <div className="flex flex-wrap gap-2 lg:gap-3">
            {T.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-500/30 text-white border border-blue-400/50'
                    : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/8'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {current && (
          <div className="grid sm:grid-cols-2 gap-5 lg:gap-7">
            <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-5 sm:p-6 lg:p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-3">{T.revenueLabel}</div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-4">{current.title}</h3>
              <ul className="space-y-3">
                {current.revenue.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300">
                    <span className="text-cyan-400 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-5 sm:p-6 lg:p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-green-400 mb-3">{T.valueLabel}</div>
              <ul className="space-y-3">
                {current.value.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300">
                    <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
