import React from 'react';
import { PageRoute } from '../types';
import { motion } from 'motion/react';
import {
  Briefcase,
  GraduationCap,
  Download,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Award,
  Calendar,
  Building2,
  CheckCircle2,
  ExternalLink,
  Edit3
} from 'lucide-react';
import { usePortfolio } from '../context/ProjectContext';

interface ResumePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ onNavigate }) => {
  const { resume, globalAvatar } = usePortfolio();

  return (
    <div className="relative min-h-[92vh] px-4 sm:px-6 lg:pl-56 lg:pr-12 py-12">
      <div className="w-full max-w-6xl mx-auto space-y-12">

        {/* Section Top Header matching Screenshot 3 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 text-white font-extrabold text-3xl sm:text-4xl tracking-tight">
            <span className="h-[2px] w-12 bg-white/30 rounded-full" />
            <span>{resume.headerTitle || 'Resume'}</span>
            <span className="h-[2px] w-12 bg-white/30 rounded-full" />
          </div>
          <p className="text-sm text-[#9E9E9E]">
            {resume.headerSubtitle || 'Explore my career journey, product skills, telemetry expertise, and professional accomplishments built over 5+ years of mobile experience.'}
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('admin')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#202020] border border-[#333333] hover:border-white text-xs font-mono text-[#A0A0A0] hover:text-white transition-all"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Resume, Education & Experience</span>
            </button>
          </div>
        </motion.div>

        {/* 2-Column Main Resume Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Summary & Contact Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 bg-[#1E1E1E] border border-[#2D2D2D] rounded-[32px] p-6 space-y-6 shadow-2xl"
          >
            {/* Square/Rounded Portrait */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#262626] border border-[#333333]">
              <img
                src={globalAvatar}
                alt="Mansi Shrivastav"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">{resume.summaryTitle || 'Professional Summary'}</h3>
              <p className="text-xs text-[#9E9E9E] leading-relaxed">
                {resume.summaryText}
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 pt-2 border-t border-[#2A2A2A]">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Contact Information
              </h3>

              <div className="space-y-2 text-xs text-[#CCCCCC]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#888888] shrink-0 mt-0.5" />
                  <span>{resume.contactLocation}</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#888888] shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${resume.contactEmail}`}
                    className="hover:text-white transition-colors truncate"
                  >
                    {resume.contactEmail}
                  </a>
                </div>

                {resume.contactPhone && (
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#888888] shrink-0 mt-0.5" />
                    <div className="flex flex-wrap gap-x-2 gap-y-0.5">
                      <a href="tel:8445055267" className="hover:text-white transition-colors">
                        +91 8445055267
                      </a>
                      <span className="text-[#666666]">/</span>
                      <a href="tel:8755991920" className="hover:text-white transition-colors">
                        +91 8755991920
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#888888] shrink-0 mt-0.5" />
                  <a
                    href={resume.contactLinkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors truncate"
                  >
                    {resume.contactLinkedin.replace('https://', '')}
                  </a>
                </div>

                <div className="flex items-start gap-2.5">
                  <Github className="w-4 h-4 text-[#888888] shrink-0 mt-0.5" />
                  <a
                    href={resume.contactGithub}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors truncate"
                  >
                    {resume.contactGithub.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="pt-2">
              <button
                onClick={() => window.print()}
                className="w-full py-3 rounded-full bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Save / Print PDF Resume</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Experience & Education Timeline (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-8 space-y-10"
          >
            {/* Section 1: Professional Experience */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-white">
                <Briefcase className="w-6 h-6 text-white" />
                <h2>Professional Experience</h2>
              </div>

              {/* Timeline Container */}
              <div className="space-y-8 pl-3 sm:pl-4 border-l-2 border-[#2D2D2D]">
                {(resume.experiences || []).map((exp) => (
                  <div key={exp.id} className="relative pl-6 space-y-2 group">
                    {/* Glowing Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-4 border-[#121212] group-hover:scale-125 transition-transform" />

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono text-[#888888] bg-[#222222] px-2.5 py-1 rounded-full border border-[#333333]">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                      <Building2 className="w-3.5 h-3.5 text-[#888888]" />
                      <span>{exp.company}</span>
                      {exp.location && (
                        <span className="text-[#777777] font-normal">• {exp.location}</span>
                      )}
                    </div>

                    {exp.description && (
                      <p className="text-xs text-[#A0A0A0] italic">
                        {exp.description}
                      </p>
                    )}

                    <ul className="space-y-2 pt-1 text-xs text-[#9E9E9E]">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.tags && exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-[#252525] border border-[#333333] text-[10px] font-mono text-[#CCCCCC]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Education & Academic Background */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-white">
                <GraduationCap className="w-6 h-6 text-white" />
                <h2>Education & Academic Background</h2>
              </div>

              <div className="space-y-6 pl-3 sm:pl-4 border-l-2 border-[#2D2D2D]">
                {(resume.education || []).map((edu) => (
                  <div key={edu.id} className="relative pl-6 space-y-2 group">
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-4 border-[#121212] group-hover:scale-125 transition-transform" />

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-mono text-[#888888] bg-[#222222] px-2.5 py-1 rounded-full border border-[#333333]">
                        {edu.period}
                      </span>
                    </div>

                    <div className="text-xs text-[#CCCCCC] font-medium">
                      {edu.institution}
                    </div>

                    {edu.grade && (
                      <div className="inline-block text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-md">
                        {edu.grade}
                      </div>
                    )}

                    {edu.description && (
                      <p className="text-xs text-[#9E9E9E] leading-relaxed pt-1">
                        {edu.description}
                      </p>
                    )}

                    {edu.highlights && edu.highlights.length > 0 && (
                      <ul className="space-y-1.5 pt-1 text-xs text-[#9E9E9E]">
                        {edu.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0 mt-1.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Certifications & Specialized Training */}
            {resume.certifications && resume.certifications.length > 0 && (
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-white">
                  <Award className="w-6 h-6 text-white" />
                  <h2>Certifications & Professional Credentials</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {resume.certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-4 rounded-2xl bg-[#1E1E1E] border border-[#2D2D2D] space-y-1.5 hover:border-[#444444] transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-white">{cert.title}</h4>
                        <span className="text-[10px] font-mono text-[#888888]">{cert.year}</span>
                      </div>
                      <p className="text-[11px] text-[#A0A0A0]">{cert.issuer}</p>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-mono text-white hover:underline pt-1"
                        >
                          <span>Verify Credential</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>

        </div>

      </div>
    </div>
  );
};
