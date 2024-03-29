import type { CollectionConfig } from 'payload/types'

import path from 'path'

export const Media: CollectionConfig = {

  access: {
    create: () => true,
    delete: () => true,
    read: () => true,
    update: () => true,
  },
  admin: {
    description: 'Creating, updating, and deleting media is disabled for this demo.',
  },
  fields: [
    {
      name: 'alt',
      required: true,
      type: 'text',
    },
  ],
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    
    mimeTypes: ['image/*'],
  },
}