import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import readingTime from 'reading-time'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeExternalLinks from 'rehype-external-links'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    date: { type: 'string', required: true },
    title: { type: 'string', required: true },
    excerpt: { type: 'string', required: true },
    cover: { type: 'string', required: true },
    thumbnail: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    video_id: { type: 'string', required: false },
    short_id: { type: 'string', required: false },
    comingSoon: { type: 'boolean', required: false },
  },
  computedFields: {
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
    wordCount: {
      type: 'string',
      resolve: (doc) => `${doc.body.raw.split(/\s+/gu).length} words`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [rehypePrism, { showLineNumbers: true, defaultLanguage: 'typescript' }],
      rehypeAccessibleEmojis,
      [rehypeExternalLinks, { rel: ['nofollow'], target: ['_blank'] }],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})
