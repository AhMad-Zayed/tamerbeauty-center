import type { Block } from 'payload'

export const AcademyGrid: Block = {
  slug: 'academyGrid',
  interfaceName: 'AcademyGridBlock',
  labels: {
    singular: 'Academy Grid',
    plural: 'Academy Grids',
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'courses',
      type: 'array',
      label: 'Courses',
      fields: [
        {
          name: 'category',
          type: 'text',
          label: 'Category (e.g. برنامج مهني)',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Course Title',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon Name (lucide-react, e.g. Scissors, Wind, LayoutGrid)',
          required: true,
        },
        {
          name: 'special',
          type: 'checkbox',
          label: 'Highlight Course (Neon green background)',
          defaultValue: false,
        }
      ]
    }
  ],
}
