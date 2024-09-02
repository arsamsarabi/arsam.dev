import Link from 'next/link'
import type { Post } from 'contentlayer/generated'

export type TagPageProps = {
  posts: Array<Post>
}

export const TagPage = ({ posts }: TagPageProps) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        )
      })}
    </div>
  )
}
