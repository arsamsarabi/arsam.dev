import Image from 'next/image'
import { cn } from '#/utils/cn'
import { PartialRecord } from '#/utils/types'

export type ClassNamesElements = 'container' | 'image'

export type AppImageProps = {
  width?: string
  height?: string
  alt: string
  src: string
  classNames?: PartialRecord<ClassNamesElements, string>
}

export const AppImage = ({
  width = '100%',
  height = 'auto',
  classNames,
  ...props
}: AppImageProps) => (
  <div className={cn(classNames?.container)}>
    <Image
      className={cn('rounded-md', classNames?.image)}
      sizes="100vw"
      style={{
        width,
        height,
      }}
      width={500}
      height={300}
      {...props}
    />
  </div>
)
