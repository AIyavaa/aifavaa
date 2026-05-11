import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Market from '@/components/Market';
import PainMap from '@/components/PainMap';
import Architecture from '@/components/Architecture';
import Competition from '@/components/Competition';
import WhoUses from '@/components/WhoUses';
import BusinessModel from '@/components/BusinessModel';
import Roadmap from '@/components/Roadmap';
import Team from '@/components/Team';
import PremiumProducts from '@/components/PremiumProducts';
import HowWeDoIt from '@/components/HowWeDoIt';
import Footer from '@/components/Footer';

export default function InvestorStory() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Grid background overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            maskImage: 'linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.08))',
          }}
        />
      </div>
      {/* Gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" style={{ left: '15%', top: '15%' }} />
        <div className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" style={{ right: '15%', top: '12%' }} />
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" style={{ left: '50%', bottom: '20%' }} />
      </div>
      <div className="relative z-10">
        <Navigation />
        <main className="pt-16 sm:pt-16">
          {/* 01 Hero - AI 输入框 + 平台标语 */}
          <Hero />
          {/* 02 市场机会 */}
          <Market />
          {/* 03 痛点地图 */}
          <PainMap />
          {/* 04 平台架构 */}
          <Architecture />
          {/* 05 竞争分析 */}
          <Competition />
          {/* 06 谁在用 */}
          <WhoUses />
          {/* 07 商业模式 */}
          <BusinessModel />
          {/* 08 发展路径 */}
          <Roadmap />
          {/* 09 我们是谁（产品+合伙人） */}
          <PremiumProducts />
          {/* 10 怎么实现（合伙人模式详解） */}
          <HowWeDoIt />
          {/* 创始团队 */}
          <Team />
        </main>
        <Footer />
      </div>
    </div>
  );
}
