import '#/styles/one-dark.css'
import type { ReactNode } from 'react'
import { Header } from '#/components/Header'

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[100%] flex-col items-start justify-start">
      <Header className="w-screen" />

      <div className="flex w-screen flex-1 flex-col items-center justify-start overflow-y-auto">
        <div className="container-max-w flex h-full flex-col">{children}</div>
      </div>
    </div>
  )
}
