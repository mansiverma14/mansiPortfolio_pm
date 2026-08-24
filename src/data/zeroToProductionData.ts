export interface AppRequirement {
  name: string;
  category: 'Core Feature' | 'Security & Auth' | 'Media & Files' | 'Customization & UI' | 'Monetization' | 'Utility';
  description: string;
  priority: 'P0 - Launch Blocker' | 'P1 - Core UX' | 'P2 - Nice to Have';
}

export interface UserFlowStep {
  stepNumber: string;
  stepTitle: string;
  description: string;
  userActions: string[];
  systemResponses: string[];
  edgeCases: string[];
}

export interface ZeroToProductionApp {
  id: string;
  name: string;
  tagline: string;
  category: string;
  iconName: string;
  stage: 'Design & Flow Finalization' | 'PRD Ready' | 'Architecture & Sprint 1' | '0-to-Production Suite' | 'In Development (Data Uploading Phase · Target Mid-Sep 2026)' | string;
  overview: string;
  coreProblem: string;
  targetAudience: string;
  proposedFeatures: string[];
  featureRequirements: AppRequirement[];
  userFlows: UserFlowStep[];
  uiUxPriorities: string[];
  monetizationModel: string;
  techStack: string[];
  targetKpis: { label: string; target: string; note: string }[];
}

export const ZERO_TO_PRODUCTION_APPS: ZeroToProductionApp[] = [
  {
    id: 'callock',
    name: 'CalLock',
    tagline: 'Disguised Calculator & Dial Vault with Military-Grade App & Media Locking',
    category: 'Privacy & Security · Utility',
    iconName: 'Lock',
    stage: 'Design & Flow Finalization',
    overview: 'A disguised privacy application that masquerades as a functional standard calculator or dialer. Entering a secret PIN/formula unlocks a fortified encrypted vault featuring app locks, hidden contacts, private browser, hidden media, trash recovery, notes, and custom themes.',
    coreProblem: 'Users need discreet privacy on shared family devices without drawing suspicion from inquisitive friends or partners who see generic lock icons.',
    targetAudience: 'Privacy-conscious mobile users, professionals storing confidential notes, and users sharing phones with children or relatives.',
    proposedFeatures: [
      'File share',
      'Hide apps',
      'App lock',
      'Trash recovery',
      'Download module',
      'Video & file manager',
      'Secure notes',
      'Settings & security hub',
      'Hide media (photos & videos)',
      'Built-in stealth camera',
      'Add from folder / gallery',
      'Custom vault themes',
      'CallLock page theme (Dialer / Calc)',
      'App icon customization (Weather, Calc, Radio disguise)',
      'Guided onboarding',
      'Interactive tooltips',
      'Private stealth browsing',
      'Hide contacts & call logs',
      'Fingerprint biometric unlock',
      'Pattern lock & PIN lock'
    ],
    featureRequirements: [
      { name: 'Calculator Camouflage Engine', category: 'Security & Auth', description: 'Fully functional standard arithmetic calculator (+, -, *, /). Entering user PIN followed by "=" or "%" triggers vault decryption.', priority: 'P0 - Launch Blocker' },
      { name: 'App Lock & Fake Crash Dialog', category: 'Security & Auth', description: 'Locks sensitive 3rd-party apps (WhatsApp, Instagram, Banking) with PIN/Biometrics or simulated "App Has Stopped" crash screen.', priority: 'P0 - Launch Blocker' },
      { name: 'Hide Media & Secure Folder', category: 'Media & Files', description: 'AES-256 encrypted media vault. Removes photos/videos from public gallery indexing and stores in sandbox.', priority: 'P0 - Launch Blocker' },
      { name: 'Hide Apps Module', category: 'Security & Auth', description: 'Clones and hides sensitive applications with stealth notification masking.', priority: 'P0 - Launch Blocker' },
      { name: 'Stealth Camera & Photo Taker', category: 'Media & Files', description: 'Capture photos and videos directly into the encrypted vault without writing to device DCIM.', priority: 'P1 - Core UX' },
      { name: 'Private Stealth Browser & Downloader', category: 'Media & Files', description: 'Zero-trace browsing with built-in multi-threaded video & media download module directly to vault.', priority: 'P1 - Core UX' },
      { name: 'Intruder Selfie & Break-in Alert', category: 'Security & Auth', description: 'Front camera snaps silent timestamped photo of anyone entering an incorrect PIN 3 times.', priority: 'P1 - Core UX' },
      { name: 'Trash & 30-Day Recovery', category: 'Media & Files', description: 'Soft-delete safety net allowing users to restore mistakenly deleted encrypted files.', priority: 'P1 - Core UX' },
      { name: 'Disguise Icon & Theme Customization', category: 'Customization & UI', description: 'Switch app icon dynamically to Calculator, Compass, Radio, or Notes with matching UI themes.', priority: 'P2 - Nice to Have' },
      { name: 'Hidden Contacts & Private Notes', category: 'Utility', description: 'Encrypted phonebook and markdown notes with password lock and AES backup.', priority: 'P2 - Nice to Have' }
    ],
    userFlows: [
      {
        stepNumber: '01',
        stepTitle: 'Onboarding & Master PIN Setup',
        description: 'First launch walkthrough establishing camouflage identity and recovery credentials.',
        userActions: ['Launch app for first time', 'View calculator UI with tutorial tooltip', 'Enter 4-to-8 digit PIN and press "="', 'Re-enter PIN for verification', 'Set optional security question & biometric toggle'],
        systemResponses: ['Initialize encrypted SQLCipher database', 'Generate device-bound AES key', 'Confirm vault creation with subtle haptic confirmation', 'Seamlessly open empty Vault Home'],
        edgeCases: ['Forgotten PIN → Recovery email flow via secret code in dialer (*#*#1234#*#*)', 'Biometrics sensor failure → Fallback to PIN / Pattern']
      },
      {
        stepNumber: '02',
        stepTitle: 'Daily Camouflage & Stealth Vault Unlock',
        description: 'Normal daily usage as regular calculator vs. entering master credentials.',
        userActions: ['Open app from home screen', 'Perform standard calculations (e.g., 250 * 4 = 1000)', 'Type Master PIN e.g. 8492 and tap "="'],
        systemResponses: ['Display normal calculation results', 'Instantly detect secret sequence without showing loading delay', 'Transition smoothly with custom fade animation into the Encrypted Vault Home'],
        edgeCases: ['Wrong PIN entered 3 times → Silently capture front-camera Intruder Selfie and store in intruder log']
      },
      {
        stepNumber: '03',
        stepTitle: 'Media Import & Gallery Cleansing',
        description: 'Importing sensitive photos/videos from external storage into AES vault.',
        userActions: ['Tap "+" in Vault Photos tab', 'Select "Import from Gallery" or "Import from Folder"', 'Select 12 photos and tap "Hide Media"', 'Confirm "Delete original from public gallery" prompt'],
        systemResponses: ['Encrypt files in background worker', 'Move encrypted payloads to scoped app directory', 'Trigger MediaScannerConnection to clear public gallery cache', 'Display success toast with storage count update'],
        edgeCases: ['Device out of storage during encryption → Abort safely with zero corrupted files']
      },
      {
        stepNumber: '04',
        stepTitle: 'Private Browsing & Direct Vault Download',
        description: 'Browsing private web and saving files straight to encrypted storage.',
        userActions: ['Open built-in Private Browser tab', 'Navigate to video site or enter URL', 'Tap floating "Download to Vault" button', 'Select resolution (1080p / 720p)'],
        systemResponses: ['Block third-party cookies and wipe cache upon tab close', 'Stream download straight into encrypted chunk storage', 'Notify download complete with discrete notification'],
        edgeCases: ['Network disconnect → Auto-resume download when connection re-established']
      }
    ],
    uiUxPriorities: [
      '100% convincing Calculator & Dialer UI that passes casual glances without suspicion.',
      'Instant zero-latency transition upon entering correct "=" PIN.',
      'Contextual tooltips guiding users on gesture controls (e.g. Shake phone to lock immediately).',
      'Dark obsidian UI theme with customizable accent colors (Gold, Cyberpunk Purple, Emerald).'
    ],
    monetizationModel: 'Freemium + Hybrid Ads (Banner in non-sensitive menus, Rewarded video for Cloud Backup & Unlimited Vault Storage, Premium Ad-Free VIP Subscription).',
    techStack: ['Kotlin (Android Jetpack)', 'SQLCipher (AES-256)', 'BiometricPrompt API', 'Room DB', 'Glide (Decryption Stream)', 'WorkManager'],
    targetKpis: [
      { label: 'Day-30 Retention', target: '>42%', note: 'Driven by daily app-lock and secure notes utility' },
      { label: 'Vault Activation', target: '>88%', note: 'Users hiding at least 5 files on Day 1' },
      { label: 'Intruder Catch Rate', target: '100%', note: 'Zero-latency selfie on failed break-ins' }
    ]
  },
  {
    id: 'shareon',
    name: 'ShareOn',
    tagline: 'Lightning-Fast Offline P2P File Transfer & Local Content Sharing',
    category: 'Connectivity · Utility & Tools',
    iconName: 'Share2',
    stage: 'Design & Flow Finalization',
    overview: 'High-speed, zero-data P2P file sharing utility leveraging Wi-Fi Direct and BLE mesh. Allows seamless cross-device sharing of apps, HD videos, folders, music, and documents at up to 50MB/s without internet connectivity.',
    coreProblem: 'Users in bandwidth-constrained regions face slow Bluetooth transfers or expensive mobile data costs when exchanging large videos, games, and APKs.',
    targetAudience: 'Students, mobile gamers transferring OBB files, commuters, and field workers in low-connectivity areas.',
    proposedFeatures: [
      'Send & receive files at high speed',
      'Nearby user radar & invite users module',
      'High-performance download module',
      'Categorized media & non-media file sections (APKs, OBB, Docs, Videos, Music)',
      'Storage cleanup & duplicate junk remover',
      'Transfer history & received file log',
      'Network & transfer settings'
    ],
    featureRequirements: [
      { name: 'Wi-Fi Direct P2P Hotspot Engine', category: 'Core Feature', description: 'Establishes local 5GHz Wi-Fi hotspot / Wi-Fi Aware socket connection achieving speeds up to 50MB/s without mobile data.', priority: 'P0 - Launch Blocker' },
      { name: 'Two-Way Send & Receive Flow', category: 'Core Feature', description: 'Visual animated radar screen discovering nearby devices via BLE beaconing and QR code handshake.', priority: 'P0 - Launch Blocker' },
      { name: 'Categorized File Picker (Media & Non-Media)', category: 'Media & Files', description: 'Tabs for Installed Apps (with Split APK bundling), Large Videos, Audio, Documents, and Raw Zip files.', priority: 'P0 - Launch Blocker' },
      { name: 'Batch Queue & Concurrent Streams', category: 'Core Feature', description: 'Transfers multi-gigabyte files with live byte counter, pause/resume, and auto-retry on socket drop.', priority: 'P0 - Launch Blocker' },
      { name: 'Invite Users & Web Share Mode', category: 'Utility', description: 'Allows users without the app installed to receive files via built-in browser HTTP server over local hotspot.', priority: 'P1 - Core UX' },
      { name: 'Storage Cleanup & Post-Transfer Janitor', category: 'Utility', description: 'Detects duplicate received files or obsolete installation APKs to free internal device storage.', priority: 'P1 - Core UX' },
      { name: 'Transfer History & File Manager', category: 'Media & Files', description: 'Searchable log of all sent/received files with instant "Open / Play / Share" shortcuts.', priority: 'P2 - Nice to Have' }
    ],
    userFlows: [
      {
        stepNumber: '01',
        stepTitle: 'Device Pairing & Discovery',
        description: 'Connecting Sender and Receiver devices seamlessly.',
        userActions: ['Sender taps "Send" button', 'Receiver taps "Receive" button', 'Sender scans Receiver dynamic QR code OR taps avatar in radar view'],
        systemResponses: ['Receiver boots local Wi-Fi Hotspot & displays dynamic QR containing SSID + auth token', 'Sender connects via Wi-Fi Direct socket', 'Display green "Connected at 45 MB/s" status'],
        edgeCases: ['Location / Wi-Fi permissions denied → Show clean 1-tap permission recovery sheet']
      },
      {
        stepNumber: '02',
        stepTitle: 'Batch File Selection & Transfer',
        description: 'Selecting apps, videos, and music for high-speed transmission.',
        userActions: ['Sender browses tabs (Apps, Videos, Music, Files)', 'Selects 3 APKs (450MB) + 2 FHD Videos (1.2GB)', 'Taps "Send Now (1.65 GB)"'],
        systemResponses: ['Calculate SHA-256 checksums on the fly', 'Stream chunks concurrently across TCP sockets', 'Render synchronized real-time speed curve & progress ring on both devices'],
        edgeCases: ['Connection drops mid-transfer → Automatically reconnect and resume from exact dropped byte offset']
      },
      {
        stepNumber: '03',
        stepTitle: 'Post-Transfer Installation & Management',
        description: 'Receiver opening files, installing APKs, or cleaning temporary data.',
        userActions: ['Transfer reaches 100%', 'Receiver taps "Install APK" on received game', 'Taps "Cleanup duplicate files" to reclaim space'],
        systemResponses: ['Invoke PackageInstaller for seamless split-APK installation', 'Organize files into /InternalStorage/ShareOn/ folder', 'Display storage saved report'],
        edgeCases: ['Unknown sources permission missing → Direct user straight to toggle with return callback']
      }
    ],
    uiUxPriorities: [
      'Big, unambiguous Send & Receive hero buttons on the home screen.',
      'Futuristic radar wave animation showing nearby avatars.',
      'Crystal clear transfer metrics (Speed in MB/s, ETA in seconds, Total transferred).',
      'One-tap "WebShare" button for cross-platform sharing with iOS and PC browsers.'
    ],
    monetizationModel: 'Non-intrusive Native Ads on Transfer Finished screens, Rewarded Ads for Ultra-Turbo transfer speeds, Interstitial after batch transfers.',
    techStack: ['Kotlin Coroutines', 'Wi-Fi Direct (P2P API)', 'BLE (Bluetooth Low Energy)', 'Netty / Ktor Sockets', 'Jetpack Compose'],
    targetKpis: [
      { label: 'Avg Transfer Speed', target: '>35 MB/s', note: '5x faster than standard Bluetooth 5.0' },
      { label: 'Pairing Success Rate', target: '>97%', note: 'QR fallback ensures zero failed handshakes' },
      { label: 'K-Factor Virality', target: '>1.4', note: 'Driven by multi-user invite & receiver adoption' }
    ]
  },
  {
    id: 'screen-recorder',
    name: 'Screen Recorder Pro',
    tagline: 'High-FPS Screen Capture, Studio Audio & Floating Broadcast Controls',
    category: 'Video Players & Editors · Productivity',
    iconName: 'Video',
    stage: 'Design & Flow Finalization',
    overview: 'Professional-grade mobile screen capture and live streaming studio. Captures buttery smooth 1080p/2K gameplay at 60/120fps with internal system audio, floating overlay tools, facecam reaction camera, and built-in timeline video trimmer.',
    coreProblem: 'Content creators and gamers struggle with low-framerate recordings, lack of internal game audio recording, and annoying watermarks on existing apps.',
    targetAudience: 'Mobile gamers, tutorial creators, app reviewers, educators, and social media influencers.',
    proposedFeatures: [
      'Lossless screen recording up to 2K / 60-120fps',
      'Internal audio + external microphone voiceover mixing',
      'Floating overlay ball with quick recording controls & brush drawing tools',
      'Facecam floating camera window (resizable circle & rectangle)',
      'No watermark export with custom watermark logo creator',
      'Quick video editor (trim, crop, speed curve, add music, text overlay)',
      'Shake phone to stop recording gesture',
      'Countdown timer before start (3s, 5s, 10s)',
      'GIF generator and instant highlight cutter',
      'Cloud upload & social export module'
    ],
    featureRequirements: [
      { name: 'MediaProjection High-FPS Engine', category: 'Core Feature', description: 'Zero-lag hardware-accelerated video recording utilizing MediaCodec H.264/HEVC at up to 60Mbps bitrate.', priority: 'P0 - Launch Blocker' },
      { name: 'Dual Audio Stream Mixer', category: 'Core Feature', description: 'Simultaneous capture of internal Android 10+ system audio (game sounds) combined with mic voiceover with gain control.', priority: 'P0 - Launch Blocker' },
      { name: 'Floating Studio Widget & Brush Overlay', category: 'Customization & UI', description: 'Draggable overlay bubble with instant Record/Pause/Brush/Facecam shortcuts that hides automatically during output rendering.', priority: 'P0 - Launch Blocker' },
      { name: 'Facecam PIP Reaction Window', category: 'Core Feature', description: 'Front-facing camera picture-in-picture stream with adjustable shape, border glow, and flip controls.', priority: 'P1 - Core UX' },
      { name: 'In-App Video Studio & Trimmer', category: 'Media & Files', description: 'Timeline-based trimmer, frame-accurate cutter, speed regulator (0.5x to 2.0x), and audio track adder.', priority: 'P1 - Core UX' },
      { name: 'Custom Watermark & Brand Builder', category: 'Customization & UI', description: 'Allows creators to insert their personal PNG logo, channel handle, or toggle watermark completely OFF for free.', priority: 'P1 - Core UX' },
      { name: 'Shake to Stop & Screen-Off Stop', category: 'Utility', description: 'Smart trigger sensors that cleanly terminate recording without showing the control center on final video.', priority: 'P2 - Nice to Have' }
    ],
    userFlows: [
      {
        stepNumber: '01',
        stepTitle: 'Configuration & Quick Launch',
        description: 'Setting recording parameters and starting floating service.',
        userActions: ['Open app and select "1080p 60fps 16Mbps"', 'Enable "Internal Audio + Mic"', 'Tap "Start Recording Engine"'],
        systemResponses: ['Request MediaProjection permission', 'Launch floating bubble widget on screen', 'Minimize app cleanly to launcher'],
        edgeCases: ['Android 10+ Audio Playback Capture restriction on certain DRM apps → Clear user warning dialog']
      },
      {
        stepNumber: '02',
        stepTitle: 'Active Recording & Brush Annotation',
        description: 'Recording gameplay or creating a tutorial with live drawing.',
        userActions: ['Start game', 'Tap floating bubble → tap "Record"', '3-2-1 countdown fires', 'Tap brush tool to circle an item on screen in red'],
        systemResponses: ['Initiate MediaMuxer stream', 'Draw overlay on canvas without corrupting game touch events', 'Fade floating bubble to 20% opacity'],
        edgeCases: ['Low battery / high thermal throttle → Dynamically drop encoding bitrate to prevent frame drops']
      },
      {
        stepNumber: '03',
        stepTitle: 'Stop, Trim & Export',
        description: 'Finalizing recording and trimming unwanted start/end frames.',
        userActions: ['Shake phone to stop recording', 'Notification pops up "Recording Saved"', 'Tap "Quick Edit" → trim first 2 seconds', 'Export to MP4'],
        systemResponses: ['Execute lossless FFmpeg / MediaCodec trim', 'Save high-res MP4 to DCIM/ScreenRecorder', 'Display quick share sheet for YouTube / TikTok'],
        edgeCases: ['Storage full mid-recording → Save completed chunks gracefully before stopping']
      }
    ],
    uiUxPriorities: [
      'Minimalist floating bubble with magnetic edge snapping.',
      'Dark studio theme with neon red recording indicator pulse.',
      'Instant video preview popup immediately after stopping.',
      'Zero complex video terminology: simple presets for "Gaming", "Tutorial", and "Ultra HD".'
    ],
    monetizationModel: 'Freemium (1080p 60fps free with ads; Pro Subscription unlocks 2K/120fps, custom watermarks, voice changer & VIP trim tools).',
    techStack: ['Kotlin', 'MediaProjection API', 'AudioPlaybackCapture API', 'MediaCodec + OpenGL ES', 'FFmpeg C++', 'WindowManager Overlay'],
    targetKpis: [
      { label: 'Video Export Success', target: '>99.2%', note: 'Zero corrupted muxer files across 200+ phone models' },
      { label: 'Avg Recording Duration', target: '>14 mins', note: 'Reflects stability during heavy gaming sessions' },
      { label: 'Store Rating Target', target: '>4.6 ★', note: 'Driven by truly free watermark toggle' }
    ]
  },
  {
    id: 'gallery',
    name: 'Smart Gallery',
    tagline: 'AI-Powered Media Organizer, Private Vault & Pro Editor',
    category: 'Photography · Media Organization',
    iconName: 'Image',
    stage: 'Design & Flow Finalization',
    overview: 'Next-generation lightweight offline media gallery. Uses on-device machine learning for smart album categorization (People, Places, Receipts, Screenshots), duplicate photo cleanup, pin-protected private vault, and non-destructive RAW photo editor.',
    coreProblem: 'Stock phone galleries are bloated, slow with 10,000+ photos, filled with junk screenshots, and lack seamless private hidden album integration.',
    targetAudience: 'Everyday smartphone users, mobile photographers, and people with cluttered 50GB+ photo libraries.',
    proposedFeatures: [
      'Lightning-fast media indexing (100k+ photos with zero lag)',
      'Smart AI albums (Faces, Documents, Travel, Memes, Screenshots)',
      'Integrated hidden vault with PIN & Biometric lock',
      'Built-in photo editor (AI object eraser, crop, filters, curves, blur)',
      'Duplicate photo & blurry shot cleaner',
      'Trash bin with 30-day auto-recycle',
      'Video player with speed control and background audio playback',
      'SD Card & OTG drive support',
      'Custom album covers & pinned favorite collections',
      'Dark AMOLED theme & photo slideshow mode'
    ],
    featureRequirements: [
      { name: 'Ultra-Fast Thumbnail Indexer', category: 'Media & Files', description: 'Direct MediaStore cursor loader with memory cache achieving 60fps smooth scrolling through 50,000+ images.', priority: 'P0 - Launch Blocker' },
      { name: 'Private Vault Integration', category: 'Security & Auth', description: 'AES-256 hidden media folder accessible only via biometric prompt or secret gesture.', priority: 'P0 - Launch Blocker' },
      { name: 'Smart AI Categorization', category: 'Core Feature', description: 'On-device ML Kit image labeling to auto-group receipts, documents, screenshots, and food.', priority: 'P1 - Core UX' },
      { name: 'Pro Editing & Filter Suite', category: 'Media & Files', description: 'Non-destructive photo editing, LUT filters, vignette, HSL tuning, and smart eraser.', priority: 'P1 - Core UX' },
      { name: 'Storage Janitor & Duplicate Purge', category: 'Utility', description: 'Identifies burst shots, exact duplicates, and blurry photos to free gigabytes in seconds.', priority: 'P1 - Core UX' },
      { name: 'Recycle Bin & Safe Restore', category: 'Media & Files', description: 'Protects against accidental deletion with 30-day trash retention.', priority: 'P2 - Nice to Have' }
    ],
    userFlows: [
      {
        stepNumber: '01',
        stepTitle: 'Instant Media Scan & Indexing',
        description: 'First launch gallery population.',
        userActions: ['Grant Storage permission', 'App loads in under 300ms'],
        systemResponses: ['Query MediaStore database', 'Generate fast glide bitmap cache', 'Render smooth staggered masonry grid'],
        edgeCases: ['Permission denied → Show polite rationale explaining read-only access']
      },
      {
        stepNumber: '02',
        stepTitle: 'Smart Cleaning & Duplicate Purge',
        description: 'Freeing storage from screenshot buildup.',
        userActions: ['Tap "Clean Up" tab', 'Review 140 detected duplicate photos (850 MB)', 'Tap "Keep Best Shot & Delete Duplicates"'],
        systemResponses: ['Compare dHash image perceptual hashes', 'Move redundant copies to Trash Bin', 'Show celebratory storage reclaimed banner'],
        edgeCases: ['User changes mind → Instant "Undo" toast available for 10 seconds']
      }
    ],
    uiUxPriorities: [
      'Fluid gesture zooming (pinch from 3-column to 6-column view).',
      'Pure AMOLED black background for maximum contrast and battery conservation.',
      'Instant search by date, location, or AI tag.'
    ],
    monetizationModel: 'Freemium (Ad-supported with native banner in album list, Pro subscription for AI object eraser & unlimited vault storage).',
    techStack: ['Kotlin', 'Jetpack Compose', 'MediaStore API', 'Google ML Kit', 'Coil Image Loader', 'C++ Image Filter Engine'],
    targetKpis: [
      { label: 'Cold Launch Time', target: '<400ms', note: 'Fastest gallery on budget devices' },
      { label: 'Scroll Framerate', target: '60-120 FPS', note: 'Zero stutter during fast fling scrolls' },
      { label: 'Reclaimed Storage / User', target: '>1.8 GB', note: 'Average junk purged per active user' }
    ]
  },
  {
    id: 'cleaner',
    name: 'Smart Storage Cleaner',
    tagline: 'Deep Junk Janitor, WhatsApp Optimizer & RAM Booster',
    category: 'Utility · Storage Management',
    iconName: 'Sparkles',
    stage: 'Design & Flow Finalization',
    overview: 'High-efficiency Android storage and performance optimizer. Performs safe deep cleaning of residual app cache, orphaned APKs, duplicate media, WhatsApp voice notes junk, and background battery-draining apps with zero risk of deleting user personal data.',
    coreProblem: 'Users run out of phone storage constantly due to hidden app cache, Telegram/WhatsApp media bloat, and residual files left behind by uninstalled apps.',
    targetAudience: 'Users with 32GB/64GB/128GB smartphones experiencing "Storage Space Running Out" system alerts.',
    proposedFeatures: [
      '1-Tap Safe Junk Cleaner (App cache, temp logs, empty folders, APK residue)',
      'WhatsApp & Social Media Deep Cleaner (Voice notes, sent videos, status cache)',
      'Large File Analyzer (Files > 50MB ranked by size)',
      'Duplicate File & Screenshot Purge',
      'App Manager & Batch Uninstaller',
      'RAM Speed Booster & CPU Cooler',
      'Battery Health & Background Drain Monitor',
      'Notification Spam Cleaner'
    ],
    featureRequirements: [
      { name: 'Deep Junk Scanning Engine', category: 'Core Feature', description: 'Scans app cache directories, log files, tombstone dumps, and thumbnails safely.', priority: 'P0 - Launch Blocker' },
      { name: 'Social App Dedicated Janitor', category: 'Media & Files', description: 'Parses WhatsApp, Telegram, and TikTok hidden media directories to isolate voice notes, forwarded videos, and stickers.', priority: 'P0 - Launch Blocker' },
      { name: 'Large File & Storage Breakdown Visualizer', category: 'Utility', description: 'Visual interactive storage breakdown (System, Apps, Videos, Photos, Audio, Others).', priority: 'P1 - Core UX' },
      { name: 'Batch App Uninstaller', category: 'Utility', description: 'Identifies unused apps (not opened in 30 days) and enables batch removal.', priority: 'P1 - Core UX' }
    ],
    userFlows: [
      {
        stepNumber: '01',
        stepTitle: 'Storage Diagnostic Scan',
        description: 'Scanning device for safe-to-delete files.',
        userActions: ['Open app', 'Tap big circular "Scan Now" button', 'View real-time gauge scanning 12,000 files'],
        systemResponses: ['Traverse cache directories safely', 'Categorize findings: 1.4GB App Cache, 650MB Temp Logs, 800MB WhatsApp Junk', 'Display total reclaimable space: "2.85 GB Ready to Clean"'],
        edgeCases: ['Permission restrictions on Android 11+ → Guide user to grant All Files Access with clear privacy reassurance']
      },
      {
        stepNumber: '02',
        stepTitle: '1-Tap Clean & Celebration',
        description: 'Purging junk files and optimizing memory.',
        userActions: ['Tap "Clean 2.85 GB Now"', 'Watch smooth rocket cleaning animation'],
        systemResponses: ['Delete cache payloads asynchronously', 'Trigger garbage collection', 'Show celebration screen with "Phone Cleaned & 2.85 GB Reclaimed"'],
        edgeCases: ['Protected app files → Strictly skip system databases to prevent app malfunction']
      }
    ],
    uiUxPriorities: [
      'Big, satisfying 1-tap Clean Hero button with animated speedometer gauge.',
      'Clear categorized checkboxes allowing user review before deletion.',
      'Zero scary system warnings: warm, trustworthy copywriting.'
    ],
    monetizationModel: 'Ad-supported (Interstitial after clean completion, Banner in app manager, Rewarded ad for Auto-Deep Clean scheduling).',
    techStack: ['Kotlin', 'Storage Access Framework', 'UsageStatsManager', 'Room Database', 'Lottie Animations'],
    targetKpis: [
      { label: 'Avg Junk Reclaimed', target: '2.4 GB / scan', note: 'Measurable tangible value delivered' },
      { label: 'Weekly Active Rate', target: '>65%', note: 'Driven by recurring weekly clean reminders' }
    ]
  },
  {
    id: 'pdf-reader',
    name: 'PDF Reader & OCR Scanner',
    tagline: 'High-Speed Document Viewer, E-Signature, OCR & Converter',
    category: 'Productivity · Business & Education',
    iconName: 'FileText',
    stage: 'Design & Flow Finalization',
    overview: 'All-in-one lightweight PDF productivity suite. Features instant rendering of 1,000+ page textbooks, smart text search, OCR camera scan-to-PDF, digital signature drawing, PDF password encryption, page reorganization, and PDF-to-Word conversion.',
    coreProblem: 'Traditional PDF readers are heavy, slow to load large architectural blueprints/textbooks, and hide essential tools like e-signatures behind expensive paywalls.',
    targetAudience: 'Students studying textbooks, office professionals signing contracts, and legal/finance workers.',
    proposedFeatures: [
      'Ultra-fast PDF rendering engine with horizontal/vertical scroll',
      'Dark reading mode & eye protection warm tint',
      'Camera Document Scanner with auto-edge detection & OCR text extraction',
      'E-Signature & Stamp creator (save reusable signatures)',
      'Annotation tools (Highlighter, underline, strikeout, pencil, sticky notes)',
      'PDF Merge, Split & Page Reorganizer',
      'Password lock & AES-128 encryption',
      'Convert Images / Word / Excel to PDF',
      'Bookmark & full-text search',
      'Cloud Print & WiFi File Sharing'
    ],
    featureRequirements: [
      { name: 'High-Performance PDF Rendering Core', category: 'Core Feature', description: 'Zero-stutter rendering of complex vector PDFs, searchable text layers, and table of contents bookmark tree.', priority: 'P0 - Launch Blocker' },
      { name: 'Document Scanner & OCR', category: 'Media & Files', description: 'Camera scan with perspective auto-cropping, shadow removal, and OCR to copy text or export to searchable PDF.', priority: 'P0 - Launch Blocker' },
      { name: 'Digital Signature & Form Filler', category: 'Core Feature', description: 'Draw, save, and place digital signatures on contracts with date stamping.', priority: 'P1 - Core UX' },
      { name: 'PDF Toolkit (Merge, Split, Protect)', category: 'Utility', description: 'Combine multiple PDFs or set master passwords.', priority: 'P1 - Core UX' }
    ],
    userFlows: [
      {
        stepNumber: '01',
        stepTitle: 'Scan Document to PDF',
        description: 'Capturing a physical receipt or contract.',
        userActions: ['Tap "Scan Document" button', 'Point camera at physical paper', 'Camera auto-detects 4 corners and snaps photo', 'Tap "Save as PDF"'],
        systemResponses: ['Apply perspective warp and shadow removal filters', 'Run on-device OCR text extraction', 'Generate crisp searchable PDF in under 1 second'],
        edgeCases: ['Low lighting → Auto-activate camera flash and high-contrast B&W filter']
      },
      {
        stepNumber: '02',
        stepTitle: 'E-Signing a Contract',
        description: 'Opening a PDF and adding signature.',
        userActions: ['Open "Employment_Contract.pdf"', 'Scroll to signature line and tap "Sign"', 'Draw signature with finger or pick saved signature', 'Place and resize signature', 'Tap "Save & Share"'],
        systemResponses: ['Vectorize signature stroke', 'Embed signature into PDF layer', 'Export signed copy and prompt email client'],
        edgeCases: ['Password-protected PDF → Prompt for password modal before unlocking']
      }
    ],
    uiUxPriorities: [
      'Clean book-like reading interface with distraction-free immersive mode.',
      'Quick-action bottom toolbar for instant highlighting and signing.',
      'Crisp document scanning UI with magnetic corner handles.'
    ],
    monetizationModel: 'Freemium (Free reading and basic annotations; VIP subscription for unlimited OCR, batch merge/split, and cloud sync).',
    techStack: ['Kotlin', 'Pdfium Core / AndroidPdfViewer', 'Google ML Kit Document Scanner', 'OpenCV', 'iText / PDFBox'],
    targetKpis: [
      { label: 'Page Load Speed', target: '<50ms / page', note: 'Instant scrolling through 500-page books' },
      { label: 'Scan-to-PDF Conversion', target: '>98% accuracy', note: 'Auto edge cropping precision' }
    ]
  },
  {
    id: 'gamified-fitness',
    name: 'FitLife Pro (Health Journey Pro)',
    tagline: 'AI Nutrition Scanner, 28-Day Challenges & Habit Economy',
    category: 'Health & Fitness · AI Coaching · Habit Gamification',
    iconName: 'Activity',
    stage: 'In Development (Data Uploading Phase · Target Mid-Sep 2026)',
    overview: 'A complete full-stack health & fitness ecosystem integrating real-time activity metrics (steps, water plant visual, calories, heart rate), AI computer vision nutrition intelligence (Food101 / MobileNet), 28-day structured workout challenges (wger exercise engine), and a rewarding coin & streak economy (Habitica loops).',
    coreProblem: 'Traditional fitness apps either focus exclusively on calorie logging with frustrating manual entry paywalls, or provide static workouts with zero habit incentives, resulting in >80% user drop-off within the first 14 days.',
    targetAudience: 'Individuals aged 18–45: Fitness beginners, gym lifters, weight management seekers, and busy professionals needing flexible 7–10 minute daily routines.',
    proposedFeatures: [
      'Live Replit Web App & Mobile Build (health-journey-pro--rareprobplaycon.replit.app)',
      'Home Dashboard with Weekly 0/4 Goal Tracker, Abs 4-Move Hero & Calorie Progress',
      'Interactive Water Tracker with Visual Plant Growth & Step Radial Gauge',
      'Reports Hub with Daily Active Minutes, Calorie Ring, BMI Gauge & Weight Curves',
      'Lose Weight in 30 Days Program & Custom Workout Routine Creator',
      '28-Day Abs Core Challenge with Sedentary/Active difficulty tiers and +60 Coin bonuses',
      'Live Workout Runner with Countdown Timer, Animated Pose Guidance & Sound FX',
      '10-Project Open-Source Architecture (FastAPI, wger, SparkyFitness, Open Food Facts, Habitica, Novu, Superset, Food101, Open mHealth, Workout.cool)'
    ],
    featureRequirements: [
      { name: 'AI Meal Scanner & Open Food Facts DB', category: 'Core Feature', description: 'Camera vision meal recognition (Food101/MobileNet) paired with Open Food Facts 3M+ barcode database for instant macro logging.', priority: 'P0 - Launch Blocker' },
      { name: 'wger Workout Engine & Active Session Runner', category: 'Core Feature', description: 'Interactive countdown timer, exercise swapping modal, animated pose guides, and muscle group tagging.', priority: 'P0 - Launch Blocker' },
      { name: 'HealthKit & Google Fit Standardization', category: 'Core Feature', description: 'Zero-battery hardware step counting and Health Connect telemetry normalization using Open mHealth schemas.', priority: 'P0 - Launch Blocker' },
      { name: 'Habitica Gamification & Coin Economy', category: 'Utility', description: 'Earn gold coins from completed workouts, watch optional rewarded ads for multipliers, and maintain streak protection.', priority: 'P1 - Core UX' },
      { name: 'Novu Notification & Retention Engine', category: 'Utility', description: 'Smart context-aware reminders for hydration, daily workouts, and Sunday weekly summary progress reports.', priority: 'P1 - Core UX' }
    ],
    userFlows: [
      {
        stepNumber: '01',
        stepTitle: 'Daily Activity Check & Water Hydration',
        description: 'Logging daily hydration, heart rate check, and monitoring step progress.',
        userActions: ['Open Home Dashboard', 'Tap "+" on Water Tracker to add 6 fl oz', 'Watch plant grow from sprout to bloom', 'Tap "MEASURE" on Heart Rate widget to run simulated BPM check'],
        systemResponses: ['Update water gauge (18/24 fl oz)', 'Animate plant growth state', 'Display normal heart rate range (91 BPM)', 'Increment daily activity score and award +10 Coins'],
        edgeCases: ['Wearable disconnected → Seamlessly fallback to phone sensor and manual input']
      },
      {
        stepNumber: '02',
        stepTitle: 'Starting Day 1 of 28-Day Abs Core Challenge',
        description: 'Engaging in a guided 8-minute core routine with audio coaching.',
        userActions: ['Select Abs Core Challenge from Home', 'Choose "Very Active" difficulty tier', 'Tap "START WORKOUT"', 'Follow live 30s Jumping Jacks countdown and audio coach'],
        systemResponses: ['Launch Exercise Runner with circular timer', 'Provide animated pose cues and form tips', 'Trigger audio whistle on completion', 'Award +60 Gold Coins and advance streak to Day 4'],
        edgeCases: ['User pauses set → Retain countdown state and provide exercise info/replacement modal']
      }
    ],
    uiUxPriorities: [
      'High-contrast, clean layout matching Figma & Android production specifications.',
      'Tactile interactive controls (+/- water buttons, step meters, challenge week roadmaps).',
      'Fluid countdown animations and responsive feedback states across all screens.'
    ],
    monetizationModel: 'Hybrid Freemium: Free core step & workout tracking + Rewarded Video Ads (+60 Coins) + VIP Pro Subscription ($7.99/mo for personalized AI coaching & ad-free) + In-App Challenge Packs + Gym B2B Partnerships.',
    techStack: ['FastAPI (Python 3.11)', 'Flutter / React Native', 'PostgreSQL 16', 'wger Workout Engine', 'Open Food Facts', 'Habitica RPG', 'Novu Notifications', 'MobileNet Vision', 'Health Connect'],
    targetKpis: [
      { label: 'Day-30 Retention', target: '>52%', note: 'Driven by Habitica streak mechanics and weekly goals' },
      { label: 'Workout Completion Rate', target: '>78%', note: 'Supported by 7–10 min bite-sized programs' },
      { label: 'PRO Conversion Rate', target: '>5.8%', note: 'Freemium to VIP Pro subscription upgrade' },
      { label: 'App Store Rating', target: '4.8★', note: 'Target across Google Play & iOS App Store' }
    ]
  }
];
