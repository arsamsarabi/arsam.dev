import { YouTubeEmbed } from '@next/third-parties/google'
import { MiniProfile } from './MiniProfile'

type SidebarProps = {
  youtubeVideoId?: string
}

export const Sidebar = ({ youtubeVideoId }: SidebarProps) => {
  return (
    <aside className="w-full lg:w-4/12">
      {youtubeVideoId && (
        <div className="mb-4 overflow-hidden rounded-md">
          <YouTubeEmbed
            videoid={youtubeVideoId}
            params="controls=0"
            style="box-shadow: 0px 0px 12px 0px rgba(255,255,255,0.5);"
          />
        </div>
      )}
      <MiniProfile />
    </aside>
  )
}
