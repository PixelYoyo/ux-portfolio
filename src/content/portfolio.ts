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
