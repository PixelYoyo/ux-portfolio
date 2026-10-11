import { groq } from 'next-sanity';

// ── Site settings ─────────────────────────────────────────────────────────────

export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    logoName,
    navLinks[] { label, href },
    heroHeading,
    heroSubheadline,
    heroBio,
    heroImageUrl,
    profileImageUrl,
    profileImageAlt,
    scrollIndicatorAlt,
    values[] { title, description },
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
// Array fields are coalesced to [] so a case study with an unfilled section in
// Sanity renders without that section instead of failing the build.

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
    showHeroImage,
    videoUrl,
    showVideo,
    "stats": coalesce(stats[] { number, description }, []),
    "executiveSummary": coalesce(executiveSummary, []),
    contextTagline,
    "contextItems": coalesce(contextItems[] { icon, iconUrl, iconAlt, heading, "body": coalesce(body, []) }, []),
    "gallery": coalesce(gallery[] { src, "alt": coalesce(alt, ""), caption }, []),
    scrollCardsTagline,
    "scrollCards": coalesce(scrollCards[] { icon, heading, "body": coalesce(body, []) }, []),
    designTagline,
    "designItems": coalesce(designItems[] { heading, "body": coalesce(body, []), imageSrc, "imageAlt": coalesce(imageAlt, ""), imageCaption }, []),
    "imageGrid": coalesce(imageGrid[] { src, "alt": coalesce(alt, "") }, []),
    "quotes": coalesce(quotes[] { text, attribution }, []),
    reflectionTagline,
    "reflectionItems": coalesce(reflectionItems[] { icon, iconUrl, iconAlt, heading, "body": coalesce(body, []) }, []),
    "details": coalesce(details[] { label, value }, []),
    "linkGroups": coalesce(linkGroups[] { category, "links": coalesce(links[] { label, href }, []) }, []),
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
