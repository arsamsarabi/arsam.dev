import { Hero } from './Hero'
import { BlogPostSection } from './blog-preview'
import { EmploymentSection } from './employment'
import { ProjectsSection } from './projects'
import { YoutubeSection } from './youtube'

export const HomePage = () => {
  return (
    <div className="wrapper h-svh w-svw overflow-y-auto md:flex md:flex-row md:overflow-y-hidden">
      <div className="h-[100svh] md:h-full md:flex-1">
        <Hero />
      </div>
      <div className="overflow-hidden md:flex-1 md:overflow-y-auto">
        <YoutubeSection />
        <BlogPostSection />
        <EmploymentSection />
        <ProjectsSection />
      </div>
    </div>
  )
}
