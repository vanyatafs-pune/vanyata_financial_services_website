import { defineType, defineField, defineArrayMember } from 'sanity'

// A single rich-text block: paragraphs, headings, quotes, lists, bold/italic, links.
const blockMember = defineArrayMember({
  type: 'block',
  styles: [
    { title: 'Paragraph', value: 'normal' },
    { title: 'Heading 1', value: 'h1' },
    { title: 'Heading 2', value: 'h2' },
    { title: 'Heading 3', value: 'h3' },
    { title: 'Quote', value: 'blockquote' },
  ],
  lists: [
    { title: 'Bullet list', value: 'bullet' },
    { title: 'Numbered list', value: 'number' },
  ],
  marks: {
    decorators: [
      { title: 'Bold', value: 'strong' },
      { title: 'Italic', value: 'em' },
    ],
    annotations: [
      defineArrayMember({
        name: 'link',
        type: 'object',
        title: 'Link',
        fields: [
          defineField({
            name: 'href',
            type: 'url',
            title: 'URL',
            validation: (Rule) =>
              Rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
          }),
          defineField({
            name: 'blank',
            type: 'boolean',
            title: 'Open in new tab',
            initialValue: true,
          }),
        ],
      }),
    ],
  },
})

// A full-width image placed between paragraphs, with alt text and an optional caption.
const imageMember = defineArrayMember({
  type: 'image',
  title: 'Image',
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alt text',
      description: 'Describe the image for accessibility and SEO.',
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Optional caption shown beneath the image.',
    }),
  ],
})

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      description: 'The URL for this post. Click “Generate” to create it from the title.',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published date',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Describe the image for accessibility and SEO.',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Short summary shown on blog listing cards and previews.',
    }),
    defineField({
      name: 'body',
      title: 'Article body',
      type: 'array',
      group: 'content',
      of: [blockMember, imageMember],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      group: 'seo',
      description: 'Optional. Used as the browser/search-result title. Falls back to the post title.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'Optional. ~160 characters for search engines. Falls back to the excerpt.',
      validation: (Rule) =>
        Rule.max(160).warning('Keep this under ~160 characters for best SEO results.'),
    }),
  ],
  orderings: [
    {
      title: 'Published date, newest',
      name: 'publishedDateDesc',
      by: [{ field: 'publishedDate', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', author: 'author', media: 'coverImage', publishedDate: 'publishedDate' },
    prepare({ title, author, media, publishedDate }) {
      const date = publishedDate ? new Date(publishedDate).toLocaleDateString() : 'No date'
      return { title, media, subtitle: [author, date].filter(Boolean).join(' · ') }
    },
  },
})
