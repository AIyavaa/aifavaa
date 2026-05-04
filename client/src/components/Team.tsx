import { useLanguage } from '@/contexts/LanguageContext';

export default function Team() {
  const { language } = useLanguage();

  const team = [
    {
      name: '尹璐 EVA',
      role: language === 'zh' ? '创始人兼CEO' : 'Founder & CEO',
      bio:
        language === 'zh'
          ? '跨文化创业者、管理咨询背景、菲律宾本地生活互联网创业，从零到一验证了产品设计、客户运营与社群构建的完整闭环、东南亚产业投资与文化出海、发起"南洋论坛"，在实战中积累了覆盖东南亚的跨界资源网络与深厚的社群运营能力、擅长将新加坡的战略视野、东南亚的在地化洞察与中国的互联网方法论深度融合。'
          : 'Cross-cultural entrepreneur with management consulting background. Pioneered lifestyle internet startups in Philippines, validating complete product design, customer operations, and community building cycles. Extensive Southeast Asia investment and cultural export experience. Founded "Nanyang Forum" and built cross-border resource networks across Southeast Asia with deep community operation expertise. Skilled at integrating Singapore\'s strategic vision, Southeast Asia\'s localization insights, and China\'s internet methodology.',
      expertise:
        language === 'zh'
          ? ['跨文化创业', '社群运营', '东南亚资源', '产品设计']
          : ['Cross-Cultural Entrepreneurship', 'Community Operations', 'SE Asia Resources', 'Product Design'],
    },
    {
      name: '老丁',
      role: language === 'zh' ? '联合创始人兼CIO（首席内容与生态官）' : 'Co-Founder & CIO (Chief Content & Ecosystem Officer)',
      bio:
        language === 'zh'
          ? '专业赛事与优质内容制作背景，拥有对顶尖内容品质的苛刻眼光与生产能力，为平台奠定高调性起点。平台工具与内容能力高效转化为B端客户认可的解决方案，能直接加速平台商业闭环的验证，是连接创意与商业价值的关键桥梁。'
          : 'Professional event and premium content production background. Possesses exacting standards for top-tier content quality and production capabilities, establishing the platform\'s high-caliber foundation. Efficiently converts platform tools and content capabilities into B2B customer-recognized solutions, directly accelerating platform business loop validation. Key bridge connecting creativity and commercial value.',
      expertise:
        language === 'zh'
          ? ['内容制作', '品质管理', 'B端商业化', '生态设计']
          : ['Content Production', 'Quality Management', 'B2B Commercialization', 'Ecosystem Design'],
    },
    {
      name: 'Johnson',
      role: language === 'zh' ? '联合创始人兼COO' : 'Co-Founder & COO',
      bio:
        language === 'zh'
          ? 'Shopee的核心业务经历，积累了在高速增长平台上管理复杂交易与大规模运营的实战经验。好莱坞短剧投资人，对短视频内容趋势、用户付费心智及IP孵化拥有超前认知与资源，这将为AIyavaa切入最具潜力的AI短剧赛道提供即时的加速力。'
          : 'Core business experience at Shopee with hands-on expertise in managing complex transactions and large-scale operations on high-growth platforms. Hollywood short drama investor with forward-thinking insights and resources on short video trends, user monetization psychology, and IP incubation. Provides immediate acceleration for AIyavaa\'s entry into the most promising AI short drama sector.',
      expertise:
        language === 'zh'
          ? ['平台运营', '交易管理', '短剧投资', '用户增长']
          : ['Platform Operations', 'Transaction Management', 'Short Drama Investment', 'User Growth'],
    },
    {
      name: '涛哥',
      role: language === 'zh' ? '联合创始人兼CTO/首席战略官' : 'Co-Founder & CTO/Chief Strategy Officer',
      bio:
        language === 'zh'
          ? '定义赛道与撬动关键资源的顶层设计师。作为前腾讯战略部"泛娱乐+IP"概念的首倡者，拥有定义行业框架的前瞻视野；在360操盘年利润10亿级利润业务，兼具产业深度与商业化能力；2024年起专注AI投资与战略设计。'
          : 'Top-level strategist defining market segments and leveraging key resources. Former Tencent Strategy Department executive and originator of "Pan-Entertainment+IP" concept with forward-thinking industry framework definition. Managed billion-yuan profit businesses at 360, combining deep industry expertise with commercialization capabilities. Focused on AI investment and strategic design since 2024.',
      expertise:
        language === 'zh'
          ? ['战略规划', '产业洞察', '商业化', 'AI投资']
          : ['Strategic Planning', 'Industry Insights', 'Commercialization', 'AI Investment'],
    },
  ];

  return (
    <section id="team" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>⭐</span>
            <span>{language === 'zh' ? '创始团队' : 'Founding Team'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            {language === 'zh'
              ? '世界级创始团队：跨界、跨域、跨文化的生态整合者'
              : 'World-Class Founding Team: Cross-Border, Cross-Domain, Cross-Cultural Ecosystem Integrators'}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">
              {language === 'zh' ? '来自全球顶尖平台的战略设计师' : 'Strategic designers from global top platforms'}
            </div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            {language === 'zh'
              ? '来自腾讯、Shopee、好莱坞、东南亚创业一线的顶尖人才，每位都是各自领域的生态整合者和战略设计师。'
              : 'Top talents from Tencent, Shopee, Hollywood, and Southeast Asia entrepreneurship frontlines. Each is an ecosystem integrator and strategic designer in their respective fields.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 lg:p-8 group hover:border-blue-400/30 hover:from-white/12 transition-all relative overflow-hidden"
            >
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-1">{member.name}</h3>
                  <div className="text-sm font-bold text-blue-300">{member.role}</div>
                </div>

                {/* Bio */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{member.bio}</p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 border border-blue-400/30 text-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
