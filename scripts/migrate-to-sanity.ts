/**
 * One-time migration: pushes all content from src/content/portfolio.ts
 * into Sanity.
 *
 * Usage:
 *   1. Create a write token in sanity.io/manage → API → Tokens
 *   2. export SANITY_API_WRITE_TOKEN=<token>
 *   3. npx tsx scripts/migrate-to-sanity.ts
 */

import { createClient } from '@sanity/client';
import {
  nav,
  hero,
  values,
  ticker,
  background,
  footer,
  caseStudyPages,
  testimonials,
  featuredWork,
  workPage,
} from '../src/content/portfolio';

const client = createClient({
  projectId: '4fvgc4ao',
  dataset:   'production',
  apiVersion: '2025-01-01',
  token:     process.env.SANITY_API_WRITE_TOKEN,
  useCdn:    false,
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function upsert(doc: Record<string, unknown> & { _id: string; _type: string }) {
  const result = await client.createOrReplace(doc);
  console.log(`✓ ${result._type} / ${result._id}`);
  return result;
}

// ─── Site settings ────────────────────────────────────────────────────────────

async function migrateSiteSettings() {
  await upsert({
    _id:   'siteSettings',
    _type: 'siteSettings',
    logoName:            nav.logoName,
    navLinks:            nav.links.map((l) => ({ _key: l.href, label: l.label, href: l.href })),
    heroHeading:         hero.heading,
    heroBio:             hero.bio,
    profileImageUrl:     hero.profileImageSrc,
    profileImageAlt:     hero.profileImageAlt,
    valueItems:          values.items as unknown as string[],
    valueDescriptions:   values.description,
    tickerFeaturedWork:  ticker.featuredWork,
    tickerBackground:    ticker.background,
    resumeHref:          background.resumeHref,
    linkedinHref:        background.linkedinHref,
    footerName:          footer.name,
    footerRole:          footer.currently.role,
    footerLocation:      footer.currently.location,
    footerLinkedinLabel: footer.contact.linkedinLabel,
    footerLinkedinHref:  footer.contact.linkedinHref,
    footerEmailLabel:    footer.contact.emailLabel,
    footerEmailHref:     footer.contact.emailHref,
    footerCopyright:     footer.copyright,
  });
}

// ─── Case studies ─────────────────────────────────────────────────────────────

function key(index: number) {
  return `key${index}`;
}

function textArray(arr: string[]): string[] {
  return arr;
}

function contentItemArray(items: { icon: string; heading: string; body: string[] }[]): unknown[] {
  return items.map((item, i) => ({
    _key:    key(i),
    _type:   'object',
    icon:    item.icon,
    heading: item.heading,
    body:    textArray(item.body),
  }));
}

async function migrateCaseStudies() {
  // Map workPage for thumbnail + number data
  const workPageMap = Object.fromEntries(
    workPage.caseStudies.map((cs) => [cs.slug, cs]),
  );
  // Determine featured slug
  const featuredSlug = featuredWork.featured.slug;

  for (const [slug, study] of Object.entries(caseStudyPages)) {
    const wp = workPageMap[slug];
    const orderNumber = wp ? parseInt(wp.number, 10) : 99;

    await upsert({
      _id:   `caseStudy-${slug}`,
      _type: 'caseStudy',
      slug:  { _type: 'slug', current: slug },
      title:        study.title,
      role:         study.role,
      company:      study.company,
      year:         study.year,
      tags:         study.tags,
      description:  study.description,
      orderNumber,
      isFeatured:   slug === featuredSlug,
      heroImageUrl: study.heroImageSrc ?? undefined,
      heroImageAlt: study.heroImageAlt,
      thumbnailUrl: wp?.thumbnailSrc ?? undefined,
      thumbnailAlt: wp?.thumbnailAlt ?? '',

      stats: study.stats.map((s, i) => ({
        _key:        key(i),
        number:      s.number,
        description: s.description,
      })),

      executiveSummary: textArray(study.executiveSummary),

      contextTagline: study.contextTagline,
      contextItems:   contentItemArray(study.contextItems),

      gallery: study.gallery.map((img, i) => ({
        _key:    key(i),
        src:     img.src,
        alt:     img.alt,
        caption: img.caption,
      })),

      scrollCardsTagline: study.scrollCardsTagline,
      scrollCards:        contentItemArray(study.scrollCards),

      designTagline: study.designTagline,
      designItems:   study.designItems.map((item, i) => ({
        _key:         key(i),
        heading:      item.heading,
        body:         textArray(item.body),
        imageSrc:     item.imageSrc,
        imageAlt:     item.imageAlt,
        imageCaption: item.imageCaption,
      })),

      imageGrid: study.imageGrid.map((img, i) => ({
        _key: key(i),
        src:  img.src,
        alt:  img.alt,
      })),

      quotes: study.quotes.map((q, i) => ({
        _key:        key(i),
        text:        q.text,
        attribution: q.attribution,
      })),

      reflectionTagline: study.reflectionTagline,
      reflectionItems:   contentItemArray(study.reflectionItems),

      details: study.details.map((d, i) => ({
        _key:  key(i),
        label: d.label,
        value: d.value,
      })),

      linkGroups: study.linkGroups.map((g, gi) => ({
        _key:     key(gi),
        category: g.category,
        links:    g.links.map((l, li) => ({
          _key:  key(li),
          label: l.label,
          href:  l.href,
        })),
      })),
    });
  }
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

async function migrateTestimonials() {
  for (const [i, quote] of testimonials.quotes.entries()) {
    await upsert({
      _id:   `testimonial-${i}`,
      _type: 'testimonial',
      text:  quote.text,
      name:  quote.name,
      role:  quote.role,
      order: i,
    });
  }
}

// ─── Experience ───────────────────────────────────────────────────────────────

async function migrateExperience() {
  for (const [i, job] of background.jobs.entries()) {
    await upsert({
      _id:        `experience-${i}`,
      _type:      'experience',
      company:    job.company,
      logoUrl:    job.logoSrc,
      logoAlt:    job.logoAlt,
      logoWidth:  job.logoWidth,
      logoHeight: job.logoHeight,
      title:      job.title,
      period:     job.period,
      description: job.description,
      order:      i,
    });
  }
}

// ─── Run ──────────────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error('SANITY_API_WRITE_TOKEN is not set. See the script header for instructions.');
    process.exit(1);
  }

  console.log('Migrating site settings…');
  await migrateSiteSettings();

  console.log('\nMigrating case studies…');
  await migrateCaseStudies();

  console.log('\nMigrating testimonials…');
  await migrateTestimonials();

  console.log('\nMigrating experience…');
  await migrateExperience();

  console.log('\n✅ Migration complete.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
