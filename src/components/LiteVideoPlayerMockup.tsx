import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Zap,
  TrendingUp,
  Shield,
  Layers,
  Sparkles,
  Smartphone,
  Sliders,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertCircle,
  Wifi,
  WifiOff,
  Tv,
  Film,
  Check,
  ChevronRight,
  ArrowRight,
  BarChart2
} from 'lucide-react';
import { LITE_VIDEO_PLAYER_DATA } from '../data/portfolioData';

export const LiteVideoPlayerMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'player' | 'architecture' | 'revenue'>('player');

  // Player Simulator State
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(330); // 05:30 in seconds
  const [isPreloadEnabled, setIsPreloadEnabled] = useState<boolean>(true);
  const [selectedNetwork, setSelectedNetwork] = useState<'admob' | 'vungle' | 'pangle' | 'unity'>('admob');
  const [adCountdown, setAdCountdown] = useState<number>(2);
  const [showAdOverlay, setShowAdOverlay] = useState<boolean>(true);
  const [isOnline, setIsOnline] = useState<boolean>(true);

  // Time ticker for simulated video
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => (prev >= 1125 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Ad countdown resetter
  const handleTriggerAd = () => {
    setAdCountdown(2);
    setShowAdOverlay(true);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const networkBids = {
    admob: { name: 'Google AdMob Bidding', ecpm: '$31.25', latency: '120ms', status: 'Winning Bid' },
    vungle: { name: 'Vungle Liftoff', ecpm: '$28.40', latency: '190ms', status: 'Competitor' },
    pangle: { name: 'Pangle Network', ecpm: '$24.80', latency: '210ms', status: 'Competitor' },
    unity: { name: 'Unity Ads', ecpm: '$19.50', latency: '240ms', status: 'Backfill' }
  };

  return (
    <div className="bg-[#15151A] rounded-3xl border border-[#2B2B36] p-6 sm:p-8 space-y-8 shadow-2xl">
      
      {/* Top Header & Tab Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2A2A35]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold text-white font-mono uppercase tracking-wider">
              Lite Video Player · Preload & Mediation Engine
            </h3>
          </div>
          <p className="text-xs text-[#8E8EA0]">
            Interactive simulator of the preload-first caching pipeline and auction mediation.
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-[#1E1E26] rounded-2xl border border-[#323240] self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('player')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'player'
                ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Ad Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Pipeline Tree</span>
          </button>

          <button
            onClick={() => setActiveTab('revenue')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'revenue'
                ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>Revenue Delta</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: PLAYER & AD SIMULATOR (Matches Hero Visual of Page 1)              */}
      {/* ========================================================================= */}
      {activeTab === 'player' && (
        <div className="space-y-8">
          
          {/* Main Visual Board - Replicating Page 1 Mockup */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#1C1215] via-[#16141D] to-[#0E0E12] border border-[#3D252E] p-6 sm:p-8 overflow-hidden shadow-2xl">
            
            {/* Background Glows */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Key Pillars & Partner Badges */}
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/40 border border-red-500/30 text-xs font-mono font-bold text-red-300">
                    <Zap className="w-3.5 h-3.5 text-red-400" />
                    <span>PRELOAD-FIRST ADS MEDIATION</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    LITE VIDEO PLAYER
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Rebuilt the ad-loading model around a preload-first mediation strategy — improving fill rate, time-to-ad, and effective eCPM without raising ad density.
                  </p>
                </div>

                {/* 4 Value Pillars from Mockup */}
                <div className="space-y-2.5">
                  <div className="p-3 rounded-2xl bg-[#1D1B24]/90 border border-red-500/20 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">Preload-First Strategy</div>
                      <div className="text-[11px] text-zinc-400">Ads are preloaded in the background for a seamless experience</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#1D1B24]/90 border border-amber-500/20 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">Smart Mediation</div>
                      <div className="text-[11px] text-zinc-400">AdMob mediation with multiple networks for maximum fill</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#1D1B24]/90 border border-emerald-500/20 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <DollarSign className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">Higher Revenue</div>
                      <div className="text-[11px] text-zinc-400">Better fill rate, lower time-to-ad, and improved eCPM</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#1D1B24]/90 border border-purple-500/20 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">Better User Experience</div>
                      <div className="text-[11px] text-zinc-400">Faster ad delivery with minimal buffering and zero spam</div>
                    </div>
                  </div>
                </div>

                {/* Mediation Partners Bar */}
                <div className="p-3.5 rounded-2xl bg-[#15141C] border border-[#2F2C3D] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block">
                    Active Mediation Partners:
                  </span>
                  <div className="flex items-center gap-2 flex-wrap text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-lg bg-red-950/60 border border-red-500/40 text-red-300 font-bold">Google AdMob</span>
                    <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-500/40 text-blue-300 font-bold">Vungle</span>
                    <span className="px-2.5 py-1 rounded-lg bg-amber-950/60 border border-amber-500/40 text-amber-300 font-bold">Pangle</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300">& More</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Landscape Mobile Phone Frame (as seen on Page 1) */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Phone Container */}
                <div className="relative rounded-[2.5rem] bg-[#0A0A0E] border-4 border-[#33333F] p-3 shadow-2xl overflow-hidden">
                  
                  {/* Top Status Bar of Phone */}
                  <div className="flex items-center justify-between px-4 py-1.5 text-[10px] font-mono text-zinc-400 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">Video_2024_1080p.mp4</span>
                      <span className="px-1.5 py-0.2 rounded bg-red-500/20 text-red-300 text-[9px] font-bold">FHD</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsOnline(!isOnline)}
                        className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono transition-colors ${
                          isOnline ? 'bg-emerald-500/20 text-emerald-300' : 'bg-zinc-800 text-zinc-400'
                        }`}
                      >
                        {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
                        <span>{isOnline ? 'Online (Ad Active)' : 'Offline (Local)'}</span>
                      </button>
                      <span>CC</span>
                      <span>⚙</span>
                    </div>
                  </div>

                  {/* Video Stage Frame */}
                  <div className="relative aspect-[16/9] rounded-2xl bg-black overflow-hidden flex items-center justify-center group">
                    
                    {/* Simulated Cinematic Scenic Wallpaper */}
                    <img
                      src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
                      alt="Scenic Mountain Playback"
                      className="w-full h-full object-cover opacity-80"
                    />

                    {/* Dark gradient overlay for controls */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

                    {/* Preload Status Floating Banner */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-red-500/40 text-xs font-mono text-red-300 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                      <span>{isPreloadEnabled ? 'Preload Ads: Ready in background' : 'Show-Time: Request on tap'}</span>
                    </div>

                    {/* Ad Countdown / Starts In Overlay (Matching PDF) */}
                    {showAdOverlay && isOnline && (
                      <div className="absolute bottom-16 right-4 z-30 flex items-center gap-2.5 p-3 rounded-2xl bg-black/80 backdrop-blur-md border border-red-500/50 text-white shadow-2xl animate-fade-in">
                        <div className="text-right">
                          <div className="text-[10px] font-mono uppercase text-red-300 font-bold">Ad starts in</div>
                          <div className="text-lg font-black font-mono text-white leading-none">0{adCountdown}</div>
                        </div>
                        <button
                          onClick={() => setShowAdOverlay(false)}
                          className="px-2.5 py-1 rounded-lg bg-red-600 hover:bg-red-500 text-[10px] font-mono font-bold transition-all"
                        >
                          Skip Ad
                        </button>
                      </div>
                    )}

                    {/* Center Play/Pause Button */}
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="relative z-10 w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-xl"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                    </button>

                    {/* Bottom Video Controls Scrub Bar */}
                    <div className="absolute bottom-3 left-4 right-4 z-20 space-y-1.5">
                      
                      {/* Timeline Bar */}
                      <div className="w-full h-1.5 rounded-full bg-white/20 overflow-hidden cursor-pointer">
                        <div
                          className="h-full bg-gradient-to-r from-red-500 to-amber-500 rounded-full"
                          style={{ width: `${(currentTime / 1125) * 100}%` }}
                        />
                      </div>

                      {/* Controls Row */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300">
                        <div className="flex items-center gap-3">
                          <button onClick={() => setCurrentTime(Math.max(0, currentTime - 10))}>⏮</button>
                          <span>{formatTime(currentTime)} / 18:45</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={handleTriggerAd}
                            className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[10px] text-white"
                          >
                            Simulate Next Cue
                          </button>
                          <span>⛶</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                {/* 3 Metric Pills below frame matching Page 1 footer banner */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#1C161D] border border-red-500/30 text-center space-y-0.5">
                    <div className="text-xl sm:text-2xl font-black text-red-400 font-mono">+35%</div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Fill Rate Increase</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#1C161D] border border-amber-500/30 text-center space-y-0.5">
                    <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">-25%</div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Time-to-Ad Reduced</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#1C161D] border border-emerald-500/30 text-center space-y-0.5">
                    <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">+42%</div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Effective eCPM Growth</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Interactive Controls Panel */}
          <div className="p-5 rounded-2xl bg-[#181822] border border-[#2A2A38] grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Toggle 1: Preload vs Show-Time */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-zinc-300 flex items-center justify-between">
                <span>Ad Loading Strategy:</span>
                <span className={isPreloadEnabled ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                  {isPreloadEnabled ? 'Preload-First' : 'Show-Time (Legacy)'}
                </span>
              </label>
              <button
                onClick={() => setIsPreloadEnabled(!isPreloadEnabled)}
                className={`w-full py-2 px-3 rounded-xl text-xs font-mono font-bold border transition-all ${
                  isPreloadEnabled
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                    : 'bg-red-950/40 border-red-500/40 text-red-300'
                }`}
              >
                {isPreloadEnabled ? '✓ Preload Engine Active (Cached)' : '✕ Legacy Request on Show (Laggy)'}
              </button>
            </div>

            {/* Toggle 2: Mediation Demand Network */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-zinc-300">
                Top Bidding Demand Network:
              </label>
              <select
                value={selectedNetwork}
                onChange={(e) => setSelectedNetwork(e.target.value as any)}
                className="w-full py-2 px-3 rounded-xl text-xs font-mono bg-[#111116] border border-[#333342] text-white focus:outline-none focus:border-red-500"
              >
                <option value="admob">Google AdMob Bidding ($31.25 eCPM)</option>
                <option value="vungle">Vungle Liftoff ($28.40 eCPM)</option>
                <option value="pangle">Pangle Network ($24.80 eCPM)</option>
                <option value="unity">Unity Ads ($19.50 eCPM)</option>
              </select>
            </div>

            {/* Live Status Output */}
            <div className="p-2.5 rounded-xl bg-[#111116] border border-[#2B2B38] flex flex-col justify-center space-y-1">
              <div className="text-[10px] font-mono text-zinc-400">Live Bid Resolution:</div>
              <div className="text-xs font-bold text-white font-mono flex items-center justify-between">
                <span>{networkBids[selectedNetwork].name}</span>
                <span className="text-emerald-400">{networkBids[selectedNetwork].ecpm}</span>
              </div>
              <div className="text-[10px] text-zinc-500 font-mono">
                Latency: {networkBids[selectedNetwork].latency} • {networkBids[selectedNetwork].status}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: PIPELINE TREE & WATERFALL FALLBACK (Section 03 of PDF)              */}
      {/* ========================================================================= */}
      {activeTab === 'architecture' && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white font-mono">
              Resilient Preload & Fallback Request Hierarchy
            </h4>
            <p className="text-xs text-zinc-400">
              Designed to ensure 0% wasted impressions and prevent show-time lag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-[#1A1A24] border border-red-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-red-400">Stage 01</span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-bold">Primary</span>
              </div>
              <h5 className="text-sm font-bold text-white font-mono">Preload on Splash</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Ad request initiates immediately at app launch in background thread before home screen rendering.
              </p>
              <div className="text-[10px] font-mono text-emerald-400">→ Ad Cached in RAM</div>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-[#1A1A24] border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400">Stage 02</span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">Backfill</span>
              </div>
              <h5 className="text-sm font-bold text-white font-mono">Backfill Request</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">
                If splash preload returns empty or times out, trigger secondary fast waterfall bid request.
              </p>
              <div className="text-[10px] font-mono text-amber-400">→ Dynamic eCPM Floor</div>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-[#1A1A24] border border-blue-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-400">Stage 03</span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">Action Load</span>
              </div>
              <h5 className="text-sm font-bold text-white font-mono">High-Intent Entry</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Never block user entry. Allow immediate video browse, triggering preload on first folder/file tap.
              </p>
              <div className="text-[10px] font-mono text-blue-400">→ Zero Churn on Launch</div>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-[#1A1A24] border border-purple-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-400">Stage 04</span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">Fallback</span>
              </div>
              <h5 className="text-sm font-bold text-white font-mono">Native / Banner Unit</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">
                If full-screen interstitial fails to fill, rotate 1 of 4 prioritized native units or backfill banner.
              </p>
              <div className="text-[10px] font-mono text-purple-400">→ 100% Fill Safeguard</div>
            </div>

          </div>

          {/* Eligibility Rules Box */}
          <div className="p-4 rounded-2xl bg-[#121218] border border-[#2D2D3B] space-y-2">
            <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider block">
              Show-Time Eligibility Logic:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-300">
              <div className="p-3 rounded-xl bg-[#181822] border border-white/5">
                <strong className="text-white">Dual Trigger Check:</strong> Time-based seconds check (e.g. 45s cooldown) OR screen-count check (whichever hits first).
              </div>
              <div className="p-3 rounded-xl bg-[#181822] border border-white/5">
                <strong className="text-white">Decision Hierarchy:</strong> Preload Available → Show Preload. Else → Show Backfill. Else → Show Full-Screen Native.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: REVENUE COMPARISON TABLE (Section 04 of PDF)                       */}
      {/* ========================================================================= */}
      {activeTab === 'revenue' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="space-y-0.5">
              <h4 className="text-base font-bold text-white font-mono">
                Monthly Earnings by Ad Format (Sep vs Nov 30–Dec 30)
              </h4>
              <p className="text-xs text-zinc-400">
                Total monthly earnings scaled from $12,372 to $32,740 (~2.65x overall growth).
              </p>
            </div>

            <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
              Total Growth: ~2.65X
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#2B2B38]">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#1C1C26] text-zinc-400 border-b border-[#2B2B38]">
                <tr>
                  <th className="p-3.5">Ad Format</th>
                  <th className="p-3.5">September Baseline</th>
                  <th className="p-3.5">Dec Results (Post-Preload)</th>
                  <th className="p-3.5">Revenue Lift</th>
                  <th className="p-3.5">Observed eCPM Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#242433] bg-[#14141C]">
                {LITE_VIDEO_PLAYER_DATA.results.revenueByFormat.map((row, ri) => (
                  <tr key={ri} className={row.isHero ? 'bg-red-950/20 font-bold' : ''}>
                    <td className="p-3.5 text-white flex items-center gap-2">
                      {row.isHero && <span className="w-2 h-2 rounded-full bg-red-400" />}
                      <span>{row.format}</span>
                    </td>
                    <td className="p-3.5 text-zinc-400">{row.sep}</td>
                    <td className="p-3.5 text-emerald-400 font-bold">{row.dec}</td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                        {row.growth}
                      </span>
                    </td>
                    <td className="p-3.5 text-zinc-300">
                      {row.ecpmBefore} → <strong className="text-white">{row.ecpmAfter}</strong>{' '}
                      <span className="text-emerald-400">({row.ecpmGrowth})</span>
                    </td>
                  </tr>
                ))}
                
                {/* Total Row */}
                <tr className="bg-[#1E1E2C] font-black text-white text-sm">
                  <td className="p-3.5">TOTAL ESTIMATED EARNINGS</td>
                  <td className="p-3.5 text-zinc-400">~{LITE_VIDEO_PLAYER_DATA.results.totalSep}</td>
                  <td className="p-3.5 text-emerald-400">~{LITE_VIDEO_PLAYER_DATA.results.totalDec}</td>
                  <td className="p-3.5 text-emerald-300">~2.65X Growth</td>
                  <td className="p-3.5 text-zinc-400">Across All Networks</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Format Summary Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-[#161620] border border-[#2B2B38] space-y-1">
              <span className="text-[10px] font-mono text-zinc-400 uppercase">Interstitial (Primary Driver)</span>
              <div className="text-lg font-black text-white font-mono">$18,556.03</div>
              <div className="text-[10px] text-emerald-400 font-mono">~4.8x earnings lift (eCPM $31.25)</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#161620] border border-[#2B2B38] space-y-1">
              <span className="text-[10px] font-mono text-zinc-400 uppercase">Banner Revenue</span>
              <div className="text-lg font-black text-white font-mono">$8,721.99</div>
              <div className="text-[10px] text-emerald-400 font-mono">~1.3x earnings growth</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#161620] border border-[#2B2B38] space-y-1">
              <span className="text-[10px] font-mono text-zinc-400 uppercase">App Open Ads</span>
              <div className="text-lg font-black text-white font-mono">$3,605.38</div>
              <div className="text-[10px] text-emerald-400 font-mono">~2.8x lift (eCPM $20.53)</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#161620] border border-[#2B2B38] space-y-1">
              <span className="text-[10px] font-mono text-zinc-400 uppercase">Native Advanced</span>
              <div className="text-lg font-black text-white font-mono">$1,835.14</div>
              <div className="text-[10px] text-emerald-400 font-mono">~3.0x lift via rotation & fallback</div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
