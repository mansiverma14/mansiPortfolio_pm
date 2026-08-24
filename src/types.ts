export type PageRoute = 
  | 'home'
  | 'about'
  | 'resume'
  | 'work'
  | 'skills'
  | 'contact'
  | 'private-vault'
  | 'monetization'
  | 'product'
  | 'review-pilot'
  | 'hd-video-downloader'
  | 'mp3-converter'
  | 'lite-video-player'
  | 'rapido-commuter-pass'
  | 'swiggy-instamart'
  | 'instagram-feed'
  | 'fitlife-pro'
  | 'zero-to-production'
  | 'ai-implementations'
  | 'vpn-transformation'
  | 'vpn-analytics'
  | 'admin';

export interface ProjectScreenshot {
  id: string;
  url: string; // Base64 data URL or external URL
  title?: string;
  caption?: string;
  isCover?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
  subtitle?: string;
  isHypothesis?: boolean;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  role: string;
  timeline?: string;
  shortProblem: string;
  fullProblem?: string;
  solution?: string;
  productAreas: string[];
  metrics?: ProjectMetric[];
  featured?: boolean;
  isFeatured?: boolean;
  deepDiveRoute?: PageRoute;
  mockupType?: 'vault' | 'storage' | 'media' | 'vpn' | 'audio' | 'fitness';
  tags: string[];
  externalReferenceUrl?: string;
  screenshots?: ProjectScreenshot[];
  coverImage?: string;
}

// Education Item Model
export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  description?: string;
  highlights?: string[];
}

// Experience Item Model
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description?: string;
  bullets: string[];
  tags: string[];
}

// Certification Item Model
export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

// About Stat Card Model
export interface AboutStat {
  id: string;
  value: string;
  label: string;
  subtext?: string;
}

// About Section Model
export interface AboutSectionData {
  badgeText: string;
  headline: string;
  narrativeParagraphs: string[];
  name: string;
  roleTitle: string;
  email: string;
  phoneOrStatus: string;
  location: string;
  avatarUrl?: string;
  stats: AboutStat[];
  competencies: string[];
}

// Resume Section Model
export interface ResumeSectionData {
  headerTitle: string;
  headerSubtitle: string;
  summaryTitle: string;
  summaryText: string;
  contactLocation: string;
  contactEmail: string;
  contactPhone?: string;
  contactLinkedin: string;
  contactGithub: string;
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

// Skill Card Model
export interface SkillCardData {
  id: string;
  title: string;
  iconName: string; // e.g. 'Palette', 'Diamond', 'LineChart', 'Megaphone', 'Code2', 'Video', 'Smartphone', 'Layers', 'TrendingUp', 'Cpu', 'Users'
  skills: string;
  highlight: string;
  description?: string;
}

// Skills Section Model
export interface SkillsSectionData {
  headerTitle: string;
  headerSubtitle: string;
  cards: SkillCardData[];
  calloutTitle: string;
  calloutSubtitle: string;
  calloutButtonText: string;
}

// Contact Info Model
export interface ContactSectionData {
  headerTitle: string;
  headerSubtitle: string;
  infoTitle: string;
  infoDescription: string;
  locationTitle: string;
  locationText: string;
  locationSubtext: string;
  email: string;
  linkedin: string;
  github: string;
  phone?: string;
  statusText: string;
}

// Hero Section Model
export interface HeroSectionData {
  name: string;
  roleTitle: string;
  typewriterPhrases: string[];
  bio: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  avatarUrl?: string;
}

// Portfolio Section Item for Arrangement & Layout
export type PortfolioSectionId = 
  | 'hero' 
  | 'case-studies' 
  | 'projects' 
  | 'zero-to-production' 
  | 'about' 
  | 'experience' 
  | 'education' 
  | 'skills' 
  | 'contact';

export interface PortfolioSectionItem {
  id: PortfolioSectionId;
  label: string;
  subtitle: string;
  visible: boolean;
  iconName: string;
}

// Full Portfolio State
export interface FullPortfolioData {
  hero: HeroSectionData;
  about: AboutSectionData;
  resume: ResumeSectionData;
  skills: SkillsSectionData;
  contact: ContactSectionData;
  projects: Project[];
  sections?: PortfolioSectionItem[];
}

export interface ProfileData {
  name: string;
  role: string;
  experienceTotal: string;
  experienceBreakdown?: {
    engineering: string;
    product: string;
  };
  experienceAndroid?: string;
  experiencePM?: string;
  positioning: string;
  tagline?: string;
  email: string;
  phone?: string;
  linkedinUrl: string;
  resumeUrl?: string;
  portfolioTagline?: string;
  coreCompetencies?: string[];
  technicalStack?: string[];
  stats?: {
    totalExp: string;
    androidExp: string;
    pmExp: string;
    focus: string;
  };
}

export interface CaseStudyDecision {
  topic: string;
  problem: string;
  decision: string;
  rationale: string;
  expectedOutcome: string;
  status: string;
}

export interface KeyDecision extends CaseStudyDecision {}

export interface MetricCardData {
  title: string;
  value: string;
  subtitle?: string;
  category?: 'Activation' | 'Engagement' | 'Retention' | 'Feature Adoption' | 'Trust' | 'Monetization';
  badge?: string;
}

export interface MonetizationTelemetry {
  rewardedAds: {
    estimatedEarnings: string;
    ecpm: string;
    requests: string;
    matchRate: string;
    showRate: string;
    impressions: string;
    ctr: string;
    clicks: string;
    activeUsers: string;
    note: string;
  };
  interstitialAds?: {
    estimatedEarnings: string;
    ecpm: string;
    note: string;
  };
  caseStudy: {
    problem: string;
    question: string;
    tradeoff: {
      revenue: string;
      retention: string;
    };
    approach: string[];
  };
}

export interface MonetizationMetric {
  format: 'Rewarded Ads' | 'Interstitial Ads';
  earnings: string;
  eCPM: string;
  requests?: string;
  matchRate?: string;
  showRate?: string;
  impressions?: string;
  ctr?: string;
  clicks?: string;
  activeUsers?: string;
}
