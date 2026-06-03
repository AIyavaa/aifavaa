import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Market from '@/components/Market';
import PainMap from '@/components/PainMap';
import Architecture from '@/components/Architecture';
import Competition from '@/components/Competition';
import WhoUses from '@/components/WhoUses';
import BusinessModel from '@/components/BusinessModel';
import PlatformModules from '@/components/PlatformModules';
import Team from '@/components/Team';
import HowWeDoIt from '@/components/HowWeDoIt';
import Footer from '@/components/Footer';
import SectionLock from '@/components/SectionLock';

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
          {/* 首页 - AI 万能操作系统 + 智能意图交互演示 */}
          <Hero />
          {/* 01 市场机会 - 四位一体市场数据 */}
          <Market />
          {/* 02 核心痛点 - 创造/确权/交易/增值四维 */}
          <PainMap />
          {/* 03 平台架构 - 需要解锁 */}
          <SectionLock sectionId="architecture">
            <Architecture />
          </SectionLock>
          {/* 04 竞争分析 - AIFavaa独有优势可视化 */}
          <Competition />
          {/* 05 谁在用 - 需要解锁 */}
          <SectionLock sectionId="who-uses">
            <WhoUses />
          </SectionLock>
          {/* 06 商业模式 - 需要解锁 */}
          <SectionLock sectionId="business">
            <BusinessModel />
          </SectionLock>
          {/* 07 我们是谁 - 需要解锁 */}
          <SectionLock sectionId="platform-modules">
            <PlatformModules />
          </SectionLock>
          {/* 创始团队 */}
          <Team />
          {/* 09 怎么实现 - 需要解锁 */}
          <SectionLock sectionId="how-we-do-it">
            <HowWeDoIt />
          </SectionLock>
        </main>
        <Footer />
      </div>
    </div>
  );
}
