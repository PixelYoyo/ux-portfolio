// ─── Navigation ───────────────────────────────────────────────────────────────

export const nav = {
  logoName: 'Yolandi Lehner',
  links: [
    { label: 'Work',    href: '/work'    },
    { label: 'Contact', href: 'mailto:yolandi.uxdesign@gmail.com' },
  ],
} as const;

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  heading: 'Hello',
  bio: [
    "I'm Yolandi - a senior product designer with a methodical, systems-first approach, applying behavioural design to connect business goals with what people actually need.",
    "Welcome to my portfolio; schön, dass du da bist - good to have you.",
  ],
  profileImageSrc: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1778497163/Profile_photo_sfjaho.png?v=2',
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
    thumbnailSrc: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782210430/Dexus_case_study_image_tpyxmq.png?v=2',
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
      title:       'Design system aware super.',
      tags:        'Design Systems · Audit · Governance',
      description: 'Two design libraries pulling in different directions, and no one owning the whole system. I built the audit and documentation framework that unified them.',
      slug:        'aware-super',
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
      title:       'Senior CX Consultant',
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
      thumbnailSrc: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782210430/Dexus_case_study_image_tpyxmq.png?v=2' as string | null,
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
      title:        'Design system aware super.',
      tags:         'Design Systems · Audit · Governance',
      description:  'Two design libraries pulling in different directions, and no one owning the whole system. I built the audit and documentation framework that unified them.',
      thumbnailSrc: 'https://res.cloudinary.com/drd6p33en/image/upload/v1783749758/Aware_Super_case_study_image_yke1iu.png',
      thumbnailAlt: 'Aware Super design system case study thumbnail',
      slug:         'aware-super',
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
  iconUrl: string;
  iconAlt: string;
  heading: string;
  body:    string[];
};

export type CaseStudyGalleryImage = {
  src:     string;
  alt:     string;
  caption: string;
};

export type CaseStudyDesignItem = {
  heading:      string;
  body:         string[];
  imageSrc:     string;
  imageAlt:     string;
  imageCaption: string;
};

export type CaseStudyGridImage = {
  src: string;
  alt: string;
};

export type CaseStudyQuote = {
  text:        string;
  attribution: string;
};

export type CaseStudyDetail = {
  label: string;
  value: string;
};

export type CaseStudyLinkGroup = {
  category: string;
  links:    { label: string; href: string }[];
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
  showHeroImage:       boolean;
  videoSrc:            string | null;
  showVideo:           boolean;
  stats:               CaseStudyStat[];
  executiveSummary:    string[];
  contextTagline:      string;
  contextItems:        CaseStudyContextItem[];
  gallery:             CaseStudyGalleryImage[];
  scrollCardsTagline:  string;
  scrollCards:         CaseStudyContextItem[];
  designTagline:       string;
  designItems:         CaseStudyDesignItem[];
  imageGrid:           CaseStudyGridImage[];
  quotes:              CaseStudyQuote[];
  reflectionTagline:   string;
  reflectionItems:     CaseStudyContextItem[];
  details:             CaseStudyDetail[];
  linkGroups:          CaseStudyLinkGroup[];
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
    heroImageSrc: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782210430/Dexus_case_study_image_tpyxmq.png?v=2',
    heroImageAlt: 'Dexus digital transformation — project hero',
    showHeroImage: true,
    videoSrc:     null,
    showVideo:    false,
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
      {
        src:     'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782614097/Dexus_wireframes_htcmwt.png?v=2',
        alt:     'Early wireframes of the new dexus.com',
        caption: 'early wireframes of the new dexus.com',
      },
    ],
    designTagline: 'a $51.5 billion portfolio deserved a digital presence to match.',
    designItems: [
      {
        heading: 'the marketing team had a vision. they just needed help making the case',
        body: [
          "Dexus's marketing team came into this project with a clear ambition: a contemporary, premium digital experience that could win a design award. The problem wasn't vision. It was that the broader business, more conservative and harder to move, needed convincing.",
          'The existing site reflected that conservatism. Heavy layouts, cluttered pages, and a dominant teal green that had become so associated with the old brand it was holding the new one back. Bold typography, generous white space, and modern layouts were a significant departure from what the business was used to seeing.',
          'My role was to help the marketing team build the internal case for that change. I put together a presentation that combined competitor benchmarking, showing what premium looked like in this space and where Dexus was falling behind, with a rationale for the specific design decisions we were proposing, including why the teal needed to go. The marketing team took that into the broader business. They got most of what they wanted.',
        ],
        imageSrc:     'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782328154/the_marketing_team_had_a_vision._they_just_needed_help_making_the_case_1_bckxqk.png?v=2',
        imageAlt:     'Slides used as visual aids to support contemporary design',
        imageCaption: 'Slides we used as visual aids to support contemporary design.',
      },
      {
        heading: 'interaction design as a brand signal.',
        body: [
          "A contemporary feel isn't just about how something looks. It's about how it moves. I made the case for bringing interaction design into the project — transitions and scroll behaviour that made the site feel considered and premium in a way that static design alone couldn't achieve. That rationale was part of the same deck the marketing team used to get sign-off.",
        ],
        imageSrc:     'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782328154/interaction_design_as_a_brand_signal_1_xg2zl2.png?v=2',
        imageAlt:     'Interaction design as a brand signal',
        imageCaption: 'Slides we used as visual aids to support contemporary design.',
      },
      {
        heading: 'one system. twenty-six sites. built in the wrong order.',
        body: [
          'Midway through the project, leadership confirmed that the design system built for the corporate site also needed to serve 13 retail shopping centre sites, 9 commercial property sites, and 2 premium property sites, each with their own distinct branding.',
          "We had to retrofit — and the Figma variables we already set up made it manageable. By structuring the system with properly mapped colour and typography tokens, switching between brand modes became a matter of changing the variable set rather than rebuilding components. I ran hands-on practice sessions with the visual design team so they could apply variables confidently across all 26 brand modes.",
          'The page templates and AEM infrastructure gave Dexus a modular system for building and updating pages consistently long after Ogilvy handed over. For a business that constantly acquires and divests assets, that kind of maintainability matters.',
        ],
        imageSrc:     'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782328153/one_system._twenty-six_sites._built_in_the_wrong_order._cyss1d.png?v=2',
        imageAlt:     'Design system across twenty-six sites',
        imageCaption: 'Slides we used as visual aids to support contemporary design.',
      },
    ],
    scrollCardsTagline: 'two audiences. completely different jobs to do.',
    scrollCards: [
      {
        icon:    'people',
        iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782298722/People_lavbim.svg',
        iconAlt: '',
        heading: 'the research pointed to a structural problem, not a content problem.',
        body: [
          'The temptation in a project like this is to fix the content. Write clearer copy. Add more information. Surface the PDFs. But the research kept pointing to something deeper. The navigation labels were internally logical but externally meaningless. "Asset Portfolio" triggered investment associations for leasing audiences. "ESG" meant nothing to first-time investors trying to understand what Dexus stood for. Forcing two distinct audiences with completely different mental models into shared pathways was the root cause of most usability failures.',
        ],
      },
      {
        icon:    'hand',
        iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782298722/Hand_rsimvv.svg',
        iconAlt: '',
        heading: 'two ways to fix it. one clear recommendation.',
        body: [
          'I consolidated the findings and led the IA process, presenting two structural options to the client. A static navigation: a single fixed menu serving all audiences, simpler to build and maintain. Or a contextual navigation: a dynamic structure where the experience shifts based on whether the user is here to invest or here to lease, used by firms like BlackRock, Vanguard, and Morgan Stanley.',
          "The recommendation was contextual. The two audiences had almost no overlap in what they needed, and corporate information, while relevant to both, worked better as shared context sitting across both experiences rather than as a third pathway competing for attention.",
        ],
      },
      {
        icon:    'warning',
        iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782298722/Warning_bjrljh.svg',
        iconAlt: '',
        heading: 'three contexts. one domain.',
        body: [
          'The result was three distinct navigation experiences within a single website. Each has its own terminology, pathways, and calls to action. A financial advisor looking for fund performance lands in a completely different experience to a commercial tenant searching for office space. Same domain. No shared confusion.',
        ],
      },
    ],
    contextItems: [
      {
        icon:    'gear',
        iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782297832/Gear_torym9.svg',
        iconAlt: '',
        heading: 'The site was structured around Dexus, not around its users.',
        body: [
          "Dexus's existing website mixed investor information, leasing content, and corporate communications into a single navigation. A financial advisor looking for fund performance data had to navigate the same menus as a commercial tenant searching for office space in Sydney's CBD. Neither could find what they needed quickly, and both were leaving to find it elsewhere.",
          "Investors were relying on third-party tools because Dexus's own fund data was hard to find and out of date. Commercial tenants described the site as intentionally vague, frustrated by missing floor plans, hidden pricing, and navigation that didn't match how they actually searched for space.",
        ],
      },
      {
        icon:    'shapes',
        iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782297847/shapes_pssqgy.svg',
        iconAlt: '',
        heading: 'We went to the source.',
        body: [
          'We ran two separate research streams: investor interviews exploring how financial advisors and institutional investors discovered, evaluated, and acted on fund information, and leasing research covering how commercial tenants found and assessed properties. Stakeholder workshops brought Dexus\'s internal teams in to align on what the site needed to achieve for the business.',
          'The finding was consistent across both streams. 90% of first visits began in-context, meaning users arrived already knowing what they were looking for. The site wasn\'t built to receive them that way.',
        ],
      },
      {
        icon:    'thinking',
        iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782297631/thinking_xsnwnt.svg',
        iconAlt: '',
        heading: 'The site architecture was the problem, not the content.',
        body: [
          'A card sorting exercise and stakeholder workshop revealed that the underlying information architecture was forcing unrelated audiences into the same pathways. The navigation labels were internally logical but externally meaningless. Terms like "Asset Portfolio" meant investment to one audience and property listing to another. "ESG" meant nothing to a first-time investor who just wanted to understand what Dexus stood for.',
          "The fix wasn't more content. It was separating the journeys entirely.",
        ],
      },
    ],
    imageGrid: [
      { src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329439/Dexus_image_grid_design_1_eh0xmi.png?v=2', alt: 'Dexus homepage redesign' },
      { src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329437/Dexus_image_grid_design_2_w2ekvx.png?v=2', alt: 'Dexus investment platform design' },
      { src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329437/Dexus_image_grid_design_3_k5nhuw.png?v=2', alt: 'Dexus property listing page' },
      { src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329439/Dexus_image_grid_design_4_kaewbf.png?v=2', alt: 'Dexus retail site design' },
      { src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329439/Dexus_image_grid_design_5_fexqul.png?v=2', alt: 'Dexus retailer portal' },
      { src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329439/Dexus_image_grid_design_6_xsomcu.png?v=2', alt: 'Dexus commercial property site' },
      { src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329440/Dexus_image_grid_design_7_oqtjp6.png?v=2', alt: 'Dexus premium property microsite' },
      { src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329441/Dexus_image_grid_design_8_xnlwwo.png?v=2', alt: 'Dexus One Bligh Sydney site' },
    ],
    quotes: [
      {
        text:        'What used to take me 2 weeks to update in the old retailer portal, now takes me 2 hours in the redesigned one.',
        attribution: '— Digital Marketing Manager, Dexus',
      },
    ],
    details: [
      { label: 'Name',               value: 'Dexus Digital Transformation.' },
      { label: 'Date',               value: '2025.' },
      { label: 'My role',            value: 'UX Designer, Team Ogilvy.' },
      { label: 'Key skills applied', value: 'Workshop facilitation, user research, IA architecture, user flows, design system, UI design' },
      { label: 'Team',               value: 'Project Manager, Junior UX Designer, Product Owner, Business Analyst, Tech Lead.' },
      { label: 'Platform',           value: 'Adobe Experience Manager' },
      { label: 'Tools',              value: 'Figma, Miro, Jira.' },
    ],
    linkGroups: [
      {
        category: 'Dexus corporate site',
        links: [
          { label: 'dexus.com', href: 'https://www.dexus.com/' },
        ],
      },
      {
        category: 'Selected retail microsites',
        links: [
          { label: 'Indooroopilly',  href: 'https://www.indooroopillyshopping.com.au/' },
          { label: '25 Martin Place', href: 'https://www.25martinplace.com.au/' },
          { label: 'Gateway',        href: 'https://www.gatewaysydney.com.au/' },
          { label: 'Casula Mall',    href: 'https://www.casulamall.com.au/' },
          { label: 'Royal Randwick', href: 'https://www.royalrandwick.com.au/' },
        ],
      },
      {
        category: 'Selected commercial microsites',
        links: [
          { label: 'Australia Square',    href: 'https://www.australiasquare.com.au/' },
          { label: '33 Alfred',           href: 'https://www.33alfredstreet.com.au/' },
          { label: '1 Bligh',             href: 'https://www.1bligh.com.au/' },
          { label: 'Alluvion',            href: 'https://www.alluvion.com.au/' },
          { label: 'Waterfront Brisbane', href: 'https://www.waterfrontbrisbane.com.au/' },
        ],
      },
    ],
    reflectionTagline: 'A closing reflection.',
    reflectionItems: [
      {
        icon:    'diagram',
        iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782329959/diagram_wvgrev.svg',
        iconAlt: '',
        heading: 'scope changes are design problems too.',
        body: [
          "Being told mid-project that the corporate design system also needed to serve 26 other sites was a significant constraint shift. The instinct is to treat that as a project management problem. It's actually a design problem: how do you make what you've built flexible enough to handle what you didn't know was coming? Retrofitting forced us to think more systematically about the token structure than we might have otherwise, and the system is more robust for it.",
        ],
      },
      {
        icon:    'nib',
        iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782329959/font-awesome_ksetol.svg',
        iconAlt: '',
        heading: 'research has to make the case, not just inform it.',
        body: [
          "The three-nav decision was the right call, but it required convincing a large organisation to restructure something fundamental about how they present themselves online. Having the research findings consolidated into a clear, visual argument was what made that possible. Data alone doesn't move stakeholders. A narrative built from data does.",
        ],
      },
      {
        icon:    'lightbulb',
        iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782329960/Lightbulb_mb6tsd.svg',
        iconAlt: '',
        heading: 'educating the team is part of the work.',
        body: [
          "Getting visual designers comfortable with Figma variables wasn't a side task. It was what made the design system actually work across 26 sites. The hours spent on the learning board and practice sessions directly affected the quality and consistency of the output. In complex projects, the work you do to enable your team matters as much as the work you do yourself.",
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
    showHeroImage: true,
    videoSrc:     null,
    showVideo:    false,
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
    designTagline:      '',
    designItems:        [],
    imageGrid:          [],
    quotes:             [],
    reflectionTagline:  '',
    reflectionItems:    [],
    details:            [],
    linkGroups:         [],
  },
  'aware-super': {
    slug:         'aware-super',
    title:        'Design system aware super.',
    role:         'UX/UI Designer',
    company:      'Aware Super x Ogilvy',
    year:         '2024–2025',
    tags:         'Design Systems · Audit · Governance',
    description:  'Two design libraries pulling in different directions, and no one owning the whole system. I built the audit and documentation framework that unified them.',
    heroImageSrc: 'https://res.cloudinary.com/drd6p33en/image/upload/v1783749758/Aware_Super_case_study_image_yke1iu.png',
    heroImageAlt: 'Aware Super design system — project hero',
    showHeroImage: false,
    videoSrc:     null,
    showVideo:    false,
    stats: [
      {
        number:      '01',
        description: 'Audited the entire pattern library against six criteria (consistency, accessibility, scalability, usability, brand alignment, documentation), surfacing exactly what was blocking a single source of truth.',
      },
      {
        number:      '02',
        description: "Got design, brand, and product stakeholders who'd been working from different playbooks to agree, in one workshop, on a single long-term goal, three success metrics, and five CX tenets.",
      },
      {
        number:      '03',
        description: 'Authored the documentation framework and component specs, working solo, that kicked off consolidating multiple competing Figma libraries into one.',
      },
    ],
    executiveSummary: [
      "Aware Super's design system had grown in four different directions at once. Two parallel Figma libraries had drifted apart. Frontify held a brand hub nobody fully trusted or consistently used. The live site had quietly diverged from all of it. The same button looked and behaved different depending on which file you opened. I was the sole designer on this from Ogilvy's side. I led the audit, ran the alignment workshop, and wrote the documentation standards that gave Aware Super's team one system to build from, not four. This case study covers the framework and the direction I set.",
    ],
    contextTagline: 'Two Figma libraries. One brand hub nobody trusted. No one owning the whole thing.',
    contextItems: [
      {
        icon:    'gear',
        iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782297832/Gear_torym9.svg',
        iconAlt: '',
        heading: 'A system built on drift',
        body: [
          "Aware Super's pattern library had been assembled the way most design systems accumulate problems: piece by piece, under deadline, without anyone owning the whole. Foundations and Genesis, two separate Figma files, held overlapping but inconsistent versions of the same components.",
          "Frontify existed as a brand reference, but it wasn't kept current. The live site had its own quiet variations layered on top. There were no accessibility annotations. Minimal usage guidelines. Minimal content guidelines. Minimal documented translation from brand identity to interface. It seemed that every team was designing against a slightly different truth.",
        ],
      },
      {
        icon:    'shapes',
        iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782297847/shapes_pssqgy.svg',
        iconAlt: '',
        heading: 'Evidence over opinion',
        body: [
          'It seemed that 2 camps had already formed around Foundations and Genesis, and pointing to the one or the other as the problem would have landed as my opinion, not a supported fact. So instead of an unstructured review, I scored both libraries against six criteria: consistency, accessibility, scalability, usability, brand alignment, and documentation. Every component was rated on the same scale, from "needs significant improvement" to "excellent, exceeds expectations." That meant every recommendation had a traceable reason behind it, not just a judgment call, which mattered given the eventual ask was to retire files people had built their workflows around. Combined with stakeholder interviews and a structured audit, the scoring gave us an evidence base instead of an opinion.',
          'From there the work moved in stages: audit and stress-test first, then recommendations and refinements, then consolidation and documentation. Governance and the operational rhythm for keeping the system maintained came last. It was deliberately scoped out of our initial work to pick up once the foundation was solid.',
        ],
      },
    ],
    gallery: [
      {
        src:     'https://res.cloudinary.com/demo/image/upload/c_fill,w_1400,h_788/samples/landscapes/architecture-signs.jpg',
        alt:     'Aware Super design system audit scorecard',
        caption: 'The scorecard used to evaluate both Figma libraries against six criteria.',
      },
    ],
    scrollCardsTagline: '',
    scrollCards:        [],
    designTagline: 'solo designer. a single consolidated file. one framework built to outlast them all.',
    designItems: [
      {
        heading: 'Getting the room aligned before touching the files.',
        body: [
          'Consolidating components first and arguing about direction later would have just rebuilt the same disagreement in a single file instead of four. Design, brand, and product were each carrying a different version of the same four frustrations: things were inconsistent, disorganised, poorly governed, and built in silos, with no one talking to anyone else. So the first real decision was to put the room in agreement on where the system was headed before a single component got touched.',
          "I led an immersion workshop that produced two things a scattered pattern library never had: a shared direction for what good meant for this system, and three success metrics to know whether we were actually getting there (velocity, how fast design and development could move; time, how much of it a change actually cost; and consistency, whether the same component behaved the same way everywhere).",
        ],
        imageSrc:     'https://res.cloudinary.com/demo/image/upload/c_fill,w_1200,h_800/samples/people/kitchen-bar.jpg',
        imageAlt:     'Immersion workshop aligning design, brand, and product stakeholders',
        imageCaption: 'The immersion workshop we ran to align design, brand, and product on one direction.',
      },
      {
        heading: 'From audit to action.',
        body: [
          'The audit surfaced more than one project could responsibly fix, so drawing a line around what this phase would actually solve mattered as much as the recommendations themselves.',
          'We created a single source of truth (retiring Foundations and Genesis in favour of one library), full component documentation, clearer interactive cues, and more disciplined use of colour and other UI elements. Governance, platform-specific guidelines, recurring audits, and team training were agreed as future builds. As a leave-behind, I drafted a governance decision tree mapping how to make internal decisions and how to involve different stakeholders.',
        ],
        imageSrc:     'https://res.cloudinary.com/demo/image/upload/c_fill,w_1200,h_800/samples/landscapes/nature-mountains.jpg',
        imageAlt:     'Audit findings mapped to a phased roadmap',
        imageCaption: 'Scoping which recommendations this phase would actually solve.',
      },
      {
        heading: 'Documentation as the connective tissue.',
        body: [
          "A consolidated library would only stay consolidated if the documentation made it self-explanatory, so that's what I treated as the actual deliverable, within the Figma file itself. The framework covers overview, usage guidelines, anatomy, specifications, sizes, variations, do's and don'ts, limitations and outliers, behaviours and interactions, and placement, with accessibility woven through every section instead of bolted on at the end.",
          'Rather than ask the wider team to trust an untested structure, I proved it first on a single conceptual component. It held up, and the same framework has since carried across all other components, keeping the library growing on one set of rules instead of drifting back into four.',
        ],
        imageSrc:     'https://res.cloudinary.com/demo/image/upload/c_fill,w_1200,h_800/samples/landscapes/beach-boat.jpg',
        imageAlt:     'Component documentation framework proven on a single component',
        imageCaption: 'The documentation framework, proven first on a single component before rolling out.',
      },
    ],
    imageGrid: [
      { src: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_800,h_533/samples/landscapes/architecture-signs.jpg', alt: 'Aware Super design system documentation' },
      { src: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_800,h_533/samples/people/kitchen-bar.jpg', alt: 'Aware Super component library audit' },
      { src: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_800,h_533/samples/landscapes/nature-mountains.jpg', alt: 'Aware Super button component specification' },
      { src: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_800,h_533/samples/landscapes/beach-boat.jpg', alt: 'Aware Super governance decision tree' },
      { src: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_800,h_533/samples/food/pot-mussels.jpg', alt: 'Aware Super Figma library consolidation' },
      { src: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_800,h_533/samples/animals/three-dogs.jpg', alt: 'Aware Super brand token mapping' },
      { src: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_800,h_533/sample.jpg', alt: 'Aware Super accessibility annotations' },
      { src: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_800,h_533/sample2.jpg', alt: 'Aware Super component usage guidelines' },
    ],
    quotes: [],
    details: [
      { label: 'Name',               value: 'Aware Super Design System.' },
      { label: 'Date',               value: '2024–2025.' },
      { label: 'My role',            value: 'UX/UI Designer, Ogilvy.' },
      { label: 'Key skills applied', value: 'Design systems strategy, UX audit, workshop facilitation, documentation frameworks, and governance design.' },
      { label: 'Team',               value: 'Cross-functional, Ogilvy design and strategy, Aware Super design, brand, and product stakeholders.' },
      { label: 'Availability',       value: "This work lives inside Aware Super's internal Figma libraries and Frontify brand hub. There's no public link to share." },
      { label: 'Tools',              value: 'Figma & FigJam.' },
    ],
    linkGroups: [],
    reflectionTagline: 'A closing reflection.',
    reflectionItems: [
      {
        icon:    'diagram',
        iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782329959/diagram_wvgrev.svg',
        iconAlt: '',
        heading: 'Alignment is the deliverable.',
        body: [
          "The workshop's most valuable output wasn't the sticky notes. It was getting stakeholders who'd been working from four different sources of truth to agree, out loud, on one goal.",
        ],
      },
      {
        icon:    'nib',
        iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782329959/font-awesome_ksetol.svg',
        iconAlt: '',
        heading: 'Documentation is a design decision, not an admin task.',
        body: [
          "A framework only earns its keep if it answers do's and don'ts, not just anatomy. Writing the Button example first, before rolling it out to the team, was what made the framework credible.",
        ],
      },
      {
        icon:    'lightbulb',
        iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782329960/Lightbulb_mb6tsd.svg',
        iconAlt: '',
        heading: "Governance can't be an afterthought.",
        body: [
          'It was scoped out of this phase on purpose, but designing the decision tree now meant it is ready to activate the moment the team has the bandwidth to own it.',
        ],
      },
    ],
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
    showHeroImage: true,
    videoSrc:     null,
    showVideo:    false,
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
    designTagline:      '',
    designItems:        [],
    imageGrid:          [],
    quotes:             [],
    reflectionTagline:  '',
    reflectionItems:    [],
    details:            [],
    linkGroups:         [],
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
    showHeroImage: true,
    videoSrc:     null,
    showVideo:    false,
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
    designTagline:      '',
    designItems:        [],
    imageGrid:          [],
    quotes:             [],
    reflectionTagline:  '',
    reflectionItems:    [],
    details:            [],
    linkGroups:         [],
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
    showHeroImage: true,
    videoSrc:     null,
    showVideo:    false,
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
    designTagline:      '',
    designItems:        [],
    imageGrid:          [],
    quotes:             [],
    reflectionTagline:  '',
    reflectionItems:    [],
    details:            [],
    linkGroups:         [],
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
