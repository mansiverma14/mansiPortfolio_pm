import React, { useState } from 'react';
import { PageRoute } from '../types';
import { PROFILE_DATA } from '../data/portfolioData';
import { ArrowRight, FileText, Sparkles, Layers, CheckCircle2, ChevronRight, Compass } from 'lucide-react';

interface HeroProps {
  onNavigate: (route: PageRoute) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const productSystemSteps = [
    {
      stage: 'USER',
      accent: '#713B5D',
      bgClass: 'bg-[#713B5D]/10 text-[#4A203F] border-[#713B5D]/20',
      label: '01 · Behavioral Insight',
      question: 'Who is the user, and what emotional/functional hurdle are they encountering?',
    },
    {
      stage: 'PROBLEM',
      accent: '#E97868',
      bgClass: 'bg-[#E97868]/10 text-[#C65343] border-[#E97868]/20',
      label: '02 · Root Cause',
      question: 'Separating surface-level noise from the high-leverage friction point.',
    },
    {
      stage: 'PRODUCT',
      accent: '#4A203F',
      bgClass: 'bg-[#4A203F]/10 text-[#4A203F] border-[#4A203F]/20',
      label: '03 · Solution Architecture',
      question: 'Designing a focused, frictionless workflow with clear value exchange.',
    },
    {
      stage: 'EXPERIMENT',
      accent: '#D99A3D',
      bgClass: 'bg-[#D99A3D]/10 text-[#B87A1E] border-[#D99A3D]/20',
      label: '04 · Hypothesis & A/B Test',
      question: 'Validating variations with isolated variables and safety guardrails.',
    },
    {
      stage: 'METRIC',
      accent: '#713B5D',
      bgClass: 'bg-[#713B5D]/10 text-[#4A203F] border-[#713B5D]/20',
      label: '05 · Telemetry & Iteration',
      question: 'Measuring activation, cohort retention (D1/D7/D30), and revenue impact.',
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-12 sm:pb-20 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#713B5D]/8 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full bg-[#E97868]/8 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-[#D99A3D]/6 blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Headline, Positioning, CTAs */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          
          {/* Label Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#4A203F]/10 text-xs font-mono-code font-bold text-[#4A203F] shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E97868]" />
            <span>PRODUCT MANAGER · CONSUMER APPS · GROWTH</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#241F24] tracking-tight leading-[1.08]">
              "Building products people actually want to use."
            </h1>
            <p className="text-lg sm:text-xl text-[#713B5D] font-editorial italic pt-1">
              from building products to deciding what to build.
            </p>
          </div>

          {/* Positioning Bio */}
          <p className="text-base sm:text-lg text-[#6F666B] leading-relaxed max-w-2xl">
            {PROFILE_DATA.positioning}
          </p>

          {/* Differentiator Badge */}
          <div className="inline-flex items-center gap-3 p-3 px-4 rounded-2xl bg-white/70 border border-[#4A203F]/8 shadow-xs text-xs font-mono-code text-[#4A203F] backdrop-blur-md">
            <span className="font-bold text-[#E97868]">Core Advantage:</span>
            <span>2 years native Android engineering → 3 years Product Management</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('work')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#4A203F] hover:bg-[#713B5D] text-[#FAF7F2] font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-98"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 text-[#F4A095]" />
            </button>

            <button
              onClick={() => onNavigate('resume')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/70 hover:bg-white text-[#4A203F] border border-[#4A203F]/15 font-semibold text-sm transition-all shadow-xs backdrop-blur-md hover:border-[#713B5D]"
            >
              <FileText className="w-4 h-4 text-[#713B5D]" />
              <span>Download Resume</span>
            </button>
          </div>

        </div>

        {/* Right Column: Interactive Product System Visual */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-white/70 border border-[#4A203F]/10 p-6 sm:p-8 shadow-[0_20px_40px_-15px_rgba(74,32,63,0.08)] backdrop-blur-xl space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#4A203F]/8">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#E97868]" />
                <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#4A203F]">
                  The Product System
                </h3>
              </div>
              <span className="text-[10px] font-mono-code text-[#6F666B]">
                Interactive Flow
              </span>
            </div>

            {/* Stacked Interactive Step Cards */}
            <div className="space-y-2">
              {productSystemSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div key={step.stage}>
                    <button
                      onClick={() => setActiveStep(idx)}
                      className={`w-full p-3 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-white border-[#4A203F]/20 shadow-sm scale-[1.02]'
                          : 'bg-white/40 border-transparent hover:bg-white/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono-code font-bold border ${step.bgClass}`}>
                          {step.stage}
                        </span>
                        <span className="text-xs font-bold text-[#241F24]">
                          {step.label}
                        </span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'rotate-90 text-[#4A203F]' : 'text-neutral-400'}`} />
                    </button>

                    {isActive && (
                      <div className="p-3 my-1 ml-4 rounded-xl bg-[#F4EEE8]/70 border-l-2 border-[#4A203F] text-xs text-[#6F666B] leading-relaxed animate-in fade-in duration-200">
                        {step.question}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-2 text-[11px] font-mono-code text-[#6F666B] text-center border-t border-[#4A203F]/6">
              "Connecting problem discovery to measurable retention outcomes."
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
