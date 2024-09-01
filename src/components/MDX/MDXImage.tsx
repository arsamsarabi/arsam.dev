import Image from 'next/image'

export type MDXImageProps = {
  width: string
  height: string
  alt: string
  src: string
}

export const MDXImage = ({ width, height, ...props }: MDXImageProps) => (
  <div
    className="relative"
    style={{
      width,
      height,
    }}
  >
    <Image fill className="aspect-auto rounded-sm" {...props} />
  </div>
)
