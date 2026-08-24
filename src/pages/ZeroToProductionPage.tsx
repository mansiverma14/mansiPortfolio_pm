import React, { useState } from 'react';
import { PageRoute } from '../types';
import { ZERO_TO_PRODUCTION_APPS, ZeroToProductionApp } from '../data/zeroToProductionData';
import { FitLifeProMockup } from '../components/FitLifeProMockup';
import {
  Lock,
  Share2,
  Video,
  Image as ImageIcon,
  Sparkles,
  FileText,
  Trophy,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  Zap,
  Smartphone,
  Sliders,
  Eye,
  EyeOff,
  Cpu,
  Wifi,
  Download,
  FolderLock,
  Camera,
  Paintbrush,
  SmartphoneNfc,
  Search,
  Check,
  RefreshCw,
  Plus,
  Play,
  RotateCcw,
  BarChart2,
  Flame,
  UserCheck,
  ChevronRight,
  HelpCircle,
  Clock,
  Sparkle,
  Radio,
  FileCheck,
  Share,
  Trash2,
  Maximize2,
  ExternalLink
} from 'lucide-react';

interface ZeroToProductionPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ZeroToProductionPage: React.FC<ZeroToProductionPageProps> = ({ onNavigate }) => {
  const [selectedAppId, setSelectedAppId] = useState<string>('callock');
  const [activeTab, setActiveTab] = useState<'simulator' | 'features' | 'flows' | 'specs'>('simulator');

  // CalLock Interactive State
  const [calcDisplay, setCalcDisplay] = useState<string>('0');
  const [isVaultUnlocked, setIsVaultUnlocked] = useState<boolean>(false);
  const [vaultSubTab, setVaultSubTab] = useState<'photos' | 'apps' | 'notes' | 'contacts'>('photos');
  const [hiddenPhotosCount, setHiddenPhotosCount] = useState<number>(14);
  const [fakeCrashEnabled, setFakeCrashEnabled] = useState<boolean>(false);
  const [selectedTheme, setSelectedTheme] = useState<'obsidian' | 'gold' | 'cyberpunk'>('obsidian');

  // ShareOn Interactive State
  const [transferMode, setTransferMode] = useState<'send' | 'receive' | 'transferring' | 'done'>('send');
  const [transferProgress, setTransferProgress] = useState<number>(0);
  const [selectedFiles, setSelectedFiles] = useState<string[]>(['Game_Installer_v2.apk (420 MB)', 'Vacation_FHD_1080p.mp4 (850 MB)']);

  // Screen Recorder Interactive State
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);
  const [facecamActive, setFacecamActive] = useState<boolean>(true);
  const [resolutionPreset, setResolutionPreset] = useState<'1080p' | '2k' | '720p'>('1080p');

  // Gamified Fitness Interactive State
  const [heroXp, setHeroXp] = useState<number>(450);
  const [bossHp, setBossHp] = useState<number>(750);
  const [streakDays, setStreakDays] = useState<number>(12);

  // Cleaner Interactive State
  const [isScanningJunk, setIsScanningJunk] = useState<boolean>(false);
  const [junkCleaned, setJunkCleaned] = useState<boolean>(false);

  const selectedApp = ZERO_TO_PRODUCTION_APPS.find((a) => a.id === selectedAppId) || ZERO_TO_PRODUCTION_APPS[0];

  // Helper for Calculator button taps
  const handleCalcTap = (val: string) => {
    if (val === 'C') {
      setCalcDisplay('0');
      return;
    }
    if (val === '=') {
      // Secret PIN check: 1234 or 8492
      if (calcDisplay === '1234' || calcDisplay === '8492' || calcDisplay === '0000') {
        setIsVaultUnlocked(true);
        return;
      }
      try {
        // Safe evaluation for basic math
        const sanitized = calcDisplay.replace(/[^0-9+\-*/.]/g, '');
        const res = Function(`'use strict'; return (${sanitized})`)();
        setCalcDisplay(String(res));
      } catch (e) {
        setCalcDisplay('Error');
      }
      return;
    }
    if (calcDisplay === '0' || calcDisplay === 'Error') {
      setCalcDisplay(val);
    } else {
      setCalcDisplay((prev) => prev + val);
    }
  };

  // Helper for ShareOn file transfer
  const handleStartTransfer = () => {
    setTransferMode('transferring');
    setTransferProgress(0);
    let p = 0;
    const interval = setInterval(() => {
      p += 10;
      if (p >= 100) {
        setTransferProgress(100);
        setTransferMode('done');
        clearInterval(interval);
      } else {
        setTransferProgress(p);
      }
    }, 250);
  };

  const getAppIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lock':
        return <Lock className="w-5 h-5 text-amber-400" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-blue-400" />;
      case 'Video':
        return <Video className="w-5 h-5 text-red-400" />;
      case 'Image':
        return <ImageIcon className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-rose-400" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      
      {/* Top Breadcrumb & Section Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-[#2D2D2D]">
          <button
            onClick={() => onNavigate('home')}
            className="text-xs font-mono font-semibold text-[#A0A0A0] hover:text-white flex items-center gap-1.5 transition-colors"
          >
            ← Back to Home
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase text-emerald-400 tracking-wider">
              0 to Production · Product Suite
            </span>
          </div>
        </div>

        <div className="space-y-3 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#262626] border border-[#383838] text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>0-to-1 Product Management & Architecture Suite</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Apps Built from 0 to Production
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 font-medium leading-relaxed">
            End-to-end product lifecycles: from market research, PRD feature requirements, and user flow wireframing to high-performance Android architectures, offline resilience, and production release.
          </p>
        </div>
      </div>

      {/* App Selector Grid (7 Apps) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {ZERO_TO_PRODUCTION_APPS.map((app) => {
          const isSelected = app.id === selectedAppId;
          return (
            <button
              key={app.id}
              onClick={() => {
                setSelectedAppId(app.id);
                setIsVaultUnlocked(false);
              }}
              className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between space-y-3 group ${
                isSelected
                  ? 'bg-[#2A2A38] border-emerald-500/80 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : 'bg-[#1C1C24] border-[#2E2E3C] hover:border-zinc-500 hover:bg-[#22222E]'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="p-2 rounded-xl bg-[#14141A] border border-[#333344] group-hover:scale-105 transition-transform">
                  {getAppIcon(app.iconName)}
                </div>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                )}
              </div>

              <div className="space-y-0.5">
                <h4 className={`text-xs font-bold font-mono ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                  {app.name}
                </h4>
                <p className="text-[10px] text-zinc-400 truncate">
                  {app.category.split('·')[0]}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Selected App Workspace */}
      <div className="bg-[#181822] rounded-3xl border border-[#2B2B38] p-6 sm:p-8 space-y-8 shadow-2xl">
        
        {/* App Title Banner & Tab Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#2C2C3C]">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="p-2 rounded-xl bg-[#222230] border border-[#3A3A4E]">
                {getAppIcon(selectedApp.iconName)}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {selectedApp.name}
              </h2>
              <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                {selectedApp.stage}
              </span>
            </div>
            <p className="text-sm font-semibold text-emerald-400 font-mono">
              {selectedApp.tagline}
            </p>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {selectedApp.overview}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#121218] rounded-2xl border border-[#323242] self-start lg:self-center flex-wrap">
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'simulator'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Interactive Prototype</span>
            </button>

            <button
              onClick={() => setActiveTab('features')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'features'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>PRD Requirements</span>
            </button>

            <button
              onClick={() => setActiveTab('flows')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'flows'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>User Flows & UX</span>
            </button>

            <button
              onClick={() => setActiveTab('specs')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'specs'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Tech & KPIs</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: INTERACTIVE PROTOTYPE & FEATURE SIMULATOR                           */}
        {/* ========================================================================= */}
        {activeTab === 'simulator' && (
          <div className="space-y-8">
            
            {/* APP 1: CALLOCK SIMULATOR */}
            {selectedApp.id === 'callock' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Camouflage Calculator Phone Frame */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="w-full max-w-[320px] bg-[#0E0E14] border-4 border-[#353545] rounded-[2.5rem] p-4 shadow-2xl space-y-4 relative overflow-hidden">
                    
                    {/* Top Speaker & Camera Notch */}
                    <div className="flex items-center justify-between px-2 pt-1 text-[10px] font-mono text-zinc-500">
                      <span>09:41</span>
                      <div className="w-16 h-3.5 rounded-full bg-[#1C1C26] mx-auto" />
                      <span>100% 🔋</span>
                    </div>

                    {!isVaultUnlocked ? (
                      /* CAMOUFLAGE CALCULATOR UI */
                      <div className="space-y-4">
                        <div className="p-3 rounded-2xl bg-[#181822] border border-[#2B2B38] text-right">
                          <span className="text-[10px] font-mono text-zinc-500 block uppercase">Standard Calculator</span>
                          <div className="text-3xl font-mono font-black text-white truncate tracking-wider">
                            {calcDisplay}
                          </div>
                        </div>

                        {/* Calculator Keypad */}
                        <div className="grid grid-cols-4 gap-2 text-xs font-mono font-bold">
                          {['C', '±', '%', '÷'].map((k) => (
                            <button
                              key={k}
                              onClick={() => handleCalcTap(k === '÷' ? '/' : k)}
                              className="h-11 rounded-xl bg-[#2A2A38] text-amber-400 hover:bg-[#343446] active:scale-95 transition-all flex items-center justify-center text-sm"
                            >
                              {k}
                            </button>
                          ))}
                          {['7', '8', '9', '×'].map((k) => (
                            <button
                              key={k}
                              onClick={() => handleCalcTap(k === '×' ? '*' : k)}
                              className={`h-11 rounded-xl active:scale-95 transition-all flex items-center justify-center text-sm ${
                                k === '×' ? 'bg-[#2A2A38] text-amber-400' : 'bg-[#1E1E2A] text-white hover:bg-[#282838]'
                              }`}
                            >
                              {k}
                            </button>
                          ))}
                          {['4', '5', '6', '-'].map((k) => (
                            <button
                              key={k}
                              onClick={() => handleCalcTap(k)}
                              className={`h-11 rounded-xl active:scale-95 transition-all flex items-center justify-center text-sm ${
                                k === '-' ? 'bg-[#2A2A38] text-amber-400' : 'bg-[#1E1E2A] text-white hover:bg-[#282838]'
                              }`}
                            >
                              {k}
                            </button>
                          ))}
                          {['1', '2', '3', '+'].map((k) => (
                            <button
                              key={k}
                              onClick={() => handleCalcTap(k)}
                              className={`h-11 rounded-xl active:scale-95 transition-all flex items-center justify-center text-sm ${
                                k === '+' ? 'bg-[#2A2A38] text-amber-400' : 'bg-[#1E1E2A] text-white hover:bg-[#282838]'
                              }`}
                            >
                              {k}
                            </button>
                          ))}
                          <button
                            onClick={() => handleCalcTap('0')}
                            className="col-span-2 h-11 rounded-xl bg-[#1E1E2A] text-white hover:bg-[#282838] active:scale-95 transition-all flex items-center justify-center text-sm"
                          >
                            0
                          </button>
                          <button
                            onClick={() => handleCalcTap('.')}
                            className="h-11 rounded-xl bg-[#1E1E2A] text-white hover:bg-[#282838] active:scale-95 transition-all flex items-center justify-center text-sm"
                          >
                            .
                          </button>
                          <button
                            onClick={() => handleCalcTap('=')}
                            className="h-11 rounded-xl bg-gradient-to-r from-amber-500 to-red-500 text-black font-black active:scale-95 transition-all flex items-center justify-center text-sm shadow-lg"
                          >
                            =
                          </button>
                        </div>

                        {/* Hint box */}
                        <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-[11px] font-mono text-amber-300 text-center space-y-1">
                          <p>💡 <strong>Try Secret Unlock:</strong> Type <span className="underline font-bold text-white">1234</span> and press <span className="font-bold text-white">=</span></p>
                        </div>
                      </div>
                    ) : (
                      /* UNLOCKED ENCRYPTED VAULT UI */
                      <div className="space-y-3 animate-fade-in">
                        {/* Vault Top Bar */}
                        <div className="flex items-center justify-between pb-2 border-b border-white/10">
                          <div className="flex items-center gap-1.5">
                            <Shield className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-bold text-white font-mono">ENCRYPTED VAULT</span>
                          </div>
                          <button
                            onClick={() => setIsVaultUnlocked(false)}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-bold hover:bg-red-500/30"
                          >
                            Lock ✕
                          </button>
                        </div>

                        {/* Vault Sub-Tabs */}
                        <div className="grid grid-cols-4 gap-1 p-1 bg-[#181822] rounded-xl border border-white/5 text-[10px] font-mono">
                          <button
                            onClick={() => setVaultSubTab('photos')}
                            className={`py-1 rounded-lg text-center ${vaultSubTab === 'photos' ? 'bg-emerald-500 text-black font-bold' : 'text-zinc-400'}`}
                          >
                            Photos
                          </button>
                          <button
                            onClick={() => setVaultSubTab('apps')}
                            className={`py-1 rounded-lg text-center ${vaultSubTab === 'apps' ? 'bg-emerald-500 text-black font-bold' : 'text-zinc-400'}`}
                          >
                            AppLock
                          </button>
                          <button
                            onClick={() => setVaultSubTab('notes')}
                            className={`py-1 rounded-lg text-center ${vaultSubTab === 'notes' ? 'bg-emerald-500 text-black font-bold' : 'text-zinc-400'}`}
                          >
                            Notes
                          </button>
                          <button
                            onClick={() => setVaultSubTab('contacts')}
                            className={`py-1 rounded-lg text-center ${vaultSubTab === 'contacts' ? 'bg-emerald-500 text-black font-bold' : 'text-zinc-400'}`}
                          >
                            Contacts
                          </button>
                        </div>

                        {/* Vault Content Area */}
                        {vaultSubTab === 'photos' && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                              <span>Hidden Media ({hiddenPhotosCount})</span>
                              <button
                                onClick={() => setHiddenPhotosCount((c) => c + 1)}
                                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-0.5"
                              >
                                <Plus className="w-3 h-3" /> Add
                              </button>
                            </div>
                            <div className="grid grid-cols-3 gap-1.5 h-36 overflow-y-auto pr-1">
                              {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="aspect-square rounded-lg bg-[#222230] border border-white/10 flex items-center justify-center text-[10px] text-zinc-500 font-mono relative overflow-hidden group">
                                  <ImageIcon className="w-4 h-4 text-emerald-400/60" />
                                  <span className="absolute bottom-0.5 right-0.5 text-[8px] bg-black/70 px-1 rounded text-emerald-300">AES</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {vaultSubTab === 'apps' && (
                          <div className="space-y-2 h-40 overflow-y-auto">
                            <div className="text-[11px] font-mono text-zinc-400">Locked Applications</div>
                            {['WhatsApp', 'Instagram', 'Gallery', 'Banking App'].map((app) => (
                              <div key={app} className="p-2 rounded-lg bg-[#1D1D28] border border-white/5 flex items-center justify-between text-xs font-mono text-white">
                                <span>{app}</span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">LOCKED 🔒</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {vaultSubTab === 'notes' && (
                          <div className="space-y-2 h-40 overflow-y-auto">
                            <div className="p-2 rounded-lg bg-[#1D1D28] border border-white/5 space-y-1">
                              <div className="text-xs font-bold text-white font-mono">Private Seed Phrases</div>
                              <div className="text-[10px] text-zinc-400 font-mono">Last edited: Today 08:30 AM</div>
                            </div>
                            <div className="p-2 rounded-lg bg-[#1D1D28] border border-white/5 space-y-1">
                              <div className="text-xs font-bold text-white font-mono">Master Passwords</div>
                              <div className="text-[10px] text-zinc-400 font-mono">Encrypted with SQLCipher</div>
                            </div>
                          </div>
                        )}

                        {vaultSubTab === 'contacts' && (
                          <div className="space-y-2 h-40 overflow-y-auto">
                            <div className="p-2 rounded-lg bg-[#1D1D28] border border-white/5 flex items-center justify-between text-xs font-mono">
                              <div>
                                <div className="text-white font-bold">Confidential Client A</div>
                                <div className="text-[10px] text-zinc-400">+1 (555) 849-2019</div>
                              </div>
                              <span className="text-[10px] text-amber-400">Hidden</span>
                            </div>
                          </div>
                        )}

                        {/* Quick Disguise switcher */}
                        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                          <span>Disguise: Calculator</span>
                          <span className="text-emerald-400">Fingerprint Active</span>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Right Column: Complete CalLock Feature Specs */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold">
                      <Lock className="w-3.5 h-3.5" />
                      <span>PROPOSED FEATURE BREAKDOWN</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      CalLock Core Privacy Modules
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      Every requested feature mapped into modular architectural components for the upcoming UI/UX wireframing and engineering sprints.
                    </p>
                  </div>

                  {/* Feature Checklist Grid matching user request */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedApp.proposedFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#1E1E2A] border border-[#323244] flex items-center gap-2.5 text-xs font-mono text-zinc-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Trigger Test Actions */}
                  <div className="p-4 rounded-2xl bg-[#14141C] border border-[#2F2F40] space-y-3">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                      Live Simulation Controls:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => {
                          setCalcDisplay('1234');
                          handleCalcTap('=');
                        }}
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold transition-all"
                      >
                        ⚡ Simulate Instant Unlock (1234=)
                      </button>
                      <button
                        onClick={() => {
                          setIsVaultUnlocked(false);
                          setCalcDisplay('0');
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#2A2A38] hover:bg-[#343446] text-zinc-300 text-xs font-mono font-bold transition-all"
                      >
                        🔒 Relock Calculator
                      </button>
                      <button
                        onClick={() => setFakeCrashEnabled(!fakeCrashEnabled)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                          fakeCrashEnabled
                            ? 'bg-red-950/60 border-red-500 text-red-300'
                            : 'bg-[#2A2A38] border-[#383848] text-zinc-400'
                        }`}
                      >
                        {fakeCrashEnabled ? 'Fake Crash Dialog: ON' : 'Fake Crash Dialog: OFF'}
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* APP 2: SHAREON SIMULATOR */}
            {selectedApp.id === 'shareon' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: P2P Radar & Transfer Screen */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="w-full max-w-[320px] bg-[#0E0E14] border-4 border-[#353545] rounded-[2.5rem] p-4 shadow-2xl space-y-4 relative overflow-hidden">
                    
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-2 text-[10px] font-mono text-zinc-500">
                      <span>ShareOn P2P</span>
                      <span className="text-emerald-400">Wi-Fi Direct Ready</span>
                    </div>

                    {transferMode === 'send' && (
                      <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-[#161622] border border-[#2B2B3E] text-center space-y-2">
                          <div className="w-14 h-14 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto animate-pulse">
                            <Wifi className="w-7 h-7" />
                          </div>
                          <h4 className="text-sm font-bold text-white font-mono">Nearby Device Radar</h4>
                          <p className="text-[11px] text-zinc-400">Searching for receivers on local 5GHz mesh...</p>
                        </div>

                        {/* Selected Files Preview */}
                        <div className="space-y-1.5 text-xs font-mono">
                          <span className="text-zinc-400 text-[10px] uppercase">Queued Payloads:</span>
                          {selectedFiles.map((f, i) => (
                            <div key={i} className="p-2 rounded-lg bg-[#1E1E2A] border border-white/5 text-zinc-200 truncate">
                              📄 {f}
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={handleStartTransfer}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono font-bold text-xs shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                        >
                          <Share2 className="w-4 h-4" />
                          <span>Send to "Pixel 8 Pro" (1.27 GB)</span>
                        </button>
                      </div>
                    )}

                    {transferMode === 'transferring' && (
                      <div className="space-y-4 text-center py-4">
                        <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                          <div className="absolute inset-0 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin" />
                          <div className="text-xl font-black font-mono text-white">{transferProgress}%</div>
                        </div>
                        <div className="space-y-1 font-mono">
                          <div className="text-xs font-bold text-emerald-400">Transferring at 48.2 MB/s</div>
                          <div className="text-[10px] text-zinc-400">ETA: 3 seconds remaining • Socket: TCP 5GHz</div>
                        </div>
                      </div>
                    )}

                    {transferMode === 'done' && (
                      <div className="space-y-4 text-center py-4 animate-fade-in">
                        <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                          <Check className="w-8 h-8" />
                        </div>
                        <div className="space-y-1 font-mono">
                          <div className="text-sm font-bold text-white">Transfer Completed!</div>
                          <div className="text-xs text-zinc-400">1.27 GB sent in 26.4s (Avg 48.1 MB/s)</div>
                        </div>
                        <button
                          onClick={() => setTransferMode('send')}
                          className="w-full py-2.5 rounded-xl bg-[#2A2A38] text-white font-mono text-xs font-bold hover:bg-[#343446]"
                        >
                          Transfer More Files
                        </button>
                      </div>
                    )}

                  </div>
                </div>

                {/* Right Column: ShareOn Features */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-300 text-xs font-mono font-bold">
                      <Share2 className="w-3.5 h-3.5" />
                      <span>SHAREON FEATURE REQUIREMENTS</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      High-Speed P2P Offline Transfer Suite
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedApp.proposedFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#1E1E2A] border border-[#323244] flex items-center gap-2.5 text-xs font-mono text-zinc-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl bg-[#14141C] border border-[#2F2F40] text-xs font-mono text-zinc-300 space-y-2">
                    <strong className="text-white block">Key Technology Highlights:</strong>
                    <p>• Wi-Fi Direct socket protocol achieving speeds up to 50MB/s (200x faster than Bluetooth).</p>
                    <p>• WebShare mode allows receiving on iPhones/Macs/PCs with no app installation via local HTTP server.</p>
                  </div>
                </div>

              </div>
            )}

            {/* APP 3: SCREEN RECORDER SIMULATOR */}
            {selectedApp.id === 'screen-recorder' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Floating Studio Widget Mockup */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="w-full max-w-[320px] bg-[#0E0E14] border-4 border-[#353545] rounded-[2.5rem] p-4 shadow-2xl space-y-4 relative overflow-hidden">
                    
                    {/* Floating Controls Bar */}
                    <div className="p-3 rounded-2xl bg-black/80 backdrop-blur-md border border-red-500/40 flex items-center justify-between text-white font-mono">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${isRecording ? 'bg-red-500 animate-ping' : 'bg-zinc-600'}`} />
                        <span className="text-xs font-bold">{isRecording ? '00:14 REC' : 'READY'}</span>
                      </div>
                      <button
                        onClick={() => setIsRecording(!isRecording)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          isRecording ? 'bg-zinc-700 text-white' : 'bg-red-600 text-white'
                        }`}
                      >
                        {isRecording ? 'Stop' : 'Start REC'}
                      </button>
                    </div>

                    {/* Camera Preview / Facecam */}
                    {facecamActive && (
                      <div className="relative aspect-video rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden flex items-center justify-center">
                        <img
                          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
                          alt="Facecam gameplay preview"
                          className="w-full h-full object-cover opacity-70"
                        />
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-red-600 text-[9px] font-mono text-white font-bold">
                          1080p 60FPS
                        </div>
                        <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white bg-black/60 px-2 py-0.5 rounded">
                          Internal Audio + Mic: 100%
                        </div>
                      </div>
                    )}

                    {/* Quick Studio Settings */}
                    <div className="p-3 rounded-xl bg-[#161622] border border-[#2B2B3E] space-y-2 text-xs font-mono">
                      <div className="flex items-center justify-between text-zinc-300">
                        <span>Facecam Overlay:</span>
                        <button
                          onClick={() => setFacecamActive(!facecamActive)}
                          className="text-red-400 font-bold"
                        >
                          {facecamActive ? 'Active (PIP)' : 'Hidden'}
                        </button>
                      </div>
                      <div className="flex items-center justify-between text-zinc-300">
                        <span>Watermark:</span>
                        <span className="text-emerald-400 font-bold">Free (Disabled)</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Right Column: Screen Recorder Features */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-mono font-bold">
                      <Video className="w-3.5 h-3.5" />
                      <span>SCREEN RECORDER PRO SPECIFICATIONS</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Lossless 60-120FPS Gameplay & Tutorial Studio
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedApp.proposedFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#1E1E2A] border border-[#323244] flex items-center gap-2.5 text-xs font-mono text-zinc-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* APP 7: FITLIFE PRO (HEALTH JOURNEY PRO) SIMULATOR */}
            {selectedApp.id === 'gamified-fitness' && (
              <div className="space-y-6">
                {/* Banner & Deep Dive CTA */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-[#181C24] to-[#14141C] border border-emerald-500/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-black text-[10px] font-mono font-black uppercase">
                        FLAGSHIP CASE STUDY
                      </span>
                      <span className="text-xs font-mono text-emerald-300 font-bold">
                        FitLife Pro (Health Journey Pro)
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300">
                      Explore the full PRD document, 10-Project open-source architecture, risk mitigation matrix, and live Replit prototype.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => onNavigate('fitlife-pro')}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs transition-all flex items-center gap-1.5 shadow-lg"
                    >
                      <span>Open Full PRD & Architecture Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="https://health-journey-pro--rareprobplaycon.replit.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-[#232332] hover:bg-[#2D2D3E] text-zinc-300 font-mono text-xs transition-all border border-white/10 flex items-center gap-1"
                    >
                      <span>Live Replit App</span>
                      <ExternalLink className="w-3 h-3 text-zinc-400" />
                    </a>
                  </div>
                </div>

                {/* Render the 5-screen interactive simulator */}
                <FitLifeProMockup />
              </div>
            )}

            {/* GENERIC SIMULATOR FOR REMAINING APPS (Gallery, Cleaner, PDF Reader) */}
            {['gallery', 'cleaner', 'pdf-reader'].includes(selectedApp.id) && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="w-full max-w-[320px] bg-[#0E0E14] border-4 border-[#353545] rounded-[2.5rem] p-6 shadow-2xl space-y-4 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#1D1D28] border border-[#333348] flex items-center justify-center mx-auto">
                      {getAppIcon(selectedApp.iconName)}
                    </div>
                    <h4 className="text-lg font-bold text-white font-mono">{selectedApp.name}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{selectedApp.coreProblem}</p>
                    <div className="p-3 rounded-xl bg-[#161622] border border-white/5 text-xs font-mono text-emerald-400">
                      ✓ Ready for UI/UX Design Sprint
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                      <Layers className="w-3.5 h-3.5" />
                      <span>PROPOSED FEATURE REQUIREMENTS</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {selectedApp.name} Scope
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedApp.proposedFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#1E1E2A] border border-[#323244] flex items-center gap-2.5 text-xs font-mono text-zinc-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: PRD REQUIREMENTS & PRIORITIZED MATRIX                              */}
        {/* ========================================================================= */}
        {activeTab === 'features' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-white font-mono">
                  {selectedApp.name} · Prioritized PRD Feature Matrix
                </h3>
                <p className="text-xs text-zinc-400">
                  Classified into P0 (Launch Blockers), P1 (Core UX), and P2 (Value-add Extensions).
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                {selectedApp.featureRequirements.length} Detailed Requirements
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#2B2B38]">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#1C1C26] text-zinc-400 border-b border-[#2B2B38]">
                  <tr>
                    <th className="p-3.5">Feature Component</th>
                    <th className="p-3.5">Domain</th>
                    <th className="p-3.5">Functional Specification</th>
                    <th className="p-3.5">Release Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#242433] bg-[#14141C]">
                  {selectedApp.featureRequirements.map((req, ri) => (
                    <tr key={ri} className="hover:bg-[#181824] transition-colors">
                      <td className="p-3.5 font-bold text-white flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{req.name}</span>
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/10">
                          {req.category}
                        </span>
                      </td>
                      <td className="p-3.5 text-zinc-300 leading-relaxed max-w-md">
                        {req.description}
                      </td>
                      <td className="p-3.5">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            req.priority.startsWith('P0')
                              ? 'bg-red-950/60 border border-red-500/40 text-red-300'
                              : req.priority.startsWith('P1')
                              ? 'bg-amber-950/60 border border-amber-500/40 text-amber-300'
                              : 'bg-blue-950/60 border border-blue-500/40 text-blue-300'
                          }`}
                        >
                          {req.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: USER FLOWS & UX SPRINT GUIDE                                      */}
        {/* ========================================================================= */}
        {activeTab === 'flows' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-white font-mono">
                {selectedApp.name} · User Journey & Step-by-Step Flow Logic
              </h3>
              <p className="text-xs text-zinc-400">
                Outlining user interactions, system backend responses, and edge case fallbacks before final Figma wireframing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedApp.userFlows.map((flow, fi) => (
                <div key={fi} className="p-6 rounded-2xl bg-[#1E1E2A] border border-[#2F2F40] space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-emerald-400">
                        Step {flow.stepNumber}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                        User Journey
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white font-mono">
                      {flow.stepTitle}
                    </h4>

                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {flow.description}
                    </p>

                    {/* User Actions */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">
                        User Actions:
                      </span>
                      <ul className="space-y-1 text-xs text-zinc-300 font-mono">
                        {flow.userActions.map((act, ai) => (
                          <li key={ai} className="flex items-start gap-1.5">
                            <span className="text-emerald-400">→</span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* System Responses */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">
                        System Responses:
                      </span>
                      <ul className="space-y-1 text-xs text-zinc-300 font-mono">
                        {flow.systemResponses.map((res, ri) => (
                          <li key={ri} className="flex items-start gap-1.5">
                            <span className="text-blue-400">⚡</span>
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Edge Cases Footer */}
                  {flow.edgeCases && flow.edgeCases.length > 0 && (
                    <div className="p-3 rounded-xl bg-[#14141C] border border-amber-500/20 text-[11px] font-mono text-amber-300 space-y-1 mt-4">
                      <strong>Edge Cases & Fallbacks:</strong>
                      {flow.edgeCases.map((ec, ei) => (
                        <div key={ei}>• {ec}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* UI/UX Priorities Box */}
            <div className="p-5 rounded-2xl bg-[#15151F] border border-[#2D2D3E] space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-emerald-400 tracking-wider block">
                Design & UX Guidelines for UI Team:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-300">
                {selectedApp.uiUxPriorities.map((prio, pi) => (
                  <div key={pi} className="p-3 rounded-xl bg-[#1E1E2A] border border-white/5 flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{prio}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: TECH STACK, MONETIZATION & TARGET KPIS                            */}
        {/* ========================================================================= */}
        {activeTab === 'specs' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Tech Stack */}
              <div className="p-6 rounded-2xl bg-[#1E1E2A] border border-[#2D2D3E] space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-zinc-400 block">
                  Production Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedApp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-[#14141C] border border-[#333348] text-xs font-mono text-white font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Monetization Strategy */}
              <div className="p-6 rounded-2xl bg-[#1E1E2A] border border-[#2D2D3E] space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-zinc-400 block">
                  Monetization Architecture
                </span>
                <p className="text-xs text-zinc-300 font-mono leading-relaxed">
                  {selectedApp.monetizationModel}
                </p>
              </div>

              {/* Target Audience */}
              <div className="p-6 rounded-2xl bg-[#1E1E2A] border border-[#2D2D3E] space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-zinc-400 block">
                  Target Demographics & Persona
                </span>
                <p className="text-xs text-zinc-300 font-mono leading-relaxed">
                  {selectedApp.targetAudience}
                </p>
              </div>

            </div>

            {/* Target KPIs */}
            <div className="p-6 rounded-2xl bg-[#15151F] border border-[#2D2D3E] space-y-4">
              <span className="text-xs font-mono font-bold uppercase text-emerald-400 tracking-wider block">
                Target Launch Success Metrics (KPIs):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedApp.targetKpis.map((kpi, ki) => (
                  <div key={ki} className="p-4 rounded-xl bg-[#1E1E2A] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">{kpi.label}</span>
                    <div className="text-2xl font-black font-mono text-emerald-400">{kpi.target}</div>
                    <p className="text-[11px] text-zinc-300 font-mono">{kpi.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Bottom CTA / Team Note */}
      <div className="p-8 rounded-3xl bg-[#1A1A24] border border-[#2E2E40] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-mono uppercase text-emerald-400 font-bold">Design Team Ready</span>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            User Flows & Requirements Prepared for Figma & PRD Review
          </h3>
          <p className="text-xs text-zinc-400">
            Click across all 7 applications above to inspect detailed user interaction trees.
          </p>
        </div>

        <button
          onClick={() => onNavigate('work')}
          className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-mono font-bold transition-transform hover:scale-105 shadow-lg shrink-0"
        >
          View Shipped Production Apps →
        </button>
      </div>

    </div>
  );
};
