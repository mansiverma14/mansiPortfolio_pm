import React from 'react';
import { PageRoute } from '../types';
import { Linkedin, Mail, FileText, Sliders, Globe, Github } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#121212] text-white border-t border-[#262626] py-12 lg:pl-56">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#262626]">
          
          {/* Brand & Role */}
          <div>
            <h4 className="text-xl font-extrabold tracking-tight text-white">
              Mansi Shrivastav
            </h4>
            <p className="text-xs text-[#A0A0A0] font-mono mt-0.5">
              Product Manager & Ex-Android Developer
            </p>
            <p className="text-xs text-[#707070] mt-1">
              Consumer Mobile Apps · Growth & Monetization · Telemetry
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-[#A0A0A0]">
            <a
              href="https://www.linkedin.com/in/mansi-shrivastav2000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/mansiverma14"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="mailto:manshishrivastav2000@gmail.com"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <button
              onClick={() => onNavigate('resume')}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => onNavigate('admin')}
              className="hover:text-white transition-colors flex items-center gap-1.5 text-[#888888] hover:text-white"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Admin Studio</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#707070] font-mono">
          <span>© 2026 Mansi Shrivastav. All rights reserved.</span>
          <button
            onClick={() => onNavigate('admin')}
            className="hover:text-white transition-colors text-[#666666]"
          >
            Engineering Foundation → Product Management
          </button>
        </div>
      </div>
    </footer>
  );
};
