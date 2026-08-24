import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Sparkles,
  Users,
  Film,
  CheckCircle2,
  Volume2,
  VolumeX,
  Compass,
  Repeat,
  Flame,
  ArrowRight,
  Smile,
  X,
  Check
} from 'lucide-react';

export const InstagramFeedMockup: React.FC = () => {
  const [feedMode, setFeedMode] = useState<'friends' | 'foryou'>('friends');
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({
    'friend-1': true,
    'friend-2': false,
    'algo-1': false
  });
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({
    'friend-1': 38,
    'friend-2': 19,
    'algo-1': 142800
  });
  const [isDigestOpen, setIsDigestOpen] = useState<boolean>(false);
  const [digestStep, setDigestStep] = useState<number>(0);
  const [quickDmSent, setQuickDmSent] = useState<string | null>(null);

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => {
      const isLiked = !prev[postId];
      setLikeCounts(counts => ({
        ...counts,
        [postId]: counts[postId] + (isLiked ? 1 : -1)
      }));
      return { ...prev, [postId]: isLiked };
    });
  };

  const handleSendQuickDm = (friendName: string) => {
    setQuickDmSent(friendName);
    setTimeout(() => {
      setQuickDmSent(null);
    }, 2500);
  };

  const friendStories = [
    { id: '1', name: 'Your Story', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop', isYou: true, hasUnseen: false },
    { id: '2', name: 'Rohan (Close)', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop', isCloseFriend: true, hasUnseen: true },
    { id: '3', name: 'Ananya S.', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop', isCloseFriend: true, hasUnseen: true },
    { id: '4', name: 'Priya K.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop', isCloseFriend: false, hasUnseen: true },
    { id: '5', name: 'Dev M.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', isCloseFriend: false, hasUnseen: true },
  ];

  const digestItems = [
    {
      author: 'Rohan Sharma',
      time: '3 hours ago',
      location: 'Cubbon Park, Bangalore',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
      caption: 'Sunday morning 10k run with the crew 🏃‍♂️💨 Coffee stop was well deserved!',
      tag: 'Close Friend'
    },
    {
      author: 'Ananya Singhania',
      time: '5 hours ago',
      location: 'Indiranagar',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
      caption: 'Finally tried making sourdough focaccia from scratch! Rosemary + cherry tomatoes 🍅✨',
      tag: 'Close Friend'
    },
    {
      author: 'Priya Kapoor',
      time: '7 hours ago',
      location: 'Bandstand, Mumbai',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
      caption: 'Golden hour walks always reset the week 🌅',
      tag: 'Friend'
    }
  ];

  return (
    <div className="w-full bg-[#18181B] border border-[#2D2D2D] rounded-[32px] p-4 sm:p-8 shadow-2xl space-y-6">
      
      {/* Interactive Controls Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#2D2D2D]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-mono font-bold text-pink-400 uppercase tracking-wider mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive UX Prototype</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Dual Feed & Friends Catch-Up Digest Simulation
          </h3>
          <p className="text-xs text-zinc-400">
            Toggle between the proposed <strong>Friends & Family</strong> feed vs. standard <strong>For You (Algorithm)</strong> feed.
          </p>
        </div>

        {/* Feed Mode Switcher */}
        <div className="flex items-center p-1 bg-[#121214] border border-[#333333] rounded-2xl">
          <button
            onClick={() => setFeedMode('friends')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              feedMode === 'friends'
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Friends Mode</span>
            <span className="px-1.5 py-0.5 rounded-full bg-black/30 text-[10px]">New UX</span>
          </button>
          
          <button
            onClick={() => setFeedMode('foryou')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              feedMode === 'foryou'
                ? 'bg-[#2A2A2A] text-white shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>For You (Algo)</span>
            <span className="px-1.5 py-0.5 rounded-full bg-black/30 text-[10px]">Status Quo</span>
          </button>
        </div>
      </div>

      {/* Main Prototype Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Mobile Device Frame (6 cols) */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[390px] bg-black rounded-[42px] border-[6px] border-[#2A2A2A] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col relative text-white font-sans">
            
            {/* Top Device Notch & Status Bar */}
            <div className="bg-black px-6 pt-3 pb-2 flex items-center justify-between text-[11px] font-semibold text-zinc-400 z-20">
              <span>9:41</span>
              <div className="w-20 h-4 bg-[#1A1A1A] rounded-full mx-auto" />
              <div className="flex items-center gap-1.5 text-[10px]">
                <span>5G</span>
                <div className="w-4 h-2.5 border border-zinc-400 rounded-sm p-0.5">
                  <div className="w-full h-full bg-white rounded-[1px]" />
                </div>
              </div>
            </div>

            {/* In-App Instagram Header with Dual Mode Tabs */}
            <div className="bg-black/95 backdrop-blur-md px-4 py-2.5 border-b border-zinc-900 flex items-center justify-between sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="font-serif italic text-xl font-bold tracking-tight text-white">
                  Instagram
                </span>
                
                {/* Mode Indicator Pill inside app */}
                <div className="flex items-center bg-[#1A1A1A] border border-zinc-800 rounded-full p-0.5 text-[11px]">
                  <button
                    onClick={() => setFeedMode('friends')}
                    className={`px-2.5 py-0.5 rounded-full font-semibold transition-all ${
                      feedMode === 'friends'
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Friends
                  </button>
                  <button
                    onClick={() => setFeedMode('foryou')}
                    className={`px-2.5 py-0.5 rounded-full font-semibold transition-all ${
                      feedMode === 'foryou'
                        ? 'bg-zinc-700 text-white'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    For You
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white">
                <div className="relative">
                  <Heart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500" />
                </div>
                <div className="relative">
                  <MessageCircle className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 px-1 rounded-full bg-red-500 text-[9px] font-bold">4</span>
                </div>
              </div>
            </div>

            {/* Scrollable Feed Container */}
            <div className="h-[560px] overflow-y-auto custom-scrollbar space-y-4 pb-12">
              
              {/* Stories Tray */}
              <div className="flex items-center gap-3 px-3 py-2 overflow-x-auto no-scrollbar border-b border-zinc-900 bg-black/40">
                {friendStories.map(story => (
                  <div key={story.id} className="flex flex-col items-center gap-1 shrink-0 cursor-pointer group">
                    <div className={`p-[2px] rounded-full transition-transform group-hover:scale-105 ${
                      story.isYou
                        ? 'border border-zinc-700'
                        : story.isCloseFriend
                        ? 'bg-gradient-to-tr from-emerald-500 to-green-400'
                        : 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600'
                    }`}>
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-black"
                      />
                    </div>
                    <span className="text-[10px] text-zinc-300 truncate w-14 text-center">
                      {story.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Proposed Feature: Friends Catch-Up Digest Banner (Only in Friends mode) */}
              {feedMode === 'friends' && (
                <div className="px-3">
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-950/70 via-purple-950/60 to-zinc-900 border border-pink-500/40 shadow-lg space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                        <span className="text-xs font-bold text-white tracking-tight">
                          Today's Friends Catch-Up
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-pink-500/30 text-[9px] font-mono font-bold text-pink-300">
                          60s Digest
                        </span>
                      </div>
                      <span className="text-[10px] text-zinc-400 font-mono">3 Unseen</span>
                    </div>

                    <p className="text-[11px] text-zinc-300 leading-snug">
                      Catch up on updates from <strong>Rohan</strong>, <strong>Ananya</strong>, and <strong>Priya</strong> in a single, zero-ad 60-second reel.
                    </p>

                    <button
                      onClick={() => {
                        setIsDigestOpen(true);
                        setDigestStep(0);
                      }}
                      className="w-full py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white text-xs font-bold transition-all shadow flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Play 60s Friends Digest</span>
                    </button>
                  </motion.div>
                </div>
              )}

              {/* Feed Content Render based on Active Mode */}
              <AnimatePresence mode="wait">
                {feedMode === 'friends' ? (
                  <motion.div
                    key="friends-feed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    {/* Friend Post 1 */}
                    <div className="space-y-2.5">
                      {/* Post Header */}
                      <div className="flex items-center justify-between px-3">
                        <div className="flex items-center gap-2.5">
                          <img
                            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop"
                            alt="Rohan"
                            className="w-8 h-8 rounded-full object-cover border border-emerald-500"
                          />
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-white">rohan_sharma</span>
                              <span className="px-1.5 py-0.2 rounded bg-emerald-950 border border-emerald-500/50 text-[9px] font-mono text-emerald-400 font-bold">
                                Close Friend
                              </span>
                            </div>
                            <span className="text-[10px] text-zinc-400">Cubbon Park · 3h ago</span>
                          </div>
                        </div>
                        <MoreHorizontal className="w-4 h-4 text-zinc-400" />
                      </div>

                      {/* Post Image */}
                      <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop"
                          alt="Run"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white">
                          10.2 km 🏃‍♂️
                        </div>
                      </div>

                      {/* Action Bar */}
                      <div className="px-3 space-y-2">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-4">
                            <button onClick={() => toggleLike('friend-1')} className="hover:scale-110 transition-transform">
                              <Heart className={`w-5 h-5 ${likedPosts['friend-1'] ? 'text-red-500 fill-red-500' : 'text-white'}`} />
                            </button>
                            <MessageCircle className="w-5 h-5 hover:scale-110 transition-transform" />
                            <button onClick={() => handleSendQuickDm('Rohan')} className="hover:scale-110 transition-transform">
                              <Send className="w-5 h-5 text-zinc-200" />
                            </button>
                          </div>
                          <Bookmark className="w-5 h-5 text-zinc-300" />
                        </div>

                        {/* Likes & Caption */}
                        <div className="text-xs space-y-1">
                          <p className="font-bold text-white">{likeCounts['friend-1']} likes · Liked by ananya_s and 37 friends</p>
                          <p className="text-zinc-300">
                            <span className="font-bold text-white mr-1.5">rohan_sharma</span>
                            Sunday morning 10k run with the crew! Coffee stop at Third Wave was well deserved ☕✨
                          </p>
                        </div>

                        {/* 1-Tap DM Reaction Bar (Feature Concept) */}
                        <div className="pt-1 flex items-center gap-2">
                          <input
                            type="text"
                            placeholder="Reply to Rohan via DM..."
                            className="flex-1 bg-[#1A1A1A] border border-zinc-800 rounded-full px-3 py-1.5 text-[11px] text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500"
                          />
                          <button
                            onClick={() => handleSendQuickDm('Rohan')}
                            className="px-2.5 py-1.5 rounded-full bg-pink-500 hover:bg-pink-400 text-white text-[11px] font-bold"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Friend Post 2 */}
                    <div className="space-y-2.5 pt-2 border-t border-zinc-900">
                      <div className="flex items-center justify-between px-3">
                        <div className="flex items-center gap-2.5">
                          <img
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
                            alt="Ananya"
                            className="w-8 h-8 rounded-full object-cover border border-emerald-500"
                          />
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-white">ananya_singhania</span>
                              <span className="px-1.5 py-0.2 rounded bg-emerald-950 border border-emerald-500/50 text-[9px] font-mono text-emerald-400 font-bold">
                                Close Friend
                              </span>
                            </div>
                            <span className="text-[10px] text-zinc-400">Indiranagar · 5h ago</span>
                          </div>
                        </div>
                        <MoreHorizontal className="w-4 h-4 text-zinc-400" />
                      </div>

                      <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop"
                          alt="Focaccia"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="px-3 space-y-1.5">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-4">
                            <button onClick={() => toggleLike('friend-2')}>
                              <Heart className={`w-5 h-5 ${likedPosts['friend-2'] ? 'text-red-500 fill-red-500' : 'text-white'}`} />
                            </button>
                            <MessageCircle className="w-5 h-5" />
                            <Send className="w-5 h-5" onClick={() => handleSendQuickDm('Ananya')} />
                          </div>
                          <Bookmark className="w-5 h-5 text-zinc-300" />
                        </div>
                        <p className="text-xs font-bold text-white">{likeCounts['friend-2']} likes</p>
                        <p className="text-xs text-zinc-300">
                          <span className="font-bold text-white mr-1.5">ananya_singhania</span>
                          Sourdough baking experiment #3! Rosemary & sea salt focaccia 🍅🌿
                        </p>
                      </div>
                    </div>

                    {/* "You're All Caught Up" Clean Milestone */}
                    <div className="p-4 mx-3 rounded-2xl bg-[#141414] border border-emerald-500/30 text-center space-y-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-white">You're All Caught Up for Today!</h4>
                      <p className="text-[11px] text-zinc-400 max-w-xs mx-auto">
                        You've seen all new photos & stories from your close friends and family from the past 24 hours.
                      </p>
                      <button
                        onClick={() => setFeedMode('foryou')}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-pink-400 hover:text-pink-300 pt-1"
                      >
                        <span>Explore Trending Reels & Creators</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </motion.div>
                ) : (
                  <motion.div
                    key="algo-feed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    {/* Suggested Algorithmic Reel */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between px-3">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                            alt="Creator"
                            className="w-7 h-7 rounded-full object-cover"
                          />
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-white">viral_tech_hacks</span>
                              <span className="px-1 py-0.2 rounded bg-purple-950 text-[9px] font-mono text-purple-300">
                                Suggested Reel
                              </span>
                            </div>
                            <span className="text-[10px] text-zinc-400">Audio: Original Audio · 4.2M views</span>
                          </div>
                        </div>
                        <button className="px-3 py-1 rounded-lg bg-pink-500 text-white text-[11px] font-bold">
                          Follow
                        </button>
                      </div>

                      <div className="relative aspect-[9/12] bg-zinc-900 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
                          alt="AI Reel"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                          <div className="flex items-center gap-2 mb-1">
                            <Film className="w-3.5 h-3.5 text-pink-400" />
                            <span className="text-xs font-bold">10 AI Tools You Didn't Know Existed</span>
                          </div>
                          <p className="text-[11px] text-zinc-300">Wait till the 5th one, it literally blows your mind... #ai #future #tools</p>
                        </div>
                      </div>

                      <div className="px-3 flex items-center justify-between text-xs text-zinc-400">
                        <span>142.8K likes · 1,482 comments</span>
                        <span className="text-pink-400 font-mono">Suggested based on your watch history</span>
                      </div>
                    </div>

                    {/* Sponsored Ad Unit */}
                    <div className="space-y-2 pt-2 border-t border-zinc-900">
                      <div className="flex items-center justify-between px-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-emerald-500 text-black font-bold flex items-center justify-center text-xs">
                            AG
                          </div>
                          <div>
                            <span className="text-xs font-bold text-white block">athleticgreens</span>
                            <span className="text-[10px] text-zinc-400 font-mono">Sponsored · Ad</span>
                          </div>
                        </div>
                        <button className="px-3 py-1 rounded-lg bg-zinc-800 text-white text-[11px] font-semibold">
                          Shop Now
                        </button>
                      </div>
                      <div className="aspect-[16/9] bg-zinc-900 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
                          alt="Ad"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Bottom In-App Tab Navigation Bar */}
            <div className="bg-black/95 px-6 py-3 border-t border-zinc-900 flex items-center justify-between text-white sticky bottom-0 z-20">
              <div className="w-5 h-5 border-2 border-white rounded-sm" />
              <Compass className="w-5 h-5 text-zinc-500" />
              <Film className="w-5 h-5 text-zinc-500" />
              <Heart className="w-5 h-5 text-zinc-500" />
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 p-[1px]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                  alt="User"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Quick DM Toast Alert */}
            <AnimatePresence>
              {quickDmSent && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  className="absolute bottom-16 left-4 right-4 bg-emerald-500 text-black px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-between shadow-2xl z-30"
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Quick DM sent to {quickDmSent}!</span>
                  </div>
                  <span className="text-[10px] font-mono bg-black/20 px-2 py-0.5 rounded">In Chat</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Full-Screen Friends Catch-Up Digest Modal */}
            <AnimatePresence>
              {isDigestOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black z-50 flex flex-col"
                >
                  {/* Digest Progress Bars */}
                  <div className="px-3 pt-3 pb-1 flex items-center gap-1.5">
                    {digestItems.map((_, idx) => (
                      <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-white transition-all duration-300 ${
                            idx === digestStep
                              ? 'w-full animate-[progress_5s_linear]'
                              : idx < digestStep
                              ? 'w-full'
                              : 'w-0'
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Digest Header */}
                  <div className="px-4 py-2 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-pink-500 text-[10px] font-mono font-bold">
                        {digestItems[digestStep].tag}
                      </span>
                      <div>
                        <span className="text-xs font-bold block">{digestItems[digestStep].author}</span>
                        <span className="text-[10px] text-zinc-400">{digestItems[digestStep].time} · {digestItems[digestStep].location}</span>
                      </div>
                    </div>
                    <button onClick={() => setIsDigestOpen(false)} className="p-1 rounded-full bg-black/40 hover:bg-white/20">
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Digest Visual Card */}
                  <div className="flex-1 relative bg-zinc-950 flex items-center justify-center p-3">
                    <img
                      src={digestItems[digestStep].image}
                      alt="Digest"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    
                    {/* Navigation Tap Zones */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer"
                      onClick={() => setDigestStep(s => Math.max(0, s - 1))}
                    />
                    <div
                      className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer"
                      onClick={() => {
                        if (digestStep < digestItems.length - 1) {
                          setDigestStep(s => s + 1);
                        } else {
                          setIsDigestOpen(false);
                        }
                      }}
                    />

                    {/* Overlay Caption */}
                    <div className="absolute bottom-6 left-6 right-6 p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 text-white space-y-2">
                      <p className="text-xs leading-relaxed">
                        {digestItems[digestStep].caption}
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => {
                            handleSendQuickDm(digestItems[digestStep].author);
                            setIsDigestOpen(false);
                          }}
                          className="flex-1 py-1.5 rounded-xl bg-pink-500 hover:bg-pink-400 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Reply via DM</span>
                        </button>
                        <button className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white">
                          <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                        </button>
                      </div>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* Right Side: Product Architecture & Algorithmic Breakdown (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Key Product Mechanisms */}
          <div className="p-6 rounded-2xl bg-[#1E1E24] border border-[#2E2E38] space-y-4">
            <h4 className="text-sm font-mono font-bold text-pink-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Core UX Mechanisms in This Concept</span>
            </h4>

            <div className="space-y-3 text-xs text-zinc-300">
              <div className="p-3.5 rounded-xl bg-[#141418] border border-zinc-800 space-y-1">
                <span className="font-bold text-white block">1. 60-Second Friends Catch-Up Digest</span>
                <p className="text-zinc-400 leading-relaxed">
                  Instead of forcing users to scroll through 40 algorithmic items to find 2 friend updates, the top pinned digest curates all 24h close connections into an interactive, zero-ad micro-carousel.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141418] border border-zinc-800 space-y-1">
                <span className="font-bold text-white block">2. Dual Feed Mode ("Friends" vs "For You")</span>
                <p className="text-zinc-400 leading-relaxed">
                  Gives users immediate agency. A persistent top gesture switch remembers preference without burying chronological options inside hidden profile menus.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141418] border border-zinc-800 space-y-1">
                <span className="font-bold text-white block">3. 1-Tap DM Reaction Bridge</span>
                <p className="text-zinc-400 leading-relaxed">
                  Recognizing that DMs are the primary social graph, every friend post embeds a friction-free reply bar that turns passive viewing into instant 1-on-1 conversations.
                </p>
              </div>
            </div>
          </div>

          {/* Metric Lift Comparison Card */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-[#1A1A1E] border border-pink-500/30 space-y-1">
              <span className="text-[10px] font-mono uppercase text-pink-400 font-bold block">
                Friend Post Visibility
              </span>
              <span className="text-2xl font-extrabold text-white">+48%</span>
              <span className="text-[11px] text-zinc-400 block">In first 60s of session</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1A1A1E] border border-emerald-500/30 space-y-1">
              <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                DM Conversations Sparked
              </span>
              <span className="text-2xl font-extrabold text-white">+34%</span>
              <span className="text-[11px] text-zinc-400 block">From feed interactions</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1A1A1E] border border-purple-500/30 space-y-1">
              <span className="text-[10px] font-mono uppercase text-purple-400 font-bold block">
                D30 Social Retention
              </span>
              <span className="text-2xl font-extrabold text-white">+21%</span>
              <span className="text-[11px] text-zinc-400 block">Reduced alienation churn</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1A1A1E] border border-amber-500/30 space-y-1">
              <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">
                Ad Yield Impact
              </span>
              <span className="text-2xl font-extrabold text-white">0% Drop</span>
              <span className="text-[11px] text-zinc-400 block">Guardrail metric preserved</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
