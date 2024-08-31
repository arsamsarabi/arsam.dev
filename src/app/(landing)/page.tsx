import { LatestBlogPost } from '#/components/blog'
import { Experience } from '#/components/employment'
import { Hero } from '#/components/hero'
import { Projects } from '#/components/projects'
import { YoutubeIntro } from '#/components/youtube'

export default function Home() {
  return (
    <div className="wrapper flex h-svh w-svw">
      <div className="h-full flex-1">
        <Hero />
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="h-[85vh] bg-brand-primary-darkest">
          <YoutubeIntro />
        </div>
        <div className="h-[85vh] bg-brand-primary">
          <LatestBlogPost />
        </div>
        <div className="h-[85vh] bg-brand-primary-lightest">
          <Experience />
        </div>
        <div className="h-[85vh] bg-gray-100">
          <Projects />
        </div>
      </div>
    </div>
  )
}
