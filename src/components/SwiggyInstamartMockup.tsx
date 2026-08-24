import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Utensils, 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Heart, 
  Share2, 
  Play, 
  RefreshCw, 
  ArrowLeft, 
  Flame, 
  Leaf, 
  Zap, 
  Plus, 
  Check 
} from 'lucide-react';

export const SwiggyInstamartMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dinner' | 'week' | 'schedule' | 'reels'>('dinner');
  const [activeVibe, setActiveVibe] = useState<string>('Spicy');
  const [selectedSlot, setSelectedSlot] = useState<string>('6–6:30 AM');
  const [isWeeklyRecurring, setIsWeeklyRecurring] = useState<boolean>(true);
  const [cartItemsCount, setCartItemsCount] = useState<number>(3);
  const [addedDishes, setAddedDishes] = useState<string[]>(['Paneer Butter Masala', 'Jeera Rice + Dal Tadka']);

  const vibes = ['Spicy', 'Diet', 'Fitness', 'Vegan', 'Comfort', 'Quick <15m', 'South Indian'];

  const toggleDish = (dishName: string) => {
    if (addedDishes.includes(dishName)) {
      setAddedDishes(addedDishes.filter(d => d !== dishName));
    } else {
      setAddedDishes([...addedDishes, dishName]);
    }
  };

  return (
    <div className="w-full rounded-2xl bg-[#141414] border border-[#2D2D2D] p-4 sm:p-6 lg:p-8 space-y-6">
      
      {/* Top Header & Screen Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#262626]">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-400">
            Interactive Meal Decision Prototype
          </span>
          <h3 className="text-lg font-bold text-white">
            Swiggy Instamart — Meal Engine & Visual Commerce
          </h3>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] overflow-x-auto">
          {[
            { id: 'dinner', label: '1. Dinner Tonight' },
            { id: 'week', label: '2. 7-Day Plan' },
            { id: 'schedule', label: '3. Schedule & Save' },
            { id: 'reels', label: '4. Reels Commerce' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-[#A0A0A0] hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Device Frame + Strategy Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Phone Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[340px] rounded-[36px] bg-[#0A0A0A] border-[6px] border-[#222222] shadow-2xl overflow-hidden text-white font-sans relative flex flex-col min-h-[640px]">
            
            {/* Status Bar */}
            <div className="px-6 pt-3 pb-2 flex items-center justify-between text-[11px] font-mono text-zinc-400 bg-black/80 backdrop-blur-md z-20">
              <span>9:41</span>
              <div className="w-20 h-3.5 bg-black rounded-full mx-auto" />
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-orange-400">5G</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>

            {/* TAB 1: DINNER TONIGHT (3-TAP MEAL-BASED ORDERING) */}
            {activeTab === 'dinner' && (
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#14120E] via-[#0E0E0E] to-[#0A0A0A]">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <button className="p-1 rounded-lg bg-zinc-800 text-zinc-300">
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div>
                      <h4 className="text-sm font-bold text-white">Dinner tonight</h4>
                      <p className="text-[10px] text-zinc-400">Tell us your vibe — we'll suggest recipes</p>
                    </div>
                  </div>

                  {/* Vibe Chips (Directly from Page 8 of PDF) */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                    {vibes.map((vibe) => (
                      <button
                        key={vibe}
                        onClick={() => setActiveVibe(vibe)}
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all ${
                          activeVibe === vibe
                            ? 'bg-orange-500 text-white shadow-sm'
                            : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {vibe}
                      </button>
                    ))}
                  </div>

                  {/* Smart Search Voice / Text Prompt */}
                  <div className="p-2.5 rounded-xl bg-[#1A1A1A] border border-zinc-800 flex items-center gap-2 text-xs text-zinc-400">
                    <span>✨</span>
                    <span>Or say "something light tonight"</span>
                  </div>

                  {/* Recipe Cards List */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[10px] font-mono uppercase text-zinc-500 font-bold">
                      SUGGESTED FOR YOU (AI PICKED FROM YOUR VIBE + HISTORY)
                    </div>

                    {/* Dish 1 */}
                    <div className="p-3 rounded-2xl bg-[#181818] border border-zinc-800/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-950/60 border border-orange-500/30 flex items-center justify-center font-bold text-orange-400 text-xs">
                          C
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Paneer Butter Masala</div>
                          <div className="text-[10px] text-zinc-400">8 ingredients · 25 min</div>
                          <div className="text-[11px] font-mono text-orange-300 font-bold">₹240 · all in cart</div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleDish('Paneer Butter Masala')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold font-mono transition-all ${
                          addedDishes.includes('Paneer Butter Masala')
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-orange-500 hover:bg-orange-400 text-white'
                        }`}
                      >
                        {addedDishes.includes('Paneer Butter Masala') ? 'ADDED' : '+ADD'}
                      </button>
                    </div>

                    {/* Dish 2 */}
                    <div className="p-3 rounded-2xl bg-[#181818] border border-zinc-800/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400 text-xs">
                          R
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Jeera Rice + Dal Tadka</div>
                          <div className="text-[10px] text-zinc-400">11 items · 30 min</div>
                          <div className="text-[11px] font-mono text-amber-300 font-bold">₹180 · all in cart</div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleDish('Jeera Rice + Dal Tadka')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold font-mono transition-all ${
                          addedDishes.includes('Jeera Rice + Dal Tadka')
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-orange-500 hover:bg-orange-400 text-white'
                        }`}
                      >
                        {addedDishes.includes('Jeera Rice + Dal Tadka') ? 'ADDED' : '+ADD'}
                      </button>
                    </div>

                    {/* Dish 3 */}
                    <div className="p-3 rounded-2xl bg-[#181818] border border-zinc-800/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center font-bold text-zinc-300 text-xs">
                          DI
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Masala Dosa + Chutney</div>
                          <div className="text-[10px] text-zinc-400">9 items · 20 min</div>
                          <div className="text-[11px] font-mono text-zinc-300 font-bold">₹165 · all in cart</div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleDish('Masala Dosa + Chutney')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold font-mono transition-all ${
                          addedDishes.includes('Masala Dosa + Chutney')
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-orange-500 hover:bg-orange-400 text-white'
                        }`}
                      >
                        {addedDishes.includes('Masala Dosa + Chutney') ? 'ADDED' : '+ADD'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* 1-Tap Sticky Cart Addition */}
                <button
                  onClick={() => setActiveTab('week')}
                  className="w-full py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-xs shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add all ingredients · ₹585</span>
                </button>
              </div>
            )}

            {/* TAB 2: YOUR WEEK (7-DAY MEAL PLANNER) */}
            {activeTab === 'week' && (
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#14120E] via-[#0E0E0E] to-[#0A0A0A]">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button onClick={() => setActiveTab('dinner')} className="p-1 rounded-lg bg-zinc-800 text-zinc-300">
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <h4 className="text-sm font-bold text-white">Your Week</h4>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400">Veg Family of 3 · ₹2,400 budget</span>
                  </div>

                  {/* Day Selector Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                    {[
                      { day: 'Mon', date: '24', active: true },
                      { day: 'Tue', date: '25', active: false },
                      { day: 'Wed', date: '26', active: false },
                      { day: 'Thu', date: '27', active: false },
                      { day: 'Fri', date: '28', active: false }
                    ].map((d) => (
                      <div
                        key={d.day}
                        className={`px-3 py-1.5 rounded-xl text-center flex-1 cursor-pointer transition-all ${
                          d.active 
                            ? 'bg-orange-500 text-white font-bold' 
                            : 'bg-zinc-900 border border-zinc-800 text-zinc-400'
                        }`}
                      >
                        <div className="text-[9px] uppercase">{d.day}</div>
                        <div className="text-xs font-mono">{d.date}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-[10px] font-mono uppercase text-zinc-400 font-bold">
                    MONDAY · 3 MEALS
                  </div>

                  {/* Meal 1: Breakfast */}
                  <div className="p-2.5 rounded-xl bg-[#181818] border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center font-bold text-xs text-orange-400">
                        P
                      </div>
                      <div>
                        <div className="text-[9px] font-mono text-zinc-500 uppercase">BREAKFAST</div>
                        <div className="text-xs font-bold text-white">Vegetable Poha</div>
                        <div className="text-[10px] text-zinc-400">8 min · 4 items</div>
                      </div>
                    </div>
                    <button className="text-[10px] font-mono text-orange-400 hover:underline">Swap</button>
                  </div>

                  {/* Meal 2: Lunch */}
                  <div className="p-2.5 rounded-xl bg-[#181818] border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center font-bold text-xs text-amber-400">
                        Rj
                      </div>
                      <div>
                        <div className="text-[9px] font-mono text-zinc-500 uppercase">LUNCH</div>
                        <div className="text-xs font-bold text-white">Rajma Chawal</div>
                        <div className="text-[10px] text-zinc-400">30 min · 9 items</div>
                      </div>
                    </div>
                    <button className="text-[10px] font-mono text-orange-400 hover:underline">Swap</button>
                  </div>

                  {/* Meal 3: Dinner */}
                  <div className="p-2.5 rounded-xl bg-[#181818] border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center font-bold text-xs text-emerald-400">
                        A
                      </div>
                      <div>
                        <div className="text-[9px] font-mono text-zinc-500 uppercase">DINNER</div>
                        <div className="text-xs font-bold text-white">Aloo Gobi + Roti</div>
                        <div className="text-[10px] text-zinc-400">25 min · 7 items</div>
                      </div>
                    </div>
                    <button className="text-[10px] font-mono text-orange-400 hover:underline">Swap</button>
                  </div>

                  {/* Summary Metric Box */}
                  <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-[11px] text-emerald-300 flex items-center justify-between">
                    <span>21 meals · 47 unique ingredients</span>
                    <span className="font-bold font-mono">Total ₹2,316 · within budget</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('schedule')}
                  className="w-full py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-xs shadow-lg transition-colors"
                >
                  Build single cart
                </button>
              </div>
            )}

            {/* TAB 3: SCHEDULE DELIVERY (SAVINGS SLOTS) */}
            {activeTab === 'schedule' && (
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#14120E] via-[#0E0E0E] to-[#0A0A0A]">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <button onClick={() => setActiveTab('week')} className="p-1 rounded-lg bg-zinc-800 text-zinc-300">
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div>
                      <h4 className="text-sm font-bold text-white">Schedule delivery</h4>
                      <p className="text-[10px] text-zinc-400">Pick when you actually need it</p>
                    </div>
                  </div>

                  {/* Toggle: Now vs Schedule */}
                  <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-zinc-900 border border-zinc-800 text-xs">
                    <button className="py-1.5 rounded-lg text-zinc-400">Now · 8 min</button>
                    <button className="py-1.5 rounded-lg bg-orange-500 text-white font-bold shadow">Schedule</button>
                  </div>

                  {/* Choose Day */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">CHOOSE DAY</label>
                    <div className="grid grid-cols-4 gap-1.5">
                      <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-center text-zinc-500 text-[10px]">Today</div>
                      <div className="p-2 rounded-xl bg-orange-500 text-white font-bold text-center text-[10px] shadow">Tomorrow</div>
                      <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-center text-zinc-500 text-[10px]">Sat</div>
                      <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-center text-zinc-500 text-[10px]">Sun</div>
                    </div>
                  </div>

                  {/* Time Slots with Incentive Discounts */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">TIME SLOT</label>
                    
                    <div 
                      onClick={() => setSelectedSlot('6–6:30 AM')}
                      className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        selectedSlot === '6–6:30 AM' ? 'bg-orange-950/30 border-orange-500' : 'bg-zinc-900 border-zinc-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs">
                        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${selectedSlot === '6–6:30 AM' ? 'border-orange-500 bg-orange-500' : 'border-zinc-600'}`}>
                          {selectedSlot === '6–6:30 AM' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <span className="font-bold text-white">6 – 6:30 AM</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">Save ₹40</span>
                    </div>

                    <div 
                      onClick={() => setSelectedSlot('7–7:30 AM')}
                      className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        selectedSlot === '7–7:30 AM' ? 'bg-orange-950/30 border-orange-500' : 'bg-zinc-900 border-zinc-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs">
                        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${selectedSlot === '7–7:30 AM' ? 'border-orange-500 bg-orange-500' : 'border-zinc-600'}`}>
                          {selectedSlot === '7–7:30 AM' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <span className="text-zinc-300">7 – 7:30 AM</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">Save ₹30</span>
                    </div>

                    <div 
                      onClick={() => setSelectedSlot('8–8:30 AM')}
                      className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        selectedSlot === '8–8:30 AM' ? 'bg-orange-950/30 border-orange-500' : 'bg-zinc-900 border-zinc-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs">
                        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${selectedSlot === '8–8:30 AM' ? 'border-orange-500 bg-orange-500' : 'border-zinc-600'}`}>
                          {selectedSlot === '8–8:30 AM' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <span className="text-zinc-400">8 – 8:30 AM</span>
                      </div>
                      <span className="text-[10px] text-zinc-500">Standard</span>
                    </div>
                  </div>

                  {/* Make it weekly switch */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-xs text-zinc-300">Make it weekly</span>
                    <button 
                      onClick={() => setIsWeeklyRecurring(!isWeeklyRecurring)}
                      className={`w-9 h-5 rounded-full transition-colors relative p-0.5 ${isWeeklyRecurring ? 'bg-orange-500' : 'bg-zinc-700'}`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform ${isWeeklyRecurring ? 'translate-x-4' : 'translate-x-0'}`} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('reels')}
                  className="w-full py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-xs shadow-lg transition-colors"
                >
                  Confirm · Tomorrow {selectedSlot.split('–')[0]} · saves ₹40
                </button>
              </div>
            )}

            {/* TAB 4: REELS COMMERCE (RECIPE TO 12-MIN CART) */}
            {activeTab === 'reels' && (
              <div className="p-4 flex-1 flex flex-col justify-between bg-[#080808] relative overflow-hidden">
                {/* Background visual cooking video simulation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900/60 to-black flex items-center justify-center">
                  <div className="text-center space-y-2 opacity-80">
                    <div className="w-16 h-16 rounded-full bg-orange-500/20 border-2 border-orange-400 flex items-center justify-center mx-auto text-orange-400 animate-pulse">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                    <p className="text-xs font-mono text-zinc-400">30-sec Aglio e Olio Demo</p>
                  </div>
                </div>

                {/* Top Reels Bar */}
                <div className="relative z-10 flex items-center justify-between text-xs font-bold text-zinc-400">
                  <div className="flex items-center gap-3">
                    <span className="text-white border-b-2 border-orange-500 pb-0.5">For You</span>
                    <span>Trending</span>
                    <span>Veg</span>
                    <span>Quick</span>
                  </div>
                </div>

                {/* Right Floating Actions */}
                <div className="relative z-10 self-end space-y-3 text-center text-[10px]">
                  <div className="space-y-0.5">
                    <div className="w-9 h-9 rounded-full bg-black/60 border border-zinc-700 flex items-center justify-center text-rose-400 mx-auto">
                      <Heart className="w-4 h-4 fill-current" />
                    </div>
                    <span>12.4K</span>
                  </div>
                  <div className="space-y-0.5">
                    <div className="w-9 h-9 rounded-full bg-black/60 border border-zinc-700 flex items-center justify-center text-zinc-300 mx-auto">
                      <Share2 className="w-4 h-4" />
                    </div>
                    <span>Share</span>
                  </div>
                </div>

                {/* Bottom Overlay Card (Direct from Page 10 of PDF) */}
                <div className="relative z-10 space-y-2 p-3 rounded-2xl bg-black/85 backdrop-blur-md border border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-[10px] font-bold text-black">
                      CK
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1">Chef Kunal <span className="text-[10px] font-normal text-zinc-400">· 1.2M</span></div>
                      <div className="text-[10px] text-zinc-400">30-sec Aglio e Olio · ready in 12 min</div>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-[#1C1C1C] border border-zinc-700 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-white">6 ingredients · ₹245</span>
                      <span className="text-emerald-400 font-medium">Delivers in 12 min</span>
                    </div>
                    <div className="text-[10px] text-zinc-400 truncate">Spaghetti · Garlic · Olive oil · Chilli · Parsley · Parm</div>
                    <div className="flex items-center gap-1.5 pt-1">
                      <button 
                        onClick={() => setActiveTab('dinner')}
                        className="flex-1 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-white font-bold text-[11px] transition-colors"
                      >
                        Add all to cart
                      </button>
                      <button className="px-3 py-2 rounded-lg bg-zinc-800 text-zinc-300 font-medium text-[11px]">
                        Save recipe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Nav */}
            <div className="px-6 py-2 bg-black border-t border-zinc-900 flex items-center justify-around text-[10px] text-zinc-500 font-medium">
              <span className={activeTab === 'dinner' ? 'text-orange-400 font-bold' : ''}>Home</span>
              <span className={activeTab === 'reels' ? 'text-orange-400 font-bold' : ''}>Reels</span>
              <span className={activeTab === 'week' ? 'text-orange-400 font-bold' : ''}>Plan</span>
              <span className="text-white font-bold">Cart ({cartItemsCount})</span>
            </div>
          </div>
        </div>

        {/* Right Side: Strategy Breakdown */}
        <div className="lg:col-span-7 space-y-5">
          <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#2D2D2D] space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 text-xs font-mono font-bold">
                {activeTab === 'dinner' && 'PILLAR 1: SMART MEAL ORDERING'}
                {activeTab === 'week' && 'PILLAR 3: 7-DAY MEAL PLANNING'}
                {activeTab === 'schedule' && 'PILLAR 4: MORNING SAVINGS SLOTS'}
                {activeTab === 'reels' && 'PILLAR 5: REELS COMMERCE'}
              </span>
              <h4 className="text-base font-bold text-white">
                {activeTab === 'dinner' && '3 Taps from Vibe to Checkout'}
                {activeTab === 'week' && '21 Meals Automated Single-Cart Checkout'}
                {activeTab === 'schedule' && 'Smoothing Warehouse Peaks with Early-Slot Discounts'}
                {activeTab === 'reels' && 'Converting Inspiration into 12-Min Delivery'}
              </h4>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {activeTab === 'dinner' && 'Solves the primary friction point "What should I cook today?". Users select mood tags or dietary goals, and the app automatically assembles fresh produce, spices, and staples into an instant 1-tap cart.'}
              {activeTab === 'week' && 'Solves fragmented daily shopping. Instead of placing 5 emergency orders per week, household planners can auto-generate a 21-meal weekly itinerary within a set budget (e.g. ₹2,400) and check out in a single cart.'}
              {activeTab === 'schedule' && 'Incentivizes users to schedule 6:00–6:30 AM morning deliveries with a ₹40 discount, distributing logistics load outside peak daytime rush hours while guaranteeing fresh breakfast ingredients.'}
              {activeTab === 'reels' && 'Bridges culinary creator content with instant commerce. Viewers watching 30-sec recipe videos click "Add 6 ingredients" to receive the entire dish bundle at their door in 12 minutes.'}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="p-2.5 rounded-xl bg-[#242424] border border-[#333333]">
                <span className="text-[10px] font-mono text-zinc-400 block uppercase">North Star</span>
                <span className="text-xs font-bold text-orange-400">7+ Planned Meals/Wk</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#242424] border border-[#333333]">
                <span className="text-[10px] font-mono text-zinc-400 block uppercase">Basket Size Lift</span>
                <span className="text-xs font-bold text-emerald-400">+22% AOV</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#242424] border border-[#333333]">
                <span className="text-[10px] font-mono text-zinc-400 block uppercase">Order Frequency</span>
                <span className="text-xs font-bold text-amber-400">+35% Monthly Lift</span>
              </div>
            </div>
          </div>

          {/* Strategic Insight Quote Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1C160E] to-[#141414] border border-orange-500/30 space-y-3">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Core Product Reframe
            </h5>
            <blockquote className="text-xs text-zinc-300 italic border-l-2 border-orange-500 pl-3 leading-relaxed">
              "The problem wasn't grocery delivery. The real problem was meal decision-making. By reframing the question from <em>'How do we deliver groceries faster?'</em> to <em>'How do we help users decide what to eat?'</em>, the entire product strategy transformed from an emergency utility into a high-retention habit engine."
            </blockquote>
          </div>
        </div>

      </div>

    </div>
  );
};
