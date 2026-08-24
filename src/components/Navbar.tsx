import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { PROFILE_DATA } from '../data/portfolioData';
import { Menu, X, ArrowRight, Shield, DollarSign, Layers, User, FileText, Briefcase, Settings } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onRouteChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute; icon?: any; badge?: string }[] = [
    { label: 'Work', route: 'work' },
    { label: 'Product', route: 'product' },
    { label: 'Monetization', route: 'monetization' },
    { label: 'Private Vault', route: 'private-vault', badge: 'Featured' },
    { label: 'About', route: 'about' },
    { label: 'Resume', route: 'resume' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-xl border border-[#4A203F]/12 shadow-[0_10px_30px_-10px_rgba(74,32,63,0.08)]'
            : 'bg-white/60 backdrop-blur-md border border-[#4A203F]/6'
        }`}
      >
        {/* Brand Logo */}
        <button
          onClick={() => {
            onRouteChange('home');
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-2 text-left group"
        >
          <div className="w-8 h-8 rounded-full bg-[#4A203F] text-[#FAF7F2] flex items-center justify-center font-bold text-xs shadow-xs group-hover:scale-105 transition-transform">
            M
          </div>
          <div>
            <span className="font-extrabold tracking-tight text-sm text-[#241F24] block">
              MANSI
            </span>
            <span className="text-[10px] font-mono-code text-[#713B5D] block -mt-0.5">
              Product Manager
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-[#6F666B]">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => onRouteChange(item.route)}
                className={`relative px-3.5 py-2 rounded-full transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#4A203F] font-bold bg-[#713B5D]/10'
                    : 'hover:text-[#241F24] hover:bg-black/4'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[9px] font-mono-code font-bold uppercase rounded-full bg-[#E97868]/15 text-[#E97868]">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button & Admin Link */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={() => onRouteChange('admin')}
            className={`p-2 rounded-full border transition-all ${
              currentRoute === 'admin'
                ? 'bg-[#4A203F] text-white border-[#4A203F]'
                : 'bg-white/80 border-[#4A203F]/12 text-[#713B5D] hover:bg-[#F4EEE8]'
            }`}
            title="Admin Studio (Edit Projects & Screenshots)"
          >
            <Settings className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onRouteChange('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#4A203F] text-[#FAF7F2] text-xs font-semibold hover:bg-[#713B5D] transition-all shadow-xs hover:shadow-md active:scale-98"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F4A095]" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onRouteChange('admin')}
            className={`p-2 rounded-xl text-xs border ${
              currentRoute === 'admin' ? 'bg-[#4A203F] text-white' : 'bg-white text-[#713B5D] border-[#4A203F]/15'
            }`}
            title="Admin"
          >
            <Settings className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#241F24] hover:bg-black/5 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-3xl bg-white/95 backdrop-blur-2xl border border-[#4A203F]/10 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => {
                    onRouteChange(item.route);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full px-4 py-3 rounded-2xl text-left text-sm flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#713B5D]/10 text-[#4A203F] font-bold'
                      : 'text-[#241F24] hover:bg-black/4'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-mono-code font-bold uppercase rounded-full bg-[#E97868]/15 text-[#E97868]">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <button
              onClick={() => {
                onRouteChange('admin');
                setMobileMenuOpen(false);
              }}
              className={`w-full px-4 py-3 rounded-2xl text-left text-sm flex items-center justify-between transition-colors ${
                currentRoute === 'admin'
                  ? 'bg-[#4A203F] text-white font-bold'
                  : 'text-[#713B5D] hover:bg-black/4 font-semibold'
              }`}
            >
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span>Admin Studio</span>
              </div>
              <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded-full bg-[#E97868]/15 text-[#E97868]">
                Editor
              </span>
            </button>
          </div>

          <div className="pt-3 border-t border-[#4A203F]/8">
            <button
              onClick={() => {
                onRouteChange('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-2xl bg-[#4A203F] text-[#FAF7F2] text-xs font-semibold text-center flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Let's Talk →</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
