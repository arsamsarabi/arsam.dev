import type { PropsWithChildren } from 'react'

export const PageTitle = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="w-full border-b-2 border-brand-primary-dark pb-2 text-3xl text-brand-primary-dark">
      {children}
    </h1>
  )
}
