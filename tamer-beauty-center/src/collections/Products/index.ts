import type { CollectionConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    group: 'Store',
    defaultColumns: ['name', 'category', 'price', 'isFeatured'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Product Name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'store-categories',
      required: true,
      label: 'Category',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      label: 'Price',
      admin: {
        description: 'e.g., 245.00',
      },
    },
    {
      name: 'currency',
      type: 'text',
      defaultValue: 'ر.س',
      required: true,
      label: 'Currency',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Product Image',
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Is Featured',
      admin: {
        description: 'Check to feature this product prominently on the store page.',
      },
    },
  ],
}
