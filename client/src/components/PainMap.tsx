export default function PainMap() {
  const painPoints = [
    {
      title: 'Users',
      desc: 'Video consumption is exploding, but content quality is inconsistent',
      points: [
        'Short video platforms have homogeneous content; users need higher quality and more personalized content',
        'Existing AI video tools produce content lacking emotional connection and aesthetic taste',
        'Users want to participate in content creation, but the tool barrier is too high',
      ],
    },
    {
      title: 'Creators',
      desc: 'Many productivity tools exist, but lack monetization channels and ecosystem support',
      points: [
        'AI tools lower creation barriers, but creators still struggle to earn stable income',
        'Lack of professional content trading markets; creators cannot directly connect with brand needs',
        'Insufficient copyright protection; creative assets cannot be accumulated and reused',
      ],
    },
    {
      title: 'Brands',
      desc: 'Marketing needs are urgent, but procurement workflows are complex and costly',
      points: [
        'Traditional video production takes time and costs, making rapid iteration difficult',
        'Lack of standardized AI video procurement channels; brands must organize resources themselves',
        'Difficult to assess creator quality; cannot establish long-term partnerships',
      ],
    },
    {
      title: 'Model Providers',
      desc: 'Capabilities are mature, but lack application scenarios and commercial closure',
      points: [
        'Model capabilities are commoditized; selling APIs alone has limited profit margins',
        'Lack of vertical application scenarios; difficult to build user stickiness',
        'Cannot directly reach end users; dependent on third-party distribution',
      ],
    },
  ];
  return (
    <section id="pain" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/6 border border-white/10 backdrop-blur-sm mb-6">
            <span>02</span>
            <span>/</span>
            <span>Pain Map</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            Four Key Pain Points: The Missing Platform
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mt-4">The missing middle in AI video ecosystem</div>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            Users, creators, brands, and model providers all have needs, but lack a unified platform to connect all participants.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
          {painPoints.map((pain, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/9 to-white/5 border border-white/14 backdrop-blur-xl rounded-2xl p-6 lg:p-8 group hover:border-blue-400/30 hover:from-white/12 transition-all"
            >
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{pain.title}</h3>
              <p className="text-sm sm:text-base text-slate-300 mb-4 font-semibold">{pain.desc}</p>
              <ul className="space-y-3">
                {pain.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                    <span className="text-blue-400 font-bold flex-shrink-0 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
