'use client'

import { useInView } from 'framer-motion'
import { CSSProperties, type PropsWithChildren, useRef } from 'react'
import { cn } from '#/utils/cn'

export type FadeInViewProps = PropsWithChildren<{
  className?: string
  style?: CSSProperties
  transition?: string
}>

export const FadeInView = ({
  children,
  className,
  transition,
  style,
}: FadeInViewProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isInView ? 1 : 0,
        transition: transition ?? 'all 0.5s ease-out 0.125s',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
