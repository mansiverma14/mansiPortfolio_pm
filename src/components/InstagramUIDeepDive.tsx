import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Smartphone,
  Layers,
  Palette,
  MousePointer,
  Heart,
  Send,
  Clock,
  Compass,
  CheckCircle2,
  ExternalLink,
  Zap,
  ArrowRight,
  Eye,
  Sliders,
  Maximize2,
  Check
} from 'lucide-react';

export const InstagramUIDeepDive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'microinteractions' | 'designSystem' | 'journeyMap'>('architecture');
  const [selectedHotspot, setSelectedHotspot] = useState<string>('toggle');

  const hotspots = [
    {
      id: 'toggle',
      name: 'Dual-Feed Mode Pill',
      target: 'Top App Bar',
      rationale: 'Placed in natural thumb-reach arc. Clear typography pill toggles instantly between Close Friends and Explore without page reload.',
      specs: 'Height: 38px | Radius: 9999px | Active: bg-white text-black | Inactive: bg-[#262626] text-[#A0A0A0]',
      interaction: 'Instant Haptic Tap (<80ms response time). Preserves scroll position in both tabs independently.'
    },
    {
      id: 'digest',
      name: 'Friends Catch-Up 60s Digest',
      target: 'Top Stories Tray Anchor',
      rationale: 'Solves FOMO and scroll paralysis. Summarizes all close-friend posts into a single 60-second, zero-ad story reel.',
      specs: 'Height: 44px pill | Ring: 2px gradient (Pink/Purple) | Ephemeral indicator: 60s radial timer',
      interaction: 'Auto-advances every 4 seconds. Tap left/right to step, swipe down to dismiss.'
    },
    {
      id: 'dmbridge',
      name: '1-Tap DM Reaction Bar',
      target: 'Post Action Tray',
      rationale: 'Replaces passive double-tap likes with active social engagement. Tapping a quick emoji reaction starts a direct private conversation in DMs.',
      specs: 'Touch targets: 44x44px minimum | 5 pre-configured emoji reaction tokens | 1-tap inline text input',
      interaction: 'Optimistic UI sends the message instantly to chat without leaving the feed.'
    },
    {
      id: 'closeness',
      name: 'Hybrid Closeness Ranking Badge',
      target: 'Post Header',
      rationale: 'Explicit indicator giving users transparency on why a post is ranked #1 (e.g., "Mutual close friend", "Frequently DMed").',
      specs: 'Font: 11px font-mono | Background: bg-pink-950/70 border border-pink-500/30 | Color: text-pink-300',
      interaction: 'Clicking badge opens algorithmic explanation sheet with option to prioritize/deprioritize.'
    }
  ];

  return (
    <div id="ui-ux-deep-dive" className="w-full bg-[#16161D] border border-pink-500/30 rounded-[32px] p-6 sm:p-10 shadow-2xl space-y-8">
      
      {/* Header with Badges and Anchor Jump */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/80 border border-pink-500/40 text-[11px] font-mono font-bold text-pink-300 uppercase">
            <Palette className="w-3.5 h-3.5 text-pink-400" />
            <span>UI/UX Architecture & Interaction Design</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Design System, Screen Anatomy & Micro-Interactions
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            A comprehensive breakdown of the spatial hierarchy, ergonomics, touch ergonomics, and feedback loops.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#live-interactive-prototype"
            className="px-4 py-2 rounded-xl bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/40 text-xs font-mono font-bold text-pink-300 flex items-center gap-2 transition-colors"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Live Prototype ↑</span>
          </a>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-black/40 border border-white/10">
        {[
          { id: 'architecture', label: 'Screen Anatomy & Hotspots', icon: Smartphone },
          { id: 'microinteractions', label: 'Micro-Interactions & Gestures', icon: MousePointer },
          { id: 'designSystem', label: 'Design Tokens & Accessibility', icon: Palette },
          { id: 'journeyMap', label: 'User Journey & Emotional Shift', icon: Compass },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                isActive
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Screen Anatomy & Hotspots */}
      {activeTab === 'architecture' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Interactive Screen Wireframe Preview (5 cols) */}
          <div className="lg:col-span-5 bg-black/60 rounded-3xl p-5 border border-white/10 shadow-inner space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[11px] font-mono text-zinc-400 uppercase font-bold">Interactive Wireframe Hotspots</span>
              <span className="text-[10px] font-mono text-pink-400">Click any highlighted element</span>
            </div>

            {/* Mobile Wireframe Stage */}
            <div className="relative mx-auto max-w-[280px] bg-[#121212] rounded-[36px] border-[4px] border-[#2A2A2A] p-3 space-y-3 overflow-hidden shadow-2xl">
              {/* Status Bar */}
              <div className="flex justify-between items-center text-[10px] text-zinc-400 px-2 pt-1 font-mono">
                <span>9:41</span>
                <div className="w-12 h-3 bg-white/10 rounded-full" />
                <span>5G 100%</span>
              </div>

              {/* Hotspot 1: Header Toggle */}
              <div
                onClick={() => setSelectedHotspot('toggle')}
                className={`p-2 rounded-2xl cursor-pointer transition-all border ${
                  selectedHotspot === 'toggle'
                    ? 'bg-pink-500/30 border-pink-400 ring-2 ring-pink-500/50'
                    : 'bg-white/5 border-white/10 hover:border-pink-500/50'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono font-bold">
                  <span className="text-white">Instagram</span>
                  <div className="flex gap-1 bg-black/50 p-1 rounded-full border border-white/10">
                    <span className="px-1.5 py-0.5 rounded-full bg-white text-black text-[9px]">Friends</span>
                    <span className="px-1.5 py-0.5 text-zinc-400 text-[9px]">Explore</span>
                  </div>
                </div>
              </div>

              {/* Hotspot 2: Catch-Up Digest */}
              <div
                onClick={() => setSelectedHotspot('digest')}
                className={`p-2 rounded-2xl cursor-pointer transition-all border ${
                  selectedHotspot === 'digest'
                    ? 'bg-pink-500/30 border-pink-400 ring-2 ring-pink-500/50'
                    : 'bg-gradient-to-r from-pink-950/40 to-purple-950/40 border-pink-500/30 hover:border-pink-500/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-pink-500 to-amber-500 p-[1.5px]">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-bold text-white">
                      60s
                    </div>
                  </div>
                  <div className="text-[10px] font-mono leading-tight">
                    <span className="text-white font-bold block">Friends Catch-Up</span>
                    <span className="text-pink-300 text-[9px]">3 updates · Zero Ads</span>
                  </div>
                </div>
              </div>

              {/* Post Wireframe Card */}
              <div className="bg-[#1A1A1A] rounded-2xl p-2.5 border border-white/5 space-y-2">
                {/* Hotspot 4: Closeness Badge */}
                <div
                  onClick={() => setSelectedHotspot('closeness')}
                  className={`p-1.5 rounded-lg cursor-pointer transition-all border flex items-center justify-between ${
                    selectedHotspot === 'closeness'
                      ? 'bg-pink-500/30 border-pink-400 ring-1 ring-pink-500/50'
                      : 'border-transparent hover:border-pink-500/40'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-zinc-700" />
                    <span className="text-[10px] font-bold text-white">Rohan Sharma</span>
                  </div>
                  <span className="text-[8px] font-mono px-1 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    Close Friend
                  </span>
                </div>

                {/* Mock Image Box */}
                <div className="w-full h-24 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-[10px] text-zinc-500 font-mono">
                  [Post Media 4:5]
                </div>

                {/* Hotspot 3: 1-Tap DM Reaction Bar */}
                <div
                  onClick={() => setSelectedHotspot('dmbridge')}
                  className={`p-2 rounded-xl cursor-pointer transition-all border space-y-1.5 ${
                    selectedHotspot === 'dmbridge'
                      ? 'bg-pink-500/30 border-pink-400 ring-2 ring-pink-500/50'
                      : 'bg-black/40 border-white/10 hover:border-pink-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-zinc-400">
                    <div className="flex gap-2 text-[10px]">
                      <span>❤️</span>
                      <span>🔥</span>
                      <span>🙌</span>
                      <span>😂</span>
                    </div>
                    <span className="text-[9px] font-mono text-pink-400 font-bold">1-Tap DM →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hotspot Detailed Specification Panel (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {(() => {
              const current = hotspots.find(h => h.id === selectedHotspot) || hotspots[0];
              return (
                <div className="p-6 rounded-3xl bg-[#1D1D26] border border-pink-500/40 space-y-5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-pink-400 uppercase font-bold tracking-wider">
                        Selected UI Component
                      </span>
                      <h4 className="text-xl font-bold text-white">{current.name}</h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-zinc-300">
                      {current.target}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono uppercase text-pink-400 font-bold block">
                        UX Rationale & Ergonomics
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                        {current.rationale}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">
                        Component Design Tokens & Dimensions
                      </span>
                      <p className="text-xs font-mono text-zinc-300">
                        {current.specs}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block">
                        Haptic & Interaction Feedback Loops
                      </span>
                      <p className="text-xs text-zinc-300">
                        {current.interaction}
                      </p>
                    </div>
                  </div>

                  {/* Hotspots Quick Switcher Buttons */}
                  <div className="pt-2 border-t border-white/10 flex flex-wrap gap-2">
                    {hotspots.map((h) => (
                      <button
                        key={h.id}
                        onClick={() => setSelectedHotspot(h.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                          selectedHotspot === h.id
                            ? 'bg-pink-500 text-white font-bold'
                            : 'bg-white/5 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {h.name}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </motion.div>
      )}

      {/* Tab 2: Micro-Interactions & Gestures */}
      {activeTab === 'microinteractions' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-3xl bg-[#1D1D26] border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold">
              01
            </div>
            <h4 className="text-base font-bold text-white">Thumb-Zone Reachability</h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Feed switch and DM triggers are positioned within the lower 65% ergonomic arc of modern 6.7" mobile devices, reducing finger stretching and wrist strain.
            </p>
            <div className="p-3 rounded-xl bg-black/40 text-[11px] font-mono text-pink-300 border border-pink-500/20">
              Target Area: 44 x 48 px minimum safe-tap bounds
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#1D1D26] border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
              02
            </div>
            <h4 className="text-base font-bold text-white">Ephemeral Catch-Up Pacing</h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              The 60s Digest auto-pacing adapts based on post density: 4.5s for media with text captions, 3.0s for photo-only posts. Tap-and-hold freezes timer immediately.
            </p>
            <div className="p-3 rounded-xl bg-black/40 text-[11px] font-mono text-purple-300 border border-purple-500/20">
              Interaction: Long-press freeze + Right tap skip
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#1D1D26] border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
              03
            </div>
            <h4 className="text-base font-bold text-white">Optimistic DM Sending</h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              When a user taps an emoji reaction, the UI fires a subtle upward particle animation and optimistic local state confirmation, dispatching to chat in the background.
            </p>
            <div className="p-3 rounded-xl bg-black/40 text-[11px] font-mono text-cyan-300 border border-cyan-500/20">
              State: 0ms visual confirmation latency
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 3: Design Tokens & Accessibility */}
      {activeTab === 'designSystem' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">Contrast Ratio</span>
              <p className="text-xl font-bold text-emerald-400">8.4 : 1</p>
              <p className="text-xs text-zinc-400">Passes WCAG AAA for all text overlays & interactive labels</p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">Touch Targets</span>
              <p className="text-xl font-bold text-pink-400">48 x 48 px</p>
              <p className="text-xs text-zinc-400">Generous padding to prevent mis-clicks between actions</p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">Dark Mode Palette</span>
              <p className="text-xl font-bold text-purple-400">OLED #000</p>
              <p className="text-xs text-zinc-400">True black canvas with #1C1C24 container elevations</p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">Motion Physics</span>
              <p className="text-xl font-bold text-cyan-400">Spring 300ms</p>
              <p className="text-xs text-zinc-400">Natural momentum bounce matching iOS and Android gestures</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 4: User Journey & Emotional Shift */}
      {activeTab === 'journeyMap' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Legacy Experience */}
          <div className="p-6 rounded-3xl bg-rose-950/20 border border-rose-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-rose-950/80 border border-rose-500/40 text-xs font-mono font-bold text-rose-300">
                Legacy Algorithmic Feed
              </span>
              <span className="text-xs font-mono text-zinc-500">Before</span>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-400">✕</span>
                <span>Open app hoping to see friend updates; immediately hit with viral reels from strangers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400">✕</span>
                <span>Scroll for 10 minutes without finding close friend posts; feeling drained and overwhelmed.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400">✕</span>
                <span>Passive consumption with zero meaningful connection back to personal network.</span>
              </li>
            </ul>
          </div>

          {/* New Dual Feed Experience */}
          <div className="p-6 rounded-3xl bg-emerald-950/20 border border-emerald-500/40 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-mono font-bold text-emerald-300">
                Redesigned Friends Experience
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">After</span>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>One-tap Friends Catch-Up Digest shows all close circle updates in under 60 seconds.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>1-Tap DM Reaction Bar turns quick views into active, private 1-on-1 conversations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Clear separation: Friends feed when you want connection; Explore feed when you want discovery.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      )}

    </div>
  );
};
