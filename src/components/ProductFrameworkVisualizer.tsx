import React, { useState } from 'react';
import { Layers, Compass, GitCommit, CheckCircle2, ChevronRight, Sparkles, Target, ArrowRight } from 'lucide-react';

export const ProductFrameworkVisualizer: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const frameworkPhases = [
    {
      step: '01',
      name: 'DISCOVER',
      tagline: 'Identifying Unmet User Friction',
      whatIDo: 'Analyze user drop-off telemetry, app store review patterns, and support tickets to uncover the core behavioral problem.',
      whatILookAt: 'First-time user drop-off points, permission denial rates, cold-start ANRs, and customer feedback themes.',
      outputs: 'Problem Brief, User Journey Map, and "How Might We" opportunity statements.',
      accent: '#713B5D',
    },
    {
      step: '02',
      name: 'DEFINE',
      tagline: 'Structuring the Product Opportunity',
      whatIDo: 'Translate user insights into actionable feature requirements, clear success criteria, and explicit out-of-scope boundaries.',
      whatILookAt: 'Core job-to-be-done, edge-case failure modes, offline states, and data privacy boundaries.',
      outputs: 'Comprehensive PRD, user stories, acceptance criteria, and UX wireflows.',
      accent: '#4A203F',
    },
    {
      step: '03',
      name: 'PRIORITIZE',
      tagline: 'RICE Scoring & Feasibility Alignment',
      whatIDo: 'Evaluate potential initiatives against Reach, Impact, Confidence, and Effort, collaborating closely with engineers.',
      whatILookAt: 'Technical architecture complexity, Android OS permission limits, and expected retention lift.',
      outputs: 'Ranked sprint backlog, quarterly milestone roadmap, and dependency matrix.',
      accent: '#D99A3D',
    },
    {
      step: '04',
      name: 'BUILD',
      tagline: 'Agile Execution & Engineering Delivery',
      whatIDo: 'Partner with native Android engineers during sprint standups, review edge-case PRs, and ensure zero specification ambiguity.',
      whatILookAt: 'Build quality, test coverage, memory leaks, ANR thresholds, and SDK mediation stability.',
      outputs: 'QA test checklists, release build sign-offs, and staged rollout plans.',
      accent: '#E97868',
    },
    {
      step: '05',
      name: 'MEASURE',
      tagline: 'Telemetry & Funnel Verification',
      whatIDo: 'Track primary KPIs and safety guardrails immediately following launch using Firebase Analytics and remote config.',
      whatILookAt: 'Activation rates, D1/D7/D30 retention curves, eCPM yields, and crash-free session rates.',
      outputs: 'Post-launch performance dashboard and cohort retention analysis reports.',
      accent: '#713B5D',
    },
    {
      step: '06',
      name: 'ITERATE',
      tagline: 'A/B Experimentation & Continuous Tuning',
      whatIDo: 'Design targeted A/B tests on onboarding steps, ad cooldown timings, and feature discovery prompts to drive continuous lift.',
      whatILookAt: 'Statistical significance, secondary metric guardrails, and user sentiment shifts.',
      outputs: 'Experiment retrospectives and next-phase roadmap recommendations.',
      accent: '#4A203F',
    },
  ];

  const growthStages = [
    { name: 'Acquisition', focus: 'ASO, organic discovery & lightweight APK download' },
    { name: 'Activation', focus: 'First-mile value realization & contextual permissions' },
    { name: 'Retention', focus: 'D1, D7, and D30 habit loops with minimal cognitive friction' },
    { name: 'Engagement', focus: 'Core feature frequency (vault opens, media playback)' },
    { name: 'Monetization', focus: 'Rewarded ad value-exchange & non-intrusive cooldowns' },
    { name: 'Referral', focus: 'Organic word-of-mouth driven by trust and simplicity' },
  ];

  return (
    <section className="space-y-12">
      
      {/* Visual Framework Header */}
      <div className="max-w-3xl space-y-2">
        <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#713B5D]">
          Product Operating Model
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#241F24] tracking-tight">
          The 6-Step Product Lifecycle Engine
        </h3>
        <p className="text-sm text-[#6F666B] leading-relaxed">
          How I guide a product from ambiguous user friction to predictable, measurable business outcomes. Click any stage to inspect the process.
        </p>
      </div>

      {/* 6 Step Interactive Tabs / Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {frameworkPhases.map((phase, idx) => {
          const isSelected = selectedPhase === idx;
          return (
            <button
              key={phase.step}
              onClick={() => setSelectedPhase(idx)}
              className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col justify-between space-y-2 ${
                isSelected
                  ? 'bg-[#4A203F] text-[#FAF7F2] border-[#4A203F] shadow-md scale-102'
                  : 'bg-white/80 text-[#241F24] border-[#4A203F]/10 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono-code font-bold">
                <span className={isSelected ? 'text-[#F4A095]' : 'text-[#713B5D]'}>{phase.step}</span>
                <ChevronRight className={`w-3 h-3 ${isSelected ? 'text-[#F4A095]' : 'text-neutral-400'}`} />
              </div>
              <span className="text-xs font-extrabold tracking-tight block">
                {phase.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detailed View Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white/80 border border-[#4A203F]/10 shadow-sm backdrop-blur-md space-y-6 animate-in fade-in duration-200">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#4A203F]/8">
          <div>
            <span className="text-xs font-mono-code font-bold text-[#E97868] uppercase">
              Phase {frameworkPhases[selectedPhase].step}
            </span>
            <h4 className="text-2xl font-extrabold text-[#241F24] tracking-tight">
              {frameworkPhases[selectedPhase].name}: {frameworkPhases[selectedPhase].tagline}
            </h4>
          </div>
          <span className="text-xs font-mono-code text-[#6F666B]">
            Interactive Framework
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-5 rounded-2xl bg-[#F4EEE8]/70 border border-[#4A203F]/6 space-y-1.5">
            <span className="font-mono-code uppercase font-bold text-[#4A203F] block">
              What I Do:
            </span>
            <p className="text-[#6F666B] leading-relaxed">
              {frameworkPhases[selectedPhase].whatIDo}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F4EEE8]/70 border border-[#4A203F]/6 space-y-1.5">
            <span className="font-mono-code uppercase font-bold text-[#D99A3D] block">
              What I Look At:
            </span>
            <p className="text-[#6F666B] leading-relaxed">
              {frameworkPhases[selectedPhase].whatILookAt}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F4EEE8]/70 border border-[#4A203F]/6 space-y-1.5">
            <span className="font-mono-code uppercase font-bold text-[#E97868] block">
              Key Outputs Created:
            </span>
            <p className="text-[#241F24] font-medium leading-relaxed">
              {frameworkPhases[selectedPhase].outputs}
            </p>
          </div>
        </div>
      </div>

      {/* Consumer Growth Engine Visualizer */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#4A203F] to-[#713B5D] text-white shadow-[0_20px_40px_-15px_rgba(74,32,63,0.3)] space-y-6">
        <div className="max-w-2xl space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono-code uppercase font-bold text-[#F4A095]">
            <Target className="w-4 h-4" />
            <span>Growth Architecture</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            The Consumer Mobile Growth Engine
          </h4>
          <p className="text-xs text-white/80">
            A continuous loop from top-of-funnel acquisition to long-term monetization and organic referral.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {growthStages.map((stage, idx) => (
            <div key={stage.name} className="p-4 rounded-2xl bg-black/20 border border-white/10 space-y-1">
              <div className="flex items-center justify-between text-xs font-mono-code">
                <span className="font-bold text-[#F4A095]">{stage.name}</span>
                <span className="text-white/40">0{idx + 1}</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">{stage.focus}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
