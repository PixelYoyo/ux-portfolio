import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // ── Navigation ──────────────────────────────────────────────
    defineField({ name: 'logoName', title: 'Logo / name', type: 'string' }),
    defineField({
      name: 'navLinks',
      title: 'Nav links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'Path', type: 'string' }),
          ],
        }),
      ],
    }),

    // ── Hero ────────────────────────────────────────────────────
    defineField({ name: 'heroHeading', title: 'Hero heading', type: 'string' }),
    defineField({
      name: 'heroBio',
      title: 'Hero bio paragraphs',
      type: 'array',
      of: [defineArrayMember({ type: 'text' })],
    }),
    defineField({ name: 'profileImageUrl', title: 'Profile image URL (Cloudinary)', type: 'url' }),
    defineField({ name: 'profileImageAlt', title: 'Profile image alt text', type: 'string' }),

    // ── Values ──────────────────────────────────────────────────
    defineField({
      name: 'valueItems',
      title: 'Value keywords',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'valueDescriptions',
      title: 'Value descriptions (one per keyword)',
      type: 'array',
      of: [defineArrayMember({ type: 'text' })],
    }),

    // ── Ticker labels ────────────────────────────────────────────
    defineField({ name: 'tickerFeaturedWork', title: 'Ticker: Featured work label', type: 'string' }),
    defineField({ name: 'tickerBackground', title: 'Ticker: Background label', type: 'string' }),

    // ── Background section ───────────────────────────────────────
    defineField({ name: 'resumeHref', title: 'Resume URL', type: 'url' }),
    defineField({ name: 'linkedinHref', title: 'LinkedIn URL', type: 'url' }),

    // ── Footer ──────────────────────────────────────────────────
    defineField({ name: 'footerName', title: 'Footer: Name', type: 'string' }),
    defineField({ name: 'footerRole', title: 'Footer: Current role', type: 'string' }),
    defineField({ name: 'footerLocation', title: 'Footer: Location', type: 'string' }),
    defineField({ name: 'footerLinkedinLabel', title: 'Footer: LinkedIn label', type: 'string' }),
    defineField({ name: 'footerLinkedinHref', title: 'Footer: LinkedIn URL', type: 'url' }),
    defineField({ name: 'footerEmailLabel', title: 'Footer: Email label', type: 'string' }),
    defineField({ name: 'footerEmailHref', title: 'Footer: Email href (mailto:…)', type: 'string' }),
    defineField({ name: 'footerCopyright', title: 'Footer: Copyright line', type: 'string' }),
  ],

  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
});
