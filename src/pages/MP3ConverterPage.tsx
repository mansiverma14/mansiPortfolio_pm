import React, { useState } from 'react';
import { PageRoute } from '../types';
import { MP3_CONVERTER_DATA } from '../data/portfolioData';
import { MP3ConverterMockup } from '../components/MP3ConverterMockup';
import {
  Music,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Layers,
  BarChart3,
  DollarSign,
  Tv,
  CheckCircle2,
  AlertCircle,
  Clock,
  Zap,
  Target,
  Sliders,
  FileText,
  Search,
  Filter,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Database,
  Eye,
  Percent,
  Compass,
  LayoutGrid
} from 'lucide-react';

interface MP3ConverterPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const MP3ConverterPage: React.FC<MP3ConverterPageProps> = ({ onNavigate }) => {
  const [activeStudyTab, setActiveStudyTab] = useState<'both' | 'monetization' | 'retention'>('both');

  const { retentionStudy, monetizationStudy, tools, myRole, competencies } = MP3_CONVERTER_DATA;

  return (
    <div className="min-h-screen bg-[#121215] text-[#E0E0E6] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between pb-4 border-b border-[#2A2A33]">
        <button
          onClick={() => onNavigate('work')}
          className="text-xs font-mono font-semibold text-[#A0A0B0] hover:text-white flex items-center gap-1.5 transition-colors"
        >
          ← Back to Portfolio
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#713B5D]/20 text-[#E97868] border border-[#713B5D]/40 font-bold uppercase tracking-wider">
            Case Study Suite
          </span>
        </div>
      </div>

      {/* Main Hero Header */}
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#713B5D]/30 to-[#E97868]/30 border border-[#E97868]/40 text-xs font-mono font-bold text-white">
            <Music className="w-3.5 h-3.5 text-[#E97868]" />
            <span>Product & Feature Work • Monetization Transformation</span>
          </div>
          <span className="text-xs font-mono text-zinc-500">•</span>
          <span className="text-xs font-mono text-zinc-400">Audio Editing & Utility Suite</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          MP3 Converter — Retention, Engagement & Monetization Suite
        </h1>

        <p className="text-base sm:text-lg text-[#A0A0B0] max-w-4xl leading-relaxed">
          Took a single-purpose conversion utility and reframed it as a light media toolkit — eliminating aggressive first-session splash drop-offs, unifying multi-track audio workflows, and deploying high-intent post-processing ad flows that lifted revenue <strong className="text-white font-mono font-bold">~2.5X</strong> and ARPU <strong className="text-white font-mono font-bold">~3X</strong>.
        </p>

        {/* Tools & Tech Stack Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {tools.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#1A1A22] text-[#D0D0DC] border border-[#2D2D38] font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Case Study Selection Switcher */}
        <div className="p-2 rounded-2xl bg-[#1A1A22] border border-[#2D2D38] flex flex-wrap items-center justify-between gap-3 mt-4">
          <div className="flex items-center gap-2 px-3">
            <LayoutGrid className="w-4 h-4 text-[#E97868]" />
            <span className="text-xs font-mono font-bold text-white">Select Case Study Focus:</span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setActiveStudyTab('both')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeStudyTab === 'both'
                  ? 'bg-gradient-to-r from-[#713B5D] to-[#E97868] text-white shadow-lg'
                  : 'text-zinc-400 hover:text-white hover:bg-[#252530]'
              }`}
            >
              All-in-One Comprehensive View
            </button>

            <button
              onClick={() => setActiveStudyTab('monetization')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeStudyTab === 'monetization'
                  ? 'bg-[#E97868] text-[#121215] font-extrabold shadow-lg'
                  : 'text-zinc-400 hover:text-white hover:bg-[#252530]'
              }`}
            >
              Study B: Monetization Transformation
            </button>

            <button
              onClick={() => setActiveStudyTab('retention')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeStudyTab === 'retention'
                  ? 'bg-[#713B5D] text-white font-extrabold shadow-lg'
                  : 'text-zinc-400 hover:text-white hover:bg-[#252530]'
              }`}
            >
              Study A: Retention & Engagement
            </button>
          </div>
        </div>

      </div>

      {/* Hero Stat Highlights Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {monetizationStudy.heroMetrics.map((metric, i) => (
          <div
            key={i}
            className="p-4 rounded-2xl bg-[#18181E] border border-[#2A2A33] hover:border-[#E97868]/40 transition-all space-y-1 text-center"
          >
            <div className="text-[10px] font-mono text-[#888899] uppercase tracking-wider">
              {metric.label}
            </div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono">
              {metric.value}
            </div>
            <div className="text-[10px] text-[#A0A0B0] font-mono">
              {metric.subtitle}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Mockup Component */}
      <div className="max-w-6xl mx-auto">
        <MP3ConverterMockup />
      </div>

      {/* Role & PM Ownership Section */}
      <div className="max-w-6xl mx-auto bg-[#18181E] border border-[#2A2A33] rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#2A2A33]">
          <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#E97868]" />
            <span>My Role as Product Manager</span>
          </h3>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/10 text-zinc-300 font-bold">
            End-to-End Ownership
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#B0B0C0] leading-relaxed">
          {retentionStudy.myRoleDetail}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
          {myRole.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-mono text-[#D0D0DC]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CASE STUDY 2: MONETIZATION & PRODUCT TRANSFORMATION                       */}
      {/* ========================================================================= */}
      {(activeStudyTab === 'both' || activeStudyTab === 'monetization') && (
        <section className="max-w-6xl mx-auto space-y-12 pt-8 border-t border-[#2A2A33]">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E97868]/20 text-[#E97868] text-xs font-mono font-bold border border-[#E97868]/30">
              <DollarSign className="w-3.5 h-3.5" />
              <span>CASE STUDY PART 1 · MONETIZATION TRANSFORMATION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {monetizationStudy.title}
            </h2>
            <p className="text-sm sm:text-base text-[#A0A0B0] max-w-3xl">
              {monetizationStudy.subtitle}
            </p>
          </div>

          {/* Section 01: Problem Statement */}
          <div className="bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2A2A33]">
              <span className="text-sm font-black font-mono px-2.5 py-1 rounded-lg bg-[#E97868]/20 text-[#E97868]">
                {monetizationStudy.problemStatement.sectionNum}
              </span>
              <h3 className="text-lg font-extrabold text-white font-mono">
                {monetizationStudy.problemStatement.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {monetizationStudy.problemStatement.points.map((point, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-[#131317] border border-[#282830] space-y-1.5 flex items-start gap-3"
                >
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-[#C0C0D0] leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 02: Turning Point (Key Insight) */}
          <div className="bg-gradient-to-br from-[#1E1B4B]/80 to-[#2E1065]/80 rounded-3xl border border-indigo-500/30 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-indigo-500/30">
              <span className="text-sm font-black font-mono px-2.5 py-1 rounded-lg bg-indigo-500/30 text-indigo-300">
                {monetizationStudy.turningPoint.sectionNum}
              </span>
              <h3 className="text-lg font-extrabold text-white font-mono">
                {monetizationStudy.turningPoint.title}
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-indigo-400/30 space-y-2">
              <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider">
                Behavioral Discovery
              </span>
              <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                "{monetizationStudy.turningPoint.insight}"
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-indigo-200 uppercase">
                Resulting Strategy:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {monetizationStudy.turningPoint.strategy.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-black/30 border border-white/10 space-y-1">
                    <div className="text-xs font-mono font-bold text-indigo-300">0{idx + 1}.</div>
                    <div className="text-xs text-[#D0D0DC] leading-relaxed">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 03: Action Taken */}
          <div className="bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2A2A33]">
              <span className="text-sm font-black font-mono px-2.5 py-1 rounded-lg bg-[#E97868]/20 text-[#E97868]">
                {monetizationStudy.actionTaken.sectionNum}
              </span>
              <h3 className="text-lg font-extrabold text-white font-mono">
                {monetizationStudy.actionTaken.title}
              </h3>
            </div>

            <div className="space-y-2.5">
              {monetizationStudy.actionTaken.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#131317] border border-[#282830] flex items-center gap-3 text-xs text-[#C0C0D0]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#E97868]/20 text-[#E97868] font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 04: What I Changed (End-to-End) */}
          <div className="bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2A2A33]">
              <span className="text-sm font-black font-mono px-2.5 py-1 rounded-lg bg-[#E97868]/20 text-[#E97868]">
                {monetizationStudy.whatIChanged.sectionNum}
              </span>
              <h3 className="text-lg font-extrabold text-white font-mono">
                {monetizationStudy.whatIChanged.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {monetizationStudy.whatIChanged.pillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="p-5 rounded-2xl bg-[#131317] border border-[#282830] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-[#713B5D]/30 text-[#E97868]">
                        Pillar {pillar.num}
                      </span>
                      <h4 className="text-sm font-bold text-white font-mono">{pillar.title}</h4>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#A0A0B0] list-disc list-inside">
                      {pillar.bullets.map((b, bi) => (
                        <li key={bi} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 05: Results (90 days) */}
          <div className="bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2A2A33]">
              <span className="text-sm font-black font-mono px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400">
                {monetizationStudy.results.sectionNum}
              </span>
              <h3 className="text-lg font-extrabold text-white font-mono">
                {monetizationStudy.results.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {monetizationStudy.results.summaryBullets.map((bullet, bi) => (
                <div key={bi} className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-1">
                  <div className="text-xs font-mono font-bold text-emerald-400">{bullet}</div>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[#2A2A33] text-zinc-400">
                    <th className="pb-3 font-semibold">Format</th>
                    <th className="pb-3 font-semibold">Before</th>
                    <th className="pb-3 font-semibold">After</th>
                    <th className="pb-3 font-semibold">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2A2A33]">
                  {monetizationStudy.results.ecpmTable.map((row, ri) => (
                    <tr key={ri}>
                      <td className="py-3 font-bold text-white">{row.format}</td>
                      <td className="py-3 text-zinc-400">{row.before}</td>
                      <td className="py-3 font-bold text-emerald-400">{row.after}</td>
                      <td className="py-3 font-bold text-emerald-400">{row.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </section>
      )}

      {/* ========================================================================= */}
      {/* CASE STUDY 1: IMPROVING RETENTION & ENGAGEMENT IN MP3 CONVERTER          */}
      {/* ========================================================================= */}
      {(activeStudyTab === 'both' || activeStudyTab === 'retention') && (
        <section className="max-w-6xl mx-auto space-y-12 pt-8 border-t border-[#2A2A33]">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#713B5D]/30 text-[#E97868] text-xs font-mono font-bold border border-[#713B5D]/40">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>CASE STUDY PART 2 · PRODUCT STRATEGY & RETENTION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {retentionStudy.title}
            </h2>
            <p className="text-sm sm:text-base text-[#A0A0B0] max-w-3xl">
              {retentionStudy.subtitle}
            </p>
          </div>

          {/* Section 01: Problem Statement */}
          <div className="bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2A2A33]">
              <span className="text-sm font-black font-mono px-2.5 py-1 rounded-lg bg-[#713B5D]/30 text-[#E97868]">
                {retentionStudy.problemStatement.sectionNum}
              </span>
              <h3 className="text-lg font-extrabold text-white font-mono">
                {retentionStudy.problemStatement.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#C0C0D0] leading-relaxed">
              {retentionStudy.problemStatement.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {retentionStudy.problemStatement.challenges.map((chal, ci) => (
                <div key={ci} className="p-3.5 rounded-2xl bg-[#131317] border border-[#282830] flex items-center gap-2.5 text-xs text-[#D0D0DC]">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                  <span>{chal}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs font-mono text-emerald-300">
              <strong>Objective:</strong> {retentionStudy.problemStatement.goal}
            </div>
          </div>

          {/* Section 02: User / Business Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-4">
              <h4 className="text-sm font-extrabold text-white font-mono flex items-center gap-2">
                <span className="text-[#E97868]">02A.</span> User Problems
              </h4>
              <div className="space-y-2.5">
                {retentionStudy.userBusinessProblem.userProblems.map((prob, pi) => (
                  <div key={pi} className="p-3 rounded-xl bg-[#131317] border border-[#282830] text-xs text-[#C0C0D0] flex items-start gap-2">
                    <span className="text-red-400 font-bold">•</span>
                    <span>{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-4">
              <h4 className="text-sm font-extrabold text-white font-mono flex items-center gap-2">
                <span className="text-indigo-400">02B.</span> Business Problems
              </h4>
              <div className="space-y-2.5">
                {retentionStudy.userBusinessProblem.businessProblems.map((prob, pi) => (
                  <div key={pi} className="p-3 rounded-xl bg-[#131317] border border-[#282830] text-xs text-[#C0C0D0] flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{prob}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Section 03: Goals */}
          <div className="bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2A2A33]">
              <span className="text-sm font-black font-mono px-2.5 py-1 rounded-lg bg-[#713B5D]/30 text-[#E97868]">
                {retentionStudy.goals.sectionNum}
              </span>
              <h3 className="text-lg font-extrabold text-white font-mono">
                {retentionStudy.goals.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {retentionStudy.goals.items.map((goal, gi) => (
                <div key={gi} className="p-4 rounded-2xl bg-[#131317] border border-[#282830] flex items-center gap-2.5 text-xs font-mono text-white">
                  <Target className="w-4 h-4 text-[#E97868] shrink-0" />
                  <span>{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 04: Research & Analysis */}
          <div className="bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2A2A33]">
              <span className="text-sm font-black font-mono px-2.5 py-1 rounded-lg bg-[#713B5D]/30 text-[#E97868]">
                {retentionStudy.researchAnalysis.sectionNum}
              </span>
              <h3 className="text-lg font-extrabold text-white font-mono">
                {retentionStudy.researchAnalysis.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {retentionStudy.researchAnalysis.pillars.map((pil, pii) => (
                <div key={pii} className="p-5 rounded-2xl bg-[#131317] border border-[#282830] space-y-2">
                  <h4 className="text-xs font-bold text-white font-mono flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-[#E97868]" />
                    <span>{pil.name}</span>
                  </h4>
                  <p className="text-xs text-[#A0A0B0] leading-relaxed">
                    {pil.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 05: Solution (7 Core Interventions) */}
          <div className="bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2A2A33]">
              <span className="text-sm font-black font-mono px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400">
                {retentionStudy.solution.sectionNum}
              </span>
              <h3 className="text-lg font-extrabold text-white font-mono">
                {retentionStudy.solution.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {retentionStudy.solution.initiatives.map((init, ii) => (
                <div key={ii} className="p-5 rounded-2xl bg-[#131317] border border-[#282830] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                      0{ii + 1}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white font-mono">
                      {init.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#A0A0B0] leading-relaxed">
                    {init.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 06: Prioritization Matrix */}
          <div className="bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2A2A33]">
              <span className="text-sm font-black font-mono px-2.5 py-1 rounded-lg bg-[#713B5D]/30 text-[#E97868]">
                {retentionStudy.prioritization.sectionNum}
              </span>
              <h3 className="text-lg font-extrabold text-white font-mono">
                {retentionStudy.prioritization.title}
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[#2A2A33] text-zinc-400">
                    <th className="pb-3 font-semibold">Initiative</th>
                    <th className="pb-3 font-semibold">Impact</th>
                    <th className="pb-3 font-semibold">Effort</th>
                    <th className="pb-3 font-semibold">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2A2A33]">
                  {retentionStudy.prioritization.matrix.map((row, rxi) => (
                    <tr key={rxi}>
                      <td className="py-3 font-bold text-white">{row.initiative}</td>
                      <td className="py-3 text-zinc-300">{row.impact}</td>
                      <td className="py-3 text-zinc-400">{row.effort}</td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          row.priority === 'P0'
                            ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                            : row.priority === 'P1'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                            : 'bg-zinc-700 text-zinc-300'
                        }`}>
                          {row.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </section>
      )}

      {/* Cross-Link Case Study Footer */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-[#2A2A33] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-bold text-white font-mono">
            Explore Other Mobile & AI Case Studies
          </div>
          <div className="text-xs text-[#888899]">
            Review Pilot AI Intelligence, HD Video Downloader Monetization, or Private Vault Privacy Architecture.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('ai-implementations')}
            className="text-xs font-mono font-semibold text-pink-300 hover:text-pink-200 px-4 py-2.5 rounded-full border border-pink-500/40 bg-pink-500/10 hover:bg-pink-500/20 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>AI Implementations (Collage GenAI) →</span>
          </button>

          <button
            onClick={() => onNavigate('hd-video-downloader')}
            className="text-xs font-mono font-semibold text-[#E97868] hover:text-[#F4A095] px-4 py-2.5 rounded-full border border-[#E97868]/30 hover:border-[#E97868] transition-all"
          >
            HD Video Downloader Study →
          </button>

          <button
            onClick={() => onNavigate('review-pilot')}
            className="text-xs font-mono font-semibold text-[#A0A0A0] hover:text-white px-4 py-2.5 rounded-full border border-[#333333] hover:border-white transition-all"
          >
            Review Pilot Case Study →
          </button>
        </div>
      </div>

    </div>
  );
};
