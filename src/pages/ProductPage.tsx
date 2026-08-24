import React from 'react';
import { PageRoute } from '../types';
import { ProductFrameworkVisualizer } from '../components/ProductFrameworkVisualizer';
import { Compass, ArrowRight } from 'lucide-react';

interface ProductPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between pb-4 border-b border-[#4A203F]/10">
        <button
          onClick={() => onNavigate('work')}
          className="text-xs font-mono-code font-semibold text-[#6F666B] hover:text-[#241F24] flex items-center gap-1.5 transition-colors"
        >
          ← Back to Portfolio
        </button>
        <span className="text-xs font-mono-code font-bold uppercase text-[#713B5D]">
          PM Methodology & Thinking
        </span>
      </div>

      {/* Main Hero Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#713B5D]/10 border border-[#713B5D]/20 text-xs font-mono-code font-bold text-[#4A203F] uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5 text-[#E97868]" />
          <span>Product Mindset & Playbook</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#241F24] tracking-tight leading-tight">
          "How I think about products."
        </h1>

        <p className="text-base sm:text-lg text-[#6F666B] leading-relaxed">
          Product Management is about finding the highest-leverage path from user friction to measurable business outcomes. Here is the operational blueprint I use across discovery, roadmapping, and agile execution.
        </p>
      </div>

      {/* 4 Core PM Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Pillar 1: Product Discovery */}
        <div className="bg-white/80 rounded-3xl border border-[#4A203F]/10 p-6 sm:p-8 shadow-xs backdrop-blur-md space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#4A203F]/8">
            <h3 className="text-sm font-bold text-[#241F24] font-mono-code uppercase">
              01 · Product Discovery
            </h3>
            <span className="text-[10px] font-mono-code px-2.5 py-0.5 rounded-full bg-[#713B5D]/10 text-[#4A203F] font-bold">
              Unmet Needs
            </span>
          </div>

          <div className="flex items-center justify-between gap-1 text-xs font-mono-code font-bold text-[#241F24] bg-[#F4EEE8]/70 p-3 rounded-2xl border border-[#4A203F]/6 overflow-x-auto">
            <span>User Problem</span>
            <span>→</span>
            <span>User Insight</span>
            <span>→</span>
            <span>Business Opp</span>
            <span>→</span>
            <span className="text-[#713B5D]">Product Opp</span>
          </div>

          <p className="text-xs text-[#6F666B] leading-relaxed">
            I begin by analyzing drop-off telemetry and customer reviews to separate superficial complaints from root behavioral friction.
          </p>
        </div>

        {/* Pillar 2: Product Strategy */}
        <div className="bg-white/80 rounded-3xl border border-[#4A203F]/10 p-6 sm:p-8 shadow-xs backdrop-blur-md space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#4A203F]/8">
            <h3 className="text-sm font-bold text-[#241F24] font-mono-code uppercase">
              02 · Product Strategy
            </h3>
            <span className="text-[10px] font-mono-code px-2.5 py-0.5 rounded-full bg-[#E97868]/15 text-[#C65343] font-bold">
              Prioritization
            </span>
          </div>

          <div className="flex items-center justify-between gap-1 text-xs font-mono-code font-bold text-[#241F24] bg-[#F4EEE8]/70 p-3 rounded-2xl border border-[#4A203F]/6 overflow-x-auto">
            <span>Goals</span>
            <span>→</span>
            <span>Opportunities</span>
            <span>→</span>
            <span>Prioritization</span>
            <span>→</span>
            <span className="text-[#E97868]">Roadmap</span>
          </div>

          <p className="text-xs text-[#6F666B] leading-relaxed">
            Applying RICE frameworks and technical complexity assessments to construct focused quarterly roadmaps with clear success definitions.
          </p>
        </div>

        {/* Pillar 3: Product Execution */}
        <div className="bg-white/80 rounded-3xl border border-[#4A203F]/10 p-6 sm:p-8 shadow-xs backdrop-blur-md space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#4A203F]/8">
            <h3 className="text-sm font-bold text-[#241F24] font-mono-code uppercase">
              03 · Product Execution
            </h3>
            <span className="text-[10px] font-mono-code px-2.5 py-0.5 rounded-full bg-[#D99A3D]/15 text-[#B87A1E] font-bold">
              Delivery
            </span>
          </div>

          <div className="flex items-center justify-between gap-1 text-xs font-mono-code font-bold text-[#241F24] bg-[#F4EEE8]/70 p-3 rounded-2xl border border-[#4A203F]/6 overflow-x-auto">
            <span>PRD</span>
            <span>→</span>
            <span>User Stories</span>
            <span>→</span>
            <span>Engineering</span>
            <span>→</span>
            <span className="text-[#D99A3D]">Launch</span>
          </div>

          <p className="text-xs text-[#6F666B] leading-relaxed">
            Drafting crisp PRDs, defining edge-case acceptance criteria, and collaborating seamlessly with Android developers throughout the sprint.
          </p>
        </div>

        {/* Pillar 4: Product Analytics */}
        <div className="bg-white/80 rounded-3xl border border-[#4A203F]/10 p-6 sm:p-8 shadow-xs backdrop-blur-md space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#4A203F]/8">
            <h3 className="text-sm font-bold text-[#241F24] font-mono-code uppercase">
              04 · Product Analytics
            </h3>
            <span className="text-[10px] font-mono-code px-2.5 py-0.5 rounded-full bg-[#713B5D]/10 text-[#4A203F] font-bold">
              Measurement
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 text-[11px] font-mono-code">
            {['Funnels', 'Retention D1/D7/D30', 'Conversion', 'Cohorts', 'A/B Tests', 'Engagement', 'Monetization'].map((m) => (
              <span key={m} className="px-2.5 py-1 rounded-xl bg-[#F4EEE8] text-[#241F24] border border-[#4A203F]/6">
                {m}
              </span>
            ))}
          </div>

          <p className="text-xs text-[#6F666B] leading-relaxed">
            Validating every release against pre-defined primary KPIs and guardrails using Firebase Analytics and event instrumentation.
          </p>
        </div>

      </div>

      {/* Interactive Visualizer Section */}
      <ProductFrameworkVisualizer />

      {/* Navigation CTA */}
      <div className="flex justify-between items-center pt-8 border-t border-[#4A203F]/10">
        <button
          onClick={() => onNavigate('monetization')}
          className="text-xs font-mono-code font-semibold text-[#6F666B] hover:text-[#241F24]"
        >
          ← Monetization Case Study
        </button>
        <button
          onClick={() => onNavigate('about')}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#4A203F] hover:bg-[#713B5D] text-[#FAF7F2] font-semibold text-xs transition-all shadow-sm"
        >
          <span>Read About My Journey →</span>
        </button>
      </div>

    </div>
  );
};
