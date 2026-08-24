import React, { useState } from 'react';
import { PRIVATE_VAULT_URL } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Lock, 
  Image as ImageIcon, 
  Video, 
  FileText, 
  Cloud, 
  FolderPlus, 
  Plus, 
  Trash2, 
  ExternalLink, 
  Check, 
  ChevronRight,
  Folder,
  EyeOff
} from 'lucide-react';

export const PrivateVaultMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'photos' | 'backup'>('overview');

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      
      {/* Visual Header Note */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#713B5D]/10 border border-[#713B5D]/20 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#E97868] animate-pulse" />
          <span className="font-mono-code font-bold text-[#4A203F]">
            PRIMARY UI REFERENCE:
          </span>
          <span className="text-[#6F666B]">
            Authentic visual language from Private Vault
          </span>
        </div>

        <a
          href={PRIVATE_VAULT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#4A203F] text-[#FAF7F2] font-semibold hover:bg-[#713B5D] transition-all shadow-xs shrink-0"
        >
          <span>Explore Live Reference UI</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Frosted Glass Device Frame Presentation */}
      <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-white/90 to-[#F4EEE8]/90 border border-[#4A203F]/10 shadow-[0_20px_50px_-15px_rgba(74,32,63,0.12)] backdrop-blur-xl">
        
        {/* Soft Ambient Blobs behind frame */}
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-[#713B5D]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-[#E97868]/10 blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Authentic Mobile UI Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[340px] rounded-[36px] bg-[#FAF7F2] border-[6px] border-[#241F24] shadow-2xl overflow-hidden text-[#241F24] flex flex-col font-sans">
              
              {/* Phone Status Bar */}
              <div className="bg-[#241F24] text-[#FAF7F2] px-6 py-2 flex items-center justify-between text-[11px] font-mono-code">
                <span>9:41</span>
                <div className="w-16 h-3.5 bg-neutral-800 rounded-full" />
                <div className="flex items-center gap-1.5">
                  <span>5G</span>
                  <div className="w-4 h-2 border border-white/60 rounded-xs bg-white/80" />
                </div>
              </div>

              {/* App Navigation Bar */}
              <div className="p-4 bg-white border-b border-[#4A203F]/8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#4A203F] text-white flex items-center justify-center shadow-xs">
                    <EyeOff className="w-4 h-4 text-[#F4A095]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#241F24] tracking-tight">Private Space</h4>
                    <span className="text-[10px] text-[#6F666B] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Protection Active
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button className="p-1.5 rounded-lg bg-[#FAF7F2] text-[#4A203F] hover:bg-[#F4EEE8]">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Mockup Screen Content */}
              <div className="p-4 space-y-3.5 bg-[#FAF7F2]/60 overflow-y-auto max-h-[380px]">
                
                {/* 1. Protection Status Overview Card */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#4A203F] to-[#713B5D] text-white space-y-2 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono-code uppercase font-semibold text-[#F4A095]">
                      Vault Status
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/15 text-[9px] font-bold text-[#FAF7F2] flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      Locked & Encrypted
                    </span>
                  </div>

                  <div>
                    <div className="text-xl font-bold tracking-tight">142 Items</div>
                    <p className="text-[10px] text-white/80">Protected in local isolated space</p>
                  </div>
                </div>

                {/* 2. Category Grid: Browse by Type */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono-code uppercase font-bold text-[#6F666B]">
                    Browse by Type
                  </span>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {/* Photos */}
                    <div className="p-2.5 rounded-xl bg-white border border-[#4A203F]/8 flex flex-col items-center text-center space-y-1 shadow-xs hover:border-[#713B5D]/30 transition-colors">
                      <div className="p-2 rounded-lg bg-[#E97868]/15 text-[#E97868]">
                        <ImageIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-[#241F24]">Photos</span>
                      <span className="text-[9px] text-[#6F666B] font-mono-code">84 files</span>
                    </div>

                    {/* Videos */}
                    <div className="p-2.5 rounded-xl bg-white border border-[#4A203F]/8 flex flex-col items-center text-center space-y-1 shadow-xs hover:border-[#713B5D]/30 transition-colors">
                      <div className="p-2 rounded-lg bg-[#D99A3D]/15 text-[#D99A3D]">
                        <Video className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-[#241F24]">Videos</span>
                      <span className="text-[9px] text-[#6F666B] font-mono-code">32 files</span>
                    </div>

                    {/* Other Files */}
                    <div className="p-2.5 rounded-xl bg-white border border-[#4A203F]/8 flex flex-col items-center text-center space-y-1 shadow-xs hover:border-[#713B5D]/30 transition-colors">
                      <div className="p-2 rounded-lg bg-[#713B5D]/15 text-[#713B5D]">
                        <FileText className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-[#241F24]">Files</span>
                      <span className="text-[9px] text-[#6F666B] font-mono-code">26 files</span>
                    </div>
                  </div>
                </div>

                {/* 3. Cloud Backup Card */}
                <div className="p-3 rounded-2xl bg-white border border-[#4A203F]/8 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-[#FAF7F2] text-[#4A203F] border border-[#4A203F]/10">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-[#241F24]">Cloud Backup</h5>
                      <span className="text-[10px] text-[#6F666B]">Encrypted off-device backup</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono-code font-bold text-[#713B5D] px-2 py-0.5 rounded-md bg-[#713B5D]/10">
                    Active
                  </span>
                </div>

                {/* 4. Private Collections & Folders */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono-code uppercase font-bold text-[#6F666B]">
                    <span>Collections</span>
                    <span className="text-[#713B5D]">View All</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="p-2.5 rounded-xl bg-white border border-[#4A203F]/8 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Folder className="w-3.5 h-3.5 text-[#D99A3D]" />
                        <span className="font-semibold text-[#241F24]">Financial IDs</span>
                      </div>
                      <span className="text-[10px] text-[#6F666B] font-mono-code">14 files</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-[#4A203F]/8 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Folder className="w-3.5 h-3.5 text-[#E97868]" />
                        <span className="font-semibold text-[#241F24]">Travel Documents</span>
                      </div>
                      <span className="text-[10px] text-[#6F666B] font-mono-code">9 files</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Phone Action Bar */}
              <div className="p-3 bg-white border-t border-[#4A203F]/8 flex items-center justify-around text-[#6F666B] text-[10px] font-medium">
                <div className="flex flex-col items-center gap-0.5 text-[#4A203F] font-bold">
                  <EyeOff className="w-4 h-4" />
                  <span>Vault</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <FolderPlus className="w-4 h-4" />
                  <span>Folders</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <Trash2 className="w-4 h-4" />
                  <span>Bin</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: PM Architecture & Design Principles */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono-code uppercase font-bold text-[#E97868] tracking-wider">
                Product Experience Reference
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#241F24] tracking-tight mt-1">
                Calm, Trustworthy Privacy Architecture
              </h3>
              <p className="text-sm text-[#6F666B] mt-2 leading-relaxed">
                Rather than treating privacy like a complex cybersecurity tool, the Private Vault experience creates psychological comfort through transparent status indicators and category-based navigation.
              </p>
            </div>

            {/* Verified UI Patterns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#4A203F]/8 space-y-1">
                <div className="flex items-center gap-2 font-bold text-[#241F24]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#713B5D]" />
                  <span>Protection Status</span>
                </div>
                <p className="text-[#6F666B] leading-relaxed">
                  Real-time visibility confirming screen-lock protection and hidden item count.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#4A203F]/8 space-y-1">
                <div className="flex items-center gap-2 font-bold text-[#241F24]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E97868]" />
                  <span>Browse by Type</span>
                </div>
                <p className="text-[#6F666B] leading-relaxed">
                  Quick-access buckets for Photos, Videos, and confidential documents.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#4A203F]/8 space-y-1">
                <div className="flex items-center gap-2 font-bold text-[#241F24]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D99A3D]" />
                  <span>Cloud Backup Controls</span>
                </div>
                <p className="text-[#6F666B] leading-relaxed">
                  Explicit opt-in backup status ensuring zero unconsented sync.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#4A203F]/8 space-y-1">
                <div className="flex items-center gap-2 font-bold text-[#241F24]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A203F]" />
                  <span>Safe Bin & Recovery</span>
                </div>
                <p className="text-[#6F666B] leading-relaxed">
                  Dedicated recycle bin preventing accidental permanent file loss.
                </p>
              </div>
            </div>

            {/* Direct Link CTA */}
            <div className="pt-2">
              <a
                href={PRIVATE_VAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#4A203F] hover:bg-[#713B5D] text-[#FAF7F2] font-semibold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <span>Explore the Full Private Vault UI</span>
                <ExternalLink className="w-4 h-4 text-[#F4A095]" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
