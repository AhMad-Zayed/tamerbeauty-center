import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'category', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ data, value }) => {
            if (data && data.title && !value) {
              return data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'إزالة الشعر بالليزر', value: 'laser' },
        { label: 'علاجات البشرة', value: 'skin' },
        { label: 'خدمات الشعر', value: 'hair' },
        { label: 'الحجامة والوشم', value: 'other' },
      ],
    },
    {
      name: 'icon',
      type: 'text',
      defaultValue: 'Activity',
      admin: {
        description: 'Lucide React icon name (e.g., Activity, Smile, Scissors, Gem)',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Displayed on the home page service card.',
      },
    },
    {
      name: 'fullDescription',
      type: 'richText',
      admin: {
        description: 'Detailed description for the service landing page.',
      },
    },
    {
      name: 'basePrice',
      type: 'text',
      admin: {
        description: 'Starting price (e.g. 200, or "تبدأ من 50")',
      },
    },
    {
      name: 'currency',
      type: 'text',
      defaultValue: 'شيكل',
    },
    {
      name: 'packages',
      type: 'array',
      admin: {
        description: 'Optional sub-packages or specific parts (e.g. Full body, Half body)',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
