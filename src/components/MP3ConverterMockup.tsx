import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Music,
  Scissors,
  Layers,
  Sliders,
  Volume2,
  Mic,
  Play,
  Pause,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Shield,
  Zap,
  RefreshCw,
  FileAudio,
  Radio,
  Clock,
  Smartphone,
  ChevronRight,
  Plus,
  Search,
  Filter,
  DollarSign,
  Tv,
  Crown
} from 'lucide-react';

export const MP3ConverterMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'app' | 'funnel' | 'monetization'>('app');
  
  // App Simulation State
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [selectedTool, setSelectedTool] = useState<string>('video-to-mp3');
  const [activeBitrate, setActiveBitrate] = useState<'128k' | '256k' | '320k'>('320k');
  const [selectedFormat, setSelectedFormat] = useState<'MP3' | 'AAC' | 'WAV' | 'FLAC'>('MP3');
  const [isConverted, setIsConverted] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [firstSessionAdDelayed, setFirstSessionAdDelayed] = useState(true);
  const [monetizationPeriod, setMonetizationPeriod] = useState<'before' | 'after'>('after');

  const audioTools = [
    { id: 'video-to-mp3', name: 'Video to MP3', icon: Music, badge: 'High Usage', desc: 'Fast & High Quality 320kbps' },
    { id: 'trim', name: 'Trim Audio', icon: Scissors, badge: 'High Usage', desc: 'Precise waveform cut & fade' },
    { id: 'merge', name: 'Merge Audio', icon: Layers, badge: 'High Usage', desc: 'Combine multiple audio tracks' },
    { id: 'mixer', name: 'Audio Mixer', icon: Sliders, badge: 'Pro', desc: 'Multi-track volume balance' },
    { id: 'voice-changer', name: 'Voice Changer', icon: Mic, badge: 'Popular', desc: 'Robot, deep, echo, radio' },
    { id: 'format', name: 'Change Format', icon: RefreshCw, badge: 'Core', desc: 'MP3, AAC, WAV, FLAC' },
    { id: 'bitrate', name: 'Change Bitrate', icon: Radio, badge: 'Lossless', desc: '64kbps up to 320kbps' },
    { id: 'speed-pitch', name: 'Speed & Pitch', icon: Clock, badge: 'New', desc: 'Tempo 0.5x-2.0x, pitch shift' },
    { id: 'ai-extract', name: 'AI Vocal Split', icon: Sparkles, badge: 'AI Tool', desc: 'Extract vocals or bgm' },
  ];

  // Simulated Conversion Flow
  const handleStartConversion = () => {
    setIsProcessing(true);
    setProcessingProgress(0);
    setIsConverted(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isProcessing && processingProgress < 100) {
      timer = setTimeout(() => {
        setProcessingProgress((prev) => {
          if (prev >= 95) {
            setIsProcessing(false);
            setIsConverted(true);
            return 100;
          }
          return prev + 15;
        });
      }, 350);
    }
    return () => clearTimeout(timer);
  }, [isProcessing, processingProgress]);

  return (
    <div className="w-full bg-[#18181B] border border-[#2D2D33] rounded-[32px] overflow-hidden shadow-2xl">
      {/* Header Controller Bar */}
      <div className="bg-[#121215] border-b border-[#2D2D33] px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#713B5D] to-[#E97868] flex items-center justify-center shadow-md">
            <Music className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-extrabold text-white font-mono tracking-tight">
                MP3 CONVERTER SIMULATOR
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E97868]/20 text-[#E97868] font-bold border border-[#E97868]/30">
                Live Interactive Architecture
              </span>
            </div>
            <p className="text-[11px] text-[#A0A0A0]">
              Explore the mobile user experience, 9-tool light media suite, and post-processing ad waiting flow.
            </p>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#1E1E24] border border-[#2E2E38]">
          <button
            onClick={() => setActiveTab('app')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'app'
                ? 'bg-gradient-to-r from-[#713B5D] to-[#91466E] text-white shadow-md'
                : 'text-[#888899] hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile App & Audio Tools</span>
          </button>

          <button
            onClick={() => setActiveTab('funnel')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'funnel'
                ? 'bg-[#E97868] text-[#121215] shadow-md'
                : 'text-[#888899] hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Retention & Funnel Diagnostics</span>
          </button>

          <button
            onClick={() => setActiveTab('monetization')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'monetization'
                ? 'bg-emerald-500 text-black shadow-md'
                : 'text-[#888899] hover:text-white'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>90-Day Monetization Telemetry</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="p-4 sm:p-6 lg:p-8">
        {/* TAB 1: Mobile App & Audio Suite */}
        {activeTab === 'app' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Phone Screen Canvas (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[320px] sm:w-[340px] bg-[#0E0E14] border-[6px] border-[#252530] rounded-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col relative text-white">
                
                {/* Phone Speaker & Dynamic Island */}
                <div className="pt-3 pb-2 px-6 flex items-center justify-between bg-[#0E0E14]">
                  <span className="text-[10px] font-mono text-zinc-400">9:41</span>
                  <div className="w-20 h-3.5 bg-black rounded-full mx-auto flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-zinc-800" />
                  </div>
                  <div className="flex items-center gap-1 text-zinc-400 text-[10px]">
                    <span>5G</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                </div>

                {/* App Navigation Bar */}
                <div className="px-4 py-2.5 flex items-center justify-between border-b border-zinc-800/60 bg-[#12121A]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#6366F1] to-[#EC4899] flex items-center justify-center shadow-xs">
                      <Music className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold tracking-tight">MP3 Converter</div>
                      <div className="text-[9px] text-zinc-400">Fast • Simple • Reliable</div>
                    </div>
                  </div>
                  <button className="px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[10px] font-bold flex items-center gap-1">
                    <Crown className="w-2.5 h-2.5" />
                    <span>VIP</span>
                  </button>
                </div>

                {/* Screen Scrollable Body */}
                <div className="p-4 space-y-4 max-h-[520px] overflow-y-auto custom-scrollbar">
                  
                  {/* Hero Conversion Action Card */}
                  <div className="relative rounded-2xl bg-gradient-to-br from-[#1E1B4B] via-[#2E1065] to-[#4C1D95] p-4 border border-indigo-500/30 overflow-hidden shadow-lg">
                    {/* Background Visual Waveforms */}
                    <div className="absolute right-0 top-0 bottom-0 w-28 opacity-20 pointer-events-none flex items-center justify-center gap-1">
                      <div className="w-1.5 h-12 bg-white rounded-full animate-pulse" />
                      <div className="w-1.5 h-20 bg-white rounded-full animate-pulse delay-75" />
                      <div className="w-1.5 h-8 bg-white rounded-full animate-pulse delay-150" />
                      <div className="w-1.5 h-16 bg-white rounded-full animate-pulse delay-100" />
                    </div>

                    <div className="relative z-10 space-y-3">
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono font-bold text-indigo-300 uppercase tracking-wider">
                          Instant Extraction
                        </div>
                        <h4 className="text-sm font-extrabold text-white">
                          Convert Video to MP3
                        </h4>
                        <p className="text-[11px] text-indigo-200/80">
                          Extract high-clarity 320kbps audio from any video format.
                        </p>
                      </div>

                      {!isProcessing && !isConverted && (
                        <button
                          onClick={handleStartConversion}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                        >
                          <Music className="w-3.5 h-3.5" />
                          <span>Choose Video File</span>
                        </button>
                      )}

                      {/* Processing State with Natural Waiting Phase Ad Flow */}
                      {isProcessing && (
                        <div className="space-y-2.5 pt-1">
                          <div className="flex items-center justify-between text-[11px] font-mono">
                            <span className="text-indigo-200 flex items-center gap-1.5">
                              <RefreshCw className="w-3 h-3 animate-spin text-indigo-400" />
                              Extracting audio stream...
                            </span>
                            <span className="font-bold text-white">{processingProgress}%</span>
                          </div>

                          <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-indigo-400 to-pink-500 rounded-full"
                              style={{ width: `${processingProgress}%` }}
                            />
                          </div>

                          {/* Post-Processing "Waiting Moment" Ad Native Card */}
                          <div className="mt-2 p-2.5 rounded-xl bg-black/50 border border-white/10 text-left space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-[8px] font-mono px-1.5 py-0.5 rounded-sm bg-white/20 text-white font-bold">
                                Sponsored Ad
                              </span>
                              <span className="text-[9px] text-zinc-400">Natural Waiting Phase</span>
                            </div>
                            <div className="text-[10px] font-bold text-white flex items-center gap-1.5">
                              <span>🎵 Pro Audio Plugins & Soundboard</span>
                            </div>
                            <div className="text-[9px] text-zinc-400">High engagement during encoding process</div>
                          </div>
                        </div>
                      )}

                      {/* Converted Success State */}
                      {isConverted && (
                        <div className="space-y-3 pt-1">
                          <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-left space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-bold text-emerald-300 flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                Extraction Complete
                              </span>
                              <span className="text-[9px] font-mono text-emerald-400">320 kbps MP3</span>
                            </div>

                            <div className="flex items-center justify-between text-[10px] text-zinc-300 bg-black/40 p-2 rounded-lg">
                              <div className="truncate max-w-[150px]">Concert_Live_2026.mp3</div>
                              <button
                                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                                className="px-2 py-1 rounded bg-emerald-500 text-black font-bold text-[10px] flex items-center gap-1"
                              >
                                {isPlayingAudio ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                                <span>{isPlayingAudio ? 'Pause' : 'Play'}</span>
                              </button>
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              setIsConverted(false);
                              setIsPlayingAudio(false);
                            }}
                            className="w-full py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] text-zinc-300 font-semibold"
                          >
                            Convert Another Video
                          </button>
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Audio Toolkit 9-Tool Grid */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold text-zinc-300 uppercase font-mono">
                        Audio Tools
                      </h5>
                      <span className="text-[10px] text-zinc-500 font-mono">9 Integrated Tools</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {audioTools.slice(1, 7).map((tool) => {
                        const Icon = tool.icon;
                        const isSelected = selectedTool === tool.id;
                        return (
                          <button
                            key={tool.id}
                            onClick={() => setSelectedTool(tool.id)}
                            className={`p-2.5 rounded-xl text-left border transition-all ${
                              isSelected
                                ? 'bg-[#2A2840] border-indigo-400/80 shadow-md'
                                : 'bg-[#15151F] border-zinc-800/80 hover:bg-[#1C1C28]'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                                isSelected ? 'bg-indigo-500 text-white' : 'bg-zinc-800 text-zinc-300'
                              }`}>
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-[8px] font-mono px-1 rounded bg-white/10 text-zinc-300">
                                {tool.badge}
                              </span>
                            </div>
                            <div className="text-[11px] font-bold text-white truncate">{tool.name}</div>
                            <div className="text-[9px] text-zinc-400 truncate">{tool.desc}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Recent Converted Files */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold text-zinc-300 uppercase font-mono">
                        Recent Files
                      </h5>
                      <span className="text-[10px] text-indigo-400 font-bold hover:underline cursor-pointer">
                        See All
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="p-2.5 rounded-xl bg-[#15151F] border border-zinc-800/60 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
                            <FileAudio className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">My_Audio_01.mp3</div>
                            <div className="text-[9px] text-zinc-500">3.45 MB • 03:21 • 320 kbps</div>
                          </div>
                        </div>
                        <Play className="w-3.5 h-3.5 text-zinc-400 hover:text-white cursor-pointer" />
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#15151F] border border-zinc-800/60 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                            <Mic className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Voice_Echo_Trimmed.wav</div>
                            <div className="text-[9px] text-zinc-500">1.82 MB • 01:14 • Lossless</div>
                          </div>
                        </div>
                        <Play className="w-3.5 h-3.5 text-zinc-400 hover:text-white cursor-pointer" />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom App Navigation Tab Bar */}
                <div className="p-2.5 bg-[#12121A] border-t border-zinc-800/80 flex items-center justify-around text-[10px]">
                  <div className="flex flex-col items-center gap-0.5 text-indigo-400 font-bold">
                    <Music className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-zinc-500 hover:text-zinc-300">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Tools</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-zinc-500 hover:text-zinc-300">
                    <FileAudio className="w-3.5 h-3.5" />
                    <span>Files</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-zinc-500 hover:text-zinc-300">
                    <Crown className="w-3.5 h-3.5 text-amber-400" />
                    <span>Premium</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: Architectural Strategy & Feature Explanations (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Core Feature Reframing Card */}
              <div className="p-6 rounded-3xl bg-[#1E1E24] border border-[#2D2D38] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#2D2D38]">
                  <h4 className="text-base font-extrabold text-white font-mono flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#E97868]" />
                    <span>Light Media Toolkit Expansion</span>
                  </h4>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-bold">
                    Use-Case Reframing
                  </span>
                </div>

                <p className="text-xs text-[#B0B0C0] leading-relaxed">
                  Originally, the application acted only as a one-time utility where users converted a single file and immediately exited. By embedding an integrated 9-tool audio suite directly into the post-conversion view, we converted transactional sessions into recurring creative workflows.
                </p>

                {/* Conversion Settings Interactive Controls */}
                <div className="p-4 rounded-2xl bg-[#141418] border border-[#2A2A33] space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span>Target Output Format</span>
                    <span className="text-indigo-400 font-mono text-[11px]">Lossless Encoding</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {(['MP3', 'AAC', 'WAV', 'FLAC'] as const).map((fmt) => (
                      <button
                        key={fmt}
                        onClick={() => setSelectedFormat(fmt)}
                        className={`py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                          selectedFormat === fmt
                            ? 'bg-gradient-to-r from-[#713B5D] to-[#E97868] text-white shadow-md'
                            : 'bg-[#1E1E24] text-zinc-400 hover:text-white'
                        }`}
                      >
                        {fmt}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-white pt-2">
                    <span>Audio Bitrate Quality</span>
                    <span className="text-[#E97868] font-mono text-[11px]">320 kbps Studio Grade</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {(['128k', '256k', '320k'] as const).map((bitrate) => (
                      <button
                        key={bitrate}
                        onClick={() => setActiveBitrate(bitrate)}
                        className={`py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                          activeBitrate === bitrate
                            ? 'bg-[#E97868] text-[#121215] shadow-md'
                            : 'bg-[#1E1E24] text-zinc-400 hover:text-white'
                        }`}
                      >
                        {bitrate}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Strategic Callouts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-[#141418] border border-[#2A2A33] space-y-1">
                    <div className="text-[11px] font-mono font-bold text-indigo-300">
                      Post-Processing Waiting Ad
                    </div>
                    <div className="text-xs text-[#A0A0B0]">
                      Users are naturally waiting 2–5 seconds during audio encoding. Inserting high-engagement ads here created zero friction.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#141418] border border-[#2A2A33] space-y-1">
                    <div className="text-[11px] font-mono font-bold text-emerald-300">
                      Multi-Tool Chaining
                    </div>
                    <div className="text-xs text-[#A0A0B0]">
                      Converted files can be trimmed, merged, voice-altered, or set as ringtone in 1 tap without leaving the session.
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 2: Retention & Funnel Diagnostics */}
        {activeTab === 'funnel' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#1E1E24] border border-[#2D2D38] space-y-1">
                <span className="text-[11px] font-mono text-[#A0A0A0]">Baseline Day 1 Retention</span>
                <div className="text-2xl font-extrabold text-red-400 font-mono">11.0%</div>
                <p className="text-[11px] text-[#808090]">Initial baseline before onboarding & ad fixes</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1E1E24] border border-[#2D2D38] space-y-1">
                <span className="text-[11px] font-mono text-[#A0A0A0]">First-Session Drop-off</span>
                <div className="text-2xl font-extrabold text-amber-400 font-mono">-68%</div>
                <p className="text-[11px] text-[#808090]">Occurred immediately when splash ads appeared</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1E1E24] border border-[#2D2D38] space-y-1">
                <span className="text-[11px] font-mono text-[#A0A0A0]">Post-Intervention D1 Retention</span>
                <div className="text-2xl font-extrabold text-emerald-400 font-mono">24.5%+</div>
                <p className="text-[11px] text-[#808090]">Achieved after delayed first-session ads + UX redesign</p>
              </div>
            </div>

            {/* Funnel Step Breakdown Visualizer */}
            <div className="p-6 rounded-3xl bg-[#1E1E24] border border-[#2D2D38] space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#2D2D38]">
                <h4 className="text-base font-bold text-white font-mono flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#E97868]" />
                  <span>Funnel Step Drop-off Analysis (BigQuery Event Tracking)</span>
                </h4>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#E97868]/15 text-[#E97868] font-bold">
                  User Journey Audit
                </span>
              </div>

              {/* Funnel Bars */}
              <div className="space-y-4">
                {[
                  { step: '1. App Install & Splash Launch', rate: 100, drop: '0%', note: 'Users successfully opened application' },
                  { step: '2. Home Screen Landing (Old: Splash Ad Interrupt)', rate: 42, drop: '-58% Drop', warning: true, note: 'Aggressive ad exposure before experiencing value caused massive bounce' },
                  { step: '3. Video Pick / Media Permission', rate: 31, drop: '-26% Drop', note: 'Unclear permission prompts & unsupported codecs' },
                  { step: '4. Feature Usage (Convert / Trim / Merge)', rate: 24, drop: '-22% Drop', note: 'Fragmented editing across multi-screens' },
                  { step: '5. Success Audio Export & Save', rate: 18, drop: '-25% Drop', note: 'No clear next actions or file manager organization' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-white">{item.step}</span>
                      <div className="flex items-center gap-2">
                        {item.warning && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-bold">
                            Major Drop-off Point
                          </span>
                        )}
                        <span className="text-zinc-400">{item.rate}% retained</span>
                        <span className={item.warning ? 'text-red-400 font-bold' : 'text-zinc-500'}>
                          ({item.drop})
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#121216] overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          item.warning
                            ? 'bg-gradient-to-r from-red-500 to-amber-500'
                            : 'bg-gradient-to-r from-[#713B5D] to-[#E97868]'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.rate}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                      />
                    </div>
                    <div className="text-[11px] text-[#888899]">{item.note}</div>
                  </div>
                ))}
              </div>

              {/* Solution Impact Toggle */}
              <div className="p-4 rounded-2xl bg-[#141418] border border-[#2D2D38] flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white font-mono">
                    First-Session Experience Optimization (P0 Initiative)
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Delayed first-session ads until user finishes at least 1 meaningful audio conversion action.
                  </div>
                </div>

                <button
                  onClick={() => setFirstSessionAdDelayed(!firstSessionAdDelayed)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    firstSessionAdDelayed
                      ? 'bg-emerald-500 text-black shadow-md'
                      : 'bg-zinc-700 text-zinc-300'
                  }`}
                >
                  {firstSessionAdDelayed ? '✓ First-Session Ad Delayed' : 'Aggressive Ad Flow (Baseline)'}
                </button>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: 90-Day Monetization Telemetry */}
        {activeTab === 'monetization' && (
          <div className="space-y-6">
            
            {/* Toggle Baseline vs 90d Post-Transformation */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1E1E24] border border-[#2D2D38]">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-white font-mono">Telemetry Timeframe</span>
                <p className="text-[11px] text-zinc-400">Compare pre-intervention baseline vs 90-day post-transformation</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMonetizationPeriod('before')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    monetizationPeriod === 'before'
                      ? 'bg-zinc-700 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Baseline (Pre-Intervention)
                </button>
                <button
                  onClick={() => setMonetizationPeriod('after')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    monetizationPeriod === 'after'
                      ? 'bg-emerald-500 text-black shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  90-Day Post-Transformation
                </button>
              </div>
            </div>

            {/* 4 High Impact Growth Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-[#1E1E24] border border-[#2D2D38] space-y-1">
                <span className="text-[11px] font-mono text-[#A0A0A0]">Total Ad Revenue</span>
                <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                  {monetizationPeriod === 'after' ? '~2.5X Growth' : '$1.0X Baseline'}
                </div>
                <div className="text-[10px] text-zinc-500">+47% Monthly Revenue</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1E1E24] border border-[#2D2D38] space-y-1">
                <span className="text-[11px] font-mono text-[#A0A0A0]">ARPU (Rev / User)</span>
                <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                  {monetizationPeriod === 'after' ? '~3X Growth' : '$0.014 Baseline'}
                </div>
                <div className="text-[10px] text-zinc-500">Lifted via post-processing ads</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1E1E24] border border-[#2D2D38] space-y-1">
                <span className="text-[11px] font-mono text-[#A0A0A0]">Auction Participation</span>
                <div className="text-2xl font-extrabold text-indigo-400 font-mono">
                  {monetizationPeriod === 'after' ? '72%' : '31%'}
                </div>
                <div className="text-[10px] text-zinc-500">2X Competition density</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1E1E24] border border-[#2D2D38] space-y-1">
                <span className="text-[11px] font-mono text-[#A0A0A0]">Ad Viewer Rate</span>
                <div className="text-2xl font-extrabold text-purple-400 font-mono">
                  {monetizationPeriod === 'after' ? '58% (Stable)' : '28%'}
                </div>
                <div className="text-[10px] text-zinc-500">Higher opt-in & engagement</div>
              </div>
            </div>

            {/* Side-by-Side eCPM Lift Table */}
            <div className="p-6 rounded-3xl bg-[#1E1E24] border border-[#2D2D38] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#2D2D38]">
                <h4 className="text-base font-bold text-white font-mono flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span>eCPM & Monetization Efficiency by Ad Format</span>
                </h4>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                  Audited Revenue Metrics
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#2D2D38] text-zinc-400">
                      <th className="pb-3 font-semibold">Ad Format</th>
                      <th className="pb-3 font-semibold">Before (Baseline)</th>
                      <th className="pb-3 font-semibold">After (90-Day Transformation)</th>
                      <th className="pb-3 font-semibold">Net Lift</th>
                      <th className="pb-3 font-semibold">Strategic Driver</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2D2D38]">
                    <tr>
                      <td className="py-3 font-bold text-white flex items-center gap-2">
                        <Tv className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Interstitial eCPM</span>
                      </td>
                      <td className="py-3 text-zinc-400">$1.12</td>
                      <td className="py-3 font-bold text-emerald-400">$2.36</td>
                      <td className="py-3 font-bold text-emerald-400">+110%</td>
                      <td className="py-3 text-zinc-400 text-[11px]">Moved to post-processing waiting moment</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-white flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Rewarded eCPM</span>
                      </td>
                      <td className="py-3 text-zinc-400">$2.29</td>
                      <td className="py-3 font-bold text-emerald-400">$5.59</td>
                      <td className="py-3 font-bold text-emerald-400">+144%</td>
                      <td className="py-3 text-zinc-400 text-[11px]">Unlocked 320kbps lossless & AI vocal split</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-white flex items-center gap-2">
                        <Radio className="w-3.5 h-3.5 text-purple-400" />
                        <span>Banner eCPM</span>
                      </td>
                      <td className="py-3 text-zinc-400">$0.16</td>
                      <td className="py-3 font-bold text-emerald-400">$0.27</td>
                      <td className="py-3 font-bold text-emerald-400">+68%</td>
                      <td className="py-3 text-zinc-400 text-[11px]">Optimized refresh rate + high-intent screens</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
