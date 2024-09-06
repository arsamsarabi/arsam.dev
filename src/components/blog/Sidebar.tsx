import { ReactNode } from 'react'
import { cn } from '#/utils/cn'

export type SidebarProps = {
  children: ReactNode
  className?: string
}

export const Sidebar = ({ children, className }: SidebarProps) => {
  return (
    <aside
      className={cn(
        'flex w-full flex-col gap-4 md:gap-6 lg:w-4/12 2xl:gap-8',
        className
      )}
    >
      {children}
    </aside>
  )
}
