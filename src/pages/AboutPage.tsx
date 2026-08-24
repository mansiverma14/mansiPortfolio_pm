import React, { useState } from 'react';
import { PageRoute } from '../types';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Compass, 
  TrendingUp, 
  Smartphone, 
  Layers, 
  ShieldCheck,
  Edit3,
  Camera,
  Check
} from 'lucide-react';
import { usePortfolio } from '../context/ProjectContext';
import { compressImageFile } from '../utils/imageCompressor';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { about, globalAvatar, updateGlobalAvatar } = usePortfolio();
  const [isUploading, setIsUploading] = useState(false);
  const [justUploaded, setJustUploaded] = useState(false);

  const handleAvatarFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const compressed = await compressImageFile(file, 800, 1000, 0.85);
      updateGlobalAvatar(compressed);
      setJustUploaded(true);
      setTimeout(() => setJustUploaded(false), 2500);
    } catch (err) {
      console.error(err);
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  return (
    <div className="relative min-h-[92vh] px-4 sm:px-6 lg:pl-56 lg:pr-12 py-12">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto space-y-10">

        {/* Section Header Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-[#121212] font-bold text-xs shadow-md">
              <span>{about.badgeText || 'Get to Know Me'}</span>
            </div>

            <button
              onClick={() => onNavigate('admin')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#202020] border border-[#333333] hover:border-white text-xs font-mono text-[#A0A0A0] hover:text-white transition-all"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit About Page</span>
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            {about.headline || 'Building Scalable, Intuitive & User-Centric Consumer Products'}
          </h1>
        </motion.div>

        {/* 2-Column Grid Layout matching Screenshot 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column Profile Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 bg-[#1E1E1E] border border-[#2D2D2D] rounded-[32px] p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden"
          >
            {/* Top Accent Highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* Circular Avatar with Camera Button & Badge */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 p-1 bg-[#252525] relative">
                  <img
                    src={globalAvatar || '/profile.jpg'}
                    alt={about.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/profile.jpg';
                    }}
                    className="w-full h-full rounded-full object-cover object-top filter brightness-[0.98]"
                    referrerPolicy="no-referrer"
                  />

                  {isUploading && (
                    <div className="absolute inset-0 rounded-full bg-black/60 flex items-center justify-center">
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    </div>
                  )}
                </div>

                {/* Upload Button overlay / trigger */}
                <label
                  className="absolute bottom-0 right-0 p-2 rounded-full bg-white text-[#121212] hover:bg-[#EAEAEA] shadow-xl cursor-pointer transition-transform hover:scale-110 flex items-center justify-center"
                  title="Upload New Portrait"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarFile}
                    className="hidden"
                  />
                </label>

                {justUploaded && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-emerald-500 text-black text-[10px] font-bold shadow-lg flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>Saved!</span>
                  </div>
                )}
              </div>
            </div>

            {/* Profile Name & Subtitle */}
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-extrabold text-white">{about.name}</h2>
              <p className="text-sm font-medium text-[#A0A0A0]">
                {about.roleTitle}
              </p>
            </div>

            {/* Contact Detail Cards */}
            <div className="space-y-2.5 pt-2">
              <a
                href={`mailto:${about.email}`}
                className="w-full p-3.5 rounded-2xl bg-[#252525] hover:bg-[#2C2C2C] border border-[#333333] flex items-center gap-3 text-xs text-[#CCCCCC] transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#1E1E1E] flex items-center justify-center text-[#A0A0A0] group-hover:text-white">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{about.email}</span>
              </a>

              <div className="w-full p-3.5 rounded-2xl bg-[#252525] border border-[#333333] flex items-center gap-3 text-xs text-[#CCCCCC]">
                <div className="w-7 h-7 rounded-lg bg-[#1E1E1E] flex items-center justify-center text-[#A0A0A0] shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 truncate">
                  <a href="tel:8445055267" className="hover:text-white transition-colors underline-offset-2 hover:underline">
                    +91 8445055267
                  </a>
                  <span className="text-[#666666]">/</span>
                  <a href="tel:8755991920" className="hover:text-white transition-colors underline-offset-2 hover:underline">
                    +91 8755991920
                  </a>
                </div>
              </div>

              <div className="w-full p-3.5 rounded-2xl bg-[#252525] border border-[#333333] flex items-center gap-3 text-xs text-[#CCCCCC]">
                <div className="w-7 h-7 rounded-lg bg-[#1E1E1E] flex items-center justify-center text-[#A0A0A0]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{about.location}</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3.5 rounded-full bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column Narrative & Metrics (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Story Paragraphs */}
            <div className="space-y-4 text-[#A0A0A0] text-sm sm:text-base leading-relaxed">
              {about.narrativeParagraphs && about.narrativeParagraphs.length > 0 ? (
                about.narrativeParagraphs.map((para, index) => (
                  <p key={index}>
                    {para}
                  </p>
                ))
              ) : (
                <p>No narrative content added yet.</p>
              )}
            </div>

            {/* Metric Stat Cards in Dark Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {(about.stats || []).map((stat) => (
                <div key={stat.id} className="p-5 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] text-center space-y-1">
                  <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs text-[#888888] font-medium">{stat.label}</div>
                  {stat.subtext && (
                    <div className="text-[10px] text-[#666666] font-mono">{stat.subtext}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Core Competencies Chips */}
            {about.competencies && about.competencies.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  Core Competencies & Product Superpowers
                </h3>
                <div className="flex flex-wrap gap-2">
                  {about.competencies.map((comp) => (
                    <span
                      key={comp}
                      className="px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#2E2E2E] text-xs font-medium text-[#CCCCCC] hover:border-white/40 transition-colors"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Highlight Quote */}
            <div className="p-6 rounded-2xl bg-[#181818] border-l-4 border-white space-y-2">
              <p className="text-xs sm:text-sm text-[#CCCCCC] italic leading-relaxed">
                "The strongest consumer products are built at the intersection of deep user psychology, frictionless usability, and engineering feasibility."
              </p>
              <span className="text-[11px] font-mono text-[#888888] block">
                — Mansi Shrivastav · Product Manager
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
};
