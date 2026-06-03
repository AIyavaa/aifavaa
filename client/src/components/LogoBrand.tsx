import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  zh: {
    badge: '品牌标识',
    title: '品牌视觉系统',
    subtitle: 'Brand Identity System',
    desc: 'AI 独立标识，象征智能与未来；YAVAA 承载品牌名，简洁、国际化、易识别。黑白金三色体系，适配全球多元场景。',
  },
  en: {
    badge: 'Brand Identity',
    title: 'Brand Visual System',
    subtitle: 'Brand Identity System',
    desc: 'The AI mark stands alone as a symbol of intelligence and the future. YAVAA carries the brand name — clean, international, and instantly recognizable. A black, white, and gold color system adapts to diverse global contexts.',
  },
};

export default function LogoBrand() {
  const { language } = useLanguage();
  const T = content[language as 'zh' | 'en'] || content.zh;

  return (
    <section id="brand" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>{T.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            {T.title}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">{T.subtitle}</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">{T.desc}</p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/3 backdrop-blur-xl">
          <img
            src="/manus-storage/aifavaa-logo-variants_1dcb0626.png"
            alt="AIFavaa Brand Logo Variants"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
