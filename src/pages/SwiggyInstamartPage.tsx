import React from 'react';
import { PageRoute } from '../types';
import { SWIGGY_CASE_STUDY_DATA } from '../data/portfolioData';
import { SwiggyInstamartMockup } from '../components/SwiggyInstamartMockup';
import { SwiggyUIDeepDive } from '../components/SwiggyUIDeepDive';
import {
  ShoppingBag,
  Utensils,
  TrendingUp,
  Clock,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Search,
  Sliders,
  Smartphone,
  BarChart2,
  Award,
  AlertTriangle,
  Zap,
  Target,
  ArrowUpRight,
  HelpCircle,
  Compass,
  FileSpreadsheet,
  PieChart,
  Users,
  Calendar,
  Check,
  ExternalLink,
  ChefHat,
  Heart,
  Palette
} from 'lucide-react';

interface SwiggyInstamartPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const SwiggyInstamartPage: React.FC<SwiggyInstamartPageProps> = ({ onNavigate }) => {
  const data = SWIGGY_CASE_STUDY_DATA;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center justify-between pb-4 border-b border-[#2D2D2D]">
        <button
          onClick={() => onNavigate('work')}
          className="text-xs font-mono font-semibold text-[#A0A0A0] hover:text-white flex items-center gap-1.5 transition-colors"
        >
          ← Back to All Projects
        </button>
        <span className="text-xs font-mono font-bold uppercase text-orange-400 tracking-wider">
          Case Study · Product Strategy & Quick Commerce
        </span>
      </div>

      {/* Hero Header Section (Page 1 of PDF) */}
      <div className="space-y-6">
        
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#262626] border border-[#383838] text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
          <Utensils className="w-3.5 h-3.5" />
          <span>{data.header.category}</span>
        </div>

        {/* Title & App Name */}
        <div className="space-y-2 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {data.header.title}
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-orange-400 font-mono">
            {data.header.appName}
          </p>
        </div>

        {/* Subtitle / Value Proposition */}
        <p className="text-base sm:text-lg text-zinc-300 font-medium max-w-4xl leading-relaxed">
          {data.header.subtitle}
        </p>

        {/* Header Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          
          {/* Tools & Stack */}
          <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase text-[#888888] block">
              Core Competencies & Tools
            </span>
            <div className="flex flex-wrap gap-1.5">
              {data.header.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-lg bg-[#282828] text-white text-xs font-mono font-medium border border-[#383838]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Role */}
          <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase text-[#888888] block">
              Role
            </span>
            <p className="text-xs text-[#CCCCCC] leading-relaxed">
              {data.header.role}
            </p>
          </div>

          {/* External Deck Link */}
          <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-2 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase text-[#888888] block">
                Primary Reference
              </span>
              <p className="text-xs text-zinc-300">
                Full Strategy Document & Presentation
              </p>
            </div>
            <a
              href={data.keyPMLearnings.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-orange-400 hover:text-orange-300"
            >
              <span>Open PDF Deck</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Quick Action Navigation Bar */}
        <div className="p-4 rounded-2xl bg-[#1B1714] border border-orange-500/30 flex flex-wrap items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-white uppercase">Jump Directly To:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="#live-swiggy-prototype"
              className="px-3 py-1.5 rounded-xl bg-orange-950/80 hover:bg-orange-900 border border-orange-500/40 text-orange-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
            >
              <Zap className="w-3.5 h-3.5 text-orange-400" />
              <span>Live Interactive Prototype</span>
            </a>
            <a
              href="#swiggy-ui-ux-deep-dive"
              className="px-3 py-1.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
            >
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span>UI/UX Architecture & Cart Flow</span>
            </a>
            <a
              href={data.keyPMLearnings.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Original Strategy Deck</span>
            </a>
          </div>
        </div>

      </div>

      {/* Section 01: About the Product (Page 2 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-orange-400">01</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About the Product & Business Challenge
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-6">
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {data.aboutProduct.overview}
          </p>

          <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold block">
              The Retention Paradox
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {data.aboutProduct.challenge}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-orange-950/30 border border-orange-500/40 text-sm font-semibold text-white">
            <strong>Business Challenge:</strong> {data.aboutProduct.question}
          </div>
        </div>
      </div>

      {/* Section 02: Problem Discovery & The Big Reframe (Page 2 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-orange-400">02</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Problem Discovery & The Core Insight
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1C160E] to-[#141414] border border-orange-500/30 space-y-6">
          <div>
            <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block mb-1">
              RESEARCH CHANNELS ANALYZED
            </span>
            <p className="text-xs text-zinc-300">
              {data.problemDiscovery.researchMethods}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-black/60 border border-orange-500/40 text-center space-y-3">
            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-mono font-bold uppercase">
              Key Breakthrough Insight
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Users don't struggle with grocery delivery.
            </h3>
            <p className="text-base text-orange-300 font-mono italic">
              Users struggle with deciding: "What should I cook today?"
            </p>
            <p className="text-xs text-zinc-400 max-w-xl mx-auto">
              The biggest drop-off and friction occurs <em>before</em> groceries are purchased.
            </p>
          </div>
        </div>
      </div>

      {/* Section 03: User Research Findings (Page 2 & 3 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-orange-400">03</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            User Research Findings (4 Core Friction Points)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.painPoints.map((pain) => (
            <div key={pain.num} className="p-6 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-mono font-bold text-xs">
                  0{pain.num}
                </div>
                <h3 className="text-base font-bold text-white">{pain.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {pain.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 04: User Personas (Page 3 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-orange-400">04</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            User Personas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.userPersonas.map((persona, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-mono font-bold">
                    {persona.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">{persona.name}</h3>
                <p className="text-xs font-mono text-zinc-400">{persona.role} · {persona.location}</p>
                <div className="pt-2 text-xs text-zinc-300">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Pain Point</span>
                  <p className="leading-relaxed">{persona.painPoint}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800 text-xs text-orange-300 font-mono">
                <span className="text-[10px] text-zinc-500 uppercase block">Needs</span>
                {persona.needs}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 05, 06 & 07: Product Vision, Goals & North Star (Page 3 & 4 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-orange-400">05–07</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Product Vision, Goals & North Star Metric
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-6">
          {/* Vision Statement */}
          <div className="p-5 rounded-xl bg-orange-950/20 border border-orange-500/30 space-y-1">
            <span className="text-[10px] font-mono uppercase text-orange-400 font-bold block">
              VISION STATEMENT
            </span>
            <p className="text-base sm:text-lg font-bold text-white italic">
              "{data.productVision.statement}"
            </p>
          </div>

          {/* Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
              <h4 className="text-xs font-mono uppercase text-emerald-400 font-bold">
                User Goals
              </h4>
              <ul className="space-y-1 text-xs text-zinc-300">
                {data.productGoals.userGoals.map((g, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
              <h4 className="text-xs font-mono uppercase text-amber-400 font-bold">
                Business Goals
              </h4>
              <ul className="space-y-1 text-xs text-zinc-300">
                {data.productGoals.businessGoals.map((g, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* North Star Metric Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#24170E] to-[#171717] border border-orange-500/40 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-orange-400 font-bold block">
                NORTH STAR METRIC
              </span>
              <h3 className="text-lg font-bold text-white">{data.successMetrics.northStar.name}</h3>
            </div>
            <div className="px-5 py-2.5 rounded-xl bg-orange-500 text-white font-mono font-extrabold text-base shadow">
              Target: {data.successMetrics.northStar.target}
            </div>
          </div>
        </div>
      </div>

      {/* Section 08, 09 & 10: 5 Core Solutions & Interactive Mockup (Pages 5, 8, 9, 10 of PDF) */}
      <div id="live-swiggy-prototype" className="space-y-6 scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-orange-400">08–10</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Solution Blueprint & Interactive Prototype
          </h2>
        </div>

        {/* 5 Solutions List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.finalSolutions.map((sol) => (
            <div key={sol.num} className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 text-xs font-mono font-bold">
                  Feature 0{sol.num}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white">{sol.name}</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">{sol.what}</p>
              <div className="pt-2 text-[11px] font-mono text-emerald-400">
                Impact: {sol.impact}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Prototype Component */}
        <SwiggyInstamartMockup />
      </div>

      {/* Dedicated UI/UX Architecture & Cart Conversion Deep Dive */}
      <div className="scroll-mt-24">
        <SwiggyUIDeepDive deckLink={data.keyPMLearnings.driveLink} />
      </div>

      {/* Section 11: Prioritization Framework (Impact × Feasibility × Strategic Fit) (Page 6 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-orange-400">11</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Prioritization Framework (Impact × Feasibility)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Built List */}
          <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Shipped / Built Features</span>
            </h3>
            <div className="space-y-2.5">
              {data.prioritization.built.map((b, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">✅ {b.name}</span>
                  <span className="font-mono text-zinc-400 text-[11px]">{b.reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deferred List */}
          <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase text-rose-400 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              <span>Deferred Features (Low Feasibility / High Friction)</span>
            </h3>
            <div className="space-y-2.5">
              {data.prioritization.deferred.map((d, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between text-xs">
                  <span className="font-bold text-zinc-300">❌ {d.name}</span>
                  <span className="font-mono text-zinc-500 text-[11px]">{d.reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 12 & 13: Risks, Mitigation & Expected Impact (Page 6 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-orange-400">12 & 13</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Risks, Mitigations & Expected Business Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Risks Table */}
          <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase text-amber-400">
              Risks & Mitigations
            </h3>
            <div className="space-y-3">
              {data.risksAndMitigation.map((r, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1 text-xs">
                  <span className="font-bold text-rose-300">Risk: {r.risk}</span>
                  <p className="text-zinc-300 font-mono text-[11px]">Mitigation: {r.mitigation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Impact */}
          <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-sm font-mono font-bold uppercase text-emerald-400">
                Expected Business & User Impact
              </h3>
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold block">
                  USER IMPACT
                </span>
                <p className="text-xs text-zinc-300">{data.expectedImpact.userImpact}</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold block">
                  BUSINESS IMPACT
                </span>
                <p className="text-xs text-emerald-300 font-mono">{data.expectedImpact.businessImpact}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center">
                <span className="text-2xl font-extrabold font-mono text-emerald-400">+35%</span>
                <span className="text-[10px] text-zinc-400 block">Order Frequency</span>
              </div>
              <div className="p-3 rounded-xl bg-orange-950/30 border border-orange-500/40 text-center">
                <span className="text-2xl font-extrabold font-mono text-orange-400">+22%</span>
                <span className="text-[10px] text-zinc-400 block">Basket Size (AOV)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 14 & 15: Key PM Learnings & Link Section (Page 7 & 10 of PDF) */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1F140C] via-[#141414] to-[#0D0D0D] border border-orange-500/40 space-y-6 text-center">
        <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider">
          Core PM Learning & Strategy Document
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white max-w-3xl mx-auto">
          "The problem wasn't grocery delivery. The real problem was meal decision-making."
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed italic">
          By reframing the problem from "How do we deliver groceries faster?" to "How do we help users decide what to eat?", the entire product strategy changed.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={data.keyPMLearnings.driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-xs transition-all flex items-center gap-2 shadow-lg hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open Original Strategy Deck (PDF/Drive)</span>
          </a>
          <button
            onClick={() => onNavigate('instagram-feed')}
            className="px-5 py-3.5 rounded-xl bg-pink-950/40 hover:bg-pink-900/50 border border-pink-500/40 text-pink-300 font-bold text-xs transition-colors flex items-center gap-2"
          >
            <span>← Instagram Feed Study</span>
          </button>
          <button
            onClick={() => onNavigate('rapido-commuter-pass')}
            className="px-5 py-3.5 rounded-xl bg-yellow-950/40 hover:bg-yellow-900/50 border border-yellow-500/40 text-yellow-300 font-bold text-xs transition-colors flex items-center gap-2"
          >
            <span>Rapido Commuter Pass →</span>
          </button>
          <button
            onClick={() => onNavigate('work')}
            className="px-5 py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs transition-all hover:scale-105 shadow-md flex items-center gap-2"
          >
            <span>All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
