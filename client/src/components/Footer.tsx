import { useLanguage } from '@/contexts/LanguageContext';
import AIyavaaLogo from './AIyavaaLogo';

const content = {
  zh: {
    tagline: 'AI 视频生态平台，连接模型、创作者、品牌与用户。',
    product: {
      title: '我们是谁',
      items: [
        { label: 'AI 视频生成工作室', href: '#premium' },
        { label: 'AI 品牌营销平台', href: '#premium' },
        { label: 'AI 创作者经纪人', href: '#premium' },
        { label: 'AI 时代合伙人', href: '#howwedoit' },
      ],
    },
    resources: {
      title: '了解更多',
      items: [
        { label: '市场机会', href: '#market' },
        { label: '平台架构', href: '#architecture' },
        { label: '发展路线图', href: '#roadmap' },
        { label: '谁在用', href: '#whouses' },
        { label: '怎么实现', href: '#howwedoit' },
      ],
    },
    contact: { title: '联系我们' },
    privacy: '隐私政策',
    terms: '服务条款',
    contactLink: '联系我们',
    copyright: '© 2026 AIyavaa. 保留所有权利。',
  },
  en: {
    tagline: 'AI video ecosystem platform connecting models, creators, brands and users.',
    product: {
      title: 'Who We Are',
      items: [
        { label: 'AI Video Studio', href: '#premium' },
        { label: 'AI Brand Marketing', href: '#premium' },
        { label: 'AI Creator Agency', href: '#premium' },
        { label: 'AI Era Partners', href: '#howwedoit' },
      ],
    },
    resources: {
      title: 'Explore',
      items: [
        { label: 'Market Opportunity', href: '#market' },
        { label: 'Platform Architecture', href: '#architecture' },
        { label: 'Roadmap', href: '#roadmap' },
        { label: 'Who Uses It', href: '#whouses' },
        { label: 'How We Do It', href: '#howwedoit' },
      ],
    },
    contact: { title: 'Contact Us' },
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contactLink: 'Contact',
    copyright: '© 2026 AIyavaa. All rights reserved.',
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <footer className="relative border-t border-white/8">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8 lg:pt-16 lg:pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-14">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5">
              <AIyavaaLogo variant="dark" size="sm" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-[220px]">
              {T.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="mailto:evaforwork@163.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-slate-400 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all"
              >
                Email
              </a>
              <a
                href="https://www.aiyavaa.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-slate-400 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all"
              >
                Website
              </a>
            </div>
          </div>

          {/* Products column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">
              {T.product.title}
            </h4>
            <ul className="space-y-3">
              {T.product.items.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/60 group-hover:bg-blue-400 transition-colors flex-shrink-0" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">
              {T.resources.title}
            </h4>
            <ul className="space-y-3">
              {T.resources.items.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500/60 group-hover:bg-cyan-400 transition-colors flex-shrink-0" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">
              {T.contact.title}
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-500/60 flex-shrink-0 mt-2" />
                <span>evaforwork@163.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-500/60 flex-shrink-0 mt-2" />
                <span>WeChat: Yyyyylyll99</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-500/60 flex-shrink-0 mt-2" />
                <span>WhatsApp: +65 93463156</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-500/60 flex-shrink-0 mt-2" />
                <span>www.aiyavaa.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">{T.copyright}</p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">{T.privacy}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{T.terms}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{T.contactLink}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
