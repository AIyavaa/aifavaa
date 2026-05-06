import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  zh: {
    badge: '07 / 发展路线图',
    title: '三阶段发展路线图',
    subtitle: 'Three-phase growth roadmap',
    desc: '从 0 到 1 验证商业模式，从 1 到 10 扩大生态规模，从 10 到 100 构建平台护城河。',
    phases: [
      {
        phase: '第一阶段',
        period: '0-6 个月',
        title: '产品验证期',
        color: 'blue',
        milestones: ['完成核心 AI 视频生成工具开发', '上线创作者招募计划，目标 1000+ 创作者', '完成品牌客户 MVP 验证，签约 10+ 品牌', '建立基础社区运营体系'],
      },
      {
        phase: '第二阶段',
        period: '6-18 个月',
        title: '生态扩张期',
        color: 'cyan',
        milestones: ['DAU 达到 10 万+，创作者 1 万+', '品牌客户 100+，月收入 $50 万+', '完成 A 轮融资 $2000 万+', '拓展东南亚市场，建立本地化运营团队'],
      },
      {
        phase: '第三阶段',
        period: '18-36 个月',
        title: '平台护城河期',
        color: 'purple',
        milestones: ['DAU 100 万+，创作者 10 万+', '品牌客户 1000+，月收入 $500 万+', '完成 B 轮融资 $1 亿+', '建立 AI 视频生态标准，推进 IPO 或战略并购'],
      },
    ],
  },
  en: {
    badge: '07 / Roadmap',
    title: 'Three-Phase Growth Roadmap',
    subtitle: 'Three-phase growth roadmap',
    desc: 'From 0 to 1 to validate the business model, from 1 to 10 to scale the ecosystem, from 10 to 100 to build platform moats.',
    phases: [
      {
        phase: 'Phase 1',
        period: '0-6 Months',
        title: 'Product Validation',
        color: 'blue',
        milestones: ['Complete core AI video generation tool development', 'Launch creator recruitment program, target 1,000+ creators', 'Complete brand customer MVP validation, sign 10+ brands', 'Establish basic community operations system'],
      },
      {
        phase: 'Phase 2',
        period: '6-18 Months',
        title: 'Ecosystem Expansion',
        color: 'cyan',
        milestones: ['DAU reaches 100K+, creators 10K+', 'Brand customers 100+, monthly revenue $500K+', 'Complete Series A funding $20M+', 'Expand into Southeast Asian markets, build localized operations teams'],
      },
      {
        phase: 'Phase 3',
        period: '18-36 Months',
        title: 'Platform Moat Building',
        color: 'purple',
        milestones: ['DAU 1M+, creators 100K+', 'Brand customers 1,000+, monthly revenue $5M+', 'Complete Series B funding $100M+', 'Establish AI video ecosystem standards, advance IPO or strategic M&A'],
      },
    ],
  },
};

export default function Roadmap() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;
  const [expanded, setExpanded] = useState<number | null>(null);

  const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
    blue: { bg: 'bg-blue-500/20', border: 'border-blue-400/40', text: 'text-blue-300', dot: 'bg-blue-400' },
    cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-400/40', text: 'text-cyan-300', dot: 'bg-cyan-400' },
    purple: { bg: 'bg-purple-500/20', border: 'border-purple-400/40', text: 'text-purple-300', dot: 'bg-purple-400' },
  };

  return (
    <section id="roadmap" className="relative py-20 lg:py-28">
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
        <div className="space-y-4">
          {T.phases.map((phase, i) => {
            const c = colorMap[phase.color] || colorMap.blue;
            const isOpen = expanded === i;
            return (
              <div key={i} className={`${c.bg} border ${c.border} backdrop-blur-xl rounded-2xl overflow-hidden transition-all`}>
                <button
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
                  onClick={() => setExpanded(isOpen ? null : i)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${c.dot}`} />
                    <div>
                      <div className={`text-xs font-bold uppercase tracking-wider ${c.text} mb-1`}>{phase.phase} · {phase.period}</div>
                      <div className="text-xl font-black text-white">{phase.title}</div>
                    </div>
                  </div>
                  <span className={`text-2xl text-slate-400 transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                {isOpen && (
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    <ul className="space-y-3">
                      {phase.milestones.map((m, j) => (
                        <li key={j} className="flex gap-3 text-sm text-slate-300">
                          <span className={`font-bold ${c.text} flex-shrink-0`}>✓</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
