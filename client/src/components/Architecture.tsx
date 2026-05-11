import { useLanguage } from '@/contexts/LanguageContext';
import { brandText } from '@/lib/brandText';

const content = {
  zh: {
    badge: '03 / 架构',
    title: '六层架构：从工具到平台的升级',
    subtitle: 'From tools to ecosystem platform',
    desc: 'AIyavaa 不是简单的 AI 视频生成工具，而是一个完整的生态平台，通过六层架构实现用户、创作者、品牌与模型的有机连接。',
    layers: [
      { title: '用户消费中心', desc: '发现、互动、支付、社区' },
      { title: '创作者生产中心', desc: '创作、发布、变现、资产沉淀' },
      { title: '品牌交易中心', desc: '需求发布、采购、交付、复购' },
      { title: '模型能力中台', desc: '路由、编排、质量控制、成本优化' },
      { title: '管理大脑中台', desc: '匹配、治理、激励、数据分析' },
      { title: '版权规则引擎', desc: '版权登记、交易结算、纠纷处理' },
    ],
    features: {
      title: '核心特性',
      items: [
        '多角色协作：用户、创作者、品牌、模型方在同一平台',
        '完整的交易闭环：从需求到交付到复购',
        '智能匹配与优化：AI 驱动的资源分配',
      ],
    },
    advantages: {
      title: '竞争优势',
      items: [
        '掌握供给端：创作者网络与内容库',
        '掌握需求端：品牌客户与交易数据',
        '掌握规则：版权、质量、激励机制',
      ],
    },
  },
  en: {
    badge: '03 / Architecture',
    title: 'Six-Layer Architecture: From Tool to Platform',
    subtitle: 'From tools to ecosystem platform',
    desc: 'AIyavaa is not a simple AI video generation tool — it is a complete ecosystem platform that organically connects users, creators, brands and models through a six-layer architecture.',
    layers: [
      { title: 'User Consumption Center', desc: 'Discovery, interaction, payment, community' },
      { title: 'Creator Production Center', desc: 'Creation, publishing, monetization, asset accumulation' },
      { title: 'Brand Transaction Center', desc: 'Demand publishing, procurement, delivery, repurchase' },
      { title: 'Model Capability Platform', desc: 'Routing, orchestration, quality control, cost optimization' },
      { title: 'Management Intelligence Platform', desc: 'Matching, governance, incentives, data analytics' },
      { title: 'Copyright Rule Engine', desc: 'Copyright registration, transaction settlement, dispute resolution' },
    ],
    features: {
      title: 'Core Features',
      items: [
        'Multi-role collaboration: users, creators, brands and model providers on one platform',
        'Complete transaction loop: from demand to delivery to repurchase',
        'Intelligent matching & optimization: AI-driven resource allocation',
      ],
    },
    advantages: {
      title: 'Competitive Advantages',
      items: [
        'Controls supply side: creator network and content library',
        'Controls demand side: brand clients and transaction data',
        'Controls the rules: copyright, quality and incentive mechanisms',
      ],
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
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">{brandText(T.desc)}</p>
        </div>
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-10 items-start">
          <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-5 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
            <div className="relative z-10 space-y-3">
              {T.layers.map((layer, i) => (
                <div key={i} className="bg-white/6 border border-white/10 rounded-lg p-4 hover:bg-white/8 hover:border-blue-400/30 transition-all">
                  <div className="font-bold text-white text-sm">{layer.title}</div>
                  <div className="text-xs text-slate-400 mt-1">{layer.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 hover:border-blue-400/30 hover:from-white/12 transition-all">
              <h4 className="font-black text-white mb-2">{T.features.title}</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {T.features.items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 hover:border-blue-400/30 hover:from-white/12 transition-all">
              <h4 className="font-black text-white mb-2">{T.advantages.title}</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {T.advantages.items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-cyan-400 font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
