import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'

type Props = {
  params: { tag: string }
}

export default async function TagsPage({ params }: Props) {
  const posts = allPosts.filter((post) =>
    post.tags.includes(params.tag.replaceAll('-', ' '))
  )

  if (!posts?.length) {
    return (
      <div>
        <p>Nothing found</p>
      </div>
    )
  }

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
