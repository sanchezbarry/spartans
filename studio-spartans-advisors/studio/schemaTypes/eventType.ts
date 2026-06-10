import {defineType, defineField} from 'sanity'

const EVENT_TYPES = [
  {title: 'Coffee Session', value: 'coffee-session'},
  {title: 'Workshop', value: 'workshop'},
  {title: 'Webinar', value: 'webinar'},
  {title: 'Talk', value: 'talk'},
  {title: 'Seminar', value: 'seminar'},
  {title: 'Networking', value: 'networking'},
]

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'e.g. 2:00 PM – 4:30 PM',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. The Coffee Academics, Tampines Mall  or  Online (Zoom)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Event Type',
      type: 'string',
      options: {
        list: EVENT_TYPES,
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'isFree',
      title: 'Free Event',
      type: 'boolean',
      initialValue: true,
      description: 'Displays a "Free" or "Paid" pill on the card',
    }),
    defineField({
      name: 'registerUrl',
      title: 'Register URL',
      type: 'url',
      description: 'Optional. If provided, a Register button appears on the card.',
    }),
  ],

  orderings: [
    {
      title: 'Date (Soonest First)',
      name: 'dateAsc',
      by: [{field: 'date', direction: 'asc'}],
    },
    {
      title: 'Date (Latest First)',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
    },
    prepare({title, subtitle}: {title: string; subtitle?: string}) {
      return {
        title,
        subtitle: subtitle
          ? new Date(subtitle + 'T00:00:00').toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : 'No date set',
      }
    },
  },
})
