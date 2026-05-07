import type { Block } from 'payload'

export const ServicesCatalog: Block = {
  slug: 'servicesCatalog',
  interfaceName: 'ServicesCatalogBlock',
  labels: {
    singular: 'Services Catalog',
    plural: 'Services Catalogs',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'قائمة الخدمات الكاملة',
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Subheading',
      defaultValue: 'دليل الأسعار الكامل',
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      required: true,
      admin: {
        description: 'Select the services to feature in the catalog.',
      },
    },
  ],
}
