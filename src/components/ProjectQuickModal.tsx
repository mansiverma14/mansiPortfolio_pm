import React, { useState } from 'react';
import { Project, PageRoute } from '../types';
import {
  X,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  Sliders
} from 'lucide-react';

interface ProjectQuickModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const ProjectQuickModal: React.FC<ProjectQuickModalProps> = ({
  project,
  onClose,
  onNavigate,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  if (!project) return null;

  const screenshots = project.screenshots || [];
  const hasScreenshots = screenshots.length > 0;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-[#1C1C1C] border border-[#333333] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] space-y-6 text-white animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Buttons */}
        <div className="absolute top-6 right-6 flex items-center gap-2">
          <button
            onClick={() => {
              onClose();
              onNavigate('admin');
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#262626] border border-[#3A3A3A] hover:bg-[#333333] text-[#CCCCCC] text-xs font-semibold transition-colors"
            title="Edit this project in Admin Studio"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Edit in Admin</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#262626] hover:bg-[#333333] text-white border border-[#3A3A3A] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Header */}
        <div className="space-y-2 pr-28">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A0A0A0]">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white text-[#121212]">
                Featured
              </span>
            )}
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.name}
          </h3>
          <p className="text-xs text-[#888888] font-mono">
            Role: {project.role} {project.timeline ? `· ${project.timeline}` : ''}
          </p>
        </div>

        {/* SCREENSHOT GALLERY SECTION */}
        {hasScreenshots ? (
          <div className="space-y-3 p-4 rounded-2xl bg-[#242424] border border-[#333333]">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold uppercase text-[#CCCCCC] flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-white" />
                <span>Product Screenshots & Visuals ({screenshots.length})</span>
              </span>
              <span className="text-[11px] font-mono text-[#888888]">
                {activeImageIndex + 1} / {screenshots.length}
              </span>
            </div>

            {/* Active Large Image Display */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/40 border border-[#333333]">
              <img
                src={screenshots[activeImageIndex]?.url}
                alt={screenshots[activeImageIndex]?.title || 'Screenshot'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />

              {/* Prev / Next navigation arrows if > 1 */}
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 shadow-md transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 shadow-md transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Screenshot Title & Caption */}
            <div className="space-y-0.5 px-1">
              <h5 className="text-xs font-bold text-white">
                {screenshots[activeImageIndex]?.title || 'Product Screen'}
              </h5>
              {screenshots[activeImageIndex]?.caption && (
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  {screenshots[activeImageIndex]?.caption}
                </p>
              )}
            </div>

            {/* Thumbnail Strip if multiple */}
            {screenshots.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#333333] pb-1">
                {screenshots.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      activeImageIndex === idx ? 'border-white scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={s.url}
                      alt={s.title || ''}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          project.coverImage && (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/40 border border-[#333333]">
              <img
                src={project.coverImage}
                alt={project.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          )
        )}

        {/* Short Problem Hook */}
        <p className="text-sm sm:text-base text-white font-medium italic">
          "{project.shortProblem}"
        </p>

        {/* Full Problem Context */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#242424] border border-[#333333] text-xs text-[#A0A0A0] leading-relaxed space-y-1">
          <span className="font-mono uppercase font-bold text-white block">Problem Context:</span>
          <p className="text-[#CCCCCC]">{project.fullProblem}</p>
        </div>

        {/* Solution Narrative */}
        {project.solution && (
          <div className="p-4 sm:p-5 rounded-2xl bg-[#242424] border border-[#333333] text-xs text-[#A0A0A0] leading-relaxed space-y-1">
            <span className="font-mono uppercase font-bold text-white block">Solution & Approach:</span>
            <p className="text-[#CCCCCC]">{project.solution}</p>
          </div>
        )}

        {/* Product Areas Covered */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase text-white block">
            Product Areas & Scope:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {project.productAreas.map((area, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#252525] border border-[#333333] text-[#CCCCCC]">
                <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#252525] text-[#A0A0A0] border border-[#333333]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-[#333333] flex flex-wrap items-center justify-between gap-3">
          {project.externalReferenceUrl ? (
            <a
              href={project.externalReferenceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white hover:underline"
            >
              <span>Explore Live Reference UI</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-[11px] font-mono text-[#888888]">Verified Case Study</span>
          )}

          {project.deepDiveRoute ? (
            <button
              onClick={() => {
                onClose();
                onNavigate(project.deepDiveRoute!);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#121212] text-xs font-bold hover:bg-[#EAEAEA] transition-all shadow-md"
            >
              <span>Read Full Deep Dive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-white text-[#121212] text-xs font-bold hover:bg-[#EAEAEA] transition-colors"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
