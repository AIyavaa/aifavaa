export default function Team() {
  const team = [
    {
      name: '尹璐 EVA',
      role: '创始人兼CEO',
      bio: '跨文化创业者、管理咨询背景、菲律宾本地生活互联网创业，从零到一验证了产品设计、客户运营与社群构建的完整闭环、东南亚产业投资与文化出海、发起"南洋论坛"，在实战中积累了覆盖东南亚的跨界资源网络与深厚的社群运营能力、擅长将新加坡的战略视野、东南亚的在地化洞察与中国的互联网方法论深度融合。',
      expertise: ['跨文化创业', '社群运营', '东南亚资源', '产品设计'],
    },
    {
      name: '老丁',
      role: '联合创始人兼CIO（首席内容与生态官）',
      bio: '专业赛事与优质内容制作背景，拥有对顶尖内容品质的苛刻眼光与生产能力，为平台奠定高调性起点。平台工具与内容能力高效转化为B端客户认可的解决方案，能直接加速平台商业闭环的验证，是连接创意与商业价值的关键桥梁。',
      expertise: ['内容制作', '品质管理', 'B端商业化', '生态设计'],
    },
    {
      name: 'Johnson',
      role: '联合创始人兼COO',
      bio: 'Shopee的核心业务经历，积累了在高速增长平台上管理复杂交易与大规模运营的实战经验。好莱坞短剧投资人，对短视频内容趋势、用户付费心智及IP孵化拥有超前认知与资源，这将为AIyavaa切入最具潜力的AI短剧赛道提供即时的加速力。',
      expertise: ['平台运营', '交易管理', '短剧投资', '用户增长'],
    },
    {
      name: '涛哥',
      role: '联合创始人兼CTO/首席战略官',
      bio: '定义赛道与撬动关键资源的顶层设计师。作为前腾讯战略部"泛娱乐+IP"概念的首倡者，拥有定义行业框架的前瞻视野；在360操盘年利润10亿级利润业务，兼具产业深度与商业化能力；2024年起专注AI投资与战略设计。',
      expertise: ['战略规划', '产业洞察', '商业化', 'AI投资'],
    },
  ];

  return (
    <section id="team" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>⭐</span>
            <span>Founding Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            世界级创始团队：跨界、跨域、跨文化的生态整合者
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">World-class founders with deep ecosystem expertise</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            来自腾讯、Shopee、好莱坞、东南亚创业一线的顶尖人才，每位都是各自领域的生态整合者和战略设计师。
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
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Strengths */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-2xl p-8 lg:p-10">
          <h3 className="text-2xl font-black text-white mb-6">团队核心优势</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: '战略视野',
                desc: '前腾讯战略部、Shopee 核心业务背景，定义过行业框架，拥有前瞻性的赛道洞察',
              },
              {
                title: '商业化能力',
                desc: '从 Shopee 高速增长平台到 360 十亿级利润业务，深谙平台运营与商业闭环',
              },
              {
                title: '内容与生态',
                desc: '好莱坞投资背景、专业内容制作、社群运营一线经验，能打造高品质生态',
              },
              {
                title: '跨界资源',
                desc: '覆盖东南亚、中国、好莱坞的跨界资源网络，能快速整合全球生态伙伴',
              },
            ].map((strength, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0 font-black text-white">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{strength.title}</h4>
                  <p className="text-sm text-slate-300">{strength.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
