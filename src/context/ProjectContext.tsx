import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { 
  Project, 
  ProjectScreenshot, 
  HeroSectionData, 
  AboutSectionData, 
  ResumeSectionData, 
  SkillsSectionData, 
  ContactSectionData, 
  FullPortfolioData,
  EducationItem,
  ExperienceItem,
  CertificationItem,
  SkillCardData,
  AboutStat,
  ProjectMetric,
  PortfolioSectionItem
} from '../types';
import { 
  PROJECTS as DEFAULT_PROJECTS,
  DEFAULT_HERO_DATA,
  DEFAULT_ABOUT_DATA,
  DEFAULT_RESUME_DATA,
  DEFAULT_SKILLS_DATA,
  DEFAULT_CONTACT_DATA,
  DEFAULT_AVATAR,
  DEFAULT_SECTIONS_DATA
} from '../data/portfolioData';

interface PortfolioContextType {
  // Hero / Profile
  hero: HeroSectionData;
  updateHero: (updated: Partial<HeroSectionData>) => void;

  // About Section
  about: AboutSectionData;
  updateAbout: (updated: Partial<AboutSectionData>) => void;
  addAboutStat: (stat: AboutStat) => void;
  updateAboutStat: (id: string, updated: Partial<AboutStat>) => void;
  deleteAboutStat: (id: string) => void;

  // Resume Section (Experience + Education + Certs)
  resume: ResumeSectionData;
  updateResume: (updated: Partial<ResumeSectionData>) => void;
  addExperience: (exp: ExperienceItem) => void;
  updateExperience: (id: string, updated: Partial<ExperienceItem>) => void;
  deleteExperience: (id: string) => void;
  addEducation: (edu: EducationItem) => void;
  updateEducation: (id: string, updated: Partial<EducationItem>) => void;
  deleteEducation: (id: string) => void;
  addCertification: (cert: CertificationItem) => void;
  updateCertification: (id: string, updated: Partial<CertificationItem>) => void;
  deleteCertification: (id: string) => void;

  // Skills Section
  skills: SkillsSectionData;
  updateSkills: (updated: Partial<SkillsSectionData>) => void;
  addSkillCard: (card: SkillCardData) => void;
  updateSkillCard: (id: string, updated: Partial<SkillCardData>) => void;
  deleteSkillCard: (id: string) => void;

  // Contact Section
  contact: ContactSectionData;
  updateContact: (updated: Partial<ContactSectionData>) => void;

  // Projects Section
  projects: Project[];
  getProjectById: (id: string) => Project | undefined;
  addProject: (project: Project) => void;
  updateProject: (id: string, updated: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  reorderProjects: (newProjects: Project[]) => void;
  moveProject: (index: number, direction: 'up' | 'down') => void;
  moveProjectToTop: (id: string) => void;
  restoreDefaultProjects: () => void;
  addScreenshot: (projectId: string, screenshot: ProjectScreenshot) => void;
  removeScreenshot: (projectId: string, screenshotId: string) => void;
  updateScreenshot: (projectId: string, screenshotId: string, updated: Partial<ProjectScreenshot>) => void;
  addProjectMetric: (projectId: string, metric: ProjectMetric) => void;
  removeProjectMetric: (projectId: string, metricIndex: number) => void;

  // Portfolio Layout & Section Arrangement
  sections: PortfolioSectionItem[];
  updateSections: (newSections: PortfolioSectionItem[]) => void;
  moveSection: (index: number, direction: 'up' | 'down') => void;
  moveSectionToTop: (id: string) => void;
  toggleSectionVisibility: (id: string) => void;
  resetSectionOrder: () => void;

  // Global Operations
  globalAvatar: string;
  updateGlobalAvatar: (url: string) => void;
  resetAvatar: () => void;
  resetToDefaults: () => void;
  exportFullPortfolioJSON: () => string;
  importFullPortfolioJSON: (jsonStr: string) => { success: boolean; error?: string };
  exportProjectsJSON: () => string;
  importProjectsJSON: (jsonStr: string) => { success: boolean; error?: string };
  isServerSynced: boolean;
  lastSavedTime: string | null;
  saveAllToServer: () => Promise<boolean>;
}

const STORAGE_KEYS = {
  HERO: 'mansi_portfolio_hero_v5',
  ABOUT: 'mansi_portfolio_about_v5',
  RESUME: 'mansi_portfolio_resume_v5',
  SKILLS: 'mansi_portfolio_skills_v5',
  CONTACT: 'mansi_portfolio_contact_v5',
  PROJECTS: 'mansi_portfolio_projects_v5',
  DELETED_PROJECTS: 'mansi_portfolio_deleted_projects_v5',
  SECTIONS: 'mansi_portfolio_sections_v5',
  AVATAR: 'mansi_profile_avatar'
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isServerSynced, setIsServerSynced] = useState<boolean>(false);
  const [lastSavedTime, setLastSavedTime] = useState<string | null>(null);
  const isInitialServerLoadDone = useRef<boolean>(false);

  // Global Avatar
  const [globalAvatar, setGlobalAvatar] = useState<string>(() => {
    try {
      const direct = localStorage.getItem(STORAGE_KEYS.AVATAR);
      if (direct && direct.trim()) return direct;

      const heroSaved = localStorage.getItem(STORAGE_KEYS.HERO);
      if (heroSaved) {
        const parsed = JSON.parse(heroSaved);
        if (parsed?.avatarUrl && parsed.avatarUrl.trim()) return parsed.avatarUrl;
      }

      const aboutSaved = localStorage.getItem(STORAGE_KEYS.ABOUT);
      if (aboutSaved) {
        const parsed = JSON.parse(aboutSaved);
        if (parsed?.avatarUrl && parsed.avatarUrl.trim()) return parsed.avatarUrl;
      }
    } catch (e) {
      console.error('Error loading avatar state', e);
    }
    return DEFAULT_AVATAR;
  });

  // Hero Section
  const [hero, setHero] = useState<HeroSectionData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.HERO);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading hero state', e);
    }
    return DEFAULT_HERO_DATA;
  });

  // About Section
  const [about, setAbout] = useState<AboutSectionData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ABOUT);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading about state', e);
    }
    return DEFAULT_ABOUT_DATA;
  });

  // Resume Section
  const [resume, setResume] = useState<ResumeSectionData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RESUME);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading resume state', e);
    }
    return DEFAULT_RESUME_DATA;
  });

  // Skills Section
  const [skills, setSkills] = useState<SkillsSectionData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SKILLS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading skills state', e);
    }
    return DEFAULT_SKILLS_DATA;
  });

  // Contact Section
  const [contact, setContact] = useState<ContactSectionData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CONTACT);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading contact state', e);
    }
    return DEFAULT_CONTACT_DATA;
  });

  // Portfolio Section Arrangement & Order
  const [sections, setSections] = useState<PortfolioSectionItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SECTIONS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Reconcile with default sections in case new sections were introduced
          const existingIds = new Set(parsed.map((s: PortfolioSectionItem) => s.id));
          const merged = [...parsed];
          DEFAULT_SECTIONS_DATA.forEach((ds) => {
            if (!existingIds.has(ds.id)) {
              merged.push(ds);
            }
          });
          return merged;
        }
      }
    } catch (e) {
      console.error('Error loading sections state', e);
    }
    return DEFAULT_SECTIONS_DATA;
  });

  // Projects Section with persistent deletedProjectIds tracking so deleted projects NEVER get revived
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      const deletedIdsStr = localStorage.getItem(STORAGE_KEYS.DELETED_PROJECTS);
      const deletedIds: string[] = deletedIdsStr ? JSON.parse(deletedIdsStr) : [];

      if (saved) {
        let parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Filter out explicitly deleted projects
          const validProjects = parsed.filter((p: Project) => !deletedIds.includes(p.id));
          
          // Reconcile: If there are new default projects that the user has NEVER seen and NOT deleted, append them
          const userProjectIds = new Set(validProjects.map((p) => p.id));
          DEFAULT_PROJECTS.forEach((defaultProj) => {
            if (!deletedIds.includes(defaultProj.id) && !userProjectIds.has(defaultProj.id)) {
              validProjects.push(defaultProj);
            }
          });

          return validProjects;
        }
      }
    } catch (e) {
      console.error('Error loading projects state', e);
    }
    return DEFAULT_PROJECTS;
  });

  // -------------------------------------------------------------
  // FETCH SERVER STATE ON INITIAL MOUNT (Ensures shared links & other devices get live data)
  // -------------------------------------------------------------
  useEffect(() => {
    let isMounted = true;
    async function loadServerPortfolio() {
      try {
        const res = await fetch('/api/portfolio');
        if (!res.ok) return;
        const json = await res.json();
        if (json.success && json.data && isMounted) {
          const s = json.data;
          if (s.globalAvatar) {
            setGlobalAvatar(s.globalAvatar);
            try { localStorage.setItem(STORAGE_KEYS.AVATAR, s.globalAvatar); } catch {}
          }
          if (s.hero) {
            setHero(s.hero);
            try { localStorage.setItem(STORAGE_KEYS.HERO, JSON.stringify(s.hero)); } catch {}
          }
          if (s.about) {
            setAbout(s.about);
            try { localStorage.setItem(STORAGE_KEYS.ABOUT, JSON.stringify(s.about)); } catch {}
          }
          if (s.resume) {
            setResume(s.resume);
            try { localStorage.setItem(STORAGE_KEYS.RESUME, JSON.stringify(s.resume)); } catch {}
          }
          if (s.skills) {
            setSkills(s.skills);
            try { localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(s.skills)); } catch {}
          }
          if (s.contact) {
            setContact(s.contact);
            try { localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(s.contact)); } catch {}
          }
          if (s.projects && Array.isArray(s.projects) && s.projects.length > 0) {
            setProjects(s.projects);
            try { localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(s.projects)); } catch {}
          }
          if (s.sections && Array.isArray(s.sections) && s.sections.length > 0) {
            setSections(s.sections);
            try { localStorage.setItem(STORAGE_KEYS.SECTIONS, JSON.stringify(s.sections)); } catch {}
          }
          setIsServerSynced(true);
          setLastSavedTime(new Date().toLocaleTimeString());
        }
      } catch (err) {
        console.warn('Backend server portfolio check:', err);
      } finally {
        isInitialServerLoadDone.current = true;
      }
    }

    loadServerPortfolio();
    return () => { isMounted = false; };
  }, []);

  // -------------------------------------------------------------
  // SERVER AUTO-SYNC DEBOUNCER
  // -------------------------------------------------------------
  const syncTimeoutRef = useRef<any>(null);

  const triggerServerSync = useCallback(() => {
    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
    }
    syncTimeoutRef.current = setTimeout(async () => {
      try {
        const payload = {
          globalAvatar,
          hero,
          about,
          resume,
          skills,
          contact,
          projects,
          sections
        };
        const res = await fetch('/api/portfolio', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          setIsServerSynced(true);
          setLastSavedTime(new Date().toLocaleTimeString());
        }
      } catch (e) {
        console.warn('Error syncing portfolio to server:', e);
      }
    }, 500);
  }, [globalAvatar, hero, about, resume, skills, contact, projects, sections]);

  const saveAllToServer = async (): Promise<boolean> => {
    try {
      const payload = {
        globalAvatar,
        hero,
        about,
        resume,
        skills,
        contact,
        projects,
        sections
      };
      const res = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setIsServerSynced(true);
        setLastSavedTime(new Date().toLocaleTimeString());
        return true;
      }
    } catch (e) {
      console.error('Manual save failed:', e);
    }
    return false;
  };

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.AVATAR, globalAvatar);
    } catch (e) {
      console.error(e);
    }
    if (isInitialServerLoadDone.current) {
      triggerServerSync();
    }
  }, [globalAvatar, triggerServerSync]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.HERO, JSON.stringify(hero));
    } catch (e) {
      console.error(e);
    }
    if (isInitialServerLoadDone.current) triggerServerSync();
  }, [hero, triggerServerSync]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ABOUT, JSON.stringify(about));
    } catch (e) {
      console.error(e);
    }
    if (isInitialServerLoadDone.current) triggerServerSync();
  }, [about, triggerServerSync]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.RESUME, JSON.stringify(resume));
    } catch (e) {
      console.error(e);
    }
    if (isInitialServerLoadDone.current) triggerServerSync();
  }, [resume, triggerServerSync]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills));
    } catch (e) {
      console.error(e);
    }
    if (isInitialServerLoadDone.current) triggerServerSync();
  }, [skills, triggerServerSync]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(contact));
    } catch (e) {
      console.error(e);
    }
    if (isInitialServerLoadDone.current) triggerServerSync();
  }, [contact, triggerServerSync]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
    if (isInitialServerLoadDone.current) triggerServerSync();
  }, [projects, triggerServerSync]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SECTIONS, JSON.stringify(sections));
    } catch (e) {
      console.error(e);
    }
    if (isInitialServerLoadDone.current) triggerServerSync();
  }, [sections, triggerServerSync]);

  // Global avatar update with server saving & source baking
  const updateGlobalAvatar = async (urlOrDataUrl: string) => {
    const cleanUrl = (urlOrDataUrl || '').trim();
    if (!cleanUrl) return;

    setGlobalAvatar(cleanUrl);
    setHero((prev) => ({ ...prev, avatarUrl: cleanUrl }));
    setAbout((prev) => ({ ...prev, avatarUrl: cleanUrl }));
    try {
      localStorage.setItem(STORAGE_KEYS.AVATAR, cleanUrl);
    } catch (e) {
      console.error('Failed to save avatar to localStorage:', e);
    }

    try {
      const res = await fetch('/api/portfolio/avatar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ avatarData: cleanUrl })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.url && json.url !== cleanUrl) {
          setGlobalAvatar(json.url);
          setHero((prev) => ({ ...prev, avatarUrl: json.url }));
          setAbout((prev) => ({ ...prev, avatarUrl: json.url }));
          try { localStorage.setItem(STORAGE_KEYS.AVATAR, json.url); } catch {}
        }
        setIsServerSynced(true);
        setLastSavedTime(new Date().toLocaleTimeString());
      }
    } catch (err) {
      console.warn('Avatar server sync error:', err);
    }
  };

  const resetAvatar = () => {
    updateGlobalAvatar(DEFAULT_AVATAR);
  };

  // Hero Actions
  const updateHero = (updated: Partial<HeroSectionData>) => {
    if (updated.avatarUrl && updated.avatarUrl.trim() && updated.avatarUrl !== globalAvatar) {
      updateGlobalAvatar(updated.avatarUrl.trim());
    }
    setHero((prev) => ({ ...prev, ...updated }));
  };

  // About Actions
  const updateAbout = (updated: Partial<AboutSectionData>) => {
    if (updated.avatarUrl && updated.avatarUrl.trim() && updated.avatarUrl !== globalAvatar) {
      updateGlobalAvatar(updated.avatarUrl.trim());
    }
    setAbout((prev) => ({ ...prev, ...updated }));
  };

  const addAboutStat = (stat: AboutStat) => {
    setAbout((prev) => ({ ...prev, stats: [...prev.stats, stat] }));
  };

  const updateAboutStat = (id: string, updated: Partial<AboutStat>) => {
    setAbout((prev) => ({
      ...prev,
      stats: prev.stats.map((s) => (s.id === id ? { ...s, ...updated } : s))
    }));
  };

  const deleteAboutStat = (id: string) => {
    setAbout((prev) => ({
      ...prev,
      stats: prev.stats.filter((s) => s.id !== id)
    }));
  };

  // Resume Actions (Experience, Education, Certs)
  const updateResume = (updated: Partial<ResumeSectionData>) => {
    setResume((prev) => ({ ...prev, ...updated }));
  };

  const addExperience = (exp: ExperienceItem) => {
    setResume((prev) => ({ ...prev, experiences: [exp, ...prev.experiences] }));
  };

  const updateExperience = (id: string, updated: Partial<ExperienceItem>) => {
    setResume((prev) => ({
      ...prev,
      experiences: prev.experiences.map((e) => (e.id === id ? { ...e, ...updated } : e))
    }));
  };

  const deleteExperience = (id: string) => {
    setResume((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((e) => e.id !== id)
    }));
  };

  const addEducation = (edu: EducationItem) => {
    setResume((prev) => ({ ...prev, education: [...prev.education, edu] }));
  };

  const updateEducation = (id: string, updated: Partial<EducationItem>) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.map((ed) => (ed.id === id ? { ...ed, ...updated } : ed))
    }));
  };

  const deleteEducation = (id: string) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.filter((ed) => ed.id !== id)
    }));
  };

  const addCertification = (cert: CertificationItem) => {
    setResume((prev) => ({ ...prev, certifications: [...prev.certifications, cert] }));
  };

  const updateCertification = (id: string, updated: Partial<CertificationItem>) => {
    setResume((prev) => ({
      ...prev,
      certifications: prev.certifications.map((c) => (c.id === id ? { ...c, ...updated } : c))
    }));
  };

  const deleteCertification = (id: string) => {
    setResume((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((c) => c.id !== id)
    }));
  };

  // Skills Actions
  const updateSkills = (updated: Partial<SkillsSectionData>) => {
    setSkills((prev) => ({ ...prev, ...updated }));
  };

  const addSkillCard = (card: SkillCardData) => {
    setSkills((prev) => ({ ...prev, cards: [...prev.cards, card] }));
  };

  const updateSkillCard = (id: string, updated: Partial<SkillCardData>) => {
    setSkills((prev) => ({
      ...prev,
      cards: prev.cards.map((c) => (c.id === id ? { ...c, ...updated } : c))
    }));
  };

  const deleteSkillCard = (id: string) => {
    setSkills((prev) => ({
      ...prev,
      cards: prev.cards.filter((c) => c.id !== id)
    }));
  };

  // Contact Actions
  const updateContact = (updated: Partial<ContactSectionData>) => {
    setContact((prev) => ({ ...prev, ...updated }));
  };

  // Project Actions
  const getProjectById = (id: string) => {
    return projects.find((p) => p.id === id);
  };

  const addProject = (project: Project) => {
    setProjects((prev) => [project, ...prev]);
  };

  const updateProject = (id: string, updated: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
    );
  };

  // Robust deleteProject: updates state, writes to storage, and tracks deletedProjectIds
  const deleteProject = (id: string) => {
    setProjects((prev) => {
      const next = prev.filter((p) => p.id !== id);
      try {
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(next));
        const deletedStr = localStorage.getItem(STORAGE_KEYS.DELETED_PROJECTS);
        const deleted: string[] = deletedStr ? JSON.parse(deletedStr) : [];
        if (!deleted.includes(id)) {
          localStorage.setItem(STORAGE_KEYS.DELETED_PROJECTS, JSON.stringify([...deleted, id]));
        }
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const reorderProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
  };

  const moveProject = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === projects.length - 1) return;
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const updated = [...projects];
    const item = updated.splice(index, 1)[0];
    updated.splice(targetIndex, 0, item);
    setProjects(updated);
  };

  const moveProjectToTop = (id: string) => {
    const index = projects.findIndex((p) => p.id === id);
    if (index <= 0) return;
    const updated = [...projects];
    const item = updated.splice(index, 1)[0];
    updated.unshift(item);
    setProjects(updated);
  };

  const restoreDefaultProjects = () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.DELETED_PROJECTS);
    } catch (e) {
      console.error(e);
    }
    setProjects(DEFAULT_PROJECTS);
  };

  const addScreenshot = (projectId: string, screenshot: ProjectScreenshot) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== projectId) return p;
        const currentScreenshots = p.screenshots || [];
        return {
          ...p,
          screenshots: [...currentScreenshots, screenshot],
          coverImage: p.coverImage || (screenshot.isCover ? screenshot.url : currentScreenshots.length === 0 ? screenshot.url : p.coverImage),
        };
      })
    );
  };

  const removeScreenshot = (projectId: string, screenshotId: string) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== projectId) return p;
        const updatedScreenshots = (p.screenshots || []).filter((s) => s.id !== screenshotId);
        return {
          ...p,
          screenshots: updatedScreenshots,
          coverImage: p.coverImage === (p.screenshots?.find(s => s.id === screenshotId)?.url)
            ? updatedScreenshots[0]?.url || undefined
            : p.coverImage,
        };
      })
    );
  };

  const updateScreenshot = (projectId: string, screenshotId: string, updated: Partial<ProjectScreenshot>) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== projectId) return p;
        const updatedScreenshots = (p.screenshots || []).map((s) => {
          if (s.id !== screenshotId) {
            if (updated.isCover) return { ...s, isCover: false };
            return s;
          }
          return { ...s, ...updated };
        });

        return {
          ...p,
          screenshots: updatedScreenshots,
          coverImage: updated.isCover
            ? updatedScreenshots.find(s => s.id === screenshotId)?.url || p.coverImage
            : p.coverImage,
        };
      })
    );
  };

  const addProjectMetric = (projectId: string, metric: ProjectMetric) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== projectId) return p;
        return {
          ...p,
          metrics: [...(p.metrics || []), metric],
        };
      })
    );
  };

  const removeProjectMetric = (projectId: string, metricIndex: number) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== projectId) return p;
        const current = [...(p.metrics || [])];
        current.splice(metricIndex, 1);
        return {
          ...p,
          metrics: current,
        };
      })
    );
  };

  // Section Layout & Reordering Operations
  const updateSections = (newSections: PortfolioSectionItem[]) => {
    setSections(newSections);
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === sections.length - 1) return;
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const updated = [...sections];
    const item = updated.splice(index, 1)[0];
    updated.splice(targetIndex, 0, item);
    setSections(updated);
  };

  const moveSectionToTop = (id: string) => {
    const index = sections.findIndex((s) => s.id === id);
    if (index <= 0) return;
    const updated = [...sections];
    const item = updated.splice(index, 1)[0];
    updated.unshift(item);
    setSections(updated);
  };

  const toggleSectionVisibility = (id: string) => {
    setSections((prev) =>
      prev.map((s) => (s.id === id ? { ...s, visible: !s.visible } : s))
    );
  };

  const resetSectionOrder = () => {
    setSections(DEFAULT_SECTIONS_DATA);
  };

  // Reset to Defaults
  const resetToDefaults = () => {
    setGlobalAvatar(DEFAULT_AVATAR);
    setHero(DEFAULT_HERO_DATA);
    setAbout(DEFAULT_ABOUT_DATA);
    setResume(DEFAULT_RESUME_DATA);
    setSkills(DEFAULT_SKILLS_DATA);
    setContact(DEFAULT_CONTACT_DATA);
    setProjects(DEFAULT_PROJECTS);
    setSections(DEFAULT_SECTIONS_DATA);
    try {
      Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
    } catch (e) {
      console.error(e);
    }
  };

  // Export JSON
  const exportFullPortfolioJSON = () => {
    const fullData: FullPortfolioData = {
      hero,
      about,
      resume,
      skills,
      contact,
      projects,
      sections,
    };
    return JSON.stringify(fullData, null, 2);
  };

  const importFullPortfolioJSON = (jsonStr: string) => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.hero) setHero(parsed.hero);
      if (parsed.about) setAbout(parsed.about);
      if (parsed.resume) setResume(parsed.resume);
      if (parsed.skills) setSkills(parsed.skills);
      if (parsed.contact) setContact(parsed.contact);
      if (Array.isArray(parsed.projects)) setProjects(parsed.projects);
      if (Array.isArray(parsed.sections)) setSections(parsed.sections);
      if (parsed.about?.avatarUrl || parsed.hero?.avatarUrl) {
        setGlobalAvatar(parsed.about?.avatarUrl || parsed.hero?.avatarUrl);
      }
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'Invalid portfolio JSON format.' };
    }
  };

  const exportProjectsJSON = () => {
    return JSON.stringify(projects, null, 2);
  };

  const importProjectsJSON = (jsonStr: string) => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (!Array.isArray(parsed)) {
        return { success: false, error: 'JSON must be an array of projects.' };
      }
      setProjects(parsed);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'Invalid JSON format.' };
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
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
        getProjectById,
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
        exportProjectsJSON,
        importProjectsJSON,
        isServerSynced,
        lastSavedTime,
        saveAllToServer,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};

export const usePortfolio = useProjects;
