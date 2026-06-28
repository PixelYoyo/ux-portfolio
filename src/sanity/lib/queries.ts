import { groq } from 'next-sanity';

// ── Site settings ─────────────────────────────────────────────────────────────

export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    logoName,
    navLinks[] { label, href },
    heroHeading,
    heroBio,
    profileImageUrl,
    profileImageAlt,
    valueItems,
    valueDescriptions,
    tickerFeaturedWork,
    tickerBackground,
    resumeHref,
    linkedinHref,
    footerName,
    footerRole,
    footerLocation,
    footerLinkedinLabel,
    footerLinkedinHref,
    footerEmailLabel,
    footerEmailHref,
    footerCopyright,
  }
`;

// ── Case studies ──────────────────────────────────────────────────────────────

export const allCaseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(orderNumber asc) {
    "slug": slug.current,
    title,
    tags,
    description,
    thumbnailUrl,
    thumbnailAlt,
    heroImageUrl,
    heroImageAlt,
    orderNumber,
    isFeatured,
  }
`;

export const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    role,
    company,
    year,
    tags,
    description,
    heroImageUrl,
    heroImageAlt,
    stats[] { number, description },
    executiveSummary,
    contextTagline,
    contextItems[] { icon, heading, body },
    gallery[] { src, alt, caption },
    scrollCardsTagline,
    scrollCards[] { icon, heading, body },
    designTagline,
    designItems[] { heading, body, imageSrc, imageAlt, imageCaption },
    imageGrid[] { src, alt },
    quotes[] { text, attribution },
    reflectionTagline,
    reflectionItems[] { icon, heading, body },
    details[] { label, value },
    linkGroups[] { category, links[] { label, href } },
  }
`;

export const caseStudySlugsQuery = groq`
  *[_type == "caseStudy"] { "slug": slug.current }
`;

// ── Testimonials ──────────────────────────────────────────────────────────────

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    text, name, role
  }
`;

// ── Experience ────────────────────────────────────────────────────────────────

export const experienceQuery = groq`
  *[_type == "experience"] | order(order asc) {
    company,
    logoUrl,
    logoAlt,
    logoWidth,
    logoHeight,
    title,
    period,
    description,
  }
`;
