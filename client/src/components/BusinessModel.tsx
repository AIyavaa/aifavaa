import { useLanguage } from "@/contexts/LanguageContext";
const { language } = useLanguage();
import { useState } from 'react';

export default function BusinessModel() {
  const [activeTab, setActiveTab] = useState('user');

  const tabs = [
    {
      id: 'user',
      label: 'C端用户 / User',
      title: '对用户卖内容体验、互动体验与身份权益',
      revenue: ['高级会员订阅', '兴趣社区衍生收入', '广告分成与高级功能', '虚拟道具与打赏', '剧集付费观看或互动解锁'],
      value: ['从"被动刷内容"升级为"发现 + 参与 + 共创 + 消费"', '通过互动短剧、角色内容和社区机制提升复购', '情感价值和身份感，带来更高付费天花板'],
    },
    {
      id: 'creator',
      label: 'AI创作者 / Creator',
      title: '对创作者卖生产力、流量、交易与持续变现能力',
      revenue: ['高级工具订阅', '推广服务费', '内容版权交易分成', '定制订单佣金', 'Token / 算力 / 生成额度分成', 'AI直播数字人与 AI 经纪人服务'],
      value: ['不只是"生成作品"，而是"持续生产、持续曝光、持续接单、持续变现"', '平台+增值服务模式提升 ARPU 与长期留存', '创作者资产沉淀为可交易的作品、角色与风格包'],
    },
    {
      id: 'brand',
      label: '品牌企业 / Brand',
      title: '对品牌卖结果、效率与标准化交付',
      revenue: ['内容定制服务抽成', '企业会员 / 工具订阅', 'AI 品牌 / 营销视频解决方案', '超级 AI 经纪人服务', '代运营服务'],
      value: ['品牌买的不是模型，而是更快、更稳、更可控的内容生产能力', '形成企业级年费合同与高复购高毛利收入', '通过标准化采购提升订单效率和交付质量'],
    },
    {
      id: 'ecosystem',
      label: '生态伙伴 / Ecosystem',
      title: '对生态伙伴卖场景、调用量与平台基础设施',
      revenue: ['内容交易佣金', '模型接口服务分成', '积分 / 激励体系带来的平台服务收入', '生态联运、联合活动与 API 服务'],
      value: ['让模型和工具能力真正进入创作者工作流与品牌采购链路', '持续调用、持续付费、持续留存成为核心增量', '模型在变化，平台负责把变化变成可持续供给'],
    },
  ];

  const current = tabs.find((t) => t.id === activeTab);

  return (
    <section id="business" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>05</span>
            <span>/</span>
            <span>Business Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            卖给谁、怎么卖、何时盈利：从项目驱动走向平台驱动
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">Multi-revenue engine across four sides</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            AIyavaa 同时具备内容平台、创作者经济平台、交易平台与企业服务平台四重属性，收入来源丰富且具备结构升级空间。
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-4 lg:p-6 mb-8">
          <div className="flex flex-wrap gap-2 lg:gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
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
          <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
            <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 lg:p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-3">主要收入来源</div>
              <h3 className="text-2xl font-black text-white mb-6">{current.title}</h3>
              <ul className="space-y-3">
                {current.revenue.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300">
                    <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 lg:p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3">平台价值</div>
              <ul className="space-y-4">
                {current.value.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-cyan-400 font-bold flex-shrink-0 mt-1">→</span>
                    <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
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
