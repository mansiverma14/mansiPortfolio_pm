export interface VpnCaseStudyData {
  header: {
    category: string;
    subCategory: string;
    title: string;
    appName: string;
    subtitle: string;
    role: string;
    tools: string[];
    businessModel: string[];
    skills: string[];
  };
  section01_businessProblem: {
    headline: string;
    description: string;
    majorIssues: string[];
  };
  section02_initialMetrics: {
    title: string;
    metricsTable: Array<{ metric: string; value: string }>;
  };
  section03_productHealthAnalysis: {
    title: string;
    description: string;
    investigatedAreas: string[];
  };
  section04_funnelAnalysis: {
    title: string;
    steps: Array<{ label: string; value: string; dropoff?: string }>;
    problem: string;
    conversionRate: string;
    meaning: string;
    subMeaning: string;
  };
  section05_homeScreenAnalysis: {
    title: string;
    connectedUsers: string;
    premiumClickedUsers: string;
    findings: string[];
    meaning: string[];
  };
  section06_countryAnalysis: {
    title: string;
    description: string;
    segments: Array<{
      category: string;
      countries: string[];
      badgeColor: string;
    }>;
    recommendation: string;
  };
  section07_countryPackPreference: {
    title: string;
    ltoTitle: string;
    ltoPurchases: Array<{ country: string; purchases: number }>;
    yearlyPlanBestCountries: string[];
    monthlyPlanStrongCountries: string[];
    keyInsight: string;
  };
  section08_admobAnalysis: {
    title: string;
    finding: string;
    limitedBy: string[];
  };
  section09_mediationOptimization: {
    title: string;
    optimizedCountries: string[];
    actions: string[];
    expected: string[];
  };
  section10_paywallImprovements: {
    title: string;
    recommendations: string[];
  };
  section11_homeUxImprovements: {
    title: string;
    designedFlow: string[];
    rationale: string;
    outcome: string;
  };
  section12_experimentsPlanned: {
    title: string;
    experiments: Array<{
      id: string;
      testName: string;
      variantA: string;
      variantB: string;
      hypothesis: string;
    }>;
  };
  section13_expectedImpact: {
    title: string;
    impactList: Array<{ metric: string; direction: string }>;
  };
  section14_productThinking: {
    title: string;
    insteadOfAsking: string;
    iAsked: string;
    outcomeNarrative: string;
  };
  section15_myContributions: {
    title: string;
    contributions: string[];
  };
}

export const VPN_CASE_STUDY_DATA: VpnCaseStudyData = {
  header: {
    category: 'Product & Feature Work',
    subCategory: 'Tools',
    title: 'vpn-App- Improving Revenue through Product Analytics, Funnel Optimization & AdMob Mediation',
    appName: 'VPN Product Case Study',
    subtitle: 'End-to-End Product Analysis: Data Driven Insights · Product Analysis · User Behavior Insights · Growth Strategy',
    role: 'Product Manager',
    tools: ['Firebase', 'GA4', 'BigQuery', 'SQL', 'AdMob', 'A/B Testing'],
    businessModel: [
      'Ads (Interstitial, Rewarded, Native)',
      'Premium Subscription',
      'LTO Offers'
    ],
    skills: [
      'Product Analytics',
      'Firebase',
      'BigQuery',
      'SQL',
      'AdMob Mediation',
      'Monetization',
      'Funnel Analysis',
      'Experiment Design',
      'Paywall Optimization'
    ]
  },
  section01_businessProblem: {
    headline: 'Business Problem',
    description: 'Although the VPN had millions of active users, Revenue was continuously declining.',
    majorIssues: [
      'Low D1 retention',
      'Premium clicks were extremely low',
      'Poor Paywall Conversion',
      'Weak Ad Viewer Rate',
      'Incorrect mediation floors',
      'Country monetization strategy missing'
    ]
  },
  section02_initialMetrics: {
    title: 'Initial Metrics',
    metricsTable: [
      { metric: 'D1 Retention', value: '10%' },
      { metric: 'D7 Retention', value: '2.1%' },
      { metric: 'Premium Visitors', value: '15,132' },
      { metric: 'Buy Click Users', value: '3,998' },
      { metric: 'Purchases', value: '136' },
      { metric: 'Purchase Rate', value: '0.9%' },
      { metric: 'Premium CTR', value: '26.4%' },
      { metric: 'Revenue Trend', value: 'Declining' }
    ]
  },
  section03_productHealthAnalysis: {
    title: 'Product Health Analysis',
    description: 'I started with Firebase, Google Play Console, GA4 & BigQuery analysis.',
    investigatedAreas: [
      'Active users',
      'Retention',
      'Engagement',
      'AdMob',
      'Premium funnel',
      'Home screen usage',
      'Country behaviour',
      'Purchase behaviour'
    ]
  },
  section04_funnelAnalysis: {
    title: 'Funnel Analysis',
    steps: [
      { label: 'Users', value: '15,132' },
      { label: 'Clicked Buy', value: '3,998', dropoff: '26.4% of total users clicked Buy' },
      { label: 'Purchased', value: '136', dropoff: 'Only 3.4% of users who clicked Buy converted' }
    ],
    conversionRate: '3.4%',
    problem: 'Only 3.4% of users who clicked Buy actually purchased.',
    meaning: "The issue wasn't premium discovery.",
    subMeaning: 'The issue was checkout & paywall conversion.'
  },
  section05_homeScreenAnalysis: {
    title: 'Home Screen Analysis',
    connectedUsers: '147K',
    premiumClickedUsers: '10.6K',
    findings: [
      '147K users successfully connected',
      'Only 10.6K users clicked Premium'
    ],
    meaning: [
      'Users loved VPN',
      'Users ignored Premium',
      'Huge discovery issue.'
    ]
  },
  section06_countryAnalysis: {
    title: 'Country Analysis',
    description: 'Instead of treating every country equally, I segmented countries.',
    segments: [
      {
        category: 'High Revenue',
        countries: ['UAE', 'Taiwan', 'US', 'UK', 'France', 'South Korea'],
        badgeColor: 'emerald'
      },
      {
        category: 'High Traffic',
        countries: ['India', 'Indonesia', 'Canada'],
        badgeColor: 'blue'
      },
      {
        category: 'Non Monetizable',
        countries: ['Russia', 'Iran'],
        badgeColor: 'rose'
      }
    ],
    recommendation: 'Different monetization strategy for every segment instead of one global paywall.'
  },
  section07_countryPackPreference: {
    title: 'Country-wise Pack Preference',
    ltoTitle: 'LTO Pack (Most Popular)',
    ltoPurchases: [
      { country: 'Canada', purchases: 11 },
      { country: 'Brazil', purchases: 9 },
      { country: 'UAE', purchases: 9 },
      { country: 'Saudi Arabia', purchases: 8 },
      { country: 'Taiwan', purchases: 8 },
      { country: 'USA', purchases: 8 },
      { country: 'UK', purchases: 7 },
      { country: 'South Korea', purchases: 6 },
      { country: 'Switzerland', purchases: 5 }
    ],
    yearlyPlanBestCountries: ['Canada', 'UAE', 'USA', 'Pakistan', 'India'],
    monthlyPlanStrongCountries: ['Canada', 'India', 'Italy', 'Russia'],
    keyInsight: 'Almost 80% of purchases were LTO offers, confirming LTO as the preferred monetization strategy.'
  },
  section08_admobAnalysis: {
    title: 'AdMob Analysis',
    finding: "Revenue wasn't limited by eCPM.",
    limitedBy: [
      'Match rate',
      'Fill rate',
      'Ad Viewer Rate',
      'Country waterfall'
    ]
  },
  section09_mediationOptimization: {
    title: 'Mediation Optimization',
    optimizedCountries: ['UAE', 'US/Vietnam', 'South Korea'],
    actions: [
      'Lowered unnecessary floors',
      'Added missing layers',
      'Split high-value countries',
      'Country-wise waterfalls'
    ],
    expected: [
      'Higher fill',
      'Higher match',
      'Better auction efficiency'
    ]
  },
  section10_paywallImprovements: {
    title: 'Paywall Improvements',
    recommendations: [
      'Country specific plans',
      'Default selected plan',
      'Weekly plan for India',
      'LTO recommendation',
      'Better value messaging',
      'Remove confusion',
      'Show trial benefits'
    ]
  },
  section11_homeUxImprovements: {
    title: 'Home UX Improvements',
    designedFlow: [
      'After connection',
      'Premium Bottom Sheet',
      'Fastest Server',
      'Recent Server',
      'Premium CTA'
    ],
    rationale: 'Instead of showing premium immediately.',
    outcome: 'This reduced interruption while increasing premium discovery.'
  },
  section12_experimentsPlanned: {
    title: 'Experiments Planned',
    experiments: [
      {
        id: 'ab-1',
        testName: 'A/B Test 1',
        variantA: '3 successful connections',
        variantB: 'Immediately',
        hypothesis: 'Premium after 3 successful connections vs Immediately'
      },
      {
        id: 'ab-2',
        testName: 'A/B Test 2',
        variantA: 'After Disconnect',
        variantB: 'On Home',
        hypothesis: 'LTO After Disconnect vs On Home'
      },
      {
        id: 'ab-3',
        testName: 'A/B Test 3',
        variantA: 'Country-specific paywall',
        variantB: 'Global Paywall',
        hypothesis: 'Country-specific paywall vs Global Paywall'
      },
      {
        id: 'ab-4',
        testName: 'A/B Test 4',
        variantA: 'Weekly Plan',
        variantB: 'Monthly Only',
        hypothesis: 'Weekly Plan vs Monthly Only'
      }
    ]
  },
  section13_expectedImpact: {
    title: 'Expected Impact',
    impactList: [
      { metric: 'Retention', direction: '↑' },
      { metric: 'Premium CTR', direction: '↑' },
      { metric: 'Purchase Conversion', direction: '↑' },
      { metric: 'Ad Revenue', direction: '↑' },
      { metric: 'Fill Rate', direction: '↑' },
      { metric: 'Match Rate', direction: '↑' },
      { metric: 'LTV', direction: '↑' }
    ]
  },
  section14_productThinking: {
    title: 'Product Thinking',
    insteadOfAsking: 'How do we increase revenue?',
    iAsked: "Why aren't users purchasing?",
    outcomeNarrative:
      "That shifted the work from feature building to behavior analysis, leading to recommendations across funnel optimization, country segmentation, mediation strategy, paywall design, and experimentation."
  },
  section15_myContributions: {
    title: 'My Contributions',
    contributions: [
      'Product Analytics (Firebase, GA4, BigQuery, SQL)',
      'Funnel & Retention Analysis',
      'AdMob Mediation Optimization',
      'Country-wise Monetization Strategy',
      'Paywall Redesign Recommendations',
      'Pack Preference Analysis',
      'Experiment Design (A/B Testing)',
      'Executive Product Reporting'
    ]
  }
};
