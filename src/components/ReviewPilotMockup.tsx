import React, { useState } from 'react';
import {
  Star,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  MessageSquare,
  TrendingUp,
  RefreshCw,
  Send,
  Sliders,
  Filter,
  Shield,
  Smartphone,
  Globe,
  ArrowRight,
  ThumbsUp,
  HeartHandshake,
  Bot,
  Zap,
  Check,
  Copy,
  ExternalLink
} from 'lucide-react';

interface MockReview {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  platform: 'Google' | 'App Store' | 'Trustpilot' | 'Google Play';
  date: string;
  text: string;
  sentiment: 'positive' | 'critical' | 'neutral';
  topicTag: string;
  urgency: 'high' | 'medium' | 'normal';
  status: 'pending' | 'replied';
  existingReply?: string;
  suggestedReplies: {
    empathetic: string;
    professional: string;
    concise: string;
    resolution: string;
  };
}

const MOCK_REVIEWS: MockReview[] = [
  {
    id: 'rev-1',
    author: 'Jessica Miller',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    rating: 1,
    platform: 'App Store',
    date: '12 mins ago',
    text: 'App crashed twice right after updating to iOS 17.4 when trying to export my monthly telemetry reports. Lost 20 minutes of work. Please fix ASAP!',
    sentiment: 'critical',
    topicTag: 'App Crash · v2.4 Export',
    urgency: 'high',
    status: 'pending',
    suggestedReplies: {
      empathetic: "Hi Jessica, we are so sorry about the crash and lost time! Our engineering squad identified the iOS 17.4 memory leak in report exports and just pushed hotfix v2.4.1 to the App Store. Please update today, and feel free to reach out directly to me at support@reviewpilot.io for direct assistance.",
      professional: "Thank you for alerting us, Jessica. We sincerely apologize for the inconvenience. A dedicated patch (v2.4.1) resolving export stability on iOS 17.4 is now live on the App Store. Please update your application to restore full stability.",
      concise: "Hi Jessica, sorry for the trouble! Hotfix v2.4.1 is now live in the App Store resolving this export issue. Please update your app.",
      resolution: "Jessica, thank you for reporting this. We deployed fix v2.4.1 immediately. We have also credited 1 free month to your account for the inconvenience. Please email support@reviewpilot.io so we can verify your account."
    }
  },
  {
    id: 'rev-2',
    author: 'Marcus Vance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    platform: 'Google',
    date: '1 hour ago',
    text: 'Review Pilot transformed our customer support ops. Our response turnaround dropped from 2 days to under 5 minutes, and our Google Maps rating went from 4.2 to 4.9 in 60 days!',
    sentiment: 'positive',
    topicTag: 'Productivity & Local SEO',
    urgency: 'normal',
    status: 'pending',
    suggestedReplies: {
      empathetic: "Marcus, this makes our entire team smile! Watching your local rating climb to 4.9 while slashing response times is exactly why we built Review Pilot. Thank you for your incredible partnership!",
      professional: "Thank you for the wonderful feedback, Marcus. We are delighted to hear that Review Pilot has accelerated your team's response velocity and bolstered your local search presence.",
      concise: "Thank you Marcus! Thrilled to see your 4.9 rating and faster response times. We appreciate your support!",
      resolution: "Marcus, thank you for sharing your stellar milestone (+0.7 rating increase in 60 days)! We'd love to feature your clinic in our upcoming customer spotlight if you're interested."
    }
  },
  {
    id: 'rev-3',
    author: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop',
    rating: 3,
    platform: 'Trustpilot',
    date: '3 hours ago',
    text: 'Great sentiment analytics, but I wish we could export scheduled CSV reports directly to our Slack channel every Monday morning.',
    sentiment: 'neutral',
    topicTag: 'Feature Request · Slack Integration',
    urgency: 'medium',
    status: 'pending',
    suggestedReplies: {
      empathetic: "Hi Elena, thank you so much for the thoughtful suggestion! We love the idea of automated Monday Slack digests. We have added this to our Q2 product roadmap, and I would love to invite you to our beta testing group.",
      professional: "Thank you for your constructive review, Elena. Automated Slack webhook exports for weekly sentiment digests are currently slated for our upcoming release cycle.",
      concise: "Thanks Elena! Slack automated digest exports are actively in development for our next sprint release.",
      resolution: "Elena, great news: our team is beta testing the Slack digest webhook this month. Would you be open to an early beta invite? Reach out to product@reviewpilot.io!"
    }
  },
  {
    id: 'rev-4',
    author: 'Liam O\'Connor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    platform: 'Google Play',
    date: '5 hours ago',
    text: 'The AI smart reply drafts are shockingly natural. It doesn’t sound like a generic robot—it actually reads the specifics of what users say.',
    sentiment: 'positive',
    topicTag: 'AI Quality & Natural Tone',
    urgency: 'normal',
    status: 'replied',
    existingReply: "Thank you Liam! Our team worked hard on context-aware prompt architecture to make sure every reply feels personal and genuine. Cheers!",
    suggestedReplies: {
      empathetic: "Thank you Liam! Natural, authentic communication is our highest design priority.",
      professional: "We appreciate your positive assessment of our natural language generation architecture.",
      concise: "Thanks Liam! Glad you love the natural AI drafts.",
      resolution: "Thank you Liam! Let us know if you need any customized brand tone presets."
    }
  }
];

export const ReviewPilotMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inbox' | 'analytics' | 'booster'>('inbox');
  const [selectedReviewId, setSelectedReviewId] = useState<string>('rev-1');
  const [selectedTone, setSelectedTone] = useState<'empathetic' | 'professional' | 'concise' | 'resolution'>('empathetic');
  const [platformFilter, setPlatformFilter] = useState<string>('All');
  const [reviewsState, setReviewsState] = useState<MockReview[]>(MOCK_REVIEWS);
  const [replyText, setReplyText] = useState<string>(MOCK_REVIEWS[0].suggestedReplies.empathetic);
  const [copied, setCopied] = useState(false);
  const [publishedSuccess, setPublishedSuccess] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const activeReview = reviewsState.find((r) => r.id === selectedReviewId) || reviewsState[0];

  // Change review
  const handleSelectReview = (rev: MockReview) => {
    setSelectedReviewId(rev.id);
    setPublishedSuccess(false);
    setReplyText(rev.status === 'replied' && rev.existingReply ? rev.existingReply : rev.suggestedReplies[selectedTone]);
  };

  // Change tone
  const handleToneChange = (tone: 'empathetic' | 'professional' | 'concise' | 'resolution') => {
    setSelectedTone(tone);
    setIsGenerating(true);
    setTimeout(() => {
      setReplyText(activeReview.suggestedReplies[tone]);
      setIsGenerating(false);
    }, 250);
  };

  // Publish reply
  const handlePublishReply = () => {
    setReviewsState((prev) =>
      prev.map((r) => (r.id === activeReview.id ? { ...r, status: 'replied', existingReply: replyText } : r))
    );
    setPublishedSuccess(true);
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(replyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredReviews = platformFilter === 'All'
    ? reviewsState
    : reviewsState.filter((r) => r.platform === platformFilter);

  return (
    <div className="w-full bg-[#181818] border border-[#2D2D2D] rounded-[32px] overflow-hidden shadow-2xl text-white font-sans">
      
      {/* Top Application Bar */}
      <div className="bg-[#1F1F1F] border-b border-[#2C2C2C] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        
        {/* Brand & Live Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center shadow-md">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-white">Review Pilot</span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                LIVE SIMULATOR
              </span>
            </div>
            <p className="text-[11px] text-[#888888] font-mono">Autonomous Review Intelligence & Reputation Flywheel</p>
          </div>
        </div>

        {/* Global Navigation Tabs */}
        <div className="flex items-center gap-1 bg-[#161616] p-1 rounded-2xl border border-[#2B2B2B]">
          <button
            onClick={() => setActiveTab('inbox')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'inbox'
                ? 'bg-[#2A2A2A] text-white shadow-sm'
                : 'text-[#888888] hover:text-white'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
            <span>AI Smart Inbox</span>
            <span className="ml-1 px-1.5 py-0.2 rounded-full bg-blue-500/30 text-blue-300 text-[10px]">3</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'analytics'
                ? 'bg-[#2A2A2A] text-white shadow-sm'
                : 'text-[#888888] hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
            <span>Sentiment Analytics</span>
          </button>

          <button
            onClick={() => setActiveTab('booster')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'booster'
                ? 'bg-[#2A2A2A] text-white shadow-sm'
                : 'text-[#888888] hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Review Booster Flow</span>
          </button>
        </div>

        {/* Live Health Metrics Pill */}
        <div className="hidden xl:flex items-center gap-4 bg-[#141414] px-4 py-2 rounded-2xl border border-[#262626] text-xs font-mono">
          <div className="flex items-center gap-1.5 text-[#CCCCCC]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Avg Rating: <strong className="text-white">4.85★</strong></span>
          </div>
          <span className="text-[#444444]">|</span>
          <div className="text-[#CCCCCC]">
            <span>SLA: <strong className="text-emerald-400">98.4%</strong></span>
          </div>
          <span className="text-[#444444]">|</span>
          <div className="text-[#CCCCCC]">
            <span>Avg Turnaround: <strong className="text-blue-400">4.2 min</strong></span>
          </div>
        </div>

      </div>

      {/* =========================================================================
          TAB 1: AI SMART INBOX & TRIAGE ENGINE
          ========================================================================= */}
      {activeTab === 'inbox' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          
          {/* Left Column: Review Feed (5 cols) */}
          <div className="lg:col-span-5 border-r border-[#262626] bg-[#161616] p-4 flex flex-col justify-between">
            
            <div className="space-y-3">
              {/* Filter Row */}
              <div className="flex items-center justify-between pb-2 border-b border-[#242424]">
                <div className="flex items-center gap-1.5 text-xs text-[#888888] font-mono font-medium">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Channels:</span>
                </div>
                <div className="flex items-center gap-1">
                  {['All', 'Google', 'App Store', 'Trustpilot'].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPlatformFilter(p)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                        platformFilter === p
                          ? 'bg-[#2A2A2A] text-white font-bold'
                          : 'text-[#777777] hover:text-white'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Cards List */}
              <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
                {filteredReviews.map((rev) => {
                  const isSelected = rev.id === activeReview.id;
                  return (
                    <div
                      key={rev.id}
                      onClick={() => handleSelectReview(rev)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer space-y-2 relative ${
                        isSelected
                          ? 'bg-[#222222] border-[#3B82F6]/60 shadow-lg ring-1 ring-[#3B82F6]/40'
                          : 'bg-[#1C1C1C] border-[#292929] hover:border-[#383838] hover:bg-[#1E1E1E]'
                      }`}
                    >
                      {/* Top Author & Platform Info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={rev.avatar}
                            alt={rev.author}
                            className="w-7 h-7 rounded-full object-cover border border-white/10"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="text-xs font-bold text-white">{rev.author}</h4>
                            <div className="flex items-center gap-1.5 text-[10px] text-[#888888]">
                              <span className="font-mono">{rev.platform}</span>
                              <span>•</span>
                              <span>{rev.date}</span>
                            </div>
                          </div>
                        </div>

                        {/* Star Rating & Status Badge */}
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex items-center text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-[#3A3A3A]'
                                }`}
                              />
                            ))}
                          </div>
                          {rev.status === 'replied' ? (
                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300">
                              REPLIED
                            </span>
                          ) : rev.urgency === 'high' ? (
                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-rose-500/20 text-rose-300 animate-pulse flex items-center gap-0.5">
                              <AlertTriangle className="w-2.5 h-2.5" /> URGENT
                            </span>
                          ) : (
                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-blue-500/20 text-blue-300">
                              NEEDS REPLY
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Review Excerpt */}
                      <p className="text-xs text-[#CCCCCC] line-clamp-2 leading-relaxed">
                        "{rev.text}"
                      </p>

                      {/* Topic Tag */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#161616] text-[#A0A0A0] border border-[#2B2B2B]">
                          #{rev.topicTag}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] font-mono text-blue-400 flex items-center gap-1">
                            Editing AI Draft <ArrowRight className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Ingestion Telemetry Footer */}
            <div className="pt-3 border-t border-[#242424] flex items-center justify-between text-[11px] text-[#777777] font-mono">
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-3 h-3 text-emerald-400 animate-spin" />
                Live Sync: All 5 Channels
              </span>
              <span>4.2 min avg SLA</span>
            </div>

          </div>

          {/* Right Column: AI Smart Assistant & Contextual Reply Composer (7 cols) */}
          <div className="lg:col-span-7 bg-[#1A1A1A] p-6 flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              
              {/* Selected Review Focus Header */}
              <div className="bg-[#202020] p-4 rounded-2xl border border-[#2E2E2E] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={activeReview.avatar}
                      alt={activeReview.author}
                      className="w-9 h-9 rounded-full object-cover border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-white">{activeReview.author}</h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2A2A2A] text-[#B0B0B0]">
                          {activeReview.platform}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#888888]">{activeReview.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < activeReview.rating ? 'fill-amber-400 text-amber-400' : 'text-[#3A3A3A]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#E0E0E0] leading-relaxed italic bg-[#161616] p-3 rounded-xl border border-[#292929]">
                  "{activeReview.text}"
                </p>

                {/* NLP Analysis Insight Pill */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded-lg border ${
                    activeReview.sentiment === 'positive'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : activeReview.sentiment === 'critical'
                      ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    Sentiment: {activeReview.sentiment.toUpperCase()}
                  </span>

                  <span className="text-[10px] font-mono px-2 py-1 rounded-lg bg-[#282828] text-[#CCCCCC] border border-[#333333]">
                    Topic: {activeReview.topicTag}
                  </span>

                  {activeReview.urgency === 'high' && (
                    <span className="text-[10px] font-mono font-bold px-2 py-1 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-rose-400" />
                      Priority Escalation (SLA &lt; 15 min)
                    </span>
                  )}
                </div>
              </div>

              {/* AI Generator Control Bar */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E5E5E5]">
                    <Bot className="w-4 h-4 text-blue-400" />
                    <span>AI Brand Voice Engine</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#888888]">1-Click Brand Safeguards Active</span>
                </div>

                {/* Tone Selectors */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'empathetic', label: 'Empathetic', desc: 'Warm & Caring' },
                    { id: 'professional', label: 'Professional', desc: 'Formal & Crisp' },
                    { id: 'concise', label: 'Concise', desc: 'Fast & Direct' },
                    { id: 'resolution', label: 'Resolution', desc: 'Action + VIP Credit' },
                  ].map((tone) => (
                    <button
                      key={tone.id}
                      onClick={() => handleToneChange(tone.id as any)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        selectedTone === tone.id
                          ? 'bg-[#292929] border-blue-500/60 shadow-sm ring-1 ring-blue-500/40'
                          : 'bg-[#202020] border-[#2E2E2E] hover:border-[#3A3A3A] text-[#888888]'
                      }`}
                    >
                      <div className="text-xs font-bold text-white">{tone.label}</div>
                      <div className="text-[10px] text-[#888888] font-mono">{tone.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Editable Reply Textarea */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-[#888888]">
                  <span>Customizable Response Output</span>
                  {isGenerating && (
                    <span className="text-blue-400 text-[11px] font-mono flex items-center gap-1 animate-pulse">
                      <Sparkles className="w-3 h-3" /> Synthesizing contextual reply...
                    </span>
                  )}
                </div>

                <div className="relative">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    rows={4}
                    className="w-full bg-[#141414] border border-[#2E2E2E] focus:border-blue-500 rounded-2xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500 leading-relaxed font-sans resize-none"
                    placeholder="Draft response will appear here..."
                  />
                  <button
                    onClick={handleCopy}
                    className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-[#252525] hover:bg-[#333333] text-[#A0A0A0] hover:text-white transition-all text-xs flex items-center gap-1"
                    title="Copy to Clipboard"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

            </div>

            {/* Action Bar / Publish Button */}
            <div className="pt-4 border-t border-[#262626] flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] font-mono text-[#888888] flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Anti-Hallucination Guardrails Engaged</span>
              </div>

              <div className="flex items-center gap-2">
                {publishedSuccess ? (
                  <div className="px-5 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Published to {activeReview.platform}!</span>
                  </div>
                ) : (
                  <button
                    onClick={handlePublishReply}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-lg hover:scale-105 active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Approve & Post to {activeReview.platform}</span>
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* =========================================================================
          TAB 2: SENTIMENT & ROOT-CAUSE ANALYTICS
          ========================================================================= */}
      {activeTab === 'analytics' && (
        <div className="p-6 sm:p-8 space-y-6 bg-[#161616]">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#262626]">
            <div>
              <h3 className="text-base font-bold text-white">Review Sentiment & Topic Clustering</h3>
              <p className="text-xs text-[#888888]">NLP models scanning 14,280 reviews across Google, Apple App Store, and Trustpilot</p>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[#222222] border border-[#2F2F2F] text-xs font-mono text-[#CCCCCC]">
              Date Range: <strong>Last 30 Days</strong> (Sprint v2.4 Cohort)
            </div>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="p-4 rounded-2xl bg-[#1E1E1E] border border-[#2B2B2B] space-y-2">
              <span className="text-[11px] font-mono text-[#888888] uppercase">Positive Sentiment</span>
              <div className="text-2xl font-extrabold text-emerald-400">78.4%</div>
              <div className="w-full bg-[#121212] h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full" style={{ width: '78.4%' }} />
              </div>
              <p className="text-[10px] text-[#777777] font-mono">+6.2% vs previous release</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1E1E1E] border border-[#2B2B2B] space-y-2">
              <span className="text-[11px] font-mono text-[#888888] uppercase">Neutral / Inquiry</span>
              <div className="text-2xl font-extrabold text-amber-400">13.8%</div>
              <div className="w-full bg-[#121212] h-2 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full rounded-full" style={{ width: '13.8%' }} />
              </div>
              <p className="text-[10px] text-[#777777] font-mono">Feature requests & inquiries</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1E1E1E] border border-[#2B2B2B] space-y-2">
              <span className="text-[11px] font-mono text-[#888888] uppercase">Critical Friction</span>
              <div className="text-2xl font-extrabold text-rose-400">7.8%</div>
              <div className="w-full bg-[#121212] h-2 rounded-full overflow-hidden">
                <div className="bg-rose-400 h-full rounded-full" style={{ width: '7.8%' }} />
              </div>
              <p className="text-[10px] text-[#777777] font-mono">-4.1% post-v2.4.1 hotfix</p>
            </div>

          </div>

          {/* Root-Cause Topic Clusters Table */}
          <div className="bg-[#1C1C1C] rounded-2xl border border-[#2A2A2A] p-5 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase text-[#CCCCCC]">Root Cause Topic Frequency & Sprint Action Items</h4>
            
            <div className="space-y-3">
              {[
                { topic: 'iOS 17.4 Export Crash', count: 18, sentiment: 'Critical', impact: 'P0 Bug', status: 'Fixed in v2.4.1', change: '-92% recurrence' },
                { topic: 'AI Smart Reply Quality', count: 342, sentiment: 'Positive', impact: 'Delight', status: 'Core Differentiator', change: '+38% praise' },
                { topic: 'Slack Notification Digest', count: 45, sentiment: 'Neutral', impact: 'Feature Request', status: 'Queued for Q2 Sprint', change: 'Trending up' },
                { topic: 'Google Maps Sync Speed', count: 128, sentiment: 'Positive', impact: 'Performance', status: 'Optimized (Sub-minute)', change: '+44% speed' },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#141414] border border-[#252525] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="space-y-0.5">
                    <div className="font-bold text-white flex items-center gap-2">
                      <span>#{item.topic}</span>
                      <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${
                        item.sentiment === 'Positive'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : item.sentiment === 'Critical'
                          ? 'bg-rose-500/20 text-rose-300'
                          : 'bg-amber-500/20 text-amber-300'
                      }`}>
                        {item.sentiment} ({item.count} mentions)
                      </span>
                    </div>
                    <p className="text-[11px] text-[#888888] font-mono">Product Impact: {item.impact}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-[#A0A0A0]">{item.status}</span>
                    <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      )}

      {/* =========================================================================
          TAB 3: REVIEW BOOSTER FLOW
          ========================================================================= */}
      {activeTab === 'booster' && (
        <div className="p-6 sm:p-8 space-y-6 bg-[#161616]">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#262626]">
            <div>
              <h3 className="text-base font-bold text-white">Smart Review Booster & Sentiment Pre-Routing Flow</h3>
              <p className="text-xs text-[#888888]">100% Policy-Compliant 2-tier feedback routing (Google & Apple anti-gating certified)</p>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-300">
              +42% Conversion Rate Lift
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Tier 1: Happy Customer Pathway */}
            <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-emerald-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Pathway A · High Intent (4-5 Stars)</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">88% of Customers</span>
              </div>
              <p className="text-xs text-[#CCCCCC] leading-relaxed">
                When delighted customers rate 4 or 5 stars, the system immediately presents direct 1-tap deep links to Google Reviews or the Apple App Store.
              </p>
              
              <div className="p-4 rounded-xl bg-[#121212] border border-[#2B2B2B] space-y-3">
                <div className="text-xs font-bold text-white">"Would you share your positive experience on Google?"</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 py-2 rounded-lg bg-blue-600 text-white font-bold text-center text-xs flex items-center justify-center gap-1.5">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Post to Google Reviews</span>
                  </div>
                  <div className="flex-1 py-2 rounded-lg bg-[#2A2A2A] text-white font-bold text-center text-xs flex items-center justify-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>App Store</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Zero friction link transfer → +42% 5-star acquisition volume</span>
              </div>
            </div>

            {/* Tier 2: Unhappy Customer Resolution Pathway */}
            <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-amber-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">Pathway B · Grievance (1-3 Stars)</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">12% of Customers</span>
              </div>
              <p className="text-xs text-[#CCCCCC] leading-relaxed">
                Customers with complaints are offered an immediate 1-tap direct VIP channel to the management team before posting public negative reviews.
              </p>
              
              <div className="p-4 rounded-xl bg-[#121212] border border-[#2B2B2B] space-y-3">
                <div className="text-xs font-bold text-white">"We want to make this right immediately."</div>
                <div className="py-2.5 rounded-lg bg-amber-600/90 text-white font-bold text-center text-xs flex items-center justify-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Connect Directly with General Manager (VIP SLA &lt; 5 min)</span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-amber-300 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>64% of potential 1-star reviews resolved in private support</span>
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
