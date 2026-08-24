import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Utensils,
  ShoppingBag,
  Clock,
  Layers,
  Calendar,
  ChefHat,
  MousePointer,
  Smartphone,
  Palette,
  ExternalLink,
  Zap,
  CheckCircle2,
  ArrowRight,
  Plus,
  Heart,
  TrendingUp,
  Tag
} from 'lucide-react';

interface SwiggyUIDeepDiveProps {
  deckLink?: string;
}

export const SwiggyUIDeepDive: React.FC<SwiggyUIDeepDiveProps> = ({ deckLink }) => {
  const [activeTab, setActiveTab] = useState<'screenAnatomy' | 'cartFlow' | 'schedulerUX' | 'userJourney'>('screenAnatomy');
  const [selectedHotspot, setSelectedHotspot] = useState<string>('planner');

  const hotspots = [
    {
      id: 'planner',
      name: '7-Day Meal Scheduler Canvas',
      target: 'Instamart Home Header',
      rationale: 'Shifts user intent from impulse buying to planned weekly replenishment. Visual day chips allow quick navigation across the week.',
      specs: 'Horizontal carousel | Active chip: bg-amber-500 text-black | Inactive: bg-[#242424] text-[#A0A0A0]',
      interaction: '1-tap to switch days, long-press to duplicate meals from previous week.'
    },
    {
      id: 'recipeBundle',
      name: '3-Tap Smart Recipe Bundle',
      target: 'Recipe Card',
      rationale: 'Solves "What should I cook?" and aggregates all required ingredients (Paneer, Ginger-Garlic paste, Spices, Cream) into a unified 1-click cart action.',
      specs: 'Servings Multiplier: 2/4/6 toggle | Sub-total counter | 1-Tap Out-of-Stock auto-substitute',
      interaction: 'Expanding recipe dynamically calculates item quantities and presents a single consolidated "Add all 5 items (₹245)" CTA.'
    },
    {
      id: 'morningSlot',
      name: '6-7 AM Early Morning Delivery Slot',
      target: 'Checkout & Scheduler',
      rationale: 'Guarantees pre-work morning delivery before 7:30 AM so fresh breakfast and lunch prep can occur without stressful tracking.',
      specs: 'Badge: bg-emerald-950/70 border border-emerald-500/40 | Zero delivery fee over ₹199 threshold',
      interaction: 'One-click default reservation for all scheduled weekly meal bundles.'
    },
    {
      id: 'substitute',
      name: '1-Tap Smart Ingredient Swap',
      target: 'Cart & Item List',
      rationale: 'Prevents checkout abandonment when 1 essential ingredient is out of stock by suggesting instant brand alternatives.',
      specs: 'Match confidence: 99% equivalent weight and price | 1-click inline swap chip',
      interaction: 'Inline replacement without navigating back to search catalog.'
    }
  ];

  return (
    <div id="swiggy-ui-ux-deep-dive" className="w-full bg-[#171412] border border-orange-500/30 rounded-[32px] p-6 sm:p-10 shadow-2xl space-y-8">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-500/40 text-[11px] font-mono font-bold text-orange-300 uppercase">
            <ChefHat className="w-3.5 h-3.5 text-orange-400" />
            <span>UI/UX Architecture & Cart Conversion Flow</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Swiggy Instamart — Meal Decision Engine UI/UX
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Interactive screen architecture, recipe aggregation tokens, and frictionless multi-item checkout flows.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#live-swiggy-prototype"
            className="px-4 py-2 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/40 text-xs font-mono font-bold text-orange-300 flex items-center gap-2 transition-colors"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Live Prototype ↑</span>
          </a>

          {deckLink && (
            <a
              href={deckLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-mono font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-md"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Full Strategy PDF</span>
            </a>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-black/40 border border-white/10">
        {[
          { id: 'screenAnatomy', label: 'Screen Anatomy & Hotspots', icon: Smartphone },
          { id: 'cartFlow', label: '3-Tap Recipe-to-Cart Flow', icon: ShoppingBag },
          { id: 'schedulerUX', label: 'Morning Slot & Subscription UX', icon: Calendar },
          { id: 'userJourney', label: 'User Journey & Cognitive Load', icon: Clock },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                isActive
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Screen Anatomy */}
      {activeTab === 'screenAnatomy' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Wireframe Mockup (5 cols) */}
          <div className="lg:col-span-5 bg-black/60 rounded-3xl p-5 border border-white/10 shadow-inner space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[11px] font-mono text-zinc-400 uppercase font-bold">Interactive Wireframe Hotspots</span>
              <span className="text-[10px] font-mono text-orange-400">Click elements below</span>
            </div>

            {/* Mobile Wireframe Stage */}
            <div className="relative mx-auto max-w-[280px] bg-[#141210] rounded-[36px] border-[4px] border-[#2A2420] p-3 space-y-3 overflow-hidden shadow-2xl">
              {/* Status Bar */}
              <div className="flex justify-between items-center text-[10px] text-zinc-400 px-2 pt-1 font-mono">
                <span>9:41</span>
                <span className="text-orange-400 font-bold">10 MINS</span>
                <span>100%</span>
              </div>

              {/* Hotspot 1: 7-Day Planner Bar */}
              <div
                onClick={() => setSelectedHotspot('planner')}
                className={`p-2 rounded-2xl cursor-pointer transition-all border ${
                  selectedHotspot === 'planner'
                    ? 'bg-orange-500/30 border-orange-400 ring-2 ring-orange-500/50'
                    : 'bg-white/5 border-white/10 hover:border-orange-500/50'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400">
                    <span className="text-white font-bold">Weekly Meal Planner</span>
                    <span className="text-orange-400">Mon - Sun</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="px-1.5 py-0.5 rounded bg-orange-500 text-black text-[9px] font-bold">Mon</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-400 text-[9px]">Tue</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-400 text-[9px]">Wed</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-400 text-[9px]">Thu</span>
                  </div>
                </div>
              </div>

              {/* Hotspot 2: Recipe Bundle Card */}
              <div
                onClick={() => setSelectedHotspot('recipeBundle')}
                className={`p-2.5 rounded-2xl cursor-pointer transition-all border space-y-2 ${
                  selectedHotspot === 'recipeBundle'
                    ? 'bg-orange-500/30 border-orange-400 ring-2 ring-orange-500/50'
                    : 'bg-[#1E1A16] border-white/5 hover:border-orange-500/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-white">Paneer Butter Masala</span>
                  <span className="text-[9px] font-mono text-orange-400 font-bold">₹245 (4 items)</span>
                </div>
                <div className="flex gap-1 text-[8px] font-mono text-zinc-400">
                  <span className="px-1 py-0.5 rounded bg-black/50">Paneer 200g</span>
                  <span className="px-1 py-0.5 rounded bg-black/50">Puree</span>
                  <span className="px-1 py-0.5 rounded bg-black/50">+2 more</span>
                </div>
                <div className="w-full py-1 rounded bg-orange-500 text-black text-center text-[9px] font-bold font-mono">
                  + Add 4 Ingredients to Cart
                </div>
              </div>

              {/* Hotspot 3: Morning Slot Picker */}
              <div
                onClick={() => setSelectedHotspot('morningSlot')}
                className={`p-2 rounded-2xl cursor-pointer transition-all border flex items-center justify-between ${
                  selectedHotspot === 'morningSlot'
                    ? 'bg-orange-500/30 border-orange-400 ring-2 ring-orange-500/50'
                    : 'bg-emerald-950/30 border-emerald-500/30 hover:border-emerald-500/50'
                }`}
              >
                <div className="text-[9px] font-mono leading-tight">
                  <span className="text-emerald-300 font-bold block">Tomorrow 6:30 - 7:00 AM</span>
                  <span className="text-zinc-400 text-[8px]">Guaranteed fresh breakfast prep</span>
                </div>
                <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                  FREE
                </span>
              </div>

              {/* Hotspot 4: Smart Substitute Chip */}
              <div
                onClick={() => setSelectedHotspot('substitute')}
                className={`p-2 rounded-xl cursor-pointer transition-all border ${
                  selectedHotspot === 'substitute'
                    ? 'bg-orange-500/30 border-orange-400 ring-1 ring-orange-500/50'
                    : 'bg-black/40 border-white/5 hover:border-orange-500/40'
                }`}
              >
                <div className="flex items-center justify-between text-[9px]">
                  <span className="text-zinc-400">Fresh Cream out of stock?</span>
                  <span className="text-amber-400 font-mono font-bold">Swap for Amul →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hotspot Details (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {(() => {
              const current = hotspots.find(h => h.id === selectedHotspot) || hotspots[0];
              return (
                <div className="p-6 rounded-3xl bg-[#201B17] border border-orange-500/40 space-y-5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-orange-400 uppercase font-bold tracking-wider">
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
                      <span className="text-[10px] font-mono uppercase text-orange-400 font-bold block">
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
                      <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                        Micro-Interactions & State Transitions
                      </span>
                      <p className="text-xs text-zinc-300">
                        {current.interaction}
                      </p>
                    </div>
                  </div>

                  {/* Hotspots Quick Switcher */}
                  <div className="pt-2 border-t border-white/10 flex flex-wrap gap-2">
                    {hotspots.map((h) => (
                      <button
                        key={h.id}
                        onClick={() => setSelectedHotspot(h.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                          selectedHotspot === h.id
                            ? 'bg-orange-500 text-black font-bold'
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

      {/* Tab 2: 3-Tap Recipe-to-Cart Flow */}
      {activeTab === 'cartFlow' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-3xl bg-[#201B17] border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold font-mono">
              01
            </div>
            <h4 className="text-base font-bold text-white">Select Cuisine & Servings</h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              User selects diet type (Vegetarian, High-Protein) and household size (2, 4, or 6 people). Ingredient grammages automatically calibrate.
            </p>
            <div className="p-3 rounded-xl bg-black/40 text-[11px] font-mono text-orange-300 border border-orange-500/20">
              Latency: Instant recalculation (&lt;50ms)
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#201B17] border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold font-mono">
              02
            </div>
            <h4 className="text-base font-bold text-white">Auto-Pantry Inventory Check</h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              System flags staple items the user already purchased within the last 5 days (e.g. Cooking Oil, Salt) with pre-unchecked checkboxes to save cost.
            </p>
            <div className="p-3 rounded-xl bg-black/40 text-[11px] font-mono text-amber-300 border border-amber-500/20">
              Impact: Eliminates duplicate purchases
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#201B17] border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono">
              03
            </div>
            <h4 className="text-base font-bold text-white">Batch Add to Cart (1-Tap)</h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              All 4-6 recipe ingredients are added in a single atomic batch payload with dark store proximity routing for rapid 10-minute picking.
            </p>
            <div className="p-3 rounded-xl bg-black/40 text-[11px] font-mono text-emerald-300 border border-emerald-500/20">
              Conversion: +32% checkout speed vs manual search
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 3: Scheduler UX */}
      {activeTab === 'schedulerUX' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">Delivery Window</span>
            <p className="text-lg font-bold text-orange-400">6:30 - 7:30 AM</p>
            <p className="text-xs text-zinc-400">Prioritized dark store pick-and-pack before morning rush</p>
          </div>

          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">Delivery Fee Waiver</span>
            <p className="text-lg font-bold text-emerald-400">₹0 Delivery</p>
            <p className="text-xs text-zinc-400">Automatic free shipping on scheduled weekly meal bundles</p>
          </div>

          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">Cold-Chain Prep</span>
            <p className="text-lg font-bold text-cyan-400">Insulated Bags</p>
            <p className="text-xs text-zinc-400">Dairy & fresh vegetables packed with thermal chilling strips</p>
          </div>

          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">Skip or Reschedule</span>
            <p className="text-lg font-bold text-amber-400">1-Tap Pause</p>
            <p className="text-xs text-zinc-400">Pause morning slot anytime before 11:00 PM the night prior</p>
          </div>
        </motion.div>
      )}

      {/* Tab 4: User Journey */}
      {activeTab === 'userJourney' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Legacy Grocery Search Friction */}
          <div className="p-6 rounded-3xl bg-rose-950/20 border border-rose-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-rose-950/80 border border-rose-500/40 text-xs font-mono font-bold text-rose-300">
                Legacy Manual Grocery Ordering
              </span>
              <span className="text-xs font-mono text-zinc-500">Before</span>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-400">✕</span>
                <span>Returning home tired at 7:30 PM with zero energy to plan dinner ingredients.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400">✕</span>
                <span>Searching 8 different item names manually (Onion, Paneer, Garam Masala, Cream).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400">✕</span>
                <span>Forgetting key spices, causing delivery re-orders or abandoning cooking for unhealthy takeout.</span>
              </li>
            </ul>
          </div>

          {/* Redesigned Meal Decision Engine */}
          <div className="p-6 rounded-3xl bg-emerald-950/20 border border-emerald-500/40 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-mono font-bold text-emerald-300">
                Redesigned Meal Decision Engine
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">After</span>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Personalized 7-day dinner calendar pre-loaded with quick 15-minute recipes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>3-Tap full ingredient bundle ordering with intelligent pantry deduction.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Scheduled 6:30 AM early morning delivery guarantees fresh groceries before work starts.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      )}

    </div>
  );
};
