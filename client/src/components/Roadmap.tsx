import { useLanguage } from "@/contexts/LanguageContext";
const { language } = useLanguage();
import { useState } from 'react';

export default function Roadmap() {
  const [expandedPhase, setExpandedPhase] = useState(0);

  const phases = [
    {
      phase: 1,
      duration: '0-6 Months',
      title: '资源整合与价值基建',
      desc: '平台搭建、内容基因确立、种子供给与商业闭环预验证。',
      details: [
        '完成模型中台、版权交易中台、规则管理能力搭建。',
        '形成平台内容标准、审美基线与推荐逻辑。',
        '组建 AIyavaa 艺术委员会，建立首批创作者网络。',
        '完成 2-3 个标杆案例，验证品牌付费与平台承接能力。',
      ],
    },
    {
      phase: 2,
      duration: '7-12 Months',
      title: '内测造势与模式验证',
      desc: '精英内测、内容造势运动、品牌需求导入与数据闭环验证。',
      details: [
        '用邀请制内测制造稀缺感，打造平台心智。',
        '导入首批品牌客户，打通"浏览—互动—咨询—下单—复购"转化链路。',
        '验证创作者付费、品牌复购与平台佣金逻辑。',
        '为 A 轮预沟通提供关键数据基础。',
      ],
    },
    {
      phase: 3,
      duration: '13-24 Months',
      title: '生态引爆与规模化',
      desc: '公开上线、品牌客户规模化、创作者网络扩张、生态伙伴接入。',
      details: [
        '实现 DAU 10W+，创作者 1W+，品牌客户 100+。',
        '建立模型、工具、MCN 等生态伙伴合作体系。',
        '完成国际化布局，进入 3-5 个海外市场。',
        '形成可持续的增长飞轮与盈利模式。',
      ],
    },
  ];

  return (
    <section id="roadmap" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>06</span>
            <span>/</span>
            <span>Three-stage Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            三阶段路线图：先做成立，再做复制，最后做行业基础设施
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">Build the platform, validate the flywheel, scale the ecosystem</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            点击每个阶段查看详细动作。路线图遵循"先资源整合与价值基建，再模式验证，后生态引爆"的节奏。
          </p>
        </div>

        <div className="space-y-4 lg:space-y-5">
          {phases.map((p, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setExpandedPhase(expandedPhase === i ? -1 : i)}
                className="w-full p-6 lg:p-8 text-left hover:bg-white/5 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-blue-400/30 flex items-center justify-center">
                        <span className="font-black text-white text-lg">{p.phase}</span>
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{p.duration}</div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{p.title}</h3>
                    <p className="text-sm sm:text-base text-slate-300">{p.desc}</p>
                  </div>
                  <div className="text-slate-400 text-xl flex-shrink-0 mt-2">
                    {expandedPhase === i ? '−' : '+'}
                  </div>
                </div>
              </button>

              {expandedPhase === i && (
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-white/10 pt-6 lg:pt-8">
                  <ul className="space-y-3">
                    {p.details.map((detail, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-300">
                        <span className="text-blue-400 font-bold flex-shrink-0">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
