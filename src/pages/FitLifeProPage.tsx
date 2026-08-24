import React, { useState } from 'react';
import { PageRoute } from '../types';
import { FitLifeProMockup } from '../components/FitLifeProMockup';
import {
  Activity,
  Zap,
  ExternalLink,
  Layers,
  Code2,
  Database,
  Cpu,
  Shield,
  Trophy,
  Flame,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Smartphone,
  Sparkles,
  ArrowRight,
  FileText,
  AlertTriangle,
  Server,
  Share2,
  Palette,
  Eye,
  Lock,
  Heart,
  Droplets,
  Footprints,
  Dumbbell,
  Target,
  Users,
  Compass,
  Download,
  Calendar,
  Check
} from 'lucide-react';

interface FitLifeProPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const FitLifeProPage: React.FC<FitLifeProPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'prd' | 'architecture' | 'ui-screens' | 'strategy'>('overview');
  const [selectedTechIndex, setSelectedTechIndex] = useState<number>(0);

  const OPEN_SOURCE_STACK = [
    {
      name: '1. wger',
      category: 'Workout & Exercise Backend',
      github: 'https://github.com/wger-project/wger',
      description: 'One of the best open-source fitness platforms providing rich exercise databases, muscle group taxonomies, workout schedulers, and REST APIs.',
      tech: 'Django · PostgreSQL · REST API · Docker',
      bestUse: 'Core workout engine and exercise taxonomies'
    },
    {
      name: '2. SparkyFitness',
      category: 'Self-Hosted Health Tracker',
      github: 'https://github.com/CodeWithCJ/SparkyFitness',
      description: 'Powerful self-hosted alternative to MyFitnessPal with calorie tracking, hydration logging, body metrics, and AI nutrition assistant.',
      tech: 'Python / Node · WebSockets · SQLite / Postgres',
      bestUse: 'Nutrition module & local health tracking reference'
    },
    {
      name: '3. Open Food Facts',
      category: 'Food & Nutrition Database',
      github: 'https://github.com/openfoodfacts',
      description: 'Massive collaborative open database of food products across the globe with barcodes, ingredients, calories, macros, and Nutri-Score.',
      tech: 'Open Data API · Barcode Registry · Crowd-Sourced',
      bestUse: 'AI food scanner backend and barcode lookups'
    },
    {
      name: '4. Habitica',
      category: 'Habit Tracking System',
      github: 'https://github.com/HabitRPG/habitica',
      description: 'World-famous open-source habit tracking RPG. Transforms daily habits, streaks, and routines into gamified quests with XP, coins, and rewards.',
      tech: 'Node.js · MongoDB / PostgreSQL · Vue.js',
      bestUse: 'Gamification engine, streak rewards, and motivation loops'
    },
    {
      name: '5. Open mHealth',
      category: 'Health Data Platform',
      github: 'https://github.com/openmhealth',
      description: 'Open digital health data platform standardizing clinical schemas, Apple HealthKit, and Google Fit / Health Connect integration.',
      tech: 'JSON Schema · HealthKit & Google Fit Connectors',
      bestUse: 'Health metrics normalization & wearable sync'
    },
    {
      name: '6. Workout.cool',
      category: 'Workout UI Library',
      github: 'https://github.com/Snouzy/workout-cool',
      description: 'Modern, fluid workout planning and routine UI components with clean mobile ergonomics and exercise visualizers.',
      tech: 'React / React Native · Tailwind CSS',
      bestUse: 'Exercise UI components & routine player inspiration'
    },
    {
      name: '7. AI Food Recognition',
      category: 'Computer Vision Calorie Classifier',
      github: 'https://github.com/topics/food-recognition',
      description: 'Open deep learning models trained on Food101 dataset with MobileNet architectures for real-time mobile meal classification.',
      tech: 'PyTorch / ONNX · MobileNetV3 · Food101',
      bestUse: 'Instant photo meal recognition & macro estimations'
    },
    {
      name: '8. Apache Superset',
      category: 'Health Analytics Dashboard',
      github: 'https://github.com/apache/superset',
      description: 'Enterprise-grade open-source data exploration and visual analytics platform for cohort tracking, daily active metrics, and user health trends.',
      tech: 'Python · React · SQL · Data Caching',
      bestUse: 'Internal health telemetry & user retention cohorts'
    },
    {
      name: '9. Novu',
      category: 'Notification & Retention System',
      github: 'https://github.com/novuhq/novu',
      description: 'Unified notification infrastructure for transactional and scheduled push notifications, in-app feeds, SMS, and reminder workflows.',
      tech: 'TypeScript · Redis · FCM / APNs',
      bestUse: 'Morning workout reminders, water nudges, streak alerts'
    },
    {
      name: '10. FastAPI',
      category: 'API Backend Framework',
      github: 'https://github.com/fastapi/fastapi',
      description: 'Ultra-fast, high-performance asynchronous Python web framework with auto OpenAPI documentation, native Pydantic validation, and seamless AI model serving.',
      tech: 'Python 3.11+ · Starlette · Pydantic · AsyncIO',
      bestUse: 'Main production API backend & AI inference endpoints'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-in fade-in duration-300">
      
      {/* Header & Meta Breadcrumb */}
      <div className="space-y-4 border-b border-[#282834] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('zero-to-production')}
            className="text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
          >
            <span>← Back to 0-to-1 Production Suite</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>In Development · Target Mid-Sep 2026</span>
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#1F1F2C] border border-white/10 text-zinc-300 text-xs font-mono font-bold">
              0-TO-1 PRODUCT FLAGSHIP
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
              Health & Fitness · AI Coaching · Habit Gamification
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            FitLife Pro <span className="text-emerald-400 font-mono text-2xl sm:text-3xl">(Health Journey Pro)</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-4xl leading-relaxed">
            A comprehensive, AI-powered mobile health and fitness ecosystem combining activity tracking, 
            smart nutrition intelligence, personalized workout programs, and RPG habit gamification. 
            Designed to bridge the gap between fragmented single-purpose fitness utilities and full digital health companions.
          </p>
        </div>

        {/* Live Replit Web App Launch Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-[#181C24] to-[#14141C] border border-emerald-500/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-black text-[10px] font-mono font-black uppercase">
                LIVE APP LINK
              </span>
              <span className="text-xs font-mono text-emerald-300 font-bold">
                health-journey-pro--rareprobplaycon.replit.app
              </span>
            </div>
            <p className="text-xs text-zinc-300">
              Data uploading & content ingestion phase currently underway. Production release scheduled for mid-September 2026.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://health-journey-pro--rareprobplaycon.replit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-black text-xs transition-all hover:scale-105 shadow-lg flex items-center gap-1.5"
            >
              <span>Open Live Replit Build</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Navigation Quick Bar */}
        <div className="p-3.5 rounded-2xl bg-[#171722] border border-[#2B2B3E] flex flex-wrap items-center justify-between gap-2 shadow-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono font-bold text-white uppercase">Section Quick Jump:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="#interactive-simulator"
              className="px-3 py-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
            >
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Interactive UI Prototype</span>
            </a>
            <a
              href="#prd-specs"
              className="px-3 py-1.5 rounded-xl bg-[#232332] hover:bg-[#2D2D3E] border border-white/10 text-zinc-200 text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>Full PRD & Business Plan</span>
            </a>
            <a
              href="#tech-architecture"
              className="px-3 py-1.5 rounded-xl bg-[#232332] hover:bg-[#2D2D3E] border border-white/10 text-zinc-200 text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
            >
              <Server className="w-3.5 h-3.5 text-zinc-400" />
              <span>10-Project Open-Source Tech Stack</span>
            </a>
            <a
              href="#monetization-growth"
              className="px-3 py-1.5 rounded-xl bg-[#232332] hover:bg-[#2D2D3E] border border-white/10 text-zinc-200 text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
            >
              <DollarSign className="w-3.5 h-3.5 text-zinc-400" />
              <span>Monetization & Growth</span>
            </a>
          </div>
        </div>

      </div>

      {/* SECTION 1: INTERACTIVE 5-SCREEN PROTOTYPE SIMULATOR */}
      <div id="interactive-simulator" className="space-y-6 scroll-mt-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-mono font-bold text-emerald-300 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>PRODUCTION UI FIDELITY (5 FIGMA / ANDROID SCREENS)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Live Interactive Mobile Prototype
            </h2>
          </div>
          <div className="text-xs font-mono text-zinc-400">
            Interactive: Click tabs, record steps/water, start timers & challenges
          </div>
        </div>

        {/* The 1:1 Simulator Component */}
        <div className="p-4 sm:p-8 rounded-3xl bg-[#14141E] border border-[#2B2B3E] shadow-2xl">
          <FitLifeProMockup />
        </div>
      </div>

      {/* SECTION 2: EXECUTIVE PRD & PRODUCT SPECIFICATION (From PDF 1) */}
      <div id="prd-specs" className="space-y-8 scroll-mt-24">
        <div className="border-b border-[#282834] pb-4 flex items-center justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-[11px] font-mono font-bold text-blue-300 uppercase">
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>EXECUTIVE PRD & BUSINESS STRATEGY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              FitLife Pro Product Requirements Document (PRD)
            </h2>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A1E29] to-[#12141C] border border-emerald-500/30 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-mono">Product Mission</h3>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Enable users across all fitness levels to sustainably improve their physical health, daily activity, and dietary habits through intelligent digital coaching, habit formation, and friction-free mobile logging.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1E1929] to-[#14121C] border border-purple-500/30 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-mono">Long-Term Vision</h3>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Build the definitive AI-powered health companion combining real-time wearable telemetry, computer vision nutrition intelligence, personalized workout synthesis, and gamified RPG retention loops into a unified health ecosystem.
            </p>
          </div>
        </div>

        {/* Target Audience & Market Drivers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Target Audience (Age 18-45) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#181824] border border-[#2B2B3E] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>Target Audience Demographics</span>
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                Age: 18 – 45
              </span>
            </div>

            <div className="space-y-2.5">
              {[
                { title: 'Fitness Beginners', desc: 'Seeking gentle, guided bodyweight routines with no gym intimidation' },
                { title: 'Gym Enthusiasts', desc: 'Tracking muscle hypertrophy, 1RM, and progressive overload metrics' },
                { title: 'Weight Management Users', desc: 'Managing calorie deficits, body fat percentage, and macro targets' },
                { title: 'Busy Professionals', desc: 'Needing quick 7–10 minute high-intensity desk stretching and home HIIT' },
                { title: 'Health-Conscious Individuals', desc: 'Monitoring hydration, resting heart rate, and daily step consistency' }
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#12121A] border border-white/5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">{item.title}</div>
                    <div className="text-[11px] text-zinc-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Opportunity & Competitor Differentiation */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-[#181824] border border-[#2B2B3E] space-y-4">
            <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Market Drivers & Competitive Advantage</span>
            </h3>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#12121A] border border-white/5 space-y-1">
                <span className="font-bold text-emerald-400 block font-mono">1. Wearable Proliferation</span>
                <p className="text-zinc-400 text-[11px]">Growing adoption of smartwatches, rings, and Health Connect sensors.</p>
              </div>
              <div className="p-3 rounded-xl bg-[#12121A] border border-white/5 space-y-1">
                <span className="font-bold text-emerald-400 block font-mono">2. AI-Driven Coaching</span>
                <p className="text-zinc-400 text-[11px]">Demand for dynamic workout adjustments without high personal trainer fees.</p>
              </div>
              <div className="p-3 rounded-xl bg-[#12121A] border border-white/5 space-y-1">
                <span className="font-bold text-emerald-400 block font-mono">3. Home Workout Culture</span>
                <p className="text-zinc-400 text-[11px]">Preference for flexible, no-equipment living room exercise routines.</p>
              </div>
              <div className="p-3 rounded-xl bg-[#12121A] border border-white/5 space-y-1">
                <span className="font-bold text-emerald-400 block font-mono">4. Mobile-First Ecosystem</span>
                <p className="text-zinc-400 text-[11px]">All-in-one health management accessible from a single smartphone app.</p>
              </div>
            </div>

            {/* Competitor Analysis Box */}
            <div className="p-4 rounded-xl bg-[#12121A] border border-[#2D2D3E] space-y-2">
              <span className="text-xs font-mono font-bold text-zinc-300 uppercase">
                Why FitLife Pro Wins vs Legacy Competitors:
              </span>
              <div className="grid grid-cols-3 gap-2 text-[11px] font-mono">
                <div className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <span className="text-red-400 block font-bold">MyFitnessPal</span>
                  <span className="text-zinc-400 text-[10px]">Nutrition only; heavy paywalls on basic barcode scanning.</span>
                </div>
                <div className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <span className="text-amber-400 block font-bold">Fitbit / Apple</span>
                  <span className="text-zinc-400 text-[10px]">Hardware-locked; weak gamification and workout builder.</span>
                </div>
                <div className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <span className="text-emerald-400 block font-bold">FitLife Pro</span>
                  <span className="text-zinc-300 text-[10px]">Unified AI meal scanner + wger exercises + Habitica RPG coin rewards!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Product Pillars (Health, Nutrition, Workouts, AI, Gamification) */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white tracking-tight">Core Product Pillars & Functional Modules</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Pillar 1: Health Tracking */}
            <div className="p-5 rounded-2xl bg-[#181824] border border-[#2B2B3E] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Health & Activity Tracking</h4>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Daily step counting (hardware sensor + Health Connect)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Interactive water tracker with visual plant growth</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Real-time calorie burn estimations & activity duration</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Body weight logging, BMI calculation, and annual trend curves</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Nutrition Tracking */}
            <div className="p-5 rounded-2xl bg-[#181824] border border-[#2B2B3E] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">AI Nutrition Intelligence</h4>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Camera AI photo meal recognition (Food101 / MobileNet)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Open Food Facts barcode lookup with 3M+ packaged items</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Macronutrient breakdown (Protein, Carbohydrates, Fats)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>AI meal suggestions and calorie deficit strategies</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Workout Programs */}
            <div className="p-5 rounded-2xl bg-[#181824] border border-[#2B2B3E] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Dumbbell className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Workout Programs & Engine</h4>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>28-Day Abs Core Challenge & 30-Day Weight Loss roadmaps</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Live countdown exercise runner with audio coaching</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Custom workout creator with focus area targeting</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Difficulty scaling (Sedentary, Lightly Active, Very Active)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk Mitigation Matrix (From PDF 1, Pages 10-11) */}
        <div className="p-6 rounded-3xl bg-[#181824] border border-[#2B2B3E] space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-bold text-white font-mono">Key Product Risk Points & Architectural Solutions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#12121A] border border-red-500/20 space-y-2">
              <div className="flex items-center gap-1.5 text-red-400 text-xs font-bold font-mono">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Risk 1: Medical Compliance</span>
              </div>
              <p className="text-xs text-zinc-300">
                Claiming direct clinical measurement of heart rate or blood pressure triggers strict FDA / CE medical device regulations.
              </p>
              <div className="pt-1 text-xs text-emerald-400 font-mono">
                <strong>Solution:</strong> Use manual logging & read-only sync via certified Apple HealthKit and Google Fit APIs.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#12121A] border border-amber-500/20 space-y-2">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold font-mono">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Risk 2: AI Vision Accuracy</span>
              </div>
              <p className="text-xs text-zinc-300">
                Single-angle meal photos can misclassify portion sizes and hidden sauces, leading to inaccurate calorie counts.
              </p>
              <div className="pt-1 text-xs text-emerald-400 font-mono">
                <strong>Solution:</strong> Implement a hybrid model with instant AI classification followed by 1-tap user portion confirmation.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#12121A] border border-blue-500/20 space-y-2">
              <div className="flex items-center gap-1.5 text-blue-400 text-xs font-bold font-mono">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Risk 3: Feature Scope Bloat</span>
              </div>
              <p className="text-xs text-zinc-300">
                Attempting to build gym logging, food vision, social feeds, and wearables simultaneously risks launch delays.
              </p>
              <div className="pt-1 text-xs text-emerald-400 font-mono">
                <strong>Solution:</strong> Phased rollout (MVP data uploading phase in Aug 2026, core release mid-Sept 2026).
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* SECTION 3: 10-PROJECT OPEN-SOURCE TECHNICAL ARCHITECTURE (From PDF 2 & PDF 1 page 13) */}
      <div id="tech-architecture" className="space-y-8 scroll-mt-24">
        <div className="border-b border-[#282834] pb-4 flex items-center justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-mono font-bold text-emerald-300 uppercase">
              <Server className="w-3.5 h-3.5 text-emerald-400" />
              <span>SYSTEM DESIGN & OPEN-SOURCE ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Best Open-Source Fitness Tech Stack (10 Projects)
            </h2>
          </div>
        </div>

        {/* Visual System Architecture Diagram (Page 13 of PDF 1) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#111118] border border-[#28283C] space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              FitLife Pro Production Architecture Pipeline
            </span>
            <span className="text-xs font-mono text-zinc-500">FastAPI + PostgreSQL + Microservices</span>
          </div>

          <div className="space-y-4 text-center">
            {/* Mobile App Layer */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-900/60 to-teal-900/60 border border-emerald-500/40 max-w-md mx-auto">
              <div className="text-xs font-mono font-bold text-emerald-300 uppercase">Mobile Client Layer</div>
              <div className="text-base font-black text-white">Flutter / React Native Mobile App</div>
              <div className="text-[11px] text-zinc-300 font-mono">Apple HealthKit · Google Health Connect · Camera ML</div>
            </div>

            <div className="text-zinc-500 font-mono text-xs">▼ HTTPS / WSS API Requests</div>

            {/* API Backend Layer */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/60 to-indigo-900/60 border border-blue-500/40 max-w-lg mx-auto">
              <div className="text-xs font-mono font-bold text-blue-300 uppercase">Main API Backend Gateway</div>
              <div className="text-base font-black text-white">FastAPI (Python 3.11 Asynchronous Core)</div>
              <div className="text-[11px] text-zinc-300 font-mono">JWT Auth · Rate Limiting · Auto OpenAPI · Pydantic Schemas</div>
            </div>

            <div className="text-zinc-500 font-mono text-xs">▼ Microservices & External Data Pipelines</div>

            {/* 5 Core Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-left">
              <div className="p-3 rounded-xl bg-[#181824] border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">1. Workout Engine</span>
                <span className="text-xs font-bold text-white">wger Exercise DB</span>
                <p className="text-[10px] text-zinc-400">Exercise taxonomies & muscle groups</p>
              </div>

              <div className="p-3 rounded-xl bg-[#181824] border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-emerald-400 font-bold block">2. Nutrition DB</span>
                <span className="text-xs font-bold text-white">Open Food Facts</span>
                <p className="text-[10px] text-zinc-400">3M+ barcode foods & macro data</p>
              </div>

              <div className="p-3 rounded-xl bg-[#181824] border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-purple-400 font-bold block">3. AI Services</span>
                <span className="text-xs font-bold text-white">Food101 Vision</span>
                <p className="text-[10px] text-zinc-400">MobileNet calorie & photo models</p>
              </div>

              <div className="p-3 rounded-xl bg-[#181824] border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-yellow-400 font-bold block">4. Gamification</span>
                <span className="text-xs font-bold text-white">Habitica Loops</span>
                <p className="text-[10px] text-zinc-400">Streaks, coin rewards & quests</p>
              </div>

              <div className="p-3 rounded-xl bg-[#181824] border border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-red-400 font-bold block">5. Notifications</span>
                <span className="text-xs font-bold text-white">Novu + FCM</span>
                <p className="text-[10px] text-zinc-400">Hydration nudges & streak alerts</p>
              </div>
            </div>

            <div className="text-zinc-500 font-mono text-xs">▼ Persistent Storage Layer</div>

            {/* Persistent Database */}
            <div className="p-4 rounded-2xl bg-[#1E1E2C] border border-white/10 max-w-md mx-auto">
              <div className="text-xs font-mono font-bold text-zinc-400 uppercase">Primary Relational Storage</div>
              <div className="text-base font-black text-white flex items-center justify-center gap-2">
                <Database className="w-4 h-4 text-emerald-400" />
                <span>PostgreSQL 16 + Redis Cache</span>
              </div>
            </div>
          </div>
        </div>

        {/* 10 Open Source Projects Interactive Catalog */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Detailed 10-Project Open-Source Stack Breakdown
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {OPEN_SOURCE_STACK.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#181824] border border-[#2D2D3E] hover:border-emerald-500/40 transition-all space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase">
                      {item.category}
                    </span>
                    <h4 className="text-base font-bold text-white font-mono">{item.name}</h4>
                  </div>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#222230] hover:bg-[#2C2C3E] text-zinc-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                  <span className="text-zinc-500">Tech: {item.tech}</span>
                  <span className="text-emerald-300 font-bold">Best Use: {item.bestUse}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 4: MONETIZATION & GROWTH STRATEGY (From PDF 1 Pages 7, 8, 12) */}
      <div id="monetization-growth" className="space-y-8 scroll-mt-24">
        <div className="border-b border-[#282834] pb-4 flex items-center justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-[11px] font-mono font-bold text-amber-300 uppercase">
              <DollarSign className="w-3.5 h-3.5 text-amber-400" />
              <span>COMMERCIAL VIABILITY & USER ACQUISITION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Monetization Model & Growth Engine
            </h2>
          </div>
        </div>

        {/* 4 Monetization Streams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#181824] border border-[#2D2D3E] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black">
              👑
            </div>
            <h4 className="text-base font-bold text-white">Premium VIP Subscription</h4>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>• Unlimited customized workout plans</li>
              <li>• Advanced body metric analytics</li>
              <li>• 24/7 AI conversational coaching</li>
              <li>• 100% Ad-free experience</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-[#181824] border border-[#2D2D3E] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-black">
              🎬
            </div>
            <h4 className="text-base font-bold text-white">Rewarded Ads & Economy</h4>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>• Watch 15s video to earn +60 Coins</li>
              <li>• Unlock temporary premium workouts</li>
              <li>• Bonus streak freezes</li>
              <li>• Optional non-intrusive incentives</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-[#181824] border border-[#2D2D3E] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-black">
              🛍️
            </div>
            <h4 className="text-base font-bold text-white">In-App Purchases (IAP)</h4>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>• Specialized 8-week challenge packs</li>
              <li>• 1-on-1 certified trainer reviews</li>
              <li>• Premium avatar gear & cosmetics</li>
              <li>• Nutrition meal prep ebooks</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-[#181824] border border-[#2D2D3E] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
              🤝
            </div>
            <h4 className="text-base font-bold text-white">B2B Brand Partnerships</h4>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>• Local gym chain memberships</li>
              <li>• Nutrition & protein powder brands</li>
              <li>• Smart fitness equipment affiliates</li>
              <li>• Corporate wellness programs</li>
            </ul>
          </div>
        </div>

        {/* Growth & Retention Mechanics (Page 12 of PDF 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#181824] border border-[#2B2B3E] space-y-3">
            <h4 className="text-base font-bold text-white font-mono flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>User Acquisition Channels</span>
            </h4>
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="p-2.5 rounded-xl bg-[#12121A] border border-white/5">
                <strong className="text-white">App Store Optimization (ASO):</strong> Targeting high-intent keywords (&quot;home abs workout&quot;, &quot;water tracker&quot;, &quot;calorie counter AI&quot;).
              </div>
              <div className="p-2.5 rounded-xl bg-[#12121A] border border-white/5">
                <strong className="text-white">Fitness Influencer Collaborations:</strong> Micro-influencer routines branded in app with exclusive coin codes.
              </div>
              <div className="p-2.5 rounded-xl bg-[#12121A] border border-white/5">
                <strong className="text-white">Referral Rewards:</strong> Invite a friend to complete a 7-day streak together for 1,000 bonus coins.
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#181824] border border-[#2B2B3E] space-y-3">
            <h4 className="text-base font-bold text-white font-mono flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>Retention & Habit Mechanics</span>
            </h4>
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="p-2.5 rounded-xl bg-[#12121A] border border-white/5">
                <strong className="text-white">Dynamic Smart Reminders:</strong> Contextual push notifications timed to user's usual workout window via Novu.
              </div>
              <div className="p-2.5 rounded-xl bg-[#12121A] border border-white/5">
                <strong className="text-white">Streak Protection & Coin Multipliers:</strong> 4+ day streaks award 1.5x coin multipliers to prevent churn.
              </div>
              <div className="p-2.5 rounded-xl bg-[#12121A] border border-white/5">
                <strong className="text-white">Weekly Health Progress Reports:</strong> Beautiful, shareable infographics on Sunday evening reviewing total kcal and steps.
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Navigation Bar */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#1E1E2C] to-[#14141E] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-bold text-white font-mono">FitLife Pro (Health Journey Pro) Case Study</div>
          <div className="text-xs text-zinc-400">
            0-to-1 Product Management · Architecture · Growth · Production Delivery
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('zero-to-production')}
            className="px-5 py-2.5 rounded-xl bg-[#282838] hover:bg-[#343448] text-white text-xs font-mono font-bold transition-all"
          >
            ← 0-to-Production Suite
          </button>

          <a
            href="https://health-journey-pro--rareprobplaycon.replit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-black text-xs font-mono font-black transition-all shadow-lg flex items-center gap-1.5"
          >
            <span>Open Replit App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </div>
  );
};
