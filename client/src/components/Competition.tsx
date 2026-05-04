import { useLanguage } from '@/contexts/LanguageContext';

export default function Competition() {
  const { language } = useLanguage();
  const competitors = [
    { name: 'YouTube', strength: 3, distribution: 3, creator: 3, brand: 3, interaction: 3, copyright: 3, ecosystem: 3 },
    { name: 'Runway / Pika', strength: 1, distribution: 1, creator: 2, brand: 1, interaction: 2, copyright: 1, ecosystem: 1 },
    { name: 'TikTok Shop', strength: 2, distribution: 3, creator: 2, brand: 2, interaction: 2, copyright: 2, ecosystem: 1 },
    { name: 'AIyavaa', strength: 1, distribution: 2, creator: 2, brand: 2, interaction: 2, copyright: 1, ecosystem: 1 },
  ];

  const categories = [
    '生成能力',
    '内容分发能力',
    '创作者沉淀能力',
    '用户互动 / 共创',
    '品牌需求承接',
    '交易闭环能力',
    '版权 / 规则保障',
    '平台生态整合',
  ];

  const renderScore = (score: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i <= score ? 'bg-blue-400' : 'bg-white/20'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="competition" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>04</span>
            <span>/</span>
            <span>Competition Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            竞争格局：没有人在做"平台"
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">The white space is in platform integration</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            YouTube 强于生态整合，Runway/Pika 强于生成能力，TikTok Shop 强于交易，但没有人同时掌握生成、分发、创作者、品牌与交易。
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 font-bold text-white">能力维度</th>
                {competitors.map((comp) => (
                  <th key={comp.name} className="text-center py-3 px-4 font-bold text-white">
                    {comp.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all">
                  <td className="py-3 px-4 font-semibold text-slate-300">{cat}</td>
                  {competitors.map((comp) => (
                    <td key={comp.name} className="text-center py-3 px-4">
                      {renderScore(
                        i === 0
                          ? comp.strength
                          : i === 1
                            ? comp.distribution
                            : i === 2
                              ? comp.creator
                              : i === 3
                                ? comp.interaction
                                : i === 4
                                  ? comp.brand
                                  : i === 5
                                    ? comp.ecosystem
                                    : i === 6
                                      ? comp.copyright
                                      : comp.ecosystem
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-2xl p-6 lg:p-8">
          <h4 className="font-black text-white mb-4">AIyavaa 的差异化定位</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-bold text-blue-300 mb-2">✓ 不是生成工具</h5>
              <p className="text-sm text-slate-300">
                Runway 和 Pika 已经做得很好。我们专注于"生成后"的全链条：分发、交易、变现、生态。
              </p>
            </div>
            <div>
              <h5 className="font-bold text-blue-300 mb-2">✓ 不是内容平台</h5>
              <p className="text-sm text-slate-300">
                YouTube 和 TikTok 已经垄断了消费端。我们专注于"创作者 → 品牌"的 B2B 交易链路。
              </p>
            </div>
            <div>
              <h5 className="font-bold text-blue-300 mb-2">✓ 不是电商平台</h5>
              <p className="text-sm text-slate-300">
                TikTok Shop 做的是商品交易。我们做的是内容与创意服务的交易。
              </p>
            </div>
            <div>
              <h5 className="font-bold text-blue-300 mb-2">✓ 是生态连接器</h5>
              <p className="text-sm text-slate-300">
                我们是模型、创作者、品牌、用户之间的"中间件"，通过规则、激励与数据飞轮实现生态增长。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
