/**
 * One-off backfill: sets showHeroImage: true on every existing caseStudy
 * document that doesn't already have the field, so the new Sanity toggle
 * defaults to "shown" (matching current behaviour) instead of silently
 * hiding hero images that were never explicitly toggled.
 *
 * Only patches the showHeroImage field — leaves everything else untouched.
 *
 * Usage:
 *   npx tsx --env-file=.env.local scripts/backfill-show-hero-image.ts
 */

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '4fvgc4ao',
  dataset:   'production',
  apiVersion: '2025-01-01',
  token:     process.env.SANITY_API_WRITE_TOKEN,
  useCdn:    false,
});

async function main() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error('SANITY_API_WRITE_TOKEN is not set.');
    process.exit(1);
  }

  const docs = await client.fetch<{ _id: string; showHeroImage?: boolean }[]>(
    `*[_type == "caseStudy"]{ _id, showHeroImage }`,
  );

  const toPatch = docs.filter((d) => d.showHeroImage == null);

  if (toPatch.length === 0) {
    console.log('All case studies already have showHeroImage set. Nothing to do.');
    return;
  }

  const tx = client.transaction();
  for (const doc of toPatch) {
    tx.patch(doc._id, (p) => p.set({ showHeroImage: true }));
  }
  await tx.commit();

  console.log(`✓ Backfilled showHeroImage: true on ${toPatch.length} case stud${toPatch.length === 1 ? 'y' : 'ies'}: ${toPatch.map((d) => d._id).join(', ')}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
