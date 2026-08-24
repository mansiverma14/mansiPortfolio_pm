import React, { useState } from 'react';
import { PageRoute, Project, ProjectScreenshot, ProjectMetric, EducationItem, ExperienceItem, CertificationItem, SkillCardData, AboutStat, PortfolioSectionItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  Plus,
  Trash2,
  Edit2,
  Save,
  X,
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  ExternalLink,
  Layers,
  ArrowLeft,
  Download,
  FileCode,
  RotateCcw,
  Sparkles,
  Eye,
  EyeOff,
  Sliders,
  GraduationCap,
  Briefcase,
  User,
  Phone,
  Mail,
  Linkedin,
  Github,
  MapPin,
  TrendingUp,
  Award,
  Palette,
  Check,
  Camera,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  MoveUp,
  MoveDown,
  ListOrdered,
  RefreshCw,
  Search,
  CheckCircle,
  HelpCircle,
  LayoutGrid,
  AlertTriangle,
  Link as LinkIcon
} from 'lucide-react';
import { usePortfolio } from '../context/ProjectContext';
import { compressImageFile, validateImageUrl } from '../utils/imageCompressor';

interface AdminPageProps {
  onNavigate: (route: PageRoute) => void;
  onPreviewProject?: (project: Project) => void;
}

type AdminTab = 'projects' | 'layout' | 'about' | 'resume' | 'skills' | 'contact' | 'hero' | 'json';

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate, onPreviewProject }) => {
  const {
    hero,
    updateHero,
    about,
    updateAbout,
    addAboutStat,
    updateAboutStat,
    deleteAboutStat,
    resume,
    updateResume,
    addExperience,
    updateExperience,
    deleteExperience,
    addEducation,
    updateEducation,
    deleteEducation,
    addCertification,
    updateCertification,
    deleteCertification,
    skills,
    updateSkills,
    addSkillCard,
    updateSkillCard,
    deleteSkillCard,
    contact,
    updateContact,
    projects,
    addProject,
    updateProject,
    deleteProject,
    reorderProjects,
    moveProject,
    moveProjectToTop,
    restoreDefaultProjects,
    addScreenshot,
    removeScreenshot,
    updateScreenshot,
    addProjectMetric,
    removeProjectMetric,
    sections,
    updateSections,
    moveSection,
    moveSectionToTop,
    toggleSectionVisibility,
    resetSectionOrder,
    globalAvatar,
    updateGlobalAvatar,
    resetAvatar,
    resetToDefaults,
    exportFullPortfolioJSON,
    importFullPortfolioJSON,
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState<AdminTab>('projects');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // In-App Confirmation Modal State
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    confirmLabel?: string;
    isDestructive?: boolean;
    onConfirm: () => void;
  } | null>(null);

  // Project List Search & Reorder modal state
  const [projectSearch, setProjectSearch] = useState('');
  const [projectCategoryFilter, setProjectCategoryFilter] = useState('All');
  const [isArrangeProjectsModalOpen, setIsArrangeProjectsModalOpen] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // -------------------------------------------------------------
  // PROJECT STATE & MODALS
  // -------------------------------------------------------------
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [activeScreenshotProject, setActiveScreenshotProject] = useState<Project | null>(null);

  // Form states for project
  const [projectForm, setProjectForm] = useState<Partial<Project>>({
    name: '',
    category: '',
    role: '',
    timeline: '',
    shortProblem: '',
    fullProblem: '',
    solution: '',
    productAreas: [],
    tags: [],
    featured: false,
    externalReferenceUrl: '',
    screenshots: [],
    metrics: []
  });

  const [productAreaInput, setProductAreaInput] = useState('');
  const [tagInput, setTagInput] = useState('');
  
  // Screenshot upload state inside project modal
  const [newScreenshotUrl, setNewScreenshotUrl] = useState('');
  const [newScreenshotTitle, setNewScreenshotTitle] = useState('');
  const [newScreenshotCaption, setNewScreenshotCaption] = useState('');
  
  // Metric state inside project modal
  const [metricLabel, setMetricLabel] = useState('');
  const [metricValue, setMetricValue] = useState('');
  const [metricSub, setMetricSub] = useState('');

  // -------------------------------------------------------------
  // EDUCATION MODALS & STATE
  // -------------------------------------------------------------
  const [editingEdu, setEditingEdu] = useState<EducationItem | null>(null);
  const [isCreatingEdu, setIsCreatingEdu] = useState(false);
  const [eduForm, setEduForm] = useState<Partial<EducationItem>>({
    degree: '',
    institution: '',
    period: '',
    grade: '',
    description: '',
    highlights: []
  });
  const [eduHighlightInput, setEduHighlightInput] = useState('');

  // -------------------------------------------------------------
  // EXPERIENCE MODALS & STATE
  // -------------------------------------------------------------
  const [editingExp, setEditingExp] = useState<ExperienceItem | null>(null);
  const [isCreatingExp, setIsCreatingExp] = useState(false);
  const [expForm, setExpForm] = useState<Partial<ExperienceItem>>({
    role: '',
    company: '',
    period: '',
    location: '',
    description: '',
    bullets: [],
    tags: []
  });
  const [expBulletInput, setExpBulletInput] = useState('');
  const [expTagInput, setExpTagInput] = useState('');

  // -------------------------------------------------------------
  // CERTIFICATION MODALS & STATE
  // -------------------------------------------------------------
  const [editingCert, setEditingCert] = useState<CertificationItem | null>(null);
  const [isCreatingCert, setIsCreatingCert] = useState(false);
  const [certForm, setCertForm] = useState<Partial<CertificationItem>>({
    title: '',
    issuer: '',
    year: '',
    credentialUrl: ''
  });

  // -------------------------------------------------------------
  // SKILL CARD MODALS & STATE
  // -------------------------------------------------------------
  const [editingSkillCard, setEditingSkillCard] = useState<SkillCardData | null>(null);
  const [isCreatingSkillCard, setIsCreatingSkillCard] = useState(false);
  const [skillCardForm, setSkillCardForm] = useState<Partial<SkillCardData>>({
    title: '',
    iconName: 'Palette',
    skills: '',
    highlight: '',
    description: ''
  });

  // -------------------------------------------------------------
  // ABOUT NARRATIVE & STATS STATE
  // -------------------------------------------------------------
  const [newParagraphText, setNewParagraphText] = useState('');
  const [newCompetencyText, setNewCompetencyText] = useState('');
  const [newStatValue, setNewStatValue] = useState('');
  const [newStatLabel, setNewStatLabel] = useState('');
  const [newStatSub, setNewStatSub] = useState('');

  // -------------------------------------------------------------
  // HERO TYPEWRITER & AVATAR STUDIO STATE
  // -------------------------------------------------------------
  const [newPhraseInput, setNewPhraseInput] = useState('');
  const [avatarUrlInput, setAvatarUrlInput] = useState('');
  const [isApplyingAvatarUrl, setIsApplyingAvatarUrl] = useState(false);
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);

  const handleApplyAvatarUrl = async () => {
    if (!avatarUrlInput || !avatarUrlInput.trim()) {
      showToast('Please enter or paste a valid image URL');
      return;
    }
    const clean = avatarUrlInput.trim();
    setIsApplyingAvatarUrl(true);
    const isValid = await validateImageUrl(clean);
    setIsApplyingAvatarUrl(false);

    updateGlobalAvatar(clean);
    setAvatarUrlInput('');
    if (isValid) {
      showToast('Custom profile portrait photo updated successfully!');
    } else {
      showToast('Photo URL set! If it fails to render, check the image URL.');
    }
  };

  const handleResetAvatar = () => {
    resetAvatar();
    showToast('Reset profile portrait to default photo.');
  };

  // -------------------------------------------------------------
  // JSON IMPORT / EXPORT STATE
  // -------------------------------------------------------------
  const [importJsonText, setImportJsonText] = useState('');
  const [jsonError, setJsonError] = useState<string | null>(null);

  // -------------------------------------------------------------
  // PROJECT HANDLERS
  // -------------------------------------------------------------
  const handleOpenCreateProject = () => {
    setProjectForm({
      id: `project-${Date.now()}`,
      name: '',
      category: 'Consumer Mobile · Product',
      role: 'Product Management',
      timeline: '2023 — Present',
      shortProblem: '',
      fullProblem: '',
      solution: '',
      productAreas: ['Product Discovery', 'User Journey Mapping', 'Mobile UX'],
      tags: ['Product Strategy', 'Consumer Mobile', 'Android'],
      featured: false,
      externalReferenceUrl: '',
      screenshots: [],
      metrics: []
    });
    setIsCreatingProject(true);
  };

  const handleOpenEditProject = (p: Project) => {
    setEditingProject(p);
    setProjectForm({ ...p });
  };

  const handleSaveProject = () => {
    if (!projectForm.name || !projectForm.shortProblem) {
      alert('Please provide at least a Project Name and Short Problem statement.');
      return;
    }

    if (isCreatingProject) {
      const newProj: Project = {
        id: projectForm.id || `project-${Date.now()}`,
        name: projectForm.name || 'Untitled Project',
        category: projectForm.category || 'Product Management',
        role: projectForm.role || 'Product Manager',
        timeline: projectForm.timeline,
        shortProblem: projectForm.shortProblem || '',
        fullProblem: projectForm.fullProblem,
        solution: projectForm.solution,
        productAreas: projectForm.productAreas || [],
        tags: projectForm.tags || [],
        featured: !!projectForm.featured,
        externalReferenceUrl: projectForm.externalReferenceUrl,
        screenshots: projectForm.screenshots || [],
        coverImage: projectForm.coverImage || projectForm.screenshots?.[0]?.url,
        metrics: projectForm.metrics || []
      };
      addProject(newProj);
      setIsCreatingProject(false);
      showToast(`Added project "${newProj.name}" successfully!`);
    } else if (editingProject) {
      updateProject(editingProject.id, projectForm);
      setEditingProject(null);
      showToast(`Updated project "${projectForm.name}" successfully!`);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, target: 'project' | 'avatar') => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (target === 'avatar') {
      setIsUploadingAvatar(true);
      try {
        const compressed = await compressImageFile(file, 800, 1000, 0.85);
        updateGlobalAvatar(compressed);
        showToast('Profile photo updated & compressed successfully!');
      } catch (err) {
        console.error('Error compressing avatar', err);
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            updateGlobalAvatar(reader.result);
            showToast('Updated profile portrait image!');
          }
        };
        reader.readAsDataURL(file);
      } finally {
        setIsUploadingAvatar(false);
        e.target.value = '';
      }
      return;
    }

    if (target === 'project') {
      try {
        const compressed = await compressImageFile(file, 1200, 900, 0.85);
        const newScreenshot: ProjectScreenshot = {
          id: `shot-${Date.now()}`,
          url: compressed,
          title: newScreenshotTitle || file.name,
          caption: newScreenshotCaption || 'Uploaded screenshot',
          isCover: (projectForm.screenshots?.length || 0) === 0,
        };
        const updatedShots = [...(projectForm.screenshots || []), newScreenshot];
        setProjectForm({
          ...projectForm,
          screenshots: updatedShots,
          coverImage: projectForm.coverImage || newScreenshot.url,
        });
        setNewScreenshotTitle('');
        setNewScreenshotCaption('');
        showToast('Added screenshot to project!');
      } catch (err) {
        console.error(err);
      } finally {
        e.target.value = '';
      }
    }
  };

  const handleAddScreenshotUrl = () => {
    if (!newScreenshotUrl) return;
    const newScreenshot: ProjectScreenshot = {
      id: `shot-${Date.now()}`,
      url: newScreenshotUrl,
      title: newScreenshotTitle || 'Screenshot',
      caption: newScreenshotCaption || 'Product interface overview',
      isCover: (projectForm.screenshots?.length || 0) === 0,
    };
    const updatedShots = [...(projectForm.screenshots || []), newScreenshot];
    setProjectForm({
      ...projectForm,
      screenshots: updatedShots,
      coverImage: projectForm.coverImage || newScreenshot.url,
    });
    setNewScreenshotUrl('');
    setNewScreenshotTitle('');
    setNewScreenshotCaption('');
    showToast('Added screenshot link to project!');
  };

  const handleAddMetricToForm = () => {
    if (!metricLabel || !metricValue) return;
    const newMetric: ProjectMetric = {
      label: metricLabel,
      value: metricValue,
      subtitle: metricSub || undefined,
    };
    setProjectForm({
      ...projectForm,
      metrics: [...(projectForm.metrics || []), newMetric],
    });
    setMetricLabel('');
    setMetricValue('');
    setMetricSub('');
  };

  // -------------------------------------------------------------
  // EDUCATION HANDLERS
  // -------------------------------------------------------------
  const handleOpenCreateEdu = () => {
    setEduForm({
      id: `edu-${Date.now()}`,
      degree: '',
      institution: '',
      period: '2017 — 2021',
      grade: 'First Class with Distinction',
      description: '',
      highlights: []
    });
    setIsCreatingEdu(true);
  };

  const handleOpenEditEdu = (edu: EducationItem) => {
    setEditingEdu(edu);
    setEduForm({ ...edu });
  };

  const handleSaveEdu = () => {
    if (!eduForm.degree || !eduForm.institution) {
      alert('Please fill out the degree and institution names.');
      return;
    }

    if (isCreatingEdu) {
      const newEduItem: EducationItem = {
        id: eduForm.id || `edu-${Date.now()}`,
        degree: eduForm.degree || '',
        institution: eduForm.institution || '',
        period: eduForm.period || '2017 — 2021',
        grade: eduForm.grade,
        description: eduForm.description,
        highlights: eduForm.highlights || []
      };
      addEducation(newEduItem);
      setIsCreatingEdu(false);
      showToast(`Added education entry: "${newEduItem.degree}"`);
    } else if (editingEdu) {
      updateEducation(editingEdu.id, eduForm);
      setEditingEdu(null);
      showToast(`Updated education entry: "${eduForm.degree}"`);
    }
  };

  // -------------------------------------------------------------
  // EXPERIENCE HANDLERS
  // -------------------------------------------------------------
  const handleOpenCreateExp = () => {
    setExpForm({
      id: `exp-${Date.now()}`,
      role: '',
      company: '',
      period: '2023 — Present',
      location: 'Dehradun, India',
      description: '',
      bullets: [],
      tags: []
    });
    setIsCreatingExp(true);
  };

  const handleOpenEditExp = (exp: ExperienceItem) => {
    setEditingExp(exp);
    setExpForm({ ...exp });
  };

  const handleSaveExp = () => {
    if (!expForm.role || !expForm.company) {
      alert('Please provide Role title and Company name.');
      return;
    }

    if (isCreatingExp) {
      const newExpItem: ExperienceItem = {
        id: expForm.id || `exp-${Date.now()}`,
        role: expForm.role || '',
        company: expForm.company || '',
        period: expForm.period || '',
        location: expForm.location,
        description: expForm.description,
        bullets: expForm.bullets || [],
        tags: expForm.tags || []
      };
      addExperience(newExpItem);
      setIsCreatingExp(false);
      showToast(`Added experience: "${newExpItem.role}"`);
    } else if (editingExp) {
      updateExperience(editingExp.id, expForm);
      setEditingExp(null);
      showToast(`Updated experience: "${expForm.role}"`);
    }
  };

  // -------------------------------------------------------------
  // CERTIFICATION HANDLERS
  // -------------------------------------------------------------
  const handleOpenCreateCert = () => {
    setCertForm({
      id: `cert-${Date.now()}`,
      title: '',
      issuer: '',
      year: new Date().getFullYear().toString(),
      credentialUrl: ''
    });
    setIsCreatingCert(true);
  };

  const handleSaveCert = () => {
    if (!certForm.title || !certForm.issuer) {
      alert('Please fill in title and issuer.');
      return;
    }
    if (isCreatingCert) {
      const newCert: CertificationItem = {
        id: certForm.id || `cert-${Date.now()}`,
        title: certForm.title || '',
        issuer: certForm.issuer || '',
        year: certForm.year || '2023',
        credentialUrl: certForm.credentialUrl
      };
      addCertification(newCert);
      setIsCreatingCert(false);
      showToast(`Added certification: "${newCert.title}"`);
    } else if (editingCert) {
      updateCertification(editingCert.id, certForm);
      setEditingCert(null);
      showToast(`Updated certification: "${certForm.title}"`);
    }
  };

  // -------------------------------------------------------------
  // SKILL CARD HANDLERS
  // -------------------------------------------------------------
  const handleOpenCreateSkillCard = () => {
    setSkillCardForm({
      id: `skill-${Date.now()}`,
      title: '',
      iconName: 'Palette',
      skills: '',
      highlight: '',
      description: ''
    });
    setIsCreatingSkillCard(true);
  };

  const handleOpenEditSkillCard = (card: SkillCardData) => {
    setEditingSkillCard(card);
    setSkillCardForm({ ...card });
  };

  const handleSaveSkillCard = () => {
    if (!skillCardForm.title || !skillCardForm.skills) {
      alert('Please enter a Skill Title and Skills list.');
      return;
    }

    if (isCreatingSkillCard) {
      const newCard: SkillCardData = {
        id: skillCardForm.id || `skill-${Date.now()}`,
        title: skillCardForm.title || '',
        iconName: skillCardForm.iconName || 'Palette',
        skills: skillCardForm.skills || '',
        highlight: skillCardForm.highlight || 'Specialization',
        description: skillCardForm.description
      };
      addSkillCard(newCard);
      setIsCreatingSkillCard(false);
      showToast(`Added skill bento card: "${newCard.title}"`);
    } else if (editingSkillCard) {
      updateSkillCard(editingSkillCard.id, skillCardForm);
      setEditingSkillCard(null);
      showToast(`Updated skill bento card: "${skillCardForm.title}"`);
    }
  };

  const PRESET_AVATARS = [
    {
      label: 'Original Executive Portrait',
      url: '/profile.jpg'
    },
    {
      label: 'Modern Tech Portrait',
      url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop'
    },
    {
      label: 'Executive Leadership',
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop'
    },
    {
      label: 'Minimalist Studio',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  const renderPortraitStudioSection = () => (
    <div className="p-6 sm:p-7 rounded-[28px] bg-gradient-to-b from-[#252525] to-[#1C1C1C] border border-[#333333] space-y-6 shadow-xl relative overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#2E2E2E]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-white/10 text-white flex items-center justify-center">
              <Camera className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-base font-bold text-white">Global Profile Portrait Photo</h3>
          </div>
          <p className="text-xs text-[#9E9E9E]">
            Updates your portrait photo everywhere across the application: Hero banner, About page circular avatar, and Sidebar badge.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-semibold flex items-center gap-1.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Active & Synced</span>
          </span>
          <button
            onClick={handleResetAvatar}
            className="px-3 py-1 rounded-full bg-[#202020] hover:bg-[#2A2A2A] border border-[#3A3A3A] text-xs font-semibold text-[#AAAAAA] hover:text-white transition-all flex items-center gap-1"
            title="Reset to default photo"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Left is Visual Previews, Right is Upload & URL controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Visual Previews (5 cols) */}
        <div className="lg:col-span-5 flex items-center justify-center gap-5 p-4 rounded-2xl bg-[#181818] border border-[#2B2B2B]">
          {/* Card format Preview */}
          <div className="space-y-1.5 text-center">
            <div className="w-24 h-30 rounded-2xl overflow-hidden bg-[#202020] border-2 border-white/20 shadow-md relative mx-auto group">
              <img
                src={globalAvatar || '/profile.jpg'}
                alt="Portrait Preview"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/profile.jpg';
                }}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              {isUploadingAvatar && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                </div>
              )}
            </div>
            <span className="text-[10px] text-[#888888] font-mono block">Hero Card</span>
          </div>

          {/* Circle format Preview */}
          <div className="space-y-1.5 text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-[#202020] border-2 border-white/20 shadow-md relative mx-auto">
              <img
                src={globalAvatar || '/profile.jpg'}
                alt="Avatar Preview"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/profile.jpg';
                }}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              {isUploadingAvatar && (
                <div className="absolute inset-0 rounded-full bg-black/70 flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                </div>
              )}
            </div>
            <span className="text-[10px] text-[#888888] font-mono block">About Avatar</span>
          </div>
        </div>

        {/* Upload & URL Options (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Method A: Upload File Button */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Option 1: Upload from Device</span>
              <span className="text-[10px] font-normal text-[#888888]">(Auto-compressed & optimized)</span>
            </label>
            <div className="flex flex-wrap items-center gap-2.5">
              <label className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#EAEAEA] text-[#121212] font-bold text-xs cursor-pointer flex items-center gap-2 shadow-lg transition-all active:scale-95">
                <Camera className="w-4 h-4 text-[#121212]" />
                <span>{isUploadingAvatar ? 'Optimizing & Saving...' : 'Browse & Upload Photo'}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, 'avatar')}
                  className="hidden"
                  disabled={isUploadingAvatar}
                />
              </label>
              <span className="text-[11px] text-[#777777]">PNG, JPG, WEBP, or HEIC supported</span>
            </div>
          </div>

          {/* Method B: Direct URL Input */}
          <div className="space-y-1.5 pt-1">
            <label className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Option 2: Or Paste Direct Image URL</span>
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <LinkIcon className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#777777]" />
                <input
                  type="url"
                  value={avatarUrlInput}
                  onChange={(e) => setAvatarUrlInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleApplyAvatarUrl();
                    }
                  }}
                  placeholder="https://example.com/your-portrait-photo.jpg"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#333333] text-xs text-white placeholder-[#555555] focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <button
                onClick={handleApplyAvatarUrl}
                disabled={isApplyingAvatarUrl || !avatarUrlInput.trim()}
                className="px-4 py-2.5 rounded-xl bg-[#333333] hover:bg-[#444444] text-white font-bold text-xs transition-all disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1.5 shrink-0"
              >
                {isApplyingAvatarUrl ? (
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                ) : (
                  <Check className="w-3.5 h-3.5" />
                )}
                <span>Apply URL</span>
              </button>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="pt-1 flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-mono text-[#666666]">Sample Presets:</span>
            {PRESET_AVATARS.map((preset, pIdx) => (
              <button
                key={pIdx}
                onClick={() => {
                  updateGlobalAvatar(preset.url);
                  showToast(`Selected "${preset.label}"!`);
                }}
                className="px-2.5 py-1 rounded-lg bg-[#222222] hover:bg-[#2D2D2D] border border-[#333333] text-[10px] text-[#BBBBBB] hover:text-white transition-colors"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-[92vh] px-4 sm:px-6 lg:pl-56 lg:pr-12 py-10">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-6 right-6 z-50 px-5 py-3 rounded-2xl bg-emerald-950 border border-emerald-500/50 text-emerald-200 text-xs font-semibold flex items-center gap-2.5 shadow-2xl backdrop-blur-md"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-6xl mx-auto space-y-8">
        
        {/* Top Header & Fast Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2A2A2A]">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white text-[#121212] flex items-center justify-center font-black text-sm shadow-md">
                <Sliders className="w-5 h-5" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Portfolio Content Studio
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-[#9E9E9E]">
              Fully manage and customize every section of your portfolio: Projects, About, Education, Work Experience, Skills, and Contact information in real time.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('home')}
              className="px-4 py-2 rounded-full bg-[#242424] hover:bg-[#303030] border border-[#3A3A3A] text-xs font-semibold text-white transition-all flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Portfolio</span>
            </button>

            <button
              onClick={() => {
                setConfirmModal({
                  isOpen: true,
                  title: 'Reset Portfolio to Defaults?',
                  message: 'This will reset all portfolio information, case studies, education, experiences, skills, and section layouts back to factory defaults. Custom changes will be cleared.',
                  confirmLabel: 'Yes, Reset All',
                  isDestructive: true,
                  onConfirm: () => {
                    resetToDefaults();
                    showToast('Reset portfolio to initial defaults!');
                    setConfirmModal(null);
                  },
                });
              }}
              className="p-2 rounded-full bg-[#202020] hover:bg-rose-950/40 border border-[#333333] hover:border-rose-700/50 text-[#888888] hover:text-rose-300 transition-all text-xs"
              title="Reset all content to defaults"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Multi-Tab Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#222222] scrollbar-none">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'projects'
                ? 'bg-white text-[#121212] shadow-md'
                : 'bg-[#1C1C1C] text-[#888888] hover:text-white border border-[#2D2D2D]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Projects & Portfolio ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('layout')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'layout'
                ? 'bg-white text-[#121212] shadow-md'
                : 'bg-[#1C1C1C] text-[#888888] hover:text-white border border-[#2D2D2D]'
            }`}
          >
            <ListOrdered className="w-4 h-4 text-purple-400" />
            <span>Arrange Sections & Layout</span>
          </button>

          <button
            onClick={() => setActiveTab('about')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'about'
                ? 'bg-white text-[#121212] shadow-md'
                : 'bg-[#1C1C1C] text-[#888888] hover:text-white border border-[#2D2D2D]'
            }`}
          >
            <User className="w-4 h-4" />
            <span>About & Narrative</span>
          </button>

          <button
            onClick={() => setActiveTab('resume')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'resume'
                ? 'bg-white text-[#121212] shadow-md'
                : 'bg-[#1C1C1C] text-[#888888] hover:text-white border border-[#2D2D2D]'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Resume, Education & Experience</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'skills'
                ? 'bg-white text-[#121212] shadow-md'
                : 'bg-[#1C1C1C] text-[#888888] hover:text-white border border-[#2D2D2D]'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Skills & Bento Cards</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'contact'
                ? 'bg-white text-[#121212] shadow-md'
                : 'bg-[#1C1C1C] text-[#888888] hover:text-white border border-[#2D2D2D]'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Contact & Links</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'hero'
                ? 'bg-white text-[#121212] shadow-md'
                : 'bg-[#1C1C1C] text-[#888888] hover:text-white border border-[#2D2D2D]'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Hero & Bio</span>
          </button>

          <button
            onClick={() => setActiveTab('json')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'json'
                ? 'bg-white text-[#121212] shadow-md'
                : 'bg-[#1C1C1C] text-[#888888] hover:text-white border border-[#2D2D2D]'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>Sync & JSON</span>
          </button>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* TAB 1: PROJECTS & PORTFOLIO                                  */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Project Case Studies</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-mono text-white">
                    {projects.length} Total
                  </span>
                </h2>
                <p className="text-xs text-[#888888]">
                  Manage showcase apps, change sequence order, arrange positions, upload screenshots, metrics, and live URLs.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setIsArrangeProjectsModalOpen(true)}
                  className="px-4 py-2 rounded-full bg-[#242424] hover:bg-[#303030] border border-[#3A3A3A] text-xs font-semibold text-white transition-all flex items-center gap-1.5 shadow-md"
                >
                  <ListOrdered className="w-3.5 h-3.5 text-purple-400" />
                  <span>Arrange Sequence</span>
                </button>

                <button
                  onClick={() => {
                    setConfirmModal({
                      isOpen: true,
                      title: 'Restore Default Projects?',
                      message: 'This will reset your project list back to the full set of default case studies (including FitLife Pro, Instagram, Swiggy, Rapido, etc.). Any deleted default projects will be restored.',
                      confirmLabel: 'Restore Projects',
                      isDestructive: false,
                      onConfirm: () => {
                        restoreDefaultProjects();
                        showToast('Default projects restored successfully!');
                        setConfirmModal(null);
                      },
                    });
                  }}
                  className="px-3.5 py-2 rounded-full bg-[#202020] hover:bg-[#2A2A2A] border border-[#333333] text-xs text-[#AAAAAA] hover:text-white transition-all flex items-center gap-1.5"
                  title="Restore default case studies"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Restore Defaults</span>
                </button>

                <button
                  onClick={handleOpenCreateProject}
                  className="px-5 py-2 rounded-full bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA] transition-all flex items-center gap-2 shadow-lg"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Project</span>
                </button>
              </div>
            </div>

            {/* Quick Search & Filters */}
            <div className="flex flex-col sm:flex-row items-center gap-3 p-3 rounded-2xl bg-[#1A1A1A] border border-[#2B2B2B]">
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-[#777777] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search projects by name, category, or problem..."
                  value={projectSearch}
                  onChange={(e) => setProjectSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#242424] border border-[#333333] text-xs text-white placeholder-[#666666] focus:outline-none focus:border-white/30"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-[11px] text-[#888888] shrink-0 font-medium">Category:</span>
                <select
                  value={projectCategoryFilter}
                  onChange={(e) => setProjectCategoryFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-[#242424] border border-[#333333] text-xs text-white focus:outline-none w-full sm:w-auto"
                >
                  <option value="All">All Categories</option>
                  <option value="Product Strategy">Product Strategy</option>
                  <option value="Social & Media">Social & Media</option>
                  <option value="Mobility & Marketplace">Mobility & Marketplace</option>
                  <option value="Quick-Commerce">Quick-Commerce</option>
                  <option value="Health & Fitness">Health & Fitness</option>
                  <option value="Consumer Mobile">Consumer Mobile</option>
                </select>
              </div>
            </div>

            {/* Project List */}
            {projects.length === 0 ? (
              <div className="p-12 rounded-[28px] bg-[#1E1E1E] border border-dashed border-[#333333] text-center space-y-4">
                <Layers className="w-12 h-12 text-[#666666] mx-auto" />
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">No Projects in Portfolio</h3>
                  <p className="text-xs text-[#888888] max-w-sm mx-auto">
                    You have deleted all projects or none have been added yet. You can create a new project or restore factory defaults.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={restoreDefaultProjects}
                    className="px-4 py-2 rounded-full bg-purple-900/60 border border-purple-500/50 text-xs font-bold text-purple-200 hover:bg-purple-800 transition-all"
                  >
                    Restore Default Projects
                  </button>
                  <button
                    onClick={handleOpenCreateProject}
                    className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-all"
                  >
                    Create Custom Project
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects
                  .filter((p) => {
                    if (projectCategoryFilter !== 'All' && !p.category.toLowerCase().includes(projectCategoryFilter.toLowerCase())) {
                      return false;
                    }
                    if (projectSearch.trim()) {
                      const q = projectSearch.toLowerCase();
                      return (
                        p.name.toLowerCase().includes(q) ||
                        p.category.toLowerCase().includes(q) ||
                        p.shortProblem.toLowerCase().includes(q) ||
                        p.productAreas.some((a) => a.toLowerCase().includes(q))
                      );
                    }
                    return true;
                  })
                  .map((proj) => {
                    const originalIndex = projects.findIndex((p) => p.id === proj.id);
                    const cover = proj.coverImage || proj.screenshots?.[0]?.url;
                    return (
                      <div
                        key={proj.id}
                        className="p-5 rounded-[28px] bg-[#1E1E1E] border border-[#2D2D2D] hover:border-[#404040] space-y-4 transition-all flex flex-col justify-between group shadow-xl"
                      >
                        <div className="space-y-3">
                          {/* Cover Image & Tags */}
                          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#242424] border border-[#333333]">
                            {cover ? (
                              <img
                                src={cover}
                                alt={proj.name}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <div className="w-full h-full flex flex-col items-center justify-center text-[#666666] gap-2">
                                <ImageIcon className="w-8 h-8 opacity-40" />
                                <span className="text-xs">No cover image uploaded</span>
                              </div>
                            )}

                            {/* Position Badge */}
                            <div className="absolute top-3 right-3 flex items-center gap-1.5">
                              <span className="px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-white flex items-center gap-1">
                                <ListOrdered className="w-3 h-3 text-purple-400" />
                                <span>#{originalIndex + 1}</span>
                              </span>
                            </div>

                            <div className="absolute top-3 left-3 flex items-center gap-2">
                              <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white">
                                {proj.category}
                              </span>
                              {proj.featured && (
                                <span className="px-2 py-0.5 rounded-md bg-amber-500/90 text-black text-[10px] font-extrabold uppercase tracking-wide">
                                  Featured
                                </span>
                              )}
                            </div>

                            {proj.screenshots && proj.screenshots.length > 0 && (
                              <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-mono text-white/90 border border-white/10">
                                {proj.screenshots.length} Screenshots
                              </div>
                            )}
                          </div>

                          {/* Title & Short Problem */}
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-bold text-white">{proj.name}</h3>
                            </div>
                            <p className="text-xs text-[#9E9E9E] line-clamp-2 leading-relaxed">
                              {proj.shortProblem}
                            </p>
                          </div>

                          {/* Product areas & metrics */}
                          <div className="flex flex-wrap gap-1">
                            {proj.productAreas.slice(0, 3).map((area) => (
                              <span
                                key={area}
                                className="px-2 py-0.5 rounded-md bg-[#282828] border border-[#333333] text-[10px] text-[#CCCCCC]"
                              >
                                {area}
                              </span>
                            ))}
                          </div>

                          {proj.metrics && proj.metrics.length > 0 && (
                            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#262626]">
                              {proj.metrics.slice(0, 2).map((m, idx) => (
                                <div key={idx} className="p-2 rounded-xl bg-[#242424] border border-[#333333]">
                                  <span className="text-xs font-bold text-white block">{m.value}</span>
                                  <span className="text-[10px] text-[#888888] truncate block">{m.label}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Action Bar with Reordering & Deletion */}
                        <div className="pt-3 border-t border-[#292929] flex flex-wrap items-center justify-between gap-2">
                          {/* Arrange Up / Down / Top Controls */}
                          <div className="flex items-center gap-1 bg-[#181818] p-1 rounded-xl border border-[#2B2B2B]">
                            <button
                              onClick={() => moveProject(originalIndex, 'up')}
                              disabled={originalIndex === 0}
                              className="p-1.5 rounded-lg hover:bg-[#2C2C2C] text-[#AAAAAA] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                              title="Move project up"
                            >
                              <ArrowUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => moveProject(originalIndex, 'down')}
                              disabled={originalIndex === projects.length - 1}
                              className="p-1.5 rounded-lg hover:bg-[#2C2C2C] text-[#AAAAAA] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                              title="Move project down"
                            >
                              <ArrowDown className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => moveProjectToTop(proj.id)}
                              disabled={originalIndex === 0}
                              className="p-1.5 rounded-lg hover:bg-[#2C2C2C] text-purple-400 hover:text-purple-300 disabled:opacity-30 disabled:pointer-events-none transition-colors text-[10px] font-bold"
                              title="Move to top (#1)"
                            >
                              <MoveUp className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Edit and Safe Delete */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleOpenEditProject(proj)}
                              className="px-3.5 py-1.5 rounded-xl bg-[#282828] hover:bg-[#333333] border border-[#383838] text-xs font-semibold text-white transition-all flex items-center gap-1.5"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                              <span>Edit</span>
                            </button>

                            <button
                              onClick={() => {
                                setConfirmModal({
                                  isOpen: true,
                                  title: `Delete "${proj.name}"?`,
                                  message: `Are you sure you want to delete "${proj.name}" from your portfolio? It will be removed immediately from your case studies and live portfolio pages.`,
                                  confirmLabel: 'Delete Project',
                                  isDestructive: true,
                                  onConfirm: () => {
                                    deleteProject(proj.id);
                                    showToast(`Deleted "${proj.name}" successfully!`);
                                    setConfirmModal(null);
                                  },
                                });
                              }}
                              className="p-2 rounded-xl bg-[#252525] hover:bg-rose-950/40 border border-[#333333] hover:border-rose-700/50 text-[#888888] hover:text-rose-300 transition-all"
                              title="Delete Project"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB: ARRANGE SECTIONS & LAYOUT                                 */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'layout' && (
          <div className="space-y-6 bg-[#1E1E1E] border border-[#2D2D2D] rounded-[32px] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2A2A2A] pb-4">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <ListOrdered className="w-5 h-5 text-purple-400" />
                  <span>Portfolio Section Arrangement & Visibility</span>
                </h2>
                <p className="text-xs text-[#888888]">
                  Arrange the display order of your portfolio sections on the homepage and toggle their visibility on or off.
                </p>
              </div>

              <button
                onClick={() => {
                  setConfirmModal({
                    isOpen: true,
                    title: 'Reset Section Arrangement?',
                    message: 'Reset all portfolio sections back to the default display order and show all sections.',
                    confirmLabel: 'Reset Order',
                    isDestructive: false,
                    onConfirm: () => {
                      resetSectionOrder();
                      showToast('Section order reset to default!');
                      setConfirmModal(null);
                    },
                  });
                }}
                className="px-4 py-2 rounded-full bg-[#252525] hover:bg-[#303030] border border-[#3A3A3A] text-xs font-semibold text-white transition-all flex items-center gap-1.5 self-start sm:self-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Section Order</span>
              </button>
            </div>

            {/* Reorderable Section Items List */}
            <div className="space-y-3">
              {sections.map((sec, idx) => (
                <div
                  key={sec.id}
                  className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    sec.visible
                      ? 'bg-[#242424] border-[#333333] hover:border-[#444444]'
                      : 'bg-[#181818] border-[#2A2A2A] opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Index Badge */}
                    <div className="w-8 h-8 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      #{idx + 1}
                    </div>

                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white">{sec.title}</h4>
                        {sec.visible ? (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-[10px] font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Visible</span>
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 text-[10px] font-semibold flex items-center gap-1">
                            <EyeOff className="w-3 h-3" />
                            <span>Hidden</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#888888]">{sec.description}</p>
                    </div>
                  </div>

                  {/* Actions: Move Up / Move Down / Move to Top / Toggle Visibility */}
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                    {/* Move controls */}
                    <div className="flex items-center gap-1 bg-[#1A1A1A] p-1 rounded-xl border border-[#333333]">
                      <button
                        onClick={() => moveSection(idx, 'up')}
                        disabled={idx === 0}
                        className="p-1.5 rounded-lg hover:bg-[#2C2C2C] text-[#AAAAAA] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                        title="Move section up"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => moveSection(idx, 'down')}
                        disabled={idx === sections.length - 1}
                        className="p-1.5 rounded-lg hover:bg-[#2C2C2C] text-[#AAAAAA] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                        title="Move section down"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => moveSectionToTop(sec.id)}
                        disabled={idx === 0}
                        className="p-1.5 rounded-lg hover:bg-[#2C2C2C] text-purple-400 hover:text-purple-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                        title="Move to top of page"
                      >
                        <MoveUp className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Visibility Toggle */}
                    <button
                      onClick={() => {
                        toggleSectionVisibility(sec.id);
                        showToast(`Section "${sec.title}" is now ${sec.visible ? 'hidden' : 'visible'}`);
                      }}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all flex items-center gap-1.5 ${
                        sec.visible
                          ? 'bg-[#1E1E1E] hover:bg-[#2A2A2A] border-[#3A3A3A] text-zinc-300'
                          : 'bg-emerald-950/40 hover:bg-emerald-900/60 border-emerald-500/50 text-emerald-300'
                      }`}
                    >
                      {sec.visible ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Hide</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Show</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 2: ABOUT & NARRATIVE SECTION                              */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'about' && (
          <div className="space-y-8 bg-[#1E1E1E] border border-[#2D2D2D] rounded-[32px] p-6 sm:p-8">
            <div className="border-b border-[#2A2A2A] pb-4">
              <h2 className="text-xl font-bold text-white">About Page Content & Narrative</h2>
              <p className="text-xs text-[#888888]">
                Customize your portrait photo, headline, badge, biographical story paragraphs, stats grid, and competencies.
              </p>
            </div>

            {/* Profile Photo Studio Section */}
            {renderPortraitStudioSection()}

            {/* Headline & Badge */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Badge Label</label>
                <input
                  type="text"
                  value={about.badgeText}
                  onChange={(e) => updateAbout({ badgeText: e.target.value })}
                  placeholder="Get to Know Me"
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none focus:border-white"
                />
              </div>

              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Main Section Headline</label>
                <input
                  type="text"
                  value={about.headline}
                  onChange={(e) => updateAbout({ headline: e.target.value })}
                  placeholder="Building Scalable, Intuitive & User-Centric Consumer Products"
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none focus:border-white"
                />
              </div>
            </div>

            {/* Profile Info Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Display Name</label>
                <input
                  type="text"
                  value={about.name}
                  onChange={(e) => updateAbout({ name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none focus:border-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Role Title</label>
                <input
                  type="text"
                  value={about.roleTitle}
                  onChange={(e) => updateAbout({ roleTitle: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none focus:border-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Email</label>
                <input
                  type="email"
                  value={about.email}
                  onChange={(e) => updateAbout({ email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none focus:border-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Phone / Contact</label>
                <input
                  type="text"
                  value={about.phoneOrStatus || ''}
                  onChange={(e) => updateAbout({ phoneOrStatus: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none focus:border-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Location</label>
                <input
                  type="text"
                  value={about.location}
                  onChange={(e) => updateAbout({ location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none focus:border-white"
                />
              </div>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-3 pt-4 border-t border-[#282828]">
              <h3 className="text-sm font-bold text-white">Story & Narrative Paragraphs</h3>
              <div className="space-y-3">
                {(about.narrativeParagraphs || []).map((p, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-[#252525] p-3 rounded-2xl border border-[#333333]">
                    <textarea
                      rows={3}
                      value={p}
                      onChange={(e) => {
                        const updated = [...about.narrativeParagraphs];
                        updated[idx] = e.target.value;
                        updateAbout({ narrativeParagraphs: updated });
                      }}
                      className="w-full bg-transparent text-xs text-[#E0E0E0] focus:outline-none resize-none leading-relaxed"
                    />
                    <button
                      onClick={() => {
                        const updated = about.narrativeParagraphs.filter((_, i) => i !== idx);
                        updateAbout({ narrativeParagraphs: updated });
                      }}
                      className="p-1.5 text-[#888888] hover:text-rose-400 transition-colors"
                      title="Remove paragraph"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Paragraph */}
              <div className="flex gap-2 pt-1">
                <textarea
                  rows={2}
                  value={newParagraphText}
                  onChange={(e) => setNewParagraphText(e.target.value)}
                  placeholder="Write a new narrative paragraph..."
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none focus:border-white resize-none"
                />
                <button
                  onClick={() => {
                    if (newParagraphText.trim()) {
                      updateAbout({
                        narrativeParagraphs: [...(about.narrativeParagraphs || []), newParagraphText.trim()]
                      });
                      setNewParagraphText('');
                      showToast('Added paragraph to About narrative!');
                    }
                  }}
                  className="px-4 py-2 rounded-2xl bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA] shrink-0"
                >
                  Add Paragraph
                </button>
              </div>
            </div>

            {/* Stats Metric Cards Grid */}
            <div className="space-y-3 pt-4 border-t border-[#282828]">
              <h3 className="text-sm font-bold text-white">About Metric & Stat Cards</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(about.stats || []).map((stat) => (
                  <div key={stat.id} className="p-4 rounded-2xl bg-[#252525] border border-[#333333] space-y-2 relative group">
                    <button
                      onClick={() => deleteAboutStat(stat.id)}
                      className="absolute top-2 right-2 p-1 text-[#888888] hover:text-rose-400 transition-colors"
                      title="Delete Stat"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div>
                      <label className="text-[10px] text-[#777777] uppercase font-mono">Value</label>
                      <input
                        type="text"
                        value={stat.value}
                        onChange={(e) => updateAboutStat(stat.id, { value: e.target.value })}
                        className="w-full bg-[#1E1E1E] px-3 py-1.5 rounded-xl border border-[#383838] text-sm font-extrabold text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-[#777777] uppercase font-mono">Label</label>
                      <input
                        type="text"
                        value={stat.label}
                        onChange={(e) => updateAboutStat(stat.id, { label: e.target.value })}
                        className="w-full bg-[#1E1E1E] px-3 py-1.5 rounded-xl border border-[#383838] text-xs text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-[#777777] uppercase font-mono">Subtext</label>
                      <input
                        type="text"
                        value={stat.subtext || ''}
                        onChange={(e) => updateAboutStat(stat.id, { subtext: e.target.value })}
                        className="w-full bg-[#1E1E1E] px-3 py-1.5 rounded-xl border border-[#383838] text-[11px] text-[#AAAAAA] focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Stat */}
              <div className="p-4 rounded-2xl bg-[#222222] border border-[#333333] grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
                <div>
                  <label className="text-[10px] text-[#888888] block">Value (e.g. 10M+)</label>
                  <input
                    type="text"
                    value={newStatValue}
                    onChange={(e) => setNewStatValue(e.target.value)}
                    placeholder="10M+"
                    className="w-full px-3 py-2 rounded-xl bg-[#1A1A1A] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-[#888888] block">Label</label>
                  <input
                    type="text"
                    value={newStatLabel}
                    onChange={(e) => setNewStatLabel(e.target.value)}
                    placeholder="User Reach"
                    className="w-full px-3 py-2 rounded-xl bg-[#1A1A1A] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-[#888888] block">Subtext</label>
                  <input
                    type="text"
                    value={newStatSub}
                    onChange={(e) => setNewStatSub(e.target.value)}
                    placeholder="Across apps"
                    className="w-full px-3 py-2 rounded-xl bg-[#1A1A1A] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>
                <button
                  onClick={() => {
                    if (newStatValue && newStatLabel) {
                      addAboutStat({
                        id: `stat-${Date.now()}`,
                        value: newStatValue,
                        label: newStatLabel,
                        subtext: newStatSub
                      });
                      setNewStatValue('');
                      setNewStatLabel('');
                      setNewStatSub('');
                      showToast('Added stat card!');
                    }
                  }}
                  className="w-full py-2.5 rounded-xl bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA]"
                >
                  Add Stat Card
                </button>
              </div>
            </div>

            {/* Core Competencies Tags */}
            <div className="space-y-3 pt-4 border-t border-[#282828]">
              <h3 className="text-sm font-bold text-white">Competencies & Superpower Chips</h3>
              <div className="flex flex-wrap gap-2">
                {(about.competencies || []).map((comp, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#252525] border border-[#383838] text-xs text-white"
                  >
                    <span>{comp}</span>
                    <button
                      onClick={() => {
                        const updated = about.competencies.filter((_, i) => i !== idx);
                        updateAbout({ competencies: updated });
                      }}
                      className="text-[#888888] hover:text-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>

              <div className="flex gap-2 max-w-md pt-1">
                <input
                  type="text"
                  value={newCompetencyText}
                  onChange={(e) => setNewCompetencyText(e.target.value)}
                  placeholder="e.g. Ad Monetization, Kotlin, User Research"
                  className="w-full px-4 py-2 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                />
                <button
                  onClick={() => {
                    if (newCompetencyText.trim()) {
                      updateAbout({
                        competencies: [...(about.competencies || []), newCompetencyText.trim()]
                      });
                      setNewCompetencyText('');
                    }
                  }}
                  className="px-4 py-2 rounded-2xl bg-white text-[#121212] font-bold text-xs shrink-0"
                >
                  Add Chip
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 3: RESUME, EDUCATION & EXPERIENCE                         */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'resume' && (
          <div className="space-y-10">
            
            {/* Header info */}
            <div className="p-6 rounded-[32px] bg-[#1E1E1E] border border-[#2D2D2D] space-y-4">
              <h2 className="text-xl font-bold text-white">Resume General Info & Summary</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Page Header Title</label>
                  <input
                    type="text"
                    value={resume.headerTitle}
                    onChange={(e) => updateResume({ headerTitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Header Subtitle</label>
                  <input
                    type="text"
                    value={resume.headerSubtitle}
                    onChange={(e) => updateResume({ headerSubtitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Professional Summary Statement</label>
                <textarea
                  rows={3}
                  value={resume.summaryText}
                  onChange={(e) => updateResume({ summaryText: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none resize-none leading-relaxed"
                />
              </div>

              {/* Resume Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 border-t border-[#282828]">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Resume Email</label>
                  <input
                    type="email"
                    value={resume.contactEmail || ''}
                    onChange={(e) => updateResume({ contactEmail: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Resume Phone</label>
                  <input
                    type="text"
                    value={resume.contactPhone || ''}
                    onChange={(e) => updateResume({ contactPhone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Resume Location</label>
                  <input
                    type="text"
                    value={resume.contactLocation || ''}
                    onChange={(e) => updateResume({ contactLocation: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Resume LinkedIn URL</label>
                  <input
                    type="text"
                    value={resume.contactLinkedin || ''}
                    onChange={(e) => updateResume({ contactLinkedin: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* SECTION: EDUCATION (FULL CRUD) */}
            <div className="p-6 rounded-[32px] bg-[#1E1E1E] border border-[#2D2D2D] space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#282828]">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-white" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Education & Degrees</h3>
                    <p className="text-xs text-[#888888]">Add, update, or remove university degrees, colleges, GPA and coursework.</p>
                  </div>
                </div>

                <button
                  onClick={handleOpenCreateEdu}
                  className="px-4 py-2 rounded-full bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA] flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Education</span>
                </button>
              </div>

              <div className="space-y-4">
                {(resume.education || []).map((edu) => (
                  <div
                    key={edu.id}
                    className="p-5 rounded-2xl bg-[#252525] border border-[#333333] flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                        <span className="text-xs font-mono text-[#888888] bg-[#1E1E1E] px-2.5 py-0.5 rounded-full border border-[#333333]">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs text-[#CCCCCC]">{edu.institution}</p>
                      {edu.grade && (
                        <span className="inline-block text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-md">
                          {edu.grade}
                        </span>
                      )}
                      {edu.description && (
                        <p className="text-xs text-[#9E9E9E] pt-1">{edu.description}</p>
                      )}
                      {edu.highlights && edu.highlights.length > 0 && (
                        <ul className="space-y-1 text-xs text-[#888888] pt-1">
                          {edu.highlights.map((h, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-white" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleOpenEditEdu(edu)}
                        className="px-3 py-1.5 rounded-xl bg-[#1E1E1E] hover:bg-[#303030] text-xs font-semibold text-white border border-[#383838] flex items-center gap-1"
                      >
                        <Edit2 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => {
                          setConfirmModal({
                            isOpen: true,
                            title: `Delete Education "${edu.degree}"?`,
                            message: `Are you sure you want to remove "${edu.degree}" from ${edu.institution}?`,
                            confirmLabel: 'Delete Education',
                            isDestructive: true,
                            onConfirm: () => {
                              deleteEducation(edu.id);
                              showToast('Deleted education item');
                              setConfirmModal(null);
                            },
                          });
                        }}
                        className="p-1.5 rounded-xl bg-[#1E1E1E] hover:bg-rose-950/40 text-[#888888] hover:text-rose-300 border border-[#383838]"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION: WORK EXPERIENCES (FULL CRUD) */}
            <div className="p-6 rounded-[32px] bg-[#1E1E1E] border border-[#2D2D2D] space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#282828]">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-white" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Work Experiences</h3>
                    <p className="text-xs text-[#888888]">Add, edit, or remove roles, companies, bullet achievements, and tags.</p>
                  </div>
                </div>

                <button
                  onClick={handleOpenCreateExp}
                  className="px-4 py-2 rounded-full bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA] flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Experience</span>
                </button>
              </div>

              <div className="space-y-4">
                {(resume.experiences || []).map((exp) => (
                  <div
                    key={exp.id}
                    className="p-5 rounded-2xl bg-[#252525] border border-[#333333] flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-base font-bold text-white">{exp.role}</h4>
                        <span className="text-xs font-mono text-[#888888] bg-[#1E1E1E] px-2.5 py-0.5 rounded-full border border-[#333333]">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#CCCCCC]">{exp.company} {exp.location && `• ${exp.location}`}</p>
                      {exp.description && (
                        <p className="text-xs text-[#9E9E9E] italic">{exp.description}</p>
                      )}
                      <ul className="space-y-1 text-xs text-[#888888] pt-1">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.tags && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {exp.tags.map((t) => (
                            <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-[#1E1E1E] text-[#AAAAAA] border border-[#333333]">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleOpenEditExp(exp)}
                        className="px-3 py-1.5 rounded-xl bg-[#1E1E1E] hover:bg-[#303030] text-xs font-semibold text-white border border-[#383838] flex items-center gap-1"
                      >
                        <Edit2 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => {
                          setConfirmModal({
                            isOpen: true,
                            title: `Delete Experience "${exp.role}"?`,
                            message: `Are you sure you want to delete "${exp.role}" at ${exp.company}?`,
                            confirmLabel: 'Delete Experience',
                            isDestructive: true,
                            onConfirm: () => {
                              deleteExperience(exp.id);
                              showToast('Deleted experience');
                              setConfirmModal(null);
                            },
                          });
                        }}
                        className="p-1.5 rounded-xl bg-[#1E1E1E] hover:bg-rose-950/40 text-[#888888] hover:text-rose-300 border border-[#383838]"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION: CERTIFICATIONS (FULL CRUD) */}
            <div className="p-6 rounded-[32px] bg-[#1E1E1E] border border-[#2D2D2D] space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#282828]">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-white" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Certifications & Credentials</h3>
                    <p className="text-xs text-[#888888]">Professional accreditations, certifications, and verification links.</p>
                  </div>
                </div>

                <button
                  onClick={handleOpenCreateCert}
                  className="px-4 py-2 rounded-full bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA] flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Certification</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(resume.certifications || []).map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-2xl bg-[#252525] border border-[#333333] flex items-start justify-between gap-3"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-white">{cert.title}</h4>
                      <p className="text-[11px] text-[#A0A0A0]">{cert.issuer} • {cert.year}</p>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] text-white underline pt-1 block"
                        >
                          Verify Link
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        setConfirmModal({
                          isOpen: true,
                          title: `Delete Certification?`,
                          message: `Are you sure you want to delete the "${cert.title}" certification?`,
                          confirmLabel: 'Delete Certification',
                          isDestructive: true,
                          onConfirm: () => {
                            deleteCertification(cert.id);
                            showToast('Deleted certification');
                            setConfirmModal(null);
                          },
                        });
                      }}
                      className="p-1 text-[#888888] hover:text-rose-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION: SKILL CARD DELETE UPDATE */}

          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 4: SKILLS & BENTO CARDS                                   */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'skills' && (
          <div className="space-y-8 bg-[#1E1E1E] border border-[#2D2D2D] rounded-[32px] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#282828] pb-4">
              <div>
                <h2 className="text-xl font-bold text-white">Skills Bento Grid Cards</h2>
                <p className="text-xs text-[#888888]">Customize categories, icon glyphs, skill keywords, and focus area badges.</p>
              </div>

              <button
                onClick={handleOpenCreateSkillCard}
                className="px-4 py-2 rounded-full bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA] flex items-center gap-1.5 shadow-md"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Skill Card</span>
              </button>
            </div>

            {/* Header info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Skills Section Title</label>
                <input
                  type="text"
                  value={skills.headerTitle}
                  onChange={(e) => updateSkills({ headerTitle: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Skills Subtitle</label>
                <input
                  type="text"
                  value={skills.headerSubtitle}
                  onChange={(e) => updateSkills({ headerSubtitle: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Skill Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {(skills.cards || []).map((card) => (
                <div
                  key={card.id}
                  className="p-5 rounded-2xl bg-[#252525] border border-[#333333] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-white">{card.title}</h3>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-md">
                        {card.highlight}
                      </span>
                    </div>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">{card.skills}</p>
                    {card.description && (
                      <p className="text-[11px] text-[#777777] italic">{card.description}</p>
                    )}
                  </div>

                  <div className="pt-2 border-t border-[#2E2E2E] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#666666]">Icon: {card.iconName}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenEditSkillCard(card)}
                        className="px-3 py-1 rounded-xl bg-[#1E1E1E] hover:bg-[#303030] text-xs font-semibold text-white border border-[#383838]"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setConfirmModal({
                            isOpen: true,
                            title: `Delete Skill Card?`,
                            message: `Are you sure you want to delete "${card.title}"?`,
                            confirmLabel: 'Delete Card',
                            isDestructive: true,
                            onConfirm: () => {
                              deleteSkillCard(card.id);
                              showToast('Deleted skill card');
                              setConfirmModal(null);
                            },
                          });
                        }}
                        className="p-1 rounded-xl bg-[#1E1E1E] text-[#888888] hover:text-rose-400 border border-[#383838]"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout Banner */}
            <div className="space-y-3 pt-4 border-t border-[#282828]">
              <h3 className="text-sm font-bold text-white">Bottom Callout Banner</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Callout Title</label>
                  <input
                    type="text"
                    value={skills.calloutTitle}
                    onChange={(e) => updateSkills({ calloutTitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Callout Subtitle</label>
                  <input
                    type="text"
                    value={skills.calloutSubtitle}
                    onChange={(e) => updateSkills({ calloutSubtitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 5: CONTACT & LINKS                                        */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'contact' && (
          <div className="space-y-6 bg-[#1E1E1E] border border-[#2D2D2D] rounded-[32px] p-6 sm:p-8">
            <div className="border-b border-[#282828] pb-4">
              <h2 className="text-xl font-bold text-white">Contact Page & External Channels</h2>
              <p className="text-xs text-[#888888]">Customize your email, social channels, location, and intro message.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Header Title</label>
                <input
                  type="text"
                  value={contact.headerTitle}
                  onChange={(e) => updateContact({ headerTitle: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Location Description</label>
                <input
                  type="text"
                  value={contact.locationText}
                  onChange={(e) => updateContact({ locationText: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#CCCCCC]">Header Subtitle / Message</label>
              <textarea
                rows={3}
                value={contact.headerSubtitle}
                onChange={(e) => updateContact({ headerSubtitle: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Email Address</label>
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e) => updateContact({ email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">LinkedIn URL</label>
                <input
                  type="text"
                  value={contact.linkedin}
                  onChange={(e) => updateContact({ linkedin: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">GitHub URL</label>
                <input
                  type="text"
                  value={contact.github}
                  onChange={(e) => updateContact({ github: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Phone / Availability Label</label>
                <input
                  type="text"
                  value={contact.phone || ''}
                  onChange={(e) => updateContact({ phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Status Tag</label>
                <input
                  type="text"
                  value={contact.statusText}
                  onChange={(e) => updateContact({ statusText: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 6: HERO & BIO                                             */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'hero' && (
          <div className="space-y-6 bg-[#1E1E1E] border border-[#2D2D2D] rounded-[32px] p-6 sm:p-8">
            <div className="border-b border-[#282828] pb-4">
              <h2 className="text-xl font-bold text-white">Hero Section & Global Portrait</h2>
              <p className="text-xs text-[#888888]">Customize your typewriter animation phrases, portrait photo, and intro bio.</p>
            </div>

            {/* Profile Photo Studio Section */}
            {renderPortraitStudioSection()}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Name</label>
                <input
                  type="text"
                  value={hero.name}
                  onChange={(e) => updateHero({ name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#CCCCCC]">Headline Subtitle</label>
                <input
                  type="text"
                  value={hero.roleTitle}
                  onChange={(e) => updateHero({ roleTitle: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Typewriter Phrases */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-semibold text-[#CCCCCC]">Typewriter Animated Phrases</label>
              <div className="space-y-2">
                {(hero.typewriterPhrases || []).map((phrase, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={phrase}
                      onChange={(e) => {
                        const updated = [...hero.typewriterPhrases];
                        updated[idx] = e.target.value;
                        updateHero({ typewriterPhrases: updated });
                      }}
                      className="w-full px-4 py-2 rounded-xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        const updated = hero.typewriterPhrases.filter((_, i) => i !== idx);
                        updateHero({ typewriterPhrases: updated });
                      }}
                      className="p-2 text-[#888888] hover:text-rose-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 max-w-md pt-1">
                <input
                  type="text"
                  value={newPhraseInput}
                  onChange={(e) => setNewPhraseInput(e.target.value)}
                  placeholder="e.g. Growth & Monetization Engineer"
                  className="w-full px-4 py-2 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                />
                <button
                  onClick={() => {
                    if (newPhraseInput.trim()) {
                      updateHero({
                        typewriterPhrases: [...(hero.typewriterPhrases || []), newPhraseInput.trim()]
                      });
                      setNewPhraseInput('');
                    }
                  }}
                  className="px-4 py-2 rounded-2xl bg-white text-[#121212] font-bold text-xs shrink-0"
                >
                  Add Phrase
                </button>
              </div>
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-semibold text-[#CCCCCC]">Hero Intro Bio</label>
              <textarea
                rows={4}
                value={hero.bio}
                onChange={(e) => updateHero({ bio: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none resize-none leading-relaxed"
              />
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 7: BACKUP, EXPORT & IMPORT JSON                           */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'json' && (
          <div className="space-y-8 bg-[#1E1E1E] border border-[#2D2D2D] rounded-[32px] p-6 sm:p-8">
            <div className="border-b border-[#282828] pb-4">
              <h2 className="text-xl font-bold text-white">Sync, Backup & JSON Editor</h2>
              <p className="text-xs text-[#888888]">
                Export your full portfolio database to a JSON file or import a custom portfolio configuration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Export Panel */}
              <div className="p-6 rounded-2xl bg-[#252525] border border-[#333333] space-y-4">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">Export Portfolio Backup</h3>
                  <p className="text-xs text-[#9E9E9E]">Download a single JSON file with all your projects, education, resume, and text.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      const json = exportFullPortfolioJSON();
                      const blob = new Blob([json], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `mansi-portfolio-backup-${new Date().toISOString().slice(0,10)}.json`;
                      a.click();
                      showToast('Exported complete portfolio backup!');
                    }}
                    className="px-5 py-2.5 rounded-full bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA] flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Full Backup JSON</span>
                  </button>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(exportFullPortfolioJSON());
                      showToast('Copied JSON to clipboard!');
                    }}
                    className="px-4 py-2.5 rounded-full bg-[#1E1E1E] hover:bg-[#303030] text-xs font-semibold text-white border border-[#383838]"
                  >
                    Copy JSON
                  </button>
                </div>
              </div>

              {/* Import Panel */}
              <div className="p-6 rounded-2xl bg-[#252525] border border-[#333333] space-y-4">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">Import Portfolio Backup</h3>
                  <p className="text-xs text-[#9E9E9E]">Paste your JSON string below or load a backup file.</p>
                </div>

                <textarea
                  rows={4}
                  value={importJsonText}
                  onChange={(e) => setImportJsonText(e.target.value)}
                  placeholder="Paste { hero: {...}, about: {...}, projects: [...] } JSON here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1E1E1E] border border-[#383838] text-xs font-mono text-[#CCCCCC] focus:outline-none focus:border-white"
                />

                {jsonError && (
                  <div className="p-2.5 rounded-xl bg-rose-950/50 border border-rose-600/50 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{jsonError}</span>
                  </div>
                )}

                <button
                  onClick={() => {
                    setJsonError(null);
                    if (!importJsonText.trim()) {
                      setJsonError('Please paste valid JSON text.');
                      return;
                    }
                    const res = importFullPortfolioJSON(importJsonText);
                    if (res.success) {
                      setImportJsonText('');
                      showToast('Successfully imported portfolio data!');
                    } else {
                      setJsonError(res.error || 'Failed to parse JSON.');
                    }
                  }}
                  className="w-full py-2.5 rounded-full bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA]"
                >
                  Import JSON & Apply
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* MODAL: CREATE / EDIT PROJECT                                              */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {(isCreatingProject || editingProject) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1E1E1E] border border-[#333333] rounded-[32px] p-6 sm:p-8 space-y-6 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#2C2C2C]">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {isCreatingProject ? 'Create New Project' : `Edit "${projectForm.name}"`}
                  </h2>
                  <p className="text-xs text-[#888888]">
                    Add screenshots, telemetry metrics, problem/solution statement, and product tags.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCreatingProject(false);
                    setEditingProject(null);
                  }}
                  className="p-2 rounded-full bg-[#2A2A2A] hover:bg-[#383838] text-[#888888] hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Project Name *</label>
                  <input
                    type="text"
                    required
                    value={projectForm.name || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                    placeholder="e.g. Private Vault, File Manager"
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Category</label>
                  <input
                    type="text"
                    value={projectForm.category || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                    placeholder="e.g. Privacy · Consumer Mobile"
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Role</label>
                  <input
                    type="text"
                    value={projectForm.role || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, role: e.target.value })}
                    placeholder="e.g. Product Management"
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Timeline</label>
                  <input
                    type="text"
                    value={projectForm.timeline || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, timeline: e.target.value })}
                    placeholder="2023 — Present"
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">External / Live URL</label>
                  <input
                    type="text"
                    value={projectForm.externalReferenceUrl || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, externalReferenceUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Problem / Solution */}
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Short Problem Summary *</label>
                  <textarea
                    rows={2}
                    required
                    value={projectForm.shortProblem || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, shortProblem: e.target.value })}
                    placeholder="Brief 1-2 sentence core user friction statement..."
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none resize-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Solution / Product Architecture</label>
                  <textarea
                    rows={3}
                    value={projectForm.solution || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, solution: e.target.value })}
                    placeholder="How did the product solve the problem? What were the key design decisions?"
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* SCREENSHOTS MANAGEMENT (UPLOAD & PREVIEW) */}
              <div className="space-y-3 pt-4 border-t border-[#2C2C2C]">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-white uppercase tracking-wider">
                    Project Screenshots & Visual Gallery ({projectForm.screenshots?.length || 0})
                  </label>
                </div>

                {/* Screenshots List */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(projectForm.screenshots || []).map((shot, idx) => (
                    <div
                      key={shot.id || idx}
                      className={`relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#252525] border ${
                        shot.isCover ? 'border-amber-400/80 ring-2 ring-amber-400/30' : 'border-[#383838]'
                      } group`}
                    >
                      <img
                        src={shot.url}
                        alt={shot.title || 'Screenshot'}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-white truncate">{shot.title || 'Screenshot'}</span>
                          <button
                            onClick={() => {
                              const updated = (projectForm.screenshots || []).filter((s) => s.id !== shot.id);
                              setProjectForm({ ...projectForm, screenshots: updated });
                            }}
                            className="p-1 rounded-md bg-rose-900/80 text-white"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => {
                            const updated = (projectForm.screenshots || []).map((s) => ({
                              ...s,
                              isCover: s.id === shot.id
                            }));
                            setProjectForm({ ...projectForm, screenshots: updated, coverImage: shot.url });
                          }}
                          className="w-full py-1 rounded bg-white text-[#121212] text-[10px] font-bold"
                        >
                          {shot.isCover ? '✓ Cover Image' : 'Set as Cover'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Upload & Add Screenshot Form */}
                <div className="p-4 rounded-2xl bg-[#242424] border border-[#333333] space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={newScreenshotTitle}
                      onChange={(e) => setNewScreenshotTitle(e.target.value)}
                      placeholder="Screenshot Title (e.g. Dashboard Overview)"
                      className="px-3 py-2 rounded-xl bg-[#1C1C1C] border border-[#383838] text-xs text-white focus:outline-none"
                    />
                    <input
                      type="text"
                      value={newScreenshotCaption}
                      onChange={(e) => setNewScreenshotCaption(e.target.value)}
                      placeholder="Caption / UX note"
                      className="px-3 py-2 rounded-xl bg-[#1C1C1C] border border-[#383838] text-xs text-white focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <label className="px-4 py-2 rounded-xl bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA] cursor-pointer flex items-center gap-1.5 shadow-md">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Image File</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'project')}
                        className="hidden"
                      />
                    </label>

                    <div className="flex-1 flex gap-2">
                      <input
                        type="text"
                        value={newScreenshotUrl}
                        onChange={(e) => setNewScreenshotUrl(e.target.value)}
                        placeholder="Or paste image URL (https://...)"
                        className="w-full px-3 py-2 rounded-xl bg-[#1C1C1C] border border-[#383838] text-xs text-white focus:outline-none"
                      />
                      <button
                        onClick={handleAddScreenshotUrl}
                        className="px-3 py-2 rounded-xl bg-[#333333] hover:bg-[#444444] text-white text-xs font-semibold shrink-0"
                      >
                        Add URL
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* METRICS & GRAPH VALUES */}
              <div className="space-y-3 pt-4 border-t border-[#2C2C2C]">
                <label className="text-xs font-bold text-white uppercase tracking-wider">
                  Telemetry Metrics & Data Badges
                </label>

                <div className="flex flex-wrap gap-2">
                  {(projectForm.metrics || []).map((m, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-xl bg-[#252525] border border-[#333333] flex items-center gap-3 text-xs text-white"
                    >
                      <div>
                        <span className="font-bold text-emerald-400 block">{m.value}</span>
                        <span className="text-[10px] text-[#888888]">{m.label}</span>
                      </div>
                      <button
                        onClick={() => {
                          const updated = (projectForm.metrics || []).filter((_, i) => i !== idx);
                          setProjectForm({ ...projectForm, metrics: updated });
                        }}
                        className="text-[#888888] hover:text-rose-400"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-center">
                  <input
                    type="text"
                    value={metricValue}
                    onChange={(e) => setMetricValue(e.target.value)}
                    placeholder="Value (e.g. +18%)"
                    className="px-3 py-2 rounded-xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                  <input
                    type="text"
                    value={metricLabel}
                    onChange={(e) => setMetricLabel(e.target.value)}
                    placeholder="Metric Label"
                    className="px-3 py-2 rounded-xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                  <input
                    type="text"
                    value={metricSub}
                    onChange={(e) => setMetricSub(e.target.value)}
                    placeholder="Subtext"
                    className="px-3 py-2 rounded-xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                  <button
                    onClick={handleAddMetricToForm}
                    className="py-2 px-3 rounded-xl bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA]"
                  >
                    Add Metric
                  </button>
                </div>
              </div>

              {/* Modal Save Bar */}
              <div className="flex items-center justify-end gap-3 pt-6 border-t border-[#2C2C2C]">
                <button
                  onClick={() => {
                    setIsCreatingProject(false);
                    setEditingProject(null);
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#2A2A2A] hover:bg-[#383838] text-xs font-semibold text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveProject}
                  className="px-6 py-2.5 rounded-full bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA] flex items-center gap-1.5 shadow-lg"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Project</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL: CREATE / EDIT EDUCATION                                            */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {(isCreatingEdu || editingEdu) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#1E1E1E] border border-[#333333] rounded-[32px] p-6 sm:p-8 space-y-5 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#2C2C2C]">
                <h3 className="text-lg font-bold text-white">
                  {isCreatingEdu ? 'Add Education Entry' : 'Edit Education Entry'}
                </h3>
                <button
                  onClick={() => {
                    setIsCreatingEdu(false);
                    setEditingEdu(null);
                  }}
                  className="p-1.5 text-[#888888] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Degree / Program *</label>
                  <input
                    type="text"
                    required
                    value={eduForm.degree || ''}
                    onChange={(e) => setEduForm({ ...eduForm, degree: e.target.value })}
                    placeholder="Bachelor of Technology (B.Tech) — Computer Science"
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCCCCC]">Institution / University *</label>
                    <input
                      type="text"
                      value={eduForm.institution || ''}
                      onChange={(e) => setEduForm({ ...eduForm, institution: e.target.value })}
                      placeholder="Rajiv Gandhi Proudyogiki Vishwavidyalaya"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCCCCC]">Period</label>
                    <input
                      type="text"
                      value={eduForm.period || ''}
                      onChange={(e) => setEduForm({ ...eduForm, period: e.target.value })}
                      placeholder="2017 — 2021"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Grade / Honors</label>
                  <input
                    type="text"
                    value={eduForm.grade || ''}
                    onChange={(e) => setEduForm({ ...eduForm, grade: e.target.value })}
                    placeholder="First Class with Distinction (8.4 CGPA)"
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Description / Key Focus Areas</label>
                  <textarea
                    rows={3}
                    value={eduForm.description || ''}
                    onChange={(e) => setEduForm({ ...eduForm, description: e.target.value })}
                    placeholder="Specialized in Algorithms, Mobile Architecture, Database Systems..."
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#2C2C2C]">
                <button
                  onClick={() => {
                    setIsCreatingEdu(false);
                    setEditingEdu(null);
                  }}
                  className="px-4 py-2 rounded-full bg-[#2A2A2A] text-xs font-semibold text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdu}
                  className="px-5 py-2 rounded-full bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA]"
                >
                  Save Education
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL: CREATE / EDIT WORK EXPERIENCE                                      */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {(isCreatingExp || editingExp) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#1E1E1E] border border-[#333333] rounded-[32px] p-6 sm:p-8 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#2C2C2C]">
                <h3 className="text-lg font-bold text-white">
                  {isCreatingExp ? 'Add Work Experience' : 'Edit Work Experience'}
                </h3>
                <button
                  onClick={() => {
                    setIsCreatingExp(false);
                    setEditingExp(null);
                  }}
                  className="p-1.5 text-[#888888] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCCCCC]">Role Title *</label>
                    <input
                      type="text"
                      required
                      value={expForm.role || ''}
                      onChange={(e) => setExpForm({ ...expForm, role: e.target.value })}
                      placeholder="Product Manager — Mobile Apps"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none focus:border-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCCCCC]">Company *</label>
                    <input
                      type="text"
                      required
                      value={expForm.company || ''}
                      onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                      placeholder="Company / Ecosystem"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCCCCC]">Period</label>
                    <input
                      type="text"
                      value={expForm.period || ''}
                      onChange={(e) => setExpForm({ ...expForm, period: e.target.value })}
                      placeholder="2023 — Present"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCCCCC]">Location</label>
                    <input
                      type="text"
                      value={expForm.location || ''}
                      onChange={(e) => setExpForm({ ...expForm, location: e.target.value })}
                      placeholder="Dehradun, India"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Short Summary</label>
                  <input
                    type="text"
                    value={expForm.description || ''}
                    onChange={(e) => setExpForm({ ...expForm, description: e.target.value })}
                    placeholder="Leading product strategy and discovery..."
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>

                {/* Bullets */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Achievement Bullet Points</label>
                  <div className="space-y-2">
                    {(expForm.bullets || []).map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={b}
                          onChange={(e) => {
                            const updated = [...(expForm.bullets || [])];
                            updated[idx] = e.target.value;
                            setExpForm({ ...expForm, bullets: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                        />
                        <button
                          onClick={() => {
                            const updated = (expForm.bullets || []).filter((_, i) => i !== idx);
                            setExpForm({ ...expForm, bullets: updated });
                          }}
                          className="p-1.5 text-[#888888] hover:text-rose-400"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-1">
                    <input
                      type="text"
                      value={expBulletInput}
                      onChange={(e) => setExpBulletInput(e.target.value)}
                      placeholder="Add an achievement bullet point..."
                      className="w-full px-3 py-2 rounded-xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        if (expBulletInput.trim()) {
                          setExpForm({
                            ...expForm,
                            bullets: [...(expForm.bullets || []), expBulletInput.trim()]
                          });
                          setExpBulletInput('');
                        }
                      }}
                      className="px-4 py-2 rounded-xl bg-white text-[#121212] font-bold text-xs shrink-0"
                    >
                      Add Bullet
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#2C2C2C]">
                <button
                  onClick={() => {
                    setIsCreatingExp(false);
                    setEditingExp(null);
                  }}
                  className="px-4 py-2 rounded-full bg-[#2A2A2A] text-xs font-semibold text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveExp}
                  className="px-5 py-2 rounded-full bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA]"
                >
                  Save Experience
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL: CREATE / EDIT SKILL BENTO CARD                                     */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {(isCreatingSkillCard || editingSkillCard) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-[#1E1E1E] border border-[#333333] rounded-[32px] p-6 sm:p-8 space-y-5 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#2C2C2C]">
                <h3 className="text-lg font-bold text-white">
                  {isCreatingSkillCard ? 'Add Skill Bento Card' : 'Edit Skill Bento Card'}
                </h3>
                <button
                  onClick={() => {
                    setIsCreatingSkillCard(false);
                    setEditingSkillCard(null);
                  }}
                  className="p-1.5 text-[#888888] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Card Title *</label>
                  <input
                    type="text"
                    required
                    value={skillCardForm.title || ''}
                    onChange={(e) => setSkillCardForm({ ...skillCardForm, title: e.target.value })}
                    placeholder="Product Strategy & Discovery"
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCCCCC]">Icon</label>
                    <select
                      value={skillCardForm.iconName || 'Palette'}
                      onChange={(e) => setSkillCardForm({ ...skillCardForm, iconName: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                    >
                      <option value="Palette">Palette (Strategy / Design)</option>
                      <option value="Diamond">Diamond (Monetization / Growth)</option>
                      <option value="LineChart">LineChart (UX / Analytics)</option>
                      <option value="Megaphone">Megaphone (Marketing / Telemetry)</option>
                      <option value="Code2">Code2 (Technical / Android)</option>
                      <option value="Video">Video (Execution / Media)</option>
                      <option value="Smartphone">Smartphone (Mobile)</option>
                      <option value="ShieldCheck">ShieldCheck (Security / Trust)</option>
                      <option value="TrendingUp">TrendingUp (Growth)</option>
                      <option value="Layers">Layers (Architecture)</option>
                      <option value="Sparkles">Sparkles (AI / Innovation)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CCCCCC]">Focus Area Highlight Badge</label>
                    <input
                      type="text"
                      value={skillCardForm.highlight || ''}
                      onChange={(e) => setSkillCardForm({ ...skillCardForm, highlight: e.target.value })}
                      placeholder="Strategic Thinking"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Skills List / Keywords *</label>
                  <textarea
                    rows={3}
                    required
                    value={skillCardForm.skills || ''}
                    onChange={(e) => setSkillCardForm({ ...skillCardForm, skills: e.target.value })}
                    placeholder="User Research, PRD Authoring, Product Roadmaps, Problem Discovery, Hypothesis Testing"
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none resize-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#CCCCCC]">Description (Optional)</label>
                  <input
                    type="text"
                    value={skillCardForm.description || ''}
                    onChange={(e) => setSkillCardForm({ ...skillCardForm, description: e.target.value })}
                    placeholder="Translating ambiguous user problems into structured product roadmaps..."
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#252525] border border-[#333333] text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#2C2C2C]">
                <button
                  onClick={() => {
                    setIsCreatingSkillCard(false);
                    setEditingSkillCard(null);
                  }}
                  className="px-4 py-2 rounded-full bg-[#2A2A2A] text-xs font-semibold text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveSkillCard}
                  className="px-5 py-2 rounded-full bg-white text-[#121212] font-bold text-xs hover:bg-[#EAEAEA]"
                >
                  Save Skill Card
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL: ARRANGE & REORDER PROJECTS                                         */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isArrangeProjectsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#1E1E1E] border border-[#333333] rounded-[32px] p-6 sm:p-8 space-y-5 shadow-2xl max-h-[85vh] flex flex-col"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#2C2C2C] shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-300">
                    <ListOrdered className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Arrange Project Sequence</h3>
                    <p className="text-xs text-[#888888]">Change the order in which projects appear across your portfolio.</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsArrangeProjectsModalOpen(false)}
                  className="p-1.5 text-[#888888] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Projects Reorder List */}
              <div className="space-y-2.5 overflow-y-auto pr-1 flex-1 scrollbar-thin">
                {projects.map((proj, idx) => (
                  <div
                    key={proj.id}
                    className="p-3.5 rounded-2xl bg-[#252525] border border-[#333333] flex items-center justify-between gap-3 hover:border-[#444444] transition-all"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-7 h-7 rounded-lg bg-purple-950/70 border border-purple-500/30 text-purple-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        #{idx + 1}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-white truncate">{proj.name}</h4>
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#1C1C1C] border border-[#333333] text-[#AAAAAA] shrink-0">
                            {proj.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#888888] truncate">{proj.shortProblem}</p>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-1 shrink-0 bg-[#1A1A1A] p-1 rounded-xl border border-[#333333]">
                      <button
                        onClick={() => moveProject(idx, 'up')}
                        disabled={idx === 0}
                        className="p-1.5 rounded-lg hover:bg-[#2C2C2C] text-[#AAAAAA] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                        title="Move up"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => moveProject(idx, 'down')}
                        disabled={idx === projects.length - 1}
                        className="p-1.5 rounded-lg hover:bg-[#2C2C2C] text-[#AAAAAA] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                        title="Move down"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => moveProjectToTop(proj.id)}
                        disabled={idx === 0}
                        className="p-1.5 rounded-lg hover:bg-[#2C2C2C] text-purple-400 hover:text-purple-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                        title="Move to #1 position"
                      >
                        <MoveUp className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#2C2C2C] flex items-center justify-end shrink-0">
                <button
                  onClick={() => setIsArrangeProjectsModalOpen(false)}
                  className="px-6 py-2 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL: GENERIC IN-APP CONFIRMATION MODAL                                  */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {confirmModal?.isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-md bg-[#1C1C1C] border border-[#333333] rounded-[28px] p-6 space-y-4 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                    confirmModal.isDestructive
                      ? 'bg-rose-950/60 border border-rose-500/40 text-rose-400'
                      : 'bg-purple-950/60 border border-purple-500/40 text-purple-400'
                  }`}
                >
                  {confirmModal.isDestructive ? (
                    <Trash2 className="w-5 h-5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{confirmModal.title}</h3>
                </div>
              </div>

              <p className="text-xs text-[#AAAAAA] leading-relaxed">
                {confirmModal.message}
              </p>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[#2A2A2A]">
                <button
                  onClick={() => setConfirmModal(null)}
                  className="px-4 py-2 rounded-full bg-[#262626] hover:bg-[#333333] text-xs font-semibold text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmModal.onConfirm}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all shadow-md ${
                    confirmModal.isDestructive
                      ? 'bg-rose-600 hover:bg-rose-500 text-white'
                      : 'bg-white text-black hover:bg-zinc-200'
                  }`}
                >
                  {confirmModal.confirmLabel || 'Confirm'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
