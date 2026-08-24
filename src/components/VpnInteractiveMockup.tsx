import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  Zap,
  Globe,
  Lock,
  Wifi,
  Power,
  ChevronDown,
  ChevronRight,
  Sparkles,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sliders,
  DollarSign,
  Layers,
  BarChart3,
  Server,
  Activity,
  Play,
  Check
} from 'lucide-react';

export const VpnInteractiveMockup: React.FC = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionTime, setConnectionTime] = useState('00:28:47');
  const [activeTab, setActiveTab] = useState<'app' | 'funnel' | 'countries' | 'mediation' | 'experiments'>('app');
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [selectedServer, setSelectedServer] = useState('United States');
  const [selectedExperiment, setSelectedExperiment] = useState<number>(0);
  const [activePlan, setActivePlan] = useState<'lto' | 'weekly' | 'monthly' | 'yearly'>('lto');

  const handleToggleConnection = () => {
    if (isConnected) {
      setIsConnected(false);
      setShowBottomSheet(false);
    } else {
      setIsConnecting(true);
      setTimeout(() => {
        setIsConnecting(false);
        setIsConnected(true);
        setShowBottomSheet(true);
      }, 900);
    }
  };

  return (
    <div className="w-full rounded-[36px] bg-[#121218] border border-blue-500/30 p-4 sm:p-8 shadow-2xl space-y-8">
      {/* Top Controller Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Interactive VPN Product Laboratory</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-mono font-semibold border border-emerald-500/30">
              Live Prototype
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            End-to-End Monetization & Funnel Simulator
          </h3>
          <p className="text-xs text-zinc-400">
            Switch tabs below to explore the real Android connection UI, Funnel drop-offs, Country segmentation matrix, AdMob auction waterfall, and A/B test experiments.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#1C1C24] p-1.5 rounded-2xl border border-white/10 shrink-0">
          <button
            onClick={() => setActiveTab('app')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'app'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>VPN App UI</span>
          </button>

          <button
            onClick={() => setActiveTab('funnel')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'funnel'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Funnel Breakdown</span>
          </button>

          <button
            onClick={() => setActiveTab('countries')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'countries'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Country Packs</span>
          </button>

          <button
            onClick={() => setActiveTab('mediation')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'mediation'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>AdMob Waterfall</span>
          </button>

          <button
            onClick={() => setActiveTab('experiments')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'experiments'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>4 A/B Tests</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 5 Cols: Smartphone Screen Render */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[320px] rounded-[44px] bg-[#0A0E1A] border-4 border-[#252C42] shadow-2xl p-4 relative overflow-hidden flex flex-col justify-between min-h-[580px]">
            
            {/* Ambient Background Glow */}
            <div
              className={`absolute -top-20 -left-20 w-56 h-56 rounded-full blur-3xl pointer-events-none transition-all duration-700 ${
                isConnected ? 'bg-blue-600/30' : 'bg-rose-600/20'
              }`}
            />

            {/* Mobile Status Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pb-2 border-b border-white/5 relative z-10">
              <span className="font-bold text-white">19:28</span>
              <div className="flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5 text-zinc-300" />
                <span className="text-[10px] text-emerald-400">5G</span>
                <span className="text-[10px]">100%</span>
              </div>
            </div>

            {/* VPN Top App Bar */}
            <div className="flex items-center justify-between pt-2 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-400">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="leading-tight">
                  <span className="text-xs font-extrabold text-white tracking-wider block">VPN</span>
                  <span className="text-[9px] font-mono text-zinc-400">FAST · SECURE · PRIVATE</span>
                </div>
              </div>

              <button
                onClick={() => setShowBottomSheet(true)}
                className="px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[10px] font-extrabold flex items-center gap-1 shadow-md hover:scale-105 transition-all"
              >
                <Sparkles className="w-3 h-3" />
                <span>PREMIUM</span>
              </button>
            </div>

            {/* Center Status / Connection Power Button */}
            <div className="my-auto py-6 flex flex-col items-center justify-center space-y-5 relative z-10">
              
              {/* Pulsing Power Circle */}
              <div className="relative">
                {isConnected && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -inset-4 rounded-full bg-blue-500/20 blur-md pointer-events-none"
                  />
                )}

                <button
                  onClick={handleToggleConnection}
                  disabled={isConnecting}
                  className={`w-28 h-28 rounded-full border-4 flex flex-col items-center justify-center transition-all duration-300 shadow-2xl relative ${
                    isConnecting
                      ? 'bg-amber-600/30 border-amber-400 text-amber-300 animate-pulse'
                      : isConnected
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-700 border-blue-400 text-white shadow-blue-500/50'
                      : 'bg-[#1C1F2E] border-zinc-700 text-zinc-400 hover:border-zinc-500'
                  }`}
                >
                  <Power className="w-10 h-10 mb-1" />
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase">
                    {isConnecting ? 'CONNECTING...' : isConnected ? 'CONNECTED' : 'DISCONNECTED'}
                  </span>
                </button>
              </div>

              {/* Connection Timer & Stats */}
              <div className="text-center space-y-1">
                <span className="text-sm font-mono font-bold text-white tracking-widest block">
                  {isConnected ? connectionTime : '00:00:00'}
                </span>
                <span className="text-[10px] font-mono text-zinc-400 block">
                  {isConnected ? 'Connection Time Active' : 'Tap to secure connection'}
                </span>
              </div>

              {/* Server Location Card */}
              <div className="w-full p-3 rounded-2xl bg-[#141A29] border border-blue-500/20 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">
                    🌐
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 block font-mono">Current Location</span>
                    <span className="text-xs font-bold text-white">{selectedServer}</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowBottomSheet(true)}
                  className="p-1.5 rounded-lg bg-[#1E2638] text-zinc-300 hover:text-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Bottom Action / Disconnect Button */}
            <div className="pt-2 relative z-10">
              <button
                onClick={handleToggleConnection}
                className={`w-full py-2.5 rounded-xl text-xs font-bold font-mono tracking-wider transition-all shadow-md ${
                  isConnected
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                }`}
              >
                {isConnected ? 'DISCONNECT' : 'CONNECT NOW'}
              </button>
            </div>

            {/* Section 11: Home UX Improvement - Designed Premium Bottom Sheet */}
            <AnimatePresence>
              {showBottomSheet && (
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="absolute inset-x-0 bottom-0 top-16 bg-[#161B2E] border-t-2 border-blue-500/40 rounded-t-[32px] p-4 flex flex-col justify-between z-30 shadow-2xl"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-1 rounded-full bg-zinc-600 mx-auto" />

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-white block">Connection Optimized</span>
                        <span className="text-[10px] text-emerald-400 font-mono">Fastest Server Assigned</span>
                      </div>
                      <button
                        onClick={() => setShowBottomSheet(false)}
                        className="text-[10px] text-zinc-400 hover:text-white font-mono"
                      >
                        ✕ Close
                      </button>
                    </div>

                    {/* Server Recommendations */}
                    <div className="space-y-1.5">
                      <div className="p-2 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-xs">⚡</span>
                          <div>
                            <span className="text-[11px] font-bold text-white block">Fastest Server</span>
                            <span className="text-[9px] text-zinc-400 font-mono">Latency 14ms · 100% Secure</span>
                          </div>
                        </div>
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                      </div>

                      <div className="p-2 rounded-xl bg-[#1C2238] border border-white/5 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-xs">🕒</span>
                          <div>
                            <span className="text-[11px] font-bold text-white block">Recent Server</span>
                            <span className="text-[9px] text-zinc-400 font-mono">United Kingdom (London)</span>
                          </div>
                        </div>
                        <span className="text-[10px] text-zinc-500 font-mono">Select</span>
                      </div>
                    </div>

                    {/* LTO Offer Inside Bottom Sheet */}
                    <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-500/30 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-amber-300 font-mono">Limited Time Offer (LTO)</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/30 text-amber-200 font-mono font-bold">80% POPULAR</span>
                      </div>
                      <p className="text-[10px] text-zinc-200 leading-tight">
                        Unlock 100+ Ultra-Fast VIP Servers & Zero Ads with 7-Day Trial.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <button
                      onClick={() => alert('Simulated: Opened LTO checkout flow with 1-tap Google Play Paywall')}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-extrabold font-mono shadow-lg hover:brightness-110"
                    >
                      CLAIM 7-DAY VIP PASS
                    </button>
                    <button
                      onClick={() => setShowBottomSheet(false)}
                      className="w-full py-1 text-[10px] text-zinc-400 hover:text-white font-mono text-center"
                    >
                      Continue with Free Ad-Supported Tier
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* Right 7 Cols: Interactive Analytical Views */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* TAB 1: Real Product Summary */}
          {activeTab === 'app' && (
            <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-[#1A1E2E] border border-blue-500/20 space-y-3">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  01 & 05 · The Core Discovery Friction
                </span>
                <h4 className="text-lg font-bold text-white">
                  147K Connected Users vs Only 10.6K Premium Clicks
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  The VPN application had millions of active users who actively connected, but subscription revenue was continuously declining. Behavior telemetry revealed that users loved the core utility but completely bypassed top-level premium buttons.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-[#121622] border border-white/5">
                    <span className="text-lg font-bold text-white block">147K</span>
                    <span className="text-[11px] text-zinc-400">Successful Connections</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#121622] border border-white/5">
                    <span className="text-lg font-bold text-amber-400 block">10.6K</span>
                    <span className="text-[11px] text-zinc-400">Clicked Premium</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#121622] border border-white/5">
                    <span className="text-lg font-bold text-rose-400 block">7.2%</span>
                    <span className="text-[11px] text-zinc-400">Discovery Rate</span>
                  </div>
                </div>
              </div>

              {/* Initial Metrics Table */}
              <div className="p-6 rounded-3xl bg-[#181C28] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
                    02 · Initial Baseline Telemetry Table
                  </h5>
                  <span className="text-[10px] font-mono text-rose-400">Pre-Optimization</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="p-3 rounded-xl bg-[#121520] border border-white/5">
                    <span className="text-[10px] font-mono text-zinc-400 block">D1 Retention</span>
                    <span className="text-base font-bold text-white">10%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#121520] border border-white/5">
                    <span className="text-[10px] font-mono text-zinc-400 block">D7 Retention</span>
                    <span className="text-base font-bold text-white">2.1%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#121520] border border-white/5">
                    <span className="text-[10px] font-mono text-zinc-400 block">Premium Visitors</span>
                    <span className="text-base font-bold text-white">15,132</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#121520] border border-white/5">
                    <span className="text-[10px] font-mono text-zinc-400 block">Buy Click Users</span>
                    <span className="text-base font-bold text-white">3,998</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#121520] border border-white/5">
                    <span className="text-[10px] font-mono text-zinc-400 block">Purchases</span>
                    <span className="text-base font-bold text-emerald-400">136</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#121520] border border-white/5">
                    <span className="text-[10px] font-mono text-zinc-400 block">Purchase Rate</span>
                    <span className="text-base font-bold text-rose-400">0.9%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#121520] border border-white/5">
                    <span className="text-[10px] font-mono text-zinc-400 block">Premium CTR</span>
                    <span className="text-base font-bold text-white">26.4%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#121520] border border-white/5">
                    <span className="text-[10px] font-mono text-zinc-400 block">Revenue Trend</span>
                    <span className="text-base font-bold text-rose-400">Declining</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Funnel Breakdown */}
          {activeTab === 'funnel' && (
            <div className="p-6 rounded-3xl bg-[#1A1E2E] border border-blue-500/20 space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  04 · Funnel Analysis & Drop-Off Diagnosis
                </span>
                <h4 className="text-lg font-bold text-white">
                  15,132 Users → 3,998 Clicked Buy → 136 Purchased
                </h4>
                <p className="text-xs text-zinc-300">
                  Only <span className="font-bold text-amber-400">3.4%</span> of users who clicked "Buy" actually completed payment. The core problem was checkout & paywall conversion, not premium discovery.
                </p>
              </div>

              {/* Visual Funnel Bars */}
              <div className="space-y-3">
                {/* Step 1 */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-zinc-300 font-bold">1. Premium Visitors</span>
                    <span className="font-mono font-bold text-white">15,132 (100%)</span>
                  </div>
                  <div className="h-7 w-full bg-[#121622] rounded-xl overflow-hidden p-1">
                    <div className="h-full bg-blue-600 rounded-lg w-full flex items-center justify-end pr-2 text-[10px] font-mono font-bold text-white">
                      15,132 Users
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-zinc-300 font-bold">2. Clicked Buy (Intent)</span>
                    <span className="font-mono font-bold text-amber-400">3,998 (26.4%)</span>
                  </div>
                  <div className="h-7 w-full bg-[#121622] rounded-xl overflow-hidden p-1">
                    <div className="h-full bg-amber-500 rounded-lg w-[26.4%] flex items-center justify-end pr-2 text-[10px] font-mono font-bold text-black">
                      3,998
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-zinc-300 font-bold">3. Completed Purchase</span>
                    <span className="font-mono font-bold text-rose-400">136 (0.9% overall / 3.4% checkout)</span>
                  </div>
                  <div className="h-7 w-full bg-[#121622] rounded-xl overflow-hidden p-1">
                    <div className="h-full bg-emerald-500 rounded-lg w-[3.4%] min-w-[40px] flex items-center justify-center text-[10px] font-mono font-bold text-black">
                      136
                    </div>
                  </div>
                </div>
              </div>

              {/* Diagnosis Callout */}
              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 space-y-1.5">
                <span className="text-xs font-mono font-bold text-amber-300 block flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Strategic Takeaway</span>
                </span>
                <p className="text-xs text-zinc-200 leading-relaxed">
                  "The issue wasn't premium discovery. The issue was checkout & paywall conversion." Users showed high initial buying intent (26.4% clicked buy), but dropped off due to generic global pricing, missing trial messaging, and lack of regional payment options.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: Country Packs */}
          {activeTab === 'countries' && (
            <div className="p-6 rounded-3xl bg-[#1A1E2E] border border-blue-500/20 space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  06 & 07 · Country Segmentation & LTO Pack Preference
                </span>
                <h4 className="text-lg font-bold text-white">
                  LTO Pack Captured ~80% of All Purchases
                </h4>
                <p className="text-xs text-zinc-300">
                  Instead of one global paywall, countries were segmented into High Revenue, High Traffic, and Non-Monetizable tiers.
                </p>
              </div>

              {/* Country Segments */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-1">
                  <span className="text-[11px] font-mono font-bold text-emerald-300 block">High Revenue</span>
                  <p className="text-xs text-zinc-200 font-medium">UAE, Taiwan, US, UK, France, South Korea</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-blue-950/40 border border-blue-500/30 space-y-1">
                  <span className="text-[11px] font-mono font-bold text-blue-300 block">High Traffic</span>
                  <p className="text-xs text-zinc-200 font-medium">India, Indonesia, Canada</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-rose-950/40 border border-rose-500/30 space-y-1">
                  <span className="text-[11px] font-mono font-bold text-rose-300 block">Non Monetizable</span>
                  <p className="text-xs text-zinc-200 font-medium">Russia, Iran</p>
                </div>
              </div>

              {/* Exact LTO Purchases Table */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-zinc-300 block">
                  Country-wise LTO Pack Purchases (Exact Recorded Data)
                </span>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-[#121622] border border-white/5 flex items-center justify-between">
                    <span className="text-zinc-300">🇨🇦 Canada</span>
                    <span className="font-bold text-emerald-400">11</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#121622] border border-white/5 flex items-center justify-between">
                    <span className="text-zinc-300">🇧🇷 Brazil</span>
                    <span className="font-bold text-emerald-400">9</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#121622] border border-white/5 flex items-center justify-between">
                    <span className="text-zinc-300">🇦🇪 UAE</span>
                    <span className="font-bold text-emerald-400">9</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#121622] border border-white/5 flex items-center justify-between">
                    <span className="text-zinc-300">🇸🇦 Saudi Arabia</span>
                    <span className="font-bold text-emerald-400">8</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#121622] border border-white/5 flex items-center justify-between">
                    <span className="text-zinc-300">🇹🇼 Taiwan</span>
                    <span className="font-bold text-emerald-400">8</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#121622] border border-white/5 flex items-center justify-between">
                    <span className="text-zinc-300">🇺🇸 USA</span>
                    <span className="font-bold text-emerald-400">8</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#121622] border border-white/5 flex items-center justify-between">
                    <span className="text-zinc-300">🇬🇧 UK</span>
                    <span className="font-bold text-emerald-400">7</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#121622] border border-white/5 flex items-center justify-between">
                    <span className="text-zinc-300">🇰🇷 South Korea</span>
                    <span className="font-bold text-emerald-400">6</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#121622] border border-white/5 flex items-center justify-between">
                    <span className="text-zinc-300">🇨🇭 Switzerland</span>
                    <span className="font-bold text-emerald-400">5</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Mediation */}
          {activeTab === 'mediation' && (
            <div className="p-6 rounded-3xl bg-[#1A1E2E] border border-blue-500/20 space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  08 & 09 · AdMob Mediation Waterfall Optimization
                </span>
                <h4 className="text-lg font-bold text-white">
                  Revenue Wasn't Limited by eCPM — It Was Limited by Fill & Waterfall Floors
                </h4>
                <p className="text-xs text-zinc-300">
                  Optimized key country tiers (UAE, US/Vietnam, South Korea) by lowering unnecessary floors, adding missing bidding layers, and deploying country-wise waterfalls.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-[#121622] border border-white/10 space-y-2">
                  <span className="text-xs font-mono font-bold text-amber-300 block">Actions Taken</span>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Lowered unnecessary floors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Added missing bidding layers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Split high-value country traffic</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Country-wise waterfalls deployed</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#121622] border border-white/10 space-y-2">
                  <span className="text-xs font-mono font-bold text-emerald-300 block">Expected Results</span>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    <li className="flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Higher Fill Rate across T1/T2</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Higher Match Rate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Better Real-Time Auction Efficiency</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Boosted Ad Viewer Rate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: 4 A/B Experiments */}
          {activeTab === 'experiments' && (
            <div className="p-6 rounded-3xl bg-[#1A1E2E] border border-blue-500/20 space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  12 · Experiment Design Matrix
                </span>
                <h4 className="text-lg font-bold text-white">
                  4 Structured A/B Experiments Planned
                </h4>
                <p className="text-xs text-zinc-300">
                  Targeted A/B test variations to eliminate early churn while optimizing timing for paywall triggers.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#121622] border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-400">A/B Test 1</span>
                    <span className="text-[10px] font-mono text-zinc-400">Timing & Trust</span>
                  </div>
                  <p className="text-xs text-white font-semibold">
                    Premium after 3 successful connections <span className="text-zinc-400 font-normal">vs</span> Immediately on Launch
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#121622] border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-400">A/B Test 2</span>
                    <span className="text-[10px] font-mono text-zinc-400">LTO Placement</span>
                  </div>
                  <p className="text-xs text-white font-semibold">
                    LTO After Disconnect <span className="text-zinc-400 font-normal">vs</span> LTO On Home Screen
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#121622] border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-400">A/B Test 3</span>
                    <span className="text-[10px] font-mono text-zinc-400">Paywall Localization</span>
                  </div>
                  <p className="text-xs text-white font-semibold">
                    Country-Specific Paywall <span className="text-zinc-400 font-normal">vs</span> Global Paywall
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#121622] border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-400">A/B Test 4</span>
                    <span className="text-[10px] font-mono text-zinc-400">Pricing Tier Granularity</span>
                  </div>
                  <p className="text-xs text-white font-semibold">
                    Weekly Plan (India/LATAM) <span className="text-zinc-400 font-normal">vs</span> Monthly Only
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
