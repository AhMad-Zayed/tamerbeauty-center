import type { Block } from 'payload'

export const StoreShowcase: Block = {
  slug: 'storeShowcase',
  interfaceName: 'StoreShowcaseBlock',
  labels: {
    singular: 'Store Showcase',
    plural: 'Store Showcases',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'متجر تامر.',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'giftTitle',
      type: 'text',
      label: 'Gift Section Title',
      defaultValue: 'قسم الهدايا',
    },
    {
      name: 'giftDesc',
      type: 'text',
      label: 'Gift Section Description',
    },
    {
      name: 'categories',
      type: 'array',
      label: 'Store Categories',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Category Name',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Category Background Image',
          required: true,
        }
      ]
    }
  ],
}
