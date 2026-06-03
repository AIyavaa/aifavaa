import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Intent decomposition demo steps
const INTENT_DEMO_ZH = [
  { layer: '意图解构', label: '理解目标', desc: '创作一首融合古风与电子音乐的短视频背景曲', color: 'text-cyan-300', bg: 'bg-cyan-500/10 border-cyan-400/30' },
  { layer: '路径匹配', label: '最优模型路由', desc: '调用音乐生成模型 × 视频合成模型 × 风格迁移引擎', color: 'text-blue-300', bg: 'bg-blue-500/10 border-blue-400/30' },
  { layer: '资产生成', label: '5秒生成', desc: '输出可预览的音视频资产，无需登录', color: 'text-violet-300', bg: 'bg-violet-500/10 border-violet-400/30' },
  { layer: '确权上链', label: '创作即确权', desc: '智能合约自动上链，建立唯一数字所有权', color: 'text-emerald-300', bg: 'bg-emerald-500/10 border-emerald-400/30' },
];

const INTENT_DEMO_EN = [
  { layer: 'Intent Parsing', label: 'Understand Goal', desc: 'Create a short video BGM blending ancient Chinese style with electronic music', color: 'text-cyan-300', bg: 'bg-cyan-500/10 border-cyan-400/30' },
  { layer: 'Path Routing', label: 'Best Model Match', desc: 'Routes to music generation × video synthesis × style transfer engine', color: 'text-blue-300', bg: 'bg-blue-500/10 border-blue-400/30' },
  { layer: 'Asset Creation', label: '5-Second Output', desc: 'Preview-ready audio-visual asset — no login required', color: 'text-violet-300', bg: 'bg-violet-500/10 border-violet-400/30' },
  { layer: 'On-Chain Ownership', label: 'Create = Own', desc: 'Smart contract auto-registers on-chain, establishing unique digital ownership', color: 'text-emerald-300', bg: 'bg-emerald-500/10 border-emerald-400/30' },
];

export default function Hero() {
  const { language } = useLanguage();
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const recognitionRef = useRef<any>(null);

  const zh = language === 'zh';
  const INTENT_DEMO = zh ? INTENT_DEMO_ZH : INTENT_DEMO_EN;

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
    setActiveStep(0);
    const interval = setInterval(() => {
      setActiveStep(prev => {
        if (prev === null || prev >= INTENT_DEMO.length - 1) {
          clearInterval(interval);
          setIsGenerating(false);
          return INTENT_DEMO.length - 1;
        }
        return prev + 1;
      });
    }, 700);
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-blue-500/6 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-violet-500/6 rounded-full blur-[100px]" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-4xl mx-auto py-24 sm:py-32">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-200 bg-cyan-500/10 border border-cyan-400/20 backdrop-blur-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{zh ? '全球首个 AI 万能操作系统' : 'World\'s First AI Universal Operating System'}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white mb-3">
          AI<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">favaa</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg font-semibold text-slate-300 mb-2">
          {zh ? 'AI Universal OS · 一句话，驱动一切数字生产力' : 'AI Universal OS · One sentence drives all digital productivity'}
        </p>
        <p className="text-sm text-slate-400 mb-8 max-w-xl">
          {zh
            ? '基于智能意图解构引擎（IDE），将 AI 创作、数字资产确权、全球市场交易与智能财富管理融为一体。'
            : 'Powered by the Intelligent Intent Decomposition Engine (IDE) — unifying AI creation, digital asset ownership, global marketplace trading, and intelligent wealth management.'}
        </p>

        {/* Input Box */}
        <div className="w-full max-w-2xl mb-8">
          <div className="relative flex items-center bg-white/8 border border-white/20 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10 focus-within:border-cyan-400/50 transition-all">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder={zh ? '输入你想要创作的任何内容，AI 智能意图解构引擎为你匹配最优路径...' : 'Enter anything you want to create — the IDE engine routes the optimal path...'}
              className="flex-1 bg-transparent text-white placeholder-slate-500 px-5 py-4 text-sm sm:text-base outline-none"
            />
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
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !inputValue.trim()}
              className="flex-shrink-0 mx-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-cyan-500/20"
            >
              {isGenerating
                ? (zh ? '解构中...' : 'Processing...')
                : (zh ? '立即创作' : 'Create Now')}
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">
            {zh
              ? '先体验，再注册 · 发布时进入确权与收益系统'
              : 'Experience first, register later · Enter ownership & earnings system at publish'}
          </p>
        </div>

        {/* Intent Decomposition Demo */}
        <div className="w-full max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 text-center">
            {zh ? '智能意图解构引擎 (IDE) 交互演示' : 'Intelligent Intent Decomposition Engine (IDE) Demo'}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {INTENT_DEMO.map((step, i) => (
              <div
                key={i}
                className={`relative border rounded-xl p-3 text-left transition-all duration-500 ${step.bg} ${
                  activeStep !== null && i <= activeStep
                    ? 'opacity-100 scale-100'
                    : activeStep !== null
                    ? 'opacity-30 scale-95'
                    : 'opacity-70 hover:opacity-90'
                }`}
              >
                {activeStep !== null && i <= activeStep && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-current animate-pulse" style={{ color: 'inherit' }} />
                )}
                <div className={`text-[10px] font-black uppercase tracking-widest mb-1 ${step.color}`}>{step.layer}</div>
                <div className="text-xs font-bold text-white mb-1">{step.label}</div>
                <div className="text-[10px] text-slate-400 leading-snug">{step.desc}</div>
              </div>
            ))}
          </div>
          {activeStep === INTENT_DEMO.length - 1 && (
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {zh ? '创作完成 · 资产已确权上链 · 可交易 · 可增值' : 'Created · Asset On-Chain · Ready to Trade · Ready to Earn'}
              </div>
            </div>
          )}
        </div>

        {/* Bottom stats */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
          {(zh ? [
            { value: '92.4%', label: '智能意图识别率' },
            { value: '<150ms', label: '四层解构单层时延' },
            { value: '100%', label: '数字资产链上确权' },
            { value: '10x', label: '数字财富增值效能' },
          ] : [
            { value: '92.4%', label: 'Intent Recognition Rate' },
            { value: '<150ms', label: 'Per-Layer Decomposition Latency' },
            { value: '100%', label: 'On-Chain Asset Ownership' },
            { value: '10x', label: 'Digital Wealth Multiplier' },
          ]).map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-2xl font-black text-white">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
