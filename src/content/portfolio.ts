// ─── Navigation ───────────────────────────────────────────────────────────────

export const nav = {
  logoName: 'Yolandi Lehner',
  links: [
    { label: 'Work',    href: '/work'    },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  heading: 'Hello',
  bio: [
    "I'm Yolandi - a Senior product designer with a genuine obsession with why people do what they do, and a habit of turning that into design that works.",
    "Welcome to my portfolio; schön, dass du da bist - good to have you.",
  ],
  profileImageSrc: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto,f_auto/v1778497163/Profile_photo_sfjaho.png',
  profileImageAlt: 'Yolandi Lehner — Senior product designer',
} as const;

// ─── Values ───────────────────────────────────────────────────────────────────

export const values = {
  items: ['Curious', 'Rigorous', 'Kind', 'Beautiful'],
  description: [
    "I've always been someone who enjoys making things and looks for ways to improve what's around me. Solving a real need with a well-crafted solution is something I genuinely love.",
    "Rigorous is how I follow through. I think systematically, sweat the details, and hold my work to a high standard, not because I'm precious about it, but because I think good design and shipped design can be the same thing.",
    "Kind and honest is how I show up. To me it's non-negotiable, in how I collaborate, how I give feedback, and how I design for people I'll never meet.",
    "Beautiful is the part I refuse to compromise on. Function without craft is a missed opportunity. The details that make something feel considered, not just correct, matter to me.",
  ],
} as const;

// ─── Ticker ───────────────────────────────────────────────────────────────────

export const ticker = {
  featuredWork: 'Featured work',
  background:   'Background',
} as const;

// ─── Featured Work ────────────────────────────────────────────────────────────

export const featuredWork = {
  featured: {
    number:       '01',
    title:        'Dexus digital transformation.',
    tags:         'Research · Information Architecture · Design Systems',
    description:  "A $51.5 billion real estate portfolio. A website that couldn't tell an investor from a tenant.",
    thumbnailSrc: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto,f_auto/v1778584285/Dexus_project_thumbnail_litcor.png',
    thumbnailAlt: 'Dexus digital transformation project thumbnail',
    slug:         'dexus',
  },
  projects: [
    {
      number:      '02',
      title:       'FRNSW Service booking system.',
      tags:        'Service · Design · Research UX Design',
      description: 'The work that prevents fire emergencies before they happen was being tracked in personal diaries.',
      slug:        'frnsw',
    },
    {
      number:      '03',
      title:       'Case study heading.',
      tags:        'Service · Design · Research UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      slug:        'case-study-3',
    },
    {
      number:      '04',
      title:       'Case study heading.',
      tags:        'Service · Design · Research UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      slug:        'case-study-4',
    },
  ],
  seeAllHref: '/work',
} as const;

// ─── Background ───────────────────────────────────────────────────────────────

export const background = {
  jobs: [
    {
      company:     'Ogilvy',
      logoSrc:     'https://www.figma.com/api/mcp/asset/689213b7-cc5b-4e29-885e-4873e6a5d068',
      logoAlt:     'Ogilvy',
      logoWidth:   61,
      logoHeight:  24,
      title:       'Senior Experience Designer',
      period:      '2022–Present · Sydney',
      description: 'End-to-end experience design across a diverse portfolio of household names, including Spotify, Cadbury, KFC, and Lululemon. From CX strategy and design systems to gamifying competitions and website ecosystems, no two briefs or projects looked the same. Promoted to Senior during my tenure.',
    },
    {
      company:     'Endeavour Group',
      logoSrc:     'https://www.figma.com/api/mcp/asset/0ba3c1cd-7e0d-4e06-b88e-fd52a995bc98',
      logoAlt:     'Endeavour Group',
      logoWidth:   78,
      logoHeight:  24,
      title:       'UX Designer',
      period:      '2021–2022 · Sydney',
      description: "UX research and design for Australia's largest liquor retailer, across the Dan Murphy's and BWS digital ecosystem. I focused on site search and the customer-facing chatbot, designing for an audience of millions across app and web.",
    },
    {
      company:     'Zookal',
      logoSrc:     'https://www.figma.com/api/mcp/asset/79194ad1-8294-404f-823a-85e823507428',
      logoAlt:     'Zookal',
      logoWidth:   65,
      logoHeight:  12,
      title:       'Product Designer',
      period:      '2021 (contract) · Sydney',
      description: "Brought in as a contractor to lead research for Zookal's expansion into the Philippines and Singapore, then rolled my findings directly into designing two new learning features: flashcards and video learning. An early role that taught me how good research and good design are inseparable.",
    },
  ],
  resumeHref:   '#',
  linkedinHref: 'https://www.linkedin.com/in/yolandilehner/',
} as const;

// ─── Footer ───────────────────────────────────────────────────────────────────

export const footer = {
  name: 'Yolandi Lehner',
  currently: {
    role:     'Experience Designer, Ogilvy',
    location: 'Sydney, Aus',
  },
  contact: {
    linkedinLabel: 'LinkedIn',
    linkedinHref:  'https://www.linkedin.com/in/yolandilehner/',
    emailLabel:    'yolandi.uxdesign@gmail.com',
    emailHref:     'mailto:yolandi.uxdesign@gmail.com',
  },
  copyright: '© 2026 Yolandi Lehner',
} as const;

// ─── Work Page ────────────────────────────────────────────────────────────────

export const workPage = {
  caseStudies: [
    {
      number:       '01',
      title:        'Dexus digital transformation.',
      tags:         'Research · Information Architecture · Design Systems',
      description:  "A $51.5 billion real estate portfolio. A website that couldn't tell an investor from a tenant.",
      thumbnailSrc: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto,f_auto/v1778584285/Dexus_project_thumbnail_litcor.png' as string | null,
      thumbnailAlt: 'Dexus digital transformation project thumbnail',
      slug:         'dexus',
    },
    {
      number:       '02',
      title:        'FRNSW Service booking system.',
      tags:         'Service · Design · Research UX Design',
      description:  'The work that prevents fire emergencies before they happen was being tracked in personal diaries.',
      thumbnailSrc: null,
      thumbnailAlt: 'FRNSW Service booking system project thumbnail',
      slug:         'frnsw',
    },
    {
      number:       '03',
      title:        'Case study heading.',
      tags:         'Service · Design · Research UX Design',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      thumbnailSrc: null,
      thumbnailAlt: 'Case study thumbnail',
      slug:         'case-study-3',
    },
    {
      number:       '04',
      title:        'Case study heading.',
      tags:         'Service · Design · Research UX Design',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      thumbnailSrc: null,
      thumbnailAlt: 'Case study thumbnail',
      slug:         'case-study-4',
    },
    {
      number:       '05',
      title:        'Case study heading.',
      tags:         'Service · Design · Research UX Design',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      thumbnailSrc: null,
      thumbnailAlt: 'Case study thumbnail',
      slug:         'case-study-5',
    },
    {
      number:       '06',
      title:        'Case study heading.',
      tags:         'Service · Design · Research UX Design',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      thumbnailSrc: null,
      thumbnailAlt: 'Case study thumbnail',
      slug:         'case-study-6',
    },
  ],
};

// ─── Case Study Pages ─────────────────────────────────────────────────────────

export type CaseStudyStat = {
  number:      string;
  description: string;
};

export type CaseStudyContextItem = {
  icon:    string;
  heading: string;
  body:    string[];
};

export type CaseStudyGalleryImage = {
  src:     string;
  alt:     string;
  caption: string;
};

export type CaseStudyPage = {
  slug:                string;
  title:               string;
  role:                string;
  company:             string;
  year:                string;
  tags:                string;
  description:         string;
  heroImageSrc:        string | null;
  heroImageAlt:        string;
  stats:               CaseStudyStat[];
  executiveSummary:    string[];
  contextTagline:      string;
  contextItems:        CaseStudyContextItem[];
  gallery:             CaseStudyGalleryImage[];
  scrollCardsTagline:  string;
  scrollCards:         CaseStudyContextItem[];
};

export const caseStudyPages: Record<string, CaseStudyPage> = {
  dexus: {
    slug:         'dexus',
    title:        'Dexus digital transformation.',
    role:         'UX/UI Designer',
    company:      'Ogilvy',
    year:         '2025',
    tags:         'Research · Information Architecture · Design Systems',
    description:  "A $51.5 billion real estate portfolio. A website that couldn't tell an investor from a tenant.",
    heroImageSrc: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto,f_auto/v1778584285/Dexus_project_thumbnail_litcor.png',
    heroImageAlt: 'Dexus digital transformation — project hero',
    stats: [
      {
        number:      '01',
        description: 'Reduced the time to update retail microsite content from 2 weeks to 2 hours through a redesigned retailer portal.',
      },
      {
        number:      '02',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        number:      '03',
        description: 'Lorem ipsum dolor sit amet.',
      },
    ],
    executiveSummary: [
      "Dexus manages one of Australasia's largest real estate and infrastructure portfolios, valued at $51.5 billion. Their digital presence hadn't kept pace. A single website was trying to serve two fundamentally different audiences through the same navigation, the same page structure, and the same content. Investors and commercial tenants were arriving with completely different jobs to do, and the site was failing both of them.",
      "This project was a full digital transformation of dexus.com, built on Adobe Experience Manager, covering the corporate site redesign, eleven audience-specific page templates, and a design system that ultimately had to flex across 26 retail and commercial property microsites.",
    ],
    contextTagline: 'One website. Two audiences. None of them finding what they needed.',
    gallery: [
      { src: '', alt: 'Gallery image 1', caption: 'Caption placeholder.' },
      { src: '', alt: 'Gallery image 2', caption: 'Caption placeholder.' },
      { src: '', alt: 'Gallery image 3', caption: 'Caption placeholder.' },
    ],
    scrollCardsTagline: 'two audiences. completely different jobs to do.',
    scrollCards: [
      {
        icon:    'people',
        heading: 'the research pointed to a structural problem, not a content problem.',
        body: [
          'The temptation in a project like this is to fix the content. Write clearer copy. Add more information. Surface the PDFs. But the research kept pointing to something deeper. The navigation labels were internally logical but externally meaningless. "Asset Portfolio" triggered investment associations for leasing audiences. "ESG" meant nothing to first-time investors trying to understand what Dexus stood for. Forcing two distinct audiences with completely different mental models into shared pathways was the root cause of most usability failures.',
        ],
      },
      {
        icon:    'hand',
        heading: 'two ways to fix it. one clear recommendation.',
        body: [
          'I consolidated the findings and led the IA process, presenting two structural options to the client. A static navigation: a single fixed menu serving all audiences, simpler to build and maintain. Or a contextual navigation: a dynamic structure where the experience shifts based on whether the user is here to invest or here to lease, used by firms like BlackRock, Vanguard, and Morgan Stanley.',
          "The recommendation was contextual. The two audiences had almost no overlap in what they needed, and corporate information, while relevant to both, worked better as shared context sitting across both experiences rather than as a third pathway competing for attention.",
        ],
      },
      {
        icon:    'warning',
        heading: 'three contexts. one domain.',
        body: [
          'The result was three distinct navigation experiences within a single website. Each has its own terminology, pathways, and calls to action. A financial advisor looking for fund performance lands in a completely different experience to a commercial tenant searching for office space. Same domain. No shared confusion.',
        ],
      },
    ],
    contextItems: [
      {
        icon:    'gear',
        heading: 'The site was structured around Dexus, not around its users.',
        body: [
          "Dexus's existing website mixed investor information, leasing content, and corporate communications into a single navigation. A financial advisor looking for fund performance data had to navigate the same menus as a commercial tenant searching for office space in Sydney's CBD. Neither could find what they needed quickly, and both were leaving to find it elsewhere.",
          "Investors were relying on third-party tools because Dexus's own fund data was hard to find and out of date. Commercial tenants described the site as intentionally vague, frustrated by missing floor plans, hidden pricing, and navigation that didn't match how they actually searched for space.",
        ],
      },
      {
        icon:    'shapes',
        heading: 'We went to the source.',
        body: [
          'We ran two separate research streams: investor interviews exploring how financial advisors and institutional investors discovered, evaluated, and acted on fund information, and leasing research covering how commercial tenants found and assessed properties. Stakeholder workshops brought Dexus\'s internal teams in to align on what the site needed to achieve for the business.',
          'The finding was consistent across both streams. 90% of first visits began in-context, meaning users arrived already knowing what they were looking for. The site wasn\'t built to receive them that way.',
        ],
      },
      {
        icon:    'thinking',
        heading: 'The site architecture was the problem, not the content.',
        body: [
          'A card sorting exercise and stakeholder workshop revealed that the underlying information architecture was forcing unrelated audiences into the same pathways. The navigation labels were internally logical but externally meaningless. Terms like "Asset Portfolio" meant investment to one audience and property listing to another. "ESG" meant nothing to a first-time investor who just wanted to understand what Dexus stood for.',
          "The fix wasn't more content. It was separating the journeys entirely.",
        ],
      },
    ],
  },
  frnsw: {
    slug:         'frnsw',
    title:        'FRNSW Service booking system.',
    role:         'UX/UI Designer',
    company:      'Ogilvy',
    year:         '2024',
    tags:         'Service · Design · Research UX Design',
    description:  'The work that prevents fire emergencies before they happen was being tracked in personal diaries.',
    heroImageSrc: null,
    heroImageAlt: 'FRNSW Service booking system — project hero',
    stats: [
      { number: '01', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { number: '02', description: 'Lorem ipsum dolor sit amet.' },
      { number: '03', description: 'Lorem ipsum.' },
    ],
    executiveSummary:   [],
    contextTagline:     '',
    contextItems:       [],
    gallery:            [],
    scrollCardsTagline: '',
    scrollCards:        [],
  },
  'case-study-3': {
    slug:         'case-study-3',
    title:        'Case study heading.',
    role:         'UX Designer',
    company:      'Ogilvy',
    year:         '2024',
    tags:         'Service · Design · Research UX Design',
    description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    heroImageSrc: null,
    heroImageAlt: 'Case study — project hero',
    stats: [
      { number: '01', description: 'Lorem ipsum dolor sit amet.' },
      { number: '02', description: 'Lorem ipsum dolor sit amet.' },
      { number: '03', description: 'Lorem ipsum.' },
    ],
    executiveSummary:   [],
    contextTagline:     '',
    contextItems:       [],
    gallery:            [],
    scrollCardsTagline: '',
    scrollCards:        [],
  },
  'case-study-4': {
    slug:         'case-study-4',
    title:        'Case study heading.',
    role:         'UX Designer',
    company:      'Ogilvy',
    year:         '2024',
    tags:         'Service · Design · Research UX Design',
    description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    heroImageSrc: null,
    heroImageAlt: 'Case study — project hero',
    stats: [
      { number: '01', description: 'Lorem ipsum dolor sit amet.' },
      { number: '02', description: 'Lorem ipsum dolor sit amet.' },
      { number: '03', description: 'Lorem ipsum.' },
    ],
    executiveSummary:   [],
    contextTagline:     '',
    contextItems:       [],
    gallery:            [],
    scrollCardsTagline: '',
    scrollCards:        [],
  },
  'case-study-5': {
    slug:         'case-study-5',
    title:        'Case study heading.',
    role:         'UX Designer',
    company:      'Ogilvy',
    year:         '2024',
    tags:         'Service · Design · Research UX Design',
    description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    heroImageSrc: null,
    heroImageAlt: 'Case study — project hero',
    stats: [
      { number: '01', description: 'Lorem ipsum dolor sit amet.' },
      { number: '02', description: 'Lorem ipsum dolor sit amet.' },
      { number: '03', description: 'Lorem ipsum.' },
    ],
    executiveSummary:   [],
    contextTagline:     '',
    contextItems:       [],
    gallery:            [],
    scrollCardsTagline: '',
    scrollCards:        [],
  },
  'case-study-6': {
    slug:         'case-study-6',
    title:        'Case study heading.',
    role:         'UX Designer',
    company:      'Ogilvy',
    year:         '2024',
    tags:         'Service · Design · Research UX Design',
    description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    heroImageSrc: null,
    heroImageAlt: 'Case study — project hero',
    stats: [
      { number: '01', description: 'Lorem ipsum dolor sit amet.' },
      { number: '02', description: 'Lorem ipsum dolor sit amet.' },
      { number: '03', description: 'Lorem ipsum.' },
    ],
    executiveSummary:   [],
    contextTagline:     '',
    contextItems:       [],
    gallery:            [],
    scrollCardsTagline: '',
    scrollCards:        [],
  },
};

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials = {
  quotes: [
    {
      text: "One of the most passionate and naturally gifted designers I've worked with.",
      name: 'Alice Zhong',
      role: 'Senior Strategic Designer',
    },
    {
      text: 'Absolutely amazing. Curious, smart, attentive to detail — and always ready to go above and beyond.',
      name: 'Alvin Goh',
      role: 'Principal UX Designer, Autodesk',
    },
    {
      text: 'Talented and hardworking, yet so very humble. Trusted and accountable — and the kind of person who brings warmth to any team.',
      name: 'Veronica Jorge Calcagno',
      role: 'Head of Customer Engagement Platform, Zurich',
    },
  ],
} as const;
