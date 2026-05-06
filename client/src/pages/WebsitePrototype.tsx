import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  ChevronRight,
  Film,
  Globe,
  Layers3,
  Menu,
  MessageSquare,
  Network,
  PlayCircle,
  Shield,
  Sparkles,
  Store,
  Users,
  X,
  Wand2,
  Library,
  BarChart3,
  Workflow,
  HeartHandshake,
} from "lucide-react";

const NAV = [
  { label: "首页", en: "Home", key: "home" },
  { label: "平台", en: "Platform", key: "platform" },
  { label: "创作者", en: "Creators", key: "creators" },
  { label: "用户", en: "Users", key: "users" },
  { label: "生态合作", en: "Partners", key: "partners" },
  { label: "投资者", en: "Investors", key: "investors" },
];

const personaData = {
  users: {
    title: "用户",
    en: "For Users",
    lead: "发现更适合你的 AI 视频世界",
    desc: "看你想看的，发现更懂你的内容。基于兴趣标签与观看偏好，AIyavaa 帮你找到更适合你的 AI 视频，也让你参与改编、互动与共创。",
    cta: "进入内容世界",
    icon: PlayCircle,
    chips: ["兴趣推荐", "热门短剧", "互动观看", "改编共创"],
  },
  creators: {
    title: "创作者",
    en: "For Creators",
    lead: "表达自己，也连接市场",
    desc: "在这里创作、上架、接单、组队与合作，让表达不只停留在作品，也延伸到订单、关系与长期价值。",
    cta: "进入创作者中心",
    icon: Wand2,
    chips: ["创作工具", "作品上架", "商业订单", "组队协作"],
  },
  partners: {
    title: "生态合作伙伴",
    en: "For Ecosystem Partners",
    lead: "让能力被接入，让合作被发起",
    desc: "把你的模型、工具、合作方向、需求与创意提案接入平台，发起共创、组队与协作。不是申请合作，而是加入生态。",
    cta: "进入生态合作入口",
    icon: HeartHandshake,
    chips: ["模型接入", "工具合作", "共创提案", "需求发布"],
  },
  investors: {
    title: "投资人",
    en: "For Investors",
    lead: "看见当下价值，也看见未来路径",
    desc: "从平台逻辑、产品矩阵到资产沉淀，理解 AIyavaa 的长期可投性。投的不是某个产品，而是一个会持续长大的平台。",
    cta: "进入投资者入口",
    icon: BarChart3,
    chips: ["平台价值", "产品矩阵", "关键资产", "可投逻辑"],
  },
};

const productBlocks = [
  {
    key: "drama",
    title: "AI 短剧生产工作台",
    en: "Short Drama OS",
    icon: Film,
    desc: "结构诊断、中英双向原生化、分镜直出、爆款评分与标准化 SOP。",
    tags: ["剧本诊断", "原生改写", "分镜输出", "爆款评分"],
  },
  {
    key: "local",
    title: "本地生活商家增长控制台",
    en: "Local Commerce AI",
    icon: Store,
    desc: "服务门店和商家内容生产、活动营销、数字人导购与转化增长。",
    tags: ["活动日历", "商家模板", "数字人导购", "多平台分发"],
  },
  {
    key: "brand",
    title: "品牌需求与交易中枢",
    en: "Brand Trading Hub",
    icon: Briefcase,
    desc: "把品牌采购路径产品化：需求发布、创作者匹配、授权、交付与复购。",
    tags: ["需求发布", "创作者匹配", "版权授权", "交付验收"],
  },
  {
    key: "community",
    title: "内容展示与 OPC 社群层",
    en: "Showcase & Community",
    icon: MessageSquare,
    desc: "内容展示、共创任务、热门创作者与 OPC 社群一起构成增长飞轮。",
    tags: ["内容流", "共创任务", "社群榜单", "OPC Insights"],
  },
];

const investmentLayers = [
  ["创作者网络资产", "哪些创作者长期留在平台，哪些创作者具备持续商业化能力。"],
  ["内容与 IP 资产", "作品、角色、世界观、短剧与可持续授权内容。"],
  ["版权与交易规则资产", "谁掌握规则，谁就掌握行业秩序。"],
  ["多模型编排资产", "哪类任务适合什么模型，哪种路径效率最高、质量最稳。"],
  ["用户与品牌数据资产", "观看偏好、转化路径、需求模板与复购数据。"],
  ["品牌采购入口资产", "一旦形成采购习惯，切换成本会持续提高。"],
];

function cls(...arr: (string | boolean | undefined | null)[]) {
  return arr.filter(Boolean).join(" ");
}

function Glass({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cls(
        "rounded-[28px] border border-white/10 bg-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
      {children}
    </div>
  );
}

function HeroAction({ primary, children, onClick }: { primary?: boolean; children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cls(
        "rounded-2xl border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5",
        primary
          ? "border-white/10 bg-gradient-to-r from-indigo-400/25 to-cyan-300/20 text-white"
          : "border-white/10 bg-white/5 text-slate-100"
      )}
    >
      {children}
    </button>
  );
}

function Header({ route, setRoute }: { route: string; setRoute: (r: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[74px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 md:px-6 xl:px-8">
        <button onClick={() => setRoute("home")} className="flex items-center gap-3 text-left">
          <div className="relative h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-400 to-cyan-300 shadow-[0_0_28px_rgba(126,165,255,0.35)]">
            <div className="absolute inset-0.5 rounded-[14px] border border-white/25" />
          </div>
          <div>
            <div className="font-semibold tracking-[0.02em] text-white">AIyavaa</div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Website Prototype</div>
          </div>
        </button>

        <nav className="hidden items-center gap-2 xl:flex">
          {NAV.map((item) => (
            <button
              key={item.key}
              onClick={() => setRoute(item.key)}
              className={cls(
                "rounded-full border px-4 py-2 text-sm transition",
                route === item.key
                  ? "border-white/10 bg-white/5 text-white"
                  : "border-transparent text-slate-400 hover:border-white/10 hover:bg-white/5 hover:text-white"
              )}
            >
              {item.label}
              <span className="ml-2 text-[10px] uppercase tracking-[0.16em] text-slate-500">{item.en}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-2xl border border-white/10 bg-white/5 p-2.5 xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 xl:hidden"
          >
            <div className="space-y-2 px-4 py-4">
              {NAV.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setRoute(item.key);
                    setOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left"
                >
                  <div>
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500">{item.en}</div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HomePage({ setRoute }: { setRoute: (r: string) => void }) {
  const [activePersona, setActivePersona] = useState("creators");
  const persona = personaData[activePersona as keyof typeof personaData];
  const Icon = persona.icon;

  return (
    <div>
      <section className="relative overflow-hidden px-6 pb-14 pt-10 md:px-10 md:pb-18 md:pt-14">
        <div className="absolute left-[8%] top-[8%] h-64 w-64 rounded-full bg-indigo-400/18 blur-3xl" />
        <div className="absolute right-[10%] top-[10%] h-72 w-72 rounded-full bg-cyan-300/14 blur-3xl" />
        <div className="grid min-h-[calc(100vh-74px)] gap-8 xl:grid-cols-[1.04fr_0.96fr] xl:items-center">
          <div className="flex flex-col justify-center gap-6">
            <Eyebrow>AI Video Ecosystem Platform</Eyebrow>
            <div>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.065em] text-white md:text-7xl xl:text-[92px]">
                想法即现实
              </h1>
              <div className="mt-4 text-[15px] font-medium uppercase tracking-[0.24em] text-slate-500">Make imagination real</div>
              <div className="mt-8 max-w-3xl text-[28px] font-semibold leading-[1.35] tracking-[-0.04em] text-white md:text-[38px]">
                人人都是 AIGC 视频创作者
              </div>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400 md:text-xl">
                AIyavaa，帮你把想法变成作品，把作品变成价值。
              </p>
              <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Turn ideas into works, and works into value
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <HeroAction primary onClick={() => setRoute("platform")}>进入 AIyavaa</HeroAction>
              <HeroAction onClick={() => setRoute("investors")}>查看平台</HeroAction>
            </div>
          </div>

          <div className="grid gap-5 self-center">
            <Glass className="p-6 md:p-7">
              <Eyebrow>首页主叙事 / Home Narrative</Eyebrow>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">平台是底座，产品是抓手，社群是飞轮。</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                官网不是说明书，而是一条被设计过的理解路径：先让人认同你，再理解你，最后进入属于自己的 AIyavaa。
              </p>
            </Glass>

            <Glass className="p-6 md:p-7">
              <Eyebrow>首页关键信息 / Key Signals</Eyebrow>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {[
                  ["平台身份", "创作、交易、交付与规则平台"],
                  ["网站用途", "合作伙伴、用户、品牌、投资人与社群"],
                  ["未来逻辑", "不是固定产品，而是围绕人持续进化"],
                  ["核心信念", "让想法成为作品，让作品产生价值"],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs uppercase tracking-[0.14em] text-slate-400">{t}</div>
                    <div className="mt-2 text-sm leading-7 text-slate-200">{d}</div>
                  </div>
                ))}
              </div>
            </Glass>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 md:px-10 md:pb-14">
        <Glass className="p-6 md:p-8 xl:p-10">
          <Eyebrow>Who is AIyavaa for?</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">平台服务四类核心角色。</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {Object.entries(personaData).map(([key, p]) => (
              <button
                key={key}
                onClick={() => setActivePersona(key)}
                className={cls(
                  "rounded-2xl border px-4 py-2.5 text-sm font-medium transition",
                  activePersona === key
                    ? "border-indigo-300/30 bg-indigo-300/15 text-white"
                    : "border-white/10 bg-white/[0.04] text-slate-400 hover:text-white"
                )}
              >
                {p.title}
                <span className="ml-2 text-[10px] uppercase tracking-[0.14em] text-slate-500">{p.en}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePersona}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="flex flex-col gap-5">
                <div>
                  <div className="mb-3 inline-flex rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">{persona.lead}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-8 text-slate-400 md:text-base">{persona.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {persona.chips.map((chip) => (
                    <span key={chip} className="rounded-full border border-indigo-300/20 bg-indigo-300/10 px-3 py-1.5 text-xs text-indigo-100">
                      {chip}
                    </span>
                  ))}
                </div>
                <div>
                  <HeroAction primary onClick={() => setRoute(activePersona)}>{persona.cta}</HeroAction>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
                <PreviewScene type={activePersona} />
              </div>
            </motion.div>
          </AnimatePresence>
        </Glass>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-20">
        <Glass className="p-6 md:p-8 xl:p-10">
          <Eyebrow>Product Matrix / 产品矩阵</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">四个产品，围绕不同场景与人群。</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {productBlocks.map((block) => {
              const BlockIcon = block.icon;
              return (
                <div key={block.key} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                    <BlockIcon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-base font-semibold text-white">{block.title}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-500">{block.en}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{block.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {block.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Glass>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-20">
        <div className="grid gap-5 xl:grid-cols-3">
          {[
            ["进入创作者中心", "开始创作、上架、接单与组队", "creators", Wand2],
            ["进入平台", "开始观看、创作、组队与共创", "users", Users],
            ["查看合作", "了解能力、发布需求、获得交付", "partners", HeartHandshake],
            ["进入投资者入口", "查看平台价值、产品矩阵与可投逻辑", "investors", BarChart3],
          ].map(([title, desc, routeKey, NavIcon]) => {
            const IconComp = NavIcon as React.ComponentType<{ className?: string }>;
            return (
            <button key={title as string} onClick={() => setRoute(routeKey as string)} className="text-left">
              <Glass className="h-full p-6 md:p-7 transition hover:-translate-y-1">
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                  <IconComp className="h-5 w-5 text-white" />
                </div>
                <div className="text-2xl font-semibold tracking-[-0.03em] text-white">{title as string}</div>
                <p className="mt-3 text-sm leading-7 text-slate-400">{desc as string}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-200">
                  继续进入 <ArrowRight className="h-4 w-4" />
                </div>
              </Glass>
            </button>
          );
          })}
        </div>
      </section>
    </div>
  );
}

function PreviewScene({ type }: { type: string }) {
  if (type === "users") {
    return (
      <>
        <MockCard title="内容推荐流" subtitle="AI 内容 / 热门短剧 / 品牌创意" chips={["兴趣标签", "推荐流"]} />
        <MockCard title="互动入口" subtitle="改编 / 共创 / 收藏 / 关注" chips={["共创", "互动观看"]} />
      </>
    );
  }
  if (type === "creators") {
    return (
      <>
        <MockCard title="创作工具入口" subtitle="脚本 / 分镜 / 视频工作流" chips={["生产", "创作工具"]} />
        <MockCard title="商业订单入口" subtitle="平台需求 / 接单 / 组队协作" chips={["订单", "市场需求"]} />
      </>
    );
  }
  if (type === "partners") {
    return (
      <>
        <MockCard title="合作需求填写" subtitle="模型 / 工具 / AI 视频需求 / 共创提案" chips={["模型接入", "工具合作"]} />
        <MockCard title="合作板块入口" subtitle="需求 / 组队 / 联合开发 / 共创" chips={["组队", "能力上架"]} />
      </>
    );
  }
  return (
    <>
      <MockCard title="AIyavaa 当前页面结构" subtitle="网站逻辑 / 产品矩阵 / 角色入口" chips={["网站结构", "平台价值"]} />
      <MockCard title="投资平台的价值" subtitle="为什么投平台，而不是单点产品" chips={["可投逻辑", "长期资产"]} />
    </>
  );
}

function MockCard({ title, subtitle, chips }: { title: string; subtitle: string; chips: string[] }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-slate-950/35 p-4">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      <div className="mb-4 h-3 w-full rounded-full bg-white/10" />
      <div className="mb-4 h-3 w-2/3 rounded-full bg-white/10" />
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="mt-2 text-sm leading-7 text-slate-400">{subtitle}</div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span key={chip} className="rounded-full border border-indigo-300/20 bg-indigo-300/10 px-2.5 py-1 text-[11px] text-indigo-100">
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHero({ eyebrow, title, en, desc, actions = [] }: {
  eyebrow: string;
  title: string;
  en: string;
  desc: string;
  actions?: { label: string; primary?: boolean; onClick: () => void }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 py-14 md:px-10 md:py-18">
      <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-indigo-400/14 blur-3xl" />
      <div className="absolute left-[-70px] bottom-[-90px] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="relative z-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-white md:text-6xl">{title}</h1>
        <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-slate-500">{en}</div>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">{desc}</p>
        {actions.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-3">
            {actions.map((action) => (
              <HeroAction key={action.label} primary={action.primary} onClick={action.onClick}>
                {action.label}
              </HeroAction>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function PlatformPage({ setRoute }: { setRoute: (r: string) => void }) {
  return (
    <div>
      <SectionHero
        eyebrow="Platform / 平台"
        title="AIyavaa 是 AI 视频时代的创作、交易、交付与规则平台。"
        en="Creation, transaction, delivery and trust platform for the AI video era"
        desc="连接用户、创作者、品牌与合作伙伴，让 AI 视频从能生成走向能成交、能交付、能持续进化。"
        actions={[
          { label: "查看创作者入口", onClick: () => setRoute("creators"), primary: true },
          { label: "进入投资者入口", onClick: () => setRoute("investors") },
        ]}
      />

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Three Centers + Three Middle Platforms</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">平台不是工具集合，而是行业组织系统。</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            三中心负责人与交易关系，三中台负责能力与秩序。两者结合，AIyavaa 才会从工具层升级为平台层。
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          <Glass className="p-6 md:p-8 xl:p-10">
            <div className="grid gap-4">
              <PlatformBand
                title="三中心 / Three Centers"
                items={[
                  [Users, "用户消费中心", "内容发现、互动参与、内容消费、社区沉淀"],
                  [Sparkles, "创作者生产中心", "创作、上架、接单、收益与成长体系"],
                  [Building2, "品牌交易中心", "需求发布、匹配、采购、交付与复购"],
                ]}
              />
              <PlatformBand
                title="三中台 / Three Middle Platforms"
                items={[
                  [Bot, "模型能力中台", "模型聚合、多模型编排、一键调用"],
                  [Library, "版权交易中台", "确权、授权、分成、结算、商用边界"],
                  [BarChart3, "管理大脑中台", "推荐、匹配、评级、治理与风控"],
                ]}
              />
            </div>
          </Glass>

          <Glass className="p-6 md:p-8 xl:p-10">
            <Eyebrow>What the platform actually does</Eyebrow>
            <div className="mt-5 space-y-3">
              {[
                ["创作", "让想法变成作品。"],
                ["交易", "让作品连接真实需求与订单。"],
                ["交付", "让能力从生成走向可复用、可采购、可复购。"],
                ["规则", "定义版权、信任、数据安全与合作边界。"],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-base font-semibold text-white">{t}</div>
                  <div className="mt-1 text-sm leading-7 text-slate-400">{d}</div>
                </div>
              ))}
            </div>
          </Glass>
        </div>
      </section>
    </div>
  );
}

function PlatformBand({ title, items }: { title: string; items: [React.ComponentType<{ className?: string }>, string, string][] }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
      <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-slate-500">{title}</div>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(([ItemIcon, t, d]) => (
          <div key={t} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
            <div className="mb-3 inline-flex rounded-2xl border border-white/10 bg-white/[0.05] p-3">
              <ItemIcon className="h-5 w-5 text-white" />
            </div>
            <div className="text-base font-semibold text-white">{t}</div>
            <div className="mt-2 text-sm leading-7 text-slate-400">{d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UsersPage() {
  return (
    <div>
      <SectionHero
        eyebrow="Users / 用户"
        title="发现更适合你的 AI 视频世界"
        en="Discover an AI video world shaped by your interests"
        desc="看你想看的，发现更懂你的内容。基于兴趣标签与观看偏好，AIyavaa 帮你找到更适合你的 AI 视频，也让你参与改编、互动与共创。"
      />

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-5 xl:grid-cols-[1.02fr_0.98fr]">
          <Glass className="p-6 md:p-8 xl:p-10">
            <Eyebrow>AI Video Feed</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">各类 AI 内容视频，按你的兴趣被重新组织。</h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-400 md:text-base">
              不是无差别内容流，而是基于风格、题材、人物、情绪、品牌偏好与观看路径形成的个性化 AI 视频世界。
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["短剧", "品牌故事", "角色内容", "未来影像", "高概念创意", "互动内容"].map((x) => (
                <span key={x} className="rounded-full border border-indigo-300/20 bg-indigo-300/10 px-3 py-1.5 text-xs text-indigo-100">
                  {x}
                </span>
              ))}
            </div>
          </Glass>
          <div className="grid gap-5 md:grid-cols-2">
            <MockCard title="推荐内容流" subtitle="兴趣标签 / 观看偏好 / 个性化推荐" chips={["For You", "标签推荐"]} />
            <MockCard title="热门 AI 视频" subtitle="趋势内容 / 热门创作者 / 品牌创意" chips={["Trending", "热点专区"]} />
            <MockCard title="互动与改编" subtitle="改编结局 / 共创挑战 / 收藏与关注" chips={["共创", "互动观看"]} />
            <MockCard title="进入内容世界" subtitle="从观看者变成参与者，再变成共创者" chips={["参与感", "归属感"]} />
          </div>
        </div>
      </section>
    </div>
  );
}

function CreatorsPage() {
  return (
    <div>
      <SectionHero
        eyebrow="Creators / 创作者"
        title="表达自己，也连接市场"
        en="Create what you want, connect with real demand"
        desc="在这里创作、上架、接单、组队与合作，让表达不只停留在作品，也延伸到订单、关系与长期价值。"
      />

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Creator Center</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">一个入口，两条核心路径：生产与订单。</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            这页本质上就是两件事：一个是创作工具入口，一个是 AI 视频商业订单入口。
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          <Glass className="p-6 md:p-8 xl:p-10">
            <Eyebrow>Path 01 / Production</Eyebrow>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">创作工具入口</h3>
            <p className="mt-3 text-sm leading-8 text-slate-400 md:text-base">
              短剧生产工具、AI 视频创作工具、模型调用、脚本与分镜工作流、作品上架与个人主页，构成创作者的生产系统。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <MockCard title="脚本与分镜" subtitle="结构诊断 / 原生改写 / 分镜输出" chips={["脚本", "分镜"]} />
              <MockCard title="模型与创作工具" subtitle="生成、编辑、风格化、上架" chips={["生成", "编辑"]} />
            </div>
          </Glass>

          <Glass className="p-6 md:p-8 xl:p-10">
            <Eyebrow>Path 02 / Orders</Eyebrow>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">商业订单入口</h3>
            <p className="mt-3 text-sm leading-8 text-slate-400 md:text-base">
              平台视频需求订单、品牌定制需求、内容合作项目、接单与报价、组队协作，让创作与市场真正连通。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <MockCard title="订单市场" subtitle="平台需求 / 品牌订单 / 报价与接单" chips={["订单", "报价"]} />
              <MockCard title="组队与协作" subtitle="创作者协作 / 联合创作 / 项目执行" chips={["组队", "合作"]} />
            </div>
          </Glass>
        </div>
      </section>
    </div>
  );
}

function PartnersPage() {
  return (
    <div>
      <SectionHero
        eyebrow="Partners / 生态合作伙伴"
        title="让能力被接入，让合作被发起"
        en="Connect capabilities and start collaboration"
        desc="把你的模型、工具、合作方向、需求与创意提案接入平台，发起共创、组队与协作。不是申请合作，而是加入生态。"
      />

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-5 xl:grid-cols-[0.94fr_1.06fr]">
          <Glass className="p-6 md:p-8 xl:p-10">
            <Eyebrow>合作类型 / Partnership Types</Eyebrow>
            <div className="mt-5 space-y-3">
              {[
                ["模型合作", "接入模型能力、API 或工作流能力。"],
                ["工具合作", "接入你的工具、编辑能力与生产模块。"],
                ["需求合作", "发布项目需求、合作提案与共创方向。"],
                ["联合共创", "组队、联合开发、联合活动与共同增长。"],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-base font-semibold text-white">{t}</div>
                  <div className="mt-1 text-sm leading-7 text-slate-400">{d}</div>
                </div>
              ))}
            </div>
          </Glass>

          <Glass className="p-6 md:p-8 xl:p-10">
            <Eyebrow>合作需求填写 / Request Form</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">展示合作需求填写，而不是静态说明。</h2>
            <p className="mt-4 text-sm leading-8 text-slate-400 md:text-base">
              第三层页面建议直接展示合作表单逻辑：模型、工具、AI 视频需求、合作方向、共创提案、组队意向，而不是再写大段说明文字。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <MockCard title="合作类型" subtitle="模型 / 工具 / 内容 / 需求 / 联合开发" chips={["合作类型", "选择"]} />
              <MockCard title="合作内容" subtitle="你的能力 / 需求 / 提案 / 想法" chips={["表单", "提案"]} />
              <MockCard title="共创与组队" subtitle="是否需要组队、共创与联合推进" chips={["共创", "组队"]} />
              <MockCard title="提交入口" subtitle="发起连接，进入生态合作流" chips={["提交", "连接"]} />
            </div>
          </Glass>
        </div>
      </section>
    </div>
  );
}

function InvestorsPage() {
  return (
    <div>
      <SectionHero
        eyebrow="Investors / 投资人"
        title="看见当下价值，也看见未来路径"
        en="See today's value and tomorrow's path"
        desc="从平台逻辑、产品矩阵到资产沉淀，理解 AIyavaa 的长期可投性。这里看到的不是某个单点产品，而是一个会持续长大的平台。"
      />

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-5 xl:grid-cols-[1.04fr_0.96fr]">
          <Glass className="p-6 md:p-8 xl:p-10">
            <Eyebrow>当前 AIyavaa / Current AIyavaa</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">先看平台结构，再看投资价值。</h2>
            <p className="mt-4 text-sm leading-8 text-slate-400 md:text-base">
              投资人第三层页面不应该先看功能，而应该先看到目前 AIyavaa 的网站页面结构、平台价值、产品矩阵与未来扩张路径。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <MockCard title="网站页面结构" subtitle="首页 / 平台 / 产品 / 解决方案 / 社群 / 投资者" chips={["结构", "全局"]} />
              <MockCard title="平台价值" subtitle="创作、交易、交付、规则与长期入口" chips={["平台", "价值"]} />
              <MockCard title="产品矩阵" subtitle="短剧 / 本地生活 / 品牌交易 / 社群增长" chips={["矩阵", "扩张"]} />
              <MockCard title="未来路径" subtitle="高溢价产品、关键资产、投资逻辑" chips={["资产", "可投性"]} />
            </div>
          </Glass>

          <Glass className="p-6 md:p-8 xl:p-10">
            <Eyebrow>投资这个平台的价值 / Why invest</Eyebrow>
            <div className="space-y-3">
              {[
                ["不是单一工具机会", "投的不是单点功能，而是平台层的统一入口。"],
                ["不是普通内容站", "平台同时承接创作、交易、交付与规则。"],
                ["产品矩阵可扩张", "围绕人和场景，平台不断长出新产品。"],
                ["关键资产持续沉淀", "创作者网络、内容与 IP、规则、数据与品牌采购入口。"],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-base font-semibold text-white">{t}</div>
                  <div className="mt-1 text-sm leading-7 text-slate-400">{d}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Eyebrow>关键资产层 / Key Asset Layers</Eyebrow>
              <div className="mt-5 space-y-3">
                {investmentLayers.map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-sm font-semibold text-white">{t}</div>
                    <div className="mt-1 text-xs leading-6 text-slate-400">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </Glass>
        </div>
      </section>
    </div>
  );
}

export default function AIyavaaWebsitePrototype() {
  const [route, setRoute] = useState("home");

  const CurrentPage = useMemo(() => {
    const map: Record<string, React.ReactNode> = {
      home: <HomePage setRoute={setRoute} />,
      platform: <PlatformPage setRoute={setRoute} />,
      users: <UsersPage />,
      creators: <CreatorsPage />,
      partners: <PartnersPage />,
      investors: <InvestorsPage />,
    };
    return map[route] || <HomePage setRoute={setRoute} />;
  }, [route]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_12%_12%,rgba(126,165,255,0.16),transparent_28%),radial-gradient(circle_at_88%_10%,rgba(81,224,211,0.12),transparent_26%),radial-gradient(circle_at_50%_78%,rgba(194,141,255,0.12),transparent_32%),linear-gradient(180deg,#040b14,#08111f_48%,#07101c_100%)] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.05))]" />
      <Header route={route} setRoute={setRoute} />
      <main className="mx-auto max-w-[1440px] pb-16">{CurrentPage}</main>
    </div>
  );
}
