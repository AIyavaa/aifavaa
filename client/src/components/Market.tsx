import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  zh: {
    badge: '01 / 市场机会',
    title: '万亿美元生态位真空：机会不在单一模型，而在统一入口',
    subtitle: 'The white space sits at the ecosystem layer',
    desc: 'AI 能力成熟、视频消费爆发、创作者供给增长、品牌预算迁移——四股力量同时出现，但中间平台仍然缺位。',
    opportunities: [
      { label: '2030年AI对全球经济贡献', value: '$15.7T', desc: '全球AI经济规模', detail: 'AI 正在重构内容生产、营销分发与消费者交易的底层逻辑。' },
      { label: '2027年创作者经济规模', value: '$480B', desc: '创作者经济扩张', detail: 'AI 视频生产者将从少数专业团队扩展至更广泛的创作者群体。' },
      { label: 'AI视频市场 2024→2030', value: '$3.86B → $42.29B', desc: 'AI视频行业增长', detail: '视频内容生产与消费的成本结构正在被根本性改变。' },
      { label: 'YouTube Shorts日播放量', value: '200B+', desc: '视频消费已被验证', detail: '短视频已成为主流内容消费形态，AI生成视频的市场潜力巨大。' },
    ],
  },
  en: {
    badge: '01 / Market Opportunity',
    title: 'Trillion-Dollar Ecosystem Vacuum: The Opportunity Is Not in a Single Model, But in a Unified Gateway',
    subtitle: 'The white space sits at the ecosystem layer',
    desc: 'AI capability maturity, video consumption explosion, creator supply growth, and brand budget migration — four forces converging simultaneously, yet the middleware platform is still missing.',
    opportunities: [
      { label: 'AI to global economy by 2030', value: '$15.7T', desc: 'Global AI Economy', detail: 'AI is restructuring content production, marketing distribution, and consumer transactions.' },
      { label: 'Creator economy by 2027', value: '$480B', desc: 'Creator Economy Expansion', detail: 'AI video producers will expand from a small number of professional teams to a broader creator community.' },
      { label: 'AI Video market 2024 → 2030', value: '$3.86B → $42.29B', desc: 'AI Video Industry Growth', detail: 'The cost structure of video content production and consumption is being fundamentally transformed.' },
      { label: 'YouTube Shorts daily views', value: '200B+', desc: 'Video Consumption Verified', detail: 'Short videos have become the mainstream content consumption format, with huge market potential for AI-generated videos.' },
    ],
  },
};

export default function Market() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <section id="market" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {T.opportunities.map((opp, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-5 sm:p-6 overflow-hidden group hover:border-blue-400/30 hover:from-white/12 transition-all"
            >
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all" />
              <div className="relative z-10">
                <div className="text-xs text-slate-400 mb-2">{opp.label}</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2">{opp.value}</div>
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
