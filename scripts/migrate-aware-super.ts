/**
 * One-off migration: pushes the new "Aware Super design system" case study
 * from src/content/portfolio.ts into Sanity, replacing the old case-study-3
 * placeholder doc it supersedes.
 *
 * Usage:
 *   npx tsx --env-file=.env.local scripts/migrate-aware-super.ts
 */

import { createClient } from '@sanity/client';
import { caseStudyPages, workPage, featuredWork } from '../src/content/portfolio';

const client = createClient({
  projectId: '4fvgc4ao',
  dataset:   'production',
  apiVersion: '2025-01-01',
  token:     process.env.SANITY_API_WRITE_TOKEN,
  useCdn:    false,
});

function key(index: number) {
  return `key${index}`;
}

function contentItemArray(items: { icon: string; iconUrl: string; iconAlt: string; heading: string; body: string[] }[]) {
  return items.map((item, i) => ({
    _key:    key(i),
    _type:   'object',
    icon:    item.icon,
    iconUrl: item.iconUrl,
    iconAlt: item.iconAlt,
    heading: item.heading,
    body:    item.body,
  }));
}

async function main() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error('SANITY_API_WRITE_TOKEN is not set. See the script header for instructions.');
    process.exit(1);
  }

  const slug: string = 'aware-super';
  const study = caseStudyPages[slug];
  const wp = workPage.caseStudies.find((cs) => cs.slug === slug);
  const orderNumber = wp ? parseInt(wp.number, 10) : 99;

  const doc = {
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
    isFeatured:   slug === featuredWork.featured.slug,
    heroImageUrl: study.heroImageSrc ?? undefined,
    heroImageAlt: study.heroImageAlt,
    showHeroImage: study.showHeroImage,
    thumbnailUrl: wp?.thumbnailSrc ?? undefined,
    thumbnailAlt: wp?.thumbnailAlt ?? '',

    stats: study.stats.map((s, i) => ({
      _key:        key(i),
      number:      s.number,
      description: s.description,
    })),

    executiveSummary: study.executiveSummary,

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
      body:         item.body,
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
  };

  console.log('Creating caseStudy-aware-super…');
  const result = await client.createOrReplace(doc);
  console.log(`✓ ${result._type} / ${result._id}`);

  console.log('Deleting superseded caseStudy-case-study-3…');
  await client.delete('caseStudy-case-study-3');
  console.log('✓ deleted caseStudy-case-study-3');

  console.log('\n✅ Migration complete.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
