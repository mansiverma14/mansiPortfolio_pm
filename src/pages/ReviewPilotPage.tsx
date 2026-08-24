import React from 'react';
import { PageRoute } from '../types';
import { 
  REVIEW_PILOT_URL,
  REVIEW_PILOT_PERSONAS,
  REVIEW_PILOT_DECISIONS,
  REVIEW_PILOT_RICE_MATRIX
} from '../data/portfolioData';
import { ReviewPilotMockup } from '../components/ReviewPilotMockup';
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Shield,
  Star,
  CheckCircle2,
  TrendingUp,
  MessageSquare,
  Bot,
  Zap,
  Target,
  Layers,
  Users,
  Compass,
  AlertTriangle,
  RefreshCw,
  Sliders,
  ChevronRight,
  Award,
  Globe,
  Smartphone,
  Cpu,
  Clock,
  HeartHandshake
} from 'lucide-react';

interface ReviewPilotPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ReviewPilotPage: React.FC<ReviewPilotPageProps> = ({ onNavigate }) => {
  const flywheelPillars = [
    {
      num: '01',
      title: 'Unified Multi-Channel Ingestion',
      desc: 'Sub-minute webhook syncing from Google My Business, App Store Connect, Google Play Console, and Trustpilot into a unified triage feed.',
      icon: Globe
    },
    {
      num: '02',
      title: 'Contextual AI Smart Replies',
      desc: 'Brand-tone aligned AI draft synthesis addressing specific user friction points with 1-click human approval guardrails.',
      icon: Bot
    },
    {
      num: '03',
      title: 'Root-Cause Sentiment Clustering',
      desc: 'NLP topic extraction linking negative reviews directly to actionable engineering bug tickets and product sprint backlogs.',
      icon: Cpu
    },
    {
      num: '04',
      title: 'Smart Review Booster Invites',
      desc: '100% policy-compliant 2-tier feedback sequences that accelerate 5-star public reviews while resolving unhappy users privately.',
      icon: Zap
    }
  ];

  const userJourneyStages = [
    { num: '01', title: 'Connect & Ingest', desc: 'OAuth handshake syncs historic & live review streams across Google, Apple, and Trustpilot.' },
    { num: '02', title: 'NLP Triage & Tagging', desc: 'Real-time NLP models parse sentiment score, extract root cause topics, and flag urgent bug reports.' },
    { num: '03', title: 'AI Reply Generation', desc: 'LLM synthesizes 4 contextual draft variations (Empathetic, Professional, Concise, Resolution).' },
    { num: '04', title: '1-Click Human Approval', desc: 'Support rep or PM reviews, modifies inline, and publishes with instant API confirmation.' },
    { num: '05', title: 'Sprint Backlog Sync', desc: 'Recurring negative topic spikes automatically generate structured Jira / Linear bug tickets.' },
    { num: '06', title: 'Automated Review Boost', desc: 'Post-purchase triggers invite verified happy customers to leave 5-star ratings on public platforms.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* Top Breadcrumb & Live Reference Link */}
      <div className="flex items-center justify-between pb-4 border-b border-[#2C2C2C]">
        <button
          onClick={() => onNavigate('work')}
          className="text-xs font-mono font-semibold text-[#A0A0A0] hover:text-white flex items-center gap-1.5 transition-colors"
        >
          ← Back to Portfolio
        </button>

        <a
          href={REVIEW_PILOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>Live Reference UI & Prototype</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* =========================================================================
          01 — HERO & PROJECT METADATA
          ========================================================================= */}
      <section id="review-pilot-hero" className="space-y-8">
        <div className="max-w-4xl space-y-4">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>01 — Flagship Product Management Case Study</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Review Pilot
          </h1>

          <p className="text-xl sm:text-2xl text-[#CCCCCC] font-light leading-snug">
            "Engineering an Autonomous Review Intelligence & Reputation Growth Flywheel."
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              'AI / LLM Product Strategy',
              'Multi-Channel SaaS',
              'NLP Sentiment Analytics',
              'Reputation Growth Flywheel',
              'B2B & Consumer Experience'
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono font-semibold px-3 py-1.5 rounded-xl bg-[#1E1E1E] text-[#E0E0E0] border border-[#2F2F2F] shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm sm:text-base text-[#9E9E9E] leading-relaxed pt-2 max-w-3xl">
            A comprehensive Product Manager case study on conceptualizing, prioritizing, architecting, and launching Review Pilot — a modern AI-powered review intelligence platform that unified fragmented feedback channels, slashed customer response turnaround from 48 hours to 4.2 minutes, and drove a <strong>+42% increase in verified 5-star customer reviews</strong>.
          </p>

        </div>

        {/* Executive Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-[#1A1A1A] border border-[#2B2B2B] shadow-xl">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-[#888888] uppercase">My Role</span>
            <p className="text-sm font-bold text-white">Lead Product Manager & Architect</p>
            <p className="text-[11px] text-[#A0A0A0]">Strategy, PRD, NLP Specs, Growth</p>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono text-[#888888] uppercase">Timeline & Phase</span>
            <p className="text-sm font-bold text-white">2023 — 2024</p>
            <p className="text-[11px] text-[#A0A0A0]">Discovery → MVP → Scale</p>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono text-[#888888] uppercase">Cross-Functional Team</span>
            <p className="text-sm font-bold text-white">6 Members</p>
            <p className="text-[11px] text-[#A0A0A0]">1 PM, 3 Devs, 1 ML Eng, 1 Designer</p>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono text-[#888888] uppercase">Core Business Impact</span>
            <p className="text-sm font-bold text-emerald-400">+42% 5★ Reviews</p>
            <p className="text-[11px] text-[#A0A0A0]">-78% Response Time (4.2m)</p>
          </div>
        </div>

        {/* Authentic Interactive Simulator */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-mono font-bold uppercase text-[#CCCCCC] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Interactive Product Prototype Simulator
            </span>
            <span className="text-[11px] font-mono text-[#888888]">Click tabs & buttons below to test live features</span>
          </div>
          <ReviewPilotMockup />
        </div>

      </section>

      {/* =========================================================================
          02 — EXECUTIVE SUMMARY & THE REPUTATION FLYWHEEL
          ========================================================================= */}
      <section id="review-pilot-summary" className="bg-[#1A1A1A] rounded-3xl border border-[#2B2B2B] p-8 sm:p-12 shadow-xl space-y-8">
        
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            02 — Executive Summary & Strategic North Star
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Turning Support Fatigue into a Growth Flywheel
          </h2>
          <p className="text-sm sm:text-base text-[#9E9E9E] leading-relaxed">
            Online customer reviews make or break consumer purchasing decisions. Yet, for most growing companies, review management is treated as a manual, reactive support chore rather than an engine for customer acquisition and product intelligence.
          </p>
        </div>

        {/* 4 Pillars of the Flywheel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
          {flywheelPillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.num} className="p-6 rounded-2xl bg-[#141414] border border-[#262626] space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-400">{p.num}</span>
                    <Icon className="w-4 h-4 text-[#888888]" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{p.title}</h3>
                  <p className="text-xs text-[#9E9E9E] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* =========================================================================
          03 — THE PROBLEM & MARKET DISCOVERY
          ========================================================================= */}
      <section id="review-pilot-problem" className="bg-[#1A1A1A] rounded-3xl border border-[#2B2B2B] p-8 sm:p-12 shadow-xl space-y-8">
        
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            03 — Problem Discovery & Market Validation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The Hidden "Reputation Tax" on Modern Brands
          </h2>
          <p className="text-sm sm:text-base text-[#9E9E9E] leading-relaxed">
            During user discovery interviews across 35+ brand managers, mobile app leads, and local business operators, we uncovered three critical operational bottlenecks destroying customer LTV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] space-y-3">
            <div className="w-8 h-8 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">48+ Hour Turnaround Latency</h3>
            <p className="text-xs text-[#9E9E9E] leading-relaxed">
              72% of negative reviews remained unaddressed for over 2 days. In mobile and local commerce, an unanswered 1-star review converts prospective buyers straight to competitors.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] space-y-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">Multi-Portal Fragmentation</h3>
            <p className="text-xs text-[#9E9E9E] leading-relaxed">
              Teams logged into 4-6 isolated dashboards daily (Google My Business, App Store Connect, Google Play Console, Trustpilot, Yelp), creating fragmented response records and missed notifications.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] space-y-3">
            <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">Unstructured Feedback Abyss</h3>
            <p className="text-xs text-[#9E9E9E] leading-relaxed">
              Product Managers had no quantitative way to isolate root causes. A release causing a 0.4-star rating drop was buried under 5,000 raw text reviews without NLP topic clustering.
            </p>
          </div>

        </div>

      </section>

      {/* =========================================================================
          04 — TARGET PERSONAS & JTBD FRAMEWORK
          ========================================================================= */}
      <section id="review-pilot-personas" className="bg-[#1A1A1A] rounded-3xl border border-[#2B2B2B] p-8 sm:p-12 shadow-xl space-y-8">
        
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            04 — Target Personas & Jobs To Be Done (JTBD)
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Designing for Cross-Functional Stakeholders
          </h2>
          <p className="text-sm sm:text-base text-[#9E9E9E] leading-relaxed">
            Review Pilot needed to solve distinct pain points across Customer Support, Product Management, and Operations teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {REVIEW_PILOT_PERSONAS.map((persona, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#141414] border border-[#262626] space-y-4 flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={persona.avatar}
                    alt={persona.name}
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-white">{persona.name}</h3>
                    <p className="text-[11px] font-mono text-blue-400">{persona.role}</p>
                  </div>
                </div>

                <p className="text-xs text-[#CCCCCC] leading-relaxed italic bg-[#1E1E1E] p-3 rounded-xl border border-[#2A2A2A]">
                  "{persona.context}"
                </p>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#888888]">Core Pain Points:</span>
                  <ul className="space-y-1 text-xs text-[#9E9E9E]">
                    {persona.painPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-400 shrink-0">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-[#262626] space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-400">JTBD Statement:</span>
                <p className="text-xs text-[#E0E0E0] leading-relaxed font-sans">{persona.jtbd}</p>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* =========================================================================
          05 — RICE PRIORITIZATION & STRATEGIC TRADE-OFFS
          ========================================================================= */}
      <section id="review-pilot-prioritization" className="bg-[#1A1A1A] rounded-3xl border border-[#2B2B2B] p-8 sm:p-12 shadow-xl space-y-8">
        
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            05 — Product Strategy & RICE Prioritization
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Prioritizing for Maximum ROI in MVP Delivery
          </h2>
          <p className="text-sm sm:text-base text-[#9E9E9E] leading-relaxed">
            Using the RICE scoring model (Reach × Impact × Confidence / Effort), we prioritized our engineering roadmap to deliver measurable customer value within our first 6-week release window.
          </p>
        </div>

        {/* RICE Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#2C2C2C] text-[#888888] font-mono uppercase text-[10px]">
                <th className="py-3 px-4">Feature / Epic</th>
                <th className="py-3 px-3">Reach</th>
                <th className="py-3 px-3">Impact</th>
                <th className="py-3 px-3">Confidence</th>
                <th className="py-3 px-3">Effort</th>
                <th className="py-3 px-3">RICE Score</th>
                <th className="py-3 px-3">Phase & Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222222]">
              {REVIEW_PILOT_RICE_MATRIX.map((row, i) => (
                <tr key={i} className="hover:bg-[#1E1E1E] transition-colors">
                  <td className="py-3 px-4 font-bold text-white">{row.feature}</td>
                  <td className="py-3 px-3 font-mono text-[#CCCCCC]">{row.reach}</td>
                  <td className="py-3 px-3 font-mono text-[#CCCCCC]">{row.impact}</td>
                  <td className="py-3 px-3 font-mono text-[#CCCCCC]">{row.confidence}</td>
                  <td className="py-3 px-3 font-mono text-[#CCCCCC]">{row.effort}</td>
                  <td className="py-3 px-3 font-mono font-bold text-blue-400">{row.riceScore}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {row.phase}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key PM Decision Logs & Trade-Offs */}
        <div className="space-y-4 pt-4 border-t border-[#262626]">
          <h3 className="text-base font-bold text-white">Critical Architectural & PM Trade-Off Decisions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REVIEW_PILOT_DECISIONS.map((decision, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#141414] border border-[#262626] space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#222222]">
                  <span className="text-xs font-bold text-white font-mono">{decision.topic}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">
                    {decision.status}
                  </span>
                </div>
                
                <div className="space-y-1.5 text-xs text-[#9E9E9E]">
                  <div>
                    <strong className="text-rose-400">The Problem: </strong>
                    <span>{decision.problem}</span>
                  </div>
                  <div>
                    <strong className="text-emerald-400">PM Decision: </strong>
                    <span>{decision.decision}</span>
                  </div>
                  <div>
                    <strong className="text-blue-400">Rationale: </strong>
                    <span>{decision.rationale}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* =========================================================================
          06 — USER JOURNEY & SYSTEM ARCHITECTURE
          ========================================================================= */}
      <section id="review-pilot-journey" className="bg-[#1A1A1A] rounded-3xl border border-[#2B2B2B] p-8 sm:p-12 shadow-xl space-y-8">
        
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            06 — End-to-End User Experience & Flow
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The 6-Stage Operational Workflow
          </h2>
          <p className="text-sm sm:text-base text-[#9E9E9E] leading-relaxed">
            Designed for frictionless daily operations, transforming high-stress review triage into a sub-5 minute daily routine.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {userJourneyStages.map((stage) => (
            <div key={stage.num} className="p-5 rounded-2xl bg-[#141414] border border-[#262626] space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-extrabold px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300">
                  {stage.num}
                </span>
                <h3 className="text-sm font-bold text-white">{stage.title}</h3>
              </div>
              <p className="text-xs text-[#9E9E9E] leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* =========================================================================
          07 — QUANTITATIVE BUSINESS IMPACT & A/B TESTING
          ========================================================================= */}
      <section id="review-pilot-impact" className="bg-[#1A1A1A] rounded-3xl border border-[#2B2B2B] p-8 sm:p-12 shadow-xl space-y-8">
        
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            07 — Measurable Business Outcomes & Telemetry
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Validated Metrics & Verified Business Impact
          </h2>
          <p className="text-sm sm:text-base text-[#9E9E9E] leading-relaxed">
            Across our pilot cohort of 14,000+ customer reviews, Review Pilot delivered exceptional improvements in operational efficiency and customer sentiment.
          </p>
        </div>

        {/* 4 Large Impact Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-6 rounded-2xl bg-[#141414] border border-emerald-500/20 space-y-1">
            <span className="text-[11px] font-mono text-[#888888] uppercase">5-Star Review Acquisition</span>
            <div className="text-3xl font-extrabold text-emerald-400">+42%</div>
            <p className="text-xs text-[#A0A0A0]">YoY lift in verified positive reviews</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141414] border border-blue-500/20 space-y-1">
            <span className="text-[11px] font-mono text-[#888888] uppercase">Response Turnaround</span>
            <div className="text-3xl font-extrabold text-blue-400">4.2 min</div>
            <p className="text-xs text-[#A0A0A0]">Down from 48+ hours baseline</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141414] border border-purple-500/20 space-y-1">
            <span className="text-[11px] font-mono text-[#888888] uppercase">SLA Compliance</span>
            <div className="text-3xl font-extrabold text-purple-400">98.4%</div>
            <p className="text-xs text-[#A0A0A0]">Zero unaddressed 1-star reviews</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141414] border border-amber-500/20 space-y-1">
            <span className="text-[11px] font-mono text-[#888888] uppercase">Merchant LTV ROI</span>
            <div className="text-3xl font-extrabold text-amber-400">4.2x</div>
            <p className="text-xs text-[#A0A0A0]">Driven by organic conversion lift</p>
          </div>

        </div>

        {/* A/B Test Findings */}
        <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Key A/B Testing Finding: Optimal Review Booster Trigger Window</span>
          </h3>
          <p className="text-xs text-[#CCCCCC] leading-relaxed">
            We ran an A/B experimentation flight testing 3 trigger windows for automated post-service SMS review requests:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-xs">
            <div className="p-3 rounded-xl bg-[#1E1E1E] border border-[#2B2B2B]">
              <div className="font-bold text-white">Variant A: Immediate (0 min)</div>
              <p className="text-[#888888] text-[11px]">Conversion: 14.2% (Users still in transit)</p>
            </div>
            <div className="p-3 rounded-xl bg-[#1E1E1E] border border-emerald-500/40 ring-1 ring-emerald-500/20">
              <div className="font-bold text-emerald-400">Variant B: 90 Minutes Post (Winner)</div>
              <p className="text-[#CCCCCC] text-[11px]">Conversion: 38.6% (+172% lift vs Variant A)</p>
            </div>
            <div className="p-3 rounded-xl bg-[#1E1E1E] border border-[#2B2B2B]">
              <div className="font-bold text-white">Variant C: 24 Hours Post</div>
              <p className="text-[#888888] text-[11px]">Conversion: 19.8% (Memory decay)</p>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          08 — RETROSPECTIVE & V2/V3 ROADMAP
          ========================================================================= */}
      <section id="review-pilot-roadmap" className="bg-[#1A1A1A] rounded-3xl border border-[#2B2B2B] p-8 sm:p-12 shadow-xl space-y-8">
        
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            08 — PM Retrospective & Future Horizons
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            What I Learned & What’s Ahead
          </h2>
          <p className="text-sm sm:text-base text-[#9E9E9E] leading-relaxed">
            Reflections on product execution, AI guardrails, and our v2.0 feature horizons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Key Learnings */}
          <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-400" />
              <span>Core PM Learnings</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#9E9E9E]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Human-in-the-loop builds trust faster than full autonomy:</strong> Users wanted 1-click approvals rather than hands-off auto-posting to safeguard their brand voice.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Context is king in prompt engineering:</strong> Incorporating specific user complaints into the AI prompt eliminated generic "Thanks for your feedback" slop.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Compliance first:</strong> Staying strictly compliant with Google and Apple anti-gating policies preserved long-term platform viability.</span>
              </li>
            </ul>
          </div>

          {/* Next Horizons */}
          <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>v2.0 & v3.0 Strategic Roadmap</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#9E9E9E]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                <span><strong>Automated Jira & Linear Issue Sync (Q2):</strong> Convert recurring critical sentiment clusters directly into engineering bug tickets with stack traces.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                <span><strong>Multi-Modal Video & Voice Review Booster (Q3):</strong> Collect video testimonials with 1-click customer smartphone recording.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                <span><strong>Predictive Customer Churn Warning Engine (Q4):</strong> Flag enterprise accounts at risk of non-renewal based on sentiment velocity.</span>
              </li>
            </ul>
          </div>

        </div>

      </section>

      {/* =========================================================================
          BOTTOM NAVIGATION CTA
          ========================================================================= */}
      <div className="flex flex-wrap justify-between items-center gap-4 pt-8 border-t border-[#2C2C2C]">
        <button
          onClick={() => onNavigate('work')}
          className="text-xs font-mono font-semibold text-[#A0A0A0] hover:text-white transition-colors"
        >
          ← Back to All Projects
        </button>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('mp3-converter')}
            className="text-xs font-mono font-semibold text-[#E97868] hover:text-[#F4A095] px-4 py-2.5 rounded-full border border-[#E97868]/30 hover:border-[#E97868] transition-all"
          >
            Read MP3 Converter Suite →
          </button>

          <button
            onClick={() => onNavigate('hd-video-downloader')}
            className="text-xs font-mono font-semibold text-[#CCCCCC] hover:text-white px-4 py-2.5 rounded-full border border-[#333333] hover:border-white transition-all"
          >
            HD Video Downloader Study →
          </button>

          <button
            onClick={() => onNavigate('private-vault')}
            className="text-xs font-mono font-semibold text-[#A0A0A0] hover:text-white px-4 py-2.5 rounded-full border border-[#333333] hover:border-white transition-all"
          >
            Private Vault Study →
          </button>
          
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-[#EAEAEA] text-[#121212] font-bold text-xs transition-all shadow-md hover:scale-105 active:scale-95"
          >
            <span>Discuss PM Roles →</span>
          </button>
        </div>
      </div>

    </div>
  );
};
