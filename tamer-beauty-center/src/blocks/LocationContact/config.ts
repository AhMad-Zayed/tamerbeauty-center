import type { Block } from 'payload'

export const LocationContact: Block = {
  slug: 'locationContact',
  interfaceName: 'LocationContactBlock',
  labels: {
    singular: 'Location & Contact',
    plural: 'Location & Contact Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'زورونا.',
    },
    {
      name: 'locationTitle',
      type: 'text',
      defaultValue: 'الموقع',
    },
    {
      name: 'locationText',
      type: 'text',
      defaultValue: 'فلسطين، المنطقة الرئيسية',
    },
    {
      name: 'contactTitle',
      type: 'text',
      defaultValue: 'اتصل',
    },
    {
      name: 'contactText',
      type: 'text',
      defaultValue: '052-7815671 | 059-8067672',
    },
    {
      name: 'hoursTitle',
      type: 'text',
      defaultValue: 'ساعات العمل',
    },
    {
      name: 'weekdaysText',
      type: 'text',
      defaultValue: 'السبت - الخميس',
    },
    {
      name: 'weekdaysHours',
      type: 'text',
      defaultValue: '10:00 ص - 9:00 م',
    },
    {
      name: 'fridayText',
      type: 'text',
      defaultValue: 'الجمعة',
    },
    {
      name: 'fridayHours',
      type: 'text',
      defaultValue: 'مغلق',
    },
    {
      name: 'mapEmbedUrl',
      type: 'text',
      label: 'Google Maps Embed URL',
      required: true,
    }
  ],
}
