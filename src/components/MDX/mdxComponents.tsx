import type { MDXComponents } from 'mdx/types'
import { Alert, AlertProps } from '#/components/Alert'
import { Code } from './Code'
import { MDXImage, type MDXImageProps } from './MDXImage'
import { Pre } from './Pre'
import { YouTubeVideo, type YouTubeVideoProps } from './YouTubeVideo'

export const mdxComponents: MDXComponents = {
  a: (props) => <a className="text-brand-accent" {...props} />,
  p: (props) => (
    <p className="my-4 text-brand-primary-darkest first:mt-0" {...props} />
  ),
  h1: (props) => (
    <h1
      className="my-6 text-5xl text-brand-primary-dark first:mt-0"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="my-6 text-4xl text-brand-primary-dark first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="my-6 text-3xl text-brand-primary-dark first:mt-0"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="my-6 text-2xl text-brand-primary-dark first:mt-0"
      {...props}
    />
  ),
  h5: (props) => (
    <h5
      className="my-6 text-xl text-brand-primary-dark first:mt-0"
      {...props}
    />
  ),
  h6: (props) => (
    <h6
      className="my-6 text-lg text-brand-primary-dark first:mt-0"
      {...props}
    />
  ),
  pre: (props) => <Pre {...props} />,
  Code: ({ children }) => <Code>{children}</Code>,
  YouTubeVideo: (props: YouTubeVideoProps) => <YouTubeVideo {...props} />,
  MDXImage: (props: MDXImageProps) => <MDXImage {...props} />,
  Alert: (props: AlertProps) => <Alert {...props} />,
}
