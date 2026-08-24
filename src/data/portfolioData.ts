import { 
  Project, 
  ProfileData, 
  CaseStudyDecision, 
  MonetizationTelemetry,
  HeroSectionData,
  AboutSectionData,
  ResumeSectionData,
  SkillsSectionData,
  ContactSectionData,
  EducationItem,
  ExperienceItem,
  CertificationItem,
  SkillCardData,
  AboutStat,
  PortfolioSectionItem
} from '../types';

export const PRIVATE_VAULT_URL = 'https://private-vault-ui.ui-rareprob.chatgpt.site';

export const DEFAULT_AVATAR = '/uploads/avatar-1787564951688.jpg';

export const DEFAULT_SECTIONS_DATA: PortfolioSectionItem[] = [
  {
    id: 'hero',
    label: 'Hero & Bio Banner',
    subtitle: 'Name, typewriter subtitle, portrait card, and fast action CTAs',
    visible: true,
    iconName: 'Sparkles'
  },
  {
    id: 'case-studies',
    label: 'Featured Case Studies',
    subtitle: 'Deep-dive interactive teardowns: VPN Monetization, FitLife Pro, Instagram, Swiggy, Rapido',
    visible: true,
    iconName: 'TrendingUp'
  },
  {
    id: 'projects',
    label: 'Project Case Studies Grid',
    subtitle: 'All portfolio projects with category filters, screenshots, and live links',
    visible: true,
    iconName: 'Layers'
  },
  {
    id: 'zero-to-production',
    label: '0-to-1 Interactive Apps Suite',
    subtitle: '7 functional mobile applications with live interactive playgrounds',
    visible: true,
    iconName: 'Smartphone'
  },
  {
    id: 'about',
    label: 'About & Narrative',
    subtitle: 'Professional journey, metric cards, core competencies chips',
    visible: true,
    iconName: 'User'
  },
  {
    id: 'experience',
    label: 'Work Experiences',
    subtitle: 'PM and native Android roles with bullet achievements and skill tags',
    visible: true,
    iconName: 'Briefcase'
  },
  {
    id: 'education',
    label: 'Education & Certifications',
    subtitle: 'Academic background, degree distinction, professional credentials',
    visible: true,
    iconName: 'GraduationCap'
  },
  {
    id: 'skills',
    label: 'Skills & Bento Grid',
    subtitle: 'Product strategy, monetization, tech stack, and user discovery cards',
    visible: true,
    iconName: 'Palette'
  },
  {
    id: 'contact',
    label: 'Contact & Social Channels',
    subtitle: 'Email, LinkedIn, GitHub, location, and availability badge',
    visible: true,
    iconName: 'Mail'
  }
];

export const DEFAULT_HERO_DATA: HeroSectionData = {
  name: 'Mansi Shrivastav',
  roleTitle: 'Product Manager & Ex-Android Developer',
  typewriterPhrases: [
    'Performance-Focused Product Manager',
    'Consumer Mobile Apps Specialist',
    'Growth & Monetization Engineer',
    'Data-Driven Problem Solver'
  ],
  bio: 'Building fast, scalable, and user-centric consumer mobile experiences with over 5+ years of combined tech expertise (2 years Android Development + 3 years Product Management). Passionate about transforming complex product problems into responsive, high-retention mobile applications while driving growth, analytics, and monetization excellence.',
  primaryCtaText: 'View My Work',
  secondaryCtaText: 'Download Resume',
  avatarUrl: DEFAULT_AVATAR,
};

export const DEFAULT_ABOUT_DATA: AboutSectionData = {
  badgeText: 'Get to Know Me',
  headline: 'Building Scalable, Intuitive & User-Centric Consumer Products',
  narrativeParagraphs: [
    'I am a Product Manager with an engineering foundation, possessing over 5 years of experience building consumer mobile applications. My expertise lies in transforming deep user pain points into seamless, high-retention product journeys while maintaining technical rigor, system performance, and cross-functional alignment.',
    'Throughout my career, I have successfully driven the lifecycle of security utilities, file managers, and high-frequency utility apps — including Private Vault and ad-monetized ecosystem tools. Beyond core feature execution, I actively lead user research, define telemetry pipelines, architect monetization paywalls, and run continuous A/B experimentation to drive sustainable LTV.',
    'Having spent 2 years as an Android Developer before transitioning into Product Management, I bridge the critical gap between user desires, business viability, and engineering execution. I partner closely with design and engineering teams to build products that solve real-world problems.'
  ],
  name: 'Mansi Shrivastav',
  roleTitle: 'Product Manager & Mobile Specialist',
  email: 'manshishrivastav2000@gmail.com',
  phoneOrStatus: '+91 8445055267 / +91 8755991920',
  location: 'Dehradun, India • Open to Relocation',
  avatarUrl: DEFAULT_AVATAR,
  stats: [
    {
      id: 'stat-1',
      value: '10M+',
      label: 'User Reach & Downloads',
      subtext: 'Across consumer mobile portfolio'
    },
    {
      id: 'stat-2',
      value: '5+',
      label: 'Years Total Experience',
      subtext: '2 yrs Android Dev + 3 yrs PM'
    },
    {
      id: 'stat-3',
      value: '98%',
      label: 'Sprint & Delivery Success',
      subtext: 'On-time milestone delivery'
    }
  ],
  competencies: [
    'Product Discovery',
    'User Journey Mapping',
    'Ad Monetization',
    'Android Architecture',
    'Funnel Telemetry',
    'A/B Experimentation'
  ]
};

export const DEFAULT_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Product Manager — Consumer Mobile Apps',
    company: 'Mobile Products Ecosystem',
    period: '2023 — Present · Dehradun / Remote',
    location: 'Dehradun, India',
    description: 'Leading product strategy, user discovery, feature prioritization, and telemetry for utility and privacy-focused Android applications.',
    bullets: [
      'Spearheaded end-to-end product discovery and PRD specifications for Private Vault, reducing user privacy anxiety while lifting 30-day retention by +18%.',
      'Architected ad monetization frameworks with rewarded video mechanics and guarded frequency capping, generating $10.69 eCPM across 340K+ impressions.',
      'Established core telemetry dashboards across Mixpanel & Firebase to track key activation funnels and drop-offs.',
      'Partnered directly with engineering and UX design squads through bi-weekly agile sprints, ensuring 100% on-time release velocity.'
    ],
    tags: ['Product Discovery', 'Ad Monetization', 'User Journeys', 'A/B Testing', 'Telemetry']
  },
  {
    id: 'exp-2',
    role: 'Android Developer — Mobile Engineering',
    company: 'Consumer Technology Group',
    period: '2021 — 2023 · Dehradun, India',
    location: 'Dehradun, India',
    description: 'Architected and shipped high-performance native Android applications with Kotlin, Java, and modern Jetpack architectural components.',
    bullets: [
      'Engineered custom ExoPlayer 2.x pipelines with hardware acceleration, reducing media buffering latency by 35% on low-end devices.',
      'Integrated on-device FFmpeg audio extraction engine with real-time waveform visualization for high-speed media processing.',
      'Implemented Room SQLite databases, clean MVVM architecture, and Android Scoped Storage compliant file management systems.',
      'Collaborated closely with Product Managers on user flow feasibility, memory optimization, and Play Store vitals (ANRs & crashes < 0.1%).'
    ],
    tags: ['Kotlin', 'Java', 'ExoPlayer', 'Room DB', 'FFmpeg', 'MVVM', 'Jetpack']
  }
];

export const DEFAULT_EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Technology (B.Tech) — Computer Science & Engineering',
    institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)',
    period: '2017 — 2021',
    grade: 'First Class with Distinction (8.4 CGPA)',
    description: 'Specialized in Algorithms, Data Structures, Mobile Computing, Object-Oriented Software Engineering, and Database Management Systems.',
    highlights: [
      'Published academic project on real-time mobile media compression algorithms.',
      'Lead student organizer for technical hackathons and Android dev workshops.'
    ]
  }
];

export const DEFAULT_CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-pac',
    title: 'Product Analytics Micro-Cert. (PAC)',
    issuer: 'Product School',
    year: '2024'
  },
  {
    id: 'cert-genai-pm',
    title: 'Generative AI for Product Managers',
    issuer: 'DeepLearning.AI / AI Product Institute',
    year: '2024'
  },
  {
    id: 'cert-sql-analysis',
    title: 'SQL for Data Analysis',
    issuer: 'Mode Analytics / DataCamp',
    year: '2023'
  },
  {
    id: 'cert-becoming-pm',
    title: 'Becoming a Product Manager: A Complete Guide',
    issuer: 'Product Management Academy',
    year: '2023'
  },
  {
    id: 'cert-1',
    title: 'Product Management Fundamentals & Metrics',
    issuer: 'Industry Product Institute',
    year: '2023'
  },
  {
    id: 'cert-2',
    title: 'Professional Scrum Master (PSM I)',
    issuer: 'Scrum.org',
    year: '2022'
  },
  {
    id: 'cert-3',
    title: 'Mobile Telemetry & Product Analytics Masterclass',
    issuer: 'Amplitude & Mixpanel Academy',
    year: '2023'
  }
];

export const DEFAULT_RESUME_DATA: ResumeSectionData = {
  headerTitle: 'Resume',
  headerSubtitle: 'Explore my career journey, product skills, telemetry expertise, and professional accomplishments built over 5+ years of mobile experience.',
  summaryTitle: 'Professional Summary',
  summaryText: 'Product Manager with 5+ years of combined experience across consumer mobile applications, product strategy, telemetry, and Android engineering (2 years Android Development + 3 years Product Management). Passionate about creating user-centric mobile products, driving sustainable monetization, and bridging design and engineering teams.',
  contactLocation: 'Dehradun, India • Open to Relocation',
  contactEmail: 'manshishrivastav2000@gmail.com',
  contactPhone: '+91 8445055267, +91 8755991920',
  contactLinkedin: 'https://www.linkedin.com/in/mansi-shrivastav2000',
  contactGithub: 'https://github.com/mansiverma14',
  experiences: DEFAULT_EXPERIENCES,
  education: DEFAULT_EDUCATION,
  certifications: DEFAULT_CERTIFICATIONS
};

export const DEFAULT_SKILL_CARDS: SkillCardData[] = [
  {
    id: 'strategy',
    title: 'Product Strategy & Discovery',
    iconName: 'Palette',
    skills: 'User Research, PRD Authoring, Product Roadmaps, Problem Discovery, Hypothesis Testing',
    highlight: 'Strategic Thinking',
    description: 'Translating ambiguous user problems into structured product roadmaps and clear engineering specs.'
  },
  {
    id: 'monetization',
    title: 'Growth & Monetization',
    iconName: 'Diamond',
    skills: 'Paywalls & Tier Pricing, Ad Mediation (AdMob, AppLovin), In-App Purchases, ARPU & eCPM Optimization',
    highlight: 'Revenue & LTV',
    description: 'Balancing revenue generation through rewarded ads and subscription tiers without degrading retention.'
  },
  {
    id: 'ux',
    title: 'Mobile UX & Wireframing',
    iconName: 'LineChart',
    skills: 'Figma, Information Architecture, Wireframing, User Flow Mapping, Mobile Ergonomics & Micro-Interactions',
    highlight: 'User Empathy',
    description: 'Designing intuitive, high-clarity mobile workflows with tactile feedback and zero-friction navigation.'
  },
  {
    id: 'analytics',
    title: 'Analytics & Telemetry',
    iconName: 'Megaphone',
    skills: 'Mixpanel, Amplitude, SQL, Retention Cohorts, Funnel Drop-off Analysis, A/B Testing Experiments',
    highlight: 'Data-Driven',
    description: 'Instrumenting granular tracking events and analyzing cohort retention curves to guide decisions.'
  },
  {
    id: 'tech',
    title: 'Technical Architecture',
    iconName: 'Code2',
    skills: 'Android (Kotlin, Java, Jetpack, MVVM), REST APIs, Firebase Auth, Room DB, System Design',
    highlight: 'Engineering Foundation',
    description: '2 years of native Android engineering providing deep intuition for technical feasibility and constraints.'
  },
  {
    id: 'execution',
    title: 'Execution & Leadership',
    iconName: 'Video',
    skills: 'Agile/Scrum, Sprint Planning, Cross-Functional Squad Leadership, Stakeholder Management, Release Velocity',
    highlight: 'Team Impact',
    description: 'Running high-velocity bi-weekly sprint cadences and driving cross-functional alignment.'
  }
];

export const DEFAULT_SKILLS_DATA: SkillsSectionData = {
  headerTitle: 'Skills',
  headerSubtitle: 'A comprehensive toolkit of modern product frameworks, monetization mechanics, mobile engineering, and data analytics tools I use to build scalable products.',
  cards: DEFAULT_SKILL_CARDS,
  calloutTitle: 'Looking for someone who bridges Product, Growth & Engineering?',
  calloutSubtitle: 'I combine hands-on technical architecture with user empathy and commercial acumen to build high-impact consumer mobile applications.',
  calloutButtonText: 'Discuss Opportunities'
};

export const DEFAULT_CONTACT_DATA: ContactSectionData = {
  headerTitle: "Let's Build Something Amazing Together",
  headerSubtitle: "I'm always open to discussing new opportunities, exciting product challenges, and collaborations. Whether you're hiring for a Product Manager role, need mobile monetization expertise, or want to discuss consumer apps—I'd love to hear from you.",
  infoTitle: 'Contact Information',
  infoDescription: "Whether you're looking for a Product Manager, Mobile Specialist, or a dedicated technical lead, I'd be happy to discuss how my skills and experience can contribute to your team.",
  locationTitle: 'Location',
  locationText: 'Dehradun, Uttarakhand, India',
  locationSubtext: 'Open to Relocation & Remote',
  email: 'manshishrivastav2000@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mansi-shrivastav2000',
  github: 'https://github.com/mansiverma14',
  phone: '+91 8445055267 / +91 8755991920',
  statusText: 'Available for New Roles & Product Collaborations'
};

export const PROFILE_DATA: ProfileData = {
  name: 'Mansi Shrivastav',
  role: 'Product Manager',
  experienceTotal: '5 years total experience',
  experienceBreakdown: {
    engineering: '2 years Android Development',
    product: '3 years Product Management',
  },
  positioning: 'Product Manager with an engineering background, building consumer mobile products across product, growth, analytics and monetization.',
  tagline: '2 years engineering → 3 years product',
  email: 'manshishrivastav2000@gmail.com',
  phone: '+91 8445055267, +91 8755991920',
  linkedinUrl: 'https://www.linkedin.com/in/mansi-shrivastav2000',
  resumeUrl: '[RESUME PDF LINK]',
  coreCompetencies: [
    'Product Discovery',
    'User Problem Identification',
    'Product Roadmapping',
    'PRD & Feature Specs',
    'User Journey Mapping',
    'A/B Testing & Remote Config',
    'Product Analytics & Funnels',
    'Ad Monetization Strategy',
    'Cross-Functional Leadership',
    'Agile Sprint Execution',
  ],
  technicalStack: [
    'Native Android (Kotlin & Java)',
    'Room DB & Local SQLite',
    'REST APIs & Retrofit',
    'Firebase Analytics & Remote Config',
    'ExoPlayer 2.x Architecture',
    'FFmpeg Audio & Video Processing',
    'Mobile Ad Mediation & SDKs',
  ],
};

export const CAREER_TIMELINE = [
  {
    phase: '3 Years Engineering',
    role: 'Android Developer',
    focus: 'Technical Depth & Architecture',
    description: 'Built high-performance native Android applications, architecting local storage systems, media playback engines with ExoPlayer, and background task pipelines.',
    keyGain: 'Deep technical intuition for constraints, API design, mobile memory limits, and seamless developer collaboration.',
  },
  {
    phase: '2 Years Product',
    role: 'Product Manager',
    focus: 'Product Strategy & Growth',
    description: 'Led cross-functional mobile product roadmaps, defined user-first PRDs, optimized ad monetization yields, and drove continuous funnel experimentation.',
    keyGain: 'Ability to connect user friction directly to commercial viability and measurable retention outcomes.',
  },
];

export const REVIEW_PILOT_URL = 'https://aistudio.google.com/apps/c4520445-c664-452a-9e9b-54a323ba7fb9?showPreview=true&showAssistant=true&fullscreenApplet=true';

export const PROJECTS: Project[] = [
  {
    id: 'vpn-transformation',
    name: 'vpn-App- Improving Revenue through Product Analytics, Funnel Optimization & AdMob Mediation',
    category: 'Product & Feature Work · Tools',
    role: 'Product Manager',
    timeline: 'Product Analytics, Funnel & Monetization Transformation',
    shortProblem: 'Although the VPN had millions of active users, Revenue was continuously declining (10% D1 retention, 2.1% D7 retention, 0.9% purchase rate).',
    fullProblem: 'Although the VPN application had millions of active users (147K successfully connected users), subscription revenue was continuously declining. Major issues included: low D1 retention (10%), D7 retention (2.1%), extremely low premium clicks (only 10.6K clicked premium), poor paywall conversion (only 3.4% of buy clicks purchased), weak ad viewer rate, incorrect mediation floors, and lack of country-specific monetization strategies.',
    solution: 'Conducted deep diagnostic telemetry across Firebase, Google Play Console, GA4, BigQuery & SQL: (1) Funnel & Paywall overhaul fixing the 3.4% checkout conversion bottleneck with country-specific plans and trial benefits, (2) Country segmentation (High Revenue: UAE/Taiwan/US/UK/France/Korea; High Traffic: India/Indonesia/Canada) and LTO promotion (capturing 80% of purchases), (3) AdMob Mediation optimization lowering floors and splitting country waterfalls, (4) Home UX redesign with post-connection bottom sheet, and (5) 4 structured A/B experiments.',
    productAreas: [
      'Product Analytics (Firebase, GA4, BigQuery, SQL)',
      'Funnel Optimization (15,132 → 3,998 → 136)',
      'Country Segmentation & LTO Packs (80% share)',
      'AdMob Waterfall & Floor Optimization',
      'Home UX Redesign (Post-Connection Bottom Sheet)',
      '4 A/B Experimentation Frameworks'
    ],
    tags: ['Product Analytics', 'Firebase', 'BigQuery', 'SQL', 'AdMob', 'A/B Testing', 'Monetization'],
    featured: true,
    isFeatured: true,
    deepDiveRoute: 'vpn-transformation',
    screenshots: [
      {
        id: 'shot-vpn-1',
        url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
        title: 'VPN Product Case Study — End-to-End Product Analysis',
        caption: 'Complete 15-section product teardown: Initial metrics table, 147K connected analysis, country-wise LTO pack purchases, AdMob waterfall optimization, and 4 A/B test experiments.',
        isCover: true
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'Buy Click Users', value: '3,998', subtitle: 'Out of 15,132 visitors' },
      { label: 'Purchases', value: '136', subtitle: '3.4% checkout conversion' },
      { label: 'LTO Share', value: '~80%', subtitle: 'Most popular pack' },
      { label: 'Connected Users', value: '147K', subtitle: 'Active utility base' }
    ]
  },
  {
    id: 'fitlife-pro',
    name: 'FitLife Pro (Health Journey Pro) — Full PRD, Open-Source Architecture & Prototype',
    category: 'Health & Fitness · AI Vision Nutrition · Habit Gamification',
    role: 'Lead Product Manager & System Architect',
    timeline: 'In Development · Data Uploading Phase (Production Mid-Sep 2026)',
    shortProblem: '>80% of users churn from fitness apps within 14 days due to tedious manual calorie logging, fragmented utilities, and lack of gamified motivation.',
    fullProblem: 'The digital fitness landscape is heavily fragmented. Users must juggle multiple specialized apps: one for counting steps, another with heavy paywalls for manual calorie tracking (MyFitnessPal), a third for home workout videos, and static charts that fail to motivate long-term habit formation. Furthermore, manual logging creates immense cognitive friction.',
    solution: 'Designed and engineered FitLife Pro: a unified 0-to-1 mobile health ecosystem combining real-time activity metrics (steps, water plant growth visual, calories, heart rate), AI computer vision nutrition intelligence (Food101/MobileNet) with Open Food Facts 3M+ barcode database, 28-day structured workout challenges (wger exercise engine), and a rewarding RPG coin & streak economy (Habitica loops). Fully deployed live prototype on Replit.',
    productAreas: ['0-to-1 Product Strategy', 'Full PRD & Feature Taxonomy', '10-Project Open-Source System Architecture', 'Computer Vision Meal Classifier', 'Gamification & Coin Economy', 'Monetization & Risk Mitigation'],
    tags: ['0-to-1 Product', 'PRD', 'FastAPI', 'HealthTech', 'AI Vision', 'Gamification', 'PostgreSQL'],
    featured: true,
    deepDiveRoute: 'fitlife-pro',
    externalReferenceUrl: 'https://health-journey-pro--rareprobplaycon.replit.app',
    screenshots: [
      {
        id: 'shot-fitlife-1',
        url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
        title: 'FitLife Pro Activity Dashboard & Water Plant Visual',
        caption: 'Production Android UI: Weekly 0/4 goal, 64% progress card, 4 Moves for Abs, steps radial, interactive plant hydration, and heart rate widget.',
        isCover: true
      },
      {
        id: 'shot-fitlife-2',
        url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
        title: '28-Day Abs Core Challenge & Live Workout Runner',
        caption: 'Difficulty tiers (Sedentary/Active), week breakdown, +60 coin reward, active timer countdown, and exercise pose guidance.',
        isCover: false
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'Target Production', value: 'Mid-Sep 2026', subtitle: 'Data uploading phase underway' },
      { label: 'D30 Retention Target', value: '>52%', subtitle: 'Powered by Habitica streak loops' },
      { label: 'Workout Completion', value: '>78%', subtitle: '7-10 min bite-sized programs' },
      { label: 'Open-Source Modules', value: '10 Projects', subtitle: 'wger, Open Food Facts, Novu' }
    ]
  },
  {
    id: 'instagram-feed',
    name: 'Instagram — Rethinking the Feed Experience & Friend Connections',
    category: 'Social Platform · Recommendation Engine · Product Strategy',
    role: 'Lead Product Manager (Product Strategy & Discovery)',
    timeline: 'Interactive Story-Driven Product Case Study',
    shortProblem: 'Users open Instagram to catch up with friends, but get bombarded with algorithmic Reels, sponsored ads, and recommended creator content before seeing anyone they know.',
    fullProblem: 'Instagram has evolved from a close-knit photo-sharing social network into an AI-powered entertainment and creator broadcast platform. While short-form video algorithms maximized passive watch time, user discovery revealed alarming second-order effects: 72% drop in personal friend post discoverability, rising social alienation, and an exodus of authentic social sharing into private direct messages (DMs).',
    solution: 'Designed an interactive story-driven product solution balancing business ad retention with authentic social connection: (1) "Friends Catch-Up Digest" providing a 60-second interactive daily summary of close friend moments, (2) Seamless "Dual Feed Mode" (Friends & Family vs. Explore/Reels) with persistent gesture toggle, (3) Hybrid Closeness Algorithm injecting friend updates in the top 3 slots on launch, and (4) Frictionless 1-Tap DM Reaction Bridges.',
    productAreas: ['Product Strategy & Discovery', 'Recommendation Algorithms', 'Dual-Feed Architecture', 'User Behavior Analytics', 'A/B Experimentation', 'Ad Load & Retention Guardrails'],
    tags: ['Product Strategy', 'Social Graph', 'Recommendation Engine', 'UX Design', 'A/B Testing', 'Retention'],
    featured: true,
    deepDiveRoute: 'instagram-feed',
    screenshots: [
      {
        id: 'shot-ig-1',
        url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop',
        title: 'Instagram Friends Catch-Up & Dual Feed Concept',
        caption: 'Story-driven product reimagining: Friends Catch-Up Digest, seamless Dual Feed mode toggle, and algorithmic closeness hybrid.',
        isCover: true
      },
      {
        id: 'shot-ig-2',
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
        title: 'Business Goals vs User Goals Matrix',
        caption: 'Balancing ad impressions and creator watch-time with meaningful D7 friend retention and DM conversation velocity.',
        isCover: false
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'Friend Post Views', value: '+48%', subtitle: 'During first 60s of session' },
      { label: 'DM Conversations', value: '+34%', subtitle: 'Sparked directly from feed' },
      { label: 'D30 Friend Retention', value: '+21%', subtitle: 'For casual social users' },
      { label: 'Ad Load Impact', value: '0% Drop', subtitle: 'Preserved monetization yield' }
    ]
  },
  {
    id: 'rapido-commuter-pass',
    name: 'Rapido Commuter Pass — Peak-Hour Supply & Commute Subscription',
    category: 'Mobility · Two-Sided Marketplace · Subscriptions',
    role: 'Mobile Product Manager (Android)',
    timeline: '12-Month Trajectory & Scale Strategy',
    shortProblem: '25% D7 churn for daily commuters, 20–30% peak-hour cancellations, and severe app-switching among price-sensitive riders.',
    fullProblem: 'Rapido is India\'s leading bike-taxi and last-mile mobility platform (100M+ downloads, 10M daily rides across 100+ cities). However, availability consistently failed during the critical 8–10 AM and 6–8 PM commute rush (up to 32% no-driver fail rate). Daily commuters juggled 3+ apps, leading to broken habits and 25% D7 churn.',
    solution: 'Engineered a two-sided marketplace subscription model: tiered commuter passes (Daily ₹89, Weekly ₹499, Monthly ₹1,799) with scheduled recurring slots, 10-minute driver arrival guarantee, and zero surge pricing — perfectly paired with a captain shift subscription providing completion bonuses and income certainty.',
    productAreas: ['Two-Sided Marketplace', 'Subscription Pricing & Tiering', 'Shift Allocation & Supply Lock', 'Jetpack Compose UX', 'GrowthBook A/B Testing', 'BigQuery Cohort Analytics'],
    tags: ['Mobility', 'Subscriptions', 'Marketplace', 'Kotlin', 'Firebase', 'BigQuery', 'Razorpay'],
    featured: true,
    deepDiveRoute: 'rapido-commuter-pass',
    screenshots: [
      {
        id: 'shot-rapido-1',
        url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop',
        title: 'Rapido Commuter Pass Map-First Flow',
        caption: '5 connected dark map-first screens: Ride selection upsell, Tiered Plans (Daily/Weekly/Monthly), Mon-Fri recurring schedule, and Guaranteed Confirmation.',
        isCover: true
      },
      {
        id: 'shot-rapido-2',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        title: 'Two-Sided Marketplace Retention Metrics',
        caption: '+28% DAU, +35% D7 retention (15% → 45%), -42% booking failures, and ₹280Cr projected annual revenue.',
        isCover: false
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'D7 Retention', value: '+35%', subtitle: '15% → 45% (pass vs control)' },
      { label: 'Booking Failures', value: '-42%', subtitle: 'During 8-10 AM peak' },
      { label: 'Projected Run-rate', value: '₹280 Cr', subtitle: 'Y1 modeled revenue' },
      { label: 'Driver Utilization', value: '+22%', subtitle: '60% captain retention' }
    ]
  },
  {
    id: 'swiggy-instamart',
    name: 'Swiggy Instamart — From Grocery Utility to Meal Decision Engine',
    category: 'Product Strategy · Quick-Commerce · AI Personalization',
    role: 'Product Manager (Product Strategy & UX)',
    timeline: 'Strategic Discovery to Multi-Feature Implementation',
    shortProblem: 'Quick-commerce solved 10-minute speed, but users only ordered reactively when running out of items, creating high churn and fragmented baskets.',
    fullProblem: 'Swiggy Instamart mastered instant grocery delivery across India. However, retention was bottlenecked because shopping sessions were purely reactive. In-depth user discovery revealed the true customer pain point wasn\'t grocery delivery speed, but the daily cognitive friction of answering: "What should I cook today?"',
    solution: 'Reframed Instamart into a household meal decision platform through 5 concrete product pillars: (1) Smart Meal-Based 3-Tap Ordering, (2) Predictive Pantry Refill for staples, (3) Automated 7-Day Personalized Meal Planner with 1-click consolidated cart, (4) Discounted Morning Scheduled Delivery (6-6:30 AM), and (5) Shoppable Reels-to-Cart cooking commerce.',
    productAreas: ['Product Discovery & Reframing', 'Meal-Based Cart Architecture', 'Predictive Consumption Engine', 'Shoppable Video Commerce', 'Scheduled Dispatch Logistics', 'Prioritization (Impact × Feasibility)'],
    tags: ['Product Strategy', 'Quick-Commerce', 'Personalization', 'UX Design', 'Notion', 'Figma'],
    featured: true,
    deepDiveRoute: 'swiggy-instamart',
    screenshots: [
      {
        id: 'shot-swiggy-1',
        url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
        title: 'Swiggy Instamart Meal Decision Engine',
        caption: 'Interactive "Dinner Tonight" vibe selection, 7-day meal planning calendar, morning scheduled savings slots, and 12-min Reels-to-Cart.',
        isCover: true
      },
      {
        id: 'shot-swiggy-2',
        url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop',
        title: 'User Personas & Strategic Prioritization',
        caption: 'Impact × Feasibility matrix, Rahul/Priya/Ramesh/Ananya personas, and +35% order frequency projection.',
        isCover: false
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'North Star Goal', value: '7+ Meals', subtitle: 'Planned per user per week' },
      { label: 'Order Frequency', value: '+35%', subtitle: 'Shift from reactive to planned' },
      { label: 'Avg Basket Size', value: '+22%', subtitle: 'Meal bundle multi-item add' },
      { label: 'Decision Time', value: '3 Taps', subtitle: 'Recipe to fulfilled cart' }
    ]
  },
  {
    id: 'ai-implementations',
    name: 'AI Product Implementations & Collage GenAI',
    category: 'Applied AI · GenAI Diffusion & Neural Models',
    role: 'Lead Product Manager & AI Strategist',
    timeline: '2023 — 2024 · Flagship Implementation Suite',
    shortProblem: 'Users suffered empty slot drop-offs in Collage Maker, review triage blindness, and complex desktop-only audio separation.',
    fullProblem: 'While creating collages, users frequently abandoned drafts at 70% completion because they lacked 1-2 matching aesthetic filler photos or textures, while stock photo searching caused 45% bounce rates. Concurrently, mobile apps needed on-device neural stem splitting and automated LLM review triage.',
    solution: 'Designed and shipped 5 production AI implementations: (1) Prompt-to-Grid Generative Image Studio in Collage Maker with 1.4s diffusion previews, (2) Review Pilot NLP sentiment triage, (3) Neural Demucs Audio Stem Separator in MP3 Converter, (4) LaMa Magic Eraser, and (5) On-Device Privacy Document PII Redactor.',
    productAreas: ['Generative Diffusion (SDXL/Imagen)', 'Prompt Engineering & Guardrails', 'Edge Neural DSP', 'Token Economy & Monetization', 'Computer Vision OCR'],
    tags: ['GenAI', 'Diffusion Models', 'LLMs', 'Neural Audio', 'Product Strategy'],
    featured: true,
    deepDiveRoute: 'ai-implementations',
    screenshots: [
      {
        id: 'shot-ai-1',
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
        title: 'AI Image Generator in Collage Maker',
        caption: 'Prompt-to-Grid generative diffusion studio with 1-tap style presets, aspect-ratio bounding box, and token economy.',
        isCover: true
      },
      {
        id: 'shot-ai-2',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        title: 'Review Pilot & Neural Audio Engine',
        caption: 'Multi-lingual sentiment clustering, auto-reply generator, and 4-stem Demucs audio decomposition.',
        isCover: false
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'Collage Completion', value: '+142%', subtitle: 'Reduced empty slot churn' },
      { label: 'Session Length', value: '+68%', subtitle: 'Per active creator' },
      { label: 'AI Adoption', value: '38%', subtitle: 'Within 30d of launch' },
      { label: 'Rewarded eCPM', value: '$4.82', subtitle: 'On AI token unlock flows' }
    ]
  },
  {
    id: 'review-pilot',
    name: 'Review Pilot',
    category: 'AI SaaS · Product Intelligence & Growth',
    role: 'Lead Product Manager & System Architect',
    timeline: '2023 — 2024 · Discovery to Scale',
    shortProblem: 'Businesses lose revenue and customer trust due to fragmented review channels, slow manual responses, and unaddressed negative feedback.',
    fullProblem: 'Online reputation directly drives consumer trust and conversion (84% of buyers trust reviews as much as personal recommendations). However, businesses and app developers were losing 20-30% of potential conversions due to fragmented multi-channel review silos (Google, App Store, Play Store, Trustpilot), slow response SLAs (>48h avg turnaround), and an inability to cluster raw feedback into actionable product bugs and feature requests.',
    solution: 'Designed and built Review Pilot — an end-to-end AI-powered Review Intelligence & Reputation Growth platform. Unified multi-channel review aggregation, automated contextual Smart Replies with brand-tone guardrails, extracted sentiment & topic root-cause clusters, and orchestrated automated review request sequences that lifted positive review volume by +42% while cutting response turnaround from 48 hours to 4.2 minutes.',
    productAreas: ['Product Strategy & Discovery', 'LLM Prompt Engineering', 'Multi-Channel Ingestion', 'Sentiment NLP', 'A/B Experimentation', 'B2B SaaS Growth'],
    tags: ['AI / GenAI', 'Product Intelligence', 'SaaS', 'NLP & Sentiment', 'Growth Flywheel'],
    featured: true,
    deepDiveRoute: 'review-pilot',
    externalReferenceUrl: REVIEW_PILOT_URL,
    screenshots: [
      {
        id: 'shot-rp-1',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        title: 'Unified Review Inbox & AI Triage',
        caption: 'Centralized multi-platform review feed with instant sentiment tagging, urgency scoring, and 1-click AI smart replies.',
        isCover: true
      },
      {
        id: 'shot-rp-2',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        title: 'Sentiment & Topic Root-Cause Analytics',
        caption: 'NLP keyword clustering identifying root friction points across shipping, app performance, and billing.',
        isCover: false
      },
      {
        id: 'shot-rp-3',
        url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
        title: 'Automated Review Booster Campaign',
        caption: 'Post-purchase and in-app milestone triggers orchestrating verified 5-star customer review collection.',
        isCover: false
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: '5-Star Review Growth', value: '+42%', subtitle: 'YoY verified volume' },
      { label: 'Response Turnaround', value: '4.2 min', subtitle: 'Down from 48 hours' },
      { label: 'SLA Compliance', value: '98.4%', subtitle: 'Across all connected channels' }
    ]
  },
  {
    id: 'private-vault',
    name: 'Private Vault',
    category: 'Privacy · Consumer Mobile',
    role: 'Product Management',
    shortProblem: 'Users need a simple, reassuring way to protect private photos, videos, and files without overwhelming friction.',
    fullProblem: 'Mobile devices are constantly shared with friends or colleagues, causing anxiety over accidental exposure of personal photos and confidential files. Traditional locker tools feel intimidating and overly technical.',
    solution: 'Designed a calm, trustworthy Private Space experience with clear protection status, category-based browsing (Photos, Videos, Other Files), cloud backup controls, and frictionless folder organization.',
    productAreas: ['Product Discovery', 'Privacy UX', 'User Journey Mapping', 'Feature Architecture', 'Telemetry Framework'],
    tags: ['Privacy', 'Consumer Mobile', 'Product Strategy', 'Android'],
    featured: true,
    deepDiveRoute: 'private-vault',
    externalReferenceUrl: PRIVATE_VAULT_URL,
    screenshots: [
      {
        id: 'shot-1',
        url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
        title: 'Private Vault Main Dashboard',
        caption: 'Category overview for Photos, Videos, and Files with biometric lock status.',
        isCover: true
      },
      {
        id: 'shot-2',
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
        title: 'Encrypted Cloud Storage View',
        caption: 'Granular user controls for backup status and space utilization.',
        isCover: false
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: '30-Day Retention', value: '+18%', subtitle: 'Vs baseline utility app' },
      { label: 'User Satisfaction', value: '4.8★', subtitle: 'Over 50K ratings' }
    ]
  },
  {
    id: 'lite-video-player',
    name: 'Lite Video Player — Preload-First Ads Mediation',
    category: 'Performance · Ad Mediation · Monetization & Growth',
    role: 'Lead Monetization & Ad Tech Product Manager',
    timeline: 'Sep baseline → Dec (1 month post-launch results)',
    shortProblem: 'Show-time load failures, low fill rates, and a ~40% offline usage ceiling capped ad revenue.',
    fullProblem: 'Lite Video Player is an Android offline-first media player. Monetization suffered from severe show-time ad load failures (ads requested at moment of display frequently timed out or missed impressions), lack of an always-ready cached ad supply, single-network demand volatility, and an offline usage ceiling where ~40% of users played local media disconnected from ad networks.',
    solution: 'Rebuilt the ad-loading model around a preload-first mediation pipeline with resilient fallback trees (Splash preload → backfill → high-intent action trigger → full-screen native fallback), multi-network auction mediation (AdMob, Vungle, Pangle), 4-unit native eCPM prioritized rotation, and offline-to-online product features (Shorts feed, online subtitles) that lifted monthly revenue by ~2.65x ($12,372 → $32,740) and interstitial revenue by +4.8x.',
    productAreas: ['Preload Architecture', 'Waterfall & Bidding Mediation', 'eCPM Floor Optimization', 'Native Ad Fallbacks', 'Offline-to-Online Growth', 'BigQuery Telemetry'],
    tags: ['Ad Mediation', 'AdMob', 'Firebase', 'BigQuery', 'Kotlin', 'eCPM Growth'],
    featured: true,
    deepDiveRoute: 'lite-video-player',
    screenshots: [
      {
        id: 'shot-lvp-1',
        url: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1200&auto=format&fit=crop',
        title: 'Lite Video Player Preload-First Ads Mediation',
        caption: 'Preload-first ad delivery pipeline, multi-network mediation, and 2.65x revenue transformation.',
        isCover: true
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'Revenue Growth', value: '~2.65x', subtitle: '$12,372 → $32,740 / mo' },
      { label: 'Interstitial Rev', value: '+4.8x', subtitle: '$3,879 → $18,556' },
      { label: 'Interstitial eCPM', value: '+2.1x', subtitle: '$15.17 → $31.25' },
      { label: 'Fill Rate Lift', value: '+35%', subtitle: 'Across all device tiers' }
    ]
  },
  {
    id: 'hd-video-downloader',
    name: 'HD Video Downloader — VidFetch',
    category: 'Monetization · Consumer Mobile · Ad Strategy',
    role: 'Ad Strategy & Funnel Optimization PM',
    timeline: 'Sep → Jan · Diagnostic to Scale',
    shortProblem: 'Low ad inventory utilization, inconsistent eCPM, and high onboarding drop-offs resulting in poor ad viewer rates.',
    fullProblem: 'VidFetch: Downloader & Player is an Android utility app enabling users to download videos for offline viewing with media playback and file management. The app suffered from low ad inventory utilization, unstable waterfall eCPMs, heavy drop-offs during early onboarding exits, and ad delivery bottlenecks with poor show rates (<30%).',
    solution: 'Engineered an end-to-end monetization transformation: diagnosed funnel bottlenecks using BigQuery, built tier-wise waterfall mediation with geo eCPM floors, rebuilt onboarding with an interactive sample video download flow, introduced a natural "Thank You / Success" interstitial & native ad moment, and deployed smart frequency triggers that skyrocketed interstitial earnings by +182% ($1,463 → $4,135) and ad viewer rate from 30.5% to 57.3%.',
    productAreas: ['Funnel Diagnostics (BigQuery)', 'Waterfall Mediation & eCPM Floors', 'Onboarding Activation Design', 'Ad Placement & Frequency Logic', 'Show Rate Optimization', 'Geo-Tier Bidding'],
    tags: ['Monetization', 'AdMob Mediation', 'BigQuery', 'Onboarding UX', 'Ad Strategy', 'Growth'],
    featured: true,
    deepDiveRoute: 'hd-video-downloader',
    screenshots: [
      {
        id: 'shot-vidfetch-1',
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
        title: 'VidFetch Downloader & Ad Engine',
        caption: 'Central video detection feed, sample onboarding flow, and waterfall mediation architecture.',
        isCover: true
      },
      {
        id: 'shot-vidfetch-2',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        title: 'Monetization Funnel & Metric Lift',
        caption: 'Telemetry breakdown showing +182% interstitial earnings and show rate increase to 41.4%.',
        isCover: false
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'Interstitial Earnings', value: '+182%', subtitle: '$1,463 → $4,135' },
      { label: 'Daily Ad Viewers', value: '+87%', subtitle: '5,697 → 9,232' },
      { label: 'Ad Viewer Rate', value: '57.3%', subtitle: 'Up from 30.5%' }
    ]
  },
  {
    id: 'mp3-converter',
    name: 'MP3 Converter — Retention & Monetization Suite',
    category: 'Media · Audio Toolkit · Growth & Monetization',
    role: 'Product Manager (Growth, UX & Monetization)',
    timeline: 'Product Transformation & 90-Day Scale',
    shortProblem: 'Single-purpose conversion utility suffered from 11% Day 1 retention, aggressive splash ads, fragmented editing flows, and low monetization efficiency.',
    fullProblem: 'MP3 Converter allows users to convert videos into audio files and perform editing operations. Despite a broad feature set, low D1 retention (11%), poor feature discoverability, and intrusive first-session ads depressed user LTV and auction eCPMs ($1.12 interstitial baseline).',
    solution: 'Led two dual-phase transformations: (1) Rebuilt user onboarding, redesigned home screen, unified 9 audio editing tools, and prioritized P0-P2 backlog; (2) Transformed app into a light media toolkit with post-processing "waiting moment" ad flows, boosting total revenue ~2.5X, ARPU ~3X, auction participation from 31% to 72%, and Interstitial eCPM by +110%.',
    productAreas: ['Funnel & Cohort Diagnostics', 'Unified Audio Editing Workflow', 'Post-Processing Ad Strategy', 'Waterfall Mediation & eCPM Floors', 'Firebase A/B Experimentation', 'P0-P2 Roadmap Prioritization'],
    tags: ['Product Strategy', 'Monetization', 'Retention & Growth', 'Firebase', 'BigQuery', 'A/B Testing', 'Audio Toolkit'],
    featured: true,
    deepDiveRoute: 'mp3-converter',
    screenshots: [
      {
        id: 'shot-mp3-1',
        url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
        title: 'MP3 Converter & Light Media Toolkit',
        caption: 'Central video-to-audio converter, 9-tool audio suite, and post-processing ad waiting flow.',
        isCover: true
      },
      {
        id: 'shot-mp3-2',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        title: 'Monetization & Retention Telemetry',
        caption: 'Revenue ~2.5X, ARPU ~3X, Auction participation 31% → 72%, and Interstitial eCPM +110%.',
        isCover: false
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'Total Revenue', value: '~2.5X', subtitle: 'Post-transformation 90d' },
      { label: 'ARPU Growth', value: '~3X', subtitle: 'Average revenue per user' },
      { label: 'Interstitial eCPM', value: '+110%', subtitle: '$1.12 → $2.36' },
      { label: 'Auction Comp.', value: '72%', subtitle: 'Up from 31% (2X)' }
    ]
  },
  {
    id: 'file-manager',
    name: 'File Manager & Cloud Storage',
    category: 'Utility · Cloud & Storage',
    role: 'Product Management & Engineering',
    shortProblem: 'Mobile device storage fills up quickly, making local organization and cloud backup confusing for non-technical users.',
    fullProblem: 'Users struggle with nested directory trees, redundant duplicate media, and fragmented local storage on Android devices.',
    solution: 'Structured an intuitive visual storage breakdown with automated duplicate detection, 1-tap cache cleaning, and secure background cloud synchronization.',
    productAreas: ['Storage UX', 'Background Synchronization', 'Android Scoped Storage', 'Performance'],
    tags: ['Cloud', 'File Systems', 'Utility', 'Storage'],
    featured: true,
    screenshots: [
      {
        id: 'shot-file-1',
        url: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=1200&auto=format&fit=crop',
        title: 'Visual Storage Breakdown',
        caption: 'Storage meter with category categorization and 1-tap duplicate finder.',
        isCover: true
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'Cache Cleaned', value: '1.2 GB', subtitle: 'Average per user per month' },
      { label: 'Clean Success Rate', value: '99.4%', subtitle: 'Zero file corruption' }
    ]
  }
];

export const MONETIZATION_DATA: MonetizationTelemetry = {
  rewardedAds: {
    estimatedEarnings: '$258.00',
    ecpm: '$10.69',
    requests: '342K',
    matchRate: '97.06%',
    showRate: '7.26%',
    impressions: '24K',
    ctr: '35.75%',
    clicks: '8,634',
    activeUsers: '8,572',
    note: 'Historical Project Snapshot — Rewarded Video Ad Yield',
  },
  interstitialAds: {
    estimatedEarnings: '$249.40',
    ecpm: '$11.66',
    note: 'Historical Project Snapshot — Guarded Interstitial Placements',
  },
  caseStudy: {
    problem: 'Ad monetization increases short-term revenue, but aggressive placements can quickly degrade user experience and hurt D30 retention.',
    question: 'How do we maximize ad monetization yield while safeguarding user experience and retention?',
    tradeoff: {
      revenue: 'Higher frequency & aggressive placements yield short-term ad revenue spikes.',
      retention: 'Intrusive ads create cognitive fatigue, leading to increased uninstalls and lower lifetime value (LTV).',
    },
    approach: [
      'Value-Exchange Rewarded Formats: Position rewarded ads where users willingly trade 30 seconds of attention for premium temporary unlocks.',
      'Strict Cooldown Safeguards: Enforce minimum 120s cooldown intervals between interstitial triggers to avoid interruption fatigue.',
      'Remote Configuration & Mediation: Dynamically tune eCPM floors across ad networks to maximize fill without code releases.',
      'Cohort Retention Telemetry: Continuously monitor D1, D7, and D30 retention curves to detect any negative churn signals early.',
    ],
  },
};

export const PRIVATE_VAULT_DECISIONS: CaseStudyDecision[] = [
  {
    topic: 'Calm Privacy Atmosphere vs. Tech Jargon',
    problem: 'Cybersecurity apps often use intimidating dark themes, padlock overload, and technical encryption jargon that causes user anxiety.',
    decision: 'Designed a calm, warm "Private Space" interface with clear category cards (Photos, Videos, Other Files) and positive protection status.',
    rationale: 'Consumer users want reassuring peace of mind, not complex cryptographic terminology.',
    expectedOutcome: 'Higher onboarding completion and reduced user confusion.',
    status: 'Verified Design Direction',
  },
  {
    topic: 'Contextual Permission Timing',
    problem: 'Requesting storage permissions immediately on cold start causes immediate skepticism and high bounce rates.',
    decision: 'Defer media access requests until the user explicitly taps "Add Files" or selects a category to import.',
    rationale: 'Users readily grant permissions when they have high intent and understand the immediate value.',
    expectedOutcome: 'Increased permission grant rates and lower day-1 uninstall rates.',
    status: 'Product Principle',
  },
  {
    topic: 'Cloud Backup as an Opt-In Layer',
    problem: 'Users worry their private media might be automatically synced to external servers without explicit consent.',
    decision: 'Present Cloud Backup as a clear, dedicated card with explicit toggle controls and status indicators.',
    rationale: 'Transparency builds trust; users must always feel in complete control of their data boundaries.',
    expectedOutcome: 'Greater confidence and higher satisfaction ratings.',
    status: 'Verified Architecture',
  },
  {
    topic: 'Frictionless Folder & Category Organization',
    problem: 'Managing mixed media in a single flat list becomes disorganized and frustrating as vault size grows.',
    decision: 'Provide both type-based browsing (Photos, Videos, Files) and custom Private Collections with a dedicated Bin for safe recovery.',
    rationale: 'Supports both quick media browsing and structured confidential document organization.',
    expectedOutcome: 'Higher weekly active engagement and lower accidental deletion support tickets.',
    status: 'Verified UI Structure',
  },
];

export interface ReviewPilotPersona {
  role: string;
  name: string;
  avatar: string;
  context: string;
  painPoints: string[];
  jtbd: string;
  idealOutcome: string;
}

export const REVIEW_PILOT_PERSONAS: ReviewPilotPersona[] = [
  {
    role: 'Head of Customer Experience',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    context: 'Manages multi-channel reputation across Google, App Store, and Trustpilot for a fast-scaling consumer brand.',
    painPoints: [
      'Overwhelmed switching between 5 different portals to monitor incoming customer reviews.',
      'Inconsistent response quality and tone across junior customer support reps.',
      'Lagging response times (>48 hrs) on 1-star reviews causing escalating customer churn.'
    ],
    jtbd: 'When public reviews are submitted, I want a single unified dashboard with AI-drafted contextual replies in our exact brand voice, so that we resolve grievances within minutes and protect our public trust score.',
    idealOutcome: 'Zero unaddressed negative reviews and sub-5 minute average response turnaround.'
  },
  {
    role: 'Lead Product Manager & Growth Lead',
    name: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    context: 'Drives mobile app store conversion, D30 user retention, and customer sentiment analytics.',
    painPoints: [
      'Cannot easily quantify which app release or feature bugs caused recent rating dips.',
      'Engineering teams dismiss anecdotal review complaints without aggregated frequency and sentiment data.',
      'Frustrated by low volume of organic 5-star reviews from happy, silent power users.'
    ],
    jtbd: 'When analyzing user feedback after a sprint release, I want NLP sentiment clustering and topic frequency breakdowns, so that I prioritize the highest-ROI bugs and roadmap features in our backlog.',
    idealOutcome: 'Real-time root cause visibility and an automated post-onboarding review boost trigger.'
  },
  {
    role: 'Multi-Location Operations Owner',
    name: 'David Miller',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    context: 'Operates 12 regional service clinics relying heavily on Google Maps and Local SEO rankings.',
    painPoints: [
      'Disproportionate volume of negative reviews from rare disgruntled visitors while happy clients rarely review.',
      'No time or technical skill to write personalized, professional responses to dozens of weekly reviews.',
      'Losing local search pack rankings to competitors with higher velocity of recent reviews.'
    ],
    jtbd: 'When clients have a positive service appointment, I want an automated SMS review invite sent seamlessly, so that our local Google rating stays above 4.8★ without manual operational overhead.',
    idealOutcome: '+40% monthly surge in verified local 5-star reviews and automated positive brand reinforcement.'
  }
];

export const REVIEW_PILOT_DECISIONS: CaseStudyDecision[] = [
  {
    topic: 'Human-in-the-Loop AI vs Fully Autonomous Auto-Reply',
    problem: 'Allowing LLMs to auto-publish live public replies without human review risks brand embarrassment, hallucinated discount promises, or robotic generic replies.',
    decision: 'Built a 1-Click "Smart Approval Inbox" with pre-generated contextual reply options (Empathetic, Professional, Concise, Resolution-Focused), editable with inline keystrokes before 1-tap publishing.',
    rationale: 'Retains 90% of time savings while guaranteeing 100% brand safety and authentic human oversight.',
    expectedOutcome: '-78% reduction in response time while maintaining 0 PR policy violations.',
    status: 'Core Architectural Principle'
  },
  {
    topic: 'Smart Sentiment Routing vs Google Anti-Gating Policies',
    problem: 'Google and Apple strictly forbid review gating (forcing only happy users to review sites while blocking unhappy ones from leaving public reviews).',
    decision: 'Designed a transparent 2-path feedback experience: all users receive direct links to review platforms, but dissatisfied customers are first offered an immediate 1-tap VIP direct manager resolution channel.',
    rationale: 'Solves the root friction for frustrated customers instantly before they feel compelled to post angry public reviews, while staying 100% compliant with platform policies.',
    expectedOutcome: '+42% positive review conversion with zero risk of Play Store / Google Business suspension.',
    status: 'Verified Compliance Model'
  },
  {
    topic: 'Granular Root-Cause Topic Clustering vs Generic Sentiment Score',
    problem: 'A basic positive/negative sentiment breakdown does not tell product teams or store managers WHY customers are unhappy.',
    decision: 'Developed an NLP entity and topic extraction model that tags reviews with sub-categories (e.g. "App Crash v2.4", "Billing Double-Charge", "Delivery Delay", "Staff Courtesy").',
    rationale: 'Turns subjective text comments into actionable quantitative Jira/Linear issue priorities for product sprints.',
    expectedOutcome: 'Directly linked negative sentiment drop to resolved engineering bug fixes within 1 sprint.',
    status: 'Verified Product Feature'
  },
  {
    topic: 'Multi-Channel Webhook Ingestion vs Scraping',
    problem: 'Scraping review sites causes fragile breakages, IP throttling, and latency spikes.',
    decision: 'Implemented official OAuth and Webhook integrations with Google My Business API, Apple App Store Connect API, Google Play Developer API, and Trustpilot Partner API, with a fallback scheduled poller.',
    rationale: 'Provides real-time sub-minute event delivery and verified review authenticity tokens.',
    expectedOutcome: '99.9% ingestion reliability and sub-60s notification delivery for critical 1-star reviews.',
    status: 'Production Architecture'
  }
];

export const REVIEW_PILOT_RICE_MATRIX = [
  {
    feature: 'Unified Multi-Channel Review Inbox',
    reach: '100% of users',
    impact: 'Massive (3.0)',
    confidence: '95% (0.95)',
    effort: '3 Person-Weeks',
    riceScore: '95.0',
    phase: 'MVP (P0)',
    status: 'Shipped & Validated'
  },
  {
    feature: 'AI Smart Reply Generator (4 Brand Tones)',
    reach: '92% of reviews',
    impact: 'High (2.5)',
    confidence: '90% (0.90)',
    effort: '2 Person-Weeks',
    riceScore: '103.5',
    phase: 'MVP (P0)',
    status: 'Shipped & Validated'
  },
  {
    feature: 'NLP Sentiment & Topic Root-Cause Analytics',
    reach: '75% of PM/Ops users',
    impact: 'High (2.0)',
    confidence: '85% (0.85)',
    effort: '3 Person-Weeks',
    riceScore: '42.5',
    phase: 'v1.1 (P1)',
    status: 'Shipped & Validated'
  },
  {
    feature: 'Automated SMS/Email Review Booster Sequences',
    reach: '100% of end-customers',
    impact: 'Massive (3.0)',
    confidence: '90% (0.90)',
    effort: '4 Person-Weeks',
    riceScore: '67.5',
    phase: 'v1.2 (P1)',
    status: 'Shipped & Validated'
  },
  {
    feature: 'Competitor Sentiment & Keyword Benchmarking',
    reach: '50% of strategic users',
    impact: 'Medium (1.5)',
    confidence: '80% (0.80)',
    effort: '2 Person-Weeks',
    riceScore: '30.0',
    phase: 'v2.0 (P2)',
    status: 'Beta Preview'
  }
];

export const HD_VIDEO_DOWNLOADER_DATA = {
  title: 'HD Video Downloader — Monetization Transformation',
  appName: 'VidFetch: Downloader & Player',
  category: 'Product & Feature Work · Monetization · Consumer Mobile',
  overview: 'VidFetch: Downloader & Player is an Android utility app that enables users to download videos from supported websites and social platforms for offline viewing. It also functions as a media player and download manager, with privacy and file-management features.',
  tools: ['Firebase', 'GA4', 'BigQuery', 'AdMob Mediation', 'SQL'],
  myRole: ['Ad Strategy', 'Experiment Design', 'Funnel Analysis', 'Paywall Design'],
  competencies: ['Monetization Transformation', 'Paywall Optimization', 'Revenue Growth', 'User Value Focused'],
  
  // Section 01: Problem Statement
  problemStatement: {
    sectionNum: '01',
    title: 'Problem Statement',
    subtitle: 'Diagnosing Hidden Friction in the Ad Pipeline',
    points: [
      {
        title: 'Low Ad Inventory Utilization & Inconsistent eCPM',
        desc: 'Unstable single-network AdMob waterfall without competitive bidding resulted in depressed CPM floors and volatile monthly revenue swings.'
      },
      {
        title: 'High Onboarding Exits & Back Actions',
        desc: 'New users became confused during their first app session, triggering high bounce rates before ever reaching core download and media playback flows.'
      },
      {
        title: 'Placement Show Rate & Delivery Bottlenecks',
        desc: 'Ad calls were frequently dropped or delivered with latency, leading to sub-30% show rates and missed impression opportunities.'
      }
    ]
  },

  // Section 02: What I Did (End-to-End)
  resolutions: [
    {
      step: '1',
      title: 'Diagnosed Funnel + Ad Delivery Issues (BigQuery)',
      bullets: [
        'Pulled granular funnel event logs into BigQuery to isolate exact drop-off steps during first-time user journey.',
        'Audited ad formats and placement IDs to identify which screens suffered from failed requests or unrendered inventory.',
        'Used analytical insights to prioritize high-impact screen interventions over blanket ad spam.'
      ]
    },
    {
      step: '2',
      title: 'Built Mediation to Improve Match + Revenue',
      bullets: [
        'Migrated basic AdMob setup into an optimized multi-network waterfall mediation structure with tier-wise eCPM floors.',
        'Configured country-specific geo tiers and bidding strategies tailored to tier-1, tier-2, and tier-3 market yields.',
        'Maximized auction competition and bid density, leading to higher fill rate and auction win yield.',
        'Engineered intelligent Preload and backfill caching routines to eliminate ad latency and show ads instantly upon trigger.'
      ]
    },
    {
      step: '3',
      title: 'Rebuilt Onboarding to Teach the Product (Activation)',
      bullets: [
        'Designed an interactive sample video download flow as the very first user experience.',
        'Delivered step-by-step interactive tooltips teaching core actions: Download, Play, Cancel, and Skip.',
        'Dramatically lowered cognitive load and eliminated confusion that previously caused immediate bounces.'
      ]
    },
    {
      step: '4',
      title: 'Added "Thank You / Success" Moment (Better Timing for Ads)',
      bullets: [
        'Introduced a dedicated completion screen right after successful sample and real downloads.',
        'Reinforced the core utility value and key app features while still providing a clear, frictionless exit.',
        'Created a natural, respectful psychological pause to present Interstitial and Native ads without interrupting active tasks.'
      ]
    },
    {
      step: '5',
      title: 'Placement Strategy + Frequency Logic',
      bullets: [
        'Implemented a screen-count trigger (displaying an ad after ~2 natural screen transitions).',
        'Placed a high-intent Interstitial at download completion when user satisfaction is at its peak.',
        'Expanded embedded native placements inside download lists and file manager views for organic non-intrusive impression yield.'
      ]
    }
  ],

  // Section 03: Goals
  goals: [
    { label: 'Lift ARPDAU by 15%+', desc: 'Achieve sustainable daily revenue expansion per active user without hurting retention.' },
    { label: 'Hold D7 Retention Flat or Better', desc: 'Ensure ad monetization changes do not degrade 7-day cohort retention.' },
    { label: 'Reduce Ad-Related Uninstalls', desc: 'Eliminate jarring popup interruptions that trigger negative store reviews and uninstalls.' }
  ],

  // Section 04 & 05: Results (Sep vs Jan)
  results: {
    timeframe: 'September → January (Post-Optimization Cohort)',
    revenueAndEngagement: [
      { label: 'Estimated Interstitial Earnings', baseline: '$1,463.39', post: '$4,135.48', change: '+182.6%', isPositive: true },
      { label: 'Daily Ad Viewers (DAV)', baseline: '5,697', post: '9,232', change: '+87%', isPositive: true },
      { label: 'Ad Viewer Rate', baseline: '30.52%', post: '57.33%', change: '+88%', isPositive: true },
      { label: 'Impressions / Active User', baseline: '0.95', post: '2.46', change: '+157%', isPositive: true }
    ],
    deliveryAndPricing: [
      { label: 'Match Rate (Interstitial)', baseline: '85.32%', post: '84.21%', change: 'Stable (-1.1%)', isPositive: true },
      { label: 'Show Rate (Interstitial)', baseline: '29.20%', post: '41.42%', change: '+41.8% Lift', isPositive: true },
      { label: 'Observed eCPM (Interstitial)', baseline: '$4.28', post: '$5.09', change: '+19%', isPositive: true },
      { label: 'Native eCPM', baseline: '$0.30', post: '$0.42', change: '+40%', isPositive: true }
    ],
    metricsTable: [
      { metric: 'Daily Ad Viewers (DAV)', sep: '5,697', jan: '9,232', change: '+87%' },
      { metric: 'Impressions / Active User', sep: '0.95', jan: '2.46', change: '+157%' },
      { metric: 'Ad Viewer Rate', sep: '30.52%', jan: '57.33%', change: '+88%' },
      { metric: 'Interstitial eCPM', sep: '$4.28', jan: '$5.09', change: '+19%' },
      { metric: 'Native eCPM', sep: '$0.30', jan: '$0.42', change: '+40%' },
      { metric: 'Match Rate (Interstitial)', sep: '85.32%', jan: '84.21%', change: 'Stable' },
      { metric: 'Show Rate (Interstitial)', sep: '29.20%', jan: '41.42%', change: '+41.8% (Up)' }
    ]
  },

  // Section 06: Metrics Tracked
  metricsTracked: [
    { name: 'ARPDAU', definition: 'Average Revenue Per Daily Active User — Topline monetization efficiency indicator.' },
    { name: 'Ads per DAU', definition: 'Average ad impression exposure volume per unique daily active user.' },
    { name: 'Rewarded Opt-In Rate', definition: 'Percentage of users choosing to watch rewarded ads for premium features.' },
    { name: 'D1 / D7 Retention', definition: 'Cohort retention guardrails monitoring long-term user health & satisfaction.' },
    { name: 'Ad Viewer Rate', definition: 'Proportion of total active users who successfully viewed at least 1 ad impression.' },
    { name: 'Impression / AV', definition: 'Impression density per active ad viewer.' },
    { name: 'Impression / AU', definition: 'Average impression distribution across the broader active user base.' }
  ],

  // Section 07: Why It Worked
  whyItWorked: [
    {
      title: 'Better Fill & Pricing',
      desc: 'Mediation + geo-specific eCPM tiers increased auction competitiveness, improved bid pressure, and stabilized delivery across diverse geographic markets.'
    },
    {
      title: 'Better User Understanding & Activation',
      desc: 'Sample onboarding reduced early bounce rates and taught key mechanics, enabling significantly more users to reach natural monetizable moments.'
    },
    {
      title: 'Better Timing & Respectful Placement',
      desc: 'Success + post-download moments drastically elevated show rate without creating disruptive or intrusive random interruptions.'
    }
  ],

  // Section 08: Key Learnings
  learnings: [
    {
      title: 'Onboarding directly powers monetization',
      desc: 'Activation is the true top of the monetization funnel. When users understand how to use the app, they engage deeper and unlock natural ad moments.'
    },
    {
      title: 'Show rate is a product UX problem',
      desc: 'Show rate improves far more through contextual timing and psychological satisfaction moments than from simply inserting more ad slots.'
    },
    {
      title: 'Mediation configuration is a core product lever',
      desc: 'Auction participation, floor tuning, and preload buffering are just as impactful on ARPDAU as in-app feature design.'
    }
  ]
};

export const MP3_CONVERTER_DATA = {
  id: 'mp3-converter',
  appTitle: 'MP3 Converter — Audio Toolkit & Media Suite',
  category: 'Product Strategy · Growth & Retention · Monetization Transformation',
  timeline: 'Discovery, UX Redesign & 90-Day Monetization Scale',
  
  // Shared Tools & Skills
  tools: [
    'Firebase Analytics',
    'GA4',
    'BigQuery',
    'Looker Studio',
    'Google Play Console',
    'SQL',
    'AdMob Mediation',
    'A/B Testing'
  ],
  myRole: [
    'End-to-End Retention Ownership',
    'Funnel & Cohort Diagnostics',
    'A/B Experiment Design',
    'Mediation & Auction Tuning',
    'Product Backlog Prioritization',
    'Post-Launch Tracking'
  ],
  competencies: [
    'User Retention Strategy',
    'Monetization Transformation',
    'Workflow Consolidation',
    'A/B Experimentation',
    'Ad Inventory Optimization'
  ],

  // Study 1: Improving Retention & Engagement in MP3 Converter
  retentionStudy: {
    title: 'Improving Retention & Engagement in MP3 Converter',
    subtitle: 'Diagnosing high first-session drop-offs, untangling multi-screen editing friction, and prioritizing a P0-P2 product roadmap.',
    badge: 'Product & Feature Work',
    intro: 'MP3 Converter is an audio editing application that allows users to convert videos into audio files and perform audio editing operations such as trimming, merging, speed control, voice changing, and audio extraction. Although the app had a broad feature set, user retention and engagement remained lower than expected. The objective was to identify user friction points and improve overall product experience to increase retention and engagement.',
    
    // My Role Description
    myRoleDetail: 'As the Product Manager, I owned the end-to-end retention improvement initiative. My responsibilities included: Identifying retention and engagement issues through data analysis. Conducting funnel analysis to identify drop-off points. Analyzing user reviews and customer feedback. Benchmarking competitors and identifying feature gaps. Prioritizing product improvements based on impact and effort. Collaborating with design and engineering teams to implement solutions. Designing and evaluating A/B tests. Tracking post-launch performance and success metrics.',

    // Section 01: Problem Statement
    problemStatement: {
      sectionNum: '01',
      title: 'Problem Statement',
      desc: 'The application had multiple powerful features but users were not returning after their first few sessions.',
      challenges: [
        'Low Day 1 retention (11%)',
        'Low engagement time',
        'Feature discovery issues',
        'Poor monetization experience',
        'High first-session drop-offs'
      ],
      goal: 'Identify why users were leaving and improve the overall user journey.'
    },

    // Section 02: User / Business Problem
    userBusinessProblem: {
      sectionNum: '02',
      title: 'User / Business Problem',
      userProblems: [
        'Users saw ads before experiencing product value.',
        'Important features were difficult to find.',
        'Missing functionality such as search, sorting, folder management, and multi-select.',
        'Editing workflows were fragmented across multiple screens.',
        'Premium features were heavily restricted.'
      ],
      businessProblems: [
        'Low retention reduced long-term user value (LTV).',
        'Lower engagement impacted ad revenue.',
        'Poor feature adoption limited monetization opportunities.',
        'User dissatisfaction increased churn risk.'
      ]
    },

    // Section 03: Goals
    goals: {
      sectionNum: '03',
      title: 'Goals & Success Criteria',
      items: [
        'Increase Day 1, D3, D7 Retention',
        'Improve Feature Adoption',
        'Improve User Engagement Time',
        'Increase Rewarded Ad Usage',
        'Improve User Experience',
        'Reduce First Session Drop-off',
        'Reduce Drop of most used functionality'
      ]
    },

    // Section 04: Research & Analysis
    researchAnalysis: {
      sectionNum: '04',
      title: 'Research & Analysis',
      intro: 'To understand the causes behind low retention and engagement, I conducted a comprehensive product analysis.',
      pillars: [
        {
          name: 'Funnel Analysis',
          desc: 'Analyzed the complete user journey from installation to feature usage: Install → Splash → Home → Feature Usage → Exit. The largest drop-off occurred immediately after users landed on the home screen.'
        },
        {
          name: 'User Review Analysis',
          desc: 'Reviewed Play Store feedback and identified recurring complaints around: Excessive advertisements, Poor navigation, Missing functionality, and Difficult feature discovery.'
        },
        {
          name: 'Competitor Analysis',
          desc: 'Studied leading audio editing and MP3 conversion applications. Key observations: Better onboarding experiences, Cleaner interfaces, Integrated editing workflows, Strong rewarded ad strategies, and Advanced file management capabilities.'
        },
        {
          name: 'Feature Usage Analysis',
          desc: 'Tracked feature adoption and identified that users primarily engaged with: Video to Audio, Trim Audio, Merge Audio, and Voice Changer. Several valuable features existed but had poor visibility.'
        },
        {
          name: 'Screen Engagement Analysis',
          desc: 'Evaluated engagement metrics across screens. Findings indicated: High exit rates on the home screen, Low discoverability of frequently used features, and Friction in editing workflows.'
        },
        {
          name: 'Technical Investigation',
          desc: 'Analytics indicated video playback failures for certain media formats and codecs, negatively impacting engagement and retention.'
        }
      ]
    },

    // Section 05: Solution
    solution: {
      sectionNum: '05',
      title: 'Solution (7 Product Interventions)',
      initiatives: [
        {
          title: 'Improved First Session Experience',
          desc: 'Removed aggressive first-session ad exposure. Instead of showing ads immediately after splash, users were allowed to complete meaningful actions before seeing advertisements.'
        },
        {
          title: 'Home Screen Optimization',
          desc: 'Redesigned the home screen based on feature usage data. Changes included: Better feature hierarchy, Improved iconography, Improved color system, and Better placement of high-usage features. An A/B test was conducted and the redesigned version outperformed the existing version.'
        },
        {
          title: 'Missing Core Productivity Features',
          desc: 'Added capabilities frequently requested by users: Multi-select, Search, Sorting, Folder Management, Grid View, and List View.'
        },
        {
          title: 'Unified Audio Editing Workflow',
          desc: 'Introduced an integrated audio editing experience where users could: Extract audio, Merge tracks, Change voice, Modify speed, Change pitch, Add reverb, Apply fade-in/fade-out, Replace audio, and Record audio within a single workflow.'
        },
        {
          title: 'Monetization Optimization',
          desc: 'Introduced a hybrid monetization model: Free Usage → Rewarded Ad OR → Premium Upgrade. This reduced user friction while maintaining monetization opportunities.'
        },
        {
          title: 'Playback Reliability Improvements',
          desc: 'Collaborated with engineering teams to improve support for additional video formats and codecs. This reduced playback failures and improved overall user experience.'
        },
        {
          title: 'Localized Re-engagement Strategy',
          desc: 'Implemented country-specific push notification schedules to improve re-engagement without increasing spam.'
        }
      ]
    },

    // Section 06: Prioritization
    prioritization: {
      sectionNum: '06',
      title: 'Initiative Prioritization Matrix',
      matrix: [
        { initiative: 'Delay First Session Ads', impact: 'High', effort: 'Low', priority: 'P0' },
        { initiative: 'Home Screen Redesign', impact: 'High', effort: 'Medium', priority: 'P0' },
        { initiative: 'Search & Sorting', impact: 'High', effort: 'Low', priority: 'P0' },
        { initiative: 'Multi-Select Support', impact: 'High', effort: 'Medium', priority: 'P0' },
        { initiative: 'Rewarded Ads Expansion', impact: 'High', effort: 'Medium', priority: 'P1' },
        { initiative: 'Unified Editing Workflow', impact: 'Very High', effort: 'High', priority: 'P1' },
        { initiative: 'Playback Reliability', impact: 'Medium', effort: 'Medium', priority: 'P1' },
        { initiative: 'Notification Optimization', impact: 'Medium', effort: 'Low', priority: 'P2' }
      ]
    }
  },

  // Study 2: MP3 Converter — Monetization & Product Transformation
  monetizationStudy: {
    title: 'MP3 Converter — Monetization & Product Transformation',
    subtitle: 'Reframing a single-purpose utility into a light media toolkit — expanding use cases, lifting session depth, and unlocking new ad inventory.',
    badge: 'Product Transformation • Monetization',
    summary: 'Took a single-purpose utility and reframed it as a light media toolkit — expanding use cases, lifting session depth, and unlocking new ad inventory.',
    
    // Quick Metrics Highlights from page 1 & 4 of PDF
    heroMetrics: [
      { label: 'Total Revenue', value: '~2.5X', subtitle: '90-day post-transformation' },
      { label: 'ARPU Growth', value: '~3X', subtitle: 'Average revenue per user' },
      { label: 'Auction Comp.', value: '72%', subtitle: '31% → 72% (2X Lift)' },
      { label: 'Ad Viewer Rate', value: '~58%', subtitle: 'Stable & engaged audience' },
      { label: 'Monthly Growth', value: '+47%', subtitle: 'Growth in monthly ad revenue' },
      { label: '60d Ad Revenue', value: '+38%', subtitle: 'In first 60 days of launch' }
    ],

    // Section 01: Problem Statement
    problemStatement: {
      sectionNum: '01',
      title: 'Problem statement',
      points: [
        'Strong traffic, but low monetization efficiency (low eCPM + revenue per user)',
        'Ads placed in low-intent screens → weak performance + poor "feel"',
        'Limited feature depth → lower engagement opportunities',
        'No structured event tracking → decisions weren\'t data-backed',
        'Generic UX not aligned with real user behavior'
      ]
    },

    // Section 02: Turning Point (Key Insight)
    turningPoint: {
      sectionNum: '02',
      title: 'Turning point (key insight)',
      insight: 'After behavior analysis, the longest time spent was on editing / processing screens.',
      strategy: [
        'Place ads where users are already engaged and waiting',
        'Use high-intent moments (post-action) for full-screen formats',
        'Remove random interruptions'
      ]
    },

    // Section 03: Action Taken
    actionTaken: {
      sectionNum: '03',
      title: 'Action Taken',
      items: [
        'Implemented custom Firebase events for screen time, feature usage, and drop-offs.',
        'Moved ads to high-engagement/high-intent screens; introduced post-processing "required phase" ad flow.',
        'Ran Firebase A/B tests across format, timing, and UI placement.',
        'Improved UI/UX to reduce friction and improve ad visibility.',
        'Expanded features (compressor, fade, screen recorder, speed/volume, AI extraction, ringtone tools).',
        'Personalization by behavior segments.',
        'Optimized mediation + bidding to increase auction competition.'
      ]
    },

    // Section 04: What I Changed (End-to-End)
    whatIChanged: {
      sectionNum: '04',
      title: 'What I changed (end-to-end)',
      pillars: [
        {
          num: '1',
          title: 'Data tracking & analytics setup',
          bullets: [
            'Implemented custom Firebase events across the app.',
            'Tracked: Screen time, Feature usage, Drop-offs.',
            'Built a clear user journey to prioritize screens by intent + time spent.'
          ]
        },
        {
          num: '2',
          title: 'Ad placement optimization (biggest impact)',
          bullets: [
            'Shifted placements to high-engagement screens (editing / processing).',
            'Added a post-processing required phase ad flow (natural "waiting" moment).',
            'Removed low-performing placements.'
          ]
        },
        {
          num: '3',
          title: 'Experimentation (Firebase A/B testing)',
          bullets: [
            'Tested: Full screen Native vs interstitial, Before action vs after action, UI placement & spacing, Theme experiment, AD Flow.',
            'Selected winning variants using CTR + revenue.'
          ]
        },
        {
          num: '4',
          title: 'UX/UI improvements',
          bullets: [
            'Improved ad layout visibility while keeping the interface clean.',
            'Reduced friction between steps and improved feature navigation.'
          ]
        },
        {
          num: '5',
          title: 'Feature expansion (retention strategy)',
          bullets: [
            'Added features driven by market/user demand:',
            'Audio/video compressor, Fade in / fade out, Screen recorder, Speed & volume control, AI audio extraction from video, Ringtone customization, Multi tracking.'
          ]
        },
        {
          num: '6',
          title: 'Personalization',
          bullets: [
            'Used Firebase insights to segment behavior.',
            'Adjusted experience + ad exposure to keep acceptance stable.'
          ]
        },
        {
          num: '7',
          title: 'Ad tech optimization',
          bullets: [
            'Improved mediation + bidding setup to increase auction competition.'
          ]
        }
      ]
    },

    // Section 05: Results (90 days)
    results: {
      sectionNum: '05',
      title: 'Results (90 days)',
      summaryBullets: [
        'Total revenue: ~2.5X',
        'ARPU: ~3X',
        'Auction participation: 31% → 72% (2X)',
        'Ad viewer rate: ~58% (stable)'
      ],
      ecpmTable: [
        { format: 'Interstitial eCPM', before: '$1.12', after: '$2.36', change: '+110%' },
        { format: 'Banner eCPM', before: '$0.16', after: '$0.27', change: '+68%' },
        { format: 'Rewarded eCPM', before: '$2.29', after: '$5.59', change: '+144%' }
      ]
    }
  }
};

// Case Study: Lite Video Player — Preload-first Ads Mediation
export const LITE_VIDEO_PLAYER_DATA = {
  id: 'lite-video-player',
  title: 'Lite Video Player — Preload-first Ads Mediation',
  subtitle: 'Rebuilt the ad-loading model around a preload-first mediation strategy — improving fill rate, time-to-ad, and effective eCPM without raising ad density.',
  appName: 'Lite Video Player (Android)',
  category: 'Performance · Ad Mediation · Monetization & Growth',
  timeline: 'September baseline → Nov 30–Dec 30 (1 month results)',
  goal: 'Increase ad reliability, raise eCPM + impressions, and unlock monetization by bringing more users online.',
  tools: ['AdMob Mediation', 'Firebase', 'BigQuery', 'Kotlin', 'Vungle', 'Pangle', 'Unity Ads', 'AppLovin MAX'],
  role: 'Lead Monetization & Ad Tech Product Manager',
  pillars: [
    'Preload-First Ad System',
    'Auction Mediation & A/B Testing',
    'Native eCPM Prioritized Rotation',
    'Offline-to-Online Expansion'
  ],
  headlineMetrics: [
    { label: 'Revenue Growth', value: '~2.65x', subtext: '$12,372 → $32,740 / mo' },
    { label: 'Interstitial Rev', value: '+4.8x', subtext: '$3,879 → $18,556' },
    { label: 'Interstitial eCPM', value: '+2.1x', subtext: '$15.17 → $31.25' },
    { label: 'Fill Rate Lift', value: '+35%', subtext: 'Across all device tiers' },
    { label: 'Time-to-Ad', value: '-25%', subtext: 'Latency reduced' },
    { label: 'App Open Rev', value: '+2.8x', subtext: '$1,280 → $3,605' }
  ],
  overview: 'Lite Video Player (Android) is an offline-first local video player with a growing online layer (Shorts, online subtitles). In September, monetization suffered from ad show-time drop-offs, single-source demand volatility, and an offline ceiling (~40% users offline). Rebuilt the architecture around a preload-first waterfall mediation pipeline with resilient fallback trees, prioritized native rotation, and online feature nudges — achieving ~2.65X revenue growth ($12,372 to $32,740) in a 30-day window.',
  
  startingPoint: {
    sectionNum: '02',
    title: 'Starting point (September) — what was the issue?',
    issues: [
      {
        num: '1',
        title: 'Ads frequently failed at show-time',
        bullets: [
          'Many ad attempts depended on a fresh load exactly when the placement needed to show.',
          'When load failed or returned late, the app missed the impression and the user moved on.'
        ]
      },
      {
        num: '2',
        title: 'No "always-ready" ad supply system',
        bullets: [
          'The app lacked a persistent mechanism to keep full-screen ads ready across screens.',
          'Navigation transitions between library, folder browse, and playback caused dropped ad opportunities.'
        ]
      },
      {
        num: '3',
        title: 'Offline usage capped monetization',
        bullets: [
          '~40% users were often offline, reducing ad opportunities (requests/fills/impressions).',
          'Offline playback sessions produced zero ad revenue despite heavy time-in-app.'
        ]
      }
    ]
  },

  whatIBuilt: {
    sectionNum: '03',
    title: 'What I built (solution)',
    subsections: [
      {
        num: '1',
        title: 'Preload-first ad system across the app (core fix)',
        strategy: 'Keep an ad preloaded and ready before the app reaches the moment it wants to show.',
        implementationFlow: [
          { step: 'Preload on Splash', desc: 'Primary supply initiated immediately during app boot.' },
          { step: 'Backfill ad request', desc: 'Triggered if the primary preload is unavailable at transition.' },
          { step: 'High-intent fallback entry', desc: 'If backfill is not available, allow instant entry into the app and trigger background load on the next high-intent action click.' },
          { step: 'Active pipeline loop', desc: 'Keep the pipeline persistently active so a preloaded ad is always cached and ready for the next eligible moment.' }
        ],
        eligibilityRules: [
          'Time-based seconds check AND screen-count check',
          'Whichever threshold hits first triggers an eligible ad moment',
          'Decision order at show time: If preload available → show preload → Else show backfill → Else show full-screen native (fallback)'
        ]
      },
      {
        num: '2',
        title: 'Mediation for preload inventory + experimentation on ad sources',
        problem: 'Single-source demand wasn\'t consistent; performance varied across IDs and ad networks.',
        actions: [
          'Implemented mediation so multiple demand sources compete for the same placement (AdMob, Vungle, Pangle, Unity, AppLovin).',
          'Ran systematic A/B tests across IDs and waterfall configurations.',
          'Kept the best-performing configuration after the learning phase to maximize bid density.'
        ]
      },
      {
        num: '3',
        title: 'Native monetization system: multiple units + eCPM-prioritized rotation',
        actions: [
          'Maintained a list of 4 native units across feed and player UI.',
          'Prioritized showing higher eCPM native units dynamically.',
          'If native wasn\'t available → banner as backfill (avoiding blank or empty layout states).'
        ]
      },
      {
        num: '4',
        title: 'Placement + ad design iteration',
        actions: [
          'Improved where and when ads trigger (strict placement policy to avoid disruption).',
          'Iterated on native presentation to improve usability, deliverability, and organic CTR.'
        ]
      },
      {
        num: '5',
        title: 'Bringing offline users online (unlocking monetizable sessions)',
        keyInsight: 'Offline usage was a hard ceiling on monetization.',
        shippedInitiatives: [
          'Added a bottom sheet explaining what users miss offline + concrete benefits of being online.',
          'Built a Shorts-like online content layer served dynamically from the backend with country-wise and category-wise curation.',
          'Introduced player improvements requiring internet: online subtitles search/download and enhanced cloud codec streaming.'
        ]
      }
    ]
  },

  results: {
    sectionNum: '04',
    title: 'Results (Sep vs Nov 30–Dec 30)',
    totalSep: '$12,372',
    totalDec: '$32,740',
    growthFactor: '~2.65x',
    revenueByFormat: [
      { format: 'Interstitial (Primary Growth Driver)', sep: '$3,879.95', dec: '$18,556.03', growth: '~4.8x', ecpmBefore: '$15.17', ecpmAfter: '$31.25', ecpmGrowth: '~2.1x', isHero: true },
      { format: 'Banner', sep: '$6,577.16', dec: '$8,721.99', growth: '~1.3x', ecpmBefore: '$0.42', ecpmAfter: '$0.58', ecpmGrowth: '+38%', isHero: false },
      { format: 'App Open', sep: '$1,280.24', dec: '$3,605.38', growth: '~2.8x', ecpmBefore: '$12.32', ecpmAfter: '$20.53', ecpmGrowth: '+67%', isHero: true },
      { format: 'Native Advanced', sep: '$607.80', dec: '$1,835.14', growth: '~3.0x', ecpmBefore: '$2.07', ecpmAfter: '$1.48', ecpmGrowth: 'Volume Lift', isHero: false, note: 'eCPM down, but delivery + total revenue increased via better availability/rotation and fallbacks' },
      { format: 'Rewarded', sep: '$27.05', dec: '$21.29', growth: 'Stable', ecpmBefore: '$18.40', ecpmAfter: '$22.10', ecpmGrowth: '+20%', isHero: false }
    ],
    operationalWins: [
      'Higher fill rate across all device tiers (+35% Fill Rate)',
      'Time-to-ad latency reduced by -25%',
      'Improved eCPM with no change to user-perceived ad load'
    ]
  },

  whyItWorked: {
    sectionNum: '05',
    title: 'Why it worked (learnings)',
    learnings: [
      {
        title: 'Availability beats intent',
        desc: 'Preloading ensured ads existed before show-time, eliminating lost impressions caused by network jitter at transition moments.'
      },
      {
        title: 'Resilient fallback tree',
        desc: 'Preload → Backfill → Action-Trigger → Full-Screen Native / Banner backfill prevented empty monetization states across every device tier.'
      },
      {
        title: 'Auction competition matters',
        desc: 'Mediation + A/B testing increased the probability of higher-paying demand winning each impression slot.'
      },
      {
        title: 'Product unlock',
        desc: 'Online nudges and online Shorts content features reduced the offline ceiling and permanently expanded the monetizable surface.'
      }
    ]
  }
};

export const RAPIDO_CASE_STUDY_DATA = {
  header: {
    category: 'Mobility • Subscriptions',
    title: 'Rapido Commuter Pass — Solving Peak-Hour Ride Unavailability',
    appName: 'Rapido Two-Sided Marketplace & Commuter Pass',
    subtitle: 'Transforming ride-hailing from reactive booking to predictable daily commuting: tiered commuter passes with scheduled pickups, zero surge and a paired captain subscription that locks in supply at peak hours.',
    role: 'Mobile Product Manager (Android) — problem discovery, user research, pricing and plan design, rider + captain UX, roadmap and success metrics.',
    platform: 'Android (Kotlin / Jetpack Compose)',
    scope: 'Two-sided marketplace (Rider + Captain)',
    focus: 'Retention • Reliability • Subscriptions • Supply–demand optimization',
    tools: ['Figma', 'Jetpack Compose', 'Firebase', 'BigQuery', 'Razorpay', 'GrowthBook', 'Mixpanel']
  },

  snapshot: {
    metrics: [
      { value: '+28%', label: 'DAU Lift', subtitle: 'Commuter cohort' },
      { value: '+35%', label: 'D7 Retention', subtitle: '15% → 45% (pass vs control)' },
      { value: '₹280Cr', label: 'Revenue (Y1)', subtitle: 'Modeled run-rate (~60k subs)' },
      { value: '60%', label: 'Captain Retention', subtitle: 'Churn down 60% → 25%' }
    ],
    disclaimer: 'All metrics in this case study are hypothetical / modeled, based on portfolio project assumptions and referenced sources (Play Store, company reports, mobility reports).'
  },

  executiveSummary: {
    trajectory: [
      { month: 'M3', subscribers: '~10k', revenue: '₹5 Cr' },
      { month: 'M6', subscribers: '~25k', revenue: '₹12 Cr' },
      { month: 'M9', subscribers: '~35k', revenue: '₹18 Cr' },
      { month: 'M12', subscribers: '~60k', revenue: '₹28 Cr' }
    ],
    problem: '25% D7 churn for daily commuters, 20–30% peak-hour cancellations, riders juggle 3+ apps so loyalty erodes.',
    solution: 'Tiered commuter passes (Daily / Weekly / Monthly) with scheduled pickups, recurring slots, fixed pricing (zero surge) and a paired captain subscription to guarantee supply.',
    impact: '+28% DAU, +35% D7 retention, ₹280Cr revenue, 60% captain retention — break-even by Month 8.'
  },

  aboutRapido: {
    overview: 'Rapido is a leading Indian bike-taxi and last-mile mobility platform (founded 2015, Bangalore). It operates across 100+ cities with bike taxis, autos and cabs — optimized for quick, low-cost short trips.',
    scale: '100M+ app downloads · 4.2★ Play Store rating · 10M daily rides · 3× YoY growth',
    strengths: [
      'Affordable ~₹25/km, fast in traffic',
      'Wide captain network across 100+ cities',
      'Strong brand in Tier-2/3 markets'
    ],
    weaknesses: [
      'Availability fails at 8–10 AM peak (~30% no-driver)',
      'No subscription → no recurring loyalty hook',
      'Surge frustrates daily, price-sensitive users'
    ]
  },

  competitiveLandscape: {
    tagline: 'No one owns the daily-commute subscription.',
    comparison: [
      { feature: 'Subscription model', rapidoToday: 'None', olaPostpaid: 'Postpaid wallet', uberPass: 'Monthly discount', commuterPass: 'Tiered + scheduled' },
      { feature: 'Peak-hour fix', rapidoToday: 'Surge / wait', olaPostpaid: 'Surge', uberPass: 'Priority match', commuterPass: 'Captain commitment' },
      { feature: 'Fixed pricing', rapidoToday: 'No', olaPostpaid: 'Partial', uberPass: 'Discount only', commuterPass: 'Yes — zero surge' },
      { feature: 'Pre-scheduled rides', rapidoToday: 'No', olaPostpaid: 'Limited', uberPass: 'No', commuterPass: 'Yes (30-day window)' },
      { feature: 'Captain-side incentive', rapidoToday: 'Variable', olaPostpaid: 'Variable', uberPass: 'Variable', commuterPass: 'Captain subscription' },
      { feature: 'Target user', rapidoToday: 'On-demand', olaPostpaid: 'Frequent', uberPass: 'Corporate', commuterPass: 'Daily commuter' }
    ],
    opportunity: 'Opportunity: No competitor offers an affordable daily-commuter pass with guaranteed driver supply.'
  },

  problemDiscovery: {
    voiceOfCommuters: [
      { quote: 'Can’t get a bike during rush hour, late to office every Monday.', source: 'r/bangalore' },
      { quote: '4 apps open, whoever responds first wins. Loyalty is dead.', source: 'Play Store review' },
      { quote: 'Captain cancelled at 8:55 AM. Stand-up missed.', source: 'LinkedIn post' }
    ],
    cohortRetention: [
      { cohort: 'Daily commuters', d1: '40%', d3: '24%', d7: '15%', d14: '10%', d30: '7%' },
      { cohort: 'Casual riders', d1: '35%', d3: '28%', d7: '22%', d14: '18%', d30: '14%' }
    ],
    peakFailRates: [
      { time: '6 AM', failRate: '8%' },
      { time: '7 AM', failRate: '18%' },
      { time: '8 AM', failRate: '32%' },
      { time: '9 AM', failRate: '28%' },
      { time: '10 AM', failRate: '14%' },
      { time: '11 AM', failRate: '9%' },
      { time: '12 PM', failRate: '8%' },
      { time: '5 PM', failRate: '22%' },
      { time: '6 PM', failRate: '30%' },
      { time: '7 PM', failRate: '26%' },
      { time: '8 PM', failRate: '18%' },
      { time: '9 PM', failRate: '10%' }
    ],
    keyInsights: [
      'Peak-hour ride failure hits daily commuters hardest',
      'Reliability issues compound into habit break and app switching',
      '~25% of daily commuters churn by D7; ~30% switch apps after 2 failed bookings'
    ]
  },

  userPersonas: [
    {
      name: 'Corporate Priya (Primary)',
      age: 28,
      location: 'Bangalore',
      occupation: 'IT professional',
      goal: 'Predictable 8 AM commute to Whitefield.',
      frustrations: 'Surge pricing, late stand-ups, app-switching anxiety.',
      budget: '₹500–800/month',
      badge: 'Primary Rider'
    },
    {
      name: 'Student Arjun (Secondary)',
      age: 21,
      location: 'Mumbai',
      occupation: 'Engineering student',
      goal: 'Cheap, on-time rides to college 6 days/week.',
      frustrations: 'Tight budget, unreliable ETAs, no driver in monsoon.',
      budget: '₹200/week',
      badge: 'Secondary Rider'
    },
    {
      name: 'Shift-worker Divya (Tertiary)',
      age: 35,
      location: 'Pune',
      occupation: 'Nurse on rotating shifts',
      goal: 'Flexible booking around shift changes.',
      frustrations: 'Plans expire, late-night cancellations, safety.',
      budget: '₹400/month',
      badge: 'Tertiary Rider'
    }
  ],

  userResearch: {
    jtbd: 'When I leave home for work, I want a guaranteed bike at a predictable price, so I arrive on time without juggling multiple apps.',
    stats: [
      { statement: 'Want guaranteed pickup', agreement: '82%' },
      { statement: 'Want fixed pricing', agreement: '76%' },
      { statement: 'Use 2+ ride apps daily', agreement: '68%' },
      { statement: 'Willing to pre-pay monthly', agreement: '54%' },
      { statement: 'Tried & quit a ride app', agreement: '41%' }
    ],
    methodology: [
      '50 in-depth interviews (Bangalore, Mumbai, Pune)',
      '200 survey responses',
      '12 captain shadow-rides during the 8–10 AM peak',
      '30-day diary study with 8 daily commuters'
    ]
  },

  rootCauseAnalysis: {
    overview: 'Peak-hour failure is a supply–demand mismatch. Solving only the rider side is half the answer — supply has to be locked in with a paired captain subscription.',
    matrix: [
      { dimension: 'Supply', factor: 'Part-time captains opt out at peak; No incentive to commit shifts' },
      { dimension: 'Demand', factor: 'Demand spikes 8–10 AM, 6–8 PM; Same time + same route daily' },
      { dimension: 'Product', factor: 'No scheduling primitive; Surge frustrates daily users' },
      { dimension: 'Captain economics', factor: '~40% idle time between rides; Earnings unpredictable' }
    ],
    chain: 'Chain: peak-hour ride failure → demand spike + supply drop-off + no scheduling primitive → lock in supply via paired captain subscription → scheduled commuter rides → predictable price and pickup → higher retention and a habit loop.'
  },

  solutionTiers: [
    {
      plan: 'Daily Pass',
      price: '₹89 / 7 days',
      includes: '1 ride/day, 10-min driver guarantee, zero surge',
      bestFor: 'Try before you commit',
      badge: 'Trial'
    },
    {
      plan: 'Weekly Pro',
      price: '₹499 / week',
      includes: '5 rides + 2 extra, 10-min guarantee, zero surge (Save 22%)',
      bestFor: '3–4 days/week riders',
      badge: 'Most Popular',
      isPopular: true
    },
    {
      plan: 'Monthly Max',
      price: '₹1,799 / month',
      includes: '20–60 rides, unlimited schedule, 10-min guarantee, zero surge (Save 30%)',
      bestFor: 'Daily commuters (5+ days)',
      badge: 'Best Value'
    }
  ],

  riderFlow: 'Sign up → Pick plan → Set route + recurring time → Get pre-ride alert → Captain arrives in 10 minutes.',

  captainSideSolution: {
    title: 'Paired Captain Subscription & Income Security',
    painPoints: 'Unpredictable demand, idle off-peak hours, cancellations from low incentives, income uncertainty',
    tiers: [
      { tier: '7-Day (Flexible)', bonus: 'Completion bonus ₹400 + peak ₹30/ride' },
      { tier: '15-Day (Balanced)', bonus: 'Completion bonus ₹900 + peak ₹30/ride' },
      { tier: '30-Day (Pro)', bonus: 'Completion bonus ₹1,500 + peak ₹30/ride' }
    ],
    value: 'Pre-assigned rides, ₹180–220 guaranteed per ride, 30% peak bonus, insurance, clear cancellation penalties, more stable weekly income.'
  },

  uiScreens: [
    { num: 1, name: 'Home Screen', desc: 'Commuter Pass quick banner & Set Schedule entry point' },
    { num: 2, name: 'Ride Selection', desc: 'Ride options with "Save more with Commuter Pass" upsell card' },
    { num: 3, name: 'Choose Your Plan', desc: 'Tier comparison (Daily ₹89, Weekly ₹499, Monthly ₹1,799)' },
    { num: 4, name: 'Schedule Your Ride', desc: 'Recurring pickup time (7:30, 8:00, 8:30 AM) and Mon–Fri repeat' },
    { num: 5, name: 'Ride Confirmation', desc: 'Active pass lock, pre-ride alert trigger, and 10-min arrival guarantee' }
  ],

  twoSidedEconomics: {
    summary: 'The rider pass and captain shift plan lock into each other: riders commit a schedule (predictable demand), captains commit slots (predictable supply). Fewer booking failures and fewer cancellations lift retention on both sides, compounding into higher LTV and recurring revenue.',
    bookingFailuresDelta: '-42% booking failures',
    driverUtilizationDelta: '+22% driver utilization'
  },

  roadmap: [
    { phase: 'Build & Beta', timing: 'Q1 (M1–2)', goals: 'Subscription backend + billing, Android app v2, 500 closed-beta users' },
    { phase: 'Bangalore Pilot', timing: 'Q2 (M3)', goals: 'A/B test vs control, 2,000 subscribers + 500 captains, NPS / retention / unit-econ' },
    { phase: 'Regional Expansion', timing: 'Q2–Q3 (M4–6)', goals: '10 cities (Mumbai, Pune, Hyderabad…), 25K subscribers, B2B corporate deals' },
    { phase: 'National Scale', timing: 'Q4 (M7+)', goals: 'All Tier-1 + Tier-2, 150K+ subscribers, vernacular language support' }
  ],

  revenueSplit: [
    { stream: 'User subscriptions', share: '64%' },
    { stream: 'Captain subscriptions', share: '21%' },
    { stream: 'Transaction fees', share: '14%' }
  ],

  tradeoffsAndLearnings: {
    tradeoffs: [
      { name: 'Higher CAC', desc: 'Guarantees + first-month discount inflate acquisition cost; modeled to offset via 8:1 LTV:CAC by M9.' },
      { name: 'Refund liability', desc: 'The 10-min guarantee carries 25% refund risk; cap exposure at 2% of revenue via strict SLOs.' },
      { name: 'Regulatory exposure', desc: 'Bike-taxi laws vary by state; pilot in compliant zones first (Karnataka, Maharashtra).' },
      { name: 'Captain commitment risk', desc: 'Locking shifts reduces flexibility; mitigate with weekly opt-in tiers.' }
    ],
    learnings: [
      { title: 'Solve both sides', desc: 'Demand-side products fail without locked-in supply.' },
      { title: 'Schedule beats surge', desc: 'Predictability is the premium for daily commuters.' },
      { title: 'Vernacular wins Tier-2', desc: 'Hindi/Tamil/Kannada onboarding lifted activation +22%.' },
      { title: 'Captain econ = retention', desc: 'Driver subscriptions reduce churn 60% → 25%.' }
    ]
  }
};

export const SWIGGY_CASE_STUDY_DATA = {
  header: {
    category: 'Product Strategy • Case Study',
    title: 'Swiggy Instamart — From Grocery Delivery to Meal Decision Engine',
    appName: 'Swiggy Instamart Meal Decision Engine',
    subtitle: 'Strategy case study reframing Instamart from a grocery-delivery utility into a meal decision engine — with concrete product bets.',
    role: 'Product Manager (Case Study & Strategy)',
    tools: ['Notion', 'Figma', 'User Research', 'Product Strategy', 'Predictive AI', 'Shoppable Video']
  },

  aboutProduct: {
    overview: 'Swiggy Instamart is one of India\'s largest quick-commerce platforms, enabling grocery delivery in 10–30 minutes across major cities.',
    challenge: 'While Instamart successfully solved the problem of delivery speed, user retention remained limited because customers primarily used the platform reactively—only when they ran out of groceries.',
    question: 'How might we transform Instamart from an emergency grocery utility into a daily-use habit-forming platform?'
  },

  problemDiscovery: {
    researchMethods: 'Analysis of Reddit discussions, App Store reviews, Twitter conversations, Competitor benchmarking (Blinkit, Zepto), User interviews, and Behavioral segmentation.',
    keyInsight: 'Users don\'t struggle with grocery delivery. Users struggle with deciding: "What should I cook today?" The biggest friction occurs before groceries are purchased.'
  },

  painPoints: [
    {
      num: 1,
      title: 'Decision Fatigue',
      desc: 'Users spend more time deciding what to cook than actually ordering groceries.'
    },
    {
      num: 2,
      title: 'Fragmented Shopping',
      desc: 'Every shopping session starts from scratch. No memory. No context. No recommendations.'
    },
    {
      num: 3,
      title: 'Forgotten Essentials',
      desc: 'Milk. Eggs. Bread. Users frequently place reactive orders because they forget daily staples.'
    },
    {
      num: 4,
      title: 'Cook vs Order Conflict',
      desc: 'Many users want to cook at home but ultimately default to food delivery apps due to sheer planning friction.'
    }
  ],

  userPersonas: [
    {
      name: 'Rahul, 27',
      role: 'Software Engineer',
      location: 'Bangalore · Solo',
      painPoint: 'Works 10+ hrs/day, orders food 5x/week, wants to cook but has no plan, defaults to Swiggy Food by 9pm.',
      needs: 'Zero-effort meal decisions, one-tap recipe → cart, weekend bulk order.',
      badge: 'Busy Professional'
    },
    {
      name: 'Priya, 34',
      role: 'Working Mother',
      location: 'Mumbai · Family of 4',
      painPoint: 'Plans meals for 4, juggles work + kids, hates last-minute grocery runs, kids reject same dish twice.',
      needs: 'Weekly meal + grocery planner, dietary filters, scheduled morning delivery.',
      badge: 'Household Planner'
    },
    {
      name: 'Ramesh, 52',
      role: 'Retired Manager',
      location: 'Bhopal · With spouse',
      painPoint: 'Cooks daily, shops weekly, low tech literacy, prefers familiar Indian meals, struggles with deep menus.',
      needs: 'Simple voice/text, refill reminders for staples, large fonts, weekly basket.',
      badge: 'Traditional Shopper'
    },
    {
      name: 'Ananya, 22',
      role: 'College Student',
      location: 'Pune · PG with flatmates',
      painPoint: 'Tiny kitchen + tiny budget, eats alone, scrolls reels, impulsive snack orders at 11pm.',
      needs: 'Reels-to-cart in one tap, single-serving portions, 100 quick-meal kits.',
      badge: 'Student / Gen-Z'
    }
  ],

  productVision: {
    statement: 'Transform Instamart from a grocery delivery app into a meal planning and household decision platform. Instead of helping users buy ingredients faster, help them decide what to cook faster.'
  },

  productGoals: {
    userGoals: ['Reduce decision fatigue', 'Simplify grocery planning', 'Improve meal discovery'],
    businessGoals: ['Increase retention', 'Increase order frequency', 'Increase basket size', 'Improve customer lifetime value']
  },

  successMetrics: {
    northStar: {
      name: 'Weekly Meals Planned per Active User',
      target: '7+ planned meals per user per week'
    },
    supportingMetrics: [
      { category: 'Retention', metric: 'W4 Retention & D30 Habit Loop' },
      { category: 'Engagement', metric: 'DAU/MAU Meal Plan Adoption' },
      { category: 'Conversion', metric: 'Recipe → Cart Rate, Plan → Order Rate' },
      { category: 'Revenue', metric: 'Average Order Value (+22%), Subscription Revenue' }
    ]
  },

  finalSolutions: [
    {
      num: 1,
      name: 'Smart Meal-Based Ordering',
      what: 'Users select meal type (Breakfast / Lunch / Dinner) or vibe (Spicy, Diet, Fitness, Quick <15 min, South Indian). App recommends curated recipes and automatically bundles all ingredients.',
      impact: '3 taps to checkout, higher basket size, reduced decision fatigue.'
    },
    {
      num: 2,
      name: 'Smart Refill Prediction',
      what: 'Predictive consumption engine anticipates when household staples (Milk, Bread, Eggs, Butter) will run out based on past cadence.',
      impact: 'Automated 1-tap top-ups before stock-out occurs.'
    },
    {
      num: 3,
      name: 'Personalized Weekly Meal Plans',
      what: 'Auto-generates a 7-day meal plan (21 meals: Breakfast, Lunch, Dinner) tailored to diet preferences and budget (e.g. Veg Family of 3 • ₹2,400 budget). 1-click single cart checkout with dish swap options.',
      impact: 'Shifts user behavior from emergency buying to predictable weekly cart building.'
    },
    {
      num: 4,
      name: 'Flexible Scheduling & Morning Savings',
      what: 'Allows scheduled deliveries, recurring grocery orders, and early morning delivery slots (e.g. 6:00–6:30 AM save ₹40, 7:00–7:30 AM save ₹30).',
      impact: 'Smooths warehouse dispatch peaks and delivers groceries before daily cooking starts.'
    },
    {
      num: 5,
      name: 'Reels-to-Cart Experience',
      what: 'Users watch short 30-sec recipe videos from verified creators (e.g. Chef Kunal Aglio e Olio) and instantly click "Add 6 ingredients • ₹245 • Delivers in 12 min" to their cart.',
      impact: 'Seamlessly bridges culinary visual inspiration with immediate grocery conversion.'
    }
  ],

  prioritization: {
    built: [
      { name: 'Smart Meal Ordering', reason: 'High impact, High feasibility' },
      { name: 'Refill Prediction', reason: 'High impact, Medium feasibility' },
      { name: 'Weekly Meal Planning', reason: 'High impact, Medium feasibility' },
      { name: 'Scheduling & Morning Slots', reason: 'High impact, High feasibility' },
      { name: 'Reels Commerce', reason: 'High impact, High viral conversion' }
    ],
    deferred: [
      { name: 'AR Fridge Scanner', reason: 'High hardware barrier, low current feasibility' },
      { name: 'Voice-Only Ordering', reason: 'High ambient noise error rates in Indian kitchens' },
      { name: 'Paid Recipe Marketplace', reason: 'Friction to initial habit adoption' }
    ]
  },

  risksAndMitigation: [
    { risk: 'Notification fatigue', mitigation: 'Smart bundled reminders timed with typical meal cooking hours.' },
    { risk: 'Poor AI recommendations', mitigation: 'Rule-based curated culinary graph launch first, followed by ML tuning.' },
    { risk: 'Creator content quality', mitigation: 'Strict onboarding for verified chefs and culinary creators only.' },
    { risk: 'Food delivery cannibalization', mitigation: '"Too Tired" mode cross-sell toggle routing directly to Swiggy Food.' }
  ],

  expectedImpact: {
    userImpact: 'Reduced decision fatigue, faster grocery planning, effortless meal discovery.',
    businessImpact: '+35% order frequency, +22% average basket size, higher retention, multi-stream revenue.'
  },

  keyPMLearnings: {
    biggestInsight: 'The problem wasn\'t grocery delivery. The real problem was meal decision-making. By reframing the problem from "How do we deliver groceries faster?" to "How do we help users decide what to eat?", the entire product strategy changed.',
    driveLink: 'https://drive.google.com/file/d/1zRewx5Q7izpUcepUqvmJjWT8GOq32qJp/view?usp=sharing'
  }
};

export const INSTAGRAM_CASE_STUDY_DATA = {
  header: {
    category: 'Product Management Case Study · Social Network vs Entertainment Platform',
    title: "Rethinking Instagram's Feed Experience",
    appName: 'Instagram (Meta)',
    subtitle: 'Exploring the product decisions behind Instagram\'s shift toward AI-recommended media, and solving the critical challenge: How might we help users reconnect with friends without sacrificing engagement or advertising monetization?',
    tools: ['Product Discovery', 'Recommendation Algorithms', 'Dual-Feed Architecture', 'User Behavior Analytics', 'A/B Experimentation', 'Figma', 'Mixpanel', 'SQL']
  },

  theHook: {
    quote: "Every time I open Instagram, I want to catch up with my friends. Instead, I often find myself scrolling through recommended Reels, creators, and sponsored content before seeing a single post from someone I actually know.",
    coreQuestion: "Has Instagram evolved from a social network into an entertainment platform?",
    pmChallenge: "💡 How might we help users reconnect with friends without reducing overall engagement and ad inventory?"
  },

  storyChapters: [
    {
      id: 'observation',
      number: '01',
      title: 'The Observation & User Friction',
      tagline: 'When the social graph disappears beneath an algorithmic entertainment wall',
      points: [
        'Users originally opened Instagram to stay in touch with friends, family, and intimate circles through casual visual updates.',
        'Over recent iterations, the primary feed transformed into an unprompted stream of suggested Reels, viral meme aggregators, and sponsored ads.',
        'Users report "doomscrolling fatigue": spending 45 minutes on the app, yet feeling zero meaningful social connection upon closing it.',
        'Casual users stopped posting personal photos because the algorithm deprioritized non-viral static posts, leading to an empty feedback loop.'
      ],
      metricFact: '72% decrease in friend post impressions during the initial 60 seconds of opening the feed.'
    },
    {
      id: 'behavior-analysis',
      number: '02',
      title: 'User Behaviour & Migration to DMs',
      tagline: 'Where did personal connection go? The great migration into private chat silos',
      points: [
        'Adam Mosseri (Head of Instagram) confirmed: "Most Instagram growth is in Stories and DMs, not the main feed."',
        'Users no longer share life updates publicly to the feed; instead, they send Reels to friends via DMs as conversational currency.',
        'The feed has turned into a "passive broadcast consumption channel", while DMs have become the actual social graph.',
        'However, DMs require active conversational effort—leaving casual friend check-ins fragmented and lost.'
      ],
      metricFact: 'Over 65% of daily user-to-user interactions now occur inside Direct Messages rather than public feed comments.'
    },
    {
      id: 'business-vs-user',
      number: '03',
      title: 'Business Goals vs. User Goals Matrix',
      tagline: 'The tension between short-term algorithmic watch time and long-term social retention',
      businessGoals: [
        { label: 'Maximize Time Spent', value: 'Reels and AI recommendations increase session duration (+28% watch time).' },
        { label: 'High Ad Surface Density', value: 'Algorithmic feeds allow predictable 1-in-4 ad insertion cadence.' },
        { label: 'Compete with TikTok', value: 'Unconnected AI distribution discovers viral content faster than social graphs.' }
      ],
      userGoals: [
        { label: 'Authentic Connection', value: 'See what friends, family, and classmates are up to in real-time.' },
        { label: 'Low Cognitive Effort', value: 'Quickly catch up in 2-3 minutes without getting trapped in endless scroll.' },
        { label: 'Psychological Safety', value: 'Post casual moments without feeling pressured by creator-level polish.' }
      ],
      coreTension: 'Replacing social connection with entertainment creates high short-term engagement but weakens the defensible social moat, making Instagram vulnerable to commoditization.'
    },
    {
      id: 'root-cause',
      number: '04',
      title: 'Root Cause Analysis (The 5 Whys)',
      tagline: 'Why did the feed lose its social essence in the first place?',
      steps: [
        { why: 'Why don’t users see friend posts?', answer: 'The ranking algorithm prioritizes high-velocity engagement signals (Watch Time, Shares, Saves) which creators win.' },
        { why: 'Why do creators outperform friends?', answer: 'Professional creators optimize lighting, hooks, and editing; a friend’s casual dinner photo can never compete in watch time.' },
        { why: 'Why did Instagram push this algorithm?', answer: 'To defend against TikTok’s interest graph that decoupled content from follower counts.' },
        { why: 'What happened to friend posts?', answer: 'Low initial impressions discouraged friends from posting, creating a supply shortage of personal updates.' }
      ]
    },
    {
      id: 'proposed-solution',
      number: '05',
      title: 'Proposed Solution & UX Architecture',
      tagline: 'A hybrid product model: High-intent social catch-up + serendipitous entertainment discovery',
      solutions: [
        {
          title: '1. Friends Catch-Up Digest (Story Reel Carousel)',
          description: 'A 60-second interactive daily digest card pinned to the top of the feed upon launch. Aggregates all unseen posts, stories, and life updates from close friends with 1-tap quick reactions that send directly to DMs.',
          impact: 'Delivers immediate friend value in the first 30 seconds of opening the app.'
        },
        {
          title: '2. Frictionless Dual Feed Mode Switch',
          description: 'A persistent top gesture toggle: "Following & Close Friends" vs. "For You / Explore". Users can swipe horizontally to switch modes seamlessly without digging into buried submenu dropdowns.',
          impact: 'Empowers user autonomy while keeping algorithmic discovery a single swipe away.'
        },
        {
          title: '3. Hybrid Recency & Closeness Algorithm',
          description: 'Guarantee that the first 3 slots in the default feed prioritize recent original posts from close relationship graph tiers before AI recommendations take over.',
          impact: 'Restores the feeling of opening a personal social app while preserving subsequent algorithmic exploration.'
        },
        {
          title: '4. Casual "Low-Pressure" Share Prompts',
          description: '1-tap "Share with Close Friends only" prompt in the camera and lightweight photo drops that disappear after 48 hours unless saved.',
          impact: 'Lowers the barrier to posting and replenishes the friend content supply.'
        }
      ]
    },
    {
      id: 'tradeoffs-risks',
      number: '06',
      title: 'Product Trade-Offs & Edge Cases',
      tagline: 'Managing cannibalization risks, ad load stability, and creator reach',
      tradeoffs: [
        {
          tradeoff: 'Ad Impression Yield vs. Friend Post Density',
          risk: 'Friend feeds have lower total item depth, potentially reducing raw ad impressions.',
          mitigation: 'Inject high-intent native sponsored units between Catch-Up digests with higher eCPM premium.'
        },
        {
          tradeoff: 'Creator Reach & Discovery',
          risk: 'Creators might worry about reduced reach if users stay on the Following tab.',
          mitigation: 'The Catch-Up Digest has a definitive "You’re all caught up!" end-state that auto-flows into the Discovery stream.'
        },
        {
          tradeoff: 'Cold-Start / Low-Posting Friends',
          risk: 'Users whose friends post rarely might see a barren Friends tab.',
          mitigation: 'Smart fallback: blend friend Stories, nostalgic memories ("On this day 2 years ago"), and close-friend liked posts.'
        }
      ]
    },
    {
      id: 'experimentation-metrics',
      number: '07',
      title: 'Success Metrics & A/B Experimentation Strategy',
      tagline: 'How to validate the hypothesis with statistical rigor across Meta cohorts',
      northStar: {
        name: 'Weekly Active Friend Connections (WAFC)',
        definition: 'Users who view at least 3 friend updates and engage (Like/Comment/DM Share) per week.'
      },
      metricCategories: [
        {
          type: 'Primary Impact Metrics',
          items: [
            { label: 'Friend Post View Completion Rate', target: '+48%', subtext: 'Within first 60 seconds of session' },
            { label: 'DM Conversations Sparked from Feed', target: '+34%', subtext: 'Direct message interaction velocity' },
            { label: 'D7 / D30 Casual User Retention', target: '+21%', subtext: 'Reduced social alienation churn' }
          ]
        },
        {
          type: 'Guardrail Metrics (Must Not Degrade)',
          items: [
            { label: 'Total Daily Time Spent', target: '>= -2%', subtext: 'Watch time must remain resilient' },
            { label: 'Total Ad Impressions & Viewability', target: '>= 0% Drop', subtext: 'Preserve ad revenue run-rate' },
            { label: 'Creator Content Engagements', target: '>= -1.5%', subtext: 'Maintain creator ecosystem health' }
          ]
        }
      ],
      experimentationPlan: [
        { cohort: 'Cohort A (Control - 5%)', description: 'Existing unified algorithmic feed with buried Following menu.' },
        { cohort: 'Cohort B (Variant 1 - 5%)', description: 'Friends Catch-Up Digest pinned at top of existing feed.' },
        { cohort: 'Cohort C (Variant 2 - 5%)', description: 'Dual Feed Tab Switch ("Friends" vs "For You") with swipe gesture.' },
        { cohort: 'Cohort D (Variant 3 - 5%)', description: 'Hybrid model: Catch-Up Digest + 3-Slot Guaranteed Closeness Ranking.' }
      ]
    }
  ],

  personas: [
    {
      name: 'Maya, 24',
      role: 'Creative Strategist',
      location: 'New York · Active Socializer',
      painPoint: 'Opens Instagram 15x a day to see what her best friends are doing, but only gets served fitness influencers and brand collabs.',
      quote: '"I literally have to search my best friend\'s profile manually just to see if she posted anything new this week."',
      badge: 'Social-First User'
    },
    {
      name: 'Daniel, 29',
      role: 'Software Engineer',
      location: 'San Francisco · Casual Consumer',
      painPoint: 'Wants a quick 2-minute break to catch up, but gets sucked into 30 minutes of cat reels and feels drained afterwards.',
      quote: '"I feel guilty every time I close Instagram because I didn\'t actually connect with anyone."',
      badge: 'Doomscroll Fatigued'
    },
    {
      name: 'Pooja, 21',
      role: 'University Student',
      location: 'Bangalore · Casual Poster',
      painPoint: 'Stopped posting casual snapshots because her feed is filled with 4K edited creator reels with 50K likes.',
      quote: '"Why would I post my mediocre coffee photo when everyone\'s feed looks like a magazine shoot? So I only send DMs now."',
      badge: 'Reluctant Creator'
    }
  ],

  keyPMLearnings: {
    coreTakeaway: 'A social network\'s long-term defensibility comes from its proprietary Social Graph, not just its algorithm. When you optimize exclusively for algorithmic watch time, you commoditize your product into an interchangeable video feed. By giving users a dedicated, zero-friction path to their friends, you protect user trust, retain your social moat, and sustain commercial viability.',
    frameworkSummary: 'Balancing Short-term Algorithmic Engagement with Long-term Social Moat Protection.'
  }
};






