import React, { useState } from 'react';
import { MONETIZATION_DATA } from '../data/portfolioData';
import { DollarSign, TrendingUp, Sliders, ShieldAlert, Sparkles, CheckCircle2, ChevronRight, BarChart2, Info } from 'lucide-react';

export const MonetizationFunnel: React.FC = () => {
  const [cooldownSec, setCooldownSec] = useState<number>(120);

  // Dynamic tradeoff simulation based on cooldown intervals
  const calculateRetention = (sec: number) => {
    if (sec < 60) return { d30: '18.4%', status: 'High Risk of User Fatigue', color: 'text-[#E97868]' };
    if (sec <= 120) return { d30: '32.6%', status: 'Optimal LTV Equilibrium', color: 'text-emerald-600' };
    return { d30: '36.8%', status: 'High Retention, Lower Ad Fill', color: 'text-[#D99A3D]' };
  };

  const currentTradeoff = calculateRetention(cooldownSec);

  const funnelStages = [
    { name: 'REQUEST', value: '342K', rate: '100%', color: 'from-[#4A203F] to-[#713B5D]', desc: 'Ad requests fired at natural transition moments' },
    { name: 'MATCH', value: '332K', rate: '97.06%', color: 'from-[#713B5D] to-[#9B5C82]', desc: 'High fill rate mediated across top ad networks' },
    { name: 'SHOW', value: '24.8K', rate: '7.26%', color: 'from-[#E97868] to-[#F4A095]', desc: 'Selective presentation respecting cooldown caps' },
    { name: 'IMPRESSION', value: '24K', rate: '96.8%', color: 'from-[#F4A095] to-[#D99A3D]', desc: 'Verified completed views / rewarded triggers' },
    { name: 'CLICK', value: '8.6K', rate: '35.75%', color: 'from-[#D99A3D] to-[#F1C978]', desc: 'High intent engagement driven by value exchange' },
    { name: 'REVENUE', value: '$258.00', rate: '$10.69 eCPM', color: 'from-[#713B5D] to-[#4A203F]', desc: 'Strong revenue yield achieved with zero churn' },
  ];

  return (
    <section className="space-y-12">
      
      {/* Historical Telemetry Snapshot Cards */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#713B5D]">
              Historical Telemetry
            </span>
            <h3 className="text-2xl font-extrabold text-[#241F24] tracking-tight">
              Verified Ad Yield & Performance Snapshot
            </h3>
          </div>

          <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-[#D99A3D]/15 text-[#B87A1E] text-xs font-mono-code font-bold border border-[#D99A3D]/20">
            Historical Project Snapshot
          </span>
        </div>

        {/* 4 Core Glass KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-3xl bg-white/80 border border-[#4A203F]/10 shadow-sm backdrop-blur-md space-y-1">
            <span className="text-[10px] font-mono-code uppercase font-bold text-[#6F666B]">
              Rewarded Yield
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#4A203F] tracking-tight">
              {MONETIZATION_DATA.rewardedAds.estimatedEarnings}
            </div>
            <p className="text-xs text-[#6F666B] pt-1 font-medium">Value-exchange video ads</p>
          </div>

          <div className="p-6 rounded-3xl bg-white/80 border border-[#4A203F]/10 shadow-sm backdrop-blur-md space-y-1">
            <span className="text-[10px] font-mono-code uppercase font-bold text-[#713B5D]">
              eCPM Yield
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#713B5D] tracking-tight">
              {MONETIZATION_DATA.rewardedAds.ecpm}
            </div>
            <p className="text-xs text-[#6F666B] pt-1 font-medium">Effective cost per mille</p>
          </div>

          <div className="p-6 rounded-3xl bg-white/80 border border-[#4A203F]/10 shadow-sm backdrop-blur-md space-y-1">
            <span className="text-[10px] font-mono-code uppercase font-bold text-[#E97868]">
              Match Rate
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#E97868] tracking-tight">
              {MONETIZATION_DATA.rewardedAds.matchRate}
            </div>
            <p className="text-xs text-[#6F666B] pt-1 font-medium">Strong demand fulfillment</p>
          </div>

          <div className="p-6 rounded-3xl bg-white/80 border border-[#4A203F]/10 shadow-sm backdrop-blur-md space-y-1">
            <span className="text-[10px] font-mono-code uppercase font-bold text-[#D99A3D]">
              Click-Through Rate
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#D99A3D] tracking-tight">
              {MONETIZATION_DATA.rewardedAds.ctr}
            </div>
            <p className="text-xs text-[#6F666B] pt-1 font-medium">8,634 total clicks recorded</p>
          </div>
        </div>
      </div>

      {/* Visual Funnel Progression */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white/70 border border-[#4A203F]/10 shadow-sm backdrop-blur-md space-y-6">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#713B5D]">
            Funnel Mechanics
          </span>
          <h4 className="text-xl sm:text-2xl font-extrabold text-[#241F24] tracking-tight">
            The 6-Stage Ad Monetization Pipeline
          </h4>
          <p className="text-xs text-[#6F666B]">
            From user trigger request to verified ad impression and revenue conversion.
          </p>
        </div>

        {/* Funnel Bars */}
        <div className="space-y-3">
          {funnelStages.map((stage, idx) => (
            <div
              key={stage.name}
              className="p-4 rounded-2xl bg-white border border-[#4A203F]/8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#4A203F] text-[#FAF7F2] font-mono-code text-[10px] font-bold flex items-center justify-center">
                  0{idx + 1}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono-code font-bold text-[#241F24]">
                      {stage.name}
                    </span>
                    <span className="text-xs font-bold text-[#713B5D]">
                      {stage.value}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6F666B]">{stage.desc}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-mono-code font-bold text-[#241F24] px-2.5 py-1 rounded-md bg-[#F4EEE8]">
                  {stage.rate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive PM Trade-Off Simulator */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#4A203F] to-[#713B5D] text-white shadow-[0_20px_50px_-15px_rgba(74,32,63,0.3)] space-y-6">
        <div className="max-w-2xl space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono-code uppercase font-bold text-[#F4A095]">
            <Sliders className="w-4 h-4" />
            <span>Interactive Strategy Simulator</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Simulating Ad Cooldown vs. D30 Retention
          </h4>
          <p className="text-xs text-white/80">
            Adjust the interstitial frequency cooldown to observe how user fatigue directly impacts long-term cohort retention.
          </p>
        </div>

        {/* Range Slider */}
        <div className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono-code">
            <span>Cooldown Interval:</span>
            <span className="text-base font-bold text-[#F1C978]">{cooldownSec} seconds</span>
          </div>

          <input
            type="range"
            min="30"
            max="240"
            step="15"
            value={cooldownSec}
            onChange={(e) => setCooldownSec(Number(e.target.value))}
            className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#E97868]"
          />

          <div className="flex justify-between text-[10px] font-mono-code text-white/60">
            <span>30s (Aggressive)</span>
            <span>120s (Recommended)</span>
            <span>240s (Conservative)</span>
          </div>
        </div>

        {/* Live Simulation Output Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
            <span className="text-[10px] font-mono-code uppercase text-white/70">Estimated D30 Retention</span>
            <div className="text-2xl font-extrabold text-[#F1C978]">{currentTradeoff.d30}</div>
            <p className="text-xs text-white/90">{currentTradeoff.status}</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
            <span className="text-[10px] font-mono-code uppercase text-white/70">PM Takeaway</span>
            <p className="text-xs text-white/90 leading-relaxed pt-1">
              "Enforcing a minimum 120s cooldown protects D30 retention curves while maximizing eCPM on natural session pauses."
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};
