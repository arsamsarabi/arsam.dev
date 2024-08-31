'use client'

import { useInView } from 'framer-motion'
import { CSSProperties, type PropsWithChildren, useRef } from 'react'
import { cn } from '#/utils/cn'

export type AnimateInViewProps = PropsWithChildren<{
  className?: string
  from?: 'top' | 'right' | 'bottom' | 'left'
  style?: CSSProperties
  transition?: string
}>

export const AnimateInView = ({
  children,
  className,
  from = 'top',
  transition,
  style,
}: AnimateInViewProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const translateMap = {
    top: 'translateY(-100px)',
    right: 'translateX(100px)',
    bottom: 'translateY(100px)',
    left: 'translateX(-100px)',
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        transform: isInView ? 'none' : translateMap[from],
        opacity: isInView ? 1 : 0,
        transition: transition ?? 'all 0.5s ease-out 0.125s',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
