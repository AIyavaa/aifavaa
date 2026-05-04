import { useLanguage } from '@/contexts/LanguageContext';

export default function Funding() {
  const { language } = useLanguage();

  const fundingData = [
    {
      label: language === 'zh' ? '产品与技术' : 'Product & Technology',
      value: 35,
      color: 'from-blue-400 to-blue-600',
    },
    {
      label: language === 'zh' ? '市场与运营' : 'Marketing & Operations',
      value: 25,
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      label: language === 'zh' ? '创作者激励' : 'Creator Incentives',
      value: 18,
      color: 'from-purple-400 to-purple-600',
    },
    {
      label: language === 'zh' ? '品牌客户获取' : 'Brand Customer Acquisition',
      value: 12,
      color: 'from-green-400 to-green-600',
    },
    {
      label: language === 'zh' ? '国际化扩展' : 'International Expansion',
      value: 6,
      color: 'from-orange-400 to-orange-600',
    },
    {
      label: language === 'zh' ? '运营储备' : 'Operating Reserve',
      value: 4,
      color: 'from-pink-400 to-pink-600',
    },
  ];

  return (
    <section id="funding" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>07</span>
            <span>/</span>
            <span>{language === 'zh' ? '融资计划' : 'Funding Plan'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            {language === 'zh'
              ? '融资计划：$6M 种子轮，聚焦生态构建'
              : 'Funding Plan: $6M Seed Round Focused on Ecosystem Building'}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">
              {language === 'zh' ? '战略资本配置促进平台增长' : 'Strategic capital allocation for platform growth'}
            </div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            {language === 'zh'
              ? '种子轮融资 $6M，重点投入产品开发、创作者激励与品牌客户获取，建立平台的初始网络效应。'
              : 'Seed round funding of $6M focused on product development, creator incentives, and brand customer acquisition to establish the platform\'s initial network effects.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-8 lg:gap-10 items-start">
          {/* Donut Chart */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 lg:w-72 lg:h-72">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="30"
                  strokeDasharray={`${(35 * 2 * Math.PI * 80) / 100} ${2 * Math.PI * 80}`}
                  strokeDashoffset="0"
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="30"
                  strokeDasharray={`${(25 * 2 * Math.PI * 80) / 100} ${2 * Math.PI * 80}`}
                  strokeDashoffset={`${(-35 * 2 * Math.PI * 80) / 100}`}
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="url(#gradient3)"
                  strokeWidth="30"
                  strokeDasharray={`${(18 * 2 * Math.PI * 80) / 100} ${2 * Math.PI * 80}`}
                  strokeDashoffset={`${(-(35 + 25) * 2 * Math.PI * 80) / 100}`}
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="url(#gradient4)"
                  strokeWidth="30"
                  strokeDasharray={`${(12 * 2 * Math.PI * 80) / 100} ${2 * Math.PI * 80}`}
                  strokeDashoffset={`${(-(35 + 25 + 18) * 2 * Math.PI * 80) / 100}`}
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="url(#gradient5)"
                  strokeWidth="30"
                  strokeDasharray={`${(6 * 2 * Math.PI * 80) / 100} ${2 * Math.PI * 80}`}
                  strokeDashoffset={`${(-(35 + 25 + 18 + 12) * 2 * Math.PI * 80) / 100}`}
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="url(#gradient6)"
                  strokeWidth="30"
                  strokeDasharray={`${(4 * 2 * Math.PI * 80) / 100} ${2 * Math.PI * 80}`}
                  strokeDashoffset={`${(-(35 + 25 + 18 + 12 + 6) * 2 * Math.PI * 80) / 100}`}
                  transform="rotate(-90 100 100)"
                />
                <circle cx="100" cy="100" r="50" fill="rgb(15, 23, 42)" />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#0891b2" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="100%" stopColor="#16a34a" />
                  </linearGradient>
                  <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fb923c" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                  <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f472b6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl lg:text-4xl font-black text-white">$6M</div>
                <div className="text-xs text-slate-400 mt-1">{language === 'zh' ? '种子轮' : 'Seed Round'}</div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-3">
            {fundingData.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${item.color}`} />
                  <div>
                    <div className="font-bold text-white text-sm">{item.label}</div>
                    <div className="text-xs text-slate-400">
                      {item.value}% {language === 'zh' ? '预算' : 'of budget'}
                    </div>
                  </div>
                </div>
                <div className="text-lg font-black text-white">${(item.value * 0.06).toFixed(1)}M</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-12 lg:mt-16 grid md:grid-cols-3 gap-6 lg:gap-7">
          {[
            {
              label: language === 'zh' ? '预期 18 个月内达成' : 'Expected within 18 months',
              value: 'DAU 10W+',
              desc: language === 'zh' ? '日活用户' : 'Daily Active Users',
            },
            {
              label: language === 'zh' ? '创作者网络规模' : 'Creator Network Size',
              value: '1W+',
              desc: language === 'zh' ? '专业与兼职创作者' : 'Professional & Part-time Creators',
            },
            {
              label: language === 'zh' ? '品牌客户数' : 'Brand Customers',
              value: '100+',
              desc: language === 'zh' ? '年费合同客户' : 'Annual Contract Customers',
            },
          ].map((metric, i) => (
            <div key={i} className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 lg:p-8 text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{metric.label}</div>
              <div className="text-3xl lg:text-4xl font-black text-white mb-2">{metric.value}</div>
              <div className="text-sm text-slate-300">{metric.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
