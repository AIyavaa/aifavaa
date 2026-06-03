import { useLanguage } from '@/contexts/LanguageContext';
import { brandText } from '@/lib/brandText';

const content = {
  zh: {
    badge: '05 / 谁在用',
    title: '谁在用 AIFavaa？',
    subtitle: 'Create · Own · Trade · Earn — For Everyone',
    desc: '从个人创作者到高净值投资者，从家庭记忆守护者到全球商业合伙人——AIFavaa 的四位一体架构服务于每一类数字时代的参与者。',
    groups: [
      {
        icon: '🎨',
        tag: 'Create',
        title: '内容创作者与创意工作者',
        desc: '视频创作者、音乐人、主播、播客、摄影师、设计师——任何有创意的人都能通过 AIFavaa 将想法变为可交易的数字资产。',
        tags: ['短视频创作者', '音乐人', '主播', '播客', '摄影师', '设计师', 'AI艺术家'],
        color: 'from-cyan-500/12 to-cyan-600/5',
        border: 'border-cyan-400/25',
        accent: 'text-cyan-300',
      },
      {
        icon: '🔐',
        tag: 'Own',
        title: '数字资产确权者',
        desc: 'AI创作物、Prompt、Workflow、数字人、数据资产的持有者——需要将创作物确权为可持有、可交易的数字资产，保障权益。',
        tags: ['AI创作者', 'Prompt工程师', 'AI开发者', '数字人创作者', '数据资产持有者', 'IP持有者'],
        color: 'from-blue-500/12 to-blue-600/5',
        border: 'border-blue-400/25',
        accent: 'text-blue-300',
      },
      {
        icon: '🏠',
        tag: 'Memory',
        title: '家庭与记忆守护者',
        desc: '围绕家庭记录与情感传承——日常生活、生日纪念、成长记录、家族故事。用 AI 将珍贵记忆转化为永久保存的数字资产。',
        tags: ['家庭记录', '生日纪念', '成长相册', '家族故事', '情感传承', '亲子创作'],
        color: 'from-rose-500/12 to-rose-600/5',
        border: 'border-rose-400/25',
        accent: 'text-rose-300',
      },
      {
        icon: '🌐',
        tag: 'Trade',
        title: '品牌与企业用户',
        desc: '需要快速生成高质量营销内容、采购 AI 创意服务、建立创作者合作关系的品牌与企业。',
        tags: ['品牌营销', '广告创意', '内容采购', '创作者合作', '企业培训', '商业视频'],
        color: 'from-violet-500/12 to-violet-600/5',
        border: 'border-violet-400/25',
        accent: 'text-violet-300',
      },
      {
        icon: '💰',
        tag: 'Earn',
        title: '高净值投资者与财富管理者',
        desc: '需要管理 AI 资产、RWA 真实世界资产、另类资产的高净值客户与家族办公室——AIFavaa Wealth OS 是专为他们设计的智能财富管理平台。',
        tags: ['高净值客户', '家族办公室', '私募投资者', 'RWA资产', '另类资产', 'AI资产配置'],
        color: 'from-emerald-500/12 to-emerald-600/5',
        border: 'border-emerald-400/25',
        accent: 'text-emerald-300',
      },
      {
        icon: '🤝',
        tag: 'Partner',
        title: '全球商业合伙人',
        desc: '通过合伙人体系参与 AIFavaa 生态建设的个人与机构——分享合伙人、城市合伙人、国家合伙人、垂直行业合伙人。',
        tags: ['分享合伙人', '城市合伙人', '国家合伙人', '科技合伙人', '教育合伙人', '知识合伙人'],
        color: 'from-amber-500/12 to-amber-600/5',
        border: 'border-amber-400/25',
        accent: 'text-amber-300',
      },
    ],
    cta: '无论你是谁，AIFavaa 都为你准备了一个位置。',
  },
  en: {
    badge: '05 / Who Uses It',
    title: 'Who Uses AIFavaa?',
    subtitle: 'Create · Own · Trade · Earn — For Everyone',
    desc: "From individual creators to high-net-worth investors, from family memory keepers to global business partners — AIFavaa's four-in-one architecture serves every participant in the digital age.",
    groups: [
      {
        icon: '🎨',
        tag: 'Create',
        title: 'Content Creators & Creative Professionals',
        desc: 'Video creators, musicians, streamers, podcasters, photographers, designers — anyone with creativity can turn ideas into tradeable digital assets through AIFavaa.',
        tags: ['Short Video Creators', 'Musicians', 'Streamers', 'Podcasters', 'Photographers', 'Designers', 'AI Artists'],
        color: 'from-cyan-500/12 to-cyan-600/5',
        border: 'border-cyan-400/25',
        accent: 'text-cyan-300',
      },
      {
        icon: '🔐',
        tag: 'Own',
        title: 'Digital Asset Ownership Seekers',
        desc: 'Holders of AI creations, Prompts, Workflows, Digital Humans, and Data Assets — those who need to register their work as holdable, tradeable digital assets to protect their rights.',
        tags: ['AI Creators', 'Prompt Engineers', 'AI Developers', 'Digital Human Creators', 'Data Asset Holders', 'IP Holders'],
        color: 'from-blue-500/12 to-blue-600/5',
        border: 'border-blue-400/25',
        accent: 'text-blue-300',
      },
      {
        icon: '🏠',
        tag: 'Memory',
        title: 'Family & Memory Guardians',
        desc: 'Centered on family recording and emotional legacy — daily life, birthday milestones, growth records, family stories. Use AI to transform precious memories into permanently preserved digital assets.',
        tags: ['Family Records', 'Birthday Milestones', 'Growth Albums', 'Family Stories', 'Emotional Legacy', 'Parent-Child Creation'],
        color: 'from-rose-500/12 to-rose-600/5',
        border: 'border-rose-400/25',
        accent: 'text-rose-300',
      },
      {
        icon: '🌐',
        tag: 'Trade',
        title: 'Brands & Enterprise Users',
        desc: 'Brands and enterprises that need to quickly generate high-quality marketing content, procure AI creative services, and build creator partnerships.',
        tags: ['Brand Marketing', 'Ad Creative', 'Content Procurement', 'Creator Partnerships', 'Corporate Training', 'Business Video'],
        color: 'from-violet-500/12 to-violet-600/5',
        border: 'border-violet-400/25',
        accent: 'text-violet-300',
      },
      {
        icon: '💰',
        tag: 'Earn',
        title: 'HNW Investors & Wealth Managers',
        desc: "High-net-worth clients and family offices who need to manage AI assets, RWA real-world assets, and alternative assets — AIFavaa Wealth OS is the intelligent wealth management platform designed for them.",
        tags: ['HNW Clients', 'Family Offices', 'Private Investors', 'RWA Assets', 'Alternative Assets', 'AI Asset Allocation'],
        color: 'from-emerald-500/12 to-emerald-600/5',
        border: 'border-emerald-400/25',
        accent: 'text-emerald-300',
      },
      {
        icon: '🤝',
        tag: 'Partner',
        title: 'Global Business Partners',
        desc: 'Individuals and institutions participating in AIFavaa ecosystem building through the partner system — sharing partners, city partners, country partners, vertical industry partners.',
        tags: ['Sharing Partners', 'City Partners', 'Country Partners', 'Tech Partners', 'Education Partners', 'Knowledge Partners'],
        color: 'from-amber-500/12 to-amber-600/5',
        border: 'border-amber-400/25',
        accent: 'text-amber-300',
      },
    ],
    cta: 'Whoever you are, AIFavaa has a place for you.',
  },
};

export default function WhoUses() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <section id="who-uses" className="relative py-20 lg:py-28">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-10">
          {T.groups.map((group, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${group.color} border ${group.border} backdrop-blur-xl rounded-2xl p-5 sm:p-6 hover:scale-[1.02] transition-all`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{group.icon}</span>
                <span className={`text-[10px] font-black uppercase tracking-widest ${group.accent}`}>{group.tag}</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white mb-2">{group.title}</h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">{brandText(group.desc)}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.tags.map((tag, j) => (
                  <span key={j} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/8 border border-white/12 ${group.accent}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-400 text-sm sm:text-base">{T.cta}</p>
        </div>
      </div>
    </section>
  );
}
