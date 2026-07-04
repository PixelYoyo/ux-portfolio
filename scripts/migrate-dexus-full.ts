import { createClient } from '@sanity/client';
import 'dotenv/config';

const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2025-01-01',
  useCdn:     false,
  token:      process.env.SANITY_API_WRITE_TOKEN,
});

// Deterministic _key from index so re-runs are idempotent
const key = (prefix: string, i: number) => `${prefix}${i}`;

const doc = {
  _id:   'dexus',
  _type: 'caseStudy',

  // ── Identity ───────────────────────────────────────────────────────────────
  slug:        { _type: 'slug', current: 'dexus' },
  title:       'Dexus digital transformation.',
  role:        'UX/UI Designer',
  company:     'Ogilvy',
  year:        '2025',
  tags:        'Research · Information Architecture · Design Systems',
  description: "A $51.5 billion real estate portfolio. A website that couldn't tell an investor from a tenant.",
  orderNumber: 1,
  isFeatured:  true,

  // ── Hero ──────────────────────────────────────────────────────────────────
  heroImageUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782210430/Dexus_case_study_image_tpyxmq.png?v=2',
  heroImageAlt: 'Dexus digital transformation — project hero',
  thumbnailUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782210430/Dexus_case_study_image_tpyxmq.png?v=2',
  thumbnailAlt: 'Dexus digital transformation project thumbnail',

  // ── Stats ─────────────────────────────────────────────────────────────────
  stats: [
    { _key: key('stat', 0), number: '01', description: 'Reduced the time to update retail microsite content from 2 weeks to 2 hours through a redesigned retailer portal.' },
    { _key: key('stat', 1), number: '02', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { _key: key('stat', 2), number: '03', description: 'Lorem ipsum dolor sit amet.' },
  ],

  // ── Executive summary ─────────────────────────────────────────────────────
  executiveSummary: [
    "Dexus manages one of Australasia's largest real estate and infrastructure portfolios, valued at $51.5 billion. Their digital presence hadn't kept pace. A single website was trying to serve two fundamentally different audiences through the same navigation, the same page structure, and the same content. Investors and commercial tenants were arriving with completely different jobs to do, and the site was failing both of them.",
    "This project was a full digital transformation of dexus.com, built on Adobe Experience Manager, covering the corporate site redesign, eleven audience-specific page templates, and a design system that ultimately had to flex across 26 retail and commercial property microsites.",
  ],

  // ── Context ───────────────────────────────────────────────────────────────
  contextTagline: 'One website. Two audiences. None of them finding what they needed.',
  contextItems: [
    {
      _key:    key('ctx', 0),
      icon:    'gear',
      iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782297832/Gear_torym9.svg',
      heading: 'The site was structured around Dexus, not around its users.',
      body: [
        "Dexus's existing website mixed investor information, leasing content, and corporate communications into a single navigation. A financial advisor looking for fund performance data had to navigate the same menus as a commercial tenant searching for office space in Sydney's CBD. Neither could find what they needed quickly, and both were leaving to find it elsewhere.",
        "Investors were relying on third-party tools because Dexus's own fund data was hard to find and out of date. Commercial tenants described the site as intentionally vague, frustrated by missing floor plans, hidden pricing, and navigation that didn't match how they actually searched for space.",
      ],
    },
    {
      _key:    key('ctx', 1),
      icon:    'shapes',
      iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782297847/shapes_pssqgy.svg',
      heading: 'We went to the source.',
      body: [
        "We ran two separate research streams: investor interviews exploring how financial advisors and institutional investors discovered, evaluated, and acted on fund information, and leasing research covering how commercial tenants found and assessed properties. Stakeholder workshops brought Dexus's internal teams in to align on what the site needed to achieve for the business.",
        "The finding was consistent across both streams. 90% of first visits began in-context, meaning users arrived already knowing what they were looking for. The site wasn't built to receive them that way.",
      ],
    },
    {
      _key:    key('ctx', 2),
      icon:    'thinking',
      iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782297631/thinking_xsnwnt.svg',
      heading: 'The site architecture was the problem, not the content.',
      body: [
        'A card sorting exercise and stakeholder workshop revealed that the underlying information architecture was forcing unrelated audiences into the same pathways. The navigation labels were internally logical but externally meaningless. Terms like "Asset Portfolio" meant investment to one audience and property listing to another. "ESG" meant nothing to a first-time investor who just wanted to understand what Dexus stood for.',
        "The fix wasn't more content. It was separating the journeys entirely.",
      ],
    },
  ],

  // ── Gallery ───────────────────────────────────────────────────────────────
  gallery: [
    {
      _key:    key('gal', 0),
      src:     'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782614097/Dexus_wireframes_htcmwt.png?v=2',
      alt:     'Early wireframes of the new dexus.com',
      caption: 'early wireframes of the new dexus.com',
    },
  ],

  // ── Scroll cards ──────────────────────────────────────────────────────────
  scrollCardsTagline: 'two audiences. completely different jobs to do.',
  scrollCards: [
    {
      _key:    key('sc', 0),
      icon:    'people',
      iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782298722/People_lavbim.svg',
      heading: 'the research pointed to a structural problem, not a content problem.',
      body: [
        'The temptation in a project like this is to fix the content. Write clearer copy. Add more information. Surface the PDFs. But the research kept pointing to something deeper. The navigation labels were internally logical but externally meaningless. "Asset Portfolio" triggered investment associations for leasing audiences. "ESG" meant nothing to first-time investors trying to understand what Dexus stood for. Forcing two distinct audiences with completely different mental models into shared pathways was the root cause of most usability failures.',
      ],
    },
    {
      _key:    key('sc', 1),
      icon:    'hand',
      iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782298722/Hand_rsimvv.svg',
      heading: 'two ways to fix it. one clear recommendation.',
      body: [
        'I consolidated the findings and led the IA process, presenting two structural options to the client. A static navigation: a single fixed menu serving all audiences, simpler to build and maintain. Or a contextual navigation: a dynamic structure where the experience shifts based on whether the user is here to invest or here to lease, used by firms like BlackRock, Vanguard, and Morgan Stanley.',
        "The recommendation was contextual. The two audiences had almost no overlap in what they needed, and corporate information, while relevant to both, worked better as shared context sitting across both experiences rather than as a third pathway competing for attention.",
      ],
    },
    {
      _key:    key('sc', 2),
      icon:    'warning',
      iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782298722/Warning_bjrljh.svg',
      heading: 'three contexts. one domain.',
      body: [
        'The result was three distinct navigation experiences within a single website. Each has its own terminology, pathways, and calls to action. A financial advisor looking for fund performance lands in a completely different experience to a commercial tenant searching for office space. Same domain. No shared confusion.',
      ],
    },
  ],

  // ── Design ────────────────────────────────────────────────────────────────
  designTagline: 'a $51.5 billion portfolio deserved a digital presence to match.',
  designItems: [
    {
      _key:         key('di', 0),
      heading:      'the marketing team had a vision. they just needed help making the case',
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
      _key:         key('di', 1),
      heading:      'interaction design as a brand signal.',
      body: [
        "A contemporary feel isn't just about how something looks. It's about how it moves. I made the case for bringing interaction design into the project — transitions and scroll behaviour that made the site feel considered and premium in a way that static design alone couldn't achieve. That rationale was part of the same deck the marketing team used to get sign-off.",
      ],
      imageSrc:     'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782328154/interaction_design_as_a_brand_signal_1_xg2zl2.png?v=2',
      imageAlt:     'Interaction design as a brand signal',
      imageCaption: 'Slides we used as visual aids to support contemporary design.',
    },
    {
      _key:         key('di', 2),
      heading:      'one system. twenty-six sites. built in the wrong order.',
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

  // ── Image grid ────────────────────────────────────────────────────────────
  imageGrid: [
    { _key: key('ig', 0), src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329439/Dexus_image_grid_design_1_eh0xmi.png?v=2', alt: 'Dexus homepage redesign' },
    { _key: key('ig', 1), src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329437/Dexus_image_grid_design_2_w2ekvx.png?v=2', alt: 'Dexus investment platform design' },
    { _key: key('ig', 2), src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329437/Dexus_image_grid_design_3_k5nhuw.png?v=2', alt: 'Dexus property listing page' },
    { _key: key('ig', 3), src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329439/Dexus_image_grid_design_4_kaewbf.png?v=2', alt: 'Dexus retail site design' },
    { _key: key('ig', 4), src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329439/Dexus_image_grid_design_5_fexqul.png?v=2', alt: 'Dexus retailer portal' },
    { _key: key('ig', 5), src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329439/Dexus_image_grid_design_6_xsomcu.png?v=2', alt: 'Dexus commercial property site' },
    { _key: key('ig', 6), src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329440/Dexus_image_grid_design_7_oqtjp6.png?v=2', alt: 'Dexus premium property microsite' },
    { _key: key('ig', 7), src: 'https://res.cloudinary.com/drd6p33en/image/upload/q_auto:best,f_auto/v1782329441/Dexus_image_grid_design_8_xnlwwo.png?v=2', alt: 'Dexus One Bligh Sydney site' },
  ],

  // ── Quotes ────────────────────────────────────────────────────────────────
  quotes: [
    {
      _key:        key('qt', 0),
      text:        'What used to take me 2 weeks to update in the old retailer portal, now takes me 2 hours in the redesigned one.',
      attribution: '— Digital Marketing Manager, Dexus',
    },
  ],

  // ── Reflection / Learnings ────────────────────────────────────────────────
  reflectionTagline: 'A closing reflection.',
  reflectionItems: [
    {
      _key:    key('ref', 0),
      icon:    'diagram',
      iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782329959/diagram_wvgrev.svg',
      heading: 'scope changes are design problems too.',
      body: [
        "Being told mid-project that the corporate design system also needed to serve 26 other sites was a significant constraint shift. The instinct is to treat that as a project management problem. It's actually a design problem: how do you make what you've built flexible enough to handle what you didn't know was coming? Retrofitting forced us to think more systematically about the token structure than we might have otherwise, and the system is more robust for it.",
      ],
    },
    {
      _key:    key('ref', 1),
      icon:    'nib',
      iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782329959/font-awesome_ksetol.svg',
      heading: 'research has to make the case, not just inform it.',
      body: [
        "The three-nav decision was the right call, but it required convincing a large organisation to restructure something fundamental about how they present themselves online. Having the research findings consolidated into a clear, visual argument was what made that possible. Data alone doesn't move stakeholders. A narrative built from data does.",
      ],
    },
    {
      _key:    key('ref', 2),
      icon:    'lightbulb',
      iconUrl: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782329960/Lightbulb_mb6tsd.svg',
      heading: 'educating the team is part of the work.',
      body: [
        "Getting visual designers comfortable with Figma variables wasn't a side task. It was what made the design system actually work across 26 sites. The hours spent on the learning board and practice sessions directly affected the quality and consistency of the output. In complex projects, the work you do to enable your team matters as much as the work you do yourself.",
      ],
    },
  ],

  // ── Details ───────────────────────────────────────────────────────────────
  details: [
    { _key: key('det', 0), label: 'Name',               value: 'Dexus Digital Transformation.' },
    { _key: key('det', 1), label: 'Date',               value: '2025.' },
    { _key: key('det', 2), label: 'My role',            value: 'UX Designer, Team Ogilvy.' },
    { _key: key('det', 3), label: 'Key skills applied', value: 'Workshop facilitation, user research, IA architecture, user flows, design system, UI design' },
    { _key: key('det', 4), label: 'Team',               value: 'Project Manager, Junior UX Designer, Product Owner, Business Analyst, Tech Lead.' },
    { _key: key('det', 5), label: 'Platform',           value: 'Adobe Experience Manager' },
    { _key: key('det', 6), label: 'Tools',              value: 'Figma, Miro, Jira.' },
  ],

  // ── Link groups ───────────────────────────────────────────────────────────
  linkGroups: [
    {
      _key:     key('lg', 0),
      category: 'Dexus corporate site',
      links: [
        { _key: key('lg0l', 0), label: 'dexus.com', href: 'https://www.dexus.com/' },
      ],
    },
    {
      _key:     key('lg', 1),
      category: 'Selected retail microsites',
      links: [
        { _key: key('lg1l', 0), label: 'Indooroopilly',   href: 'https://www.indooroopillyshopping.com.au/' },
        { _key: key('lg1l', 1), label: '25 Martin Place', href: 'https://www.25martinplace.com.au/' },
        { _key: key('lg1l', 2), label: 'Gateway',         href: 'https://www.gatewaysydney.com.au/' },
        { _key: key('lg1l', 3), label: 'Casula Mall',     href: 'https://www.casulamall.com.au/' },
        { _key: key('lg1l', 4), label: 'Royal Randwick',  href: 'https://www.royalrandwick.com.au/' },
      ],
    },
    {
      _key:     key('lg', 2),
      category: 'Selected commercial microsites',
      links: [
        { _key: key('lg2l', 0), label: 'Australia Square',    href: 'https://www.australiasquare.com.au/' },
        { _key: key('lg2l', 1), label: '33 Alfred',           href: 'https://www.33alfredstreet.com.au/' },
        { _key: key('lg2l', 2), label: '1 Bligh',             href: 'https://www.1bligh.com.au/' },
        { _key: key('lg2l', 3), label: 'Alluvion',            href: 'https://www.alluvion.com.au/' },
        { _key: key('lg2l', 4), label: 'Waterfront Brisbane', href: 'https://www.waterfrontbrisbane.com.au/' },
      ],
    },
  ],
};

async function run() {
  console.log('Creating/replacing Dexus case study in Sanity…');
  const result = await client.createOrReplace(doc);
  console.log(`Done. Document ID: ${result._id}`);

  // Verify it can be fetched back
  const check = await client.fetch<{ title: string; slug: string }>(
    `*[_id == "dexus"][0]{ title, "slug": slug.current }`,
  );
  console.log(`Verified: "${check.title}" at slug "${check.slug}"`);
}

run().catch((err) => { console.error(err); process.exit(1); });
