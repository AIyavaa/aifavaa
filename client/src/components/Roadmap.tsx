import { useState } from 'react';

export default function Roadmap() {
  const [expandedPhase, setExpandedPhase] = useState(0);

  const phases = [
    {
      phase: 1,
      duration: '0-6 Months',
      title: 'Resource Integration & Value Infrastructure',
      desc: 'Platform setup, content DNA establishment, seed supply, and commercial closure pre-validation.',
      details: [
        'Complete model middleware, copyright transaction middleware, and rule management capabilities.',
        'Establish platform content standards, aesthetic baselines, and recommendation logic.',
        'Build AIyavaa Art Committee and establish first-batch creator network.',
        'Complete 2-3 landmark cases to validate brand payment and platform fulfillment capabilities.',
      ],
    },
    {
      phase: 2,
      duration: '7-12 Months',
      title: 'Beta Launch & Model Validation',
      desc: 'Elite beta testing, content momentum campaigns, brand demand injection, and data loop validation.',
      details: [
        'Create scarcity through invitation-only beta to build platform mindshare.',
        'Introduce first-batch brand customers and establish "browse—interact—consult—order—repurchase" conversion funnel.',
        'Validate creator payments, brand repurchases, and platform commission logic.',
        'Provide key data foundation for Series A pre-communication.',
      ],
    },
    {
      phase: 3,
      duration: '13-24 Months',
      title: 'Ecosystem Explosion & Scale',
      desc: 'Public launch, brand customer scale-up, creator network expansion, ecosystem partner integration.',
      details: [
        'Achieve 100K+ DAU, 10K+ creators, 100+ brand customers.',
        'Establish partnership ecosystem with models, tools, MCNs, and other partners.',
        'Complete international expansion into 3-5 overseas markets.',
        'Build sustainable growth flywheel and profitable business model.',
      ],
    },
  ];

  return (
    <section id="roadmap" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>06</span>
            <span>/</span>
            <span>Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            24-Month Roadmap: From Closed Beta to Ecosystem Explosion
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">Three phases of platform growth and validation</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            Structured execution plan with clear milestones, focusing on platform infrastructure, market validation, and sustainable growth.
          </p>
        </div>

        <div className="space-y-4">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl overflow-hidden group hover:border-blue-400/30 transition-all"
            >
              <button
                onClick={() => setExpandedPhase(expandedPhase === i ? -1 : i)}
                className="w-full p-6 lg:p-8 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-blue-500/30 border border-blue-400/50 flex items-center justify-center">
                        <span className="text-white font-black text-sm">Phase {phase.phase}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase">{phase.duration}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{phase.title}</h3>
                    <p className="text-sm sm:text-base text-slate-300">{phase.desc}</p>
                  </div>
                  <div className="text-2xl text-blue-400 flex-shrink-0 mt-1">
                    {expandedPhase === i ? '−' : '+'}
                  </div>
                </div>
              </button>

              {expandedPhase === i && (
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-white/10 pt-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-4">Key Milestones</div>
                  <ul className="space-y-3">
                    {phase.details.map((detail, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-300">
                        <span className="text-cyan-400 font-bold flex-shrink-0">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
