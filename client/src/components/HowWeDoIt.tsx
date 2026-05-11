import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  zh: {
    badge: '10 / 怎么实现',
    title: '怎么实现',
    subtitle: 'The Partner Flywheel',
    desc: '听到这件事，你就成为了合伙人。每一个人都是 AIyavaa 生态的共建者与受益者。',
    partnerTypes: [
      {
        icon: '💰',
        title: '顶级钞能力合伙人',
        color: 'gold',
        desc: '出资即享权益',
        items: [
          '在平台打造属于自己的系列故事，由平台顶级创作者制作',
          '享有品牌冠名、内容分成、平台股权激励',
          '进入全球百大荣誉合伙人候选名单',
        ],
      },
      {
        icon: '🎬',
        title: '顶级创作合伙人',
        color: 'cyan',
        desc: '上传 10,000 条内容',
        items: [
          '解锁最高级别创作权限与流量扶持',
          '参与平台颁奖典礼（AIyavaa 影视级标准，类奥斯卡体系）',
          '成为行业标准制定者，参与评审委员会',
        ],
      },
      {
        icon: '📤',
        title: '普通合伙人',
        color: 'blue',
        desc: '上传 5 条内容',
        items: [
          '获得对应权益与变现机会',
          '每进入一次即获得一次可变现机会',
          '完成任务、接订单、上传内容，权益随级别提升',
        ],
      },
      {
        icon: '🔗',
        title: '分享合伙人',
        color: 'purple',
        desc: '裂变驱动增长',
        items: [
          '分享即裂变，双向需求匹配，给任务接订单完成订单',
          '建立社群、举办活动，收益来自名人秀、对抗赛、分会',
          '行业垂直合伙人：故事、新闻、品牌、幽默、美食、文旅',
        ],
      },
    ],
    levels: {
      title: '合伙人级别体系',
      rows: [
        { level: '全球百大荣誉合伙人', pct: '顶级 0.01%', rights: '行业标准制定 · 奥斯卡式颁奖 · 平台股权', color: 'gold' },
        { level: '顶级钞能力合伙人', pct: '千分之几', rights: '系列故事权益 · 品牌冠名 · 内容分成', color: 'amber' },
        { level: '顶级创作合伙人', pct: '万分之几', rights: '最高流量扶持 · 评审委员会 · 颁奖典礼', color: 'cyan' },
        { level: '普通合伙人', pct: '开放加入', rights: '变现权益 · 任务系统 · 权限随级别提升', color: 'blue' },
        { level: '分享合伙人', pct: '开放加入', rights: '裂变奖励 · 社群收益 · 垂直行业入口', color: 'purple' },
      ],
    },
    verticals: {
      title: '垂直行业合伙人',
      items: ['故事合伙人', '新闻合伙人', '品牌合伙人', '幽默合伙人', '美食合伙人', '文旅合伙人', '创意合伙人', 'Token 合伙人'],
    },
  },
  en: {
    badge: '10 / How We Do It',
    title: 'How We Do It',
    subtitle: 'The Partner Flywheel',
    desc: 'The moment you hear about this, you become a partner. Everyone is a co-builder and co-beneficiary of the AIyavaa ecosystem.',
    partnerTypes: [
      {
        icon: '💰',
        title: 'Top Capital Partners',
        color: 'gold',
        desc: 'Invest to earn rights',
        items: [
          'Create your own series on the platform, produced by top creators',
          'Enjoy brand naming rights, content revenue share, platform equity incentives',
          'Enter the Global Top 100 Honorary Partners candidate list',
        ],
      },
      {
        icon: '🎬',
        title: 'Top Creation Partners',
        color: 'cyan',
        desc: 'Upload 10,000 pieces',
        items: [
          'Unlock highest-level creation permissions and traffic support',
          'Participate in the AIyavaa Awards (film-grade standards, Oscar-like system)',
          'Become an industry standard setter, join the review committee',
        ],
      },
      {
        icon: '📤',
        title: 'General Partners',
        color: 'blue',
        desc: 'Upload 5 pieces',
        items: [
          'Earn corresponding rights and monetization opportunities',
          'Every entry earns one monetizable opportunity',
          'Complete tasks, take orders, upload content — rights grow with level',
        ],
      },
      {
        icon: '🔗',
        title: 'Sharing Partners',
        color: 'purple',
        desc: 'Viral growth engine',
        items: [
          'Share to grow virally, two-way demand matching, task-order-upload cycle',
          'Build communities, host events, earn from celebrity shows and competitions',
          'Vertical industry partners: stories, news, brands, humor, food, travel',
        ],
      },
    ],
    levels: {
      title: 'Partner Level System',
      rows: [
        { level: 'Global Top 100 Honorary Partners', pct: 'Top 0.01%', rights: 'Industry Standards · Oscar-like Awards · Platform Equity', color: 'gold' },
        { level: 'Top Capital Partners', pct: 'Thousandths', rights: 'Series Story Rights · Brand Naming · Content Revenue Share', color: 'amber' },
        { level: 'Top Creation Partners', pct: 'Ten-thousandths', rights: 'Max Traffic Support · Review Committee · Awards Ceremony', color: 'cyan' },
        { level: 'General Partners', pct: 'Open', rights: 'Monetization Rights · Task System · Permissions Scale with Level', color: 'blue' },
        { level: 'Sharing Partners', pct: 'Open', rights: 'Viral Rewards · Community Revenue · Vertical Industry Entry', color: 'purple' },
      ],
    },
    verticals: {
      title: 'Vertical Industry Partners',
      items: ['Story Partners', 'News Partners', 'Brand Partners', 'Humor Partners', 'Food Partners', 'Travel Partners', 'Creative Partners', 'Token Partners'],
    },
  },
};

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; dot: string }> = {
  gold: { bg: 'from-yellow-500/15 to-amber-500/8', border: 'border-yellow-400/40', text: 'text-yellow-300', badge: 'bg-yellow-500/20 text-yellow-200 border-yellow-400/30', dot: 'bg-yellow-400' },
  amber: { bg: 'from-amber-500/15 to-orange-500/8', border: 'border-amber-400/40', text: 'text-amber-300', badge: 'bg-amber-500/20 text-amber-200 border-amber-400/30', dot: 'bg-amber-400' },
  cyan: { bg: 'from-cyan-500/10 to-cyan-600/5', border: 'border-cyan-400/30', text: 'text-cyan-300', badge: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/30', dot: 'bg-cyan-400' },
  blue: { bg: 'from-blue-500/10 to-blue-600/5', border: 'border-blue-400/30', text: 'text-blue-300', badge: 'bg-blue-500/20 text-blue-200 border-blue-400/30', dot: 'bg-blue-400' },
  purple: { bg: 'from-purple-500/10 to-purple-600/5', border: 'border-purple-400/30', text: 'text-purple-300', badge: 'bg-purple-500/20 text-purple-200 border-purple-400/30', dot: 'bg-purple-400' },
};

export default function HowWeDoIt() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <section id="how-we-do-it" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-200 bg-cyan-500/10 border border-cyan-400/20 backdrop-blur-sm mb-6">
            <span>{T.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            {T.title}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">{T.subtitle}</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">{T.desc}</p>
        </div>

        {/* Partner Types */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {T.partnerTypes.map((p, i) => {
            const c = colorMap[p.color] || colorMap.blue;
            return (
              <div key={i} className={`bg-gradient-to-br ${c.bg} border ${c.border} rounded-2xl p-6`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <h3 className={`font-black text-base text-white`}>{p.title}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${c.badge}`}>{p.desc}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-300">
                      <span className={`flex-shrink-0 font-bold ${c.text}`}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Level Table */}
        <div className="mb-8">
          <h3 className="text-lg font-black text-white mb-4">{T.levels.title}</h3>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[500px] text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/3">
                  <th className="text-left py-3 px-4 font-bold text-slate-400 text-xs uppercase tracking-wider">{language === 'zh' ? '级别' : 'Level'}</th>
                  <th className="text-center py-3 px-4 font-bold text-slate-400 text-xs uppercase tracking-wider">{language === 'zh' ? '占比' : 'Share'}</th>
                  <th className="text-left py-3 px-4 font-bold text-slate-400 text-xs uppercase tracking-wider">{language === 'zh' ? '核心权益' : 'Core Rights'}</th>
                </tr>
              </thead>
              <tbody>
                {T.levels.rows.map((row, i) => {
                  const c = colorMap[row.color] || colorMap.blue;
                  return (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-all">
                      <td className={`py-3 px-4 font-bold ${c.text}`}>{row.level}</td>
                      <td className="py-3 px-4 text-center">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${c.badge}`}>{row.pct}</span>
                      </td>
                      <td className="py-3 px-4 text-slate-300 text-xs">{row.rights}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Vertical Partners */}
        <div>
          <h3 className="text-lg font-black text-white mb-4">{T.verticals.title}</h3>
          <div className="flex flex-wrap gap-2.5">
            {T.verticals.items.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white/6 border border-white/12 text-slate-300 text-sm font-semibold hover:bg-white/10 hover:border-cyan-400/30 hover:text-cyan-300 transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
