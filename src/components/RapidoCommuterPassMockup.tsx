import React, { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight, 
  ArrowLeft, 
  Zap, 
  Navigation,
  Check,
  Star,
  Layers,
  Award
} from 'lucide-react';

export const RapidoCommuterPassMockup: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<number>(1);
  const [selectedPlan, setSelectedPlan] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [selectedTime, setSelectedTime] = useState<string>('8:00 AM');
  const [selectedDays, setSelectedDays] = useState<string[]>(['M', 'T', 'W', 'T', 'F']);
  const [activeVehicle, setActiveVehicle] = useState<'bike' | 'auto' | 'cab'>('bike');

  const daysList = [
    { key: 'M', label: 'Mon' },
    { key: 'T', label: 'Tue' },
    { key: 'W', label: 'Wed' },
    { key: 'TH', label: 'Thu' },
    { key: 'F', label: 'Fri' },
    { key: 'S', label: 'Sat' },
    { key: 'SU', label: 'Sun' }
  ];

  const timeSlots = ['7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM'];

  const toggleDay = (key: string) => {
    if (selectedDays.includes(key)) {
      setSelectedDays(selectedDays.filter(d => d !== key));
    } else {
      setSelectedDays([...selectedDays, key]);
    }
  };

  return (
    <div className="w-full rounded-2xl bg-[#141414] border border-[#2D2D2D] p-4 sm:p-6 lg:p-8 space-y-6">
      
      {/* Interactive Controller Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#262626]">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E97868]">
            Interactive Mobile Prototype
          </span>
          <h3 className="text-lg font-bold text-white">
            Rapido Commuter Pass — 5 Connected Screens
          </h3>
        </div>

        {/* Screen Switcher Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] overflow-x-auto">
          {[
            { id: 1, label: '1. Home' },
            { id: 2, label: '2. Ride Select' },
            { id: 3, label: '3. Plans' },
            { id: 4, label: '4. Schedule' },
            { id: 5, label: '5. Confirmation' }
          ].map((screen) => (
            <button
              key={screen.id}
              onClick={() => setActiveScreen(screen.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap ${
                activeScreen === screen.id
                  ? 'bg-[#E97868] text-black shadow-sm'
                  : 'text-[#A0A0A0] hover:text-white hover:bg-white/5'
              }`}
            >
              {screen.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Layout: Device Frame Simulator + Screen Details Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left / Center Phone Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[340px] rounded-[36px] bg-[#0A0A0A] border-[6px] border-[#222222] shadow-2xl overflow-hidden text-white font-sans relative flex flex-col min-h-[640px]">
            
            {/* Status Bar */}
            <div className="px-6 pt-3 pb-2 flex items-center justify-between text-[11px] font-mono text-zinc-400 bg-black/60 backdrop-blur-md z-20">
              <span>5:43</span>
              <div className="w-20 h-3.5 bg-black rounded-full mx-auto" />
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>WiFi 11%</span>
              </div>
            </div>

            {/* SCREEN 1: HOME */}
            {activeScreen === 1 && (
              <div className="p-4 space-y-4 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#111111] via-[#0E0E0E] to-[#0A0A0A]">
                <div className="space-y-3">
                  {/* Current Location Bar */}
                  <div className="flex items-center gap-2 text-xs text-zinc-300 bg-[#1A1A1A] p-2.5 rounded-xl border border-zinc-800">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="truncate font-medium">Your current location (ITBP Rd)</span>
                  </div>

                  {/* Simulated Map Visual Card */}
                  <div className="h-32 rounded-2xl bg-zinc-900 border border-zinc-800 relative overflow-hidden flex items-center justify-center p-3">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#E97868_1px,transparent_1px)] [background-size:12px_12px]" />
                    <div className="relative text-center space-y-1">
                      <Navigation className="w-6 h-6 text-[#E97868] mx-auto animate-bounce" />
                      <p className="text-[11px] font-mono text-zinc-400">Dehradun Central Hub</p>
                    </div>
                  </div>

                  {/* Destination Input Box */}
                  <div className="p-3 rounded-2xl bg-[#1C1C1C] border border-zinc-700 flex items-center gap-2">
                    <span className="text-zinc-400 text-sm">🔍</span>
                    <span className="text-xs text-zinc-300 font-medium">Where are you going?</span>
                  </div>

                  {/* Commuter Pass Banner */}
                  <div 
                    onClick={() => setActiveScreen(3)}
                    className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/10 border border-amber-500/40 cursor-pointer hover:border-amber-400 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/30 flex items-center justify-center text-amber-300">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-200">Commuter Pass</div>
                        <div className="text-[10px] text-zinc-400">Never miss your daily ride</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-amber-400 text-black text-[10px] font-bold">
                      Set Schedule
                    </span>
                  </div>

                  {/* Recent Destinations */}
                  <div className="space-y-1.5">
                    <div 
                      onClick={() => setActiveScreen(2)}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#161616] hover:bg-[#202020] cursor-pointer transition-colors border border-zinc-800/80"
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-zinc-400" />
                        <div>
                          <div className="text-xs font-semibold text-white">Ghanta Ghar</div>
                          <div className="text-[10px] text-zinc-500">Chukkuwala, Dehradun</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400">4.5 km</span>
                    </div>

                    <div 
                      onClick={() => setActiveScreen(2)}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#161616] hover:bg-[#202020] cursor-pointer transition-colors border border-zinc-800/80"
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-zinc-400" />
                        <div>
                          <div className="text-xs font-semibold text-white">Doon Express Business Park</div>
                          <div className="text-[10px] text-zinc-500">Subhash Nagar, Sewla Khurd</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400">2.9 km</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveScreen(2)}
                  className="w-full py-3 rounded-xl bg-[#F4B400] text-black font-bold text-xs hover:bg-[#E5A800] transition-colors"
                >
                  Book Next Ride
                </button>
              </div>
            )}

            {/* SCREEN 2: RIDE SELECTION WITH UPSELL */}
            {activeScreen === 2 && (
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <button onClick={() => setActiveScreen(1)} className="p-1 rounded-lg bg-zinc-800 text-zinc-300">
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-bold text-white">Select Vehicle to Ghanta Ghar</span>
                  </div>

                  {/* Vehicle Tiers */}
                  <div className="space-y-1.5">
                    <div 
                      onClick={() => setActiveVehicle('bike')}
                      className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        activeVehicle === 'bike' 
                          ? 'bg-amber-950/40 border-amber-400 text-white' 
                          : 'bg-[#161616] border-zinc-800 text-zinc-400'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white">Bike</span>
                          <span className="px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[9px] font-bold">FASTEST</span>
                        </div>
                        <div className="text-[10px] text-zinc-400">5 min away · Drop 6:08 pm</div>
                      </div>
                      <span className="text-sm font-bold text-white font-mono">₹59</span>
                    </div>

                    <div 
                      onClick={() => setActiveVehicle('auto')}
                      className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        activeVehicle === 'auto' 
                          ? 'bg-amber-950/40 border-amber-400 text-white' 
                          : 'bg-[#161616] border-zinc-800 text-zinc-400'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-white">Auto</div>
                        <div className="text-[10px] text-zinc-400">3 min away · Drop 6:11 pm</div>
                      </div>
                      <span className="text-sm font-bold text-white font-mono">₹127</span>
                    </div>

                    <div 
                      onClick={() => setActiveVehicle('cab')}
                      className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        activeVehicle === 'cab' 
                          ? 'bg-amber-950/40 border-amber-400 text-white' 
                          : 'bg-[#161616] border-zinc-800 text-zinc-400'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-white">Cab Economy</div>
                        <div className="text-[10px] text-zinc-400">3 min away · Drop 6:11 pm</div>
                      </div>
                      <span className="text-sm font-bold text-white font-mono">₹178</span>
                    </div>
                  </div>

                  {/* PROMINENT UPSELL BANNER (Matched directly from Page 7 / 10 of PDF) */}
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-950/70 via-[#231A0E] to-zinc-900 border border-amber-500/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <div>
                          <div className="text-xs font-bold text-white">Save more with Commuter Pass</div>
                          <div className="text-[10px] text-amber-200/80">Weekly plans from ₹499</div>
                        </div>
                      </div>
                      <button 
                        onClick={() => setActiveScreen(3)}
                        className="px-2.5 py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-[10px] font-bold transition-all shadow-sm"
                      >
                        View Plans
                      </button>
                    </div>
                  </div>

                  {/* Wallet Bar */}
                  <div className="flex items-center justify-between p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px]">
                    <span className="text-zinc-400">Rapido Wallet · ₹0.0</span>
                    <span className="text-amber-400 font-bold">% Offers</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveScreen(3)}
                  className="w-full py-3 rounded-xl bg-[#F4B400] text-black font-bold text-xs hover:bg-[#E5A800] transition-colors"
                >
                  Book Bike (₹59) or Unlock Pass
                </button>
              </div>
            )}

            {/* SCREEN 3: CHOOSE YOUR PLAN */}
            {activeScreen === 3 && (
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <button onClick={() => setActiveScreen(2)} className="p-1 rounded-lg bg-zinc-800 text-zinc-300">
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div>
                      <span className="text-[9px] font-mono uppercase text-amber-400 font-bold block">COMMUTER PASS</span>
                      <span className="text-sm font-bold text-white">Choose your plan</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-400">Lock in lower fares for your daily commute with zero surge guarantee.</p>

                  {/* Tier 1: Daily */}
                  <div 
                    onClick={() => setSelectedPlan('daily')}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                      selectedPlan === 'daily' 
                        ? 'bg-amber-950/40 border-amber-400' 
                        : 'bg-[#161616] border-zinc-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">Daily</div>
                        <div className="text-[10px] text-zinc-400">2 rides included · 7-day validity</div>
                      </div>
                      <span className="text-sm font-bold text-white font-mono">₹89<span className="text-[9px] text-zinc-400 font-normal">/day</span></span>
                    </div>
                  </div>

                  {/* Tier 2: Weekly (Most Popular) */}
                  <div 
                    onClick={() => setSelectedPlan('weekly')}
                    className={`p-3 rounded-2xl border cursor-pointer relative transition-all ${
                      selectedPlan === 'weekly' 
                        ? 'bg-gradient-to-b from-amber-950/60 to-zinc-900 border-amber-400 ring-1 ring-amber-400/40' 
                        : 'bg-[#161616] border-zinc-800'
                    }`}
                  >
                    <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-amber-400 text-black text-[9px] font-extrabold uppercase tracking-wide shadow">
                      MOST POPULAR
                    </div>
                    <div className="flex items-center justify-between pt-0.5">
                      <div>
                        <div className="text-xs font-bold text-white">Weekly Pro</div>
                        <div className="text-[10px] text-zinc-400">14 rides included (Save 22%)</div>
                      </div>
                      <span className="text-base font-bold text-amber-300 font-mono">₹499<span className="text-[9px] text-zinc-400 font-normal">/week</span></span>
                    </div>
                    <div className="pt-2 border-t border-zinc-800/80 mt-2 grid grid-cols-2 gap-1 text-[10px] text-zinc-300">
                      <div className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> Priority pickup</div>
                      <div className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> No surge pricing</div>
                      <div className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> Free cancellation</div>
                      <div className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> 10-min arrival</div>
                    </div>
                  </div>

                  {/* Tier 3: Monthly */}
                  <div 
                    onClick={() => setSelectedPlan('monthly')}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                      selectedPlan === 'monthly' 
                        ? 'bg-amber-950/40 border-amber-400' 
                        : 'bg-[#161616] border-zinc-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">Monthly Max</div>
                        <div className="text-[10px] text-zinc-400">60 rides included (Save 30%)</div>
                      </div>
                      <span className="text-sm font-bold text-white font-mono">₹1,799<span className="text-[9px] text-zinc-400 font-normal">/mo</span></span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveScreen(4)}
                  className="w-full py-3 rounded-xl bg-[#F4B400] text-black font-bold text-xs hover:bg-[#E5A800] transition-colors shadow-lg"
                >
                  Activate Pass ({selectedPlan === 'weekly' ? '₹499' : selectedPlan === 'daily' ? '₹89' : '₹1,799'})
                </button>
              </div>
            )}

            {/* SCREEN 4: SCHEDULE YOUR RIDE */}
            {activeScreen === 4 && (
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <button onClick={() => setActiveScreen(3)} className="p-1 rounded-lg bg-zinc-800 text-zinc-300">
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div>
                      <span className="text-sm font-bold text-white">Schedule your ride</span>
                      <p className="text-[10px] text-zinc-400">Set up your daily recurring commute</p>
                    </div>
                  </div>

                  {/* Route Summary */}
                  <div className="p-3 rounded-2xl bg-[#181818] border border-zinc-800 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <div className="text-[11px]">
                        <span className="text-zinc-400 text-[9px] block">PICKUP</span>
                        <span className="font-semibold text-white">Capital Heights, ITBP Rd</span>
                      </div>
                    </div>
                    <div className="h-4 border-l border-dashed border-zinc-600 ml-1" />
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#E97868]" />
                      <div className="text-[11px]">
                        <span className="text-zinc-400 text-[9px] block">DROP</span>
                        <span className="font-semibold text-white">Ghanta Ghar, Dehradun</span>
                      </div>
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">
                      SELECT PICKUP TIME
                    </label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 rounded-xl text-[11px] font-mono font-bold transition-all ${
                            selectedTime === time
                              ? 'bg-amber-400 text-black'
                              : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Repeat Days */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">
                      REPEAT ON
                    </label>
                    <div className="flex items-center justify-between gap-1">
                      {daysList.map((d) => {
                        const isSelected = selectedDays.includes(d.key);
                        return (
                          <button
                            key={d.key}
                            onClick={() => toggleDay(d.key)}
                            className={`w-9 h-9 rounded-full text-xs font-bold font-mono transition-all flex items-center justify-center ${
                              isSelected
                                ? 'bg-amber-400 text-black shadow'
                                : 'bg-zinc-900 border border-zinc-800 text-zinc-500'
                            }`}
                          >
                            {d.key}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Fare Summary */}
                  <div className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-center justify-between text-xs">
                    <span className="text-zinc-300">Estimated weekly fare</span>
                    <span className="font-mono font-bold text-amber-300">₹499 (Zero Surge)</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveScreen(5)}
                  className="w-full py-3 rounded-xl bg-[#F4B400] text-black font-bold text-xs hover:bg-[#E5A800] transition-colors"
                >
                  Confirm Schedule
                </button>
              </div>
            )}

            {/* SCREEN 5: CONFIRMATION */}
            {activeScreen === 5 && (
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#111111] via-[#0E0E0E] to-[#0A0A0A] text-center">
                <div className="space-y-4 pt-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white">Your daily ride is scheduled</h4>
                    <p className="text-xs text-zinc-400 max-w-[240px] mx-auto">
                      We'll auto-book your bike every morning. You'll get a reminder 15 mins before.
                    </p>
                  </div>

                  {/* Scheduled Summary Card */}
                  <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-left space-y-2 text-xs">
                    <div className="flex items-center justify-between text-zinc-300 pb-2 border-b border-zinc-800">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-amber-400" /> Mon – Fri</span>
                      <span className="font-bold text-white">{selectedTime} pickup</span>
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      <MapPin className="w-3 h-3 text-[#E97868] inline mr-1" />
                      Capital Heights → Ghanta Ghar
                    </div>
                    <div className="flex items-center justify-between pt-1 text-[11px]">
                      <span className="text-emerald-400 font-medium">Weekly Pass Active</span>
                      <span className="font-mono font-bold text-white">₹499</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => setActiveScreen(3)}
                    className="w-full py-3 rounded-xl bg-[#F4B400] text-black font-bold text-xs hover:bg-[#E5A800] transition-colors"
                  >
                    View Plan
                  </button>
                  <button
                    onClick={() => setActiveScreen(1)}
                    className="w-full py-2 text-xs font-mono text-zinc-400 hover:text-white"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            )}

            {/* Bottom App Navigation */}
            <div className="px-6 py-2.5 bg-black/90 border-t border-zinc-900 flex items-center justify-around text-[10px] text-zinc-500 font-medium">
              <span className={activeScreen === 1 ? 'text-amber-400 font-bold' : ''}>Ride</span>
              <span>All Services</span>
              <span>Travel</span>
              <span>Profile</span>
            </div>
          </div>
        </div>

        {/* Right Side: Step Insights & Flow Architecture */}
        <div className="lg:col-span-7 space-y-5">
          <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#E97868]/20 text-[#E97868] text-xs font-mono font-bold">
                SCREEN {activeScreen} OF 5
              </span>
              <h4 className="text-base font-bold text-white">
                {activeScreen === 1 && 'Home Screen · Frictionless Schedule Access'}
                {activeScreen === 2 && 'Ride Selection · Contextual Upsell Above Wallet Strip'}
                {activeScreen === 3 && 'Tier Comparison · Daily vs Weekly Pro vs Monthly Max'}
                {activeScreen === 4 && 'Schedule Recurring Slots · Time & Mon-Fri Automation'}
                {activeScreen === 5 && 'Ride Confirmation · Pre-Ride Alerts & 10-Min SLA'}
              </h4>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {activeScreen === 1 && 'Commuter pass banner is seamlessly integrated inside Rapido\'s existing dark, map-first interface without disrupting the high-intent on-demand booking funnel.'}
              {activeScreen === 2 && 'Instead of showing surge prices that trigger app-switching, users see an instant "Save more with Commuter Pass" banner with weekly fixed pricing.'}
              {activeScreen === 3 && 'Tiered pricing highlights Weekly Pro (₹499/week) as "Most Popular" for 3-4 day riders, offering guaranteed 10-minute pickup, zero surge, and free cancellations.'}
              {activeScreen === 4 && 'Riders select their exact departure time (e.g. 8:00 AM) and toggle recurring days (Mon–Fri). Eliminates daily morning manual bookings.'}
              {activeScreen === 5 && 'Locks in the two-sided supply match: dispatches an automated pre-ride notification 15 minutes before departure and binds a paired captain.'}
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="p-2.5 rounded-xl bg-[#242424] border border-[#333333]">
                <span className="text-[10px] font-mono text-zinc-400 block uppercase">Zero Surge</span>
                <span className="text-xs font-bold text-emerald-400">100% Fixed Fares</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#242424] border border-[#333333]">
                <span className="text-[10px] font-mono text-zinc-400 block uppercase">Arrival SLA</span>
                <span className="text-xs font-bold text-amber-400">10-Min Guarantee</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#242424] border border-[#333333]">
                <span className="text-[10px] font-mono text-zinc-400 block uppercase">Captain Pairing</span>
                <span className="text-xs font-bold text-blue-400">Locked Supply</span>
              </div>
            </div>
          </div>

          {/* Two-Sided Marketplace Mechanism Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1C1A14] to-[#141414] border border-amber-500/30 space-y-3">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              Two-Sided Supply–Demand Lock
            </h5>
            <p className="text-xs text-zinc-300 leading-relaxed">
              When a rider confirms a <strong>Mon–Fri 8:00 AM</strong> commute slot, the backend automatically pairs it with a registered captain on a <strong>30-Day Pro shift</strong>. Captains earn a guaranteed <strong>₹180–220 per ride + 30% peak bonus</strong>, transforming peak hour shortages into recurring predictability.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
