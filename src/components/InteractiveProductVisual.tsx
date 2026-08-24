import React, { useState } from 'react';
import { User, AlertCircle, Box, FlaskConical, TrendingUp, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

interface Stage {
  id: string;
  name: string;
  short: string;
  icon: React.ReactNode;
  color: string;
  bgLight: string;
  borderActive: string;
  question: string;
  pmAction: string;
  deliverable: string;
  realExample: string;
}

const STAGES: Stage[] = [
  {
    id: 'user',
    name: 'USER',
    short: '01',
    icon: <User className="w-5 h-5" />,
    color: 'text-blue-600',
    bgLight: 'bg-blue-50',
    borderActive: 'border-blue-500 ring-2 ring-blue-100',
    question: 'Who is the user and what is their context?',
    pmAction: 'Map user journeys, cohort behaviors, and identify unmet behavioral friction.',
    deliverable: 'User Personas & Journey Maps',
    realExample: 'Consumer mobile users needing private media storage with zero accidental exposure risk.'
  },
  {
    id: 'problem',
    name: 'PROBLEM',
    short: '02',
    icon: <AlertCircle className="w-5 h-5" />,
    color: 'text-amber-600',
    bgLight: 'bg-amber-50',
    borderActive: 'border-amber-500 ring-2 ring-amber-100',
    question: 'Why does this problem matter now?',
    pmAction: 'Separate surface symptoms from core root friction. Evaluate market & emotional urgency.',
    deliverable: 'Problem Statement & "How Might We"',
    realExample: 'Users want confidence their photos stay private, but current apps are either too clunky or lack disguise.'
  },
  {
    id: 'product',
    name: 'PRODUCT',
    short: '03',
    icon: <Box className="w-5 h-5" />,
    color: 'text-indigo-600',
    bgLight: 'bg-indigo-50',
    borderActive: 'border-indigo-500 ring-2 ring-indigo-100',
    question: 'What is the minimal viable solution that delivers value?',
    pmAction: 'Draft PRDs, define acceptance criteria, scope technical architecture with engineers.',
    deliverable: 'PRD, Specs & Core Feature Scope',
    realExample: 'Private Vault with stealth decoy calculator lock, instant batch import, and biometric unlock.'
  },
  {
    id: 'experiment',
    name: 'EXPERIMENT',
    short: '04',
    icon: <FlaskConical className="w-5 h-5" />,
    color: 'text-emerald-600',
    bgLight: 'bg-emerald-50',
    borderActive: 'border-emerald-500 ring-2 ring-emerald-100',
    question: 'How do we test our assumptions with minimal risk?',
    pmAction: 'Formulate hypotheses, isolate independent variables, set primary metrics & guardrails.',
    deliverable: 'A/B Test Design & Remote Config',
    realExample: 'Hypothesis: Contextual permission timing at first import vs upfront increases completion rate.'
  },
  {
    id: 'metric',
    name: 'METRIC',
    short: '05',
    icon: <TrendingUp className="w-5 h-5" />,
    color: 'text-violet-600',
    bgLight: 'bg-violet-50',
    borderActive: 'border-violet-500 ring-2 ring-violet-100',
    question: 'How do we measure real impact and feed iterations?',
    pmAction: 'Instrument tracking events, evaluate D1/D7/D30 retention cohorts, and optimize eCPM.',
    deliverable: 'Analytics Funnel & Iteration Plan',
    realExample: 'Track Activation (Install → Vault created), Engagement (Content secured), and Guardrails (Crash rate).'
  }
];

export const InteractiveProductVisual: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('product');
  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[2];

  return (
    <div className="w-full bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-5 sm:p-7 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono-code uppercase font-semibold text-neutral-500 tracking-wider">
            Interactive Product System
          </span>
        </div>
        <span className="text-xs text-neutral-400 font-mono-code hidden sm:inline">
          Click any step to inspect PM rigor
        </span>
      </div>

      {/* The 5-Step System Pipeline */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-6">
        {STAGES.map((stage, idx) => {
          const isSelected = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              id={`product-system-btn-${stage.id}`}
              onClick={() => setActiveStageId(stage.id)}
              className={`group flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl border transition-all text-center relative ${
                isSelected
                  ? `bg-neutral-900 text-white border-neutral-900 shadow-sm scale-[1.02]`
                  : `bg-neutral-50/80 text-neutral-600 border-neutral-200/70 hover:bg-neutral-100 hover:border-neutral-300`
              }`}
            >
              <div className="flex items-center gap-1 mb-1">
                <span className={`text-[10px] font-mono-code font-bold ${isSelected ? 'text-neutral-300' : 'text-neutral-400'}`}>
                  {stage.short}
                </span>
              </div>
              <div className={`p-1.5 rounded-lg mb-1 ${isSelected ? 'bg-white/15 text-white' : `${stage.bgLight} ${stage.color}`}`}>
                {stage.icon}
              </div>
              <span className={`text-[11px] sm:text-xs font-bold tracking-tight ${isSelected ? 'text-white' : 'text-neutral-800'}`}>
                {stage.name}
              </span>
              {idx < STAGES.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-neutral-300 pointer-events-none">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep-Dive Card */}
      <div className="bg-neutral-50 rounded-xl p-4 sm:p-5 border border-neutral-200/80">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className={`p-1.5 rounded-lg ${activeStage.bgLight} ${activeStage.color}`}>
              {activeStage.icon}
            </span>
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-tight font-mono-code">
              Step {activeStage.short}: {activeStage.name} Focus
            </h4>
          </div>
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-neutral-200/70 text-neutral-700 font-mono-code">
            {activeStage.deliverable}
          </span>
        </div>

        <p className="text-xs sm:text-sm font-medium text-neutral-800 mb-3">
          "{activeStage.question}"
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-neutral-200/70 text-xs">
          <div>
            <span className="text-[10px] font-mono-code font-bold uppercase text-neutral-500 block mb-1">
              PM Rigor & Strategy:
            </span>
            <p className="text-neutral-700 leading-relaxed">
              {activeStage.pmAction}
            </p>
          </div>
          <div>
            <span className="text-[10px] font-mono-code font-bold uppercase text-neutral-500 block mb-1">
              Real Project Execution:
            </span>
            <p className="text-neutral-700 leading-relaxed">
              {activeStage.realExample}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Flow Caption */}
      <div className="mt-4 flex items-center justify-between text-[11px] text-neutral-500 font-mono-code">
        <span>Continuous Discovery & Delivery Loop</span>
        <span className="text-indigo-600 font-semibold flex items-center gap-1">
          Technical Feasibility + Product Empathy
        </span>
      </div>
    </div>
  );
};
