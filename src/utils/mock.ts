import { faker } from '@faker-js/faker'
import { Post } from 'contentlayer/generated'

const { lorem, date, string } = faker

export const makeFakePost = (): Post => {
  return {
    _id: string.uuid(),
    _raw: {
      sourceFilePath: '',
      sourceFileName: '',
      sourceFileDir: '',
      contentType: 'mdx',
      flattenedPath: '',
    },
    type: 'Post',
    body: {
      raw: '',
      code: '',
    },
    slug: lorem.slug(),
    date: date.recent().toLocaleDateString(),
    title: lorem.words(),
    excerpt: lorem.paragraph(),
    wordCount: Number(string.numeric({ length: { min: 3, max: 4 } })),
    readingTime: string.numeric({ length: { min: 1, max: 2 } }),
    cover: `https://picsum.photos/id/${string.numeric({ length: { min: 1, max: 3 } })}/600`,
  }
}

export const makeFakePosts = (count?: number): Array<Post> => {
  return Array.from(new Array(3).fill(count ?? 3)).map(() => makeFakePost())
}
