import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from 'wouter';

const navLinks = {
  zh: [
    { href: '#hero', label: '首页' },
    { href: '#market', label: '市场' },
    { href: '#pain', label: '痛点' },
    { href: '#architecture', label: '架构' },
    { href: '#competition', label: '竞争' },
    { href: '#business', label: '商业' },
    { href: '#roadmap', label: '路线图' },
    { href: '#funding', label: '融资' },
    { href: '#team', label: '团队' },
    { href: '#consultation', label: '咨询' },
  ],
  en: [
    { href: '#hero', label: 'Home' },
    { href: '#market', label: 'Market' },
    { href: '#pain', label: 'Pain Points' },
    { href: '#architecture', label: 'Architecture' },
    { href: '#competition', label: 'Competition' },
    { href: '#business', label: 'Business' },
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#funding', label: 'Funding' },
    { href: '#team', label: 'Team' },
    { href: '#consultation', label: 'Consult' },
  ],
};

export default function Navigation() {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const links = navLinks[language as 'zh' | 'en'] || navLinks.zh;
  const platformLabel = language === 'en' ? 'Platform →' : '进入平台 →';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-xl border-b border-white/10' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/30" />
          <span className="font-black text-white text-lg">AIyavaa</span>
        </a>
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link href="/platform" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold hover:opacity-90 transition-opacity">
            {platformLabel}
          </Link>
        </div>
      </div>
    </nav>
  );
}
