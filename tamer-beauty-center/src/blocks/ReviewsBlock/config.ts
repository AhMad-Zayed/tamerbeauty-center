import type { Block } from 'payload'

export const ReviewsBlock: Block = {
  slug: 'reviewsBlock',
  interfaceName: 'ReviewsBlockBlock',
  labels: {
    singular: 'Reviews Block',
    plural: 'Reviews Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'ثقة تتحدث.',
    },
    {
      name: 'reviews',
      type: 'relationship',
      relationTo: 'reviews',
      hasMany: true,
      required: true,
      admin: {
        description: 'Select the reviews to showcase.',
      },
    },
  ],
}
