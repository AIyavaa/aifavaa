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

  const steps = [
    {
      title: zh ? '输入需求' : 'Input Idea',
      desc: zh ? '文字或语音，平台理解目标与风格。' : 'Text or voice — platform understands your goal and style.',
    },
    {
      title: zh ? '最优路径匹配' : 'Best Path Match',
      desc: zh ? '自动调用全网模型、工具与数据。' : 'Auto-selects the best models, tools and data across the web.',
    },
    {
      title: zh ? '5秒生成' : '5-Second Generate',
      desc: zh ? '无需登录，先获得可预览结果。' : 'No login needed — get a preview result instantly.',
    },
    {
      title: zh ? '修改 / 发布' : 'Edit / Publish',
      desc: zh ? '自然语言修改，发布时进入注册与收益设置。' : 'Natural language edits; register and set monetization on publish.',
    },
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

        {/* Steps: 从想法到发布 */}
        <div className="w-full max-w-3xl mt-2">
          <p className="text-[11px] text-slate-500 text-center mb-3 uppercase tracking-widest">
            {zh ? '先体验，再注册。用户只在发布、修改、商业化时进入账号与权益系统。' : 'Experience first, register later. Account required only for publishing, editing, or monetization.'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {steps.map((step, i) => (
              <div key={i} className="relative bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-left">
                {i < steps.length - 1 && (
                  <span className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-600 text-lg">→</span>
                )}
                <p className="text-white text-xs sm:text-sm font-bold mb-1">{step.title}</p>
                <p className="text-slate-400 text-[11px] sm:text-xs leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
