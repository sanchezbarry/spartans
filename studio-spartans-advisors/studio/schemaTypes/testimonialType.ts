import {defineType, defineField} from 'sanity'

const ADVISOR_OPTIONS = [
  {title: 'Dovanson Quah', value: 'dovanson-quah'},
  {title: 'Marcus Tan', value: 'marcus-tan'},
  {title: 'Priya Krishnan', value: 'priya-krishnan'},
  {title: 'Jason Lim', value: 'jason-lim'},
  {title: 'Aisha Rahman', value: 'aisha-rahman'},
  {title: 'Kevin Chen', value: 'kevin-chen'},
  {title: 'Sophie Ng', value: 'sophie-ng'},
]

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'advisorSlug',
      title: 'Advisor',
      type: 'string',
      options: {
        list: ADVISOR_OPTIONS,
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'clientTitle',
      title: 'Client Job Title / Occupation',
      type: 'string',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Short headline for the testimonial',
      validation: (Rule) => Rule.max(100),
    }),

    defineField({
      name: 'quote',
      title: 'Testimonial',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'rating',
      title: 'Rating (1–5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5).integer(),
    }),

    defineField({
      name: 'photo',
      title: 'Client Photo',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: 'Only approved testimonials are shown publicly',
      initialValue: false,
    }),

    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],

  orderings: [
    {
      title: 'Newest First',
      name: 'submittedAtDesc',
      by: [{field: 'submittedAt', direction: 'desc'}],
    },
  ],

  preview: {
    select: {
      title: 'clientName',
      subtitle: 'advisorSlug',
      description: 'quote',
    },
    prepare({title, subtitle, description}) {
      const advisorLabel: Record<string, string> = {
        'dovanson-quah': 'Dovanson Quah',
        'marcus-tan': 'Marcus Tan',
        'priya-krishnan': 'Priya Krishnan',
        'jason-lim': 'Jason Lim',
        'aisha-rahman': 'Aisha Rahman',
        'kevin-chen': 'Kevin Chen',
        'sophie-ng': 'Sophie Ng',
      }
      return {
        title,
        subtitle: subtitle ? `For ${advisorLabel[subtitle] ?? subtitle}` : '',
        description,
      }
    },
  },
})
