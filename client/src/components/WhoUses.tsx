import { useLanguage } from '@/contexts/LanguageContext';
import { brandText } from '@/lib/brandText';

const content = {
  zh: {
    badge: '05 / 谁在用',
    title: '每一个人都是 AIyavaa 的用户',
    subtitle: 'Everyone belongs here',
    desc: '不需要专业设备，不需要剪辑技能，不需要品牌预算。只要你有想法、有故事、有好奇心，AIyavaa 就是你的舞台。',
    groups: [
      {
        icon: '🔭',
        title: '对 AI 无限好奇的人',
        desc: '想亲手体验 AI 生成视频的魔力，探索技术边界，第一时间尝鲜最新模型。',
        tags: ['技术探索者', '早期采用者', 'AI 爱好者'],
      },
      {
        icon: '🎨',
        title: '创意工作者与内容创作者',
        desc: '设计师、摄影师、插画师、博主、UP主、短视频达人——用 AI 把创意变成动态影像，提升产量、降低成本、打造个人 IP。',
        tags: ['设计师', '摄影师', '博主', 'UP主', 'KOL', '插画师'],
      },
      {
        icon: '🏢',
        title: '品牌与企业',
        desc: '中小企业主、市场团队，快速生产高质量品牌视频，替代昂贵的传统制作，让每个品牌都有自己的故事。',
        tags: ['品牌方', '市场团队', '电商卖家'],
      },
      {
        icon: '🎬',
        title: '影视与故事创作者',
        desc: '编剧、导演、故事爱好者，用 AI 快速原型化剧情，探索互动剧、IP 剧新形态，让故事触达更多人。',
        tags: ['编剧', '导演', '故事创作者', '短剧制作'],
      },
      {
        icon: '🏠',
        title: '家庭与记忆守护者',
        desc: '用 AI 把家庭日常、生日纪念、成长瞬间变成有温度的视频故事，让每一段记忆都值得被珍藏和分享。孩子的第一步、家人的笑声、节日的团聚——都可以成为永久的影像记忆。',
        tags: ['家庭记录', '生日纪念', '成长相册', '日常 vlog', '亲子时光'],
      },
      {
        icon: '💼',
        title: '商业合伙人',
        desc: '投资人、生态合作方、品牌代理——共建 AIyavaa 生态，共享平台增长红利，成为 AGI 时代的先行者。',
        tags: ['投资人', '生态合作', '品牌代理'],
      },
    ],
  },
  en: {
    badge: '05 / Who Uses It',
    title: 'Everyone Is an AIyavaa User',
    subtitle: 'Everyone belongs here',
    desc: 'No professional equipment, no editing skills, no brand budget required. If you have ideas, stories, or curiosity — AIyavaa is your stage.',
    groups: [
      {
        icon: '🔭',
        title: 'AI Enthusiasts',
        desc: 'Curious minds who want to experience AI video generation firsthand, explore the boundaries of technology, and try the latest models first.',
        tags: ['Tech Explorers', 'Early Adopters', 'AI Fans'],
      },
      {
        icon: '🎨',
        title: 'Creatives & Content Creators',
        desc: 'Designers, photographers, illustrators, bloggers, vloggers, short-video creators — use AI to turn creativity into dynamic visuals, boost output, reduce costs, and build personal IP.',
        tags: ['Designers', 'Photographers', 'Bloggers', 'Vloggers', 'KOLs', 'Illustrators'],
      },
      {
        icon: '🏢',
        title: 'Brands & Businesses',
        desc: 'SME owners and marketing teams who need high-quality brand videos quickly, replacing expensive traditional production and giving every brand its own story.',
        tags: ['Brands', 'Marketing Teams', 'E-commerce Sellers'],
      },
      {
        icon: '🎬',
        title: 'Storytellers & Filmmakers',
        desc: 'Screenwriters, directors, and story lovers who use AI to rapidly prototype narratives and explore interactive drama and IP series.',
        tags: ['Screenwriters', 'Directors', 'Storytellers', 'Short Drama Producers'],
      },
      {
        icon: '🏠',
        title: 'Family Memory Keepers',
        desc: "Use AI to turn everyday family moments, birthday milestones, and childhood memories into warm video stories — every memory worth treasuring and sharing. A child's first steps, a family's laughter, holiday reunions — all become permanent visual memories.",
        tags: ['Family Records', 'Birthday Memories', 'Growth Albums', 'Daily Vlog', 'Parent-Child Moments'],
      },
      {
        icon: '💼',
        title: 'Business Partners',
        desc: 'Investors, ecosystem partners, brand agencies — co-build the AIyavaa ecosystem and share in platform growth dividends as AGI era pioneers.',
        tags: ['Investors', 'Ecosystem Partners', 'Brand Agencies'],
      },
    ],
  },
};

export default function WhoUses() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <section id="who-uses" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-200 bg-cyan-500/10 border border-cyan-400/20 backdrop-blur-sm mb-6">
            <span>{T.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            {brandText(T.title)}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">{T.subtitle}</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">{brandText(T.desc)}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {T.groups.map((group, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white/7 to-white/3 border border-white/10 hover:border-cyan-400/30"
            >

              <div className="text-3xl mb-4">{group.icon}</div>
              <h3 className="text-lg font-black text-white mb-2">{group.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{brandText(group.desc)}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs px-2.5 py-1 rounded-full border text-slate-300 bg-white/6 border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-slate-400 text-sm sm:text-base">
            {language === 'zh'
              ? '无论你是谁，AIyavaa 都为你准备了一个位置。'
              : 'Whoever you are, AIyavaa has a place for you.'}
          </p>
        </div>
      </div>
    </section>
  );
}
