import { YouTubeEmbed } from '@next/third-parties/google'
import { Alert } from '#/components/Alert'
import { MiniProfile } from './MiniProfile'

type SidebarProps = {
  youtubeVideoId?: string
}

export const Sidebar = ({ youtubeVideoId }: SidebarProps) => {
  return (
    <aside className="w-full lg:w-4/12">
      {youtubeVideoId && (
        <div className="flex flex-col gap-4">
          <Alert
            icon="youtube"
            title="Rather watch the video?"
            description="If you want to listen to me walk you through this, have a look at my video version of this on my YouTube channel."
            variant="primary"
          />
          <div className="mb-4 overflow-hidden rounded-md">
            <YouTubeEmbed
              videoid={youtubeVideoId}
              params="controls=0"
              style="box-shadow: 0px 0px 12px 0px rgba(255,255,255,0.5);"
            />
          </div>
        </div>
      )}
      <MiniProfile />
    </aside>
  )
}
