import Image from 'next/image'
import { cn } from '#/utils/cn'

export type AppImageProps = {
  width: string
  height: string
  alt: string
  src: string
  containerCn?: string
  imageCn?: string
}

export const AppImage = ({
  width,
  height,
  containerCn,
  imageCn,
  ...props
}: AppImageProps) => (
  <div
    className={cn('relative', containerCn)}
    style={{
      width,
      height,
    }}
  >
    <Image fill className={cn('aspect-auto rounded-md', imageCn)} {...props} />
  </div>
)
