import { Hero } from '#/components/Hero'
import { LatestBlogPost } from '#/components/blog'
import { Experience } from '#/components/employment'
import { Projects } from '#/components/projects'
import { YoutubeIntro } from '#/components/youtube'

export const HomePage = () => {
  return (
    <div className="wrapper h-svh w-svw overflow-y-auto md:flex md:flex-row md:overflow-y-hidden">
      <div className="h-[100svh] md:h-full md:flex-1">
        <Hero />
      </div>
      <div className="overflow-hidden md:flex-1 md:overflow-y-auto">
        <YoutubeIntro />
        <LatestBlogPost />
        <Experience />
        <Projects />
      </div>
    </div>
  )
}
