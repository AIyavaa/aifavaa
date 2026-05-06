import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  zh: {
    badge: '02 / 痛点地图',
    title: '四大核心痛点：缺失的平台层',
    subtitle: 'The missing middle in AI video ecosystem',
    desc: '用户、创作者、品牌和模型提供商都有需求，但缺乏一个统一的平台来连接所有参与者。',
    painPoints: [
      {
        title: '用户',
        desc: '视频消费爆发，但内容质量参差不齐',
        points: [
          '短视频平台内容同质化，用户需要更高质量、更个性化的内容',
          '现有AI视频工具生产的内容缺乏情感连接与审美品味',
          '用户希望参与内容创作，但工具门槛过高',
        ],
      },
      {
        title: '创作者',
        desc: '生产力工具众多，但缺乏变现渠道与生态支撑',
        points: [
          'AI工具降低了创作门槛，但创作者仍难以获得稳定收入',
          '缺乏专业内容交易市场，创作者无法直接对接品牌需求',
          '版权保护不足，创意资产无法积累和复用',
        ],
      },
      {
        title: '品牌',
        desc: '营销需求迫切，但采购流程复杂且成本高',
        points: [
          '传统视频制作耗时耗力，难以快速迭代',
          '缺乏标准化的AI视频采购渠道，品牌需自行整合资源',
          '难以评估创作者质量，无法建立长期合作关系',
        ],
      },
      {
        title: '模型提供商',
        desc: '能力已成熟，但缺乏应用场景与商业闭环',
        points: [
          '模型能力商品化，单纯卖API利润空间有限',
          '缺乏垂直应用场景，难以建立用户粘性',
          '无法直接触达终端用户，依赖第三方分发',
        ],
      },
    ],
  },
  en: {
    badge: '02 / Pain Map',
    title: 'Four Key Pain Points: The Missing Platform',
    subtitle: 'The missing middle in AI video ecosystem',
    desc: 'Users, creators, brands, and model providers all have needs, but lack a unified platform to connect all participants.',
    painPoints: [
      {
        title: 'Users',
        desc: 'Video consumption is exploding, but content quality is inconsistent',
        points: [
          'Short video platforms have homogeneous content; users need higher quality and more personalized content',
          'Existing AI video tools produce content lacking emotional connection and aesthetic taste',
          'Users want to participate in content creation, but the tool barrier is too high',
        ],
      },
      {
        title: 'Creators',
        desc: 'Many productivity tools exist, but lack monetization channels and ecosystem support',
        points: [
          'AI tools lower creation barriers, but creators still struggle to earn stable income',
          'Lack of professional content trading markets; creators cannot directly connect with brand needs',
          'Insufficient copyright protection; creative assets cannot be accumulated and reused',
        ],
      },
      {
        title: 'Brands',
        desc: 'Marketing needs are urgent, but procurement workflows are complex and costly',
        points: [
          'Traditional video production takes time and costs, making rapid iteration difficult',
          'Lack of standardized AI video procurement channels; brands must organize resources themselves',
          'Difficult to assess creator quality; cannot establish long-term partnerships',
        ],
      },
      {
        title: 'Model Providers',
        desc: 'Capabilities are mature, but lack application scenarios and commercial closure',
        points: [
          'Model capabilities are commoditized; selling APIs alone has limited profit margins',
          'Lack of vertical application scenarios; difficult to build user stickiness',
          'Cannot directly reach end users; dependent on third-party distribution',
        ],
      },
    ],
  },
};

export default function PainMap() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <section id="pain" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-7">
          {T.painPoints.map((pain, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-5 sm:p-6 lg:p-8 group hover:border-blue-400/30 hover:from-white/12 transition-all"
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
