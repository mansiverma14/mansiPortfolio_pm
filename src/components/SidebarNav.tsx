import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  Home,
  User,
  FileText,
  Image as ImageIcon,
  Layers,
  Mail,
  Sliders,
  Globe,
  Linkedin,
  Github,
  Code,
  Sparkles,
  ExternalLink,
  ShoppingBag,
  Bike,
  Instagram,
  Activity,
  Shield,
  ChevronDown
} from 'lucide-react';

interface SidebarNavProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({ currentRoute, onRouteChange }) => {
  const [showCaseStudies, setShowCaseStudies] = useState(true);

  const navItems = [
    { label: 'Home', route: 'home' as PageRoute, icon: Home },
    { label: 'About', route: 'about' as PageRoute, icon: User },
    { label: 'Portfolio', route: 'work' as PageRoute, icon: ImageIcon },
    { label: '0 to 1 Apps', route: 'zero-to-production' as PageRoute, icon: Code },
    { label: 'AI Studies', route: 'ai-implementations' as PageRoute, icon: Sparkles },
    { label: 'Resume', route: 'resume' as PageRoute, icon: FileText },
    { label: 'Skills', route: 'skills' as PageRoute, icon: Layers },
    { label: 'Contact', route: 'contact' as PageRoute, icon: Mail },
  ];

  const caseStudies = [
    { label: 'VPN Monetization', route: 'vpn-transformation' as PageRoute, icon: Shield, color: 'text-blue-400' },
    { label: 'FitLife Pro (0-to-1)', route: 'fitlife-pro' as PageRoute, icon: Activity, color: 'text-emerald-400' },
    { label: 'Instagram Feed', route: 'instagram-feed' as PageRoute, icon: Instagram, color: 'text-pink-400' },
    { label: 'Swiggy Instamart', route: 'swiggy-instamart' as PageRoute, icon: ShoppingBag, color: 'text-amber-400' },
    { label: 'Rapido Pass', route: 'rapido-commuter-pass' as PageRoute, icon: Bike, color: 'text-yellow-400' },
  ];

  return (
    <>
      {/* Desktop & Tablet Floating Left Sidebar */}
      <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="w-[195px] max-h-[92vh] overflow-y-auto bg-[#1E1E1E]/95 backdrop-blur-xl border border-[#2D2D2D] rounded-3xl p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between custom-scrollbar">
          {/* Main Navigation List */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => onRouteChange(item.route)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-2xl text-[12.5px] font-medium transition-all group text-left ${
                    isActive
                      ? 'bg-[#2A2A2A] text-white font-semibold shadow-inner'
                      : 'text-[#A0A0A0] hover:text-white hover:bg-[#252525]'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-transform group-hover:scale-110 shrink-0 ${
                      isActive ? 'text-white' : 'text-[#888888] group-hover:text-white'
                    }`}
                  />
                  <span className="truncate">{item.label}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
                  )}
                </button>
              );
            })}

            {/* Case Studies Sub-Group */}
            <div className="pt-2 mt-1.5 border-t border-[#2A2A2A]">
              <div className="px-3 py-1 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-[#777777]">
                <span>Case Studies</span>
                <span className="text-[9px] px-1.5 py-0.2 bg-purple-950/80 text-purple-300 border border-purple-800/40 rounded">{caseStudies.length}</span>
              </div>
              <div className="space-y-0.5 mt-1">
                {caseStudies.map((study) => {
                  const Icon = study.icon;
                  const isActive = currentRoute === study.route;
                  return (
                    <button
                      key={study.route}
                      onClick={() => onRouteChange(study.route)}
                      className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-xl text-[11.5px] font-medium transition-all group text-left ${
                        isActive
                          ? 'bg-[#2A2A2A] text-white font-bold shadow-inner'
                          : 'text-[#909090] hover:text-white hover:bg-[#252525]'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${study.color} shrink-0`} />
                      <span className="truncate">{study.label}</span>
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Admin Studio Quick Link */}
            <div className="pt-2 mt-1.5 border-t border-[#2A2A2A]">
              <button
                onClick={() => onRouteChange('admin')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-2xl text-[11.5px] font-medium transition-all group text-left ${
                  currentRoute === 'admin'
                    ? 'bg-[#2A2A2A] text-white font-semibold'
                    : 'text-[#808080] hover:text-white hover:bg-[#252525]'
                }`}
                title="Edit Projects & Screenshots"
              >
                <Sliders className="w-3.5 h-3.5 text-[#888888] group-hover:text-white shrink-0" />
                <span>Admin Studio</span>
              </button>
            </div>
          </nav>

          {/* Social Circle Icons at bottom of Sidebar */}
          <div className="mt-4 pt-3 border-t border-[#2A2A2A] flex items-center justify-between px-1">
            <a
              href="https://private-vault-ui.ui-rareprob.chatgpt.site"
              target="_blank"
              rel="noreferrer"
              title="Private Vault Reference"
              className="w-7 h-7 rounded-full bg-[#262626] hover:bg-[#333333] text-[#A0A0A0] hover:text-white flex items-center justify-center transition-all hover:scale-110"
            >
              <Globe className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.linkedin.com/in/mansi-shrivastav2000"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
              className="w-7 h-7 rounded-full bg-[#262626] hover:bg-[#333333] text-[#A0A0A0] hover:text-white flex items-center justify-center transition-all hover:scale-110"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/mansiverma14"
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
              className="w-7 h-7 rounded-full bg-[#262626] hover:bg-[#333333] text-[#A0A0A0] hover:text-white flex items-center justify-center transition-all hover:scale-110"
            >
              <Github className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => onRouteChange('work')}
              title="View Projects"
              className="w-7 h-7 rounded-full bg-[#262626] hover:bg-[#333333] text-[#A0A0A0] hover:text-white flex items-center justify-center transition-all hover:scale-110"
            >
              <Code className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Top/Bottom Responsive Navigation Bar */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-md bg-[#1E1E1E]/95 backdrop-blur-xl border border-[#2D2D2D] rounded-full p-2 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentRoute === item.route;
          return (
            <button
              key={item.route}
              onClick={() => onRouteChange(item.route)}
              className={`p-2.5 rounded-full transition-all flex flex-col items-center justify-center ${
                isActive ? 'bg-[#2A2A2A] text-white shadow-md' : 'text-[#888888] hover:text-white'
              }`}
              title={item.label}
            >
              <Icon className="w-4 h-4" />
            </button>
          );
        })}
        <button
          onClick={() => onRouteChange('admin')}
          className={`p-2.5 rounded-full transition-all flex flex-col items-center justify-center ${
            currentRoute === 'admin' ? 'bg-[#2A2A2A] text-white' : 'text-[#888888] hover:text-white'
          }`}
          title="Admin"
        >
          <Sliders className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};
