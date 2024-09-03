import type { PropsWithChildren, ReactNode } from 'react'
import { cn } from '#/utils/cn'
import { PartialRecord } from '#/utils/types'

type ClassNamesElements = 'root' | 'header' | 'body' | 'content'

export type BlogWithSidebarProps = PropsWithChildren<{
  classNames?: PartialRecord<ClassNamesElements, 'string'>
  Header?: ReactNode
  Sidebar: ReactNode
}>

export const BlogWithSidebar = ({
  children,
  classNames,
  Header,
  Sidebar,
}: BlogWithSidebarProps) => {
  return (
    <section className={cn('px-4 sm:px-6 lg:px-0', classNames?.root)}>
      {Header && (
        <div
          className={cn(
            'flex flex-col items-start gap-4 py-4 md:flex-row md:items-center md:justify-between',
            classNames?.header
          )}
        >
          {Header}
        </div>
      )}

      <div
        className={cn(
          'flex flex-col-reverse gap-4 pb-6 lg:flex-row lg:gap-0',
          classNames?.body
        )}
      >
        {Sidebar}
        <div
          className={cn(
            'max-w-3xl border-b-2 border-brand-primary-darkest lg:w-8/12 lg:border-none lg:pl-4',
            classNames?.content
          )}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
