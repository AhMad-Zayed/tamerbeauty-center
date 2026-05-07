import type { Block } from 'payload'

export const GroomJourney: Block = {
  slug: 'groomJourney',
  interfaceName: 'GroomJourneyBlock',
  labels: {
    singular: 'Groom Journey',
    plural: 'Groom Journeys',
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle (e.g. — خدمة العريس VIP)',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'رحلة التغيير',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description text',
    },
    {
      name: 'checklist',
      type: 'array',
      label: 'Checklist Items',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
        }
      ]
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Call to Action Button Text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
      required: true,
    }
  ],
}
