import { useLanguage } from '@/contexts/LanguageContext';
import { brandText } from '@/lib/brandText';

const TEAM_PHOTOS: Record<string, string> = {
  '张原天': '/manus-storage/zhang_yuantian_processed_e1823d92.png',
  '尹璐': '/manus-storage/yin_lu_processed_54f567f7.png',
  '黄涛': '/manus-storage/huang_tao_processed_57f0aaa2.png',
  '丁玉琴': '/manus-storage/ding_yuchen_processed_448bae58.png',
  '庄珩': '/manus-storage/zhuang_heng_processed_132b3234.png',
  '张泽国': '/manus-storage/zhang_zeguo_processed_d89601ef.png',
};

const content = {
  zh: {
    badge: '08 / 创始团队',
    title: '核心创始团队',
    subtitle: 'Founding team with deep expertise',
    desc: '六位创始人各具所长，覆盖战略、内容、运营、生态与技术，共同构建 AIFavaa 的核心竞争力。',
    members: [
      {
        name: '张原天',
        role: '创始人兼主席 · 首席架构师',
        color: 'gold',
        highlights: [
          '新加坡鸿德集团董事长，多国硕博学位，二十余年全球投资与商业实战',
          'Web3.0 与商业 4.0 研究者与实践者，前瞻布局 AI 时代商业架构',
          '全球教育公益发起人，千万级资助推动教育普惠与跨境人才培育',
          '总资金逾 200 亿人民币，面向全球的专业投资机构掌舵人',
        ],
      },
      {
        name: '尹璐',
        role: '创始人兼 CEO',
        color: 'blue',
        highlights: [
          '跨文化创业者，管理咨询背景',
          '菲律宾本地生活互联网创业，从零到一验证完整闭环',
          '东南亚产业投资与文化出海，发起"南洋论坛"',
          '融合新加坡战略视野、东南亚在地化洞察与中国互联网方法论',
          '平台底层架构与技术路线设计',
          '多模型调度与 AI 原生视频生产链路搭建',
          '推动 AIFavaa 技术体系从原型走向规模化',
          '将前沿 AI 能力转化为可落地的产品体验',
        ],
      },
      {
        name: '黄涛',
        role: '联合创始人兼 CSO',
        color: 'cyan',
        highlights: [
          '前腾讯战略部"泛娱乐+IP"概念首度普及者，定义行业框架的前瞻视野',
          '360 操盘年利润 10 亿级业务，兼具产业深度与商业化能力',
          '2023 年底开始人工智能投资与战略设计',
          '为 AIFavaa 提供战略定位、产业资源与 AI 时代商业架构支撑',
        ],
      },
      {
        name: '丁玉琴',
        role: '联合创始人兼 CIO（首席内容与生态官）',
        color: 'teal',
        highlights: [
          '专业赛事与优质内容制作背景',
          '对顶尖内容品质有苛刻眼光与生产能力',
          '平台工具与内容能力高效转化为 B 端客户解决方案',
          '连接创意与商业价值的关键桥梁',
        ],
      },
      {
        name: '庄珩',
        role: '联合创始人兼 CPO',
        color: 'purple',
        highlights: [
          'Shopee 核心业务经历，高速增长平台复杂运营实战经验',
          '好莱坞短剧投资人，对短视频内容趋势与用户付费心智有超前认知',
          '对 IP 孵化拥有丰富资源',
          '为 AIFavaa 切入 AI 短剧赛道提供即时加速力',
        ],
      },
      {
        name: '张泽国',
        role: '联合创始人兼 COO',
        color: 'green',
        highlights: [
          '深耕全球市场运营与跨境生态拓展',
          '连接东南亚、欧美、中东等多区域资源网络',
          '推动 AIFavaa 品牌在全球市场的本地化落地',
          '构建全球合伙人体系与战略联盟',
        ],
      },

    ],
  },
  en: {
    badge: '08 / Founding Team',
    title: 'Core Founding Team',
    subtitle: 'Founding team with deep expertise',
    desc: "Six founders with complementary strengths covering strategy, content, operations, ecosystem and technology, collectively building AIFavaa core competitive advantages.",
    members: [
      {
        name: 'Zhang Yuantian',
        role: 'Founder & Chairman · Chief Architect',
        color: 'gold',
        highlights: [
          'Chairman of Singapore Hongde Group, multi-country master and doctoral degrees, 20+ years of global investment and business',
          'Web3.0 and Business 4.0 researcher and practitioner, pioneering AI-era business architecture',
          'Global education philanthropy initiator, with tens of millions in funding to advance education equity and cross-border talent development',
          'Manages a global professional investment institution with over RMB 20 billion in assets',
        ],
      },
      {
        name: 'Yin Lu',
        role: 'Founder & CEO · Chief Architect',
        color: 'blue',
        highlights: [
          'Cross-cultural entrepreneur with management consulting background',
          'Built Philippines local life internet startup from 0 to 1, validating full product-market loop',
          'Southeast Asia industry investment and cultural expansion, founded "Nanyang Forum"',
          'Integrates Singapore strategic vision, SEA localization insights, and China internet methodology',
          'Platform underlying architecture and technical roadmap design',
          'Multi-model scheduling and AI-native video production pipeline',
          'Driving AIFavaa\'s tech stack from prototype to scale',
          'Translating cutting-edge AI capabilities into deployable product experiences',
        ],
      },
      {
        name: 'Huang Tao',
        role: 'Co-Founder & CSO',
        color: 'cyan',
        highlights: [
          'Former Tencent Strategy Division — first to popularize the "Pan-Entertainment + IP" concept, defining the industry framework',
          'Led 360 business units generating over RMB 1 billion in annual profit, combining deep industry expertise with commercialization capability',
          'Began AI investment and strategic design in late 2023',
          'Provides strategic positioning, industry resources, and AI-era business architecture for AIFavaa',
        ],
      },
      {
        name: 'Ding Yuqin',
        role: 'Co-Founder & CIO (Chief Content & Ecosystem Officer)',
        color: 'teal',
        highlights: [
          'Professional sports events and premium content production background',
          'Exacting standards and production capability for top-tier content quality',
          'Efficiently converts platform tools and content capabilities into B2B client solutions',
          'Key bridge connecting creative value and commercial outcomes',
        ],
      },
      {
        name: 'Zhuang Heng',
        role: 'Co-Founder & CPO',
        color: 'purple',
        highlights: [
          'Core business experience at Shopee, hands-on management of complex operations on high-growth platforms',
          'Hollywood short drama investor with forward-thinking insights on short video trends and user payment psychology',
          'Rich resources in IP incubation',
          'Provides immediate acceleration for AIFavaa\'s entry into the AI short drama track',
        ],
      },
      {
        name: 'Zhang Zeguo',
        role: 'Co-Founder & COO',
        color: 'green',
        highlights: [
          'Deep expertise in global market operations and cross-border ecosystem expansion',
          'Connecting resource networks across Southeast Asia, Europe, Americas, and Middle East',
          'Driving AIFavaa brand localization across global markets',
          'Building global partner systems and strategic alliances',
        ],
      },

    ],
  },
};

export default function Team() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  const colorMap: Record<string, { bg: string; border: string; badge: string; dot: string; text: string }> = {
    gold: { bg: 'from-yellow-500/15 to-amber-600/8', border: 'border-yellow-400/40', badge: 'bg-yellow-500/20 text-yellow-300', dot: 'bg-yellow-400', text: 'text-yellow-300' },
    blue: { bg: 'from-blue-500/10 to-blue-600/5', border: 'border-blue-400/30', badge: 'bg-blue-500/20 text-blue-300', dot: 'bg-blue-400', text: 'text-blue-300' },
    cyan: { bg: 'from-cyan-500/10 to-cyan-600/5', border: 'border-cyan-400/30', badge: 'bg-cyan-500/20 text-cyan-300', dot: 'bg-cyan-400', text: 'text-cyan-300' },
    teal: { bg: 'from-teal-500/10 to-teal-600/5', border: 'border-teal-400/30', badge: 'bg-teal-500/20 text-teal-300', dot: 'bg-teal-400', text: 'text-teal-300' },
    purple: { bg: 'from-purple-500/10 to-purple-600/5', border: 'border-purple-400/30', badge: 'bg-purple-500/20 text-purple-300', dot: 'bg-purple-400', text: 'text-purple-300' },
    green: { bg: 'from-green-500/10 to-green-600/5', border: 'border-green-400/30', badge: 'bg-green-500/20 text-green-300', dot: 'bg-green-400', text: 'text-green-300' },
    rose: { bg: 'from-rose-500/10 to-pink-600/5', border: 'border-rose-400/30', badge: 'bg-rose-500/20 text-rose-300', dot: 'bg-rose-400', text: 'text-rose-300' },
  };

  return (
    <section id="team" className="relative py-20 lg:py-28">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {T.members.map((member, i) => {
            const c = colorMap[member.color] || colorMap.blue;
            return (
              <div key={i} className={`bg-gradient-to-br ${c.bg} border ${c.border} backdrop-blur-xl rounded-2xl p-6`}>
                {/* Member photo and info */}
                <div className="mb-4">
                  <div className={`w-full aspect-[3/4] rounded-xl overflow-hidden border ${c.border} bg-white/5 mb-3`}>
                    {TEAM_PHOTOS[member.name] ? (
                      <img
                        src={TEAM_PHOTOS[member.name]}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-1">
                        <svg className="w-10 h-10 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-xs text-slate-600 font-medium">Photo</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">{member.name}</h3>
                    <p className={`text-xs font-semibold mt-0.5 ${c.text}`}>{member.role}</p>
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
