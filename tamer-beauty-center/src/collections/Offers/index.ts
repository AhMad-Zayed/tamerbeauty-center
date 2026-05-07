import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

export const Offers: CollectionConfig = {
  slug: 'offers',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'expirationDate', 'updatedAt'],
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
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'startDate',
      type: 'date',
    },
    {
      name: 'expirationDate',
      type: 'date',
      required: true,
    },
    {
      name: 'newPrice',
      type: 'number',
      required: true,
    },
    {
      name: 'oldPrice',
      type: 'number',
    },
    {
      name: 'currency',
      type: 'text',
      defaultValue: 'شيكل',
    },
    {
      name: 'limitedTag',
      type: 'text',
      defaultValue: 'عرض محدود',
    },
    {
      name: 'relatedService',
      type: 'relationship',
      relationTo: 'services',
      admin: {
        description: 'Link this offer to a specific service landing page.',
      },
    },
  ],
}
