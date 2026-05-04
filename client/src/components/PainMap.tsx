import { useLanguage } from '@/contexts/LanguageContext';

export default function PainMap() {
  const { language } = useLanguage();

  const painPoints = [
    {
      title: language === 'zh' ? '用户 / User' : 'Users',
      desc:
        language === 'zh'
          ? '视频消费需求爆发，但内容质量参差不齐'
          : 'Exploding video consumption demand, but inconsistent content quality',
      points:
        language === 'zh'
          ? [
              '短视频平台内容同质化严重，用户需要更高质量、更个性化的内容',
              '现有 AI 视频工具生成的内容缺乏情感连接与审美品味',
              '用户渴望参与内容创作过程，但工具门槛太高',
            ]
          : [
              'Short video platforms suffer from homogenized content; users need higher quality, personalized content',
              'Existing AI video tools lack emotional connection and aesthetic appeal',
              'Users want to participate in content creation but tools have high barriers to entry',
            ],
    },
    {
      title: language === 'zh' ? '创作者 / Creator' : 'Creators',
      desc:
        language === 'zh'
          ? '生产力工具众多，但缺乏变现渠道与生态支撑'
          : 'Many productivity tools available, but lack monetization channels and ecosystem support',
      points:
        language === 'zh'
          ? [
              'AI 工具降低了创作门槛，但创作者仍难以获得稳定收入',
              '缺乏专业的内容交易市场，创作者无法直接对接品牌需求',
              '版权保护不足，创作资产无法沉淀与复用',
            ]
          : [
              'AI tools lower creation barriers, but creators struggle to earn stable income',
              'Lack of professional content marketplace; creators cannot directly connect with brands',
              'Insufficient copyright protection; creative assets cannot be preserved or reused',
            ],
    },
    {
      title: language === 'zh' ? '品牌 / Brand' : 'Brands',
      desc:
        language === 'zh'
          ? '营销需求迫切，但采购链路复杂且成本高'
          : 'Urgent marketing needs, but complex procurement and high costs',
      points:
        language === 'zh'
          ? [
              '传统视频制作周期长、成本高，难以满足快速迭代需求',
              '缺乏标准化的 AI 视频采购渠道，品牌需要自己组织资源',
              '难以评估创作者质量，无法建立长期合作关系',
            ]
          : [
              'Traditional video production has long cycles and high costs, difficult to meet rapid iteration needs',
              'Lack of standardized AI video procurement channels; brands must organize resources themselves',
              'Difficult to assess creator quality; cannot establish long-term partnerships',
            ],
    },
    {
      title: language === 'zh' ? '模型方 / Model Provider' : 'Model Providers',
      desc:
        language === 'zh'
          ? '能力已成熟，但缺乏应用场景与商业闭环'
          : 'Capabilities mature, but lack application scenarios and business closure',
      points:
        language === 'zh'
          ? [
              '模型能力商品化，单纯卖 API 利润空间有限',
              '缺乏垂直应用场景，难以形成用户粘性',
              '无法直接触达终端用户，依赖第三方分发',
            ]
          : [
              'Model capabilities commoditized; selling APIs alone has limited profit margins',
              'Lack of vertical application scenarios; difficult to build user stickiness',
              'Cannot directly reach end users; dependent on third-party distribution',
            ],
    },
  ];

  return (
    <section id="pain" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>02</span>
            <span>/</span>
            <span>{language === 'zh' ? '痛点地图' : 'Pain Map'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            {language === 'zh'
              ? '四个角色的核心痛点：平台缺位'
              : 'Core Pain Points of Four Stakeholders: The Missing Platform'}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">
              {language === 'zh' ? 'AI 视频生态中的缺失环节' : 'The missing middle in AI video ecosystem'}
            </div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            {language === 'zh'
              ? '用户、创作者、品牌、模型方各有所需，但缺乏一个统一的平台来连接所有参与者。'
              : 'Users, creators, brands, and model providers all have distinct needs, but lack a unified platform to connect all participants.'}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
          {painPoints.map((pain, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 lg:p-8 group hover:border-blue-400/30 hover:from-white/12 transition-all"
            >
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{pain.title}</h3>
              <p className="text-sm sm:text-base text-slate-300 mb-4 font-semibold">{pain.desc}</p>
              <ul className="space-y-3">
                {pain.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                    <span className="text-blue-400 font-bold flex-shrink-0 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
