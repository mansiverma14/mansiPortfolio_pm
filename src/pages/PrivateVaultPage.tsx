import React from 'react';
import { PageRoute } from '../types';
import { PRIVATE_VAULT_DECISIONS, PRIVATE_VAULT_URL } from '../data/portfolioData';
import { PrivateVaultMockup } from '../components/PrivateVaultMockup';
import { 
  Shield, 
  EyeOff, 
  Lock, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  FlaskConical, 
  Target, 
  Layers, 
  HeartHandshake,
  FolderPlus,
  Cloud,
  ChevronRight
} from 'lucide-react';

interface PrivateVaultPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const PrivateVaultPage: React.FC<PrivateVaultPageProps> = ({ onNavigate }) => {
  const userJourneyStages = [
    { num: '01', title: 'Discover & Trigger', desc: 'User experiences anxiety about shared device access and seeks a dedicated, private space.' },
    { num: '02', title: 'Onboarding Value', desc: 'Clear, transparent explanation that private files remain safe with screen-lock protection.' },
    { num: '03', title: 'Vault Initialization', desc: 'Creation of a personal Private Space with immediate visual confirmation of protection status.' },
    { num: '04', title: 'Contextual Import', desc: 'User taps "Add Files" or selects Photos/Videos with explicit, timely permission authorization.' },
    { num: '05', title: 'Organize & Browse', desc: 'Content is categorized by type (Photos, Videos, Files) or organized into custom Private Collections.' },
    { num: '06', title: 'Cloud Backup & Safe Recovery', desc: 'Transparent opt-in cloud sync with a dedicated Bin to prevent accidental data loss.' },
  ];

  const productFlowSteps = [
    { step: '01', name: 'Open App & Auth', focus: 'Screen-Lock Protection Handshake' },
    { step: '02', name: 'Private Space Home', focus: 'Protection Status & File Counter Display' },
    { step: '03', name: 'Category Browsing', focus: 'Photos, Videos, Other Files View' },
    { step: '04', name: 'Action Menu', focus: 'Add Files (+), New Folder, Safe Bin' },
    { step: '05', name: 'Cloud Sync Layer', focus: 'Explicit Opt-In Backup Controls' },
    { step: '06', name: 'Safe File Recovery', focus: 'Recycle Bin Restoration' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* Top Breadcrumb & Live Reference Link */}
      <div className="flex items-center justify-between pb-4 border-b border-[#4A203F]/10">
        <button
          onClick={() => onNavigate('work')}
          className="text-xs font-mono-code font-semibold text-[#6F666B] hover:text-[#241F24] flex items-center gap-1.5 transition-colors"
        >
          ← Back to All Projects
        </button>

        <a
          href={PRIVATE_VAULT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-[#713B5D] hover:text-[#4A203F] transition-colors"
        >
          <span>Live Reference UI</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* ==================================================
          01 — OVERVIEW & HERO
          ================================================== */}
      <section id="vault-overview" className="space-y-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#713B5D]/10 border border-[#713B5D]/20 text-xs font-mono-code font-bold text-[#4A203F] uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-[#E97868]" />
            <span>01 — Product Case Study</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#241F24] tracking-tight leading-[1.08]">
            Private Vault
          </h1>

          <p className="text-xl sm:text-2xl text-[#713B5D] font-editorial italic">
            "Designing a simpler, safer way to manage private content."
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['Consumer Mobile', 'Privacy & Security', 'Product Strategy', 'Android Experience'].map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono-code font-semibold px-3 py-1.5 rounded-xl bg-white/80 text-[#4A203F] border border-[#4A203F]/10 shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm sm:text-base text-[#6F666B] leading-relaxed pt-2">
            A comprehensive case study on creating a calm, trustworthy consumer privacy experience—balancing intuitive mobile file management with transparent protection controls and explicit cloud backup safeguards.
          </p>
        </div>

        {/* Authentic UI Showcase Mockup */}
        <PrivateVaultMockup />
      </section>

      {/* ==================================================
          02 — THE PROBLEM
          ================================================== */}
      <section id="vault-problem" className="bg-white/80 rounded-3xl border border-[#4A203F]/10 p-8 sm:p-12 shadow-sm backdrop-blur-md space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#713B5D]">
            02 — The Problem
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241F24] tracking-tight">
            The Friction of Mobile Privacy
          </h2>
          <p className="text-sm sm:text-base text-[#6F666B] leading-relaxed">
            Personal mobile devices are frequently shared in social and professional settings, creating acute anxiety over unintended exposure of sensitive media and confidential records.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
          {[
            {
              title: 'Accidental Social Exposure',
              desc: 'Handing a phone to someone to show a travel photo risks them swiping into confidential documents or private personal albums.'
            },
            {
              title: 'Intimidating Security Jargon',
              desc: 'Traditional encryption lockers rely on complex passphrases and cybersecurity jargon, alienating everyday consumer users.'
            },
            {
              title: 'Distrust of Cloud Automation',
              desc: 'Users worry their private media might be automatically synced or scraped by unvetted third-party cloud services.'
            },
            {
              title: 'Disorganized Mixed Media',
              desc: 'Without category-based sorting, users struggle to organize mixed photos, video clips, and confidential PDFs in a single space.'
            },
            {
              title: 'High Onboarding Bounce Rates',
              desc: 'Demanding full storage permissions immediately on cold start triggers suspicion and immediate app abandonment.'
            },
            {
              title: 'Fear of Accidental Data Loss',
              desc: 'Lacking a dedicated recovery bin, users fear permanent deletion of important personal files during cleanup.'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#F4EEE8]/70 border border-[#4A203F]/6 space-y-2">
              <div className="flex items-center gap-2 font-bold text-xs text-[#241F24]">
                <span className="w-2 h-2 rounded-full bg-[#E97868]" />
                <h3>{item.title}</h3>
              </div>
              <p className="text-xs text-[#6F666B] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          03 — PRODUCT OPPORTUNITY
          ================================================== */}
      <section id="vault-opportunity" className="bg-gradient-to-br from-[#4A203F] to-[#713B5D] text-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_45px_-15px_rgba(74,32,63,0.3)] space-y-4 text-center">
        <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#F4A095]">
          03 — Product Opportunity
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight max-w-4xl mx-auto leading-snug">
          "How might we make private content management secure without making the experience complicated?"
        </h2>
        <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed pt-1">
          By combining transparent protection status, category-driven browsing, and frictionless folder management into a calm "Private Space," we can deliver complete psychological peace of mind.
        </p>
      </section>

      {/* ==================================================
          04 — USER JOURNEY
          ================================================== */}
      <section id="vault-journey" className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#713B5D]">
            04 — User Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241F24] tracking-tight">
            The 6-Stage User Journey
          </h2>
          <p className="text-sm text-[#6F666B]">
            Mapping the customer transition from anxiety trigger to daily trusted file organization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {userJourneyStages.map((stage) => (
            <div
              key={stage.num}
              className="p-6 rounded-2xl bg-white/80 border border-[#4A203F]/10 shadow-xs backdrop-blur-md space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-mono-code">
                <span className="font-bold text-[#E97868]">{stage.num}</span>
                <span className="text-[#6F666B]">Stage</span>
              </div>
              <h3 className="text-sm font-bold text-[#241F24]">{stage.title}</h3>
              <p className="text-xs text-[#6F666B] leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          05 — PRODUCT FLOW
          ================================================== */}
      <section id="vault-flow" className="bg-white/80 rounded-3xl border border-[#4A203F]/10 p-8 sm:p-12 shadow-sm backdrop-blur-md space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#713B5D]">
            05 — Product Flow
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241F24] tracking-tight">
            Interaction & System Flow
          </h2>
          <p className="text-sm text-[#6F666B]">
            The step-by-step navigation path through the core Private Vault experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {productFlowSteps.map((flow) => (
            <div key={flow.step} className="p-5 rounded-2xl bg-[#F4EEE8]/70 border border-[#4A203F]/6 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono-code">
                <span className="font-bold text-[#713B5D]">{flow.step}</span>
                <span className="text-[#6F666B]">Node</span>
              </div>
              <h4 className="text-sm font-bold text-[#241F24]">{flow.name}</h4>
              <p className="text-xs text-[#6F666B] font-mono-code">{flow.focus}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          06 — KEY PRODUCT DECISIONS
          ================================================== */}
      <section id="vault-decisions" className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#713B5D]">
            06 — Key Product Decisions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241F24] tracking-tight">
            Strategic Trade-Offs & Rationale
          </h2>
          <p className="text-sm text-[#6F666B]">
            Documented product decisions balancing user trust against interface complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRIVATE_VAULT_DECISIONS.map((dec, idx) => (
            <div
              key={idx}
              className="bg-white/80 rounded-3xl border border-[#4A203F]/10 p-6 sm:p-8 shadow-xs backdrop-blur-md flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#4A203F]/8 mb-3">
                  <h3 className="text-sm font-bold text-[#241F24]">{dec.topic}</h3>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-[#713B5D]/10 text-[#4A203F] font-bold">
                    {dec.status}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <span className="font-mono-code uppercase font-bold text-[#6F666B] block mb-0.5">Problem:</span>
                    <p className="text-[#6F666B] leading-relaxed">{dec.problem}</p>
                  </div>

                  <div>
                    <span className="font-mono-code uppercase font-bold text-[#713B5D] block mb-0.5">Decision:</span>
                    <p className="text-[#241F24] font-bold leading-relaxed">{dec.decision}</p>
                  </div>

                  <div>
                    <span className="font-mono-code uppercase font-bold text-[#6F666B] block mb-0.5">Rationale:</span>
                    <p className="text-[#6F666B] leading-relaxed">{dec.rationale}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#4A203F]/8 text-xs">
                <span className="font-mono-code uppercase font-bold text-[#E97868] block mb-0.5">Expected Outcome:</span>
                <p className="text-[#4A203F] font-semibold">{dec.expectedOutcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          07 — FEATURE EXPERIENCE
          ================================================== */}
      <section id="vault-features" className="bg-white/80 rounded-3xl border border-[#4A203F]/10 p-8 sm:p-12 shadow-sm backdrop-blur-md space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#713B5D]">
            07 — Feature Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241F24] tracking-tight">
            Verified Feature Architecture
          </h2>
          <p className="text-sm text-[#6F666B]">
            Core capabilities reflected in the verified Private Vault design reference.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Private Space Overview', desc: 'Status badges showing active screen-lock protection' },
            { title: 'Browse by Type', desc: 'Dedicated views for Photos, Videos, and Other Files' },
            { title: 'Private Collections', desc: 'Organized folders for financial IDs and travel receipts' },
            { title: 'Cloud Backup Controls', desc: 'Explicit opt-in backup status with sync transparency' },
            { title: 'Add Files (+)', desc: 'Multi-select media picker with contextual permission prompts' },
            { title: 'Folder Management', desc: 'Custom album creation, renaming, and file movement' },
            { title: 'Recycle Bin', desc: 'Safe holding area for recovered or deleted files' },
            { title: 'Screen-Lock Integration', desc: 'System-level biometric & PIN access controls' }
          ].map((f, i) => (
            <div key={i} className="p-4 rounded-2xl bg-[#F4EEE8]/70 border border-[#4A203F]/6 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#241F24]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#713B5D] shrink-0" />
                <span>{f.title}</span>
              </div>
              <p className="text-[11px] text-[#6F666B] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          08 — METRICS / SUCCESS METRICS
          ================================================== */}
      <section id="vault-metrics" className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#713B5D]">
            08 — Success Metrics
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241F24] tracking-tight">
            How I Would Measure Success
          </h2>
          <p className="text-sm text-[#6F666B]">
            A structured Product KPI framework across activation, engagement, retention, and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              category: 'Activation Funnel',
              kpis: ['Install → First Vault Opening Rate', 'First Item Added Conversion Rate', 'Time-to-first-mile value realization']
            },
            {
              category: 'Engagement & Retention',
              kpis: ['D1, D7, and D30 Retention Cohorts', 'Weekly Active Vault Opens per user', 'Category adoption (Photos vs. Docs)']
            },
            {
              category: 'Trust & Reliability Guardrails',
              kpis: ['Storage Permission Acceptance Rate', 'Zero unconsented sync complaints', 'Safe Bin recovery success rate']
            }
          ].map((card, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white/80 border border-[#4A203F]/10 shadow-xs backdrop-blur-md space-y-3">
              <span className="text-xs font-mono-code font-bold uppercase text-[#713B5D] block">
                {card.category}
              </span>
              <ul className="space-y-2 text-xs text-[#241F24]">
                {card.kpis.map((kpi, kIdx) => (
                  <li key={kIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E97868] shrink-0 mt-1.5" />
                    <span className="text-[#6F666B]">{kpi}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          09 — EXPERIMENTS
          ================================================== */}
      <section id="vault-experiments" className="bg-white/80 rounded-3xl border border-[#4A203F]/10 p-8 sm:p-12 shadow-sm backdrop-blur-md space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#713B5D]">
            09 — Proposed Experiments
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241F24] tracking-tight">
            Continuous A/B Experimentation
          </h2>
          <p className="text-sm text-[#6F666B]">
            Structured hypotheses designed to optimize activation and reduce onboarding friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#F4EEE8]/70 border border-[#4A203F]/8 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#4A203F]/8">
              <span className="text-xs font-bold text-[#241F24]">Experiment A: Contextual Permission Timing</span>
              <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-[#D99A3D]/15 text-[#B87A1E] font-bold">
                Proposed Experiment
              </span>
            </div>
            <p className="text-xs text-[#6F666B] leading-relaxed">
              <strong>Hypothesis:</strong> Deferring media storage permission requests until the user explicitly taps "Add Files" will increase onboarding completion by 18%.
            </p>
            <div className="flex justify-between text-[11px] font-mono-code text-[#4A203F] pt-2 border-t border-[#4A203F]/6">
              <span>Primary: Vault Creation Rate</span>
              <span>Guardrail: Permission Denials</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#F4EEE8]/70 border border-[#4A203F]/8 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#4A203F]/8">
              <span className="text-xs font-bold text-[#241F24]">Experiment B: Transparent Protection Badging</span>
              <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-[#D99A3D]/15 text-[#B87A1E] font-bold">
                Proposed Experiment
              </span>
            </div>
            <p className="text-xs text-[#6F666B] leading-relaxed">
              <strong>Hypothesis:</strong> Prominently displaying "Screen-lock Protection Active" on the home dashboard will increase D7 retention and vault open frequency.
            </p>
            <div className="flex justify-between text-[11px] font-mono-code text-[#4A203F] pt-2 border-t border-[#4A203F]/6">
              <span>Primary: D7 Active Opens</span>
              <span>Guardrail: App Uninstalls</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          10 — LEARNINGS & TAKEAWAYS
          ================================================== */}
      <section id="vault-learnings" className="bg-gradient-to-br from-[#4A203F] to-[#713B5D] text-white rounded-3xl p-8 sm:p-14 shadow-[0_20px_50px_-15px_rgba(74,32,63,0.35)] space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-wider text-[#F4A095]">
            <HeartHandshake className="w-4 h-4" />
            <span>10 — Retrospective</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            "What this project taught me"
          </h2>
          <p className="text-sm text-white/80">
            Key product philosophies forged through building privacy-focused consumer mobile utilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Privacy Requires Psychological Trust',
              desc: 'Users will forgive minor visual imperfections, but they will instantly abandon an app if they doubt where their private files are being stored.'
            },
            {
              title: 'Security Must Not Create UX Friction',
              desc: 'Every unnecessary confirmation modal introduces cognitive friction. Great PMs streamline friction without compromising safety guarantees.'
            },
            {
              title: 'Simplicity is a Product Superpower',
              desc: 'Under-the-hood complexities should remain invisible. The user interface should feel as intuitive as any everyday consumer utility.'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-black/20 border border-white/10 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4A095]" />
                <span>{item.title}</span>
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Final Prominent CTA linking to the verified reference UI */}
        <div className="pt-6 border-t border-white/12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-white">
              Ready to explore the live product interface?
            </h4>
            <p className="text-xs text-white/70">
              Inspect the authentic Private Space screens and category workflows in the live reference.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('mp3-converter')}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-[#713B5D] to-[#E97868] hover:opacity-90 text-white font-bold text-xs transition-all shadow-md"
            >
              <span>MP3 Converter Suite →</span>
            </button>

            <button
              onClick={() => onNavigate('hd-video-downloader')}
              className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition-all border border-white/20"
            >
              <span>HD Video Downloader →</span>
            </button>

            <button
              onClick={() => onNavigate('review-pilot')}
              className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition-all border border-white/20"
            >
              <span>Review Pilot →</span>
            </button>

            <a
              href={PRIVATE_VAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FAF7F2] hover:bg-white text-[#4A203F] font-bold text-xs transition-all shadow-lg hover:shadow-xl"
            >
              <span>Explore the Private Vault UI →</span>
              <ExternalLink className="w-4 h-4 text-[#E97868]" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
