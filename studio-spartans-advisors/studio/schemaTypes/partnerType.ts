import { defineField, defineType } from 'sanity'

export const partnerType = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'offer',
      title: 'Offer Summary',
      description: 'Short line shown on the card, e.g. "Up to 10% Off"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo / Card Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'companyProfile',
      title: 'Company Profile',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'spartansMembersEnjoy',
      title: 'SPARTANS Members Enjoy',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Website', value: 'website' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'WhatsApp', value: 'whatsapp' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'TikTok', value: 'tiktok' },
                ],
              },
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
          ],
          preview: {
            select: { title: 'platform', subtitle: 'url' },
          },
        },
      ],
    }),
    defineField({
      name: 'termsAndConditions',
      title: 'Terms & Conditions',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: 'Sort Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'offer', media: 'logo' },
  },
})
