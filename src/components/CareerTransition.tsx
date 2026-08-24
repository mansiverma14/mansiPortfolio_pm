import React from 'react';
import { CAREER_TIMELINE } from '../data/portfolioData';
import { Code2, Compass, ArrowDown, Sparkles, CheckCircle2 } from 'lucide-react';

export const CareerTransition: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Editorial Headline & Signature Statement */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#713B5D]/10 border border-[#713B5D]/20 text-xs font-mono-code font-semibold text-[#4A203F] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#E97868]" />
          <span>The PM Advantage</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241F24] tracking-tight">
          "From building products to deciding what to build."
        </h2>

        <p className="text-base sm:text-lg text-[#713B5D] font-editorial italic max-w-2xl mx-auto">
          "Technical enough to understand the constraint. Product-minded enough to question the requirement."
        </p>
      </div>

      {/* Vertical / Dual Card Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        
        {/* Phase 1: 2y Android Engineering */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/70 border border-[#4A203F]/10 shadow-sm backdrop-blur-md flex flex-col justify-between space-y-6 hover:border-[#4A203F]/20 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-[#4A203F]/8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-[#D99A3D]/15 text-[#B87A1E]">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono-code font-bold uppercase text-[#B87A1E] block">
                    2 Years
                  </span>
                  <h3 className="text-lg font-extrabold text-[#241F24]">
                    Android Developer
                  </h3>
                </div>
              </div>

              <span className="text-[10px] font-mono-code px-2.5 py-1 rounded-full bg-[#F4EEE8] text-[#6F666B] font-bold">
                Foundation
              </span>
            </div>

            <p className="text-sm text-[#6F666B] leading-relaxed">
              Architected native Android applications from scratch—implementing Room databases, ExoPlayer video pipelines, FFmpeg processing, and background services.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F4EEE8]/70 border border-[#4A203F]/6 text-xs text-[#241F24]">
            <span className="font-mono-code uppercase font-bold text-[#B87A1E] block mb-1">
              What I Gained:
            </span>
            <p className="text-[#6F666B] leading-relaxed">
              Deep engineering intuition, zero tolerance for hand-waving specs, and natural empathy for developer velocity and architectural constraints.
            </p>
          </div>
        </div>

        {/* Phase 2: 3y Product Management */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#4A203F] to-[#713B5D] text-white shadow-[0_20px_40px_-15px_rgba(74,32,63,0.3)] backdrop-blur-md flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-white/12">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-white/15 text-[#F4A095]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono-code font-bold uppercase text-[#F4A095] block">
                    3 Years
                  </span>
                  <h3 className="text-lg font-extrabold text-white">
                    Product Manager
                  </h3>
                </div>
              </div>

              <span className="text-[10px] font-mono-code px-2.5 py-1 rounded-full bg-white/15 text-[#FAF7F2] font-bold">
                Strategy & Growth
              </span>
            </div>

            <p className="text-sm text-white/90 leading-relaxed">
              Driving end-to-end consumer mobile roadmaps—from problem discovery, user journeys, and PRDs to ad monetization yield optimization, A/B experimentation, and retention loops.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-black/20 border border-white/10 text-xs text-white">
            <span className="font-mono-code uppercase font-bold text-[#F4A095] block mb-1">
              What I Bring Today:
            </span>
            <p className="text-white/80 leading-relaxed">
              Turning complex business and user problems into clear, feasible product requirements with measurable retention and monetization metrics.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};
