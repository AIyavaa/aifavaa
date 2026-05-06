import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  zh: {
    badge: '创始团队',
    title: '核心创始团队',
    subtitle: 'Founding team with deep expertise',
    desc: '四位创始人各具所长，覆盖战略、内容、运营与技术，共同构建 AIyavaa 的核心竞争力。',
    members: [
      {
        name: '尹璐 EVA',
        role: '创始人兼 CEO',
        color: 'blue',
        highlights: ['跨文化创业者，管理咨询背景', '菲律宾本地生活互联网创业，从零到一验证完整闭环', '东南亚产业投资与文化出海，发起"南洋论坛"', '融合新加坡战略视野、东南亚在地化洞察与中国互联网方法论'],
      },
      {
        name: '老丁',
        role: '联合创始人兼 CIO（首席内容与生态官）',
        color: 'cyan',
        highlights: ['专业赛事与优质内容制作背景', '对顶尖内容品质有苛刻眼光与生产能力', '平台工具与内容能力高效转化为 B 端客户解决方案', '连接创意与商业价值的关键桥梁'],
      },
      {
        name: 'Johnson',
        role: '联合创始人兼 COO',
        color: 'purple',
        highlights: ['Shopee 核心业务经历，高速增长平台复杂运营实战经验', '好莱坞短剧投资人，对短视频内容趋势与用户付费心智有超前认知', '对 IP 孵化拥有丰富资源', '为 AIyavaa 切入 AI 短剧赛道提供即时加速力'],
      },
      {
        name: '涛哥',
        role: '联合创始人兼 CTO / 首席战略官',
        color: 'green',
        highlights: ['前腾讯战略部"泛娱乐+IP"概念首倡者，定义行业框架的前瞻视野', '360 操盘年利润 10 亿级业务，兼具产业深度与商业化能力', '2024 年起专注 AI 投资与战略设计', '顶层设计师，定义赛道与撬动关键资源'],
      },
    ],
  },
  en: {
    badge: 'Founding Team',
    title: 'Core Founding Team',
    subtitle: 'Founding team with deep expertise',
    desc: 'Four founders with complementary strengths covering strategy, content, operations and technology, collectively building AIyavaa\'s core competitive advantages.',
    members: [
      {
        name: 'Eva Yin',
        role: 'Founder & CEO',
        color: 'blue',
        highlights: ['Cross-cultural entrepreneur with management consulting background', 'Built Philippines local life internet startup from 0 to 1, validating full product-market loop', 'Southeast Asia industry investment and cultural expansion, founded "Nanyang Forum"', 'Integrates Singapore strategic vision, SEA localization insights, and China internet methodology'],
      },
      {
        name: 'Lao Ding',
        role: 'Co-Founder & CIO (Chief Content & Ecosystem Officer)',
        color: 'cyan',
        highlights: ['Professional sports events and premium content production background', 'Exacting standards and production capability for top-tier content quality', 'Efficiently converts platform tools and content capabilities into B2B client solutions', 'Key bridge connecting creative value and commercial outcomes'],
      },
      {
        name: 'Johnson',
        role: 'Co-Founder & COO',
        color: 'purple',
        highlights: ['Core business experience at Shopee, hands-on management of complex operations on high-growth platforms', 'Hollywood short drama investor with forward-thinking insights on short video trends and user payment psychology', 'Rich resources in IP incubation', 'Provides immediate acceleration for AIyavaa\'s entry into the AI short drama track'],
      },
      {
        name: 'Tao Ge',
        role: 'Co-Founder & CTO / Chief Strategy Officer',
        color: 'green',
        highlights: ['Former Tencent Strategy Dept. pioneer of "Pan-entertainment + IP" concept, with forward-looking vision for defining industry frameworks', 'Led 360 business unit generating ¥1B+ annual profit, combining industry depth with commercialization capability', 'Focused on AI investment and strategic design since 2024', 'Top-level architect who defines tracks and leverages key resources'],
      },
    ],
  },
};

export default function Team() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  const colorMap: Record<string, { bg: string; border: string; badge: string; dot: string }> = {
    blue: { bg: 'from-blue-500/10 to-blue-600/5', border: 'border-blue-400/30', badge: 'bg-blue-500/20 text-blue-300', dot: 'bg-blue-400' },
    cyan: { bg: 'from-cyan-500/10 to-cyan-600/5', border: 'border-cyan-400/30', badge: 'bg-cyan-500/20 text-cyan-300', dot: 'bg-cyan-400' },
    purple: { bg: 'from-purple-500/10 to-purple-600/5', border: 'border-purple-400/30', badge: 'bg-purple-500/20 text-purple-300', dot: 'bg-purple-400' },
    green: { bg: 'from-green-500/10 to-green-600/5', border: 'border-green-400/30', badge: 'bg-green-500/20 text-green-300', dot: 'bg-green-400' },
  };

  return (
    <section id="team" className="relative py-20 lg:py-28">
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
          {T.members.map((member, i) => {
            const c = colorMap[member.color] || colorMap.blue;
            return (
              <div key={i} className={`bg-gradient-to-br ${c.bg} border ${c.border} backdrop-blur-xl rounded-2xl p-6 lg:p-8`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${c.badge}`}>
                    <div className={`w-3 h-3 rounded-full ${c.dot}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{member.name}</h3>
                    <p className={`text-sm font-semibold ${c.badge.split(' ')[1]}`}>{member.role}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {member.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-300">
                      <span className="text-slate-500 flex-shrink-0">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
