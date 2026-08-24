import React from 'react';
import { Briefcase, Code2, Compass, Smartphone } from 'lucide-react';

export const HeroMetrics: React.FC = () => {
  const metrics = [
    {
      value: '5+ Years',
      label: 'TOTAL EXPERIENCE',
      sub: 'Engineering & Product',
      icon: Briefcase,
      accent: '#713B5D',
      bgClass: 'bg-[#713B5D]/10 text-[#4A203F]',
    },
    {
      value: '3 Years',
      label: 'ANDROID DEVELOPMENT',
      sub: 'Kotlin, ExoPlayer & Architecture',
      icon: Code2,
      accent: '#D99A3D',
      bgClass: 'bg-[#D99A3D]/10 text-[#B87A1E]',
    },
    {
      value: '2 Years',
      label: 'PRODUCT MANAGEMENT',
      sub: 'Strategy, Growth & Monetization',
      icon: Compass,
      accent: '#E97868',
      bgClass: 'bg-[#E97868]/10 text-[#C65343]',
    },
    {
      value: 'Consumer',
      label: 'MOBILE PRODUCTS',
      sub: 'Privacy, Media & Utility',
      icon: Smartphone,
      accent: '#4A203F',
      bgClass: 'bg-[#4A203F]/10 text-[#4A203F]',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-3xl bg-white/70 border border-[#4A203F]/8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] backdrop-blur-md flex flex-col justify-between space-y-3 hover:border-[#713B5D]/30 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-xl ${item.bgClass} shadow-xs`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#6F666B]">
                  {item.label}
                </span>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#241F24] tracking-tight group-hover:text-[#4A203F] transition-colors">
                  {item.value}
                </div>
                <p className="text-xs text-[#6F666B] mt-0.5 font-medium">{item.sub}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
