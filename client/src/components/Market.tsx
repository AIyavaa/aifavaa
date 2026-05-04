import { useLanguage } from '@/contexts/LanguageContext';

export default function Market() {
  const { language } = useLanguage();

  const opportunities = [
    {
      label: 'AI to global economy by 2030',
      value: '$15.7T',
      desc: language === 'zh' ? '智能经济总盘子' : 'Intelligence economy total',
      detail:
        language === 'zh'
          ? 'AI 正在重构内容生产、营销分发与消费交易方式。'
          : 'AI is reshaping content production, marketing distribution, and consumer transactions.',
    },
    {
      label: 'Creator economy by 2027',
      value: '$480B',
      desc: language === 'zh' ? '创作者经济扩容' : 'Creator economy expansion',
      detail:
        language === 'zh'
          ? 'AI 视频生产者将从少数专业团队扩展到更广泛的创作者群体。'
          : 'AI video producers will expand from a few professional teams to a broader creator community.',
    },
    {
      label: 'AI Video market 2024 → 2030',
      value: '$3.86B → $42.29B',
      desc: language === 'zh' ? 'AI 视频产业进入增长通道' : 'AI video enters growth phase',
      detail:
        language === 'zh'
          ? '视频内容生产与消费的成本结构被彻底改写。'
          : 'The cost structure of video production and consumption is fundamentally rewritten.',
    },
    {
      label: 'YouTube Shorts daily views',
      value: '200B+',
      desc: language === 'zh' ? '视频消费需求已被验证' : 'Video consumption verified',
      detail:
        language === 'zh'
          ? '短视频已成为主流内容消费形式，AI 生成视频有巨大市场。'
          : 'Short videos are now the mainstream content consumption format with massive market potential for AI-generated content.',
    },
  ];

  return (
    <section id="market" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>01</span>
            <span>/</span>
            <span>{language === 'zh' ? '市场机会' : 'Market Opportunity'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            {language === 'zh'
              ? '万亿美元生态位真空：机会不在单一模型，而在统一入口'
              : 'Trillion-Dollar Ecosystem Gap: Opportunity Lies in Unified Entry Point, Not Single Models'}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">
              {language === 'zh' ? '生态层的白色空间' : 'The white space sits at the ecosystem layer'}
            </div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            {language === 'zh'
              ? 'AI 能力成熟、视频消费爆发、创作者供给增长、品牌预算迁移——四股力量同时出现，但中间平台仍然缺位。'
              : 'Mature AI capabilities, exploding video consumption, growing creator supply, and shifting brand budgets converge simultaneously, yet the middle platform remains absent.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {opportunities.map((opp, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 overflow-hidden group hover:border-blue-400/30 hover:from-white/12 transition-all"
            >
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all" />
              <div className="relative z-10">
                <div className="text-xs text-slate-400 mb-2">{opp.label}</div>
                <div className="text-3xl sm:text-4xl font-black text-white mb-2">{opp.value}</div>
                <div className="text-sm font-bold text-slate-200 mb-3">{opp.desc}</div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{opp.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
