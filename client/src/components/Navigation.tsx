import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import AIyavaaLogo from './AIyavaaLogo';

const navLinks = {
  zh: [
    { href: '#hero', label: '首页' },
    { href: '#market', label: '01 市场' },
    { href: '#pain', label: '02 痛点' },
    { href: '#architecture', label: '03 架构' },
    { href: '#competition', label: '04 竞争' },
    { href: '#who-uses', label: '05 谁在用' },
    { href: '#business', label: '06 商业' },
    { href: '#platform-modules', label: '07 我们是谁' },
    { href: '#team', label: '团队' },
    { href: '#how-we-do-it', label: '08 怎么实现' },
  ],
  en: [
    { href: '#hero', label: 'Home' },
    { href: '#market', label: '01 Market' },
    { href: '#pain', label: '02 Pain Points' },
    { href: '#architecture', label: '03 Architecture' },
    { href: '#competition', label: '04 Competition' },
    { href: '#who-uses', label: '05 Who Uses' },
    { href: '#business', label: '06 Business' },
    { href: '#platform-modules', label: '07 Who We Are' },
    { href: '#team', label: 'Team' },
    { href: '#how-we-do-it', label: '08 How We Do It' },
  ],
};

export default function Navigation() {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = navLinks[language as 'zh' | 'en'] || navLinks.zh;
  const platformLabel = language === 'en' ? 'Platform →' : '进入平台 →';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center" onClick={handleLinkClick}>
            <AIyavaaLogo variant="dark" size="sm" />
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <Link href="/platform" className="hidden sm:inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs sm:text-sm font-bold hover:opacity-90 transition-opacity">
              {platformLabel}
            </Link>
            {/* Hamburger - visible on mobile & tablet */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white flex-shrink-0"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-white/10 max-h-[80vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-white/10">
                <Link
                  href="/platform"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  {platformLabel}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
