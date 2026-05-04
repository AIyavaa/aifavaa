import { useLanguage } from '@/contexts/LanguageContext';

export default function Closing() {
  const { language } = useLanguage();
  return (
    <section id="closing" className="relative py-20 lg:py-28 pb-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-8">
              <span>09</span>
              <span>/</span>
              <span>Closing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-8 max-w-4xl">
              AI 视频的下半场，属于掌握生态的平台。
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              模型能力会不断进步，但永远无法自动变现。AIyavaa 的使命是把 AI 能力转化为可持续的商业价值，通过平台、规则与激励，连接所有参与者，共同构建 AI 视频生态的未来。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#hero"
                className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-blue-400/30 text-white hover:from-blue-500/40 hover:to-cyan-500/40 hover:border-blue-400/50 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
              >
                了解更多
              </a>
              <a
                href="#funding"
                className="px-6 py-3 rounded-xl font-bold text-sm border border-white/12 text-slate-300 hover:text-white hover:bg-white/5 transition-all hover:-translate-y-0.5"
              >
                查看融资计划
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
