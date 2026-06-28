import { defineType, defineField, defineArrayMember } from 'sanity';

const bodyParagraphs = defineField({
  name: 'body',
  title: 'Body paragraphs',
  type: 'array',
  of: [defineArrayMember({ type: 'text' })],
});

const contentItem = (name: string, title: string) =>
  defineArrayMember({
    name,
    title,
    type: 'object',
    fields: [
      defineField({ name: 'icon', title: 'Icon key', type: 'string' }),
      defineField({ name: 'heading', title: 'Heading', type: 'string' }),
      bodyParagraphs,
    ],
  });

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    // ── Identity ─────────────────────────────────────────────────
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'tags', title: 'Tags (comma-separated)', type: 'string' }),
    defineField({ name: 'description', title: 'Short description', type: 'text', rows: 3 }),
    defineField({ name: 'orderNumber', title: 'Order number (01, 02 …)', type: 'number' }),
    defineField({ name: 'isFeatured', title: 'Featured on home page', type: 'boolean', initialValue: false }),

    // ── Hero ─────────────────────────────────────────────────────
    defineField({ name: 'heroImageUrl', title: 'Hero image URL (Cloudinary)', type: 'url' }),
    defineField({ name: 'heroImageAlt', title: 'Hero image alt text', type: 'string' }),

    // ── Work-page thumbnail ───────────────────────────────────────
    defineField({ name: 'thumbnailUrl', title: 'Thumbnail URL (Cloudinary)', type: 'url' }),
    defineField({ name: 'thumbnailAlt', title: 'Thumbnail alt text', type: 'string' }),

    // ── Stats ────────────────────────────────────────────────────
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Number / label', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
        }),
      ],
    }),

    // ── Executive summary ─────────────────────────────────────────
    defineField({
      name: 'executiveSummary',
      title: 'Executive summary paragraphs',
      type: 'array',
      of: [defineArrayMember({ type: 'text' })],
    }),

    // ── Context section ───────────────────────────────────────────
    defineField({ name: 'contextTagline', title: 'Context tagline', type: 'string' }),
    defineField({
      name: 'contextItems',
      title: 'Context items',
      type: 'array',
      of: [contentItem('contextItem', 'Context item')],
    }),

    // ── Gallery ───────────────────────────────────────────────────
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'src', title: 'Image URL (Cloudinary)', type: 'url' }),
            defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        }),
      ],
    }),

    // ── Scroll cards section ──────────────────────────────────────
    defineField({ name: 'scrollCardsTagline', title: 'Scroll cards tagline', type: 'string' }),
    defineField({
      name: 'scrollCards',
      title: 'Scroll cards',
      type: 'array',
      of: [contentItem('scrollCard', 'Scroll card')],
    }),

    // ── Design section ────────────────────────────────────────────
    defineField({ name: 'designTagline', title: 'Design section tagline', type: 'string' }),
    defineField({
      name: 'designItems',
      title: 'Design items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            bodyParagraphs,
            defineField({ name: 'imageSrc', title: 'Image URL (Cloudinary)', type: 'url' }),
            defineField({ name: 'imageAlt', title: 'Image alt text', type: 'string' }),
            defineField({ name: 'imageCaption', title: 'Image caption', type: 'string' }),
          ],
        }),
      ],
    }),

    // ── Image grid ────────────────────────────────────────────────
    defineField({
      name: 'imageGrid',
      title: 'Image grid',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'src', title: 'Image URL (Cloudinary)', type: 'url' }),
            defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
          ],
        }),
      ],
    }),

    // ── Testimonials (case-study-level) ──────────────────────────
    defineField({
      name: 'quotes',
      title: 'Quotes / testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'text', title: 'Quote text', type: 'text', rows: 3 }),
            defineField({ name: 'attribution', title: 'Attribution', type: 'string' }),
          ],
        }),
      ],
    }),

    // ── Reflection section ────────────────────────────────────────
    defineField({ name: 'reflectionTagline', title: 'Reflection tagline', type: 'string' }),
    defineField({
      name: 'reflectionItems',
      title: 'Reflection items',
      type: 'array',
      of: [contentItem('reflectionItem', 'Reflection item')],
    }),

    // ── Details ───────────────────────────────────────────────────
    defineField({
      name: 'details',
      title: 'Details (label/value pairs)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'value', title: 'Value', type: 'string' }),
          ],
        }),
      ],
    }),

    // ── Link groups ───────────────────────────────────────────────
    defineField({
      name: 'linkGroups',
      title: 'Link groups',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'category', title: 'Category heading', type: 'string' }),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({ name: 'label', title: 'Label', type: 'string' }),
                    defineField({ name: 'href', title: 'URL', type: 'url' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: { title: 'title', slug: 'slug.current' },
    prepare: ({ title, slug }) => ({ title, subtitle: `/${slug}` }),
  },
});
