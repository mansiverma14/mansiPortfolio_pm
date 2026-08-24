import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Wand2,
  Image as ImageIcon,
  Play,
  RotateCcw,
  CheckCircle2,
  Tv,
  Layers,
  Zap,
  Sliders,
  SlidersHorizontal,
  RefreshCw,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Shield,
  Search,
  MessageSquare,
  AlertTriangle,
  ArrowRight,
  Maximize2,
  Copy,
  Check
} from 'lucide-react';

interface AIStudioInteractiveDemoProps {
  initialTab?: 'collage' | 'review' | 'stem' | 'eraser' | 'doc';
  hideTabs?: boolean;
}

export const AIStudioInteractiveDemo: React.FC<AIStudioInteractiveDemoProps> = ({
  initialTab = 'collage',
  hideTabs = false
}) => {
  const [activeTab, setActiveTab] = useState<'collage' | 'review' | 'stem' | 'eraser' | 'doc'>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // ==========================================
  // 1. COLLAGE GENERATOR STATE
  // ==========================================
  const promptPresets = [
    { label: 'Sunset Neon Beach', prompt: 'Vibrant tropical sunset with neon reflections on ocean waves, golden hour rim lighting, 8k aesthetic photography', style: 'Cyberpunk Neon', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop' },
    { label: 'Watercolor Sakura', prompt: 'Dreamy soft watercolor cherry blossoms in spring morning mist, pastel pink and lavender brush strokes, minimalist Japanese art', style: 'Watercolor Fine Art', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=800&auto=format&fit=crop' },
    { label: 'Vintage Boho Cafe', prompt: 'Cozy aesthetic Parisian cafe with dried eucalyptus flowers, warm morning sunlight, ceramic cup, 35mm retro film grain', style: 'Retro Boho Film', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop' },
    { label: 'Pastel 3D Clay Shapes', prompt: 'Abstract floating 3D geometric clay shapes, soft pastel peach and mint palette, isometric studio lighting, cute modern wallpaper', style: '3D Pastel Clay', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' }
  ];

  const [currentPrompt, setCurrentPrompt] = useState(promptPresets[0].prompt);
  const [selectedStyle, setSelectedStyle] = useState('Cyberpunk Neon');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [generatedImage, setGeneratedImage] = useState(promptPresets[0].image);
  const [tokensLeft, setTokensLeft] = useState(2);
  const [targetSlot, setTargetSlot] = useState<number>(3); // Slot 4 by default
  const [adRewardedModal, setAdRewardedModal] = useState(false);

  // Collage Slots (4-grid layout)
  const [collageSlots, setCollageSlots] = useState<{ [key: number]: string }>({
    0: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop', // portrait 1
    1: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop', // portrait 2
    2: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop', // portrait 3
    3: promptPresets[0].image // AI generated slot
  });

  const handleGenerateImage = () => {
    if (tokensLeft <= 0) {
      setAdRewardedModal(true);
      return;
    }

    setIsGenerating(true);
    setGenerationProgress(10);

    const interval = setInterval(() => {
      setGenerationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          setTokensLeft((t) => Math.max(0, t - 1));
          
          // Match or find image
          const matchedPreset = promptPresets.find(p => p.prompt === currentPrompt) || promptPresets[Math.floor(Math.random() * promptPresets.length)];
          setGeneratedImage(matchedPreset.image);
          setCollageSlots(prevSlots => ({
            ...prevSlots,
            [targetSlot]: matchedPreset.image
          }));
          return 100;
        }
        return prev + 25;
      });
    }, 280);
  };

  const handleWatchAdReward = () => {
    setAdRewardedModal(false);
    setTokensLeft((t) => t + 2);
  };

  // ==========================================
  // 2. REVIEW PILOT STATE
  // ==========================================
  const sampleReviews = [
    {
      author: 'Lucas M. (Brazil)',
      rating: 1,
      text: 'After the v4.3 update on my Galaxy S22, the app closes immediately when I open the editor! Lost my project!! Fix this now!',
      date: '10 mins ago',
      device: 'Samsung Galaxy S22 • Android 14',
      tag: 'Critical Bug / Crash Regression',
      urgency: 'P0 Urgent',
      sentiment: -0.92,
      reply: 'Hi Lucas, we are deeply sorry for the crash on Galaxy S22 Android 14. Our ML team has deployed hotfix v4.3.1 to resolve this exact memory glitch. Please update from Google Play now, and your draft will be safely restored.'
    },
    {
      author: 'Sophia K. (Germany)',
      rating: 5,
      text: 'The new AI stem separator is mind-blowing!! Separated vocals from my acoustic guitar tracks in 3 seconds. Best app on my phone.',
      date: '25 mins ago',
      device: 'Pixel 8 Pro • Android 14',
      tag: 'ASO Praise / AI Feature Highlight',
      urgency: 'Positive Social Proof',
      sentiment: 0.98,
      reply: 'Danke Sophia! We love hearing how the AI Stem Separator is powering your acoustic guitar recordings. Look out for our 4-stem master mixer coming next week!'
    },
    {
      author: 'Rajesh V. (India)',
      rating: 2,
      text: 'Too many ads popup when I try to save in 1080p. Please add UPI payment for Pro subscription in India.',
      date: '1 hour ago',
      device: 'OnePlus 11 • Android 13',
      tag: 'Monetization & Local Payment Friction',
      urgency: 'P1 Growth Opportunity',
      sentiment: -0.45,
      reply: 'Namaste Rajesh, thank you for the valuable feedback. We have reduced export ad frequency by 50% this week and are currently rolling out native UPI / Google Pay subscriptions across India!'
    }
  ];
  const [selectedReviewIdx, setSelectedReviewIdx] = useState(0);
  const [copiedReply, setCopiedReply] = useState(false);

  // ==========================================
  // 3. STEM SPLITTER STATE
  // ==========================================
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [vocalVol, setVocalVol] = useState(100);
  const [musicVol, setMusicVol] = useState(100);
  const [drumsVol, setDrumsVol] = useState(80);
  const [bassVol, setBassVol] = useState(80);
  const [karaokeMode, setKaraokeMode] = useState(false);

  useEffect(() => {
    if (karaokeMode) {
      setVocalVol(0);
    } else {
      setVocalVol(100);
    }
  }, [karaokeMode]);

  // ==========================================
  // 4. MAGIC ERASER STATE
  // ==========================================
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isErased, setIsErased] = useState(true);

  // ==========================================
  // 5. DOC SCANNER STATE
  // ==========================================
  const [isPiMasked, setIsPiiMasked] = useState(true);

  return (
    <div className="w-full bg-[#18181E] border border-[#2D2D38] rounded-3xl overflow-hidden shadow-2xl space-y-0">
      
      {/* Studio Header & Top Mode Tabs */}
      <div className="bg-[#121215] p-4 sm:p-6 border-b border-[#2D2D38] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white">
              <Wand2 className="w-4 h-4" />
            </span>
            <h3 className="text-base sm:text-lg font-black text-white font-mono tracking-tight">
              Interactive AI Implementation Simulator
            </h3>
          </div>
          <p className="text-xs text-[#A0A0B0]">
            Test live consumer AI workflows engineered across our mobile apps.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        {!hideTabs && (
          <div className="flex items-center gap-1.5 flex-wrap p-1 bg-[#1A1A22] rounded-2xl border border-[#2A2A33]">
            <button
              onClick={() => setActiveTab('collage')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'collage'
                  ? 'bg-gradient-to-r from-[#713B5D] to-[#E97868] text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>AI Collage Gen</span>
            </button>

            <button
              onClick={() => setActiveTab('review')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'review'
                  ? 'bg-[#E97868] text-[#121215] font-extrabold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Review Pilot</span>
            </button>

            <button
              onClick={() => setActiveTab('stem')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'stem'
                  ? 'bg-[#713B5D] text-white font-extrabold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Audio Stem Split</span>
            </button>

            <button
              onClick={() => setActiveTab('eraser')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'eraser'
                  ? 'bg-indigo-600 text-white font-extrabold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>Magic Eraser</span>
            </button>

            <button
              onClick={() => setActiveTab('doc')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'doc'
                  ? 'bg-emerald-600 text-white font-extrabold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Doc Scanner OCR</span>
            </button>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 1. AI COLLAGE GENERATOR DEMO                                              */}
      {/* ========================================================================= */}
      {activeTab === 'collage' && (
        <div className="p-4 sm:p-8 space-y-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Control Panel: Prompt & Style Studio */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Token Counter & Ad Bridge Badge */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#121215] border border-[#2D2D38]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white">Daily AI Tokens:</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-[#713B5D]/40 text-[#E97868] font-black">
                    {tokensLeft} / 3 Free Remaining
                  </span>
                </div>

                <button
                  onClick={() => setAdRewardedModal(true)}
                  className="text-[11px] font-mono font-bold text-[#E97868] hover:text-[#F4A095] flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#E97868]/10 border border-[#E97868]/30 hover:bg-[#E97868]/20 transition-all"
                >
                  <Tv className="w-3.5 h-3.5" />
                  <span>+2 Tokens (Watch Ad)</span>
                </button>
              </div>

              {/* Quick Prompt Presets */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#888899] uppercase tracking-wider block">
                  1-Tap Style & Prompt Presets:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {promptPresets.map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentPrompt(preset.prompt);
                        setSelectedStyle(preset.style);
                      }}
                      className={`p-2.5 rounded-xl border text-left text-xs font-mono transition-all space-y-1 ${
                        currentPrompt === preset.prompt
                          ? 'bg-[#2A1D2D] border-[#E97868] text-white shadow-md'
                          : 'bg-[#121215] border-[#2A2A33] text-[#A0A0B0] hover:text-white hover:border-[#444455]'
                      }`}
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>{preset.label}</span>
                        {currentPrompt === preset.prompt && <CheckCircle2 className="w-3.5 h-3.5 text-[#E97868]" />}
                      </div>
                      <div className="text-[10px] text-zinc-500 truncate">{preset.style}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Prompt Input */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#888899] uppercase tracking-wider block">
                  Custom Generation Prompt:
                </label>
                <textarea
                  value={currentPrompt}
                  onChange={(e) => setCurrentPrompt(e.target.value)}
                  rows={3}
                  className="w-full bg-[#121215] border border-[#2D2D38] rounded-2xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#E97868] transition-colors resize-none font-mono"
                  placeholder="Describe the image you need for your collage slot..."
                />
              </div>

              {/* Target Slot Selector */}
              <div className="flex items-center justify-between text-xs font-mono text-[#A0A0B0] bg-[#121215] p-3 rounded-2xl border border-[#2D2D38]">
                <span>Target Collage Slot:</span>
                <div className="flex items-center gap-1.5">
                  {[0, 1, 2, 3].map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setTargetSlot(slot)}
                      className={`w-7 h-7 rounded-lg font-bold text-xs transition-all ${
                        targetSlot === slot
                          ? 'bg-[#E97868] text-black shadow-md'
                          : 'bg-[#22222B] text-zinc-400 hover:text-white'
                      }`}
                    >
                      #{slot + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleGenerateImage}
                disabled={isGenerating}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#713B5D] to-[#E97868] hover:opacity-95 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    <span>Synthesizing Diffusion Latents ({generationProgress}%)...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate AI Asset into Slot #{targetSlot + 1} (1 Token)</span>
                  </>
                )}
              </button>

              {/* Generation Progress Indicator */}
              {isGenerating && (
                <div className="space-y-1.5">
                  <div className="w-full bg-[#121215] rounded-full h-2 overflow-hidden border border-white/10">
                    <div
                      className="bg-gradient-to-r from-[#713B5D] to-[#E97868] h-full transition-all duration-300 rounded-full"
                      style={{ width: `${generationProgress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>Edge Safety Filter: Passed</span>
                    <span>Latency SLA: ~1.4s</span>
                  </div>
                </div>
              )}

            </div>

            {/* Right Panel: Live Interactive 4-Photo Collage Canvas */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#E97868]" />
                  <span>Live Collage Canvas (2x2 Grid Output)</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  Ready for 2K Export
                </span>
              </div>

              <div className="p-3 bg-[#121215] rounded-3xl border border-[#2D2D38] shadow-inner">
                <div className="grid grid-cols-2 gap-2 aspect-square max-w-sm mx-auto bg-black p-2 rounded-2xl border border-[#2A2A33]">
                  {[0, 1, 2, 3].map((slot) => {
                    const isSelected = targetSlot === slot;
                    return (
                      <div
                        key={slot}
                        onClick={() => setTargetSlot(slot)}
                        className={`relative rounded-xl overflow-hidden cursor-pointer transition-all group ${
                          isSelected ? 'ring-2 ring-[#E97868] ring-offset-2 ring-offset-black' : 'opacity-90 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={collageSlots[slot]}
                          alt={`Collage slot ${slot + 1}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Slot Badge */}
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white font-bold border border-white/20">
                          Slot #{slot + 1}
                        </div>

                        {slot === targetSlot && (
                          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#E97868] text-[9px] font-mono text-black font-extrabold">
                            ACTIVE AI TARGET
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Aesthetic Palette Matcher Bar */}
              <div className="p-3 rounded-2xl bg-[#121215] border border-[#2D2D38] flex items-center justify-between text-xs font-mono">
                <span className="text-[#888899]">AI Extracted Color Harmony:</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#E97868]" title="Warm Coral Accent" />
                  <span className="w-4 h-4 rounded-full bg-[#713B5D]" title="Deep Mauve Tone" />
                  <span className="w-4 h-4 rounded-full bg-[#F3A683]" title="Pastel Peach Highlight" />
                  <span className="w-4 h-4 rounded-full bg-[#2C3A47]" title="Rich Contrast Navy" />
                </div>
              </div>

            </div>

          </div>

          {/* Ad Reward Modal Simulation */}
          {adRewardedModal && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#2B1B2C] to-[#1F1826] border border-[#E97868]/40 space-y-3 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#E97868]/20 flex items-center justify-center shrink-0">
                  <Tv className="w-5 h-5 text-[#E97868]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-mono">Out of Free Daily Generations?</h4>
                  <p className="text-xs text-[#A0A0B0]">
                    Watch a short 15s sponsored ad to receive +2 extra AI Image Tokens instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleWatchAdReward}
                  className="px-4 py-2 rounded-xl bg-[#E97868] text-black font-mono font-bold text-xs hover:bg-[#F4A095] transition-all"
                >
                  Watch Ad (+2 Tokens)
                </button>
                <button
                  onClick={() => setAdRewardedModal(false)}
                  className="px-3 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. REVIEW PILOT NLP CLASSIFIER DEMO                                      */}
      {/* ========================================================================= */}
      {activeTab === 'review' && (
        <div className="p-4 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: Incoming Reviews Stream */}
            <div className="lg:col-span-5 space-y-3">
              <label className="text-xs font-mono text-[#888899] uppercase tracking-wider block">
                Incoming Play Store Feedback Stream:
              </label>

              <div className="space-y-2.5">
                {sampleReviews.map((rev, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedReviewIdx(idx);
                      setCopiedReply(false);
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all space-y-2 ${
                      selectedReviewIdx === idx
                        ? 'bg-[#231A26] border-[#E97868] shadow-lg'
                        : 'bg-[#121215] border-[#2A2A33] hover:border-[#444455]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-white">{rev.author}</span>
                      <div className="flex items-center gap-0.5 text-amber-400 text-xs">
                        {'★'.repeat(rev.rating)}
                        {'☆'.repeat(5 - rev.rating)}
                      </div>
                    </div>

                    <p className="text-xs text-[#C0C0D0] line-clamp-2 leading-relaxed">
                      "{rev.text}"
                    </p>

                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                      <span>{rev.device}</span>
                      <span>{rev.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: AI Intelligence Triage & Auto-Reply */}
            <div className="lg:col-span-7 bg-[#121215] rounded-3xl border border-[#2D2D38] p-5 sm:p-6 space-y-4">
              {(() => {
                const currentRev = sampleReviews[selectedReviewIdx];
                return (
                  <>
                    <div className="flex items-center justify-between pb-3 border-b border-[#2A2A33]">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                          currentRev.rating === 1
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                            : currentRev.rating === 2
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        }`}>
                          {currentRev.urgency}
                        </span>
                        <span className="text-xs font-mono text-zinc-400">{currentRev.tag}</span>
                      </div>

                      <span className="text-[11px] font-mono text-indigo-300">
                        Score: {currentRev.sentiment > 0 ? `+${currentRev.sentiment}` : currentRev.sentiment}
                      </span>
                    </div>

                    {/* Original Review Full View */}
                    <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                      <div className="text-[10px] font-mono text-[#888899] uppercase">User Statement</div>
                      <p className="text-xs text-white leading-relaxed font-sans">
                        "{currentRev.text}"
                      </p>
                    </div>

                    {/* AI Generated Tailored Response */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#E97868] font-bold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Gemini 1.5 Contextual Developer Response:</span>
                        </span>
                        <span className="text-[10px] text-zinc-500">Latency: 420ms</span>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#1A1A24] border border-indigo-500/30 text-xs text-[#E0E0F0] leading-relaxed relative">
                        {currentRev.reply}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[10px] font-mono text-zinc-500">
                        Human-in-the-Loop Safe Approval
                      </span>

                      <button
                        onClick={() => {
                          setCopiedReply(true);
                          setTimeout(() => setCopiedReply(false), 2000);
                        }}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#713B5D] to-[#E97868] text-white font-mono font-bold text-xs hover:opacity-90 transition-all flex items-center gap-1.5"
                      >
                        {copiedReply ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-white" />
                            <span>Approved & Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Approve & Publish to Play Console</span>
                          </>
                        )}
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. AI AUDIO STEM SEPARATION DEMO                                         */}
      {/* ========================================================================= */}
      {activeTab === 'stem' && (
        <div className="p-4 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left: Waveform & Playback */}
            <div className="lg:col-span-5 bg-[#121215] p-5 rounded-3xl border border-[#2D2D38] space-y-4 text-center">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider">Demucs v4 Neural Splitter</span>
                <h4 className="text-sm font-bold text-white font-mono">Sunset_Acoustic_Master.wav</h4>
              </div>

              {/* Animated Waveform Visualizer */}
              <div className="h-24 bg-black/60 rounded-2xl border border-white/5 p-3 flex items-center justify-center gap-1">
                {Array.from({ length: 28 }).map((_, i) => {
                  const height = isPlayingAudio 
                    ? Math.max(12, Math.sin(i * 0.5 + Date.now() * 0.005) * 70 + 20)
                    : 15 + (i % 5) * 8;
                  return (
                    <div
                      key={i}
                      className={`w-1.5 rounded-full transition-all duration-150 ${
                        vocalVol === 0
                          ? 'bg-indigo-500'
                          : 'bg-gradient-to-t from-[#713B5D] to-[#E97868]'
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  );
                })}
              </div>

              {/* Play / Pause & Karaoke Quick Toggle */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#713B5D] to-[#E97868] text-white font-mono font-bold text-xs flex items-center gap-2 hover:opacity-90 transition-all shadow-md"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isPlayingAudio ? 'Pause Studio Preview' : 'Play Live Stems'}</span>
                </button>

                <button
                  onClick={() => setKaraokeMode(!karaokeMode)}
                  className={`px-4 py-2.5 rounded-full font-mono font-bold text-xs transition-all border ${
                    karaokeMode
                      ? 'bg-emerald-500 text-black border-emerald-400 shadow-md'
                      : 'bg-[#1E1E28] text-zinc-300 border-[#333344] hover:text-white'
                  }`}
                >
                  🎤 Karaoke Mode {karaokeMode ? '(ON)' : '(OFF)'}
                </button>
              </div>
            </div>

            {/* Right: Stem Sliders */}
            <div className="lg:col-span-7 bg-[#121215] p-5 sm:p-6 rounded-3xl border border-[#2D2D38] space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#2A2A33]">
                <span className="text-xs font-mono font-bold text-white">4-Stem Isolated Mixing Desk</span>
                <span className="text-[10px] font-mono text-zinc-400">Lossless 320kbps Export</span>
              </div>

              {/* Vocals */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#E97868] font-bold">🎤 Isolated Vocals (Acapella)</span>
                  <span className="text-zinc-400">{vocalVol}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={vocalVol}
                  onChange={(e) => setVocalVol(Number(e.target.value))}
                  className="w-full accent-[#E97868]"
                />
              </div>

              {/* Backing Track / Instruments */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-indigo-400 font-bold">🎸 Backing Music & Melodies</span>
                  <span className="text-zinc-400">{musicVol}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={musicVol}
                  onChange={(e) => setMusicVol(Number(e.target.value))}
                  className="w-full accent-indigo-500"
                />
              </div>

              {/* Drums */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-bold">🥁 Percussion & Drums</span>
                  <span className="text-zinc-400">{drumsVol}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={drumsVol}
                  onChange={(e) => setDrumsVol(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>

              {/* Bass */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold">🔊 Bass & Sub-frequencies</span>
                  <span className="text-zinc-400">{bassVol}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={bassVol}
                  onChange={(e) => setBassVol(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. MAGIC ERASER DEMO                                                     */}
      {/* ========================================================================= */}
      {activeTab === 'eraser' && (
        <div className="p-4 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                  LaMa Neural Inpainter • Fast SAM
                </span>
                <h4 className="text-lg font-black text-white font-mono">
                  1-Touch Photobomber & Object Inpainter
                </h4>
                <p className="text-xs text-[#A0A0B0] leading-relaxed">
                  Fast SAM instantly segments the background tourist, and LaMa synthesizes coherent beach texture in 380ms with 0 cloud latency.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#121215] border border-[#2D2D38] space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Processing Mode:</span>
                  <span className="text-emerald-400 font-bold">100% On-Device Neural Engine</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Inpaint Latency:</span>
                  <span className="text-white font-bold">0.38s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Edge Color Halo:</span>
                  <span className="text-white font-bold">0% (4px anti-aliased dilation)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsErased(!isErased)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-xs transition-all shadow-md flex items-center gap-2"
                >
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>{isErased ? 'Restore Original Object' : 'Erase Object (LaMa Inpaint)'}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#121215] p-3 rounded-3xl border border-[#2D2D38]">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black">
                <img
                  src={
                    isErased
                      ? 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop'
                      : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
                  }
                  alt="Inpaint Comparison"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-300"
                />

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-white font-bold border border-white/20">
                  {isErased ? '✨ Clean Inpainted Photo' : '⚠️ Original with Photobomber'}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. PRIVACY DOC SCANNER DEMO                                              */}
      {/* ========================================================================= */}
      {activeTab === 'doc' && (
        <div className="p-4 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                  Zero-Cloud Edge OCR & PII Redactor
                </span>
                <h4 className="text-lg font-black text-white font-mono">
                  Smart Document Vault & Tap-to-Peek Shield
                </h4>
                <p className="text-xs text-[#A0A0B0] leading-relaxed">
                  Scans IDs, passports, and credit cards locally. Auto-detects 16-digit card numbers and CVVs with dynamic Gaussian blur to prevent over-the-shoulder snooping in public.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#121215] border border-[#2D2D38] space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Cloud Data Transmission:</span>
                  <span className="text-emerald-400 font-bold">0 KB (100% Offline Edge)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">PII Detection Accuracy:</span>
                  <span className="text-white font-bold">99.4% Precision</span>
                </div>
              </div>

              <button
                onClick={() => setIsPiiMasked(!isPiMasked)}
                className={`px-5 py-2.5 rounded-xl font-mono font-bold text-xs transition-all flex items-center gap-2 ${
                  isPiMasked
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    : 'bg-zinc-700 hover:bg-zinc-600 text-zinc-200'
                }`}
              >
                {isPiMasked ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{isPiMasked ? 'Privacy Blur: Active (Tap to Peek)' : 'Privacy Blur: Disabled (Exposed)'}</span>
              </button>
            </div>

            {/* Document Card Simulation */}
            <div className="lg:col-span-6 bg-[#121215] p-5 rounded-3xl border border-[#2D2D38] space-y-3">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1A1E29] to-[#12141C] border border-[#30384D] space-y-4 text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Verified Secure Document</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">AES-256 SAFE</span>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-zinc-500">Document Type</div>
                  <div className="text-sm font-bold font-mono">PREMIUM BLACK CARD / ID SCAN</div>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-zinc-500">Cardholder Number</div>
                  <div className="text-sm font-mono tracking-widest font-bold">
                    {isPiMasked ? (
                      <span className="filter blur-[5px] select-none bg-zinc-800 px-2 py-0.5 rounded transition-all">
                        4532 •••• •••• 8829
                      </span>
                    ) : (
                      <span className="text-red-400">4532 8920 1192 8829</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-white/10">
                  <div>
                    <span className="text-[9px] text-zinc-500 block">CVV SEC</span>
                    <span>{isPiMasked ? '•••' : '829'}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-zinc-500 block">EXPIRES</span>
                    <span>09/29</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
