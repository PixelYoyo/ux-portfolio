// Types that match the GROQ query projections in queries.ts

export type SiteSettings = {
  logoName:            string;
  navLinks:            { label: string; href: string }[];
  heroHeading:         string;
  heroBio:             string[];
  profileImageUrl:     string;
  profileImageAlt:     string;
  valueItems:          string[];
  valueDescriptions:   string[];
  tickerFeaturedWork:  string;
  tickerBackground:    string;
  resumeHref:          string;
  linkedinHref:        string;
  footerName:          string;
  footerRole:          string;
  footerLocation:      string;
  footerLinkedinLabel: string;
  footerLinkedinHref:  string;
  footerEmailLabel:    string;
  footerEmailHref:     string;
  footerCopyright:     string;
};

export type CaseStudySummary = {
  slug:         string;
  title:        string;
  tags:         string;
  description:  string;
  thumbnailUrl: string | null;
  thumbnailAlt: string;
  heroImageUrl: string | null;
  heroImageAlt: string;
  orderNumber:  number;
  isFeatured:   boolean;
};

export type CaseStudyDetail = {
  slug:                string;
  title:               string;
  role:                string;
  company:             string;
  year:                string;
  tags:                string;
  description:         string;
  heroImageUrl:        string | null;
  heroImageAlt:        string;
  stats:               { number: string; description: string }[];
  executiveSummary:    string[];
  contextTagline:      string;
  contextItems:        { icon: string; heading: string; body: string[] }[];
  gallery:             { src: string; alt: string; caption: string }[];
  scrollCardsTagline:  string;
  scrollCards:         { icon: string; heading: string; body: string[] }[];
  designTagline:       string;
  designItems:         { heading: string; body: string[]; imageSrc: string; imageAlt: string; imageCaption: string }[];
  imageGrid:           { src: string; alt: string }[];
  quotes:              { text: string; attribution: string }[];
  reflectionTagline:   string;
  reflectionItems:     { icon: string; heading: string; body: string[] }[];
  details:             { label: string; value: string }[];
  linkGroups:          { category: string; links: { label: string; href: string }[] }[];
};

export type Testimonial = {
  text: string;
  name: string;
  role: string;
};

export type Experience = {
  company:     string;
  logoUrl:     string;
  logoAlt:     string;
  logoWidth:   number;
  logoHeight:  number;
  title:       string;
  period:      string;
  description: string;
};
