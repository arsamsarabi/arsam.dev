import { LatestBlogPost } from '#/components/blog/LatestBlogPost'
import { Experience } from '#/components/employment/Experience'
import { Hero } from '#/components/hero'
import { YoutubeIntro } from '#/components/youtube'

export default function Home() {
  return (
    <div className="wrapper flex h-svh w-svw">
      <div className="h-full flex-1">
        <Hero />
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="h-[85vh] bg-brand-primary-darkest text-brand-light">
          <YoutubeIntro />
        </div>
        <div className="h-[85vh] bg-brand-primary text-brand-light">
          <LatestBlogPost />
        </div>
        <div className="h-[85vh] bg-brand-primary-lightest text-brand-light">
          <Experience />
        </div>
      </div>
    </div>
  )
}
