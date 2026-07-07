import Hero from '@/components/Hero';
import Values from '@/components/Values';
import FeaturedWork from '@/components/FeaturedWork';
import Background from '@/components/Background';
import LogoTicker from '@/components/LogoTicker';
import Testimonials from '@/components/Testimonials';
import { client } from '@/sanity/lib/client';
import {
  siteSettingsQuery,
  allCaseStudiesQuery,
  testimonialsQuery,
  experienceQuery,
} from '@/sanity/lib/queries';
import type { SiteSettings, CaseStudySummary, Testimonial, Experience } from '@/sanity/lib/types';

// Fallback data from portfolio.ts — used until Sanity is populated
import {
  hero,
  values,
  background as bgContent,
  featuredWork as featuredWorkContent,
  testimonials as testimonialsContent,
} from '@/content/portfolio';

export default async function Home() {
  const [settings, caseStudies, quotes, jobs] = await Promise.all([
    client.fetch<SiteSettings | null>(siteSettingsQuery),
    client.fetch<CaseStudySummary[]>(allCaseStudiesQuery),
    client.fetch<Testimonial[]>(testimonialsQuery),
    client.fetch<Experience[]>(experienceQuery),
  ]);

  // ── Hero props ──────────────────────────────────────────────────────────────
  const heroProps = settings
    ? {
        heading:         settings.heroHeading,
        bio:             settings.heroBio,
        profileImageSrc: settings.profileImageUrl,
        profileImageAlt: settings.profileImageAlt,
      }
    : {
        heading:         hero.heading,
        bio:             [...hero.bio],
        profileImageSrc: hero.profileImageSrc,
        profileImageAlt: hero.profileImageAlt,
      };

  // ── Values props ────────────────────────────────────────────────────────────
  const valuesProps = settings
    ? { items: settings.valueItems, description: settings.valueDescriptions }
    : { items: [...values.items] as string[], description: [...values.description] };

  // ── Section heading labels ──────────────────────────────────────────────────
  const headingFeaturedWork = settings?.tickerFeaturedWork ?? 'Featured work';
  const headingBackground   = settings?.tickerBackground   ?? 'Background';

  // ── Featured work ───────────────────────────────────────────────────────────
  let featuredProps: React.ComponentProps<typeof FeaturedWork>;

  if (caseStudies.length > 0) {
    const featured = caseStudies.find((cs) => cs.isFeatured) ?? caseStudies[0];
    const projects = caseStudies.filter((cs) => cs.slug !== featured.slug).slice(0, 2);

    const fmt = (n: number) => String(n).padStart(2, '0');

    featuredProps = {
      featured: {
        slug:         featured.slug,
        number:       fmt(featured.orderNumber),
        title:        featured.title,
        tags:         featured.tags,
        description:  featured.description,
        thumbnailSrc: featured.thumbnailUrl,
        thumbnailAlt: featured.thumbnailAlt,
      },
      projects: projects.map((cs) => ({
        slug:        cs.slug,
        number:      fmt(cs.orderNumber),
        title:       cs.title,
        tags:        cs.tags,
        description: cs.description,
      })),
      seeAllHref: '/work',
    };
  } else {
    const { featured, projects, seeAllHref } = featuredWorkContent;
    featuredProps = {
      featured: {
        slug:         featured.slug,
        number:       featured.number,
        title:        featured.title,
        tags:         featured.tags,
        description:  featured.description,
        thumbnailSrc: featured.thumbnailSrc,
        thumbnailAlt: featured.thumbnailAlt,
      },
      projects: projects.map((p) => ({
        slug:        p.slug,
        number:      p.number,
        title:       p.title,
        tags:        p.tags,
        description: p.description,
      })),
      seeAllHref,
    };
  }

  // ── Background props ────────────────────────────────────────────────────────
  const bgProps = jobs.length > 0
    ? {
        jobs: jobs.map((j) => ({
          company:     j.company,
          logoSrc:     j.logoUrl,
          logoAlt:     j.logoAlt,
          logoWidth:   j.logoWidth,
          logoHeight:  j.logoHeight,
          title:       j.title,
          period:      j.period,
          description: j.description,
        })),
        resumeHref:   settings?.resumeHref   ?? bgContent.resumeHref,
        linkedinHref: settings?.linkedinHref ?? bgContent.linkedinHref,
      }
    : {
        jobs: bgContent.jobs.map((j) => ({
          company:     j.company,
          logoSrc:     j.logoSrc,
          logoAlt:     j.logoAlt,
          logoWidth:   j.logoWidth,
          logoHeight:  j.logoHeight,
          title:       j.title,
          period:      j.period,
          description: j.description,
        })),
        resumeHref:   bgContent.resumeHref,
        linkedinHref: bgContent.linkedinHref,
      };

  // ── Testimonials ────────────────────────────────────────────────────────────
  const testimonialQuotes = quotes.length > 0
    ? quotes
    : [...testimonialsContent.quotes];

  return (
    <>
      <Hero {...heroProps} />
      <Values {...valuesProps} />
      <section className="bg-bg-primary px-margin pt-7xl pb-4xl">
        <h2
          className="font-heading font-bold text-heading-xl tracking-impact leading-none uppercase text-text-primary"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          {headingFeaturedWork}<span className="text-text-brand">.</span>
        </h2>
      </section>
      <FeaturedWork {...featuredProps} />
      <section className="bg-bg-primary px-margin pt-7xl pb-4xl">
        <h2
          className="font-heading font-bold text-heading-xl tracking-impact leading-none uppercase text-text-primary"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          {headingBackground}<span className="text-text-brand">.</span>
        </h2>
      </section>
      <Background {...bgProps} />
      <LogoTicker />
      <Testimonials quotes={testimonialQuotes} />
    </>
  );
}
