import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { brandText } from '@/lib/brandText';

// ─── Partner Level Data ────────────────────────────────────────────────────────

const partnerLevels = {
  zh: {
    creation: {
      name: '创作合伙人',
      icon: '🎬',
      color: 'cyan',
      desc: '以内容创作量为晋级核心，解锁流量、权益与荣誉',
      levels: [
        { id: 'L1', name: '初级创作者', condition: '上传 5 条内容', benefit: '基础变现权限 · 任务接单资格' },
        { id: 'L2', name: '成长创作者', condition: '上传 50 条内容', benefit: '流量扶持 · 专属创作工具' },
        { id: 'L3', name: '活跃创作者', condition: '上传 200 条内容', benefit: '品牌合作推荐 · 内容分成提升' },
        { id: 'L4', name: '优质创作者', condition: '上传 500 条 + 粉丝 1,000', benefit: '专属运营支持 · 优先推荐位' },
        { id: 'L5', name: '精英创作者', condition: '上传 1,000 条 + 粉丝 5,000', benefit: '平台官方认证 · 品牌直投资格' },
        { id: 'L6', name: '明星创作者', condition: '上传 2,000 条 + 粉丝 20,000', benefit: '专属 IP 孵化支持 · 赛事评审资格' },
        { id: 'L7', name: '顶级创作者', condition: '上传 5,000 条 + 粉丝 100,000', benefit: '颁奖典礼入围 · 标准委员会候选' },
        { id: 'L8', name: '大师创作者', condition: '上传 10,000 条 + 粉丝 500,000', benefit: '行业标准制定 · 奥斯卡式颁奖' },
        { id: 'L9', name: '传奇创作者', condition: '平台认定 · 行业影响力', benefit: '平台股权激励 · 全球百大候选' },
        { id: 'L10', name: '全球百大荣誉创作合伙人', condition: '平台评审委员会认定', benefit: '行业最高荣誉 · 新加坡颁奖典礼 · 平台股权' },
      ],
    },
    capital: {
      name: '钞能力合伙人',
      icon: '💰',
      color: 'gold',
      desc: '以投资金额为晋级核心，享有系列故事权益与平台股权',
      levels: [
        { id: 'L1', name: '入门钞能力', condition: '投入 1 万元', benefit: '平台内容消费权益 · 基础分红' },
        { id: 'L2', name: '初级钞能力', condition: '投入 5 万元', benefit: '系列故事创作权 · 品牌露出' },
        { id: 'L3', name: '成长钞能力', condition: '投入 10 万元', benefit: '专属内容定制 · 内容分成 5%' },
        { id: 'L4', name: '活跃钞能力', condition: '投入 20 万元', benefit: '品牌冠名权 · 内容分成 8%' },
        { id: 'L5', name: '精英钞能力', condition: '投入 50 万元', benefit: '顶级创作者定制 · 内容分成 12%' },
        { id: 'L6', name: '高级钞能力', condition: '投入 100 万元', benefit: '平台股权激励 · 内容分成 15%' },
        { id: 'L7', name: '明星钞能力', condition: '投入 200 万元', benefit: '全球百大候选 · 赛事冠名权' },
        { id: 'L8', name: '顶级钞能力', condition: '投入 500 万元', benefit: '平台董事会观察席 · 分成 20%' },
        { id: 'L9', name: '战略钞能力', condition: '投入 1,000 万元', benefit: '战略合伙人席位 · 全球资源对接' },
        { id: 'L10', name: '全球百大荣誉钞能力合伙人', condition: '投入 5,000 万元以上', benefit: '最高荣誉 · 新加坡颁奖 · 平台核心股权' },
      ],
    },
    sharing: {
      name: '分享合伙人',
      icon: '🔗',
      color: 'purple',
      desc: '以裂变传播与社群建设为核心，区域→城市→国家→全球',
      levels: [
        { id: 'L1', name: '分享合伙人', condition: '邀请 3 人注册', benefit: '裂变奖励 · 基础佣金' },
        { id: 'L2', name: '社群合伙人', condition: '建立 50 人社群', benefit: '社群收益分成 · 活动资格' },
        { id: 'L3', name: '区域合伙人', condition: '管理 200 人社群', benefit: '区域品牌代理 · 活动主办权' },
        { id: 'L4', name: '城市合伙人', condition: '城市级社群 500 人', benefit: '城市独家代理 · 线下活动支持' },
        { id: 'L5', name: '省级合伙人', condition: '省级社群 2,000 人', benefit: '省级品牌权益 · 赛事承办资格' },
        { id: 'L6', name: '大区合伙人', condition: '大区社群 5,000 人', benefit: '大区独家权益 · 赛事分站主办' },
        { id: 'L7', name: '国家合伙人', condition: '国家级社群 20,000 人', benefit: '国家级代理权 · 赛事国家站' },
        { id: 'L8', name: '区域国家合伙人', condition: '跨国社群 50,000 人', benefit: '多国联合代理 · 全球赛事参与' },
        { id: 'L9', name: '全球链接合伙人', condition: '全球网络 100,000 人', benefit: '全球资源对接 · 顶级赛事席位' },
        { id: 'L10', name: '全球百大荣誉分享合伙人', condition: '平台认定 · 全球影响力', benefit: '最高荣誉 · 新加坡颁奖 · 平台股权' },
      ],
    },
  },
  en: {
    creation: {
      name: 'Creation Partners',
      icon: '🎬',
      color: 'cyan',
      desc: 'Content volume is the core progression metric — unlock traffic, rights, and honors',
      levels: [
        { id: 'L1', name: 'Junior Creator', condition: 'Upload 5 pieces', benefit: 'Basic monetization · Task order access' },
        { id: 'L2', name: 'Growing Creator', condition: 'Upload 50 pieces', benefit: 'Traffic boost · Exclusive creation tools' },
        { id: 'L3', name: 'Active Creator', condition: 'Upload 200 pieces', benefit: 'Brand collaboration referrals · Higher revenue share' },
        { id: 'L4', name: 'Quality Creator', condition: 'Upload 500 + 1,000 followers', benefit: 'Dedicated ops support · Priority recommendation' },
        { id: 'L5', name: 'Elite Creator', condition: 'Upload 1,000 + 5,000 followers', benefit: 'Official platform certification · Direct brand deals' },
        { id: 'L6', name: 'Star Creator', condition: 'Upload 2,000 + 20,000 followers', benefit: 'IP incubation support · Awards jury eligibility' },
        { id: 'L7', name: 'Top Creator', condition: 'Upload 5,000 + 100,000 followers', benefit: 'Awards ceremony nomination · Standards committee candidate' },
        { id: 'L8', name: 'Master Creator', condition: 'Upload 10,000 + 500,000 followers', benefit: 'Industry standard setting · Oscar-style awards' },
        { id: 'L9', name: 'Legend Creator', condition: 'Platform recognition · Industry influence', benefit: 'Platform equity incentive · Global Top 100 candidate' },
        { id: 'L10', name: 'Global Top 100 Honorary Creation Partner', condition: 'Platform review committee recognition', benefit: 'Highest honor · Singapore ceremony · Platform equity' },
      ],
    },
    capital: {
      name: 'Capital Partners',
      icon: '💰',
      color: 'gold',
      desc: 'Investment amount is the core progression metric — earn series story rights and platform equity',
      levels: [
        { id: 'L1', name: 'Entry Capital', condition: 'Invest RMB 10K', benefit: 'Platform content rights · Basic dividends' },
        { id: 'L2', name: 'Junior Capital', condition: 'Invest RMB 50K', benefit: 'Series story creation rights · Brand exposure' },
        { id: 'L3', name: 'Growing Capital', condition: 'Invest RMB 100K', benefit: 'Exclusive content customization · 5% revenue share' },
        { id: 'L4', name: 'Active Capital', condition: 'Invest RMB 200K', benefit: 'Brand naming rights · 8% revenue share' },
        { id: 'L5', name: 'Elite Capital', condition: 'Invest RMB 500K', benefit: 'Top creator customization · 12% revenue share' },
        { id: 'L6', name: 'Senior Capital', condition: 'Invest RMB 1M', benefit: 'Platform equity incentive · 15% revenue share' },
        { id: 'L7', name: 'Star Capital', condition: 'Invest RMB 2M', benefit: 'Global Top 100 candidate · Event naming rights' },
        { id: 'L8', name: 'Top Capital', condition: 'Invest RMB 5M', benefit: 'Board observer seat · 20% revenue share' },
        { id: 'L9', name: 'Strategic Capital', condition: 'Invest RMB 10M', benefit: 'Strategic partner seat · Global resource access' },
        { id: 'L10', name: 'Global Top 100 Honorary Capital Partner', condition: 'Investment RMB 50M+', benefit: 'Highest honor · Singapore ceremony · Core platform equity' },
      ],
    },
    sharing: {
      name: 'Sharing Partners',
      icon: '🔗',
      color: 'purple',
      desc: 'Viral growth and community building — Regional → City → National → Global',
      levels: [
        { id: 'L1', name: 'Sharing Partner', condition: 'Invite 3 registrations', benefit: 'Viral rewards · Basic commission' },
        { id: 'L2', name: 'Community Partner', condition: 'Build 50-person community', benefit: 'Community revenue share · Event access' },
        { id: 'L3', name: 'Regional Partner', condition: 'Manage 200-person community', benefit: 'Regional brand agency · Event hosting rights' },
        { id: 'L4', name: 'City Partner', condition: 'City-level community 500 members', benefit: 'City exclusive agency · Offline event support' },
        { id: 'L5', name: 'Provincial Partner', condition: 'Provincial community 2,000 members', benefit: 'Provincial brand rights · Event hosting eligibility' },
        { id: 'L6', name: 'District Partner', condition: 'District community 5,000 members', benefit: 'District exclusive rights · Regional event hosting' },
        { id: 'L7', name: 'National Partner', condition: 'National community 20,000 members', benefit: 'National agency rights · National event station' },
        { id: 'L8', name: 'Multi-Country Partner', condition: 'Cross-border community 50,000 members', benefit: 'Multi-country joint agency · Global event participation' },
        { id: 'L9', name: 'Global Network Partner', condition: 'Global network 100,000 members', benefit: 'Global resource access · Top event seats' },
        { id: 'L10', name: 'Global Top 100 Honorary Sharing Partner', condition: 'Platform recognition · Global influence', benefit: 'Highest honor · Singapore ceremony · Platform equity' },
      ],
    },
  },
};

const verticals = {
  zh: ['故事合伙人', '新闻合伙人', '品牌合伙人', '幽默合伙人', '美食合伙人', '文旅合伙人', '创意合伙人', '科技合伙人', '教育合伙人', '知识合伙人', '人脉合伙人', 'Token 合伙人'],
  en: ['Story Partners', 'News Partners', 'Brand Partners', 'Humor Partners', 'Food Partners', 'Travel Partners', 'Creative Partners', 'Tech Partners', 'Education Partners', 'Knowledge Partners', 'Network Partners', 'Token Partners'],
};

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; levelBg: string }> = {
  gold: { bg: 'from-yellow-500/15 to-amber-500/8', border: 'border-yellow-400/40', text: 'text-yellow-300', badge: 'bg-yellow-500/20 text-yellow-200 border-yellow-400/30', levelBg: 'bg-yellow-500/10 border-yellow-400/20' },
  cyan: { bg: 'from-cyan-500/10 to-cyan-600/5', border: 'border-cyan-400/30', text: 'text-cyan-300', badge: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/30', levelBg: 'bg-cyan-500/10 border-cyan-400/20' },
  purple: { bg: 'from-purple-500/10 to-purple-600/5', border: 'border-purple-400/30', text: 'text-purple-300', badge: 'bg-purple-500/20 text-purple-200 border-purple-400/30', levelBg: 'bg-purple-500/10 border-purple-400/20' },
  blue: { bg: 'from-blue-500/10 to-blue-600/5', border: 'border-blue-400/30', text: 'text-blue-300', badge: 'bg-blue-500/20 text-blue-200 border-blue-400/30', levelBg: 'bg-blue-500/10 border-blue-400/20' },
};

type PartnerKey = 'creation' | 'capital' | 'sharing';

export default function HowWeDoIt() {
  const { language } = useLanguage();
  const lang = language as 'zh' | 'en';
  const zh = lang === 'zh';
  const levels = partnerLevels[lang];
  const verts = verticals[lang];

  const [activePartner, setActivePartner] = useState<PartnerKey>('creation');
  const activeData = levels[activePartner];
  const c = colorMap[activeData.color] || colorMap.blue;

  const partnerTabs: { key: PartnerKey; icon: string; label: string }[] = [
    { key: 'creation', icon: '🎬', label: levels.creation.name },
    { key: 'capital', icon: '💰', label: levels.capital.name },
    { key: 'sharing', icon: '🔗', label: levels.sharing.name },
  ];

  return (
    <section id="how-we-do-it" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-200 bg-cyan-500/10 border border-cyan-400/20 backdrop-blur-sm mb-6">
            <span>{zh ? '08 / 怎么实现' : '08 / How We Do It'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            {zh ? '怎么实现' : 'How We Do It'}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">The Partner Flywheel</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            {brandText(zh
              ? '听到这件事，你就成为了合伙人。每一个人都是 AIFavaa 生态的共建者与受益者。'
              : 'The moment you hear about this, you become a partner. Everyone is a co-builder and co-beneficiary of the AIFavaa ecosystem.')}
          </p>
        </div>

        {/* ── Section 1: Partner L1-10 Level System ──────────────────────── */}
        <div className="mb-16">
          <h3 className="text-xl font-black text-white mb-2">{zh ? '合伙人分级体系 · L1–L10' : 'Partner Level System · L1–L10'}</h3>
          <p className="text-sm text-slate-400 mb-6">{zh ? '每个合伙人系列均设 L1–L10 十个层级，不同级别对应不同权益、条件与荣誉。' : 'Every partner series has 10 levels (L1–L10), each with distinct conditions, rights, and honors.'}</p>

          {/* Tab Selector */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {partnerTabs.map((tab) => {
              const tc = colorMap[levels[tab.key].color] || colorMap.blue;
              const isActive = activePartner === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActivePartner(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                    isActive
                      ? `${tc.bg} ${tc.border} ${tc.text} bg-gradient-to-br`
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/8'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Partner Levels */}
          <div className={`bg-gradient-to-br ${c.bg} border ${c.border} rounded-2xl p-5 sm:p-6`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{activeData.icon}</span>
              <div>
                <h4 className={`font-black text-base text-white`}>{activeData.name}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{activeData.desc}</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {activeData.levels.map((lv, i) => {
                const isTop = i >= 8;
                return (
                  <div
                    key={lv.id}
                    className={`rounded-xl border p-3.5 transition-all ${
                      isTop
                        ? `border-yellow-400/40 bg-yellow-500/10`
                        : `border-white/8 bg-white/4 hover:bg-white/6`
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${isTop ? 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30' : `${c.badge}`}`}>
                        {lv.id}
                      </span>
                      <span className={`text-sm font-bold ${isTop ? 'text-yellow-200' : 'text-white'}`}>{lv.name}</span>
                    </div>
                    <div className="text-xs text-slate-400 mb-1">
                      <span className="text-slate-500">{zh ? '条件：' : 'Condition: '}</span>{lv.condition}
                    </div>
                    <div className="text-xs text-slate-300">
                      <span className="text-slate-500">{zh ? '权益：' : 'Benefits: '}</span>{lv.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Section 2: Vertical Industry Partners ──────────────────────── */}
        <div className="mb-16">
          <h3 className="text-lg font-black text-white mb-3">{zh ? '垂直行业合伙人' : 'Vertical Industry Partners'}</h3>
          <div className="flex flex-wrap gap-2.5">
            {verts.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white/6 border border-white/12 text-slate-300 text-sm font-semibold hover:bg-white/10 hover:border-cyan-400/30 hover:text-cyan-300 transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Section 3: Global AI Creation Championship ─────────────────── */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-amber-500/12 to-yellow-600/6 border border-amber-400/30 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏆</span>
              <div>
                <h3 className="text-xl font-black text-white">{zh ? '全球 AI 创作大赛' : 'Global AI Creation Championship'}</h3>
                <p className="text-xs text-amber-300 font-bold mt-0.5">{zh ? 'AIGC 奥斯卡 · 打造行业最高荣誉' : 'The AIGC Oscars · Building the Highest Industry Honor'}</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 mb-6 max-w-2xl">
              {zh
                ? '赛事引领行业标准，品牌赞助驱动商业价值，创作者投稿汇聚全球顶尖作品。全球顶级合伙人、入围创作者与标准委员会汇聚新加坡，共同见证 AIGC 时代的最高荣誉时刻。'
                : 'Competition leads industry standards; brand sponsorships drive commercial value; creator submissions gather the world\'s finest works. Global top partners, nominated creators, and the Standards Committee converge in Singapore to witness the highest honor in the AIGC era.'}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(zh ? [
                { icon: '🎯', title: '赛事引领', desc: '定义 AIGC 行业标准，打造类奥斯卡颁奖体系' },
                { icon: '🤝', title: '品牌赞助', desc: '顶级品牌冠名、赛事赞助与内容联名合作' },
                { icon: '📤', title: '创作者投稿', desc: '全球创作者参赛，优质内容汇聚平台生态' },
                { icon: '🌏', title: '新加坡峰会', desc: '全球合伙人、入围创作者与标准委员会年度盛典' },
              ] : [
                { icon: '🎯', title: 'Event Leadership', desc: 'Define AIGC industry standards and build an Oscar-like awards system' },
                { icon: '🤝', title: 'Brand Sponsorship', desc: 'Top brand naming, event sponsorship and content co-branding' },
                { icon: '📤', title: 'Creator Submissions', desc: 'Global creators compete, quality content enriches the platform ecosystem' },
                { icon: '🌏', title: 'Singapore Summit', desc: 'Annual gala for global partners, nominated creators and the Standards Committee' },
              ]).map((item, i) => (
                <div key={i} className="bg-white/5 border border-amber-400/15 rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm font-black text-white mb-1">{item.title}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 4: Multi-dimensional Business Flywheel ─────────────── */}
        <div>
          <h3 className="text-xl font-black text-white mb-2">{zh ? '多元商业闭环' : 'Multi-Dimensional Business Flywheel'}</h3>
          <p className="text-sm text-slate-400 mb-6">{zh ? '三条商业路径形成自增强闭环，平台价值随每一次交易持续沉淀。' : 'Three business paths form a self-reinforcing loop — platform value compounds with every transaction.'}</p>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">

            {/* Loop 1 */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/5 border border-blue-400/25 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">⚡</span>
                <h4 className="font-black text-white text-sm">{zh ? '合伙人资源 × 创作者竞价 × 三方分润' : 'Partner Resources × Creator Bidding × Three-Way Revenue Share'}</h4>
              </div>
              <div className="space-y-2.5">
                {(zh ? [
                  { step: '01', text: '合伙人调动商务/品牌需求，发布创作任务' },
                  { step: '02', text: '创作者竞价抢单，平台 AI 辅助匹配最优方案' },
                  { step: '03', text: '品牌审核公布，内容交付后三方自动分润' },
                ] : [
                  { step: '01', text: 'Partners mobilize brand/business needs and publish creation tasks' },
                  { step: '02', text: 'Creators bid for orders; platform AI assists in matching the best solution' },
                  { step: '03', text: 'Brand reviews and approves; three-way auto revenue split upon delivery' },
                ]).map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-[10px] font-black text-blue-400 bg-blue-500/15 border border-blue-400/25 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
                    <span className="text-xs text-slate-300 leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Loop 2 */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-teal-600/5 border border-cyan-400/25 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🌐</span>
                <h4 className="font-black text-white text-sm">{zh ? '一平台生成 · 全网发布闭环' : 'One Platform Generate · Omni-Channel Publish Loop'}</h4>
              </div>
              <div className="space-y-2.5">
                {(zh ? [
                  { step: '01', text: '在 AIFavaa 一键生成 AI 视频内容' },
                  { step: '02', text: '一键分发至抖音、YouTube、TikTok、小红书等全平台' },
                  { step: '03', text: '流量回流 AIFavaa，形成闭环增长网络' },
                ] : [
                  { step: '01', text: 'Generate AI video content with one click on AIFavaa' },
                  { step: '02', text: 'One-click distribution to Douyin, YouTube, TikTok, Xiaohongshu and more' },
                  { step: '03', text: 'Traffic flows back to AIFavaa, forming a closed-loop growth network' },
                ]).map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-[10px] font-black text-cyan-400 bg-cyan-500/15 border border-cyan-400/25 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
                    <span className="text-xs text-slate-300 leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Loop 3 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/5 border border-purple-400/25 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">♻️</span>
                <h4 className="font-black text-white text-sm">{zh ? '经典 IP × 品牌效应 × 持续再变现' : 'Classic IP × Brand Effect × Continuous Re-Monetization'}</h4>
              </div>
              <div className="space-y-2.5">
                {(zh ? [
                  { step: '01', text: '优质内容沉淀为平台经典 IP 资产' },
                  { step: '02', text: '品牌效应放大内容价值，吸引更多赞助与合作' },
                  { step: '03', text: '经典内容持续授权、翻拍与再变现，资产长期增值' },
                ] : [
                  { step: '01', text: 'Quality content accumulates as classic IP assets on the platform' },
                  { step: '02', text: 'Brand effect amplifies content value, attracting more sponsorships and collaborations' },
                  { step: '03', text: 'Classic content continuously licensed, remade and re-monetized — assets appreciate long-term' },
                ]).map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-[10px] font-black text-purple-400 bg-purple-500/15 border border-purple-400/25 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
                    <span className="text-xs text-slate-300 leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
