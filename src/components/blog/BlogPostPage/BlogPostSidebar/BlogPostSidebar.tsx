// import { YouTubeEmbed } from '@next/third-parties/google'
import { Alert } from '#/components/Alert'
import { Battery } from '#/components/Battery'
import { YouTubeComingSoon } from '#/components/home/youtube/YouTubeComingSoon'
import { MiniProfile } from '../../MiniProfile'
import { Sidebar } from '../../Sidebar'

type SidebarProps = {
  youtubeVideoId?: string
}

export const BlogPostSidebar = ({ youtubeVideoId }: SidebarProps) => {
  return (
    <Sidebar>
      {youtubeVideoId && (
        <div className="flex flex-col gap-4 md:gap-6 2xl:gap-8">
          <Alert
            icon="youtube"
            title="This article also has a video coming soon!"
            description="If you want to listen to me walk you through this, have a look at my video version of this on my YouTube channel in a few days."
            variant="primary"
          />
          <div className="overflow-hidden rounded-md shadow-md">
            {/* <YouTubeEmbed videoid={youtubeVideoId} params="controls=0" /> */}
            <YouTubeComingSoon className="" />
          </div>
        </div>
      )}
      <MiniProfile />
      <Battery />
    </Sidebar>
  )
}
