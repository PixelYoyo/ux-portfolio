import { createClient } from '@sanity/client';
import 'dotenv/config';

const ICON_URLS: Record<string, string> = {
  gear:      'https://res.cloudinary.com/drd6p33en/image/upload/v1782297832/Gear_torym9.svg',
  shapes:    'https://res.cloudinary.com/drd6p33en/image/upload/v1782297847/shapes_pssqgy.svg',
  thinking:  'https://res.cloudinary.com/drd6p33en/image/upload/v1782297631/thinking_xsnwnt.svg',
  people:    'https://res.cloudinary.com/drd6p33en/image/upload/v1782298722/People_lavbim.svg',
  hand:      'https://res.cloudinary.com/drd6p33en/image/upload/v1782298722/Hand_rsimvv.svg',
  warning:   'https://res.cloudinary.com/drd6p33en/image/upload/v1782298722/Warning_bjrljh.svg',
  diagram:   'https://res.cloudinary.com/drd6p33en/image/upload/v1782329959/diagram_wvgrev.svg',
  nib:       'https://res.cloudinary.com/drd6p33en/image/upload/v1782329959/font-awesome_ksetol.svg',
  lightbulb: 'https://res.cloudinary.com/drd6p33en/image/upload/v1782329960/Lightbulb_mb6tsd.svg',
};

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2025-01-01',
  useCdn:    false,
  token:     process.env.SANITY_API_WRITE_TOKEN,
});

type ContentItem = { _key: string; icon: string; iconUrl?: string; [key: string]: unknown };

function applyIconUrls(items: ContentItem[]): ContentItem[] {
  return items.map((item) => ({
    ...item,
    iconUrl: ICON_URLS[item.icon] ?? item.iconUrl ?? '',
  }));
}

async function run() {
  const doc = await client.fetch<{
    _id: string;
    contextItems:    ContentItem[];
    scrollCards:     ContentItem[];
    reflectionItems: ContentItem[];
  } | null>(
    `*[_type == "caseStudy" && slug.current == "dexus"][0]{
      _id,
      contextItems[]    { _key, icon, iconUrl },
      scrollCards[]     { _key, icon, iconUrl },
      reflectionItems[] { _key, icon, iconUrl },
    }`,
  );

  if (!doc) {
    console.error('Dexus case study not found in Sanity.');
    process.exit(1);
  }

  console.log(`Patching document ${doc._id}…`);

  await client
    .patch(doc._id)
    .set({
      contextItems:    applyIconUrls(doc.contextItems    ?? []),
      scrollCards:     applyIconUrls(doc.scrollCards     ?? []),
      reflectionItems: applyIconUrls(doc.reflectionItems ?? []),
    })
    .commit();

  console.log('Done. iconUrl set on all content items.');
}

run().catch((err) => { console.error(err); process.exit(1); });
