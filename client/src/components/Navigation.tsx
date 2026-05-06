import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const { language } = useLanguage();

  const navLinks = [
    { href: '#market', label: language === 'zh' ? '市场' : 'Market' },
    { href: '#pain', label: language === 'zh' ? '痛点地图' : 'Pain Map' },
    { href: '#architecture', label: language === 'zh' ? '架构' : 'Architecture' },
    { href: '#competition', label: language === 'zh' ? '竞争' : 'Competition' },
    { href: '#business', label: language === 'zh' ? '商业模式' : 'Business' },
    { href: '#roadmap', label: language === 'zh' ? '路线图' : 'Roadmap' },
    { href: '#funding', label: language === 'zh' ? '融资' : 'Funding' },
    { href: '#team', label: language === 'zh' ? '团队' : 'Team' },
    { href: '#premium', label: language === 'zh' ? '高级产品' : 'Premium Products' },
    { href: '#consultation', label: language === 'zh' ? '咨询' : 'Consultation' },
    { href: '#closing', label: language === 'zh' ? '结尾' : 'Closing' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-slate-950/68 border-b border-white/8">
      <div className="max-w-7xl mx-auto px-6 py-0">
        <div className="flex justify-between items-center gap-6 min-h-[72px]">
          {/* Brand */}
          <a href="#hero" className="flex items-center gap-3 font-black tracking-wide">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/30 relative overflow-hidden">
              <div className="absolute inset-0.5 rounded-lg border border-white/35" />
            </div>
            <div>
              <div className="text-sm font-black">AIyavaa</div>
              <div className="text-xs font-semibold text-slate-400 tracking-widest uppercase">
                {language === 'zh' ? '投资者故事' : 'Interactive Investor Story'}
              </div>
            </div>
          </a>

          {/* Nav Links */}
          <div className="hidden lg:flex gap-3 flex-wrap justify-end items-center">
            <div className="flex gap-2 flex-wrap">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-full text-xs font-semibold text-slate-400 hover:text-slate-100 transition-all hover:border-white/12 hover:bg-white/5 border border-transparent"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="/platform"
              className="px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-indigo-500/30 to-cyan-400/20 border border-indigo-300/30 hover:from-indigo-500/40 hover:to-cyan-400/30 transition-all"
            >
              {language === 'zh' ? '进入平台' : 'Platform'} →
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
