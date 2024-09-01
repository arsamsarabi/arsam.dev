import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'

export default function Blog() {
  return (
    <main>
      <h1>Blog!</h1>
      <h2>All posts</h2>
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
