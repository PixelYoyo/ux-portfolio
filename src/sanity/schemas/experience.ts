import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({ name: 'company', title: 'Company', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'logoUrl', title: 'Logo URL', type: 'url' }),
    defineField({ name: 'logoAlt', title: 'Logo alt text', type: 'string' }),
    defineField({ name: 'logoWidth', title: 'Logo width (px)', type: 'number' }),
    defineField({ name: 'logoHeight', title: 'Logo height (px)', type: 'number' }),
    defineField({ name: 'title', title: 'Job title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'period', title: 'Period (e.g. 2022–Present · Sydney)', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'order', title: 'Display order', type: 'number' }),
  ],
  preview: {
    select: { title: 'company', subtitle: 'title' },
  },
});
