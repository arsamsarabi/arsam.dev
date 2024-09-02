import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'

export const AllPostsPage = () => {
  return (
    <main className="flex-1">
      {allPosts.map((p) => {
        return (
          <div key={p.slug}>
            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
          </div>
        )
      })}
    </main>
  )
}
