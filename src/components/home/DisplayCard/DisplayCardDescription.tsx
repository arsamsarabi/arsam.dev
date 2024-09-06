import { ReactNode } from 'react'
import { cn } from '#/utils/cn'

export type DisplayCardDescriptionProps = {
  children: ReactNode
  className?: string
}

export const DisplayCardDescription = ({
  children,
  className,
}: DisplayCardDescriptionProps) => {
  return (
    <p
      className={cn(
        'mb-2 mt-auto text-gray-200 md:text-base 3xl:text-xl',
        className
      )}
    >
      {children}
    </p>
  )
}
