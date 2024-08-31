import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'

export default function Blog() {
  console.group(
    '%callPosts',
    'background-color: #ca3b78; color: #fff9ff; padding: 6px 24px; font-size: 18px; border-radius: 12px'
  )
  console.log(allPosts)
  console.groupEnd()
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
