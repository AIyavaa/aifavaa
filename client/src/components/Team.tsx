import { useLanguage } from '@/contexts/LanguageContext';
import { brandText } from '@/lib/brandText';

const content = {
  zh: {
    badge: '08 / 创始团队',
    title: '核心创始团队',
    subtitle: 'Founding team with deep expertise',
    desc: '七位创始人各具所长，覆盖战略、内容、运营、技术与生态建设，共同构建 AIyavaa 的核心竞争力。',
    contact: '与我们的团队取得联系',
    contactSub: '投资咨询、合作洽谈、媒体采访，欢迎随时联系',
    email: 'eva@aiyavaa.com',
    members: [
      {
        name: '张原天',
        role: '董事及主席 · 首席架构师',
        color: 'gold',
        photo: null as string | null,
        highlights: [
          '新加坡鸿德集团董事长，多国硕博学位，二十余年全球投资与商业实战',
          '全球教育公益发起人，累计资助逾千万，推动跨国教育平等与人才培育',
          'Web3.0 与商业 4.0 研究者与实践者，前瞻布局 AI 时代商业架构',
          '总资金逾 200 亿人民币，面向全球的专业投资机构掌舵人',
        ],
      },
      {
        name: '尹璐 EVA',
        role: '创始人兼 CEO · 首席架构师',
        color: 'blue',
        photo: null as string | null,
        highlights: [
          '跨文化创业者，管理咨询背景',
          '菲律宾本地生活互联网创业，从零到一验证完整闭环',
          '东南亚产业投资与文化出海，发起"南洋论坛"',
          '融合新加坡战略视野、东南亚在地化洞察与中国互联网方法论',
          '平台底层架构与技术路线设计',
          '多模型调度与 AI 原生视频生产链路搭建',
          '推动 AIyavaa 技术体系从原型走向规模化',
          '将前沿 AI 能力转化为可落地的产品体验',
        ],
      },
      {
        name: '涛哥',
        role: '联合创始人 · 战略合伙人',
        color: 'cyan',
        photo: null as string | null,
        highlights: [
          '前腾讯战略部"泛娱乐+IP"概念首度普及者，定义行业框架的前瞻视野',
          '360 操盘年利润 10 亿级业务，兼具产业深度与商业化能力',
          '2023 年底开始人工智能投资与战略设计',
          '为 AIyavaa 提供战略定位、产业资源与 AI 时代商业架构支撑',
        ],
      },
      {
        name: '老丁',
        role: '联合创始人兼 CIO（首席内容与生态官）',
        color: 'teal',
        photo: null as string | null,
        highlights: [
          '专业赛事与优质内容制作背景',
          '对顶尖内容品质有苛刻眼光与生产能力',
          '平台工具与内容能力高效转化为 B 端客户解决方案',
          '连接创意与商业价值的关键桥梁',
        ],
      },
      {
        name: 'Johnson',
        role: '联合创始人兼 COO',
        color: 'purple',
        photo: null as string | null,
        highlights: [
          'Shopee 核心业务经历，高速增长平台复杂运营实战经验',
          '好莱坞短剧投资人，对短视频内容趋势与用户付费心智有超前认知',
          '对 IP 孵化拥有丰富资源',
          '为 AIyavaa 切入 AI 短剧赛道提供即时加速力',
        ],
      },
      {
        name: 'David',
        role: '联合创始人兼全球运营',
        color: 'green',
        photo: null as string | null,
        highlights: [
          '深耕全球市场运营与跨境生态拓展',
          '连接东南亚、欧美、中东等多区域资源网络',
          '推动 AIyavaa 品牌在全球市场的本地化落地',
          '构建全球合伙人体系与战略联盟',
        ],
      },
      {
        name: '康丽',
        role: '联合创始人兼生态建设',
        color: 'rose',
        photo: null as string | null,
        highlights: [
          '擅长 AI 平台生态活动、全球资源链接与合伙人机制建设',
          '统筹 AI 实验室、赛事活动与产业应用场景的 AI 融合落地',
          '社群协同、用户信任体系构建与跨境生态连接，具备较强资源整合与组织推动能力',
          '拥有多年教育产业、用户运营与跨境资源整合经验，持续探索 AI 时代用户生态增长与平台协同模型',
        ],
      },
    ],
  },
  en: {
    badge: '08 / Founding Team',
    title: 'Core Founding Team',
    subtitle: 'Founding team with deep expertise',
    desc: "Seven founders with complementary strengths covering strategy, content, operations, technology and ecosystem building, collectively building AIyavaa's core competitive advantages.",
    contact: 'Get in touch with our team',
    contactSub: 'Investment inquiries, partnerships, media — we welcome your message',
    email: 'eva@aiyavaa.com',
    members: [
      {
        name: 'Zhang Yuantian',
        role: 'Chairman & Chief Architect',
        color: 'gold',
        photo: null as string | null,
        highlights: [
          'Chairman of Singapore Hongde Group; multi-country graduate degrees; 20+ years of global investment and business',
          'Global education philanthropy initiator with over ten million in cumulative funding, promoting cross-border educational equity and talent development',
          'Web3.0 and Business 4.0 researcher and practitioner with forward-looking AI-era business architecture',
          'Manages over RMB 20 billion in assets as head of a global professional investment institution',
        ],
      },
      {
        name: 'Eva Yin',
        role: 'Founder & CEO · Chief Architect',
        color: 'blue',
        photo: null as string | null,
        highlights: [
          'Cross-cultural entrepreneur with management consulting background',
          'Built Philippines local life internet startup from 0 to 1, validating full product-market loop',
          'Southeast Asia industry investment and cultural expansion, founded "Nanyang Forum"',
          'Integrates Singapore strategic vision, SEA localization insights, and China internet methodology',
          'Platform underlying architecture and technical roadmap design',
          'Multi-model scheduling and AI-native video production pipeline',
          "Driving AIyavaa's tech stack from prototype to scale",
          'Translating cutting-edge AI capabilities into deployable product experiences',
        ],
      },
      {
        name: 'Tao Ge',
        role: 'Co-Founder & Strategic Partner',
        color: 'cyan',
        photo: null as string | null,
        highlights: [
          'Former Tencent Strategy Division — first to popularize the "Pan-Entertainment + IP" concept, defining the industry framework',
          'Led 360 business units generating over RMB 1 billion in annual profit, combining deep industry expertise with commercialization capability',
          'Began AI investment and strategic design in late 2023',
          'Provides strategic positioning, industry resources, and AI-era business architecture for AIyavaa',
        ],
      },
      {
        name: 'Lao Ding',
        role: 'Co-Founder & CIO (Chief Content & Ecosystem Officer)',
        color: 'teal',
        photo: null as string | null,
        highlights: [
          'Professional sports events and premium content production background',
          'Exacting standards and production capability for top-tier content quality',
          'Efficiently converts platform tools and content capabilities into B2B client solutions',
          'Key bridge connecting creative value and commercial outcomes',
        ],
      },
      {
        name: 'Johnson',
        role: 'Co-Founder & COO',
        color: 'purple',
        photo: null as string | null,
        highlights: [
          'Core business experience at Shopee, hands-on management of complex operations on high-growth platforms',
          'Hollywood short drama investor with forward-thinking insights on short video trends and user payment psychology',
          'Rich resources in IP incubation',
          "Provides immediate acceleration for AIyavaa's entry into the AI short drama track",
        ],
      },
      {
        name: 'David',
        role: 'Co-Founder & Global Operations',
        color: 'green',
        photo: null as string | null,
        highlights: [
          'Deep expertise in global market operations and cross-border ecosystem expansion',
          'Connecting resource networks across Southeast Asia, Europe, Americas, and Middle East',
          'Driving AIyavaa brand localization across global markets',
          'Building global partner systems and strategic alliances',
        ],
      },
      {
        name: 'Kang Li',
        role: 'Co-Founder & Ecosystem Development',
        color: 'rose',
        photo: null as string | null,
        highlights: [
          'Specializes in AI platform ecosystem events, global resource linking, and partner mechanism building',
          'Oversees AI Lab, competition events, and AI integration across industrial application scenarios',
          'Community collaboration, user trust system building, and cross-border ecosystem connection with strong resource integration and organizational capabilities',
          'Years of experience in education industry, user operations, and cross-border resource integration; continuously exploring AI-era user ecosystem growth and platform collaboration models',
        ],
      },
    ],
  },
};

// Placeholder avatar — will be replaced by real photo when provided
function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name
    .split(/[\s·\-]+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const bgMap: Record<string, string> = {
    gold: 'from-yellow-400 to-amber-500',
    blue: 'from-blue-400 to-blue-600',
    cyan: 'from-cyan-400 to-cyan-600',
    teal: 'from-teal-400 to-teal-600',
    purple: 'from-purple-400 to-purple-600',
    green: 'from-green-400 to-green-600',
  };

  return (
    <div
      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${bgMap[color] || bgMap.blue} flex items-center justify-center flex-shrink-0 shadow-lg`}
      title="照片待上传 / Photo coming soon"
    >
      <span className="text-white font-black text-xl select-none">{initials}</span>
    </div>
  );
}

export default function Team() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    gold: { bg: 'from-yellow-500/15 to-amber-600/8', border: 'border-yellow-400/40', text: 'text-yellow-300' },
    blue: { bg: 'from-blue-500/10 to-blue-600/5', border: 'border-blue-400/30', text: 'text-blue-300' },
    cyan: { bg: 'from-cyan-500/10 to-cyan-600/5', border: 'border-cyan-400/30', text: 'text-cyan-300' },
    teal: { bg: 'from-teal-500/10 to-teal-600/5', border: 'border-teal-400/30', text: 'text-teal-300' },
    purple: { bg: 'from-purple-500/10 to-purple-600/5', border: 'border-purple-400/30', text: 'text-purple-300' },
    green: { bg: 'from-green-500/10 to-green-600/5', border: 'border-green-400/30', text: 'text-green-300' },
    rose: { bg: 'from-rose-500/10 to-rose-600/5', border: 'border-rose-400/30', text: 'text-rose-300' },
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
                {/* Photo area — swap Avatar for <img> when real photo is provided */}
                <div className="flex items-start gap-4 mb-5">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-16 h-16 rounded-2xl object-cover flex-shrink-0 shadow-lg"
                    />
                  ) : (
                    <Avatar name={member.name} color={member.color} />
                  )}
                  <div className="min-w-0">
                    <h3 className="text-lg font-black text-white">{member.name}</h3>
                    <p className={`text-xs font-semibold mt-0.5 leading-relaxed ${c.text}`}>{member.role}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {member.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-300">
                      <span className="text-slate-500 flex-shrink-0 mt-0.5">·</span>
                      <span>{brandText(h)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Email contact */}
        <div className="mt-10 text-center">
          <a
            href="mailto:eva@aiyavaa.com"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-300 transition-colors"
          >
            <span>✉</span>
            <span>eva@aiyavaa.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
