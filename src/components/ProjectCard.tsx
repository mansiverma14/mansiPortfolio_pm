import React from 'react';
import { Project, PageRoute } from '../types';
import { ArrowRight, Sparkles, ExternalLink, Shield, DollarSign, FolderGit2, PlayCircle, Lock, Cloud, Image as ImageIcon } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onNavigate: (route: PageRoute) => void;
  onOpenQuickView: (project: Project) => void;
  isLarge?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onNavigate,
  onOpenQuickView,
  isLarge = false,
}) => {
  const handleClick = () => {
    if (project.deepDiveRoute) {
      onNavigate(project.deepDiveRoute);
    } else {
      onOpenQuickView(project);
    }
  };

  const coverImg = project.coverImage || (project.screenshots && project.screenshots[0]?.url);
  const screenshotCount = (project.screenshots || []).length;

  return (
    <div
      onClick={handleClick}
      className={`group relative rounded-3xl bg-white/75 border border-[#4A203F]/10 p-6 sm:p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(74,32,63,0.12)] transition-all duration-300 backdrop-blur-md cursor-pointer flex flex-col justify-between hover:border-[#713B5D]/30 ${
        isLarge ? 'md:col-span-2 bg-gradient-to-br from-white/90 to-[#F4EEE8]/90' : ''
      }`}
    >
      <div className="space-y-4">
        
        {/* Cover image if available */}
        {coverImg && (
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-100 border border-[#4A203F]/8 group-hover:scale-[1.01] transition-transform duration-300">
            <img
              src={coverImg}
              alt={project.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {screenshotCount > 1 && (
              <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-mono-code font-bold flex items-center gap-1">
                <ImageIcon className="w-3 h-3" />
                {screenshotCount} screens
              </span>
            )}
          </div>
        )}

        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#713B5D]">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold bg-[#E97868]/15 text-[#C65343]">
              Featured
            </span>
          )}
        </div>

        {/* Project Name */}
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#241F24] tracking-tight group-hover:text-[#4A203F] transition-colors">
            {project.name}
          </h3>
          <span className="text-xs text-[#6F666B] font-medium">Role: {project.role}</span>
        </div>

        {/* Short Problem Statement */}
        <p className="text-sm text-[#6F666B] leading-relaxed">
          "{project.shortProblem}"
        </p>

        {/* Visual Mockup / Product Areas Preview */}
        {project.productAreas && project.productAreas.length > 0 && (
          <div className="p-3.5 rounded-2xl bg-[#F4EEE8]/70 border border-[#4A203F]/6 flex items-center justify-between text-xs font-mono-code text-[#4A203F] group-hover:bg-[#713B5D]/8 transition-colors">
            <div className="flex items-center gap-2">
              {project.id === 'private-vault' && <Shield className="w-4 h-4 text-[#713B5D]" />}
              {project.id === 'monetization-strategy' && <DollarSign className="w-4 h-4 text-[#D99A3D]" />}
              {project.id === 'file-manager' && <Cloud className="w-4 h-4 text-[#E97868]" />}
              <span className="font-semibold">{project.productAreas[0]}</span>
            </div>
            <span className="text-[10px] text-[#6F666B]">
              {project.productAreas.length > 1 ? `+${project.productAreas.length - 1} areas` : ''}
            </span>
          </div>
        )}

        {/* Tag Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono-code font-medium px-2.5 py-1 rounded-lg bg-white border border-[#4A203F]/8 text-[#6F666B]"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

      {/* Card Action Link */}
      <div className="pt-6 border-t border-[#4A203F]/6 flex items-center justify-between text-xs font-bold text-[#4A203F] group-hover:text-[#E97868] transition-colors">
        <span className="flex items-center gap-1.5">
          {project.deepDiveRoute ? 'View full case study' : 'View project details'}
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>

        {project.externalReferenceUrl && (
          <span className="text-[10px] font-mono-code text-[#6F666B] flex items-center gap-1">
            Reference UI ↗
          </span>
        )}
      </div>

    </div>
  );
};
