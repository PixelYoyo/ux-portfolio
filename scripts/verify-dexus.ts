import { createClient } from '@sanity/client';
import 'dotenv/config';

const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2025-01-01',
  useCdn:     false,
});

async function run() {
  const doc = await client.fetch(`*[_id == "dexus"][0]{ contextItems[0], reflectionItems[0] }`);
  console.log(JSON.stringify(doc, null, 2));
}

run().catch((err) => { console.error(err); process.exit(1); });
