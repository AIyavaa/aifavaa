import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const DEMO_VIDEOS = [
  'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
  'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
];

export default function Hero() {
  const { language } = useLanguage();
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const recognitionRef = useRef<any>(null);

  const zh = language === 'zh';

  const handleVoice = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert(zh ? '您的浏览器不支持语音输入' : 'Your browser does not support voice input');
      return;
    }
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = zh ? 'zh-CN' : 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (e: any) => {
      setInputValue(e.results[0][0].transcript);
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  };

  const handleGenerate = () => {
    if (!inputValue.trim()) return;
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
  };

  const steps = zh ? [
    { num: '01', label: '输入需求', desc: '文字或语音，平台理解目标与风格。' },
    { num: '02', label: '最优路径匹配', desc: '自动调用全网模型、工具与数据。' },
    { num: '03', label: '5秒生成', desc: '无需登录，先获得可预览结果。' },
    { num: '04', label: '修改 / 发布', desc: '自然语言修改，发布时进入注册与收益设置。' },
  ] : [
    { num: '01', label: 'Input Your Idea', desc: 'Text or voice — the platform understands your goal and style.' },
    { num: '02', label: 'Best Path Matching', desc: 'Auto-routes through the best global models, tools and data.' },
    { num: '03', label: '5-Second Generation', desc: 'No login needed — get a previewable result instantly.' },
    { num: '04', label: 'Edit / Publish', desc: 'Natural language edits; register and set up monetization at publish.' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background Strip - Top */}
      <div className="absolute inset-x-0 top-0 h-[28%] overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950 z-10" />
        <video
          autoPlay muted loop playsInline
          className="w-full h-full object-cover opacity-50"
          src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
        />
        {/* AI video cards overlay */}
        <div className="absolute inset-0 z-20 flex items-center gap-3 px-4 overflow-hidden">
          {[
            { label: zh ? '城市夜景 · 科技感' : 'City Night · Tech Vibe', time: '0:05' },
            { label: zh ? '创意工作室 · 动态' : 'Creative Studio · Motion', time: '0:05' },
            { label: zh ? '品牌广告 · 极简' : 'Brand Ad · Minimal', time: '0:05' },
            { label: zh ? '互动剧情 · 沉浸' : 'Interactive Story · Immersive', time: '0:05' },
          ].map((v, i) => (
            <div key={i} className="flex-shrink-0 w-28 sm:w-36 h-16 sm:h-20 rounded-xl border border-white/20 bg-black/40 backdrop-blur-sm flex flex-col justify-end p-2 overflow-hidden relative">
              <div className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">LIVE</div>
              <div className="text-white text-[10px] font-semibold leading-tight truncate">{v.label}</div>
              <div className="text-slate-400 text-[9px]">{v.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Background Strip - Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[22%] overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/40 to-slate-950 z-10" />
        <video
          autoPlay muted loop playsInline
          className="w-full h-full object-cover opacity-40"
          src="https://videos.pexels.com/video-files/4625472/4625472-uhd_2560_1440_25fps.mp4"
        />
        <div className="absolute inset-0 z-20 flex items-center gap-3 px-4 overflow-hidden">
          {[
            { label: zh ? '美食探店 · 4K' : 'Food Discovery · 4K', time: '0:05' },
            { label: zh ? '旅行 Vlog · 航拍' : 'Travel Vlog · Aerial', time: '0:05' },
            { label: zh ? '科技评测 · 专业' : 'Tech Review · Pro', time: '0:05' },
            { label: zh ? '音乐 MV · 创意' : 'Music MV · Creative', time: '0:05' },
          ].map((v, i) => (
            <div key={i} className="flex-shrink-0 w-28 sm:w-36 h-16 sm:h-20 rounded-xl border border-white/20 bg-black/40 backdrop-blur-sm flex flex-col justify-end p-2 overflow-hidden relative">
              <div className="absolute top-1.5 right-1.5 bg-cyan-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">AI</div>
              <div className="text-white text-[10px] font-semibold leading-tight truncate">{v.label}</div>
              <div className="text-slate-400 text-[9px]">{v.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-3xl mx-auto py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-200 bg-cyan-500/10 border border-cyan-400/20 backdrop-blur-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{zh ? '全网首发 · AI 原生视频内容平台' : 'World First · AI-Native Video Content Platform'}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white mb-3">
          {zh ? (
            <>AI<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">yavaa</span></>
          ) : (
            <>AI<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">yavaa</span></>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl font-semibold text-slate-300 mb-8">
          {zh ? '开启 AGI 新纪元' : 'Entering the AGI New Era'}
        </p>

        {/* Input Box */}
        <div className="w-full max-w-2xl mb-6">
          <div className="relative flex items-center bg-white/8 border border-white/20 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 focus-within:border-cyan-400/50 transition-all">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder={zh ? '描述你想要的视频，AI 帮你生成 5 秒精彩...' : 'Describe your video idea, AI generates a 5-second clip...'}
              className="flex-1 bg-transparent text-white placeholder-slate-500 px-5 py-4 text-sm sm:text-base outline-none"
            />
            {/* Voice Button */}
            <button
              onClick={handleVoice}
              className={`flex-shrink-0 mx-1 p-3 rounded-xl transition-all ${
                isListening
                  ? 'bg-red-500/30 border border-red-400/50 text-red-300 animate-pulse'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
              title={zh ? '语音输入' : 'Voice input'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !inputValue.trim()}
              className="flex-shrink-0 mx-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-cyan-500/20"
            >
              {isGenerating
                ? (zh ? '生成中...' : 'Generating...')
                : (zh ? '生成视频' : 'Generate')}
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">
            {zh
              ? '无需登录即可生成 · 调用全网最优 AI 路径 · 5 秒视频即时呈现'
              : 'No login required · Best AI path matching · 5-second video instantly'}
          </p>
        </div>

        {/* Steps: From Idea to Publish */}
        <div className="w-full max-w-3xl">
          <div className="flex items-start gap-1 sm:gap-2 justify-center flex-wrap sm:flex-nowrap">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start gap-1 sm:gap-2 min-w-0">
                <div className="flex flex-col items-center min-w-[72px] sm:min-w-[100px] bg-white/6 border border-white/12 rounded-2xl px-3 py-3 text-left">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{s.num}</span>
                  <span className="text-xs sm:text-sm font-black text-white leading-tight mb-1">{s.label}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 leading-snug">{s.desc}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex items-center pt-6 flex-shrink-0">
                    <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3 text-center">
            {zh ? '先体验，再注册。用户只在发布、修改、商业化时进入账号与权益系统。' : 'Experience first, register later. Users only enter the account & rights system when publishing, editing, or monetizing.'}
          </p>
        </div>
      </div>
    </section>
  );
}
