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
    href:         '/work/dexus',
  },
  projects: [
    {
      number:      '02',
      title:       'FRNSW Service booking system.',
      tags:        'Service · Design · Research UX Design',
      description: 'The work that prevents fire emergencies before they happen was being tracked in personal diaries.',
      href:        '/work/frnsw',
    },
    {
      number:      '03',
      title:       'Case study heading.',
      tags:        'Service · Design · Research UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      href:        '/work/case-study-3',
    },
    {
      number:      '04',
      title:       'Case study heading.',
      tags:        'Service · Design · Research UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      href:        '/work/case-study-4',
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
      href:         '/work/dexus',
    },
    {
      number:       '02',
      title:        'FRNSW Service booking system.',
      tags:         'Service · Design · Research UX Design',
      description:  'The work that prevents fire emergencies before they happen was being tracked in personal diaries.',
      thumbnailSrc: null,
      thumbnailAlt: 'FRNSW Service booking system project thumbnail',
      href:         '/work/frnsw',
    },
    {
      number:       '03',
      title:        'Case study heading.',
      tags:         'Service · Design · Research UX Design',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      thumbnailSrc: null,
      thumbnailAlt: 'Case study thumbnail',
      href:         '/work/case-study-3',
    },
    {
      number:       '04',
      title:        'Case study heading.',
      tags:         'Service · Design · Research UX Design',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      thumbnailSrc: null,
      thumbnailAlt: 'Case study thumbnail',
      href:         '/work/case-study-4',
    },
    {
      number:       '05',
      title:        'Case study heading.',
      tags:         'Service · Design · Research UX Design',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      thumbnailSrc: null,
      thumbnailAlt: 'Case study thumbnail',
      href:         '/work/case-study-5',
    },
    {
      number:       '06',
      title:        'Case study heading.',
      tags:         'Service · Design · Research UX Design',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      thumbnailSrc: null,
      thumbnailAlt: 'Case study thumbnail',
      href:         '/work/case-study-6',
    },
  ],
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
