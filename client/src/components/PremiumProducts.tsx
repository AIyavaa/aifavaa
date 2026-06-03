import { useLanguage } from '@/contexts/LanguageContext';
import { brandText } from '@/lib/brandText';

const content = {
  zh: {
    badge: '07 / 我们是谁',
    title: '我们是谁',
    subtitle: 'AI Universal OS — Six Core Modules',
    desc: '我们是平台——全球首个 AI 万能操作系统。从创作到确权，从交易到财富管理，AIFavaa 打通 AI 时代的完整价值链。',
    products: [
      {
        icon: '🎨',
        title: 'AI Creation Hub · AI 创作中心',
        benchmark: '对标：Canva · Gamma · Midjourney',
        desc: '一句话生成任何内容。图片、海报、PPT、漫画、动画、小说、短视频、广告片、电商素材、财经分析、教育课件、音乐、设计——全部一键完成。',
        features: [
          '文字或语音输入，AI 智能意图引擎匹配最优创作路径',
          '覆盖全类型内容：视觉、文字、音频、视频、商业文档',
          '时间不够或软件不熟？发布需求，真人创作者代劳',
          '先体验，再注册，发布时进入账号与收益系统',
        ],
      },
      {
        icon: '🏭',
        title: 'AI App Factory · AI 应用工厂',
        benchmark: '对标：Lovable · Bolt · Replit',
        desc: '输入一句话，直接生成完整应用。"我要一个外卖平台"——前端、后台、数据库、小程序、APP，全部自动生成，无需代码基础。',
        features: [
          '自然语言描述需求，AI 全栈生成应用',
          '输出：前端界面 + 后台管理 + 数据库 + 小程序 + APP',
          '支持修改迭代：自然语言调整，实时预览',
          '一键部署上线，内置域名与托管服务',
        ],
      },
      {
        icon: '💼',
        title: 'AI Business Builder · AI 商业生成器',
        benchmark: '对标：传统咨询 · 投行 BP 服务',
        desc: '输入商业想法，自动生成完整商业方案。"我要做矿业基金"——商业模式、股权架构、BP、财务模型、投资 PPT，一键生成。',
        features: [
          '自动生成商业模式画布与竞争分析',
          '智能设计股权架构与融资方案',
          '生成专业 BP 文档与投资人 PPT',
          '内置财务模型：收入预测、成本结构、IRR 测算',
        ],
      },
      {
        icon: '🔐',
        title: 'AI Asset Registry + AI Deal Marketplace',
        benchmark: 'AI 资产确权中心 · 全球项目交易市场',
        desc: '用户在任何平台用 AI 生成内容后，选择 AIFavaa 确权功能，自动生成时间戳、区块链登记、作者认证、收益追踪——这就是你在 AI 时代的全球资产。',
        features: [
          '支持：图片、视频、音乐、APP、游戏、小说等全类型 AI 资产',
          'AI 自动判定原创性，生成唯一确权证书',
          '完整资产金融生态：确权 → 估值 → 交易 → 融资 → 收益分配',
          '中立平台，类欧盟食品认证，制定全球 AI 资产确权标准',
        ],
      },
      {
        icon: '🤖',
        title: 'AI Agent Marketplace · AIFavaa 智能体市场',
        benchmark: '对标：苹果 App Store',
        desc: '类似苹果 App Store 的 AI 员工市场。未来每个商人都可以在 AIFavaa 拥有自己的 AI 员工团队，按需订阅，随时上岗。',
        features: [
          '财务 AI · 法律 AI · HR AI · 营销 AI · 股票 AI',
          '教育培训 AI · 顾问 AI · 客服 AI · 数据分析 AI',
          '开发者可上架自研 AI Agent，平台分成收益',
          '企业可定制专属 AI 员工，打通内部系统',
        ],
      },
      {
        icon: '💰',
        title: 'AIFavaa Wealth Copilot · AI 财富管理',
        benchmark: 'AI Wealth Brain · 全球首个 AI 财富管理操作系统',
        desc: '打造 AI 时代的财富管理基础设施平台。AIFavaa Wealth OS 解决方案，让每个人都拥有私人级别的 AI 财富大脑。',
        features: [
          '全球首个 AI Wealth Operating System（AI 财富管理操作系统）',
          'AI 财富大脑：资产全景、风险分析、收益预测、现金流管理',
          'RWA 真实世界资产上链：私募股权、IP 版权、数字资产统一管理',
          'AI Alternative Asset Hub：另类资产中心，覆盖传统金融空白领域',
        ],
      },
    ],
  },
  en: {
    badge: '07 / Who We Are',
    title: 'Who We Are',
    subtitle: 'AI Universal OS — Six Core Modules',
    desc: 'We are the platform — the world\'s first AI Universal Operating System. From creation to ownership, from trading to wealth management, AIFavaa connects the complete value chain of the AI era.',
    products: [
      {
        icon: '🎨',
        title: 'AI Creation Hub',
        benchmark: 'vs. Canva · Gamma · Midjourney',
        desc: 'Generate anything with one sentence. Images, posters, PPT, comics, animation, novels, short videos, ads, e-commerce assets, financial analysis, education, music, design — all in one click.',
        features: [
          'Text or voice input, AI intent engine matches the optimal creation path',
          'Covers all content types: visual, text, audio, video, business documents',
          'Not enough time or unfamiliar with tools? Post a request, human creators handle it',
          'Try first, register later — enter account and revenue system only when publishing',
        ],
      },
      {
        icon: '🏭',
        title: 'AI App Factory',
        benchmark: 'vs. Lovable · Bolt · Replit',
        desc: 'Type one sentence, get a complete application. "I want a food delivery platform" — frontend, backend, database, mini-app, APP — all auto-generated, no coding required.',
        features: [
          'Describe requirements in natural language, AI generates full-stack application',
          'Output: frontend UI + admin backend + database + mini-app + APP',
          'Iterative editing: adjust in natural language, real-time preview',
          'One-click deployment with built-in domain and hosting service',
        ],
      },
      {
        icon: '💼',
        title: 'AI Business Builder',
        benchmark: 'vs. Traditional Consulting · Investment Bank BP Services',
        desc: 'Input a business idea, auto-generate a complete business plan. "I want to start a mining fund" — business model, equity structure, BP, financial model, investor PPT — one click.',
        features: [
          'Auto-generate business model canvas and competitive analysis',
          'Intelligently design equity structure and financing plan',
          'Generate professional BP documents and investor PPT',
          'Built-in financial model: revenue forecast, cost structure, IRR calculation',
        ],
      },
      {
        icon: '🔐',
        title: 'AI Asset Registry + AI Deal Marketplace',
        benchmark: 'AI Asset Ownership Center · Global Project Trading Market',
        desc: 'After generating content with AI on any platform, select AIFavaa ownership — automatically generate timestamp, blockchain registration, author certification, revenue tracking. This is your global AI asset.',
        features: [
          'Supports: images, videos, music, apps, games, novels and all AI asset types',
          'AI auto-verifies originality, generates unique ownership certificate',
          'Complete asset financial ecosystem: Own → Value → Trade → Finance → Earn',
          'Neutral platform, like EU food certification, setting global AI asset ownership standards',
        ],
      },
      {
        icon: '🤖',
        title: 'AI Agent Marketplace',
        benchmark: 'vs. Apple App Store',
        desc: 'An AI employee marketplace like Apple App Store. In the future, every business owner can have their own AI employee team on AIFavaa — subscribe on demand, deploy anytime.',
        features: [
          'Finance AI · Legal AI · HR AI · Marketing AI · Stock AI',
          'Education AI · Advisor AI · Customer Service AI · Data Analysis AI',
          'Developers can list self-built AI Agents, earn platform revenue share',
          'Enterprises can customize exclusive AI employees, integrated with internal systems',
        ],
      },
      {
        icon: '💰',
        title: 'AIFavaa Wealth Copilot',
        benchmark: 'AI Wealth Brain · World\'s First AI Wealth Management OS',
        desc: 'Building the wealth management infrastructure platform for the AI era. AIFavaa Wealth OS gives everyone access to private-level AI wealth intelligence.',
        features: [
          "World's first AI Wealth Operating System (AI Wealth OS)",
          'AI Wealth Brain: asset panorama, risk analysis, return forecast, cash flow management',
          'RWA real-world asset tokenization: private equity, IP rights, digital assets unified management',
          'AI Alternative Asset Hub: covering traditional finance blind spots',
        ],
      },
    ],
  },
};

export default function PremiumProducts() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <section id="premium" className="relative py-20 lg:py-28">
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

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {T.products.map((product, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 lg:p-8 hover:border-blue-400/30 hover:from-white/12 transition-all"
            >
              <div className="text-3xl mb-3">{product.icon}</div>
              <h3 className="text-xl font-black text-white mb-1">{product.title}</h3>
              <p className="text-xs font-bold text-blue-400/80 mb-3 uppercase tracking-wide">{product.benchmark}</p>
              <p className="text-sm text-slate-400 mb-4">{brandText(product.desc)}</p>
              <ul className="space-y-2">
                {product.features.map((feature, j) => (
                  <li key={j} className="flex gap-2 text-sm text-slate-300">
                    <span className="text-blue-400 font-bold flex-shrink-0">✓</span>
                    <span>{feature}</span>
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
