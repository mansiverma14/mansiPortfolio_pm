import React, { useState, useEffect } from 'react';
import { PageRoute, Project } from '../types';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Download,
  Sparkles,
  Camera,
  Layers,
  Zap,
  Briefcase,
  GraduationCap,
  Mail,
  Palette,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  User,
  ListOrdered
} from 'lucide-react';
import { usePortfolio } from '../context/ProjectContext';
import { compressImageFile } from '../utils/imageCompressor';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuickView: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const {
    hero,
    globalAvatar,
    updateGlobalAvatar,
    projects,
    about,
    skills,
    resume,
    contact,
    sections
  } = usePortfolio();

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  const phrases = hero.typewriterPhrases && hero.typewriterPhrases.length > 0
    ? hero.typewriterPhrases
    : ['Performance-Focused Product Manager', 'Consumer Mobile Apps Specialist', 'Growth & Monetization Engineer'];

  // Typewriter effect logic
  useEffect(() => {
    const handleType = () => {
      const fullText = phrases[currentPhraseIndex % phrases.length] || phrases[0];

      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(75);

        if (currentText === fullText) {
          // Pause at end of text
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed, phrases]);

  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const [avatarUploadSuccess, setAvatarUploadSuccess] = useState(false);

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploadingAvatar(true);
      try {
        const compressed = await compressImageFile(file, 800, 1000, 0.85);
        updateGlobalAvatar(compressed);
        setAvatarUploadSuccess(true);
        setTimeout(() => setAvatarUploadSuccess(false), 2500);
      } catch (err) {
        console.error('Failed to compress avatar:', err);
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            updateGlobalAvatar(reader.result);
          }
        };
        reader.readAsDataURL(file);
      } finally {
        setIsUploadingAvatar(false);
        e.target.value = '';
      }
    }
  };

  // Section 1: Hero
  const renderHeroSection = () => (
    <div key="hero" className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-4">
      {/* Left / Main Text Content (7 cols) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-7 space-y-6"
      >
        {/* Main Title Name */}
        <div className="space-y-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {hero.name}
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-[#E5E5E5] pt-1">
            {hero.roleTitle}
          </h2>
        </div>

        {/* Typewriter Subtitle */}
        <div className="text-lg sm:text-xl font-medium text-[#C0C0C0] flex items-center flex-wrap gap-1 min-h-[32px]">
          <span>I'm a</span>
          <span className="font-bold text-white underline decoration-white/40 underline-offset-4 ml-1">
            {currentText}
          </span>
          <span className="inline-block w-0.5 h-5 bg-white ml-0.5 animate-blink" />
        </div>

        {/* Narrative Bio */}
        <p className="text-sm sm:text-base text-[#9E9E9E] leading-relaxed max-w-xl">
          {hero.bio}
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('work')}
            className="px-6 py-3.5 rounded-full bg-white text-[#121212] font-bold text-sm hover:bg-[#EAEAEA] transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_10px_25px_rgba(255,255,255,0.15)] flex items-center gap-2"
          >
            <span>{hero.primaryCtaText || 'View My Work'}</span>
          </button>

          <button
            onClick={() => onNavigate('zero-to-production')}
            className="px-5 py-3.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 font-bold text-xs hover:bg-emerald-900/60 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>0 to 1 App Suite (7 Apps)</span>
          </button>

          <button
            onClick={() => onNavigate('resume')}
            className="px-6 py-3.5 rounded-full bg-transparent border border-[#404040] hover:border-white text-white font-semibold text-sm hover:bg-white/5 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>{hero.secondaryCtaText || 'Resume'}</span>
          </button>
        </div>

        {/* Core Trust Pillars */}
        <div className="pt-4 border-t border-[#262626] grid grid-cols-3 gap-4 max-w-lg">
          <div className="space-y-0.5">
            <span className="text-xs font-mono font-bold text-white">5+ Years</span>
            <p className="text-[11px] text-[#777777]">Mobile & Product</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-xs font-mono font-bold text-white">10M+</span>
            <p className="text-[11px] text-[#777777]">App Downloads</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-xs font-mono font-bold text-white">Native Android</span>
            <p className="text-[11px] text-[#777777]">Technical Core</p>
          </div>
        </div>
      </motion.div>

      {/* Right / Visual Portrait Card (5 cols) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="lg:col-span-5 flex justify-center"
      >
        <div className="relative w-full max-w-[380px] group">
          {/* Ambient Multi-Ring Geometry */}
          <div className="absolute -inset-4 rounded-[42px] border border-white/10 opacity-40 pointer-events-none" />
          <div className="absolute -inset-8 rounded-[50px] border border-white/5 opacity-20 pointer-events-none" />

          {/* Main Portrait Box */}
          <div className="relative aspect-[4/5] rounded-[36px] bg-[#1E1E1E] border border-[#2D2D2D] p-3.5 shadow-2xl overflow-hidden transition-all duration-300 group-hover:border-[#4A4A4A]">
            <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#242424]">
              <img
                src={globalAvatar || '/profile.jpg'}
                alt={hero.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/profile.jpg';
                }}
                className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Uploading / Success Toast Overlay */}
              {isUploadingAvatar && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-10">
                  <div className="px-4 py-2 rounded-full bg-white text-[#121212] text-xs font-bold shadow-lg animate-pulse flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full border-2 border-[#121212] border-t-transparent animate-spin" />
                    <span>Updating portrait...</span>
                  </div>
                </div>
              )}

              {avatarUploadSuccess && (
                <div className="absolute top-4 left-4 right-4 z-10 flex justify-center">
                  <div className="px-3.5 py-1.5 rounded-full bg-emerald-500 text-black text-xs font-bold shadow-lg flex items-center gap-1.5 animate-in fade-in zoom-in duration-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Portrait Updated!</span>
                  </div>
                </div>
              )}

              {/* Subtle Inner Gradient Shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Bottom Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wide">Available for PM Roles</span>
                  </div>
                  <p className="text-[10px] text-[#A0A0A0] font-mono">Dehradun • Open to Relocation</p>
                </div>
                
                {/* Upload photo button */}
                <label
                  htmlFor="avatar-file-input"
                  className="p-2 rounded-xl bg-white text-[#121212] hover:bg-[#EAEAEA] transition-all cursor-pointer shadow-md"
                  title="Change Portrait Image"
                >
                  <Camera className="w-4 h-4" />
                </label>
                <input
                  type="file"
                  id="avatar-file-input"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  // Section 2: Projects & Case Studies
  const renderProjectsSection = () => (
    <motion.div
      key="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
            Featured Case Studies
          </span>
          <h3 className="text-2xl font-extrabold text-white tracking-tight">
            Selected Product Strategy & Deep Dives
          </h3>
        </div>
        <button
          onClick={() => onNavigate('work')}
          className="text-xs font-semibold text-[#CCCCCC] hover:text-white flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          <span>View All Projects in Portfolio</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* VPN Monetization Case Study */}
        <div
          onClick={() => onNavigate('vpn-transformation')}
          className="group relative rounded-3xl bg-[#1C1C24] border border-blue-500/30 hover:border-blue-500/80 p-6 flex flex-col justify-between space-y-4 transition-all duration-300 hover:scale-[1.02] shadow-xl cursor-pointer"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-[11px] font-bold border border-blue-500/30">
                VPN App
              </span>
              <span className="text-[11px] font-mono text-emerald-400">80% LTO Share</span>
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
              Product Analytics, Funnel & AdMob Mediation
            </h4>
            <p className="text-xs text-[#9E9E9E] leading-relaxed">
              15-section product analysis: diagnosing 3.4% checkout conversion, country segmentation, AdMob floor tuning, and 4 A/B experiments.
            </p>
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-mono text-blue-400 font-semibold">Interactive Case Study</span>
            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Instagram Study */}
        <div
          onClick={() => onNavigate('instagram-feed')}
          className="group relative rounded-3xl bg-[#1C1C24] border border-pink-500/30 hover:border-pink-500/80 p-6 flex flex-col justify-between space-y-4 transition-all duration-300 hover:scale-[1.02] shadow-xl cursor-pointer"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 font-mono text-[11px] font-bold border border-pink-500/30">
                Instagram
              </span>
              <span className="text-[11px] font-mono text-zinc-400">+48% Friend Views</span>
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
              Rethinking the Feed Experience & Social Graph
            </h4>
            <p className="text-xs text-[#9E9E9E] leading-relaxed">
              Addressing the algorithmic content takeover: Friends Catch-Up 60s Digest, Dual Feed Switch, and 1-Tap DM Reaction Bridge.
            </p>
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-mono text-pink-400 font-semibold">Interactive Prototype & Case Study</span>
            <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-black transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Swiggy Instamart Study */}
        <div
          onClick={() => onNavigate('swiggy-instamart')}
          className="group relative rounded-3xl bg-[#1C1C24] border border-amber-500/30 hover:border-amber-500/80 p-6 flex flex-col justify-between space-y-4 transition-all duration-300 hover:scale-[1.02] shadow-xl cursor-pointer"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[11px] font-bold border border-amber-500/30">
                Swiggy Instamart
              </span>
              <span className="text-[11px] font-mono text-zinc-400">+35% Order Freq</span>
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
              From Grocery Utility to Meal Decision Engine
            </h4>
            <p className="text-xs text-[#9E9E9E] leading-relaxed">
              Solving the "What should I cook today?" friction: 7-day automated meal planner, 3-tap recipe ordering, and scheduled morning savings.
            </p>
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-mono text-amber-400 font-semibold">Interactive Prototype & Case Study</span>
            <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Rapido Study */}
        <div
          onClick={() => onNavigate('rapido-commuter-pass')}
          className="group relative rounded-3xl bg-[#1C1C24] border border-yellow-500/30 hover:border-yellow-500/80 p-6 flex flex-col justify-between space-y-4 transition-all duration-300 hover:scale-[1.02] shadow-xl cursor-pointer"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 font-mono text-[11px] font-bold border border-yellow-500/30">
                Rapido
              </span>
              <span className="text-[11px] font-mono text-zinc-400">+35% D7 Retention</span>
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors">
              Peak-Hour Supply Lock & Commuter Pass
            </h4>
            <p className="text-xs text-[#9E9E9E] leading-relaxed">
              Two-sided marketplace subscription model with scheduled peak commute slots, 10-minute arrival guarantee, and ₹280Cr ARR trajectory.
            </p>
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-mono text-yellow-400 font-semibold">Interactive Prototype</span>
            <div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-300 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Section 3: 0 to 1 Suite
  const renderZeroToOneSection = () => (
    <motion.div
      key="zero-to-one"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto p-8 rounded-[36px] bg-gradient-to-br from-[#1B1E28] via-[#14161F] to-[#121216] border border-emerald-500/30 shadow-2xl relative overflow-hidden space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-500/20 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>0-to-1 Production Suite</span>
            </span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">
            7 Comprehensive Mobile & Cloud Applications
          </h3>
          <p className="text-xs text-[#A0A0A0]">
            Including FitLife Pro (Health Journey Pro), CalLock Vault, ShareOn P2P, Video Recorder, and Cleaner.
          </p>
        </div>

        <button
          onClick={() => onNavigate('zero-to-production')}
          className="px-6 py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs transition-all shadow-lg flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
        >
          <span>Explore 0-to-1 Suite</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-2xl bg-[#1A1E26] border border-white/5 space-y-1">
          <span className="text-xs font-bold text-white block">FitLife Pro</span>
          <p className="text-[11px] text-[#888888]">AI Nutrition & Challenges</p>
        </div>
        <div className="p-4 rounded-2xl bg-[#1A1E26] border border-white/5 space-y-1">
          <span className="text-xs font-bold text-white block">CalLock</span>
          <p className="text-[11px] text-[#888888]">Stealth Calculator Vault</p>
        </div>
        <div className="p-4 rounded-2xl bg-[#1A1E26] border border-white/5 space-y-1">
          <span className="text-xs font-bold text-white block">ShareOn</span>
          <p className="text-[11px] text-[#888888]">50MB/s P2P Offline Transfer</p>
        </div>
        <div className="p-4 rounded-2xl bg-[#1A1E26] border border-white/5 space-y-1">
          <span className="text-xs font-bold text-white block">Smart Cleaner</span>
          <p className="text-[11px] text-[#888888]">Storage Janitor & Optimizer</p>
        </div>
      </div>
    </motion.div>
  );

  // Section 4: About & Philosophy
  const renderAboutSection = () => (
    <motion.div
      key="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto p-8 rounded-[36px] bg-[#1B1B1E] border border-[#2D2D2D] space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
            {about?.badgeText || 'Get to Know Me'}
          </span>
          <h3 className="text-2xl font-extrabold text-white">
            {about?.headline || 'Building Scalable, Intuitive & User-Centric Consumer Products'}
          </h3>
        </div>
        <button
          onClick={() => onNavigate('about')}
          className="text-xs font-semibold text-[#CCCCCC] hover:text-white flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          <span>Read Full Story</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <p className="text-xs sm:text-sm text-[#AAAAAA] leading-relaxed">
          {about?.narrativeParagraphs?.[0] || 'Passionate Senior Product Manager with 5+ years of experience leading cross-functional teams and launching high-impact consumer mobile applications.'}
        </p>
        <div className="grid grid-cols-2 gap-3">
          {(about?.stats || []).slice(0, 4).map((st, i) => (
            <div key={i} className="p-4 rounded-2xl bg-[#222226] border border-[#303036] space-y-0.5">
              <span className="text-lg font-bold text-white block">{st.value}</span>
              <span className="text-xs text-[#888888] block">{st.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  // Section 5: Skills Bento Grid
  const renderSkillsSection = () => (
    <motion.div
      key="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto space-y-6"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Core Competencies
          </span>
          <h3 className="text-2xl font-extrabold text-white">
            {skills?.headerTitle || 'Product & Technical Skills'}
          </h3>
        </div>
        <button
          onClick={() => onNavigate('skills')}
          className="text-xs font-semibold text-[#CCCCCC] hover:text-white flex items-center gap-1.5 transition-colors"
        >
          <span>View All Skills</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(skills?.cards || []).slice(0, 3).map((card) => (
          <div
            key={card.id}
            className="p-6 rounded-3xl bg-[#1C1C20] border border-[#2D2D33] space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white">{card.title}</h4>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-md">
                  {card.highlight}
                </span>
              </div>
              <p className="text-xs text-[#9E9E9E] leading-relaxed">{card.skills}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  // Section 6: Resume & Experience
  const renderResumeSection = () => (
    <motion.div
      key="resume"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto p-8 rounded-[36px] bg-[#1A1A1E] border border-[#2D2D2D] space-y-6"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
            Career Snapshot
          </span>
          <h3 className="text-2xl font-extrabold text-white">
            Work Experience & Track Record
          </h3>
        </div>
        <button
          onClick={() => onNavigate('resume')}
          className="text-xs font-semibold text-[#CCCCCC] hover:text-white flex items-center gap-1.5 transition-colors"
        >
          <span>View Full Resume</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="space-y-3">
        {(resume.experiences || []).slice(0, 2).map((exp) => (
          <div
            key={exp.id}
            className="p-5 rounded-2xl bg-[#222226] border border-[#303036] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                <span className="text-xs text-[#888888]">• {exp.company}</span>
              </div>
              <p className="text-xs text-[#A0A0A0]">{exp.period} • {exp.location}</p>
            </div>
            <button
              onClick={() => onNavigate('resume')}
              className="text-xs text-purple-400 hover:text-purple-300 font-semibold self-start sm:self-auto"
            >
              View Bullets →
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );

  // Section 7: Contact & Connect
  const renderContactSection = () => (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto p-8 rounded-[36px] bg-gradient-to-r from-[#201524] to-[#151722] border border-purple-500/30 space-y-4 text-center"
    >
      <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
        Let's Connect
      </span>
      <h3 className="text-2xl font-extrabold text-white">
        Open for Product Manager Roles & Collaborations
      </h3>
      <p className="text-xs text-[#AAAAAA] max-w-md mx-auto">
        Feel free to reach out for PM opportunities, product consultations, or speaking inquiries.
      </p>
      <div className="pt-2 flex justify-center gap-3">
        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-all shadow-lg"
        >
          Contact Mansi
        </button>
      </div>
    </motion.div>
  );

  // Map of section IDs to render functions
  const sectionRenderers: Record<string, () => React.ReactNode> = {
    hero: renderHeroSection,
    projects: renderProjectsSection,
    'zero-to-one': renderZeroToOneSection,
    about: renderAboutSection,
    skills: renderSkillsSection,
    resume: renderResumeSection,
    contact: renderContactSection,
  };

  return (
    <div className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:pl-56 lg:pr-12 py-12 space-y-16">
      {/* Background Decorative Ambient Circles */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-white/[0.025] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] rounded-full bg-purple-500/[0.02] blur-3xl pointer-events-none" />

      {/* Render sections dynamically in the sequence defined by the user in Admin Studio */}
      {sections
        .filter((sec) => sec.visible)
        .map((sec) => {
          const renderer = sectionRenderers[sec.id];
          return renderer ? renderer() : null;
        })}
    </div>
  );
};
