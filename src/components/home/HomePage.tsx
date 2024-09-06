'use client'

import { useSendPageLoadedEvent } from '#/hooks/useSendPageLoadedEvent'
import { Hero } from './Hero'
import { BlogPostSection } from './blog-preview'
import { EmploymentSection } from './employment'
import { ProjectsSection } from './projects'
import { YoutubeSection } from './youtube'

export const HomePage = () => {
  useSendPageLoadedEvent({ page: 'Home page' })

  return (
    <div className="wrapper h-svh w-svw overflow-y-auto md:flex md:flex-row md:overflow-y-hidden">
      <div className="h-[100svh] md:h-full md:w-1/2">
        <Hero />
      </div>
      <div className="overflow-hidden md:w-1/2 md:overflow-y-auto">
        <YoutubeSection />
        <BlogPostSection />
        <EmploymentSection />
        <ProjectsSection />
      </div>
    </div>
  )
}
