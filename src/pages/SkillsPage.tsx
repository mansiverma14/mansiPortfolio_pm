import React from 'react';
import { PageRoute } from '../types';
import { motion } from 'motion/react';
import {
  Palette,
  Diamond,
  LineChart,
  Megaphone,
  Code2,
  Video,
  Sparkles,
  Layers,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Users,
  Award,
  Compass,
  Sliders,
  Edit3,
  LucideIcon
} from 'lucide-react';
import { usePortfolio } from '../context/ProjectContext';

interface SkillsPageProps {
  onNavigate: (route: PageRoute) => void;
}

const ICON_MAP: Record<string, LucideIcon> = {
  Palette,
  Diamond,
  LineChart,
  Megaphone,
  Code2,
  Video,
  Sparkles,
  Layers,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Users,
  Award,
  Compass,
  Sliders
};

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate }) => {
  const { skills } = usePortfolio();

  return (
    <div className="relative min-h-[92vh] px-4 sm:px-6 lg:pl-56 lg:pr-12 py-12">
      <div className="w-full max-w-6xl mx-auto space-y-12">

        {/* Section Top Header matching Screenshot 5 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 text-white font-extrabold text-3xl sm:text-4xl tracking-tight">
            <span className="h-[2px] w-12 bg-white/30 rounded-full" />
            <span>{skills.headerTitle || 'Skills'}</span>
            <span className="h-[2px] w-12 bg-white/30 rounded-full" />
          </div>
          <p className="text-sm text-[#9E9E9E]">
            {skills.headerSubtitle || 'A comprehensive toolkit of modern product frameworks, monetization mechanics, mobile engineering, and data analytics tools I use to build scalable products.'}
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('admin')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#202020] border border-[#333333] hover:border-white text-xs font-mono text-[#A0A0A0] hover:text-white transition-all"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Skills Bento Cards</span>
            </button>
          </div>
        </motion.div>

        {/* Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(skills.cards || []).map((card, index) => {
            const Icon = ICON_MAP[card.iconName] || Palette;
            return (
              <motion.div
                key={card.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-[#1E1E1E] border border-[#2D2D2D] hover:border-[#4A4A4A] rounded-[28px] p-7 space-y-5 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Icon in Rounded Box */}
                <div className="w-12 h-12 rounded-2xl bg-[#282828] border border-[#383838] flex items-center justify-center text-white group-hover:scale-110 group-hover:border-white/30 transition-all duration-300 shadow-md">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Card Title & Skills */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9E9E9E] leading-relaxed">
                    {card.skills}
                  </p>
                  {card.description && (
                    <p className="text-xs text-[#777777] italic pt-1 border-t border-[#262626]">
                      {card.description}
                    </p>
                  )}
                </div>

                {/* Bottom Highlight Tag */}
                <div className="pt-2 border-t border-[#292929] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#777777]">Focus Area</span>
                  <span className="text-[11px] font-semibold text-[#CCCCCC] px-2.5 py-0.5 rounded-md bg-[#282828] border border-[#333333]">
                    {card.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-8 rounded-[32px] bg-[#1A1A1A] border border-[#2D2D2D] text-center space-y-4 shadow-xl"
        >
          <h3 className="text-xl font-bold text-white">
            {skills.calloutTitle || 'Looking for someone who bridges Product, Growth & Engineering?'}
          </h3>
          <p className="text-xs sm:text-sm text-[#9E9E9E] max-w-xl mx-auto">
            {skills.calloutSubtitle || 'I combine hands-on technical architecture with user empathy and commercial acumen to build high-impact consumer mobile applications.'}
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA] transition-all shadow-md"
            >
              {skills.calloutButtonText || 'Discuss Opportunities'}
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
