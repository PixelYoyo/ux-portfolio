import { createClient } from '@sanity/client';
import 'dotenv/config';

const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2025-01-01',
  useCdn:     false,
  token:      process.env.SANITY_API_WRITE_TOKEN,
});

async function run() {
  await client.delete('drafts.caseStudy-dexus');
  console.log('Deleted drafts.caseStudy-dexus');

  await client.delete('caseStudy-dexus');
  console.log('Deleted caseStudy-dexus');

  const remaining = await client.fetch(
    `*[_type == "caseStudy" && (slug.current == "dexus" || title match "Dexus*")]{ _id, "slug": slug.current, "ctx0IconUrl": contextItems[0].iconUrl }`
  );
  console.log('Remaining Dexus documents:', JSON.stringify(remaining, null, 2));
}

run().catch((err) => { console.error(err); process.exit(1); });
