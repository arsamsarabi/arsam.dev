import { ReactNode } from 'react'

export const BlogContentWrapper = ({ children }: { children: ReactNode }) => {
  return <section className="px-4 sm:px-6 lg:px-0">{children}</section>
}
