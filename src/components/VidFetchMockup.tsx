import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  Download,
  Play,
  CheckCircle2,
  TrendingUp,
  Layers,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Search,
  Globe,
  Sliders,
  DollarSign,
  ShieldCheck,
  Zap,
  BarChart2,
  Check,
  ChevronRight,
  Lock,
  Film,
  FileVideo,
  X
} from 'lucide-react';
import { HD_VIDEO_DOWNLOADER_DATA } from '../data/portfolioData';

export const VidFetchMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'app' | 'mediation' | 'metrics'>('app');
  
  // App Mockup State
  const [downloadProgress, setDownloadProgress] = useState<number>(89);
  const [isDownloading, setIsDownloading] = useState<boolean>(true);
  const [onboardingStep, setOnboardingStep] = useState<number>(0); // 0 = normal, 1 = step 1 (learn download), 2 = step 2 (play & verify), 3 = step 3 (thank you & natural ad placement)
  const [showInterstitialAd, setShowInterstitialAd] = useState<boolean>(false);
  const [sampleCompleted, setSampleCompleted] = useState<boolean>(false);

  // Mediation Simulator State
  const [selectedGeo, setSelectedGeo] = useState<'tier1' | 'tier2' | 'tier3'>('tier1');
  const [enablePreload, setEnablePreload] = useState<boolean>(true);
  const [waterfallActiveIndex, setWaterfallActiveIndex] = useState<number>(0);

  // Metrics Explorer State
  const [cohortMode, setCohortMode] = useState<'jan' | 'sep'>('jan');

  // Simulated download ticker
  useEffect(() => {
    let interval: any;
    if (isDownloading) {
      interval = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 100) {
            setIsDownloading(false);
            return 100;
          }
          return prev + 1;
        });
      }, 400);
    }
    return () => clearInterval(interval);
  }, [isDownloading]);

  const geoTiers = {
    tier1: {
      name: 'Tier 1 Markets (US, UK, CA, AU)',
      ecpmFloor: '$8.50',
      matchRate: '88.4%',
      showRate: '46.2%',
      networks: ['AdMob Bidding', 'AppLovin MAX', 'Unity Ads Direct', 'Meta Audience Network'],
      yieldMultiplier: '3.4x'
    },
    tier2: {
      name: 'Tier 2 Markets (EU, LATAM, Middle East)',
      ecpmFloor: '$4.20',
      matchRate: '84.8%',
      showRate: '41.5%',
      networks: ['AdMob Bidding', 'Mintegral', 'IronSource', 'InMobi'],
      yieldMultiplier: '1.9x'
    },
    tier3: {
      name: 'Tier 3 Markets (APAC, Emerging)',
      ecpmFloor: '$1.80',
      matchRate: '82.1%',
      showRate: '38.6%',
      networks: ['AdMob Bidding', 'Pangle', 'Vungle', 'AdColony'],
      yieldMultiplier: '1.0x'
    }
  };

  const detectedVideos = [
    { title: 'Best Holiday Destinations', resolution: '1080p', format: 'MP4', size: '134.8 MB', time: '14:20', downloads: '124K' },
    { title: 'Top 10 City Views Aerial 4K', resolution: '4K Ultra', format: 'MP4', size: '420.2 MB', time: '08:45', downloads: '89K' },
    { title: 'Nature Relaxation Meditation', resolution: '1080p', format: 'MP4', size: '98.4 MB', time: '22:10', downloads: '210K' }
  ];

  return (
    <div className="bg-[#191919] border border-[#2D2D2D] rounded-[32px] overflow-hidden shadow-2xl space-y-6">
      
      {/* Top Header & Tab Navigation Bar */}
      <div className="p-6 sm:p-8 bg-[#1E1E1E] border-b border-[#2D2D2D] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#E97868] to-[#F4A095] flex items-center justify-center text-[#141414] font-extrabold shadow-md">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <span>VidFetch Product & Ad Engine</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/20">
                  Interactive Simulator
                </span>
              </h3>
            </div>
          </div>
          <p className="text-xs text-[#A0A0A0]">
            Experience the consumer download interface, sample onboarding flow, and waterfall mediation pipeline.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center bg-[#141414] p-1 rounded-2xl border border-[#2D2D2D] self-start md:self-auto">
          <button
            onClick={() => setActiveTab('app')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'app'
                ? 'bg-[#2A2A2A] text-white shadow-inner font-bold'
                : 'text-[#888888] hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>App & Onboarding</span>
          </button>

          <button
            onClick={() => setActiveTab('mediation')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'mediation'
                ? 'bg-[#2A2A2A] text-white shadow-inner font-bold'
                : 'text-[#888888] hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Mediation Waterfall</span>
          </button>

          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'metrics'
                ? 'bg-[#2A2A2A] text-white shadow-inner font-bold'
                : 'text-[#888888] hover:text-white'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Telemetry Lift</span>
          </button>
        </div>
      </div>

      {/* TAB 1: VidFetch App & Onboarding Simulator */}
      {activeTab === 'app' && (
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Onboarding Interactive Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#242024] to-[#1E1E1E] border border-[#383838] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E97868] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Product Optimization Milestone #3 & #4</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Rebuilt Onboarding Flow & "Thank You" Ad Placement
              </h4>
              <p className="text-xs text-[#A0A0A0]">
                Experience how guiding the user through a sample video download solved early drop-offs and created a natural ad moment.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {onboardingStep === 0 ? (
                <button
                  onClick={() => setOnboardingStep(1)}
                  className="px-4 py-2.5 rounded-xl bg-[#E97868] hover:bg-[#F4A095] text-[#141414] font-bold text-xs transition-all shadow-md flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Sample Onboarding</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setOnboardingStep(0);
                    setShowInterstitialAd(false);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[#2D2D2D] hover:bg-[#383838] text-white text-xs font-medium transition-all flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset Experience</span>
                </button>
              )}
            </div>
          </div>

          {/* Dual Layout: Left (Mobile Device Frame) | Right (PM Architectural Logic Callouts) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Mobile Device Frame Mockup (5.5 cols) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[340px] bg-[#121212] rounded-[40px] border-4 border-[#333333] shadow-[0_25px_60px_rgba(0,0,0,0.8)] p-3 relative overflow-hidden">
                
                {/* Device Speaker Notch */}
                <div className="w-24 h-4 bg-[#222222] rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#111111] mr-2" />
                  <div className="w-8 h-1 rounded-full bg-[#333333]" />
                </div>

                {/* Simulated Screen Body */}
                <div className="bg-[#1A1A1A] rounded-[28px] p-4 text-white space-y-4 min-h-[520px] flex flex-col justify-between border border-[#262626] relative">
                  
                  {/* ONBOARDING STEP OVERLAY: Step 1 (Download Guidance) */}
                  {onboardingStep === 1 && (
                    <div className="absolute inset-0 bg-black/85 backdrop-blur-md rounded-[28px] p-5 z-20 flex flex-col justify-between animate-fadeIn">
                      <div className="space-y-3">
                        <div className="w-9 h-9 rounded-xl bg-[#E97868] text-[#141414] font-bold flex items-center justify-center">
                          1/3
                        </div>
                        <h5 className="text-base font-extrabold text-white">
                          Sample Download Flow
                        </h5>
                        <p className="text-xs text-[#CCCCCC] leading-relaxed">
                          "Tap download on any video link to fetch HD or 4K streams directly to offline storage."
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#262626] border border-[#383838] space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-white">Sample Video: Nature 1080p</span>
                          <span className="text-[#E97868] font-mono">134 MB</span>
                        </div>
                        <button
                          onClick={() => setOnboardingStep(2)}
                          className="w-full py-2.5 rounded-xl bg-[#E97868] hover:bg-[#F4A095] text-[#141414] font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Simulate 1-Tap Download</span>
                        </button>
                      </div>

                      <div className="flex justify-between items-center text-[11px] text-[#888888]">
                        <span>Guided User Activation</span>
                        <button onClick={() => setOnboardingStep(0)} className="hover:text-white">Skip</button>
                      </div>
                    </div>
                  )}

                  {/* ONBOARDING STEP OVERLAY: Step 2 (Playback & Save) */}
                  {onboardingStep === 2 && (
                    <div className="absolute inset-0 bg-black/85 backdrop-blur-md rounded-[28px] p-5 z-20 flex flex-col justify-between animate-fadeIn">
                      <div className="space-y-3">
                        <div className="w-9 h-9 rounded-xl bg-[#E97868] text-[#141414] font-bold flex items-center justify-center">
                          2/3
                        </div>
                        <h5 className="text-base font-extrabold text-white">
                          Playback & Download Manager
                        </h5>
                        <p className="text-xs text-[#CCCCCC] leading-relaxed">
                          "Manage active downloads, organize files by tags, or play seamlessly with the built-in gesture media player."
                        </p>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#262626] border border-[#383838] space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#333333] flex items-center justify-center text-[#E97868]">
                            <Play className="w-5 h-5 fill-current" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white">Nature 1080p.mp4</p>
                            <span className="text-[10px] text-emerald-400 font-mono">Download Complete · 100%</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setOnboardingStep(3)}
                          className="w-full py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#141414] font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Complete Sample → See Success Screen</span>
                        </button>
                      </div>

                      <div className="flex justify-between items-center text-[11px] text-[#888888]">
                        <span>Zero Bounce Rate Strategy</span>
                        <button onClick={() => setOnboardingStep(0)} className="hover:text-white">Exit</button>
                      </div>
                    </div>
                  )}

                  {/* ONBOARDING STEP OVERLAY: Step 3 ("Thank You / Success" Screen & Natural Ad Timing) */}
                  {onboardingStep === 3 && (
                    <div className="absolute inset-0 bg-[#161616] rounded-[28px] p-5 z-20 flex flex-col justify-between animate-fadeIn border border-[#333333]">
                      <div className="text-center space-y-2 pt-2">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h5 className="text-base font-extrabold text-white">
                          You're All Set!
                        </h5>
                        <p className="text-[11px] text-[#A0A0A0]">
                          Your sample video is ready in your library. Enjoy fast offline playback anytime.
                        </p>
                      </div>

                      {/* Natural Native Ad Placement during Success Pause */}
                      <div className="p-3.5 rounded-2xl bg-[#222222] border border-[#333333] space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#888888]">
                          <span className="px-1.5 py-0.5 rounded bg-black/40 text-[#CCCCCC] font-bold">Ad · Sponsored</span>
                          <span>FastVPN Pro</span>
                        </div>
                        <p className="text-xs text-white font-medium">
                          Browse & Download with 100% Privacy & Encrypted Speed.
                        </p>
                        <button className="w-full py-1.5 rounded-lg bg-[#333333] hover:bg-[#444444] text-white text-[11px] font-semibold transition-all">
                          Learn More →
                        </button>
                      </div>

                      {/* Post-Download Interstitial Trigger Demo */}
                      <div className="space-y-2 pt-2 border-t border-[#262626]">
                        <button
                          onClick={() => setShowInterstitialAd(true)}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#E97868] to-[#F4A095] text-[#141414] font-bold text-xs transition-all shadow-md flex items-center justify-center gap-1.5"
                        >
                          <Zap className="w-3.5 h-3.5" />
                          <span>Simulate Post-Download Interstitial</span>
                        </button>

                        <button
                          onClick={() => setOnboardingStep(0)}
                          className="w-full py-2 rounded-xl bg-[#222222] text-[#A0A0A0] hover:text-white text-xs font-semibold transition-all"
                        >
                          Continue to Main App
                        </button>
                      </div>
                    </div>
                  )}

                  {/* SIMULATED INTERSTITIAL FULLSCREEN AD OVERLAY */}
                  {showInterstitialAd && (
                    <div className="absolute inset-0 bg-[#0C0C0C] z-30 rounded-[28px] p-5 flex flex-col justify-between animate-fadeIn border border-[#444444]">
                      <div className="flex items-center justify-between pb-2 border-b border-[#222222]">
                        <span className="text-[10px] font-mono text-[#888888] bg-white/10 px-2 py-0.5 rounded">
                          Ad · High eCPM Interstitial ($5.09 Floor)
                        </span>
                        <button
                          onClick={() => setShowInterstitialAd(false)}
                          className="w-6 h-6 rounded-full bg-[#222222] text-white flex items-center justify-center hover:bg-[#333333]"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-center space-y-3 py-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#713B5D] to-[#E97868] mx-auto flex items-center justify-center shadow-xl">
                          <Film className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-base font-extrabold text-white">
                          Cloud Stream 4K Cinema
                        </h4>
                        <p className="text-xs text-[#999999] max-w-[200px] mx-auto">
                          Unlimited 4K streaming without buffering. Try 7 days free.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <button
                          onClick={() => setShowInterstitialAd(false)}
                          className="w-full py-2.5 rounded-xl bg-white text-[#121212] font-bold text-xs shadow-md"
                        >
                          Install Now
                        </button>
                        <p className="text-[10px] text-center text-[#777777] font-mono">
                          Triggered via Screen-Count & Post-Download logic
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Main App Feed Top Section */}
                  <div className="space-y-3">
                    {/* App Title & Vault Link */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-sm text-white tracking-tight">VidFetch</span>
                        <span className="text-[10px] font-mono text-[#E97868] px-1.5 py-0.5 rounded bg-[#E97868]/10 font-bold">HD</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#888888] flex items-center gap-1">
                          <Lock className="w-3 h-3 text-[#E97868]" />
                          Vault
                        </span>
                      </div>
                    </div>

                    {/* Search / Enter URL Bar */}
                    <div className="p-2.5 rounded-2xl bg-[#222222] border border-[#303030] flex items-center gap-2 shadow-inner">
                      <Search className="w-3.5 h-3.5 text-[#888888]" />
                      <input
                        type="text"
                        readOnly
                        value="https://vimeo.com/nature-vlog-4k"
                        className="bg-transparent text-xs text-[#CCCCCC] w-full outline-none font-mono"
                      />
                    </div>

                    {/* Social Quick Launch Icons */}
                    <div className="flex items-center justify-between px-1">
                      {['Facebook', 'Instagram', 'Twitter', 'Vimeo'].map((platform, i) => (
                        <div key={platform} className="flex flex-col items-center gap-1">
                          <div className="w-9 h-9 rounded-xl bg-[#262626] border border-[#333333] flex items-center justify-center text-xs text-white font-bold hover:bg-[#303030]">
                            {platform[0]}
                          </div>
                          <span className="text-[9px] text-[#888888]">{platform}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Active Download Card */}
                  <div className="p-3 rounded-2xl bg-[#222222] border border-[#333333] space-y-2 shadow-md">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white truncate max-w-[170px]">Travel Vlog 2024.mp4</span>
                      <span className="text-[10px] font-mono text-[#E97868]">{downloadProgress}%</span>
                    </div>

                    <div className="w-full h-1.5 bg-[#141414] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#E97868] to-emerald-400 transition-all duration-300 rounded-full"
                        style={{ width: `${downloadProgress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-[#888888] font-mono">
                      <span>120.5MB / 134.8MB</span>
                      <span>4.8 MB/s</span>
                    </div>
                  </div>

                  {/* Detected Videos List */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-[#888888] uppercase block">
                      Detected Media Links
                    </span>

                    {detectedVideos.slice(0, 2).map((vid, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-[#202020] border border-[#2B2B2B] flex items-center justify-between gap-2 text-xs"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileVideo className="w-4 h-4 text-[#E97868] shrink-0" />
                          <div className="truncate">
                            <p className="font-bold text-white text-[11px] truncate">{vid.title}</p>
                            <p className="text-[9px] text-[#888888]">{vid.resolution} · {vid.size}</p>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setDownloadProgress(10);
                            setIsDownloading(true);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-[#2E2E2E] hover:bg-[#3E3E3E] text-white font-bold text-[10px] shrink-0"
                        >
                          Fetch
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Navigation */}
                  <div className="pt-2 border-t border-[#262626] flex items-center justify-around text-[10px] text-[#888888]">
                    <span className="text-white font-bold flex flex-col items-center">
                      <Globe className="w-3.5 h-3.5" />
                      <span>Home</span>
                    </span>
                    <span className="flex flex-col items-center hover:text-white">
                      <Download className="w-3.5 h-3.5" />
                      <span>Downloads</span>
                    </span>
                    <span className="flex flex-col items-center hover:text-white">
                      <Play className="w-3.5 h-3.5" />
                      <span>Player</span>
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: PM Architectural Logic Callouts (6.5 cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-[#E97868]">
                  Product Strategy & Execution
                </span>
                <h4 className="text-xl font-extrabold text-white tracking-tight">
                  Turning Friction Moments into Natural Revenue Touchpoints
                </h4>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Rather than blasting aggressive popups upon app launch, we treated ad placements as structured UX checkpoints with high user value.
                </p>
              </div>

              {/* 3 Core Product Levers Cards */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#E97868]/20 text-[#E97868] text-xs font-mono font-bold flex items-center justify-center">
                      1
                    </span>
                    <h5 className="text-sm font-bold text-white">Interactive Sample Video Onboarding</h5>
                  </div>
                  <p className="text-xs text-[#A0A0A0] pl-7">
                    First session teaches Download, Play, and File Management in 15 seconds. Reduced initial app exit bounces by 44%.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#713B5D]/30 text-[#F4A095] text-xs font-mono font-bold flex items-center justify-center">
                      2
                    </span>
                    <h5 className="text-sm font-bold text-white">"Thank You / Success" Screen Pause</h5>
                  </div>
                  <p className="text-xs text-[#A0A0A0] pl-7">
                    Positioned non-intrusive Native ads and rewarded prompts at completion screens when user satisfaction is highest.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center">
                      3
                    </span>
                    <h5 className="text-sm font-bold text-white">Screen-Count Frequency Trigger</h5>
                  </div>
                  <p className="text-xs text-[#A0A0A0] pl-7">
                    Enforced ~2 screen transitions cooldown rule to avoid disruptive interruptions, lifting Show Rate from 29.2% to 41.42%.
                  </p>
                </div>
              </div>

              {/* Instant Telemetry Summary Box */}
              <div className="p-5 rounded-2xl bg-black/40 border border-[#2D2D2D] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#888888] uppercase">Ad Viewer Rate</span>
                  <div className="text-2xl font-extrabold text-white">30.5% → 57.3%</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#888888] uppercase">Interstitial Revenue</span>
                  <div className="text-2xl font-extrabold text-emerald-400">+182.6% Lift</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* TAB 2: Waterfall Mediation & Floor Simulator */}
      {activeTab === 'mediation' && (
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#E97868]">
                AdMob Mediation Architecture
              </span>
              <h4 className="text-xl font-extrabold text-white tracking-tight">
                Tier-Wise eCPM Floors & Multi-Network Auction
              </h4>
              <p className="text-xs text-[#A0A0A0]">
                Simulate how country-specific tiers, bid density, and preload buffering drive higher match and win rates.
              </p>
            </div>

            {/* Geo Tier Buttons */}
            <div className="flex items-center bg-[#141414] p-1 rounded-2xl border border-[#2D2D2D]">
              {(['tier1', 'tier2', 'tier3'] as const).map((geo) => (
                <button
                  key={geo}
                  onClick={() => setSelectedGeo(geo)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedGeo === geo
                      ? 'bg-[#2A2A2A] text-white font-bold shadow-inner'
                      : 'text-[#888888] hover:text-white'
                  }`}
                >
                  {geo === 'tier1' ? 'Tier 1 (US/UK)' : geo === 'tier2' ? 'Tier 2 (EU/LATAM)' : 'Tier 3 (APAC)'}
                </button>
              ))}
            </div>
          </div>

          {/* Active Geo Performance Snapshot */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#888888] uppercase">Target eCPM Floor</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#E97868]">
                {geoTiers[selectedGeo].ecpmFloor}
              </div>
              <p className="text-[11px] text-[#A0A0A0]">Dynamic floor threshold</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#888888] uppercase">Auction Match Rate</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                {geoTiers[selectedGeo].matchRate}
              </div>
              <p className="text-[11px] text-[#A0A0A0]">Mediation fill rate</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#888888] uppercase">Show Rate</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                {geoTiers[selectedGeo].showRate}
              </div>
              <p className="text-[11px] text-[#A0A0A0]">Delivered impressions</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#888888] uppercase">Revenue Density</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F4A095]">
                {geoTiers[selectedGeo].yieldMultiplier}
              </div>
              <p className="text-[11px] text-[#A0A0A0]">Vs unmediated baseline</p>
            </div>
          </div>

          {/* Waterfall Cascade Visualizer */}
          <div className="p-6 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#2D2D2D]">
              <h5 className="text-xs font-mono font-bold uppercase text-white">
                Mediation Auction Stack ({geoTiers[selectedGeo].name})
              </h5>
              <span className="text-xs text-[#888888] font-mono">Bidding + High Floor Waterfall</span>
            </div>

            <div className="space-y-2.5">
              {geoTiers[selectedGeo].networks.map((net, i) => (
                <div
                  key={net}
                  className="p-3.5 rounded-xl bg-[#242424] border border-[#333333] flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[#303030] text-[#CCCCCC] font-mono text-[10px] font-bold flex items-center justify-center">
                      0{i + 1}
                    </span>
                    <div>
                      <span className="font-bold text-white">{net}</span>
                      <span className="text-[11px] text-[#888888] ml-2">
                        {i === 0 ? 'Header Bidding (Primary)' : `Tier Floor Priority #${i + 1}`}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-bold">
                      Connected & Healthy
                    </span>
                    <span className="text-white font-mono font-bold">
                      ${(parseFloat(geoTiers[selectedGeo].ecpmFloor.replace('$', '')) - i * 0.85).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preload & Backfill Buffer Toggle */}
          <div className="p-6 rounded-2xl bg-black/40 border border-[#2D2D2D] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#E97868]" />
                <h5 className="text-sm font-bold text-white">Preload & Backfill Caching Buffer</h5>
              </div>
              <p className="text-xs text-[#A0A0A0]">
                Pre-fetches ad units in the background during active download to ensure zero display latency when user reaches completion screen.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className={`text-xs font-mono font-bold ${enablePreload ? 'text-emerald-400' : 'text-[#888888]'}`}>
                {enablePreload ? 'Latency: 0.12s (Optimal)' : 'Latency: 2.45s (Risk)'}
              </span>
              <button
                onClick={() => setEnablePreload(!enablePreload)}
                className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                  enablePreload ? 'bg-emerald-500' : 'bg-[#333333]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    enablePreload ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

        </div>
      )}

      {/* TAB 3: Telemetry Lift Explorer */}
      {activeTab === 'metrics' && (
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Cohort Toggle & Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#E97868]">
                Comparative Performance Telemetry
              </span>
              <h4 className="text-xl font-extrabold text-white tracking-tight">
                September Baseline vs. January Post-Optimization
              </h4>
              <p className="text-xs text-[#A0A0A0]">
                Audited results following BigQuery funnel restructuring and mediation floor adjustments.
              </p>
            </div>

            <div className="flex items-center bg-[#141414] p-1 rounded-2xl border border-[#2D2D2D]">
              <button
                onClick={() => setCohortMode('sep')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  cohortMode === 'sep'
                    ? 'bg-[#2A2A2A] text-white font-bold shadow-inner'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                September Baseline
              </button>
              <button
                onClick={() => setCohortMode('jan')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  cohortMode === 'jan'
                    ? 'bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                January Post-Optimization (+182%)
              </button>
            </div>
          </div>

          {/* Results Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#2D2D2D] text-[#888888] font-mono uppercase">
                  <th className="pb-3 pl-3">Key Metric</th>
                  <th className="pb-3">September Baseline</th>
                  <th className="pb-3">January Post-Opt</th>
                  <th className="pb-3 text-right pr-3">Growth / Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#262626]">
                {HD_VIDEO_DOWNLOADER_DATA.results.metricsTable.map((row, i) => (
                  <tr key={i} className="hover:bg-[#1E1E1E] transition-colors">
                    <td className="py-3.5 pl-3 font-bold text-white">{row.metric}</td>
                    <td className="py-3.5 text-[#A0A0A0] font-mono">{row.sep}</td>
                    <td className="py-3.5 font-bold text-emerald-400 font-mono">{row.jan}</td>
                    <td className="py-3.5 text-right pr-3 font-mono font-bold text-[#F4A095]">
                      {row.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 3 Core PM Impact Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#2D2D2D]">
            <div className="p-4 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-1">
              <span className="text-[10px] font-mono text-[#E97868] uppercase font-bold">Revenue Surge</span>
              <p className="text-base font-extrabold text-white">$1,463 → $4,135</p>
              <p className="text-[11px] text-[#A0A0A0]">+182.6% Interstitial earnings</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Audience Density</span>
              <p className="text-base font-extrabold text-white">5,697 → 9,232</p>
              <p className="text-[11px] text-[#A0A0A0]">+87% Daily Ad Viewers</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-1">
              <span className="text-[10px] font-mono text-[#F4A095] uppercase font-bold">Show Rate Efficiency</span>
              <p className="text-base font-extrabold text-white">29.2% → 41.4%</p>
              <p className="text-[11px] text-[#A0A0A0]">+41.8% Show rate improvement</p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
