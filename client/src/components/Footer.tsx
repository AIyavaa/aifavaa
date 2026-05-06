import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  zh: {
    tagline: 'AI 视频生态平台，连接模型、创作者、品牌与用户。',
    product: { title: '产品', items: ['AI 视频生成工作室', 'AI 品牌营销平台', 'AI 创作者经纪人', 'AI 内容交易市场'] },
    resources: { title: '资源', items: ['市场机会', '平台架构', '发展路线图', '融资计划'] },
    contact: { title: '联系我们' },
    privacy: '隐私政策',
    terms: '服务条款',
    contactLink: '联系我们',
  },
  en: {
    tagline: 'AI video ecosystem platform connecting models, creators, brands and users.',
    product: { title: 'Product', items: ['AI Video Studio', 'AI Brand Marketing Platform', 'AI Creator Agent', 'AI Content Marketplace'] },
    resources: { title: 'Resources', items: ['Market Opportunity', 'Platform Architecture', 'Roadmap', 'Funding Plan'] },
    contact: { title: 'Contact Us' },
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contactLink: 'Contact',
  },
};

const resourceLinks = ['#market', '#architecture', '#roadmap', '#funding'];
const productLinks = ['#premium', '#premium', '#premium', '#premium'];

export default function Footer() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <footer className="relative py-12 lg:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-10 mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/30" />
              <span className="font-black text-white">AIyavaa</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{T.tagline}</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">{T.product.title}</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {T.product.items.map((item, i) => (
                <li key={i}><a href={productLinks[i]} className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">{T.resources.title}</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {T.resources.items.map((item, i) => (
                <li key={i}><a href={resourceLinks[i]} className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">{T.contact.title}</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>Email: evaforwork@163.com</li>
              <li>Website: www.aiyavaa.com</li>
              <li>WeChat: Yyyyylyll99</li>
              <li>WhatsApp: +65 93463156</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 lg:pt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>&copy; 2026 AIyavaa. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">{T.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{T.terms}</a>
              <a href="#" className="hover:text-white transition-colors">{T.contactLink}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
