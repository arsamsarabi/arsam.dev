import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { Footer } from '#/components/Footer'

export default function Blog() {
  return (
    <>
      <main className="flex-1">
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
      <Footer />
    </>
  )
}
