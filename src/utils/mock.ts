import { faker } from '@faker-js/faker'
import { Post } from '#/lib/types'

const { lorem, date, string } = faker

export const makeFakePost = (): Post => {
  return {
    slug: lorem.slug(),
    date: date.recent().toLocaleDateString(),
    title: lorem.words(),
    excerpt: lorem.paragraph(),
    wordCount: string.numeric({ length: { min: 3, max: 4 } }),
    minutes: string.numeric({ length: { min: 1, max: 2 } }),
    imageUrl: `https://picsum.photos/id/${string.numeric({ length: { min: 1, max: 3 } })}/200/300`,
    body: lorem.paragraphs(),
  }
}

export const makeFakePosts = (count?: number): Array<Post> => {
  return Array.from(new Array(3).fill(count ?? 3)).map(() => makeFakePost())
}
