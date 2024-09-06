import type { PropsWithChildren, ReactNode } from 'react'
import { cn } from '#/utils/cn'
import { PartialRecord } from '#/utils/types'

type ClassNamesElements = 'root' | 'header' | 'body' | 'content'

export type BlogWithSidebarProps = PropsWithChildren<{
  classNames?: PartialRecord<ClassNamesElements, 'string'>
  Header: ReactNode
  Sidebar: ReactNode
}>

export const BlogWithSidebar = ({
  children,
  classNames,
  Header,
  Sidebar,
}: BlogWithSidebarProps) => {
  return (
    <section
      className={cn(
        'flex flex-col gap-4 px-8 md:gap-6 lg:px-0 2xl:gap-8',
        classNames?.root
      )}
    >
      <div
        className={cn(
          'flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between',
          classNames?.header
        )}
      >
        {Header}
      </div>

      <div
        className={cn(
          'flex flex-col-reverse gap-4 pb-6 md:gap-6 lg:flex-row 2xl:gap-8 2xl:pb-8',
          classNames?.body
        )}
      >
        {Sidebar}
        <div
          className={cn(
            'w-full border-b-2 border-brand-primary-darkest pb-4 md:pb-6 lg:w-8/12 lg:border-none lg:pb-0',
            classNames?.content
          )}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
