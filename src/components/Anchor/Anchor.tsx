import Link, { type LinkProps } from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '#/utils/cn'

export type AnchorProps = LinkProps & {
  external?: boolean
  children: ReactNode
  className?: string
}

export const Anchor = ({
  className,
  external = false,
  ...props
}: AnchorProps) => {
  if (external) {
    return (
      <a
        className={cn(
          'text-brand-accent decoration-brand-accent transition-all hover:underline',
          className
        )}
        href={props.href.toString()}
        target="_blank"
        rel="noreferrer"
      >
        {props.children}
      </a>
    )
  }

  return (
    <Link
      className={cn(
        'text-brand-accent decoration-brand-accent transition-all hover:underline',
        className
      )}
      {...props}
    />
  )
}
