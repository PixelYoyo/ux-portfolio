import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'text', title: 'Quote text', type: 'text', rows: 3, validation: (r) => r.required() }),
    defineField({ name: 'name', title: 'Author name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Author role / title', type: 'string' }),
    defineField({ name: 'order', title: 'Display order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role' },
  },
});
