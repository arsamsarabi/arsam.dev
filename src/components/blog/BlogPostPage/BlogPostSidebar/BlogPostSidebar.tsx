// import { YouTubeEmbed } from '@next/third-parties/google'
import { Alert } from '#/components/Alert'
import { YouTubeComingSoon } from '#/components/YouTubeComingSoon'
import { MiniProfile } from '../../MiniProfile'

type SidebarProps = {
  youtubeVideoId?: string
}

export const BlogPostSidebar = ({ youtubeVideoId }: SidebarProps) => {
  return (
    <aside className="w-full lg:w-4/12">
      {youtubeVideoId && (
        <div className="flex flex-col gap-4">
          <Alert
            icon="youtube"
            title="This article also has a video coming soon!"
            description="If you want to listen to me walk you through this, have a look at my video version of this on my YouTube channel in a few days."
            variant="primary"
          />
          <div className="mb-4 overflow-hidden rounded-md shadow-md">
            {/* <YouTubeEmbed videoid={youtubeVideoId} params="controls=0" /> */}
            <YouTubeComingSoon className="h-[250px]" />
          </div>
        </div>
      )}
      <MiniProfile />
    </aside>
  )
}
