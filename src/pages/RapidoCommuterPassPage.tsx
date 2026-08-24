import React from 'react';
import { PageRoute } from '../types';
import { RAPIDO_CASE_STUDY_DATA } from '../data/portfolioData';
import { RapidoCommuterPassMockup } from '../components/RapidoCommuterPassMockup';
import {
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
  MapPin,
  Car,
  Bike
} from 'lucide-react';

interface RapidoCommuterPassPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const RapidoCommuterPassPage: React.FC<RapidoCommuterPassPageProps> = ({ onNavigate }) => {
  const data = RAPIDO_CASE_STUDY_DATA;

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
          Case Study · Mobility & Marketplace Subscriptions
        </span>
      </div>

      {/* Hero Header Section (Page 1 of PDF) */}
      <div className="space-y-6">
        
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#262626] border border-[#383838] text-xs font-mono font-bold text-[#E97868] uppercase tracking-wider">
          <Bike className="w-3.5 h-3.5" />
          <span>{data.header.category}</span>
        </div>

        {/* Title & App Name */}
        <div className="space-y-2 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {data.header.title}
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#E97868] font-mono">
            {data.header.appName}
          </p>
        </div>

        {/* Subtitle / Value Proposition */}
        <p className="text-base sm:text-lg text-zinc-300 font-medium max-w-4xl leading-relaxed">
          {data.header.subtitle}
        </p>

        {/* Metadata Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          
          {/* Tools & Stack */}
          <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase text-[#888888] block">
              Tools & Stack
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
              My Role
            </span>
            <p className="text-xs text-[#CCCCCC] leading-relaxed">
              {data.header.role}
            </p>
          </div>

          {/* Scope & Focus */}
          <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase text-[#888888] block">
              Platform & Focus
            </span>
            <p className="text-xs text-[#EAEAEA] font-mono font-medium">
              {data.header.platform}
            </p>
            <p className="text-[11px] text-[#A0A0A0]">
              {data.header.focus}
            </p>
          </div>
        </div>

      </div>

      {/* Section 01: Snapshot Metrics (Page 2 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E97868]">01</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Snapshot
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {data.snapshot.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#1F1F1F] to-[#171717] border border-[#2D2D2D] space-y-2"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-zinc-300">
                {metric.label}
              </div>
              <div className="text-[11px] font-mono text-[#A0A0A0]">
                {metric.subtitle}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-zinc-500 italic max-w-3xl">
          {data.snapshot.disclaimer}
        </p>
      </div>

      {/* Section 02: Executive Summary & Trajectory (Page 2 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E97868]">02</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Executive Summary
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 12-Month Trajectory Table */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#E97868]">
              12-Month Modeled Trajectory
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[#333333] text-zinc-400">
                    <th className="pb-3 font-bold">Month</th>
                    <th className="pb-3 font-bold">Subscribers</th>
                    <th className="pb-3 font-bold">Revenue (₹Cr)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626] text-white">
                  {data.executiveSummary.trajectory.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 font-bold text-amber-400">{row.month}</td>
                      <td className="py-3 font-medium">{row.subscribers}</td>
                      <td className="py-3 font-bold text-emerald-400">{row.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Core Takeaways */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-2">
              <span className="text-[11px] font-mono uppercase text-rose-400 font-bold block">
                The Problem
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {data.executiveSummary.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-2">
              <span className="text-[11px] font-mono uppercase text-amber-400 font-bold block">
                The Solution
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {data.executiveSummary.solution}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-2">
              <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold block">
                The Impact
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {data.executiveSummary.impact}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Section 03: About Rapido (Page 3 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E97868]">03</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About Rapido
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-6">
          <div className="space-y-2">
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {data.aboutRapido.overview}
            </p>
            <div className="inline-block px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-300 font-bold">
              {data.aboutRapido.scale}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
              <h4 className="text-xs font-mono uppercase text-emerald-400 font-bold">
                Platform Strengths
              </h4>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {data.aboutRapido.strengths.map((str, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
              <h4 className="text-xs font-mono uppercase text-rose-400 font-bold">
                Critical Weaknesses
              </h4>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {data.aboutRapido.weaknesses.map((wk, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>{wk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 04: Competitive Landscape (Page 3 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E97868]">04</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Competitive Landscape
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-6">
          <p className="text-sm font-semibold text-zinc-300 font-mono">
            {data.competitiveLandscape.tagline}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-[#333333] text-zinc-400">
                  <th className="pb-3 font-bold">Feature</th>
                  <th className="pb-3 font-bold">Rapido (Today)</th>
                  <th className="pb-3 font-bold">Ola Postpaid</th>
                  <th className="pb-3 font-bold">Uber Pass</th>
                  <th className="pb-3 font-bold text-amber-400">Commuter Pass (Proposed)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#262626] text-zinc-300">
                {data.competitiveLandscape.comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 font-bold text-white">{row.feature}</td>
                    <td className="py-3 text-zinc-400">{row.rapidoToday}</td>
                    <td className="py-3 text-zinc-400">{row.olaPostpaid}</td>
                    <td className="py-3 text-zinc-400">{row.uberPass}</td>
                    <td className="py-3 font-bold text-amber-300">{row.commuterPass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200">
            {data.competitiveLandscape.opportunity}
          </div>
        </div>
      </div>

      {/* Section 05: Problem Discovery & Failure Analysis (Page 4 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E97868]">05</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Problem Discovery
          </h2>
        </div>

        {/* Voice of Commuters Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.problemDiscovery.voiceOfCommuters.map((voc, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-2">
              <p className="text-xs italic text-zinc-300">"{voc.quote}"</p>
              <span className="text-[10px] font-mono text-[#E97868] block">— {voc.source}</span>
            </div>
          ))}
        </div>

        {/* Peak-Hour Failure Rates Table */}
        <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-4">
          <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#E97868]">
            Peak-Hour Fail Rate (% of rides with no available captain)
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-2">
            {data.problemDiscovery.peakFailRates.map((slot, idx) => {
              const num = parseInt(slot.failRate);
              const isHigh = num >= 25;
              return (
                <div
                  key={idx}
                  className={`p-2.5 rounded-xl border text-center font-mono ${
                    isHigh
                      ? 'bg-rose-950/40 border-rose-500 text-rose-300'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                  }`}
                >
                  <div className="text-[10px] uppercase text-zinc-500">{slot.time}</div>
                  <div className="text-sm font-bold">{slot.failRate}</div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs text-zinc-300">
            {data.problemDiscovery.keyInsights.map((ins, idx) => (
              <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{ins}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 06: User Personas (Page 4 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E97868]">06</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            User Personas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.userPersonas.map((persona, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold">
                  {persona.badge}
                </span>
                <span className="text-xs font-mono text-zinc-400">{persona.location}</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">{persona.name}</h3>
                <p className="text-xs text-zinc-400">{persona.occupation}</p>
              </div>

              <div className="space-y-2 text-xs text-zinc-300">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Goal</span>
                  <p>{persona.goal}</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Frustrations</span>
                  <p className="text-rose-300/90">{persona.frustrations}</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Budget</span>
                  <p className="font-mono font-bold text-emerald-400">{persona.budget}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 07: User Research & JTBD (Page 4 & 5 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E97868]">07</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            User Research & JTBD
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-6">
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30">
            <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block mb-1">
              JOBS TO BE DONE (JTBD)
            </span>
            <p className="text-sm font-semibold text-white italic">
              "{data.userResearch.jtbd}"
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {data.userResearch.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1 text-center">
                <div className="text-2xl font-extrabold font-mono text-amber-400">
                  {stat.agreement}
                </div>
                <div className="text-[11px] text-zinc-400">
                  {stat.statement}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800">
            <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold block mb-2">
              RESEARCH METHODOLOGY
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs text-zinc-300 font-mono">
              {data.userResearch.methodology.map((m, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#222222] border border-zinc-800">
                  • {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 08: Root Cause Analysis & Two-Sided Marketplace Lock (Page 5 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E97868]">08</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Root Cause Analysis
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-6">
          <p className="text-sm text-zinc-300">
            {data.rootCauseAnalysis.overview}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.rootCauseAnalysis.matrix.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                <span className="text-[11px] font-mono font-bold uppercase text-amber-400">
                  {item.dimension}
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {item.factor}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-[#2A1C14] to-[#1A1A1A] border border-amber-500/40 text-xs text-zinc-200 font-mono leading-relaxed">
            {data.rootCauseAnalysis.chain}
          </div>
        </div>
      </div>

      {/* Section 09 & 10: Solution — Interactive Commuter Pass Prototype (Pages 5, 6, 7, 10 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E97868]">09 & 10</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            UI / UX Transformation & Commuter Pass Prototype
          </h2>
        </div>

        {/* Plan Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.solutionTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border space-y-4 ${
                tier.isPopular
                  ? 'bg-gradient-to-b from-amber-950/40 to-[#1A1A1A] border-amber-400 ring-1 ring-amber-400/30'
                  : 'bg-[#1E1E1E] border-[#2D2D2D]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-white">{tier.plan}</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-mono font-bold uppercase">
                  {tier.badge}
                </span>
              </div>
              <div className="text-2xl font-extrabold font-mono text-amber-400">{tier.price}</div>
              <p className="text-xs text-zinc-300">{tier.includes}</p>
              <div className="text-[11px] font-mono text-zinc-500">Best for: {tier.bestFor}</div>
            </div>
          ))}
        </div>

        {/* Live Interactive Prototype */}
        <RapidoCommuterPassMockup />
      </div>

      {/* Section 11: Captain-Side Solution (Page 7 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E97868]">11</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Captain-Side Solution
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-6">
          <div>
            <h3 className="text-base font-bold text-white">{data.captainSideSolution.title}</h3>
            <p className="text-xs text-zinc-400 pt-1">Pain Points Solved: {data.captainSideSolution.painPoints}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.captainSideSolution.tiers.map((t, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                <span className="text-xs font-bold text-amber-400">{t.tier}</span>
                <p className="text-xs font-mono text-zinc-300">{t.bonus}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-300">
            <strong>Value Proposition:</strong> {data.captainSideSolution.value}
          </div>
        </div>
      </div>

      {/* Section 12 & 13: 4-Phase Rollout Roadmap & Marketplace Economics (Page 8 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E97868]">12 & 13</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Why This Works & 4-Phase Rollout Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-3">
            <span className="text-3xl font-extrabold font-mono text-emerald-400">
              {data.twoSidedEconomics.bookingFailuresDelta}
            </span>
            <p className="text-xs text-zinc-400">Reduction in peak-hour ride drop-offs</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-3">
            <span className="text-3xl font-extrabold font-mono text-amber-400">
              {data.twoSidedEconomics.driverUtilizationDelta}
            </span>
            <p className="text-xs text-zinc-400">Increase in captain hourly utilization</p>
          </div>
        </div>

        {/* Roadmap Table */}
        <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-4">
          <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#E97868]">
            Phase-by-Phase Execution Plan
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-[#333333] text-zinc-400">
                  <th className="pb-3 font-bold">Phase</th>
                  <th className="pb-3 font-bold">Timing</th>
                  <th className="pb-3 font-bold">Key Deliverables & Milestones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#262626] text-zinc-300">
                {data.roadmap.map((phase, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 font-bold text-white">{phase.phase}</td>
                    <td className="py-3 text-amber-400">{phase.timing}</td>
                    <td className="py-3">{phase.goals}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 14 & 15: Tradeoffs, Revenue Streams & PM Learnings (Page 8 & 9 of PDF) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E97868]">14 & 15</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Tradeoffs & Key Learnings
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tradeoffs */}
          <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase text-amber-400">
              Strategic Tradeoffs & Risks
            </h3>
            <div className="space-y-3">
              {data.tradeoffsAndLearnings.tradeoffs.map((t, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                  <div className="text-xs font-bold text-white">{t.name}</div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learnings */}
          <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase text-emerald-400">
              Core PM Learnings
            </h3>
            <div className="space-y-3">
              {data.tradeoffsAndLearnings.learnings.map((l, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                  <div className="text-xs font-bold text-emerald-300">{l.title}</div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 16: Closing & Call to Action (Page 9 of PDF) */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1F1812] via-[#141414] to-[#0D0D0D] border border-amber-500/30 text-center space-y-6">
        <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
          Case Study Conclusion
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white max-w-2xl mx-auto">
          Transforming Commuter Loyalty
        </h3>
        <p className="text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          A daily-habit subscription that solves both rider and captain pain — turning a churning ride-hailing market into a high-LTV recurring business.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('swiggy-instamart')}
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-colors flex items-center gap-2"
          >
            <span>Next Case Study: Swiggy Instamart</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('work')}
            className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs transition-colors"
          >
            Back to All Projects
          </button>
        </div>
      </div>

    </div>
  );
};
