import type { Block } from 'payload'

export const OffersBlock: Block = {
  slug: 'offersBlock',
  interfaceName: 'OffersBlock',
  labels: {
    singular: 'Offers Slider',
    plural: 'Offers Sliders',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'عروض محدودة الوقت',
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Subheading',
    },
    {
      name: 'offers',
      type: 'relationship',
      relationTo: 'offers',
      hasMany: true,
      required: true,
      admin: {
        description: 'Select the active offers to display.',
      },
    },
  ],
}
