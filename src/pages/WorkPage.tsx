import React, { useState } from 'react';
import { PageRoute, Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { useProjects } from '../context/ProjectContext';
import {
  Plus,
  ArrowRight,
  ExternalLink,
  Sliders,
  Sparkles,
  Layers,
  Image as ImageIcon,
  Check
} from 'lucide-react';

interface WorkPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuickView: (project: Project) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate, onOpenQuickView }) => {
  const { projects } = useProjects();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Product Strategy & Discovery',
    'Social & Media',
    'Mobility & Marketplace',
    'Quick-Commerce',
    'AI & Machine Learning',
    'Consumer Mobile',
    'Monetization & Subscriptions',
    'Growth & Retention',
    'Security & Utilities'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => {
        const cat = selectedCategory.toLowerCase();
        if (cat.includes('social') && (p.id.includes('instagram') || p.category.toLowerCase().includes('social'))) return true;
        if ((cat.includes('mobility') || cat.includes('marketplace')) && (p.id.includes('rapido') || p.category.toLowerCase().includes('mobility') || p.category.toLowerCase().includes('marketplace'))) return true;
        if (cat.includes('quick-commerce') && (p.id.includes('swiggy') || p.category.toLowerCase().includes('quick-commerce'))) return true;
        if (cat.includes('strategy') && (p.id.includes('instagram') || p.id.includes('swiggy') || p.tags.some(t => t.toLowerCase().includes('strategy')) || p.category.toLowerCase().includes('strategy'))) return true;
        if (cat.includes('monetization') && (p.category.toLowerCase().includes('monetization') || p.tags.some(t => t.toLowerCase().includes('subscription') || t.toLowerCase().includes('monetization')))) return true;
        
        return (
          p.category.toLowerCase().includes(cat) ||
          p.tags.some(t => t.toLowerCase().includes(cat) || cat.includes(t.toLowerCase())) ||
          p.productAreas.some(a => a.toLowerCase().includes(cat) || cat.includes(a.toLowerCase()))
        );
      });

  return (
    <div className="relative min-h-[92vh] px-4 sm:px-6 lg:pl-56 lg:pr-12 py-12">
      <div className="w-full max-w-6xl mx-auto space-y-10">

        {/* Section Top Header matching Screenshot 4 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 text-white font-extrabold text-3xl sm:text-4xl tracking-tight">
            <span className="h-[2px] w-12 bg-white/30 rounded-full" />
            <span>Portfolio & Case Studies</span>
            <span className="h-[2px] w-12 bg-white/30 rounded-full" />
          </div>
          <p className="text-sm text-[#9E9E9E]">
            Explore deep-dive product management case studies, consumer mobile architecture, marketplace mechanics, monetization funnels, and 0-to-1 applications.
          </p>
        </motion.div>

        {/* Top Flagship Case Studies Showcase (Instagram · Swiggy · Rapido · 0-to-1 Apps) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="p-6 rounded-[28px] bg-gradient-to-b from-[#22222E] via-[#1A1A24] to-[#16161E] border border-white/10 shadow-2xl space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-[11px] font-mono font-bold text-purple-300 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Featured Product Management Deep Dives</span>
              </div>
              <h3 className="text-xl font-extrabold text-white tracking-tight">
                Flagship Case Studies & Live Interactive Prototypes
              </h3>
            </div>
            <span className="text-xs text-[#A0A0A0] font-mono">
              Click any card to launch full interactive study →
            </span>
          </div>

          {/* Quick-Jump 3 Major Studies Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Instagram */}
            <div
              onClick={() => onNavigate('instagram-feed')}
              className="group p-4 rounded-2xl bg-[#23232C] hover:bg-[#2A2A36] border border-pink-500/30 hover:border-pink-500/70 transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 shadow-lg hover:scale-[1.02]"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 font-mono text-[10px] font-bold border border-pink-500/30">
                    Social Graph & Feeds
                  </span>
                  <ArrowRight className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                  Instagram — Rethinking Feed Experience
                </h4>
                <p className="text-[11px] text-[#A0A0A0] line-clamp-2">
                  Friends Catch-Up Digest, Dual Feed Switch (Friends vs Explore), and 1-Tap DM Reaction Bridge.
                </p>
              </div>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span className="text-pink-400 font-bold">+48% Friend Views</span>
                <span>Launch Case Study →</span>
              </div>
            </div>

            {/* Swiggy Instamart */}
            <div
              onClick={() => onNavigate('swiggy-instamart')}
              className="group p-4 rounded-2xl bg-[#23232C] hover:bg-[#2A2A36] border border-amber-500/30 hover:border-amber-500/70 transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 shadow-lg hover:scale-[1.02]"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold border border-amber-500/30">
                    Quick-Commerce
                  </span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  Swiggy Instamart — Meal Decision Engine
                </h4>
                <p className="text-[11px] text-[#A0A0A0] line-clamp-2">
                  7-Day automated meal planner, smart 3-tap recipe ordering, and morning scheduled savings slots.
                </p>
              </div>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span className="text-amber-400 font-bold">+35% Order Freq</span>
                <span>Launch Case Study →</span>
              </div>
            </div>

            {/* Rapido */}
            <div
              onClick={() => onNavigate('rapido-commuter-pass')}
              className="group p-4 rounded-2xl bg-[#23232C] hover:bg-[#2A2A36] border border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 shadow-lg hover:scale-[1.02]"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-yellow-500/20 text-yellow-300 font-mono text-[10px] font-bold border border-yellow-500/30">
                    Mobility Marketplace
                  </span>
                  <ArrowRight className="w-4 h-4 text-yellow-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-yellow-300 transition-colors">
                  Rapido — Peak Commuter Pass Subscription
                </h4>
                <p className="text-[11px] text-[#A0A0A0] line-clamp-2">
                  Two-sided marketplace lock: scheduled peak slots, 10-min arrival guarantee, and ₹280Cr ARR model.
                </p>
              </div>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span className="text-yellow-400 font-bold">+35% D7 Retention</span>
                <span>Launch Case Study →</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 0 to Production Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="p-6 rounded-3xl bg-gradient-to-r from-[#1C1C2A] via-[#1E242C] to-[#1C1C2A] border border-emerald-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-[11px] font-mono font-bold text-emerald-300 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>0-to-1 Product Suite</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              7 Applications Built from 0 to Production
            </h3>
            <p className="text-xs text-zinc-300 max-w-2xl leading-relaxed">
              Explore PRD requirements, interactive prototypes, and UX flow diagrams for CalLock, ShareOn, Screen Recorder, Smart Gallery, Cleaner, PDF Reader, and Gamified Fitness.
            </p>
          </div>
          <button
            onClick={() => onNavigate('zero-to-production')}
            className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shrink-0 flex items-center gap-2"
          >
            <span>Explore 0 to Production Suite</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* 2-Column Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Project Categories Filter Card (3.5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 bg-[#1E1E1E] border border-[#2D2D2D] rounded-[28px] p-6 space-y-4 shadow-2xl sticky top-24"
          >
            <div className="border-b border-[#2C2C2C] pb-3 flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Project Categories</h3>
              <button
                onClick={() => onNavigate('admin')}
                className="text-[11px] font-semibold text-[#A0A0A0] hover:text-white flex items-center gap-1 transition-colors"
                title="Edit Projects in Admin Studio"
              >
                <Sliders className="w-3 h-3" />
                <span>Manage</span>
              </button>
            </div>

            <div className="space-y-1.5">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between group ${
                      isSelected
                        ? 'bg-[#2A2A2A] text-white font-bold shadow-inner'
                        : 'text-[#9E9E9E] hover:text-white hover:bg-[#242424]'
                    }`}
                  >
                    <span>{cat === 'All' ? 'All Projects' : cat}</span>
                    {isSelected && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Admin Callout */}
            <div className="pt-4 border-t border-[#2C2C2C]">
              <button
                onClick={() => onNavigate('admin')}
                className="w-full py-2.5 rounded-xl bg-[#262626] hover:bg-[#303030] text-[#CCCCCC] hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-[#333333]"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add / Edit Screenshots</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Project Grid (8.5 cols) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => {
                  const cover = project.coverImage || (project.screenshots && project.screenshots[0]?.url) || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop';
                  const tagsString = project.tags.slice(0, 4).join(', ');

                  return (
                    <motion.div
                      layout
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group relative bg-[#1E1E1E] border border-[#2D2D2D] hover:border-[#444444] rounded-[24px] overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col"
                    >
                      {/* Image Container with Hover Actions */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#262626]">
                        <img
                          src={cover}
                          alt={project.name}
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />

                        {/* Dark Gradient Overlay for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/95 via-[#141414]/40 to-transparent" />

                        {/* Screenshot Count Badge if available */}
                        {project.screenshots && project.screenshots.length > 0 && (
                          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/10 flex items-center gap-1">
                            <ImageIcon className="w-3 h-3 text-[#A0A0A0]" />
                            <span>{project.screenshots.length} Screens</span>
                          </div>
                        )}

                        {/* Interactive Hover Floating Buttons (+ and ->) matching Screenshot 4 */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                          <div className="space-y-1 max-w-[70%]">
                            <h4 className="text-base sm:text-lg font-extrabold text-white leading-snug drop-shadow-md">
                              {project.name}
                            </h4>
                            <p className="text-[11px] font-mono text-[#CCCCCC] truncate">
                              {tagsString}
                            </p>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-2 shrink-0">
                            {/* Quick View Modal (+) Button */}
                            <button
                              onClick={() => onOpenQuickView(project)}
                              className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#121212] flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                              title="Quick View & Screenshots"
                            >
                              <Plus className="w-4 h-4 font-bold" />
                            </button>

                            {/* Deep Dive (->) Button */}
                            <button
                              onClick={() => {
                                if (project.deepDiveRoute) {
                                  onNavigate(project.deepDiveRoute);
                                } else if (project.externalReferenceUrl) {
                                  window.open(project.externalReferenceUrl, '_blank');
                                } else {
                                  onOpenQuickView(project);
                                }
                              }}
                              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#121212] backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                              title="Open Details"
                            >
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                      </div>

                      {/* Brief Problem Summary underneath */}
                      <div className="p-4 space-y-2 flex-1 flex flex-col justify-between bg-[#1E1E1E]">
                        <p className="text-xs text-[#9E9E9E] line-clamp-2 leading-relaxed">
                          {project.shortProblem}
                        </p>
                        
                        <div className="pt-2 flex items-center justify-between text-[11px] text-[#777777] border-t border-[#292929]">
                          <span className="font-mono">{project.category}</span>
                          <span className="font-semibold text-[#CCCCCC]">{project.role}</span>
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
