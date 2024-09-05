import { ReactNode } from 'react'
import { cn } from '#/utils/cn'

export type DisplayCardTitleProps = {
  children: ReactNode
  className?: string
}

export const DisplayCardTitle = ({
  children,
  className,
}: DisplayCardTitleProps) => {
  return (
    <p
      className={cn(
        'font-heading text-3xl text-brand-primary-lightest sm:text-2xl xl:text-2xl 3xl:text-3xl',
        className
      )}
    >
      {children}
    </p>
  )
}
