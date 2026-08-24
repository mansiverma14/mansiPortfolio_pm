import React, { useState, useEffect } from 'react';
import {
  Flame,
  Droplets,
  Heart,
  Footprints,
  Trophy,
  Crown,
  Play,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  Plus,
  Minus,
  Sparkles,
  Zap,
  Activity,
  Calendar,
  Layers,
  ArrowRight,
  Volume2,
  VolumeX,
  X,
  Settings,
  Edit3,
  Dumbbell,
  Target,
  Clock,
  Share2,
  ExternalLink,
  ChevronLeft
} from 'lucide-react';

export const FitLifeProMockup: React.FC = () => {
  // Navigation inside the mock phone
  const [activeScreen, setActiveScreen] = useState<'home' | 'reports' | 'plan' | 'challenge' | 'workout-detail' | 'workout-active'>('home');
  const [activeBottomTab, setActiveBottomTab] = useState<'home' | 'reports' | 'plan' | 'profile'>('home');
  
  // Interactive state on Home
  const [filterPill, setFilterPill] = useState<'Keep Fit' | 'Build Muscle' | 'Burn Fat'>('Keep Fit');
  const [stepsCount, setStepsCount] = useState<number>(236);
  const [waterOz, setWaterOz] = useState<number>(18);
  const [waterCups, setWaterCups] = useState<number>(3);
  const [heartRate, setHeartRate] = useState<number>(91);
  const [isMeasuringHeartRate, setIsMeasuringHeartRate] = useState<boolean>(false);
  const [coins, setCoins] = useState<number>(3564);
  const [streakDays, setStreakDays] = useState<number>(4);

  // Interactive state on Reports / Plan
  const [reportSubTab, setReportSubTab] = useState<'report' | 'plan'>('report');
  const [weightCurrent, setWeightCurrent] = useState<number>(82.6);
  const [weightGoal] = useState<number>(65.0);
  const [dailyCalories, setDailyCalories] = useState<number>(0);
  const [dailyMinutes, setDailyMinutes] = useState<number>(0);

  // Challenge modal state
  const [challengeLevel, setChallengeLevel] = useState<'Sedentary' | 'Lightly active' | 'Very active'>('Very active');
  const [showLevelModal, setShowLevelModal] = useState<boolean>(false);
  const [activeChallengeDay, setActiveChallengeDay] = useState<number>(1);
  const [selectedChallengeWeek, setSelectedChallengeWeek] = useState<number>(1);

  // Active workout runner state
  const [workoutSeconds, setWorkoutSeconds] = useState<number>(6);
  const [isWorkoutRunning, setIsWorkoutRunning] = useState<boolean>(false);
  const [isSoundMuted, setIsSoundMuted] = useState<boolean>(false);
  const [showExerciseInfoModal, setShowExerciseInfoModal] = useState<boolean>(false);

  // Timer effect for workout runner
  useEffect(() => {
    let interval: any;
    if (isWorkoutRunning && workoutSeconds > 0) {
      interval = setInterval(() => {
        setWorkoutSeconds((prev) => prev - 1);
      }, 1000);
    } else if (workoutSeconds === 0 && isWorkoutRunning) {
      setIsWorkoutRunning(false);
      setCoins((prev) => prev + 60);
    }
    return () => clearInterval(interval);
  }, [isWorkoutRunning, workoutSeconds]);

  // Heart rate measurement simulator
  const triggerHeartRateMeasure = () => {
    setIsMeasuringHeartRate(true);
    setTimeout(() => {
      const simulatedBpm = Math.floor(Math.random() * (105 - 72 + 1)) + 72;
      setHeartRate(simulatedBpm);
      setIsMeasuringHeartRate(false);
    }, 1800);
  };

  const switchTab = (tab: 'home' | 'reports' | 'plan' | 'profile') => {
    setActiveBottomTab(tab);
    if (tab === 'home') setActiveScreen('home');
    if (tab === 'reports') {
      setReportSubTab('report');
      setActiveScreen('reports');
    }
    if (tab === 'plan') {
      setReportSubTab('plan');
      setActiveScreen('plan');
    }
  };

  return (
    <div className="flex flex-col xl:flex-row items-start justify-center gap-8 py-4">
      {/* Screen Selector Controls on Desktop */}
      <div className="w-full xl:w-72 space-y-4 order-2 xl:order-1">
        <div className="p-4 rounded-2xl bg-[#181822] border border-[#2B2B3E] space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Interactive Screen Tour
            </span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Rebuilt 1:1 from the Figma / Android production UI specifications:
          </p>

          <div className="space-y-1.5">
            <button
              onClick={() => {
                setActiveScreen('home');
                setActiveBottomTab('home');
              }}
              className={`w-full px-3 py-2 rounded-xl text-left text-xs font-mono font-bold transition-all flex items-center justify-between ${
                activeScreen === 'home'
                  ? 'bg-emerald-500 text-black shadow-md'
                  : 'bg-[#222230] text-zinc-300 hover:bg-[#2C2C3E]'
              }`}
            >
              <span>1. Home Activity Dashboard</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                setActiveScreen('reports');
                setActiveBottomTab('reports');
                setReportSubTab('report');
              }}
              className={`w-full px-3 py-2 rounded-xl text-left text-xs font-mono font-bold transition-all flex items-center justify-between ${
                activeScreen === 'reports'
                  ? 'bg-emerald-500 text-black shadow-md'
                  : 'bg-[#222230] text-zinc-300 hover:bg-[#2C2C3E]'
              }`}
            >
              <span>2. Reports & Metrics Hub</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                setActiveScreen('plan');
                setActiveBottomTab('plan');
                setReportSubTab('plan');
              }}
              className={`w-full px-3 py-2 rounded-xl text-left text-xs font-mono font-bold transition-all flex items-center justify-between ${
                activeScreen === 'plan'
                  ? 'bg-emerald-500 text-black shadow-md'
                  : 'bg-[#222230] text-zinc-300 hover:bg-[#2C2C3E]'
              }`}
            >
              <span>3. 30-Day Plan & Creator</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveScreen('challenge')}
              className={`w-full px-3 py-2 rounded-xl text-left text-xs font-mono font-bold transition-all flex items-center justify-between ${
                activeScreen === 'challenge'
                  ? 'bg-emerald-500 text-black shadow-md'
                  : 'bg-[#222230] text-zinc-300 hover:bg-[#2C2C3E]'
              }`}
            >
              <span>4. Abs Core 28-Day Challenge</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                setActiveScreen('workout-detail');
                setIsWorkoutRunning(false);
                setWorkoutSeconds(6);
              }}
              className={`w-full px-3 py-2 rounded-xl text-left text-xs font-mono font-bold transition-all flex items-center justify-between ${
                activeScreen === 'workout-detail' || activeScreen === 'workout-active'
                  ? 'bg-emerald-500 text-black shadow-md'
                  : 'bg-[#222230] text-zinc-300 hover:bg-[#2C2C3E]'
              }`}
            >
              <span>5. Live Workout & Exercise Runner</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Live Replit Web App Link Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-[#181822] to-[#121218] border border-emerald-500/40 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase">Live Web Prototype</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
              Replit App
            </span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Directly test the full web build hosted on Replit:
          </p>
          <a
            href="https://health-journey-pro--rareprobplaycon.replit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-black font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg"
          >
            <span>Open Replit Live Web App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <div className="text-[10px] font-mono text-zinc-500 text-center">
            Status: Data Uploading · Production Target: Mid-Sep 2026
          </div>
        </div>
      </div>

      {/* Center Phone Simulator Container */}
      <div className="order-1 xl:order-2 flex justify-center w-full max-w-[390px]">
        <div className="w-full bg-[#F5F7FA] text-zinc-900 border-[8px] border-[#22222E] rounded-[3rem] shadow-2xl overflow-hidden relative min-h-[760px] flex flex-col font-sans">
          
          {/* Top Notch & Phone Status Bar */}
          <div className="bg-[#F5F7FA] pt-3 pb-1 px-6 flex items-center justify-between text-xs font-semibold text-zinc-600 shrink-0">
            <span>9:41</span>
            <div className="w-20 h-4 bg-zinc-900 rounded-full mx-auto" />
            <div className="flex items-center gap-1 text-[10px]">
              <span>5G</span>
              <div className="w-4 h-2.5 border border-zinc-700 rounded-sm p-0.5 flex items-center">
                <div className="w-full h-full bg-zinc-900 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* MAIN SCROLLABLE APP BODY */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 pb-20 select-none">

            {/* SCREEN 1: HOME DASHBOARD (Screenshot 1) */}
            {activeScreen === 'home' && (
              <div className="space-y-4">
                {/* Greeting & Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-zinc-900">Hello, </span>
                    <span className="text-xl font-extrabold text-emerald-600">Mansi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold font-mono shadow-xs">
                      <span className="text-amber-500 font-black">★</span>
                      <span>{coins}</span>
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-orange-500 text-white text-[10px] font-extrabold font-mono uppercase tracking-wider shadow-xs">
                      👑 PRO
                    </div>
                  </div>
                </div>

                {/* Weekly Goal Tracker */}
                <div className="p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-zinc-800">Weekly Goal</span>
                    <div className="flex items-center gap-1 font-mono font-bold text-emerald-600">
                      <span>0/4</span>
                      <Edit3 className="w-3 h-3 text-zinc-400" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-center">
                    {[
                      { day: 'M', date: 9, active: true },
                      { day: 'T', date: 10, circled: true },
                      { day: 'W', date: 11 },
                      { day: 'T', date: 12, circled: true },
                      { day: 'F', date: 13 },
                      { day: 'S', date: 14, circled: true },
                      { day: 'S', date: 15 }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-1">
                        <span className="text-[11px] font-semibold text-zinc-400">{item.day}</span>
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                            item.active
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : item.circled
                              ? 'border border-dashed border-emerald-400 text-zinc-700'
                              : 'text-zinc-600'
                          }`}
                        >
                          {item.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Hero Banner (Lower Body Cardio) */}
                <div
                  onClick={() => setActiveScreen('challenge')}
                  className="p-4 rounded-3xl bg-gradient-to-r from-amber-400 to-amber-500 text-zinc-900 shadow-md relative overflow-hidden cursor-pointer hover:scale-[1.01] transition-all"
                >
                  <div className="absolute -right-2 top-0 bottom-0 w-36 opacity-90 pointer-events-none flex items-center justify-end pr-2">
                    <span className="text-6xl">🏋️‍♀️</span>
                  </div>
                  <div className="space-y-1 relative z-10 max-w-[65%]">
                    <span className="text-[11px] font-bold text-amber-900 uppercase">Progress</span>
                    <h3 className="text-lg font-black text-zinc-900 tracking-tight leading-tight">
                      Lower Body
                    </h3>
                    <p className="text-xs text-amber-950 font-medium">Cardio · 10 mins</p>
                    <div className="pt-2 flex items-center gap-2">
                      <div className="px-3 py-1 rounded-xl bg-zinc-900 text-white text-xs font-mono font-bold flex items-center gap-1">
                        <span>543 CALORIES</span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white/40 flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-900" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white text-zinc-900 text-[10px] font-black font-mono shadow-xs">
                    64%
                  </div>
                </div>

                {/* Featured Workout Card: Only 4 Moves for Abs */}
                <div
                  onClick={() => setActiveScreen('workout-detail')}
                  className="p-4 rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 text-white shadow-md relative overflow-hidden cursor-pointer hover:scale-[1.01] transition-all"
                >
                  <div className="space-y-1 max-w-[80%]">
                    <h4 className="text-base font-extrabold text-white">Only 4 Moves for Abs</h4>
                    <p className="text-xs text-zinc-300 leading-snug">
                      4 simple exercises only! Burn belly fat and firm your abs. Get a flat belly fast!
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Recommended For You Section */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-extrabold text-zinc-800">Recommended For You</h4>
                  </div>
                  {/* Category Pills */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {(['Keep Fit', 'Build Muscle', 'Burn Fat'] as const).map((pill) => (
                      <button
                        key={pill}
                        onClick={() => setFilterPill(pill)}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                          filterPill === pill
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-400'
                            : 'bg-zinc-200/70 text-zinc-600 hover:bg-zinc-200'
                        }`}
                      >
                        {pill}
                      </button>
                    ))}
                  </div>

                  {/* List of Recommended Workout Cards */}
                  <div className="space-y-2">
                    {[
                      { title: 'Sleepy Time Stretching', time: '8 min', level: 'Beginner', emoji: '🧘‍♀️' },
                      { title: 'Back Stretching 7 Min', time: '7 min', level: 'Beginner', emoji: '🤸‍♀️' },
                      { title: 'Knee Pain Relief', time: '7 min', level: 'Beginner', emoji: '🏃‍♀️' }
                    ].map((w, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveScreen('workout-detail')}
                        className="p-3 rounded-2xl bg-white border border-zinc-200/70 shadow-xs flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center text-xl">
                            {w.emoji}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-zinc-900">{w.title}</div>
                            <div className="text-[11px] text-zinc-500">{w.time} · {w.level}</div>
                          </div>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-zinc-900 text-white flex items-center justify-center">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Health Tracking Widgets (Steps, Water, Heart Rate) */}
                <div className="space-y-2.5 pt-1">
                  {/* Step Tracker */}
                  <div className="p-3.5 rounded-2xl bg-purple-200/60 border border-purple-300/60 text-purple-950 space-y-1 relative overflow-hidden">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <div className="flex items-center gap-1">
                        <span>Steps</span>
                        <Edit3 className="w-3 h-3 text-purple-700" />
                      </div>
                      <Footprints className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black font-mono">{stepsCount}</span>
                      <span className="text-xs font-bold text-purple-700">/5000 Steps</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/70 overflow-hidden mt-1">
                      <div
                        className="h-full bg-purple-600 rounded-full transition-all duration-300"
                        style={{ width: `${(stepsCount / 5000) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Water Tracker with Plant Growth Visual */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-300 to-sky-200 text-sky-950 space-y-2 relative overflow-hidden">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <div className="flex items-center gap-1">
                        <span>Water Tracker</span>
                        <Edit3 className="w-3 h-3 text-sky-700" />
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-black font-mono">{waterOz}</span>
                      <span className="text-xs font-bold text-sky-800">/ 24 fl oz</span>
                    </div>
                    {/* Water cups tap bar */}
                    <div className="flex items-center gap-1.5 pt-1">
                      {[1, 2, 3, 4, 5].map((cup) => (
                        <button
                          key={cup}
                          onClick={() => setWaterOz((prev) => Math.min(32, prev + 6))}
                          className="w-6 h-6 rounded-md bg-white/60 hover:bg-white text-sky-800 text-xs font-bold flex items-center justify-center shadow-2xs"
                        >
                          +
                        </button>
                      ))}
                    </div>
                    {/* Plant graphic */}
                    <div className="absolute right-2 bottom-1 text-4xl">
                      🌱
                    </div>
                  </div>

                  {/* Heart Rate Widget */}
                  <div className="p-3.5 rounded-2xl bg-[#1E1F2B] text-white space-y-2 shadow-sm">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-zinc-300">Heart Rate</span>
                      <div className="flex items-center gap-1 text-[10px] text-zinc-400">
                        <span>4:10 PM</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full border-4 border-emerald-400 border-t-transparent flex items-center justify-center">
                          <span className="text-xs font-mono font-black">{heartRate}</span>
                        </div>
                        <div>
                          <div className="text-[10px] font-mono text-zinc-400">BPM</div>
                          <div className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>Normal</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={triggerHeartRateMeasure}
                        disabled={isMeasuringHeartRate}
                        className="px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold font-mono transition-all border border-zinc-700"
                      >
                        {isMeasuringHeartRate ? 'Measuring...' : 'MEASURE'}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* SCREEN 2: REPORTS & PLAN VIEW (Screenshot 2) */}
            {activeScreen === 'reports' && (
              <div className="space-y-4">
                {/* Sub Tab Switcher: Report vs Plan */}
                <div className="flex border-b border-zinc-200">
                  <button
                    onClick={() => setReportSubTab('report')}
                    className={`pb-2 px-4 text-sm font-bold border-b-2 transition-all ${
                      reportSubTab === 'report'
                        ? 'border-emerald-600 text-emerald-700'
                        : 'border-transparent text-zinc-400'
                    }`}
                  >
                    Report
                  </button>
                  <button
                    onClick={() => {
                      setReportSubTab('plan');
                      setActiveScreen('plan');
                    }}
                    className={`pb-2 px-4 text-sm font-bold border-b-2 transition-all ${
                      reportSubTab === 'plan'
                        ? 'border-emerald-600 text-emerald-700'
                        : 'border-transparent text-zinc-400'
                    }`}
                  >
                    Plan
                  </button>
                </div>

                {/* Top Metrics Row */}
                <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-2xl bg-white border border-zinc-200/80 shadow-xs">
                  <div>
                    <div className="text-xl font-black font-mono text-zinc-900">0</div>
                    <div className="text-[10px] text-zinc-400 font-bold uppercase">Workouts</div>
                  </div>
                  <div>
                    <div className="text-xl font-black font-mono text-zinc-900">0.0</div>
                    <div className="text-[10px] text-zinc-400 font-bold uppercase">Kcal</div>
                  </div>
                  <div>
                    <div className="text-xl font-black font-mono text-zinc-900">0</div>
                    <div className="text-[10px] text-zinc-400 font-bold uppercase">Minutes</div>
                  </div>
                </div>

                {/* History Row */}
                <div className="p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-zinc-800">History</span>
                    <span className="text-[11px] font-bold text-emerald-600">All records</span>
                  </div>
                  <div className="flex items-center justify-between text-center pt-1">
                    {[
                      { day: 'M', date: 9, active: true },
                      { day: 'T', date: 10 },
                      { day: 'W', date: 11 },
                      { day: 'T', date: 12 },
                      { day: 'F', date: 13 },
                      { day: 'S', date: 14 },
                      { day: 'S', date: 15 }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-1">
                        <span className="text-[10px] text-zinc-400">{item.day}</span>
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            item.active ? 'bg-emerald-600 text-white' : 'text-zinc-600'
                          }`}
                        >
                          {item.date}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="text-amber-500 font-bold">★</span>
                      <span className="text-zinc-500">Coins:</span>
                      <span className="font-bold text-zinc-800">{coins}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span>🔥</span>
                      <span className="text-zinc-500">Day Streak:</span>
                      <span className="font-bold text-orange-600">{streakDays}</span>
                    </div>
                  </div>
                </div>

                {/* Daily Goal Gauge Card */}
                <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-zinc-900">Today</div>
                      <div className="text-[10px] text-zinc-400 font-mono">Mar 10, 2026</div>
                    </div>
                    <Settings className="w-4 h-4 text-zinc-400" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div>
                        <div className="text-[11px] text-zinc-500 flex items-center gap-1">
                          <span>Calories</span>
                          <Edit3 className="w-2.5 h-2.5" />
                        </div>
                        <div className="text-sm font-black font-mono text-amber-500">
                          0.0 <span className="text-[10px] text-zinc-400">/200 kcal</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] text-zinc-500 flex items-center gap-1">
                          <span>Duration</span>
                          <Edit3 className="w-2.5 h-2.5" />
                        </div>
                        <div className="text-sm font-black font-mono text-pink-500">
                          0 <span className="text-[10px] text-zinc-400">/30 min</span>
                        </div>
                      </div>
                    </div>

                    {/* Concentric Circle Target */}
                    <div className="w-16 h-16 rounded-full border-4 border-amber-300 flex items-center justify-center p-1.5">
                      <div className="w-full h-full rounded-full border-4 border-pink-300 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-zinc-400">0%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Radial & Water Split Cards */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Step Radial */}
                  <div className="p-3.5 rounded-2xl bg-purple-200/50 border border-purple-300/40 text-purple-950 space-y-2 text-center">
                    <span className="text-xs font-bold block text-left">Step</span>
                    <div className="w-16 h-16 rounded-full border-4 border-purple-500 border-t-transparent mx-auto flex items-center justify-center flex-col">
                      <Footprints className="w-4 h-4 text-purple-700" />
                      <span className="text-xs font-black font-mono">863</span>
                    </div>
                    <div className="text-[10px] text-purple-700 font-mono">/3000 Steps</div>
                    <button className="w-full py-1 rounded-lg bg-purple-300/60 text-purple-900 text-[10px] font-bold">
                      Detail
                    </button>
                  </div>

                  {/* Water Cups Tracker */}
                  <div className="p-3.5 rounded-2xl bg-blue-200/50 border border-blue-300/40 text-sky-950 space-y-2 text-center">
                    <span className="text-xs font-bold block text-left">Water</span>
                    <div className="w-16 h-16 rounded-full border-4 border-sky-500 border-t-transparent mx-auto flex items-center justify-center flex-col">
                      <Droplets className="w-4 h-4 text-sky-700" />
                      <span className="text-xs font-black font-mono">{waterCups}</span>
                    </div>
                    <div className="text-[10px] text-sky-700 font-mono">/7 Cups</div>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => setWaterCups((prev) => Math.max(0, prev - 1))}
                        className="w-6 h-6 rounded-md bg-white text-sky-900 text-xs font-bold shadow-xs"
                      >
                        -
                      </button>
                      <button
                        onClick={() => setWaterCups((prev) => Math.min(10, prev + 1))}
                        className="w-6 h-6 rounded-md bg-zinc-900 text-white text-xs font-bold shadow-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Weight Tracker & Goal */}
                <div className="p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-900">Weight (kg)</span>
                    <button className="w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center text-xs">
                      +
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-zinc-400 block">Current</span>
                      <span className="font-extrabold text-emerald-600 text-sm">{weightCurrent}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 block">Goal</span>
                      <span className="font-extrabold text-emerald-600 text-sm">{weightGoal}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 block">Annual Avg</span>
                      <span className="font-extrabold text-emerald-600 text-sm">80.2</span>
                    </div>
                  </div>
                  {/* Subtle graph placeholder */}
                  <div className="h-12 w-full bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center text-[10px] text-zinc-400 font-mono">
                    Weight Trend Graph (Syncing with HealthKit)
                  </div>
                </div>

                {/* BMI Gauge */}
                <div className="p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-900">BMI</span>
                    <button className="w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center text-xs">
                      <Edit3 className="w-2.5 h-2.5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-black font-mono text-zinc-900">27.5</div>
                    <div className="text-xs font-bold text-amber-500 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>Overweight</span>
                    </div>
                  </div>
                  {/* BMI Spectrum Bar */}
                  <div className="h-2 w-full rounded-full bg-gradient-to-r from-blue-400 via-emerald-400 via-amber-400 to-red-500 relative">
                    <div
                      className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-white absolute -top-0.5 shadow-xs"
                      style={{ left: '60%' }}
                    />
                  </div>
                  <div className="flex justify-between text-[8px] font-mono text-zinc-400">
                    <span>15</span>
                    <span>18.5</span>
                    <span>25</span>
                    <span>30</span>
                    <span>40</span>
                  </div>
                </div>

              </div>
            )}

            {/* SCREEN 3: 30-DAY PLAN & WORKOUT CREATOR (Screenshot 3) */}
            {activeScreen === 'plan' && (
              <div className="space-y-4">
                {/* Lose Weight in 30 Days Hero Banner */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-orange-100 to-rose-100 border border-orange-200 text-zinc-900 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black uppercase text-zinc-900">Lose Weight in 30 Days</h4>
                    <button className="px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-[10px] font-bold">
                      Adjust
                    </button>
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono">3.0% Finished</div>
                  <div className="w-full h-1.5 rounded-full bg-zinc-200 overflow-hidden">
                    <div className="h-full bg-orange-500 w-[10%]" />
                  </div>
                </div>

                {/* Stage 1 Breakdown */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-zinc-800">
                    <span>Stage 1 · Start Strong</span>
                    <span className="text-emerald-600 font-mono">25%</span>
                  </div>

                  {/* Day 1 Active Card */}
                  <div
                    onClick={() => setActiveScreen('challenge')}
                    className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md cursor-pointer hover:scale-[1.01] transition-all space-y-2 relative overflow-hidden"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="text-sm font-black">Day 1</h5>
                        <p className="text-[11px] text-emerald-100">7 min · 61.5 kcal</p>
                      </div>
                      <span className="text-3xl">🏃‍♀️</span>
                    </div>
                    <button className="px-4 py-1.5 rounded-full bg-white text-emerald-800 text-xs font-black flex items-center gap-1.5 shadow-sm">
                      <span>START</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Day 2 Upcoming */}
                  <div className="p-3 rounded-2xl bg-white border border-zinc-200/80 flex items-center justify-between">
                    <div>
                      <h6 className="text-xs font-bold text-zinc-800">Day 2</h6>
                      <p className="text-[10px] text-zinc-400">7 min · 61.5 kcal</p>
                    </div>
                    <span className="text-2xl opacity-60">💪</span>
                  </div>

                  {/* Day 3 Upcoming */}
                  <div className="p-3 rounded-2xl bg-white border border-zinc-200/80 flex items-center justify-between">
                    <div>
                      <h6 className="text-xs font-bold text-zinc-800">Day 3</h6>
                      <p className="text-[10px] text-zinc-400">7 min · 61.5 kcal</p>
                    </div>
                    <span className="text-2xl opacity-60">🧘‍♀️</span>
                  </div>
                </div>

                {/* Custom Workout Creator Section */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-purple-200 mx-auto flex items-center justify-center text-lg">
                    👩‍💼
                  </div>
                  <h5 className="text-xs font-extrabold text-purple-950">Custom Workout Creator</h5>
                  <p className="text-[11px] text-purple-700 leading-snug">
                    You can customize your own training plans as you need
                  </p>
                  <button className="px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1 mx-auto shadow-xs">
                    <Plus className="w-3 h-3" />
                    <span>Create</span>
                  </button>
                </div>

                {/* Focus Area Grid */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-bold text-zinc-800">Focus Area</span>
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold text-zinc-700">
                    {[
                      { title: 'Full Body', emoji: '🧍‍♀️' },
                      { title: 'Abs', emoji: '👙' },
                      { title: 'Buttocks', emoji: '🍑' },
                      { title: 'Back', emoji: '🧘' }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-xl bg-white border border-zinc-200 flex flex-col items-center gap-1 cursor-pointer hover:border-emerald-400 transition-all"
                      >
                        <span className="text-xl">{item.emoji}</span>
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 4: 28-DAY ABS CORE CHALLENGE (Screenshot 4) */}
            {activeScreen === 'challenge' && (
              <div className="space-y-4">
                {/* Back button & Header */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setActiveScreen('home')}
                    className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shadow-2xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-mono font-bold">
                      <span>★</span>
                      <span>{coins}</span>
                    </div>
                    <button
                      onClick={() => setShowLevelModal(true)}
                      className="px-2.5 py-0.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold"
                    >
                      {challengeLevel} ▾
                    </button>
                  </div>
                </div>

                {/* Hero Challenge Banner */}
                <div className="p-4 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white shadow-md relative overflow-hidden space-y-2">
                  <div className="text-[10px] font-mono font-bold text-amber-400 uppercase">
                    28 Days Left · 20%
                  </div>
                  <h3 className="text-base font-black tracking-tight text-white uppercase">
                    ABS Core Challenge
                  </h3>
                  <div className="w-full h-1.5 rounded-full bg-zinc-700 overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[20%]" />
                  </div>
                </div>

                {/* Week 1 Calendar Breakdown */}
                <div className="p-3.5 rounded-2xl bg-white border border-zinc-200 shadow-xs space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <div className="flex items-center gap-1.5 text-zinc-900">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Week 1</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Earned 1000 coins
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">Completed: 1 / 7</span>
                    <span className="text-amber-500 font-bold">Today: +60 🪙</span>
                  </div>

                  {/* 7 Days bubbles */}
                  <div className="flex items-center justify-between">
                    {[1, 2, 3, 4, 5, 6, 7].map((dayNum) => (
                      <button
                        key={dayNum}
                        onClick={() => setActiveChallengeDay(dayNum)}
                        className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                          dayNum === 1
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : activeChallengeDay === dayNum
                            ? 'border-2 border-emerald-500 text-emerald-600 bg-emerald-50'
                            : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                        }`}
                      >
                        {dayNum === 7 ? '🏆' : dayNum}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Day 1 Workout Routine List */}
                <div className="p-3.5 rounded-2xl bg-white border border-zinc-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black text-zinc-900">DAY {activeChallengeDay}</h4>
                    <span className="text-[10px] text-emerald-600 font-bold">Edit Routine</span>
                  </div>

                  {/* Summary badges */}
                  <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                    <div className="p-2 rounded-xl bg-blue-100 text-blue-800 font-bold">
                      8 min <span className="text-[10px] block text-blue-600">Duration</span>
                    </div>
                    <div className="p-2 rounded-xl bg-purple-100 text-purple-800 font-bold">
                      10 <span className="text-[10px] block text-purple-600">Exercises</span>
                    </div>
                  </div>

                  {/* Exercises Checklist */}
                  <div className="space-y-1.5">
                    {[
                      { name: 'Jumping Jacks', time: '00:30' },
                      { name: 'Abdominal Crunches', time: '01:15' },
                      { name: 'Russian Twist', time: '02:45' },
                      { name: 'Mountain Climber', time: '03:10' }
                    ].map((ex, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-400 font-mono">☰</span>
                          <span className="font-bold text-zinc-800">{ex.name}</span>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-500">{ex.time}</span>
                      </div>
                    ))}
                  </div>

                  {/* BIG START CTA */}
                  <button
                    onClick={() => {
                      setActiveScreen('workout-active');
                      setIsWorkoutRunning(true);
                      setWorkoutSeconds(6);
                    }}
                    className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs font-mono tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>START WORKOUT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Difficulty Selection Modal */}
                {showLevelModal && (
                  <div className="p-3.5 rounded-2xl bg-zinc-900 text-white border border-zinc-700 space-y-2 shadow-xl animate-in fade-in">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span>Choose Challenge Level</span>
                      <button onClick={() => setShowLevelModal(false)} className="text-zinc-400">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    {(['Sedentary', 'Lightly active', 'Very active'] as const).map((lvl) => (
                      <div
                        key={lvl}
                        onClick={() => {
                          setChallengeLevel(lvl);
                          setShowLevelModal(false);
                        }}
                        className={`p-2 rounded-xl border flex items-center justify-between text-xs cursor-pointer ${
                          challengeLevel === lvl
                            ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                            : 'bg-zinc-800 border-zinc-700 text-zinc-300'
                        }`}
                      >
                        <span>{lvl}</span>
                        {challengeLevel === lvl && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* SCREEN 5: WORKOUT DETAIL (Screenshot 5 left) */}
            {activeScreen === 'workout-detail' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setActiveScreen('home')}
                    className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shadow-2xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-bold text-zinc-800">Workout Preview</span>
                  <div className="w-7" />
                </div>

                {/* Hero Header */}
                <div className="p-4 rounded-3xl bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400 text-zinc-900 shadow-md space-y-2">
                  <h3 className="text-lg font-black tracking-tight">Sleepy Time Stretching</h3>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/80 text-zinc-900">Beginner</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/80 text-zinc-900">8 min</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/80 text-zinc-900">10 Exercises</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-zinc-200 space-y-1.5">
                  <span className="text-xs font-bold text-zinc-900">Introduction</span>
                  <p className="text-[11px] text-zinc-600 leading-relaxed">
                    Designed to release joint tension, lower cortisol levels, and relax the nervous system for deep restorative sleep.
                  </p>
                </div>

                {/* Exercise list */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold text-zinc-900">
                    <span>Exercises</span>
                    <span className="text-emerald-600 text-[10px]">10 items</span>
                  </div>
                  {[
                    { name: 'Jumping Jacks (Warmup)', duration: '00:30' },
                    { name: 'Hamstring Stretch', duration: '00:45' },
                    { name: 'Cat Cow Pose', duration: '01:00' },
                    { name: 'Childs Pose Deep Breathing', duration: '01:30' }
                  ].map((ex, i) => (
                    <div
                      key={i}
                      onClick={() => setShowExerciseInfoModal(true)}
                      className="p-2.5 rounded-xl bg-white border border-zinc-200/80 flex items-center justify-between text-xs cursor-pointer hover:bg-zinc-50"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">🧘</span>
                        <span className="font-bold text-zinc-800">{ex.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500">{ex.duration}</span>
                    </div>
                  ))}
                </div>

                {/* START BUTTON */}
                <button
                  onClick={() => {
                    setActiveScreen('workout-active');
                    setIsWorkoutRunning(true);
                    setWorkoutSeconds(6);
                  }}
                  className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs font-mono tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>START WORKOUT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* SCREEN 6: LIVE ACTIVE WORKOUT RUNNER (Screenshot 5 middle & right) */}
            {activeScreen === 'workout-active' && (
              <div className="space-y-4 text-center">
                {/* Active Header */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      setIsWorkoutRunning(false);
                      setActiveScreen('challenge');
                    }}
                    className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-bold text-zinc-800">Exercise Active</span>
                  <button
                    onClick={() => setIsSoundMuted(!isSoundMuted)}
                    className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700"
                  >
                    {isSoundMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Exercise Animation Card */}
                <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-md flex flex-col items-center justify-center space-y-2">
                  <div className="text-6xl animate-bounce">
                    🏃‍♂️
                  </div>
                  <div className="text-xs font-bold text-zinc-500">Pose Guidance</div>
                </div>

                {/* Status & Name */}
                <div className="space-y-1">
                  <div className="text-base font-black text-emerald-600">
                    {workoutSeconds > 0 ? 'Ready To Go!' : 'Set Complete! 🎉'}
                  </div>
                  <div className="text-xs font-extrabold text-zinc-900 flex items-center justify-center gap-1">
                    <span>JUMPING JACKS</span>
                    <button
                      onClick={() => setShowExerciseInfoModal(true)}
                      className="text-zinc-400 hover:text-zinc-600"
                    >
                      ⓘ
                    </button>
                  </div>
                </div>

                {/* Countdown Timer Circle */}
                <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      stroke="#059669"
                      strokeWidth="8"
                      strokeDasharray={301.59}
                      strokeDashoffset={301.59 - (301.59 * (6 - workoutSeconds)) / 6}
                      strokeLinecap="round"
                      fill="transparent"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black font-mono text-zinc-900">{workoutSeconds}</span>
                    <span className="text-[10px] font-bold text-zinc-400">SECONDS</span>
                  </div>
                </div>

                {/* Quick Controls */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setWorkoutSeconds(6);
                      setIsWorkoutRunning(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-zinc-200 text-zinc-800 text-xs font-bold flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restart</span>
                  </button>

                  <button
                    onClick={() => {
                      setWorkoutSeconds(0);
                      setIsWorkoutRunning(false);
                      setCoins((prev) => prev + 60);
                    }}
                    className="px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-black flex items-center gap-1 shadow-sm"
                  >
                    <span>Next Exercise ➔</span>
                  </button>
                </div>

                {/* Exercise Info / Replace Modal (Screenshot 5 right) */}
                {showExerciseInfoModal && (
                  <div className="p-4 rounded-3xl bg-zinc-900 text-white border border-zinc-700 text-left space-y-3 shadow-2xl animate-in fade-in">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-xs font-bold text-emerald-400 uppercase">JUMPING JACKS (30s)</span>
                      <button onClick={() => setShowExerciseInfoModal(false)}>
                        <X className="w-4 h-4 text-zinc-400" />
                      </button>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-zinc-300">Instructions:</span>
                      <p className="text-[10px] text-zinc-400 leading-relaxed">
                        Start with feet together and arms at your sides. Jump feet out while raising arms overhead, then return smoothly.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-zinc-300">Focus Areas:</span>
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-emerald-950 text-emerald-300 text-[10px] font-bold">
                          Shoulders
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-teal-950 text-teal-300 text-[10px] font-bold">
                          Chest & Calves
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-amber-300">Common Mistakes:</span>
                      <p className="text-[10px] text-zinc-400 leading-relaxed">
                        Landing flat-footed instead of softly on balls of feet; swinging arms without shoulder engagement.
                      </p>
                    </div>

                    <button
                      onClick={() => setShowExerciseInfoModal(false)}
                      className="w-full py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold font-mono"
                    >
                      CLOSE & RESUME
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* PERSISTENT BOTTOM TAB BAR (4 TABS) */}
          <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-zinc-200 py-2.5 px-6 flex items-center justify-between z-20">
            <button
              onClick={() => switchTab('home')}
              className={`flex flex-col items-center gap-0.5 ${
                activeBottomTab === 'home' ? 'text-emerald-600 font-bold' : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              <div className={`p-1 rounded-xl ${activeBottomTab === 'home' ? 'bg-emerald-50' : ''}`}>
                <Activity className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-mono">Home</span>
            </button>

            <button
              onClick={() => switchTab('reports')}
              className={`flex flex-col items-center gap-0.5 ${
                activeBottomTab === 'reports' ? 'text-emerald-600 font-bold' : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              <div className={`p-1 rounded-xl ${activeBottomTab === 'reports' ? 'bg-emerald-50' : ''}`}>
                <Calendar className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-mono">Reports</span>
            </button>

            <button
              onClick={() => switchTab('plan')}
              className={`flex flex-col items-center gap-0.5 ${
                activeBottomTab === 'plan' ? 'text-emerald-600 font-bold' : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              <div className={`p-1 rounded-xl ${activeBottomTab === 'plan' ? 'bg-emerald-50' : ''}`}>
                <Dumbbell className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-mono">Plan</span>
            </button>

            <button
              onClick={() => setActiveScreen('challenge')}
              className={`flex flex-col items-center gap-0.5 ${
                activeScreen === 'challenge' ? 'text-emerald-600 font-bold' : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              <div className={`p-1 rounded-xl ${activeScreen === 'challenge' ? 'bg-emerald-50' : ''}`}>
                <Trophy className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-mono">Challenge</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
