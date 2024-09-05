import { ReactNode } from 'react'
import { cn } from '#/utils/cn'

export type DisplayCardDetailProps = {
  children: ReactNode
  className?: string
}

export const DisplayCardDetail = ({
  children,
  className,
}: DisplayCardDetailProps) => {
  return (
    <p
      className={cn(
        'text-xs text-brand-accent-lightest md:text-xs 3xl:text-base',
        className
      )}
    >
      {children}
    </p>
  )
}
