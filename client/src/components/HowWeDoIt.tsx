import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { brandText } from '@/lib/brandText';

const levels = {
  zh: [
    { level: 'L1', name: '探索合伙人', condition: '注册并上传 1 条视频', perks: '基础创作工具权限 + 平台积分', color: 'slate' },
    { level: 'L2', name: '创作合伙人', condition: '上传 5 条视频', perks: '扩展工具 + 收益分成资格', color: 'blue' },
    { level: 'L3', name: '活跃合伙人', condition: '上传 20 条 / 月活跃', perks: '专属创作模板 + 优先推流', color: 'cyan' },
    { level: 'L4', name: '分享合伙人', condition: '邀请 10 人注册', perks: '裂变收益 + 社群建立权限', color: 'teal' },
    { level: 'L5', name: '社群合伙人', condition: '建立 50 人活跃社群', perks: '社群活动组织权 + 专属徽章', color: 'green' },
    { level: 'L6', name: '品牌合伙人', condition: '完成 3 个品牌合作订单', perks: '品牌资源对接 + 高级变现通道', color: 'yellow' },
    { level: 'L7', name: '创意合伙人', condition: '累计 10000 条优质内容', perks: '创意认证 + 行业奖项提名资格', color: 'orange' },
    { level: 'L8', name: '钞能力合伙人', condition: '平台投资或赞助达标', perks: '专属 IP 系列制作权 + 分红权益', color: 'amber' },
    { level: 'L9', name: '荣誉合伙人', condition: '全球百大合伙人评选入围', perks: '全球活动嘉宾 + 颁奖典礼席位', color: 'rose' },
    { level: 'L10', name: '传奇合伙人', condition: '平台生态顶级贡献者', perks: '平台共治权 + 终身权益 + 奥斯卡级荣誉', color: 'purple' },
  ],
  en: [
    { level: 'L1', name: 'Explorer Partner', condition: 'Register & upload 1 video', perks: 'Basic creation tools + platform credits', color: 'slate' },
    { level: 'L2', name: 'Creator Partner', condition: 'Upload 5 videos', perks: 'Extended tools + revenue share eligibility', color: 'blue' },
    { level: 'L3', name: 'Active Partner', condition: 'Upload 20 videos / monthly active', perks: 'Exclusive templates + priority distribution', color: 'cyan' },
    { level: 'L4', name: 'Sharing Partner', condition: 'Invite 10 users', perks: 'Referral income + community creation rights', color: 'teal' },
    { level: 'L5', name: 'Community Partner', condition: 'Build 50-person active community', perks: 'Event hosting rights + exclusive badge', color: 'green' },
    { level: 'L6', name: 'Brand Partner', condition: 'Complete 3 brand collaboration orders', perks: 'Brand resource access + premium monetization', color: 'yellow' },
    { level: 'L7', name: 'Creative Partner', condition: '10,000 quality content pieces', perks: 'Creative certification + industry award nomination', color: 'orange' },
    { level: 'L8', name: 'Capital Partner', condition: 'Platform investment / sponsorship milestone', perks: 'Exclusive IP series rights + dividend benefits', color: 'amber' },
    { level: 'L9', name: 'Honor Partner', condition: 'Global Top 100 Partner selection', perks: 'Global event guest + awards ceremony seat', color: 'rose' },
    { level: 'L10', name: 'Legend Partner', condition: 'Top ecosystem contributor', perks: 'Platform governance + lifetime benefits + Oscar-level honor', color: 'purple' },
  ],
};

const verticals = {
  zh: [
    { icon: '📖', name: '故事合伙人', desc: '热门、猎奇、文旅，从发现到裂变，带动线下分店与文旅介入' },
    { icon: '📰', name: '新闻合伙人', desc: '实时资讯视频化，打造 AI 原生新闻内容生态' },
    { icon: '🏷️', name: '品牌合伙人', desc: '品牌广告视频生产、投放与效果追踪一体化' },
    { icon: '😂', name: '幽默合伙人', desc: '搞笑内容创作者，通过平台实现流量变现' },
    { icon: '🍜', name: '美食合伙人', desc: '美食创意视频，连接餐饮品牌与消费者' },
    { icon: '💻', name: '科技合伙人', desc: 'AI、科技产品评测与科普内容创作者' },
    { icon: '📚', name: '教育合伙人', desc: '知识付费、在线课程、教育内容视频化' },
    { icon: '🧠', name: '知识合伙人', desc: '专业知识、行业洞察、思维方式的视频传播' },
    { icon: '🤝', name: '人脉合伙人', desc: '连接各行业资源，构建跨界协作网络' },
    { icon: '🌐', name: '全球合伙人', desc: '海外市场拓展，本地化内容与生态建设' },
  ],
  en: [
    { icon: '📖', name: 'Story Partner', desc: 'Trending, curiosity, cultural tourism — from discovery to viral spread, driving offline branches and tourism integration' },
    { icon: '📰', name: 'News Partner', desc: 'Real-time news video production, building AI-native news content ecosystem' },
    { icon: '🏷️', name: 'Brand Partner', desc: 'Brand video production, placement, and performance tracking in one platform' },
    { icon: '😂', name: 'Humor Partner', desc: 'Comedy content creators monetizing through platform traffic' },
    { icon: '🍜', name: 'Food Partner', desc: 'Creative food videos connecting restaurant brands with consumers' },
    { icon: '💻', name: 'Tech Partner', desc: 'AI and tech product reviews and science popularization content creators' },
    { icon: '📚', name: 'Education Partner', desc: 'Knowledge monetization, online courses, educational content video production' },
    { icon: '🧠', name: 'Knowledge Partner', desc: 'Professional knowledge, industry insights, and mindset video distribution' },
    { icon: '🤝', name: 'Network Partner', desc: 'Connecting cross-industry resources and building collaborative networks' },
    { icon: '🌐', name: 'Global Partner', desc: 'Overseas market expansion, localized content and ecosystem building' },
  ],
};

const competition = {
  zh: {
    badge: '全球 AI 视频大赛',
    title: '全球 AIyavaa 视频创作大赛',
    subtitle: '凭努力就可以变现 · 人人都有机会',
    desc: '每一个人都可以参赛，每一个人都有机会赢得奖励。搞笑也好、商业也好，只要通过 AIyavaa 平台创作，就能变现。',
    phases: [
      { label: '报名费', value: '$2 – $10', note: '低门槛，人人可参与' },
      { label: '最高奖金', value: '$1,000,000', note: '顶级大奖，改变人生' },
      { label: '入围人数', value: '100 – 1,000', note: '大规模入围，机会均等' },
      { label: '线下活动', value: '新加坡', note: '机票 + 住宿 + 餐饮全包' },
    ],
    rounds: [
      { name: '初赛入围', count: '1000', reward: '平台专属徽章 + 积分奖励' },
      { name: '百强晋级', count: '100', reward: '奖金 + 新加坡线下活动邀请' },
      { name: '五十强', count: '50', reward: '奖金翻倍 + 媒体曝光' },
      { name: '二十强', count: '20', reward: '品牌合作资源对接' },
      { name: '三强决赛', count: '3', reward: '颁奖典礼 + 高额奖金' },
      { name: '年度冠军', count: '1', reward: '$1,000,000 大奖 + 平台荣誉合伙人' },
    ],
    why: [
      '赞助费覆盖机票、住宿、餐饮，参赛者零负担',
      '线上播放入围作品，全球观众投票，流量即收益',
      '品牌赞助商直接对接优质创作者，商业价值即时转化',
      '颁奖典礼邀请行业大佬担任评审，类奥斯卡级荣誉认定',
      '设立 AIyavaa 影视级标准，推动行业短剧评级与创意认定',
    ],
  },
  en: {
    badge: 'Global AI Video Competition',
    title: 'Global AIyavaa Video Creation Contest',
    subtitle: 'Earn through effort · Everyone has a chance',
    desc: 'Anyone can enter, anyone can win. Comedy or commercial — create through the AIyavaa platform and monetize your talent.',
    phases: [
      { label: 'Entry Fee', value: '$2 – $10', note: 'Low barrier, open to all' },
      { label: 'Top Prize', value: '$1,000,000', note: 'Life-changing grand prize' },
      { label: 'Finalists', value: '100 – 1,000', note: 'Large-scale selection, equal opportunity' },
      { label: 'Live Event', value: 'Singapore', note: 'Flights + hotel + meals fully covered' },
    ],
    rounds: [
      { name: 'Qualifying Round', count: '1,000', reward: 'Exclusive platform badge + credit rewards' },
      { name: 'Top 100', count: '100', reward: 'Cash prize + Singapore live event invitation' },
      { name: 'Top 50', count: '50', reward: 'Double prize + media exposure' },
      { name: 'Top 20', count: '20', reward: 'Brand partnership resource matching' },
      { name: 'Top 3 Finals', count: '3', reward: 'Awards ceremony + major cash prize' },
      { name: 'Annual Champion', count: '1', reward: '$1,000,000 grand prize + Platform Honor Partner' },
    ],
    why: [
      'Sponsorship covers flights, accommodation, and meals — zero cost for participants',
      'Finalist works streamed online with global audience voting — traffic equals revenue',
      'Brand sponsors directly connect with top creators — commercial value converted instantly',
      'Awards ceremony invites industry leaders as judges — Oscar-level honor recognition',
      'Establishes AIyavaa cinematic standards, driving short drama ratings and creative certification',
    ],
  },
};

const mainContent = {
  zh: {
    badge: '10 / 怎么实现',
    title: '合伙人生态体系',
    subtitle: 'Partner ecosystem — everyone can participate',
    desc: '听到这件事，你就成为合伙人。AIyavaa 构建了一套完整的合伙人成长体系，从 L1 到 L10，每一级都有对应的权益和晋升路径。',
    partnerTypes: [
      { icon: '💰', name: 'Token 合伙人', desc: '持有平台 Token，参与生态治理与收益分配' },
      { icon: '🔗', name: '分享合伙人', desc: '通过分享内容和邀请好友，实现裂变增长与收益' },
      { icon: '🎨', name: '创作合伙人', desc: '持续创作优质内容，获得平台流量与商业变现' },
      { icon: '💎', name: '钞能力合伙人', desc: '通过平台投资打造自己的 IP 系列故事，获得专属权益' },
    ],
    levelTitle: 'L1–L10 合伙人级别体系',
    levelDesc: '每个合伙人都从 L1 开始，通过完成对应条件逐级晋升，解锁更多权益。点击每个级别查看详情。',
    verticalTitle: '垂直行业合伙人',
    verticalDesc: '不同行业的创作者，都能在 AIyavaa 找到属于自己的赛道。悬停查看详情。',
  },
  en: {
    badge: '10 / How We Do It',
    title: 'Partner Ecosystem',
    subtitle: 'Partner ecosystem — everyone can participate',
    desc: 'Hear about it, become a partner. AIyavaa has built a complete partner growth system — from L1 to L10, each level has corresponding benefits and advancement paths.',
    partnerTypes: [
      { icon: '💰', name: 'Token Partner', desc: 'Hold platform tokens, participate in ecosystem governance and revenue distribution' },
      { icon: '🔗', name: 'Sharing Partner', desc: 'Grow through content sharing and friend invitations — viral growth with income' },
      { icon: '🎨', name: 'Creator Partner', desc: 'Create quality content consistently, earn platform traffic and commercial monetization' },
      { icon: '💎', name: 'Capital Partner', desc: 'Invest through the platform to build your own IP series, earn exclusive rights and benefits' },
    ],
    levelTitle: 'L1–L10 Partner Level System',
    levelDesc: 'Every partner starts at L1 and advances by completing corresponding conditions, unlocking more benefits. Click each level for details.',
    verticalTitle: 'Vertical Industry Partners',
    verticalDesc: 'Creators from every industry can find their own track on AIyavaa. Hover to see details.',
  },
};


const milestones = {
  zh: {
    title: '阶段目标：我们如何做到',
    subtitle: 'How we achieve our goals — phase by phase',
    phases: [
      {
        period: '0 – 6 个月',
        label: '验证期',
        color: 'blue',
        goal: '完成产品 MVP，验证核心用户行为',
        targets: [
          '上线 AI 视频生成核心功能，支持 100+ 模型调度',
          '完成首批 1000 名种子用户招募（合伙人 L1-L3）',
          '举办首届小规模 AI 视频赛事（100 人），验证赛事模型',
          '完成新加坡实体注册与合规架构搭建',
          '获得首批品牌客户 3-5 家，验证 B 端商业模式',
        ],
        why: '通过低成本赛事和种子用户快速验证产品方向，用真实数据说话',
      },
      {
        period: '6 – 12 个月',
        label: '增长期',
        color: 'cyan',
        goal: '规模化用户增长，建立合伙人生态雏形',
        targets: [
          '注册用户突破 10 万，月活跃创作者 1 万+',
          '合伙人体系全面上线，L1-L10 级别完整运营',
          '举办第二届 AI 视频大赛（500 人入围），新加坡线下活动落地',
          '完成 Pre-A 轮融资，资金支撑全球扩张',
          '东南亚 3 个国家完成本地化运营（新加坡、马来西亚、菲律宾）',
          '垂直行业合伙人覆盖 5 个赛道（故事/品牌/教育/科技/美食）',
        ],
        why: '合伙人裂变机制是核心增长引擎，每个 L4+ 合伙人带来 10+ 新用户，实现低成本规模化',
      },
      {
        period: '12 – 24 个月',
        label: '扩张期',
        color: 'purple',
        goal: '全球化布局，建立行业标准',
        targets: [
          '全球注册用户突破 100 万，月活跃创作者 10 万+',
          '举办首届全球 AIyavaa 视频创作大赛（1000 人入围），$100 万奖金池',
          '建立 AIyavaa 影视级标准，推动行业短剧评级与创意认定',
          '全球百大荣誉合伙人评选，颁奖典礼邀请行业大佬',
          '完成 A 轮融资，估值目标 $1 亿+',
          '覆盖全球 10 个国家，建立本地化合伙人分会',
          '品牌广告收入达到月均 $100 万+',
        ],
        why: '赛事品牌效应 + 合伙人生态 + 行业标准三驾马车，构建护城河。赛事每年举办，每届都是新的增长飞轮',
      },
    ],
  },
  en: {
    title: 'Phase Targets: How We Get There',
    subtitle: 'How we achieve our goals — phase by phase',
    phases: [
      {
        period: '0 – 6 Months',
        label: 'Validation',
        color: 'blue',
        goal: 'Complete MVP, validate core user behavior',
        targets: [
          'Launch core AI video generation with 100+ model scheduling',
          'Recruit first 1,000 seed users (Partner L1-L3)',
          'Host inaugural small-scale AI video contest (100 participants) to validate event model',
          'Complete Singapore entity registration and compliance structure',
          'Secure first 3-5 brand clients to validate B2B business model',
        ],
        why: 'Low-cost events and seed users rapidly validate product direction — let real data speak',
      },
      {
        period: '6 – 12 Months',
        label: 'Growth',
        color: 'cyan',
        goal: 'Scale user growth, establish partner ecosystem foundation',
        targets: [
          'Registered users exceed 100K, monthly active creators 10K+',
          'Full partner system live with L1-L10 levels fully operational',
          'Host 2nd AI Video Contest (500 finalists), Singapore live event',
          'Complete Pre-A funding round to support global expansion',
          'Localized operations in 3 SEA countries (Singapore, Malaysia, Philippines)',
          'Vertical industry partners covering 5 tracks (Story/Brand/Education/Tech/Food)',
        ],
        why: 'Partner viral mechanics are the core growth engine — each L4+ partner brings 10+ new users, enabling low-cost scale',
      },
      {
        period: '12 – 24 Months',
        label: 'Expansion',
        color: 'purple',
        goal: 'Global footprint, establish industry standards',
        targets: [
          'Global registered users exceed 1M, monthly active creators 100K+',
          'Host inaugural Global AIyavaa Video Creation Contest (1,000 finalists), $1M prize pool',
          'Establish AIyavaa cinematic standards, drive short drama ratings and creative certification',
          'Global Top 100 Honor Partner selection, awards ceremony with industry leaders',
          'Complete Series A funding, target valuation $100M+',
          'Presence in 10 countries globally, local partner chapters established',
          'Brand advertising revenue reaches $1M+ monthly average',
        ],
        why: 'Three engines: event brand effect + partner ecosystem + industry standards build the moat. Annual contests create a new growth flywheel each year',
      },
    ],
  },
};

const colorClassMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  slate:  { bg: 'from-slate-500/10 to-slate-600/5',   border: 'border-slate-400/25',  text: 'text-slate-300',  badge: 'bg-slate-500/20 text-slate-200' },
  blue:   { bg: 'from-blue-500/10 to-blue-600/5',     border: 'border-blue-400/30',   text: 'text-blue-300',   badge: 'bg-blue-500/20 text-blue-200' },
  cyan:   { bg: 'from-cyan-500/10 to-cyan-600/5',     border: 'border-cyan-400/30',   text: 'text-cyan-300',   badge: 'bg-cyan-500/20 text-cyan-200' },
  teal:   { bg: 'from-teal-500/10 to-teal-600/5',     border: 'border-teal-400/30',   text: 'text-teal-300',   badge: 'bg-teal-500/20 text-teal-200' },
  green:  { bg: 'from-green-500/10 to-green-600/5',   border: 'border-green-400/30',  text: 'text-green-300',  badge: 'bg-green-500/20 text-green-200' },
  yellow: { bg: 'from-yellow-500/10 to-yellow-600/5', border: 'border-yellow-400/30', text: 'text-yellow-300', badge: 'bg-yellow-500/20 text-yellow-200' },
  orange: { bg: 'from-orange-500/10 to-orange-600/5', border: 'border-orange-400/30', text: 'text-orange-300', badge: 'bg-orange-500/20 text-orange-200' },
  amber:  { bg: 'from-amber-500/10 to-amber-600/5',   border: 'border-amber-400/30',  text: 'text-amber-300',  badge: 'bg-amber-500/20 text-amber-200' },
  rose:   { bg: 'from-rose-500/10 to-rose-600/5',     border: 'border-rose-400/30',   text: 'text-rose-300',   badge: 'bg-rose-500/20 text-rose-200' },
  purple: { bg: 'from-purple-500/10 to-purple-600/5', border: 'border-purple-400/30', text: 'text-purple-300', badge: 'bg-purple-500/20 text-purple-200' },
};

export default function HowWeDoIt() {
  const { language } = useLanguage();
  const T = mainContent[language as 'zh' | 'en'] || mainContent.zh;
  const lvls = levels[language as 'zh' | 'en'] || levels.zh;
  const verts = verticals[language as 'zh' | 'en'] || verticals.zh;
  const comp = competition[language as 'zh' | 'en'] || competition.zh;
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);
  const milestoneData = milestones[language as 'zh' | 'en'] || milestones.zh;

  return (
    <section id="how-we-do-it" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">

        {/* Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-purple-200 bg-purple-500/10 border border-purple-400/20 backdrop-blur-sm mb-6">
            <span>{T.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            {brandText(T.title)}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">{T.subtitle}</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">{brandText(T.desc)}</p>
        </div>

        {/* Partner types */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {T.partnerTypes.map((pt, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-purple-400/30 transition-colors">
              <div className="text-3xl mb-3">{pt.icon}</div>
              <h3 className="text-base font-black text-white mb-1.5">{pt.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>

        {/* L1-L10 Level system */}
        <div>
          <h3 className="text-2xl font-black text-white mb-2">{T.levelTitle}</h3>
          <p className="text-slate-400 text-sm mb-6">{T.levelDesc}</p>
          <div className="space-y-2">
            {lvls.map((lv, i) => {
              const c = colorClassMap[lv.color] || colorClassMap.blue;
              const isOpen = expandedLevel === i;
              return (
                <div key={i} className={`bg-gradient-to-r ${c.bg} border ${c.border} rounded-xl overflow-hidden`}>
                  <button
                    className="w-full flex items-center gap-4 px-5 py-3.5 text-left"
                    onClick={() => setExpandedLevel(isOpen ? null : i)}
                  >
                    <span className={`text-xs font-black px-2.5 py-1 rounded-lg flex-shrink-0 ${c.badge}`}>{lv.level}</span>
                    <span className={`font-bold text-sm flex-1 ${c.text}`}>{lv.name}</span>
                    <span className="text-slate-500 text-xs hidden sm:block truncate max-w-xs">{lv.condition}</span>
                    <span className="text-slate-500 text-xs flex-shrink-0">{isOpen ? '▲' : '▼'}</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 grid sm:grid-cols-2 gap-3 border-t border-white/8">
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                          {language === 'zh' ? '达成条件' : 'Condition'}
                        </p>
                        <p className="text-sm text-slate-300">{lv.condition}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                          {language === 'zh' ? '对应权益' : 'Benefits'}
                        </p>
                        <p className="text-sm text-slate-300">{lv.perks}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Vertical industry partners */}
        <div>
          <h3 className="text-2xl font-black text-white mb-2">{T.verticalTitle}</h3>
          <p className="text-slate-400 text-sm mb-6">{T.verticalDesc}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {verts.map((v, i) => (
              <div key={i} className="group bg-white/4 border border-white/10 rounded-xl p-4 hover:border-cyan-400/30 hover:-translate-y-0.5 transition-all text-center">
                <div className="text-2xl mb-2">{v.icon}</div>
                <h4 className="text-sm font-bold text-white mb-1">{v.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed hidden group-hover:block">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global AI Video Competition */}
        <div className="bg-gradient-to-br from-amber-500/8 to-orange-500/5 border border-amber-400/20 rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-200 bg-amber-500/15 border border-amber-400/25 mb-6">
            <span>🏆 {comp.badge}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">{brandText(comp.title)}</h3>
          <p className="text-amber-300 font-bold text-sm mb-4">{comp.subtitle}</p>
          <p className="text-slate-300 text-sm mb-8 max-w-2xl">{brandText(comp.desc)}</p>

          {/* Key stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {comp.phases.map((ph, i) => (
              <div key={i} className="bg-white/6 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">{ph.label}</p>
                <p className="text-lg sm:text-xl font-black text-amber-300">{ph.value}</p>
                <p className="text-xs text-slate-500 mt-1">{ph.note}</p>
              </div>
            ))}
          </div>

          {/* Competition rounds */}
          <div className="mb-8">
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
              {language === 'zh' ? '赛制晋级结构' : 'Competition Rounds'}
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {comp.rounds.map((r, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/4 border border-white/8 rounded-xl p-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-300 font-black text-xs">{r.count}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{r.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{r.reward}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why it works */}
          <div>
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
              {language === 'zh' ? '为什么能做到' : 'Why It Works'}
            </h4>
            <ul className="space-y-2">
              {comp.why.map((w, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-300">
                  <span className="text-amber-400 flex-shrink-0 mt-0.5">✓</span>
                  <span>{brandText(w)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Phase milestones */}
        <div>
          <h3 className="text-2xl font-black text-white mb-2">{milestoneData.title}</h3>
          <p className="text-slate-400 text-sm mb-8">{milestoneData.subtitle}</p>
          <div className="space-y-6">
            {milestoneData.phases.map((ph, i) => {
              const c = colorClassMap[ph.color] || colorClassMap.blue;
              return (
                <div key={i} className={`bg-gradient-to-br ${c.bg} border ${c.border} rounded-2xl p-6 sm:p-8`}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`text-xs font-black px-3 py-1.5 rounded-full ${c.badge}`}>{ph.period}</span>
                    <span className={`text-xs font-bold uppercase tracking-wider ${c.text}`}>{ph.label}</span>
                  </div>
                  <h4 className="text-lg font-black text-white mb-4">{ph.goal}</h4>
                  <ul className="space-y-2 mb-5">
                    {ph.targets.map((t, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-300">
                        <span className={`flex-shrink-0 mt-0.5 ${c.text}`}>✓</span>
                        <span>{brandText(t)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`text-xs font-semibold px-4 py-3 rounded-xl bg-white/5 border border-white/8 ${c.text}`}>
                    💡 {ph.why}
                  </div>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}
