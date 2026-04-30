import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 px-2 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
      <button
        onClick={() => setLanguage('zh')}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
          language === 'zh'
            ? 'bg-blue-500/30 text-blue-200 border border-blue-400/30'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        中文
      </button>
      <div className="w-px h-4 bg-white/10" />
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
          language === 'en'
            ? 'bg-blue-500/30 text-blue-200 border border-blue-400/30'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        EN
      </button>
    </div>
  );
}
