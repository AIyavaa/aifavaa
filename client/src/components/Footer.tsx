import { useLanguage } from '@/contexts/LanguageContext';
import AIFavaaLogo from './AIFavaaLogo';
import { brandText } from '@/lib/brandText';

const content = {
  zh: {
    tagline: '全球首个 AI 万能操作系统',
    learnMore: '了解更多',
    contactUs: '联系我们',
    copyright: '© 2025 AIFavaa. 保留所有权利。',
  },
  en: {
    tagline: "World's First AI Universal Operating System",
    learnMore: 'Learn More',
    contactUs: 'Contact Us',
    copyright: '© 2025 AIFavaa. All rights reserved.',
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <footer className="relative border-t border-white/8">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="mb-4">
            <AIFavaaLogo variant="dark" size="sm" />
          </div>
          <p className="text-sm text-slate-400">{brandText(T.tagline)}</p>
        </div>

        {/* Two CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#platform-modules"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold hover:opacity-90 transition-opacity"
          >
            {T.learnMore}
          </a>
          <a
            href="mailto:evaforwork@163.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-colors"
          >
            {T.contactUs}
          </a>
        </div>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10 text-xs text-slate-500">
          <span>evaforwork@163.com</span>
          <span>WeChat: Yyyyylyll99</span>
          <span>WhatsApp: +65 93463156</span>
          <span>www.aifavaa.com</span>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 text-center">
          <p className="text-xs text-slate-500">{brandText(T.copyright)}</p>
        </div>
      </div>
    </footer>
  );
}
