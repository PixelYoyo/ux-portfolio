import { client } from '@/sanity/lib/client';
import { allCaseStudiesQuery } from '@/sanity/lib/queries';
import type { CaseStudySummary } from '@/sanity/lib/types';
import { workPage } from '@/content/portfolio';
import WorkPageClient from './WorkPageClient';

export default async function WorkPage() {
  const caseStudies = await client.fetch<CaseStudySummary[]>(allCaseStudiesQuery);

  const fmt = (n: number) => String(n).padStart(2, '0');

  const studies = caseStudies.length > 0
    ? caseStudies.map((cs) => ({
        slug:         cs.slug,
        number:       fmt(cs.orderNumber),
        title:        cs.title,
        tags:         cs.tags,
        description:  cs.description,
        thumbnailSrc: cs.thumbnailUrl,
        thumbnailAlt: cs.thumbnailAlt,
      }))
    : workPage.caseStudies.map((cs) => ({
        slug:         cs.slug,
        number:       cs.number,
        title:        cs.title,
        tags:         cs.tags,
        description:  cs.description,
        thumbnailSrc: cs.thumbnailSrc ?? null,
        thumbnailAlt: cs.thumbnailAlt,
      }));

  return <WorkPageClient studies={studies} />;
}
