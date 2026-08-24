import React from 'react';
import { PageRoute } from '../types';
import { HD_VIDEO_DOWNLOADER_DATA } from '../data/portfolioData';
import { VidFetchMockup } from '../components/VidFetchMockup';
import {
  TrendingUp,
  DollarSign,
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
  Clock,
  Compass,
  FileSpreadsheet,
  PieChart
} from 'lucide-react';

interface HDVideoDownloaderPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HDVideoDownloaderPage: React.FC<HDVideoDownloaderPageProps> = ({ onNavigate }) => {
  const data = HD_VIDEO_DOWNLOADER_DATA;

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
        <span className="text-xs font-mono font-bold uppercase text-[#E97868] tracking-wider">
          Case Study · Monetization Transformation
        </span>
      </div>

      {/* Hero Header Section matching Page 1 of PDF */}
      <div className="space-y-6">
        
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#262626] border border-[#383838] text-xs font-mono font-bold text-[#E97868] uppercase tracking-wider">
          <DollarSign className="w-3.5 h-3.5" />
          <span>{data.category}</span>
        </div>

        {/* Title & App Name */}
        <div className="space-y-2 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {data.title}
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#E97868] font-mono">
            {data.appName}
          </p>
        </div>

        {/* Executive Overview Paragraph */}
        <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed max-w-3xl">
          {data.overview}
        </p>

        {/* 3 Header Metadata Grids (Tools, Role, Competency Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          
          {/* Tools & Tech Stack */}
          <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase text-[#888888] block">
              Tools & Tech Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {data.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-lg bg-[#282828] text-white text-xs font-mono font-medium border border-[#383838]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* My Role */}
          <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase text-[#888888] block">
              My Role & Ownership
            </span>
            <div className="flex flex-wrap gap-1.5">
              {data.myRole.map((role) => (
                <span
                  key={role}
                  className="px-2.5 py-1 rounded-lg bg-[#282828] text-[#E97868] text-xs font-medium border border-[#383838]"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase text-[#888888] block">
              Key PM Competencies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {data.competencies.map((comp) => (
                <span
                  key={comp}
                  className="px-2.5 py-1 rounded-lg bg-[#282828] text-[#CCCCCC] text-xs font-medium border border-[#383838]"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* SECTION 00: Interactive Prototype & Ad Engine Simulator */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-xl bg-[#E97868]/20 text-[#E97868] font-mono font-bold text-xs flex items-center justify-center">
            UI
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Interactive Product Mockup & Monetization Engine
          </h2>
        </div>
        <VidFetchMockup />
      </div>

      {/* SECTION 01: Problem Statement */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-8 shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#E97868]/15 text-[#E97868] uppercase">
              Section {data.problemStatement.sectionNum}
            </span>
            <span className="text-xs font-mono text-[#888888] uppercase">Discovery & Friction Audit</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {data.problemStatement.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#A0A0A0]">
            {data.problemStatement.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.problemStatement.points.map((point, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#242424] border border-[#333333] space-y-3 flex flex-col justify-between hover:border-[#444444] transition-all"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-xl bg-red-500/10 text-red-400 font-mono font-bold text-xs flex items-center justify-center border border-red-500/20">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
                  {point.title}
                </h3>
              </div>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 02: What I Did (End-to-End Resolution) */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-8 shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#E97868]/15 text-[#E97868] uppercase">
              Section 02
            </span>
            <span className="text-xs font-mono text-[#888888] uppercase">Execution Strategy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            What I Did (End-to-End Product Interventions)
          </h2>
          <p className="text-xs sm:text-sm text-[#A0A0A0]">
            Five systematic engineering and product initiatives deployed to reconstruct the monetization pipeline.
          </p>
        </div>

        <div className="space-y-6">
          {data.resolutions.map((res) => (
            <div
              key={res.step}
              className="p-6 sm:p-8 rounded-2xl bg-[#242424] border border-[#333333] space-y-4 hover:border-[#484848] transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#E97868] to-[#F4A095] text-[#141414] font-mono font-extrabold text-sm flex items-center justify-center shadow-md">
                  {res.step}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  {res.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                {res.bullets.map((bullet, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-3.5 rounded-xl bg-[#1C1C1C] border border-[#2F2F2F] text-xs text-[#CCCCCC] leading-relaxed flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E97868] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 03: Goals */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#241F24] to-[#1E1E1E] border border-[#383838] space-y-8 shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#E97868]/15 text-[#E97868] uppercase">
              Section 03
            </span>
            <span className="text-xs font-mono text-[#888888] uppercase">Strategic Guardrails</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Core Project Goals & Success Criteria
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.goals.map((goal, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#191919] border border-[#2D2D2D] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <Target className="w-6 h-6 text-[#E97868]" />
                <h3 className="text-lg font-extrabold text-white">
                  {goal.label}
                </h3>
              </div>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                {goal.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 04 & 05: Results (Sep → Jan) & Key Metrics Comparison Table */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-8 shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 uppercase">
              Section 04 & 05
            </span>
            <span className="text-xs font-mono text-[#888888] uppercase">Validated Business Impact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Results & Metrics Comparison (Sep vs Jan)
          </h2>
          <p className="text-xs sm:text-sm text-[#A0A0A0]">
            Timeframe: {data.results.timeframe}
          </p>
        </div>

        {/* 4 Core Highlight Impact Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-[#242424] border border-[#333333] space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase text-[#888888]">Interstitial Revenue</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">+182.6%</div>
            <p className="text-xs text-[#A0A0A0]">$1,463.39 → $4,135.48</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#242424] border border-[#333333] space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase text-[#888888]">Daily Ad Viewers</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">+87%</div>
            <p className="text-xs text-[#A0A0A0]">5,697 → 9,232 DAV</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#242424] border border-[#333333] space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase text-[#888888]">Ad Viewer Rate</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#E97868] font-mono">+88%</div>
            <p className="text-xs text-[#A0A0A0]">30.52% → 57.33%</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#242424] border border-[#333333] space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase text-[#888888]">Show Rate (Interstitial)</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#F4A095] font-mono">41.42%</div>
            <p className="text-xs text-[#A0A0A0]">Up from 29.20% baseline</p>
          </div>
        </div>

        {/* Full Key Metrics Comparison Table */}
        <div className="p-6 rounded-2xl bg-[#242424] border border-[#333333] space-y-4">
          <h3 className="text-sm font-mono font-bold uppercase text-white">
            Comprehensive Telemetry Audit Table
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#333333] text-[#888888] font-mono uppercase">
                  <th className="pb-3 pl-3">Metric Category</th>
                  <th className="pb-3">September Baseline</th>
                  <th className="pb-3">January Post-Opt</th>
                  <th className="pb-3 text-right pr-3">Observed Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C2C2C]">
                {data.results.metricsTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#2A2A2A] transition-colors">
                    <td className="py-3.5 pl-3 font-bold text-white">{row.metric}</td>
                    <td className="py-3.5 text-[#A0A0A0] font-mono">{row.sep}</td>
                    <td className="py-3.5 font-bold text-emerald-400 font-mono">{row.jan}</td>
                    <td className="py-3.5 text-right pr-3 font-mono font-bold text-[#E97868]">
                      {row.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 06: Metrics Tracked */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-8 shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#E97868]/15 text-[#E97868] uppercase">
              Section 06
            </span>
            <span className="text-xs font-mono text-[#888888] uppercase">Telemetry Taxonomy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Metrics Tracked & Definitions
          </h2>
          <p className="text-xs sm:text-sm text-[#A0A0A0]">
            The core instrumentation framework established across BigQuery and Firebase Analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.metricsTracked.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#242424] border border-[#333333] space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#E97868] px-2 py-0.5 rounded bg-[#E97868]/10">
                  {item.name}
                </span>
                <BarChart2 className="w-3.5 h-3.5 text-[#888888]" />
              </div>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 07: Why It Worked */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-8 shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 uppercase">
              Section 07
            </span>
            <span className="text-xs font-mono text-[#888888] uppercase">Causal Analysis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why It Worked: The 3 Core Growth Drivers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.whyItWorked.map((reason, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#242424] border border-[#333333] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#E97868]/15 text-[#E97868] font-mono font-bold text-xs flex items-center justify-center border border-[#E97868]/20">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white">
                  {reason.title}
                </h3>
              </div>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 08: Key Learnings */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1E1E1E] to-[#262025] border border-[#383838] space-y-8 shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#E97868]/15 text-[#E97868] uppercase">
              Section 08
            </span>
            <span className="text-xs font-mono text-[#888888] uppercase">PM Retrospective</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Key Product Learnings & Takeaways
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.learnings.map((learning, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#191919] border border-[#2D2D2D] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <Sparkles className="w-5 h-5 text-[#E97868]" />
                <h3 className="text-base font-bold text-white">
                  {learning.title}
                </h3>
              </div>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                {learning.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Cross-Navigation CTAs */}
      <div className="p-8 rounded-3xl bg-[#1E1E1E] border border-[#2D2D2D] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-white">
            Explore Other Case Studies
          </h3>
          <p className="text-xs text-[#A0A0A0]">
            Review AI Product Intelligence or Consumer Privacy Architecture.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('ai-implementations')}
            className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white font-bold text-xs transition-all shadow-md flex items-center gap-2"
          >
            <span>AI Implementations & Collage GenAI →</span>
          </button>

          <button
            onClick={() => onNavigate('mp3-converter')}
            className="px-5 py-3 rounded-full bg-gradient-to-r from-[#713B5D] to-[#E97868] hover:opacity-90 text-white font-bold text-xs transition-all shadow-md flex items-center gap-2"
          >
            <span>MP3 Converter Suite →</span>
          </button>

          <button
            onClick={() => onNavigate('review-pilot')}
            className="px-5 py-3 rounded-full bg-[#2A2A2A] hover:bg-[#333333] text-white font-semibold text-xs transition-all border border-[#383838] flex items-center gap-2"
          >
            <span>Review Pilot Study</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E97868]" />
          </button>

          <button
            onClick={() => onNavigate('private-vault')}
            className="px-5 py-3 rounded-full bg-[#2A2A2A] hover:bg-[#333333] text-white font-semibold text-xs transition-all border border-[#383838] flex items-center gap-2"
          >
            <span>Private Vault</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
