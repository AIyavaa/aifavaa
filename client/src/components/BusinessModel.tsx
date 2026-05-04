import { useState } from 'react';

export default function BusinessModel() {
  const [activeTab, setActiveTab] = useState('user');

  const tabs = [
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
            Who to Sell To, How to Sell, When to Profit: From Project-Driven to Platform-Driven
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">Multi-revenue engine across four sides</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            AIyavaa simultaneously has four attributes: content platform, creator economy platform, transaction platform, and enterprise service platform, with diverse revenue streams and room for structural upgrades.
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
              <div className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-3">Revenue Streams</div>
              <h3 className="text-2xl font-black text-white mb-4">{current.title}</h3>
              <ul className="space-y-3">
                {current.revenue.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300">
                    <span className="text-cyan-400 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 lg:p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-green-400 mb-3">Value Proposition</div>
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
