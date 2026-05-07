import type { Block } from 'payload'

export const WhyChooseUs: Block = {
  slug: 'whyChooseUs',
  interfaceName: 'WhyChooseUsBlock',
  labels: {
    singular: 'Why Choose Us',
    plural: 'Why Choose Us Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      required: true,
      defaultValue: 'لماذا تامر بيوتي سنتر؟',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features / Benefits',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          defaultValue: 'CheckCircle2',
          admin: {
            description: 'Lucide Icon name (e.g. ShieldCheck, Sparkles, UserCheck)',
          },
        },
      ],
    },
  ],
}
