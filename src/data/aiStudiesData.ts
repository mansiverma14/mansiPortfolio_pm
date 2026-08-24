export interface AICaseStudy {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  appContext: string;
  userProblem: {
    title: string;
    summary: string;
    painPoints: string[];
    quotes?: string;
  };
  aiSolution: {
    title: string;
    modelAndTech: string[];
    architectureSteps: { step: string; detail: string; highlight?: string }[];
    coreCapabilities: string[];
    promptEngineStrategy?: string;
  };
  monetizationAndUX: {
    tierModel: string;
    flow: string[];
    adStrategy: string;
  };
  resultsAndMetrics: {
    headlineMetrics: { label: string; value: string; subtext: string }[];
    businessOutcome: string[];
  };
  myRoleAsPM: string[];
  mockupPresetType: 'collage-gen' | 'review-pilot' | 'audio-stem' | 'magic-eraser' | 'doc-scanner';
}

export const AI_CASE_STUDIES: AICaseStudy[] = [
  {
    id: 'ai-collage-generator',
    badge: 'Flagship AI Feature • GenAI in Consumer Mobile',
    title: 'AI Image Generator & Generative Style Studio in Collage Maker',
    subtitle: 'Integrated a low-latency text-to-image & neural style generation pipeline directly into a photo collage creator — solving stock photo search fatigue, blank grid abandonment, and lifting collage completion rates by +142%.',
    appContext: 'Collage Maker & Photo Grid Editor (Mobile Android/iOS App)',
    userProblem: {
      title: 'Blank Slot Drop-offs & Stock Photo Search Fatigue',
      summary: 'While building multi-photo collages, users frequently encountered empty grid slots, mismatched color aesthetics between personal photos, and severe search fatigue looking for matching filler art.',
      painPoints: [
        'Users abandoning collages at 70% completion because they lacked 1 or 2 matching aesthetic images to fill a 4-6 photo grid layout.',
        'Leaving the app to search Google Images or Pinterest for textures/backgrounds caused high bounce rates (over 45% never returned to complete the collage).',
        'Inconsistent aspect ratios, resolution blur, and copyright watermarks in downloaded stock images.',
        'Lack of cohesive aesthetic themes (e.g. making a travel collage look consistently vintage, pastel, or cinematic).'
      ],
      quotes: '"I loved the 4-photo grid layout for my birthday memories, but I only had 3 good pictures. Searching for a matching pastel balloon background took 15 minutes outside the app and made me give up."'
    },
    aiSolution: {
      title: 'Prompt-to-Grid Generative Image Studio',
      modelAndTech: [
        'Stable Diffusion XL Turbo / Imagen 3 API',
        'Custom LoRA Styles (Cyberpunk, Watercolor, 3D Clay, Minimalist Boho, Retro Film, Vintage Anime)',
        'Gemini 1.5 Flash Prompt Expander & Aesthetic Enricher',
        'Edge-Tiled Latent Upscaler (512px preview → 2048px export)',
        'On-Device Aspect-Ratio Bounding Box Adapter',
        'Google ML Kit Safety & NSFW Guardrails'
      ],
      architectureSteps: [
        {
          step: '01. Intent & Slot Context Detection',
          detail: 'When the user taps an empty collage slot, the app captures the required aspect ratio (e.g., 1:1, 4:5, 9:16) and extracts the dominant color palette from existing collage photos.',
          highlight: 'Context-Aware'
        },
        {
          step: '02. Prompt Enrichment & Safety Filter',
          detail: 'Raw user input (e.g. "sunset cafe") passes through an ultra-fast LLM prompt enricher that injects stylistic descriptors, golden-hour lighting modifiers, and 8k detail keywords while screening for safety.',
          highlight: '<120ms Latency'
        },
        {
          step: '03. Low-Latency Diffusion Inference',
          detail: 'Accelerated cloud inference renders a lightweight 512x512 preview in ~1.4 seconds. The user can reroll, adjust style sliders, or tap "Apply to Collage".',
          highlight: '1.4s Fast Preview'
        },
        {
          step: '04. Seamless Edge Canvas Ingestion',
          detail: 'Upon selection, the generated image is dynamically auto-cropped, filtered to match collage color temperature, and placed with full drag-and-pinch gesture support.',
          highlight: 'Lossless Export'
        }
      ],
      coreCapabilities: [
        'Text-to-Image Generation directly inside collage layouts',
        'Curated 1-Tap Style Presets (Cyberpunk, Watercolor, Boho, Retro Anime, 3D Pastel)',
        'Auto-Color Palette Matching (AI matches prompt generation colors to your existing photos)',
        'AI Background Wallpaper Generator (generates full-bleed seamless patterned wallpapers)',
        'Instant Aspect Ratio Adaptation (fits exact grid cell dimensions without awkward stretching)'
      ],
      promptEngineStrategy: 'Implemented a 2-tier prompt expansion engine: raw user prompt is augmented with curated negative prompts (deformed, low-res, text, watermark) and aesthetic modifiers (volumetric light, octane render, soft focal depth) based on the chosen visual preset.'
    },
    monetizationAndUX: {
      tierModel: 'Freemium Token Economy + Rewarded Ad Bridge + VIP Unlimited',
      flow: [
        'Free Users: 3 free AI generations per day with watermark-free preview.',
        'Ad Bridge: Watch 1 Rewarded Video Ad to instantly unlock +2 extra AI generations.',
        'Pro Subscription: Unlimited high-speed generations, 2K upscale export, and exclusive premium LoRA styles.'
      ],
      adStrategy: 'Integrated rewarded video ads at high-intent creation peaks. Users happily watched ads to get the exact missing image for their collage, driving a $4.82 Rewarded eCPM.'
    },
    resultsAndMetrics: {
      headlineMetrics: [
        { label: 'Collage Completion Rate', value: '+142%', subtext: 'Reduced empty slot abandonment' },
        { label: 'Session Length', value: '+68%', subtext: 'Increased creative time in-app' },
        { label: 'AI Feature Adoption', value: '38%', subtext: 'Of daily active creators within 30d' },
        { label: 'VIP Conversion Boost', value: '+47%', subtext: 'Driven by unlimited AI access' },
        { label: 'Avg Generation Speed', value: '1.4s', subtext: 'Sub-2s latency SLA met' },
        { label: 'Rewarded Ad eCPM', value: '$4.82', subtext: 'High-intent token unlock flow' }
      ],
      businessOutcome: [
        'Transformed Collage Maker from a passive template tool into an active generative design studio.',
        'Eliminated the single largest churn funnel step: drop-off during multi-photo asset gathering.',
        'Established a durable new monetization pillar combining rewarded ad token bridges with recurring VIP subscriptions.'
      ]
    },
    myRoleAsPM: [
      'Conceived and championed the Generative AI roadmap based on funnel drop-off analytics and user session replay data.',
      'Authored comprehensive PRD covering API integration, prompt orchestration, prompt safety guardrails, and aspect ratio adaptation.',
      'Designed the token balance system, rewarded ad unlock loop, and VIP paywall entry points.',
      'Partnered closely with ML and Android engineers to implement WebP caching and GPU shader filters to prevent memory crashes on low-end devices.',
      'Ran iterative A/B tests on prompt suggestions, style thumbnail carousels, and generation loading screen micro-copy.'
    ],
    mockupPresetType: 'collage-gen'
  },
  {
    id: 'ai-review-pilot',
    badge: 'AI App Intelligence & NLP Automation',
    title: 'Review Pilot — AI App Intelligence & Sentiment Engine',
    subtitle: 'Built an end-to-end NLP intelligence engine that clusters multilingual Play Store feedback, flags high-urgency bug spikes, and generates context-aware developer responses.',
    appContext: 'B2B & Internal Product Intelligence SaaS / Mobile Management Dashboard',
    userProblem: {
      title: 'Review Overload & Critical Crash Signal Blindness',
      summary: 'Product teams handling 5M+ download apps faced hundreds of reviews daily across 15+ languages. Urgent release regressions and billing issues were lost in generic comments.',
      painPoints: [
        'Support and PM teams spending 12+ hours/week manually reading and sorting reviews.',
        'Crash bugs in new releases taking 48-72 hours to detect via manual review triage.',
        'Non-English reviews (Portuguese, Hindi, Bahasa, Japanese) left unresponded, hurting international ASO ratings.',
        'Generic copy-paste template responses leading to user frustration and 1-star review persistence.'
      ],
      quotes: '"A critical payment gateway bug in our v4.2 update sat undetected for 3 days because it was buried under 400 feature requests and one-word reviews."'
    },
    aiSolution: {
      title: 'Semantic Review Cluster & Smart Auto-Reply Pipeline',
      modelAndTech: [
        'Gemini 1.5 Flash (Categorization & Contextual Synthesis)',
        'Text-Embedding-004 for Semantic Clustering',
        'Zero-Shot Sentiment Scoring (-1.0 to +1.0)',
        'Automated Multilingual Translation & Localization Engine',
        'Slack & Jira Webhook Dispatcher for P0 Anomalies'
      ],
      architectureSteps: [
        {
          step: '01. Ingestion & Pre-Processing',
          detail: 'Fetches Play Store and App Store reviews every 15 minutes via API webhook, standardizing metadata and device hardware specs.',
          highlight: '15m Real-time Sync'
        },
        {
          step: '02. Vector Embedding & Anomaly Spike Detection',
          detail: 'Converts review text into dense vector embeddings. If a cluster of similar keywords (e.g. "black screen", "crash on launch") spikes >300% over baseline, triggers an instant P0 alert.',
          highlight: 'Automated P0 Alerts'
        },
        {
          step: '03. Sentiment & Intent Tagging',
          detail: 'Assigns precise tags: [Crash/Bug], [Billing/Refund], [Feature Request], [Competitor Comparison], [ASO Praise].',
          highlight: '94% Accuracy'
        },
        {
          step: '04. Few-Shot Empathetic Draft Generation',
          detail: 'Drafts tailored developer replies in the user’s native language, including specific troubleshooting steps for their detected phone model and OS version.',
          highlight: 'Multilingual Replies'
        }
      ],
      coreCapabilities: [
        'Real-time anomaly spike alerts for sudden release regressions',
        'Automatic translation of 40+ languages with sentiment retention',
        'One-click context-aware response generator tailored to star rating',
        'Competitor review sentiment scraping & feature gap analysis'
      ]
    },
    monetizationAndUX: {
      tierModel: 'Internal Productivity Multiplier & Enterprise SaaS Tier',
      flow: [
        'Direct integration into internal release management dashboards.',
        'Automated daily executive Slack summary digests with key sentiment shifts.',
        'Direct Play Store Console API reply publishing with human-in-the-loop review.'
      ],
      adStrategy: 'Enterprise B2B tier with custom Slack integrations and unlimited API triage.'
    },
    resultsAndMetrics: {
      headlineMetrics: [
        { label: 'Triage Time Saved', value: '85%', subtext: 'From 12h to <1.8h per week' },
        { label: 'Bug Detection SLA', value: '<2 hrs', subtext: 'Down from 48-72 hours' },
        { label: 'Response Rate', value: '92%', subtext: 'Across all global languages' },
        { label: 'Rating Recovery', value: '+0.4★', subtext: 'Average lift in 60 days' },
        { label: 'Churn Prevention', value: '-28%', subtext: 'On negative rating cohort' },
        { label: 'Analysis Speed', value: '1.2s', subtext: 'Per batch review stream' }
      ],
      businessOutcome: [
        'Reduced critical app regression discovery time from days to minutes.',
        'Significantly boosted Google Play Store developer response score and global ASO ranking.',
        'Empowered engineering teams with structured bug reports with device logs directly from user reviews.'
      ]
    },
    myRoleAsPM: [
      'Identified internal operational bottlenecks in app store review management and designed Review Pilot from zero to one.',
      'Formulated prompt engineering schemas, few-shot guardrails, and tone guidelines for automated customer service replies.',
      'Created the prioritization algorithm that ranks reviews by severity, user influence, and sentiment urgency.',
      'Led cross-functional rollout across engineering, QA, and customer operations teams.'
    ],
    mockupPresetType: 'review-pilot'
  },
  {
    id: 'ai-vocal-stem-separation',
    badge: 'Neural Audio DSP & Edge AI',
    title: 'AI Vocal Separation & Multi-Stem Audio Extractor',
    subtitle: 'Integrated neural audio tensor decomposition into MP3 Converter — allowing users to isolate clean vocals, extract background karaoke tracks, or isolate drums/bass in seconds.',
    appContext: 'MP3 Converter & Audio Utility Suite (Mobile App)',
    userProblem: {
      title: 'Expensive DAWs & Inaccessible Audio Separation',
      summary: 'Musicians, karaoke lovers, social media creators, and remixers needed to split songs into acapella vocals and instrumentals without requiring expensive desktop software or complicated FFmpeg commands.',
      painPoints: [
        'Desktop software like FL Studio or iZotope RX was too complex and expensive ($199+) for casual mobile creators.',
        'Online web separators had low file size limits, aggressive popups, and required long upload/download queues.',
        'High latency and server bandwidth costs when uploading full 5-10 minute songs over mobile cellular data.',
        'Audio distortion, metallic artifacts, and bleed between vocals and heavy instrumental frequencies.'
      ],
      quotes: '"I just wanted to remove vocals from a song to sing karaoke at my sister’s wedding. Every app made me pay $20 or wait 10 minutes in a web queue."'
    },
    aiSolution: {
      title: 'Hybrid Edge & Cloud Neural Stem Separation Engine',
      modelAndTech: [
        'Demucs v4 Neural Sound Separation Network (Quantized ONNX)',
        'Spleeter Lightweight 2-Stem Edge Model (Mobile NPU)',
        'WebAssembly + C++ Multi-Track Audio Engine',
        'FFmpeg DSP Equalizer & High-Pass Noise Gate',
        'Real-Time Waveform Visualizer & Stem Volume Mixer'
      ],
      architectureSteps: [
        {
          step: '01. Audio Decoding & Normalization',
          detail: 'Decodes user video/audio file into high-fidelity PCM audio arrays, normalizing loudness to prevent clipping distortion.',
          highlight: 'Lossless PCM'
        },
        {
          step: '02. Dynamic Edge vs Cloud Routing',
          detail: '2-Stem (Vocal vs Backing Music) executes on-device via quantized neural network in ~3.2s. 4-Stem (Vocal, Drums, Bass, Melody) routes to GPU cloud inference.',
          highlight: 'Zero Bandwidth Edge Mode'
        },
        {
          step: '03. Neural Spectrogram Decomposition',
          detail: 'Deep neural networks separate complex overlapping frequencies into isolated audio stems with minimal harmonic phase bleed.',
          highlight: 'High SNR Clarity'
        },
        {
          step: '04. Multi-Track Studio Mixer & Export',
          detail: 'Users can solo, mute, adjust individual stem volume levels, pitch-shift the acapella, or export as isolated 320kbps MP3s.',
          highlight: 'Studio Controls'
        }
      ],
      coreCapabilities: [
        '1-Tap Karaoke Mode (instant background track extraction with vocal mute)',
        'Acapella Vocal Isolator (isolates crystal-clear voice for remixes and reels)',
        '4-Stem Master Separation (Vocals, Drums, Bass, Other)',
        'Real-time interactive stem volume mixer & pitch controller',
        'On-device offline mode for standard 2-stem separation'
      ]
    },
    monetizationAndUX: {
      tierModel: 'Rewarded Ad Unlock for High-Compute Stems + VIP Pro',
      flow: [
        '2-Stem (Vocal + Music): Free daily quota.',
        '4-Stem (Drums, Bass, Vocal, Piano): Watch 1 Rewarded Ad during extraction processing OR subscribe to Pro.',
        'Lossless WAV / FLAC Master Export: Pro VIP Feature.'
      ],
      adStrategy: 'Integrated non-intrusive video ads on the neural processing screen while audio stems were decomposing, delivering a massive +144% eCPM increase.'
    },
    resultsAndMetrics: {
      headlineMetrics: [
        { label: 'Feature Adoption', value: '42%', subtext: '#1 most used tool in the app' },
        { label: 'Stems Processed', value: '3.1M', subtext: 'In the first quarter post-launch' },
        { label: 'Rewarded eCPM Lift', value: '+144%', subtext: '$2.29 → $5.59 during processing' },
        { label: 'App Store Rating', value: '4.7★', subtext: 'Up from 4.2★ prior to AI launch' },
        { label: 'Conversion to VIP', value: '+34%', subtext: 'Driven by 4-stem lossless tier' },
        { label: 'On-Device Latency', value: '3.2s', subtext: 'Sub-4s on mid-tier mobile NPUs' }
      ],
      businessOutcome: [
        'Turned a basic conversion utility into a viral, beloved creator audio toolkit.',
        'Established industry-leading on-device audio separation without blowing server infrastructure budgets.',
        'Unlocked massive organic word-of-mouth growth among singers, remixers, and content creators.'
      ]
    },
    myRoleAsPM: [
      'Identified user demand for vocal removal in Play Store search terms and creator feedback audits.',
      'Spearheaded the hybrid on-device vs. cloud technical architecture to optimize operational server costs vs. speed.',
      'Designed the multi-track studio mixer interface, making complex audio stem controls intuitive for mobile users.',
      'Monitored audio separation fidelity benchmarks across genres (Pop, Rock, Hip-Hop, Acoustic).'
    ],
    mockupPresetType: 'audio-stem'
  },
  {
    id: 'ai-magic-eraser-inpainting',
    badge: 'Computer Vision & Generative Inpainting',
    title: 'AI Magic Eraser & Smart Background Inpainting',
    subtitle: 'Deployed on-device segmentation and generative neural inpainting in our photo editing suite — enabling 1-touch removal of photobombers, power lines, and unwanted objects.',
    appContext: 'Photo Editor & Collage Studio (Mobile App)',
    userProblem: {
      title: 'Ruined Photos & Tedious Manual Clone Stamps',
      summary: 'Users captured great memories that were ruined by random photobombers, background powerlines, trash bins, or camera lens flares. Existing clone stamp tools required professional editing skills and left blurry smudges.',
      painPoints: [
        'Complex clone stamping tools took 5-10 minutes and left obvious blurry discoloration rings.',
        'Users abandoning collages because one important photo had an ugly background distraction.',
        'Cloud-dependent object erasers failed when users were editing travel photos on airplane mode or spotty data.'
      ]
    },
    aiSolution: {
      title: 'Fast SAM Masking & Generative Neural Inpainter',
      modelAndTech: [
        'LaMa (Large Mask Inpainting) Quantized Tensor Engine',
        'Fast SAM (Segment Anything Model) Edge Refinement',
        'Mobile GPU Shader Acceleration (Vulkan / Metal)',
        'Dynamic Texture Synthesis & Color Gradient Blending'
      ],
      architectureSteps: [
        {
          step: '01. Interactive 1-Tap Touch Segmentation',
          detail: 'User taps an object (e.g. a tourist in the background) or paints with the smart lasso. Fast SAM snaps to object boundaries automatically.',
          highlight: 'Auto-Snapping'
        },
        {
          step: '02. Mask Dilation & Boundary Smoothing',
          detail: 'Applies a 4px anti-aliased edge dilation around the mask to ensure complete elimination of edge color halos.',
          highlight: 'Clean Edges'
        },
        {
          step: '03. Neural Generative Inpainting',
          detail: 'LaMa neural model analyzes surrounding background textures (bricks, sky, foliage, water) and hallucinates coherent filler pixels in <400ms.',
          highlight: '380ms Inference'
        },
        {
          step: '04. Instant Undo/Redo & Split Comparison',
          detail: 'Users can swipe a split-view slider to compare before vs. after or perform continuous multi-object cleanups.',
          highlight: 'Split-Screen UX'
        }
      ],
      coreCapabilities: [
        '1-Tap Automatic Photobomber Detection',
        'Smart Powerline & Wire Remover (auto-detects and erases linear objects)',
        'Precision brush with dynamic zoom magnifier lens',
        '100% On-Device Offline Operation with zero cloud latency'
      ]
    },
    monetizationAndUX: {
      tierModel: 'Freemium 5 Daily Erases + Rewarded Unlock + Pro Unlimited',
      flow: [
        'Free tier: 5 high-precision erases daily.',
        'Rewarded Ad: Watch 1 ad for +5 additional magic erases.',
        'Pro Pass: Unlimited batch erases and 4K ultra-res inpaint export.'
      ],
      adStrategy: 'Rewarded video prompt triggers on the 6th erase attempt with an 82% opt-in completion rate.'
    },
    resultsAndMetrics: {
      headlineMetrics: [
        { label: 'Objects Erased / Mo', value: '3.2M', subtext: 'High engagement across user base' },
        { label: 'Median Latency', value: '0.38s', subtext: 'Ultra-fast on-device execution' },
        { label: 'First-Attempt Satisfaction', value: '89%', subtext: 'Users accepted inpaint on first try' },
        { label: 'D7 Retention Impact', value: '+18%', subtext: 'For users who used Magic Eraser' },
        { label: 'Cloud Server Cost', value: '$0', subtext: '100% on-device edge processing' },
        { label: 'Play Store Mentions', value: '1.4k+', subtext: '5-star reviews praising the feature' }
      ],
      businessOutcome: [
        'Delivered flagship-tier computational photography features rivaling Google Pixel and Apple Intelligence on budget Android phones.',
        'Zero cloud compute costs achieved through aggressive model quantization and mobile GPU shader optimizations.'
      ]
    },
    myRoleAsPM: [
      'Benchmarked competitor inpainting tools and defined performance requirements (<500ms latency, zero thermal throttling).',
      'Designed the gesture UI including the floating magnifier loupe and adaptive brush sizing.',
      'Structured the freemium threshold and rewarded ad loop to maximize monetization without frustrating core creators.'
    ],
    mockupPresetType: 'magic-eraser'
  },
  {
    id: 'ai-doc-scanner-pii-shield',
    badge: 'On-Device Vision OCR & Privacy Shield',
    title: 'AI Smart Document Scanner & Sensitive PII Auto-Redaction',
    subtitle: 'Architected a zero-cloud document scanner inside Private Vault with automated optical character recognition, perspective dewarping, and automatic privacy masking for sensitive IDs and cards.',
    appContext: 'Private Vault (Secure Media Locker & Document Safe)',
    userProblem: {
      title: 'Public Snooping & Accidental Exposure of Sensitive Documents',
      summary: 'Users storing passports, driver licenses, credit cards, and medical records in their vault feared opening the app in public transit or around family due to accidental over-the-shoulder snooping.',
      painPoints: [
        'Accidental exposure of sensitive credit card numbers or passport photo pages when opening vault folders in public.',
        'Manual document scanning apps sent unencrypted images to third-party cloud servers for OCR.',
        'Crooked, poorly lit phone photos of documents were hard to read and disorganized.'
      ]
    },
    aiSolution: {
      title: 'On-Device Trapezoid Dewarping & PII Redaction Filter',
      modelAndTech: [
        'Google ML Kit Edge Vision & Text Recognition',
        'On-Device Regex & Named Entity Recognition (NER)',
        'Smart Perspective Trapezoid Correction Shaders',
        'Dynamic Gaussian Blur & Tap-to-Reveal Security Layer',
        'AES-256 GCM Hardware-Backed Encryption'
      ],
      architectureSteps: [
        {
          step: '01. Live Edge Detection & Auto-Capture',
          detail: 'Camera viewfinder detects document quadrilateral boundaries in real time, auto-snapping when the page is in focus.',
          highlight: 'Auto-Snap'
        },
        {
          step: '02. Perspective Dewarp & Lighting Correction',
          detail: 'Corrects camera angles, removes shadows, and sharpens text contrast into crisp black-and-white or color PDF scans.',
          highlight: 'Crystal Crisp Scan'
        },
        {
          step: '03. Zero-Cloud PII Entity Detection',
          detail: 'Locally scans text for sensitive entities: Credit Card Numbers, CVVs, Social Security / National IDs, and Passwords.',
          highlight: '99.4% Precision'
        },
        {
          step: '04. Privacy Shield Blur & Biometric Unmask',
          detail: 'Auto-applies an interactive blur over detected PII numbers. Numbers only unmask when the user taps and holds with biometric confirmation.',
          highlight: 'Tap-to-Peek UX'
        }
      ],
      coreCapabilities: [
        'Automatic edge detection and perspective dewarping in <100ms',
        'Auto-Blur for Credit Card numbers, CVVs, and National ID numbers',
        'Local text search across all scanned PDF documents without cloud indexing',
        '100% offline edge processing — zero bytes ever leave the device'
      ]
    },
    monetizationAndUX: {
      tierModel: 'Core Security Feature + Pro Document Vault Tier',
      flow: [
        'Free users: Scan up to 5 secure documents with standard PII auto-blur.',
        'Vault Pro: Unlimited document scans, OCR full-text search, and password-protected PDF export.'
      ],
      adStrategy: 'Privacy-focused app: zero banner ads in document view; rewarded ads for extra scan exports; Pro subscription upgrades.'
    },
    resultsAndMetrics: {
      headlineMetrics: [
        { label: 'PII Detection Accuracy', value: '99.4%', subtext: 'For credit cards and national IDs' },
        { label: 'Data Transmitted to Cloud', value: '0 KB', subtext: '100% on-device privacy guarantee' },
        { label: 'User Trust & Sentiment', value: '+52%', subtext: 'Positive reviews citing security' },
        { label: 'Scan-to-Vault Conversion', value: '64%', subtext: 'Of scanner users saved to Vault' },
        { label: 'OCR Search Speed', value: '45ms', subtext: 'Instant local full-text search' },
        { label: 'Pro Subscriptions', value: '+38%', subtext: 'Driven by unlimited document safe' }
      ],
      businessOutcome: [
        'Cemented Private Vault’s reputation as the most security-conscious utility on the Play Store.',
        'Drove high-LTV Pro conversions from professionals and privacy-conscious power users.'
      ]
    },
    myRoleAsPM: [
      'Formulated the zero-cloud privacy architecture policy to win user trust in the security utility category.',
      'Designed the "Tap-to-Peek" privacy interaction and biometric unmasking security flow.',
      'Validated OCR detection accuracy across diverse international ID cards (US Driver License, Indian Aadhaar, EU Passports).'
    ],
    mockupPresetType: 'doc-scanner'
  }
];
