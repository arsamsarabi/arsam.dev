'use client'

import { sendGAEvent } from '@next/third-parties/google'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export const BlogLink = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<'a'>
>(({ href, ...rest }, ref) => {
  return (
    <a
      ref={ref}
      onClick={() =>
        sendGAEvent({
          event: 'Block link click',
          link: href,
        })
      }
      className="text-brand-accent"
      href={href}
      {...rest}
    />
  )
})

BlogLink.displayName = 'BlogLink'
