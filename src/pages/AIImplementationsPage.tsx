import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { AI_CASE_STUDIES, AICaseStudy } from '../data/aiStudiesData';
import { AIStudioInteractiveDemo } from '../components/AIStudioInteractiveDemo';
import {
  Sparkles,
  Wand2,
  Cpu,
  Layers,
  Zap,
  TrendingUp,
  Shield,
  MessageSquare,
  DollarSign,
  Tv,
  CheckCircle2,
  AlertCircle,
  Clock,
  Target,
  FileText,
  Search,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Database,
  Eye,
  Sliders,
  Code,
  Palette,
  LayoutGrid,
  Bot,
  Compass,
  Play
} from 'lucide-react';

interface AIImplementationsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AIImplementationsPage: React.FC<AIImplementationsPageProps> = ({ onNavigate }) => {
  // activeStudyId: null represents the big cards directory view.
  // When a card is clicked, activeStudyId is set to that project's ID.
  const [activeStudyId, setActiveStudyId] = useState<string | null>(null);

  // Scroll to top when opening a specific project
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeStudyId]);

  const activeStudy = AI_CASE_STUDIES.find((s) => s.id === activeStudyId);
  const currentStudyIndex = activeStudyId ? AI_CASE_STUDIES.findIndex((s) => s.id === activeStudyId) : -1;

  const handleNextStudy = () => {
    if (currentStudyIndex >= 0 && currentStudyIndex < AI_CASE_STUDIES.length - 1) {
      setActiveStudyId(AI_CASE_STUDIES[currentStudyIndex + 1].id);
    } else {
      setActiveStudyId(AI_CASE_STUDIES[0].id);
    }
  };

  const handlePrevStudy = () => {
    if (currentStudyIndex > 0) {
      setActiveStudyId(AI_CASE_STUDIES[currentStudyIndex - 1].id);
    } else {
      setActiveStudyId(AI_CASE_STUDIES[AI_CASE_STUDIES.length - 1].id);
    }
  };

  // Visual meta mapping for big directory cards
  const getStudyCardMeta = (id: string) => {
    switch (id) {
      case 'ai-collage-generator':
        return {
          category: 'GenAI Diffusion · Consumer Mobile',
          icon: Wand2,
          gradient: 'from-purple-900/30 via-[#1A1824] to-[#121215]',
          borderHover: 'hover:border-pink-500/60',
          accentColor: 'text-pink-400',
          badgeBg: 'bg-pink-500/10 border-pink-500/30 text-pink-300',
          demoTab: 'collage' as const,
          heroStat: '+142%',
          statLabel: 'Collage Completion Rate'
        };
      case 'ai-review-pilot':
        return {
          category: 'LLM NLP · Growth & Triage SaaS',
          icon: MessageSquare,
          gradient: 'from-blue-900/30 via-[#161B26] to-[#121215]',
          borderHover: 'hover:border-blue-400/60',
          accentColor: 'text-blue-400',
          badgeBg: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
          demoTab: 'review' as const,
          heroStat: '85%',
          statLabel: 'Review Triage Time Saved'
        };
      case 'ai-vocal-stem-separation':
        return {
          category: 'Neural Audio DSP · Edge & Cloud AI',
          icon: Zap,
          gradient: 'from-amber-900/30 via-[#211B18] to-[#121215]',
          borderHover: 'hover:border-amber-400/60',
          accentColor: 'text-amber-400',
          badgeBg: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
          demoTab: 'stem' as const,
          heroStat: '3.1M',
          statLabel: 'Neural Stems Split / Mo'
        };
      case 'ai-magic-eraser':
        return {
          category: 'Computer Vision · On-Device Inpainting',
          icon: Eye,
          gradient: 'from-indigo-900/30 via-[#191928] to-[#121215]',
          borderHover: 'hover:border-indigo-400/60',
          accentColor: 'text-indigo-400',
          badgeBg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300',
          demoTab: 'eraser' as const,
          heroStat: '0.38s',
          statLabel: 'On-Device Inpainting SLA'
        };
      case 'ai-doc-scanner-pii':
        return {
          category: 'Edge Privacy · Vision OCR & NER',
          icon: Shield,
          gradient: 'from-emerald-900/30 via-[#14201B] to-[#121215]',
          borderHover: 'hover:border-emerald-400/60',
          accentColor: 'text-emerald-400',
          badgeBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
          demoTab: 'doc' as const,
          heroStat: '0 KB',
          statLabel: 'Cloud Data Leak (100% Offline)'
        };
      default:
        return {
          category: 'Applied AI & Machine Learning',
          icon: Sparkles,
          gradient: 'from-purple-900/30 to-[#121215]',
          borderHover: 'hover:border-pink-500/60',
          accentColor: 'text-pink-400',
          badgeBg: 'bg-pink-500/10 border-pink-500/30 text-pink-300',
          demoTab: 'collage' as const,
          heroStat: '100%',
          statLabel: 'Production Deployed'
        };
    }
  };

  // =========================================================================
  // VIEW 1: BIG CARDS DIRECTORY (Clean, Uncluttered Overview)
  // =========================================================================
  if (!activeStudy) {
    return (
      <div className="min-h-screen bg-[#121215] text-[#E0E0E6] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
        
        {/* Top Breadcrumb */}
        <div className="max-w-6xl mx-auto flex items-center justify-between pb-4 border-b border-[#2A2A33]">
          <button
            onClick={() => onNavigate('work')}
            className="text-xs font-mono font-semibold text-[#A0A0B0] hover:text-white flex items-center gap-1.5 transition-colors"
          >
            ← Back to All Projects
          </button>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-300 border border-pink-500/30 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-pink-400" />
              <span>Applied AI Suite · 5 Projects</span>
            </span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-pink-500/30 text-xs font-mono font-bold text-white">
            <Bot className="w-3.5 h-3.5 text-pink-400" />
            <span>AI Product Management & Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            AI Projects & Architectures
          </h1>

          <p className="text-base sm:text-lg text-[#A0A0B0] max-w-3xl leading-relaxed">
            Select any AI project below to explore the complete case study — covering user friction analysis, model pipelines, prompt engineering, sub-second latency constraints, and hybrid monetization token economies.
          </p>

          {/* Quick Summary Highlights Banner */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="px-3 py-1.5 rounded-lg bg-[#18181E] border border-[#2A2A33] text-white">
              ⚡ 5 Production AI Case Studies
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#18181E] border border-[#2A2A33] text-white">
              🎨 Diffusion Models & LoRA Styles
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#18181E] border border-[#2A2A33] text-white">
              🎙️ On-Device Neural Audio DSP
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#18181E] border border-[#2A2A33] text-white">
              🛡️ Edge Vision OCR & PII Redaction
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BIG CARDS GRID OF ALL 5 AI PROJECTS                                       */}
        {/* ========================================================================= */}
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#888899] font-bold flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-pink-400" />
              <span>Choose an AI Case Study to Open</span>
            </h2>
            <span className="text-xs font-mono text-zinc-500">Click any card to read full deep dive</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AI_CASE_STUDIES.map((study, idx) => {
              const meta = getStudyCardMeta(study.id);
              const IconComp = meta.icon;

              return (
                <div
                  key={study.id}
                  id={`card-${study.id}`}
                  onClick={() => setActiveStudyId(study.id)}
                  className={`group relative rounded-3xl bg-gradient-to-b ${meta.gradient} border border-[#2A2A33] ${meta.borderHover} transition-all duration-300 p-6 sm:p-8 cursor-pointer flex flex-col justify-between space-y-6 shadow-xl hover:shadow-2xl hover:scale-[1.01]`}
                >
                  {/* Card Header & Badge */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-mono px-3 py-1 rounded-full border font-bold uppercase tracking-wider flex items-center gap-1.5 ${meta.badgeBg}`}>
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{meta.category}</span>
                      </span>

                      <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        Case Study 0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-[#F4A095] transition-colors leading-snug">
                      {study.title}
                    </h3>

                    {/* Subtitle / Hook */}
                    <p className="text-xs sm:text-sm text-[#A0A0B0] leading-relaxed line-clamp-3">
                      {study.subtitle}
                    </p>
                  </div>

                  {/* Hero Metric Banner & Tech Pill Bar */}
                  <div className="space-y-4 pt-2 border-t border-[#2A2A33]/80">
                    
                    {/* Key Stats Row */}
                    <div className="grid grid-cols-3 gap-2">
                      {study.resultsAndMetrics.headlineMetrics.slice(0, 3).map((metric, mi) => (
                        <div key={mi} className="p-2.5 rounded-xl bg-[#121215]/80 border border-[#2A2A33] text-center">
                          <div className="text-[10px] font-mono text-zinc-400 uppercase truncate">
                            {metric.label}
                          </div>
                          <div className="text-base sm:text-lg font-black text-white font-mono mt-0.5">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Key Models Used */}
                    <div className="flex flex-wrap gap-1.5">
                      {study.aiSolution.modelAndTech.slice(0, 3).map((tech, ti) => (
                        <span
                          key={ti}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300"
                        >
                          {tech.split('(')[0]}
                        </span>
                      ))}
                      {study.aiSolution.modelAndTech.length > 3 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 text-zinc-500">
                          +{study.aiSolution.modelAndTech.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Open Project Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <div className="text-xs font-mono text-zinc-400">
                      Context: <span className="text-zinc-200">{study.appContext.split('(')[0]}</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 text-white font-mono font-bold text-xs transition-all shadow-md">
                      <span>Open Full Project</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Feature Playground Section at Bottom of Directory */}
        <div className="max-w-6xl mx-auto space-y-4 pt-8 border-t border-[#2A2A33]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="space-y-0.5">
              <h2 className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span>Hands-On AI Feature Demonstrator</span>
              </h2>
              <p className="text-xs text-[#888899]">
                Test live simulated workflows engineered across these 5 case studies.
              </p>
            </div>
          </div>

          <AIStudioInteractiveDemo />
        </div>

      </div>
    );
  }

  // =========================================================================
  // VIEW 2: FULL PROJECT DEEP DIVE (Dedicated to the Selected AI Case Study)
  // =========================================================================
  const currentMeta = getStudyCardMeta(activeStudy.id);
  const CurrentIcon = currentMeta.icon;

  return (
    <div className="min-h-screen bg-[#121215] text-[#E0E0E6] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      
      {/* Top Breadcrumb & Switcher Bar */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2A2A33]">
        <button
          onClick={() => setActiveStudyId(null)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#18181E] hover:bg-[#252530] border border-[#2A2A33] text-xs font-mono font-bold text-white transition-all shadow-sm group w-fit"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-pink-400" />
          <span>← Back to All AI Projects</span>
        </button>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-[11px] font-mono text-zinc-400 mr-2">
            AI Project {currentStudyIndex + 1} of {AI_CASE_STUDIES.length}
          </span>

          <button
            onClick={handlePrevStudy}
            title="Previous AI Case Study"
            className="p-2 rounded-xl bg-[#18181E] hover:bg-[#252530] border border-[#2A2A33] text-zinc-300 hover:text-white transition-colors text-xs font-mono"
          >
            ← Prev
          </button>

          <button
            onClick={handleNextStudy}
            title="Next AI Case Study"
            className="p-2 rounded-xl bg-[#18181E] hover:bg-[#252530] border border-[#2A2A33] text-zinc-300 hover:text-white transition-colors text-xs font-mono"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Hero Header for Single Case Study */}
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold ${currentMeta.badgeBg}`}>
            <CurrentIcon className="w-3.5 h-3.5" />
            <span>{activeStudy.badge}</span>
          </div>
          <span className="text-xs font-mono text-zinc-500">•</span>
          <span className="text-xs font-mono text-zinc-400">{activeStudy.appContext}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          {activeStudy.title}
        </h1>

        <p className="text-base sm:text-lg text-[#A0A0B0] max-w-4xl leading-relaxed">
          {activeStudy.subtitle}
        </p>

        {/* 6 Key Metrics Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4">
          {activeStudy.resultsAndMetrics.headlineMetrics.map((metric, mi) => (
            <div
              key={mi}
              className="p-4 rounded-2xl bg-[#18181E] border border-[#2A2A33] hover:border-pink-500/40 transition-all text-center space-y-1 shadow-md"
            >
              <div className="text-[10px] font-mono text-[#888899] uppercase tracking-wider">
                {metric.label}
              </div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono">
                {metric.value}
              </div>
              <div className="text-[10px] text-[#A0A0B0] font-mono leading-tight">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Feature Demo Specially Focused on This Study */}
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-sm font-bold text-white font-mono flex items-center gap-2 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span>Interactive Feature Demonstrator</span>
            </h2>
            <p className="text-xs text-[#888899]">
              Simulated interactive execution for {activeStudy.title.split('—')[0].replace('AI ', '')}
            </p>
          </div>
        </div>

        <AIStudioInteractiveDemo initialTab={currentMeta.demoTab} hideTabs={false} />
      </div>

      {/* Problem & Insights Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* User Problem & Pain Points */}
        <div className="lg:col-span-7 bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#2A2A33]">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <h3 className="text-base font-bold text-white font-mono">
              User Problem & Friction Analysis
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#C0C0D0] leading-relaxed">
            {activeStudy.userProblem.summary}
          </p>

          <div className="space-y-2 pt-2">
            {activeStudy.userProblem.painPoints.map((point, pi) => (
              <div
                key={pi}
                className="p-3 rounded-xl bg-[#131317] border border-[#282830] text-xs text-[#D0D0DC] flex items-start gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                <span className="leading-relaxed">{point}</span>
              </div>
            ))}
          </div>

          {activeStudy.userProblem.quotes && (
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs italic text-zinc-400 leading-relaxed font-sans">
              {activeStudy.userProblem.quotes}
            </div>
          )}
        </div>

        {/* Technology & Models Stack */}
        <div className="lg:col-span-5 bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#2A2A33]">
            <Cpu className="w-4 h-4 text-pink-400" />
            <h3 className="text-base font-bold text-white font-mono">
              Models & Tech Stack Used
            </h3>
          </div>

          <div className="space-y-2">
            {activeStudy.aiSolution.modelAndTech.map((tech, ti) => (
              <div
                key={ti}
                className="p-3 rounded-xl bg-[#131317] border border-[#282830] flex items-center gap-2.5 text-xs font-mono text-white"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span>{tech}</span>
              </div>
            ))}
          </div>

          {activeStudy.aiSolution.promptEngineStrategy && (
            <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs text-purple-200 space-y-1 font-mono">
              <span className="font-bold text-pink-400 uppercase text-[10px] block">Prompt Engineering:</span>
              <p className="text-[11px] leading-relaxed">{activeStudy.aiSolution.promptEngineStrategy}</p>
            </div>
          )}
        </div>

      </div>

      {/* Architecture & Pipeline */}
      <div className="max-w-6xl mx-auto bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#2A2A33]">
          <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
            <Zap className="w-4 h-4 text-pink-400" />
            <span>AI Architecture & Request-Response Pipeline</span>
          </h3>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-pink-500/20 text-pink-300 font-bold">
            Production Flow
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeStudy.aiSolution.architectureSteps.map((step, si) => (
            <div
              key={si}
              className="p-5 rounded-2xl bg-[#131317] border border-[#282830] space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-pink-400">Step {si + 1}</span>
                  {step.highlight && (
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-white font-semibold">
                      {step.highlight}
                    </span>
                  )}
                </div>
                <h4 className="text-xs font-bold text-white font-mono">{step.step}</h4>
                <p className="text-xs text-[#A0A0B0] leading-relaxed">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UX Flow & Hybrid Monetization */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#2A2A33]">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <h4 className="text-sm font-bold text-white font-mono">
              Monetization Model & Token Economy
            </h4>
          </div>

          <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs font-mono text-emerald-300 font-bold">
            {activeStudy.monetizationAndUX.tierModel}
          </div>

          <div className="space-y-2">
            {activeStudy.monetizationAndUX.flow.map((fl, fi) => (
              <div key={fi} className="p-3 rounded-xl bg-[#131317] border border-[#282830] text-xs text-[#C0C0D0] flex items-start gap-2">
                <span className="text-emerald-400 font-bold font-mono">0{fi + 1}.</span>
                <span className="leading-relaxed">{fl}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#888899] italic pt-1">
            💡 {activeStudy.monetizationAndUX.adStrategy}
          </p>
        </div>

        {/* PM Role & Deliverables */}
        <div className="bg-[#18181E] rounded-3xl border border-[#2A2A33] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#2A2A33]">
            <Shield className="w-4 h-4 text-[#E97868]" />
            <h4 className="text-sm font-bold text-white font-mono">
              My Role & PM Deliverables
            </h4>
          </div>

          <div className="space-y-2">
            {activeStudy.myRoleAsPM.map((role, ri) => (
              <div key={ri} className="p-3 rounded-xl bg-[#131317] border border-[#282830] text-xs text-[#D0D0DC] flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{role}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Switcher & Next Case Study Callout */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-[#2A2A33] flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => setActiveStudyId(null)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#18181E] hover:bg-[#252530] border border-[#2A2A33] text-xs font-mono font-bold text-white transition-all shadow-sm"
        >
          ← Back to All AI Projects
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleNextStudy}
            className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white font-bold text-xs font-mono transition-all shadow-md flex items-center gap-2"
          >
            <span>Next AI Project: {AI_CASE_STUDIES[(currentStudyIndex + 1) % AI_CASE_STUDIES.length].title.split('—')[0].replace('AI ', '')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
