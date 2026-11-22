import {defineField, defineType} from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'parent',
      title: 'Parent gallery',
      description:
        'Leave empty for a top-level gallery or category. Set to nest this gallery under another (one level only), e.g. Utah under Places.',
      type: 'reference',
      to: [{type: 'gallery'}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      description:
        'Card image shown on the gallery index and category pages. Falls back to the first photo (or a child gallery’s first photo for categories) when left empty.',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'photographs',
      title: 'Photographs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'photograph'}],
        },
      ],
    }),
  ],
})
