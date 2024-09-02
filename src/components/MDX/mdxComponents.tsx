import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { Code } from './Code'
import { MDXImage, type MDXImageProps } from './MDXImage'
import { YouTubeVideo, type YouTubeVideoProps } from './YouTubeVideo'

export const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  p: (props) => <p className="my-4 first:mt-0" {...props} />,
  Code: ({ children }) => <Code>{children}</Code>,
  YouTubeVideo: (props: YouTubeVideoProps) => <YouTubeVideo {...props} />,
  MDXImage: (props: MDXImageProps) => <MDXImage {...props} />,
}
