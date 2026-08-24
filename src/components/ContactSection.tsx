import React, { useState } from 'react';
import { PageRoute } from '../types';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Edit3
} from 'lucide-react';
import { usePortfolio } from '../context/ProjectContext';

interface ContactSectionProps {
  onNavigate?: (route: PageRoute) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  const { contact } = usePortfolio();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email || 'manshishrivastav2000@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section className="relative min-h-[92vh] px-4 sm:px-6 lg:pl-56 lg:pr-12 py-12">
      <div className="w-full max-w-6xl mx-auto space-y-12">

        {/* Section Top Header matching Screenshot 6 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 text-white font-extrabold text-2xl sm:text-4xl tracking-tight text-center">
            <span className="h-[2px] w-12 bg-white/30 rounded-full shrink-0" />
            <span>{contact.headerTitle || "Let's Build Something Amazing Together"}</span>
            <span className="h-[2px] w-12 bg-white/30 rounded-full shrink-0" />
          </div>
          <p className="text-xs sm:text-sm text-[#9E9E9E] leading-relaxed">
            {contact.headerSubtitle}
          </p>

          {onNavigate && (
            <div className="pt-2">
              <button
                onClick={() => onNavigate('admin')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#202020] border border-[#333333] hover:border-white text-xs font-mono text-[#A0A0A0] hover:text-white transition-all"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Contact Details</span>
              </button>
            </div>
          )}
        </motion.div>

        {/* 2-Column Contact Grid matching Screenshot 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Information Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 bg-[#1E1E1E] border border-[#2D2D2D] rounded-[32px] p-6 sm:p-8 space-y-6 shadow-2xl"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">{contact.infoTitle || 'Contact Information'}</h3>
              <p className="text-xs sm:text-sm text-[#9E9E9E] leading-relaxed">
                {contact.infoDescription}
              </p>
            </div>

            {/* List of Information Items */}
            <div className="space-y-4 pt-2">
              
              {/* Location */}
              <div className="flex items-start gap-4 p-3 rounded-2xl bg-[#252525] border border-[#333333]">
                <div className="w-10 h-10 rounded-xl bg-[#1E1E1E] flex items-center justify-center text-[#A0A0A0] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{contact.locationTitle || 'Location'}</h4>
                  <p className="text-xs text-[#A0A0A0]">{contact.locationText}</p>
                  {contact.locationSubtext && (
                    <span className="text-[10px] font-mono text-emerald-400">{contact.locationSubtext}</span>
                  )}
                </div>
              </div>

              {/* Email Address with One-Click Copy */}
              <div className="flex items-start justify-between gap-4 p-3 rounded-2xl bg-[#252525] border border-[#333333]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1E1E1E] flex items-center justify-center text-[#A0A0A0] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Email Address</h4>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-xs text-[#A0A0A0] hover:text-white transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-[#1E1E1E] hover:bg-[#333333] text-[#A0A0A0] hover:text-white transition-all text-xs flex items-center gap-1"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-3 rounded-2xl bg-[#252525] hover:bg-[#2C2C2C] border border-[#333333] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E1E1E] flex items-center justify-center text-[#A0A0A0] group-hover:text-white shrink-0 mt-0.5">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div className="truncate">
                  <h4 className="text-xs font-bold text-white">LinkedIn</h4>
                  <p className="text-xs text-[#A0A0A0] group-hover:text-white truncate">
                    {contact.linkedin.replace('https://', '')}
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-3 rounded-2xl bg-[#252525] hover:bg-[#2C2C2C] border border-[#333333] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E1E1E] flex items-center justify-center text-[#A0A0A0] group-hover:text-white shrink-0 mt-0.5">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div className="truncate">
                  <h4 className="text-xs font-bold text-white">GitHub</h4>
                  <p className="text-xs text-[#A0A0A0] group-hover:text-white truncate">
                    {contact.github.replace('https://', '')}
                  </p>
                </div>
              </a>

              {/* Phone / Availability */}
              <div className="flex items-start gap-4 p-3 rounded-2xl bg-[#252525] border border-[#333333]">
                <div className="w-10 h-10 rounded-xl bg-[#1E1E1E] flex items-center justify-center text-[#A0A0A0] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white">Direct Phone / WhatsApp</h4>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#A0A0A0]">
                    <a
                      href="tel:8445055267"
                      className="hover:text-white transition-colors underline-offset-2 hover:underline"
                    >
                      +91 8445055267
                    </a>
                    <span className="text-[#666666]">•</span>
                    <a
                      href="tel:8755991920"
                      className="hover:text-white transition-colors underline-offset-2 hover:underline"
                    >
                      +91 8755991920
                    </a>
                  </div>
                  {contact.statusText && (
                    <span className="block text-[10px] font-mono text-[#888888] pt-0.5">{contact.statusText}</span>
                  )}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-[#1E1E1E] border border-[#2D2D2D] rounded-[32px] p-6 sm:p-8 space-y-6 shadow-2xl"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-white">Send a Message</h3>
              <p className="text-xs sm:text-sm text-[#9E9E9E] mt-1">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-[#252525] border border-emerald-500/30 text-center space-y-3 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-[#A0A0A0] max-w-md mx-auto">
                  Thank you for reaching out. I've received your note and look forward to connecting soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-full bg-[#333333] hover:bg-[#444444] text-xs font-semibold text-white transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#CCCCCC]">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white placeholder-[#777777] focus:outline-none focus:border-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#CCCCCC]">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white placeholder-[#777777] focus:outline-none focus:border-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Subject / Purpose *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Product Manager Opportunity / Mobile Strategy"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white placeholder-[#777777] focus:outline-none focus:border-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Your Message *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell me about the role, team, or project you'd like to collaborate on..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white placeholder-[#777777] focus:outline-none focus:border-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA] transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
