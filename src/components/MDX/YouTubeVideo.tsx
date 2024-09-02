import { YouTubeEmbed } from '@next/third-parties/google'

export type YouTubeVideoProps = {
  id: string
}

export const YouTubeVideo = ({ id }: YouTubeVideoProps) => {
  return (
    <>
      <YouTubeEmbed
        videoid={id}
        params="controls=0"
        style="box-shadow: 0px 0px 12px 0px rgba(255,255,255,0.5);width: 100%;height: auto"
      />
    </>
  )
}
