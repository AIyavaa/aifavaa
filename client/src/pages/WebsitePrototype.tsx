import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  ChevronRight,
  Film,
  HeartHandshake,
  Library,
  Menu,
  MessageSquare,
  Bot,
  PlayCircle,
  Sparkles,
  Store,
  Users,
  Wand2,
  X,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

// ─── i18n ────────────────────────────────────────────────────────────────────

const t = {
  zh: {
    brand: "AIyavaa",
    brandSub: "网站原型",
    nav: {
      home: "首页",
      platform: "平台",
      creators: "创作者",
      users: "用户",
      partners: "生态合作",
      investors: "投资者",
    },
    home: {
      eyebrow: "AI 视频生态平台",
      h1: "想法即现实",
      h1sub: "人人都是 AIGC 视频创作者",
      desc: "AIyavaa，帮你把想法变成作品，把作品变成价值。",
      cta1: "进入 AIyavaa",
      cta2: "查看平台",
      narrativeEyebrow: "首页主叙事",
      narrativeTitle: "平台是底座，产品是抓手，社群是飞轮。",
      narrativeDesc: "官网不是说明书，而是一条被设计过的理解路径：先让人认同你，再理解你，最后进入属于自己的 AIyavaa。",
      signalsEyebrow: "首页关键信息",
      signals: [
        ["平台身份", "创作、交易、交付与规则平台"],
        ["网站用途", "合作伙伴、用户、品牌、投资人与社群"],
        ["未来逻辑", "不是固定产品，而是围绕人持续进化"],
        ["核心信念", "让想法成为作品，让作品产生价值"],
      ],
      personaEyebrow: "平台服务四类核心角色",
      personaTitle: "平台服务四类核心角色。",
      productEyebrow: "产品矩阵",
      productTitle: "四个产品，围绕不同场景与人群。",
      continue: "继续进入",
      navCards: [
        ["进入创作者中心", "开始创作、上架、接单与组队", "creators"],
        ["进入平台", "开始观看、创作、组队与共创", "users"],
        ["查看合作", "了解能力、发布需求、获得交付", "partners"],
        ["进入投资者入口", "查看平台价值、产品矩阵与可投逻辑", "investors"],
      ],
    },
    platform: {
      eyebrow: "平台",
      title: "AIyavaa 是 AI 视频时代的创作、交易、交付与规则平台。",
      desc: "连接用户、创作者、品牌与合作伙伴，让 AI 视频从能生成走向能成交、能交付、能持续进化。",
      cta1: "查看创作者入口",
      cta2: "进入投资者入口",
      bandEyebrow: "三中心 + 三中台",
      bandTitle: "平台不是工具集合，而是行业组织系统。",
      bandDesc: "三中心负责人与交易关系，三中台负责能力与秩序。两者结合，AIyavaa 才会从工具层升级为平台层。",
      centers: "三中心",
      midPlatforms: "三中台",
      centerItems: [
        ["用户消费中心", "内容发现、互动参与、内容消费、社区沉淀"],
        ["创作者生产中心", "创作、上架、接单、收益与成长体系"],
        ["品牌交易中心", "需求发布、匹配、采购、交付与复购"],
      ],
      midItems: [
        ["模型能力中台", "模型聚合、多模型编排、一键调用"],
        ["版权交易中台", "确权、授权、分成、结算、商用边界"],
        ["管理大脑中台", "推荐、匹配、评级、治理与风控"],
      ],
      whatEyebrow: "平台实际在做什么",
      whatItems: [
        ["创作", "让想法变成作品。"],
        ["交易", "让作品连接真实需求与订单。"],
        ["交付", "让能力从生成走向可复用、可采购、可复购。"],
        ["规则", "定义版权、信任、数据安全与合作边界。"],
      ],
    },
    users: {
      eyebrow: "用户",
      title: "发现更适合你的 AI 视频世界",
      desc: "看你想看的，发现更懂你的内容。基于兴趣标签与观看偏好，AIyavaa 帮你找到更适合你的 AI 视频，也让你参与改编、互动与共创。",
      feedEyebrow: "AI 视频内容流",
      feedTitle: "各类 AI 内容视频，按你的兴趣被重新组织。",
      feedDesc: "不是无差别内容流，而是基于风格、题材、人物、情绪、品牌偏好与观看路径形成的个性化 AI 视频世界。",
      tags: ["短剧", "品牌故事", "角色内容", "未来影像", "高概念创意", "互动内容"],
      cards: [
        ["推荐内容流", "兴趣标签 / 观看偏好 / 个性化推荐", ["为你推荐", "标签推荐"]],
        ["热门 AI 视频", "趋势内容 / 热门创作者 / 品牌创意", ["热门趋势", "热点专区"]],
        ["互动与改编", "改编结局 / 共创挑战 / 收藏与关注", ["共创", "互动观看"]],
        ["进入内容世界", "从观看者变成参与者，再变成共创者", ["参与感", "归属感"]],
      ],
    },
    creators: {
      eyebrow: "创作者",
      title: "表达自己，也连接市场",
      desc: "在这里创作、上架、接单、组队与合作，让表达不只停留在作品，也延伸到订单、关系与长期价值。",
      centerEyebrow: "创作者中心",
      centerTitle: "一个入口，两条核心路径：生产与订单。",
      centerDesc: "这页本质上就是两件事：一个是创作工具入口，一个是 AI 视频商业订单入口。",
      path1Eyebrow: "路径 01 / 生产",
      path1Title: "创作工具入口",
      path1Desc: "短剧生产工具、AI 视频创作工具、模型调用、脚本与分镜工作流、作品上架与个人主页，构成创作者的生产系统。",
      path1Cards: [
        ["脚本与分镜", "结构诊断 / 原生改写 / 分镜输出", ["脚本", "分镜"]],
        ["模型与创作工具", "生成、编辑、风格化、上架", ["生成", "编辑"]],
      ],
      path2Eyebrow: "路径 02 / 订单",
      path2Title: "商业订单入口",
      path2Desc: "平台视频需求订单、品牌定制需求、内容合作项目、接单与报价、组队协作，让创作与市场真正连通。",
      path2Cards: [
        ["订单市场", "平台需求 / 品牌订单 / 报价与接单", ["订单", "报价"]],
        ["组队与协作", "创作者协作 / 联合创作 / 项目执行", ["组队", "合作"]],
      ],
    },
    partners: {
      eyebrow: "生态合作伙伴",
      title: "让能力被接入，让合作被发起",
      desc: "把你的模型、工具、合作方向、需求与创意提案接入平台，发起共创、组队与协作。不是申请合作，而是加入生态。",
      typesEyebrow: "合作类型",
      types: [
        ["模型合作", "接入模型能力、API 或工作流能力。"],
        ["工具合作", "接入你的工具、编辑能力与生产模块。"],
        ["需求合作", "发布项目需求、合作提案与共创方向。"],
        ["联合共创", "组队、联合开发、联合活动与共同增长。"],
      ],
      formEyebrow: "合作需求填写",
      formTitle: "展示合作需求填写，而不是静态说明。",
      formDesc: "第三层页面建议直接展示合作表单逻辑：模型、工具、AI 视频需求、合作方向、共创提案、组队意向，而不是再写大段说明文字。",
      formCards: [
        ["合作类型", "模型 / 工具 / 内容 / 需求 / 联合开发", ["合作类型", "选择"]],
        ["合作内容", "你的能力 / 需求 / 提案 / 想法", ["表单", "提案"]],
        ["共创与组队", "是否需要组队、共创与联合推进", ["共创", "组队"]],
        ["提交入口", "发起连接，进入生态合作流", ["提交", "连接"]],
      ],
    },
    investors: {
      eyebrow: "投资人",
      title: "看见当下价值，也看见未来路径",
      desc: "从平台逻辑、产品矩阵到资产沉淀，理解 AIyavaa 的长期可投性。这里看到的不是某个单点产品，而是一个会持续长大的平台。",
      currentEyebrow: "当前 AIyavaa",
      currentTitle: "先看平台结构，再看投资价值。",
      currentDesc: "投资人第三层页面不应该先看功能，而应该先看到目前 AIyavaa 的网站页面结构、平台价值、产品矩阵与未来扩张路径。",
      currentCards: [
        ["网站页面结构", "首页 / 平台 / 产品 / 解决方案 / 社群 / 投资者", ["结构", "全局"]],
        ["平台价值", "创作、交易、交付、规则与长期入口", ["平台", "价值"]],
        ["产品矩阵", "短剧 / 本地生活 / 品牌交易 / 社群增长", ["矩阵", "扩张"]],
        ["未来路径", "高溢价产品、关键资产、投资逻辑", ["资产", "可投性"]],
      ],
      whyEyebrow: "投资这个平台的价值",
      whyItems: [
        ["不是单一工具机会", "投的不是单点功能，而是平台层的统一入口。"],
        ["不是普通内容站", "平台同时承接创作、交易、交付与规则。"],
        ["产品矩阵可扩张", "围绕人和场景，平台不断长出新产品。"],
        ["关键资产持续沉淀", "创作者网络、内容与 IP、规则、数据与品牌采购入口。"],
      ],
      assetsEyebrow: "关键资产层",
      assets: [
        ["创作者网络资产", "哪些创作者长期留在平台，哪些创作者具备持续商业化能力。"],
        ["内容与 IP 资产", "作品、角色、世界观、短剧与可持续授权内容。"],
        ["版权与交易规则资产", "谁掌握规则，谁就掌握行业秩序。"],
        ["多模型编排资产", "哪类任务适合什么模型，哪种路径效率最高、质量最稳。"],
        ["用户与品牌数据资产", "观看偏好、转化路径、需求模板与复购数据。"],
        ["品牌采购入口资产", "一旦形成采购习惯，切换成本会持续提高。"],
      ],
    },
    personas: {
      users: { title: "用户", lead: "发现更适合你的 AI 视频世界", desc: "看你想看的，发现更懂你的内容。基于兴趣标签与观看偏好，AIyavaa 帮你找到更适合你的 AI 视频，也让你参与改编、互动与共创。", cta: "进入内容世界", chips: ["兴趣推荐", "热门短剧", "互动观看", "改编共创"] },
      creators: { title: "创作者", lead: "表达自己，也连接市场", desc: "在这里创作、上架、接单、组队与合作，让表达不只停留在作品，也延伸到订单、关系与长期价值。", cta: "进入创作者中心", chips: ["创作工具", "作品上架", "商业订单", "组队协作"] },
      partners: { title: "生态合作伙伴", lead: "让能力被接入，让合作被发起", desc: "把你的模型、工具、合作方向、需求与创意提案接入平台，发起共创、组队与协作。不是申请合作，而是加入生态。", cta: "进入生态合作入口", chips: ["模型接入", "工具合作", "共创提案", "需求发布"] },
      investors: { title: "投资人", lead: "看见当下价值，也看见未来路径", desc: "从平台逻辑、产品矩阵到资产沉淀，理解 AIyavaa 的长期可投性。投的不是某个产品，而是一个会持续长大的平台。", cta: "进入投资者入口", chips: ["平台价值", "产品矩阵", "关键资产", "可投逻辑"] },
    },
    products: [
      { key: "drama", title: "AI 短剧生产工作台", desc: "结构诊断、中英双向原生化、分镜直出、爆款评分与标准化 SOP。", tags: ["剧本诊断", "原生改写", "分镜输出", "爆款评分"] },
      { key: "local", title: "本地生活商家增长控制台", desc: "服务门店和商家内容生产、活动营销、数字人导购与转化增长。", tags: ["活动日历", "商家模板", "数字人导购", "多平台分发"] },
      { key: "brand", title: "品牌需求与交易中枢", desc: "把品牌采购路径产品化：需求发布、创作者匹配、授权、交付与复购。", tags: ["需求发布", "创作者匹配", "版权授权", "交付验收"] },
      { key: "community", title: "内容展示与 OPC 社群层", desc: "内容展示、共创任务、热门创作者与 OPC 社群一起构成增长飞轮。", tags: ["内容流", "共创任务", "社群榜单", "OPC Insights"] },
    ],
  },
  en: {
    brand: "AIyavaa",
    brandSub: "Website Prototype",
    nav: {
      home: "Home",
      platform: "Platform",
      creators: "Creators",
      users: "Users",
      partners: "Partners",
      investors: "Investors",
    },
    home: {
      eyebrow: "AI Video Ecosystem Platform",
      h1: "Imagination Made Real",
      h1sub: "Everyone is an AIGC video creator",
      desc: "AIyavaa turns your ideas into works, and your works into value.",
      cta1: "Enter AIyavaa",
      cta2: "View Platform",
      narrativeEyebrow: "Home Narrative",
      narrativeTitle: "Platform is the foundation. Products are the hooks. Community is the flywheel.",
      narrativeDesc: "The website is not a manual — it's a designed path of understanding: first earn trust, then build comprehension, then guide each visitor into their own AIyavaa.",
      signalsEyebrow: "Key Signals",
      signals: [
        ["Platform Identity", "Creation, transaction, delivery & governance platform"],
        ["Website Purpose", "Partners, users, brands, investors & community"],
        ["Future Logic", "Not a fixed product — evolves continuously around people"],
        ["Core Belief", "Turn ideas into works, and works into value"],
      ],
      personaEyebrow: "Who is AIyavaa for?",
      personaTitle: "The platform serves four core roles.",
      productEyebrow: "Product Matrix",
      productTitle: "Four products, each built around different scenarios and audiences.",
      continue: "Explore",
      navCards: [
        ["Enter Creator Center", "Start creating, listing, taking orders & teaming up", "creators"],
        ["Enter Platform", "Start watching, creating, teaming & co-creating", "users"],
        ["View Partnerships", "Understand capabilities, publish needs, get delivery", "partners"],
        ["Enter Investor Portal", "View platform value, product matrix & investment logic", "investors"],
      ],
    },
    platform: {
      eyebrow: "Platform",
      title: "AIyavaa is the creation, transaction, delivery and governance platform for the AI video era.",
      desc: "Connecting users, creators, brands and partners — moving AI video from 'can generate' to 'can transact, deliver and continuously evolve'.",
      cta1: "View Creator Portal",
      cta2: "Enter Investor Portal",
      bandEyebrow: "Three Centers + Three Middle Platforms",
      bandTitle: "The platform is not a toolset — it is an industry organization system.",
      bandDesc: "Three Centers manage people and transaction relationships. Three Middle Platforms manage capabilities and order. Together, AIyavaa upgrades from tool layer to platform layer.",
      centers: "Three Centers",
      midPlatforms: "Three Middle Platforms",
      centerItems: [
        ["User Consumption Center", "Content discovery, interaction, consumption & community retention"],
        ["Creator Production Center", "Creation, listing, order-taking, revenue & growth system"],
        ["Brand Transaction Center", "Demand publishing, matching, procurement, delivery & repurchase"],
      ],
      midItems: [
        ["Model Capability Platform", "Model aggregation, multi-model orchestration, one-click invocation"],
        ["Copyright Transaction Platform", "Rights confirmation, licensing, revenue sharing, settlement & commercial boundaries"],
        ["Management Intelligence Platform", "Recommendation, matching, rating, governance & risk control"],
      ],
      whatEyebrow: "What the platform actually does",
      whatItems: [
        ["Create", "Turn ideas into works."],
        ["Transact", "Connect works with real demand and orders."],
        ["Deliver", "Move capability from generation to reusable, purchasable, and repurchasable."],
        ["Govern", "Define copyright, trust, data security and collaboration boundaries."],
      ],
    },
    users: {
      eyebrow: "Users",
      title: "Discover an AI Video World Shaped by Your Interests",
      desc: "Watch what you want, discover content that truly understands you. Based on interest tags and viewing preferences, AIyavaa helps you find AI videos that fit you — and lets you participate in remixing, interaction and co-creation.",
      feedEyebrow: "AI Video Feed",
      feedTitle: "All kinds of AI video content, reorganized around your interests.",
      feedDesc: "Not an undifferentiated content stream — a personalized AI video world built on style, genre, character, emotion, brand preference and viewing path.",
      tags: ["Short Drama", "Brand Stories", "Character Content", "Future Visuals", "High-Concept Creative", "Interactive Content"],
      cards: [
        ["Recommended Feed", "Interest tags / Viewing preferences / Personalized recommendations", ["For You", "Tag Recommendations"]],
        ["Trending AI Videos", "Trending content / Top creators / Brand creative", ["Trending", "Hot Topics"]],
        ["Interact & Remix", "Remix endings / Co-creation challenges / Save & follow", ["Co-creation", "Interactive Viewing"]],
        ["Enter the Content World", "From viewer to participant, then to co-creator", ["Engagement", "Belonging"]],
      ],
    },
    creators: {
      eyebrow: "Creators",
      title: "Express Yourself. Connect with the Market.",
      desc: "Create, list, take orders, team up and collaborate here. Let your expression go beyond the work itself — extending into orders, relationships and long-term value.",
      centerEyebrow: "Creator Center",
      centerTitle: "One entry point, two core paths: production and orders.",
      centerDesc: "This page is essentially two things: a creative tools entry point, and an AI video commercial orders entry point.",
      path1Eyebrow: "Path 01 / Production",
      path1Title: "Creative Tools Entry",
      path1Desc: "Short drama production tools, AI video creation tools, model invocation, script & storyboard workflows, work listing and personal profile — forming the creator's production system.",
      path1Cards: [
        ["Script & Storyboard", "Structure diagnosis / Native rewriting / Storyboard output", ["Script", "Storyboard"]],
        ["Models & Creative Tools", "Generate, edit, stylize, list", ["Generate", "Edit"]],
      ],
      path2Eyebrow: "Path 02 / Orders",
      path2Title: "Commercial Orders Entry",
      path2Desc: "Platform video demand orders, brand custom requests, content collaboration projects, order-taking and quoting, team collaboration — truly connecting creation with the market.",
      path2Cards: [
        ["Order Marketplace", "Platform needs / Brand orders / Quoting & order-taking", ["Orders", "Quotes"]],
        ["Team & Collaborate", "Creator collaboration / Joint creation / Project execution", ["Team", "Collaborate"]],
      ],
    },
    partners: {
      eyebrow: "Ecosystem Partners",
      title: "Connect Capabilities. Launch Collaborations.",
      desc: "Integrate your models, tools, collaboration directions, needs and creative proposals into the platform. Launch co-creation, team-building and collaboration. Not applying for partnership — joining the ecosystem.",
      typesEyebrow: "Partnership Types",
      types: [
        ["Model Partnership", "Integrate model capabilities, APIs or workflow capabilities."],
        ["Tool Partnership", "Integrate your tools, editing capabilities and production modules."],
        ["Demand Partnership", "Publish project needs, collaboration proposals and co-creation directions."],
        ["Joint Co-creation", "Team up, joint development, joint activities and shared growth."],
      ],
      formEyebrow: "Partnership Request Form",
      formTitle: "Show the partnership request form — not static descriptions.",
      formDesc: "The third-level page should directly show the collaboration form logic: models, tools, AI video needs, collaboration directions, co-creation proposals, teaming intent — rather than more descriptive text.",
      formCards: [
        ["Partnership Type", "Model / Tool / Content / Demand / Joint Development", ["Partnership Type", "Select"]],
        ["Collaboration Content", "Your capabilities / needs / proposals / ideas", ["Form", "Proposal"]],
        ["Co-creation & Teaming", "Whether teaming, co-creation and joint advancement are needed", ["Co-creation", "Team"]],
        ["Submit Entry", "Initiate connection, enter the ecosystem collaboration flow", ["Submit", "Connect"]],
      ],
    },
    investors: {
      eyebrow: "Investors",
      title: "See Today's Value. See Tomorrow's Path.",
      desc: "From platform logic and product matrix to asset accumulation — understand AIyavaa's long-term investability. What you see here is not a single product, but a platform that will keep growing.",
      currentEyebrow: "Current AIyavaa",
      currentTitle: "Understand the platform structure first, then the investment value.",
      currentDesc: "The investor third-level page should not lead with features — it should first show the current AIyavaa website structure, platform value, product matrix and future expansion path.",
      currentCards: [
        ["Website Structure", "Home / Platform / Products / Solutions / Community / Investors", ["Structure", "Overview"]],
        ["Platform Value", "Creation, transaction, delivery, governance & long-term entry point", ["Platform", "Value"]],
        ["Product Matrix", "Short Drama / Local Commerce / Brand Trading / Community Growth", ["Matrix", "Expansion"]],
        ["Future Path", "Premium products, key assets, investment logic", ["Assets", "Investability"]],
      ],
      whyEyebrow: "Why Invest in This Platform",
      whyItems: [
        ["Not a single-tool opportunity", "Investing in the unified entry point at the platform layer, not a single feature."],
        ["Not an ordinary content site", "The platform simultaneously handles creation, transaction, delivery and governance."],
        ["Expandable product matrix", "The platform continuously grows new products around people and scenarios."],
        ["Continuous key asset accumulation", "Creator network, content & IP, governance rules, data and brand procurement entry."],
      ],
      assetsEyebrow: "Key Asset Layers",
      assets: [
        ["Creator Network Assets", "Which creators stay long-term and which have sustained commercialization capability."],
        ["Content & IP Assets", "Works, characters, worldbuilding, short dramas and sustainably licensed content."],
        ["Copyright & Transaction Rule Assets", "Whoever controls the rules controls industry order."],
        ["Multi-Model Orchestration Assets", "Which tasks suit which models, which paths have highest efficiency and most stable quality."],
        ["User & Brand Data Assets", "Viewing preferences, conversion paths, demand templates and repurchase data."],
        ["Brand Procurement Entry Assets", "Once purchasing habits form, switching costs keep rising."],
      ],
    },
    personas: {
      users: { title: "Users", lead: "Discover an AI Video World Shaped by Your Interests", desc: "Watch what you want, discover content that truly understands you. AIyavaa helps you find AI videos that fit you — and lets you participate in remixing, interaction and co-creation.", cta: "Enter Content World", chips: ["Interest Recommendations", "Trending Dramas", "Interactive Viewing", "Remix & Co-create"] },
      creators: { title: "Creators", lead: "Express Yourself. Connect with the Market.", desc: "Create, list, take orders, team up and collaborate here. Let your expression extend into orders, relationships and long-term value.", cta: "Enter Creator Center", chips: ["Creative Tools", "List Works", "Commercial Orders", "Team Collaboration"] },
      partners: { title: "Ecosystem Partners", lead: "Connect Capabilities. Launch Collaborations.", desc: "Integrate your models, tools, collaboration directions and proposals into the platform. Launch co-creation and collaboration. Join the ecosystem.", cta: "Enter Partnership Portal", chips: ["Model Integration", "Tool Partnership", "Co-creation Proposals", "Publish Demands"] },
      investors: { title: "Investors", lead: "See Today's Value. See Tomorrow's Path.", desc: "From platform logic and product matrix to asset accumulation — understand AIyavaa's long-term investability. Investing in a platform that keeps growing.", cta: "Enter Investor Portal", chips: ["Platform Value", "Product Matrix", "Key Assets", "Investment Logic"] },
    },
    products: [
      { key: "drama", title: "AI Short Drama Production Workbench", desc: "Structure diagnosis, bidirectional native localization, storyboard generation, viral scoring and standardized SOP.", tags: ["Script Diagnosis", "Native Rewriting", "Storyboard Output", "Viral Scoring"] },
      { key: "local", title: "Local Commerce Merchant Growth Console", desc: "Serving stores and merchants with content production, event marketing, digital human sales and conversion growth.", tags: ["Event Calendar", "Merchant Templates", "Digital Human Sales", "Multi-platform Distribution"] },
      { key: "brand", title: "Brand Demand & Transaction Hub", desc: "Productizing the brand procurement path: demand publishing, creator matching, licensing, delivery and repurchase.", tags: ["Demand Publishing", "Creator Matching", "Copyright Licensing", "Delivery Verification"] },
      { key: "community", title: "Content Showcase & OPC Community Layer", desc: "Content showcase, co-creation tasks, top creators and OPC community together form the growth flywheel.", tags: ["Content Feed", "Co-creation Tasks", "Community Rankings", "OPC Insights"] },
    ],
  },
} as const;

type Lang = "zh" | "en";

// ─── Shared UI ────────────────────────────────────────────────────────────────

function cls(...arr: (string | boolean | undefined | null)[]) {
  return arr.filter(Boolean).join(" ");
}

function Glass({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cls("rounded-[28px] border border-white/10 bg-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl", className)}>
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
        primary ? "border-white/10 bg-gradient-to-r from-indigo-400/25 to-cyan-300/20 text-white" : "border-white/10 bg-white/5 text-slate-100"
      )}
    >
      {children}
    </button>
  );
}

function MockCard({ title, subtitle, chips }: { title: string; subtitle: string; chips: readonly string[] }) {
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

// ─── Header ───────────────────────────────────────────────────────────────────

function Header({ route, setRoute, lang }: { route: string; setRoute: (r: string) => void; lang: Lang }) {
  const [open, setOpen] = useState(false);
  const T = t[lang];
  const NAV = [
    { key: "home", label: T.nav.home },
    { key: "platform", label: T.nav.platform },
    { key: "creators", label: T.nav.creators },
    { key: "users", label: T.nav.users },
    { key: "partners", label: T.nav.partners },
    { key: "investors", label: T.nav.investors },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[74px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 md:px-6 xl:px-8">
        <button onClick={() => setRoute("home")} className="flex items-center gap-3 text-left">
          <div className="relative h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-400 to-cyan-300 shadow-[0_0_28px_rgba(126,165,255,0.35)]">
            <div className="absolute inset-0.5 rounded-[14px] border border-white/25" />
          </div>
          <div>
            <div className="font-semibold tracking-[0.02em] text-white">{T.brand}</div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500">{T.brandSub}</div>
          </div>
        </button>

        <nav className="hidden items-center gap-2 xl:flex">
          {NAV.map((item) => (
            item.key === "investors" ? (
              <a
                key={item.key}
                href="/investor"
                className={cls(
                  "rounded-full border px-4 py-2 text-sm transition",
                  "border-transparent text-slate-400 hover:border-white/10 hover:bg-white/5 hover:text-white"
                )}
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.key}
                onClick={() => setRoute(item.key)}
                className={cls(
                  "rounded-full border px-4 py-2 text-sm transition",
                  route === item.key ? "border-white/10 bg-white/5 text-white" : "border-transparent text-slate-400 hover:border-white/10 hover:bg-white/5 hover:text-white"
                )}
              >
                {item.label}
              </button>
            )
          ))}
          <a href="/investor" className="ml-2 rounded-full border border-indigo-300/30 bg-gradient-to-r from-indigo-500/30 to-cyan-400/20 px-4 py-2 text-sm font-bold text-white transition hover:from-indigo-500/40 hover:to-cyan-400/30">
            {lang === "zh" ? "投资者故事 →" : "Investor Story →"}
          </a>
          <LanguageSwitcher />
        </nav>

        <button onClick={() => setOpen((v) => !v)} className="rounded-2xl border border-white/10 bg-white/5 p-2.5 xl:hidden">
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
                item.key === "investors" ? (
                  <a key={item.key} href="/investor" className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left">
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </a>
                ) : (
                  <button key={item.key} onClick={() => { setRoute(item.key); setOpen(false); }} className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left">
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </button>
                )
              ))}
              <div className="pt-2 flex gap-2">
                <a href="/investor" className="flex-1 text-center rounded-2xl border border-indigo-300/30 bg-gradient-to-r from-indigo-500/30 to-cyan-400/20 px-4 py-3 text-sm font-bold text-white">
                  {lang === "zh" ? "投资者故事 →" : "Investor Story →"}
                </a>
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── SectionHero ─────────────────────────────────────────────────────────────

function SectionHero({ eyebrow, title, desc, actions = [] }: {
  eyebrow: string; title: string; desc: string;
  actions?: { label: string; primary?: boolean; onClick: () => void; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 py-14 md:px-10 md:py-18">
      <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-indigo-400/14 blur-3xl" />
      <div className="absolute left-[-70px] bottom-[-90px] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="relative z-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-white md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">{desc}</p>
        {actions.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-3">
            {actions.map((action) => (
              action.href ? (
                <a key={action.label} href={action.href}><HeroAction primary={action.primary} onClick={() => {}}>{action.label}</HeroAction></a>
              ) : (
                <HeroAction key={action.label} primary={action.primary} onClick={action.onClick}>{action.label}</HeroAction>
              )
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Pages ────────────────────────────────────────────────────────────────────

function HomePage({ setRoute, lang }: { setRoute: (r: string) => void; lang: Lang }) {
  const [activePersona, setActivePersona] = useState("creators");
  const T = t[lang];
  const persona = T.personas[activePersona as keyof typeof T.personas];
  const personaIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    users: PlayCircle, creators: Wand2, partners: HeartHandshake, investors: BarChart3,
  };
  const Icon = personaIcons[activePersona];

  return (
    <div>
      <section className="relative overflow-hidden px-6 pb-14 pt-10 md:px-10 md:pb-18 md:pt-14">
        <div className="absolute left-[8%] top-[8%] h-64 w-64 rounded-full bg-indigo-400/18 blur-3xl" />
        <div className="absolute right-[10%] top-[10%] h-72 w-72 rounded-full bg-cyan-300/14 blur-3xl" />
        <div className="grid min-h-[calc(100vh-74px)] gap-8 xl:grid-cols-[1.04fr_0.96fr] xl:items-center">
          <div className="flex flex-col justify-center gap-6">
            <Eyebrow>{T.home.eyebrow}</Eyebrow>
            <div>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.065em] text-white md:text-7xl xl:text-[92px]">{T.home.h1}</h1>
              <div className="mt-8 max-w-3xl text-[28px] font-semibold leading-[1.35] tracking-[-0.04em] text-white md:text-[38px]">{T.home.h1sub}</div>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400 md:text-xl">{T.home.desc}</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <HeroAction primary onClick={() => setRoute("platform")}>{T.home.cta1}</HeroAction>
              <a href="/investor"><HeroAction onClick={() => {}}>{T.home.cta2}</HeroAction></a>
            </div>
          </div>

          <div className="grid gap-5 self-center">
            <Glass className="p-6 md:p-7">
              <Eyebrow>{T.home.narrativeEyebrow}</Eyebrow>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">{T.home.narrativeTitle}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">{T.home.narrativeDesc}</p>
            </Glass>
            <Glass className="p-6 md:p-7">
              <Eyebrow>{T.home.signalsEyebrow}</Eyebrow>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {T.home.signals.map(([title, desc]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs uppercase tracking-[0.14em] text-slate-400">{title}</div>
                    <div className="mt-2 text-sm leading-7 text-slate-200">{desc}</div>
                  </div>
                ))}
              </div>
            </Glass>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 md:px-10 md:pb-14">
        <Glass className="p-6 md:p-8 xl:p-10">
          <Eyebrow>{T.home.personaEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">{T.home.personaTitle}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {Object.entries(T.personas).map(([key, p]) => (
              <button key={key} onClick={() => setActivePersona(key)} className={cls("rounded-2xl border px-4 py-2.5 text-sm font-medium transition", activePersona === key ? "border-indigo-300/30 bg-indigo-300/15 text-white" : "border-white/10 bg-white/[0.04] text-slate-400 hover:text-white")}>
                {p.title}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activePersona} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }} className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col gap-5">
                <div>
                  <div className="mb-3 inline-flex rounded-2xl border border-white/10 bg-white/[0.05] p-3"><Icon className="h-6 w-6 text-white" /></div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">{persona.lead}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-8 text-slate-400 md:text-base">{persona.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {persona.chips.map((chip) => (<span key={chip} className="rounded-full border border-indigo-300/20 bg-indigo-300/10 px-3 py-1.5 text-xs text-indigo-100">{chip}</span>))}
                </div>
                {activePersona === "investors" ? (
                  <a href="/investor"><HeroAction primary onClick={() => {}}>{persona.cta}</HeroAction></a>
                ) : (
                  <HeroAction primary onClick={() => setRoute(activePersona)}>{persona.cta}</HeroAction>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </Glass>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-20">
        <Glass className="p-6 md:p-8 xl:p-10">
          <Eyebrow>{T.home.productEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">{T.home.productTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {T.products.map((block) => {
              const icons: Record<string, React.ComponentType<{ className?: string }>> = { drama: Film, local: Store, brand: Briefcase, community: MessageSquare };
              const BlockIcon = icons[block.key];
              return (
                <div key={block.key} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/[0.05] p-3"><BlockIcon className="h-5 w-5 text-white" /></div>
                  <div className="text-base font-semibold text-white">{block.title}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{block.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {block.tags.map((tag) => (<span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-300">{tag}</span>))}
                  </div>
                </div>
              );
            })}
          </div>
        </Glass>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {T.home.navCards.map(([title, desc, routeKey]) => {
            const icons: Record<string, React.ComponentType<{ className?: string }>> = { creators: Wand2, users: Users, partners: HeartHandshake, investors: BarChart3 };
            const NavIcon = icons[routeKey as string];
            if (routeKey === "investors") {
              return (
                <a key={title as string} href="/investor" className="text-left">
                  <Glass className="h-full p-6 md:p-7 transition hover:-translate-y-1">
                    <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/[0.05] p-3"><NavIcon className="h-5 w-5 text-white" /></div>
                    <div className="text-xl font-semibold tracking-[-0.03em] text-white">{title as string}</div>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{desc as string}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-200">{T.home.continue} <ArrowRight className="h-4 w-4" /></div>
                  </Glass>
                </a>
              );
            }
            return (
              <button key={title as string} onClick={() => setRoute(routeKey as string)} className="text-left">
                <Glass className="h-full p-6 md:p-7 transition hover:-translate-y-1">
                  <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/[0.05] p-3"><NavIcon className="h-5 w-5 text-white" /></div>
                  <div className="text-xl font-semibold tracking-[-0.03em] text-white">{title as string}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{desc as string}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-200">{T.home.continue} <ArrowRight className="h-4 w-4" /></div>
                </Glass>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function PlatformPage({ setRoute, lang }: { setRoute: (r: string) => void; lang: Lang }) {
  const T = t[lang].platform;
  const centerIcons: React.ComponentType<{ className?: string }>[] = [Users, Sparkles, Building2];
  const midIcons: React.ComponentType<{ className?: string }>[] = [Bot, Library, BarChart3];

  return (
    <div>
      <SectionHero eyebrow={T.eyebrow} title={T.title} desc={T.desc} actions={[
        { label: T.cta1, onClick: () => setRoute("creators"), primary: true },
        { label: T.cta2, onClick: () => {}, href: "/" },
      ]} />
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mb-8">
          <Eyebrow>{T.bandEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">{T.bandTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">{T.bandDesc}</p>
        </div>
        <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          <Glass className="p-6 md:p-8 xl:p-10">
            <div className="grid gap-4">
              {[
                { label: T.centers, items: T.centerItems, icons: centerIcons },
                { label: T.midPlatforms, items: T.midItems, icons: midIcons },
              ].map(({ label, items, icons }) => (
                <div key={label} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-slate-500">{label}</div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {items.map(([title, desc], i) => {
                      const ItemIcon = icons[i];
                      return (
                        <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                          <div className="mb-3 inline-flex rounded-2xl border border-white/10 bg-white/[0.05] p-3"><ItemIcon className="h-5 w-5 text-white" /></div>
                          <div className="text-base font-semibold text-white">{title}</div>
                          <div className="mt-2 text-sm leading-7 text-slate-400">{desc}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Glass>
          <Glass className="p-6 md:p-8 xl:p-10">
            <Eyebrow>{T.whatEyebrow}</Eyebrow>
            <div className="mt-5 space-y-3">
              {T.whatItems.map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-base font-semibold text-white">{title}</div>
                  <div className="mt-1 text-sm leading-7 text-slate-400">{desc}</div>
                </div>
              ))}
            </div>
          </Glass>
        </div>
      </section>
    </div>
  );
}

function UsersPage({ lang }: { lang: Lang }) {
  const T = t[lang].users;
  return (
    <div>
      <SectionHero eyebrow={T.eyebrow} title={T.title} desc={T.desc} />
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-5 xl:grid-cols-[1.02fr_0.98fr]">
          <Glass className="p-6 md:p-8 xl:p-10">
            <Eyebrow>{T.feedEyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">{T.feedTitle}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-400 md:text-base">{T.feedDesc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {T.tags.map((x) => (<span key={x} className="rounded-full border border-indigo-300/20 bg-indigo-300/10 px-3 py-1.5 text-xs text-indigo-100">{x}</span>))}
            </div>
          </Glass>
          <div className="grid gap-5 md:grid-cols-2">
            {T.cards.map(([title, subtitle, chips]) => (
              <MockCard key={title as string} title={title as string} subtitle={subtitle as string} chips={chips as readonly string[]} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CreatorsPage({ lang }: { lang: Lang }) {
  const T = t[lang].creators;
  return (
    <div>
      <SectionHero eyebrow={T.eyebrow} title={T.title} desc={T.desc} />
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mb-8">
          <Eyebrow>{T.centerEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">{T.centerTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">{T.centerDesc}</p>
        </div>
        <div className="grid gap-5 xl:grid-cols-2">
          {[
            { eyebrow: T.path1Eyebrow, title: T.path1Title, desc: T.path1Desc, cards: T.path1Cards },
            { eyebrow: T.path2Eyebrow, title: T.path2Title, desc: T.path2Desc, cards: T.path2Cards },
          ].map((path) => (
            <Glass key={path.title} className="p-6 md:p-8 xl:p-10">
              <Eyebrow>{path.eyebrow}</Eyebrow>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">{path.title}</h3>
              <p className="mt-3 text-sm leading-8 text-slate-400 md:text-base">{path.desc}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {path.cards.map(([t, s, c]) => (<MockCard key={t as string} title={t as string} subtitle={s as string} chips={c as readonly string[]} />))}
              </div>
            </Glass>
          ))}
        </div>
      </section>
    </div>
  );
}

function PartnersPage({ lang }: { lang: Lang }) {
  const T = t[lang].partners;
  return (
    <div>
      <SectionHero eyebrow={T.eyebrow} title={T.title} desc={T.desc} />
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-5 xl:grid-cols-[0.94fr_1.06fr]">
          <Glass className="p-6 md:p-8 xl:p-10">
            <Eyebrow>{T.typesEyebrow}</Eyebrow>
            <div className="mt-5 space-y-3">
              {T.types.map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-base font-semibold text-white">{title}</div>
                  <div className="mt-1 text-sm leading-7 text-slate-400">{desc}</div>
                </div>
              ))}
            </div>
          </Glass>
          <Glass className="p-6 md:p-8 xl:p-10">
            <Eyebrow>{T.formEyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">{T.formTitle}</h2>
            <p className="mt-4 text-sm leading-8 text-slate-400 md:text-base">{T.formDesc}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {T.formCards.map(([title, subtitle, chips]) => (
                <MockCard key={title as string} title={title as string} subtitle={subtitle as string} chips={chips as readonly string[]} />
              ))}
            </div>
          </Glass>
        </div>
      </section>
    </div>
  );
}

function InvestorsPage({ lang }: { lang: Lang }) {
  const T = t[lang].investors;
  return (
    <div>
      <SectionHero eyebrow={T.eyebrow} title={T.title} desc={T.desc} />
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-5 xl:grid-cols-[1.04fr_0.96fr]">
          <Glass className="p-6 md:p-8 xl:p-10">
            <Eyebrow>{T.currentEyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">{T.currentTitle}</h2>
            <p className="mt-4 text-sm leading-8 text-slate-400 md:text-base">{T.currentDesc}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {T.currentCards.map(([title, subtitle, chips]) => (
                <MockCard key={title as string} title={title as string} subtitle={subtitle as string} chips={chips as readonly string[]} />
              ))}
            </div>
          </Glass>
          <Glass className="p-6 md:p-8 xl:p-10">
            <Eyebrow>{T.whyEyebrow}</Eyebrow>
            <div className="space-y-3">
              {T.whyItems.map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-base font-semibold text-white">{title}</div>
                  <div className="mt-1 text-sm leading-7 text-slate-400">{desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Eyebrow>{T.assetsEyebrow}</Eyebrow>
              <div className="mt-5 space-y-3">
                {T.assets.map(([title, desc]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-sm font-semibold text-white">{title}</div>
                    <div className="mt-1 text-xs leading-6 text-slate-400">{desc}</div>
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

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function AIyavaaWebsitePrototype() {
  const [route, setRoute] = useState("home");
  const { language } = useLanguage();
  const lang = language as Lang;

  const CurrentPage = useMemo(() => {
    const map: Record<string, React.ReactNode> = {
      home: <HomePage setRoute={setRoute} lang={lang} />,
      platform: <PlatformPage setRoute={setRoute} lang={lang} />,
      users: <UsersPage lang={lang} />,
      creators: <CreatorsPage lang={lang} />,
      partners: <PartnersPage lang={lang} />,
      investors: <InvestorsPage lang={lang} />,
    };
    return map[route] || <HomePage setRoute={setRoute} lang={lang} />;
  }, [route, lang]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_12%_12%,rgba(126,165,255,0.16),transparent_28%),radial-gradient(circle_at_88%_10%,rgba(81,224,211,0.12),transparent_26%),radial-gradient(circle_at_50%_78%,rgba(194,141,255,0.12),transparent_32%),linear-gradient(180deg,#040b14,#08111f_48%,#07101c_100%)] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.05))]" />
      <Header route={route} setRoute={setRoute} lang={lang} />
      <main className="mx-auto max-w-[1440px] pb-16">{CurrentPage}</main>
    </div>
  );
}
