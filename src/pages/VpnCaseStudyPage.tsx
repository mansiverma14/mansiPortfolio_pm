import React, { useState } from 'react';
import { PageRoute } from '../types';
import { VPN_CASE_STUDY_DATA } from '../data/vpnCaseStudyData';
import { VpnInteractiveMockup } from '../components/VpnInteractiveMockup';
import {
  Shield,
  Zap,
  Globe,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Layers,
  BarChart3,
  Sparkles,
  Server,
  DollarSign,
  Activity,
  Check,
  X,
  Target,
  Clock,
  Filter,
  Eye,
  Sliders,
  PieChart,
  HelpCircle,
  FileText,
  MousePointer,
  Play
} from 'lucide-react';

interface VpnCaseStudyPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const VpnCaseStudyPage: React.FC<VpnCaseStudyPageProps> = ({ onNavigate }) => {
  const data = VPN_CASE_STUDY_DATA;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center justify-between pb-4 border-b border-[#2D2D2D]">
        <button
          onClick={() => onNavigate('work')}
          className="text-xs font-mono font-semibold text-[#A0A0A0] hover:text-white flex items-center gap-1.5 transition-colors"
        >
          ← Back to Product & Feature Work
        </button>
        <span className="text-xs font-mono font-bold uppercase text-blue-400 tracking-wider">
          Case Study · Monetization & Funnel Analysis
        </span>
      </div>

      {/* Hero Header Section */}
      <div className="space-y-6">
        
        {/* Category Pill */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-[#262626] border border-[#383838] text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            <span>{data.header.category}</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-[#1F2438] border border-blue-500/30 text-xs font-mono font-semibold text-blue-300">
            {data.header.subCategory}
          </span>
        </div>

        {/* Title */}
        <div className="space-y-3 max-w-5xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {data.header.title}
          </h1>
          <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent font-mono">
            {data.header.appName} · End-to-End Product Analysis
          </p>
        </div>

        {/* Subtitle / Value Proposition */}
        <div className="p-6 rounded-3xl bg-[#1A1C28] border border-blue-500/20 space-y-4 max-w-5xl">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-blue-400 block mb-1">
              About Product
            </span>
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
              VPN is a consumer utility application helping users browse securely while unlocking geo-restricted content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-white/10">
            {/* Business Model */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase block">
                Business Model
              </span>
              <div className="flex flex-wrap gap-1.5">
                {data.header.businessModel.map((bm, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-[#252A3D] text-zinc-200 border border-white/5 font-mono">
                    {bm}
                  </span>
                ))}
              </div>
            </div>

            {/* My Role */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase block">
                My Role
              </span>
              <p className="text-sm font-bold text-white">{data.header.role}</p>
              <p className="text-xs text-zinc-400 font-mono">Growth, Telemetry & Monetization</p>
            </div>

            {/* Core Stack */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase block">
                Tools & Stack
              </span>
              <div className="flex flex-wrap gap-1">
                {data.header.tools.map((tool, i) => (
                  <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-blue-950/60 border border-blue-500/40 text-blue-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Prototype Section */}
      <div id="live-interactive-prototype" className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
            <h2 className="text-xl font-bold text-white">Interactive Case Study Simulation</h2>
          </div>
          <span className="text-xs font-mono text-zinc-400">Section 01–15 Real Data Explorer</span>
        </div>
        <VpnInteractiveMockup />
      </div>

      {/* ========================================================================= */}
      {/* 01 & 02: BUSINESS PROBLEM & INITIAL METRICS                                */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 01 Business Problem */}
        <div className="lg:col-span-6 p-8 rounded-[36px] bg-[#1A1A22] border border-[#2E2E38] space-y-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-rose-950/60 border border-rose-500/40 text-rose-300">
                01
              </span>
              <h2 className="text-2xl font-bold text-white">{data.section01_businessProblem.headline}</h2>
            </div>
            <p className="text-sm text-zinc-300 font-medium leading-relaxed">
              {data.section01_businessProblem.description}
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            <span className="text-xs font-mono font-bold uppercase text-[#888888] block">
              Major Issues Identified:
            </span>
            <div className="space-y-2">
              {data.section01_businessProblem.majorIssues.map((issue, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-[#22222C] border border-rose-500/20 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-medium text-zinc-200">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 02 Initial Metrics Table */}
        <div className="lg:col-span-6 p-8 rounded-[36px] bg-[#1A1A22] border border-[#2E2E38] space-y-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-500/40 text-blue-300">
                  02
                </span>
                <h2 className="text-2xl font-bold text-white">{data.section02_initialMetrics.title}</h2>
              </div>
              <span className="text-xs font-mono text-rose-400 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30">
                Baseline (Pre-Fix)
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              Raw product telemetry captured before running diagnostic query pipelines.
            </p>
          </div>

          {/* Exact Metrics Table */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#121218]">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 bg-[#1A1D2A] text-zinc-300">
                  <th className="py-3 px-4 font-bold">Metric</th>
                  <th className="py-3 px-4 font-bold text-right">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-200">
                {data.section02_initialMetrics.metricsTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-2.5 px-4 font-medium">{row.metric}</td>
                    <td className={`py-2.5 px-4 text-right font-bold ${
                      row.value === 'Declining' || row.value === '10%' || row.value === '2.1%' || row.value === '0.9%'
                        ? 'text-rose-400'
                        : 'text-white'
                    }`}>
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 03 & 04: PRODUCT HEALTH & FUNNEL ANALYSIS                                 */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 03 Product Health Analysis */}
        <div className="lg:col-span-5 p-8 rounded-[36px] bg-[#161924] border border-blue-500/30 space-y-6 shadow-xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-500/40 text-blue-300">
                03
              </span>
              <h2 className="text-2xl font-bold text-white">{data.section03_productHealthAnalysis.title}</h2>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {data.section03_productHealthAnalysis.description}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-zinc-400 block">
              Investigated Dimensions:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {data.section03_productHealthAnalysis.investigatedAreas.map((area, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-[#1D2233] border border-white/5 text-xs text-zinc-200 font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 04 Funnel Analysis */}
        <div className="lg:col-span-7 p-8 rounded-[36px] bg-[#1A1A22] border border-[#2E2E38] space-y-6 shadow-xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-amber-950/60 border border-amber-500/40 text-amber-300">
                04
              </span>
              <h2 className="text-2xl font-bold text-white">{data.section04_funnelAnalysis.title}</h2>
            </div>
          </div>

          {/* Funnel Visual Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-[#22222C] border border-white/10 space-y-1">
              <span className="text-xs font-mono text-zinc-400 block">Users</span>
              <span className="text-2xl font-extrabold text-white block">15,132</span>
              <span className="text-[10px] font-mono text-zinc-500 block">Top of funnel</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#22222C] border border-amber-500/30 space-y-1">
              <span className="text-xs font-mono text-amber-400 block">Clicked Buy</span>
              <span className="text-2xl font-extrabold text-amber-300 block">3,998</span>
              <span className="text-[10px] font-mono text-amber-400/80 block">26.4% click CTR</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#22222C] border border-rose-500/30 space-y-1">
              <span className="text-xs font-mono text-rose-400 block">Purchased</span>
              <span className="text-2xl font-extrabold text-rose-400 block">136</span>
              <span className="text-[10px] font-mono text-rose-400/80 block">3.4% checkout rate</span>
            </div>
          </div>

          {/* Problem & Meaning Breakdown */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#241C24] to-[#1C1820] border border-amber-500/40 space-y-3">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-amber-300 uppercase block">
                Problem Discovery
              </span>
              <p className="text-sm font-bold text-white">
                {data.section04_funnelAnalysis.problem}
              </p>
            </div>

            <div className="pt-2 border-t border-white/10 space-y-1">
              <span className="text-xs font-mono font-bold text-zinc-400 uppercase block">Meaning</span>
              <p className="text-xs text-zinc-200">
                • {data.section04_funnelAnalysis.meaning}
              </p>
              <p className="text-xs text-zinc-200 font-semibold text-amber-300">
                • {data.section04_funnelAnalysis.subMeaning}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 05, 06 & 07: HOME SCREEN & COUNTRY MONETIZATION                           */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 05 Home Screen Analysis */}
        <div className="lg:col-span-5 p-8 rounded-[36px] bg-[#1A1A22] border border-[#2E2E38] space-y-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-500/40 text-blue-300">
                05
              </span>
              <h2 className="text-2xl font-bold text-white">{data.section05_homeScreenAnalysis.title}</h2>
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-zinc-400 block">Found:</span>
              <div className="p-4 rounded-2xl bg-[#22222C] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-300">Successfully Connected</span>
                  <span className="font-bold font-mono text-emerald-400 text-sm">147K users</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-300">Clicked Premium</span>
                  <span className="font-bold font-mono text-amber-400 text-sm">10.6K users</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#1C2030] border border-blue-500/30 space-y-1.5">
            <span className="text-xs font-mono font-bold text-blue-300 block">Meaning:</span>
            {data.section05_homeScreenAnalysis.meaning.map((m, idx) => (
              <p key={idx} className="text-xs text-zinc-200">
                • {m}
              </p>
            ))}
          </div>
        </div>

        {/* 06 Country Analysis */}
        <div className="lg:col-span-7 p-8 rounded-[36px] bg-[#1A1A22] border border-[#2E2E38] space-y-6 shadow-xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/40 text-purple-300">
                06
              </span>
              <h2 className="text-2xl font-bold text-white">{data.section06_countryAnalysis.title}</h2>
            </div>
            <p className="text-xs text-zinc-300">
              {data.section06_countryAnalysis.description}
            </p>
          </div>

          {/* 3 Country Segments */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {data.section06_countryAnalysis.segments.map((seg, i) => (
              <div
                key={i}
                className={`p-4 rounded-2xl border space-y-2 ${
                  seg.category === 'High Revenue'
                    ? 'bg-emerald-950/30 border-emerald-500/30'
                    : seg.category === 'High Traffic'
                    ? 'bg-blue-950/30 border-blue-500/30'
                    : 'bg-rose-950/30 border-rose-500/30'
                }`}
              >
                <span className={`text-xs font-mono font-bold block ${
                  seg.category === 'High Revenue' ? 'text-emerald-300' : seg.category === 'High Traffic' ? 'text-blue-300' : 'text-rose-300'
                }`}>
                  {seg.category}
                </span>
                <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                  {seg.countries.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Recommendation */}
          <div className="p-4 rounded-2xl bg-[#1E2436] border border-blue-500/40 space-y-1">
            <span className="text-xs font-mono font-bold text-blue-300 uppercase block">Recommendation</span>
            <p className="text-xs text-white font-medium">
              {data.section06_countryAnalysis.recommendation}
            </p>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 07: COUNTRY-WISE PACK PREFERENCE (EXACT DATA TABLE)                       */}
      {/* ========================================================================= */}
      <div className="p-8 rounded-[36px] bg-[#1A1A22] border border-[#2E2E38] space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
              07
            </span>
            <h2 className="text-2xl font-bold text-white">{data.section07_countryPackPreference.title}</h2>
          </div>
          <span className="text-xs font-mono text-amber-400 font-bold">
            {data.section07_countryPackPreference.ltoTitle}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LTO Table (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-mono font-bold text-zinc-400 uppercase block">
              LTO Pack Purchases By Country (Exact Values):
            </span>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#121218]">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-white/10 bg-[#1F2438] text-zinc-300">
                    <th className="py-3 px-4 font-bold">Country</th>
                    <th className="py-3 px-4 font-bold text-right">Purchases</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-200">
                  {data.section07_countryPackPreference.ltoPurchases.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="py-2.5 px-4 font-medium">{row.country}</td>
                      <td className="py-2.5 px-4 text-right font-bold text-emerald-400">{row.purchases}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Yearly / Monthly & Key Insight (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-[#22222C] border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-zinc-300 block">Yearly Plan (Best Countries)</span>
              <p className="text-xs text-zinc-200">
                {data.section07_countryPackPreference.yearlyPlanBestCountries.join(' • ')}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#22222C] border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-zinc-300 block">Monthly Plan (Strong Countries)</span>
              <p className="text-xs text-zinc-200">
                {data.section07_countryPackPreference.monthlyPlanStrongCountries.join(' • ')}
              </p>
            </div>

            {/* Key Insight Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/40 to-[#1E1E1E] border border-amber-500/40 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-300 uppercase block flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Monetization Discovery</span>
              </span>
              <p className="text-xs text-zinc-100 font-semibold leading-relaxed">
                {data.section07_countryPackPreference.keyInsight}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 08 & 09: ADMOB ANALYSIS & MEDIATION OPTIMIZATION                          */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 08 AdMob Analysis */}
        <div className="lg:col-span-5 p-8 rounded-[36px] bg-[#1A1A22] border border-[#2E2E38] space-y-6 shadow-xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-500/40 text-blue-300">
                08
              </span>
              <h2 className="text-2xl font-bold text-white">{data.section08_admobAnalysis.title}</h2>
            </div>
            <p className="text-sm font-bold text-amber-300">
              {data.section08_admobAnalysis.finding}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-zinc-400 block">It was limited by:</span>
            <div className="space-y-2">
              {data.section08_admobAnalysis.limitedBy.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#22222C] border border-white/5 flex items-center gap-2.5 text-xs text-zinc-200 font-mono">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 09 Mediation Optimization */}
        <div className="lg:col-span-7 p-8 rounded-[36px] bg-[#1A1A22] border border-[#2E2E38] space-y-6 shadow-xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                09
              </span>
              <h2 className="text-2xl font-bold text-white">{data.section09_mediationOptimization.title}</h2>
            </div>
            <p className="text-xs text-zinc-400">
              Optimized: <span className="text-white font-bold">{data.section09_mediationOptimization.optimizedCountries.join(' • ')}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#22222C] border border-white/5 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-300 block uppercase">Actions</span>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {data.section09_mediationOptimization.actions.map((act, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#22222C] border border-white/5 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-300 block uppercase">Expected</span>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {data.section09_mediationOptimization.expected.map((exp, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 10 & 11: PAYWALL & HOME UX IMPROVEMENTS                                   */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 10 Paywall Improvements */}
        <div className="lg:col-span-6 p-8 rounded-[36px] bg-[#1A1A22] border border-[#2E2E38] space-y-6 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/40 text-purple-300">
              10
            </span>
            <h2 className="text-2xl font-bold text-white">{data.section10_paywallImprovements.title}</h2>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-zinc-400 uppercase block">
              7 Recommendations:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {data.section10_paywallImprovements.recommendations.map((rec, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#22222C] border border-white/5 flex items-center gap-2.5 text-xs text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 11 Home UX Improvements */}
        <div className="lg:col-span-6 p-8 rounded-[36px] bg-[#1A1A22] border border-[#2E2E38] space-y-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-500/40 text-blue-300">
                11
              </span>
              <h2 className="text-2xl font-bold text-white">{data.section11_homeUxImprovements.title}</h2>
            </div>

            {/* Designed Flow Vertical Breadcrumb */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-zinc-400 block">Designed Flow:</span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {data.section11_homeUxImprovements.designedFlow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3 py-1.5 rounded-xl bg-[#252A3D] text-white border border-blue-500/30">
                      {step}
                    </span>
                    {idx < data.section11_homeUxImprovements.designedFlow.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#1C2030] border border-blue-500/30 space-y-1">
            <p className="text-xs text-zinc-300 italic">
              "{data.section11_homeUxImprovements.rationale}"
            </p>
            <p className="text-xs font-semibold text-emerald-400">
              {data.section11_homeUxImprovements.outcome}
            </p>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 12 & 13: EXPERIMENTS PLANNED & EXPECTED IMPACT                            */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 12 Experiments Planned */}
        <div className="lg:col-span-7 p-8 rounded-[36px] bg-[#1A1A22] border border-[#2E2E38] space-y-6 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-amber-950/60 border border-amber-500/40 text-amber-300">
              12
            </span>
            <h2 className="text-2xl font-bold text-white">{data.section12_experimentsPlanned.title}</h2>
          </div>

          <div className="space-y-3">
            {data.section12_experimentsPlanned.experiments.map((exp) => (
              <div key={exp.id} className="p-4 rounded-2xl bg-[#22222C] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400">{exp.testName}</span>
                  <span className="text-[10px] font-mono text-zinc-400">A/B Variant Comparison</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-300 font-mono font-medium">
                    {exp.variantA}
                  </span>
                  <span className="text-zinc-500 font-mono font-bold">vs</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#18181F] border border-white/10 text-zinc-300 font-mono font-medium">
                    {exp.variantB}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 13 Expected Impact */}
        <div className="lg:col-span-5 p-8 rounded-[36px] bg-[#161924] border border-blue-500/30 space-y-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-500/40 text-blue-300">
                13
              </span>
              <h2 className="text-2xl font-bold text-white">{data.section13_expectedImpact.title}</h2>
            </div>
            <p className="text-xs text-zinc-300">
              Projected outcomes across retention, funnel conversion, and auction yields.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {data.section13_expectedImpact.impactList.map((imp, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#1E2436] border border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-200">{imp.metric}</span>
                <span className="text-sm font-extrabold text-emerald-400 font-mono">{imp.direction}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 14 & 15: PRODUCT THINKING & MY CONTRIBUTIONS                               */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 14 Product Thinking */}
        <div className="lg:col-span-6 p-8 rounded-[36px] bg-gradient-to-br from-[#1E1B28] to-[#14141C] border border-purple-500/30 space-y-6 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/40 text-purple-300">
              14
            </span>
            <h2 className="text-2xl font-bold text-white">{data.section14_productThinking.title}</h2>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-xs font-mono text-zinc-400 block">Instead of asking:</span>
              <p className="text-sm font-bold text-zinc-300 italic">
                "{data.section14_productThinking.insteadOfAsking}"
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/40 space-y-1">
              <span className="text-xs font-mono text-purple-300 font-bold block">I asked:</span>
              <p className="text-base font-extrabold text-white">
                "{data.section14_productThinking.iAsked}"
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed pt-2 border-t border-white/10">
            {data.section14_productThinking.outcomeNarrative}
          </p>
        </div>

        {/* 15 My Contributions */}
        <div className="lg:col-span-6 p-8 rounded-[36px] bg-[#1A1A22] border border-[#2E2E38] space-y-6 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
              15
            </span>
            <h2 className="text-2xl font-bold text-white">{data.section15_myContributions.title}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {data.section15_myContributions.contributions.map((cb, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#22222C] border border-white/5 flex items-center gap-2 text-xs text-zinc-200 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{cb}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom CTA Navigation */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={() => onNavigate('work')}
          className="px-6 py-3 rounded-full bg-[#242424] hover:bg-[#303030] text-white font-bold text-xs flex items-center gap-2 transition-all"
        >
          <span>← Back to All Projects</span>
        </button>

        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-lg"
        >
          <span>Discuss VPN Monetization Strategy</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
