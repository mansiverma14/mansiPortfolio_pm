import React, { useState } from 'react';
import { PageRoute } from '../types';
import { INSTAGRAM_CASE_STUDY_DATA } from '../data/portfolioData';
import { InstagramFeedMockup } from '../components/InstagramFeedMockup';
import { InstagramUIDeepDive } from '../components/InstagramUIDeepDive';
import {
  Sparkles,
  Users,
  Film,
  TrendingUp,
  Target,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Search,
  MessageCircle,
  Heart,
  Repeat,
  Zap,
  Sliders,
  Layers,
  Compass,
  BarChart2,
  PieChart,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Quote,
  Check,
  Eye,
  Lock,
  Share2,
  Palette,
  Smartphone,
  MousePointer
} from 'lucide-react';

interface InstagramFeedPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const InstagramFeedPage: React.FC<InstagramFeedPageProps> = ({ onNavigate }) => {
  const data = INSTAGRAM_CASE_STUDY_DATA;
  const [activeChapter, setActiveChapter] = useState<string>('all');

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
        <span className="text-xs font-mono font-bold uppercase text-pink-400 tracking-wider">
          Case Study · Social Graph & Recommendation Strategy
        </span>
      </div>

      {/* Hero Header Section */}
      <div className="space-y-6">
        
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#262626] border border-[#383838] text-xs font-mono font-bold text-pink-400 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{data.header.category}</span>
        </div>

        {/* Title & App Name */}
        <div className="space-y-2 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {data.header.title}
          </h1>
          <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent font-mono">
            {data.header.appName} · Reconnecting Friends in an Algorithmic Era
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

          {/* Role & Timeline */}
          <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-1">
            <span className="text-[11px] font-mono font-bold uppercase text-[#888888] block">
              My Role & Timeline
            </span>
            <p className="text-sm font-bold text-white">Lead Product Manager</p>
            <p className="text-xs text-[#A0A0A0]">Product Strategy, User Discovery & Algorithmic UX</p>
            <p className="text-xs font-mono text-pink-400 pt-1">Interactive Story-Driven PM Study</p>
          </div>

          {/* North Star Target */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-950/40 to-[#1E1E1E] border border-pink-500/30 space-y-1">
            <span className="text-[11px] font-mono font-bold uppercase text-pink-400 block flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" />
              <span>North Star Objective</span>
            </span>
            <p className="text-sm font-bold text-white">
              +48% Friend Post Discoverability
            </p>
            <p className="text-xs text-zinc-300">
              Without sacrificing ad load or session duration
            </p>
          </div>

        </div>

        {/* Quick Action Navigation Bar */}
        <div className="p-4 rounded-2xl bg-[#1B1B22] border border-pink-500/30 flex flex-wrap items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-white uppercase">Jump Directly To:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="#live-interactive-prototype"
              className="px-3 py-1.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
            >
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span>Live Interactive Prototype</span>
            </a>
            <a
              href="#ui-ux-deep-dive"
              className="px-3 py-1.5 rounded-xl bg-pink-950/80 hover:bg-pink-900 border border-pink-500/40 text-pink-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
            >
              <Palette className="w-3.5 h-3.5 text-pink-400" />
              <span>UI/UX Architecture & Hotspots</span>
            </a>
            <a
              href="#story-chapters"
              className="px-3 py-1.5 rounded-xl bg-[#282830] hover:bg-[#32323E] border border-white/10 text-zinc-200 text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
            >
              <Layers className="w-3.5 h-3.5 text-zinc-400" />
              <span>7 PM Story Chapters</span>
            </a>
          </div>
        </div>

      </div>

      {/* The Hook & Immersive Story Opening */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#241220] via-[#1A1A24] to-[#141418] border border-pink-500/40 shadow-2xl relative overflow-hidden space-y-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400">
            <Quote className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase text-pink-400 tracking-wider block">
              The Real User Problem
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              The Fundamental Question Facing Instagram
            </h3>
          </div>
        </div>

        <blockquote className="text-lg sm:text-2xl font-medium text-white italic leading-relaxed border-l-4 border-pink-500 pl-4 sm:pl-6">
          "{data.theHook.quote}"
        </blockquote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
            <span className="text-[11px] font-mono font-bold uppercase text-amber-400 block">
              The Paradigm Shift
            </span>
            <p className="text-sm font-semibold text-zinc-200">
              {data.theHook.coreQuestion}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-pink-950/40 border border-pink-500/30 space-y-1">
            <span className="text-[11px] font-mono font-bold uppercase text-pink-400 block">
              The Product Challenge
            </span>
            <p className="text-sm font-semibold text-white">
              {data.theHook.pmChallenge}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Prototype Showcase Section */}
      <div id="live-interactive-prototype" className="space-y-6 scroll-mt-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-[11px] font-mono font-bold text-purple-300 uppercase">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span>Interactive Solution Prototype</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Dual-Feed Mode & Friends Catch-Up Digest
            </h2>
          </div>
          <span className="text-xs text-zinc-400 font-mono">Try toggling modes & playing the 60s Digest</span>
        </div>

        {/* Live Interactive Prototype Component */}
        <InstagramFeedMockup />
      </div>

      {/* Dedicated UI/UX Deep Dive Section */}
      <div className="scroll-mt-24">
        <InstagramUIDeepDive />
      </div>

      {/* Story Chapters Breakdown */}
      <div id="story-chapters" className="space-y-12 scroll-mt-24">
        <div className="border-b border-[#2D2D2D] pb-4 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <Layers className="w-6 h-6 text-pink-400" />
            <span>Story Chapters & Product Management Deep Dive</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">7 Core Pillars</span>
        </div>

        <div className="space-y-10">
          
          {/* Chapter 01: Observation */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#1A1A20] border border-[#2D2D36] space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-pink-500/20 text-pink-400 font-mono font-extrabold flex items-center justify-center text-sm">
                  01
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {data.storyChapters[0].title}
                  </h3>
                  <p className="text-xs text-pink-400 font-mono">
                    {data.storyChapters[0].tagline}
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold hidden sm:inline-block">
                Problem Discovery
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2.5">
                {data.storyChapters[0].points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-black/50 border border-rose-500/30 flex flex-col justify-center space-y-2">
                <span className="text-[11px] font-mono uppercase text-rose-400 font-bold block">
                  Alarming Discovery Metric
                </span>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">
                  -72%
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {data.storyChapters[0].metricFact}
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 02: User Behaviour & Migration to DMs */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#1A1A20] border border-[#2D2D36] space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 font-mono font-extrabold flex items-center justify-center text-sm">
                  02
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {data.storyChapters[1].title}
                  </h3>
                  <p className="text-xs text-purple-400 font-mono">
                    {data.storyChapters[1].tagline}
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold hidden sm:inline-block">
                Behavioural Shift
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2.5">
                {data.storyChapters[1].points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-black/50 border border-purple-500/30 flex flex-col justify-center space-y-2">
                <span className="text-[11px] font-mono uppercase text-purple-400 font-bold block">
                  The New Social Hub
                </span>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">
                  65%+ of Interactions
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {data.storyChapters[1].metricFact}
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 03: Business Goals vs User Goals Matrix */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#1A1A20] border border-[#2D2D36] space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-mono font-extrabold flex items-center justify-center text-sm">
                  03
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {data.storyChapters[2].title}
                  </h3>
                  <p className="text-xs text-amber-400 font-mono">
                    {data.storyChapters[2].tagline}
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold hidden sm:inline-block">
                Strategic Alignment
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Business Goals */}
              <div className="p-5 rounded-2xl bg-black/40 border border-blue-500/30 space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-blue-400 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Business Goals (Meta & Advertisers)</span>
                </span>
                <div className="space-y-2">
                  {data.storyChapters[2].businessGoals?.map((bg, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#151518] text-xs space-y-1">
                      <span className="font-bold text-white block">{bg.label}</span>
                      <p className="text-zinc-400">{bg.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* User Goals */}
              <div className="p-5 rounded-2xl bg-black/40 border border-emerald-500/30 space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>User Goals (Consumers & Friends)</span>
                </span>
                <div className="space-y-2">
                  {data.storyChapters[2].userGoals?.map((ug, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#151518] text-xs space-y-1">
                      <span className="font-bold text-white block">{ug.label}</span>
                      <p className="text-zinc-400">{ug.value}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-200 leading-relaxed">
              <strong>Core Strategic Tension:</strong> {data.storyChapters[2].coreTension}
            </div>
          </div>

          {/* Chapter 04: Root Cause Analysis (The 5 Whys) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#1A1A20] border border-[#2D2D36] space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 font-mono font-extrabold flex items-center justify-center text-sm">
                  04
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {data.storyChapters[3].title}
                  </h3>
                  <p className="text-xs text-rose-400 font-mono">
                    {data.storyChapters[3].tagline}
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold hidden sm:inline-block">
                Root Cause Discovery
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.storyChapters[3].steps?.map((step, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-black/40 border border-zinc-800 space-y-2 relative">
                  <span className="text-[10px] font-mono font-bold uppercase text-rose-400 block">
                    Why #{idx + 1}
                  </span>
                  <p className="text-xs font-bold text-white">
                    {step.why}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Chapter 05: Proposed Solutions */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#1A1A20] border border-[#2D2D36] space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-mono font-extrabold flex items-center justify-center text-sm">
                  05
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {data.storyChapters[4].title}
                  </h3>
                  <p className="text-xs text-emerald-400 font-mono">
                    {data.storyChapters[4].tagline}
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold hidden sm:inline-block">
                Proposed Solutions
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.storyChapters[4].solutions?.map((sol, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-zinc-800 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <h4 className="text-sm font-bold text-white">{sol.title}</h4>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {sol.description}
                  </p>
                  <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
                    <strong>Expected Impact:</strong> {sol.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chapter 06: Product Trade-Offs & Edge Cases */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#1A1A20] border border-[#2D2D36] space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-mono font-extrabold flex items-center justify-center text-sm">
                  06
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {data.storyChapters[5].title}
                  </h3>
                  <p className="text-xs text-amber-400 font-mono">
                    {data.storyChapters[5].tagline}
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold hidden sm:inline-block">
                Risk Management
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.storyChapters[5].tradeoffs?.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-zinc-800 space-y-3">
                  <span className="text-xs font-bold text-white block">
                    {item.tradeoff}
                  </span>
                  <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-xs text-rose-300">
                    <strong>Risk:</strong> {item.risk}
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300">
                    <strong>Mitigation:</strong> {item.mitigation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chapter 07: Success Metrics & A/B Experimentation Strategy */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#1A1A20] border border-[#2D2D36] space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 font-mono font-extrabold flex items-center justify-center text-sm">
                  07
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {data.storyChapters[6].title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">
                    {data.storyChapters[6].tagline}
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold hidden sm:inline-block">
                Validation & Metrics
              </span>
            </div>

            {/* North Star Callout */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/70 to-blue-950/70 border border-cyan-500/40 space-y-1">
              <span className="text-[11px] font-mono uppercase text-cyan-300 font-bold block">
                North Star Metric
              </span>
              <p className="text-lg font-bold text-white">
                {data.storyChapters[6].northStar?.name}
              </p>
              <p className="text-xs text-zinc-300">
                {data.storyChapters[6].northStar?.definition}
              </p>
            </div>

            {/* Metric Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.storyChapters[6].metricCategories?.map((cat, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-zinc-800 space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase text-white">
                    {cat.type}
                  </h4>
                  <div className="space-y-2">
                    {cat.items.map((m, mIdx) => (
                      <div key={mIdx} className="p-3 rounded-xl bg-[#141418] flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold text-white block">{m.label}</span>
                          <span className="text-[10px] text-zinc-400">{m.subtext}</span>
                        </div>
                        <span className="text-sm font-mono font-extrabold text-cyan-400 px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30">
                          {m.target}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* A/B Testing Cohort Matrix */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase text-zinc-400">
                A/B Experimentation Plan Across Meta Cohorts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {data.storyChapters[6].experimentationPlan?.map((exp, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-zinc-800 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-cyan-300 block">
                      {exp.cohort}
                    </span>
                    <p className="text-xs text-zinc-300">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* User Personas Grid */}
      <div className="space-y-6">
        <div className="border-b border-[#2D2D2D] pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <Users className="w-6 h-6 text-pink-400" />
            <span>Target User Personas & Discovery Interviews</span>
          </h2>
          <p className="text-xs text-zinc-400 mt-1">Understanding different behavioral archetypes across Instagram's 2B+ MAUs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.personas.map((persona, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-[#1A1A22] border border-[#2D2D36] space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-pink-950/80 border border-pink-500/40 text-[11px] font-mono font-bold text-pink-300">
                    {persona.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">{persona.location}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{persona.name}</h3>
                  <p className="text-xs text-zinc-400">{persona.role}</p>
                </div>
                <div className="p-3 rounded-xl bg-black/40 text-xs text-zinc-300 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block">Pain Point</span>
                  <p>{persona.painPoint}</p>
                </div>
              </div>

              <blockquote className="text-xs italic text-pink-200/90 border-l-2 border-pink-500 pl-3">
                {persona.quote}
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Key PM Reflection & Takeaway */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#241220] via-[#1E1E28] to-[#121218] border border-pink-500/50 space-y-6 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold font-mono">
            PM
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase text-pink-400 tracking-wider block">
              Core Strategic Takeaway
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {data.keyPMLearnings.frameworkSummary}
            </h3>
          </div>
        </div>

        <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-medium">
          {data.keyPMLearnings.coreTakeaway}
        </p>

        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Product Strategy · Algorithm UX · Retention Defense</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('swiggy-instamart')}
              className="px-4 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold transition-all flex items-center gap-2"
            >
              <span>Next: Swiggy Instamart Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('work')}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2"
            >
              <span>All Portfolio Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
