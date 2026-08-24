import React from 'react';
import { PageRoute } from '../types';
import { LITE_VIDEO_PLAYER_DATA } from '../data/portfolioData';
import { LiteVideoPlayerMockup } from '../components/LiteVideoPlayerMockup';
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
  PieChart,
  Wifi,
  WifiOff,
  Video,
  Play,
  RotateCcw,
  Check,
  Film
} from 'lucide-react';

interface LiteVideoPlayerPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const LiteVideoPlayerPage: React.FC<LiteVideoPlayerPageProps> = ({ onNavigate }) => {
  const data = LITE_VIDEO_PLAYER_DATA;

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
          Case Study · Performance & Ad Mediation
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

        {/* Subtitle / Value Proposition */}
        <p className="text-base sm:text-lg text-zinc-300 font-medium max-w-3xl leading-relaxed">
          {data.subtitle}
        </p>

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

          {/* Role & Timeline */}
          <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-1.5">
            <span className="text-[11px] font-mono font-bold uppercase text-[#888888] block">
              Role & Timeline
            </span>
            <p className="text-sm font-bold text-white">
              {data.role}
            </p>
            <p className="text-xs font-mono text-[#E97868]">
              {data.timeline}
            </p>
          </div>

          {/* Competency Pillars */}
          <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase text-[#888888] block">
              Competency Pillars
            </span>
            <div className="flex flex-wrap gap-1.5">
              {data.pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="px-2 py-0.5 rounded-md bg-[#2A2321] text-[#E97868] text-[11px] font-mono font-semibold border border-[#E97868]/30"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* 6 Headline Impact Metrics Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#1C1C1C] border border-[#2D2D2D] space-y-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-[#2D2D2D] pb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#E97868]" />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
              Headline Monetization Transformation Metrics
            </h3>
          </div>
          <span className="text-xs font-mono text-[#888888]">1 Month Post-Launch Results</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {data.headlineMetrics.map((metric, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#252525] border border-[#333333] space-y-1">
              <span className="text-[10px] font-mono text-[#888888] uppercase block">
                {metric.label}
              </span>
              <div className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight">
                {metric.value}
              </div>
              <p className="text-[10px] text-[#E97868] font-mono font-medium">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Live Interactive Preload & Mediation Demonstrator */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Interactive Preload-First Architecture & Player Simulation
          </h2>
          <span className="text-xs font-mono text-[#E97868] font-bold">Interactive Feature Demo</span>
        </div>
        
        <LiteVideoPlayerMockup />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 01: OVERVIEW & GOAL (Page 2 of PDF)                                */}
      {/* ========================================================================= */}
      <div className="space-y-6 pt-4 border-t border-[#2D2D2D]">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#E97868]">01</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Overview & Context
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-3">
            <div className="w-8 h-8 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
              <Film className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white">Product Architecture</h3>
            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              <strong>Lite Video Player (Android)</strong> — offline-first local video player with a rapidly growing online content layer (Shorts feed, online subtitles search).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white">Measurement Window</h3>
            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              September baseline → Nov 30–Dec 30 (1-month post-transformation results window) monitored in real-time via BigQuery & Firebase.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Target className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white">Strategic Objective</h3>
            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              Increase ad reliability, raise eCPM + impressions, and unlock previously un-monetized sessions by bringing offline users into the online layer.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 02: STARTING POINT (Page 2 of PDF)                                */}
      {/* ========================================================================= */}
      <div className="space-y-6 pt-4 border-t border-[#2D2D2D]">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#E97868]">
            {data.startingPoint.sectionNum}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {data.startingPoint.title}
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[#A0A0A0] max-w-3xl">
          Diagnostic analysis in September revealed three critical architectural bottlenecks capping monetization potential:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.startingPoint.issues.map((issue) => (
            <div
              key={issue.num}
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-red-500/20 space-y-4 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-red-400">Problem {issue.num}</span>
                <AlertTriangle className="w-4 h-4 text-red-400" />
              </div>
              <h3 className="text-base font-bold text-white leading-snug">
                {issue.title}
              </h3>
              <ul className="space-y-2">
                {issue.bullets.map((b, bi) => (
                  <li key={bi} className="text-xs text-[#A0A0A0] leading-relaxed flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 03: WHAT I BUILT (SOLUTION) (Page 2 & 3 of PDF)                   */}
      {/* ========================================================================= */}
      <div className="space-y-8 pt-4 border-t border-[#2D2D2D]">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#E97868]">
            {data.whatIBuilt.sectionNum}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {data.whatIBuilt.title}
          </h2>
        </div>

        {/* 1. Preload-First Ad System (Core Fix) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-mono font-bold">
                1. Core Fix
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Preload-first ad system across the app
              </h3>
            </div>
            <p className="text-sm text-zinc-300 font-mono">
              <strong>Strategy:</strong> Keep an ad preloaded and ready in memory <em>before</em> the app reaches the moment it wants to show.
            </p>
          </div>

          {/* 4-Step Implementation Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.whatIBuilt.subsections[0].implementationFlow?.map((step, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#252525] border border-[#333333] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#E97868]">Step 0{idx + 1}</span>
                  <Zap className="w-3.5 h-3.5 text-[#E97868]" />
                </div>
                <h4 className="text-sm font-bold text-white font-mono">{step.step}</h4>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Eligibility Rules */}
          <div className="p-4 rounded-2xl bg-[#151515] border border-[#2D2D2D] space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E97868] block">
              Eligibility Rules & Decision Order Added:
            </span>
            <ul className="space-y-1.5 text-xs text-zinc-300 font-mono">
              {data.whatIBuilt.subsections[0].eligibilityRules?.map((rule, ri) => (
                <li key={ri} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 2 & 3: Mediation + Native Monetization System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Subsection 2: Mediation & A/B Experimentation */}
          <div className="p-6 rounded-3xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold">
                2. Mediation
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Mediation for preload inventory + experimentation
              </h3>
            </div>
            <p className="text-xs text-red-300 font-mono">
              <strong>Problem:</strong> Single-source demand wasn\'t consistent; performance varied across IDs and networks.
            </p>
            <ul className="space-y-2">
              {data.whatIBuilt.subsections[1].actions?.map((act, ai) => (
                <li key={ai} className="text-xs text-[#A0A0A0] leading-relaxed flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Subsection 3: Native Monetization System */}
          <div className="p-6 rounded-3xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-300 text-xs font-mono font-bold">
                3. Native Rotation
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Multiple units + eCPM-prioritized rotation
              </h3>
            </div>
            <p className="text-xs text-blue-300 font-mono">
              <strong>Strategy:</strong> Maintain 4 native slots, prioritizing top eCPM bids with fallback to banner.
            </p>
            <ul className="space-y-2">
              {data.whatIBuilt.subsections[2].actions?.map((act, ai) => (
                <li key={ai} className="text-xs text-[#A0A0A0] leading-relaxed flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 4 & 5: Placement Iteration & Bringing Offline Users Online */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Subsection 4: Placement + Ad Design */}
          <div className="p-6 rounded-3xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
                4. Placement
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Placement & ad design iteration
              </h3>
            </div>
            <ul className="space-y-2">
              {data.whatIBuilt.subsections[3].actions?.map((act, ai) => (
                <li key={ai} className="text-xs text-[#A0A0A0] leading-relaxed flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Subsection 5: Bringing Offline Users Online */}
          <div className="p-6 rounded-3xl bg-[#1E1E1E] border border-emerald-500/30 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                5. Product Unlock
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Bringing offline users online
              </h3>
            </div>
            <p className="text-xs text-emerald-300 font-mono">
              <strong>Key insight:</strong> Offline usage was a hard ceiling on monetization.
            </p>
            <ul className="space-y-2">
              {data.whatIBuilt.subsections[4].shippedInitiatives?.map((init, ii) => (
                <li key={ii} className="text-xs text-[#A0A0A0] leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>{init}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* SECTION 04: RESULTS (SEP VS NOV 30–DEC 30) (Page 4 of PDF)               */}
      {/* ========================================================================= */}
      <div className="space-y-6 pt-4 border-t border-[#2D2D2D]">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#E97868]">
            {data.results.sectionNum}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {data.results.title}
          </h2>
        </div>

        {/* Revenue Summary Comparison Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2D2D2D] pb-4">
            <div>
              <h3 className="text-lg font-bold text-white font-mono">A) Revenue (All Ad Formats)</h3>
              <p className="text-xs text-[#888888]">
                Comparing estimated monthly baseline (Sep) to 30-day post-optimization window (Nov 30–Dec 30).
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-center sm:text-right">
              <div className="text-xs font-mono uppercase">Overall Revenue Impact</div>
              <div className="text-2xl font-black font-mono text-emerald-400">~2.65× Growth</div>
            </div>
          </div>

          {/* Full Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#2D2D2D]">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#262626] text-zinc-400 border-b border-[#333333]">
                <tr>
                  <th className="p-3.5">Ad Format</th>
                  <th className="p-3.5">September Earnings</th>
                  <th className="p-3.5">Nov 30–Dec 30 Earnings</th>
                  <th className="p-3.5">Growth Multiplier</th>
                  <th className="p-3.5">Observed eCPM ($)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A2A2A] bg-[#1E1E1E]">
                {data.results.revenueByFormat.map((row, idx) => (
                  <tr key={idx} className={row.isHero ? 'bg-red-950/20 font-bold' : ''}>
                    <td className="p-3.5 text-white flex items-center gap-2">
                      {row.isHero && <span className="w-2 h-2 rounded-full bg-red-400" />}
                      <span>{row.format}</span>
                    </td>
                    <td className="p-3.5 text-zinc-400">{row.sep}</td>
                    <td className="p-3.5 text-emerald-400 font-bold">{row.dec}</td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                        {row.growth}
                      </span>
                    </td>
                    <td className="p-3.5 text-zinc-300">
                      {row.ecpmBefore} → <strong className="text-white">{row.ecpmAfter}</strong>{' '}
                      <span className="text-emerald-400">({row.ecpmGrowth})</span>
                    </td>
                  </tr>
                ))}
                <tr className="bg-[#2A2A2A] font-black text-white text-sm">
                  <td className="p-3.5">TOTAL ESTIMATED REVENUE</td>
                  <td className="p-3.5 text-zinc-400">~{data.results.totalSep}</td>
                  <td className="p-3.5 text-emerald-400">~{data.results.totalDec}</td>
                  <td className="p-3.5 text-emerald-300">~2.65×</td>
                  <td className="p-3.5 text-zinc-400">All Networks Unified</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Operational Wins Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {data.results.operationalWins.map((win, wi) => (
              <div key={wi} className="p-3 rounded-xl bg-[#252525] border border-[#333333] flex items-center gap-2 text-xs font-mono text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{win}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 05: WHY IT WORKED (LEARNINGS) (Page 5 of PDF)                     */}
      {/* ========================================================================= */}
      <div className="space-y-6 pt-4 border-t border-[#2D2D2D]">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#E97868]">
            {data.whyItWorked.sectionNum}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {data.whyItWorked.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.whyItWorked.learnings.map((learning, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-3 flex flex-col justify-between hover:border-[#E97868]/40 transition-colors"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#2A2321] text-[#E97868] flex items-center justify-center font-mono font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
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

      {/* Bottom Cross-Navigation */}
      <div className="p-8 rounded-3xl bg-[#1E1E1E] border border-[#2D2D2D] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-mono uppercase text-[#888888]">Next Case Study</span>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            HD Video Downloader — VidFetch Ad Strategy
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('work')}
            className="px-5 py-2.5 rounded-xl border border-[#383838] text-xs font-mono font-bold text-[#A0A0A0] hover:text-white hover:border-white transition-colors"
          >
            ← All Case Studies
          </button>
          
          <button
            onClick={() => onNavigate('hd-video-downloader')}
            className="px-6 py-2.5 rounded-xl bg-[#E97868] hover:bg-[#D86757] text-black text-xs font-mono font-bold transition-transform hover:scale-105 flex items-center gap-2 shadow-lg"
          >
            <span>View VidFetch Study</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
